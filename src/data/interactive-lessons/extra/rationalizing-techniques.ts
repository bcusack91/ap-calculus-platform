import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rationalizing Techniques (AP Calculus AB).
 * Registry key / DB Topic.slug: 'rationalizing-techniques'.
 * 7 parts, gold-standard structure: roots & conjugates foundations → rationalizing
 * denominators → rationalizing numerators → the conjugate trick for 0/0 limits →
 * rationalizing the numerator for limits & the difference quotient → harder limits
 * (cube roots, two radicals, infinity) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every limit, conjugate product, and simplification was verified by hand and
 * re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rationalizing-techniques',
    sections: [
      {
        id: 'rat1-intro',
        type: 'text' as const,
        content: `# √ Rationalizing Techniques

**Part 1 of 7 — Roots, Conjugates & the Difference of Squares**

---

### Topics in This Part

| Section |
|---------|
| Why "Rationalize"? |
| The One Rule: $\\sqrt{a}\\cdot\\sqrt{a} = a$ |
| Conjugates & the Difference of Squares |

> 🔑 **Key Concept:** "Rationalizing" means rewriting an expression so that a radical no longer sits where it causes trouble — usually a denominator, or a spot that forces an indeterminate $\\frac{0}{0}$ in a limit. In AP Calculus this single algebra move unlocks an entire family of limits and derivative computations.`,
      },
      {
        id: 'rat1-why',
        type: 'text' as const,
        content: `## Why "Rationalize"?

A number like $\\dfrac{1}{\\sqrt{2}}$ is hard to estimate and hard to combine with other fractions. Multiply top and bottom by $\\sqrt{2}$:

$$\\frac{1}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}\\cdot\\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$

The value is **unchanged** — we multiplied by $\\dfrac{\\sqrt{2}}{\\sqrt{2}} = 1$ — but the radical moved to the numerator where it is easier to work with.

> 💡 **In calculus the goal is almost never "neatness."** We rationalize to **cancel a factor** that is causing a $\\frac{0}{0}$ form in a limit. The same algebra, used with purpose.

The whole technique rests on one fact and one factoring pattern. Let's nail both.`,
      },
      {
        id: 'rat1-onerule',
        type: 'text' as const,
        content: `## The One Rule: $\\sqrt{a}\\cdot\\sqrt{a} = a$

For $a \\ge 0$, multiplying a square root by **itself** erases the radical:

$$\\sqrt{a}\\cdot\\sqrt{a} = \\left(\\sqrt{a}\\right)^2 = a$$

| Product | Result |
|---------|--------|
| $\\sqrt{5}\\cdot\\sqrt{5}$ | $5$ |
| $\\sqrt{x}\\cdot\\sqrt{x}$ | $x$ |
| $\\sqrt{x+3}\\cdot\\sqrt{x+3}$ | $x+3$ |
| $3\\sqrt{2}\\cdot\\sqrt{2}$ | $3\\cdot 2 = 6$ |

> ⚠️ This is **only** the same square root times itself. $\\sqrt{2}\\cdot\\sqrt{3} = \\sqrt{6}$, **not** a whole number. To clear a *single* radical in a denominator, multiply by that exact radical over itself.`,
      },
      {
        id: 'rat1-onerule-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{x+7}\\cdot\\sqrt{x+7}$.',
              options: ['$x+7$', '$\\sqrt{x+7}$', '$(x+7)^2$', '$\\sqrt{2(x+7)}$'],
              correctAnswer: 0,
              explanation: 'A square root times itself removes the radical: $\\sqrt{a}\\cdot\\sqrt{a}=a$, so $\\sqrt{x+7}\\cdot\\sqrt{x+7}=x+7$.',
            },
            {
              question: 'To rationalize $\\dfrac{4}{\\sqrt{3}}$, you multiply numerator and denominator by:',
              options: ['$\\sqrt{3}$', '$3$', '$\\sqrt{4}$', '$4$'],
              correctAnswer: 0,
              explanation: 'Multiply by $\\frac{\\sqrt{3}}{\\sqrt{3}}=1$. The denominator becomes $\\sqrt{3}\\cdot\\sqrt{3}=3$, giving $\\frac{4\\sqrt{3}}{3}$.',
            },
          ],
        },
      },
      {
        id: 'rat1-conjugate',
        type: 'text' as const,
        content: `## Conjugates & the Difference of Squares

A **conjugate** is the same two-term expression with the **middle sign flipped**:

| Expression | Conjugate |
|-----------|-----------|
| $\\sqrt{x} - 2$ | $\\sqrt{x} + 2$ |
| $\\sqrt{x} + 5$ | $\\sqrt{x} - 5$ |
| $3 - \\sqrt{x+1}$ | $3 + \\sqrt{x+1}$ |
| $\\sqrt{a} + \\sqrt{b}$ | $\\sqrt{a} - \\sqrt{b}$ |

Multiplying conjugates uses the **difference of squares** $(p-q)(p+q) = p^2 - q^2$, which **squares away both terms**:

$$(\\sqrt{x} - 2)(\\sqrt{x} + 2) = (\\sqrt{x})^2 - 2^2 = x - 4$$

> 🔑 **The whole game:** a conjugate turns $\\sqrt{x}-2$ into the *radical-free* expression $x-4$. That new factor is usually exactly what cancels a troublesome term in a limit.`,
      },
      {
        id: 'rat1-conjugate-match',
        type: 'dropdown-select' as const,
        content: `**Name the Conjugate** 🔽

First, just *recognize* conjugates. For each expression, choose its conjugate (same terms, middle sign flipped).`,
        exercise: {
          dropdowns: [
            { label: 'Conjugate of $\\sqrt{x}-6$:', options: ['$\\sqrt{x}+6$', '$\\sqrt{x}-6$', '$-\\sqrt{x}-6$', '$6-\\sqrt{x}$'] },
            { label: 'Conjugate of $5+\\sqrt{x}$:', options: ['$5-\\sqrt{x}$', '$5+\\sqrt{x}$', '$-5-\\sqrt{x}$', '$\\sqrt{x}-5$'] },
            { label: 'Conjugate of $\\sqrt{a}+\\sqrt{b}$:', options: ['$\\sqrt{a}-\\sqrt{b}$', '$\\sqrt{a}+\\sqrt{b}$', '$\\sqrt{b}-\\sqrt{a}$', '$-\\sqrt{a}-\\sqrt{b}$'] },
          ],
          correctAnswers: ['$\\sqrt{x}+6$', '$5-\\sqrt{x}$', '$\\sqrt{a}-\\sqrt{b}$'],
          hint1: 'Keep both terms; flip only the sign between them.',
          hint2: 'The conjugate of $a-b$ is $a+b$, and of $a+b$ is $a-b$.',
          hint3: 'For $5+\\sqrt{x}$ flip the $+$ to $-$: $5-\\sqrt{x}$.',
          explanation: 'A conjugate keeps both terms and only flips the connecting sign, so that multiplying produces a difference of squares.',
        },
      },
      {
        id: 'rat1-conjugate-drill',
        type: 'input-boxes' as const,
        content: `**Multiply the Conjugates** 🧮

Recognizing a conjugate is half the skill; the other half is **multiplying it through**. Use $(p-q)(p+q)=p^2-q^2$ and remember $\\left(\\sqrt{a}\\right)^2 = a$. Enter each product in simplest radical-free form (e.g. \`x-9\`).

**1)** $(\\sqrt{x} - 3)(\\sqrt{x} + 3) = \\,?$
**2)** $(\\sqrt{x+5} - \\sqrt{5})(\\sqrt{x+5} + \\sqrt{5}) = \\,?$
**3)** $(2 - \\sqrt{x})(2 + \\sqrt{x}) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['x-9', 'x', '4-x'],
          hint1: '$(\\sqrt{x})^2 - 3^2 = x - 9$.',
          hint2: '$(\\sqrt{x+5})^2 - (\\sqrt{5})^2 = (x+5) - 5 = x$.',
          hint3: '$2^2 - (\\sqrt{x})^2 = 4 - x$.',
          explanation: '1) $x-9$.  2) $(x+5)-5 = x$.  3) $4-x$. In every case both radicals get squared away, leaving a polynomial.',
        },
      },
      {
        id: 'rat1-wrap',
        type: 'text' as const,
        content: `## What You Now Have

Two tools, and that's all rationalizing ever uses:

- **Single radical** → multiply by that radical over itself ($\\sqrt{a}\\cdot\\sqrt{a}=a$).
- **Two-term radical** → multiply by its **conjugate** ($(\\sqrt{x}-2)(\\sqrt{x}+2)=x-4$).

In Part 2 we use the first tool to rationalize denominators; in Parts 4–6 the conjugate tool becomes the standard way to crack $\\frac{0}{0}$ limits on the AP exam.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rationalizing-techniques',
    sections: [
      {
        id: 'rat2-intro',
        type: 'text' as const,
        content: `# √ Rationalizing Techniques

**Part 2 of 7 — Rationalizing the Denominator**

---

> 🔑 **The Idea:** A radical in the denominator is removed by multiplying the fraction by a clever form of $1$ — either the radical over itself, or the conjugate over itself.`,
      },
      {
        id: 'rat2-single',
        type: 'text' as const,
        content: `## Single Radical in the Denominator

Multiply top and bottom by that radical.

### Example: $\\dfrac{6}{\\sqrt{2}}$

$$\\frac{6}{\\sqrt{2}}\\cdot\\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$$

### Example: $\\dfrac{5}{\\sqrt{x}}$

$$\\frac{5}{\\sqrt{x}}\\cdot\\frac{\\sqrt{x}}{\\sqrt{x}} = \\frac{5\\sqrt{x}}{x}$$

> 💡 Always **simplify the fraction afterward**: $\\dfrac{6\\sqrt{2}}{2}$ reduces to $3\\sqrt{2}$ because $\\frac{6}{2}=3$.`,
      },
      {
        id: 'rat2-conjugate-denom',
        type: 'text' as const,
        content: `## Two-Term Denominator → Use the Conjugate

When the denominator is a **sum or difference** involving a radical, multiplying by the same radical won't clear it — you need the **conjugate**.

### Example: $\\dfrac{1}{\\sqrt{5} - \\sqrt{3}}$

Multiply by the conjugate $\\dfrac{\\sqrt{5}+\\sqrt{3}}{\\sqrt{5}+\\sqrt{3}}$:

$$\\frac{1}{\\sqrt{5}-\\sqrt{3}}\\cdot\\frac{\\sqrt{5}+\\sqrt{3}}{\\sqrt{5}+\\sqrt{3}} = \\frac{\\sqrt{5}+\\sqrt{3}}{(\\sqrt{5})^2 - (\\sqrt{3})^2} = \\frac{\\sqrt{5}+\\sqrt{3}}{5-3} = \\frac{\\sqrt{5}+\\sqrt{3}}{2}$$

> ✅ **Check the denominator:** $(\\sqrt{5}-\\sqrt{3})(\\sqrt{5}+\\sqrt{3}) = 5 - 3 = 2$. Radical-free, exactly as planned.`,
      },
      {
        id: 'rat2-which-check',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Multiplier** 🔽

For each denominator, choose what to multiply numerator and denominator by.`,
        exercise: {
          dropdowns: [
            { label: 'To rationalize $\\dfrac{3}{\\sqrt{7}}$, multiply by:', options: ['$\\sqrt{7}$', '$\\sqrt{7}+1$', '$7$', '$\\sqrt{3}$'] },
            { label: 'To rationalize $\\dfrac{2}{\\sqrt{x}+1}$, multiply by:', options: ['$\\sqrt{x}-1$', '$\\sqrt{x}+1$', '$\\sqrt{x}$', '$x-1$'] },
            { label: 'To rationalize $\\dfrac{4}{3-\\sqrt{x}}$, multiply by:', options: ['$3+\\sqrt{x}$', '$3-\\sqrt{x}$', '$\\sqrt{x}$', '$\\sqrt{3}$'] },
          ],
          correctAnswers: ['$\\sqrt{7}$', '$\\sqrt{x}-1$', '$3+\\sqrt{x}$'],
          hint1: 'A lone radical needs that same radical over itself.',
          hint2: 'A two-term denominator needs its conjugate — same terms, flipped middle sign.',
          hint3: 'Conjugate of $\\sqrt{x}+1$ is $\\sqrt{x}-1$; conjugate of $3-\\sqrt{x}$ is $3+\\sqrt{x}$.',
          explanation: 'Single radical → multiply by the radical. Two-term denominator → multiply by its conjugate so the difference of squares clears both radicals.',
        },
      },
      {
        id: 'rat2-worked-conj',
        type: 'text' as const,
        content: `## A Fully Worked Conjugate Example

### Example: $\\dfrac{4}{\\sqrt{x} + 2}$

Multiply by the conjugate $\\dfrac{\\sqrt{x}-2}{\\sqrt{x}-2}$:

$$\\frac{4}{\\sqrt{x}+2}\\cdot\\frac{\\sqrt{x}-2}{\\sqrt{x}-2} = \\frac{4(\\sqrt{x}-2)}{(\\sqrt{x})^2 - 2^2} = \\frac{4(\\sqrt{x}-2)}{x-4}$$

The denominator is now a polynomial. Notice how the conjugate produced a factor of $(x-4)$ — **remember that**, because in limit problems $(x-4)$ is exactly the kind of factor we want to cancel.`,
      },
      {
        id: 'rat2-conj-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After rationalizing, $\\dfrac{1}{\\sqrt{5}-\\sqrt{3}}$ equals:',
              options: ['$\\dfrac{\\sqrt{5}+\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{5}-\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{5}+\\sqrt{3}}{8}$', '$\\sqrt{5}+\\sqrt{3}$'],
              correctAnswer: 0,
              explanation: 'Multiply by $\\frac{\\sqrt5+\\sqrt3}{\\sqrt5+\\sqrt3}$: denominator $5-3=2$, so $\\frac{\\sqrt5+\\sqrt3}{2}$.',
            },
            {
              question: 'When you rationalize $\\dfrac{4}{\\sqrt{x}+2}$ with its conjugate, the denominator becomes:',
              options: ['$x-4$', '$x+4$', '$\\sqrt{x}+4$', '$x-2$'],
              correctAnswer: 0,
              explanation: '$(\\sqrt{x}+2)(\\sqrt{x}-2)=(\\sqrt{x})^2-2^2=x-4$.',
            },
          ],
        },
      },
      {
        id: 'rat2-drill',
        type: 'input-boxes' as const,
        content: `**Rationalize the Denominator** 🧮

**1)** $\\dfrac{10}{\\sqrt{5}}$ simplifies to $a\\sqrt{5}$. Enter $a$.
**2)** In $\\dfrac{1}{\\sqrt{6}-2}$, after multiplying by the conjugate, the denominator becomes an integer. Enter it.
**3)** In $\\dfrac{3}{\\sqrt{x}-1}$, after rationalizing, the denominator is $x-1$. Enter the **numerator** as a product of $3$ and a binomial, e.g. \`3(√x+1)\` → type it as \`3(sqrt(x)+1)\`.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', '3(sqrt(x)+1)'],
          hint1: '$\\frac{10}{\\sqrt5}\\cdot\\frac{\\sqrt5}{\\sqrt5}=\\frac{10\\sqrt5}{5}=2\\sqrt5$, so $a=2$.',
          hint2: '$(\\sqrt6-2)(\\sqrt6+2)=6-4=2$.',
          hint3: 'Conjugate is $\\sqrt{x}+1$; numerator becomes $3(\\sqrt{x}+1)$, denominator $(\\sqrt{x})^2-1^2=x-1$.',
          explanation: '1) $a=2$.  2) $6-4=2$.  3) numerator $3(\\sqrt{x}+1)$ over denominator $x-1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rationalizing-techniques',
    sections: [
      {
        id: 'rat3-intro',
        type: 'text' as const,
        content: `# √ Rationalizing Techniques

