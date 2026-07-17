#!/usr/bin/env python3
"""Guard pass for typed-input answer keys.

Modes:
  plan   — (run BEFORE --write) record original lines for answer-context lines
           in typed sections (input-box / input-boxes / unknown) that the
           converter would change.  Saves typed_revert_plan.json.
  apply  — (run AFTER --write) restore those exact lines from the plan.
  verify — (run AFTER apply) assert:
           1. no typed-section answer-key line differs from the plan originals;
           2. every dropdown-select converted correctAnswers string value
              appears verbatim elsewhere in the converted file (option side).
"""
import json, re, os, sys, collections, importlib.util

SP = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("latex_convert", os.path.join(SP, "latex_convert.py"))
lc = importlib.util.module_from_spec(spec)
spec.loader.exec_module(lc)

REPO = os.getcwd()
DATA = os.path.join(REPO, "src", "data")
PLAN = os.path.join(SP, "typed_revert_plan.json")

ANSWER_KEY_RE = re.compile(r"\b(correctAnswer|correctAnswers|acceptableAnswers|answers|answer)\s*:")
ANSWER_ARRAY_OPEN_RE = re.compile(r"\b(correctAnswers|acceptableAnswers|answers)\s*:\s*\[[^\]]*$")
TYPE_RE = re.compile(r"\btype\s*:\s*['\"]([a-z-]+)['\"]")
TYPED_TYPES = {"input-box", "input-boxes", "?"}
STR_VAL_RE = re.compile(r"""(['"])((?:\\.|(?!\1).)*)\1""")


def answer_context_lines(lines):
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


def worklist():
    scan = json.load(open(os.path.join(SP, "scan_results.json")))
    return sorted(k for k in scan["files"] if "interactive-lessons" in k)


def compute_plan():
    plan = {}
    for rel in worklist():
        path = os.path.join(DATA, rel)
        if not os.path.exists(path):
            continue
        text = open(path, encoding="utf-8").read()
        stats = collections.defaultdict(int)
        new_text = lc.convert_text(text, not lc.is_cs_file(rel), stats, [], 0)
        if new_text == text:
            continue
        old_lines = text.split("\n")
        new_lines = new_text.split("\n")
        assert len(old_lines) == len(new_lines), rel
        ctx = answer_context_lines(old_lines)
        for i, (a, b) in enumerate(zip(old_lines, new_lines)):
            if a == b or i not in ctx:
                continue
            if enclosing_type(old_lines, i) in TYPED_TYPES:
                plan.setdefault(rel, {})[str(i)] = {"orig": a, "converted": b}
    return plan


def cmd_plan():
    plan = compute_plan()
    json.dump(plan, open(PLAN, "w"))
    n = sum(len(v) for v in plan.values())
    print(f"plan: {len(plan)} files, {n} typed answer lines to revert")
    for rel, lines in sorted(plan.items()):
        print(f"  {rel}: lines {sorted(int(k)+1 for k in lines)}")


def cmd_apply():
    plan = json.load(open(PLAN))
    reverted = 0
    for rel, entries in plan.items():
        path = os.path.join(DATA, rel)
        lines = open(path, encoding="utf-8").read().split("\n")
        for k, e in entries.items():
            i = int(k)
            if lines[i] == e["converted"]:
                lines[i] = e["orig"]
                reverted += 1
            elif lines[i] == e["orig"]:
                pass  # already original
            else:
                print(f"MISMATCH {rel}:{i+1} — line is neither converted nor original", file=sys.stderr)
                sys.exit(1)
        open(path, "w", encoding="utf-8").write("\n".join(lines))
    print(f"apply: reverted {reverted} lines")


def cmd_verify():
    plan = json.load(open(PLAN))
    bad = 0
    for rel, entries in plan.items():
        path = os.path.join(DATA, rel)
        lines = open(path, encoding="utf-8").read().split("\n")
        for k, e in entries.items():
            if lines[int(k)] != e["orig"]:
                print(f"FAIL typed line not original: {rel}:{int(k)+1}")
                bad += 1
    # dropdown consistency: every converted correctAnswers string in a
    # dropdown-select section must appear verbatim elsewhere in the file.
    dd_missing = 0
    for rel in worklist():
        path = os.path.join(DATA, rel)
        if not os.path.exists(path):
            continue
        text = open(path, encoding="utf-8").read()
        lines = text.split("\n")
        ctx = answer_context_lines(lines)
        for i in sorted(ctx):
            if enclosing_type(lines, i) != "dropdown-select":
                continue
            if "$" not in lines[i]:
                continue
            for m in STR_VAL_RE.finditer(lines[i]):
                val = m.group(2)
                if "$" not in val:
                    continue
                occurrences = text.count(m.group(0))
                if occurrences < 2:
                    print(f"DROPDOWN-CHECK {rel}:{i+1} answer {val[:60]!r} appears {occurrences}x")
                    dd_missing += 1
    print(f"verify: {bad} typed-line failures, {dd_missing} dropdown answers without matching option string")
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    {"plan": cmd_plan, "apply": cmd_apply, "verify": cmd_verify}[sys.argv[1]]()
