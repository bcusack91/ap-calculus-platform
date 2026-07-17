#!/usr/bin/env python3
"""
Plain-text math notation inventory for src/data/**.

Scans all .ts data files for math written OUTSIDE LaTeX $...$ delimiters:
  1. unicode_supsub : Unicode superscript/subscript chars (², ³, ⁻¹, ₀, ᵃ ...)
  2. sqrt_char      : the √ character
  3. caret          : ^ used as exponent notation (outside $ spans)
  4. html_tags      : <sup>, <sub>, &radic;, &sup2;, &sup3;, &frac12; etc.
  5. pseudo         : sqrt(...) and ^(...) pseudo-notation

$-span parsing is done per line: unescaped $ chars (odd backslash count = escaped)
that are not TS template interpolations (`${`) are paired left-to-right into
math spans. An unpaired trailing $ on a line is treated as a literal (currency).
$$ is treated as a display-math toggle. Text inside spans is masked before the
category regexes run, so fully-LaTeX files are only flagged for genuine
outside-$ occurrences.

Usage: python3 math_notation_scan.py [--json OUT.json] [--top N]
"""
import os, re, sys, json, argparse
from collections import defaultdict

ROOT = "/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based/src/data"

# ---------- character classes ----------
SUPERSCRIPTS = "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿⁱ"
SUBSCRIPTS   = "₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎" \
               "ₐₑₒₓₔₕₖₗₘₙₚₛₜ"
# superscript modifier letters (ᵃ ᵇ ᶜ ... ᵏ ᵐ ⁿ ᵗ ˣ etc.)
SUP_LETTERS  = "".join(chr(c) for c in list(range(0x1d43, 0x1d6b)) + [0x02b0,0x02b3,0x02e2,0x02e3,0x1d9c,0x1da0,0x1dbb])
UNI_SUPSUB   = set(SUPERSCRIPTS + SUBSCRIPTS + SUP_LETTERS)

RE_UNI    = re.compile("[" + re.escape("".join(sorted(UNI_SUPSUB))) + "]")
RE_SQRT   = re.compile("√")                                   # √
RE_HTML   = re.compile(r"</?su[bp]\b[^>]*>|&(?:radic|sup[123n]?|sub[123]?|frac\d\d|sdot|middot|times|divide|minus|plusmn|deg|infin|radic);", re.I)
# pseudo-notation (checked before generic caret; pseudo hits are excluded from caret count)
RE_PSEUDO = re.compile(r"\bsqrt\s*\(|\^\s*\(")
# caret used as exponent: ^ followed (possibly after space) by alnum, -, +, {, (
RE_CARET  = re.compile(r"\^")

CATS = ["unicode_supsub", "sqrt_char", "caret", "html_tags", "pseudo"]

def mask_math_spans(line: str) -> str:
    """Replace content of $...$ spans (incl. the $s) with spaces. Per-line pairing;
    unpaired trailing $ treated as literal. `\\$` escaped, `${` interpolation skipped."""
    positions = []
    i, n = 0, len(line)
    while i < n:
        c = line[i]
        if c == "$":
            # count preceding backslashes
            bs = 0
            j = i - 1
            while j >= 0 and line[j] == "\\":
                bs += 1; j -= 1
            if bs % 2 == 1:            # escaped \$ -> literal dollar
                i += 1; continue
            if i + 1 < n and line[i+1] == "{":   # template interpolation ${...}
                i += 1; continue
            if i + 1 < n and line[i+1] == "$":   # $$ display math: treat as one delim
                positions.append((i, i+1))
                i += 2; continue
            positions.append((i, i))
            i += 1; continue
        i += 1
    if not positions:
        return line
    out = list(line)
    # pair delimiters left-to-right; drop last if odd (currency / stray)
    k = 0
    while k + 1 < len(positions):
        start = positions[k][0]
        end   = positions[k+1][1]
        for p in range(start, end + 1):
            out[p] = " "
        k += 2
    return "".join(out)

# mask \(...\) and \[...\] LaTeX delimiters (they appear as \\( \\) in TS source bytes)
RE_PAREN_LATEX = re.compile(r"\\+\((.*?)\\+\)", re.S)
RE_BRACK_LATEX = re.compile(r"\\+\[(.*?)\\+\]", re.S)

def mask_paren_latex(line: str):
    changed = [False]
    def repl(m):
        changed[0] = True
        return " " * len(m.group(0))
    line = RE_PAREN_LATEX.sub(repl, line)
    line = RE_BRACK_LATEX.sub(repl, line)
    return line, changed[0]