**Part 3 of 7 — Rationalizing the Numerator**

---

> 🔑 **The Twist:** In calculus you will often **rationalize the numerator** instead of the denominator. It feels backwards, but it is the move that makes a $\\frac{0}{0}$ limit solvable.`,
      },
      {
        id: 'rat3-why-num',
        type: 'text' as const,
        content: `## Why Rationalize the *Numerator*?

Rationalizing the numerator means multiplying top and bottom by the **numerator's conjugate**. The radical leaves the top, and a clean polynomial factor appears that can **cancel with the denominator**.

### Example: $\\dfrac{\\sqrt{x} - 3}{x - 9}$

Multiply by the conjugate of the **numerator**, $\\dfrac{\\sqrt{x}+3}{\\sqrt{x}+3}$:

$$\\frac{\\sqrt{x}-3}{x-9}\\cdot\\frac{\\sqrt{x}+3}{\\sqrt{x}+3} = \\frac{(\\sqrt{x})^2 - 3^2}{(x-9)(\\sqrt{x}+3)} = \\frac{x-9}{(x-9)(\\sqrt{x}+3)}$$

Now cancel the common $(x-9)$:

$$= \\frac{1}{\\sqrt{x}+3}$$

> 💡 **That cancellation is the entire point.** The expression went from "radical over polynomial" to "$1$ over a radical sum" — and crucially, the factor that was about to make the denominator zero is gone.`,
      },
      {
        id: 'rat3-num-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To rationalize the numerator of $\\dfrac{\\sqrt{x}-5}{x-25}$, multiply numerator and denominator by:',
              options: ['$\\sqrt{x}+5$', '$\\sqrt{x}-5$', '$x+25$', '$\\sqrt{x}$'],
              correctAnswer: 0,
              explanation: 'Use the numerator\'s conjugate $\\sqrt{x}+5$. Then the top becomes $(\\sqrt{x})^2-5^2=x-25$, which cancels the denominator.',
            },
            {
              question: 'After rationalizing the numerator, $\\dfrac{\\sqrt{x}-5}{x-25}$ simplifies to:',
              options: ['$\\dfrac{1}{\\sqrt{x}+5}$', '$\\dfrac{1}{\\sqrt{x}-5}$', '$\\sqrt{x}+5$', '$\\dfrac{x-25}{\\sqrt{x}+5}$'],
              correctAnswer: 0,
              explanation: 'Top becomes $x-25$, which cancels the denominator $x-25$, leaving $\\frac{1}{\\sqrt{x}+5}$.',
            },
          ],
        },
      },
      {
        id: 'rat3-worked-num2',
        type: 'text' as const,
        content: `## A Second Worked Example

