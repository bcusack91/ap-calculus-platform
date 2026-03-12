#!/usr/bin/env python3
"""Check quality of all interactive lesson files."""
import os, re

base = 'src/data/interactive-lessons'
markers = {
    'refer_to_in': 0,
    'bare_bullets_only': 0,
    'no_mcq': 0,
    'no_input_boxes': 0,
    'short_file': 0,
    'good_file': 0,
}
bad_topics = {}
good_topics = set()

for f in sorted(os.listdir(base)):
    if not f.endswith('-part1.ts'):
        continue
    prefix = f.replace('-part1.ts', '')
    path = os.path.join(base, f)
    content = open(path).read()
    lines = len(content.split('\n'))
    
    is_bad = False
    
    # Check for template markers
    if 'refer to in' in content.lower():
        is_bad = True
        reason = 'refer_to_in'
    elif lines < 50:
        is_bad = True
        reason = 'too_short'
    elif 'multiple-choice' not in content and 'input-boxes' not in content:
        is_bad = True
        reason = 'no_exercises'
    else:
        # Check if MCQ options are tautological
        options = re.findall(r"'([^']{5,80})'", content)
        tautological = sum(1 for o in options if 'refers to' in o.lower() or 'defines' in o.lower() and 'is' in o.lower())
        if tautological > 3:
            is_bad = True
            reason = 'tautological'
    
    if is_bad:
        subj = f.split('-')[0]
        if subj not in bad_topics:
            bad_topics[subj] = []
        bad_topics[subj].append((prefix, reason, lines))
    else:
        good_topics.add(prefix)

print(f"Total topics with part1: {len(bad_topics) + len([1 for v in bad_topics.values() for _ in v]) - sum(len(v) for v in bad_topics.values()) + len(good_topics)}")
print(f"Bad topics: {sum(len(v) for v in bad_topics.values())}")
print(f"Good topics: {len(good_topics)}")

for subj in sorted(bad_topics):
    print(f"\n=== {subj.upper()} ({len(bad_topics[subj])} bad) ===")
    for prefix, reason, lines in bad_topics[subj]:
        print(f"  {prefix}: {reason} ({lines} lines)")

print(f"\n=== GOOD TOPICS ({len(good_topics)}) ===")
for t in sorted(good_topics):
    print(f"  {t}")
