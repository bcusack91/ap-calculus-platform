import subprocess, sys, re

files = [f"src/data/{d}/questions.ts" for d in [
    "ap-bio-frq","ap-calc-ab-frq","ap-calc-bc-frq","ap-chem-frq","ap-human-geo-frq",
    "ap-physics-1-frq","ap-physics-2-frq","ap-physics-c-em-frq","ap-physics-c-mech-frq",
    "ap-precalc-frq","ap-psych-frq","ap-stats-frq"]]

KW = re.compile(r'keywords:')

total_restored = 0
for path in files:
    head = subprocess.check_output(["git","show",f"HEAD:{path}"]).decode("utf-8")
    head_lines = head.split("\n")
    with open(path,"r",encoding="utf-8") as fh:
        cur = fh.read()
    cur_lines = cur.split("\n")
    if len(head_lines) != len(cur_lines):
        print(f"!! LINE COUNT MISMATCH {path}: head={len(head_lines)} cur={len(cur_lines)}", file=sys.stderr)
        sys.exit(1)
    restored = 0
    out = []
    for hl, cl in zip(head_lines, cur_lines):
        if KW.search(cl) and hl != cl:
            # splice: keep current prefix (description, converted) up to 'keywords:',
            # take head's 'keywords:' onward (original grading keys + trailing)
            ci = cl.index("keywords:")
            hi = hl.index("keywords:")
            new = cl[:ci] + hl[hi:]
            if new != cl:
                restored += 1
            out.append(new)
        else:
            out.append(cl)
    if restored:
        with open(path,"w",encoding="utf-8") as fh:
            fh.write("\n".join(out))
    total_restored += restored
    print(f"{path}: {restored} keyword lines restored")
print(f"TOTAL keyword lines restored: {total_restored}")
