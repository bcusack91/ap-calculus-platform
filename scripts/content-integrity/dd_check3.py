#!/usr/bin/env python3
"""For changed dropdown answers with <2 verbatim occurrences in the new file,
check whether ANY string in the new file still matches under the renderer's
ddMatch normalization (strip $, collapse whitespace, lowercase). Also decode
TS-source escapes (\\\\ -> \\) before normalizing, and include pipe-string
segments from template-literal content."""
import re, os, subprocess, sys

SP = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, SP)
from typed_revert import answer_context_lines, enclosing_type, worklist, DATA

STR_VAL_RE = re.compile(r"""(['"])((?:\\.|(?!\1).)*)\1""")

def unesc(s, q):
    return s.replace("\\" + q, q).replace("\\\\", "\\").replace("\\n", "\n")

def norm(s):
    return re.sub(r"\s+", " ", s.replace("$", "")).strip().lower()

def all_candidates(text):
    cands = set()
    for m in STR_VAL_RE.finditer(text):
        v = unesc(m.group(2), m.group(1))
        cands.add(norm(v))
        # pipe-string dropdown options inside the value
        for pm in re.finditer(r"\[([^\[\]]*\|[^\[\]]*)\]", v):
            for opt in pm.group(1).split("|"):
                cands.add(norm(opt.strip()))
    # template literal contents: crude — take every line of the file too
    for ln in text.split("\n"):
        for pm in re.finditer(r"\[([^\[\]]*\|[^\[\]]*)\]", ln):
            for opt in pm.group(1).split("|"):
                cands.add(norm(unesc(opt.strip(), "`")))
    return cands

bad = 0
checked = 0
for rel in worklist():
    path = os.path.join(DATA, rel)
    if not os.path.exists(path):
        continue
    new_text = open(path, encoding="utf-8").read()
    try:
        old_text = subprocess.run(["git", "show", f"HEAD:src/data/{rel}"],
                                  capture_output=True, text=True, check=True).stdout
    except subprocess.CalledProcessError:
        continue
    if new_text == old_text:
        continue
    old_lines, new_lines = old_text.split("\n"), new_text.split("\n")
    ctx = answer_context_lines(old_lines)
    cands = None
    for i in sorted(ctx):
        if old_lines[i] == new_lines[i]:
            continue
        if enclosing_type(old_lines, i) != "dropdown-select":
            continue
        olds = STR_VAL_RE.findall(old_lines[i])
        news = STR_VAL_RE.findall(new_lines[i])
        if len(olds) != len(news):
            continue
        for (q1, ov), (q2, nv) in zip(olds, news):
            if ov == nv:
                continue
            if new_text.count(q2 + nv + q2) >= 2:
                continue  # verbatim option match exists
            checked += 1
            if cands is None:
                cands = all_candidates(new_text)
            nnorm = norm(unesc(nv, q2))
            # exclude itself: candidate set contains the answer itself; require a
            # second normalized occurrence — count normalized matches over all strings
            n_matches = 0
            for m in STR_VAL_RE.finditer(new_text):
                if norm(unesc(m.group(2), m.group(1))) == nnorm:
                    n_matches += 1
            pipe_match = any(c == nnorm for c in (cands - set())) and n_matches == 0
            if n_matches < 2 and nnorm not in cands:
                bad += 1
                print(f"NO-MATCH {rel}:{i+1} {nv[:80]!r}")
            elif n_matches < 2:
                # only matched via pipe-string candidates — fine
                pass
print(f"checked (no-verbatim) changed dropdown answers: {checked}; definite no-match: {bad}")
