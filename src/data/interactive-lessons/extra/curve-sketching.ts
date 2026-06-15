import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Curve Sketching (AP Calculus AB).
 * Registry key / DB Topic.slug: 'curve-sketching'.
 * 7 parts, gold-standard structure: the toolbox & first derivative → critical numbers
 * & the increasing/decreasing test → the first-derivative test for extrema → concavity
 * & the second derivative → inflection points & the second-derivative test → asymptotes
 * for rational functions → full curve-sketching synthesis + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every derivative, critical number, sign chart, and coordinate was verified before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'curve-sketching',
    sections: [
      {
        id: 'cs1-intro',
        type: 'text' as const,
        content: `# 📈 Curve Sketching

**Part 1 of 7 — The Toolbox: What Derivatives Tell Us About Shape**

---

### Topics in This Part

| Section |
|---------|
| What "curve sketching" really asks |
| The four questions a graph answers |
| $f'$, the slope detective |
| Reading shape from a derivative's sign |

> 🔑 **Key Concept:** Curve sketching is the art of drawing a function's graph **without plotting hundreds of points** — instead, you let calculus tell you *exactly* where the curve rises, falls, bends, and turns. The first derivative $f'$ controls **slope** (up/down); the second derivative $f''$ controls **bend** (concave up/down).`,
      },
      {
        id: 'cs1-four-questions',
        type: 'text' as const,
        content: `## The Four Questions Every Sketch Answers

To draw an accurate curve, calculus answers four questions about each $x$:

| Question | Tool | What you look at |
|----------|------|------------------|
| Is the curve **rising or falling**? | $f'$ | sign of $f'(x)$ |
| Where are the **peaks and valleys**? | $f'$ | where $f'(x) = 0$ or DNE |
| Does the curve **bend up or down**? | $f''$ | sign of $f''(x)$ |
| Where does it **switch its bend**? | $f''$ | where $f''(x) = 0$ or DNE |

The **first derivative** $f'(x)$ is the *slope* of the tangent line at $x$:

- $f'(x) > 0$  →  tangent slopes **up**  →  curve is **increasing** 📈
- $f'(x) < 0$  →  tangent slopes **down**  →  curve is **decreasing** 📉
- $f'(x) = 0$  →  tangent is **horizontal**  →  possible peak/valley

> 💡 Think of $f'$ as a **speedometer for height**: positive means you're climbing, negative means you're descending, zero means you've momentarily leveled off.`,
      },
      {
        id: 'cs1-slope-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'At $x = 4$, a function has $f\'(4) = -2$. What is the curve doing there?',
              options: ['Decreasing', 'Increasing', 'Momentarily level', 'Concave up'],
              correctAnswer: 0,
              explanation: 'A negative first derivative means the tangent slopes downward, so the curve is **decreasing** at $x = 4$.',
            },
            {
              question: 'Which condition makes $x = c$ a candidate for a peak or valley?',
              options: ['$f\'(c) = 0$ or $f\'(c)$ does not exist', '$f(c) = 0$', '$f\'\'(c) = 0$', '$f(c) > 0$'],
              correctAnswer: 0,
              explanation: 'Peaks and valleys (local extrema) can only occur where the slope is zero (horizontal tangent) or where $f\'$ fails to exist (a corner/cusp). These are the **critical numbers**.',
            },
          ],
        },
      },
      {
        id: 'cs1-sign-bridge',
        type: 'text' as const,
        content: `## Sign Decides Shape

The single most important habit in curve sketching: **read the sign, not the value.** When you analyze $f'$, you never care that $f'(4) = -2$ exactly — only that it is **negative**, which means *decreasing*.

That's why, in the next section, we'll line up the three sign cases side by side. Memorize this triad and the rest of the lesson is bookkeeping:

$$f' > 0 \\;\\Rightarrow\\; \\text{up} \\qquad f' < 0 \\;\\Rightarrow\\; \\text{down} \\qquad f' = 0 \\;\\Rightarrow\\; \\text{flat}$$`,
      },
      {
        id: 'cs1-shape-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Slope to Shape** 🔽

Use the sign of $f'$ to describe what the curve is doing.`,
        exercise: {
          dropdowns: [
            { label: 'If $f\'(x) > 0$ on an interval, the curve is', options: ['increasing 📈', 'decreasing 📉', 'horizontal', 'concave up'] },
            { label: 'If $f\'(x) < 0$ on an interval, the curve is', options: ['decreasing 📉', 'increasing 📈', 'horizontal', 'concave down'] },
            { label: 'If $f\'(x) = 0$ at a single point, the tangent there is', options: ['horizontal', 'vertical', 'steeply rising', 'steeply falling'] },
          ],
          correctAnswers: ['increasing 📈', 'decreasing 📉', 'horizontal'],
          hint1: 'Positive slope points the tangent upward; negative slope points it downward.',
          hint2: '$f\'$ is literally the slope of the tangent line at each $x$.',
          hint3: 'Zero slope means a flat (horizontal) tangent — a possible peak or valley.',
          explanation: '$f\' > 0$ → increasing; $f\' < 0$ → decreasing; $f\' = 0$ → horizontal tangent (a candidate peak/valley).',
        },
      },
      {
        id: 'cs1-derivative-review',
        type: 'text' as const,
        content: `## Quick Derivative Refresher

Curve sketching leans on derivatives you already know. We'll use these constantly:

$$\\frac{d}{dx}\\left[x^n\\right] = n\\,x^{n-1} \\qquad \\frac{d}{dx}\\left[c\\right] = 0$$

**Example.** For $f(x) = x^3 - 3x^2$:

$$f'(x) = 3x^2 - 6x = 3x(x - 2)$$

We factored $f'$ on purpose — its **factored form** instantly reveals where $f'(x) = 0$, namely $x = 0$ and $x = 2$. Those are the candidate locations for peaks and valleys.

> ⚠️ **Always factor $f'$** when you can. The whole sign analysis you're about to learn depends on knowing *exactly* where $f'$ equals zero.`,
      },
      {
        id: 'cs1-find-fprime',
        type: 'input-boxes' as const,
        content: `**Differentiate** 🧮

Find $f'(x)$ for each, then read off where it equals zero.

**1)** $f(x) = x^2 - 6x$.  Enter the value of $x$ where $f'(x) = 0$.
**2)** $f(x) = x^3 - 12x$.  This has two zeros of $f'$. Enter the **positive** one.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '2'],
          hint1: '$f\'(x) = 2x - 6$. Set $2x - 6 = 0$.',
          hint2: '$f\'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2)$. Zeros at $x = \\pm 2$.',
          hint3: 'For (1): $2x - 6 = 0 \\Rightarrow x = 3$. For (2): the positive zero is $x = 2$.',
          explanation: '1) $f\'(x) = 2x - 6 = 0 \\Rightarrow x = 3$.  2) $f\'(x) = 3(x-2)(x+2) = 0 \\Rightarrow x = \\pm 2$; the positive one is $2$.',
        },
      },
      {
        id: 'cs1-bridge',
        type: 'text' as const,
        content: `## Where We're Headed

You now know the **central idea**: a derivative's *sign* tells you a curve's shape. The rest of this lesson is a careful, repeatable procedure:

1. **Part 2** — find **critical numbers** and build a **sign chart** for $f'$ (increasing/decreasing).
2. **Part 3** — use the **First Derivative Test** to classify each critical point as a max, min, or neither.
3. **Parts 4–5** — bring in $f''$ for **concavity** and **inflection points**.
4. **Part 6** — handle **asymptotes** for rational functions.
5. **Part 7** — combine everything into a complete sketch.

> 🔑 Master the sign chart in Part 2 and everything else clicks into place — it's the engine of the whole method.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'curve-sketching',
    sections: [
      {
        id: 'cs2-intro',
        type: 'text' as const,
        content: `# 📈 Curve Sketching

**Part 2 of 7 — Critical Numbers & the Increasing/Decreasing Test**

---

> 🔑 **The Idea:** A continuous function can only switch between increasing and decreasing at a **critical number** — a place where $f'(x) = 0$ or $f'(x)$ doesn't exist. Between consecutive critical numbers, $f'$ keeps a constant sign, so $f$ is either entirely increasing or entirely decreasing.`,
      },
      {
        id: 'cs2-critical',
        type: 'text' as const,
        content: `## Step 1 — Find the Critical Numbers

A **critical number** of $f$ is a value $c$ in the domain of $f$ where:

$$f'(c) = 0 \\qquad\\text{or}\\qquad f'(c) \\text{ does not exist.}$$

These are the **only** places a local max or min can occur, and the **only** places the increasing/decreasing behavior can change.

**Example.** $f(x) = x^3 - 3x$.

$$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x - 1)(x + 1)$$

Setting $f'(x) = 0$ gives critical numbers $x = -1$ and $x = 1$. ($f'$ exists everywhere, so those are the only two.)

> 💡 A critical number must be **in the domain** of $f$. If $f'$ is undefined at $x = 2$ but $f(2)$ is also undefined (e.g. a vertical asymptote), then $x = 2$ is **not** a critical number — it's a domain gap, handled in Part 6.`,
      },
      {
        id: 'cs2-signchart',
        type: 'text' as const,
        content: `## Step 2 — Build a Sign Chart for $f'$

The critical numbers split the number line into **intervals**. Pick one **test point** inside each interval, plug it into $f'$, and record the sign.

**Continuing $f(x) = x^3 - 3x$**, with $f'(x) = 3(x-1)(x+1)$ and critical numbers $-1, 1$:

| Interval | Test point | $f'(\\text{test})$ | Sign | $f$ is... |
|----------|-----------|--------------------|------|-----------|
| $(-\\infty, -1)$ | $x = -2$ | $3(-3)(-1) = 9$ | $+$ | increasing 📈 |
| $(-1, 1)$ | $x = 0$ | $3(-1)(1) = -3$ | $-$ | decreasing 📉 |
| $(1, \\infty)$ | $x = 2$ | $3(1)(3) = 9$ | $+$ | increasing 📈 |

So $f$ increases, then decreases, then increases. Reading the chart:

- **Increasing** on $(-\\infty, -1)$ and $(1, \\infty)$
- **Decreasing** on $(-1, 1)$

> ⚠️ Test points are just **probes for the sign** — the actual value $9$ or $-3$ doesn't matter, only whether it's positive or negative.`,
      },
      {
        id: 'cs2-signs-dropdown',
        type: 'dropdown-select' as const,
        content: `**Fill In the Sign Chart** 🔽

For $g(x) = x^3 - 3x^2$ we have $g'(x) = 3x^2 - 6x = 3x(x - 2)$, with critical numbers $x = 0$ and $x = 2$. Choose the sign of $g'$ on each interval.`,
        exercise: {
          dropdowns: [
            { label: 'On $(-\\infty, 0)$, test $x = -1$: $g\'(-1) = 3(-1)(-3) = 9$, so $g\'$ is', options: ['positive (increasing)', 'negative (decreasing)', 'zero', 'undefined'] },
            { label: 'On $(0, 2)$, test $x = 1$: $g\'(1) = 3(1)(-1) = -3$, so $g\'$ is', options: ['negative (decreasing)', 'positive (increasing)', 'zero', 'undefined'] },
            { label: 'On $(2, \\infty)$, test $x = 3$: $g\'(3) = 3(3)(1) = 9$, so $g\'$ is', options: ['positive (increasing)', 'negative (decreasing)', 'zero', 'undefined'] },
          ],
          correctAnswers: ['positive (increasing)', 'negative (decreasing)', 'positive (increasing)'],
          hint1: 'Plug the test point into the **factored** $g\'(x) = 3x(x-2)$ and track the sign of each factor.',
          hint2: 'At $x = -1$: $3(-1)(-3)$ — two negatives multiply to a positive.',
          hint3: 'Pattern: positive, then negative, then positive — $g$ climbs, dips, then climbs again.',
          explanation: '$g\'(x) = 3x(x-2)$ is $+$ on $(-\\infty,0)$, $-$ on $(0,2)$, and $+$ on $(2,\\infty)$. So $g$ increases, decreases, then increases.',
        },
      },
      {
        id: 'cs2-intervals-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $h(x) = x^2 - 8x + 1$, on which interval is $h$ increasing?',
              options: ['$(4, \\infty)$', '$(-\\infty, 4)$', '$(-\\infty, 8)$', '$(0, \\infty)$'],
              correctAnswer: 0,
              explanation: '$h\'(x) = 2x - 8 = 0$ at $x = 4$. For $x > 4$, $h\'(x) > 0$, so $h$ increases on $(4, \\infty)$.',
            },
            {
              question: 'A critical number can occur where $f\'(c) = 0$ OR where:',
              options: ['$f\'(c)$ does not exist (but $c$ is in the domain of $f$)', '$f(c) = 0$', '$f\'\'(c) = 0$', '$f$ is increasing'],
              correctAnswer: 0,
              explanation: 'Critical numbers include points where $f\'$ is undefined — such as corners and cusps — as long as $c$ is in the domain of $f$.',
            },
          ],
        },
      },
      {
        id: 'cs2-find-crit',
        type: 'input-boxes' as const,
        content: `**Find the Critical Numbers** 🧮

**1)** $f(x) = x^2 - 10x + 4$.  Enter the critical number.
**2)** $f(x) = x^3 - 27x$.  Enter the **negative** critical number.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '-3'],
          hint1: 'For (1): $f\'(x) = 2x - 10$. Set it equal to $0$.',
          hint2: 'For (2): $f\'(x) = 3x^2 - 27 = 3(x^2 - 9) = 3(x-3)(x+3)$.',
          hint3: '(1) $2x - 10 = 0 \\Rightarrow x = 5$. (2) zeros at $x = \\pm 3$; the negative one is $-3$.',
          explanation: '1) $f\'(x) = 2x - 10 = 0 \\Rightarrow x = 5$.  2) $f\'(x) = 3(x-3)(x+3) = 0 \\Rightarrow x = \\pm 3$; negative is $-3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'curve-sketching',
    sections: [
      {
        id: 'cs3-intro',
        type: 'text' as const,
        content: `# 📈 Curve Sketching

**Part 3 of 7 — The First Derivative Test**

---

> 🔑 **The Idea:** Finding a critical number tells you *where* the slope is zero — but is it a peak, a valley, or neither? The **First Derivative Test** answers this by watching how $f'$ **changes sign** as you pass through the critical number.`,
      },
      {
        id: 'cs3-fdt',
        type: 'text' as const,
        content: `## The First Derivative Test

Let $c$ be a critical number of a continuous function $f$. Look at the sign of $f'$ **just left** and **just right** of $c$:

| Sign of $f'$ left → right | Behavior | Conclusion at $x = c$ |
|---------------------------|----------|------------------------|
| $+ \\to -$ | rises then falls | **local maximum** ⛰️ |
| $- \\to +$ | falls then rises | **local minimum** 🥣 |
| $+ \\to +$ or $- \\to -$ | no sign change | **neither** (not an extremum) |

Think of it physically: if you're walking **up** a hill and then suddenly **down**, you just crossed a **peak**. If you're going **down** then **up**, you just passed through a **valley**.

> 💡 The First Derivative Test works for **any** critical number — including corners and cusps where $f''$ doesn't even exist. That makes it more general than the Second Derivative Test (Part 5).`,
      },
      {
        id: 'cs3-worked',
        type: 'text' as const,
        content: `## Worked Example: $f(x) = x^3 - 3x^2$

**Step 1 — Derivative & critical numbers.**
$$f'(x) = 3x^2 - 6x = 3x(x - 2) \\quad\\Rightarrow\\quad x = 0,\\; 2$$

**Step 2 — Sign chart** (from Part 2's drill):

| Interval | Sign of $f'$ |
|----------|--------------|
| $(-\\infty, 0)$ | $+$ |
| $(0, 2)$ | $-$ |
| $(2, \\infty)$ | $+$ |

**Step 3 — Apply the test.**
- At $x = 0$: $f'$ goes $+ \\to -$ → **local maximum**.
- At $x = 2$: $f'$ goes $- \\to +$ → **local minimum**.

**Step 4 — Get the $y$-values** (plug into the *original* $f$):
$$f(0) = 0^3 - 3(0)^2 = 0 \\qquad f(2) = 2^3 - 3(2)^2 = 8 - 12 = -4$$

So the **local max is $(0, 0)$** and the **local min is $(2, -4)$**.

> ⚠️ To classify an extremum you use $f'$, but to get its **height** you must plug back into the **original** $f$, not $f'$.`,
      },
      {
        id: 'cs3-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify Each Critical Point** 🔽

Use the sign change of $f'$ to classify each critical number.`,
        exercise: {
          dropdowns: [
            { label: 'At $x = c$, $f\'$ changes from $+$ to $-$:', options: ['local maximum', 'local minimum', 'neither', 'inflection point'] },
            { label: 'At $x = c$, $f\'$ changes from $-$ to $+$:', options: ['local minimum', 'local maximum', 'neither', 'inflection point'] },
            { label: 'At $x = c$, $f\'$ is $+$ on both sides (no sign change):', options: ['neither', 'local maximum', 'local minimum', 'inflection point'] },
          ],
          correctAnswers: ['local maximum', 'local minimum', 'neither'],
          hint1: 'Up-then-down is a peak; down-then-up is a valley.',
          hint2: 'No sign change means the curve never turned around — it kept going the same direction.',
          hint3: '$+\\to-$ is a max, $-\\to+$ is a min, and same-sign means neither.',
          explanation: 'A sign change $+\\to-$ gives a local max, $-\\to+$ gives a local min, and no sign change means the critical point is neither.',
        },
      },
      {
        id: 'cs3-extrema-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = x^3 - 3x$ (critical numbers $-1$ and $1$, with $f\'$ going $+,-,+$), classify $x = -1$.',
              options: ['Local maximum', 'Local minimum', 'Neither', 'Inflection point'],
              correctAnswer: 0,
              explanation: 'At $x = -1$, $f\'$ changes from $+$ (on $(-\\infty,-1)$) to $-$ (on $(-1,1)$), so it is a **local maximum**. Its value is $f(-1) = (-1)^3 - 3(-1) = -1 + 3 = 2$.',
            },
            {
              question: 'For $f(x) = x^3$, $f\'(x) = 3x^2 \\ge 0$ everywhere, with the only critical number at $x = 0$. What is $x = 0$?',
              options: ['Neither a max nor a min', 'Local maximum', 'Local minimum', 'Absolute maximum'],
              correctAnswer: 0,
              explanation: '$f\'(x) = 3x^2$ is positive on both sides of $0$ (no sign change), so $x = 0$ is **neither** — the curve keeps increasing through it.',
            },
          ],
        },
      },
      {
        id: 'cs3-values',
        type: 'input-boxes' as const,
        content: `**Find the Extremum's Height** 🧮

For $f(x) = x^3 - 3x$, the critical numbers are $x = -1$ (a max) and $x = 1$ (a min).

**1)** Compute the local **maximum value** $f(-1)$.
**2)** Compute the local **minimum value** $f(1)$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '-2'],
          hint1: 'Plug into the ORIGINAL function $f(x) = x^3 - 3x$, not the derivative.',
          hint2: '$f(-1) = (-1)^3 - 3(-1) = -1 + 3$.',
          hint3: '$f(1) = (1)^3 - 3(1) = 1 - 3 = -2$.',
          explanation: '$f(-1) = -1 + 3 = 2$ (local max), and $f(1) = 1 - 3 = -2$ (local min).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'curve-sketching',
    sections: [
      {
        id: 'cs4-intro',
        type: 'text' as const,
        content: `# 📈 Curve Sketching

**Part 4 of 7 — Concavity & the Second Derivative**

---

> 🔑 **The Idea:** Two curves can both be increasing yet look completely different — one bowing **upward** like a cup, the other arching **downward** like a dome. The **second derivative** $f''$ captures this *bend*, called **concavity**.`,
      },
      {
        id: 'cs4-concavity',
        type: 'text' as const,
        content: `## Concave Up vs. Concave Down

**Concavity** describes which way a curve bends:

| Concavity | Shape | $f''$ | Slopes ($f'$) are... | Tangent lines lie... |
|-----------|-------|-------|----------------------|----------------------|
| **Concave up** | cup ⌣ | $f''(x) > 0$ | increasing | **below** the curve |
| **Concave down** | cap ⌢ | $f''(x) < 0$ | decreasing | **above** the curve |

The logic: $f''$ is the derivative of $f'$. So $f'' > 0$ means the **slope itself is increasing** — the curve is steepening upward, bending into a cup. $f'' < 0$ means the slope is decreasing — bending into a cap.

**Example.** $f(x) = x^3 - 3x^2$. From Part 3, $f'(x) = 3x^2 - 6x$. Differentiate again:
$$f''(x) = 6x - 6 = 6(x - 1)$$

- For $x < 1$: $f''(x) < 0$ → **concave down** ⌢
- For $x > 1$: $f''(x) > 0$ → **concave up** ⌣

> 💡 **Concavity ≠ increasing/decreasing.** A curve can be *decreasing* while *concave up* (falling but leveling off), or *increasing* while *concave down* (rising but flattening). $f'$ and $f''$ answer two independent questions.`,
      },
      {
        id: 'cs4-secondderiv-input',
        type: 'input-boxes' as const,
        content: `**Compute Second Derivatives** 🧮

**1)** $f(x) = x^3 - 6x^2$. Then $f'(x) = 3x^2 - 12x$. Find $f''(x)$ and evaluate it at $x = 0$.
**2)** $f(x) = x^4$. Then $f'(x) = 4x^3$. Find $f''(x)$ and evaluate it at $x = 1$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-12', '12'],
          hint1: 'Differentiate $f\'$ once more. For (1): $\\frac{d}{dx}[3x^2 - 12x] = 6x - 12$.',
          hint2: 'For (2): $\\frac{d}{dx}[4x^3] = 12x^2$.',
          hint3: '(1) $f\'\'(0) = 6(0) - 12 = -12$. (2) $f\'\'(1) = 12(1)^2 = 12$.',
          explanation: '1) $f\'\'(x) = 6x - 12$, so $f\'\'(0) = -12$ (concave down there).  2) $f\'\'(x) = 12x^2$, so $f\'\'(1) = 12$ (concave up there).',
        },
      },
      {
        id: 'cs4-concavity-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Concavity** 🔽

For $f(x) = x^3 - 3x^2$ we found $f''(x) = 6(x - 1)$. Choose the concavity on each side of $x = 1$.`,
        exercise: {
          dropdowns: [
            { label: 'On $(-\\infty, 1)$, test $x = 0$: $f\'\'(0) = 6(-1) = -6$, so $f$ is', options: ['concave down', 'concave up', 'increasing', 'decreasing'] },
            { label: 'On $(1, \\infty)$, test $x = 2$: $f\'\'(2) = 6(1) = 6$, so $f$ is', options: ['concave up', 'concave down', 'increasing', 'decreasing'] },
            { label: 'The sign of $f\'\'$ flips at $x = 1$, so the concavity', options: ['changes there', 'stays the same', 'is always positive', 'is undefined'] },
          ],
          correctAnswers: ['concave down', 'concave up', 'changes there'],
          hint1: 'A negative $f\'\'$ means concave down (a cap); a positive $f\'\'$ means concave up (a cup).',
          hint2: 'At $x = 0$, $f\'\'(0) = 6(0-1) = -6 < 0$.',
          hint3: 'Because the sign of $f\'\'$ changes at $x = 1$, the concavity flips — that point will be an inflection point (Part 5).',
          explanation: '$f\'\'(x) = 6(x-1)$ is negative left of $1$ (concave down) and positive right of $1$ (concave up); the concavity changes at $x = 1$.',
        },
      },
      {
        id: 'cs4-concavity-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $f\'(x) < 0$ and $f\'\'(x) > 0$ at $x = 3$, the curve is:',
              options: ['Decreasing and concave up', 'Increasing and concave up', 'Decreasing and concave down', 'Increasing and concave down'],
              correctAnswer: 0,
              explanation: '$f\' < 0$ means decreasing; $f\'\' > 0$ means concave up. The curve is falling but leveling off — like the left half of a cup.',
            },
            {
              question: 'Which statement about concavity is correct?',
              options: ['Concave up means the slopes ($f\'$) are increasing', 'Concave up means the function is increasing', 'Concave up means $f\'\'(x) < 0$', 'Concave up means the curve is decreasing'],
              correctAnswer: 0,
              explanation: 'Concave up means $f\'\'(x) > 0$, i.e. $f\'$ (the slope) is **increasing**. It says nothing on its own about whether $f$ is increasing or decreasing.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'curve-sketching',
    sections: [
      {
        id: 'cs5-intro',
        type: 'text' as const,
        content: `# 📈 Curve Sketching

**Part 5 of 7 — Inflection Points & the Second Derivative Test**

---

> 🔑 **The Idea:** An **inflection point** is where a curve switches its concavity — from cup to cap or cap to cup. And the second derivative gives a *fast* shortcut for classifying extrema: the **Second Derivative Test**.`,
      },
      {
        id: 'cs5-inflection',
        type: 'text' as const,
        content: `## Inflection Points

An **inflection point** is a point on the graph where concavity **changes** (concave up ↔ concave down).

**Finding them:**
1. Compute $f''(x)$ and find where $f''(x) = 0$ or is undefined — these are **candidate** $x$-values.
2. Check that $f''$ actually **changes sign** there. A sign change confirms an inflection point.
3. Plug the $x$-value into the **original** $f$ to get the $y$-coordinate of the point.

**Example.** $f(x) = x^3 - 3x^2$ has $f''(x) = 6x - 6 = 6(x-1)$. Candidate: $x = 1$. Since $f''$ changes from $-$ to $+$ at $x = 1$ (Part 4), it **is** an inflection point. Its $y$-value:
$$f(1) = 1^3 - 3(1)^2 = 1 - 3 = -2 \\quad\\Rightarrow\\quad \\text{inflection point } (1, -2)$$

> ⚠️ **$f''(c) = 0$ alone is NOT enough.** Example: $f(x) = x^4$ has $f''(x) = 12x^2$, which is $0$ at $x = 0$ — yet $f''$ stays $\\ge 0$ on both sides (no sign change), so $(0,0)$ is **not** an inflection point. The curve is concave up throughout. You **must** verify a concavity change.`,
      },
      {
        id: 'cs5-inflection-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What guarantees that a candidate $x = c$ (where $f\'\'(c) = 0$) is actually an inflection point?',
              options: ['$f\'\'$ changes sign at $c$', '$f\'(c) = 0$', '$f(c) = 0$', '$f\'\'(c) = 0$ by itself'],
              correctAnswer: 0,
              explanation: 'An inflection point requires the **concavity to change**, i.e. $f\'\'$ must switch sign at $c$. $f\'\'(c) = 0$ alone is not sufficient (recall $f(x) = x^4$).',
            },
            {
              question: 'For $f(x) = x^4 - 4x^3$, $f\'\'(x) = 12x^2 - 24x = 12x(x - 2)$. How many inflection points does $f$ have?',
              options: ['Two (at $x = 0$ and $x = 2$)', 'One (at $x = 0$ only)', 'One (at $x = 2$ only)', 'None'],
              correctAnswer: 0,
              explanation: '$f\'\'(x) = 12x(x-2)$ changes sign at both $x = 0$ ($+\\to-$) and $x = 2$ ($-\\to+$), so there are **two** inflection points.',
            },
          ],
        },
      },
      {
        id: 'cs5-sdt',
        type: 'text' as const,
        content: `## The Second Derivative Test

A shortcut for classifying a critical number $c$ where $f'(c) = 0$:

| At a critical number $c$ | Concavity | Conclusion |
|--------------------------|-----------|------------|
| $f''(c) > 0$ | concave up ⌣ (cup) | **local minimum** 🥣 |
| $f''(c) < 0$ | concave down ⌢ (cap) | **local maximum** ⛰️ |
| $f''(c) = 0$ | inconclusive | use the **First Derivative Test** instead |

The intuition: at the bottom of a cup, the curve is concave up → a minimum. At the top of a cap, it's concave down → a maximum.

**Example.** $f(x) = x^3 - 3x$, with $f'(x) = 3x^2 - 3$ (critical numbers $\\pm 1$) and $f''(x) = 6x$:
- $f''(-1) = -6 < 0$ → **local max** at $x = -1$. ✓
- $f''(1) = 6 > 0$ → **local min** at $x = 1$. ✓

This matches what the First Derivative Test gave us in Part 3 — but with a single substitution instead of a full sign chart.

> 💡 Use the Second Derivative Test when $f''$ is **easy** to compute. If it gives $0$ (inconclusive) or $f''$ is messy, **fall back to the First Derivative Test**, which never fails.`,
      },
      {
        id: 'cs5-sdt-dropdown',
        type: 'dropdown-select' as const,
        content: `**Apply the Second Derivative Test** 🔽

For $f(x) = x^3 - 6x^2 + 5$, we have $f'(x) = 3x^2 - 12x = 3x(x-4)$ (critical numbers $0, 4$) and $f''(x) = 6x - 12$.`,
        exercise: {
          dropdowns: [
            { label: 'At $x = 0$: $f\'\'(0) = 6(0) - 12 = -12$, so $x = 0$ is a', options: ['local maximum', 'local minimum', 'inflection point', 'neither'] },
            { label: 'At $x = 4$: $f\'\'(4) = 6(4) - 12 = 12$, so $x = 4$ is a', options: ['local minimum', 'local maximum', 'inflection point', 'neither'] },
            { label: 'The inflection point occurs where $f\'\'(x) = 6x - 12 = 0$, i.e. at', options: ['$x = 2$', '$x = 0$', '$x = 4$', '$x = 6$'] },
          ],
          correctAnswers: ['local maximum', 'local minimum', '$x = 2$'],
          hint1: 'Negative $f\'\'$ at a critical number → concave down → local max. Positive → concave up → local min.',
          hint2: '$f\'\'(0) = -12 < 0$ and $f\'\'(4) = 12 > 0$.',
          hint3: 'Set $6x - 12 = 0 \\Rightarrow x = 2$ for the inflection point.',
          explanation: '$f\'\'(0) = -12 < 0$ → local max; $f\'\'(4) = 12 > 0$ → local min; $f\'\'(x) = 0$ at $x = 2$, where concavity flips (inflection point).',
        },
      },
      {
        id: 'cs5-inflection-input',
        type: 'input-boxes' as const,
        content: `**Locate the Inflection Point** 🧮

For $f(x) = x^3 - 9x^2 + 7$, $f'(x) = 3x^2 - 18x$ and $f''(x) = 6x - 18$.

**1)** Find the $x$-coordinate of the inflection point (set $f''(x) = 0$).
**2)** For $g(x) = x^4 - 12x^2$, $g''(x) = 12x^2 - 24$. Find the **positive** $x$-value where $g''(x) = 0$. *(decimal ok, round to 2 places)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '1.41'],
          hint1: 'For (1): $6x - 18 = 0 \\Rightarrow x = 3$. Check that $f\'\'$ changes sign (it does — linear).',
          hint2: 'For (2): $12x^2 - 24 = 0 \\Rightarrow x^2 = 2 \\Rightarrow x = \\pm\\sqrt{2}$.',
          hint3: '$\\sqrt{2} \\approx 1.41$. Both $\\pm\\sqrt{2}$ are inflection points since $g\'\'$ changes sign at each.',
          explanation: '1) $6x - 18 = 0 \\Rightarrow x = 3$.  2) $12x^2 = 24 \\Rightarrow x^2 = 2 \\Rightarrow x = \\sqrt{2} \\approx 1.41$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'curve-sketching',
    sections: [
      {
        id: 'cs6-intro',
        type: 'text' as const,
        content: `# 📈 Curve Sketching

**Part 6 of 7 — Asymptotes & End Behavior**

---

> 🔑 **The Idea:** Polynomials are smooth everywhere, but **rational functions** $\\dfrac{p(x)}{q(x)}$ can blow up to infinity or flatten toward a horizontal line. **Asymptotes** are the invisible guide-rails your sketch must respect.`,
      },
      {
        id: 'cs6-vertical',
        type: 'text' as const,
        content: `## Vertical Asymptotes

A **vertical asymptote** is a vertical line $x = a$ the curve shoots toward (the graph rockets to $\\pm\\infty$). For a rational function in **lowest terms**, vertical asymptotes occur where the **denominator equals zero** but the numerator does not.

**Example.** $f(x) = \\dfrac{2x}{x - 1}$. The denominator is zero at $x = 1$, and the numerator $2(1) = 2 \\ne 0$, so there is a vertical asymptote at:
$$x = 1$$

> ⚠️ If a factor cancels — e.g. $\\dfrac{(x-3)(x+1)}{x-3} = x + 1$ for $x \\ne 3$ — that $x = 3$ is a **hole**, not a vertical asymptote. Always reduce to lowest terms first.`,
      },
      {
        id: 'cs6-horizontal',
        type: 'text' as const,
        content: `## Horizontal Asymptotes (End Behavior)

A **horizontal asymptote** $y = L$ describes what $f(x)$ approaches as $x \\to \\pm\\infty$. For a rational function, compare the **degrees** of numerator ($n$) and denominator ($d$):

| Case | Horizontal asymptote |
|------|----------------------|
| $n < d$ (bottom-heavy) | $y = 0$ |
| $n = d$ (same degree) | $y = \\dfrac{\\text{leading coeff. of top}}{\\text{leading coeff. of bottom}}$ |
| $n > d$ (top-heavy) | **none** (instead a slant/polynomial asymptote) |

**Examples.**
- $\\dfrac{2x}{x-1}$: degrees equal ($1 = 1$), ratio of leading coefficients $= \\dfrac{2}{1}$, so $y = 2$.
- $\\dfrac{x}{x^2 + 1}$: bottom-heavy ($1 < 2$), so $y = 0$.
- $\\dfrac{x^2}{x - 1}$: top-heavy ($2 > 1$), so **no** horizontal asymptote.

> 💡 "Same degree → divide the leading coefficients" is the workhorse case. For $\\dfrac{3x^2 + \\cdots}{5x^2 + \\cdots}$, the horizontal asymptote is $y = \\dfrac{3}{5}$, regardless of the lower-order terms.`,
      },
      {
        id: 'cs6-asymptote-dropdown',
        type: 'dropdown-select' as const,
        content: `**Identify the Asymptotes** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Vertical asymptote of $f(x) = \\dfrac{5}{x - 3}$:', options: ['$x = 3$', '$x = -3$', '$x = 5$', '$y = 0$'] },
            { label: 'Horizontal asymptote of $f(x) = \\dfrac{4x}{2x + 7}$ (same degree):', options: ['$y = 2$', '$y = 0$', '$y = 4$', 'none'] },
            { label: 'Horizontal asymptote of $f(x) = \\dfrac{6}{x^2 + 1}$ (bottom-heavy):', options: ['$y = 0$', '$y = 6$', '$y = 1$', 'none'] },
          ],
          correctAnswers: ['$x = 3$', '$y = 2$', '$y = 0$'],
          hint1: 'Vertical asymptote: set the denominator equal to zero.',
          hint2: 'Same degree → divide the leading coefficients: $\\frac{4}{2} = 2$.',
          hint3: 'Numerator degree $0$ < denominator degree $2$ → horizontal asymptote $y = 0$.',
          explanation: '$\\frac{5}{x-3}$: denominator zero at $x=3$. $\\frac{4x}{2x+7}$: equal degrees, $y = \\frac{4}{2} = 2$. $\\frac{6}{x^2+1}$: bottom-heavy, $y = 0$.',
        },
      },
      {
        id: 'cs6-asymptote-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which function has NO horizontal asymptote?',
              options: ['$\\dfrac{x^2 + 1}{x - 4}$', '$\\dfrac{3x}{x + 2}$', '$\\dfrac{7}{x^2}$', '$\\dfrac{x - 1}{2x + 5}$'],
              correctAnswer: 0,
              explanation: '$\\frac{x^2+1}{x-4}$ is top-heavy (degree $2$ over degree $1$), so it has no horizontal asymptote (it has a slant asymptote instead). The others are bottom-heavy or equal-degree.',
            },
            {
              question: 'For $f(x) = \\dfrac{(x-2)(x+5)}{x-2}$, the line $x = 2$ is:',
              options: ['A hole, not a vertical asymptote', 'A vertical asymptote', 'A horizontal asymptote', 'An inflection point'],
              correctAnswer: 0,
              explanation: 'The $(x-2)$ factor cancels, leaving $f(x) = x + 5$ for $x \\ne 2$. So $x = 2$ is a **hole** (removable discontinuity), not a vertical asymptote.',
            },
          ],
        },
      },
      {
        id: 'cs6-asymptote-input',
        type: 'input-boxes' as const,
        content: `**Find the Asymptotes** 🧮

For $f(x) = \\dfrac{3x + 1}{x - 4}$:

**1)** Enter the $x$-value of the vertical asymptote.
**2)** Enter the $y$-value of the horizontal asymptote. *(degrees are equal)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '3'],
          hint1: 'Vertical asymptote: set the denominator $x - 4 = 0$.',
          hint2: 'Equal degrees → ratio of leading coefficients: $\\frac{3}{1}$.',
          hint3: '(1) $x - 4 = 0 \\Rightarrow x = 4$. (2) $y = \\frac{3}{1} = 3$.',
          explanation: '1) Denominator zero at $x = 4$ (numerator $\\ne 0$ there) → vertical asymptote $x = 4$.  2) Equal degrees, $y = \\frac{3}{1} = 3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'curve-sketching',
    sections: [
      {
        id: 'cs7-intro',
        type: 'text' as const,
        content: `# 📈 Curve Sketching

**Part 7 of 7 — Putting It All Together + Exit Quiz**

---

You can now find where a curve rises and falls, locate its peaks, valleys, and inflection points, read its concavity, and pin down its asymptotes. Time to run the **full procedure** end-to-end.`,
      },
      {
        id: 'cs7-procedure',
        type: 'text' as const,
        content: `## The Complete Curve-Sketching Procedure

| Step | What you find | Tool |
|------|---------------|------|
| 1. **Domain & intercepts** | gaps, $x$- and $y$-intercepts | algebra |
| 2. **Asymptotes** | vertical / horizontal guide-rails | degree comparison |
| 3. **$f'$ sign chart** | increasing/decreasing intervals | critical numbers |
| 4. **Extrema** | local maxima & minima | First or Second Derivative Test |
| 5. **$f''$ sign chart** | concave up/down intervals | where $f'' = 0$ |
| 6. **Inflection points** | concavity changes | sign change of $f''$ |
| 7. **Sketch** | connect everything smoothly | all of the above |

> 🔑 **Consistency check:** your sketch must agree with *both* derivatives. A point that's a local max ($f' : +\\to-$) must also be concave down there ($f'' < 0$). If your two charts contradict each other, recheck your algebra.`,
      },
      {
        id: 'cs7-full-worked',
        type: 'text' as const,
        content: `## Full Worked Example: $f(x) = x^3 - 3x^2$

