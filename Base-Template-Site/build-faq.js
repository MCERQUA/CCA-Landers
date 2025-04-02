const fs = require('fs');
const path = require('path');

// Function to parse FAQ markdown
function parseFaqMarkdown(markdown) {
  const lines = markdown.split('\n');
  let title = '';
  const questions = [];
  let currentQuestion = null;
  let currentAnswer = '';
  
  for (const line of lines) {
    if (line.startsWith('# ')) {
      title = line.substring(2).trim();
    } else if (line.startsWith('## ')) {
      if (currentQuestion) {
        questions.push({
          question: currentQuestion,
          answer: currentAnswer.trim()
        });
      }
      currentQuestion = line.substring(3).trim();
      currentAnswer = '';
    } else if (currentQuestion) {
      if (line.trim() === '') {
        if (currentAnswer !== '') {
          currentAnswer += '\n\n';
        }
      } else {
        currentAnswer += line;
      }
    }
  }
  
  if (currentQuestion) {
    questions.push({
      question: currentQuestion,
      answer: currentAnswer.trim()
    });
  }
  
  return {
    title,
    questions
  };
}

// Function to generate HTML for FAQ items
function generateFaqHtml(faqData) {
  let html = `<h2 class="section-title">${faqData.title}</h2>
    
    <div style="max-width: 48rem; margin: 0 auto;">`;

  faqData.questions.forEach((item, index) => {
    const isLast = index === faqData.questions.length - 1;
    const style = isLast ? 'border-bottom: none; margin-bottom: 0; padding-bottom: 0;' : '';
    
    // Convert markdown paragraphs and lists to HTML
    const answerHtml = item.answer
      .split('\n\n')
      .map(p => {
        if (p.startsWith('- ')) {
          // Convert bullet points to HTML list
          const items = p.split('\n').map(i => i.substring(2));
          return `<ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0.5rem 0;">
            ${items.map(i => `<li>${i}</li>`).join('\n')}
          </ul>`;
        } else if (p.match(/^\d\./)) {
          // Convert numbered list to HTML
          const items = p.split('\n');
          return `<ol style="padding-left: 1.5rem; margin: 0.5rem 0;">
            ${items.map(i => `<li>${i.substring(i.indexOf('.') + 2)}</li>`).join('\n')}
          </ol>`;
        }
        return `<p style="margin: 0.5rem 0;">${p}</p>`;
      })
      .join('\n');
    
    html += `
        <div class="faq-item" style="${style}">
            <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">${item.question}</h3>
            ${answerHtml}
        </div>`;
  });

  html += `
    </div>`;
  
  return html;
}

// Function to update schema.json with FAQ data
function generateSchemaJson(faqData) {
  // Read the existing schema.json
  const schemaPath = path.join(__dirname, 'data', 'schema.json');
  const schemaJson = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
  
  // Find or create the FAQ schema
  const faqSchemaIndex = schemaJson.findIndex(item => item['@type'] === 'FAQPage');
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.questions.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };

  if (faqSchemaIndex !== -1) {
    // Update existing FAQ schema
    schemaJson[faqSchemaIndex] = faqSchema;
  } else {
    // Add new FAQ schema
    schemaJson.push(faqSchema);
  }
  
  return JSON.stringify(schemaJson, null, 2);
}

// Main execution
try {
  console.log('Starting FAQ build process...');

  // Read the FAQ markdown file
  const faqPath = path.join(__dirname, 'data', 'faq.md');
  console.log(`Reading FAQ from ${faqPath}`);
  const faqMarkdown = fs.readFileSync(faqPath, 'utf8');

  // Parse the markdown
  const faqData = parseFaqMarkdown(faqMarkdown);
  console.log(`Parsed ${faqData.questions.length} FAQ items`);

  // Generate the FAQ HTML
  const faqHtml = generateFaqHtml(faqData);

  // Generate the updated schema JSON
  const schemaJson = generateSchemaJson(faqData);

  // Read the index.html file
  const indexPath = path.join(__dirname, 'index.html');
  console.log(`Reading index.html from ${indexPath}`);
  let indexHtml = fs.readFileSync(indexPath, 'utf8');

  // Replace the FAQ section in the HTML
  const faqSectionRegex = /<section id="faq"[^>]*>[\s\S]*?<\/section>/;
  const newFaqSection = `<section id="faq" class="section faq-section">
    <div class="container">
      ${faqHtml}
    </div>
  </section>`;
  
  indexHtml = indexHtml.replace(faqSectionRegex, newFaqSection);

  // Write the updated index.html
  console.log(`Writing updated index.html to ${indexPath}`);
  fs.writeFileSync(indexPath, indexHtml);

  // Write the updated schema.json
  const schemaPath = path.join(__dirname, 'data', 'schema.json');
  console.log(`Writing updated schema.json to ${schemaPath}`);
  fs.writeFileSync(schemaPath, schemaJson);

  console.log('FAQ build process completed successfully!');
} catch (error) {
  console.error('Error in FAQ build process:', error);
  process.exit(1);
}
