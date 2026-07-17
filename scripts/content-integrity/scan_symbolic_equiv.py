#!/usr/bin/env python3
"""
TASK C: flag MCQ option PAIRS that are algebraically equivalent (symbolic, not
just numeric). Scans src/data/**/*.ts|tsx|json for `options: [...]` arrays,
normalizes LaTeX/unicode math to sympy syntax, and tests pairwise equivalence:
  1. exact normalized-form match (identical after parse)
  2. numeric sampling at several positive sample points (symbols assumed > 0,
     which is what makes sqrt(x^3) ~ x*sqrt(x) and 4x^-6 ~ 4/x^6 flag)
  3. confirmation via sympy .equals()/simplify with a per-pair timeout
Also classifies whether the pair remains equal at mixed-sign sample points
(equal-everywhere vs equal-only-on-positive-domain).
READ-ONLY: writes results JSON to the scratchpad only.
"""
import bisect, json, os, re, signal, sys, time
from itertools import combinations

import sympy
from sympy import E, pi, sqrt, log, Symbol, Lambda, simplify, nsimplify
from sympy.parsing.sympy_parser import (
    parse_expr, standard_transformations, split_symbols,
    implicit_multiplication_application, convert_xor)

ROOT = "/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based/src/data"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "symbolic_equiv_results.json")

TRANSFORMS = standard_transformations + (
    convert_xor, split_symbols, implicit_multiplication_application)

# controlled globals: I/N/S/C/O etc. become plain symbols, not sympy builtins
GLOBALS = {
    'Symbol': sympy.Symbol, 'Integer': sympy.Integer, 'Float': sympy.Float,
    'Rational': sympy.Rational, 'Function': sympy.Function, 'Pow': sympy.Pow,
    'Mul': sympy.Mul, 'Add': sympy.Add,
    'sqrt': sympy.sqrt, 'cbrt': sympy.cbrt, 'exp': sympy.exp, 'log': sympy.log,
    'sin': sympy.sin, 'cos': sympy.cos, 'tan': sympy.tan, 'sec': sympy.sec,
    'csc': sympy.csc, 'cot': sympy.cot, 'asin': sympy.asin, 'acos': sympy.acos,
    'atan': sympy.atan, 'sinh': sympy.sinh, 'cosh': sympy.cosh,
    'tanh': sympy.tanh, 'Abs': sympy.Abs, 'pi': sympy.pi, 'E': sympy.E,
}
STOPWORDS = {'or','is','to','of','an','if','at','on','be','no','so','as','it',
             'in','by','do','we','he','me','my','up','us','ii','iv','vs'}

# ---------------------------------------------------------------- extraction

OPT_RE = re.compile(r'["\']?options["\']?\s*:\s*\[')
KEY_RE = re.compile(r'["\']?(?:correctAnswer|correctIndex|correct)["\']?\s*:\s*["\']?([A-Da-d]|\d+)')
ANS_STR_RE = re.compile(r'["\']?answer["\']?\s*:\s*(["\'])(.*?)\1')

def line_of(nl_pos, off):
    return bisect.bisect_right(nl_pos, off) + 1

def js_unescape(s):
    out, i = [], 0
    while i < len(s):
        c = s[i]
        if c == '\\' and i + 1 < len(s):
            n = s[i+1]
            if n == 'n': out.append('\n')
            elif n == 't': out.append('\t')
            elif n in ('\\', "'", '"', '`'): out.append(n)
            elif n == 'u' and i + 5 < len(s):
                try:
                    out.append(chr(int(s[i+2:i+6], 16))); i += 6; continue
                except ValueError:
                    out.append(n)
            else:
                out.append('\\'); out.append(n)
            i += 2
        else:
            out.append(c); i += 1
    return ''.join(out)

def extract_string_array(text, start):
    """Bracket-match from '[' at `start`; return (list of (raw, offset), end_idx)
       for top-level string literals only. Returns None on nesting weirdness."""
    i, depth, items = start, 0, []
    n = len(text)
    while i < n:
        c = text[i]
        if c == '[':
            depth += 1; i += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                return items, i
            i += 1
        elif c in ('"', "'", '`'):
            q = c; j = i + 1; buf = []
            while j < n:
                if text[j] == '\\':
                    buf.append(text[j]); buf.append(text[j+1] if j+1 < n else ''); j += 2
                elif text[j] == q:
                    break
                else:
                    buf.append(text[j]); j += 1
            if depth == 1:
                items.append((''.join(buf), i))
            i = j + 1
        elif c == '/' and i+1 < n and text[i+1] == '/':
            i = text.find('\n', i)
            if i == -1: return None
        else:
            i += 1
        if len(items) > 12:  # not an MCQ option list
            return None
    return None

