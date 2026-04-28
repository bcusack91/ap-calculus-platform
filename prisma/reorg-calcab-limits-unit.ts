/**
 * AP Calculus AB — Limits & Continuity unit reorganization (POC).
 *
 * Resolves the duplicate "stub vs. rich" topic problem for the Limits unit.
 *
 * What this script does (idempotent):
 *
 *   1. Locates the CED-aligned hub topic `limits-continuity-calcab` and the
 *      rich/granular category "Limits and Continuity" (18 topics) in AP Calc AB.
 *
 *   2. Re-parents all topics from the rich category to be SUBTOPICS of the hub
 *      (sets parentTopicId = hub.id and moves them into the hub's category so
 *      they share the same nav grouping). Renumbers their order 1…N preserving
 *      the original ordering.
 *
 *   3. Deletes the now-empty duplicate "Limits and Continuity" category.
 *
 *   4. Rewrites the hub topic's title + textContent to a rich AP-CED-aligned
 *      unit overview (~8 k chars) and replaces its example problems and
 *      flashcards with unit-level synthesis material (10 problems, 24 cards).
 *
 * After this runs:
 *   - The course page shows ONE "Limits & Continuity" category with ONE
 *     root-level topic (the hub), because the granular topics now have
 *     parentTopicId set and are filtered out of the course list.
 *   - The hub topic page renders the rich unit overview + a Subtopics grid
 *     linking to all 18 granular topics (existing rendering, no UI change).
 *   - Each granular topic URL (e.g. /topics/what-is-a-limit) keeps working,
 *     and now displays a breadcrumb back to the hub.
 *   - The hub still has its existing interactive lesson and entrance quiz.
 *
 * Run with:
 *   set -a && source .env && set +a && npx tsx prisma/reorg-calcab-limits-unit.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

const HUB_SLUG = 'limits-continuity-calcab'
const RICH_CATEGORY_NAME = 'Limits and Continuity'
const COURSE_SLUG = 'ap-calculus-ab'

const HUB_TITLE = 'Limits & Continuity (AP Calculus AB Unit 1)'

const HUB_TEXT = `# Limits & Continuity — AP Calculus AB Unit 1

Limits are the **foundation of every other idea in calculus**. The derivative is a limit. The definite integral is a limit. Continuity, asymptotic behavior, and the major theorems (IVT, MVT, EVT, FTC) all rest on limit reasoning. Roughly **10–12 % of the AP Calculus AB exam** is drawn directly from this unit, but the *real* weight is much larger because limits power Units 2–8 as well.

This page is the unit hub: it gives you the conceptual framing, the AP-style "must-know" skills, and a roadmap of all the granular sub-topics you can study below.

## What you'll learn in this unit

- **What a limit is** — both intuitively (where the function is *heading*) and formally (the $\\varepsilon$–$\\delta$ definition AP uses informally).
- **How to compute limits four ways**: graphically, numerically (tables), algebraically (factoring, rationalizing, substitution, special trig limits), and via L'Hôpital's Rule (introduced formally in Unit 4 but previewed here for $0/0$ and $\\infty/\\infty$ forms).
- **One-sided limits** and what they tell you about jump discontinuities and vertical asymptotes.
- **Limits at infinity** — end behavior, horizontal asymptotes, and the rational-function rule of thumb.
- **Infinite limits** — vertical asymptotes from the inside out.
- **Continuity at a point** (three-part definition) and on an interval, and the three flavors of discontinuity (removable, jump, infinite).
- **Big-picture theorems** — Intermediate Value Theorem, Squeeze Theorem.

## The big idea

> A limit asks: "**As $x$ gets arbitrarily close to $a$, what value is $f(x)$ getting arbitrarily close to?**"

It does *not* ask what $f(a)$ is. That's the trick: $f(a)$ may be undefined, the wrong value, or anything else, and the limit can still exist. This separation between *value at a point* and *behavior near a point* is exactly what lets calculus describe instantaneous rates and exact areas.

## Three things a limit can do at $x = a$

1. **Equal a finite number.** $\\lim_{x\\to a} f(x) = L$. The function approaches a single value from both sides.
2. **Equal $\\pm\\infty$ (an "infinite limit").** The function blows up; this signals a *vertical asymptote* at $x = a$.
3. **Fail to exist.** Either the left- and right-hand limits disagree (jump), the function oscillates without settling, or $\\pm\\infty$ disagrees on the two sides.

A limit *exists* (in the AP sense of "equals a number") only when both one-sided limits agree on a finite value. Any other behavior — jumps, oscillation, blow-ups — means the limit DNE.

## Computing limits — the AP playbook

When asked to evaluate $\\lim_{x \\to a} f(x)$, follow this order:

1. **Try direct substitution.** If $f$ is continuous at $a$, $\\lim = f(a)$. Done.
2. **If you get $0/0$, look for algebraic simplification.** Most common moves:
    - **Factor and cancel** (e.g., $\\frac{x^{2} - 4}{x - 2} = x + 2$ for $x \\neq 2$).
    - **Rationalize** (multiply by conjugate when there's a square root).
    - **Combine fractions** in the numerator.
    - **Use a trig identity** (e.g., $\\sin^{2}x + \\cos^{2}x = 1$).
3. **Recognize special trig limits**: $\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ and $\\lim_{x\\to 0} \\frac{1 - \\cos x}{x} = 0$.
4. **For limits at infinity** of rational functions, compare leading-term degrees:
    - degree(num) < degree(den): limit = 0
    - degree(num) = degree(den): limit = ratio of leading coefficients
    - degree(num) > degree(den): limit is $\\pm\\infty$ (no horizontal asymptote)
5. **If you still get an indeterminate form** ($0/0$ or $\\infty/\\infty$), use **L'Hôpital's Rule**: $\\lim \\frac{f}{g} = \\lim \\frac{f'}{g'}$.

## Continuity in one breath

A function $f$ is **continuous at $x = a$** iff all three are true:

1. $f(a)$ is defined.
2. $\\lim_{x \\to a} f(x)$ exists.
3. $\\lim_{x \\to a} f(x) = f(a)$.

If any one fails, $f$ is discontinuous at $a$. The flavor depends on which one:

| Discontinuity | What goes wrong | Fixable by redefining $f(a)$? |
|---|---|---|
| **Removable** ("hole") | $\\lim$ exists, but $f(a)$ doesn't equal it (or doesn't exist) | **Yes** |
| **Jump** | Left and right limits exist but disagree | No |
| **Infinite** | $\\lim = \\pm\\infty$; vertical asymptote | No |

## The Intermediate Value Theorem (IVT)

> If $f$ is continuous on $[a, b]$ and $N$ is any value between $f(a)$ and $f(b)$, then there is at least one $c \\in (a, b)$ with $f(c) = N$.

In AP problems, the IVT is the go-to justification for "show that $f(x) = 0$ has a solution on $[a, b]$" or "show that $f$ takes the value 5 somewhere on $[a, b]$." **Always state the continuity hypothesis explicitly** when you cite the IVT — graders will not award the point if you don't.

## The Squeeze Theorem

> If $g(x) \\le f(x) \\le h(x)$ near $a$ (except possibly at $a$) and $\\lim_{x\\to a} g(x) = \\lim_{x\\to a} h(x) = L$, then $\\lim_{x\\to a} f(x) = L$.

Most-used template: showing that $\\lim_{x\\to 0} x^{2}\\sin(1/x) = 0$ by sandwiching between $-x^{2}$ and $x^{2}$.

## How this unit shows up on the AP exam

- **Multiple choice (no calculator):** Algebraic limit evaluations ($0/0$ form, factoring, rationalizing). Continuity diagnostics from a piecewise definition. Limits-at-infinity / horizontal asymptotes.
- **Multiple choice (calculator):** Estimating limits from a table or graph; verifying a removable discontinuity numerically.
- **Free response:** A continuity argument citing IVT; setting up a piecewise function so it's continuous (solve for a parameter); using one-sided limits to characterize a vertical asymptote.

## Common mistakes to avoid

- **Computing $f(a)$ instead of the limit.** They are not the same thing — the limit ignores the value at $a$.
- **Saying "$\\lim = \\infty$" means the limit exists.** On the AP exam, an infinite "limit" means the limit does **not exist** in the formal sense. Use $\\pm\\infty$ to *describe* the behavior, not to claim existence.
- **Skipping the continuity hypothesis when citing IVT.** No "continuous on $[a,b]$" → no credit.
- **Plugging $\\infty$ into rational functions directly.** Always compare degrees first.
- **Forgetting the absolute-value subtlety.** $\\lim_{x \\to 0} \\frac{|x|}{x}$ does not exist (left = $-1$, right = $+1$).

## Quick reference card

- Limit exists $\\Leftrightarrow$ left limit = right limit = same finite number
- 3-part continuity: $f(a)$ defined; $\\lim$ exists; they're equal
- Discontinuity types: removable / jump / infinite
- Indeterminate forms to attack: $0/0$, $\\infty/\\infty$ (then factor / rationalize / L'Hôpital)
- Special trig: $\\lim_{x\\to 0} \\sin(x)/x = 1$; $\\lim_{x\\to 0} (1 - \\cos x)/x = 0$
- Rational function at $\\infty$: compare leading-term degrees
- IVT requires continuity on a *closed* interval

## Sub-topics in this unit

Use the cards below to drill into each granular skill. Start with the conceptual ones (what a limit is, notation, one-sided limits) and move into the algebraic-technique sections (factoring, rationalizing, indeterminate forms) before tackling continuity and limits at infinity. There's also an interactive lesson and entrance quiz at the top of this page that test the whole unit at once.
`

const HUB_PROBLEMS: { order: number; difficulty: Difficulty; question: string; solution: string; isPremium?: boolean }[] = [
  {
    order: 1,
    difficulty: 'EASY',
    question: `Evaluate $\\displaystyle \\lim_{x \\to 3} (2x^{2} - 5x + 1)$.`,
    solution: `The function is a polynomial — continuous everywhere — so the limit equals the value:\n\n$\\lim_{x \\to 3}(2x^{2} - 5x + 1) = 2(9) - 5(3) + 1 = 18 - 15 + 1 = \\boxed{4}$.`,
  },
  {
    order: 2,
    difficulty: 'EASY',
    question: `Evaluate $\\displaystyle \\lim_{x \\to 2} \\dfrac{x^{2} - 4}{x - 2}$.`,
    solution: `Direct substitution gives $0/0$, an indeterminate form. **Factor** the numerator:\n\n$\\dfrac{x^{2} - 4}{x - 2} = \\dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$ for $x \\neq 2$.\n\nSo $\\lim_{x \\to 2} \\dfrac{x^{2} - 4}{x - 2} = \\lim_{x \\to 2}(x + 2) = \\boxed{4}$.\n\nNote that $f(2)$ itself is undefined (the original function has a *removable discontinuity* at $x = 2$), but the limit exists.`,
  },
  {
    order: 3,
    difficulty: 'EASY',
    question: `Given the piecewise function $f(x) = \\begin{cases} 2x + 1 & x < 1 \\\\ 5 & x = 1 \\\\ 4 - x & x > 1 \\end{cases}$, find $\\lim_{x \\to 1^{-}} f(x)$, $\\lim_{x \\to 1^{+}} f(x)$, $\\lim_{x \\to 1} f(x)$, and $f(1)$. Is $f$ continuous at $x = 1$?`,
    solution: `Left limit: $\\lim_{x \\to 1^{-}} f(x) = 2(1) + 1 = 3$.\n\nRight limit: $\\lim_{x \\to 1^{+}} f(x) = 4 - 1 = 3$.\n\nSince both one-sided limits equal 3, $\\lim_{x \\to 1} f(x) = 3$.\n\n$f(1) = 5$ (from the middle piece).\n\nThe limit exists and $f(1)$ is defined, but $\\lim_{x \\to 1} f(x) \\ne f(1)$. Continuity fails the third condition → **$f$ is not continuous at $x = 1$**. The discontinuity is **removable** (redefining $f(1) = 3$ would fix it).`,
  },
  {
    order: 4,
    difficulty: 'MEDIUM',
    question: `Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sqrt{x + 9} - 3}{x}$.`,
    solution: `Direct substitution gives $0/0$. Multiply numerator and denominator by the conjugate $\\sqrt{x + 9} + 3$:\n\n$\\dfrac{\\sqrt{x + 9} - 3}{x} \\cdot \\dfrac{\\sqrt{x + 9} + 3}{\\sqrt{x + 9} + 3} = \\dfrac{(x + 9) - 9}{x(\\sqrt{x + 9} + 3)} = \\dfrac{x}{x(\\sqrt{x + 9} + 3)} = \\dfrac{1}{\\sqrt{x + 9} + 3}$.\n\nNow plug in $x = 0$: $\\dfrac{1}{\\sqrt{9} + 3} = \\boxed{\\dfrac{1}{6}}$.`,
  },
  {
    order: 5,
    difficulty: 'MEDIUM',
    question: `Evaluate $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{3x^{2} - 5x + 7}{2x^{2} + x - 4}$ and $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{4x + 1}{x^{2} - 2}$.`,
    solution: `**Rule of thumb (rational function at $\\infty$):** compare leading-term degrees.\n\n**(a)** Top and bottom both have degree 2. Limit = ratio of leading coefficients = $\\boxed{3/2}$.\n\n**(b)** Top has degree 1, bottom has degree 2. Bottom grows faster, so the ratio $\\to \\boxed{0}$. (The line $y = 0$ is a horizontal asymptote.)`,
  },
  {
    order: 6,
    difficulty: 'MEDIUM',
    question: `Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sin(5x)}{3x}$.`,
    solution: `Use the special trig limit $\\lim_{u \\to 0} \\dfrac{\\sin u}{u} = 1$.\n\nRewrite: $\\dfrac{\\sin(5x)}{3x} = \\dfrac{\\sin(5x)}{5x} \\cdot \\dfrac{5}{3}$.\n\nAs $x \\to 0$, $5x \\to 0$, so $\\dfrac{\\sin(5x)}{5x} \\to 1$.\n\n$\\lim = 1 \\cdot \\dfrac{5}{3} = \\boxed{\\dfrac{5}{3}}$.`,
  },
  {
    order: 7,
    difficulty: 'MEDIUM',
    question: `Find all values of $a$ that make $f(x) = \\begin{cases} ax + 3 & x \\le 2 \\\\ x^{2} - 1 & x > 2 \\end{cases}$ continuous at $x = 2$.`,
    solution: `Continuity at $x = 2$ requires the two pieces to agree there:\n\nLeft value: $f(2) = 2a + 3$.\n\nRight limit: $\\lim_{x \\to 2^{+}} f(x) = 2^{2} - 1 = 3$.\n\nSet equal: $2a + 3 = 3 \\Rightarrow 2a = 0 \\Rightarrow \\boxed{a = 0}$.`,
  },
  {
    order: 8,
    difficulty: 'HARD',
    question: `Use the Intermediate Value Theorem to show that $f(x) = x^{3} + x - 1$ has a root in the interval $(0, 1)$.`,
    solution: `**Step 1.** $f(x) = x^{3} + x - 1$ is a polynomial → **continuous on $[0, 1]$** (and everywhere). The IVT continuity hypothesis is satisfied.\n\n**Step 2.** Compute the endpoints:\n- $f(0) = 0^{3} + 0 - 1 = -1$\n- $f(1) = 1 + 1 - 1 = 1$\n\n**Step 3.** $f(0) = -1 < 0 < 1 = f(1)$. So $0$ lies between $f(0)$ and $f(1)$.\n\n**Step 4.** By the **IVT**, there exists $c \\in (0, 1)$ with $f(c) = 0$. ∎\n\n*AP grading note: explicitly stating "continuous on $[0,1]$" is required for full credit.*`,
  },
  {
    order: 9,
    difficulty: 'HARD',
    question: `Evaluate $\\displaystyle \\lim_{x \\to \\infty} \\left( \\sqrt{x^{2} + 4x} - x \\right)$.`,
    solution: `Direct substitution gives $\\infty - \\infty$, indeterminate. Multiply by the conjugate:\n\n$\\sqrt{x^{2} + 4x} - x = \\dfrac{(\\sqrt{x^{2} + 4x} - x)(\\sqrt{x^{2} + 4x} + x)}{\\sqrt{x^{2} + 4x} + x} = \\dfrac{(x^{2} + 4x) - x^{2}}{\\sqrt{x^{2} + 4x} + x} = \\dfrac{4x}{\\sqrt{x^{2} + 4x} + x}$.\n\nDivide top and bottom by $x$ (with $x > 0$ so $\\sqrt{x^{2}} = x$):\n\n$\\dfrac{4x}{\\sqrt{x^{2} + 4x} + x} = \\dfrac{4}{\\sqrt{1 + 4/x} + 1}$.\n\nAs $x \\to \\infty$, $4/x \\to 0$:\n\n$\\lim = \\dfrac{4}{\\sqrt{1} + 1} = \\boxed{2}$.`,
    isPremium: true,
  },
  {
    order: 10,
    difficulty: 'HARD',
    question: `Use the Squeeze Theorem to evaluate $\\displaystyle \\lim_{x \\to 0} x^{2}\\sin\\!\\left(\\dfrac{1}{x}\\right)$.`,
    solution: `**Step 1 — Bound the sine.** For all $x \\neq 0$, $-1 \\le \\sin(1/x) \\le 1$.\n\n**Step 2 — Multiply by $x^{2}$ (positive for $x \\neq 0$):**\n$-x^{2} \\le x^{2}\\sin(1/x) \\le x^{2}$.\n\n**Step 3 — Take limits of the outer functions:**\n$\\lim_{x \\to 0}(-x^{2}) = 0$ and $\\lim_{x \\to 0}(x^{2}) = 0$.\n\n**Step 4 — Apply the Squeeze Theorem:**\n$0 \\le \\lim_{x \\to 0} x^{2}\\sin(1/x) \\le 0$, so the limit equals $\\boxed{0}$.\n\nNote that $\\sin(1/x)$ alone has no limit at 0 (it oscillates wildly), but multiplying by $x^{2}$ damps the oscillation.`,
    isPremium: true,
  },
]

const HUB_CARDS: { front: string; back: string; lessonPart?: number; hint?: string }[] = [
  // Part 1 — what a limit is
  { lessonPart: 1, front: 'Intuitive definition of a limit', back: '$\\lim_{x \\to a} f(x) = L$ means: as $x$ gets arbitrarily close to $a$ (but not equal), $f(x)$ gets arbitrarily close to $L$.' },
  { lessonPart: 1, front: 'Does the limit care about $f(a)$?', back: 'No. The limit is about behavior **near** $a$, not at $a$. $f(a)$ may be undefined and the limit can still exist.' },
  { lessonPart: 1, front: 'When does a limit exist?', back: 'When the left and right one-sided limits both exist, are finite, and agree.' },
  { lessonPart: 1, front: 'Three things a limit can do at $x = a$', back: '(1) equal a finite number, (2) be $\\pm\\infty$ (vertical asymptote), or (3) DNE (jump, oscillation, or one-sided $\\pm\\infty$ disagreement).' },
  // Part 2 — algebraic computation
  { lessonPart: 2, front: 'Strategy when direct substitution gives $0/0$', back: 'Try to **factor and cancel**, or **rationalize** (multiply by conjugate), or **simplify a complex fraction**, or use a **trig identity**.' },
  { lessonPart: 2, front: 'Special trig limit #1', back: '$\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$.' },
  { lessonPart: 2, front: 'Special trig limit #2', back: '$\\displaystyle \\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x} = 0$.' },
  { lessonPart: 2, front: 'L\'Hôpital\'s Rule (preview)', back: 'For $0/0$ or $\\infty/\\infty$ forms: $\\displaystyle \\lim \\dfrac{f}{g} = \\lim \\dfrac{f\'}{g\'}$ (provided the right-hand limit exists).' },
  // Part 3 — one-sided + infinite
  { lessonPart: 3, front: 'One-sided limit notation', back: '$\\lim_{x \\to a^{-}} f(x)$ approaches $a$ from the left; $\\lim_{x \\to a^{+}} f(x)$ approaches from the right.' },
  { lessonPart: 3, front: '"Limit equals $+\\infty$" — does the limit exist?', back: 'On the AP exam: **no**, the limit does not exist (in the formal sense). The notation $\\lim = \\pm\\infty$ describes vertical-asymptote behavior.' },
  { lessonPart: 3, front: 'Sign of an infinite limit', back: 'Look at the sign of the dominant term as $x \\to a$ from each side. Often easiest with a sign chart of $(x - a)^{n}$.' },
  // Part 4 — limits at infinity
  { lessonPart: 4, front: 'Rational function as $x \\to \\infty$ — degree(num) < degree(den)', back: 'Limit = 0. Horizontal asymptote $y = 0$.' },
  { lessonPart: 4, front: 'Rational function as $x \\to \\infty$ — degree(num) = degree(den)', back: 'Limit = ratio of leading coefficients. Horizontal asymptote at that value.' },
  { lessonPart: 4, front: 'Rational function as $x \\to \\infty$ — degree(num) > degree(den)', back: 'Limit is $\\pm\\infty$. No horizontal asymptote (may have a slant asymptote if degree differs by 1).' },
  // Part 5 — continuity
  { lessonPart: 5, front: 'Three-part definition of continuity at $x = a$', back: '(1) $f(a)$ defined. (2) $\\lim_{x \\to a} f(x)$ exists. (3) $\\lim_{x \\to a} f(x) = f(a)$.' },
  { lessonPart: 5, front: 'Removable discontinuity', back: 'Limit exists at $a$ but $f(a)$ is undefined or doesn\'t equal the limit. Fixable by redefining $f(a)$.' },
  { lessonPart: 5, front: 'Jump discontinuity', back: 'Both one-sided limits exist and are finite, but disagree. Cannot be fixed by redefining a single point.' },
  { lessonPart: 5, front: 'Infinite discontinuity', back: 'At least one one-sided limit is $\\pm\\infty$. Vertical asymptote. Not removable.' },
  // Part 6 — IVT, MVT/squeeze
  { lessonPart: 6, front: 'Intermediate Value Theorem (IVT)', back: 'If $f$ is continuous on $[a,b]$ and $N$ is between $f(a)$ and $f(b)$, then $\\exists\\, c \\in (a,b)$ with $f(c) = N$.' },
  { lessonPart: 6, front: 'Required hypothesis to cite IVT on the AP exam', back: '**Continuity on a closed interval $[a, b]$.** Skipping this loses the point.' },
  { lessonPart: 6, front: 'Squeeze Theorem', back: 'If $g(x) \\le f(x) \\le h(x)$ near $a$ and $\\lim g = \\lim h = L$, then $\\lim f = L$.' },
  // Part 7 — connections
  { lessonPart: 7, front: 'Why limits matter in the rest of calculus', back: 'Derivative: $f\'(a) = \\lim_{h \\to 0} \\dfrac{f(a + h) - f(a)}{h}$. Definite integral: $\\int_{a}^{b} f \\,dx = \\lim$ of Riemann sums.' },
  { lessonPart: 7, front: 'AP grader red flag — vertical asymptote question', back: 'Always identify the asymptote with a one-sided limit equaling $\\pm\\infty$, not with "$f(a)$ is undefined" alone.' },
  { lessonPart: 7, front: 'AP grader red flag — continuous piecewise', back: 'Match the two pieces *and* match each one-sided limit. State both equalities explicitly.' },
]

async function main() {
  console.log('🚀 Reorganizing AP Calculus AB Limits unit (POC)…\n')

  // 1. Locate course, hub, rich category
  const course = await prisma.course.findUnique({ where: { slug: COURSE_SLUG } })
  if (!course) throw new Error(`Course not found: ${COURSE_SLUG}`)

  const hub = await prisma.topic.findUnique({ where: { slug: HUB_SLUG } })
  if (!hub) throw new Error(`Hub topic not found: ${HUB_SLUG}`)
  console.log(`Hub: ${hub.slug} (id=${hub.id}, categoryId=${hub.categoryId})`)

  const richCategory = await prisma.category.findFirst({
    where: { courseId: course.id, name: RICH_CATEGORY_NAME },
    include: { topics: { orderBy: { order: 'asc' } } },
  })
  if (!richCategory) {
    console.log(`(rich category "${RICH_CATEGORY_NAME}" not found — already reorganized? proceeding)`)
  } else {
    console.log(`Rich category "${richCategory.name}" (id=${richCategory.id}) has ${richCategory.topics.length} topics to migrate.`)

    // 2. Re-parent the rich topics under the hub and move them to the hub's category.
    let order = 1
    for (const t of richCategory.topics) {
      // Skip the hub itself (defensive — shouldn't be in this category, but be safe)
      if (t.id === hub.id) continue
      await prisma.topic.update({
        where: { id: t.id },
        data: {
          parentTopicId: hub.id,
          categoryId: hub.categoryId,
          order,
        },
      })
      console.log(`  ↳ re-parented: ${t.slug} (order=${order})`)
      order++
    }

    // 3. Delete the now-empty rich category.
    const remaining = await prisma.topic.count({ where: { categoryId: richCategory.id } })
    if (remaining === 0) {
      await prisma.category.delete({ where: { id: richCategory.id } })
      console.log(`✅ Deleted empty category "${RICH_CATEGORY_NAME}" (id=${richCategory.id}).`)
    } else {
      console.log(`⚠️  Category "${RICH_CATEGORY_NAME}" still has ${remaining} topics; not deleting.`)
    }
  }

  // 4. Upgrade the hub: title, textContent, problems, flashcards.
  await prisma.topic.update({
    where: { id: hub.id },
    data: {
      title: HUB_TITLE,
      textContent: HUB_TEXT,
      order: 0, // float to top of its category
    },
  })
  console.log(`✅ Hub textContent updated (${HUB_TEXT.length} chars).`)

  const deletedProblems = await prisma.exampleProblem.deleteMany({ where: { topicId: hub.id } })
  await prisma.exampleProblem.createMany({
    data: HUB_PROBLEMS.map((p) => ({
      topicId: hub.id,
      order: p.order,
      difficulty: p.difficulty,
      question: p.question,
      solution: p.solution,
      isPremium: p.isPremium ?? false,
    })),
  })
  console.log(`✅ Hub example problems wiped (${deletedProblems.count}) and recreated (${HUB_PROBLEMS.length}).`)

  const deletedCards = await prisma.flashcard.deleteMany({ where: { topicId: hub.id } })
  await prisma.flashcard.createMany({
    data: HUB_CARDS.map((c) => ({
      topicId: hub.id,
      front: c.front,
      back: c.back,
      hint: c.hint,
      lessonPart: c.lessonPart,
      isPremium: false,
    })),
  })
  console.log(`✅ Hub flashcards wiped (${deletedCards.count}) and recreated (${HUB_CARDS.length}).`)

  console.log('\n🎉 Done. The Limits & Continuity unit is now consolidated under one hub.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
