import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — One-Sided Limits in Detail (AP Calculus AB).
 * Registry key / DB Topic.slug: 'one-sided-limits-in-detail'.
 * 7 parts, gold-standard structure: notation & meaning of left/right limits →
 * reading one-sided limits from graphs → the existence theorem (two-sided limit
 * exists iff both one-sided limits agree) → evaluating one-sided limits of
 * piecewise functions algebraically → infinite one-sided limits & vertical
 * asymptotes → one-sided limits and continuity at a point → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every limit value, piecewise evaluation, and sign analysis was verified before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'one-sided-limits-in-detail',
    sections: [
      {
        id: 'osl1-intro',
        type: 'text' as const,
        content: `# ↔️ One-Sided Limits in Detail

**Part 1 of 7 — Approaching From One Side**

---

### Topics in This Part

| Section |
|---------|
| Why One-Sided Limits Exist |
| Left-Hand and Right-Hand Notation |
| Reading the Direction From the Superscript |

> 🔑 **Key Concept:** A **one-sided limit** describes what a function's outputs approach as $x$ creeps toward a number from *only one direction* — either from the **left** (smaller $x$-values) or the **right** (larger $x$-values). They are the building blocks of every limit, continuity, and derivative idea that follows.`,
      },
      {
        id: 'osl1-why',
        type: 'text' as const,
        content: `## Why We Need One Side at a Time

A regular (two-sided) limit asks: as $x$ gets close to $a$ **from both directions**, where do the outputs head? But many functions behave *differently* on the two sides of a point — think of a jump in a tax bracket, a piecewise price schedule, or a graph with a sudden break.

When the two sides disagree, a single two-sided limit can't capture the story. We need to look **left** and **right** separately.

$$\\lim_{x \\to a^{-} } f(x) \\quad\\text{(left-hand limit)} \\qquad \\lim_{x \\to a^{+}} f(x) \\quad\\text{(right-hand limit)}$$

| Symbol | Read it as | $x$ approaches $a$ using values that are… |
|--------|------------|-------------------------------------------|
| $x \\to a^{-}$ | "$x$ approaches $a$ from the left" | **less than** $a$ (e.g. $2.9,\\ 2.99,\\ 2.999$) |
| $x \\to a^{+}$ | "$x$ approaches $a$ from the right" | **greater than** $a$ (e.g. $3.1,\\ 3.01,\\ 3.001$) |

> 💡 **Memory hook:** On the number line, the **minus** sign $(-)$ points to the **negative / smaller** side (the left), and the **plus** sign $(+)$ points to the **larger** side (the right). The superscript tells you which side you are sneaking up on.`,
      },
      {
        id: 'osl1-direction-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the expression $\\displaystyle\\lim_{x \\to 5^{-}} f(x)$, the values of $x$ being used are:',
              options: [
                'slightly less than $5$ (like $4.9, 4.99$)',
                'slightly more than $5$ (like $5.1, 5.01$)',
                'exactly equal to $5$',
                'both sides of $5$ at once',
              ],
              correctAnswer: 0,
              explanation: 'The minus superscript means "from the left," so $x$ uses values just below $5$: $4.9, 4.99, 4.999, \\dots$',
            },
            {
              question: 'Which notation means "the limit of $g(x)$ as $x$ approaches $-2$ from the right"?',
              options: [
                '$\\displaystyle\\lim_{x \\to -2^{+}} g(x)$',
                '$\\displaystyle\\lim_{x \\to -2^{-}} g(x)$',
                '$\\displaystyle\\lim_{x \\to 2^{+}} g(x)$',
                '$\\displaystyle\\lim_{x \\to -2} g(x)$',
              ],
              correctAnswer: 0,
              explanation: '"From the right" uses larger $x$-values, so the superscript is $+$. The point is $-2$, giving $x \\to -2^{+}$. (The $+$ sits on the $-2$, not on the number $2$.)',
            },
          ],
        },
      },
      {
        id: 'osl1-numbers',
        type: 'text' as const,
        content: `## Estimating a One-Sided Limit From a Table

To estimate $\\displaystyle\\lim_{x \\to 3^{+}} f(x)$ for $f(x) = \\dfrac{x^2 - 9}{x - 3}$, plug in $x$-values that approach $3$ **from above** and watch the outputs.

Note $\\dfrac{x^2-9}{x-3} = \\dfrac{(x-3)(x+3)}{x-3} = x+3$ for $x \\ne 3$, so the table should march toward $3 + 3 = 6$:

| $x$ | $3.1$ | $3.01$ | $3.001$ | $\\to 3^{+}$ |
|-----|-------|--------|---------|-------------|
| $f(x)$ | $6.1$ | $6.01$ | $6.001$ | $\\to 6$ |

The right-hand limit is $6$. Approaching from the **left** ($2.9, 2.99, \\dots$) gives $5.9, 5.99, \\dots \\to 6$ as well — here both sides agree, even though $f(3)$ itself is *undefined*.

> ⚠️ **Crucial:** A one-sided limit is about the **trend** of the outputs, **not** the value $f(a)$. The function need not even be defined at $a$. We care only about what the outputs *approach*.`,
      },
      {
        id: 'osl1-table-input',
        type: 'input-boxes' as const,
        content: `**Estimate From a Table** 🧮

For $f(x) = \\dfrac{x^2 - 4}{x - 2}$ (which simplifies to $x + 2$ for $x \\ne 2$), fill in the missing outputs and read off the right-hand limit.

**1)** $f(2.1) = \\,?$  *(one decimal place)*
**2)** $f(2.01) = \\,?$  *(two decimal places)*
**3)** $\\displaystyle\\lim_{x \\to 2^{+}} f(x) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4.1', '4.01', '4'],
          hint1: 'For $x \\ne 2$, $f(x) = x + 2$. So $f(2.1) = 2.1 + 2$.',
          hint2: '$f(2.01) = 2.01 + 2 = 4.01$.',
          hint3: 'As $x \\to 2^{+}$, the outputs $x+2$ march toward $2 + 2 = 4$.',
          explanation: '$f(x) = x+2$ for $x \\ne 2$. So $f(2.1)=4.1$, $f(2.01)=4.01$, and the trend approaches $4$. The right-hand limit is $4$.',
        },
      },
      {
        id: 'osl1-notation-text',
        type: 'text' as const,
        content: `## Saying It Out Loud

Translating between symbols and words is half the battle. Pin down each piece of the notation:

- The **number** under "$\\lim$" (like $a$ in $x \\to a^{-}$) is the input you're approaching.
- The **superscript** ($-$ or $+$) is the *side*.
- The whole expression evaluates to the **height the outputs approach** — a $y$-value (or $\\pm\\infty$, or "DNE").

> 💡 "$\\lim_{x \\to 7^{+}} f(x) = 4$" reads: *"as $x$ approaches $7$ from the right, $f(x)$ approaches $4$."* The answer to a one-sided limit is an **output**, never an $x$-value.`,
      },
      {
        id: 'osl1-notation-dropdown',
        type: 'dropdown-select' as const,
        content: `**Translate the Notation** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'In $\\lim_{x \\to 7^{+}} f(x)$, $x$ approaches $7$ from the…', options: ['right', 'left', 'both sides'] },
            { label: 'The answer to a one-sided limit is a…', options: ['$y$-value (output)', '$x$-value (input)', 'slope'] },
            { label: '"From the left of $-4$" is written…', options: ['$x \\to -4^{-}$', '$x \\to -4^{+}$', '$x \\to 4^{-}$'] },
          ],
          correctAnswers: ['right', '$y$-value (output)', '$x \\to -4^{-}$'],
          hint1: 'The $+$ superscript means larger $x$-values — the right side.',
          hint2: 'A limit reports the height the outputs head toward, i.e. a $y$-value.',
          hint3: '"From the left" uses smaller values, so the superscript is $-$, attached to $-4$.',
          explanation: 'The $+$ superscript = from the right; a limit returns an output ($y$-value); and "from the left of $-4$" is $x \\to -4^{-}$.',
        },
      },
      {
        id: 'osl1-wrap',
        type: 'text' as const,
        content: `## What You Can Do Now

- Read the superscript: $a^{-}$ = from the left (smaller $x$), $a^{+}$ = from the right (larger $x$).
- Estimate a one-sided limit from a table by approaching from the correct side.
- Separate the **value at a point** $f(a)$ from the **limit** — they are different questions.

Next up: reading both one-sided limits straight off a **graph**, where jumps and holes make the two sides visible at a glance.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'one-sided-limits-in-detail',
    sections: [
      {
        id: 'osl2-intro',
        type: 'text' as const,
        content: `# ↔️ One-Sided Limits in Detail

**Part 2 of 7 — Reading Them Off a Graph**

---

> 🔑 **The Idea:** To find $\\lim_{x \\to a^{-}} f(x)$ on a graph, place your finger on the curve to the **left** of $x = a$ and slide it rightward toward $a$ — the **height** it heads for is the left-hand limit. For $a^{+}$, start to the **right** and slide left.`,
      },
      {
        id: 'osl2-method',
        type: 'text' as const,
        content: `## The Finger-Slide Method

| Want | Where to start your finger | Which way to slide | Read off |
|------|----------------------------|--------------------|----------|
| $\\lim_{x \\to a^{-}} f(x)$ | on the curve, just **left** of $a$ | slide **right** toward $a$ | the $y$-height you approach |
| $\\lim_{x \\to a^{+}} f(x)$ | on the curve, just **right** of $a$ | slide **left** toward $a$ | the $y$-height you approach |

Two symbols decide what's happening *at* the point — but they do **not** affect the limit:

- An **open circle** $\\circ$ means the point is **not** on the graph (the function is undefined or defined elsewhere there).
- A **filled dot** $\\bullet$ marks the actual value $f(a)$.

> 💡 When following the curve toward $a$, you head for the height of the **open or filled endpoint on that side** — and a one-sided limit happily lands on an **open** circle, because the limit is about the *approach*, not whether the dot is filled.`,
      },
      {
        id: 'osl2-jump',
        type: 'text' as const,
        content: `## A Worked Graph: A Jump at $x = 1$

Picture a function with a **jump discontinuity** at $x = 1$:

- For $x < 1$, the curve is the line $y = x + 1$, ending at an **open circle** at the point $(1, 2)$.
- At $x = 1$ exactly, there is a **filled dot** at $(1, 4)$, so $f(1) = 4$.
- For $x > 1$, the curve is the horizontal line $y = 3$, starting at an **open circle** at $(1, 3)$.

Read the three quantities:

$$\\lim_{x \\to 1^{-}} f(x) = 2 \\qquad \\lim_{x \\to 1^{+}} f(x) = 3 \\qquad f(1) = 4$$

The left side heads to height $2$, the right side heads to height $3$, and the actual plotted point sits at $4$. **All three can be different** — that is exactly what a jump looks like.

> ⚠️ Don't let the filled dot at $4$ fool you into thinking either limit is $4$. The limits follow the *curves coming in*, not the lone point.`,
      },
      {
        id: 'osl2-graph-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the jump graph above: line $y = x+1$ on the left (open circle at $(1,2)$), filled dot at $(1,4)$, horizontal line $y=3$ on the right (open circle at $(1,3)$).`,
        exercise: {
          questions: [
            {
              question: 'What is $\\displaystyle\\lim_{x \\to 1^{-}} f(x)$?',
              options: ['$2$', '$3$', '$4$', 'It does not exist'],
              correctAnswer: 0,
              explanation: 'Approaching from the left follows $y = x+1$ toward $x=1$, heading for the open circle at height $2$. The left-hand limit is $2$.',
            },
            {
              question: 'What is $f(1)$ (the actual function value)?',
              options: ['$4$', '$3$', '$2$', 'It is undefined'],
              correctAnswer: 0,
              explanation: 'The filled dot at $(1,4)$ is the plotted value, so $f(1) = 4$. This is the value-at-a-point question, separate from either limit.',
            },
          ],
        },
      },
      {
        id: 'osl2-removable',
        type: 'text' as const,
        content: `## A Second Graph: A Hole at $x = -2$

Now a smooth parabola-like curve passes through $x = -2$ heading for height $5$ from **both** sides, but the point $(-2, 5)$ is an **open circle** and a stray filled dot sits at $(-2, 1)$. This is a **removable discontinuity** (a hole).

$$\\lim_{x \\to -2^{-}} f(x) = 5 \\qquad \\lim_{x \\to -2^{+}} f(x) = 5 \\qquad f(-2) = 1$$

Both one-sided limits agree on $5$ — the curve aims for the same height from each side — even though the curve is "missing" that point and the function is actually plotted at $1$.

> 💡 When both sides head to the **same** height, the two-sided limit exists and equals that height. We'll make this official in Part 3.`,
      },
      {
        id: 'osl2-graph-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Each Quantity** 🔽

Use the **hole** graph: both sides of $x = -2$ approach height $5$ (open circle at $(-2,5)$), with a filled dot at $(-2,1)$.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x \\to -2^{-}} f(x) = $', options: ['$5$', '$1$', '$-2$', 'does not exist'] },
            { label: '$\\lim_{x \\to -2^{+}} f(x) = $', options: ['$5$', '$1$', '$-2$', 'does not exist'] },
            { label: '$f(-2) = $', options: ['$1$', '$5$', '$-2$', 'undefined'] },
          ],
          correctAnswers: ['$5$', '$5$', '$1$'],
          hint1: 'Slide along the curve toward $x=-2$ from the left — it heads for height $5$ (the open circle).',
          hint2: 'From the right the curve also heads for height $5$. Both sides match.',
          hint3: 'The filled dot at $(-2, 1)$ is the actual value, so $f(-2) = 1$.',
          explanation: 'Both one-sided limits equal $5$ (the curve approaches that height from each side), while the plotted value is $f(-2) = 1$. A hole that the limit "skips over."',
        },
      },
      {
        id: 'osl2-read-text',
        type: 'text' as const,
        content: `## One More Graph to Read

Picture a graph with a break at $x = 0$:

- For $x < 0$, the curve rises along a line ending at an **open circle** at $(0, -2)$.
- For $x \\ge 0$, the curve starts at a **filled dot** at $(0, 3)$ and continues upward.

Sliding in from the left lands on height $-2$; sliding in from the right (and the actual value) is $3$.

$$\\lim_{x \\to 0^{-}} f(x) = -2 \\qquad \\lim_{x \\to 0^{+}} f(x) = 3 \\qquad f(0) = 3$$

> 💡 Here the **right** limit and $f(0)$ happen to match (both $3$) because the right piece *starts* on the filled dot — but the **left** limit still disagrees, so it's a jump.`,
      },
      {
        id: 'osl2-read-input',
        type: 'input-boxes' as const,
        content: `**Read the Heights** 🧮

Use the break-at-$0$ graph above (left curve → open circle at $(0,-2)$; right curve from filled dot at $(0,3)$).

**1)** $\\displaystyle\\lim_{x \\to 0^{-}} f(x) = \\,?$
**2)** $\\displaystyle\\lim_{x \\to 0^{+}} f(x) = \\,?$
**3)** $f(0) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '3', '3'],
          hint1: 'From the left, follow the curve to the open circle at height $-2$.',
          hint2: 'From the right, follow the curve to the filled dot at height $3$.',
          hint3: 'The filled dot at $(0,3)$ is the plotted value, so $f(0) = 3$.',
          explanation: 'Left limit $= -2$ (open circle), right limit $= 3$ (filled dot start), and $f(0) = 3$. The left side disagrees, so this is a jump discontinuity.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'one-sided-limits-in-detail',
    sections: [
      {
        id: 'osl3-intro',
        type: 'text' as const,
        content: `# ↔️ One-Sided Limits in Detail

**Part 3 of 7 — The Existence Theorem**

---

> 🔑 **The Big Theorem:** The two-sided limit exists **if and only if** both one-sided limits exist *and are equal*:
> $$\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^{-}} f(x) = L \\ \\text{ and } \\ \\lim_{x \\to a^{+}} f(x) = L$$`,
      },
      {
        id: 'osl3-theorem',
        type: 'text' as const,
        content: `## When Does the Two-Sided Limit Exist?

