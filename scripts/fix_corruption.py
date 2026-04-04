#!/usr/bin/env python3
"""Fix regex backreference corruption in interactive lesson files.

Corruption patterns:
- $1 -> section header injection (id:'...',type:'...',content:`)
- $2 -> `,exercise:{` injection or bare backtick
- $3 -> newline+} injection
"""
import re
import glob
import os

BASEDIR = 'src/data/interactive-lessons/'
files = sorted(glob.glob(BASEDIR + '*.ts'))
files = [f for f in files if 'mcat-mcat' not in f]

# Pattern 1: $1 corruption
# Section header injected where $1 should be
# content: ` is NEVER immediately followed by non-newline, non-backtick in legit code
pat1_full = re.compile(
    r"id:\s*'[^']*',?\s*type:\s*'[^']*'(?:\s+as\s+const)?,?\s*content:\s*`(?=[^\n`])",
    re.DOTALL
)
pat1_partial = re.compile(
    r"type:\s*'[^']*'(?:\s+as\s+const)?,?\s*content:\s*`(?=[^\n`])",
    re.DOTALL
)

# Pattern 2: $2 corruption
# `, exercise: { injected where $2 should be
pat2_pattern = re.compile(
    r"`[,]\s+exercise:\s*\{(\s*\n?\s*questions:\s+)?",
    re.DOTALL
)

def fix_exercise_match(match):
    """Return $2 if corruption, original match if legitimate."""
    full = match.group()
    after_pos = match.end()
    orig = match.string
    after = orig[after_pos:after_pos+200]
    
    has_questions = match.group(1) is not None
    
    if has_questions:
        after_stripped = after.lstrip()
        if after_stripped.startswith('['):
            return full  # Legitimate
        return '$2'  # Corruption
    else:
        if re.match(r'\s*\n\s+(?:boxes|questions|correctAnswers|hint|explanation|dropdowns)\b', after):
            return full  # Legitimate
        return '$2'  # Corruption

# Pattern 3: $3 corruption
# \n      } followed by $ or \\ (math context in template literal)
pat3 = re.compile(r"\n\s+\}(?=[\$\\])")

total_fixed = 0
fixed_files = []

for filepath in files:
    with open(filepath) as f:
        content = f.read()
    original = content
    
    fixes = []
    
    # Apply fix 1
    before = content
    content = pat1_full.sub('$1', content)
    if content != before:
        fixes.append("$1f")
    
    before = content
    content = pat1_partial.sub('$1', content)
    if content != before:
        fixes.append("$1p")
    
    # Apply fix 2
    before = content
    content = pat2_pattern.sub(fix_exercise_match, content)
    if content != before:
        fixes.append("$2")
    
    # Apply fix 3
    before = content
    content = pat3.sub('$3', content)
    if content != before:
        fixes.append("$3")
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        total_fixed += 1
        fixed_files.append((filepath, ', '.join(fixes)))

for f, info in fixed_files:
    print(f'{f}: {info}')
print(f'\nTotal files fixed: {total_fixed}')