**Domain & intercepts.** Domain: all reals. $f(0) = 0$, and $f(x) = x^2(x - 3) = 0$ at $x = 0, 3$.

**$f'$ analysis.** $f'(x) = 3x(x-2)$, critical numbers $0, 2$:
$$f' : \\;+\\;|\\;-\\;|\\;+ \\quad\\text{across } 0 \\text{ and } 2$$
So $f$ increases on $(-\\infty,0)$, decreases on $(0,2)$, increases on $(2,\\infty)$.
- **Local max** $(0, 0)$  •  **Local min** $(2, -4)$

**$f''$ analysis.** $f''(x) = 6x - 6 = 6(x-1)$:
- Concave down on $(-\\infty, 1)$, concave up on $(1, \\infty)$
- **Inflection point** $(1, -2)$

**Assembling the sketch:** rise to the peak $(0,0)$, fall through the inflection $(1,-2)$ where the bend flips from cap to cup, bottom out at the valley $(2,-4)$, then rise again.

> 💡 Notice the cross-check: at the local max $(0,0)$, $f''(0) = -6 < 0$ (concave down ✓); at the local min $(2,-4)$, $f''(2) = 6 > 0$ (concave up ✓). Everything agrees.`,
      },
      {
        id: 'cs7-synthesis-dropdown',
        type: 'dropdown-select' as const,
        content: `**Run the Procedure** 🔽

