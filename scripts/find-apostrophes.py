import re, glob, os

os.chdir(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'interactive-lessons'))

for f in sorted(glob.glob('*.ts')):
    with open(f) as fh:
        for i, line in enumerate(fh, 1):
            if "'" not in line:
                continue
            # Find letter'letter sequences that suggest unescaped apostrophes
            matches = list(re.finditer(r"'[^'\\]*[a-zA-Z]'[a-zA-Z]", line))
            for m in matches:
                pos = m.start()
                before = line[:pos]
                # Skip if inside a template literal (odd number of backticks before)
                backticks = before.count('`')
                if backticks % 2 == 1:
                    continue
                print(f'{f}:{i}: {line.rstrip()}')
                break
