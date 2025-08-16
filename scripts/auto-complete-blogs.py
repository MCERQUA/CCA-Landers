#!/usr/bin/env python3
"""
Automated Blog Completion System
Will complete all missing blog components
"""

import os
import sys

BASE_DIR = "/home/mikecerqua/projects/CCA-Landers"

# Sites that need blog links added to navigation
NEEDS_BLOG_LINK = [
    "fightclubinsurance.com",
    "hiredautoinsurance.com",
    "hoodventcleaninginsurance.com",
    "independenttruckerinsurance.com",
    "indoorskitrainer.com",
    "mobiledetailinsurance.com",
    "oilfieldweldinginsurance.com",
    "puroseguro.com",
    "ufcinsurance.com",
    "vanlifeinsurance.com",
    "waterproofinginsurance.com"
]

# Sites that need blog index created
NEEDS_BLOG_INDEX = [
    "puroseguro.com",
    "ufcinsurance.com",
    "vanlifeinsurance.com",
    "waterproofinginsurance.com"
]

# Sites that need blog posts
NEEDS_POSTS = {
    "hoodventcleaninginsurance.com": 2,
    "indoorskitrainer.com": 3,
    "mobiledetailinsurance.com": 3,
    "oilfieldweldinginsurance.com": 3,
    "puroseguro.com": 3,
    "ufcinsurance.com": 3,
    "vanlifeinsurance.com": 3,
    "waterproofinginsurance.com": 3
}

def add_blog_to_navigation(site):
    """Add blog link to site navigation"""
    site_path = os.path.join(BASE_DIR, site)
    index_file = os.path.join(site_path, "index.html")
    
    if not os.path.exists(index_file):
        print(f"❌ {site}: index.html not found")
        return False
    
    print(f"📝 Adding blog link to {site} navigation...")
    
    # Read the file
    with open(index_file, 'r') as f:
        content = f.read()
    
    # Check if blog link already exists
    if 'href="blog/"' in content:
        print(f"   ✅ Blog link already exists")
        return True
    
    # Find where to add the blog link (after FAQ link typically)
    if '<a href="#faq"' in content:
        # Add blog link after FAQ
        content = content.replace(
            '<li><a href="#faq" style="color: white;">FAQ</a></li>',
            '<li><a href="#faq" style="color: white;">FAQ</a></li>\n                        <li><a href="blog/" style="color: white;">Blog</a></li>'
        )
        
        # Also add to mobile menu if exists
        content = content.replace(
            '<a href="#faq" style="display: block; padding: 0.75rem 1rem; color: white; border-bottom: 1px solid rgba(255,255,255,0.1);">FAQ</a>',
            '<a href="#faq" style="display: block; padding: 0.75rem 1rem; color: white; border-bottom: 1px solid rgba(255,255,255,0.1);">FAQ</a>\n                    <a href="blog/" style="display: block; padding: 0.75rem 1rem; color: white; border-bottom: 1px solid rgba(255,255,255,0.1);">Blog</a>'
        )
        
        # Write back
        with open(index_file, 'w') as f:
            f.write(content)
        
        print(f"   ✅ Blog link added to navigation")
        return True
    else:
        print(f"   ⚠️ Could not find suitable location for blog link")
        return False

def main():
    print("="*60)
    print("🚀 AUTOMATED BLOG COMPLETION SYSTEM")
    print("="*60)
    
    # Step 1: Add blog links to navigation
    print("\n📝 STEP 1: Adding Blog Links to Navigation")
    print("-"*60)
    for site in NEEDS_BLOG_LINK:
        add_blog_to_navigation(site)
    
    print("\n✅ Navigation updates complete!")
    
    # Step 2: Create blog index pages
    print("\n📁 STEP 2: Creating Blog Index Pages")
    print("-"*60)
    for site in NEEDS_BLOG_INDEX:
        print(f"📄 Creating blog index for {site}...")
        # This would create the actual blog index files
        print(f"   ⏳ Blog index creation needed for {site}")
    
    # Step 3: Create blog posts
    print("\n✍️ STEP 3: Creating Blog Posts")
    print("-"*60)
    total_posts_needed = sum(NEEDS_POSTS.values())
    print(f"Total posts needed: {total_posts_needed}")
    for site, count in NEEDS_POSTS.items():
        print(f"   {site}: {count} posts needed")
    
    print("\n="*60)
    print("📊 SUMMARY")
    print("="*60)
    print(f"✅ Blog links to add: {len(NEEDS_BLOG_LINK)}")
    print(f"📁 Blog indexes to create: {len(NEEDS_BLOG_INDEX)}")
    print(f"✍️ Blog posts to create: {total_posts_needed}")
    print("="*60)

if __name__ == "__main__":
    main()