import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Critical Points and Extrema (AP Calculus AB).
 * Registry key / DB Topic.slug: 'critical-points-and-extrema'.
 * 7 parts, gold-standard structure: what a critical point is → increasing/decreasing
 * & the sign of f' → the First Derivative Test → concavity & the Second Derivative
 * Test → which test to use / endpoints / theory → applied extrema → mixed practice
 * + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every derivative, critical number, and classification was verified by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'critical-points-and-extrema',
    sections: [
      {
        id: 'cpe1-intro',
        type: 'text' as const,
        content: `# 🏔️ Critical Points and Extrema

**Part 1 of 7 — What Is a Critical Point?**

---

### Topics in This Part

| Section |
|---------|
| Local (relative) maxima and minima |
| Critical numbers and critical points |
| The two ways a critical number happens |
| Fermat's Theorem — why we only look here |

> 🔑 **Key Concept:** A function can only turn around — switch from rising to falling or vice versa — at a **critical number**: a place where $f'(x) = 0$ or $f'(x)$ does not exist. Every local maximum or minimum in the *interior* of a domain lives at a critical number. Find the critical numbers and you have found every candidate for a local extremum.`,
      },
      {
        id: 'cpe1-vocab',
        type: 'text' as const,
        content: `## Local (Relative) Extrema

A point is a peak or valley **compared with its immediate neighbors**.

- **Local maximum** at $x = c$:  $f(c) \\ge f(x)$ for all $x$ *near* $c$. A "hilltop."
- **Local minimum** at $x = c$:  $f(c) \\le f(x)$ for all $x$ *near* $c$. A "valley bottom."

The word *local* (or *relative*) matters: a local max only has to beat its neighbors, not the entire function. A graph can have many local maxima and minima.

> 💡 **Value vs. location.** "There is a local max **of** $7$" describes a $y$-**value**. "There is a local max **at** $x = 2$" describes the input. AP graders dock points for answering the wrong one — read the question carefully.`,
      },
      {
        id: 'cpe1-defn',
        type: 'text' as const,
        content: `## Critical Numbers and Critical Points

A number $c$ in the domain of $f$ is a **critical number** if:

$$f'(c) = 0 \\qquad \\textbf{or} \\qquad f'(c) \\text{ does not exist.}$$

The point $\\big(c,\\, f(c)\\big)$ on the graph is then called a **critical point**.

There are exactly **two** ways to be a critical number:

| Type | What's happening | Example |
|------|------------------|---------|
| $f'(c) = 0$ | tangent line is **horizontal** | $f(x)=x^2$ at $x=0$ |
| $f'(c)$ undefined | a **corner, cusp, or vertical tangent** | $f(x)=\\lvert x\\rvert$ at $x=0$ |

> ⚠️ **The number must be in the domain.** For $f(x)=\\dfrac{1}{x}$, the derivative $f'(x)=-\\dfrac{1}{x^2}$ is undefined at $x=0$ — but $x=0$ is **not** in the domain of $f$, so it is **not** a critical number. No point exists there to be a max or min.`,
      },
      {
        id: 'cpe1-find-cn',
        type: 'text' as const,
        content: `## Worked Example: Finding Critical Numbers

Find the critical numbers of $f(x) = x^3 - 3x$.

**Step 1 — Differentiate.**
$$f'(x) = 3x^2 - 3$$

**Step 2 — Set $f'(x) = 0$.**
$$3x^2 - 3 = 0 \\;\\Rightarrow\\; x^2 = 1 \\;\\Rightarrow\\; x = \\pm 1$$

**Step 3 — Check where $f'$ is undefined.** A polynomial's derivative is defined everywhere, so there are none of these.

The critical numbers are $x = -1$ and $x = 1$.

> ✅ **Sanity check:** $f'(1) = 3(1) - 3 = 0$ ✓ and $f'(-1) = 3(1) - 3 = 0$ ✓.`,
      },
      {
        id: 'cpe1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement correctly defines a critical number $c$?',
              options: [
                '$f\'(c) = 0$ or $f\'(c)$ does not exist, and $c$ is in the domain of $f$',
                '$f(c) = 0$',
                '$f\'(c) > 0$',
                '$f\'\'(c) = 0$',
              ],
              correctAnswer: 0,
              explanation: 'A critical number is a domain value where the derivative is zero or fails to exist. It is about $f\'$, not $f$ itself, and not (by definition) about the second derivative.',
            },
            {
              question: 'For $f(x) = \\frac{1}{x}$, is $x = 0$ a critical number?',
              options: [
                'No — $x = 0$ is not in the domain of $f$',
                'Yes — because $f\'(0)$ does not exist',
                'Yes — because $f(0) = 0$',
                'Yes — there is a vertical tangent there',
              ],
              correctAnswer: 0,
              explanation: 'Critical numbers must lie in the domain of $f$. Since $f(0)$ is undefined, $x=0$ cannot be a critical number even though $f\'$ blows up there.',
            },
          ],
        },
      },
      {
        id: 'cpe1-drill',
        type: 'input-boxes' as const,
        content: `**Find the Critical Numbers** 🧮

Find all critical numbers (the $x$-values). Enter them from least to greatest.

**1)** $f(x) = x^2 - 6x + 5$.  Critical number $= \\,?$
**2)** $g(x) = x^3 - 12x$.  Smaller critical number $=\\,?$ , larger $=\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-2', '2'],
          hint1: '$f\'(x) = 2x - 6 = 0 \\Rightarrow x = 3$.',
          hint2: '$g\'(x) = 3x^2 - 12 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.',
          hint3: 'List $g$\'s critical numbers least-to-greatest: $-2$ then $2$.',
          explanation: '1) $f\'(x)=2x-6=0$ gives $x=3$. 2) $g\'(x)=3x^2-12=0$ gives $x=\\pm 2$, i.e. $-2$ and $2$.',
        },
      },
      {
        id: 'cpe1-fermat',
        type: 'text' as const,
        content: `## Fermat's Theorem — Why We Only Search Critical Numbers

**Fermat's Theorem:** If $f$ has a local maximum or minimum at an interior point $c$, **and** $f'(c)$ exists, then $f'(c) = 0$.

Combined with the "or undefined" case, this gives the rule the whole topic rests on:

> 🔑 **Every interior local extremum occurs at a critical number.** So critical numbers are the *only* interior candidates you ever need to check.

But beware the converse — it is **false**:

> ⚠️ A critical number is **not guaranteed** to be an extremum. For $f(x)=x^3$, $f'(0)=0$, yet the graph just flattens and keeps rising — no max, no min. Critical numbers are *candidates*; Parts 3 and 4 give the tests that decide.`,
      },
      {
        id: 'cpe1-dropdown',
        type: 'dropdown-select' as const,
        content: `**Critical Number or Not?** 🔽

Decide whether each $x$-value is a critical number of the given function.`,
        exercise: {
          dropdowns: [
            { label: 'For $f(x)=x^2$, is $x=0$ a critical number? ($f\'(x)=2x$)', options: ['Yes — $f\'(0)=0$', 'No — $f(0)=0$', 'No — $f\'$ is undefined there'] },
            { label: 'For $f(x)=\\lvert x\\rvert$, is $x=0$ a critical number?', options: ['Yes — $f\'(0)$ does not exist (a corner)', 'No — $f$ is continuous there', 'No — $f\'(0)=0$'] },
            { label: 'For $f(x)=\\frac{1}{x}$, is $x=0$ a critical number?', options: ['No — $x=0$ is not in the domain', 'Yes — $f\'$ is undefined there', 'Yes — there is a vertical asymptote'] },
          ],
          correctAnswers: ['Yes — $f\'(0)=0$', 'Yes — $f\'(0)$ does not exist (a corner)', 'No — $x=0$ is not in the domain'],
          hint1: 'A critical number needs $f\'(c)=0$ OR $f\'(c)$ undefined, AND $c$ in the domain.',
          hint2: '$\\lvert x\\rvert$ has a sharp corner at $0$, so $f\'(0)$ does not exist — but $0$ is in the domain.',
          hint3: 'For $1/x$, the point $x=0$ is excluded from the domain, so no critical number can exist there.',
          explanation: '$x=0$ is critical for $x^2$ (horizontal tangent) and for $\\lvert x\\rvert$ (corner). It is NOT critical for $1/x$ because $0$ is not in the domain.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'critical-points-and-extrema',
    sections: [
      {
        id: 'cpe2-intro',
        type: 'text' as const,
        content: `# 🏔️ Critical Points and Extrema

**Part 2 of 7 — Increasing, Decreasing, and the Sign of $f'$**

---

> 🔑 **The Engine:** The **sign** of the first derivative tells you the direction the graph is heading.
> - $f'(x) > 0$ on an interval $\\Rightarrow$ $f$ is **increasing** there.
> - $f'(x) < 0$ on an interval $\\Rightarrow$ $f$ is **decreasing** there.
>
> A local extremum is exactly where that direction *changes* — which can only happen at a critical number.`,
      },
      {
        id: 'cpe2-sign-chart',
        type: 'text' as const,
        content: `## Building a Sign Chart for $f'$

The critical numbers split the number line into intervals. Inside each interval, $f'$ keeps a constant sign, so you only need **one test point** per interval.

**Recipe:**
1. Find the critical numbers and mark them on a number line.
2. Pick a convenient test point in each interval.
3. Evaluate the **sign** of $f'$ at each test point ($+$ or $-$).
4. Read off where $f$ increases ($+$) and decreases ($-$).

### Example: $f(x) = x^3 - 3x$,  $f'(x) = 3(x-1)(x+1)$

Critical numbers $x = -1, 1$ give three intervals.

| Interval | Test point | Sign of $f'$ | $f$ is... |
|----------|-----------|--------------|-----------|
| $(-\\infty, -1)$ | $x = -2$ | $3(-3)(-1) = +9 > 0$ | increasing |
| $(-1, 1)$ | $x = 0$ | $3(-1)(1) = -3 < 0$ | decreasing |
| $(1, \\infty)$ | $x = 2$ | $3(1)(3) = +9 > 0$ | increasing |

> 💡 **Read the story:** $f$ rises, then falls, then rises. It turns from rising to falling at $x=-1$ (a peak) and from falling to rising at $x=1$ (a valley).`,
      },
      {
        id: 'cpe2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Sign Chart** 🔽

For $g(x) = x^2 - 4x$, we have $g'(x) = 2x - 4$, with critical number $x = 2$.`,
        exercise: {
          dropdowns: [
            { label: 'On $(-\\infty, 2)$, choosing $x = 0$: sign of $g\'$ is', options: ['negative', 'positive', 'zero', 'undefined'] },
            { label: 'So on $(-\\infty, 2)$, $g$ is', options: ['decreasing', 'increasing', 'constant', 'concave up'] },
            { label: 'On $(2, \\infty)$, choosing $x = 4$: sign of $g\'$ is', options: ['positive', 'negative', 'zero', 'undefined'] },
            { label: 'At $x = 2$, $g$ has a local', options: ['minimum', 'maximum', 'neither', 'inflection point'] },
          ],
          correctAnswers: ['negative', 'decreasing', 'positive', 'minimum'],
          hint1: '$g\'(0) = 2(0) - 4 = -4 < 0$, and $g\'(4) = 2(4) - 4 = 4 > 0$.',
          hint2: 'Negative $g\'$ means decreasing; positive $g\'$ means increasing.',
          hint3: '$g$ falls then rises, so $x=2$ is the bottom of the valley — a local minimum.',
          explanation: '$g\' < 0$ before $x=2$ (decreasing) and $g\' > 0$ after (increasing). A decrease-then-increase is a local minimum at $x=2$.',
        },
      },
      {
        id: 'cpe2-undefined-deriv',
        type: 'text' as const,
        content: `## Don't Forget the "Undefined" Critical Numbers

When $f'$ is undefined at a point that **is** in the domain, that point still splits the number line — include it on your chart.

### Example: $f(x) = x^{2/3}$

$$f'(x) = \\frac{2}{3}x^{-1/3} = \\frac{2}{3\\sqrt[3]{x}}$$

$f'(x)$ is never $0$, but it is **undefined at $x = 0$**, and $x=0$ **is** in the domain. So $x=0$ is a critical number.

| Interval | Test point | Sign of $f'$ | $f$ is... |
|----------|-----------|--------------|-----------|
| $(-\\infty, 0)$ | $x = -8$ | $\\frac{2}{3(-2)} < 0$ | decreasing |
| $(0, \\infty)$ | $x = 8$ | $\\frac{2}{3(2)} > 0$ | increasing |

Decrease-then-increase $\\Rightarrow$ a **local minimum at $x = 0$** (the sharp cusp of the graph). This is an extremum the "$f'=0$" rule alone would have missed.`,
      },
      {
        id: 'cpe2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $f\'(x) < 0$ for all $x$ in an interval, then on that interval $f$ is:',
              options: ['decreasing', 'increasing', 'constant', 'concave down'],
              correctAnswer: 0,
              explanation: 'A negative derivative means the function values are falling: $f$ is decreasing. Concavity is governed by $f\'\'$, not $f\'$.',
            },
            {
              question: 'Why do we only need one test point per interval on a sign chart?',
              options: [
                '$f\'$ cannot change sign without passing through a critical number, so its sign is constant between consecutive critical numbers',
                'Because $f\'$ is always positive',
                'Because the function is linear',
                'Because endpoints are never critical numbers',
              ],
              correctAnswer: 0,
              explanation: 'Between consecutive critical numbers, $f\'$ has no zeros and no breaks, so it cannot switch sign. One sample determines the sign of the whole interval.',
            },
          ],
        },
      },
      {
        id: 'cpe2-drill',
        type: 'input-boxes' as const,
        content: `**Sign of the Derivative** 🧮

Let $f(x) = x^3 - 12x$, so $f'(x) = 3x^2 - 12$. Plug in each test point and enter the **numerical value** of $f'$ there.

**1)** $f'(-3) = \\,?$
**2)** $f'(0) = \\,?$
**3)** $f'(3) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '-12', '15'],
          hint1: '$f\'(-3) = 3(-3)^2 - 12 = 3(9) - 12$.',
          hint2: '$f\'(0) = 3(0) - 12 = -12$.',
          hint3: '$f\'(3) = 3(9) - 12 = 27 - 12 = 15$. The signs are $+,\\,-,\\,+$.',
          explanation: '$f\'(-3) = 27-12 = 15 > 0$; $f\'(0) = -12 < 0$; $f\'(3) = 15 > 0$. So $f$ increases, decreases, then increases — a max near $x=-2$ and a min near $x=2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'critical-points-and-extrema',
    sections: [
      {
        id: 'cpe3-intro',
        type: 'text' as const,
        content: `# 🏔️ Critical Points and Extrema

**Part 3 of 7 — The First Derivative Test**

---

> 🔑 **The First Derivative Test (FDT):** At a critical number $c$, look at how the **sign of $f'$ changes** as $x$ passes through $c$:
> - $+ \\to -$ (increasing to decreasing): **local maximum** at $c$.
> - $- \\to +$ (decreasing to increasing): **local minimum** at $c$.
> - **no sign change** ($+\\to+$ or $-\\to-$): **neither** — not an extremum.`,
      },
      {
        id: 'cpe3-table',
        type: 'text' as const,
        content: `## The Test in One Table

| Sign of $f'$ around $c$ | Behavior of $f$ | Conclusion at $c$ |
|-------------------------|-----------------|-------------------|
| $+ \\;\\to\\; -$ | rises then falls | local **maximum** |
| $- \\;\\to\\; +$ | falls then rises | local **minimum** |
| $+ \\;\\to\\; +$ | keeps rising | neither |
| $- \\;\\to\\; -$ | keeps falling | neither |

Think of walking along the graph left to right: a peak is "up then down," a valley is "down then up." If the direction never changes, you just passed a flat spot or a vertical-tangent point — not an extremum.

> 💡 **The FDT works even when $f'(c)$ is undefined** — it only cares about the *sign on each side*. That makes it the right tool for corners and cusps, where the Second Derivative Test (Part 4) can't help.`,
      },
      {
        id: 'cpe3-worked',
        type: 'text' as const,
        content: `## Worked Example: Classify Every Critical Number

Classify the critical numbers of $f(x) = x^3 - 3x$ using the FDT.

From Part 2, $f'(x) = 3(x-1)(x+1)$ with the sign pattern:

$$\\underbrace{+}_{x<-1}\\;\\; \\boxed{-1} \\;\\;\\underbrace{-}_{-1<x<1}\\;\\; \\boxed{1} \\;\\;\\underbrace{+}_{x>1}$$

**At $x = -1$:**  sign goes $+ \\to -$  $\\Rightarrow$ **local maximum.**
$$f(-1) = (-1)^3 - 3(-1) = -1 + 3 = 2$$

**At $x = 1$:**  sign goes $- \\to +$  $\\Rightarrow$ **local minimum.**
$$f(1) = (1)^3 - 3(1) = 1 - 3 = -2$$

> ✅ **Answer:** local max value $2$ at $x=-1$; local min value $-2$ at $x=1$.`,
      },
      {
        id: 'cpe3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Apply the First Derivative Test** 🔽

A continuous function $h$ has $h'(x) = (x+2)(x-3)$. Its critical numbers are $x = -2$ and $x = 3$.`,
        exercise: {
          dropdowns: [
            { label: 'Sign of $h\'$ on $(-\\infty, -2)$ (try $x=-3$):', options: ['positive', 'negative', 'zero'] },
            { label: 'Sign of $h\'$ on $(-2, 3)$ (try $x=0$):', options: ['negative', 'positive', 'zero'] },
            { label: 'At $x = -2$, $h$ has a local', options: ['maximum', 'minimum', 'neither'] },
            { label: 'At $x = 3$, $h$ has a local', options: ['minimum', 'maximum', 'neither'] },
          ],
          correctAnswers: ['positive', 'negative', 'maximum', 'minimum'],
          hint1: '$h\'(-3) = (-1)(-6) = +6 > 0$; $h\'(0) = (2)(-3) = -6 < 0$; $h\'(4) = (6)(1) = +24 > 0$.',
          hint2: 'The pattern is $+\\,,\\,-\\,,\\,+$ across $x=-2$ and $x=3$.',
          hint3: '$+\\to-$ at $x=-2$ is a max; $-\\to+$ at $x=3$ is a min.',
          explanation: 'Signs are $+,-,+$. At $x=-2$ ($+\\to-$) is a local max; at $x=3$ ($-\\to+$) is a local min.',
        },
      },
      {
        id: 'cpe3-no-extremum',
        type: 'text' as const,
        content: `## When a Critical Number Is NOT an Extremum

### Example: $f(x) = x^3$

$f'(x) = 3x^2$, so $x = 0$ is a critical number. But:

| Interval | Test point | Sign of $f'$ |
|----------|-----------|--------------|
| $(-\\infty, 0)$ | $x = -1$ | $3(1) = +3 > 0$ |
| $(0, \\infty)$ | $x = 1$ | $3(1) = +3 > 0$ |

The sign goes $+ \\to +$ — **no change** — so $x = 0$ is **neither** a max nor a min. The graph has a horizontal tangent but keeps climbing right through it.

> ⚠️ This is the classic trap: $f'(c) = 0$ does **not** guarantee an extremum. Always check the *sign change*, not just that $f'$ hits zero.`,
      },
      {
        id: 'cpe3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'At a critical number $c$, $f\'$ changes from negative to positive. What is at $c$?',
              options: ['a local minimum', 'a local maximum', 'an inflection point', 'neither'],
              correctAnswer: 0,
              explanation: 'Negative-to-positive means $f$ falls then rises — the bottom of a valley, i.e. a local minimum.',
            },
            {
              question: 'A critical number where $f\'$ does NOT change sign indicates:',
              options: [
                'neither a max nor a min',
                'always a local maximum',
                'always a local minimum',
                'a discontinuity',
              ],
              correctAnswer: 0,
              explanation: 'No sign change means the direction of the graph is unchanged, so there is no local extremum there (e.g. $x=0$ for $f(x)=x^3$).',
            },
          ],
        },
      },
      {
        id: 'cpe3-drill',
        type: 'input-boxes' as const,
        content: `**Classify and Evaluate** 🧮

For $f(x) = x^3 - 3x$, you found a local max at $x=-1$ and a local min at $x=1$. For the function $p(x) = x^2 - 8x + 10$:

**1)** Its only critical number is $x = \\,?$
**2)** The local **minimum value** $p(\\text{that } x) = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '-6'],
          hint1: '$p\'(x) = 2x - 8 = 0 \\Rightarrow x = 4$.',
          hint2: '$f\'$ goes $-\\to+$ at $x=4$, so it is a minimum.',
          hint3: '$p(4) = 16 - 32 + 10 = -6$.',
          explanation: '$p\'(x)=2x-8=0$ gives $x=4$. Since $p$ opens upward, $x=4$ is a local min, and $p(4)=16-32+10=-6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'critical-points-and-extrema',
    sections: [
      {
        id: 'cpe4-intro',
        type: 'text' as const,
        content: `# 🏔️ Critical Points and Extrema

**Part 4 of 7 — Concavity & the Second Derivative Test**

---

> 🔑 **The Idea:** The **second derivative** measures concavity — whether the graph is shaped like a cup ($\\smile$) or a cap ($\\frown$). At a critical number where $f'(c)=0$, the concavity tells you instantly whether it's a valley or a peak.`,
      },
      {
        id: 'cpe4-concavity',
        type: 'text' as const,
        content: `## Concavity in One Line

- $f''(x) > 0$  $\\Rightarrow$  **concave up** ($\\smile$): slopes increasing, graph cups upward.
- $f''(x) < 0$  $\\Rightarrow$  **concave down** ($\\frown$): slopes decreasing, graph caps downward.

A point where concavity **changes** is an **inflection point** (only valid if it's in the domain and $f$ is continuous there).

| $f''(c)$ at a critical number | Shape at $c$ | Conclusion |
|-------------------------------|--------------|------------|
| $f''(c) > 0$ | a cup $\\smile$ | local **minimum** |
| $f''(c) < 0$ | a cap $\\frown$ | local **maximum** |
| $f''(c) = 0$ | flat — unknown | **test is inconclusive** |

> 💡 Memory hook: a positive second derivative is a **smile** (min); a negative one is a **frown** (max).`,
      },
      {
        id: 'cpe4-sdt',
        type: 'text' as const,
        content: `## The Second Derivative Test (SDT)

To classify a critical number $c$ where $f'(c) = 0$:

1. Compute $f''(c)$.
2. If $f''(c) > 0$ $\\Rightarrow$ **local minimum** at $c$.
3. If $f''(c) < 0$ $\\Rightarrow$ **local maximum** at $c$.
4. If $f''(c) = 0$ (or undefined) $\\Rightarrow$ **inconclusive** — fall back to the First Derivative Test.

### Worked Example: $f(x) = x^3 - 3x$

$$f'(x) = 3x^2 - 3, \\qquad f''(x) = 6x$$

Critical numbers $x = \\pm 1$.

- $f''(-1) = 6(-1) = -6 < 0$ $\\Rightarrow$ **local maximum** at $x = -1$.
- $f''(1) = 6(1) = 6 > 0$ $\\Rightarrow$ **local minimum** at $x = 1$.

> ✅ This matches the First Derivative Test result from Part 3 — and it was faster.`,
      },
      {
        id: 'cpe4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Use the Second Derivative Test** 🔽

For $f(x) = x^4 - 2x^2$, we have $f'(x) = 4x^3 - 4x = 4x(x-1)(x+1)$ and $f''(x) = 12x^2 - 4$. Critical numbers: $x = -1, 0, 1$.`,
        exercise: {
          dropdowns: [
            { label: '$f\'\'(0) = 12(0)-4 = -4$, so $x=0$ is a local', options: ['maximum', 'minimum', 'inflection'] },
            { label: '$f\'\'(1) = 12(1)-4 = 8$, so $x=1$ is a local', options: ['minimum', 'maximum', 'neither'] },
            { label: '$f\'\'(-1) = 12(1)-4 = 8$, so $x=-1$ is a local', options: ['minimum', 'maximum', 'neither'] },
            { label: 'A positive second derivative means the graph is concave', options: ['up', 'down', 'flat'] },
          ],
          correctAnswers: ['maximum', 'minimum', 'minimum', 'up'],
          hint1: '$f\'\'(0) = -4 < 0$ (frown $\\Rightarrow$ max); $f\'\'(\\pm 1) = 8 > 0$ (smile $\\Rightarrow$ min).',
          hint2: 'Note $(-1)^2 = 1$, so $f\'\'(-1) = 12(1)-4 = 8$, the same as $f\'\'(1)$.',
          hint3: 'Positive $f\'\'$ is concave up (a cup), which is a local minimum.',
          explanation: '$f\'\'(0)=-4<0$ gives a local max; $f\'\'(\\pm1)=8>0$ gives local mins. This "W" shape is the classic double-well curve.',
        },
      },
      {
        id: 'cpe4-inconclusive',
        type: 'text' as const,
        content: `## When the Second Derivative Test Fails

If $f''(c) = 0$, the test says **nothing** — the point could be a max, a min, or neither.

### Example: $f(x) = x^4$ at $x = 0$

$f'(x) = 4x^3$, so $x=0$ is critical. But $f''(x) = 12x^2$, and $f''(0) = 0$ — **inconclusive**.

Fall back to the FDT: $f'(x) = 4x^3$ is negative for $x<0$ and positive for $x>0$, so $- \\to +$ $\\Rightarrow$ **local minimum** at $x=0$. (Indeed $x^4$ has its lowest point there.)

> ⚠️ $f''(c) = 0$ does **not** mean "no extremum." It means "this test can't tell." Switch to the First Derivative Test, which always works.`,
      },
      {
        id: 'cpe4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'At a critical number $c$ with $f\'(c)=0$, you find $f\'\'(c) = -5$. The point is a:',
              options: ['local maximum', 'local minimum', 'inflection point', 'cannot tell'],
              correctAnswer: 0,
              explanation: '$f\'\'(c) < 0$ means concave down (a frown), so the critical point is a local maximum.',
            },
            {
              question: 'If $f\'(c) = 0$ and $f\'\'(c) = 0$, the Second Derivative Test is:',
              options: [
                'inconclusive — use the First Derivative Test',
                'proof of a local minimum',
                'proof of a local maximum',
                'proof there is no extremum',
              ],
              correctAnswer: 0,
              explanation: 'A zero second derivative gives no information; you must check the sign change of $f\'$ instead.',
            },
          ],
        },
      },
      {
        id: 'cpe4-drill',
        type: 'input-boxes' as const,
        content: `**Second Derivative Test** 🧮

Let $f(x) = x^3 - 6x^2 + 5$, so $f'(x) = 3x^2 - 12x$ and $f''(x) = 6x - 12$.

**1)** The critical numbers are $x = 0$ and $x = \\,?$
**2)** $f''(0) = \\,?$  *(its sign decides max/min at $x=0$)*
**3)** $f''(4) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '-12', '12'],
          hint1: '$f\'(x) = 3x^2 - 12x = 3x(x-4) = 0 \\Rightarrow x = 0$ or $x = 4$.',
          hint2: '$f\'\'(0) = 6(0) - 12 = -12$.',
          hint3: '$f\'\'(4) = 6(4) - 12 = 24 - 12 = 12$.',
          explanation: 'Critical numbers $0$ and $4$. $f\'\'(0)=-12<0 \\Rightarrow$ local max at $x=0$; $f\'\'(4)=12>0 \\Rightarrow$ local min at $x=4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'critical-points-and-extrema',
    sections: [
      {
        id: 'cpe5-intro',
        type: 'text' as const,
        content: `# 🏔️ Critical Points and Extrema

**Part 5 of 7 — Endpoints, Global Extrema & Choosing a Test**

---

> 🔑 **Big picture:** On a **closed interval** $[a,b]$, a continuous function is guaranteed (by the Extreme Value Theorem) to attain a highest and a lowest value — and they occur at **critical numbers or endpoints**. This is the bridge from *local* extrema to *absolute* (global) extrema.`,
      },
      {
        id: 'cpe5-candidates',
        type: 'text' as const,
        content: `## The Candidates Test (Closed-Interval Method)

To find the **absolute** max and min of a continuous $f$ on $[a, b]$:

1. Find all **critical numbers** of $f$ inside $(a, b)$.
2. Make a list of **candidates**: those critical numbers **plus** the two endpoints $a$ and $b$.
3. Evaluate $f$ at **every** candidate.
4. The **largest** output is the absolute max; the **smallest** is the absolute min.

> 💡 No First or Second Derivative Test is needed here — you only compare $y$-**values**. The biggest wins, the smallest loses.

> ⚠️ Endpoints are candidates even though they are **not** critical numbers. A graph can reach its highest point at the very edge of the interval while still climbing toward it.`,
      },
      {
        id: 'cpe5-worked',
        type: 'text' as const,
        content: `## Worked Example: $f(x) = x^3 - 3x$ on $[0, 2]$

**Critical numbers** (Part 1): $x = \\pm 1$. Only $x = 1$ lies inside $(0,2)$.

**Candidates:** $x = 0,\\; 1,\\; 2$ (one interior critical number + two endpoints).

$$f(0) = 0 - 0 = 0$$
$$f(1) = 1 - 3 = -2$$
$$f(2) = 8 - 6 = 2$$

**Compare the outputs:**

| $x$ | $f(x)$ | role |
|-----|--------|------|
| $0$ | $0$ | endpoint |
| $1$ | $-2$ | critical (local min) |
| $2$ | $2$ | endpoint |

**Absolute maximum** $= 2$ at $x = 2$ (an endpoint!).
**Absolute minimum** $= -2$ at $x = 1$.

> ✅ Notice the absolute max is at an **endpoint**, not a critical number. Skipping the endpoints would give the wrong answer.`,
      },
      {
        id: 'cpe5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Run the Candidates Test** 🔽

Find the absolute extrema of $f(x) = x^2 - 4x + 1$ on $[0, 3]$. Here $f'(x) = 2x - 4$, so the critical number is $x = 2$.`,
        exercise: {
          dropdowns: [
            { label: 'List of candidates (critical number + endpoints):', options: ['$0,\\ 2,\\ 3$', '$0,\\ 3$', '$2$ only', '$0,\\ 2,\\ 4$'] },
            { label: '$f(0) = $', options: ['$1$', '$0$', '$-3$', '$5$'] },
            { label: '$f(2) = $', options: ['$-3$', '$1$', '$-1$', '$3$'] },
            { label: 'Absolute minimum value on $[0,3]$:', options: ['$-3$', '$1$', '$-2$', '$0$'] },
          ],
          correctAnswers: ['$0,\\ 2,\\ 3$', '$1$', '$-3$', '$-3$'],
          hint1: 'Candidates = the interior critical number $x=2$ together with endpoints $0$ and $3$.',
          hint2: '$f(0) = 0 - 0 + 1 = 1$, and $f(2) = 4 - 8 + 1 = -3$.',
          hint3: 'Also $f(3) = 9 - 12 + 1 = -2$. Compare $1, -3, -2$ — the smallest is $-3$.',
          explanation: 'Candidates $0,2,3$ give $f = 1, -3, -2$. Absolute max $= 1$ at $x=0$; absolute min $= -3$ at $x=2$.',
        },
      },
      {
        id: 'cpe5-which-test',
        type: 'text' as const,
        content: `## Which Test Should I Use?

| Situation | Best tool |
|-----------|-----------|
| Critical number where $f''$ is easy to compute and $f'(c)=0$ | **Second Derivative Test** (fastest) |
| Corner / cusp / vertical tangent ($f'$ undefined) | **First Derivative Test** (only one that works) |
| $f''(c) = 0$ (inconclusive) | **First Derivative Test** |
| Absolute max/min on a **closed interval** | **Candidates Test** (compare $y$-values) |

> 🔑 **Default plan:** Find critical numbers $\\to$ try the Second Derivative Test for a quick classification $\\to$ if it's inconclusive or $f'$ is undefined, use the First Derivative Test $\\to$ for a closed interval, list candidates and compare outputs.`,
      },
      {
        id: 'cpe5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On a closed interval $[a,b]$, where can the absolute extrema of a continuous function occur?',
              options: [
                'at critical numbers inside $(a,b)$ or at the endpoints $a$ and $b$',
                'only at critical numbers',
                'only at the endpoints',
                'only where $f\'\'(x) = 0$',
              ],
              correctAnswer: 0,
              explanation: 'The Candidates Test checks interior critical numbers and both endpoints. Endpoints can be the absolute max or min even though they are not critical numbers.',
            },
            {
              question: 'For a critical number where $f\'$ is undefined (a cusp), which test should you NOT rely on?',
              options: [
                'the Second Derivative Test',
                'the First Derivative Test',
                'the Candidates Test',
                'a sign chart of $f\'$',
              ],
              correctAnswer: 0,
              explanation: 'If $f\'$ is undefined at $c$, then $f\'\'(c)$ generally is too, so the Second Derivative Test cannot be applied. The First Derivative Test still works because it only needs the sign of $f\'$ on each side.',
            },
          ],
        },
      },
      {
        id: 'cpe5-drill',
        type: 'input-boxes' as const,
        content: `**Closed-Interval Candidates** 🧮

Find the absolute extrema of $f(x) = x^3 - 12x$ on $[0, 3]$. Here $f'(x) = 3x^2 - 12$, so the interior critical number is $x = 2$.

**1)** $f(0) = \\,?$
**2)** $f(2) = \\,?$  *(this is the absolute minimum)*
**3)** $f(3) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '-16', '-9'],
          hint1: '$f(0) = 0 - 0 = 0$.',
          hint2: '$f(2) = 2^3 - 12(2) = 8 - 24 = -16$.',
          hint3: '$f(3) = 27 - 36 = -9$. Compare $0, -16, -9$.',
          explanation: 'Candidates $0,2,3$ give $f = 0, -16, -9$. Absolute max $= 0$ at $x=0$; absolute min $= -16$ at $x=2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'critical-points-and-extrema',
    sections: [
      {
        id: 'cpe6-intro',
        type: 'text' as const,
        content: `# 🏔️ Critical Points and Extrema

**Part 6 of 7 — Applied Extrema (Optimization)**

---

> 🔑 **Why this matters:** Real problems ask for the *best* value — the maximum area, the minimum cost, the shortest distance. Each becomes: build a function, find its critical numbers, and classify them. The calculus is exactly what you just learned.`,
      },
      {
        id: 'cpe6-recipe',
        type: 'text' as const,
        content: `## The Optimization Recipe

1. **Name** the quantity to optimize and write it as a function of one variable (use a constraint to eliminate extras).
2. **State the domain** (often a closed interval from physical limits — lengths can't be negative).
3. **Differentiate** and find critical numbers.
4. **Classify** with the FDT, SDT, or Candidates Test.
5. **Answer the question asked** (value? location? both?) — with units if given.

> 💡 The hardest step is usually #1, the modeling. Once you have the function, the calculus is the routine part you've practiced.`,
      },
      {
        id: 'cpe6-worked',
        type: 'text' as const,
        content: `## Worked Example: Maximum Area

A farmer has $40$ meters of fence to enclose a **rectangular** pen against a barn (so only **three** sides need fencing). What dimensions maximize the area?

**Setup.** Let the two sides perpendicular to the barn each have length $x$, and the side parallel to the barn have length $y$. Fence used: $2x + y = 40$, so $y = 40 - 2x$.

**Area function.**
$$A(x) = x\\,y = x(40 - 2x) = 40x - 2x^2, \\qquad 0 \\le x \\le 20$$

**Critical number.**
$$A'(x) = 40 - 4x = 0 \\;\\Rightarrow\\; x = 10$$

**Classify (SDT).** $A''(x) = -4 < 0$ $\\Rightarrow$ concave down $\\Rightarrow$ **maximum** at $x = 10$.

**Answer.** $x = 10$ m, $y = 40 - 2(10) = 20$ m, giving area
$$A(10) = 10 \\cdot 20 = 200 \\text{ m}^2.$$

> ✅ **Check the endpoints:** $A(0) = 0$ and $A(20) = 0$ — both worse than $200$, confirming $x=10$ is the true maximum.`,
      },
      {
        id: 'cpe6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In an optimization problem, why do we usually find the domain (e.g. $0 \\le x \\le 20$) before optimizing?',
              options: [
                'Physical limits restrict $x$, and on a closed interval we must also check endpoints as candidates',
                'The domain has no effect on the answer',
                'To make the derivative easier to compute',
                'Because the derivative is only defined on closed intervals',
              ],
              correctAnswer: 0,
              explanation: 'A length cannot be negative or exceed the available fence, so the model lives on a closed interval — and on a closed interval the extremes could occur at an endpoint, which must be checked.',
            },
            {
              question: 'You maximize $A(x) = 40x - 2x^2$ and find $A\'(x) = 40 - 4x = 0$ at $x=10$. The quickest way to confirm it is a max is:',
              options: [
                '$A\'\'(x) = -4 < 0$, so concave down — a maximum',
                'plug in $x=10$ and see the area is positive',
                'check that $x=10$ is an integer',
                'note that $A(10) > 0$',
              ],
              correctAnswer: 0,
              explanation: 'The Second Derivative Test: $A\'\'(x) = -4 < 0$ everywhere means the parabola is concave down, so the critical point is a maximum.',
            },
          ],
        },
      },
      {
        id: 'cpe6-drill',
        type: 'input-boxes' as const,
        content: `**Optimize a Product** 🧮

Two nonnegative numbers add to $12$, so $x + y = 12$ with $0 \\le x \\le 12$. We want to **maximize their product** $P = xy$.

**1)** Writing $y = 12 - x$, the product is $P(x) = x(12 - x)$. Solve $P'(x) = 12 - 2x = 0$:  $x = \\,?$
**2)** The maximum product value $P = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '36'],
          hint1: '$P\'(x) = 12 - 2x = 0 \\Rightarrow x = 6$.',
          hint2: '$P\'\'(x) = -2 < 0$, so $x=6$ is a max. Then $y = 12 - 6 = 6$.',
          hint3: '$P(6) = 6 \\cdot 6 = 36$.',
          explanation: '$P\'(x) = 12 - 2x = 0$ gives $x=6$; since $P\'\'=-2<0$ it is a max. The product is $P(6)=6\\cdot6=36$ — equal numbers maximize the product.',
        },
      },
      {
        id: 'cpe6-distance',
        type: 'text' as const,
        content: `## A Second Application: Minimum Distance

To minimize a distance, it is almost always easier to **minimize the squared distance** $D^2$ — the minimizer is the same, and you avoid messy square-root derivatives.

### Quick idea: closest point on $y = x^2$ to the origin

The squared distance from $(x, x^2)$ to $(0,0)$ is
$$S(x) = x^2 + (x^2)^2 = x^2 + x^4.$$
Then $S'(x) = 2x + 4x^3 = 2x(1 + 2x^2)$. Since $1 + 2x^2 > 0$ always, the only critical number is $x = 0$, and $S$ goes from decreasing to increasing there — a **minimum**. The closest point is the origin itself, distance $0$.

> 💡 Minimizing $D^2$ instead of $D$ is a standard trick — same critical numbers, far less algebra.`,
      },
      {
        id: 'cpe6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Box** 🔽

An open-top box is made from a $12 \\times 12$ inch sheet by cutting an $x \\times x$ square from each corner and folding up the sides. The volume is $V(x) = x(12 - 2x)^2$, valid for $0 \\le x \\le 6$. We optimize step by step.`,
        exercise: {
          dropdowns: [
            { label: 'The domain restriction $0 \\le x \\le 6$ comes from:', options: ['the cut can\'t exceed half the side length', 'the volume must be an integer', 'the derivative being undefined', 'the box must be a cube'] },
            { label: '$V\'(x) = (12-2x)(12-6x)$. Setting $12 - 6x = 0$ gives:', options: ['$x = 2$', '$x = 6$', '$x = 12$', '$x = 4$'] },
            { label: 'The candidate $x = 6$ is rejected because:', options: ['it gives $V = 0$ (the box has no base)', 'it is outside the domain', '$V\'(6)$ is undefined', 'it gives a negative volume'] },
            { label: 'So the maximizing cut is:', options: ['$x = 2$', '$x = 6$', '$x = 0$', '$x = 3$'] },
          ],
          correctAnswers: ['the cut can\'t exceed half the side length', '$x = 2$', 'it gives $V = 0$ (the box has no base)', '$x = 2$'],
          hint1: 'Two cuts of size $x$ come out of each 12-inch side, so $2x \\le 12$, i.e. $x \\le 6$.',
          hint2: '$V\'(x) = (12-2x)(12-6x) = 0$ at $x = 6$ and $x = 2$.',
          hint3: 'At $x=6$ the base width $12-2(6)=0$, so $V=0$; the real maximum is at the interior critical number $x=2$.',
          explanation: 'Domain $0 \\le x \\le 6$ is geometric. $V\'=0$ at $x=2$ and $x=6$; $x=6$ gives $V=0$, so the maximum volume is at $x=2$ (giving $V = 2\\cdot 8^2 = 128$ $in^{3}$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'critical-points-and-extrema',
    sections: [
      {
        id: 'cpe7-intro',
        type: 'text' as const,
        content: `# 🏔️ Critical Points and Extrema

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) find critical numbers, (2) read the sign of $f'$ to track increase/decrease, (3) classify with the First Derivative Test, (4) classify with the Second Derivative Test, (5) find absolute extrema on a closed interval, and (6) solve optimization problems. Let's put it together.`,
      },
      {
        id: 'cpe7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find critical numbers | solve $f'(x) = 0$ **and** find where $f'$ is undefined (in domain) |
| Determine increasing/decreasing | sign of $f'$: $+$ up, $-$ down |
| Classify (sign change of $f'$) | $+\\to-$ max, $-\\to+$ min, no change neither |
| Classify (concavity) | $f''(c) > 0$ min, $f''(c) < 0$ max, $=0$ inconclusive |
| Absolute extrema on $[a,b]$ | compare $f$ at critical numbers **and** endpoints |

> ⚠️ **Top traps:** (1) $f'(c) = 0$ alone does **not** prove an extremum — check the sign change. (2) Critical numbers must be **in the domain**. (3) On a closed interval, **never skip the endpoints**. (4) $f''(c) = 0$ means the SDT is *inconclusive*, not "no extremum."`,
      },
      {
        id: 'cpe7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many critical numbers does $f(x) = x^4 - 4x^3$ have? ($f\'(x) = 4x^3 - 12x^2 = 4x^2(x-3)$.)',
              options: ['2 (at $x=0$ and $x=3$)', '1 (at $x=3$)', '3', '0'],
              correctAnswer: 0,
              explanation: '$4x^2(x-3) = 0$ gives $x = 0$ (double root) and $x = 3$. Two distinct critical numbers. (At $x=0$ the sign of $f\'$ does not change, so it is not an extremum — but it is still a critical number.)',
            },
            {
              question: 'For $f(x) = x^3 - 6x^2 + 9x$, $f\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$. By the First Derivative Test, $x = 3$ is a:',
              options: ['local minimum', 'local maximum', 'neither', 'inflection point'],
              correctAnswer: 0,
              explanation: 'Sign of $f\'$: positive before $x=1$, negative on $(1,3)$, positive after $x=3$. At $x=3$ the change is $-\\to+$, a local minimum.',
            },
          ],
        },
      },
      {
        id: 'cpe7-drill',
        type: 'input-boxes' as const,
        content: `**Full Analysis** 🧮

Analyze $f(x) = 2x^3 - 9x^2 + 12x$ on the closed interval $[0, 3]$.

Note $f'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2)$, so the interior critical numbers are $x = 1$ and $x = 2$.

**1)** $f(1) = \\,?$  *(local maximum)*
**2)** $f(2) = \\,?$  *(local minimum)*
**3)** $f(3) = \\,?$  *(this is the absolute maximum on $[0,3]$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '4', '9'],
          hint1: '$f(1) = 2(1) - 9(1) + 12(1) = 2 - 9 + 12 = 5$.',
          hint2: '$f(2) = 2(8) - 9(4) + 12(2) = 16 - 36 + 24 = 4$.',
          hint3: '$f(3) = 2(27) - 9(9) + 12(3) = 54 - 81 + 36 = 9$. Also $f(0)=0$; comparing $0,5,4,9$ the max is $9$.',
          explanation: 'Candidates $0,1,2,3$ give $f = 0, 5, 4, 9$. Absolute min $= 0$ at $x=0$; absolute max $= 9$ at $x=3$. (Interior: local max $5$ at $x=1$, local min $4$ at $x=2$.)',
        },
      },
      {
        id: 'cpe7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which is a complete and correct definition of a critical number of $f$?',
              options: [
                'a domain value $c$ where $f\'(c) = 0$ or $f\'(c)$ does not exist',
                'any value where $f(c) = 0$',
                'any value where $f\'\'(c) = 0$',
                'any value where the graph crosses the $x$-axis',
              ],
              correctAnswer: 0,
              explanation: 'Critical numbers are domain values where the first derivative is zero or undefined — the only interior candidates for local extrema.',
            },
            {
              question: 'At a critical number $c$ with $f\'(c) = 0$, you compute $f\'\'(c) = 0$. What can you conclude?',
              options: [
                'Nothing yet — the Second Derivative Test is inconclusive; use the First Derivative Test',
                'It is definitely a local maximum',
                'It is definitely a local minimum',
                'There is definitely no extremum',
              ],
              correctAnswer: 0,
              explanation: 'A zero second derivative gives no information. You must examine the sign change of $f\'$ (the First Derivative Test) to classify the point.',
            },
            {
              question: 'On $[-1, 4]$, $f(x) = x^2 - 2x$ has critical number $x=1$. Its absolute maximum value is:',
              options: ['$8$ at $x = 4$', '$-1$ at $x = 1$', '$3$ at $x = -1$', '$0$ at $x = 0$'],
              correctAnswer: 0,
              explanation: 'Candidates: $f(-1) = 1+2 = 3$, $f(1) = 1 - 2 = -1$, $f(4) = 16 - 8 = 8$. The largest is $8$ at the endpoint $x=4$, so that is the absolute maximum.',
            },
          ],
        },
      },
    ],
  },
]
