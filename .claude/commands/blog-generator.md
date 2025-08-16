# /blog-generator Command

**Purpose:** Autonomous blog generation system with comprehensive research, task tracking, and quality assurance

## Command Syntax
```bash
# Single blog creation
/blog-generator single [site-name] "[blog-title]"

# Next blog from queue
/blog-generator next

# Complete all blogs autonomously
/blog-generator loop

# Status check
/blog-generator status

# Resume interrupted work
/blog-generator resume
```

## System Architecture

### 1. Master Blog Queue (`blog-queue.md`)
- List of all pending blogs per site
- Checkbox tracking for completion
- Industry/niche verification per site
- Priority ordering

### 2. Task Tracking System (`blog-tasks.md`)
- Real-time task status updates
- Progress percentage per blog
- Interrupt recovery points
- Completion verification

### 3. Research Workflow (7 Phases)
- Each phase creates documented research
- Progressive validation at each step
- Content accumulation for final blog
- Quality gates between phases

### 4. Quality Assurance Loop
- Post-creation review cycle
- Research-to-blog comparison
- Missing element detection
- Double verification process

## Workflow Execution

### Phase 1: Initialization
1. **Site Verification**
   - Confirm target site exists
   - Verify industry/niche context
   - Load site-specific requirements
   - Check for existing research

2. **Blog Selection**
   - Pull from queue or use specified
   - Verify topic relevance to site
   - Create project directory structure
   - Initialize task tracking

### Phase 2: Research Execution (7 Steps)
1. **Topic Research** → `01-topic-research.md`
2. **SEO Research** → `02-seo-research.md`
3. **Link Research** → `03-link-research.md`
4. **Process Research** → `04-process-research.md`
5. **Content Audit** → `05-content-audit.md`
6. **Visual Planning** → `06-visual-planning.md`
7. **FAQ Research** → `07-faq-research.md`

### Phase 3: Blog Creation
1. **Research Synthesis**
   - Compile all research documents
   - Extract key elements
   - Build comprehensive outline
   
2. **Content Generation**
   - 2000+ word minimum
   - Include all research findings
   - Add CTAs and internal links
   - Create meta descriptions

3. **HTML Generation**
   - Convert to site-appropriate HTML
   - Add schema markup
   - Include responsive styling
   - Integrate with site navigation

### Phase 4: Quality Assurance
1. **First Review**
   - Compare blog to research docs
   - Check word count (2000+ minimum)
   - Verify all FAQs included
   - Confirm links and CTAs

2. **Second Review**
   - Re-read for completeness
   - Check for missing elements
   - Validate HTML structure
   - Test responsive design

3. **Final Verification**
   - Mark task complete
   - Update blog queue
   - Archive research
   - Log completion

## Directory Structure
```
[site-name].com/
└── .blog-research/
    └── [blog-slug]/
        ├── 01-topic-research.md
        ├── 02-seo-research.md
        ├── 03-link-research.md
        ├── 04-process-research.md
        ├── 05-content-audit.md
        ├── 06-visual-planning.md
        ├── 07-faq-research.md
        ├── blog-outline.md
        ├── blog-draft.md
        ├── blog-final.md
        └── blog-final.html
```

## Task Tracking States
- ⏳ **Queued** - In blog queue, not started
- 🔬 **Researching** - Research phase active
- ✍️ **Writing** - Blog creation in progress
- 👀 **Reviewing** - Quality assurance phase
- ✅ **Complete** - Published and verified
- ⚠️ **Interrupted** - Saved state for resume

## Loop Mode Operation
```python
while blogs_remaining():
    blog = get_next_blog()
    verify_site_context(blog.site)
    complete_research_phases(blog)
    create_blog_content(blog)
    perform_quality_checks(blog)
    if all_checks_pass(blog):
        mark_complete(blog)
    else:
        fix_issues(blog)
        revalidate(blog)
    update_progress()
```

## Success Criteria
- [ ] All 7 research documents created
- [ ] Minimum 2000 words achieved
- [ ] 10+ FAQs included
- [ ] 5+ internal links added
- [ ] 3+ external authority links
- [ ] Meta tags optimized
- [ ] Schema markup included
- [ ] Mobile responsive verified
- [ ] Industry context maintained
- [ ] No cross-contamination between sites

## Error Recovery
- Automatic state saving every phase
- Resume from last checkpoint
- Rollback capability if needed
- Error logging and reporting
- Manual override options

## Integration Points
- Updates `blog-queue.md` automatically
- Maintains `blog-tasks.md` in real-time
- Creates research archive
- Generates completion reports
- Triggers deployment if configured

---

*This command enables fully autonomous blog generation with comprehensive quality assurance and task tracking.*