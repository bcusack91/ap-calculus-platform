#!/usr/bin/env python3
"""Find dropdown items that have id but no label property."""
import os, re

lesson_dir = 'src/data/interactive-lessons'
results = []

for fname in sorted(os.listdir(lesson_dir)):
    if not fname.endswith('.ts'):
        continue
    path = os.path.join(lesson_dir, fname)
    with open(path) as f:
        content = f.read()
    
    # Find dropdown-select sections
    # Look for patterns: { id: 'xxx', options: [...] } without a label field
    # Use regex to find each dropdown object within dropdowns arrays
    
    # Find all dropdowns arrays
    dd_array_pattern = re.compile(r'dropdowns:\s*\[', re.DOTALL)
    for dd_match in dd_array_pattern.finditer(content):
        start = dd_match.end()
        # Find matching objects within the array
        depth = 1
        i = start
        while i < len(content) and depth > 0:
            if content[i] == '[':
                depth += 1
            elif content[i] == ']':
                depth -= 1
            i += 1
        array_content = content[start:i-1]
        
        # Find individual dropdown objects
        obj_pattern = re.compile(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}')
        for obj_match in obj_pattern.finditer(array_content):
            obj = obj_match.group()
            has_id = re.search(r"\bid:", obj)
            has_label = re.search(r"\blabel:", obj)
            if has_id and not has_label:
                id_val = re.search(r"id:\s*['\"]([^'\"]+)['\"]", obj)
                line_num = content[:dd_match.start() + start + obj_match.start()].count('\n') + 1
                results.append((fname, line_num, id_val.group(1) if id_val else '?'))

print(f"Found {len(results)} dropdowns with id but no label:")
for fname, line, dd_id in results:
    print(f"  {fname}:{line}  id={dd_id}")
