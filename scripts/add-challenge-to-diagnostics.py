#!/usr/bin/env python3
"""
Adds the DiagnosticChallengeCard integration to all diagnostic pages
(except calcab-diagnostic which was done manually, and sat-diagnostic which
uses a component-based pattern handled separately).
"""

import re, os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(BASE, "src", "app")

# -------------------------------------------------------------------
# Page configuration: slug → (category_prefix, has_ap_score)
#   category_prefix: string used inside `category: \`<prefix>-${testData.form}\``
#   has_ap_score:    True  → use diagnosticResults.estimatedAPScore
#                    False → use percentageToTier(diagnosticResults.percentage)
# -------------------------------------------------------------------
PAGES = {
    # already done
    # "calcab-diagnostic": ("calcab-diagnostic", True),

    # AP pages with standard handleFinish pattern
    "ap-african-american-studies-diagnostic": ("ap-aas-diagnostic", True),
    "ap-bio-diagnostic":               ("ap-bio-diagnostic", True),
    "ap-calcab-diagnostic":            ("ap-calcab-diagnostic", True),
    "ap-calcbc-diagnostic":            ("ap-calcbc-diagnostic", True),
    "ap-chem-diagnostic":              ("ap-chem-diagnostic", True),
    "ap-csa-diagnostic":               ("ap-csa-diagnostic", True),
    "ap-csp-diagnostic":               ("ap-csp-diagnostic", True),
    "ap-english-lang-diagnostic":      ("ap-english-lang-diagnostic", True),
    "ap-english-lit-diagnostic":       ("ap-english-lit-diagnostic", True),
    "ap-enviro-diagnostic":            ("ap-enviro-diagnostic", True),
    "ap-human-geo-diagnostic":         ("ap-human-geo-diagnostic", True),
    "ap-macro-diagnostic":             ("ap-macro-diagnostic", True),
    "ap-micro-diagnostic":             ("ap-micro-diagnostic", True),
    "ap-physics-c-em-diagnostic":      ("ap-physics-c-em-diagnostic", True),
    "ap-physics-c-mech-diagnostic":    ("ap-physics-c-mech-diagnostic", True),
    "ap-physics1-diagnostic":          ("ap-physics1-diagnostic", True),
    "ap-physics2-diagnostic":          ("ap-physics2-diagnostic", True),
    "ap-psych-diagnostic":             ("ap-psych-diagnostic", True),
    "ap-stats-diagnostic":             ("ap-stats-diagnostic", True),
    "ap-us-gov-diagnostic":            ("ap-us-gov-diagnostic", True),
    "ap-us-history-diagnostic":        ("ap-us-history-diagnostic", True),
    "ap-world-history-diagnostic":     ("ap-world-history-diagnostic", True),

    # Calc BC (has AP score)
    "calcbc-diagnostic":               ("calcbc-diagnostic", True),

    # Non-AP pages (use percentageToTier)
    "act-diagnostic":                  ("act-diagnostic", False),
    "algebra1-diagnostic":             ("algebra1-diagnostic", False),
    "algebra2-diagnostic":             ("algebra2-diagnostic", False),
    "geometry-diagnostic":             ("geometry-diagnostic", False),
    "grade8-math-diagnostic":          ("grade8-math-diagnostic", False),
    "mcat-diagnostic":                 ("mcat-diagnostic", False),
    "ochem-diagnostic":                ("ochem-diagnostic", False),
    "prealgebra-diagnostic":           ("prealgebra-diagnostic", False),
    "precalc-diagnostic":              ("precalc-diagnostic", False),
}

# sat-diagnostic is handled separately (component-based, no form number)

