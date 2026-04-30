"""Convert 4-space-indented code blocks in MDX files to fenced ```text blocks.

MDX still parses `{`/`<` as JSX inside indented code in some setups, so the
safer form is fenced code with an explicit language. We only touch lines that
are part of a contiguous indented block (4+ spaces) preceded and followed by
a blank line, and we leave lines inside existing fenced ``` regions alone.

Usage: python3 scripts/fence_indented_code.py <path-to-mdx-or-dir>
"""
from __future__ import annotations

import sys
from pathlib import Path


def process(text: str) -> str:
    lines = text.split("\n")
    out: list[str] = []
    i = 0
    in_fence = False
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if stripped.startswith("```"):
            in_fence = not in_fence
            out.append(line)
            i += 1
            continue
        if in_fence:
            out.append(line)
            i += 1
            continue

        # Look for the start of an indented block: this line indented by >=4
        # spaces, AND previous output line is blank (or this is line 0).
        prev_blank = (not out) or out[-1].strip() == ""
        if prev_blank and line.startswith("    ") and stripped:
            # Collect contiguous indented or blank-within-block lines until a
            # non-indented non-blank line.
            block: list[str] = []
            j = i
            while j < len(lines):
                ln = lines[j]
                if ln.startswith("    "):
                    block.append(ln[4:])
                    j += 1
                elif ln.strip() == "":
                    # Tentative blank. Peek to see if next non-blank is still
                    # indented; if yes, include the blank, else stop.
                    k = j + 1
                    while k < len(lines) and lines[k].strip() == "":
                        k += 1
                    if k < len(lines) and lines[k].startswith("    "):
                        block.append("")
                        j += 1
                    else:
                        break
                else:
                    break
            # Trim trailing blank lines from block
            while block and block[-1] == "":
                block.pop()
            if block:
                out.append("```text")
                out.extend(block)
                out.append("```")
                i = j
                continue
        out.append(line)
        i += 1
    return "\n".join(out)


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/fence_indented_code.py <path>")
        return 2
    target = Path(sys.argv[1])
    files = sorted(target.rglob("*.mdx")) if target.is_dir() else [target]
    changed = 0
    for f in files:
        src = f.read_text(encoding="utf-8")
        new = process(src)
        if new != src:
            f.write_text(new, encoding="utf-8")
            changed += 1
            print(f"  fenced: {f}")
    print(f"Done. {changed} of {len(files)} file(s) modified.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
