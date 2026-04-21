#!/usr/bin/env python3
import re, glob

pages = glob.glob('src/app/*-diagnostic/page.tsx') + glob.glob('src/app/ap-*-diagnostic/page.tsx')
pages = list(set(pages))

challenge_params = (
    "\n  const searchParams = useSearchParams()\n"
    "  const challengeToken = searchParams.get('challenge')\n"
    "  const challengeFormRaw = Number(searchParams.get('challengeForm'))\n"
    "  const challengeForm = Number.isFinite(challengeFormRaw) && challengeFormRaw >= 1\n"
    "    ? challengeFormRaw\n"
    "    : null"
)

fixed = 0
for path in sorted(pages):
    with open(path) as f:
        src = f.read()

    if 'useRouter, useSearchParams()' not in src:
        continue  # already fine

    original = src

    # Fix 1: repair the broken router line
    src = src.replace(
        'const router = useRouter, useSearchParams()',
        'const router = useRouter()'
    )

    # Fix 2: add useSearchParams to next/navigation import
    if "import { useRouter } from 'next/navigation'" in src:
        src = src.replace(
            "import { useRouter } from 'next/navigation'",
            "import { useRouter, useSearchParams } from 'next/navigation'"
        )

    # Fix 3: add challenge params after `const router = useRouter()` if missing
    if 'const challengeToken' not in src:
        src = re.sub(
            r"(  const router = useRouter\(\))",
            r"\1" + challenge_params,
            src, count=1
        )

    if src != original:
        with open(path, 'w') as f:
            f.write(src)
        print(f"  fixed: {path}")
        fixed += 1
    else:
        print(f"  WARN no change: {path}")

print(f"\nFixed {fixed} pages")