def extract_mcqs(path):
    """Yield dicts: {options:[(raw,offset)...], key:int|None}"""
    try:
        text = open(path, encoding='utf-8', errors='replace').read()
    except OSError:
        return []
    if 'options' not in text:
        return []
    nl_pos = [m.start() for m in re.finditer('\n', text)]
    out = []
    for m in OPT_RE.finditer(text):
        arr = extract_string_array(text, text.index('[', m.end() - 1))
        if not arr:
            continue
        items, end = arr
        if len(items) < 2:
            continue
        # keyed answer: prefer the window after the array (same object literal)
        nxt = text.find('options', end)
        window = text[end: min(end + 600, nxt if nxt != -1 else len(text))]
        key = None
        km = KEY_RE.search(window)
        if km:
            v = km.group(1)
            key = ord(v.upper()) - 65 if v.upper() in 'ABCD' and not v.isdigit() else int(v)
        else:
            am = ANS_STR_RE.search(window)
            if am:
                ans = am.group(2)
                for idx, (raw, _off) in enumerate(items):
                    if raw == ans:
                        key = idx; break
        if key is None:  # look just before the array
            before = text[max(0, m.start() - 250): m.start()]
            km = KEY_RE.search(before)
            if km:
                v = km.group(1)
                key = ord(v.upper()) - 65 if v.upper() in 'ABCD' and not v.isdigit() else int(v)
        out.append({
            'options': [(js_unescape(raw), line_of(nl_pos, off)) for raw, off in items],
            'key': key,
        })
    return out

# ---------------------------------------------------------------- normalization

SUPERS = {'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-'}
VULGAR = {'½':'(1/2)','⅓':'(1/3)','¼':'(1/4)','¾':'(3/4)','⅔':'(2/3)','⅛':'(1/8)'}

ALLOWED_TOKENS = {
    'sin','cos','tan','sec','csc','cot','asin','acos','atan','arcsin','arccos',
    'arctan','sinh','cosh','tanh','log','ln','sqrt','abs','exp','theta','pi',
    'dx','dy','dt','du','dv','logb','cbrt','sgn',
}
REJECT_RE = re.compile(
    r'\\text|\\begin|\\mbox|\\hat|\\vec|\\bar|matrix|cases|=|<|>|\\le|\\ge|'
    r'\\approx|\\neq|,|;|%|°|\\circ|\\pm|\\mp|\\int|\\sum|\\lim|\\infty|∞|!|\\to')

def latex_frac(s):
    pat = re.compile(r'\\[dt]?frac\s*\{')
    while True:
        m = pat.search(s)
        if not m:
            return s
        i = m.end() - 1
        a, j = grab_braces(s, i)
        if a is None: return None
        # skip whitespace to next '{'
        k = j
        while k < len(s) and s[k] in ' \t\n': k += 1
        if k >= len(s) or s[k] != '{': return None
        b, l = grab_braces(s, k)
        if b is None: return None
        s = s[:m.start()] + '((' + a + ')/(' + b + '))' + s[l:]

def grab_braces(s, i):
    """s[i] == '{' -> (content, index_after_close)"""
    depth, j = 0, i
    while j < len(s):
        if s[j] == '{': depth += 1
        elif s[j] == '}':
            depth -= 1
            if depth == 0:
                return s[i+1:j], j + 1
        j += 1
    return None, None

def latex_sqrt(s):
    # \sqrt[n]{a}
    while True:
        m = re.search(r'\\sqrt\s*\[([^\]]+)\]\s*\{', s)
        if not m: break
        a, j = grab_braces(s, m.end() - 1)
        if a is None: return None
        s = s[:m.start()] + '((' + a + ')**(1/(' + m.group(1) + ')))' + s[j:]
    while True:
        m = re.search(r'\\sqrt\s*\{', s)
        if not m: break
        a, j = grab_braces(s, m.end() - 1)
        if a is None: return None
        s = s[:m.start()] + '(sqrt(' + a + '))' + s[j:]
    s = re.sub(r'\\sqrt\s*([0-9a-zA-Z])', r'sqrt(\1)', s)
    return s

