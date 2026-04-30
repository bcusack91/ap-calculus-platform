#!/usr/bin/env python3
"""Extract MDX files from sub-agent text dumps.

Each dump contains sections shaped like:
  ## **File N: NAME.mdx**

  ```markdown
  ---
  ...
  ```
We extract NAME.mdx (basename) and the content of the following code block.
"""
from __future__ import annotations
import re
import sys
from pathlib import Path

PATTERN = re.compile(
    r"##\s+\*{0,2}File\s+\d+:?\s*\*{0,2}\s*`?([0-9a-z\-]+\.mdx)`?\*{0,2}\s*\n+"  # header
    r"```(?:markdown|mdx)?\s*\n"  # opening fence
    r"(.*?)"                      # content
    r"\n```",                     # closing fence
    re.DOTALL,
)


def extract(content: str) -> list[tuple[str, str]]:
    matches = PATTERN.findall(content)
    return [(name.strip(), body) for name, body in matches]


def main() -> int:
    if len(sys.argv) < 3:
        print("Usage: extract_mdx.py <dump.txt> <output-dir>", file=sys.stderr)
        return 2
    dump_path = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)

    text = dump_path.read_text()
    pairs = extract(text)
    if not pairs:
        print("No file blocks matched.", file=sys.stderr)
        return 1
    for name, body in pairs:
        target = out_dir / name
        target.write_text(body.rstrip() + "\n")
        print(f"  wrote {target}  ({len(body):,} chars)")
    print(f"Total: {len(pairs)} files written to {out_dir}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
