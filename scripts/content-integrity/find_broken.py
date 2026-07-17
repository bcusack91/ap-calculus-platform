import subprocess, re
files = subprocess.check_output(["git","diff","--name-only","src/data"]).decode().split()
broken=[]
for p in files:
    added = [l[1:] for l in subprocess.check_output(["git","diff",p]).decode().split("\n")
             if l.startswith("+") and not l.startswith("+++")]
    hitlines=0
    for line in added:
        # a converter-inserted span adjacent to interpolation => split-span corruption
        # patterns: '}$<tok>' where prev char '}' is end of ${..} ; or '$<tok>$' immediately after ${..}
        if re.search(r"\}\$[^ $]", line) or re.search(r"\$\{[^}]*\}\$[A-Za-z(\\]", line) or re.search(r"[A-Za-z0-9)]\}\$", line):
            hitlines+=1
    if hitlines:
        broken.append((p,hitlines))
for p,n in broken: print(f"{n:3d}  {p}")
print(f"\n{len(broken)} files with suspected split-span corruption")
