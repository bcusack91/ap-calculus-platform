#!/usr/bin/env python3
"""
latex_convert.py — conservative plain-text-math -> LaTeX converter for src/data/**.

Driven by the scan_results.json worklist produced by math_notation_scan.py.
Only rewrites math NOTATION inside TS string literals into $...$-wrapped LaTeX:

  unicode supers/subs   x² q₁     ->  $x^{2}$  $q_{1}$
  sqrt char / pseudo    √(2gh) sqrt(2*g*h) -> $\\sqrt{2gh}$ $\\sqrt{2\\cdot g\\cdot h}$
  caret exponents       10^-19  cm^2  (1/2)^n  ->  $10^{-19}$ $cm^{2}$ $(1/2)^{n}$
  paren exponents       e^(−t/RC)  ->  $e^{-t/RC}$
  sci-notation bridge   2.26 × 10⁶ / 2.0 x 10^5  ->  $2.26 \\times 10^{6}$ / $2.0 \\times 10^{5}$
  prefix scripts        ⁴₂He -> ${}^{4}_{2}He$
  Greek/symbols         mapped to macros only INSIDE a token that is being wrapped

SAFETY (absolute):
  * never touches anything outside string-literal content (ids/keys/order intact)
  * masks existing $...$ / $$...$$ / \\(...\\) spans, comments, fenced code blocks
  * skips _shared/**, CS files' carets (^ = XOR), lines with code hints (Math., function, =>)
  * skips whole token on anything it cannot fully+safely convert (no partial rewrites)
  * skips any string segment that still contains a bare $ after masking (currency)
  * inserted backslashes are doubled (\\sqrt) as required inside TS string source
  * never writes unless --write is given (default is dry-run)

Usage:
  python3 latex_convert.py --family competitive-questions --dry-run --diff
  python3 latex_convert.py --files competitive-questions/ap-physics2-bank.ts --diff
  python3 latex_convert.py --family exit-quizzes --write
"""
import argparse
import difflib
import json
import os
import re
import sys

SCRATCH = os.path.dirname(os.path.abspath(__file__))
REPO = "/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based"
ROOT = os.path.join(REPO, "src", "data")
DEFAULT_SCAN_JSON = os.path.join(SCRATCH, "scan_results.json")

sys.path.insert(0, SCRATCH)
import math_notation_scan as mns  # reuse the scanner for before/after counts

# ---------------------------------------------------------------- maps
SUP_MAP = {
    "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6",
    "⁷": "7", "⁸": "8", "⁹": "9", "⁺": "+", "⁻": "-", "⁼": "=", "⁽": "(",
    "⁾": ")", "ⁿ": "n", "ⁱ": "i", "ˣ": "x", "ᵃ": "a", "ᵇ": "b", "ᶜ": "c",
    "ᵈ": "d", "ᵉ": "e", "ᶠ": "f", "ᵍ": "g", "ʰ": "h", "ʲ": "j", "ᵏ": "k",
    "ˡ": "l", "ᵐ": "m", "ᵒ": "o", "ᵖ": "p", "ʳ": "r", "ˢ": "s", "ᵗ": "t",
    "ᵘ": "u", "ᵛ": "v", "ʷ": "w", "ʸ": "y", "ᶻ": "z",
}
SUB_MAP = {
    "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6",
    "₇": "7", "₈": "8", "₉": "9", "₊": "+", "₋": "-", "₌": "=", "₍": "(",
    "₎": ")", "ₐ": "a", "ₑ": "e", "ₒ": "o", "ₓ": "x", "ₕ": "h", "ₖ": "k",
    "ₗ": "l", "ₘ": "m", "ₙ": "n", "ₚ": "p", "ₛ": "s", "ₜ": "t",
}
GREEK = {
    "α": "\\alpha", "β": "\\beta", "γ": "\\gamma", "δ": "\\delta",
    "ε": "\\varepsilon", "ζ": "\\zeta", "η": "\\eta", "θ": "\\theta",
    "ι": "\\iota", "κ": "\\kappa", "λ": "\\lambda", "μ": "\\mu",
    "ν": "\\nu", "ξ": "\\xi", "π": "\\pi", "ρ": "\\rho", "σ": "\\sigma",
    "τ": "\\tau", "υ": "\\upsilon", "φ": "\\varphi", "χ": "\\chi",
    "ψ": "\\psi", "ω": "\\omega", "Γ": "\\Gamma", "Δ": "\\Delta",
    "Θ": "\\Theta", "Λ": "\\Lambda", "Ξ": "\\Xi", "Π": "\\Pi",
    "Σ": "\\Sigma", "Φ": "\\Phi", "Ψ": "\\Psi", "Ω": "\\Omega",
}
SYM = {
    "×": "\\times", "·": "\\cdot", "⋅": "\\cdot", "∝": "\\propto",
    "±": "\\pm", "∞": "\\infty", "∫": "\\int", "≈": "\\approx",
    "≤": "\\le", "≥": "\\ge", "≠": "\\ne", "−": "-",
    "½": "\\tfrac{1}{2}", "¼": "\\tfrac{1}{4}", "¾": "\\tfrac{3}{4}",
    "⅓": "\\tfrac{1}{3}", "⅔": "\\tfrac{2}{3}",
}
# symbols allowed as a bare exponent after ^
EXP_SYM = dict(GREEK)
EXP_SYM["∞"] = "\\infty"