def normalize(raw):
    """LaTeX/unicode math string -> sympy-parseable string, or None (skip)."""
    s = raw.strip()
    if not s or len(s) > 160:
        return None
    s = s.replace('\\(', '').replace('\\)', '').replace('$', '')
    s = s.replace('\\left', '').replace('\\right', '')
    s = s.replace('\\,', ' ').replace('\\;', ' ').replace('\\!', '').replace('\\ ', ' ')
    if REJECT_RE.search(s):
        return None
    for k, v in VULGAR.items():
        s = s.replace(k, v)
    # unicode superscript runs -> ^(...)
    s = re.sub('[' + ''.join(SUPERS) + ']+',
               lambda m: '^(' + ''.join(SUPERS[c] for c in m.group(0)) + ')', s)
    s = (s.replace('−', '-').replace('–', '-').replace('—', '-')
          .replace('·', '*').replace('×', '*').replace('⁄', '/')
          .replace('π', 'pi').replace('θ', 'theta').replace('√', '\\sqrt'))
    s = s.replace('\\cdot', '*').replace('\\times', '*')
    s = s.replace('\\pi', ' pi ').replace('\\theta', ' theta ')
    s = latex_frac(s)
    if s is None: return None
    s = latex_sqrt(s)
    if s is None: return None
    # trig/log commands
    s = re.sub(r'\\(arcsin|arccos|arctan|sin|cos|tan|sec|csc|cot|sinh|cosh|tanh|exp)', r' \1', s)
    s = re.sub(r'\barc(sin|cos|tan)\b', r'a\1', s)
    s = s.replace('\\ln', ' ln ').replace('\\log', ' logb ')
    s = re.sub(r'\bln\b', 'log', s)
    # |x| -> Abs(x)
    s = re.sub(r'\|([^|]+)\|', r'Abs(\1)', s)
    # e^{..} etc: braces -> parens (after frac/sqrt consumed theirs)
    s = s.replace('{', '(').replace('}', ')')
    if '\\' in s:          # any un-handled latex left -> give up
        return None
    # standalone e -> E (Euler)
    s = re.sub(r'(?<![A-Za-z])e(?![A-Za-z])', 'E', s)
    # token whitelist: alpha runs len>=3 must be known functions/consts;
    # len==2 runs allowed as implicit products (xy, ax) unless English word
    for tok in re.findall(r'[A-Za-z]{2,}', s):
        if tok in ALLOWED_TOKENS or tok.lower() in ALLOWED_TOKENS or tok in ('E', 'Abs'):
            continue
        if len(tok) == 2 and tok.lower() not in STOPWORDS:
            continue
        return None
    stripped = re.sub(r'sqrt|sin|cos|tan|sec|csc|cot|logb|log|exp|Abs|pi|theta', '', s)
    if not re.search(r'[A-Za-df-z]', stripped):
        return None  # no variable letters -> pure numeric, out of scope
    # anti-prose: require some math structure beyond bare letters
    if not re.search(r'[0-9+\-*/^()]|sqrt|logb|log|sin|cos|tan|exp|Abs|pi|theta', s):
        return None
    return s.strip()

LOGB = Lambda(Symbol('__a'), log(Symbol('__a')) / log(10))
LOCALS = {'logb': LOGB, 'Abs': sympy.Abs, 'E': E, 'pi': pi}

_parse_cache = {}
def parse(norm):
    if norm in _parse_cache:
        return _parse_cache[norm]
    expr = None
    try:
        with Timeout(3):
            expr = parse_expr(norm, transformations=TRANSFORMS,
                              local_dict=LOCALS, global_dict=GLOBALS)
            if expr.free_symbols:
                # assume positive symbols (catches sqrt(x^3) ~ x sqrt(x))
                expr = expr.subs({s: Symbol(s.name, positive=True) for s in expr.free_symbols})
            else:
                expr = None  # numeric-only: prior audit's territory
            if expr is not None and sympy.count_ops(expr) > 150:
                expr = None
    except Exception:
        expr = None
    _parse_cache[norm] = expr
    return expr

# ---------------------------------------------------------------- equivalence

class Timeout:
    def __init__(self, sec): self.sec = sec
    def __enter__(self):
        signal.signal(signal.SIGALRM, self._raise); signal.setitimer(signal.ITIMER_REAL, self.sec)
    def __exit__(self, *a):
        signal.setitimer(signal.ITIMER_REAL, 0)
    @staticmethod
    def _raise(*a): raise TimeoutError

POS_SETS = [0.6180339, 1.4142136, 2.3529411, 3.7772815]
def sample_subs(syms, base, sign=1):
    return {s: sign * base * (1 + 0.37 * i) for i, s in enumerate(sorted(syms, key=lambda x: x.name))}