Analyze $f(x) = x^3 - 12x$. You'll need $f'(x) = 3x^2 - 12 = 3(x-2)(x+2)$ and $f''(x) = 6x$.`,
        exercise: {
          dropdowns: [
            { label: 'The critical numbers (where $f\'(x) = 0$) are', options: ['$x = -2$ and $x = 2$', '$x = 0$ only', '$x = -4$ and $x = 4$', '$x = 12$'] },
            { label: 'By the Second Derivative Test ($f\'\'(-2) = -12$), $x = -2$ is a', options: ['local maximum', 'local minimum', 'inflection point', 'neither'] },
            { label: 'The inflection point is at $x =$', options: ['$0$', '$-2$', '$2$', '$12$'] },
          ],
          correctAnswers: ['$x = -2$ and $x = 2$', 'local maximum', '$0$'],
          hint1: 'Set $3(x-2)(x+2) = 0$ for the critical numbers.',
          hint2: '$f\'\'(-2) = 6(-2) = -12 < 0$ → concave down → local max.',
          hint3: 'Inflection: $f\'\'(x) = 6x = 0 \\Rightarrow x = 0$, where $f\'\'$ changes sign.',
          explanation: 'Critical numbers $\\pm 2$. $f\'\'(-2) = -12 < 0$ → local max at $x=-2$ (value $f(-2) = -8 + 24 = 16$); $f\'\'(2) = 12 > 0$ → local min. Inflection at $x = 0$, where $f\'\'$ flips sign.',
        },
      },
      {
        id: 'cs7-synthesis-input',
        type: 'input-boxes' as const,
        content: `**Compute the Key Points** 🧮