A two-sided limit $\\lim_{x \\to a} f(x)$ exists only when the function approaches the **same** height from both directions. Compare the two sides:

| Situation | $\\lim_{x \\to a^{-}}$ | $\\lim_{x \\to a^{+}}$ | $\\lim_{x \\to a}$ (two-sided) |
|-----------|----------------------|----------------------|-------------------------------|
| Sides **agree** | $L$ | $L$ | exists, equals $L$ |
| Sides **disagree** (jump) | $L_1$ | $L_2 \\ne L_1$ | **does not exist (DNE)** |
| A side blows up | $\\to \\infty$ | $\\to \\infty$ | DNE (as a finite number) |

> 🔑 The slogan: **"The two-sided limit is the agreement of the two one-sided limits."** No agreement, no two-sided limit.`,
      },
      {
        id: 'osl3-worked',
        type: 'text' as const,
        content: `## Worked Examples

**Example A.** For some $f$: $\\;\\lim_{x \\to 4^{-}} f(x) = 7$ and $\\lim_{x \\to 4^{+}} f(x) = 7$.

Both sides equal $7$, so $\\displaystyle\\lim_{x \\to 4} f(x) = 7$. **Exists.** ✓ (Notice we never needed $f(4)$ itself.)

**Example B.** For some $g$: $\\;\\lim_{x \\to 0^{-}} g(x) = -1$ and $\\lim_{x \\to 0^{+}} g(x) = 1$.