def scan_file(path):
    counts = dict.fromkeys(CATS, 0)
    inside = dict.fromkeys(CATS, 0)   # occurrences INSIDE $ spans (unicode/sqrt also break KaTeX)
    examples = []                     # (lineno, cat, snippet)
    has_dollar_math = False
    try:
        text = open(path, encoding="utf-8", errors="replace").read()
    except OSError:
        return None
    for lineno, raw in enumerate(text.splitlines(), 1):
        stripped = raw.strip()
        if stripped.startswith("//") or stripped.startswith("*") or stripped.startswith("/*"):
            continue
        masked, pl = mask_paren_latex(raw)
        masked = mask_math_spans(masked)
        if masked != raw:
            has_dollar_math = True
        # inside-span occurrences of unicode/sqrt (informational)
        if masked != raw:
            span_text = "".join(ch for ch, m in zip(raw, masked) if m == " " and ch != " ")
            inside["unicode_supsub"] += len(RE_UNI.findall(span_text))
            inside["sqrt_char"]      += len(RE_SQRT.findall(span_text))
        line_hits = {}
        u = RE_UNI.findall(masked)
        if u: line_hits["unicode_supsub"] = len(u)
        s = RE_SQRT.findall(masked)
        if s: line_hits["sqrt_char"] = len(s)
        h = RE_HTML.findall(masked)
        if h: line_hits["html_tags"] = len(h)
        p = RE_PSEUDO.findall(masked)
        if p: line_hits["pseudo"] = len(p)
        c = len(RE_CARET.findall(masked)) - sum(1 for x in p if "^" in x)
        if c > 0: line_hits["caret"] = c
        for cat, k in line_hits.items():
            counts[cat] += k
        if line_hits:
            for cat in line_hits:
                if len([e for e in examples if e[1] == cat]) < 2:
                    snippet = stripped if len(stripped) <= 160 else stripped[:157] + "..."
                    examples.append((lineno, cat, snippet))
    total = sum(counts.values())
    return {"counts": counts, "inside": inside, "total": total,
            "examples": examples, "has_dollar_math": has_dollar_math}

def family_of(rel):
    parts = rel.split(os.sep)
    if len(parts) > 1:
        d = parts[0]
        if d.endswith("-frq"): return "frq"
        if d.endswith("-practice"): return "practice-mcq"
        if d == "interactive-lessons": return "interactive-lessons"
        return d   # entrance-quizzes, exit-quizzes, competitive-questions, unit-tests, mini-boss-questions, mcat, _shared, sat-practice...
    f = parts[0]
    if "diagnostic" in f: return "diagnostics"
    if "daily-question" in f: return "daily-question"
    if "study-plans" in f: return "study-plans"
    if "flashcard" in f: return "flashcards"
    return "root-other"

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--json", default=None)
    ap.add_argument("--top", type=int, default=20)
    args = ap.parse_args()

    files = []
    for dirpath, _, names in os.walk(ROOT):
        for n in sorted(names):
            if n.endswith(".ts") or n.endswith(".tsx"):
                files.append(os.path.join(dirpath, n))

    per_file, fam = {}, defaultdict(lambda: {"files": 0, "flagged_files": 0, "latex_clean": 0,
                                             "no_math": 0, **{c: 0 for c in CATS}, "total": 0})
    for f in files:
        rel = os.path.relpath(f, ROOT)
        r = scan_file(f)
        if r is None: continue
        per_file[rel] = r
        fm = fam[family_of(rel)]
        fm["files"] += 1
        for c in CATS: fm[c] += r["counts"][c]
        fm["total"] += r["total"]
        if r["total"] > 0: fm["flagged_files"] += 1
        elif r["has_dollar_math"]: fm["latex_clean"] += 1
        else: fm["no_math"] += 1

    def effort(t, ff):
        if t == 0: return "none"
        if t < 25: return "trivial (<1h, hand-fix)"
        if t < 150: return "small (1-3h, scripted+review)"
        if t < 1000: return "medium (scripted conversion + spot-check)"
        return "large (needs automated converter + validation pass)"

    print(f"Scanned {len(per_file)} files under src/data\n")
    print("== PER-FAMILY TOTALS (outside-$ occurrences) ==")
    hdr = f"{'family':24}{'files':>6}{'flag':>6}{'uniSS':>8}{'sqrt':>7}{'caret':>8}{'html':>6}{'pseudo':>8}{'TOTAL':>8}  effort"
    print(hdr)
    for name, m in sorted(fam.items(), key=lambda kv: -kv[1]["total"]):
        print(f"{name:24}{m['files']:>6}{m['flagged_files']:>6}{m['unicode_supsub']:>8}{m['sqrt_char']:>7}"
              f"{m['caret']:>8}{m['html_tags']:>6}{m['pseudo']:>8}{m['total']:>8}  {effort(m['total'], m['flagged_files'])}")

    clean = [n for n, m in sorted(fam.items()) if m["total"] == 0]
    print("\n== CLEAN FAMILIES ==")
    print(", ".join(clean) if clean else "(none)")

    print(f"\n== TOP {args.top} WORST FILES ==")
    worst = sorted(per_file.items(), key=lambda kv: -kv[1]["total"])[:args.top]
    for rel, r in worst:
        c = r["counts"]
        print(f"\n{rel}  TOTAL={r['total']}  "
              f"(uniSS={c['unicode_supsub']} sqrt={c['sqrt_char']} caret={c['caret']} html={c['html_tags']} pseudo={c['pseudo']})")
        for lineno, cat, snip in r["examples"][:4]:
            print(f"   L{lineno} [{cat}] {snip}")

    ins_u = sum(r["inside"]["unicode_supsub"] for r in per_file.values())
    ins_s = sum(r["inside"]["sqrt_char"] for r in per_file.values())
    print(f"\n(informational) unicode sup/sub INSIDE $ spans: {ins_u}; √ INSIDE $ spans: {ins_s}")

    if args.json:
        json.dump({"families": fam, "files": {k: {"counts": v["counts"], "total": v["total"]}
                   for k, v in per_file.items() if v["total"] > 0}}, open(args.json, "w"), indent=1, default=dict)
        print(f"\nJSON written to {args.json}")

if __name__ == "__main__":
    main()
