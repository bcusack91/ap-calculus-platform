#!/usr/bin/env python3
"""Extract TypeScript files from sub-agent text dumps.

Sections shape:
  ## File N: NAME.ts
  ```typescript
  ...code...
  ```
"""
from __future__ import annotations
import re
import sys
from pathlib import Path

HEADER = re.compile(
    r"##\s+\*{0,2}File\s+\d+:?\s*\*{0,2}\s*`?([A-Za-z0-9_\-./]+\.ts)`?\*{0,2}",
    re.IGNORECASE,
)
OPEN_FENCE = re.compile(r"^```(?:typescript|ts|javascript|js)?\s*$", re.MULTILINE)


def extract(content: str) -> list[tuple[str, str]]:
    headers = [(m.start(), m.group(1).strip()) for m in HEADER.finditer(content)]
    if not headers:
        return []
    headers.append((len(content), None))
    results: list[tuple[str, str]] = []
    for i in range(len(headers) - 1):
        start, name = headers[i]
        section_end = headers[i + 1][0]
        section = content[start:section_end]
        m_open = OPEN_FENCE.search(section)
        if not m_open:
            continue
        body_start = m_open.end() + 1
        body_region = section[body_start:]
        close_positions = [
            mm.start() for mm in re.finditer(r"^```\s*$", body_region, re.MULTILINE)
        ]
        if not close_positions:
            continue
        body = body_region[: close_positions[-1]].rstrip("\n")
        results.append((name, body))
    return results


def main() -> int:
    if len(sys.argv) < 3:
        print("Usage: extract_typescript_files.py <dump.txt> <output-dir>", file=sys.stderr)
        return 2
    dump = Path(sys.argv[1])
    out = Path(sys.argv[2])
    out.mkdir(parents=True, exist_ok=True)
    content = dump.read_text(encoding="utf-8")
    files = extract(content)
    if not files:
        print("No files extracted", file=sys.stderr)
        return 1
    for name, body in files:
        # name is just basename (no slashes typically)
        target = out / Path(name).name
        target.write_text(body + "\n", encoding="utf-8")
        print(f"  wrote {target} ({len(body)} bytes)")
    print(f"Extracted {len(files)} file(s) to {out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