The sides disagree ($-1 \\ne 1$), so $\\displaystyle\\lim_{x \\to 0} g(x)$ **does not exist.** This is the signature of a jump — and it is exactly how $g(x) = \\dfrac{\\lvert x \\rvert}{x}$ behaves at $0$.

> 💡 **Classic case:** $\\dfrac{\\lvert x \\rvert}{x}$ equals $-1$ for $x<0$ and $+1$ for $x>0$. Left limit $-1$, right limit $+1$, two-sided limit DNE.`,
      },
      {
        id: 'osl3-exist-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Given $\\lim_{x \\to 3^{-}} f(x) = 8$ and $\\lim_{x \\to 3^{+}} f(x) = 8$, what is $\\lim_{x \\to 3} f(x)$?',
              options: ['$8$', '$16$', 'It does not exist', 'Cannot be determined without $f(3)$'],
              correctAnswer: 0,
              explanation: 'Both one-sided limits equal $8$, so the two-sided limit exists and equals $8$. The value $f(3)$ is irrelevant to the limit.',
            },
            {
              question: 'Given $\\lim_{x \\to 2^{-}} h(x) = 5$ and $\\lim_{x \\to 2^{+}} h(x) = 9$, what is $\\lim_{x \\to 2} h(x)$?',
              options: ['It does not exist', '$7$ (the average)', '$5$', '$14$'],
              correctAnswer: 0,
              explanation: 'The one-sided limits disagree ($5 \\ne 9$), so the two-sided limit does not exist. You never average the two sides.',
            },
          ],
        },
      },
      {
        id: 'osl3-average-text',
        type: 'text' as const,
        content: `## The "Never Average" Rule

The single most common error is to *average* two disagreeing one-sided limits. There is no such thing as splitting the difference.

$$\\lim_{x \\to a^{-}} f = 5, \\quad \\lim_{x \\to a^{+}} f = 9 \\;\\Longrightarrow\\; \\lim_{x \\to a} f \\text{ is } \\textbf{DNE}, \\text{ not } 7.$$

A two-sided limit is a yes/no question about **agreement**, not a calculation. Either both sides point at the same height (the limit is that height) or they don't (DNE).

