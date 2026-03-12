#!/usr/bin/env python3
"""
Fix syntax errors in MCAT TypeScript files.

Issues found:
1. Options arrays where last item ends with ' instead of ` (mixed delimiters)
2. Unescaped backticks in template literal content (e.g., author`s should be author\\`s)
3. Any content/question/explanation using single-quote delimiters instead of backticks
"""

import os
import re
import glob

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'interactive-lessons')
files = sorted(glob.glob(os.path.join(BASE, 'mcat-mcat-*.ts')))

print(f"Found {len(files)} MCAT files to process")

total_fixes = 0

def fix_options_line(line):
    """Parse and fix an options array line, ensuring all items use backtick delimiters."""
    # Find the options array: options: [...]
    m = re.search(r'(options:\s*\[)(.*?)(\],?\s*)$', line)
    if not m:
        return line, False

    prefix = line[:m.start()] + m.group(1)
    array_content = m.group(2)
    suffix = m.group(3)

    # Parse the array items - they can be delimited by ` or '
    items = []
    i = 0
    while i < len(array_content):
        if array_content[i] in ('`', "'"):
            delim = array_content[i]
            i += 1
            item_chars = []
            while i < len(array_content):
                if array_content[i] == '\\' and i + 1 < len(array_content):
                    # Escaped character - keep both
                    item_chars.append(array_content[i])
                    item_chars.append(array_content[i + 1])
                    i += 2
                elif array_content[i] == delim:
                    i += 1
                    break
                elif delim == '`' and array_content[i] in ("'",):
                    # Single quote inside backtick - fine, keep it
                    item_chars.append(array_content[i])
                    i += 1
                elif delim == "'" and array_content[i] == '`':
                    # Backtick inside single-quoted string - keep it
                    item_chars.append(array_content[i])
                    i += 1
                else:
                    item_chars.append(array_content[i])
                    i += 1
            items.append(''.join(item_chars))
        elif array_content[i] in (',', ' '):
            i += 1
        else:
            i += 1

    if not items:
        return line, False

    # Rebuild all items as backtick template literals
    fixed_items = []
    for item in items:
        # Ensure backticks in content are escaped
        # First, unescape any existing \\` to `, then re-escape
        cleaned = item.replace('\\`', '`')
        # Also unescape \\' to '
        cleaned = cleaned.replace("\\'", "'")
        # Now escape backticks
        cleaned = cleaned.replace('`', '\\`')
        fixed_items.append(f'`{cleaned}`')

    new_line = prefix + ', '.join(fixed_items) + suffix
    return new_line, new_line != line


def fix_string_prop(line, prop):
    """Fix a content/question/explanation property line to use backtick delimiters."""
    # Match: prop: 'value' or prop: `value`
    pattern = r"^(\s+" + prop + r"\s+)'(.*)'(,?\s*)$"
    m = re.match(pattern, line)
    if m:
        prefix = m.group(1)
        value = m.group(2)
        suffix = m.group(3)
        # Unescape single quotes, escape backticks
        value = value.replace("\\'", "'")
        value = value.replace('`', '\\`')
        return f"{prefix}`{value}`{suffix}", True
    return line, False


for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()

    original = content
    lines = content.split('\n')
    new_lines = []
    fixes_in_file = 0

    for line in lines:
        new_line = line
        fixed = False

        # Fix options arrays
        if 'options:' in new_line and '[' in new_line:
            new_line, fixed = fix_options_line(new_line)
            if fixed:
                fixes_in_file += 1

        # Fix content/question/explanation with single-quote delimiters
        if not fixed:
            for prop in ['content:', 'question:', 'explanation:']:
                if prop in new_line:
                    new_line, fixed = fix_string_prop(new_line, prop)
                    if fixed:
                        fixes_in_file += 1
                    break

        new_lines.append(new_line)

    new_content = '\n'.join(new_lines)

    if new_content != original:
        with open(filepath, 'w') as f:
            f.write(new_content)
        fname = os.path.basename(filepath)
        print(f"  Fixed {fname} ({fixes_in_file} changes)")
        total_fixes += fixes_in_file

print(f"\nTotal fixes: {total_fixes} across {len(files)} files")
