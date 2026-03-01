#!/usr/bin/env python3
import os, re

base = 'src/data/interactive-lessons'
template_marker = 'refer to in'
topics = {}

for f in sorted(os.listdir(base)):
    if not f.endswith('-part1.ts'):
        continue
    path = os.path.join(base, f)
    content = open(path).read()
    if template_marker.lower() in content.lower():
        m = re.search(r'export const (\w+)Part1Data', content)
        exp = m.group(1) if m else '???'
        m2 = re.search(r"topicSlug: '([^']+)'", content)
        slug = m2.group(1) if m2 else '???'
        prefix = f.replace('-part1.ts', '')
        subj = f.split('-')[0]
        if subj not in topics:
            topics[subj] = []
        topics[subj].append(f'{slug}|{exp}|{prefix}')

for subj in sorted(topics):
    print(f'\n=== {subj.upper()} ({len(topics[subj])} topics) ===')
    for t in sorted(topics[subj]):
        print(t)
