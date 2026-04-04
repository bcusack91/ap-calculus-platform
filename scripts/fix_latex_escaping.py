#!/usr/bin/env python3
"""Fix under-escaped LaTeX in single-quoted option strings.

In single-quoted JS strings, \text gets interpreted as tab+ext, and
\rightarrow as carriage-return+ightarrow. We need \\text and \\rightarrow
so JS produces \text and \rightarrow for KaTeX to render.

Only fixes lines that are single-quoted option strings or double-quoted 
explanation/question strings. Does NOT touch template literal content.
"""

import re

files = [
    'src/data/interactive-lessons/chemistry-net-ionic-equations-part1.ts',
    'src/data/interactive-lessons/chemistry-net-ionic-equations-part2.ts',
    'src/data/interactive-lessons/chemistry-net-ionic-equations-part3.ts',
    'src/data/interactive-lessons/chemistry-net-ionic-equations-part4.ts',
    'src/data/interactive-lessons/chemistry-net-ionic-equations-part5.ts',
    'src/data/interactive-lessons/chemistry-net-ionic-equations-part6.ts',
    'src/data/interactive-lessons/chemistry-net-ionic-equations-part7.ts',
    'src/data/interactive-lessons/chemistry-oxidation-reduction-reactions-part2.ts',
    'src/data/interactive-lessons/chemistry-oxidation-reduction-reactions-part5.ts',
    'src/data/interactive-lessons/chemistry-reaction-types-part1.ts',
    'src/data/interactive-lessons/chemistry-reaction-types-part2.ts',
    'src/data/interactive-lessons/chemistry-reaction-types-part3.ts',
    'src/data/interactive-lessons/chemistry-reaction-types-part4.ts',
    'src/data/interactive-lessons/chemistry-reaction-types-part6.ts',
    'src/data/interactive-lessons/chemistry-reaction-types-part7.ts',
    'src/data/interactive-lessons/physicsc-rotational-dynamics-part4.ts',
]

# Match a single backslash + LaTeX command, but NOT already double-escaped
# (?<!\\) = not preceded by another backslash
cmd_pattern = re.compile(
    r'(?<!\\)\\(text|rightarrow|to|tau|implies|leftarrow|cdot|'
    r'frac|Delta|delta|omega|alpha|beta|gamma|sigma|theta|pi|mu|nu|lambda|epsilon|'
    r'times|div|pm|mp|leq|geq|neq|approx|infty|sum|prod|int|sqrt|vec|hat|bar|'
    r'overline|underline|mathbf|mathrm|mathit)(?=[{_^(\s$,\']|$)'
)

total_fixed = 0
for f in files:
    with open(f, 'r') as fh:
        lines = fh.readlines()

    changed = 0
    new_lines = []
    in_template = False

    for line in lines:
        s = line.strip()

        # Track template literal boundaries
        if 'content: `' in s or 'content:`' in s:
            in_template = True
        # Template end: standalone backtick or backtick+comma
        if in_template and s in ('`', '`,'):
            in_template = False
            new_lines.append(line)
            continue

        # Only fix lines NOT in template literals
        if not in_template:
            is_fixable = (
                s.startswith("'$") or
                s.startswith("'") and '\\' in s and ('text{' in s or 'rightarrow' in s or '\\to ' in s) or
                '"explanation"' in line and '\\' in s or
                '"question"' in line and '\\' in s or
                'explanation:' in s and "'$" in s
            )

            if is_fixable:
                new_line = cmd_pattern.sub(r'\\\\' + r'\1', line)
                if new_line != line:
                    # Count replacements
                    old_count = len(cmd_pattern.findall(line))
                    changed += old_count
                    line = new_line

        new_lines.append(line)

    if changed > 0:
        with open(f, 'w') as fh:
            fh.writelines(new_lines)
        print(f'Fixed {changed} instances in {f}')
        total_fixed += changed
    else:
        print(f'No changes: {f}')

print(f'\nTotal: {total_fixed} replacements')
