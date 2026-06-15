import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Simplifying Rational Expressions (Algebra 2).
 * Registry key / DB Topic.slug: 'simplifying-rationals-algebra2'.
 * 5 parts, gold-standard structure: what is a rational expression + the cancel rule →
 * factoring toolkit for numerator/denominator → simplifying by cancelling common factors →
 * domain restrictions & the "opposite factor" trick → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every factorization, cancellation, and restricted value was verified before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'simplifying-rationals-algebra2',
    sections: [
      {
        id: 'srx1-intro',
        type: 'text' as const,
        content: `# ➗ Simplifying Rational Expressions

**Part 1 of 5 — What Is a Rational Expression?**

---

### Topics in This Part

| Section |
|---------|
| Rational Expressions = Polynomial Fractions |
| The Golden Rule: Cancel Common **Factors** |
| Why You Can Never Cancel Terms |

> 🔑 **Key Concept:** A rational expression is just a fraction whose top and bottom are polynomials. Simplifying one works exactly like reducing $\\dfrac{12}{18}$ to $\\dfrac{2}{3}$ — you cancel what the top and bottom have *in common*. The whole skill comes down to one word: **factor**.`,
      },
      {
        id: 'srx1-define',
        type: 'text' as const,
        content: `## Rational Expressions Are Polynomial Fractions

A **rational expression** is a quotient $\\dfrac{P}{Q}$ where $P$ and $Q$ are polynomials and $Q \\ne 0$.

| Expression | Numerator $P$ | Denominator $Q$ |
|------------|---------------|------------------|
| $\\dfrac{3x}{x+2}$ | $3x$ | $x+2$ |
| $\\dfrac{x^2-9}{x^2+5x+6}$ | $x^2-9$ | $x^2+5x+6$ |
| $\\dfrac{6}{x-1}$ | $6$ | $x-1$ |

Reducing a numerical fraction relies on this fact:

$$\\frac{12}{18} = \\frac{6\\cdot 2}{6\\cdot 3} = \\frac{\\cancel{6}\\cdot 2}{\\cancel{6}\\cdot 3} = \\frac{2}{3}$$

You cancelled the **common factor** $6$. Rational expressions work the same way — but first you have to *factor* the top and bottom so the common pieces are visible.

> 🔑 **Key Idea:** To simplify $\\dfrac{P}{Q}$, factor $P$ and $Q$ completely, then divide out any factor that appears in both.`,
      },
      {
        id: 'srx1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a rational expression?',
              options: ['$\\dfrac{x^2 - 4}{x + 5}$', '$\\sqrt{x} + 3$', '$x^2 - 4$', '$2^x$'],
              correctAnswer: 0,
              explanation: 'A rational expression is a ratio of two polynomials. Only $\\dfrac{x^2-4}{x+5}$ is a polynomial divided by a polynomial. $\\sqrt{x}$ and $2^x$ are not polynomials, and $x^2-4$ is a polynomial but not written as a quotient.',
            },
            {
              question: 'Reducing $\\dfrac{20}{30}$ to lowest terms, what common factor do you cancel?',
              options: ['$10$', '$5$', '$2$', '$6$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{20}{30} = \\dfrac{10\\cdot 2}{10\\cdot 3} = \\dfrac{2}{3}$. The greatest common factor is $10$.',
            },
          ],
        },
      },
      {
        id: 'srx1-golden-rule',
        type: 'text' as const,
        content: `## The Golden Rule: Cancel **Factors**, Never **Terms**

You may only cancel something that is **multiplied** across the *entire* numerator and the *entire* denominator — a **common factor**.

$$\\frac{5\\cdot(x+1)}{8\\cdot(x+1)} = \\frac{5}{8} \\qquad \\color{green}{\\checkmark \\;\\text{factor cancelled}}$$

You may **never** cancel a **term** — something connected by $+$ or $-$:

$$\\frac{x+1}{x+5} \\ne \\frac{1}{5} \\qquad \\color{red}{✗ \\;\\text{you cannot cancel the } x}$$

The $x$ in $x+1$ is *added* to $1$, not multiplied by the whole top. There is no common **factor** here, so nothing cancels.

> ⚠️ **The #1 mistake in this entire topic:** cancelling across a $+$ or $-$ sign. If a piece isn't multiplying the *whole* numerator and the *whole* denominator, it stays put.`,
      },
      {
        id: 'srx1-legal-check',
        type: 'multiple-choice' as const,
        content: `**Legal or Illegal?** 🎯

Decide whether each cancellation is allowed.`,
        exercise: {
          questions: [
            {
              question: 'Is $\\dfrac{x+3}{x+7} = \\dfrac{3}{7}$ a legal simplification?',
              options: ['Illegal — $x$ is a term, not a common factor', 'Legal — cancel the $x$ on top and bottom', 'Legal — it reduces to $\\frac{3}{7}$', 'Legal — $x$ divided by $x$ is $1$'],
              correctAnswer: 0,
              explanation: 'In $x+3$ the $x$ is added to $3$, so it is a TERM, not a factor of the whole numerator. You can only cancel common factors. Nothing cancels here, so $\\dfrac{x+3}{x+7}$ is already simplified.',
            },
            {
              question: 'Is $\\dfrac{6(x-2)}{9(x-2)} = \\dfrac{6}{9} = \\dfrac{2}{3}$ legal?',
              options: ['Legal — $(x-2)$ is a common factor, then reduce $\\frac{6}{9}$', 'Illegal — you cannot cancel $(x-2)$', 'Illegal — you cannot reduce $\\frac{6}{9}$', 'Legal — but the answer is $\\frac{6}{9}$'],
              correctAnswer: 0,
              explanation: '$(x-2)$ multiplies the whole top and the whole bottom, so it is a common factor and cancels. Then $\\dfrac{6}{9} = \\dfrac{2}{3}$. Both steps are legal.',
            },
          ],
        },
      },
      {
        id: 'srx1-wrap',
        type: 'text' as const,
        content: `## Where We're Headed

Almost every rational expression starts out looking like nothing cancels:

$$\\frac{x^2 - 9}{x^2 + 5x + 6}$$

But once both polynomials are **factored**, common factors appear:

$$\\frac{(x-3)(x+3)}{(x+2)(x+3)} = \\frac{x-3}{x+2}$$

So the real skill is **factoring**. In Part 2 we sharpen the four factoring tools you'll use over and over, and in Part 3 we put them to work cancelling.`,
      },
      {
        id: 'srx1-warmup-drill',
        type: 'input-boxes' as const,
        content: `**Warm-Up: Spot the Common Factor** 🧮

Reduce each numerical fraction to lowest terms by cancelling the greatest common factor. Enter your answer as a fraction like \`2/3\`.

**1)** $\\dfrac{14}{21} = \\,?$
**2)** $\\dfrac{15(x+1)}{25(x+1)} = \\,?$  *(cancel the $(x+1)$, then reduce the numbers)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2/3', '3/5'],
          hint1: 'For #1, the GCF of $14$ and $21$ is $7$: $\\dfrac{14}{21} = \\dfrac{7\\cdot 2}{7\\cdot 3}$.',
          hint2: 'For #2, the common factor $(x+1)$ cancels, leaving $\\dfrac{15}{25}$.',
          hint3: 'Then reduce $\\dfrac{15}{25}$ by its GCF $5$: $\\dfrac{5\\cdot 3}{5\\cdot 5}$.',
          explanation: '1) $\\dfrac{14}{21} = \\dfrac{2}{3}$ (GCF $7$). 2) Cancel $(x+1)$ to get $\\dfrac{15}{25}$, then reduce by $5$: $\\dfrac{3}{5}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'simplifying-rationals-algebra2',
    sections: [
      {
        id: 'srx2-intro',
        type: 'text' as const,
        content: `# ➗ Simplifying Rational Expressions

**Part 2 of 5 — The Factoring Toolkit**

---

> 🔑 **The Idea:** You can't cancel a common factor until you can *see* one. These four factoring moves reveal the hidden factors in almost every Algebra 2 rational expression.`,
      },
      {
        id: 'srx2-toolkit',
        type: 'text' as const,
        content: `## Four Factoring Moves

| Move | Pattern | Example |
|------|---------|---------|
| **GCF** | $ab + ac = a(b+c)$ | $6x + 9 = 3(2x+3)$ |
| **Difference of squares** | $a^2 - b^2 = (a-b)(a+b)$ | $x^2 - 9 = (x-3)(x+3)$ |
| **Trinomial** | $x^2 + bx + c = (x+m)(x+n)$ | $x^2+5x+6 = (x+2)(x+3)$ |
| **GCF first, then more** | pull GCF, then factor again | $2x^2-8 = 2(x^2-4)=2(x-2)(x+2)$ |

For the trinomial $x^2 + bx + c$, find two numbers that **multiply to $c$** and **add to $b$**.

For $x^2 + 5x + 6$: which two numbers multiply to $6$ and add to $5$? → $2$ and $3$. So $(x+2)(x+3)$.

> 💡 **Always check for a GCF first.** Factoring $2x^2 - 8$ as $2(x-2)(x+2)$ exposes *three* possible cancelling factors instead of leaving it tangled.`,
      },
      {
        id: 'srx2-factor-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Factor $x^2 - 25$.',
              options: ['$(x-5)(x+5)$', '$(x-5)^2$', '$(x-25)(x+1)$', '$(x+5)^2$'],
              correctAnswer: 0,
              explanation: '$x^2 - 25 = x^2 - 5^2$ is a difference of squares: $(x-5)(x+5)$.',
            },
            {
              question: 'Factor $x^2 + 7x + 12$.',
              options: ['$(x+3)(x+4)$', '$(x+2)(x+6)$', '$(x+1)(x+12)$', '$(x-3)(x-4)$'],
              correctAnswer: 0,
              explanation: 'Two numbers multiplying to $12$ and adding to $7$: $3$ and $4$. So $(x+3)(x+4)$.',
            },
          ],
        },
      },
      {
        id: 'srx2-gcf-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Factoring** 🔽

Match each expression to its factored form.`,
        exercise: {
          dropdowns: [
            { label: '$6x + 15 =$', options: ['$3(2x+5)$', '$6(x+15)$', '$3(2x+15)$', '$3x(2+5)$'] },
            { label: '$x^2 - 36 =$', options: ['$(x-6)(x+6)$', '$(x-6)^2$', '$(x-36)(x+1)$', '$(x-18)(x+2)$'] },
            { label: '$3x^2 - 12 =$', options: ['$3(x-2)(x+2)$', '$3(x^2-12)$', '$(3x-6)(x+2)$', '$3(x-4)(x+3)$'] },
          ],
          correctAnswers: ['$3(2x+5)$', '$(x-6)(x+6)$', '$3(x-2)(x+2)$'],
          hint1: 'The GCF of $6x$ and $15$ is $3$: $6x+15 = 3(2x+5)$.',
          hint2: '$x^2 - 36 = x^2 - 6^2$ is a difference of squares.',
          hint3: 'Pull the GCF $3$ first: $3x^2-12 = 3(x^2-4) = 3(x-2)(x+2)$.',
          explanation: 'GCF: $6x+15=3(2x+5)$. Difference of squares: $x^2-36=(x-6)(x+6)$. GCF-then-DOS: $3x^2-12 = 3(x-2)(x+2)$.',
        },
      },
      {
        id: 'srx2-trinomial-drill',
        type: 'input-boxes' as const,
        content: `**Factor the Trinomial** 🧮

For each $x^2 + bx + c$, find the two numbers that multiply to $c$ and add to $b$. Enter them **smaller first**, separated by your two boxes.

**1)** $x^2 + 8x + 15$:  the two numbers are $\\,?$ and $\\,?$
**2)** $x^2 - 7x + 10$:  the two numbers are $\\,?$ and $\\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['3', '5', '-5', '-2'],
          hint1: 'For #1: multiply to $15$, add to $8$ → $3$ and $5$.',
          hint2: 'For #2: multiply to $10$, add to $-7$. Both must be negative: $-5$ and $-2$.',
          hint3: 'Smaller value first: for #2, $-5 < -2$, so enter $-5$ then $-2$.',
          explanation: '1) $3$ and $5$ → $(x+3)(x+5)$. 2) $-5$ and $-2$ → $(x-5)(x-2)$. (On a number line $-5$ is smaller than $-2$.)',
        },
      },
      {
        id: 'srx2-wrap',
        type: 'text' as const,
        content: `## You Now Have the Tools

With **GCF**, **difference of squares**, and **trinomial** factoring in hand, you can break almost any Algebra 2 numerator or denominator into a product of simple factors.

In Part 3 we combine these moves with the Golden Rule: **factor both parts, then cancel the common factors.**`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'simplifying-rationals-algebra2',
    sections: [
      {
        id: 'srx3-intro',
        type: 'text' as const,
        content: `# ➗ Simplifying Rational Expressions

**Part 3 of 5 — Factor, Then Cancel**

---

> 🔑 **The Method:** (1) Factor the numerator completely. (2) Factor the denominator completely. (3) Divide out every factor common to both. (4) Write what's left.`,
      },
      {
        id: 'srx3-worked1',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{x^2 - 9}{x^2 + 5x + 6}$

**Step 1 — Factor the top.** Difference of squares:
$$x^2 - 9 = (x-3)(x+3)$$

**Step 2 — Factor the bottom.** Multiply to $6$, add to $5$ → $2$ and $3$:
$$x^2 + 5x + 6 = (x+2)(x+3)$$

**Step 3 — Cancel the common factor** $(x+3)$:
$$\\frac{(x-3)\\cancel{(x+3)}}{(x+2)\\cancel{(x+3)}} = \\frac{x-3}{x+2}$$

**Step 4 — Final answer:**
$$\\frac{x^2 - 9}{x^2 + 5x + 6} = \\frac{x-3}{x+2}$$

> ✅ **Check with a number:** let $x = 1$. Original: $\\dfrac{1-9}{1+5+6} = \\dfrac{-8}{12} = -\\dfrac{2}{3}$. Simplified: $\\dfrac{1-3}{1+2} = \\dfrac{-2}{3}$. Same value ✓`,
      },
      {
        id: 'srx3-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{2x^2 - 8}{x^2 + 4x + 4}$

**Top:** GCF first, then difference of squares:
$$2x^2 - 8 = 2(x^2 - 4) = 2(x-2)(x+2)$$

**Bottom:** perfect-square trinomial (multiply to $4$, add to $4$ → $2$ and $2$):
$$x^2 + 4x + 4 = (x+2)(x+2)$$

**Cancel one $(x+2)$:**
$$\\frac{2(x-2)\\cancel{(x+2)}}{(x+2)\\cancel{(x+2)}} = \\frac{2(x-2)}{x+2}$$

> ⚠️ Only **one** $(x+2)$ cancels — the top has a single factor of $(x+2)$, so only one pair can divide out. The leftover $(x+2)$ stays on the bottom.`,
      },
      {
        id: 'srx3-cancel-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{(x-4)(x+1)}{(x+5)(x+1)}$.',
              options: ['$\\dfrac{x-4}{x+5}$', '$\\dfrac{x+1}{x+5}$', '$\\dfrac{x-4}{x+1}$', '$x-4$'],
              correctAnswer: 0,
              explanation: 'The common factor $(x+1)$ cancels, leaving $\\dfrac{x-4}{x+5}$.',
            },
            {
              question: 'Simplify $\\dfrac{x^2 - 16}{x - 4}$.',
              options: ['$x+4$', '$x-4$', '$x-16$', '$\\dfrac{1}{x+4}$'],
              correctAnswer: 0,
              explanation: '$x^2-16 = (x-4)(x+4)$, so $\\dfrac{(x-4)(x+4)}{x-4} = x+4$ after cancelling $(x-4)$.',
            },
          ],
        },
      },
      {
        id: 'srx3-steps-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're simplifying $\\dfrac{x^2 + 2x}{x^2 - 4}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Factor the numerator $x^2+2x$:', options: ['$x(x+2)$', '$(x+1)(x+2)$', '$x(x-2)$', '$2x(x+1)$'] },
            { label: 'Factor the denominator $x^2-4$:', options: ['$(x-2)(x+2)$', '$(x-2)^2$', '$(x-4)(x+1)$', '$(x+2)^2$'] },
            { label: 'Cancel the common factor:', options: ['$(x+2)$', '$x$', '$(x-2)$', '$(x+1)$'] },
            { label: 'Simplified result:', options: ['$\\dfrac{x}{x-2}$', '$\\dfrac{x}{x+2}$', '$\\dfrac{x+2}{x-2}$', '$x$'] },
          ],
          correctAnswers: ['$x(x+2)$', '$(x-2)(x+2)$', '$(x+2)$', '$\\dfrac{x}{x-2}$'],
          hint1: 'GCF of $x^2$ and $2x$ is $x$: $x^2+2x = x(x+2)$.',
          hint2: '$x^2-4$ is a difference of squares: $(x-2)(x+2)$.',
          hint3: 'Both share $(x+2)$. Cancelling leaves $\\dfrac{x}{x-2}$.',
          explanation: '$\\dfrac{x(x+2)}{(x-2)(x+2)} = \\dfrac{x}{x-2}$ after the $(x+2)$ cancels.',
        },
      },
      {
        id: 'srx3-simplify-drill',
        type: 'input-boxes' as const,
        content: `**Simplify and Evaluate** 🧮

Simplify each expression, then evaluate the simplified form at the given value.

**1)** $\\dfrac{x^2 - 1}{x + 1}$ simplifies to $x - 1$. Its value at $x = 5$ is $\\,?$
**2)** $\\dfrac{x^2 + 6x + 8}{x + 2}$ simplifies to $x + 4$. Its value at $x = 3$ is $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '7'],
          hint1: '$x^2-1=(x-1)(x+1)$, so it reduces to $x-1$. At $x=5$: $5-1$.',
          hint2: '$x^2+6x+8=(x+2)(x+4)$, so it reduces to $x+4$. At $x=3$: $3+4$.',
          hint3: 'Just plug the value into the SIMPLIFIED form.',
          explanation: '1) $x-1$ at $x=5$ is $4$. 2) $x+4$ at $x=3$ is $7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'simplifying-rationals-algebra2',
    sections: [
      {
        id: 'srx4-intro',
        type: 'text' as const,
        content: `# ➗ Simplifying Rational Expressions

**Part 4 of 5 — Domain Restrictions & Opposite Factors**

---

> 🔑 **Two things that trip everyone up:** (1) the **excluded values** that make the denominator zero — they survive even after you cancel, and (2) factors like $(2-x)$ and $(x-2)$ that look uncancellable but are actually **opposites**.`,
      },
      {
        id: 'srx4-domain',
        type: 'text' as const,
        content: `## Excluded Values (Domain Restrictions)

A rational expression is **undefined** wherever its **original** denominator equals zero. Those $x$-values are **excluded** from the domain.

### Example: $\\dfrac{x^2 - 9}{x^2 + 5x + 6}$

Factor the denominator: $(x+2)(x+3)$. It is zero when $x = -2$ or $x = -3$.

So the expression is undefined at $x = -2$ and $x = -3$, even though the simplified form $\\dfrac{x-3}{x+2}$ no longer *shows* the $(x+3)$.

| Stage | Restriction it reveals |
|-------|------------------------|
| Original $\\dfrac{x^2-9}{(x+2)(x+3)}$ | $x \\ne -2,\\; x \\ne -3$ |
| Simplified $\\dfrac{x-3}{x+2}$ | $x \\ne -2$ (only what's still visible) |

> ⚠️ **Find restrictions from the ORIGINAL denominator, before cancelling.** A cancelled factor like $(x+3)$ still forbids its value — that's where a graph gets a *hole*.`,
      },
      {
        id: 'srx4-domain-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For which value(s) is $\\dfrac{x+5}{(x-2)(x+7)}$ undefined?',
              options: ['$x = 2$ and $x = -7$', '$x = -5$', '$x = -2$ and $x = 7$', '$x = 2$ only'],
              correctAnswer: 0,
              explanation: 'The denominator is zero when $x-2=0$ or $x+7=0$, i.e. $x=2$ or $x=-7$. The numerator never causes a restriction.',
            },
            {
              question: 'After simplifying $\\dfrac{(x-1)(x+4)}{(x+4)(x+6)}$ to $\\dfrac{x-1}{x+6}$, which values must still be excluded?',
              options: ['$x = -4$ and $x = -6$', '$x = -6$ only', '$x = -4$ only', '$x = 1$ and $x = -6$'],
              correctAnswer: 0,
              explanation: 'Restrictions come from the ORIGINAL denominator $(x+4)(x+6)$: both $x=-4$ and $x=-6$ are excluded. The cancelled $(x+4)$ still forbids $x=-4$ (it becomes a hole).',
            },
          ],
        },
      },
      {
        id: 'srx4-opposites',
        type: 'text' as const,
        content: `## The Opposite-Factor Trick

Factors like $(2 - x)$ and $(x - 2)$ aren't identical, so they don't cancel directly. But they are **opposites**:

$$2 - x = -(x - 2)$$

Factoring out $-1$ flips the order. That lets you create a matching factor and cancel — leaving a $-1$ behind.

### Example: $\\dfrac{x - 5}{5 - x}$

Rewrite the bottom: $5 - x = -(x - 5)$.

$$\\frac{x-5}{5-x} = \\frac{x-5}{-(x-5)} = \\frac{\\cancel{(x-5)}}{-\\,\\cancel{(x-5)}} = -1$$

> 💡 **Shortcut:** whenever a factor and its reverse appear (like $a-b$ over $b-a$), they cancel to $-1$. Don't expect a clean $1$ — the flip always costs a negative sign.`,
      },
      {
        id: 'srx4-opposite-dropdown',
        type: 'dropdown-select' as const,
        content: `**Opposites & Restrictions** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Rewrite $3 - x$ using $-1$:', options: ['$-(x-3)$', '$-(3-x)$', '$-(x+3)$', '$(x-3)$'] },
            { label: '$\\dfrac{x-7}{7-x}$ simplifies to:', options: ['$-1$', '$1$', '$x-7$', '$0$'] },
            { label: '$\\dfrac{4-x}{x-4}$ simplifies to:', options: ['$-1$', '$1$', '$4-x$', '$x-4$'] },
          ],
          correctAnswers: ['$-(x-3)$', '$-1$', '$-1$'],
          hint1: 'Factoring $-1$ from $3-x$ flips the order: $3-x = -(x-3)$.',
          hint2: '$7-x = -(x-7)$, so $\\dfrac{x-7}{-(x-7)} = -1$.',
          hint3: 'A factor over its own reverse always equals $-1$.',
          explanation: '$3-x=-(x-3)$. Both $\\dfrac{x-7}{7-x}$ and $\\dfrac{4-x}{x-4}$ are a factor over its opposite, so each equals $-1$.',
        },
      },
      {
        id: 'srx4-restriction-drill',
        type: 'input-boxes' as const,
        content: `**List the Excluded Values** 🧮

Find every value of $x$ that makes the denominator zero. Enter them **smaller first**.

**1)** $\\dfrac{x+1}{(x-3)(x+6)}$:  excluded values are $\\,?$ and $\\,?$
**2)** $\\dfrac{x^2}{x^2 - 49}$:  excluded values are $\\,?$ and $\\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-6', '3', '-7', '7'],
          hint1: 'For #1 set each factor to zero: $x-3=0$ and $x+6=0$ give $x=3$ and $x=-6$.',
          hint2: 'For #2: $x^2-49=(x-7)(x+7)=0$ gives $x=7$ and $x=-7$.',
          hint3: 'Smaller (more negative) value first: $-6$ before $3$; $-7$ before $7$.',
          explanation: '1) $x=-6$ and $x=3$. 2) $x^2-49=(x-7)(x+7)$, so $x=-7$ and $x=7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'simplifying-rationals-algebra2',
    sections: [
      {
        id: 'srx5-intro',
        type: 'text' as const,
        content: `# ➗ Simplifying Rational Expressions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) recognize rational expressions, (2) factor numerator and denominator, (3) cancel common factors, (4) handle opposite factors, and (5) state domain restrictions. Let's put it all together.`,
      },
      {
        id: 'srx5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Simplify $\\dfrac{P}{Q}$ | Factor both, cancel common **factors** |
| Cancel rule | Only across **multiplication**, never a $+/-$ |
| $a^2 - b^2$ | $(a-b)(a+b)$ |
| $x^2+bx+c$ | two numbers: multiply to $c$, add to $b$ |
| Opposite factors | $\\dfrac{a-b}{b-a} = -1$ |
| Restrictions | Set the **original** denominator $= 0$ |

> ⚠️ Remember: always pull a **GCF first**, find restrictions **before** cancelling, and never cancel a term across a $+$ or $-$ sign.`,
      },
      {
        id: 'srx5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{x^2 - 4}{x^2 - x - 6}$.',
              options: ['$\\dfrac{x-2}{x-3}$', '$\\dfrac{x+2}{x-3}$', '$\\dfrac{x-2}{x+3}$', '$\\dfrac{x+2}{x+3}$'],
              correctAnswer: 0,
              explanation: '$x^2-4=(x-2)(x+2)$ and $x^2-x-6=(x-3)(x+2)$. Cancel $(x+2)$: $\\dfrac{x-2}{x-3}$.',
            },
            {
              question: 'Simplify $\\dfrac{3 - x}{x^2 - 9}$.',
              options: ['$\\dfrac{-1}{x+3}$', '$\\dfrac{1}{x+3}$', '$\\dfrac{-1}{x-3}$', '$\\dfrac{1}{x-3}$'],
              correctAnswer: 0,
              explanation: '$x^2-9=(x-3)(x+3)$ and $3-x=-(x-3)$. So $\\dfrac{-(x-3)}{(x-3)(x+3)} = \\dfrac{-1}{x+3}$.',
            },
          ],
        },
      },
      {
        id: 'srx5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Simplification** 🧮

Simplify $\\dfrac{4x + 12}{x^2 - 9}$ to the form $\\dfrac{A}{x - 3}$.

**1)** First factor the top: $4x+12 = 4(x + \\,?)$
**2)** The simplified expression is $\\dfrac{A}{x-3}$. Enter $A = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '4'],
          hint1: 'GCF of $4x$ and $12$ is $4$: $4x+12 = 4(x+3)$.',
          hint2: '$x^2-9=(x-3)(x+3)$. The $(x+3)$ cancels with the top.',
          hint3: '$\\dfrac{4(x+3)}{(x-3)(x+3)} = \\dfrac{4}{x-3}$, so $A=4$.',
          explanation: '$4x+12=4(x+3)$ and $x^2-9=(x-3)(x+3)$. Cancelling $(x+3)$ gives $\\dfrac{4}{x-3}$, so $A=4$.',
        },
      },
      {
        id: 'srx5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which simplification is legal?',
              options: ['$\\dfrac{5(x-1)}{8(x-1)} = \\dfrac{5}{8}$', '$\\dfrac{x+5}{x+8} = \\dfrac{5}{8}$', '$\\dfrac{x-1}{x-8} = \\dfrac{1}{8}$', '$\\dfrac{x+2}{2} = x$'],
              correctAnswer: 0,
              explanation: 'Only $\\dfrac{5(x-1)}{8(x-1)}$ has a true common FACTOR $(x-1)$ to cancel, giving $\\dfrac{5}{8}$. The others try to cancel terms across $+$ or $-$, which is illegal.',
            },
            {
              question: 'Simplify $\\dfrac{x^2 + 7x + 10}{x^2 - 25}$.',
              options: ['$\\dfrac{x+2}{x-5}$', '$\\dfrac{x+2}{x+5}$', '$\\dfrac{x+5}{x-5}$', '$\\dfrac{x-2}{x-5}$'],
              correctAnswer: 0,
              explanation: '$x^2+7x+10=(x+2)(x+5)$ and $x^2-25=(x-5)(x+5)$. Cancel $(x+5)$: $\\dfrac{x+2}{x-5}$.',
            },
            {
              question: 'For what value(s) is $\\dfrac{x+4}{x^2 - 36}$ undefined?',
              options: ['$x = 6$ and $x = -6$', '$x = -4$', '$x = 36$', '$x = 6$ only'],
              correctAnswer: 0,
              explanation: '$x^2-36=(x-6)(x+6)=0$ when $x=6$ or $x=-6$. Those are the excluded values.',
            },
          ],
        },
      },
    ],
  },
]
