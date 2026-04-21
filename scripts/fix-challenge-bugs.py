#!/usr/bin/env python3
"""Fix all issues introduced by the initial transformation script:
1. Replace \\x01 (SOH from broken backreference) with `    setPhase('testing')`
2. Fix broken flashcard fetch syntax: add-from-missed'), { -> add-from-missed', {
3. Add challengeToken to handleFinish useCallback dep arrays
4. Add challengeForm to startTest useCallback dep arrays
"""

import re, glob

pages = sorted(set(
    glob.glob('src/app/*-diagnostic/page.tsx') +
    glob.glob('src/app/ap-*-diagnostic/page.tsx')
))

fixed = 0
for path in pages:
    with open(path, 'rb') as f:
        raw = f.read()

    if b'DiagnosticChallengeCard' not in raw:
        continue  # not patched, skip

    original = raw

    # Fix 1: replace \x01 with the setPhase('testing') line that was clobbered
    raw = raw.replace(b'\x01', b"    setPhase('testing')")

    with open(path, 'wb') as f:
        f.write(raw)

    # Now work in text mode for the rest
    with open(path) as f:
        src = f.read()

    orig_text = src

    # Fix 2: broken flashcard fetch syntax
    src = src.replace(
        "fetch('/api/flashcards/add-from-missed'), {",
        "fetch('/api/flashcards/add-from-missed', {"
    )

    # Fix 3: add challengeToken to handleFinish dep array if missing
    # Pattern: }, [testData, answers]) or }, [testData, answers, challengeForm])
    # We need to add challengeToken to any handleFinish deps that have testData
    def add_challenge_token_dep(m):
        deps = m.group(1)
        if 'challengeToken' not in deps:
            return m.group(0).replace(deps, deps + ', challengeToken')
        return m.group(0)

    src = re.sub(
        r"  }, \[(testData, answers[^\]]*)\]\)",
        lambda m: "  }, [" + (m.group(1) + ', challengeToken' if 'challengeToken' not in m.group(1) else m.group(1)) + "])",
        src
    )

    # Fix 4: add challengeForm to startTest dep array (typically [history])
    # Look for the startTest useCallback closing with [history] or similar
    src = re.sub(
        r"  }, \[(history[^\]]*)\]\)(\s*\n\s*const handleFinish)",
        lambda m: "  }, [" + (m.group(1) + ', challengeForm' if 'challengeForm' not in m.group(1) else m.group(1)) + "])" + m.group(2),
        src
    )

    if src != orig_text:
        with open(path, 'w') as f:
            f.write(src)
        print(f"  fixed: {path}")
        fixed += 1
    elif raw != original:
        print(f"  fixed (binary): {path}")
        fixed += 1

print(f"\nFixed {fixed} pages")
