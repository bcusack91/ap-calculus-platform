import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Limit Notation and Terminology (AP Calculus AB).
 * Registry key / DB Topic.slug: 'limit-notation-terminology'.
 * 7 parts, gold-standard structure: the intuitive idea of a limit → reading and
 * writing limit notation → one-sided limits → when a (two-sided) limit exists →
 * infinite limits & limits at infinity (notation, not full evaluation) →
 * vocabulary of continuity & key terms → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every value, notation, and answer index was checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'limit-notation-terminology',
    sections: [
      {
        id: 'lnt1-intro',
        type: 'text' as const,
        content: `# 🎯 Limit Notation and Terminology

**Part 1 of 7 — The Idea of a Limit**

---

### Topics in This Part

| Section |
|---------|
| What a Limit Asks |
| "Approaching" vs. "Equaling" |
| The Value at the Point Doesn't Matter |

> 🔑 **Key Concept:** A **limit** describes the value a function *heads toward* as its input gets close to some number — **not** necessarily the value the function *has* there. Calculus is built almost entirely on this one idea, so we start by getting the language exactly right.`,
      },
      {
        id: 'lnt1-what-asks',
        type: 'text' as const,
        content: `## What a Limit Asks

Pick a function $f$ and a target input $x = a$. The question a limit asks is:

> *As $x$ gets closer and closer to $a$ (but is never actually equal to $a$), what number does $f(x)$ get closer and closer to?*

That target output is the **limit of $f(x)$ as $x$ approaches $a$**.

### A first look with a table

Consider $f(x) = 2x + 1$ near $x = 3$. Watch the outputs as the inputs close in on $3$ from both sides:

| $x$ | $2.9$ | $2.99$ | $2.999$ | $\\to 3 \\leftarrow$ | $3.001$ | $3.01$ | $3.1$ |
|-----|-------|--------|---------|---------|---------|--------|-------|
| $f(x)$ | $6.8$ | $6.98$ | $6.998$ | $\\to ? \\leftarrow$ | $7.002$ | $7.02$ | $7.2$ |

The outputs squeeze in on $7$ from both sides. We say the limit is $7$.

> 💡 Notice we never plugged in $x = 3$ to get the limit — we *watched the trend*. For this nice function the trend value ($7$) happens to equal $f(3) = 2(3)+1 = 7$, but that is a bonus, not the definition.`,
      },
      {
        id: 'lnt1-check-table',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A limit as $x \\to a$ describes the value that $f(x)$:',
              options: [
                'gets closer and closer to as $x$ approaches $a$',
                'has exactly when $x = a$',
                'reaches at the largest possible $x$',
                'has at $x = 0$',
              ],
              correctAnswer: 0,
              explanation: 'A limit is about the *trend* — the value $f(x)$ approaches as $x$ nears $a$. It is not, by definition, the same as $f(a)$.',
            },
            {
              question: 'In the table for $f(x) = 2x+1$, the outputs near $x=3$ closed in on which value?',
              options: ['$7$', '$3$', '$6$', '$\\infty$'],
              correctAnswer: 0,
              explanation: 'From both sides the outputs approached $7$ ($6.998$ from the left, $7.002$ from the right), so the limit is $7$.',
            },
          ],
        },
      },
      {
        id: 'lnt1-value-irrelevant',
        type: 'text' as const,
        content: `## The Value *at* the Point Doesn't Matter

This is the most important — and most surprising — idea in Part 1.

Consider two functions near $x = 2$:

$$g(x) = x + 1 \\qquad\\text{and}\\qquad h(x) = \\begin{cases} x + 1 & x \\ne 2 \\\\ 100 & x = 2 \\end{cases}$$

As $x$ approaches $2$, **both** functions send their outputs toward $3$ — because near $2$ (but not *at* $2$) they are identical. So:

$$\\lim_{x \\to 2} g(x) = 3 \\qquad \\lim_{x \\to 2} h(x) = 3$$

even though $g(2) = 3$ but $h(2) = 100$.

> ⚠️ **The point $x = a$ is deliberately excluded.** The limit cares about what happens *near* $a$, never *at* $a$. A function can even be **undefined** at $a$ and still have a perfectly good limit there.`,
      },
      {
        id: 'lnt1-check-value',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $h(x) = x+1$ everywhere except $h(2) = 100$, what is $\\lim_{x \\to 2} h(x)$?',
              options: ['$3$', '$100$', 'It does not exist', '$2$'],
              correctAnswer: 0,
              explanation: 'Near (but not at) $x=2$, $h$ behaves like $x+1$, which heads to $3$. The single odd value $h(2)=100$ is ignored by the limit.',
            },
            {
              question: 'If $f$ is undefined at $x = a$, then $\\lim_{x \\to a} f(x)$:',
              options: [
                'might still exist',
                'must also be undefined',
                'must equal $0$',
                'must equal $a$',
              ],
              correctAnswer: 0,
              explanation: 'A limit can exist even where the function has no value at all, because the limit only depends on the behavior near $a$, not at $a$.',
            },
          ],
        },
      },
      {
        id: 'lnt1-table-practice',
        type: 'text' as const,
        content: `## Estimating a Limit from a Table

The table method works even when plugging in the point would be illegal. Consider $f(x) = \\dfrac{x^2 - 9}{x - 3}$, which is **undefined** at $x = 3$ (you'd divide by $0$). We can still watch the trend:

| $x$ | $2.9$ | $2.99$ | $2.999$ | $\\to 3 \\leftarrow$ | $3.001$ | $3.01$ | $3.1$ |
|-----|-------|--------|---------|---------|---------|--------|-------|
| $f(x)$ | $5.9$ | $5.99$ | $5.999$ | $\\to ? \\leftarrow$ | $6.001$ | $6.01$ | $6.1$ |

From both sides the outputs squeeze in on $6$, even though $f(3)$ doesn't exist.

> 💡 The reason: for $x \\ne 3$, $\\dfrac{x^2-9}{x-3} = \\dfrac{(x-3)(x+3)}{x-3} = x+3$, which heads to $3+3 = 6$. The table is *seeing* this trend.`,
      },
      {
        id: 'lnt1-input-table',
        type: 'input-boxes' as const,
        content: `**Read the Trend** 🧮

Use the table above for $f(x) = \\dfrac{x^2-9}{x-3}$.

**1)** As $x \\to 3$, the outputs approach what value? $\\,?$
**2)** What is $f(3)$ itself? Enter **0** if it is **undefined**, or the value if it exists.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '0'],
          hint1: 'Both sides of the table close in on the same number.',
          hint2: 'At $x=3$ the denominator $x-3$ becomes $0$, so $f(3)$ is undefined — enter $0$ as instructed.',
          hint3: 'The limit is $6$ (the trend), but the function value at $3$ does not exist (enter $0$).',
          explanation: '1) The outputs approach $6$, so $\\lim_{x\\to3} f(x) = 6$.  2) $f(3)$ is undefined (division by $0$) — entered as $0$. The limit can exist where the value does not.',
        },
      },
      {
        id: 'lnt1-wrap',
        type: 'text' as const,
        content: `## Wrapping Up Part 1

You now hold the central idea:

> 🔑 A limit is the value $f(x)$ **approaches**; it is *independent* of whether — or what — $f$ is **at** the point.

In Part 2 we translate this idea into the compact symbols professional mathematicians use: $\\displaystyle\\lim_{x \\to a} f(x) = L$.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'limit-notation-terminology',
    sections: [
      {
        id: 'lnt2-intro',
        type: 'text' as const,
        content: `# 🎯 Limit Notation and Terminology

**Part 2 of 7 — Reading & Writing $\\lim$ Notation**

---

> 🔑 **The Notation:** $\\displaystyle\\lim_{x \\to a} f(x) = L$ is read *"the limit of $f$ of $x$, as $x$ approaches $a$, equals $L$."* Every piece of that symbol carries meaning — we'll name each piece.`,
      },
      {
        id: 'lnt2-anatomy',
        type: 'text' as const,
        content: `## Anatomy of the Symbol

$$\\lim_{x \\to a} f(x) = L$$

| Piece | Name | What it tells you |
|-------|------|-------------------|
| $\\lim$ | the limit operator | "we are taking a limit" |
| $x \\to a$ | the approach | the input $x$ heads toward the number $a$ |
| $f(x)$ | the function | the expression whose trend we track |
| $L$ | the limit value | the number the outputs approach |

Read aloud, the whole thing is: *"the limit, as $x$ approaches $a$, of $f(x)$, is $L$."*

### Examples in words

| Symbol | In English |
|--------|-----------|
| $\\lim_{x \\to 4} x^2 = 16$ | "as $x$ approaches $4$, $x^2$ approaches $16$" |
| $\\lim_{t \\to 0} (t+5) = 5$ | "as $t$ approaches $0$, $t+5$ approaches $5$" |
| $\\lim_{x \\to a} f(x) = L$ | "as $x$ approaches $a$, $f(x)$ approaches $L$" |

> 💡 The variable under $\\lim$ (here $x$, or $t$) is the input that's *moving*. Whatever sits to its right is the expression being evaluated along the way.`,
      },
      {
        id: 'lnt2-dropdown-anatomy',
        type: 'dropdown-select' as const,
        content: `**Name the Parts** 🔽

Look at the statement $\\displaystyle\\lim_{x \\to 3} (4x - 1) = 11$ and identify each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The value $x$ is approaching is:', options: ['$3$', '$11$', '$4$', '$-1$'] },
            { label: 'The function whose trend we track is:', options: ['$4x - 1$', '$x$', '$11$', '$3$'] },
            { label: 'The limit value $L$ is:', options: ['$11$', '$3$', '$4x-1$', '$0$'] },
          ],
          correctAnswers: ['$3$', '$4x - 1$', '$11$'],
          hint1: 'The number under the arrow $x \\to \\,?$ is what $x$ approaches.',
          hint2: 'The expression after $\\lim$ is the function $f(x)$.',
          hint3: 'The number after the $=$ sign is the limit value $L$.',
          explanation: 'In $\\lim_{x \\to 3}(4x-1) = 11$: $x$ approaches $3$, the function is $4x-1$, and the limit value is $11$.',
        },
      },
      {
        id: 'lnt2-writing',
        type: 'text' as const,
        content: `## Writing a Limit from a Sentence

Going the other direction — sentence to symbol — is just as important on the AP exam.

**Sentence:** "As $x$ approaches $5$, the function $g(x) = x^2 - 4$ approaches $21$."

**Symbol:**

$$\\lim_{x \\to 5} (x^2 - 4) = 21$$

**Sentence:** "The function $f$ heads toward $-2$ as $x$ heads toward $1$."

**Symbol:**

$$\\lim_{x \\to 1} f(x) = -2$$

> ⚠️ **Common slip:** Don't write the approached input ($5$) where the limit value ($21$) belongs. The number under $\\lim$ is where $x$ *goes*; the number after $=$ is where $f(x)$ *goes*. They are usually different.`,
      },
      {
        id: 'lnt2-check-translate',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which symbol matches "as $x$ approaches $-2$, $f(x)$ approaches $7$"?',
              options: [
                '$\\lim_{x \\to -2} f(x) = 7$',
                '$\\lim_{x \\to 7} f(x) = -2$',
                '$\\lim_{x \\to -2} 7 = f(x)$',
                '$f(-2) = 7$',
              ],
              correctAnswer: 0,
              explanation: 'The input approaches $-2$ (goes under $\\lim$), and the output approaches $7$ (goes after the $=$).',
            },
            {
              question: 'How is $\\lim_{x \\to 0} \\cos x = 1$ read aloud?',
              options: [
                'The limit of $\\cos x$ as $x$ approaches $0$ is $1$',
                'The limit of $\\cos x$ as $x$ approaches $1$ is $0$',
                '$\\cos$ of $0$ times $1$',
                'The limit of $0$ as $x$ approaches $1$',
              ],
              correctAnswer: 0,
              explanation: 'Read left to right: "limit, as $x$ approaches $0$, of $\\cos x$, equals $1$."',
            },
          ],
        },
      },
      {
        id: 'lnt2-positions',
        type: 'text' as const,
        content: `## Two Positions, Two Numbers

A limit statement holds **two** numbers in **two** positions, and mixing them up is the #1 notation error:

| Position | Role | In $\\lim_{x \\to 6}(x-2) = 4$ |
|----------|------|-------------------------------|
| under $\\lim$ (the arrow) | **input target** — where $x$ goes | $6$ |
| after the $=$ | **limit value $L$** — where $f(x)$ goes | $4$ |

These are almost always different numbers, so always ask yourself: *is this the place $x$ goes, or the value $f(x)$ heads to?*`,
      },
      {
        id: 'lnt2-input-read',
        type: 'input-boxes' as const,
        content: `**Read the Value** 🧮

Each statement is true. Enter the requested number.

**1)** In $\\lim_{x \\to 6}(x - 2) = 4$, the value $x$ approaches is $\\,?$
**2)** In $\\lim_{x \\to 6}(x - 2) = 4$, the limit value $L$ is $\\,?$
**3)** In $\\lim_{t \\to -3}(2t) = -6$, the limit value $L$ is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '-6'],
          hint1: 'The number under the arrow is where the input goes.',
          hint2: 'The number after the equals sign is the limit value $L$.',
          hint3: 'For $\\lim_{t \\to -3}(2t)$, the output approaches $2(-3) = -6$.',
          explanation: '1) $x$ approaches $6$.  2) $L = 4$.  3) $L = -6$. The input-target and the limit value are read off different positions in the symbol.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'limit-notation-terminology',
    sections: [
      {
        id: 'lnt3-intro',
        type: 'text' as const,
        content: `# 🎯 Limit Notation and Terminology

**Part 3 of 7 — One-Sided Limits**

---

> 🔑 **Two directions of approach:** You can approach $a$ from the **left** (smaller values) or from the **right** (larger values). When the two directions might disagree, we use **one-sided limit** notation to keep them separate.`,
      },
      {
        id: 'lnt3-notation',
        type: 'text' as const,
        content: `## The Left and Right Notation

A tiny superscript on $a$ records the direction of approach:

| Notation | Name | Approach direction | Read as |
|----------|------|--------------------|---------|
| $\\lim_{x \\to a^-} f(x)$ | left-hand limit | from values **less than** $a$ | "$x$ approaches $a$ from the left" |
| $\\lim_{x \\to a^+} f(x)$ | right-hand limit | from values **greater than** $a$ | "$x$ approaches $a$ from the right" |

> 💡 **Memory hook:** On the number line, *left* is the side with *smaller* numbers, and the minus sign $a^-$ looks like it's pulling $a$ down/lower. *Right* uses the plus sign $a^+$, the side with *larger* numbers.

### Why we need them

For a smooth function like $f(x) = x+1$, both sides agree — approaching $2$ from the left or the right, the outputs head to $3$ either way. But for a function with a **jump**, the two sides can land on different values, and one-sided notation lets us say so precisely.`,
      },
      {
        id: 'lnt3-check-direction',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\lim_{x \\to 4^-} f(x)$ describes approaching $x = 4$ from:',
              options: [
                'the left, using values just below $4$ (like $3.99$)',
                'the right, using values just above $4$ (like $4.01$)',
                'both sides at once',
                'the value $-4$',
              ],
              correctAnswer: 0,
              explanation: 'The minus superscript means the *left* side: inputs slightly less than $4$, such as $3.9, 3.99, 3.999$.',
            },
            {
              question: 'Which notation means "approach $0$ from the right (positive side)"?',
              options: [
                '$\\lim_{x \\to 0^+} f(x)$',
                '$\\lim_{x \\to 0^-} f(x)$',
                '$\\lim_{x \\to +0} f(x)$',
                '$\\lim_{x \\to \\infty} f(x)$',
              ],
              correctAnswer: 0,
              explanation: 'The plus superscript ($0^+$) marks the right-hand side — inputs slightly greater than $0$, like $0.1, 0.01, 0.001$.',
            },
          ],
        },
      },
      {
        id: 'lnt3-jump',
        type: 'text' as const,
        content: `## A Worked Jump

A piecewise function shows why both notations earn their keep:

$$f(x) = \\begin{cases} x + 1 & x < 2 \\\\ x + 4 & x \\ge 2 \\end{cases}$$

**From the left** ($x \\to 2^-$) we use the top piece, $x+1$:

$$\\lim_{x \\to 2^-} f(x) = 2 + 1 = 3$$

**From the right** ($x \\to 2^+$) we use the bottom piece, $x+4$:

$$\\lim_{x \\to 2^+} f(x) = 2 + 4 = 6$$

The left side heads to $3$, the right side heads to $6$ — a **jump** of $3$ units at $x = 2$.

> ⚠️ Reading the right *value* of a piecewise function means picking the right *piece*: use the line that's valid for the inputs you're approaching *through*, on that side of $a$.`,
      },
      {
        id: 'lnt3-dropdown-piecewise',
        type: 'dropdown-select' as const,
        content: `**Pick the Side** 🔽

Use $\\displaystyle f(x) = \\begin{cases} 3x & x < 1 \\\\ x + 5 & x \\ge 1 \\end{cases}$ to fill in each one-sided limit.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x \\to 1^-} f(x)$ uses the piece $3x$, giving:', options: ['$3$', '$6$', '$1$', '$8$'] },
            { label: '$\\lim_{x \\to 1^+} f(x)$ uses the piece $x+5$, giving:', options: ['$6$', '$3$', '$5$', '$1$'] },
            { label: 'Because the two sides differ, at $x=1$ the graph has a:', options: ['jump', 'hole only', 'flat line', 'vertical asymptote'] },
          ],
          correctAnswers: ['$3$', '$6$', 'jump'],
          hint1: 'For $x \\to 1^-$ use the $x<1$ piece: $3x = 3(1) = 3$.',
          hint2: 'For $x \\to 1^+$ use the $x \\ge 1$ piece: $x+5 = 1+5 = 6$.',
          hint3: 'Left limit $3$ and right limit $6$ disagree, so the graph leaps from $3$ to $6$ — a jump.',
          explanation: 'Left side $\\to 3$ (from $3x$), right side $\\to 6$ (from $x+5$). Two different one-sided limits = a jump discontinuity at $x=1$.',
        },
      },
      {
        id: 'lnt3-recap',
        type: 'text' as const,
        content: `## A Reliable Two-Step Recipe

For a one-sided limit of a piecewise function, do exactly two things:

1. **Choose the piece** that is valid on the side you're approaching from ($a^-$ → the rule for $x$ below $a$; $a^+$ → the rule for $x$ above $a$).
2. **Substitute** the target $a$ into that piece.

> 💡 The inequality at the *boundary* ($<$ vs. $\\le$) tells you which piece owns the point itself, but for a one-sided **limit** you only care which piece governs the side you're sliding in from. Try the recipe on a new function below.`,
      },
      {
        id: 'lnt3-input-onesided',
        type: 'input-boxes' as const,
        content: `**Evaluate One-Sided Limits** 🧮

For $\\displaystyle f(x) = \\begin{cases} x - 3 & x < 0 \\\\ 2x + 1 & x \\ge 0 \\end{cases}$ find each value.

**1)** $\\lim_{x \\to 0^-} f(x) = \\,?$
**2)** $\\lim_{x \\to 0^+} f(x) = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-3', '1'],
          hint1: 'Left of $0$ ($x<0$) uses $x-3$, so substitute the target: $0 - 3$.',
          hint2: 'Right of $0$ ($x \\ge 0$) uses $2x+1$, so substitute the target: $2(0)+1$.',
          hint3: 'Left: $0-3 = -3$. Right: $2(0)+1 = 1$.',
          explanation: '1) Left limit uses $x-3$: $0-3 = -3$.  2) Right limit uses $2x+1$: $2(0)+1 = 1$. The sides differ, so this is a jump.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'limit-notation-terminology',
    sections: [
      {
        id: 'lnt4-intro',
        type: 'text' as const,
        content: `# 🎯 Limit Notation and Terminology

**Part 4 of 7 — When Does the (Two-Sided) Limit Exist?**

---

> 🔑 **The existence rule:** The two-sided limit $\\displaystyle\\lim_{x \\to a} f(x)$ exists **only when** the left-hand and right-hand limits agree:
> $$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L \\;\\Longrightarrow\\; \\lim_{x \\to a} f(x) = L$$`,
      },
      {
        id: 'lnt4-rule',
        type: 'text' as const,
        content: `## The Matching Rule

Think of it as a vote between the two sides:

| Left limit | Right limit | Two-sided limit $\\lim_{x \\to a} f(x)$ |
|------------|-------------|----------------------------------------|
| $L$ | $L$ (same) | **exists**, equals $L$ |
| $3$ | $6$ (different) | **does not exist (DNE)** |
| $L$ | grows without bound | **does not exist** |

In words: the two-sided limit exists **iff** both one-sided limits exist *and* are **equal**. If they disagree — or either one fails — the two-sided limit is said to **not exist**, abbreviated **DNE**.

### Example where it exists

For $f(x) = x + 1$, at $x = 2$ both sides head to $3$:

$$\\lim_{x \\to 2^-} f(x) = 3 = \\lim_{x \\to 2^+} f(x) \\;\\Longrightarrow\\; \\lim_{x \\to 2} f(x) = 3$$

### Example where it doesn't

For the jump from Part 3, the left side gave $3$ and the right side gave $6$:

$$3 \\ne 6 \\;\\Longrightarrow\\; \\lim_{x \\to 2} f(x) \\text{ DNE}$$

> 💡 Again, the value $f(2)$ itself is **irrelevant** to whether the limit exists. Existence depends *only* on the two approaching sides matching.`,
      },
      {
        id: 'lnt4-check-exist',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $\\lim_{x \\to a^-} f(x) = 5$ and $\\lim_{x \\to a^+} f(x) = 5$, then $\\lim_{x \\to a} f(x)$ is:',
              options: ['$5$', 'DNE', '$0$', '$10$'],
              correctAnswer: 0,
              explanation: 'Both one-sided limits exist and are equal ($5 = 5$), so the two-sided limit exists and equals $5$.',
            },
            {
              question: 'If $\\lim_{x \\to a^-} f(x) = 2$ and $\\lim_{x \\to a^+} f(x) = 8$, then $\\lim_{x \\to a} f(x)$:',
              options: [
                'does not exist (DNE)',
                'equals $10$',
                'equals $5$',
                'equals $2$',
              ],
              correctAnswer: 0,
              explanation: 'The sides disagree ($2 \\ne 8$), so the two-sided limit does not exist. We never average or add the two sides.',
            },
          ],
        },
      },
      {
        id: 'lnt4-graph-read',
        type: 'text' as const,
        content: `## Reading Existence off a Graph

On a graph, trace the curve toward $x = a$ with your finger from each side:

- If both fingers arrive at the **same height**, the limit exists and equals that height.
- If they arrive at **different heights** (a jump), the limit DNE.
- An **open circle** (hole) at $(a, L)$ does **not** block the limit — the curve still *approaches* $L$. A separate **filled dot** elsewhere only changes $f(a)$, not the limit.

### Mini-scenario

Suppose a graph near $x = 1$ shows the curve approaching height $4$ from both sides, with an **open hole** at $(1, 4)$ and a **filled dot** at $(1, 9)$.

- $\\lim_{x \\to 1^-} f(x) = 4$ and $\\lim_{x \\to 1^+} f(x) = 4$, so $\\lim_{x \\to 1} f(x) = 4$.
- But $f(1) = 9$ (the filled dot).

> ⚠️ The limit ($4$) and the function value ($9$) can both be perfectly well-defined and yet **disagree**. This is exactly the situation Part 6 will name a *removable discontinuity*.`,
      },
      {
        id: 'lnt4-dropdown-graph',
        type: 'dropdown-select' as const,
        content: `**Graph Reading** 🔽

A graph near $x = 3$ has the curve approaching height $2$ from the **left**, height $2$ from the **right**, an **open hole** at $(3, 2)$, and a **filled dot** at $(3, 7)$.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x \\to 3^-} f(x) =$', options: ['$2$', '$7$', 'DNE', '$3$'] },
            { label: '$\\lim_{x \\to 3} f(x) =$', options: ['$2$', '$7$', 'DNE', '$3$'] },
            { label: '$f(3) =$', options: ['$7$', '$2$', 'DNE', '$3$'] },
          ],
          correctAnswers: ['$2$', '$2$', '$7$'],
          hint1: 'The left-side approach height is $2$ (the open hole marks the approached value, not a blocker).',
          hint2: 'Both sides approach $2$, so the two-sided limit is $2$ — the hole does not change it.',
          hint3: 'The actual function value $f(3)$ is the filled dot, located at height $7$.',
          explanation: 'Both sides approach $2$, so $\\lim_{x\\to3} f(x) = 2$. The filled dot at $(3,7)$ gives $f(3) = 7$. Limit and value differ — and that is allowed.',
        },
      },
      {
        id: 'lnt4-existence-summary',
        type: 'text' as const,
        content: `## Existence in One Question

To decide whether $\\lim_{x \\to a} f(x)$ exists, you only ever ask:

> *Do the left and right limits land on the **same finite number**?*

If **yes**, the limit exists (and equals that number). If **no** — they differ, or one runs off to $\\pm\\infty$ — it's **DNE**. Notice what is **not** on the checklist: the value $f(a)$. It plays no role in *existence* whatsoever.`,
      },
      {
        id: 'lnt4-input-exist',
        type: 'input-boxes' as const,
        content: `**Decide Existence** 🧮

Enter **1** if the two-sided limit $\\lim_{x \\to a} f(x)$ exists, or **0** if it does not exist (DNE).

**1)** Left limit $= 5$, right limit $= 5$. Exists? (1 or 0)
**2)** Left limit $= -1$, right limit $= 4$. Exists? (1 or 0)
**3)** Left limit $= 0$, right limit $= 0$, but $f(a)$ is undefined. Exists? (1 or 0)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '0', '1'],
          hint1: 'The limit exists exactly when the two one-sided limits are equal.',
          hint2: 'For #2, $-1 \\ne 4$, so the sides disagree.',
          hint3: 'For #3, both sides equal $0$, so the limit exists — being undefined *at* $a$ does not matter.',
          explanation: '1) $5=5$ → exists (1).  2) $-1 \\ne 4$ → DNE (0).  3) $0 = 0$ → exists (1); the undefined value at $a$ is irrelevant to the limit.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'limit-notation-terminology',
    sections: [
      {
        id: 'lnt5-intro',
        type: 'text' as const,
        content: `# 🎯 Limit Notation and Terminology

**Part 5 of 7 — Infinite Limits & Limits at Infinity**

---

> 🔑 **Two new symbols, one new idea:** The symbol $\\infty$ shows up in *two different roles* — as the **output** that grows without bound ($\\lim f(x) = \\infty$) and as the **input** that runs off to the far end of the $x$-axis ($\\lim_{x \\to \\infty} f(x)$). Knowing which is which is pure terminology.`,
      },
      {
        id: 'lnt5-infinite',
        type: 'text' as const,
        content: `## Infinite Limits (output grows without bound)

When the outputs increase (or decrease) without bound as $x \\to a$, we write $\\infty$ (or $-\\infty$) for the limit:

$$\\lim_{x \\to a} f(x) = \\infty \\qquad\\text{means the outputs grow larger than any number.}$$

The classic example is $f(x) = \\dfrac{1}{x^2}$ at $x = 0$: as $x$ nears $0$, $\\dfrac{1}{x^2}$ blows up.

$$\\lim_{x \\to 0} \\frac{1}{x^2} = \\infty$$

This signals a **vertical asymptote** at $x = 0$.

> ⚠️ **Terminology subtlety:** Writing $= \\infty$ is a *description of how the limit fails*, not a real number. We still say such a limit **"does not exist"** in the strict sense — $\\infty$ just records *why* (it grows without bound) rather than oscillating or jumping. On the AP exam, $= \\infty$ and "DNE (unbounded)" describe the same behavior.`,
      },
      {
        id: 'lnt5-check-infinite',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\lim_{x \\to a} f(x) = \\infty$ tells you that as $x \\to a$, the **outputs**:',
              options: [
                'grow without bound (larger than any number)',
                'approach the finite value $\\infty$',
                'approach $0$',
                'approach $a$',
              ],
              correctAnswer: 0,
              explanation: 'The symbol $\\infty$ here describes outputs increasing past every bound — it is not a finite target value.',
            },
            {
              question: 'A limit of $\\infty$ at $x = a$ signals which graph feature?',
              options: [
                'a vertical asymptote at $x = a$',
                'a horizontal asymptote',
                'a removable hole',
                'a jump of finite size',
              ],
              correctAnswer: 0,
              explanation: 'Outputs blowing up as $x \\to a$ means the graph shoots up the vertical line $x = a$ — a vertical asymptote.',
            },
          ],
        },
      },
      {
        id: 'lnt5-at-infinity',
        type: 'text' as const,
        content: `## Limits at Infinity (input runs to the far ends)

Now $\\infty$ moves *under* the limit, describing the **input** running toward the far right (or $-\\infty$ for the far left) of the $x$-axis:

$$\\lim_{x \\to \\infty} f(x) = L \\qquad\\text{asks what height } f(x) \\text{ settles toward as } x \\text{ grows huge.}$$

The classic example is $f(x) = \\dfrac{1}{x}$: as $x$ grows enormous, $\\dfrac{1}{x}$ shrinks toward $0$.

$$\\lim_{x \\to \\infty} \\frac{1}{x} = 0$$

A *finite* limit at infinity signals a **horizontal asymptote** — here the line $y = 0$.

| Symbol | $\\infty$ is the… | Graph feature it hints at |
|--------|------------------|---------------------------|
| $\\lim_{x \\to a} f(x) = \\infty$ | **output** (grows) | **vertical** asymptote at $x=a$ |
| $\\lim_{x \\to \\infty} f(x) = L$ | **input** (runs right) | **horizontal** asymptote at $y=L$ |

> 💡 Quick test: if $\\infty$ sits **under** $\\lim$, it's the *input* (limit *at* infinity → horizontal asymptote). If $\\infty$ sits **after the $=$**, it's the *output* (infinite limit → vertical asymptote).`,
      },
      {
        id: 'lnt5-dropdown-infinity',
        type: 'dropdown-select' as const,
        content: `**Vertical or Horizontal?** 🔽

For each limit statement, choose what the $\\infty$ represents and the asymptote it suggests.`,
        exercise: {
          dropdowns: [
            { label: 'In $\\lim_{x \\to 0} \\frac{1}{x^2} = \\infty$, the $\\infty$ is the:', options: ['output', 'input', 'slope', 'domain'] },
            { label: '$\\lim_{x \\to 0} \\frac{1}{x^2} = \\infty$ suggests a:', options: ['vertical asymptote', 'horizontal asymptote', 'hole', 'jump'] },
            { label: '$\\lim_{x \\to \\infty} \\frac{1}{x} = 0$ suggests a:', options: ['horizontal asymptote', 'vertical asymptote', 'hole', 'jump'] },
          ],
          correctAnswers: ['output', 'vertical asymptote', 'horizontal asymptote'],
          hint1: 'The $\\infty$ in $= \\infty$ sits after the equals sign, so it describes the output.',
          hint2: 'Outputs growing without bound at a fixed $x$ = a vertical asymptote.',
          hint3: 'A finite limit as the input $\\to \\infty$ = a horizontal asymptote at that height.',
          explanation: '$= \\infty$ → output grows → vertical asymptote at $x=0$. $\\lim_{x\\to\\infty}\\frac1x = 0$ → input runs right, output settles at $0$ → horizontal asymptote $y=0$.',
        },
      },
      {
        id: 'lnt5-where-is-infinity',
        type: 'text' as const,
        content: `## One Glance Decides It

You can classify any of these limits in a single glance — just locate the $\\infty$:

> 🔑 **$\\infty$ after the $=$** → the *output* explodes → **vertical** asymptote.
> **$\\infty$ under the $\\lim$** → the *input* runs to the edge → **horizontal** asymptote (when the output settles on a finite number).

Keep that one-line test handy for the drill below.`,
      },
      {
        id: 'lnt5-input-infinity',
        type: 'input-boxes' as const,
        content: `**Read the Behavior** 🧮

Enter **1** for *vertical asymptote* or **2** for *horizontal asymptote*, based on each statement.

**1)** $\\lim_{x \\to 5} \\frac{1}{(x-5)^2} = \\infty$ → (1 = vertical, 2 = horizontal)
**2)** $\\lim_{x \\to \\infty} \\frac{3x}{x+1} = 3$ → (1 = vertical, 2 = horizontal)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '2'],
          hint1: 'If $\\infty$ is the output ($= \\infty$), the feature is vertical.',
          hint2: 'If $\\infty$ is the input (under $\\lim$) and the output is finite, the feature is horizontal.',
          hint3: 'Statement 1 has $=\\infty$ (vertical, answer 1). Statement 2 has $x\\to\\infty$ with finite limit $3$ (horizontal, answer 2).',
          explanation: '1) Output blows up at $x=5$ → vertical asymptote (1).  2) Input runs to $\\infty$, output settles at $3$ → horizontal asymptote $y=3$ (2).',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'limit-notation-terminology',
    sections: [
      {
        id: 'lnt6-intro',
        type: 'text' as const,
        content: `# 🎯 Limit Notation and Terminology

**Part 6 of 7 — Continuity & the Vocabulary of Limits**

---

> 🔑 **The payoff word:** A function is **continuous** at $x = a$ when "no surprises" happen there — the limit exists, the value exists, and the two are equal. Every discontinuity is just one of those three conditions failing.`,
      },
      {
        id: 'lnt6-continuity',
        type: 'text' as const,
        content: `## The Definition of Continuity at a Point

A function $f$ is **continuous at $x = a$** when **all three** of these hold:

1. $f(a)$ is **defined** (the point exists),
2. $\\lim_{x \\to a} f(x)$ **exists** (both sides agree), and
3. $\\lim_{x \\to a} f(x) = f(a)$ (the limit *matches* the value).

In one sentence: *the limit exists, the value exists, and they agree.* Visually, you can draw the graph through $x = a$ **without lifting your pencil**.

> 💡 Conditions 1 and 2 can each succeed on their own, but continuity needs the *third* condition too — the limit and the value must actually be the **same number**.`,
      },
      {
        id: 'lnt6-check-continuity',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which set of facts makes $f$ continuous at $x = a$?',
              options: [
                '$f(a) = 4$ and $\\lim_{x \\to a} f(x) = 4$',
                '$f(a) = 4$ and $\\lim_{x \\to a} f(x) = 9$',
                '$f(a)$ undefined and $\\lim_{x \\to a} f(x) = 4$',
                '$\\lim_{x \\to a} f(x)$ DNE',
              ],
              correctAnswer: 0,
              explanation: 'Continuity needs the value and the limit to both exist *and* be equal. Only the first option has $f(a) = \\lim = 4$.',
            },
            {
              question: 'If $\\lim_{x \\to a} f(x) = 6$ but $f(a) = 1$, then $f$ at $x = a$ is:',
              options: [
                'discontinuous (limit and value disagree)',
                'continuous',
                'undefined',
                'increasing',
              ],
              correctAnswer: 0,
              explanation: 'The limit ($6$) and value ($1$) differ, so condition 3 fails — the function is discontinuous at $a$.',
            },
          ],
        },
      },
      {
        id: 'lnt6-types',
        type: 'text' as const,
        content: `## Naming the Discontinuities

When continuity fails, the *reason* gives the discontinuity its name:

| Type | What happens | Limit picture |
|------|--------------|---------------|
| **Removable** (hole) | limit exists, but value is missing or wrong | open circle; could "fill the hole" |
| **Jump** | left and right limits exist but **differ** | curve leaps to a new height |
| **Infinite** | a one-sided (or both) limit is $\\pm\\infty$ | vertical asymptote |

### Matching the terms

- A graph with an **open hole** at $(2, 4)$ and value $f(2)=4$ missing → **removable**: $\\lim$ exists, value doesn't.
- A graph with left limit $3$, right limit $6$ → **jump**: one-sided limits disagree.
- A graph shooting up at $x = 0$ → **infinite**: outputs blow up.

> ⚠️ "Removable" does **not** mean unimportant — it means you *could* redefine the single point to restore continuity. The jump and infinite types can't be fixed by changing one point.`,
      },
      {
        id: 'lnt6-dropdown-types',
        type: 'dropdown-select' as const,
        content: `**Name That Discontinuity** 🔽

Match each description to the correct term.`,
        exercise: {
          dropdowns: [
            { label: 'Left limit $= 2$, right limit $= 7$ (both finite):', options: ['jump', 'removable', 'infinite', 'continuous'] },
            { label: 'Limit exists and equals $5$, but $f(a)$ is undefined:', options: ['removable', 'jump', 'infinite', 'continuous'] },
            { label: 'Outputs grow to $+\\infty$ as $x \\to a$:', options: ['infinite', 'removable', 'jump', 'continuous'] },
          ],
          correctAnswers: ['jump', 'removable', 'infinite'],
          hint1: 'Two finite but unequal one-sided limits = a leap.',
          hint2: 'A working limit with a missing/wrong single value = a fixable hole.',
          hint3: 'Outputs blowing up = the asymptote-type discontinuity.',
          explanation: 'Unequal finite sides → jump. Limit exists but value missing → removable (hole). Outputs $\\to \\infty$ → infinite discontinuity (vertical asymptote).',
        },
      },
      {
        id: 'lnt6-back-to-conditions',
        type: 'text' as const,
        content: `## Back to the Three Conditions

Every discontinuity you just named is one of the **three continuity conditions** failing:

| Failing condition | Resulting discontinuity |
|-------------------|-------------------------|
| value $f(a)$ missing (but limit fine) | **removable** |
| limit doesn't exist (sides disagree) | **jump** |
| limit doesn't exist (output unbounded) | **infinite** |

So checking continuity is just checking those three boxes in order. Let's verify a case where all three pass.`,
      },
      {
        id: 'lnt6-input-glossary',
        type: 'input-boxes' as const,
        content: `**Continuity Conditions** 🧮

Continuity at $x=a$ needs three conditions. Using $f$ with $f(a) = 4$ and $\\lim_{x \\to a} f(x) = 4$:

**1)** Is $f(a)$ defined? Enter **1** for yes, **0** for no.
**2)** Does $\\lim_{x \\to a} f(x)$ exist? Enter **1** for yes, **0** for no.
**3)** Is $f$ continuous at $a$? Enter **1** for yes, **0** for no.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1', '1'],
          hint1: '$f(a) = 4$ is a real number, so the value is defined.',
          hint2: 'A single stated limit value of $4$ means the limit exists.',
          hint3: 'Value $= 4$, limit $= 4$, and they match — all three conditions hold.',
          explanation: 'All three conditions pass: $f(a)=4$ is defined (1), the limit exists (1), and limit $=$ value $= 4$, so $f$ is continuous at $a$ (1).',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'limit-notation-terminology',
    sections: [
      {
        id: 'lnt7-intro',
        type: 'text' as const,
        content: `# 🎯 Limit Notation and Terminology

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) state what a limit *is*, (2) read and write $\\lim$ notation, (3) handle one-sided limits, (4) decide when a two-sided limit exists, (5) interpret $\\infty$ in both roles, and (6) speak the language of continuity. Time to combine it all.`,
      },
      {
        id: 'lnt7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Notation / term | Meaning |
|-----------------|---------|
| $\\lim_{x \\to a} f(x) = L$ | $f(x)$ approaches $L$ as $x$ approaches $a$ |
| $\\lim_{x \\to a^-}$ / $\\lim_{x \\to a^+}$ | approach from the left / right |
| limit **exists** | left limit $=$ right limit (a finite number) |
| **DNE** | sides disagree, oscillate, or grow unbounded |
| $\\lim_{x \\to a} f(x) = \\infty$ | output grows without bound → vertical asymptote |
| $\\lim_{x \\to \\infty} f(x) = L$ | input runs to infinity, output $\\to L$ → horizontal asymptote |
| **continuous** at $a$ | $f(a)$ defined, limit exists, and they're equal |
| removable / jump / infinite | the three flavors of discontinuity |

> 🔑 The single most-tested fact: **the limit is about the *approach*, independent of the value at the point.** Almost every tricky limit question is a fresh disguise of that one idea.`,
      },
      {
        id: 'lnt7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Given $\\lim_{x \\to 3^-} f(x) = 8$, $\\lim_{x \\to 3^+} f(x) = 8$, and $f(3) = 1$, what is $\\lim_{x \\to 3} f(x)$?',
              options: ['$8$', '$1$', 'DNE', '$9$'],
              correctAnswer: 0,
              explanation: 'Both one-sided limits equal $8$, so the two-sided limit is $8$. The value $f(3)=1$ is irrelevant to the limit (this is a removable discontinuity).',
            },
            {
              question: 'Which statement describes a **horizontal** asymptote?',
              options: [
                '$\\lim_{x \\to \\infty} f(x) = 2$',
                '$\\lim_{x \\to 2} f(x) = \\infty$',
                '$\\lim_{x \\to 2^-} f(x) = 5$',
                '$f(2) = 2$',
              ],
              correctAnswer: 0,
              explanation: 'A finite limit as the input runs to $\\infty$ ($\\lim_{x\\to\\infty} f(x)=2$) means the graph levels off at $y=2$ — a horizontal asymptote.',
            },
            {
              question: 'A function has $\\lim_{x \\to a} f(x) = 4$ but $f(a)$ is undefined. This is a:',
              options: [
                'removable discontinuity',
                'jump discontinuity',
                'infinite discontinuity',
                'continuous point',
              ],
              correctAnswer: 0,
              explanation: 'The limit exists ($4$) but the value is missing — a hole that could be "filled," i.e., a removable discontinuity.',
            },
          ],
        },
      },
      {
        id: 'lnt7-bridge-drill',
        type: 'text' as const,
        content: `## From Concepts to Computation

You just classified limits in words; now apply the **two-step piecewise recipe** from Part 3 (pick the side's piece, substitute the target) together with the **existence rule** from Part 4 (sides must match). The next drill asks you to do all three in sequence on one function.`,
      },
      {
        id: 'lnt7-input-mixed',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

For $\\displaystyle f(x) = \\begin{cases} x + 2 & x < 1 \\\\ 4x & x \\ge 1 \\end{cases}$ answer each.

**1)** $\\lim_{x \\to 1^-} f(x) = \\,?$
**2)** $\\lim_{x \\to 1^+} f(x) = \\,?$
**3)** Does $\\lim_{x \\to 1} f(x)$ exist? Enter **1** for yes, **0** for no.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '4', '0'],
          hint1: 'Left of $1$ uses $x+2$: substitute $1$ to get $1+2$.',
          hint2: 'Right of $1$ uses $4x$: substitute $1$ to get $4(1)$.',
          hint3: 'Left $\\to 3$, right $\\to 4$; since $3 \\ne 4$, the two-sided limit does not exist.',
          explanation: '1) $1+2 = 3$.  2) $4(1) = 4$.  3) $3 \\ne 4$, so the two-sided limit DNE (0). This is a jump discontinuity at $x=1$.',
        },
      },
      {
        id: 'lnt7-vocab-checkpoint',
        type: 'text' as const,
        content: `## Vocabulary Checkpoint

Before the exit quiz, one quick sweep through the **terminology**: reading off a limit value, deciding existence from matching sides, and naming an unbounded one-sided limit. If any of these still feel shaky, revisit the Quick Reference table above.`,
      },
      {
        id: 'lnt7-dropdown-mixed',
        type: 'dropdown-select' as const,
        content: `**Terminology Round-Up** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'In $\\lim_{x \\to 4} f(x) = 9$, the limit value is:', options: ['$9$', '$4$', '$\\infty$', '$0$'] },
            { label: 'Left limit $= 5$, right limit $= 5$ means the two-sided limit:', options: ['exists', 'is $\\infty$', 'DNE', 'is undefined'] },
            { label: '$\\lim_{x \\to 0^+}\\frac{1}{x} = \\infty$ describes a one-sided limit that is:', options: ['unbounded (output grows)', 'equal to $0$', 'a horizontal asymptote', 'continuous'] },
          ],
          correctAnswers: ['$9$', 'exists', 'unbounded (output grows)'],
          hint1: 'The limit value is the number after the equals sign.',
          hint2: 'Equal one-sided limits guarantee the two-sided limit exists.',
          hint3: '$= \\infty$ means the output grows without bound from that side.',
          explanation: 'Limit value $= 9$. Matching sides ($5=5$) → the limit exists. $\\lim_{x\\to0^+}\\frac1x=\\infty$ means the right-side output grows without bound.',
        },
      },
      {
        id: 'lnt7-exit-lead',
        type: 'text' as const,
        content: `## You're Ready

That's the entire vocabulary of limits: notation, one-sided approaches, existence, the two roles of $\\infty$, and continuity. Three questions stand between you and mastery — read each symbol carefully and remember the one big idea: *the limit is the approach, not the value at the point.*`,
      },
      {
        id: 'lnt7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'How is $\\lim_{x \\to 2} f(x) = 5$ read aloud?',
              options: [
                'the limit of $f(x)$ as $x$ approaches $2$ is $5$',
                'the limit of $f(x)$ as $x$ approaches $5$ is $2$',
                '$f$ of $2$ equals $5$',
                'the limit of $5$ as $x$ approaches $2$',
              ],
              correctAnswer: 0,
              explanation: 'Read left to right: "the limit, as $x$ approaches $2$, of $f(x)$, equals $5$." The input target is $2$; the limit value is $5$.',
            },
            {
              question: 'The two-sided limit $\\lim_{x \\to a} f(x)$ exists exactly when:',
              options: [
                'the left and right limits are equal',
                '$f(a)$ is defined',
                'the function is increasing',
                'the right limit is larger than the left',
              ],
              correctAnswer: 0,
              explanation: 'Existence of the two-sided limit requires both one-sided limits to exist *and* be equal — independent of $f(a)$.',
            },
            {
              question: 'A function has limit $4$ at $x = a$ but $f(a) = 4$ as well, with no jumps or asymptotes. At $x=a$ the function is:',
              options: [
                'continuous',
                'jump-discontinuous',
                'infinitely discontinuous',
                'undefined',
              ],
              correctAnswer: 0,
              explanation: 'Value defined, limit exists, and limit $=$ value ($4=4$): all three continuity conditions hold, so $f$ is continuous at $a$.',
            },
          ],
        },
      },
    ],
  },
]
