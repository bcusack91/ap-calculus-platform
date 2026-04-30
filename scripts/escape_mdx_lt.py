"""
Escape MDX-unsafe `<` characters in markdown text.

MDX treats `<` as the start of a JSX tag. A bare `<` followed by a digit,
space, or punctuation breaks the parse (e.g. "(<28%)" or "real GDP < potential").
Real JSX tags always start with a letter, `/`, or `!`, so we only escape
`<` when the next character is NOT one of those.

We skip:
  - Fenced code blocks (``` ... ```)
  - Inline code spans (`...`)
  - Math spans: $$...$$ and $...$ (display + inline)
  - Lines inside YAML frontmatter (--- ... ---)

Usage: python3 scripts/escape_mdx_lt.py <path-to-mdx-or-dir>
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

UNSAFE_LT = re.compile(r"<(?=[^A-Za-z/!])")


def escape_text(text: str) -> str:
    """Escape `<` in a plain-text segment (no math, no code)."""
    return UNSAFE_LT.sub("&lt;", text)


def process_line_outside_math(line: str) -> str:
    """Process a single non-fenced, non-frontmatter line.

    Splits the line on inline code spans (`...`) and math spans ($$...$$, $...$),
    and only escapes `<` in the remaining plain-text segments.
    """
    # Tokens: code spans, display math, inline math, plain text.
    # Order matters: $$ before $, ` before everything else.
    pattern = re.compile(
        r"(`[^`\n]*`)"             # group 1: inline code
        r"|(\$\$[^$\n]*\$\$)"      # group 2: display math (single line)
        r"|(\$[^$\n]+\$)"          # group 3: inline math
    )
    out: list[str] = []
    pos = 0
    for m in pattern.finditer(line):
        # Plain text before the token
        if m.start() > pos:
            out.append(escape_text(line[pos : m.start()]))
        # The token itself stays verbatim
        out.append(m.group(0))
        pos = m.end()
    if pos < len(line):
        out.append(escape_text(line[pos:]))
    return "".join(out)


def process_file(path: Path) -> bool:
    src = path.read_text(encoding="utf-8")
    lines = src.split("\n")

    out: list[str] = []
    in_fence = False
    in_frontmatter = False
    # Frontmatter only counts at the very top of the file
    frontmatter_seen = False

    for i, raw in enumerate(lines):
        stripped = raw.strip()

        # Frontmatter detection (only at file start)
        if i == 0 and stripped == "---":
            in_frontmatter = True
            frontmatter_seen = True
            out.append(raw)
            continue
        if in_frontmatter:
            out.append(raw)
            if stripped == "---":
                in_frontmatter = False
            continue

        # Code fence toggling
        if stripped.startswith("```"):
            in_fence = not in_fence
            out.append(raw)
            continue
        if in_fence:
            out.append(raw)
            continue

        out.append(process_line_outside_math(raw))

    new = "\n".join(out)
    if new != src:
        path.write_text(new, encoding="utf-8")
        return True
    return False


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/escape_mdx_lt.py <path-to-mdx-or-dir>")
        return 2
    target = Path(sys.argv[1])
    if not target.exists():
        print(f"Path not found: {target}")
        return 1
    files = (
        sorted(target.rglob("*.mdx")) if target.is_dir() else [target]
    )
    changed = 0
    for f in files:
        if process_file(f):
            changed += 1
            print(f"  escaped: {f}")
    print(f"Done. {changed} file(s) modified out of {len(files)}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
