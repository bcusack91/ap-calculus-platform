#!/usr/bin/env python3
"""More thorough quality audit of interactive lessons."""
import os, re

base = 'src/data/interactive-lessons'

# Template junk markers — any of these in a part1 means the topic is garbage
JUNK_PATTERNS = [
    'refer to in',
    'which statement accurately explains',
    'which statement best describes the concept',
    'which answer correctly defines',
    'which option correctly describes',
    'which best defines',
    'which accurately captures',
    'which correctly identifies',
    'which phrase best captures',
    'select the option that best',
]

bad_topics = {}
good_topics = {}

for f in sorted(os.listdir(base)):
    if not f.endswith('-part1.ts'):
        continue
    prefix = f.replace('-part1.ts', '')
    path = os.path.join(base, f)
    content = open(path).read().lower()
    lines = len(content.split('\n'))
    
    is_bad = False
    reason = 'good'
    
    # Check junk patterns
    for pat in JUNK_PATTERNS:
        if pat in content:
            is_bad = True
            reason = 'template_junk'
            break
    
    # Check if too short (Calc BC style)
    if not is_bad and lines < 55:
        is_bad = True
        reason = 'too_short'
    
    # Check if no interactive exercises at all
    if not is_bad and 'multiple-choice' not in content and 'input-boxes' not in content and 'dropdown-select' not in content:
        is_bad = True
        reason = 'no_exercises'
    
    subj = prefix.split('-')[0]
    if is_bad:
        if subj not in bad_topics:
            bad_topics[subj] = []
        bad_topics[subj].append((prefix, reason, lines))
    else:
        if subj not in good_topics:
            good_topics[subj] = []
        good_topics[subj].append((prefix, lines))

total_bad = sum(len(v) for v in bad_topics.values())
total_good = sum(len(v) for v in good_topics.values())
print(f"BAD topics: {total_bad}")
print(f"GOOD topics: {total_good}")
print(f"Total files to rewrite: {total_bad * 7}")

for subj in sorted(bad_topics):
    print(f"\n=== {subj.upper()} ({len(bad_topics[subj])} bad) ===")
    for prefix, reason, lines in bad_topics[subj]:
        print(f"  {prefix}: {reason} ({lines} lines)")

# Print good counts by subject
print(f"\n=== GOOD COUNTS BY SUBJECT ===")
for subj in sorted(good_topics):
    print(f"  {subj}: {len(good_topics[subj])} good topics")
