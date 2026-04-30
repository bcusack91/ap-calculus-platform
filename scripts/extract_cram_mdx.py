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

HEADER = re.compile(
    r"##\s+\*{0,2}File\s+\d+:?\s*\*{0,2}\s*`?([0-9a-z\-]+\.mdx)`?\*{0,2}",
    re.IGNORECASE,
)
OPEN_FENCE = re.compile(r"^```(?:markdown|mdx)\s*$", re.MULTILINE)


def extract(content: str) -> list[tuple[str, str]]:
    # Find all file-header positions
    headers = [(m.start(), m.group(1).strip()) for m in HEADER.finditer(content)]
    if not headers:
        return []
    # Append sentinel so each section has a clear boundary
    headers.append((len(content), None))
    results: list[tuple[str, str]] = []
    for i in range(len(headers) - 1):
        start, name = headers[i]
        section_end = headers[i + 1][0]
        section = content[start:section_end]
        # Locate the FIRST opening fence (```mdx or ```markdown) inside the section
        m_open = OPEN_FENCE.search(section)
        if not m_open:
            continue
        body_start = m_open.end() + 1  # skip the newline after the fence
        # Find the LAST closing fence ``` in the section (matches greedily within section)
        # Closing fence is a line that is exactly ```
        body_region = section[body_start:]
        # Find every standalone ``` line; the matching close is the LAST one before section_end
        close_positions = [
            mm.start()
            for mm in re.finditer(r"^```\s*$", body_region, re.MULTILINE)
        ]
        if not close_positions:
            continue
        body = body_region[: close_positions[-1]].rstrip("\n")
        results.append((name, body))
    return results


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