def transform(slug, category_prefix, has_ap_score):
    path = os.path.join(SRC, slug, "page.tsx")
    if not os.path.exists(path):
        print(f"  SKIP (not found): {path}")
        return False

    with open(path, "r") as f:
        src = f.read()

    # Skip if already done
    if "DiagnosticChallengeCard" in src:
        print(f"  SKIP (already patched): {slug}")
        return False

    original = src

    # ── 1. Add useSearchParams to next/navigation import ──────────────────
    src = re.sub(
        r"(from 'next/navigation'[^;]*;)",
        lambda m: m.group(0).replace(
            "useRouter", "useRouter, useSearchParams"
        ) if "useSearchParams" not in m.group(0) else m.group(0),
        src, count=1
    )

    # ── 2. Add DiagnosticChallengeCard import after DiagnosticReview import ──
    src = src.replace(
        "import DiagnosticReview from '@/components/DiagnosticReview'",
        "import DiagnosticReview from '@/components/DiagnosticReview'\nimport DiagnosticChallengeCard from '@/components/DiagnosticChallengeCard'",
        1
    )

    # ── 3. Add challenge params after `const router = useRouter()` ─────────
    challenge_params = (
        "\n  const searchParams = useSearchParams()\n"
        "  const challengeToken = searchParams.get('challenge')\n"
        "  const challengeFormRaw = Number(searchParams.get('challengeForm'))\n"
        "  const challengeForm = Number.isFinite(challengeFormRaw) && challengeFormRaw >= 1\n"
        "    ? challengeFormRaw\n"
        "    : null"
    )
    src = re.sub(
        r"(  const router = useRouter\(\))",
        r"\1" + challenge_params,
        src, count=1
    )

    # ── 4. Add challengeSubmitted state ────────────────────────────────────
    # Insert after the last useState declaration block before the first useEffect
    src = re.sub(
        r"(  const \[history, setHistory\] = useState[^\n]+\n)",
        r"\1  const [challengeSubmitted, setChallengeSubmitted] = useState(false)\n",
        src, count=1
    )

    # ── 5. Override form in startTest ──────────────────────────────────────
    # Replace `const form = pickNextForm(previousForms)` with challenge-aware version
    src = re.sub(
        r"    const form = pickNextForm\(previousForms\)",
        "    const form = (challengeForm ?? pickNextForm(previousForms)) as (1|2|3|4|5|6|7|8|9|10)",
        src, count=1
    )
    # Also reset challengeSubmitted when starting a test - add before setPhase('testing')
    src = re.sub(
        r"(    setPhase\('testing'\))",
        "    setChallengeSubmitted(false)\n\1",
        src, count=1
    )

    # ── 6. Add challenge submission in handleFinish ────────────────────────
    ap_score_expr = (
        "diagnosticResults.estimatedAPScore"
        if has_ap_score
        else "Math.max(1, Math.min(5, Math.ceil(diagnosticResults.percentage / 20)))"
    )
    challenge_submit_code = (
        "\n\n      if (challengeToken) {\n"
        f"        const challengeRes = await fetch(`/api/diagnostic-challenges/${{challengeToken}}/submit`, {{\n"
        "          method: 'POST',\n"
        "          headers: { 'Content-Type': 'application/json' },\n"
        "          body: JSON.stringify({\n"
        f"            category: `{category_prefix}-${{diagnosticResults.form}}`,\n"
        "            score: diagnosticResults.percentage,\n"
        "            correct: diagnosticResults.totalCorrect,\n"
        "            total: diagnosticResults.totalQuestions,\n"
        f"            apScore: {ap_score_expr},\n"
        "          }),\n"
        "        })\n"
        "        if (challengeRes.ok) {\n"
        "          setChallengeSubmitted(true)\n"
        "        }\n"
        "      }"
    )

    # Insert after the main submit call: find the closing of the try block that
    # contains the API submit, before the catch or the flashcards section.
    # Strategy: find the flashcards add-from-missed section (present in most pages)
    # and insert before it.
    if "add-from-missed" in src:
        src = re.sub(
            r"(\n      if \(diagnosticResults\.recommendedTopics\.length > 0\) \{\n        fetch\('/api/flashcards/add-from-missed')",
            challenge_submit_code + r"\n\n      if (diagnosticResults.recommendedTopics.length > 0) {\n        fetch('/api/flashcards/add-from-missed')",
            src, count=1
        )
    else:
        # Fallback: insert before the closing `} catch` of the main try block
        src = re.sub(
            r"(\n    } catch \{ /\* silent \*/)",
            challenge_submit_code + r"\n    } catch { /* silent */",
            src, count=1
        )

    # ── 7. Add DiagnosticChallengeCard before DiagnosticReview in results ──
    # Find the results section and insert the card before DiagnosticReview
    ap_score_card = (
        "diagnosticResults.estimatedAPScore"
        if has_ap_score
        else "Math.max(1, Math.min(5, Math.ceil((results?.percentage ?? 0) / 20)))"
    )

    card_snippet = (
        "\n          <DiagnosticChallengeCard\n"
        f"            category={{`{category_prefix}-${{results.form ?? 1}}`}}\n"
        "            score={results.percentage}\n"
        "            correct={results.totalCorrect}\n"
        "            total={results.totalQuestions}\n"
        f"            apScore={{Math.max(1, Math.min(5, {'results.estimatedAPScore' if has_ap_score else 'Math.ceil((results.percentage ?? 0) / 20)'}))}}\n"
        "            currentChallengeToken={challengeToken}\n"
        "            challengeSubmitted={challengeSubmitted}\n"
        "          />"
    )

    # Insert before `{testData && <DiagnosticReview`
    src = re.sub(
        r"(\{testData && <DiagnosticReview)",
        card_snippet + "\n          " + r"\1",
        src, count=1
    )
    # Some pages have `{testData && (\n...<DiagnosticReview` pattern - handle multiline
    if card_snippet not in src and "<DiagnosticReview" in src:
        src = re.sub(
            r"(\{testData && \(\n\s*<DiagnosticReview)",
            card_snippet + "\n          " + r"\1",
            src, count=1
        )

    if src == original:
        print(f"  WARN (no changes applied): {slug}")
        return False

    with open(path, "w") as f:
        f.write(src)
    print(f"  OK: {slug}")
    return True


if __name__ == "__main__":
    success = 0
    skipped = 0
    failed = 0
    for slug, (prefix, has_ap) in PAGES.items():
        print(f"Processing: {slug}")
        result = transform(slug, prefix, has_ap)
        if result:
            success += 1
        else:
            skipped += 1

    print(f"\nDone: {success} patched, {skipped} skipped/failed")
