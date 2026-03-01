#!/usr/bin/env python3
"""Get exact metadata for all bad topics."""
import os, re

base = 'src/data/interactive-lessons'

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

for f in sorted(os.listdir(base)):
    if not f.endswith('-part1.ts'):
        continue
    path = os.path.join(base, f)
    content = open(path).read()
    content_lower = content.lower()
    lines = len(content.split('\n'))
    
    is_bad = False
    for pat in JUNK_PATTERNS:
        if pat in content_lower:
            is_bad = True
            break
    if not is_bad and lines < 55:
        is_bad = True
    if not is_bad:
        continue
    
    m = re.search(r'export const (\w+)Part1Data', content)
    exp = m.group(1) if m else '???'
    m2 = re.search(r"topicSlug: '([^']+)'", content)
    slug = m2.group(1) if m2 else '???'
    prefix = f.replace('-part1.ts', '')
    subj = prefix.split('-')[0]
    
    print(f"{subj}|{slug}|{exp}|{prefix}")