### Example: $\\dfrac{\\sqrt{x+4} - 2}{x}$

The numerator's conjugate is $\\sqrt{x+4}+2$:

$$\\frac{\\sqrt{x+4}-2}{x}\\cdot\\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2} = \\frac{(x+4) - 4}{x\\left(\\sqrt{x+4}+2\\right)} = \\frac{x}{x\\left(\\sqrt{x+4}+2\\right)}$$

Cancel the $x$:

$$= \\frac{1}{\\sqrt{x+4}+2}$$

> ✅ **Check the top:** $(\\sqrt{x+4})^2 - 2^2 = (x+4) - 4 = x$. The conjugate manufactured exactly the $x$ needed to cancel the denominator.`,
      },
      {
        id: 'rat3-num-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk the Steps** 🔽

You are simplifying $\\dfrac{\\sqrt{x+4}-2}{x}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Multiply top and bottom by:', options: ['$\\sqrt{x+4}+2$', '$\\sqrt{x+4}-2$', '$\\sqrt{x}+2$', '$x$'] },
            { label: 'New numerator becomes:', options: ['$x$', '$x+4$', '$x-4$', '$\\sqrt{x+4}$'] },
            { label: 'After canceling, the result is:', options: ['$\\dfrac{1}{\\sqrt{x+4}+2}$', '$\\dfrac{1}{\\sqrt{x+4}-2}$', '$\\sqrt{x+4}+2$', '$\\dfrac{x}{\\sqrt{x+4}+2}$'] },
          ],
          correctAnswers: ['$\\sqrt{x+4}+2$', '$x$', '$\\dfrac{1}{\\sqrt{x+4}+2}$'],
          hint1: 'Use the numerator\'s conjugate (flip the middle sign).',
          hint2: '$(\\sqrt{x+4})^2 - 2^2 = (x+4)-4 = x$.',
          hint3: 'The new top $x$ cancels the bottom $x$, leaving $\\frac{1}{\\sqrt{x+4}+2}$.',
          explanation: 'Conjugate $\\sqrt{x+4}+2$ gives numerator $x$, which cancels the denominator $x$, leaving $\\frac{1}{\\sqrt{x+4}+2}$.',
        },
      },
      {
        id: 'rat3-drill',
        type: 'input-boxes' as const,
        content: `**Rationalize & Simplify** 🧮

