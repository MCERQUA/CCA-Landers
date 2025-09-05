import React from 'react';

const BrandStylePreview = () => {
  // Brand colors based on the concrete repair insurance brand guide
  const colors = {
    primary: [
      { name: 'Construction Orange', hex: '#F26C29', usage: 'Primary CTAs, headers, accent buttons' },
      { name: 'Concrete Gray', hex: '#D0D0C8', usage: 'Primary text, content backgrounds, forms' },
      { name: 'Mixer Yellow', hex: '#FFC72C', usage: 'Highlights, secondary accents, icons' }
    ],
    secondary: [
      { name: 'Industrial Teal', hex: '#1D7D74', usage: 'Secondary buttons, dividers, supporting elements' },
      { name: 'Deep Black', hex: '#121212', usage: 'Footer background, text on light backgrounds' }
    ]
  };

  // Typography based on brand guide
  const typography = {
    primary: { name: 'Montserrat Bold', fallback: 'sans-serif', usage: 'Headers, navigation, buttons' },
    secondary: { name: 'Source Sans Pro', fallback: 'sans-serif', usage: 'Body text, paragraphs, forms' },
    accent: { name: 'Roboto Slab', fallback: 'serif', usage: 'Specialized headings, emphasis' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Concrete Repair Insurance Brand Style Guide</h1>
      
      {/* Color Palette Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
        
        <div className="mb-4">
          <h3 className="font-medium mb-2">Primary Colors</h3>
          <div className="flex flex-wrap gap-4">
            {colors.primary.map((color, index) => (
              <div key={index} className="w-48 rounded overflow-hidden shadow">
                <div 
                  style={{ backgroundColor: color.hex }} 
                  className="h-24 w-full"
                ></div>
                <div className="p-3 bg-white">
                  <p className="font-bold">{color.name}</p>
                  <p className="text-sm">{color.hex}</p>
                  <p className="text-sm text-gray-600 mt-1">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Secondary Colors</h3>
          <div className="flex flex-wrap gap-4">
            {colors.secondary.map((color, index) => (
              <div key={index} className="w-48 rounded overflow-hidden shadow">
                <div 
                  style={{ backgroundColor: color.hex }} 
                  className="h-24 w-full"
                ></div>
                <div className="p-3 bg-white">
                  <p className="font-bold">{color.name}</p>
                  <p className="text-sm">{color.hex}</p>
                  <p className="text-sm text-gray-600 mt-1">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Typography Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Typography</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Primary Font: {typography.primary.name}</h3>
            <p style={{ fontFamily: `'Montserrat', ${typography.primary.fallback}`, fontWeight: 'bold' }} className="text-2xl">
              This is a headline in Montserrat Bold
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: `'Source Sans Pro', ${typography.secondary.fallback}` }} className="text-base">
              This is body text in Source Sans Pro. It should be highly readable and work well at smaller sizes for content blocks throughout the website and marketing materials for concrete repair insurance.
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.secondary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Accent Font: {typography.accent.name}</h3>
            <p style={{ fontFamily: `'Roboto Slab', ${typography.accent.fallback}` }} className="text-xl">
              Special emphasis text for concrete repair experts
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.accent.usage}</p>
          </div>
        </div>
      </section>
      
      {/* UI Elements Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">UI Elements</h2>
        
        <div className="bg-white p-4 rounded shadow mb-4">
          <h3 className="font-medium mb-3">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button style={{ backgroundColor: '#F26C29', color: 'white' }} className="px-4 py-2 rounded">
              Get a Quote
            </button>
            <button style={{ backgroundColor: '#1D7D74', color: 'white' }} className="px-4 py-2 rounded">
              Learn More
            </button>
            <button style={{ backgroundColor: 'white', color: '#121212', border: '2px solid #121212' }} className="px-4 py-2 rounded">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium mb-3">Sample Card Component</h3>
          <div style={{ border: '1px solid #E5E5E5' }} className="max-w-sm rounded overflow-hidden shadow">
            <div style={{ backgroundColor: '#1D7D74' }} className="h-32 w-full"></div>
            <div className="p-4">
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", color: '#F26C29' }} className="font-bold text-lg mb-2">General Liability Coverage</h4>
              <p style={{ fontFamily: "'Source Sans Pro', sans-serif" }} className="text-gray-700 text-base mb-4">
                Specialized protection for concrete repair contractors against third-party claims, property damage, and completed operations.
              </p>
              <button style={{ backgroundColor: '#F26C29', color: 'white' }} className="px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This is a preview of the Concrete Repair Insurance brand style guide elements. Implementation should follow the specifications in the complete brand guide document.
      </div>
    </div>
  );
};

export default BrandStylePreview;