import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Absolute Extrema on Closed Intervals (AP Calculus AB).
 * Registry key / DB Topic.slug: 'absolute-extrema'.
 * 7 parts, gold-standard structure: local vs. absolute → Extreme Value Theorem →
 * critical numbers → the Candidates Test → non-differentiable & endpoint subtleties →
 * applied optimization → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every candidate-point computation was verified numerically before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'absolute-extrema',
    sections: [
      {
        id: 'abx1-intro',
        type: 'text' as const,
        content: `# 🏔️ Absolute Extrema on Closed Intervals

**Part 1 of 7 — Local vs. Absolute Extrema**

---

### Topics in This Part

| Section |
|---------|
| What "extreme value" means |
| Local (relative) extrema |
| Absolute (global) extrema |
| Why the interval matters |

> 🔑 **Key Concept:** An **absolute extremum** is the single highest or lowest value a function actually reaches on a given interval. On a **closed** interval $[a, b]$, calculus guarantees these values exist *and* gives us a foolproof recipe to find them — the **Candidates Test**.`,
      },
      {
        id: 'abx1-vocab',
        type: 'text' as const,
        content: `## Two Kinds of "Highest" and "Lowest"

A point on a graph can be a peak compared with its **neighbors** (local) or compared with the **entire** interval (absolute).

- **Local (relative) maximum** at $x = c$: $f(c) \\ge f(x)$ for all $x$ *near* $c$. A "hilltop."
- **Local (relative) minimum** at $x = c$: $f(c) \\le f(x)$ for all $x$ *near* $c$. A "valley bottom."
- **Absolute (global) maximum** on $[a,b]$: $f(c) \\ge f(x)$ for **every** $x$ in $[a,b]$. The single highest point.
- **Absolute (global) minimum** on $[a,b]$: $f(c) \\le f(x)$ for **every** $x$ in $[a,b]$. The single lowest point.

> 💡 Every absolute extremum on a closed interval is **either a local extremum or an endpoint**. Endpoints can win even when the graph is still climbing or falling toward them.

## Value vs. Location — Don't Mix Them Up

| Term | Question it answers | Example |
|------|---------------------|---------|
| **Extreme value** | *What* is the max/min? (a $y$-value) | "The absolute max value is $7$." |
| **Where** it occurs | *At what $x$*? (an input) | "...attained at $x = 2$." |

When a problem says **"find the absolute maximum,"** it usually wants the $y$-**value**. When it says **"where does the maximum occur,"** it wants the $x$-**value**. Read carefully — AP graders dock points for answering the wrong one.

> ⚠️ "The maximum is $5$" means the *output* is $5$. The input that produces it might be $x = 2$, $x = -3$, or anything else.`,
      },
      {
        id: 'abx1-mc-vocab',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A function on $[-2, 6]$ has a hilltop at $x = 1$ that is higher than every other point on the interval. This point is a:',
              options: ['Absolute maximum (and a local maximum)', 'Local maximum only', 'Absolute minimum', 'Endpoint extremum'],
              correctAnswer: 0,
              explanation: 'It is higher than its neighbors (local max) AND higher than every point on the whole interval (absolute max). An interior absolute max is automatically also a local max.',
            },
            {
              question: 'On $[0, 10]$, the graph rises the entire way with no flat spots. Where is the absolute maximum?',
              options: ['At the right endpoint $x = 10$', 'At the left endpoint $x = 0$', 'There is no absolute maximum', 'In the middle, at $x = 5$'],
              correctAnswer: 0,
              explanation: 'A strictly increasing function reaches its largest value at the right end of a closed interval. Endpoints can be absolute extrema even with no critical point in sight.',
            },
          ],
        },
      },
      {
        id: 'abx1-interval-matters',
        type: 'text' as const,
        content: `## The Interval Changes the Answer

The *same* function can have completely different absolute extrema depending on the interval. Consider $f(x) = x^3 - 3x$, whose interior "hill" is at $x = -1$ (value $2$) and "valley" at $x = 1$ (value $-2$).

| Interval | Absolute max | Absolute min |
|----------|--------------|--------------|
| $[-3, 3]$ | $18$ at $x = 3$ (endpoint) | $-18$ at $x = -3$ (endpoint) |
| $[0, 3]$ | $18$ at $x = 3$ (endpoint) | $-2$ at $x = 1$ (interior valley) |
| $[-2, 1]$ | $2$ at $x = -1$ (interior hill) | $-2$ at both $x=-2$ and $x=1$ (endpoints) |

> 🔑 **Takeaway:** You can **never** name the absolute extrema without knowing the interval. The interior hill at $x=-1$ is the *absolute* max on $[-2,1]$ — but on a wider interval like $[-3,3]$ an endpoint beats it.`,
      },
      {
        id: 'abx1-dropdown-classify',
        type: 'dropdown-select' as const,
        content: `**Classify Each Point** 🔽

A continuous function $g$ on $[-1, 5]$ has these values: $g(-1) = 4$, an interior valley $g(2) = -3$, an interior hill $g(4) = 6$, and $g(5) = 1$. Classify each.`,
        exercise: {
          dropdowns: [
            { label: 'The point at $x = 4$ (value $6$):', options: ['Absolute maximum', 'Absolute minimum', 'Local minimum only', 'Neither'] },
            { label: 'The point at $x = 2$ (value $-3$):', options: ['Absolute minimum', 'Absolute maximum', 'Local maximum only', 'Neither'] },
            { label: 'The left endpoint $x = -1$ (value $4$):', options: ['Neither absolute extremum', 'Absolute maximum', 'Absolute minimum', 'Local minimum'] },
          ],
          correctAnswers: ['Absolute maximum', 'Absolute minimum', 'Neither absolute extremum'],
          hint1: 'Compare every listed value: $4,\\, -3,\\, 6,\\, 1$. The largest is the absolute max; the smallest is the absolute min.',
          hint2: 'The largest value $6$ occurs at $x=4$; the smallest value $-3$ occurs at $x=2$.',
          hint3: 'The endpoint value $4$ is neither the biggest nor the smallest, so $x=-1$ is not an absolute extremum.',
          explanation: 'Among $\\{4, -3, 6, 1\\}$, the max is $6$ (at $x=4$) and the min is $-3$ (at $x=2$). The endpoint value $4$ is in between, so it is neither absolute extremum.',
        },
      },
      {
        id: 'abx1-table-read',
        type: 'text' as const,
        content: `## Reading Extrema From a Table

When a function is given only by a table of values on $[a,b]$, you find absolute extrema by **scanning the outputs**: the biggest $f$-value is the absolute max, the smallest is the absolute min.

| $x$ | $-2$ | $0$ | $3$ | $5$ | $8$ |
|-----|------|-----|-----|-----|-----|
| $h(x)$ | $4$ | $-1$ | $7$ | $-6$ | $2$ |

Here the absolute max value is $7$ (at $x = 3$) and the absolute min value is $-6$ (at $x = 5$). No calculus needed — just compare the numbers.`,
      },
      {
        id: 'abx1-input-table',
        type: 'input-boxes' as const,
        content: `**Read the Extrema** 🧮

A continuous function $h$ on $[-3, 6]$ has these sampled values:

| $x$ | $-3$ | $-1$ | $2$ | $4$ | $6$ |
|-----|------|------|-----|-----|-----|
| $h(x)$ | $5$ | $-2$ | $9$ | $-7$ | $3$ |

**Box 1:** the absolute **maximum value** shown
**Box 2:** the absolute **minimum value** shown`,
        exercise: {
          boxes: 2,
          correctAnswers: ['9', '-7'],
          hint1: 'Scan the bottom row and find the largest and smallest outputs.',
          hint2: 'The values are $5, -2, 9, -7, 3$.',
          hint3: 'Largest is $9$ (at $x=2$); smallest is $-7$ (at $x=4$).',
          explanation: 'Among $\\{5, -2, 9, -7, 3\\}$, the absolute max value is $9$ (at $x=2$) and the absolute min value is $-7$ (at $x=4$).',
        },
      },
      {
        id: 'abx1-wrap',
        type: 'text' as const,
        content: `## Looking Ahead

You now know the vocabulary: **local vs. absolute**, **value vs. location**, and that the **interval is part of the question**.

The next big idea answers a foundational worry: *Are we even guaranteed that an absolute max and min exist?* For closed intervals and continuous functions, the answer is a resounding **yes** — that's the **Extreme Value Theorem**, Part 2.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'absolute-extrema',
    sections: [
      {
        id: 'abx2-intro',
        type: 'text' as const,
        content: `# 🏔️ Absolute Extrema on Closed Intervals

**Part 2 of 7 — The Extreme Value Theorem**

---

> 🔑 **The Guarantee:** If $f$ is **continuous** on a **closed** interval $[a, b]$, then $f$ attains both an **absolute maximum** and an **absolute minimum** somewhere on $[a, b]$. This is the **Extreme Value Theorem (EVT)**.`,
      },
      {
        id: 'abx2-fails',
        type: 'text' as const,
        content: `## How the Guarantee Can Fail

**Drop "closed."** Take $f(x) = x$ on the **open** interval $(0, 1)$. As $x \\to 1^-$ the values climb toward $1$ but never reach it (no largest value); as $x \\to 0^+$ they drop toward $0$ but never reach it (no smallest value). So on $(0,1)$ there is **neither** an absolute max nor min. Closing to $[0,1]$ fixes it: $x=1$ gives max $1$, $x=0$ gives min $0$.

**Drop "continuous."** On $[-1, 1]$ define

$$f(x) = \\begin{cases} \\dfrac{1}{x}, & x \\ne 0 \\\\[4pt] 0, & x = 0 \\end{cases}$$

This interval is closed, but $f$ is **not continuous** at $x=0$ (a vertical asymptote). The values shoot to $+\\infty$ and $-\\infty$, so there is **no** absolute max or min.

> 🔑 **Both** boxes must be checked: continuous **and** closed. Then — and only then — does the EVT promise extrema exist.`,
      },
      {
        id: 'abx2-mc-evt',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which function is *guaranteed* by the Extreme Value Theorem to attain an absolute maximum and minimum?',
              options: ['$f(x) = x^2$ on $[-3, 3]$', '$f(x) = x^2$ on $(-3, 3)$', '$f(x) = \\tan x$ on $[0, \\pi]$', '$f(x) = \\frac{1}{x}$ on $[-2, 2]$'],
              correctAnswer: 0,
              explanation: '$x^2$ is continuous and $[-3,3]$ is closed — both hypotheses hold. The open interval $(-3,3)$ fails "closed"; $\\tan x$ has an asymptote at $\\frac{\\pi}{2}$ (not continuous on $[0,\\pi]$); $\\frac{1}{x}$ is discontinuous at $0$.',
            },
            {
              question: 'The Extreme Value Theorem tells you that absolute extrema exist. What does it NOT tell you?',
              options: ['Where (at which $x$-values) they occur', 'That the interval must be closed', 'That the function must be continuous', 'That both a max and a min exist'],
              correctAnswer: 0,
              explanation: 'The EVT is an existence theorem: it guarantees a max and min exist but is silent on their locations. You still need the Candidates Test to find them.',
            },
          ],
        },
      },
      {
        id: 'abx2-checklist',
        type: 'text' as const,
        content: `## A Quick Two-Box Checklist

Before invoking the EVT, run this mental check:

| ✅ Box 1 | ✅ Box 2 |
|---------|---------|
| Is $f$ **continuous** on the whole interval? (no holes, jumps, asymptotes) | Is the interval **closed**, written $[a, b]$ with square brackets? |

If **both** boxes are checked, a max and a min are guaranteed. If either fails, the extrema *might* still exist — but the EVT no longer promises it, so you'd have to reason case by case.

> 💡 Square brackets $[\\,]$ = closed (endpoints included). Parentheses $(\\,)$ = open (endpoints excluded). The bracket type is the fastest tell.`,
      },
      {
        id: 'abx2-dropdown-hyp',
        type: 'dropdown-select' as const,
        content: `**Does the EVT Apply?** 🔽

For each setup, decide whether the EVT *guarantees* absolute extrema exist.`,
        exercise: {
          dropdowns: [
            { label: '$f(x) = \\sqrt{x}$ on $[0, 9]$:', options: ['Yes — guaranteed', 'No — interval not closed', 'No — not continuous'] },
            { label: '$f(x) = \\frac{1}{x-2}$ on $[0, 5]$:', options: ['No — not continuous', 'Yes — guaranteed', 'No — interval not closed'] },
            { label: '$f(x) = \\cos x$ on $(0, 2\\pi)$:', options: ['No — interval not closed', 'Yes — guaranteed', 'No — not continuous'] },
          ],
          correctAnswers: ['Yes — guaranteed', 'No — not continuous', 'No — interval not closed'],
          hint1: '$\\sqrt{x}$ is continuous on $[0,9]$ and the interval is closed — both hypotheses hold.',
          hint2: '$\\frac{1}{x-2}$ has a vertical asymptote at $x=2$, which lies inside $[0,5]$ — continuity fails.',
          hint3: '$\\cos x$ is continuous, but $(0, 2\\pi)$ is an *open* interval — the "closed" hypothesis fails.',
          explanation: '$\\sqrt{x}$ on $[0,9]$ satisfies both hypotheses (Yes). $\\frac{1}{x-2}$ is discontinuous at $x=2 \\in [0,5]$ (No). $\\cos x$ is continuous but $(0,2\\pi)$ is open (No).',
        },
      },
      {
        id: 'abx2-exists-not-located',
        type: 'text' as const,
        content: `## "Exists" Is Not "Located"

A favorite AP trap: once you've confirmed the EVT applies, it's tempting to think you've "answered" the problem. You haven't. The EVT is **step zero** — it green-lights the search by promising the extrema are out there somewhere.

The actual hunt is the Candidates Test, which evaluates every possible location and compares outputs. Two EVT-satisfying functions can have their maxima in completely different spots — one at an endpoint, one at an interior peak.`,
      },
      {
        id: 'abx2-mc-exists',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A function is continuous on $[2, 9]$. Which conclusion is justified by the EVT alone?',
              options: ['An absolute max and an absolute min both exist on $[2,9]$', 'The maximum occurs at $x = 9$', 'The minimum occurs at an interior point', 'The function has exactly one critical number'],
              correctAnswer: 0,
              explanation: 'The EVT guarantees existence of both extrema — and nothing more. It does not locate them or count critical numbers.',
            },
            {
              question: 'If $f$ is continuous on the OPEN interval $(2, 9)$, what does the EVT guarantee?',
              options: ['Nothing — the interval must be closed for the EVT to apply', 'Both a max and a min exist', 'A max exists but maybe not a min', 'The function is bounded'],
              correctAnswer: 0,
              explanation: 'The EVT requires a closed interval. On an open interval it gives no guarantee — values can approach a bound without ever reaching it.',
            },
          ],
        },
      },
      {
        id: 'abx2-wrap',
        type: 'text' as const,
        content: `## Looking Ahead

The EVT promises a max and a min **exist** on every closed, continuous interval. Now we hunt for **where** they could hide.

There are only two kinds of locations to check: **endpoints** and **critical numbers**. Part 3 defines critical numbers — the interior suspects.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'absolute-extrema',
    sections: [
      {
        id: 'abx3-intro',
        type: 'text' as const,
        content: `# 🏔️ Absolute Extrema on Closed Intervals

**Part 3 of 7 — Critical Numbers**

---

> 🔑 **Definition:** A **critical number** of $f$ is an interior value $x = c$ where either $f'(c) = 0$ **or** $f'(c)$ **does not exist**. Interior extrema can occur *only* at critical numbers.`,
      },
      {
        id: 'abx3-find-zero',
        type: 'text' as const,
        content: `## Why Only Critical Numbers, and How to Find Them

**Fermat's idea:** if $f$ has an interior local extremum at $x = c$ and is differentiable there, the tangent line at a smooth hilltop or valley bottom is **horizontal**, so $f'(c) = 0$. A peak or valley can also occur at a **corner or cusp**, where $f'$ does not exist. Everywhere else $f$ is strictly rising or falling, so no local extremum is possible.

### The procedure — $f'(x) = 0$

**Step 1:** Differentiate. **Step 2:** Set $f'(x) = 0$ and solve. **Step 3:** Keep only solutions **inside** the interval.

### Example: $f(x) = 2x^3 - 3x^2 - 12x + 1$ on $[-2, 3]$

$$f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1)$$

Setting $f'(x) = 0$ gives $x = 2$ and $x = -1$. Both lie inside $[-2, 3]$, so the critical numbers are $x = -1$ and $x = 2$.

> ⚠️ Always **factor out** common constants ($6$ here) before solving — it makes the roots obvious and prevents arithmetic slips.`,
      },
      {
        id: 'abx3-input-crit',
        type: 'input-boxes' as const,
        content: `**Find the Critical Numbers** 🧮

For $f(x) = x^3 - 6x^2 + 9x + 2$, find the two critical numbers (where $f'(x) = 0$).

**Box 1:** the smaller critical number
**Box 2:** the larger critical number`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '3'],
          hint1: 'Differentiate: $f\'(x) = 3x^2 - 12x + 9$.',
          hint2: 'Factor: $3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$.',
          hint3: 'Set each factor to zero: $x - 1 = 0$ and $x - 3 = 0$.',
          explanation: '$f\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3) = 0 \\Rightarrow x = 1$ and $x = 3$. Smaller is $1$, larger is $3$.',
        },
      },
      {
        id: 'abx3-find-undef',
        type: 'text' as const,
        content: `## Finding Critical Numbers — $f'(x)$ Undefined

Some critical numbers come from places where $f'$ **fails to exist**, even though $f$ itself is perfectly fine (continuous) there.

### Example: $f(x) = x^{2/3}$

$$f'(x) = \\frac{2}{3}x^{-1/3} = \\frac{2}{3\\,\\sqrt[3]{x}}$$

This derivative is **never zero**, but it is **undefined at $x = 0$** (division by zero). Since $f(0) = 0$ is a real, continuous value, $x = 0$ **is** a critical number — it's the sharp **cusp** at the origin.

> 🔑 Don't stop at $f'(x) = 0$. Also ask: *where is $f'$ undefined while $f$ is still defined?* Those points are critical numbers too.`,
      },
      {
        id: 'abx3-mc-crit',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which is NOT a critical number of $f$ on its interval?',
              options: ['An interior $x$ where $f\'(x) = 0$', 'An interior $x$ where $f\'(x)$ is undefined but $f$ is defined', 'An endpoint of the interval', 'An interior cusp of the graph'],
              correctAnswer: 2,
              explanation: 'Critical numbers are *interior* points where $f\'=0$ or $f\'$ is undefined. Endpoints are checked separately in the Candidates Test, but they are not "critical numbers."',
            },
            {
              question: 'For $f(x) = x^3$, how many critical numbers are there, and is $x=0$ a local extremum?',
              options: ['$x=0$ is critical, but it is NOT a local extremum', '$x=0$ is critical and IS a local maximum', 'There are no critical numbers', '$x=0$ is a local minimum'],
              correctAnswer: 0,
              explanation: '$f\'(x) = 3x^2 = 0$ at $x=0$, so $x=0$ is a critical number. But $x^3$ is increasing on both sides, so it is a *saddle* — critical numbers are only *candidates*, not guaranteed extrema.',
            },
          ],
        },
      },
      {
        id: 'abx3-two-sources',
        type: 'text' as const,
        content: `## Two Sources, One List

To be thorough, every critical-number hunt checks **both** sources:

| Source | How to find it | Example |
|--------|----------------|---------|
| $f'(x) = 0$ | solve the equation | $f' = 3(x-1)(x-3) \\Rightarrow x = 1, 3$ |
| $f'(x)$ undefined (but $f$ defined) | spot cusps, corners, division by zero in $f'$ | $f' = \\frac{2}{3\\sqrt[3]{x}}$ undefined at $x=0$ |

> ⚠️ A value where **both** $f'$ and $f$ are undefined is **not** a critical number — there's no point on the graph there. The function itself must be defined at $c$.`,
      },
      {
        id: 'abx3-dropdown-source',
        type: 'dropdown-select' as const,
        content: `**Identify the Critical Numbers** 🔽

Decide what produces the critical number(s) in each case.`,
        exercise: {
          dropdowns: [
            { label: '$f(x) = x^4 - 8x^2$, with $f\'(x) = 4x^3 - 16x = 4x(x-2)(x+2)$:', options: ['$x = -2, 0, 2$ (all from $f\' = 0$)', '$x = 0$ only', 'no critical numbers', '$x = -2, 2$ only'] },
            { label: '$f(x) = (x-5)^{2/3}$, with $f\'(x) = \\frac{2}{3(x-5)^{1/3}}$:', options: ['$x = 5$ (where $f\'$ is undefined)', '$x = 5$ (where $f\' = 0$)', 'no critical numbers', '$x = 0$'] },
          ],
          correctAnswers: ['$x = -2, 0, 2$ (all from $f\' = 0$)', '$x = 5$ (where $f\'$ is undefined)'],
          hint1: 'For the first, set $4x(x-2)(x+2) = 0$ and solve each factor.',
          hint2: 'For the second, the derivative is a fraction — ask where the denominator is zero.',
          hint3: '$(x-5)^{1/3} = 0$ at $x = 5$, so $f\'$ is undefined there while $f(5) = 0$ exists.',
          explanation: '$4x(x-2)(x+2)=0$ gives $x=-2,0,2$ (all from $f\'=0$). For $(x-5)^{2/3}$, $f\'$ blows up at $x=5$ (a cusp), so $x=5$ is a critical number where $f\'$ is undefined.',
        },
      },
      {
        id: 'abx3-wrap',
        type: 'text' as const,
        content: `## Looking Ahead

You can now produce the complete list of interior suspects: critical numbers from $f'(x) = 0$ **and** from $f'(x)$ undefined.

Add the two endpoints, evaluate $f$ at everything, and compare. That three-step procedure is the **Candidates Test** — the heart of this topic, coming up in Part 4.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'absolute-extrema',
    sections: [
      {
        id: 'abx4-intro',
        type: 'text' as const,
        content: `# 🏔️ Absolute Extrema on Closed Intervals

**Part 4 of 7 — The Candidates Test**

---

> 🔑 **The Method:** On a closed interval, the absolute max and min can occur **only** at a critical number or an endpoint. List every candidate, evaluate $f$ at each, and pick the largest and smallest **outputs**.

## The Three Steps

To find absolute extrema of a continuous $f$ on $[a, b]$:

1. **Find critical numbers** in $(a, b)$: solve $f'(x) = 0$ and find where $f'$ is undefined.
2. **List candidates:** the critical numbers **plus** the endpoints $a$ and $b$.
3. **Evaluate $f$** at every candidate. The **largest** output is the absolute max; the **smallest** is the absolute min.

> 💡 No First or Second Derivative Test needed — on a closed interval, **comparing the $y$-values directly** decides the winner. That's what makes the Candidates Test so reliable.`,
      },
      {
        id: 'abx4-worked',
        type: 'text' as const,
        content: `## Worked Example

**Find the absolute extrema of $f(x) = 2x^3 - 3x^2 - 12x + 1$ on $[-2, 3]$.**

**Step 1 — Critical numbers.** From Part 3, $f'(x) = 6(x-2)(x+1) = 0$ at $x = -1$ and $x = 2$ (both interior).

**Step 2 — Candidates:** $x = -2,\\; -1,\\; 2,\\; 3$ (two critical numbers + two endpoints).

**Step 3 — Evaluate:**

$$f(-2) = 2(-8) - 3(4) - 12(-2) + 1 = -16 - 12 + 24 + 1 = -3$$
$$f(-1) = 2(-1) - 3(1) - 12(-1) + 1 = -2 - 3 + 12 + 1 = 8$$
$$f(2) = 2(8) - 3(4) - 12(2) + 1 = 16 - 12 - 24 + 1 = -19$$
$$f(3) = 2(27) - 3(9) - 12(3) + 1 = 54 - 27 - 36 + 1 = -8$$

| $x$ | $-2$ | $-1$ | $2$ | $3$ |
|-----|------|------|-----|-----|
| $f(x)$ | $-3$ | $\\mathbf{8}$ | $\\mathbf{-19}$ | $-8$ |

**Absolute max $= 8$ at $x = -1$. Absolute min $= -19$ at $x = 2$.**

> ✅ Notice the absolute min is an *interior* critical point and the absolute max is also interior here — but you only know that *after* comparing all four values.`,
      },
      {
        id: 'abx4-dropdown-order',
        type: 'dropdown-select' as const,
        content: `**Run the Candidates Test** 🔽

You're finding the absolute extrema of $f(x) = x^3 - 6x^2 + 9x + 2$ on $[-1, 4]$. (Recall $f'(x) = 3(x-1)(x-3)$.)`,
        exercise: {
          dropdowns: [
            { label: 'The full candidate list is:', options: ['$-1,\\ 1,\\ 3,\\ 4$', '$1,\\ 3$', '$-1,\\ 4$', '$0,\\ 1,\\ 3$'] },
            { label: 'Evaluating gives the smallest value at:', options: ['$x = -1$', '$x = 1$', '$x = 3$', '$x = 4$'] },
            { label: 'The absolute maximum VALUE is:', options: ['$6$', '$2$', '$-14$', '$4$'] },
          ],
          correctAnswers: ['$-1,\\ 1,\\ 3,\\ 4$', '$x = -1$', '$6$'],
          hint1: 'Candidates = critical numbers ($1, 3$) plus endpoints ($-1, 4$).',
          hint2: 'Compute: $f(-1) = -14$, $f(1) = 6$, $f(3) = 2$, $f(4) = 6$.',
          hint3: 'The smallest output is $-14$ at $x=-1$; the largest output is $6$ (tied at $x=1$ and $x=4$).',
          explanation: 'Candidates $-1,1,3,4$ give $f$-values $-14,\\,6,\\,2,\\,6$. Absolute min $= -14$ at $x=-1$; absolute max $= 6$ (attained at both $x=1$ and $x=4$).',
        },
      },
      {
        id: 'abx4-organize',
        type: 'text' as const,
        content: `## Stay Organized With a Table

A clean candidate table prevents almost every error. Make one column per candidate, fill in $f$ at each, then circle the biggest and smallest:

| $x$ | critical # | critical # | endpoint | endpoint |
|-----|-----------|-----------|----------|----------|
| $f(x)$ | ? | ? | ? | ? |

> 💡 List candidates in increasing order so you don't accidentally skip one. Then read off the max and min from the bottom row — never from the $x$-row.`,
      },
      {
        id: 'abx4-input-extrema',
        type: 'input-boxes' as const,
        content: `**Find the Extreme Values** 🧮

Find the absolute extrema of $f(x) = x^3 - 3x$ on $[0, 3]$. (Here $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$, so the only critical number in $[0,3]$ is $x = 1$.)

**Box 1:** the absolute **maximum value**
**Box 2:** the absolute **minimum value**`,
        exercise: {
          boxes: 2,
          correctAnswers: ['18', '-2'],
          hint1: 'Candidates are $x = 0$ (endpoint), $x = 1$ (critical), $x = 3$ (endpoint).',
          hint2: 'Evaluate: $f(0) = 0$, $f(1) = 1 - 3 = -2$, $f(3) = 27 - 9 = 18$.',
          hint3: 'Largest output is the max; smallest output is the min.',
          explanation: '$f(0)=0,\\ f(1)=-2,\\ f(3)=18$. Absolute max $=18$ (at $x=3$); absolute min $=-2$ (at $x=1$).',
        },
      },
      {
        id: 'abx4-pitfall-text',
        type: 'text' as const,
        content: `## The Number-One Pitfall

Students lose easy points by **forgetting the endpoints**. Critical numbers are only half the candidate list — the boundaries $a$ and $b$ are *always* candidates, even when no critical number lands near them.

> ⚠️ "I found the critical numbers, so I'm done" is wrong. You're done only after you've evaluated $f$ at the critical numbers **and** both endpoints, then compared.`,
      },
      {
        id: 'abx4-mc-pitfall',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student finds critical numbers $x=1, 3$ on $[-1,4]$, evaluates only $f(1)$ and $f(3)$, and reports the max as the larger of those two. What did they do wrong?',
              options: ['They forgot to also evaluate the endpoints $x=-1$ and $x=4$', 'They should have used the Second Derivative Test', 'Critical numbers can never be extrema', 'They needed to factor differently'],
              correctAnswer: 0,
              explanation: 'The Candidates Test requires evaluating BOTH critical numbers AND endpoints. Skipping the endpoints is the classic error — here $x=-1$ gives the absolute min and $x=4$ ties the max.',
            },
            {
              question: 'In the Candidates Test, after listing candidates you should:',
              options: ['Compare the $f$-values (outputs) and pick the largest and smallest', 'Pick the largest and smallest $x$-values', 'Apply the First Derivative Test to each candidate', 'Take a second derivative at each candidate'],
              correctAnswer: 0,
              explanation: 'You compare OUTPUTS $f(x)$, not inputs. The biggest output is the absolute max value; the smallest is the absolute min value.',
            },
          ],
        },
      },
      {
        id: 'abx4-wrap',
        type: 'text' as const,
        content: `## Looking Ahead

The Candidates Test in three steps: **find critical numbers → add endpoints → evaluate and compare**. Master it and the entire topic is yours.

But two subtleties trip students up: critical numbers where $f'$ is **undefined** (cusps/corners), and remembering that **endpoints are always candidates**. Part 5 drills exactly these traps.`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'absolute-extrema',
    sections: [
      {
        id: 'abx5-intro',
        type: 'text' as const,
        content: `# 🏔️ Absolute Extrema on Closed Intervals

**Part 5 of 7 — Cusps, Corners & Endpoint Traps**

---

> 🔑 **The Subtle Cases:** Absolute extrema can hide at **cusps/corners** (where $f'$ is undefined) and at **endpoints** (which are always candidates, even when the graph is still rising or falling). Miss these and you miss points.`,
      },
      {
        id: 'abx5-cusp-worked',
        type: 'text' as const,
        content: `## Worked Example — A Cusp Wins

**Find the absolute extrema of $f(x) = x^{2/3}$ on $[-1, 8]$.**

**Step 1 — Critical numbers.** $f'(x) = \\dfrac{2}{3\\,\\sqrt[3]{x}}$ is never $0$, but is **undefined at $x = 0$**, where $f(0)=0$ exists. So $x = 0$ is a critical number (a cusp).

**Step 2 — Candidates:** $x = -1,\\; 0,\\; 8$.

**Step 3 — Evaluate:**

$$f(-1) = (-1)^{2/3} = 1, \\qquad f(0) = 0, \\qquad f(8) = 8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$$

| $x$ | $-1$ | $0$ | $8$ |
|-----|------|-----|-----|
| $f(x)$ | $1$ | $\\mathbf{0}$ | $\\mathbf{4}$ |

**Absolute max $= 4$ at $x = 8$. Absolute min $= 0$ at $x = 0$ — the cusp!**

> ⚠️ If you only solved $f'(x) = 0$ you'd have found **no** critical numbers and missed the minimum entirely. Always check where $f'$ is undefined.`,
      },
      {
        id: 'abx5-input-cusp',
        type: 'input-boxes' as const,
        content: `**The Cusp Minimum** 🧮

For $g(x) = |x - 2| - 1$ on $[0, 5]$, the corner at $x = 2$ is a critical number (the derivative doesn't exist there).

**Box 1:** the absolute **minimum value** of $g$ on $[0,5]$
**Box 2:** the absolute **maximum value** of $g$ on $[0,5]$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-1', '2'],
          hint1: 'Candidates: the corner $x=2$ and the endpoints $x=0$ and $x=5$.',
          hint2: 'Evaluate: $g(0) = |0-2|-1 = 1$, $g(2) = |2-2|-1 = -1$, $g(5) = |5-2|-1 = 2$.',
          hint3: 'The smallest output is the min; the largest is the max.',
          explanation: '$g(0)=1,\\ g(2)=-1,\\ g(5)=2$. Absolute min $=-1$ at the corner $x=2$; absolute max $=2$ at the endpoint $x=5$.',
        },
      },
      {
        id: 'abx5-endpoint-trap',
        type: 'text' as const,
        content: `## Endpoints Are Always Candidates

A function can be strictly increasing or decreasing on the whole interval — **no critical numbers at all**. Then both absolute extrema sit at the endpoints.

### Example: $f(x) = x^3 - 12x$ on $[0, 3]$

$f'(x) = 3x^2 - 12 = 3(x-2)(x+2)$, so $x = 2$ is the only critical number in $[0,3]$ ($x = -2$ is outside).

$$f(0) = 0, \\qquad f(2) = 8 - 24 = -16, \\qquad f(3) = 27 - 36 = -9$$

**Absolute max $= 0$ at the endpoint $x = 0$; absolute min $= -16$ at $x = 2$.** The right endpoint $x=3$ wins nothing — but you still had to check it.

> 💡 Even when an endpoint isn't the answer, it must appear on your candidate list. Omitting endpoints is the single most common Candidates-Test mistake.`,
      },
      {
        id: 'abx5-mc-traps',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A continuous $f$ on $[1, 6]$ has $f\'(x) > 0$ for every $x$ in $(1,6)$ (no critical numbers). Where are the absolute extrema?',
              options: ['Min at $x=1$, max at $x=6$', 'Min at $x=6$, max at $x=1$', 'There are no absolute extrema', 'Both occur at an interior point'],
              correctAnswer: 0,
              explanation: 'Strictly increasing means smallest value at the left endpoint ($x=1$) and largest at the right endpoint ($x=6$). With no critical numbers, only endpoints are candidates.',
            },
            {
              question: 'Why must you check where $f\'$ is *undefined*, not just where $f\' = 0$?',
              options: ['An absolute extremum can occur at a cusp or corner where $f\'$ is undefined', 'Because $f\' = 0$ never gives extrema', 'Because endpoints are where $f\'$ is undefined', 'You do not — only $f\' = 0$ matters'],
              correctAnswer: 0,
              explanation: 'Cusps and corners (like $x^{2/3}$ at $0$, or $|x-2|$ at $2$) are critical numbers where $f\'$ is undefined, and they can be the absolute max or min.',
            },
          ],
        },
      },
      {
        id: 'abx5-three-sources',
        type: 'text' as const,
        content: `## Three Places, Every Time

Pulling Parts 3–5 together, an absolute extremum on $[a,b]$ always comes from exactly one of three places:

| Candidate type | How it arises |
|----------------|---------------|
| $f'(x) = 0$ | smooth interior peak or valley |
| $f'(x)$ undefined | cusp or corner ($f$ still defined) |
| endpoint $a$ or $b$ | the boundary of the interval |

> 🔑 Your candidate list is **complete** only when all three types are represented (when they exist). Then evaluate and compare.`,
      },
      {
        id: 'abx5-dropdown-source',
        type: 'dropdown-select' as const,
        content: `**Where Does Each Extremum Come From?** 🔽

Match each situation to the type of candidate that produced the absolute extremum.`,
        exercise: {
          dropdowns: [
            { label: '$x^{2/3}$ on $[-1,8]$: the minimum at $x=0$ comes from a...', options: ['Critical number where $f\'$ is undefined', 'Endpoint', 'Critical number where $f\' = 0$'] },
            { label: '$x^3 - 12x$ on $[0,3]$: the maximum at $x=0$ comes from an...', options: ['Endpoint', 'Critical number where $f\' = 0$', 'Critical number where $f\'$ is undefined'] },
            { label: '$x^3 - 12x$ on $[0,3]$: the minimum at $x=2$ comes from a...', options: ['Critical number where $f\' = 0$', 'Endpoint', 'Critical number where $f\'$ is undefined'] },
          ],
          correctAnswers: ['Critical number where $f\'$ is undefined', 'Endpoint', 'Critical number where $f\' = 0$'],
          hint1: 'For $x^{2/3}$, the cusp at $0$ is where the derivative blows up (undefined).',
          hint2: 'For $x^3-12x$, the value $x=0$ is the left boundary of $[0,3]$ — an endpoint.',
          hint3: 'For $x^3-12x$, $x=2$ solves $f\'(x)=3(x-2)(x+2)=0$.',
          explanation: 'The cusp minimum comes from $f\'$ undefined; the endpoint maximum from the boundary; the interior valley from $f\'=0$. All three candidate types appear in the wild.',
        },
      },
      {
        id: 'abx5-wrap',
        type: 'text' as const,
        content: `## Looking Ahead

You've now seen every candidate source — $f'=0$, $f'$ undefined, and endpoints — and the traps around each. The mechanics are solid.

Part 6 turns the Candidates Test outward: applied **optimization** problems where you build the function yourself, then find the largest or smallest value it can take.`,
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'absolute-extrema',
    sections: [
      {
        id: 'abx6-intro',
        type: 'text' as const,
        content: `# 🏔️ Absolute Extrema on Closed Intervals

**Part 6 of 7 — Applied Optimization**

---

> 🔑 **The Connection:** Real "biggest / smallest / cheapest / most" problems become closed-interval extrema problems. Build the function, find its **domain interval**, then run the Candidates Test.

## The Optimization Strategy

1. **Identify** the quantity to maximize or minimize and name a variable.
2. **Write** that quantity as a function of one variable.
3. **Determine the closed interval** of feasible inputs (the *physical* domain).
4. **Run the Candidates Test** on that interval.
5. **Answer the question asked** — value, location, or both — with correct units.

> 💡 The physical context often *creates* the closed interval (a length can't be negative; it can't exceed the available material). That closed interval is what lets you use the Candidates Test.`,
      },
      {
        id: 'abx6-worked',
        type: 'text' as const,
        content: `## Worked Example — Maximum Concentration

A drug's concentration (in mg/L) $t$ hours after a dose is modeled by

$$C(t) = t\\,e^{-t}, \\qquad 0 \\le t \\le 3.$$

**Find the maximum concentration and when it occurs.**

**Derivative (product rule):**

$$C'(t) = e^{-t} + t(-e^{-t}) = e^{-t}(1 - t)$$

Since $e^{-t} > 0$ always, $C'(t) = 0$ only when $1 - t = 0 \\Rightarrow t = 1$ (inside $[0,3]$).

**Candidates:** $t = 0,\\; 1,\\; 3$.

$$C(0) = 0, \\qquad C(1) = 1\\cdot e^{-1} = \\tfrac{1}{e} \\approx 0.368, \\qquad C(3) = 3e^{-3} \\approx 0.149$$

**Maximum concentration $\\approx 0.368$ mg/L, occurring at $t = 1$ hour.**

> ✅ The largest *output* ($\\frac{1}{e}$) is the answer to "maximum concentration"; the input $t=1$ answers "when." Different questions, different parts of the same row.`,
      },
      {
        id: 'abx6-input-opt',
        type: 'input-boxes' as const,
        content: `**Optimize the Profit** 🧮

A shop's daily profit (in hundreds of dollars) for producing $x$ units is

$$P(x) = -x^2 + 4x + 1, \\qquad 0 \\le x \\le 3.$$

**Box 1:** the production level $x$ that **maximizes** profit
**Box 2:** the **maximum** profit value (in hundreds)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '5'],
          hint1: 'Differentiate: $P\'(x) = -2x + 4$. Set $-2x + 4 = 0$.',
          hint2: 'Critical number $x = 2$ (inside $[0,3]$). Candidates: $x = 0, 2, 3$.',
          hint3: 'Evaluate: $P(0) = 1$, $P(2) = -4 + 8 + 1 = 5$, $P(3) = -9 + 12 + 1 = 4$.',
          explanation: '$P\'(x) = -2x+4 = 0 \\Rightarrow x = 2$. Comparing $P(0)=1,\\ P(2)=5,\\ P(3)=4$, the max is $5$ (hundred dollars) at $x = 2$ units.',
        },
      },
      {
        id: 'abx6-answer-question',
        type: 'text' as const,
        content: `## Answer the Question That Was Asked

The most-missed point in applied problems isn't the calculus — it's answering the wrong thing. After the Candidates Test, re-read the prompt:

| If it asks... | Report... |
|---------------|-----------|
| "the maximum *profit / area / concentration*" | the $f$-**value** (with units) |
| "*when / at what level* is it greatest" | the $x$-**value** (with units) |
| "find the dimensions" | translate $x$ back into the original quantities |

> ⚠️ A perfect Candidates Test still earns zero on the final part if you hand back an $x$ when the grader wanted a $y$.`,
      },
      {
        id: 'abx6-mc-context',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In an optimization problem, the closed interval $[a,b]$ usually comes from:',
              options: ['Physical constraints on the variable (e.g. a length can\'t be negative or exceed the material)', 'The answer choices given', 'Always being $[0, 1]$ by convention', 'The number of critical numbers'],
              correctAnswer: 0,
              explanation: 'The feasible domain is dictated by the real-world setup — nonnegative lengths, limited material, a fixed time window. That closed interval is what justifies the Candidates Test.',
            },
            {
              question: 'A question asks "at what time is the concentration greatest?" Your candidate values are $C(0)=0$, $C(1)=\\frac{1}{e}$, $C(3)=3e^{-3}$. Your answer should be:',
              options: ['$t = 1$ hour', '$\\frac{1}{e}$ mg/L', '$t = 3$ hours', '$0$'],
              correctAnswer: 0,
              explanation: '"At what time" asks for the input (location): the max output $\\frac{1}{e}$ occurs at $t=1$. If it had asked "what is the greatest concentration," the answer would be $\\frac{1}{e}$ mg/L.',
            },
          ],
        },
      },
      {
        id: 'abx6-geometry-setup',
        type: 'text' as const,
        content: `## A Geometry Optimization

A classic AP setup: a rectangular pen is built against a barn wall, so only **three** sides need fencing. With $40$ m of fence and width $x$ on each of the two perpendicular sides, the side parallel to the wall is $40 - 2x$, giving area

$$A(x) = x(40 - 2x) = 40x - 2x^2.$$

The physical domain is $0 \\le x \\le 20$ (at $x=20$ the parallel side shrinks to $0$). Now optimize on that closed interval.`,
      },
      {
        id: 'abx6-dropdown-opt',
        type: 'dropdown-select' as const,
        content: `**Optimize Step by Step** 🔽

Using the pen from above with $A(x) = 40x - 2x^2$ on $[0, 20]$, work through the Candidates Test.`,
        exercise: {
          dropdowns: [
            { label: '$A\'(x) =$', options: ['$40 - 4x$', '$40 - 2x$', '$80x - 2$', '$-4x$'] },
            { label: 'The critical number is $x =$', options: ['$10$', '$20$', '$40$', '$5$'] },
            { label: 'The maximum area (in m²) is:', options: ['$200$', '$400$', '$100$', '$160$'] },
          ],
          correctAnswers: ['$40 - 4x$', '$10$', '$200$'],
          hint1: 'Differentiate $40x - 2x^2$ term by term.',
          hint2: 'Set $40 - 4x = 0 \\Rightarrow x = 10$, which is inside $[0,20]$.',
          hint3: 'Candidates $x = 0, 10, 20$ give $A = 0,\\ 200,\\ 0$. The biggest is at $x=10$.',
          explanation: '$A\'(x) = 40 - 4x = 0 \\Rightarrow x = 10$. Then $A(10) = 40(10) - 2(100) = 400 - 200 = 200$ m². Endpoints give $A=0$, so the max area is $200$ m².',
        },
      },
      {
        id: 'abx6-wrap',
        type: 'text' as const,
        content: `## Looking Ahead

Optimization is just the Candidates Test wearing a word-problem costume: **build the function, find the closed domain, evaluate the candidates, answer in context with units.**

Part 7 brings it all together — local vs. absolute, the EVT, critical numbers, the Candidates Test, cusps and endpoints, and applications — in a mixed-practice set and a three-question **Exit Quiz**.`,
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'absolute-extrema',
    sections: [
      {
        id: 'abx7-intro',
        type: 'text' as const,
        content: `# 🏔️ Absolute Extrema on Closed Intervals

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) distinguish local from absolute extrema, (2) apply the Extreme Value Theorem, (3) find all critical numbers, (4) run the Candidates Test, (5) handle cusps and endpoints, and (6) solve applied optimization. Time to put it together.`,
      },
      {
        id: 'abx7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Guarantee extrema exist | EVT: $f$ **continuous** on a **closed** $[a,b]$ |
| Find interior suspects | critical numbers: $f'(x) = 0$ **or** $f'$ undefined |
| Build the candidate list | critical numbers **+** both endpoints |
| Decide the winners | evaluate $f$; largest output = max, smallest = min |
| Optimization | build $f$, find the closed domain, then Candidates Test |

> ⚠️ Top three mistakes: forgetting the **endpoints**, ignoring where $f'$ is **undefined**, and reporting an $x$-**location** when the question wanted the $y$-**value** (or vice versa).`,
      },
      {
        id: 'abx7-input-mixed',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Find the absolute extrema of $f(x) = x^2 - 4x + 7$ on $[0, 5]$.

**Box 1:** the absolute **minimum value**
**Box 2:** the absolute **maximum value**`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '12'],
          hint1: '$f\'(x) = 2x - 4 = 0 \\Rightarrow x = 2$ (inside $[0,5]$).',
          hint2: 'Candidates: $x = 0, 2, 5$.',
          hint3: 'Evaluate: $f(0) = 7$, $f(2) = 4 - 8 + 7 = 3$, $f(5) = 25 - 20 + 7 = 12$.',
          explanation: '$f(0)=7,\\ f(2)=3,\\ f(5)=12$. Absolute min $=3$ (at $x=2$, the vertex); absolute max $=12$ (at $x=5$).',
        },
      },
      {
        id: 'abx7-cubic-note',
        type: 'text' as const,
        content: `## Cubics on a Closed Interval

Cubic functions are the AP exam's favorite for this topic: their derivative is a quadratic, so you typically get **two** critical numbers, and the cubic's $\\pm\\infty$ end behavior makes the endpoint values genuinely competitive with the interior peak and valley.

That's why you can never skip evaluating all four candidates on a cubic — any of them can win. The next drill is a full four-candidate cubic.`,
      },
      {
        id: 'abx7-dropdown-mixed',
        type: 'dropdown-select' as const,
        content: `**Full Candidates Test** 🔽

Find the absolute extrema of $f(x) = 2x^3 + 3x^2 - 36x$ on $[-4, 4]$. (Here $f'(x) = 6x^2 + 6x - 36 = 6(x+3)(x-2)$.)`,
        exercise: {
          dropdowns: [
            { label: 'Critical numbers inside $[-4,4]$:', options: ['$-3$ and $2$', '$3$ and $-2$', '$-3$ and $-2$', '$0$ and $2$'] },
            { label: 'The absolute maximum value is:', options: ['$81$', '$32$', '$64$', '$-44$'] },
            { label: 'The absolute minimum value is:', options: ['$-44$', '$-4$', '$0$', '$64$'] },
          ],
          correctAnswers: ['$-3$ and $2$', '$81$', '$-44$'],
          hint1: 'Set $6(x+3)(x-2) = 0 \\Rightarrow x = -3$ and $x = 2$, both inside $[-4,4]$.',
          hint2: 'Candidates $-4, -3, 2, 4$ give $f = 64,\\ 81,\\ -44,\\ 32$.',
          hint3: 'Largest output is $81$ (at $x=-3$); smallest is $-44$ (at $x=2$).',
          explanation: 'Critical numbers $-3, 2$. Evaluating all candidates: $f(-4)=64,\\ f(-3)=81,\\ f(2)=-44,\\ f(4)=32$. Absolute max $=81$ at $x=-3$; absolute min $=-44$ at $x=2$.',
        },
      },
      {
        id: 'abx7-rational-note',
        type: 'text' as const,
        content: `## Beyond Polynomials

The Candidates Test works on **any** continuous function on a closed interval — rational, radical, trig, exponential, logarithmic. The only adjustment is computing $f'$ correctly (quotient rule, chain rule, etc.) and checking where $f'$ is undefined.

For instance, $f(x) = x + \\dfrac{4}{x}$ has $f'(x) = 1 - \\dfrac{4}{x^2}$, which is zero at $x = \\pm 2$. On $[1, 4]$ only $x = 2$ qualifies — try it in the next question.`,
      },
      {
        id: 'abx7-mc-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = x + \\dfrac{4}{x}$ on $[1, 4]$, where is the absolute minimum, and what is its value?',
              options: ['Min value $4$ at $x = 2$', 'Min value $5$ at $x = 1$', 'Min value $5$ at $x = 4$', 'Min value $0$ at $x = 0$'],
              correctAnswer: 0,
              explanation: '$f\'(x) = 1 - \\frac{4}{x^2} = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = 2$ (in $[1,4]$). Candidates: $f(1)=5,\\ f(2)=4,\\ f(4)=5$. Absolute min is $4$ at $x=2$.',
            },
            {
              question: 'Which statement about absolute extrema on a closed interval is FALSE?',
              options: ['An absolute extremum can occur only at a critical number, never at an endpoint', 'The EVT guarantees a max and min exist if $f$ is continuous on $[a,b]$', 'Critical numbers include points where $f\'$ is undefined', 'You compare $f$-values to decide the winners'],
              correctAnswer: 0,
              explanation: 'False — absolute extrema can absolutely occur at endpoints, and often do. The other three statements are all true.',
            },
          ],
        },
      },
      {
        id: 'abx7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The Extreme Value Theorem guarantees an absolute max and min when $f$ is:',
              options: ['Continuous on a closed interval $[a,b]$', 'Differentiable on an open interval $(a,b)$', 'Continuous on any interval', 'Increasing on $[a,b]$'],
              correctAnswer: 0,
              explanation: 'Both hypotheses are required: continuity AND a closed interval. Open intervals or discontinuities can destroy the guarantee.',
            },
            {
              question: 'Find the absolute extrema of $f(x) = x^3 - 12x$ on $[0, 3]$.',
              options: ['Max $0$ at $x=0$; min $-16$ at $x=2$', 'Max $-9$ at $x=3$; min $0$ at $x=0$', 'Max $16$ at $x=2$; min $0$ at $x=0$', 'Max $0$ at $x=0$; min $-9$ at $x=3$'],
              correctAnswer: 0,
              explanation: '$f\'(x) = 3x^2 - 12 = 3(x-2)(x+2)$, so the only critical number in $[0,3]$ is $x=2$. Candidates: $f(0)=0,\\ f(2)=-16,\\ f(3)=-9$. Max $=0$ at $x=0$ (endpoint); min $=-16$ at $x=2$.',
            },
            {
              question: 'For $f(x) = x^{2/3}$ on $[-1, 8]$, the absolute minimum occurs at $x=0$ because:',
              options: ['$x=0$ is a critical number where $f\'$ is undefined (a cusp), and $f(0)=0$ is the smallest value', '$f\'(0) = 0$ there', '$x=0$ is an endpoint of the interval', 'The EVT places minima at the origin'],
              correctAnswer: 0,
              explanation: '$f\'(x) = \\frac{2}{3\\sqrt[3]{x}}$ is undefined at $x=0$, making it a critical number (a cusp). Comparing $f(-1)=1,\\ f(0)=0,\\ f(8)=4$, the minimum value $0$ is at the cusp $x=0$.',
            },
          ],
        },
      },
    ],
  },
]