Each expression simplifies to $\\dfrac{1}{(\\text{radical sum})}$. Enter the simplified **denominator**.

**1)** $\\dfrac{\\sqrt{x}-7}{x-49} \\;\\to\\; \\dfrac{1}{\\,?\\,}$  *(type as* \`sqrt(x)+7\` *)*
**2)** $\\dfrac{\\sqrt{x+9}-3}{x} \\;\\to\\; \\dfrac{1}{\\,?\\,}$  *(type as* \`sqrt(x+9)+3\` *)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['sqrt(x)+7', 'sqrt(x+9)+3'],
          hint1: 'Numerator conjugate is $\\sqrt{x}+7$; top becomes $x-49$, which cancels.',
          hint2: 'Numerator conjugate is $\\sqrt{x+9}+3$; top becomes $(x+9)-9=x$, which cancels.',
          hint3: 'In each case you are left with $1$ over the conjugate (radical sum).',
          explanation: '1) $\\frac{1}{\\sqrt{x}+7}$.  2) $\\frac{1}{\\sqrt{x+9}+3}$. The polynomial factor in the numerator cancels the denominator every time.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rationalizing-techniques',
    sections: [
      {
        id: 'rat4-intro',
        type: 'text' as const,
        content: `# √ Rationalizing Techniques

**Part 4 of 7 — The Conjugate Trick for $\\frac{0}{0}$ Limits**

---

> 🔑 **The Payoff:** When direct substitution gives the indeterminate form $\\dfrac{0}{0}$ and a radical is involved, **rationalize, cancel, then substitute again.** This is one of the most-tested limit techniques on the AP exam.`,
      },
      {
        id: 'rat4-form',
        type: 'text' as const,
        content: `## When to Reach for This Technique

Try **direct substitution** first. If you get a real number, you're done. If you get $\\dfrac{0}{0}$ **and a square root is present**, rationalize.

### Worked Limit: $\\displaystyle\\lim_{x\\to 4}\\frac{\\sqrt{x}-2}{x-4}$

**Step 1 — Substitute.** $\\dfrac{\\sqrt{4}-2}{4-4} = \\dfrac{0}{0}$. Indeterminate — proceed.

**Step 2 — Rationalize the numerator** with conjugate $\\sqrt{x}+2$:

$$\\frac{\\sqrt{x}-2}{x-4}\\cdot\\frac{\\sqrt{x}+2}{\\sqrt{x}+2} = \\frac{x-4}{(x-4)(\\sqrt{x}+2)}$$

**Step 3 — Cancel** $(x-4)$:

$$= \\frac{1}{\\sqrt{x}+2}$$

**Step 4 — Substitute again:** $\\dfrac{1}{\\sqrt{4}+2} = \\dfrac{1}{2+2} = \\boxed{\\dfrac{1}{4}}$`,
      },
      {
        id: 'rat4-form-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Substituting $x=4$ into $\\dfrac{\\sqrt{x}-2}{x-4}$ gives $\\frac{0}{0}$. What does this tell you?',
              options: [
                'The limit might exist; an algebraic technique like rationalizing is needed.',
                'The limit is definitely $0$.',
                'The limit does not exist.',
                'The limit is definitely $\\infty$.',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{0}{0}$ is an indeterminate form — it does NOT determine the limit. Rationalize/cancel and re-substitute to find the actual value.',
            },
            {
              question: 'In $\\displaystyle\\lim_{x\\to 4}\\frac{\\sqrt{x}-2}{x-4}$, which conjugate do you multiply by?',
              options: ['$\\sqrt{x}+2$', '$\\sqrt{x}-2$', '$x+4$', '$\\sqrt{x-4}$'],
              correctAnswer: 0,
              explanation: 'Rationalize the radical numerator with its conjugate $\\sqrt{x}+2$, producing $(x-4)$ on top to cancel the denominator.',
            },
          ],
        },
      },
      {
        id: 'rat4-worked2',
        type: 'text' as const,
        content: `## A Limit Where the Radical Is the Whole Bottom

### Worked Limit: $\\displaystyle\\lim_{x\\to 9}\\frac{x-9}{\\sqrt{x}-3}$

**Substitute:** $\\dfrac{9-9}{\\sqrt{9}-3} = \\dfrac{0}{0}$.

Here the radical is in the **denominator**, so rationalize the **denominator** with conjugate $\\sqrt{x}+3$:

$$\\frac{x-9}{\\sqrt{x}-3}\\cdot\\frac{\\sqrt{x}+3}{\\sqrt{x}+3} = \\frac{(x-9)(\\sqrt{x}+3)}{x-9} = \\sqrt{x}+3$$

**Substitute again:** $\\sqrt{9}+3 = 3+3 = 6$.

$$\\lim_{x\\to 9}\\frac{x-9}{\\sqrt{x}-3} = 6$$

> 💡 **Rule of thumb:** multiply by the conjugate of **whichever part contains the radical** — numerator or denominator. The difference of squares clears the radical and a cancelable factor appears.`,
      },
      {
        id: 'rat4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Run the Limit** 🔽

Evaluate $\\displaystyle\\lim_{x\\to 4}\\frac{\\sqrt{x}-2}{x-4}$ step by step.`,
        exercise: {
          dropdowns: [
            { label: 'Direct substitution gives:', options: ['$\\frac{0}{0}$ (indeterminate)', '$\\frac{1}{4}$', '$0$', 'undefined (DNE)'] },
            { label: 'Multiply numerator and denominator by:', options: ['$\\sqrt{x}+2$', '$\\sqrt{x}-2$', '$x-4$', '$\\sqrt{x-4}$'] },
            { label: 'After canceling $(x-4)$ you get:', options: ['$\\dfrac{1}{\\sqrt{x}+2}$', '$\\dfrac{1}{\\sqrt{x}-2}$', '$\\sqrt{x}+2$', '$x-4$'] },
            { label: 'The limit equals:', options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$4$', '$0$'] },
          ],
          correctAnswers: ['$\\frac{0}{0}$ (indeterminate)', '$\\sqrt{x}+2$', '$\\dfrac{1}{\\sqrt{x}+2}$', '$\\dfrac{1}{4}$'],
          hint1: 'Plug in $x=4$: $\\frac{\\sqrt4-2}{4-4}=\\frac{0}{0}$.',
          hint2: 'Use the numerator conjugate $\\sqrt{x}+2$; the top becomes $x-4$.',
          hint3: 'After canceling, plug $x=4$ into $\\frac{1}{\\sqrt{x}+2}=\\frac{1}{2+2}=\\frac14$.',
          explanation: '$\\frac{0}{0}\\to$ rationalize with $\\sqrt{x}+2 \\to \\frac{1}{\\sqrt{x}+2}\\to$ substitute $\\to \\frac14$.',
        },
      },
      {
        id: 'rat4-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Limits** 🧮

Each is a $\\frac{0}{0}$ form. Rationalize, cancel, and substitute. Enter the limit as a fraction (e.g. \`1/6\`) or integer.

**1)** $\\displaystyle\\lim_{x\\to 0}\\frac{\\sqrt{x+9}-3}{x} = \\,?$
**2)** $\\displaystyle\\lim_{x\\to 9}\\frac{x-9}{\\sqrt{x}-3} = \\,?$
**3)** $\\displaystyle\\lim_{x\\to 25}\\frac{\\sqrt{x}-5}{x-25} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/6', '6', '1/10'],
          hint1: 'Conjugate $\\sqrt{x+9}+3$: top becomes $(x+9)-9=x$, cancels the $x$, leaving $\\frac{1}{\\sqrt{x+9}+3}\\to\\frac{1}{\\sqrt9+3}=\\frac16$.',
          hint2: 'Conjugate $\\sqrt{x}+3$ in the denominator gives $\\sqrt{x}+3\\to\\sqrt9+3=6$.',
          hint3: 'Conjugate $\\sqrt{x}+5$: top becomes $x-25$, cancels, leaving $\\frac{1}{\\sqrt{x}+5}\\to\\frac{1}{5+5}=\\frac{1}{10}$.',
          explanation: '1) $\\frac{1}{\\sqrt9+3}=\\frac16$.  2) $\\sqrt9+3=6$.  3) $\\frac{1}{\\sqrt{25}+5}=\\frac{1}{10}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rationalizing-techniques',
    sections: [
      {
        id: 'rat5-intro',
        type: 'text' as const,
        content: `# √ Rationalizing Techniques

**Part 5 of 7 — The Difference Quotient & Derivatives from the Definition**

---

> 🔑 **Where this really lives:** The limit definition of the derivative, $f'(x)=\\displaystyle\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}$, produces a $\\frac{0}{0}$ form. For radical functions, rationalizing is the **only** elementary way through.`,
      },
      {
        id: 'rat5-defn',
        type: 'text' as const,
        content: `## Deriving $\\dfrac{d}{dx}\\sqrt{x}$ from Scratch

Let $f(x)=\\sqrt{x}$. The definition gives:

$$f'(x) = \\lim_{h\\to 0}\\frac{\\sqrt{x+h}-\\sqrt{x}}{h}$$

Substituting $h=0$ gives $\\frac{0}{0}$. Rationalize the **numerator** with conjugate $\\sqrt{x+h}+\\sqrt{x}$:

$$\\frac{\\sqrt{x+h}-\\sqrt{x}}{h}\\cdot\\frac{\\sqrt{x+h}+\\sqrt{x}}{\\sqrt{x+h}+\\sqrt{x}} = \\frac{(x+h)-x}{h\\left(\\sqrt{x+h}+\\sqrt{x}\\right)}$$

The numerator collapses to $h$:

$$= \\frac{h}{h\\left(\\sqrt{x+h}+\\sqrt{x}\\right)} = \\frac{1}{\\sqrt{x+h}+\\sqrt{x}}$$

Now let $h\\to 0$:

$$f'(x) = \\frac{1}{\\sqrt{x}+\\sqrt{x}} = \\frac{1}{2\\sqrt{x}}$$

> ✅ **Check against the power rule:** $\\sqrt{x}=x^{1/2}$, so $\\frac{d}{dx}x^{1/2}=\\frac12 x^{-1/2}=\\frac{1}{2\\sqrt{x}}$. ✓ Rationalizing reproduces the power rule exactly.`,
      },
      {
        id: 'rat5-defn-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $\\displaystyle\\lim_{h\\to 0}\\frac{\\sqrt{x+h}-\\sqrt{x}}{h}$, after rationalizing, the numerator simplifies to:',
              options: ['$h$', '$2x+h$', '$\\sqrt{x+h}+\\sqrt{x}$', '$x$'],
              correctAnswer: 0,
              explanation: '$(\\sqrt{x+h})^2-(\\sqrt{x})^2 = (x+h)-x = h$. That $h$ cancels the $h$ in the denominator.',
            },
            {
              question: 'The reason we rationalize the numerator (not the denominator) in the difference quotient is to:',
              options: [
                'create a factor that cancels the $h$ in the denominator',
                'remove the variable $x$',
                'make the denominator rational',
                'avoid using the conjugate',
              ],
              correctAnswer: 0,
              explanation: 'The numerator holds the radical difference; rationalizing it produces an $h$ on top that cancels the $h$ on the bottom, clearing the $\\frac{0}{0}$.',
            },
          ],
        },
      },
      {
        id: 'rat5-worked-num',
        type: 'text' as const,
        content: `## A Difference Quotient with a Shifted Radical

### Derive $f'(x)$ for $f(x)=\\sqrt{x+1}$

$$f'(x)=\\lim_{h\\to 0}\\frac{\\sqrt{x+h+1}-\\sqrt{x+1}}{h}$$

Multiply by the conjugate $\\sqrt{x+h+1}+\\sqrt{x+1}$:

$$= \\lim_{h\\to 0}\\frac{(x+h+1)-(x+1)}{h\\left(\\sqrt{x+h+1}+\\sqrt{x+1}\\right)} = \\lim_{h\\to 0}\\frac{h}{h\\left(\\sqrt{x+h+1}+\\sqrt{x+1}\\right)}$$

Cancel $h$, then let $h\\to 0$:

$$= \\frac{1}{\\sqrt{x+1}+\\sqrt{x+1}} = \\frac{1}{2\\sqrt{x+1}}$$

> 💡 Same machinery, every time: conjugate → numerator becomes $h$ → cancel → substitute.`,
      },
      {
        id: 'rat5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Derivative** 🔽

You are differentiating $f(x)=\\sqrt{x}$ from the definition.`,
        exercise: {
          dropdowns: [
            { label: 'The difference quotient is:', options: ['$\\dfrac{\\sqrt{x+h}-\\sqrt{x}}{h}$', '$\\dfrac{\\sqrt{x}-\\sqrt{h}}{h}$', '$\\dfrac{\\sqrt{x+h}}{h}$', '$\\dfrac{\\sqrt{x}+\\sqrt{h}}{h}$'] },
            { label: 'Multiply by the conjugate:', options: ['$\\sqrt{x+h}+\\sqrt{x}$', '$\\sqrt{x+h}-\\sqrt{x}$', '$\\sqrt{x}+\\sqrt{h}$', '$\\sqrt{x+h}$'] },
            { label: 'Numerator becomes:', options: ['$h$', '$2\\sqrt{x}$', '$x+h$', '$x$'] },
            { label: 'After $h\\to 0$, the derivative is:', options: ['$\\dfrac{1}{2\\sqrt{x}}$', '$\\dfrac{1}{\\sqrt{x}}$', '$2\\sqrt{x}$', '$\\dfrac{1}{2x}$'] },
          ],
          correctAnswers: ['$\\dfrac{\\sqrt{x+h}-\\sqrt{x}}{h}$', '$\\sqrt{x+h}+\\sqrt{x}$', '$h$', '$\\dfrac{1}{2\\sqrt{x}}$'],
          hint1: 'The definition is $\\frac{f(x+h)-f(x)}{h}$ with $f(x)=\\sqrt{x}$.',
          hint2: 'Conjugate flips the middle sign: $\\sqrt{x+h}+\\sqrt{x}$.',
          hint3: '$(x+h)-x=h$; cancel with the bottom $h$; let $h\\to0$: $\\frac{1}{\\sqrt{x}+\\sqrt{x}}=\\frac{1}{2\\sqrt{x}}$.',
          explanation: 'Conjugate gives numerator $h$, cancels the denominator $h$, and the limit yields $\\frac{1}{2\\sqrt{x}}$ — matching the power rule.',
        },
      },
      {
        id: 'rat5-drill',
        type: 'input-boxes' as const,
        content: `**Derivatives from the Definition** 🧮

Use rationalizing on the difference quotient.

**1)** For $f(x)=\\sqrt{x}$, evaluate $f'(9)$. *(decimal or fraction)*
**2)** For $f(x)=\\sqrt{x+1}$, $f'(x)=\\dfrac{1}{2\\sqrt{x+1}}$. Find $f'(3)$. *(decimal or fraction)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/6', '1/4'],
          hint1: '$f\'(x)=\\frac{1}{2\\sqrt{x}}$, so $f\'(9)=\\frac{1}{2\\sqrt9}=\\frac{1}{2\\cdot3}=\\frac16$.',
          hint2: '$f\'(3)=\\frac{1}{2\\sqrt{3+1}}=\\frac{1}{2\\sqrt4}=\\frac{1}{2\\cdot2}=\\frac14$.',
          hint3: 'Both reduce to $\\frac{1}{2\\sqrt{\\text{input}}}$ evaluated at the point.',
          explanation: '1) $\\frac{1}{2\\sqrt9}=\\frac16$.  2) $\\frac{1}{2\\sqrt4}=\\frac14$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'rationalizing-techniques',
    sections: [
      {
        id: 'rat6-intro',
        type: 'text' as const,
        content: `# √ Rationalizing Techniques

**Part 6 of 7 — Harder Cases: Two Radicals & Limits at Infinity**

---

> 🔑 **Stretch goals:** The conjugate idea generalizes. It cracks limits with **two radical terms**, and a related "multiply by the conjugate" move handles certain $\\infty - \\infty$ limits at infinity.`,
      },
      {
        id: 'rat6-two-radicals',
        type: 'text' as const,
        content: `## Two Radicals in the Numerator

### Worked Limit: $\\displaystyle\\lim_{x\\to 0}\\frac{\\sqrt{x+4}-\\sqrt{4-x}}{x}$

**Substitute:** $\\dfrac{\\sqrt4-\\sqrt4}{0}=\\dfrac{0}{0}$.

The conjugate of $\\sqrt{x+4}-\\sqrt{4-x}$ is $\\sqrt{x+4}+\\sqrt{4-x}$:

$$\\frac{\\sqrt{x+4}-\\sqrt{4-x}}{x}\\cdot\\frac{\\sqrt{x+4}+\\sqrt{4-x}}{\\sqrt{x+4}+\\sqrt{4-x}} = \\frac{(x+4)-(4-x)}{x\\left(\\sqrt{x+4}+\\sqrt{4-x}\\right)}$$

The numerator simplifies: $(x+4)-(4-x) = 2x$:

$$= \\frac{2x}{x\\left(\\sqrt{x+4}+\\sqrt{4-x}\\right)} = \\frac{2}{\\sqrt{x+4}+\\sqrt{4-x}}$$

**Substitute** $x=0$: $\\dfrac{2}{\\sqrt4+\\sqrt4} = \\dfrac{2}{2+2} = \\dfrac{1}{2}$.

> ⚠️ **Watch the signs** when squaring the second term: $-(4-x) = -4+x = x-4$, so the top is $(x+4)+(x-4)=2x$, not $0$.`,
      },
      {
        id: 'rat6-two-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rationalizing $\\sqrt{x+4}-\\sqrt{4-x}$ with its conjugate makes the numerator equal to:',
              options: ['$2x$', '$0$', '$8$', '$2\\sqrt{x}$'],
              correctAnswer: 0,
              explanation: '$(\\sqrt{x+4})^2-(\\sqrt{4-x})^2 = (x+4)-(4-x) = x+4-4+x = 2x$.',
            },
            {
              question: 'Why does $\\displaystyle\\lim_{x\\to0}\\frac{\\sqrt{x+4}-\\sqrt{4-x}}{x}$ equal $\\frac12$, not $0$?',
              options: [
                'After rationalizing, the $x$ cancels, leaving $\\frac{2}{\\sqrt{x+4}+\\sqrt{4-x}}\\to\\frac{2}{4}$',
                'Because $\\sqrt4-\\sqrt4=0$',
                'Because the denominator is $x$',
                'Because the limit does not exist',
              ],
              correctAnswer: 0,
              explanation: 'The $\\frac{0}{0}$ form is resolved by canceling the $x$: $\\frac{2x}{x(\\cdots)}=\\frac{2}{\\sqrt{x+4}+\\sqrt{4-x}}$, then substitute to get $\\frac{2}{4}=\\frac12$.',
            },
          ],
        },
      },
      {
        id: 'rat6-infinity',
        type: 'text' as const,
        content: `## Limits at Infinity: $\\sqrt{\\,\\cdots\\,} - \\sqrt{\\,\\cdots\\,}$

For $\\infty-\\infty$ forms with square roots, multiply by the conjugate over itself to turn the difference into a manageable fraction.

### Worked Limit: $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+x}-x\\right)$

**Form:** $\\infty-\\infty$. Multiply by $\\dfrac{\\sqrt{x^2+x}+x}{\\sqrt{x^2+x}+x}$:

$$\\sqrt{x^2+x}-x = \\frac{(x^2+x)-x^2}{\\sqrt{x^2+x}+x} = \\frac{x}{\\sqrt{x^2+x}+x}$$

Divide top and bottom by $x$ (for $x>0$, $\\sqrt{x^2}=x$, so $\\sqrt{x^2+x}=x\\sqrt{1+\\frac1x}$):

$$= \\frac{1}{\\sqrt{1+\\frac1x}+1} \\xrightarrow{\\;x\\to\\infty\\;} \\frac{1}{\\sqrt{1}+1} = \\frac{1}{2}$$

> 💡 **Pattern:** the conjugate converts $\\infty-\\infty$ into $\\frac{\\text{polynomial}}{\\text{big radical}}$, which you finish by dividing by the highest power of $x$.`,
      },
      {
        id: 'rat6-infinity-dropdown',
        type: 'dropdown-select' as const,
        content: `**Limit at Infinity** 🔽

Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+x}-x\\right)$.`,
        exercise: {
          dropdowns: [
            { label: 'The form is:', options: ['$\\infty-\\infty$ (indeterminate)', '$\\frac00$', '$\\frac{\\infty}{\\infty}$', '$0$'] },
            { label: 'Multiply by the conjugate:', options: ['$\\sqrt{x^2+x}+x$', '$\\sqrt{x^2+x}-x$', '$x$', '$\\sqrt{x^2}+x$'] },
            { label: 'The numerator becomes:', options: ['$x$', '$x^2$', '$2x$', '$x^2+x$'] },
            { label: 'The limit equals:', options: ['$\\dfrac{1}{2}$', '$0$', '$1$', '$\\infty$'] },
          ],
          correctAnswers: ['$\\infty-\\infty$ (indeterminate)', '$\\sqrt{x^2+x}+x$', '$x$', '$\\dfrac{1}{2}$'],
          hint1: 'As $x\\to\\infty$ both $\\sqrt{x^2+x}$ and $x$ blow up: $\\infty-\\infty$.',
          hint2: 'Conjugate of $\\sqrt{x^2+x}-x$ is $\\sqrt{x^2+x}+x$.',
          hint3: 'Numerator $(x^2+x)-x^2=x$; divide by $x$ to get $\\frac{1}{\\sqrt{1+1/x}+1}\\to\\frac12$.',
          explanation: 'Conjugate gives $\\frac{x}{\\sqrt{x^2+x}+x}$; dividing by $x$ yields $\\frac{1}{\\sqrt{1+1/x}+1}\\to\\frac{1}{2}$.',
        },
      },
      {
        id: 'rat6-drill',
        type: 'input-boxes' as const,
        content: `**Harder Limits** 🧮

Rationalize with the conjugate, simplify, and evaluate. Enter a fraction or integer.

**1)** $\\displaystyle\\lim_{x\\to 0}\\frac{\\sqrt{4+x}-\\sqrt{4-x}}{x} = \\,?$
**2)** $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+6x}-x\\right) = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/2', '3'],
          hint1: 'Conjugate $\\sqrt{4+x}+\\sqrt{4-x}$: numerator $(4+x)-(4-x)=2x$; cancel $x$ → $\\frac{2}{\\sqrt{4+x}+\\sqrt{4-x}}\\to\\frac{2}{2+2}=\\frac12$.',
          hint2: 'Conjugate gives $\\frac{6x}{\\sqrt{x^2+6x}+x}$; divide by $x$ → $\\frac{6}{\\sqrt{1+6/x}+1}\\to\\frac{6}{2}=3$.',
          hint3: 'In #2 the numerator is $(x^2+6x)-x^2=6x$; the limit is $\\frac{6}{1+1}=3$.',
          explanation: '1) $\\frac{2}{\\sqrt4+\\sqrt4}=\\frac{2}{4}=\\frac12$.  2) $\\frac{6}{\\sqrt1+1}=\\frac{6}{2}=3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'rationalizing-techniques',
    sections: [
      {
        id: 'rat7-intro',
        type: 'text' as const,
        content: `# √ Rationalizing Techniques

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) rationalize denominators and numerators, (2) resolve $\\frac{0}{0}$ limits with the conjugate trick, (3) build derivatives from the definition, and (4) handle two-radical and $\\infty-\\infty$ limits. Time to put it together.`,
      },
      {
        id: 'rat7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Move |
|-----------|------|
| Single radical in denominator | multiply by $\\dfrac{\\sqrt{a}}{\\sqrt{a}}$ |
| Two-term radical denominator | multiply by the **conjugate** over itself |
| $\\frac{0}{0}$ limit with a radical | rationalize the radical part, **cancel**, re-substitute |
| Difference quotient with $\\sqrt{\\,}$ | rationalize numerator → top becomes $h$ → cancel |
| $\\infty-\\infty$ with $\\sqrt{\\,}$ | multiply by conjugate, then divide by highest power of $x$ |

> ⚠️ **Top mistakes:** forgetting the cancellation is the *point* (not the neatness), sign errors when squaring the second radical, and rationalizing the wrong side. Always re-substitute at the end.`,
      },
      {
        id: 'rat7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\lim_{x\\to 16}\\frac{\\sqrt{x}-4}{x-16}$.',
              options: ['$\\dfrac{1}{8}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{16}$', '$0$'],
              correctAnswer: 0,
              explanation: 'Conjugate $\\sqrt{x}+4$: $\\frac{x-16}{(x-16)(\\sqrt{x}+4)}=\\frac{1}{\\sqrt{x}+4}\\to\\frac{1}{\\sqrt{16}+4}=\\frac{1}{8}$.',
            },
            {
              question: 'Rationalize $\\dfrac{2}{\\sqrt{x}-3}$. The result is:',
              options: ['$\\dfrac{2(\\sqrt{x}+3)}{x-9}$', '$\\dfrac{2(\\sqrt{x}-3)}{x-9}$', '$\\dfrac{2\\sqrt{x}+3}{x-9}$', '$\\dfrac{2}{x-9}$'],
              correctAnswer: 0,
              explanation: 'Multiply by conjugate $\\sqrt{x}+3$: numerator $2(\\sqrt{x}+3)$, denominator $(\\sqrt{x})^2-3^2=x-9$.',
            },
          ],
        },
      },
      {
        id: 'rat7-mixed2',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

**1)** $\\displaystyle\\lim_{x\\to 0}\\frac{\\sqrt{x+25}-5}{x} = \\,?$  *(fraction)*
**2)** For $f(x)=\\sqrt{x}$, the derivative from the definition is $\\dfrac{1}{2\\sqrt{x}}$. Find $f'(16)$. *(fraction)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/10', '1/8'],
          hint1: 'Conjugate $\\sqrt{x+25}+5$: top $(x+25)-25=x$, cancels → $\\frac{1}{\\sqrt{x+25}+5}\\to\\frac{1}{\\sqrt{25}+5}=\\frac{1}{10}$.',
          hint2: '$f\'(16)=\\frac{1}{2\\sqrt{16}}=\\frac{1}{2\\cdot4}=\\frac18$.',
          hint3: 'Both evaluate $\\frac{1}{\\text{radical sum}}$ at the given point.',
          explanation: '1) $\\frac{1}{\\sqrt{25}+5}=\\frac{1}{10}$.  2) $\\frac{1}{2\\cdot4}=\\frac18$.',
        },
      },
      {
        id: 'rat7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'To rationalize the denominator of $\\dfrac{1}{\\sqrt{7}+\\sqrt{2}}$, multiply by:',
              options: ['$\\dfrac{\\sqrt{7}-\\sqrt{2}}{\\sqrt{7}-\\sqrt{2}}$', '$\\dfrac{\\sqrt{7}+\\sqrt{2}}{\\sqrt{7}+\\sqrt{2}}$', '$\\dfrac{\\sqrt{7}}{\\sqrt{7}}$', '$\\dfrac{\\sqrt{2}}{\\sqrt{2}}$'],
              correctAnswer: 0,
              explanation: 'Use the conjugate $\\sqrt{7}-\\sqrt{2}$. The denominator becomes $(\\sqrt7)^2-(\\sqrt2)^2=7-2=5$, clearing both radicals.',
            },
            {
              question: 'Evaluate $\\displaystyle\\lim_{x\\to 9}\\frac{\\sqrt{x}-3}{x-9}$.',
              options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{9}$', '$6$'],
              correctAnswer: 0,
              explanation: 'Conjugate $\\sqrt{x}+3$: $\\frac{x-9}{(x-9)(\\sqrt{x}+3)}=\\frac{1}{\\sqrt{x}+3}\\to\\frac{1}{\\sqrt9+3}=\\frac{1}{6}$.',
            },
            {
              question: 'In the difference quotient for $f(x)=\\sqrt{x}$, why do we rationalize the numerator?',
              options: [
                'to produce an $h$ on top that cancels the $h$ in the denominator',
                'to make the answer a whole number',
                'to remove $x$ from the expression',
                'because the denominator already has a radical',
              ],
              correctAnswer: 0,
              explanation: 'Rationalizing turns $\\sqrt{x+h}-\\sqrt{x}$ into $(x+h)-x=h$, which cancels the denominator\'s $h$ and clears the $\\frac{0}{0}$, leaving $\\frac{1}{2\\sqrt{x}}$.',
            },
          ],
        },
      },
    ],
  },
]
