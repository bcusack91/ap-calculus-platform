import subprocess, re

files = subprocess.check_output(
    ["git","status","--porcelain","src/data/exit-quizzes","src/data/ap-bio-frq",
     "src/data/ap-calc-ab-frq","src/data/ap-calc-bc-frq","src/data/ap-chem-frq",
     "src/data/ap-human-geo-frq","src/data/ap-physics-1-frq","src/data/ap-physics-2-frq",
     "src/data/ap-physics-c-em-frq","src/data/ap-physics-c-mech-frq","src/data/ap-precalc-frq",
     "src/data/ap-psych-frq","src/data/ap-stats-frq"]).decode().split("\n")
paths = [ln[3:] for ln in files if ln.strip()]
print(f"{len(paths)} changed files")

pats = {
 "id": re.compile(r"\bid:\s*'[^']*'"),
 "correctIndex": re.compile(r"correctIndex:\s*\d+"),
 "correctAnswer": re.compile(r"correctAnswer:\s*[^,}\n]+"),
 "points": re.compile(r"\bpoints:\s*\d+"),
 "maxPoints": re.compile(r"maxPoints:\s*\d+"),
}
bad = 0
for p in paths:
    head = subprocess.check_output(["git","show",f"HEAD:{p}"]).decode()
    cur = open(p,encoding="utf-8").read()
    for name,rx in pats.items():
        h = rx.findall(head); c = rx.findall(cur)
        if h != c:
            bad += 1
            print(f"DIFF {p} [{name}] head={len(h)} cur={len(c)}")
            # show first difference
            for a,b in zip(h,c):
                if a!=b:
                    print(f"   HEAD: {a!r}\n   CUR : {b!r}"); break
print("STRUCT OK" if bad==0 else f"{bad} structural diffs")
