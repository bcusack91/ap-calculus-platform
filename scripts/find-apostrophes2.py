import re, glob, os

os.chdir(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'interactive-lessons'))

# Track if we're inside a backtick template literal
for f in sorted(glob.glob('*.ts')):
    with open(f) as fh:
        in_backtick = False
        for i, line in enumerate(fh, 1):
            # Track backtick template literals (toggle on each unescaped backtick)
            for ch in line:
                if ch == '`':
                    in_backtick = not in_backtick
            
            if in_backtick:
                continue  # Skip lines inside template literals
                
            if "'" not in line:
                continue
            
            # Look for patterns like: 'text letter'letter text'
            # This indicates an unescaped apostrophe breaking a single-quoted string
            matches = list(re.finditer(r"'[^'\\]*[a-zA-Z]'[a-zA-Z]", line))
            if matches:
                print(f'{f}:{i}: {line.rstrip()}')