# only entities whose replacement is itself a converter "hit" (so the token
# containing it always gets wrapped — never a bare mutation left behind)
HTML_ENTITIES = {
    "&radic;": "√", "&sup1;": "¹", "&sup2;": "²", "&sup3;": "³",
}

# characters a math "token" may contain (ASCII '-' handled contextually via trim)
_RUN_EXTRA = "._^/*+(){}-"
RUN_CHARS = set("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
RUN_CHARS |= set(_RUN_EXTRA)
RUN_CHARS |= set(SUP_MAP) | set(SUB_MAP) | set(GREEK) | set(SYM) | {"√"}
TOKEN_RE = re.compile("[" + re.escape("".join(sorted(RUN_CHARS))) + "]+")

# does a token contain anything we convert? (scanner categories)
HIT_RE = re.compile(
    "[" + re.escape("".join(sorted(set(SUP_MAP) | set(SUB_MAP)))) + "√]"
    r"|sqrt\s*\("
    r"|\^"
    r"|_\("
)
CARET_ONLY_RE = re.compile(r"\^|sqrt\s*\(")

# lines matching this are treated as code and never transformed (belt-and-
# braces on top of the string lexer). Word-boundary aware so that prose like
# "the work function of a metal" is NOT skipped.
CODE_HINT_RE = re.compile(
    r"\bfunction\b\s*\w*\s*\(|=>|\bMath\.|\bconsole\.|\brequire\(|"
    r"\bwindow\.|\bdocument\.|\.push\(|\.map\(|\.filter\(|^\s*import\b")

PROSE_RE = re.compile(r"[A-Za-z]{2,}\s+[A-Za-z]{2,}\s+[A-Za-z]{2,}")

ALNUM_DOT = set("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.")


FUNC_RE = re.compile(
    r"(arcsin|arccos|arctan|sinh|cosh|tanh|sin|cos|tan|sec|csc|cot|ln|log)"
    r"(?![A-Za-z])")


class TokenSkip(Exception):
    pass


# ---------------------------------------------------------------- TS lexer
def line_string_segments(text):
    """Yield, per line, the character ranges that are TS string-literal CONTENT.

    Returns (lines, seg_by_line) where seg_by_line[i] is a list of
    (start, end, mode) with mode 's' (single/double-quoted) or 't' (template).
    Comments and template ${...} expressions are excluded. Conservative: on any
    ambiguity the region is treated as code (not transformed).
    """
    lines = text.split("\n")
    seg_by_line = []
    stack = ["code"]  # 'code' | 'sq' | 'dq' | 'tpl' | ['expr', depth]
    in_block_comment = False
    for line in lines:
        marks = [None] * len(line)
        i, n = 0, len(line)
        in_line_comment = False
        while i < n:
            if in_block_comment:
                if line.startswith("*/", i):
                    in_block_comment = False
                    i += 2
                else:
                    i += 1
                continue
            if in_line_comment:
                break
            top = stack[-1]
            c = line[i]
            if top == "code" or isinstance(top, list):
                if line.startswith("//", i):
                    in_line_comment = True
                    i += 2
                    continue
                if line.startswith("/*", i):
                    in_block_comment = True
                    i += 2
                    continue
                if c == "'":
                    stack.append("sq")
                elif c == '"':
                    stack.append("dq")
                elif c == "`":
                    stack.append("tpl")
                elif isinstance(top, list):
                    if c == "{":
                        top[1] += 1
                    elif c == "}":
                        top[1] -= 1
                        if top[1] == 0:
                            stack.pop()
                i += 1
                continue
            # inside a string
            if c == "\\":
                mode = "t" if top == "tpl" else "s"
                marks[i] = mode
                if i + 1 < n:
                    marks[i + 1] = mode
                i += 2
                continue
            if top == "sq" and c == "'":
                stack.pop()
                i += 1
                continue
            if top == "dq" and c == '"':
                stack.pop()
                i += 1
                continue
            if top == "tpl" and c == "`":
                stack.pop()
                i += 1
                continue
            if top == "tpl" and line.startswith("${", i):
                stack.append(["expr", 1])
                i += 2
                continue
            marks[i] = "t" if top == "tpl" else "s"
            i += 1
        # sq/dq strings cannot span lines; recover if unterminated
        while stack[-1] in ("sq", "dq"):
            stack.pop()
        segs = []
        j = 0
        while j < len(marks):
            if marks[j] is not None:
                k = j
                while k < len(marks) and marks[k] == marks[j]:
                    k += 1
                segs.append((j, k, marks[j]))
                j = k
            else:
                j += 1
        seg_by_line.append(segs)
    return lines, seg_by_line


# ---------------------------------------------------------------- masking
def _escaped(s, i):
    bs = 0
    j = i - 1
    while j >= 0 and s[j] == "\\":
        bs += 1
        j -= 1
    return bs % 2 == 1


def mask_protected(seg):
    """Blank (\\x00) already-LaTeX spans in a string segment.

    Returns (masked, ok). ok=False means the segment still contains a bare $
    (currency or unpairable) — caller must skip the whole segment.
    """
    s = list(seg)

    def blank(a, b):
        for k in range(a, b):
            s[k] = "\x00"

    for pat in (r"\\+\(.*?\\+\)", r"\\+\[.*?\\+\]", r"\\`.*?\\`"):
        for m in re.finditer(pat, seg):
            blank(m.start(), m.end())
    cur = "".join(s)
    for m in re.finditer(r"\$\$.*?\$\$", cur):
        blank(m.start(), m.end())
    cur = "".join(s)
    # pair single $ left-to-right; prose-looking spans are treated as currency
    idxs = [i for i, ch in enumerate(cur)
            if ch == "$" and not _escaped(cur, i)
            and not (i + 1 < len(cur) and cur[i + 1] == "{")]
    k = 0
    while k + 1 < len(idxs):
        a, b = idxs[k], idxs[k + 1]
        span = cur[a + 1:b]
        if PROSE_RE.search(span):
            k += 1  # looks like prose between two currency $s: leave both bare
            continue
        blank(a, b + 1)
        k += 2
    masked = "".join(s)
    ok = "$" not in masked.replace("\\$", "")
    return masked, ok


# ---------------------------------------------------------------- token utils
def _paren_scan(tok):
    """Return (balance_ok, first_unmatched_open, first_unmatched_close)."""
    stack = []
    first_close = None
    pairs = {")": "(", "}": "{"}
    for i, c in enumerate(tok):
        if c in "({":
            stack.append((c, i))
        elif c in ")}":
            if stack and stack[-1][0] == pairs[c]:
                stack.pop()
            elif first_close is None:
                first_close = i
    first_open = stack[0][1] if stack else None
    return (first_open is None and first_close is None), first_open, first_close


PUNCT_TRAIL = ".,:;!?"
LEAD_OPS = "*=×·/+^_"
TRAIL_OPS = "*=×·/+^_−-"


def trim_token(tok, a, b):
    """Trim [a,b) span of tok down to a safe, paren-balanced core."""
    while a < b:
        changed = False
        while b > a and tok[b - 1] in PUNCT_TRAIL:
            b -= 1
            changed = True
        while a < b and tok[a] in LEAD_OPS:
            a += 1
            changed = True
        while b > a and tok[b - 1] in TRAIL_OPS:
            b -= 1
            changed = True
        core = tok[a:b]
        ok, first_open, first_close = _paren_scan(core)
        if not ok:
            if first_close is not None and first_close == len(core) - 1:
                b -= 1
                changed = True
            elif first_open is not None and first_open == 0:
                a += 1
                changed = True
            elif first_open is not None:
                # interior unmatched '(': keep whichever side still has a hit
                if HIT_RE.search(core[first_open + 1:]):
                    a = a + first_open + 1
                else:
                    b = a + first_open
                changed = True
            elif first_close is not None:
                if HIT_RE.search(core[:first_close]):
                    b = a + first_close
                else:
                    a = a + first_close + 1
                changed = True
        # strip a trailing hyphenated English word: r⁴-dependence -> r⁴
        m = re.search(r"-[A-Za-z]{4,}$", tok[a:b])
        if m and not any(ch.isdigit() for ch in m.group(0)):
            b -= len(m.group(0))
            changed = True
        if not changed:
            break
    return a, b


EXT_PROSE_RE = re.compile(r"[A-Za-z]{2,}\s+[A-Za-z]{2,}")


def extend_balanced(masked, work, a, b):
    """Grow [a,b) so parens broken by spaces are captured whole, e.g. the
    piece '√(2' inside '√(2 × 9.8 × 5.0)'. Only crosses spaces + RUN chars,
    never masked (\\x00) content, never prose ('see note'), max 80 chars."""
    n = len(masked)
    for _ in range(6):
        ok, first_open, first_close = _paren_scan(work[a:b])
        if ok:
            break
        if first_close is not None:
            # scan left for the '(' that matches the first unmatched ')'
            depth, j, steps, found = 1, a - 1, 0, None
            while j >= 0 and steps < 80:
                ch = masked[j]
                if ch == ")":
                    depth += 1
                elif ch == "(":
                    depth -= 1
                    if depth == 0:
                        found = j
                        break
                elif ch != " " and ch not in RUN_CHARS:
                    break
                j -= 1
                steps += 1
            if found is None or EXT_PROSE_RE.search(work[found:a]) \
                    or "**" in work[found:a]:
                return a, b
            a = found
            continue
        if first_open is not None:
            depth, j, steps, found = 1, b, 0, None
            while j < n and steps < 80:
                ch = masked[j]
                if ch == "(":
                    depth += 1
                elif ch == ")":
                    depth -= 1
                    if depth == 0:
                        found = j
                        break
                elif ch != " " and ch not in RUN_CHARS:
                    break
                j += 1
                steps += 1
            if found is None or EXT_PROSE_RE.search(work[b:found]) \
                    or "**" in work[b:found]:
                return a, b
            b = found + 1
            continue
    else:
        return a, b
    # re-absorb directly attached material on both edges: bare RUN chars
    # (e.g. trailing ²) and COMPLETE balanced (...)/{...} groups, so chained
    # products like (6.63 × 10⁻³⁴)(3 × 10⁸)/(500 × 10⁻⁹) become one span
    budget = 120
    while b < n and budget > 0:
        ch = masked[b]
        if ch in "({":
            close = ")" if ch == "(" else "}"
            j = find_matching(masked, b, ch, close)
            if j < 0:
                break
            grp = masked[b:j + 1]
            if "\x00" in grp or EXT_PROSE_RE.search(grp) or "**" in grp:
                break
            budget -= j + 1 - b
            b = j + 1
        elif ch in ")}":
            break
        elif ch in RUN_CHARS:
            b += 1
            budget -= 1
        else:
            break
    budget = 120
    while a > 0 and budget > 0:
        ch = masked[a - 1]
        if ch in ")}":
            opener = "(" if ch == ")" else "{"
            depth, j, found = 1, a - 2, None
            while j >= 0 and a - j <= budget:
                if masked[j] == ch:
                    depth += 1
                elif masked[j] == opener:
                    depth -= 1
                    if depth == 0:
                        found = j
                        break
                j -= 1
            if found is None:
                break
            grp = masked[found:a]
            if "\x00" in grp or EXT_PROSE_RE.search(grp) or "**" in grp:
                break
            budget -= a - found
            a = found
        elif ch in "({":
            break
        elif ch in RUN_CHARS:
            a -= 1
            budget -= 1
        else:
            break
    return a, b


def find_matching(s, i, open_c="(", close_c=")"):
    depth = 0
    for j in range(i, len(s)):
        if s[j] == open_c:
            depth += 1
        elif s[j] == close_c:
            depth -= 1
            if depth == 0:
                return j
    return -1


# ---------------------------------------------------------------- converter
def emit(tok, allow_caret):
    """Convert one plain-text math token to LaTeX (unwrapped).

    Returns (latex, hits). Raises TokenSkip if any part cannot be converted
    safely — caller must then leave the token untouched (no partial edits).
    """
    out = []
    hits = 0
    i, n = 0, len(tok)
    while i < n:
        c = tok[i]
        if tok.startswith("sqrt(", i):
            j = find_matching(tok, i + 4)
            if j < 0:
                raise TokenSkip("sqrt( unbalanced")
            inner, h = emit(tok[i + 5:j], allow_caret)
            out.append("\\sqrt{" + inner + "}")
            hits += h + 1
            i = j + 1
            continue
        if c == "√":
            if i + 1 < n and tok[i + 1] == "(":
                j = find_matching(tok, i + 1)
                if j < 0:
                    raise TokenSkip("√( unbalanced")
                inner, h = emit(tok[i + 2:j], allow_caret)
                out.append("\\sqrt{" + inner + "}")
                hits += h + 1
                i = j + 1
                continue
            m = re.match(r"[A-Za-z0-9.]+", tok[i + 1:])
            if not m:
                raise TokenSkip("bare √")
            inner, h = emit(m.group(0).rstrip("."), allow_caret)
            out.append("\\sqrt{" + inner + "}")
            hits += h + 1
            i = i + 1 + len(m.group(0).rstrip("."))
            continue
        if c == "^":
            if not allow_caret:
                raise TokenSkip("caret disabled (CS file)")
            if i == 0 or not (tok[i - 1].isalnum() or tok[i - 1] in ")}"
                              or tok[i - 1] in SUP_MAP or tok[i - 1] in SUB_MAP):
                raise TokenSkip("caret without base")
            nxt = tok[i + 1] if i + 1 < n else ""
            if nxt == "(":
                j = find_matching(tok, i + 1)
                if j < 0:
                    raise TokenSkip("^( unbalanced")
                inner, h = emit(tok[i + 2:j], allow_caret)
                out.append("^{" + inner + "}")
                hits += h + 1
                i = j + 1
                continue
            if nxt == "{":
                j = find_matching(tok, i + 1, "{", "}")
                if j < 0:
                    raise TokenSkip("^{ unbalanced")
                inner, h = emit(tok[i + 2:j], allow_caret)
                out.append("^{" + inner + "}")
                hits += h + 1
                i = j + 1
                continue
            if nxt in EXP_SYM:
                out.append("^{" + EXP_SYM[nxt] + "}")
                hits += 1
                i += 2
                continue
            m = re.match(r"[+\-−]?(?:[0-9]+(?:\.[0-9]+)?|[A-Za-z]+[0-9]*)",
                         tok[i + 1:])
            if not m:
                raise TokenSkip("caret without exponent")
            exp = m.group(0).replace("−", "-")
            out.append("^{" + exp + "}")
            hits += 1
            i = i + 1 + m.end()
            continue
        if c in SUP_MAP:
            j = i
            while j < n and tok[j] in SUP_MAP:
                j += 1
            mapped = "".join(SUP_MAP[ch] for ch in tok[i:j])
            prefix = "{}" if i == 0 else ""
            out.append(prefix + "^{" + mapped + "}")
            hits += 1
            i = j
            continue
        if c in SUB_MAP:
            j = i
            while j < n and tok[j] in SUB_MAP:
                j += 1
            mapped = "".join(SUB_MAP[ch] for ch in tok[i:j])
            prefix = "{}" if i == 0 else ""
            out.append(prefix + "_{" + mapped + "}")
            hits += 1
            i = j
            continue
        if c == "_":
            if i + 1 < n and tok[i + 1] == "(":
                j = find_matching(tok, i + 1)
                if j < 0:
                    raise TokenSkip("_( unbalanced")
                inner, h = emit(tok[i + 2:j], allow_caret)
                out.append("_{" + inner + "}")
                hits += h + 1
                i = j + 1
                continue
            m = re.match(r"[A-Za-z0-9]+", tok[i + 1:])
            if not m:
                raise TokenSkip("bare _")
            out.append("_{" + m.group(0) + "}")
            i += 1 + m.end()
            continue
        if c.isascii() and c.isalpha() and (i == 0 or not tok[i - 1].isalpha()):
            fm = FUNC_RE.match(tok, i)
            if fm:
                out.append("\\" + fm.group(1) + " ")
                i = fm.end(1)
                continue
        if c in GREEK:
            out.append(GREEK[c] + " ")
            i += 1
            continue
        if c in SYM:
            v = SYM[c]
            out.append(v + " " if v.startswith("\\") else v)
            i += 1
            continue
        if c == "*":
            out.append("\\cdot ")
            i += 1
            continue
        if (c.isascii() and c.isalpha()
                and (i == 0 or tok[i - 1] not in ALNUM_DOT)
                and i + 1 < n and tok[i + 1] in "0123456789"
                and (i + 2 >= n or tok[i + 2] not in "0123456789.")):
            # single letter + single digit is an implicit subscript: v1 -> v_{1}
            out.append(c + "_{" + tok[i + 1] + "}")
            i += 2
            continue
        out.append(c)
        i += 1
    latex = re.sub(r"  +", " ", "".join(out)).strip()
    latex = latex.replace(" ^{", "^{").replace(" _{", "_{")
    # 'x' used as a multiplication sign between numbers/groups
    latex = re.sub(r"(?<=[0-9)}]) x (?=[0-9(])", r" \\times ", latex)
    return latex, hits


# an English-looking word (>=4 letters) directly followed by a superscript run:
# keep the word as text and wrap only the script, e.g. Length² -> Length${}^{2}$
WORD_SUP_RE = re.compile(
    "^([A-Za-z]{4,})([" + re.escape("".join(sorted(SUP_MAP))) + "]+)$")


BRIDGE_RE = re.compile(r"([0-9]+(?:\.[0-9]+)?)\s*(?:[×·⋅]|\bx\b)\s*$")


def process_segment(seg, mode, allow_caret, stats, examples, examples_max):
    """Return converted segment text (or None if unchanged/skipped)."""
    # html entity/tag normalization is folded into candidate tokens only
    masked, ok = mask_protected(seg)
    if not ok:
        stats["seg_currency_skipped"] += 1
        return None
    # normalize html sup/sub tags into pseudo notation before tokenizing
    work = seg
    forced_spans = []
    if "<su" in seg or "&" in seg:
        def _sup(m):
            forced_spans.append(True)
            return m.group(1) + "^(" + m.group(2) + ")"

        def _sub(m):
            forced_spans.append(True)
            return m.group(1) + "_(" + m.group(2) + ")"
        new = re.sub(r"([A-Za-z0-9)\]])<sup>([^<>]{1,16})</sup>", _sup, work)
        new = re.sub(r"([A-Za-z0-9)\]])<sub>([^<>]{1,16})</sub>", _sub, new)
        for ent, uni in HTML_ENTITIES.items():
            if ent in new:
                new = new.replace(ent, uni)
                forced_spans.append(True)
        if new != work:
            work = new
            masked, ok = mask_protected(work)
            if not ok:
                stats["seg_currency_skipped"] += 1
                return None
    replacements = []
    for m in TOKEN_RE.finditer(masked):
        pieces = []
        # markdown bold ** is a boundary, never math
        start = m.start()
        for chunk in re.split(r"(\*\*+)", m.group(0)):
            if not chunk.startswith("**"):
                pieces.append((start, start + len(chunk)))
            start += len(chunk)
        for pa, pb in pieces:
            if HIT_RE.search(work[pa:pb]):
                pa, pb = extend_balanced(masked, work, pa, pb)
            a, b = trim_token(work, pa, pb)
            if b <= a:
                continue
            tok = work[a:b]
            if "\\" in tok:
                continue
            if not HIT_RE.search(tok):
                continue
            word_prefix = ""
            wm = WORD_SUP_RE.match(tok)
            if wm:
                word_prefix, tok = wm.group(1), wm.group(2)
            try:
                latex, hits = emit(tok, allow_caret)
            except TokenSkip:
                stats["tok_skipped"] += 1
                continue
            if hits == 0 or not latex:
                continue
            # scientific-notation bridge: pull "2.26 × " / "2.0 x " into the span
            if tok.startswith("10") and len(tok) > 2 \
                    and (tok[2] == "^" or tok[2] in SUP_MAP):
                bm = BRIDGE_RE.search(work[:a])
                if bm:
                    a = bm.start(1)
                    latex = bm.group(1) + " \\times " + latex
            # a leading brace would form "${" (template interpolation!) — pad
            open_d = "$ " if latex.startswith("{") else "$"
            rep = word_prefix + open_d + latex + "$"
            prev_ch = work[a - 1] if a > 0 else ""
            next_ch = work[b] if b < len(work) else ""
            if prev_ch == "$" or next_ch == "$" or next_ch == "{":
                stats["tok_skipped"] += 1
                continue
            rep_src = rep.replace("\\", "\\\\")
            replacements.append((a, b, rep_src))
            if len(examples) < examples_max:
                examples.append((tok, rep_src))
    if not replacements:
        return work if work != seg else None
    replacements.sort()
    # drop overlaps (bridge/extension may reach into a preceding candidate);
    # merge exactly-adjacent spans so we never emit "$$"
    filtered = []
    last_end = -1
    for a, b, rep in replacements:
        if a == last_end and filtered and filtered[-1][2].endswith("$") \
                and rep.startswith("$") and not rep.startswith("$ "):
            pa, pb, prep = filtered[-1]
            filtered[-1] = (pa, b, prep[:-1] + rep[1:])
            last_end = b
        elif a >= last_end:
            filtered.append((a, b, rep))
            last_end = b
    new = []
    pos = 0
    for a, b, rep in filtered:
        new.append(work[pos:a])
        new.append(rep)
        pos = b
    new.append(work[pos:])
    stats["tokens_wrapped"] += len(filtered)
    return "".join(new)


# ---------------------------------------------------------------- per-file
def convert_text(text, allow_caret, stats, examples, examples_max):
    lines, seg_by_line = line_string_segments(text)
    fence_open = False
    display_open = False
    out_lines = []
    for line, segs in zip(lines, seg_by_line):
        if not segs:
            out_lines.append(line)
            continue
        if CODE_HINT_RE.search(line):
            stats["lines_code_skipped"] += 1
            out_lines.append(line)
            continue
        new_line = line
        for s, e, mode in reversed(segs):
            segtext = line[s:e]
            if mode == "t":
                stripped = segtext.strip()
                if stripped.startswith("```"):
                    fence_open = not fence_open
                    continue
                if fence_open:
                    continue
                # multi-line $$ display blocks: toggle on odd count, skip line
                dd = len(re.findall(r"\$\$", segtext))
                if display_open:
                    if dd % 2 == 1:
                        display_open = False
                    continue
                if dd % 2 == 1:
                    display_open = True
                    continue
            converted = process_segment(segtext, mode, allow_caret, stats,
                                        examples, examples_max)
            if converted is not None and converted != segtext:
                new_line = new_line[:s] + converted + new_line[e:]
        out_lines.append(new_line)
    return "\n".join(out_lines)


def is_cs_file(rel):
    r = rel.lower()
    return any(k in r for k in ("csp", "csa", "computer-science", "computer_science"))


def scan_totals(path):
    r = mns.scan_file(path)
    return (r["total"], r["counts"]) if r else (0, {})


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--scan-json", default=DEFAULT_SCAN_JSON)
    ap.add_argument("--family", default=None,
                    help="only files whose worklist path contains this substring")
    ap.add_argument("--files", default=None,
                    help="comma-separated relpath substrings to include")
    ap.add_argument("--dry-run", action="store_true",
                    help="explicit dry-run (this is also the default)")
    ap.add_argument("--write", action="store_true",
                    help="actually modify repo files (off by default)")
    ap.add_argument("--diff", action="store_true", help="print unified diffs")
    ap.add_argument("--diff-lines", type=int, default=120,
                    help="max diff lines printed per file")
    ap.add_argument("--examples", type=int, default=8,
                    help="token before/after examples to collect per run")
    ap.add_argument("--limit", type=int, default=None, help="max files")
    args = ap.parse_args()
    if args.write and args.dry_run:
        ap.error("--write and --dry-run are mutually exclusive")

    with open(args.scan_json, encoding="utf-8") as f:
        worklist = json.load(f)["files"]

    selected = []
    for rel in sorted(worklist):
        if rel.startswith("_shared") or "/_shared/" in rel or "_shared/" in rel:
            continue
        if args.family and args.family not in rel:
            continue
        if args.files and not any(sub.strip() in rel
                                  for sub in args.files.split(",")):
            continue
        selected.append(rel)
    if args.limit:
        selected = selected[:args.limit]

    grand = {"before": 0, "after": 0, "wrapped": 0, "files_changed": 0}
    examples = []
    tmp_path = os.path.join(SCRATCH, "_latex_convert_after_tmp.ts")
    print(f"{'file':64} {'before':>7} {'after':>7} {'wrap':>6} "
          f"{'tokSkip':>8} {'segSkip':>8} {'lnSkip':>7}")
    for rel in selected:
        path = os.path.join(ROOT, rel)
        if not os.path.isfile(path):
            print(f"{rel:64} MISSING")
            continue
        with open(path, encoding="utf-8") as f:
            text = f.read()
        stats = {"tokens_wrapped": 0, "tok_skipped": 0,
                 "seg_currency_skipped": 0, "lines_code_skipped": 0}
        allow_caret = not is_cs_file(rel)
        new_text = convert_text(text, allow_caret, stats, examples, args.examples)
        before_total, _ = scan_totals(path)
        with open(tmp_path, "w", encoding="utf-8") as f:
            f.write(new_text)
        after_total, _ = scan_totals(tmp_path)
        changed = new_text != text
        print(f"{rel:64} {before_total:>7} {after_total:>7} "
              f"{stats['tokens_wrapped']:>6} {stats['tok_skipped']:>8} "
              f"{stats['seg_currency_skipped']:>8} {stats['lines_code_skipped']:>7}")
        grand["before"] += before_total
        grand["after"] += after_total
        grand["wrapped"] += stats["tokens_wrapped"]
        grand["files_changed"] += 1 if changed else 0
        if args.diff and changed:
            diff = difflib.unified_diff(text.splitlines(), new_text.splitlines(),
                                        fromfile=f"a/{rel}", tofile=f"b/{rel}",
                                        lineterm="", n=0)
            shown = 0
            for dl in diff:
                print(dl)
                shown += 1
                if shown >= args.diff_lines:
                    print(f"... diff truncated at {args.diff_lines} lines ...")
                    break
        if args.write and changed:
            with open(path, "w", encoding="utf-8") as f:
                f.write(new_text)
    if os.path.exists(tmp_path):
        os.remove(tmp_path)
    print(f"\nTOTAL: {len(selected)} files, {grand['files_changed']} changed, "
          f"{grand['wrapped']} tokens wrapped, scanner hits "
          f"{grand['before']} -> {grand['after']}")
    if examples:
        print("\nToken examples (plain -> TS-source LaTeX):")
        for tok, rep in examples:
            print(f"  {tok!r:50} -> {rep!r}")
    if not args.write:
        print("\n(dry-run: no repo files were modified)")


if __name__ == "__main__":
    main()
