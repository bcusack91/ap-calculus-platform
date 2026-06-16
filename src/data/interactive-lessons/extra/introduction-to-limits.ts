import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Limits (AP Calculus AB).
 * Registry key / DB Topic.slug: 'introduction-to-limits'.
 * 7 parts, gold-standard structure: the limit idea (numerical/graphical) →
 * one-sided limits & existence → estimating from tables & graphs →
 * algebraic evaluation (direct substitution + factoring/rationalizing) →
 * infinite limits & vertical asymptotes → limits at infinity & end behavior →
 * mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every numerical estimate, limit value, and answer index was verified by hand
 * and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'introduction-to-limits',
    sections: [
      {
        id: 'lim1-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Limits

**Part 1 of 7 — What a Limit Really Means**

---

### Topics in This Part

| Section |
|---------|
| The Big Idea: Approaching, Not Arriving |
| Limit Notation |
| Numerical Approach (Tables) |
| When the Value at a Point Doesn't Matter |

> 🔑 **Key Concept:** A **limit** describes the value a function *heads toward* as the input gets arbitrarily close to some number — whether or not the function is actually defined there. Limits are the foundation of every idea in calculus: derivatives, integrals, and continuity all rest on them.`,
      },
      {
        id: 'lim1-bigidea',
        type: 'text' as const,
        content: `## The Big Idea: Approaching, Not Arriving

Imagine walking toward a doorway. With each step you halve your remaining distance. You get closer and closer — $1$ m, $0.5$ m, $0.25$ m, $0.125$ m — but the question "what value are you approaching?" has a clean answer: **$0$ m**, the doorway itself.

A limit asks exactly this about a function: as $x$ gets closer and closer to some number $a$, what single value does the output $f(x)$ approach?

We write this as:

$$\\lim_{x \\to a} f(x) = L$$

Read aloud: *"the limit of $f(x)$, as $x$ approaches $a$, equals $L$."*

> 💡 **Crucial distinction:** $x \\to a$ means $x$ gets *close to* $a$ — it does **not** mean $x = a$. The whole power of limits is that they let us study behavior *near* a point even where the function misbehaves or isn't defined.`,
      },
      {
        id: 'lim1-notation-check',
        type: 'dropdown-select' as const,
        content: `**Read the Notation** 🔽

Match each piece of $\\displaystyle\\lim_{x \\to 3} f(x) = 5$ to its meaning.`,
        exercise: {
          dropdowns: [
            { label: 'The number $3$ is:', options: ['the value $x$ approaches', 'the limit value', 'the output of $f$', 'always equal to $f(3)$'] },
            { label: 'The number $5$ is:', options: ['the value $f(x)$ approaches', 'the value $x$ approaches', 'undefined', 'the slope'] },
            { label: 'The statement guarantees that $f(3) = 5$:', options: ['No — the limit ignores the point itself', 'Yes — always', 'Only if $f$ is a line', 'Only if $x = 3$'] },
          ],
          correctAnswers: ['the value $x$ approaches', 'the value $f(x)$ approaches', 'No — the limit ignores the point itself'],
          hint1: 'In $\\lim_{x \\to a} f(x) = L$, the $a$ under the arrow is the input target.',
          hint2: 'The $L$ on the right is what the *outputs* approach.',
          hint3: 'A limit describes behavior *near* $x=3$, not the value *at* $x=3$. They can differ.',
          explanation: 'The $3$ is the input $x$ approaches; the $5$ is the value the outputs $f(x)$ approach. The limit says nothing about $f(3)$ itself — the function might be undefined at $3$ or have a different value there.',
        },
      },
      {
        id: 'lim1-numerical',
        type: 'text' as const,
        content: `## The Numerical Approach

When we can't see the answer instantly, we **build a table** of inputs creeping toward $a$ from both sides and watch the outputs.

### Example: $\\displaystyle\\lim_{x \\to 2} (3x - 1)$

| $x$ | $1.9$ | $1.99$ | $1.999$ | $\\to 2 \\leftarrow$ | $2.001$ | $2.01$ | $2.1$ |
|-----|-------|--------|---------|----------|---------|--------|-------|
| $3x-1$ | $4.7$ | $4.97$ | $4.997$ | $\\to ? \\leftarrow$ | $5.003$ | $5.03$ | $5.3$ |

From the **left** (smaller $x$) the outputs climb toward $5$. From the **right** (larger $x$) they fall toward $5$. Both sides agree:

$$\\lim_{x \\to 2} (3x - 1) = 5$$

> 💡 Notice we never needed $x = 2$ exactly. We only needed values *near* $2$. (Here $f(2) = 5$ too, but that's a bonus, not a requirement.)`,
      },
      {
        id: 'lim1-table-drill',
        type: 'input-boxes' as const,
        content: `**Build the Estimate** 🧮

Use the function $f(x) = x^2 + 1$ to estimate $\\displaystyle\\lim_{x \\to 3} f(x)$.

**1)** Compute $f(2.99)$.  *(decimal)*
**2)** Compute $f(3.01)$.  *(decimal)*
**3)** Based on both sides, the limit is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9.9401', '10.0601', '10'],
          hint1: '$f(2.99) = 2.99^2 + 1 = 8.9401 + 1$.',
          hint2: '$f(3.01) = 3.01^2 + 1 = 9.0601 + 1$.',
          hint3: 'Both one-sided values squeeze toward the same number; $f(3) = 3^2 + 1 = 10$.',
          explanation: '$f(2.99) = 9.9401$ and $f(3.01) = 10.0601$. They close in on $10$ from both sides, so $\\lim_{x\\to 3}(x^2+1) = 10$.',
        },
      },
      {
        id: 'lim1-value-vs-limit',
        type: 'text' as const,
        content: `## When the Value at a Point Doesn't Matter

Consider a function with a single "hole" at $x = 1$:

$$g(x) = \\frac{x^2 - 1}{x - 1}$$

At $x = 1$ this is $\\frac{0}{0}$ — **undefined**. But for every $x \\ne 1$ we can cancel:

$$g(x) = \\frac{(x-1)(x+1)}{x-1} = x + 1$$

So *near* $x = 1$, the graph behaves exactly like the line $x + 1$, which heads toward $2$:

$$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = 2$$

even though $g(1)$ does not exist.

> 🔑 **The headline of Part 1:** A limit is about the *journey* toward a point, not the *destination* at the point. The function can be undefined there, or defined to some unrelated value, and the limit can still be a clean number.`,
      },
      {
        id: 'lim1-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does $\\displaystyle\\lim_{x \\to a} f(x) = L$ describe?',
              options: [
                'The value $f(x)$ approaches as $x$ gets close to $a$',
                'The exact value of $f(a)$',
                'The slope of $f$ at $x = a$',
                'The largest value $f$ ever reaches',
              ],
              correctAnswer: 0,
              explanation: 'A limit is the value the outputs head toward as the inputs close in on $a$ — it is not necessarily $f(a)$.',
            },
            {
              question: 'A table shows $f(x) \\to 7$ from the left of $x=4$ and $f(x) \\to 7$ from the right. What is $\\lim_{x\\to 4} f(x)$?',
              options: ['$7$', '$4$', 'Cannot be determined', '$0$'],
              correctAnswer: 0,
              explanation: 'When both one-sided approaches agree on the same value, that shared value is the limit: $7$.',
            },
            {
              question: 'If $h(x) = \\dfrac{x^2-9}{x-3}$, what is $h(3)$, and what is $\\lim_{x\\to 3} h(x)$?',
              options: [
                '$h(3)$ is undefined; the limit is $6$',
                '$h(3) = 6$; the limit is $6$',
                '$h(3) = 0$; the limit is $0$',
                'Both are undefined',
              ],
              correctAnswer: 0,
              explanation: 'At $x=3$ the formula gives $\\frac{0}{0}$, undefined. But $\\frac{(x-3)(x+3)}{x-3} = x+3 \\to 6$. The limit exists ($6$) even though $h(3)$ does not.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'introduction-to-limits',
    sections: [
      {
        id: 'lim2-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Limits

**Part 2 of 7 — One-Sided Limits & When a Limit Fails to Exist**

---

> 🔑 **The Idea:** A two-sided limit exists only when the left side and the right side agree. Studying each side separately — a **one-sided limit** — tells us exactly when (and why) a limit fails.`,
      },
      {
        id: 'lim2-onesided',
        type: 'text' as const,
        content: `## One-Sided Limits

Sometimes a function approaches different values depending on which direction you come from. We split the approach in two:

| Notation | Read as | Direction |
|----------|---------|-----------|
| $\\displaystyle\\lim_{x \\to a^-} f(x)$ | "$x$ approaches $a$ from the **left**" | $x < a$, increasing toward $a$ |
| $\\displaystyle\\lim_{x \\to a^+} f(x)$ | "$x$ approaches $a$ from the **right**" | $x > a$, decreasing toward $a$ |

The little superscript is the key: the **minus** sign means coming up from *below* $a$ (the negative side of the number line), and the **plus** sign means coming down from *above* $a$.

> 💡 **Memory hook:** $a^-$ uses values a little *less* than $a$; $a^+$ uses values a little *greater* than $a$.`,
      },
      {
        id: 'lim2-existence',
        type: 'text' as const,
        content: `## The Existence Rule

$$\\lim_{x \\to a} f(x) = L \\quad\\Longleftrightarrow\\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$

In words: **the two-sided limit exists exactly when both one-sided limits exist and are equal.** If the two sides disagree, the (two-sided) limit **does not exist** — written **DNE**.

### Example: A Jump

Suppose a piecewise function has $\\displaystyle\\lim_{x \\to 0^-} f(x) = -1$ but $\\displaystyle\\lim_{x \\to 0^+} f(x) = 3$.

The left and right values differ, so:

$$\\lim_{x \\to 0} f(x) = \\text{DNE}$$

> ⚠️ "DNE" is a complete, correct answer. A limit failing to exist is a genuine result, not a mistake.`,
      },
      {
        id: 'lim2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Left, Right, or DNE?** 🔽

A graph gives these one-sided values. Decide each two-sided limit.`,
        exercise: {
          dropdowns: [
            { label: 'Left $= 4$, Right $= 4$:', options: ['Limit $= 4$', 'Limit DNE', 'Limit $= 8$', 'Limit $= 0$'] },
            { label: 'Left $= 2$, Right $= 5$:', options: ['Limit DNE', 'Limit $= 2$', 'Limit $= 5$', 'Limit $= 3.5$'] },
            { label: 'Left $= -1$, Right $= -1$:', options: ['Limit $= -1$', 'Limit DNE', 'Limit $= 1$', 'Limit $= -2$'] },
          ],
          correctAnswers: ['Limit $= 4$', 'Limit DNE', 'Limit $= -1$'],
          hint1: 'The two-sided limit exists only when both sides give the *same* value.',
          hint2: 'Equal sides ($4$ and $4$) → limit is that value.',
          hint3: 'Different sides ($2 \\ne 5$) → the limit does not exist (DNE). Never average them.',
          explanation: 'Equal one-sided values give that value as the limit ($4$ and $-1$). Unequal sides ($2$ vs $5$) mean the limit is DNE — you never average the two sides.',
        },
      },
      {
        id: 'lim2-piecewise',
        type: 'text' as const,
        content: `## Worked Example: A Piecewise Function

$$f(x) = \\begin{cases} x + 1 & x < 2 \\\\ x^2 & x \\ge 2 \\end{cases}$$

**Approach $x = 2$ from the left** (use the $x+1$ piece, since $x < 2$):
$$\\lim_{x \\to 2^-} f(x) = 2 + 1 = 3$$

**Approach $x = 2$ from the right** (use the $x^2$ piece, since $x \\ge 2$):
$$\\lim_{x \\to 2^+} f(x) = 2^2 = 4$$

The sides give $3$ and $4$. They disagree, so:

$$\\lim_{x \\to 2} f(x) = \\text{DNE}$$

> 💡 At a piecewise "seam," always evaluate **each piece on its own side** and compare.`,
      },
      {
        id: 'lim2-piecewise-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate Each Side** 🧮

Use $\\displaystyle f(x) = \\begin{cases} 2x & x < 3 \\\\ x + 4 & x \\ge 3 \\end{cases}$

**1)** $\\displaystyle\\lim_{x \\to 3^-} f(x) = \\,?$   *(use $2x$)*
**2)** $\\displaystyle\\lim_{x \\to 3^+} f(x) = \\,?$   *(use $x+4$)*
**3)** Does the two-sided limit exist? Enter $1$ for yes, $0$ for no.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '7', '0'],
          hint1: 'From the left use the $x<3$ piece: $2x = 2(3) = 6$.',
          hint2: 'From the right use the $x \\ge 3$ piece: $x + 4 = 3 + 4 = 7$.',
          hint3: 'Left gives $6$, right gives $7$. Since $6 \\ne 7$, the limit does not exist — enter $0$.',
          explanation: 'Left: $2(3) = 6$. Right: $3 + 4 = 7$. The one-sided limits differ ($6 \\ne 7$), so the two-sided limit DNE (enter $0$).',
        },
      },
      {
        id: 'lim2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The notation $\\lim_{x \\to 5^+} f(x)$ means $x$ approaches $5$ using values that are:',
              options: ['slightly greater than $5$', 'slightly less than $5$', 'exactly $5$', 'negative'],
              correctAnswer: 0,
              explanation: 'The $+$ superscript means approaching from the right — values a little *greater* than $5$.',
            },
            {
              question: 'For $\\lim_{x\\to a} f(x)$ to exist, what must be true?',
              options: [
                'The left-hand and right-hand limits must both exist and be equal',
                'Only the right-hand limit must exist',
                '$f(a)$ must be defined',
                'The function must be a polynomial',
              ],
              correctAnswer: 0,
              explanation: 'A two-sided limit exists if and only if both one-sided limits exist and equal the same value. $f(a)$ itself is irrelevant.',
            },
            {
              question: 'At $x=0$, a function has left-hand limit $-3$ and right-hand limit $-3$, but $f(0) = 10$. What is $\\lim_{x\\to 0} f(x)$?',
              options: ['$-3$', '$10$', 'DNE', '$3.5$'],
              correctAnswer: 0,
              explanation: 'Both sides agree on $-3$, so the limit is $-3$. The actual value $f(0)=10$ does not affect the limit.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'introduction-to-limits',
    sections: [
      {
        id: 'lim3-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Limits

**Part 3 of 7 — Reading Limits from Graphs & Tables**

---

> 🔑 **The Idea:** You don't always have a formula. Often you're handed a graph or a table and asked, "what's the limit here?" This part trains your eye and your estimation instincts.`,
      },
      {
        id: 'lim3-graphs',
        type: 'text' as const,
        content: `## Reading a Graph

To find $\\displaystyle\\lim_{x \\to a} f(x)$ from a graph, **trace the curve toward $x = a$ from each side** and ask what $y$-height the curve is heading to.

Three things to ignore:
- An **open circle** $\\circ$ at $(a, y)$ — the curve still *approaches* that height even if the point is hollow.
- A **filled dot** plotted somewhere else — that's $f(a)$, not the limit.
- Whether the point is defined at all.

| Graph feature at $x=a$ | Effect on $\\lim_{x\\to a} f(x)$ |
|------------------------|-------------------------------|
| Smooth curve passing through | Limit $=$ that height |
| Open hole, curve approaches height $L$ | Limit $= L$ (hole ignored) |
| Filled dot far above an open hole | Limit $=$ hole height (not the dot) |
| Jump: left height $\\ne$ right height | Limit DNE |

> 💡 **Mantra:** *Follow the curve, not the dots.* The limit lives in where the curve is *pointing*, never in a single plotted point.`,
      },
      {
        id: 'lim3-graph-quiz',
        type: 'multiple-choice' as const,
        content: `**Reading Graphs** 🎯`,
        exercise: {
          questions: [
            {
              question: 'At $x=1$, a curve approaches height $4$ from both sides, but there is an open circle at $(1,4)$ and a filled dot at $(1, 7)$. What is $\\lim_{x\\to 1} f(x)$?',
              options: ['$4$', '$7$', 'DNE', '$5.5$'],
              correctAnswer: 0,
              explanation: 'Follow the curve: both sides head to height $4$, so the limit is $4$. The filled dot at $7$ is $f(1)$ — irrelevant to the limit.',
            },
            {
              question: 'A graph jumps: as $x \\to 3^-$ the curve approaches $1$, and as $x \\to 3^+$ it approaches $6$. What is $\\lim_{x\\to 3} f(x)$?',
              options: ['DNE', '$3.5$', '$1$', '$6$'],
              correctAnswer: 0,
              explanation: 'The two sides disagree ($1$ vs $6$), so the two-sided limit does not exist.',
            },
          ],
        },
      },
      {
        id: 'lim3-tables',
        type: 'text' as const,
        content: `## Estimating from a Table

When given a table, look at the outputs as the inputs march toward the target from **both** sides and identify the value they're closing in on.

### Example: Estimate $\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x}$ (with $x$ in radians)

| $x$ | $-0.1$ | $-0.01$ | $\\to 0 \\leftarrow$ | $0.01$ | $0.1$ |
|-----|--------|---------|----------|--------|-------|
| $\\frac{\\sin x}{x}$ | $0.99833$ | $0.99998$ | $\\to ? \\leftarrow$ | $0.99998$ | $0.99833$ |

The outputs squeeze toward $1$ from both sides, so:

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$

This famous limit can't be found by plugging in ($\\frac{0}{0}$), but the table makes the answer unmistakable.

> ⚠️ **Table caution:** A table only *suggests* the answer. Always include points on **both** sides, and use enough decimal places to see the trend clearly.`,
      },
      {
        id: 'lim3-table-drill',
        type: 'input-boxes' as const,
        content: `**Estimate from the Table** 🧮

A table for $f(x)$ near $x = 5$ reads:

| $x$ | $4.9$ | $4.99$ | $4.999$ | $5.001$ | $5.01$ | $5.1$ |
|-----|-------|--------|---------|---------|--------|-------|
| $f(x)$ | $7.94$ | $7.994$ | $7.9994$ | $8.0006$ | $8.006$ | $8.06$ |

**1)** From the left, the outputs approach $\\,?$
**2)** From the right, the outputs approach $\\,?$
**3)** Therefore $\\displaystyle\\lim_{x \\to 5} f(x) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '8', '8'],
          hint1: 'Reading left-side outputs $7.94, 7.994, 7.9994$ — they climb toward a whole number.',
          hint2: 'Right-side outputs $8.0006, 8.006, 8.06$ fall toward the same whole number.',
          hint3: 'Both sides converge on $8$, so the two-sided limit is $8$.',
          explanation: 'Left-side outputs rise toward $8$; right-side outputs fall toward $8$. Both sides agree, so $\\lim_{x\\to 5} f(x) = 8$.',
        },
      },
      {
        id: 'lim3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Graph Diagnosis** 🔽

For each described graph feature at $x = 2$, choose the limit.`,
        exercise: {
          dropdowns: [
            { label: 'Curve passes smoothly through $(2, -3)$:', options: ['$-3$', 'DNE', '$2$', '$3$'] },
            { label: 'Open hole at $(2, 5)$; dot drawn at $(2, 9)$:', options: ['$5$', '$9$', 'DNE', '$7$'] },
            { label: 'Left side $\\to 0$, right side $\\to 4$:', options: ['DNE', '$2$', '$0$', '$4$'] },
          ],
          correctAnswers: ['$-3$', '$5$', 'DNE'],
          hint1: 'A smooth pass-through gives the limit equal to that height.',
          hint2: 'Follow the curve to the *hole* height; ignore the stray filled dot.',
          hint3: 'Mismatched one-sided approaches ($0 \\ne 4$) means DNE.',
          explanation: 'Smooth curve → limit is the height $-3$. Hole at $5$ with a stray dot at $9$ → limit follows the curve to $5$. Jump $0 \\ne 4$ → DNE.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'introduction-to-limits',
    sections: [
      {
        id: 'lim4-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Limits

**Part 4 of 7 — Evaluating Limits Algebraically**

---

> 🔑 **The Idea:** Tables and graphs *estimate*; algebra gives the **exact** answer. The first tool is direct substitution — and when that fails, we have clean techniques to rescue the limit.`,
      },
      {
        id: 'lim4-direct',
        type: 'text' as const,
        content: `## Direct Substitution

For most "nice" functions (polynomials, and rationals/roots/trig where the point is in the domain), the limit is found by **plugging in**:

$$\\lim_{x \\to a} f(x) = f(a)$$

### Examples

$$\\lim_{x \\to 4} (x^2 - 3x) = 4^2 - 3(4) = 16 - 12 = 4$$

$$\\lim_{x \\to 2} \\frac{x + 6}{x + 1} = \\frac{2 + 6}{2 + 1} = \\frac{8}{3}$$

$$\\lim_{x \\to 9} \\sqrt{x} = \\sqrt{9} = 3$$

> 💡 **Try substitution first, always.** If you get a real number (and not $\\frac{0}{0}$), you're done.`,
      },
      {
        id: 'lim4-direct-drill',
        type: 'input-boxes' as const,
        content: `**Substitute and Evaluate** 🧮

Each of these is "nice" at the target — just plug in.

**1)** $\\displaystyle\\lim_{x \\to 3} (2x^2 - x + 1) = \\,?$
**2)** $\\displaystyle\\lim_{x \\to 1} \\frac{x + 5}{x + 3} = \\,?$   *(fraction or decimal)*
**3)** $\\displaystyle\\lim_{x \\to 16} \\sqrt{x} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '3/2', '4'],
          hint1: '$2(3)^2 - 3 + 1 = 2(9) - 3 + 1 = 18 - 2$.',
          hint2: '$\\frac{1+5}{1+3} = \\frac{6}{4}$ — reduce it.',
          hint3: '$\\sqrt{16} = 4$.',
          explanation: '1) $2(9)-3+1 = 16$.  2) $\\frac{6}{4} = \\frac{3}{2} = 1.5$.  3) $\\sqrt{16} = 4$.',
        },
      },
      {
        id: 'lim4-indeterminate',
        type: 'text' as const,
        content: `## When Substitution Gives $\\frac{0}{0}$

If plugging in produces $\\dfrac{0}{0}$, that is an **indeterminate form** — a signal, not an answer. It means the numerator and denominator share a factor of $(x - a)$ that we can cancel.

### Technique 1: Factor and Cancel

$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$$

Substitution gives $\\frac{0}{0}$. Factor the top:

$$\\frac{x^2 - 9}{x - 3} = \\frac{(x-3)(x+3)}{x - 3} = x + 3 \\quad (x \\ne 3)$$

Now substitute into the simplified form:

$$\\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$$

> ⚠️ $\\frac{0}{0}$ is **never** the final answer and it does **not** mean "DNE." It means "do more work — factor, rationalize, or simplify."`,
      },
      {
        id: 'lim4-rationalize',
        type: 'text' as const,
        content: `## Technique 2: Rationalize (for roots)

$$\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$$

Substitution gives $\\frac{0}{0}$. Multiply by the **conjugate** $\\dfrac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}$:

$$\\frac{(\\sqrt{x+4}-2)(\\sqrt{x+4}+2)}{x(\\sqrt{x+4}+2)} = \\frac{(x+4) - 4}{x(\\sqrt{x+4}+2)} = \\frac{x}{x(\\sqrt{x+4}+2)}$$

Cancel the $x$:

$$\\frac{1}{\\sqrt{x+4}+2} \\;\\xrightarrow{\\;x \\to 0\\;}\\; \\frac{1}{\\sqrt{4}+2} = \\frac{1}{4}$$

So the limit is $\\dfrac{1}{4}$.

> 💡 The conjugate trick clears the root from the numerator so a cancelable factor appears.`,
      },
      {
        id: 'lim4-strategy-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Technique** 🔽

Substitution was tried first. Choose the right next step for each limit.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x\\to 2}(x^2+1)$ gives a number on substitution:', options: ['Done — the number is the answer', 'Factor and cancel', 'Rationalize', 'Answer is DNE'] },
            { label: '$\\lim_{x\\to 4}\\frac{x^2-16}{x-4}$ gives $\\frac{0}{0}$:', options: ['Factor and cancel', 'Done immediately', 'Rationalize', 'Answer is $0$'] },
            { label: '$\\lim_{x\\to 0}\\frac{\\sqrt{x+9}-3}{x}$ gives $\\frac{0}{0}$:', options: ['Rationalize with the conjugate', 'Factor a quadratic', 'Done immediately', 'Answer is $\\frac{0}{0}$'] },
          ],
          correctAnswers: ['Done — the number is the answer', 'Factor and cancel', 'Rationalize with the conjugate'],
          hint1: 'A clean number from substitution *is* the answer.',
          hint2: 'A polynomial over a polynomial giving $\\frac{0}{0}$ → factor and cancel the shared $(x-a)$.',
          hint3: 'A root in the numerator giving $\\frac{0}{0}$ → multiply by the conjugate.',
          explanation: 'Substitution that yields a number is final. A $\\frac{0}{0}$ from polynomials calls for factoring; a $\\frac{0}{0}$ with a square root calls for rationalizing by the conjugate.',
        },
      },
      {
        id: 'lim4-factor-drill',
        type: 'input-boxes' as const,
        content: `**Factor, Cancel, Evaluate** 🧮

Each gives $\\frac{0}{0}$ first. Simplify, then substitute.

**1)** $\\displaystyle\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to -1} \\frac{x^2 - 1}{x + 1} = \\,?$
**3)** $\\displaystyle\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '-2', '10'],
          hint1: '$\\frac{(x-2)(x+2)}{x-2} = x+2 \\to 2+2$.',
          hint2: '$\\frac{(x-1)(x+1)}{x+1} = x-1 \\to -1-1$.',
          hint3: '$\\frac{(x-5)(x+5)}{x-5} = x+5 \\to 5+5$.',
          explanation: '1) $x+2 \\to 4$.  2) $x-1 \\to -2$.  3) $x+5 \\to 10$. Each is a difference of squares hiding a cancelable $(x-a)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'introduction-to-limits',
    sections: [
      {
        id: 'lim5-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Limits

**Part 5 of 7 — Infinite Limits & Vertical Asymptotes**

---

> 🔑 **The Idea:** Sometimes substitution gives a *nonzero number over zero*. The function doesn't approach a finite height — it blows up. These **infinite limits** pinpoint vertical asymptotes.`,
      },
      {
        id: 'lim5-infinite',
        type: 'text' as const,
        content: `## When the Denominator Goes to Zero (but the Top Doesn't)

Consider $\\displaystyle\\lim_{x \\to 0} \\frac{1}{x^2}$.

As $x$ gets tiny, $x^2$ is tiny and **positive**, so $\\frac{1}{x^2}$ grows without bound:

| $x$ | $\\pm 0.1$ | $\\pm 0.01$ | $\\pm 0.001$ |
|-----|-----------|------------|-------------|
| $\\frac{1}{x^2}$ | $100$ | $10{,}000$ | $1{,}000{,}000$ |

The outputs increase forever, so we write:

$$\\lim_{x \\to 0} \\frac{1}{x^2} = +\\infty$$

> ⚠️ Writing "$= \\infty$" is shorthand for **"increases without bound."** Technically the limit does not exist as a finite number, but the $\\infty$ symbol tells us *how* it fails — it describes the behavior precisely. (Some textbooks say such a limit "DNE"; AP accepts $\\infty$/$-\\infty$ as the descriptive answer.)`,
      },
      {
        id: 'lim5-sign',
        type: 'text' as const,
        content: `## Watching the Sign: One-Sided Infinite Limits

For $\\displaystyle\\lim_{x \\to 0} \\frac{1}{x}$, the sign of $x$ matters because $x$ (not $x^2$) can be negative.

- From the **right** ($x \\to 0^+$): $x$ is a small *positive* number, so $\\frac{1}{x} \\to +\\infty$.
- From the **left** ($x \\to 0^-$): $x$ is a small *negative* number, so $\\frac{1}{x} \\to -\\infty$.

$$\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty, \\qquad \\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$$

Because the two sides disagree (one shoots up, one shoots down), the two-sided $\\lim_{x \\to 0} \\frac{1}{x}$ **does not exist** — not even as $\\pm\\infty$.

> 🔑 **Sign rule:** For $\\frac{\\text{nonzero}}{\\to 0}$, determine the sign of the denominator on *each side*. "Positive over a tiny positive" $\\to +\\infty$; "positive over a tiny negative" $\\to -\\infty$.`,
      },
      {
        id: 'lim5-asymptote',
        type: 'text' as const,
        content: `## Infinite Limits Mark Vertical Asymptotes

> 🔑 If $\\displaystyle\\lim_{x \\to a} f(x) = \\pm\\infty$ (from either side), then the line $x = a$ is a **vertical asymptote** of $f$.

### Example: $\\displaystyle f(x) = \\frac{1}{x - 3}$

The denominator is zero at $x = 3$ while the numerator stays $1 \\ne 0$, so:
- $\\displaystyle\\lim_{x \\to 3^+} \\frac{1}{x-3} = +\\infty$ (denominator a tiny positive),
- $\\displaystyle\\lim_{x \\to 3^-} \\frac{1}{x-3} = -\\infty$ (denominator a tiny negative).

The line $x = 3$ is a vertical asymptote.

> 💡 **Contrast with holes:** if the denominator's zero *cancels* (like $\\frac{x^2-9}{x-3}$ at $x=3$), you get a **hole** and a finite limit — not an asymptote. Always check whether the factor cancels first.`,
      },
      {
        id: 'lim5-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Substituting into a limit gives $\\dfrac{5}{0}$ (a nonzero number over zero). What does this indicate?',
              options: [
                'An infinite limit — the function blows up (vertical asymptote)',
                'The limit equals $5$',
                'An indeterminate form requiring factoring',
                'The limit equals $0$',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{\\text{nonzero}}{0}$ means the outputs grow without bound: an infinite limit and a vertical asymptote. (Only $\\frac{0}{0}$ is indeterminate and needs factoring.)',
            },
            {
              question: 'What is $\\displaystyle\\lim_{x \\to 0^-} \\frac{1}{x}$?',
              options: ['$-\\infty$', '$+\\infty$', '$0$', '$1$'],
              correctAnswer: 0,
              explanation: 'From the left, $x$ is a small negative number, so $\\frac{1}{x}$ is a large negative number → $-\\infty$.',
            },
            {
              question: 'For $f(x) = \\dfrac{1}{x-3}$, the line $x = 3$ is a:',
              options: ['vertical asymptote', 'horizontal asymptote', 'hole', 'point of continuity'],
              correctAnswer: 0,
              explanation: 'The denominator is zero at $x=3$ and does not cancel, so the function blows up there: a vertical asymptote.',
            },
          ],
        },
      },
      {
        id: 'lim5-sign-dropdown',
        type: 'dropdown-select' as const,
        content: `**Up or Down?** 🔽

Decide each one-sided infinite limit by checking the sign of the denominator.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x\\to 2^+} \\frac{1}{x-2}$:', options: ['$+\\infty$', '$-\\infty$', '$0$', '$2$'] },
            { label: '$\\lim_{x\\to 2^-} \\frac{1}{x-2}$:', options: ['$-\\infty$', '$+\\infty$', '$0$', '$2$'] },
            { label: '$\\lim_{x\\to 0} \\frac{1}{x^2}$:', options: ['$+\\infty$', '$-\\infty$', '$0$', 'DNE (sides differ)'] },
          ],
          correctAnswers: ['$+\\infty$', '$-\\infty$', '$+\\infty$'],
          hint1: 'Just right of $2$, $x-2$ is a tiny *positive*; $\\frac{1}{+}\\to+\\infty$.',
          hint2: 'Just left of $2$, $x-2$ is a tiny *negative*; $\\frac{1}{-}\\to-\\infty$.',
          hint3: '$x^2$ is positive on both sides of $0$, so $\\frac{1}{x^2}\\to+\\infty$ from each side.',
          explanation: 'Right of $2$: denominator $+$, so $+\\infty$. Left of $2$: denominator $-$, so $-\\infty$. For $\\frac{1}{x^2}$, the square keeps the denominator positive on both sides → $+\\infty$.',
        },
      },
      {
        id: 'lim5-asymptote-drill',
        type: 'input-boxes' as const,
        content: `**Find the Vertical Asymptote** 🧮

Each numerator is nonzero where the denominator is zero, so each marks a vertical asymptote.

**1)** For $\\displaystyle f(x) = \\frac{1}{x - 7}$, the vertical asymptote is the line $x = \\,?$
**2)** For $\\displaystyle g(x) = \\frac{5}{x + 4}$, the vertical asymptote is the line $x = \\,?$
**3)** As $x \\to 7^-$, is $\\dfrac{1}{x-7}$ heading to $+\\infty$ or $-\\infty$? Enter $1$ for $+\\infty$, $-1$ for $-\\infty$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '-4', '-1'],
          hint1: 'Set the denominator $x - 7 = 0$.',
          hint2: 'Set the denominator $x + 4 = 0$, so $x = -4$.',
          hint3: 'Just left of $7$, $x - 7$ is a tiny *negative*, so $\\frac{1}{\\text{tiny }-} \\to -\\infty$; enter $-1$.',
          explanation: '1) $x - 7 = 0 \\Rightarrow x = 7$.  2) $x + 4 = 0 \\Rightarrow x = -4$.  3) From the left of $7$, the denominator is a small negative number, so the quotient $\\to -\\infty$ (enter $-1$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'introduction-to-limits',
    sections: [
      {
        id: 'lim6-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Limits

**Part 6 of 7 — Limits at Infinity & End Behavior**

---

> 🔑 **The Idea:** Instead of $x$ approaching a point, let $x$ run off toward $\\pm\\infty$. The limit then describes the function's **long-run height** — its horizontal asymptote.`,
      },
      {
        id: 'lim6-basic',
        type: 'text' as const,
        content: `## Limits as $x \\to \\pm\\infty$

The key building block: as $x$ grows huge, $\\dfrac{1}{x}$ shrinks toward $0$.

$$\\lim_{x \\to \\infty} \\frac{1}{x} = 0, \\qquad \\lim_{x \\to -\\infty} \\frac{1}{x} = 0$$

More generally, $\\dfrac{1}{x^n} \\to 0$ for any positive power $n$. This single fact powers almost every limit at infinity.

> 💡 Think of it as "a fixed number split among more and more pieces" — each share goes to zero.`,
      },
      {
        id: 'lim6-rational',
        type: 'text' as const,
        content: `## Rational Functions: Compare the Degrees

For a ratio of polynomials, the limit at infinity is decided by the **highest powers**. The shortcut:

| Compared degrees | $\\displaystyle\\lim_{x\\to\\pm\\infty}$ | Horizontal asymptote |
|------------------|----------------------------------------|----------------------|
| Top degree **<** bottom degree | $0$ | $y = 0$ |
| Top degree **=** bottom degree | ratio of **leading coefficients** | $y = \\frac{a}{b}$ |
| Top degree **>** bottom degree | $\\pm\\infty$ (no horizontal asymptote) | none |

### Example (equal degrees)

$$\\lim_{x \\to \\infty} \\frac{3x^2 + 5}{6x^2 - x} = \\frac{3}{6} = \\frac{1}{2}$$

Divide every term by $x^2$: the lower-power terms vanish, leaving $\\frac{3}{6}$.

### Example (top smaller)

$$\\lim_{x \\to \\infty} \\frac{2x + 1}{x^2 - 4} = 0$$

The denominator grows much faster, so the ratio collapses to $0$.`,
      },
      {
        id: 'lim6-degree-dropdown',
        type: 'dropdown-select' as const,
        content: `**Degree Showdown** 🔽

Use the degree rule to read off each limit at infinity.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x\\to\\infty}\\frac{4x^3+1}{2x^3-x}$ (equal degrees):', options: ['$2$', '$0$', '$\\infty$', '$\\frac{1}{2}$'] },
            { label: '$\\lim_{x\\to\\infty}\\frac{5x+2}{x^2+7}$ (top smaller):', options: ['$0$', '$5$', '$\\infty$', '$\\frac{5}{1}$'] },
            { label: '$\\lim_{x\\to\\infty}\\frac{x^2}{x+3}$ (top larger):', options: ['$\\infty$', '$0$', '$1$', '$\\frac{1}{3}$'] },
          ],
          correctAnswers: ['$2$', '$0$', '$\\infty$'],
          hint1: 'Equal degrees → ratio of leading coefficients: $\\frac{4}{2}$.',
          hint2: 'Bottom degree larger → the fraction collapses to $0$.',
          hint3: 'Top degree larger → grows without bound: $\\infty$.',
          explanation: 'Equal degrees give $\\frac{4}{2}=2$. A larger denominator degree gives $0$. A larger numerator degree grows to $\\infty$ (no horizontal asymptote).',
        },
      },
      {
        id: 'lim6-horizontal',
        type: 'text' as const,
        content: `## Limits at Infinity Mark Horizontal Asymptotes

> 🔑 If $\\displaystyle\\lim_{x \\to \\infty} f(x) = L$ (or $\\lim_{x\\to-\\infty} f(x) = L$) with $L$ a finite number, then $y = L$ is a **horizontal asymptote**.

### Example

$$\\lim_{x \\to \\infty} \\frac{7x^2 - 3}{2x^2 + x} = \\frac{7}{2}$$

so $y = \\dfrac{7}{2}$ is a horizontal asymptote of that function.

> 💡 **Vertical vs. horizontal:** *vertical* asymptotes come from limits **at a point** going to $\\pm\\infty$ (denominator $\\to 0$); *horizontal* asymptotes come from limits **as $x \\to \\pm\\infty$** giving a finite number.`,
      },
      {
        id: 'lim6-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When the numerator and denominator of a rational function have the **same** degree, $\\displaystyle\\lim_{x\\to\\infty} f(x)$ equals:',
              options: [
                'the ratio of the leading coefficients',
                'always $0$',
                'always $\\infty$',
                'the ratio of the constant terms',
              ],
              correctAnswer: 0,
              explanation: 'Equal top and bottom degrees give the ratio of the leading coefficients as the limit (and as the horizontal asymptote).',
            },
            {
              question: 'What is $\\displaystyle\\lim_{x \\to \\infty} \\frac{10x + 3}{5x^2 + 1}$?',
              options: ['$0$', '$2$', '$\\infty$', '$\\frac{10}{5}$'],
              correctAnswer: 0,
              explanation: 'The denominator degree ($2$) exceeds the numerator degree ($1$), so the fraction collapses to $0$.',
            },
            {
              question: 'A function satisfies $\\displaystyle\\lim_{x \\to \\infty} f(x) = -2$. What does this tell you about its graph?',
              options: [
                '$y = -2$ is a horizontal asymptote',
                '$x = -2$ is a vertical asymptote',
                'there is a hole at $x = -2$',
                'the limit does not exist',
              ],
              correctAnswer: 0,
              explanation: 'A finite limit as $x \\to \\infty$ means the curve levels off at that height: $y = -2$ is a horizontal asymptote.',
            },
          ],
        },
      },
      {
        id: 'lim6-drill',
        type: 'input-boxes' as const,
        content: `**Limits at Infinity** 🧮

Apply the degree rule. Use a fraction or decimal where needed.

**1)** $\\displaystyle\\lim_{x \\to \\infty} \\frac{8x^2 + 1}{4x^2 - 5} = \\,?$
**2)** $\\displaystyle\\lim_{x \\to \\infty} \\frac{6x + 9}{3x - 2} = \\,?$
**3)** $\\displaystyle\\lim_{x \\to \\infty} \\frac{x + 4}{x^3 + 1} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', '0'],
          hint1: 'Equal degrees ($2$ and $2$): ratio of leading coefficients $\\frac{8}{4}$.',
          hint2: 'Equal degrees ($1$ and $1$): $\\frac{6}{3}$.',
          hint3: 'Bottom degree ($3$) beats top degree ($1$), so the limit is $0$.',
          explanation: '1) $\\frac{8}{4} = 2$.  2) $\\frac{6}{3} = 2$.  3) Denominator dominates → $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'introduction-to-limits',
    sections: [
      {
        id: 'lim7-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Limits

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) read a limit as "the value approached," (2) split it into one-sided limits and judge existence, (3) estimate from graphs and tables, (4) evaluate exactly by substitution / factoring / rationalizing, (5) handle infinite limits and vertical asymptotes, and (6) take limits at infinity for end behavior. Let's bring it all together.`,
      },
      {
        id: 'lim7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | What to do | Result |
|-----------|-----------|--------|
| Substitution gives a number | Done | that number |
| Substitution gives $\\frac{0}{0}$ | Factor / rationalize, then sub | finite value |
| Substitution gives $\\frac{\\text{nonzero}}{0}$ | Check sign each side | $\\pm\\infty$ → vertical asymptote |
| Left limit $\\ne$ right limit | — | DNE |
| $x \\to \\pm\\infty$, rational function | Compare degrees | $0$, $\\frac{a}{b}$, or $\\pm\\infty$ |

> ⚠️ **Two traps to remember:** $\\frac{0}{0}$ is indeterminate (do more work — it is *not* DNE), while $\\frac{\\text{nonzero}}{0}$ is infinite (a vertical asymptote). And a two-sided limit needs **both** sides to match.`,
      },
      {
        id: 'lim7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$.',
              options: ['$8$', '$0$', 'DNE', '$\\frac{0}{0}$'],
              correctAnswer: 0,
              explanation: 'Substitution gives $\\frac{0}{0}$. Factor: $\\frac{(x-4)(x+4)}{x-4} = x+4 \\to 4+4 = 8$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to \\infty} \\frac{9x^2 + 2x}{3x^2 - 1}$.',
              options: ['$3$', '$0$', '$\\infty$', '$\\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'Equal degrees ($2$ and $2$): the limit is the ratio of leading coefficients $\\frac{9}{3} = 3$.',
            },
            {
              question: 'A piecewise function has $\\lim_{x\\to 1^-} f(x) = 2$ and $\\lim_{x\\to 1^+} f(x) = 5$. What is $\\lim_{x\\to 1} f(x)$?',
              options: ['DNE', '$3.5$', '$2$', '$5$'],
              correctAnswer: 0,
              explanation: 'The one-sided limits differ ($2 \\ne 5$), so the two-sided limit does not exist. Never average the sides.',
            },
          ],
        },
      },
      {
        id: 'lim7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate Each** 🧮

Choose your tool (substitute, factor, rationalize, or degree rule), then evaluate.

**1)** $\\displaystyle\\lim_{x \\to 5} (x^2 - 2x) = \\,?$
**2)** $\\displaystyle\\lim_{x \\to -3} \\frac{x^2 - 9}{x + 3} = \\,?$
**3)** $\\displaystyle\\lim_{x \\to \\infty} \\frac{4x + 7}{x^2 + 1} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '-6', '0'],
          hint1: 'Substitute directly: $5^2 - 2(5) = 25 - 10$.',
          hint2: '$\\frac{(x-3)(x+3)}{x+3} = x-3 \\to -3-3$.',
          hint3: 'Bottom degree ($2$) exceeds top degree ($1$), so the limit is $0$.',
          explanation: '1) $25 - 10 = 15$.  2) $x - 3 \\to -6$.  3) Denominator dominates → $0$.',
        },
      },
      {
        id: 'lim7-asymptote-dropdown',
        type: 'dropdown-select' as const,
        content: `**Asymptote Classification** 🔽

Decide what each limit tells you about the graph.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x\\to 2}\\frac{1}{x-2} = \\pm\\infty$ tells you:', options: ['$x=2$ is a vertical asymptote', '$y=2$ is a horizontal asymptote', 'there is a hole at $x=2$', 'the function is continuous'] },
            { label: '$\\lim_{x\\to\\infty} f(x) = 5$ tells you:', options: ['$y=5$ is a horizontal asymptote', '$x=5$ is a vertical asymptote', 'there is a hole at $y=5$', 'the limit DNE'] },
            { label: '$\\lim_{x\\to 3}\\frac{x^2-9}{x-3} = 6$ (finite) tells you:', options: ['a removable hole, not an asymptote', '$x=3$ is a vertical asymptote', '$y=3$ is a horizontal asymptote', 'the limit DNE'] },
          ],
          correctAnswers: ['$x=2$ is a vertical asymptote', '$y=5$ is a horizontal asymptote', 'a removable hole, not an asymptote'],
          hint1: 'A limit at a point going to $\\pm\\infty$ marks a *vertical* asymptote.',
          hint2: 'A finite limit as $x\\to\\infty$ marks a *horizontal* asymptote $y = L$.',
          hint3: 'A canceling factor gives a finite limit and a removable hole — not an asymptote.',
          explanation: 'Infinite limit at a point → vertical asymptote ($x=2$). Finite limit at infinity → horizontal asymptote ($y=5$). A $\\frac{0}{0}$ that cancels to a finite value → a removable hole at $x=3$.',
        },
      },
      {
        id: 'lim7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\displaystyle\\lim_{x \\to 0} \\frac{x^2 - 3x}{x}$?',
              options: ['$-3$', '$0$', 'DNE', '$3$'],
              correctAnswer: 0,
              explanation: 'Substitution gives $\\frac{0}{0}$. Factor the numerator: $\\frac{x(x-3)}{x} = x - 3 \\to 0 - 3 = -3$.',
            },
            {
              question: 'A function has $\\lim_{x\\to 2^-} f(x) = 4$, $\\lim_{x\\to 2^+} f(x) = 4$, and $f(2) = 9$. What is $\\lim_{x\\to 2} f(x)$?',
              options: ['$4$', '$9$', 'DNE', '$6.5$'],
              correctAnswer: 0,
              explanation: 'Both one-sided limits equal $4$, so the limit is $4$. The actual value $f(2) = 9$ does not affect the limit.',
            },
            {
              question: 'What is $\\displaystyle\\lim_{x \\to \\infty} \\frac{2x^3 + x}{x^3 - 5}$?',
              options: ['$2$', '$0$', '$\\infty$', '$-\\frac{1}{5}$'],
              correctAnswer: 0,
              explanation: 'Equal degrees ($3$ and $3$): the limit is the ratio of leading coefficients $\\frac{2}{1} = 2$.',
            },
          ],
        },
      },
    ],
  },
]
