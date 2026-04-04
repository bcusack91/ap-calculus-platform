#!/usr/bin/env python3
"""Fix remaining corruption in interactive lesson files.

Handles:
1. $2 -> bare backtick (` followed by math content)
2. $3 -> \n      } (newline+brace followed by math content)
"""
import re
import glob
import subprocess

# Get list of files with TS errors
result = subprocess.run(['npx', 'tsc', '--noEmit'], capture_output=True, text=True, cwd='.')
error_files = set()
for line in (result.stderr + result.stdout).split('\n'):
    m = re.match(r'(src/data/interactive-lessons/[^(]+)\(', line)
    if m:
        error_files.add(m.group(1))

print(f"Files with TS errors: {len(error_files)}")

fixed_count = 0
for filepath in sorted(error_files):
    if 'mcat-mcat' in filepath:
        continue
    try:
        with open(filepath) as f:
            content = f.read()
    except:
        continue
    original = content

    # Fix 1: bare backtick followed by LaTeX commands or math content
    # These are $2 -> backtick corruptions inside template literal content
    # Match: backtick + (backslash-command like \frac, \times, \div, \sqrt, \log, \text, \pm)
    content = re.sub(r'`(\\(?:frac|times|div|sqrt|log|text|pm|cdot|leq|geq|neq|approx|infty|sum|int|lim|sin|cos|tan|pi|theta|alpha|beta|Delta|to|Rightarrow)\b)', r'$2\1', content)

    # Fix 2: backtick + ( (opening paren in math context)
    # Like `(3)^2 - 5 = ...$ → $2(3)^2 - 5 = ...$
    content = re.sub(r'`(\([+-]?\d+\))', r'$2\1', content)

    # Fix 3: backtick + letter followed by ^ or math operator (like `x^2)
    content = re.sub(r'`([a-zA-Z]\^)', r'$2\1', content)

    # Fix 4: backtick + {,} (LaTeX number formatting)
    content = re.sub(r'`(\{,\})', r'$2\1', content)

    # Fix 5: $3 -> \n      } corruption
    # Pattern: \n followed by spaces+} then math content (not a block close)
    # In JSON strings: "\n      }..." should be "$3..."
    content = re.sub(r'"(\s*)\n\s+\}(\s*[-\\$\w])', r'"\1$3\2', content)

    # Fix 6: backtick + digit followed by clear math context
    # Only when inside a template literal (after: content, \times, +, -, =, etc.)
    # This is very targeted to avoid false positives
    content = re.sub(r'`(\d+\\(?:frac|times|div))', r'$2\1', content)

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        fixed_count += 1
        print(f'Fixed: {filepath}')

print(f'\nTotal fixed: {fixed_count}')
