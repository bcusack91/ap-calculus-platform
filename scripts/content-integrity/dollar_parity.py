#!/usr/bin/env python3
"""Detect $...$ math-delimiter parity corruption introduced by the conversion.

For each interactive-lessons string-literal segment that CHANGED vs HEAD, decode
the source-string escapes to the rendered text, then count math '$' delimiters
the way KaTeX-in-markdown sees them: '$$' display pairs and single '$' inline
pairs, with backslash-escaped '\\$' treated as literal currency (not a
delimiter). If the number of *inline* '$' delimiters in the rendered segment is
odd, the segment has a broken math span => corruption. Report new breaks
(segments that are broken now but were fine at HEAD)."""
import re, os, subprocess, sys, importlib.util

SP = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("lc", os.path.join(SP, "latex_convert.py"))
lc = importlib.util.module_from_spec(spec); spec.loader.exec_module(lc)
sys.path.insert(0, SP)
from typed_revert import worklist, DATA


def decode(src, quote):
    """Best-effort decode of TS string source content to rendered text."""
    out = []
    i = 0
    while i < len(src):
        c = src[i]
        if c == "\\" and i + 1 < len(src):
            nxt = src[i + 1]
            mp = {"n": "\n", "t": "\t", "\\": "\\", "'": "'", '"': '"', "`": "`", "$": "\0DOLLAR\0"}
            if nxt in mp:
                out.append(mp[nxt]); i += 2; continue
            out.append(nxt); i += 2; continue
        out.append(c); i += 1
    return "".join(out)


def inline_dollar_count(rendered):
    # remove escaped currency markers
    t = rendered.replace("\0DOLLAR\0", "")
    # remove $$...$$ display spans (non-greedy)
    t = re.sub(r"\$\$.*?\$\$", "", t, flags=re.S)
    # any lone leftover $$ (unpaired display) -> count as issue too
    return t.count("$")


def segments(text):
    """Return list of (line_index, start, end, content) string-literal contents."""
    lines, seg_by_line = lc.line_string_segments(text)
    res = []
    for li, (ln, segs) in enumerate(zip(lines, seg_by_line)):
        for a, b, mode in segs:
            res.append((li, a, b, ln[a:b], mode))
    return res


new_breaks = []
for rel in worklist():
    path = os.path.join(DATA, rel)
    if not os.path.exists(path):
        continue
    new_text = open(path, encoding="utf-8").read()
    old_text = subprocess.run(["git", "show", f"HEAD:src/data/{rel}"],
                              capture_output=True, text=True).stdout
    if not old_text or new_text == old_text:
        continue
    old_lines = old_text.split("\n"); new_lines = new_text.split("\n")
    if len(old_lines) != len(new_lines):
        continue
    new_segs = segments(new_text)
    old_by_line = {}
    for li, a, b, content, mode in segments(old_text):
        old_by_line.setdefault(li, []).append((a, content, mode))
    for li, a, b, content, mode in new_segs:
        # only content-bearing lines that changed
        quote = "`" if mode == "t" else "'"
        cnt = inline_dollar_count(decode(content, quote))
        if cnt % 2 == 0:
            continue
        # was the matching old segment on this line also odd? then pre-existing
        old_here = old_by_line.get(li, [])
        old_odd = any(inline_dollar_count(decode(oc, "`" if om == "t" else "'")) % 2
                      for (_, oc, om) in old_here)
        if old_odd:
            continue
        new_breaks.append((rel, li + 1, content[:120]))

print(f"NEW $-parity breaks introduced by conversion: {len(new_breaks)}")
for rel, ln, snip in new_breaks:
    print(f"  {rel}:{ln}  {snip!r}")
