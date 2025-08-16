#!/usr/bin/env python3
"""
Verify blog posts count and word count for all sites
"""

import os
import re
from pathlib import Path

BASE_DIR = "/home/mikecerqua/projects/CCA-Landers"

def count_words_in_html(file_path):
    """Count words in HTML file (excluding tags)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Remove HTML tags
            text = re.sub(r'<[^>]+>', '', content)
            # Remove extra whitespace
            text = ' '.join(text.split())
            # Count words
            words = len(text.split())
            return words
    except:
        return 0

def check_site_blogs(site_name):
    """Check blog posts for a site"""
    site_path = os.path.join(BASE_DIR, site_name)
    posts_dir = os.path.join(site_path, "blog", "posts")
    
    if not os.path.exists(posts_dir):
        return {"site": site_name, "posts": [], "total_posts": 0}
    
    posts = []
    for file in os.listdir(posts_dir):
        if file.endswith('.html'):
            file_path = os.path.join(posts_dir, file)
            word_count = count_words_in_html(file_path)
            posts.append({
                "file": file,
                "words": word_count,
                "meets_2000": word_count >= 2000
            })
    
    return {
        "site": site_name,
        "posts": sorted(posts, key=lambda x: x['file']),
        "total_posts": len(posts)
    }

# All sites
SITES = [
    "accountreceivablesinsurance.com",
    "barandnightclubinsurance.com",
    "cabincruiserinsurance.com",
    "chandlermortgages.com",
    "concreterepairinsurance.com",
    "dirtworkinsurance",
    "fightclubinsurance.com",
    "froyoinsurance.com",
    "glazinginsurance.com",
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

def main():
    print("="*80)
    print("📊 BLOG POST VERIFICATION REPORT")
    print("="*80)
    print("\nChecking all sites for blog posts with 2000+ words requirement...\n")
    
    all_results = []
    sites_meeting_criteria = 0
    total_posts_all = 0
    posts_over_2000 = 0
    
    for site in SITES:
        result = check_site_blogs(site)
        all_results.append(result)
        
        # Check if site meets criteria (3+ posts with 2000+ words each)
        posts_meeting_2000 = sum(1 for p in result['posts'] if p['meets_2000'])
        if result['total_posts'] >= 3 and posts_meeting_2000 >= 3:
            sites_meeting_criteria += 1
            status = "✅"
        else:
            status = "❌"
        
        print(f"{status} {site}")
        print(f"   Posts: {result['total_posts']}")
        
        for post in result['posts']:
            if post['meets_2000']:
                mark = "✓"
            else:
                mark = "✗"
            print(f"   {mark} {post['file'][:50]}: {post['words']:,} words")
        
        if result['total_posts'] < 3:
            print(f"   ⚠️ NEEDS {3 - result['total_posts']} MORE POSTS")
        
        posts_under_2000 = [p for p in result['posts'] if not p['meets_2000']]
        if posts_under_2000:
            print(f"   ⚠️ {len(posts_under_2000)} posts under 2000 words")
        
        print()
        
        total_posts_all += result['total_posts']
        posts_over_2000 += sum(1 for p in result['posts'] if p['meets_2000'])
    
    # Summary
    print("="*80)
    print("📈 SUMMARY")
    print("="*80)
    print(f"Total Sites: {len(SITES)}")
    print(f"Sites with 3+ posts of 2000+ words: {sites_meeting_criteria}/{len(SITES)}")
    print(f"Total Blog Posts: {total_posts_all}")
    print(f"Posts with 2000+ words: {posts_over_2000}/{total_posts_all}")
    print(f"Average posts per site: {total_posts_all/len(SITES):.1f}")
    
    if sites_meeting_criteria < len(SITES):
        print("\n⚠️ SITES NEEDING ATTENTION:")
        for result in all_results:
            posts_meeting_2000 = sum(1 for p in result['posts'] if p['meets_2000'])
            if result['total_posts'] < 3 or posts_meeting_2000 < 3:
                print(f"   - {result['site']}: {result['total_posts']} posts, {posts_meeting_2000} over 2000 words")

if __name__ == "__main__":
    main()