> ⚠️ If you ever find yourself adding the two sides and dividing by $2$, stop — that answer is wrong by definition.`,
      },
      {
        id: 'osl3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Exists or DNE?** 🔽

For each pair of one-sided limits, decide the two-sided limit.`,
        exercise: {
          dropdowns: [
            { label: 'Left $= 6$, Right $= 6$:', options: ['$\\lim = 6$', '$\\lim = 12$', 'DNE'] },
            { label: 'Left $= -3$, Right $= 4$:', options: ['DNE', '$\\lim = 1$', '$\\lim = -3$'] },
            { label: 'Left $= 0$, Right $= 0$:', options: ['$\\lim = 0$', 'DNE', '$\\lim = 1$'] },
          ],
          correctAnswers: ['$\\lim = 6$', 'DNE', '$\\lim = 0$'],
          hint1: 'Equal sides ⟹ the two-sided limit equals that common value.',
          hint2: 'Different sides ($-3 \\ne 4$) ⟹ DNE. Never average.',
          hint3: 'Both sides $0$ agree, so the two-sided limit is $0$.',
          explanation: 'Agreement ⟹ the limit exists and equals the common value ($6$ and $0$). Disagreement ($-3$ vs $4$) ⟹ DNE.',
        },
      },
      {
        id: 'osl3-vs-value-text',
        type: 'text' as const,
        content: `## The Limit Doesn't Care About $f(a)$

One more subtlety worth nailing down: the existence theorem says **nothing** about $f(a)$. The two-sided limit can exist even when $f(a)$ is undefined, or when $f(a)$ is some unrelated number.

| Both one-sided limits | $f(a)$ | $\\lim_{x \\to a} f$ |
|------------------------|--------|---------------------|
| agree at $L$ | undefined | exists, $= L$ |
| agree at $L$ | $= 99$ | exists, $= L$ (still!) |
| disagree | anything | DNE |

> 💡 The limit is decided by the **two arrows coming in from the sides** — the lone point $f(a)$ is a separate fact you record afterward.`,
      },
      {
        id: 'osl3-input',
        type: 'input-boxes' as const,
        content: `**Decide and Record** 🧮

A graph gives $\\lim_{x \\to 1^{-}} f(x) = 2$, $\\lim_{x \\to 1^{+}} f(x) = 2$, and $f(1) = 9$.

**1)** What is $\\displaystyle\\lim_{x \\to 1} f(x)$? *(enter the number)*
**2)** Does the two-sided limit equal $f(1)$? Enter $1$ for yes, $0$ for no.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '0'],
          hint1: 'Both one-sided limits are $2$, so they agree.',
          hint2: 'Agreement means the two-sided limit equals the common value, $2$.',
          hint3: 'The limit is $2$, but $f(1) = 9$. Since $2 \\ne 9$, the limit does NOT equal the function value — enter $0$.',
          explanation: 'The sides agree at $2$, so $\\lim_{x\\to 1} f(x) = 2$. But $f(1) = 9 \\ne 2$, so the limit does not equal the function value (this is a removable discontinuity).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'one-sided-limits-in-detail',
    sections: [
      {
        id: 'osl4-intro',
        type: 'text' as const,
        content: `# ↔️ One-Sided Limits in Detail

**Part 4 of 7 — Piecewise Functions, Algebraically**

---

> 🔑 **The Idea:** For a **piecewise** function, the side you approach from decides **which formula** to use. From the left of the breakpoint, use the left piece; from the right, use the right piece. Then just substitute.`,
      },
      {
        id: 'osl4-method',
        type: 'text' as const,
        content: `## Pick the Right Piece, Then Substitute

Suppose
$$f(x) = \\begin{cases} 2x + 1 & x < 3 \\\\ x^2 - 4 & x \\ge 3 \\end{cases}$$

To find the one-sided limits at the breakpoint $x = 3$:

- **Left limit** $\\lim_{x \\to 3^{-}} f(x)$: approaching from below means $x < 3$, so use $2x+1$. Substitute $x = 3$: $\\;2(3) + 1 = 7$.
- **Right limit** $\\lim_{x \\to 3^{+}} f(x)$: approaching from above means $x > 3$, so use $x^2 - 4$. Substitute $x = 3$: $\\;3^2 - 4 = 5$.

Since $7 \\ne 5$, the two-sided limit $\\lim_{x \\to 3} f(x)$ **does not exist** — the pieces don't meet.

> 💡 **Substitute the boundary even though the inequality is strict.** For a polynomial piece, $\\lim_{x \\to 3^{-}}(2x+1)$ equals $2(3)+1$ because polynomials are continuous; the strict $<$ only tells you *which piece* to use, not to avoid plugging in $3$.`,
      },
      {
        id: 'osl4-piece-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use $f(x) = \\begin{cases} x + 5 & x < 2 \\\\ 3x & x \\ge 2 \\end{cases}$`,
        exercise: {
          questions: [
            {
              question: 'Which piece do you use to compute $\\lim_{x \\to 2^{-}} f(x)$, and what is its value?',
              options: [
                'Use $x+5$; the limit is $7$',
                'Use $3x$; the limit is $6$',
                'Use $3x$; the limit is $7$',
                'Use $x+5$; the limit is $6$',
              ],
              correctAnswer: 0,
              explanation: 'From the left, $x < 2$, so use the top piece $x+5$. Substituting $x=2$: $2 + 5 = 7$.',
            },
            {
              question: 'What is $\\lim_{x \\to 2^{+}} f(x)$?',
              options: ['$6$', '$7$', '$2$', '$3$'],
              correctAnswer: 0,
              explanation: 'From the right, $x > 2$, so use the bottom piece $3x$. Substituting $x=2$: $3(2) = 6$.',
            },
          ],
        },
      },
      {
        id: 'osl4-worked2',
        type: 'text' as const,
        content: `## A Case Where the Pieces *Do* Meet

$$g(x) = \\begin{cases} x^2 & x \\le 1 \\\\ 3x - 2 & x > 1 \\end{cases}$$

- **Left:** use $x^2$ → $\\;\\lim_{x \\to 1^{-}} g(x) = (1)^2 = 1$.
- **Right:** use $3x - 2$ → $\\;\\lim_{x \\to 1^{+}} g(x) = 3(1) - 2 = 1$.

Both sides give $1$, so $\\displaystyle\\lim_{x \\to 1} g(x) = 1$ **exists**. The two pieces connect seamlessly — the graph has no break here.

> ✅ **Check:** $g(1) = (1)^2 = 1$ (using $x \\le 1$), which also equals the limit. So $g$ is even **continuous** at $x = 1$ — a preview of Part 6.`,
      },
      {
        id: 'osl4-piece-input',
        type: 'input-boxes' as const,
        content: `**Evaluate the Pieces** 🧮

For $h(x) = \\begin{cases} 4 - x & x < -1 \\\\ x^2 + 2 & x \\ge -1 \\end{cases}$, find the one-sided limits at $x = -1$.

**1)** $\\displaystyle\\lim_{x \\to -1^{-}} h(x) = \\,?$
**2)** $\\displaystyle\\lim_{x \\to -1^{+}} h(x) = \\,?$
**3)** Does $\\lim_{x \\to -1} h(x)$ exist? Enter $1$ for yes, $0$ for no.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '3', '0'],
          hint1: 'From the left, $x < -1$, so use $4 - x$: $\\;4 - (-1) = 5$.',
          hint2: 'From the right, $x \\ge -1$, so use $x^2 + 2$: $\\;(-1)^2 + 2 = 3$.',
          hint3: 'Left $= 5$, right $= 3$. Since $5 \\ne 3$, the two-sided limit does NOT exist — enter $0$.',
          explanation: 'Left: $4 - (-1) = 5$. Right: $(-1)^2 + 2 = 1 + 2 = 3$. The sides disagree ($5 \\ne 3$), so the two-sided limit does not exist (enter $0$).',
        },
      },
      {
        id: 'osl4-nonpoly-text',
        type: 'text' as const,
        content: `## When a Piece Isn't a Polynomial

The "substitute the boundary" shortcut works whenever the piece is **continuous** at that boundary — which covers polynomials, $\\sin x$, $\\cos x$, exponentials, and any constant. For those, $\\lim_{x \\to a^{\\pm}} (\\text{piece})$ is just the piece evaluated at $a$.

| Piece on that side | One-sided limit at $x = a$ |
|--------------------|----------------------------|
| constant $c$ | $c$ |
| $\\cos x$ at $a = 0$ | $\\cos 0 = 1$ |
| $e^x$ at $a = 0$ | $e^0 = 1$ |
| $2x + 1$ at $a = 3$ | $2(3)+1 = 7$ |

> 💡 The strict inequality ($<$ vs $\\le$) only decides **which piece** owns the boundary for $f(a)$. It never changes the **limit** from that side — you still substitute the boundary into that side's formula.`,
      },
      {
        id: 'osl4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Piece** 🔽

For $p(x) = \\begin{cases} 5 & x < 0 \\\\ \\cos x & x \\ge 0 \\end{cases}$, evaluate at $x = 0$. *(Recall $\\cos 0 = 1$.)*`,
        exercise: {
          dropdowns: [
            { label: 'Piece used for $\\lim_{x \\to 0^{-}} p(x)$:', options: ['$5$ (constant piece)', '$\\cos x$ piece'] },
            { label: 'Value of $\\lim_{x \\to 0^{-}} p(x)$:', options: ['$5$', '$1$', '$0$'] },
            { label: 'Value of $\\lim_{x \\to 0^{+}} p(x)$:', options: ['$1$', '$5$', '$0$'] },
          ],
          correctAnswers: ['$5$ (constant piece)', '$5$', '$1$'],
          hint1: 'From the left, $x < 0$, which selects the constant piece $5$.',
          hint2: 'A constant piece has the same value everywhere, so the left limit is $5$.',
          hint3: 'From the right, $x \\ge 0$ uses $\\cos x$, and $\\cos 0 = 1$.',
          explanation: 'Left of $0$ uses the constant $5$, giving a left limit of $5$. Right of $0$ uses $\\cos x$, and $\\cos 0 = 1$. The sides disagree, so the two-sided limit DNE.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'one-sided-limits-in-detail',
    sections: [
      {
        id: 'osl5-intro',
        type: 'text' as const,
        content: `# ↔️ One-Sided Limits in Detail

**Part 5 of 7 — Infinite One-Sided Limits & Vertical Asymptotes**

---

> 🔑 **The Idea:** Near a **vertical asymptote**, the two sides of a fraction can shoot to $+\\infty$ on one side and $-\\infty$ on the other. One-sided limits are the **only** way to describe that behavior precisely.`,
      },
      {
        id: 'osl5-method',
        type: 'text' as const,
        content: `## Sign Analysis Near a Vertical Asymptote

Consider $f(x) = \\dfrac{1}{x - 2}$. As $x \\to 2$, the denominator $x - 2 \\to 0$, so the fraction blows up. **Which way?** Check the *sign* of the denominator on each side:

| Approach | $x - 2$ is… | $\\dfrac{1}{x-2}$ is… | One-sided limit |
|----------|-------------|----------------------|-----------------|
| $x \\to 2^{+}$ (e.g. $2.001$) | small **positive** | large **positive** | $+\\infty$ |
| $x \\to 2^{-}$ (e.g. $1.999$) | small **negative** | large **negative** | $-\\infty$ |

So $\\displaystyle\\lim_{x \\to 2^{+}} \\frac{1}{x-2} = +\\infty$ and $\\displaystyle\\lim_{x \\to 2^{-}} \\frac{1}{x-2} = -\\infty$. The line $x = 2$ is a **vertical asymptote**.

> ⚠️ "$=\\infty$" is shorthand for "**increases without bound**," not a real number. A limit that equals $\\infty$ still technically **does not exist** as a finite value — but the $\\pm\\infty$ notation tells us *exactly how* it fails.`,
      },
      {
        id: 'osl5-recipe',
        type: 'text' as const,
        content: `## The Sign-Test Recipe

To find an infinite one-sided limit $\\displaystyle\\lim_{x \\to a^{\\pm}} \\frac{N(x)}{D(x)}$ where $D(a) = 0$ but $N(a) \\ne 0$:

1. Find the **sign of the numerator** $N(x)$ near $a$ (usually it's a fixed nonzero number).
2. Find the **sign of the denominator** $D(x)$ on the side you're approaching from — pick a test value just on that side.
3. **Divide the signs:** same signs ⟹ $+\\infty$; opposite signs ⟹ $-\\infty$.

**Example:** $\\displaystyle\\lim_{x \\to 3^{-}} \\frac{x}{x - 3}$.

- Numerator near $3$: $x \\approx 3 > 0$ (**positive**).
- Denominator at $x = 2.999$: $2.999 - 3 = -0.001 < 0$ (**negative**).
- Positive $\\div$ negative $= $ negative and huge ⟹ $\\boxed{-\\infty}$.

> 💡 You only need the **sign** of a test point, never its exact value. $x = 2.999$ tells you "negative denominator" — that's all the recipe needs.`,
      },
      {
        id: 'osl5-sign-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\displaystyle\\lim_{x \\to 5^{+}} \\frac{1}{x - 5}$, what is the sign of the denominator just to the right of $5$, and the resulting limit?',
              options: [
                'Positive denominator; limit is $+\\infty$',
                'Negative denominator; limit is $-\\infty$',
                'Zero denominator; limit is $0$',
                'Positive denominator; limit is $-\\infty$',
              ],
              correctAnswer: 0,
              explanation: 'At a test value like $5.001$, $x - 5 = 0.001 > 0$. A positive numerator over a tiny positive denominator gives $+\\infty$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 1^{-}} \\frac{2}{x - 1}$.',
              options: ['$-\\infty$', '$+\\infty$', '$0$', '$2$'],
              correctAnswer: 0,
              explanation: 'Numerator $2 > 0$. From the left, test $x = 0.999$: $0.999 - 1 = -0.001 < 0$. Positive over tiny negative $= -\\infty$.',
            },
          ],
        },
      },
      {
        id: 'osl5-asymptote',
        type: 'text' as const,
        content: `## Same Sign on Both Sides

Not every asymptote flips sign. Consider $f(x) = \\dfrac{1}{(x-4)^2}$. Because the denominator is **squared**, it is **positive on both sides** of $4$:

$$\\lim_{x \\to 4^{-}} \\frac{1}{(x-4)^2} = +\\infty \\qquad \\lim_{x \\to 4^{+}} \\frac{1}{(x-4)^2} = +\\infty$$

Here both one-sided limits are $+\\infty$. We can even write $\\lim_{x \\to 4} \\dfrac{1}{(x-4)^2} = +\\infty$ as a unified statement of unbounded growth (still not a finite limit).

> 💡 **Squared (or even-power) factors** give the **same** infinite sign on both sides; **odd-power** factors like $(x-a)$ give **opposite** signs.`,
      },
      {
        id: 'osl5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sign-Test Drill** 🔽

Determine each infinite one-sided limit using the sign recipe.`,
        exercise: {
          dropdowns: [
            { label: '$\\lim_{x \\to 0^{+}} \\dfrac{1}{x}$', options: ['$+\\infty$', '$-\\infty$', '$0$'] },
            { label: '$\\lim_{x \\to 0^{-}} \\dfrac{1}{x}$', options: ['$-\\infty$', '$+\\infty$', '$0$'] },
            { label: '$\\lim_{x \\to 3^{+}} \\dfrac{-1}{x - 3}$', options: ['$-\\infty$', '$+\\infty$', '$0$'] },
          ],
          correctAnswers: ['$+\\infty$', '$-\\infty$', '$-\\infty$'],
          hint1: 'From the right of $0$, $x$ is a tiny positive number, so $1/x$ is large positive.',
          hint2: 'From the left of $0$, $x$ is a tiny negative number, so $1/x$ is large negative.',
          hint3: 'Numerator $-1 < 0$. From the right of $3$, $x - 3 > 0$. Negative over tiny positive $= -\\infty$.',
          explanation: '$\\lim_{x\\to 0^+} 1/x = +\\infty$ (tiny positive denom), $\\lim_{x\\to 0^-} 1/x = -\\infty$ (tiny negative denom). For $-1/(x-3)$ from the right: $-1$ over tiny positive $= -\\infty$.',
        },
      },
      {
        id: 'osl5-coding-text',
        type: 'text' as const,
        content: `## A Quick Way to Record the Sign

A handy bookkeeping trick: as you test a side, jot down the sign of the numerator and denominator, then combine.

For $\\displaystyle\\lim_{x \\to 2^{-}} \\frac{x - 5}{x - 2}$:

- Numerator near $2$: $x - 5 \\approx 2 - 5 = -3$ → **negative**.
- Denominator at $x = 1.999$: $1.999 - 2 < 0$ → **negative**.
- Negative $\\div$ negative $= $ **positive**, and the magnitude explodes → $+\\infty$.

Use $1$ for "positive sign" and $0$ for "negative sign" in the drill below — then combine to get the infinite limit's sign.

> 💡 Same signs (both $+$ or both $-$) ⟹ $+\\infty$. Opposite signs ⟹ $-\\infty$.`,
      },
      {
        id: 'osl5-sign-input',
        type: 'input-boxes' as const,
        content: `**Track the Signs** 🧮

For $\\displaystyle\\lim_{x \\to 2^{-}} \\frac{x - 5}{x - 2}$, record each sign (enter $1$ for positive, $0$ for negative), then the limit.

**1)** Sign of the numerator $x - 5$ near $x = 2$? *(1 = positive, 0 = negative)*
**2)** Sign of the denominator $x - 2$ just left of $2$? *(1 = positive, 0 = negative)*
**3)** Is the limit $+\\infty$? Enter $1$ for $+\\infty$, $0$ for $-\\infty$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '0', '1'],
          hint1: 'Near $2$, $x - 5 \\approx -3 < 0$, so the numerator is negative → enter $0$.',
          hint2: 'Just left of $2$ (like $1.999$), $x - 2 < 0$, so the denominator is negative → enter $0$.',
          hint3: 'Negative over negative is positive, and the magnitude blows up, so the limit is $+\\infty$ → enter $1$.',
          explanation: 'Numerator $x - 5 \\approx -3$ (negative). Denominator at $1.999$ is negative. Negative $\\div$ negative $= +\\infty$, so the limit is $+\\infty$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'one-sided-limits-in-detail',
    sections: [
      {
        id: 'osl6-intro',
        type: 'text' as const,
        content: `# ↔️ One-Sided Limits in Detail

**Part 6 of 7 — One-Sided Limits & Continuity**

---

> 🔑 **The Payoff:** A function is **continuous at $x = a$** exactly when three things all agree:
> $$f(a) \\text{ exists}, \\qquad \\lim_{x \\to a} f(x) \\text{ exists}, \\qquad \\lim_{x \\to a} f(x) = f(a).$$
> And that middle condition relies entirely on the **two one-sided limits matching**.`,
      },
      {
        id: 'osl6-three',
        type: 'text' as const,
        content: `## The Three-Part Continuity Test

To check continuity at $x = a$, verify in order:

1. **$f(a)$ is defined** — there's an actual filled dot.
2. **$\\lim_{x \\to a} f(x)$ exists** — i.e. $\\lim_{x \\to a^{-}} f(x) = \\lim_{x \\to a^{+}} f(x)$ (both one-sided limits agree).
3. **They are equal:** the common limit value equals $f(a)$.

If **any** step fails, $f$ is **discontinuous** at $a$. The *type* of discontinuity tells you which step broke:

| Discontinuity | Which step fails | One-sided clue |
|---------------|------------------|----------------|
| **Removable** (hole) | step 1 or 3 | both one-sided limits **agree**, but ≠ $f(a)$ (or $f(a)$ missing) |
| **Jump** | step 2 | one-sided limits **disagree** |
| **Infinite** (asymptote) | step 2 | a one-sided limit is $\\pm\\infty$ |`,
      },
      {
        id: 'osl6-worked',
        type: 'text' as const,
        content: `## Worked Example: Checking Continuity

$$f(x) = \\begin{cases} x^2 + 1 & x < 2 \\\\ 4x - 3 & x \\ge 2 \\end{cases}$$

**Step 1 — value:** $f(2) = 4(2) - 3 = 5$ (uses $x \\ge 2$). Defined. ✓

**Step 2 — limit exists?**
$$\\lim_{x \\to 2^{-}} f(x) = (2)^2 + 1 = 5, \\qquad \\lim_{x \\to 2^{+}} f(x) = 4(2) - 3 = 5.$$
Both sides equal $5$, so $\\lim_{x \\to 2} f(x) = 5$ exists. ✓

**Step 3 — match?** $\\lim_{x \\to 2} f(x) = 5 = f(2)$. ✓

All three pass, so $f$ is **continuous at $x = 2$**. The pieces join perfectly.

> ✅ Continuity at a boundary is really just "the two one-sided limits agree **and** land on the filled dot."`,
      },
      {
        id: 'osl6-cont-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A function has $\\lim_{x \\to 1^{-}} f(x) = 3$, $\\lim_{x \\to 1^{+}} f(x) = 3$, and $f(1) = 3$. Is $f$ continuous at $x = 1$?',
              options: [
                'Yes — all three continuity conditions hold',
                'No — the one-sided limits disagree',
                'No — $f(1)$ is undefined',
                'Cannot tell without a graph',
              ],
              correctAnswer: 0,
              explanation: 'Both one-sided limits equal $3$ (limit exists), and the common value $3$ equals $f(1) = 3$. All three conditions hold, so $f$ is continuous at $1$.',
            },
            {
              question: 'A function has $\\lim_{x \\to 0^{-}} g(x) = 2$, $\\lim_{x \\to 0^{+}} g(x) = 2$, but $g(0) = 6$. What kind of discontinuity is at $x = 0$?',
              options: [
                'Removable (the limit exists but ≠ $g(0)$)',
                'Jump (the one-sided limits disagree)',
                'Infinite (a one-sided limit is $\\pm\\infty$)',
                'None — it is continuous',
              ],
              correctAnswer: 0,
              explanation: 'The one-sided limits agree ($2 = 2$) so the limit exists, but it does not equal $g(0) = 6$. That mismatch is a removable discontinuity (a hole), failing step 3.',
            },
          ],
        },
      },
      {
        id: 'osl6-design-text',
        type: 'text' as const,
        content: `## Designing Continuity: Solve for the Unknown

A favorite exam question hides an unknown constant in a piece and asks: *for what value is $f$ continuous at the boundary?* The recipe is to **force the two one-sided limits equal** (because $f(a)$ comes from the right piece automatically when $x \\ge a$):

1. Compute the one-sided limit from the side **without** the unknown.
2. Set the side **with** the unknown equal to it.
3. Solve for the constant.

> 💡 You're literally tuning the constant so the left arrow lands exactly on the right arrow's height — making the jump vanish.`,
      },
      {
        id: 'osl6-input',
        type: 'input-boxes' as const,
        content: `**Make It Continuous** 🧮

For $f(x) = \\begin{cases} 3x + k & x < 1 \\\\ x^2 + 4 & x \\ge 1 \\end{cases}$, find the value of $k$ that makes $f$ continuous at $x = 1$.

**1)** $\\displaystyle\\lim_{x \\to 1^{+}} f(x) = \\,?$
**2)** Set the left limit equal to it: solve $3(1) + k = \\text{(your answer to 1)}$ for $k$. $k = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '2'],
          hint1: 'From the right, use $x^2 + 4$: $\\;(1)^2 + 4 = 5$.',
          hint2: 'For continuity, the left limit must match: $3(1) + k = 5$.',
          hint3: 'Solve $3 + k = 5 \\Rightarrow k = 2$.',
          explanation: 'Right limit: $(1)^2 + 4 = 5$. Left limit: $3(1) + k = 3 + k$. Setting $3 + k = 5$ gives $k = 2$, making both sides equal $5 = f(1)$ — continuous.',
        },
      },
      {
        id: 'osl6-types-text',
        type: 'text' as const,
        content: `## Naming the Break From the One-Sided Limits

Once you know the two one-sided limits and $f(a)$, the *type* of discontinuity follows immediately:

| One-sided limits | Then it's a… |
|------------------|--------------|
| agree, but $\\ne f(a)$ (or $f(a)$ missing) | **removable** discontinuity (hole) |
| disagree (finite) | **jump** discontinuity |
| at least one is $\\pm\\infty$ | **infinite** discontinuity (vertical asymptote) |

> 🔑 The one-sided limits are a diagnostic: read them first, and the kind of discontinuity practically names itself.`,
      },
      {
        id: 'osl6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify the Discontinuity** 🔽

Match the one-sided behavior to the type of discontinuity at $x = a$.`,
        exercise: {
          dropdowns: [
            { label: 'Left $= 4$, Right $= 4$, $f(a) = 9$:', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] },
            { label: 'Left $= 1$, Right $= 7$:', options: ['Jump', 'Removable', 'Infinite', 'Continuous'] },
            { label: 'Left $= -\\infty$, Right $= +\\infty$:', options: ['Infinite', 'Removable', 'Jump', 'Continuous'] },
          ],
          correctAnswers: ['Removable', 'Jump', 'Infinite'],
          hint1: 'When both sides agree but ≠ $f(a)$, the hole is removable.',
          hint2: 'Disagreeing finite one-sided limits make a jump.',
          hint3: 'A one-sided limit of $\\pm\\infty$ signals an infinite discontinuity (vertical asymptote).',
          explanation: 'Agree-but-mismatched ⟹ removable; disagree (finite) ⟹ jump; $\\pm\\infty$ ⟹ infinite discontinuity.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'one-sided-limits-in-detail',
    sections: [
      {
        id: 'osl7-intro',
        type: 'text' as const,
        content: `# ↔️ One-Sided Limits in Detail

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) read the direction from $a^{\\pm}$, (2) pull one-sided limits off a graph, (3) apply the existence theorem, (4) evaluate piecewise functions, (5) handle infinite limits by sign analysis, and (6) test continuity. Let's pull it all together.`,
      },
      {
        id: 'osl7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Read direction | $a^{-}$ = from the left (smaller $x$); $a^{+}$ = from the right (larger $x$) |
| One-sided limit on a graph | follow the curve in toward $a$ from that side; read the height |
| Two-sided limit exists? | yes iff left limit $=$ right limit |
| Piecewise one-sided limit | pick the piece matching that side, then substitute the boundary |
| Infinite one-sided limit | divide the **signs** of numerator and denominator near $a$ |
| Continuous at $a$? | $f(a)$ defined **and** left $=$ right $= f(a)$ |

> ⚠️ Remember: the value $f(a)$ is a **separate question** from the limit. Never average two disagreeing sides — that just means the two-sided limit **does not exist**.`,
      },
      {
        id: 'osl7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $f(x) = \\begin{cases} 2x - 1 & x < 4 \\\\ x + 3 & x \\ge 4 \\end{cases}$, what is $\\lim_{x \\to 4} f(x)$?',
              options: [
                '$7$ (both sides agree)',
                'It does not exist',
                '$6$',
                '$8$',
              ],
              correctAnswer: 0,
              explanation: 'Left: $2(4) - 1 = 7$. Right: $4 + 3 = 7$. Both sides equal $7$, so the two-sided limit exists and equals $7$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\lim_{x \\to 6^{-}} \\frac{1}{x - 6}$.',
              options: ['$-\\infty$', '$+\\infty$', '$0$', '$6$'],
              correctAnswer: 0,
              explanation: 'Numerator $1 > 0$. From the left, test $x = 5.999$: $5.999 - 6 = -0.001 < 0$. Positive over a tiny negative is $-\\infty$.',
            },
          ],
        },
      },
      {
        id: 'osl7-bridge1',
        type: 'text' as const,
        content: `## Keep the Two Questions Separate

As you work the rest of this part, keep running the two-question checklist on every problem:

1. **What does each side approach?** (the two one-sided limits)
2. **Do they agree?** If yes, the two-sided limit is that value; if no, it's DNE.

Only *after* answering those do you compare with $f(a)$ to decide continuity. Mixing up "the limit" with "the value" is the error that trips up the most students.`,
      },
      {
        id: 'osl7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

For $f(x) = \\begin{cases} x^2 - 3 & x \\le -1 \\\\ -2x & x > -1 \\end{cases}$:

**1)** $\\displaystyle\\lim_{x \\to -1^{-}} f(x) = \\,?$
**2)** $\\displaystyle\\lim_{x \\to -1^{+}} f(x) = \\,?$
**3)** Does $\\lim_{x \\to -1} f(x)$ exist? Enter $1$ for yes, $0$ for no.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '2', '0'],
          hint1: 'From the left, $x \\le -1$, use $x^2 - 3$: $\\;(-1)^2 - 3 = 1 - 3 = -2$.',
          hint2: 'From the right, $x > -1$, use $-2x$: $\\;-2(-1) = 2$.',
          hint3: 'Left $= -2$, right $= 2$. Since $-2 \\ne 2$, the two-sided limit does NOT exist — enter $0$.',
          explanation: 'Left: $(-1)^2 - 3 = -2$. Right: $-2(-1) = 2$. The sides disagree ($-2 \\ne 2$), so the two-sided limit does not exist (enter $0$). This is a jump.',
        },
      },
      {
        id: 'osl7-bridge2',
        type: 'text' as const,
        content: `## From Limits to a Diagnosis

You've now practiced *finding* one-sided limits. The final skill is *interpreting* them: given the two one-sided limits and $f(a)$, name what's happening at the point.

Run them through the decision tree one last time: **agree + match $f(a)$** ⟹ continuous; **agree but mismatch** ⟹ removable hole; **disagree (finite)** ⟹ jump; **$\\pm\\infty$** ⟹ infinite. The dropdown below is your dress rehearsal.`,
      },
      {
        id: 'osl7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Diagnose Each Function at $x = a$** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Left $= 3$, Right $= 3$, $f(a) = 3$:', options: ['Continuous', 'Removable', 'Jump'] },
            { label: 'Left $= 0$, Right $= 5$:', options: ['Jump', 'Continuous', 'Removable'] },
            { label: '$\\lim_{x\\to a} f = 8$ but $f(a)$ undefined:', options: ['Removable', 'Continuous', 'Infinite'] },
          ],
          correctAnswers: ['Continuous', 'Jump', 'Removable'],
          hint1: 'Both sides agree AND equal $f(a)$ ⟹ continuous.',
          hint2: 'Finite sides that disagree ⟹ jump.',
          hint3: 'Limit exists but $f(a)$ is missing ⟹ removable (a hole).',
          explanation: 'All-agree-and-match ⟹ continuous; disagree ⟹ jump; limit exists but no $f(a)$ ⟹ removable discontinuity.',
        },
      },
      {
        id: 'osl7-final-text',
        type: 'text' as const,
        content: `## You've Got the Full Toolkit

You can now read direction from a superscript, pull one-sided limits off a graph, apply the existence theorem, evaluate piecewise pieces, resolve infinite limits by sign, and classify any discontinuity. One last check ties it all together.

> 🔑 The golden thread of this whole lesson: **a two-sided limit is the agreement of its two one-sided limits, and continuity is that agreement landing exactly on $f(a)$.**`,
      },
      {
        id: 'osl7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'If $\\lim_{x \\to 2^{-}} f(x) = 5$ and $\\lim_{x \\to 2^{+}} f(x) = -1$, then $\\lim_{x \\to 2} f(x)$:',
              options: [
                'does not exist',
                'equals $2$',
                'equals the average, $2$',
                'equals $4$',
              ],
              correctAnswer: 0,
              explanation: 'The one-sided limits disagree ($5 \\ne -1$), so the two-sided limit does not exist. You never average the sides.',
            },
            {
              question: 'For $g(x) = \\begin{cases} x + 6 & x < -3 \\\\ x^2 & x \\ge -3 \\end{cases}$, what is $\\lim_{x \\to -3^{+}} g(x)$?',
              options: ['$9$', '$3$', '$-3$', '$0$'],
              correctAnswer: 0,
              explanation: 'From the right, $x \\ge -3$ uses $x^2$. Substituting $x = -3$: $(-3)^2 = 9$.',
            },
            {
              question: 'What is $\\displaystyle\\lim_{x \\to 0^{+}} \\frac{-3}{x}$?',
              options: ['$-\\infty$', '$+\\infty$', '$0$', '$-3$'],
              correctAnswer: 0,
              explanation: 'Numerator $-3 < 0$. From the right, $x$ is a tiny positive number, so $\\frac{-3}{x}$ is a large negative number: $-\\infty$.',
            },
          ],
        },
      },
    ],
  },
]