Still working with $f(x) = x^3 - 12x$.

**1)** Find the local **maximum value** $f(-2)$.
**2)** Find the local **minimum value** $f(2)$.
**3)** Find the $y$-coordinate of the inflection point, $f(0)$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '-16', '0'],
          hint1: 'Plug into $f(x) = x^3 - 12x$. $f(-2) = (-2)^3 - 12(-2) = -8 + 24$.',
          hint2: '$f(2) = (2)^3 - 12(2) = 8 - 24 = -16$.',
          hint3: '$f(0) = 0^3 - 12(0) = 0$, so the inflection point is $(0, 0)$.',
          explanation: '$f(-2) = -8 + 24 = 16$ (max), $f(2) = 8 - 24 = -16$ (min), $f(0) = 0$ (inflection point $(0,0)$).',
        },
      },
      {
        id: 'cs7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A function has $f\'(x) > 0$ and $f\'\'(x) < 0$ on an interval. What does its graph look like there?',
              options: ['Rising, but bending downward (flattening out)', 'Falling and bending downward', 'Rising and bending upward (steepening)', 'A straight line going up'],
              correctAnswer: 0,
              explanation: '$f\' > 0$ → increasing; $f\'\' < 0$ → concave down. The curve rises while its slope decreases, so it climbs but flattens — like the left side of a dome.',
            },
            {
              question: 'For $f(x) = x^4 - 4x^3$, $f\'\'(x) = 12x(x-2)$. Where are the inflection points?',
              options: ['$x = 0$ and $x = 2$', '$x = 0$ only', '$x = 2$ only', '$x = 1$'],
              correctAnswer: 0,
              explanation: '$f\'\'(x) = 12x(x-2)$ changes sign at both $x = 0$ and $x = 2$ (it is $+,-,+$ across them), giving **two** inflection points.',
            },
          ],
        },
      },
      {
        id: 'cs7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = x^3 - 3x^2$, the First Derivative Test classifies $x = 2$ as a local minimum because $f\'$:',
              options: ['changes from $-$ to $+$ there', 'changes from $+$ to $-$ there', 'stays positive there', 'equals $f(2)$'],
              correctAnswer: 0,
              explanation: '$f\'(x) = 3x(x-2)$ is negative on $(0,2)$ and positive on $(2,\\infty)$, so it changes $-\\to+$ at $x = 2$ → a **local minimum**.',
            },
            {
              question: 'The Second Derivative Test is inconclusive at a critical number $c$ when:',
              options: ['$f\'\'(c) = 0$', '$f\'\'(c) > 0$', '$f\'\'(c) < 0$', '$f\'(c) \\ne 0$'],
              correctAnswer: 0,
              explanation: 'When $f\'\'(c) = 0$, the test gives no information about concavity, so you must fall back on the First Derivative Test.',
            },
            {
              question: 'What is the horizontal asymptote of $f(x) = \\dfrac{5x^2 - 1}{2x^2 + 3}$?',
              options: ['$y = \\dfrac{5}{2}$', '$y = 0$', '$y = \\dfrac{2}{5}$', 'none'],
              correctAnswer: 0,
              explanation: 'Numerator and denominator have the same degree ($2$), so the horizontal asymptote is the ratio of leading coefficients, $y = \\frac{5}{2}$.',
            },
          ],
        },
      },
    ],
  },
]
