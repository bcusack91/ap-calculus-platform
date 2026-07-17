import subprocess, re, sys, json, os, tempfile
S="/private/tmp/claude-501/-Users-brendancusack-Desktop-AP-Calculus-Website---Ad-Revenue-Based/4be8135c-1de7-4df1-99d2-0a1e85fd5c91/scratchpad"
sys.path.insert(0,S)
import math_notation_scan as m
dirs=["src/data/exit-quizzes","src/data/ap-bio-frq","src/data/ap-calc-ab-frq","src/data/ap-calc-bc-frq",
"src/data/ap-chem-frq","src/data/ap-human-geo-frq","src/data/ap-physics-1-frq","src/data/ap-physics-2-frq",
"src/data/ap-physics-c-em-frq","src/data/ap-physics-c-mech-frq","src/data/ap-precalc-frq",
"src/data/ap-psych-frq","src/data/ap-stats-frq"]
changed = subprocess.check_output(["git","diff","--name-only"]+dirs).decode().split()
CORRUPT = re.compile(r"\}\$[A-Za-z0-9(\\]")
# double-dollar / odd-dollar heuristic: count unescaped $ per added line should be even (pairs) ignoring ${ interpolation and \$ 
bad_corrupt=0; bad_odd=0; before=0; after=0
for p in changed:
    added=[l[1:] for l in subprocess.check_output(["git","diff",p]).decode().split("\n") if l.startswith("+") and not l.startswith("+++")]
    for l in added:
        if CORRUPT.search(l): bad_corrupt+=1
        # remove \$ (escaped currency) and ${...} interpolations, then count $
        t=l.replace("\\$","")
        t=re.sub(r"\$\{[^{}]*\}","",t)  # remove one level ${...}
        # remaining $ that are math delimiters; also $$ blocks unlikely here
        n=t.count("$")
        if n%2!=0: bad_odd+=1
    head=subprocess.check_output(["git","show",f"HEAD:{p}"]).decode()
    tf=tempfile.NamedTemporaryFile("w",suffix=".ts",delete=False,encoding="utf-8"); tf.write(head); tf.close()
    before+=m.scan_file(tf.name)["total"]; os.unlink(tf.name)
    after+=m.scan_file(p)["total"]
print(f"changed files: {len(changed)}")
print(f"split-span corrupt lines: {bad_corrupt}")
print(f"odd-dollar (unbalanced) added lines: {bad_odd}")
print(f"scanner total BEFORE={before} AFTER={after} reduced={before-after}")