def num_equal(a, b, sign=1):
    """(all_equal, n_valid) over sample sets."""
    syms = a.free_symbols | b.free_symbols
    valid = 0
    for base in POS_SETS:
        subs = sample_subs(syms, base, sign)
        try:
            with Timeout(2):
                fa = complex(a.evalf(subs=subs, chop=True))
                fb = complex(b.evalf(subs=subs, chop=True))
        except Exception:
            continue
        if any(abs(v.imag) > 1e-8 for v in (fa, fb)):
            continue
        scale = max(abs(fa), abs(fb), 1.0)
        if abs(fa - fb) > 1e-7 * scale:
            return False, valid + 1
        valid += 1
    return valid >= 2, valid

def confirm(a, b):
    try:
        with Timeout(5):
            r = a.equals(b)
            if r is True: return 'CONFIRMED'
            if r is False: return 'REJECTED'
    except Exception:
        pass
    try:
        with Timeout(5):
            if simplify(a - b) == 0: return 'CONFIRMED'
    except Exception:
        pass
    return 'PLAUSIBLE'

# ---------------------------------------------------------------- main

def family_of(rel):
    parts = rel.split('/')
    stem = re.sub(r'\.(ts|tsx|json)$', '', parts[-1])
    if len(parts) > 1:
        return parts[0] + '/' + (stem if len(parts) == 2 and parts[0] in
            ('exit-quizzes',) else '*')
    return re.sub(r'-(diagnostic|daily-question|study-plans).*$', '', stem)

def main():
    t0 = time.time()
    files = []
    for dirpath, _dirs, names in os.walk(ROOT):
        for n in names:
            if n.endswith(('.ts', '.tsx', '.json')):
                files.append(os.path.join(dirpath, n))
    files.sort()
    stats = dict(files=len(files), mcqs=0, options=0, algebraic=0,
                 parsed=0, pairs_tested=0, parse_fail=0)
    findings = []
    for fi, path in enumerate(files):
        rel = os.path.relpath(path, ROOT)
        for q in extract_mcqs(path):
            stats['mcqs'] += 1
            parsed = []
            for idx, (raw, ln) in enumerate(q['options']):
                stats['options'] += 1
                norm = normalize(raw)
                if norm is None:
                    continue
                stats['algebraic'] += 1
                expr = parse(norm)
                if expr is None:
                    stats['parse_fail'] += 1
                    continue
                stats['parsed'] += 1
                parsed.append((idx, raw, ln, norm, expr))
            for (i, rawi, lni, ni, ei), (j, rawj, lnj, nj, ej) in combinations(parsed, 2):
                stats['pairs_tested'] += 1
                if rawi.strip() == rawj.strip():
                    kind = 'IDENTICAL-STRING'
                    verdict = 'CONFIRMED'
                    everywhere = True
                else:
                    eq_pos, nv = num_equal(ei, ej, sign=1)
                    if not eq_pos:
                        continue
                    verdict = confirm(ei, ej)
                    if verdict == 'REJECTED':
                        continue
                    eq_neg, nvn = num_equal(ei, ej, sign=-1)
                    everywhere = bool(eq_neg)
                    kind = 'SYMBOLIC-EQUIV'
                findings.append({
                    'file': rel, 'family': family_of(rel),
                    'kind': kind, 'verdict': verdict,
                    'equal_everywhere': everywhere,
                    'pair': [
                        {'idx': i, 'raw': rawi, 'line': lni, 'norm': ni},
                        {'idx': j, 'raw': rawj, 'line': lnj, 'norm': nj},
                    ],
                    'key': q['key'],
                    'key_in_pair': q['key'] in (i, j) if q['key'] is not None else None,
                })
        if fi % 400 == 0:
            print(f'  [{fi}/{len(files)}] {stats["mcqs"]} mcqs, '
                  f'{len(findings)} flags, {time.time()-t0:.0f}s', file=sys.stderr)
    stats['flags'] = len(findings)
    stats['seconds'] = round(time.time() - t0, 1)
    with open(OUT, 'w') as f:
        json.dump({'stats': stats, 'findings': findings}, f, indent=1)
    print(json.dumps(stats, indent=2))
    by_fam = {}
    for f_ in findings:
        by_fam.setdefault(f_['family'], []).append(f_)
    for fam, fs in sorted(by_fam.items(), key=lambda kv: -len(kv[1])):
        print(f'{len(fs):4d}  {fam}')
    print('results ->', OUT)

if __name__ == '__main__':
    main()
