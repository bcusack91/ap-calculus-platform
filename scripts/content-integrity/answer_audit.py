#!/usr/bin/env python3
"""Audit which answer-key string values the converter would change, per section type.

For every interactive-lessons file in the scan worklist, convert in memory and
diff line-by-line. Flag changed lines that are inside answer-key contexts
(correctAnswer/correctAnswers/acceptableAnswers/answer/answers), and report the
enclosing section `type:` so we can classify typed vs selection grading.
"""
import json, re, sys, os, importlib.util

SP = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("latex_convert", os.path.join(SP, "latex_convert.py"))
lc = importlib.util.module_from_spec(spec)
spec.loader.exec_module(lc)

REPO = os.getcwd()
DATA = os.path.join(REPO, "src", "data")

ANSWER_KEY_RE = re.compile(r"\b(correctAnswer|correctAnswers|acceptableAnswers|answers|answer)\s*:")
ANSWER_ARRAY_OPEN_RE = re.compile(r"\b(correctAnswers|acceptableAnswers|answers)\s*:\s*\[[^\]]*$")
TYPE_RE = re.compile(r"\btype\s*:\s*['\"]([a-z-]+)['\"]")
OPTIONS_RE = re.compile(r"\boptions\s*:")

def answer_context_lines(lines):
    """Return set of 0-based line indices that are in an answer-key context."""
    ctx = set()
    in_arr = False
    for i, ln in enumerate(lines):
        if in_arr:
            ctx.add(i)
            if "]" in ln:
                in_arr = False
            continue
        if ANSWER_KEY_RE.search(ln):
            ctx.add(i)
            if ANSWER_ARRAY_OPEN_RE.search(ln):
                in_arr = True
    return ctx

def enclosing_type(lines, idx):
    for j in range(idx, -1, -1):
        m = TYPE_RE.search(lines[j])
        if m:
            return m.group(1)
    return "?"

def has_options_nearby(lines, idx, window=25):
    lo = max(0, idx - window)
    hi = min(len(lines), idx + window)
    return any(OPTIONS_RE.search(lines[j]) for j in range(lo, hi))

def main():
    scan = json.load(open(os.path.join(SP, "scan_results.json")))
    files = sorted(k for k in scan["files"] if "interactive-lessons" in k)
    report = []
    for rel in files:
        path = os.path.join(DATA, rel)
        if not os.path.exists(path):
            continue
        text = open(path, encoding="utf-8").read()
        stats = {}
        import collections
        stats = collections.defaultdict(int)
        new_text = lc.convert_text(text, not lc.is_cs_file(rel), stats, [], 0)
        if new_text == text:
            continue
        old_lines = text.split("\n")
        new_lines = new_text.split("\n")
        assert len(old_lines) == len(new_lines), rel  # converter is line-stable
        ctx = answer_context_lines(old_lines)
        for i, (a, b) in enumerate(zip(old_lines, new_lines)):
            if a == b or i not in ctx:
                continue
            sect = enclosing_type(old_lines, i)
            report.append({
                "file": rel, "line": i + 1, "section_type": sect,
                "has_options_nearby": has_options_nearby(old_lines, i),
                "before": a.strip()[:180], "after": b.strip()[:180],
            })
    by = {}
    for r in report:
        key = (r["section_type"], r["has_options_nearby"])
        by.setdefault(key, []).append(r)
    print("TOTAL flagged answer-context changed lines:", len(report))
    for key, rs in sorted(by.items(), key=lambda kv: -len(kv[1])):
        print(f"\n=== section_type={key[0]} options_nearby={key[1]}  ({len(rs)} lines) ===")
        for r in rs[:6]:
            print(f"  {r['file']}:{r['line']}")
            print(f"    - {r['before']}")
            print(f"    + {r['after']}")
    json.dump(report, open(os.path.join(SP, "answer_audit.json"), "w"), indent=1)
    print("\nwrote answer_audit.json")

if __name__ == "__main__":
    main()
