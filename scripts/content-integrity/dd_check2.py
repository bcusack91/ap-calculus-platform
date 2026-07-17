#!/usr/bin/env python3
"""Refined dropdown-consistency check vs git HEAD.

For each dropdown-select answer-context line, pair up string values positionally
between HEAD and working tree. For each CHANGED value, report how many times the
original appeared in the original file vs how many times the new value appears
in the new file. A drop from >=2 to 1 means the converted answer lost its
verbatim option match => real grading regression.
"""
import json, re, os, subprocess, sys

SP = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, SP)
from typed_revert import answer_context_lines, enclosing_type, worklist, DATA

STR_VAL_RE = re.compile(r"""(['"])((?:\\.|(?!\1).)*)\1""")
problems = []
changed_vals = 0
for rel in worklist():
    path = os.path.join(DATA, rel)
    if not os.path.exists(path):
        continue
    new_text = open(path, encoding="utf-8").read()
    try:
        old_text = subprocess.run(
            ["git", "show", f"HEAD:src/data/{rel}"], capture_output=True, text=True, check=True
        ).stdout
    except subprocess.CalledProcessError:
        continue
    if new_text == old_text:
        continue
    old_lines, new_lines = old_text.split("\n"), new_text.split("\n")
    if len(old_lines) != len(new_lines):
        print("LINECOUNT DIFF", rel)
        continue
    ctx = answer_context_lines(old_lines)
    for i in sorted(ctx):
        if old_lines[i] == new_lines[i]:
            continue
        if enclosing_type(old_lines, i) != "dropdown-select":
            continue
        olds = STR_VAL_RE.findall(old_lines[i])
        news = STR_VAL_RE.findall(new_lines[i])
        if len(olds) != len(news):
            print("STRCOUNT DIFF", rel, i + 1)
            continue
        for (q1, ov), (q2, nv) in zip(olds, news):
            if ov == nv:
                continue
            changed_vals += 1
            o_occ = old_text.count(q1 + ov + q1)
            n_occ = new_text.count(q2 + nv + q2)
            if o_occ >= 2 and n_occ < 2:
                problems.append((rel, i + 1, ov, nv, o_occ, n_occ))

print(f"dropdown answer values changed by conversion: {changed_vals}")
print(f"REGRESSIONS (had verbatim option match, lost it): {len(problems)}")
for rel, ln, ov, nv, oo, no in problems:
    print(f"  {rel}:{ln}  {oo}x->{no}x  {ov[:70]!r} -> {nv[:70]!r}")
