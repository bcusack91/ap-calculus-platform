import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Operations with Rational Expressions (Algebra 2).
 * Registry key: 'rational-operations-algebra2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rational-operations-algebra2',
    sections: [
      {
        id: 'ro1-intro',
        type: 'text' as const,
        content: `# ➗ Operations with Rational Expressions

**Part 1 of 5 — Simplifying & Domain Restrictions**

---

### Topics in This Part

| Section |
|---------|
| What Is a Rational Expression? |
| Excluded Values (the Domain) |
| Simplifying by Factoring and Cancelling |

> 🔑 **Key Concept:** A rational expression is just a fraction whose numerator and denominator are polynomials. Every operation you already know for *number* fractions — simplify, multiply, divide, add, subtract — carries over. The new twist is that we must **factor first** and always **watch the denominator**.`,
      },
      {
        id: 'ro1-define',
        type: 'text' as const,
        content: `## What Is a Rational Expression?

A **rational expression** is a quotient of two polynomials:

$$\\frac{P(x)}{Q(x)}, \\quad \\text{where } Q(x) \\ne 0$$

| Expression | Rational? | Why |
|------------|-----------|-----|
| $\\dfrac{x+2}{x-5}$ | ✅ yes | polynomial over polynomial |
| $\\dfrac{3x^2-1}{4}$ | ✅ yes | constant denominator is still a polynomial |
| $\\dfrac{\\sqrt{x}}{x+1}$ | ❌ no | $\\sqrt{x}$ is **not** a polynomial |
| $\\dfrac{5}{x^2+x-6}$ | ✅ yes | numerator $5$ is a degree-0 polynomial |

> ⚠️ **The denominator can never equal zero.** Division by zero is undefined, so any $x$-value that makes $Q(x) = 0$ is **excluded** from the domain. Finding those values is step zero of every problem.`,
      },
      {
        id: 'ro1-excluded',
        type: 'text' as const,
        content: `## Finding Excluded Values

To find the **excluded values**, set the *original* denominator equal to zero and solve.

### Example: $\\dfrac{x+4}{x^2 - 9}$

Factor the denominator: $x^2 - 9 = (x-3)(x+3)$.

Set each factor to zero:
$$x - 3 = 0 \\;\\Rightarrow\\; x = 3, \\qquad x + 3 = 0 \\;\\Rightarrow\\; x = -3$$

So $x \\ne 3$ and $x \\ne -3$. The domain is "all real numbers except $3$ and $-3$."

> 💡 **Use the ORIGINAL denominator.** Always hunt for excluded values *before* you cancel anything — a factor you cancel away still restricts the domain (more on that in a moment).`,
      },
      {
        id: 'ro1-excluded-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which value(s) of $x$ must be excluded from $\\dfrac{2x+1}{x^2 - 4x}$?',
              options: ['$x = 0$ and $x = 4$', '$x = 4$ only', '$x = -4$ and $x = 0$', '$x = 2$ only'],
              correctAnswer: 0,
              explanation: 'Factor the denominator: $x^2 - 4x = x(x-4)$. Setting each factor to zero gives $x = 0$ and $x = 4$.',
            },
            {
              question: 'Why can a denominator never be zero?',
              options: [
                'Division by zero is undefined',
                'It would make the numerator zero',
                'It makes the fraction negative',
                'Zero denominators round to one',
              ],
              correctAnswer: 0,
              explanation: 'A fraction means "divide," and division by zero has no defined value, so those inputs are removed from the domain.',
            },
          ],
        },
      },
      {
        id: 'ro1-excluded-note',
        type: 'text' as const,
        content: `## A Quick Routine

For now, our denominators are simple. The routine never changes:

1. Look at the **denominator** only.
2. Set it equal to $0$.
3. Solve. Each solution is an **excluded value**.

For a linear denominator like $ax + b$, there's exactly one excluded value: $x = -\\dfrac{b}{a}$.`,
      },
      {
        id: 'ro1-excluded-drill',
        type: 'input-boxes' as const,
        content: `**Find the Excluded Value** 🧮

Enter the single $x$-value that must be excluded.

**1)** $\\dfrac{7}{x - 6}$, &nbsp; excluded $x = \\,?$
**2)** $\\dfrac{x}{x + 2}$, &nbsp; excluded $x = \\,?$
**3)** $\\dfrac{x-1}{2x - 10}$, &nbsp; excluded $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '-2', '5'],
          hint1: 'Set the denominator equal to $0$ and solve for $x$.',
          hint2: 'For #2, $x + 2 = 0 \\Rightarrow x = -2$.',
          hint3: 'For #3, $2x - 10 = 0 \\Rightarrow 2x = 10 \\Rightarrow x = 5$.',
          explanation: '1) $x-6=0 \\Rightarrow x=6$.  2) $x+2=0 \\Rightarrow x=-2$.  3) $2x-10=0 \\Rightarrow x=5$.',
        },
      },
      {
        id: 'ro1-simplify',
        type: 'text' as const,
        content: `## Simplifying: Factor, Then Cancel

To simplify a rational expression you **factor the numerator and denominator completely**, then cancel any factor that appears in *both*.

> 🔑 **Golden Rule:** You may cancel **factors** (things multiplied), never **terms** (things added or subtracted). $\\dfrac{x+3}{x}$ does **NOT** simplify to $3$.

### Example: $\\dfrac{x^2 - 9}{x^2 + 7x + 12}$

Factor both:
$$\\frac{x^2 - 9}{x^2 + 7x + 12} = \\frac{(x-3)(x+3)}{(x+3)(x+4)}$$

Cancel the common factor $(x+3)$:
$$= \\frac{x-3}{x+4}$$

> ⚠️ **The cancelled factor still restricts the domain.** Here $(x+3)$ was cancelled, but $x = -3$ is *still excluded* — the simplified form $\\dfrac{x-3}{x+4}$ carries hidden restrictions $x \\ne -4$ **and** $x \\ne -3$.`,
      },
      {
        id: 'ro1-simplify-check',
        type: 'dropdown-select' as const,
        content: `**Simplify Step by Step** 🔽

Simplify $\\dfrac{x^2 - 25}{x^2 - 2x - 15}$.`,
        exercise: {
          dropdowns: [
            { label: 'Factor the numerator $x^2 - 25$:', options: ['$(x-5)(x+5)$', '$(x-5)^2$', '$(x-25)(x+1)$', '$(x+5)^2$'] },
            { label: 'Factor the denominator $x^2 - 2x - 15$:', options: ['$(x-5)(x+3)$', '$(x+5)(x-3)$', '$(x-5)(x-3)$', '$(x-15)(x+1)$'] },
            { label: 'Cancel the common factor:', options: ['$(x-5)$', '$(x+5)$', '$(x+3)$', 'nothing cancels'] },
            { label: 'Simplified result:', options: ['$\\dfrac{x+5}{x+3}$', '$\\dfrac{x-5}{x+3}$', '$\\dfrac{x+5}{x-3}$', '$\\dfrac{x-5}{x-3}$'] },
          ],
          correctAnswers: ['$(x-5)(x+5)$', '$(x-5)(x+3)$', '$(x-5)$', '$\\dfrac{x+5}{x+3}$'],
          hint1: '$x^2 - 25$ is a difference of squares: $(x-5)(x+5)$.',
          hint2: 'For $x^2 - 2x - 15$, find two numbers multiplying to $-15$ and adding to $-2$: those are $-5$ and $+3$.',
          hint3: 'Both factor lists contain $(x-5)$, so that cancels, leaving $\\dfrac{x+5}{x+3}$.',
          explanation: '$\\dfrac{(x-5)(x+5)}{(x-5)(x+3)} = \\dfrac{x+5}{x+3}$ after cancelling $(x-5)$ (with $x \\ne 5$ and $x \\ne -3$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rational-operations-algebra2',
    sections: [
      {
        id: 'ro2-intro',
        type: 'text' as const,
        content: `# ➗ Operations with Rational Expressions

**Part 2 of 5 — Multiplying & Dividing**

---

> 🔑 **The Idea:** Multiplying and dividing rational expressions works *exactly* like multiplying and dividing number fractions — factor everything, then cancel across the whole product before you multiply out.`,
      },
      {
        id: 'ro2-multiply',
        type: 'text' as const,
        content: `## Multiplying Rational Expressions

$$\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{A \\cdot C}{B \\cdot D}$$

**The smart order:** factor → cancel any factor on top with any factor on the bottom → multiply what's left.

### Example: $\\dfrac{x+2}{x-3} \\cdot \\dfrac{x^2 - 9}{x^2 + 5x + 6}$

Factor everything:
$$\\frac{x+2}{x-3} \\cdot \\frac{(x-3)(x+3)}{(x+2)(x+3)}$$

Cancel $(x+2)$, $(x-3)$, and $(x+3)$ — all appear on both top and bottom:
$$= \\frac{\\cancel{(x+2)}}{\\cancel{(x-3)}} \\cdot \\frac{\\cancel{(x-3)}\\,\\cancel{(x+3)}}{\\cancel{(x+2)}\\,\\cancel{(x+3)}} = 1$$

> 💡 Because every factor cancelled, the product simplifies to $1$ (for allowed $x$). Cancelling *before* multiplying keeps the numbers small.`,
      },
      {
        id: 'ro2-multiply-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{3x}{4} \\cdot \\dfrac{8}{9x^2}$.',
              options: ['$\\dfrac{2}{3x}$', '$\\dfrac{2x}{3}$', '$\\dfrac{3}{2x}$', '$\\dfrac{2}{3}$'],
              correctAnswer: 0,
              explanation: 'Multiply: $\\dfrac{3x \\cdot 8}{4 \\cdot 9x^2} = \\dfrac{24x}{36x^2}$. Cancel $12x$: $\\dfrac{2}{3x}$.',
            },
            {
              question: 'When multiplying rational expressions, the best first step is to:',
              options: [
                'Factor every numerator and denominator',
                'Add the denominators',
                'Find a common denominator',
                'Flip the second fraction',
              ],
              correctAnswer: 0,
              explanation: 'Factoring first reveals common factors you can cancel across the product, keeping the work simple. (Flipping is for division.)',
            },
          ],
        },
      },
      {
        id: 'ro2-divide',
        type: 'text' as const,
        content: `## Dividing Rational Expressions

To divide, **multiply by the reciprocal** of the second expression ("keep–change–flip"):

$$\\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}$$

### Example: $\\dfrac{x^2 - 4}{x + 1} \\div \\dfrac{x + 2}{x^2 - 1}$

Flip the second fraction and multiply:
$$\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x^2 - 1}{x + 2}$$

Factor: $x^2 - 4 = (x-2)(x+2)$ and $x^2 - 1 = (x-1)(x+1)$.
$$\\frac{(x-2)(x+2)}{x+1} \\cdot \\frac{(x-1)(x+1)}{x+2}$$

Cancel $(x+2)$ and $(x+1)$:
$$= (x-2)(x-1)$$

> ⚠️ **Only flip the divisor** (the fraction *after* the $\\div$). Flipping the wrong one is the #1 division error.`,
      },
      {
        id: 'ro2-divide-dropdown',
        type: 'dropdown-select' as const,
        content: `**Divide Step by Step** 🔽

Simplify $\\dfrac{x^2 - 16}{x} \\div \\dfrac{x + 4}{x^2}$.`,
        exercise: {
          dropdowns: [
            { label: 'Rewrite division as multiplication:', options: ['$\\dfrac{x^2-16}{x} \\cdot \\dfrac{x^2}{x+4}$', '$\\dfrac{x^2-16}{x} \\cdot \\dfrac{x+4}{x^2}$', '$\\dfrac{x}{x^2-16} \\cdot \\dfrac{x+4}{x^2}$', '$\\dfrac{x}{x^2-16} \\cdot \\dfrac{x^2}{x+4}$'] },
            { label: 'Factor $x^2 - 16$:', options: ['$(x-4)(x+4)$', '$(x-4)^2$', '$(x-16)(x+1)$', '$(x+4)^2$'] },
            { label: 'After cancelling $(x+4)$ and one $x$:', options: ['$x(x-4)$', '$\\dfrac{x-4}{x}$', '$(x-4)(x+4)$', '$x^2(x-4)$'] },
          ],
          correctAnswers: ['$\\dfrac{x^2-16}{x} \\cdot \\dfrac{x^2}{x+4}$', '$(x-4)(x+4)$', '$x(x-4)$'],
          hint1: 'Keep the first fraction, change $\\div$ to $\\cdot$, flip the second to $\\dfrac{x^2}{x+4}$.',
          hint2: '$x^2 - 16$ is a difference of squares: $(x-4)(x+4)$.',
          hint3: '$\\dfrac{(x-4)(x+4)}{x} \\cdot \\dfrac{x^2}{x+4}$: cancel $(x+4)$ and reduce $\\dfrac{x^2}{x} = x$, giving $x(x-4)$.',
          explanation: '$\\dfrac{(x-4)(x+4)}{x} \\cdot \\dfrac{x \\cdot x}{x+4} = x(x-4)$ after cancelling $(x+4)$ and one factor of $x$.',
        },
      },
      {
        id: 'ro2-numeric-note',
        type: 'text' as const,
        content: `## Watch the Factors Vanish

When a factor appears identically on top and bottom — even a whole binomial like $(x-7)$ — it cancels to $1$. After everything cancels, you're often left with a plain number.

> 💡 In the drill below, each product is built so that all the $x$-factors cancel. Track them carefully and a single number should remain.`,
      },
      {
        id: 'ro2-drill',
        type: 'input-boxes' as const,
        content: `**Multiply & Divide** 🧮

Each answer below simplifies to a single number. Compute it.

**1)** $\\dfrac{6}{x} \\cdot \\dfrac{x}{3} = \\,?$
**2)** $\\dfrac{x^2}{5} \\div \\dfrac{x^2}{10} = \\,?$
**3)** $\\dfrac{x-7}{4} \\cdot \\dfrac{12}{x-7} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', '3'],
          hint1: 'For #1, $\\dfrac{6x}{3x} = 2$ once the $x$ cancels.',
          hint2: 'For #2, flip the divisor: $\\dfrac{x^2}{5} \\cdot \\dfrac{10}{x^2} = \\dfrac{10}{5} = 2$.',
          hint3: 'For #3, cancel $(x-7)$: $\\dfrac{12}{4} = 3$.',
          explanation: '1) $\\dfrac{6x}{3x}=2$.  2) $\\dfrac{x^2}{5}\\cdot\\dfrac{10}{x^2}=2$.  3) $\\dfrac{12}{4}=3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rational-operations-algebra2',
    sections: [
      {
        id: 'ro3-intro',
        type: 'text' as const,
        content: `# ➗ Operations with Rational Expressions

**Part 3 of 5 — Adding & Subtracting (Like Denominators) and the LCD**

---

> 🔑 **The Idea:** To add or subtract fractions you need a **common denominator**. With like denominators it's instant; with unlike denominators you first build the **Least Common Denominator (LCD)** out of the factors.`,
      },
      {
        id: 'ro3-like',
        type: 'text' as const,
        content: `## Like Denominators

When the denominators are the same, **add or subtract the numerators and keep the denominator**:

$$\\frac{A}{D} \\pm \\frac{B}{D} = \\frac{A \\pm B}{D}$$

### Example: $\\dfrac{2x}{x+3} + \\dfrac{6}{x+3}$

$$= \\frac{2x + 6}{x+3} = \\frac{2(x+3)}{x+3} = 2$$

### Example (subtraction): $\\dfrac{5x}{x-1} - \\dfrac{5}{x-1}$

$$= \\frac{5x - 5}{x-1} = \\frac{5(x-1)}{x-1} = 5$$

> ⚠️ **Subtraction traps everyone.** The minus sign applies to the **entire** numerator. Wrap it in parentheses: $\\dfrac{A}{D} - \\dfrac{B}{D} = \\dfrac{A - (B)}{D}$, then distribute.`,
      },
      {
        id: 'ro3-subtraction-trap',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{4x}{x+2} - \\dfrac{x - 6}{x+2}$.',
              options: ['$\\dfrac{3x + 6}{x+2} = 3$', '$\\dfrac{5x + 6}{x+2}$', '$\\dfrac{5x - 6}{x+2}$', '$\\dfrac{4x - x - 6}{x+2}$'],
              correctAnswer: 0,
              explanation: 'Subtract the whole numerator: $4x - (x - 6) = 4x - x + 6 = 3x + 6 = 3(x+2)$. Over $x+2$ this is $3$.',
            },
            {
              question: 'When subtracting fractions with the same denominator, the safest move is to:',
              options: [
                'Put the second numerator in parentheses before distributing the minus',
                'Subtract the denominators too',
                'Flip the second fraction',
                'Cross-multiply',
              ],
              correctAnswer: 0,
              explanation: 'Parentheses ensure the minus sign distributes to every term of the second numerator, avoiding the classic sign error.',
            },
          ],
        },
      },
      {
        id: 'ro3-lcd',
        type: 'text' as const,
        content: `## Building the LCD

When denominators differ, the **Least Common Denominator** is the product of *each distinct factor raised to its highest power* across all denominators.

### Example: denominators $6x^2$ and $9x$

- $6x^2 = 2 \\cdot 3 \\cdot x^2$
- $9x = 3^2 \\cdot x$

Take the highest power of each: $2^1$, $3^2$, $x^2$.
$$\\text{LCD} = 2 \\cdot 9 \\cdot x^2 = 18x^2$$

### Example: denominators $(x+1)$ and $(x+1)(x-2)$

The second already contains the first, so:
$$\\text{LCD} = (x+1)(x-2)$$

> 💡 **Factor first, always.** You can't see shared factors like $(x+1)$ until each denominator is fully factored.`,
      },
      {
        id: 'ro3-lcd-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the LCD** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'LCD of $\\dfrac{1}{4x}$ and $\\dfrac{1}{6x}$:', options: ['$12x$', '$24x$', '$10x$', '$2x$'] },
            { label: 'LCD of $\\dfrac{1}{x}$ and $\\dfrac{1}{x-3}$:', options: ['$x(x-3)$', '$x - 3$', '$x$', '$x^2 - 3$'] },
            { label: 'LCD of $\\dfrac{1}{x^2-9}$ and $\\dfrac{1}{x+3}$:', options: ['$(x-3)(x+3)$', '$(x+3)^2$', '$(x^2-9)(x+3)$', '$x+3$'] },
          ],
          correctAnswers: ['$12x$', '$x(x-3)$', '$(x-3)(x+3)$'],
          hint1: 'For $4x$ and $6x$: LCM of $4$ and $6$ is $12$, and both share one $x$, so $12x$.',
          hint2: '$x$ and $x-3$ share no factors, so multiply them: $x(x-3)$.',
          hint3: 'Factor $x^2 - 9 = (x-3)(x+3)$; it already contains $(x+3)$, so the LCD is just $(x-3)(x+3)$.',
          explanation: 'The LCD uses each distinct factor at its highest power: $12x$; $x(x-3)$; and $(x-3)(x+3)$.',
        },
      },
      {
        id: 'ro3-factor-numerator-note',
        type: 'text' as const,
        content: `## Don't Stop at "Combine"

After combining numerators over a like denominator, **always try to factor the new numerator** — it may cancel with the denominator.

### Example: $\\dfrac{3x}{x+4} + \\dfrac{12}{x+4}$

$$= \\frac{3x + 12}{x+4} = \\frac{3(x+4)}{x+4} = 3$$

> 🔑 Factoring the numerator is what turns a messy-looking sum into a clean answer.`,
      },
      {
        id: 'ro3-like-drill',
        type: 'input-boxes' as const,
        content: `**Combine Like Denominators** 🧮

Each expression simplifies to a single number. Compute it.

**1)** $\\dfrac{3x}{x+4} + \\dfrac{12}{x+4} = \\,?$
**2)** $\\dfrac{7x}{x-2} - \\dfrac{14}{x-2} = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '7'],
          hint1: 'For #1, $3x + 12 = 3(x+4)$, so over $x+4$ you get $3$.',
          hint2: 'For #2, $7x - 14 = 7(x-2)$, so over $x-2$ you get $7$.',
          hint3: 'In each case the numerator factors to match the denominator, leaving just the constant out front.',
          explanation: '1) $\\dfrac{3(x+4)}{x+4}=3$.  2) $\\dfrac{7(x-2)}{x-2}=7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rational-operations-algebra2',
    sections: [
      {
        id: 'ro4-intro',
        type: 'text' as const,
        content: `# ➗ Operations with Rational Expressions

**Part 4 of 5 — Unlike Denominators & Complex Fractions**

---

> 🔑 **Big Payoff:** With the LCD in hand, you rewrite each fraction so they share it, then add or subtract the numerators. This is the most common — and most tested — rational-expression skill.`,
      },
      {
        id: 'ro4-unlike',
        type: 'text' as const,
        content: `## Adding with Unlike Denominators

**The 4 steps:**

1. **Factor** all denominators and find the **LCD**.
2. **Multiply** each fraction by the factor it's missing (top *and* bottom).
3. **Combine** the numerators over the common LCD.
4. **Simplify** the result.

### Example: $\\dfrac{2}{x} + \\dfrac{3}{x+1}$

The LCD is $x(x+1)$. Rewrite each fraction:
$$\\frac{2}{x}\\cdot\\frac{x+1}{x+1} + \\frac{3}{x+1}\\cdot\\frac{x}{x} = \\frac{2(x+1)}{x(x+1)} + \\frac{3x}{x(x+1)}$$

Combine numerators:
$$= \\frac{2x + 2 + 3x}{x(x+1)} = \\frac{5x + 2}{x(x+1)}$$

> 💡 The numerator $5x+2$ doesn't factor, so this is fully simplified.`,
      },
      {
        id: 'ro4-unlike-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Add $\\dfrac{1}{x} + \\dfrac{1}{x+2}$.',
              options: [
                '$\\dfrac{2x + 2}{x(x+2)}$',
                '$\\dfrac{2}{x(x+2)}$',
                '$\\dfrac{1}{x(x+2)}$',
                '$\\dfrac{2}{x + (x+2)}$',
              ],
              correctAnswer: 0,
              explanation: 'LCD is $x(x+2)$: $\\dfrac{(x+2)}{x(x+2)} + \\dfrac{x}{x(x+2)} = \\dfrac{x + 2 + x}{x(x+2)} = \\dfrac{2x+2}{x(x+2)}$.',
            },
            {
              question: 'After finding the LCD, you multiply each fraction by:',
              options: [
                'A form of $1$ made from the factor it is missing',
                'The whole LCD on the top only',
                'The reciprocal of the LCD',
                'Zero',
              ],
              correctAnswer: 0,
              explanation: 'Multiplying top and bottom by the missing factor (a form of $1$) changes the look but not the value, giving each fraction the LCD.',
            },
          ],
        },
      },
      {
        id: 'ro4-unlike-worked',
        type: 'text' as const,
        content: `## A Subtraction Example

### Example: $\\dfrac{x}{x-2} - \\dfrac{4}{x+2}$

The denominators $x-2$ and $x+2$ share no factors, so the LCD is $(x-2)(x+2)$.

$$\\frac{x(x+2)}{(x-2)(x+2)} - \\frac{4(x-2)}{(x-2)(x+2)}$$

Now subtract the **whole** second numerator (parentheses!):
$$= \\frac{x^2 + 2x - (4x - 8)}{(x-2)(x+2)} = \\frac{x^2 + 2x - 4x + 8}{(x-2)(x+2)}$$

$$= \\frac{x^2 - 2x + 8}{(x-2)(x+2)}$$

> ⚠️ Notice $-(4x - 8)$ became $-4x + 8$. Forgetting to flip that $-8$ to $+8$ is the most common subtraction mistake.`,
      },
      {
        id: 'ro4-complex',
        type: 'text' as const,
        content: `## Complex Fractions

A **complex fraction** has a fraction inside a fraction. The cleanest method: **multiply the top and bottom by the LCD of all the little denominators.**

### Example: $\\dfrac{\\;\\dfrac{1}{x} + 1\\;}{\\;\\dfrac{1}{x} - 1\\;}$

The only inner denominator is $x$, so multiply top and bottom by $x$:
$$\\frac{x\\left(\\dfrac{1}{x} + 1\\right)}{x\\left(\\dfrac{1}{x} - 1\\right)} = \\frac{1 + x}{1 - x}$$

> 💡 Multiplying through by the LCD clears all the small fractions in one move — far cleaner than dividing fraction-by-fraction.`,
      },
      {
        id: 'ro4-complex-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Sum** 🔽

You are adding $\\dfrac{3}{x-1} + \\dfrac{2}{x}$. Choose each step.`,
        exercise: {
          dropdowns: [
            { label: 'The LCD is:', options: ['$x(x-1)$', '$x - 1$', '$x$', '$(x-1)^2$'] },
            { label: 'Rewrite $\\dfrac{3}{x-1}$ over the LCD:', options: ['$\\dfrac{3x}{x(x-1)}$', '$\\dfrac{3}{x(x-1)}$', '$\\dfrac{3(x-1)}{x(x-1)}$', '$\\dfrac{3x-1}{x(x-1)}$'] },
            { label: 'Combined numerator:', options: ['$5x - 2$', '$5x + 2$', '$3x - 2$', '$5x - 1$'] },
          ],
          correctAnswers: ['$x(x-1)$', '$\\dfrac{3x}{x(x-1)}$', '$5x - 2$'],
          hint1: '$x$ and $x-1$ share no common factor, so the LCD is their product $x(x-1)$.',
          hint2: '$\\dfrac{3}{x-1}$ is missing the factor $x$, so multiply top and bottom by $x$: $\\dfrac{3x}{x(x-1)}$.',
          hint3: 'Numerators: $3x + 2(x-1) = 3x + 2x - 2 = 5x - 2$.',
          explanation: '$\\dfrac{3x}{x(x-1)} + \\dfrac{2(x-1)}{x(x-1)} = \\dfrac{3x + 2x - 2}{x(x-1)} = \\dfrac{5x-2}{x(x-1)}$.',
        },
      },
      {
        id: 'ro4-numbers-note',
        type: 'text' as const,
        content: `## Same Rules with Plain Numbers

These ideas aren't new — they're the fraction rules you've always used, now stated carefully. Adding $\\dfrac{1}{3} + \\dfrac{1}{x}$ uses the LCD $3x$ exactly like $\\dfrac{1}{3} + \\dfrac{1}{4}$ uses the LCD $12$.

> 💡 If a step ever feels strange, test it on plain numbers first — the structure is identical.`,
      },
      {
        id: 'ro4-drill',
        type: 'input-boxes' as const,
        content: `**Combine & Evaluate** 🧮

**1)** Add $\\dfrac{1}{3} + \\dfrac{1}{x}$. The combined numerator is $x + a$. Enter $a$.
**2)** For $\\dfrac{1}{3} + \\dfrac{1}{x}$, the common denominator is $3x$. Enter the number multiplying $x$ in it (i.e. the coefficient): &nbsp; $\\,?$
**3)** Simplify $\\dfrac{\\frac{1}{2}}{\\frac{1}{4}}$ to a single number: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '3', '2'],
          hint1: '$\\dfrac{1}{3} + \\dfrac{1}{x} = \\dfrac{x}{3x} + \\dfrac{3}{3x} = \\dfrac{x + 3}{3x}$, so the numerator is $x + 3$ and $a = 3$.',
          hint2: 'The common denominator is $3x$; the coefficient of $x$ is $3$.',
          hint3: '$\\dfrac{1/2}{1/4} = \\dfrac{1}{2}\\cdot\\dfrac{4}{1} = 2$.',
          explanation: '1) numerator $x+3 \\Rightarrow a=3$.  2) denominator $3x \\Rightarrow$ coefficient $3$.  3) $\\dfrac{1}{2}\\cdot 4 = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rational-operations-algebra2',
    sections: [
      {
        id: 'ro5-intro',
        type: 'text' as const,
        content: `# ➗ Operations with Rational Expressions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) simplify and find excluded values, (2) multiply and divide, (3) build the LCD, and (4) add and subtract with any denominators. Let's put it all together.`,
      },
      {
        id: 'ro5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Operation | Key move |
|-----------|----------|
| Simplify | factor, cancel **common factors** (never terms) |
| Excluded values | set the **original** denominator $= 0$ |
| Multiply | factor, cancel across the product, then multiply |
| Divide | **keep–change–flip** the divisor, then multiply |
| Add / Subtract | rewrite over the **LCD**, combine numerators |
| Complex fraction | multiply top & bottom by the LCD of the inner fractions |

> ⚠️ Two habits prevent most errors: **factor before you do anything**, and **wrap a subtracted numerator in parentheses** so the minus sign distributes.`,
      },
      {
        id: 'ro5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{x^2 - x - 6}{x^2 - 9}$.',
              options: ['$\\dfrac{x+2}{x+3}$', '$\\dfrac{x-2}{x-3}$', '$\\dfrac{x+2}{x-3}$', '$\\dfrac{x-3}{x+3}$'],
              correctAnswer: 0,
              explanation: 'Factor: $\\dfrac{(x-3)(x+2)}{(x-3)(x+3)}$. Cancel $(x-3)$ to get $\\dfrac{x+2}{x+3}$.',
            },
            {
              question: 'Simplify $\\dfrac{x+5}{2} \\div \\dfrac{x+5}{6}$.',
              options: ['$3$', '$\\dfrac{1}{3}$', '$\\dfrac{x+5}{3}$', '$\\dfrac{(x+5)^2}{12}$'],
              correctAnswer: 0,
              explanation: 'Keep–change–flip: $\\dfrac{x+5}{2}\\cdot\\dfrac{6}{x+5}$. Cancel $(x+5)$: $\\dfrac{6}{2} = 3$.',
            },
          ],
        },
      },
      {
        id: 'ro5-mixed-note',
        type: 'text' as const,
        content: `## Before the Final Check

One last warm-up that touches every skill: a multiply-and-cancel, a combine-and-factor, and an excluded-value hunt.

> 🔑 Remember the order of operations on a rational expression: **factor first**, then cancel, combine, or read off the restriction.`,
      },
      {
        id: 'ro5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

Each answer is a single number. Compute it.

**1)** $\\dfrac{x^2 - 16}{x+4} \\cdot \\dfrac{1}{x-4} = \\,?$
**2)** Simplify $\\dfrac{5x + 5}{x + 1} = \\,?$
**3)** Excluded value of $\\dfrac{x+9}{x - 8}$: &nbsp; $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '5', '8'],
          hint1: 'For #1, $x^2-16=(x-4)(x+4)$; cancel both factors to get $1$.',
          hint2: 'For #2, $5x + 5 = 5(x+1)$, so over $x+1$ you get $5$.',
          hint3: 'For #3, set $x - 8 = 0 \\Rightarrow x = 8$.',
          explanation: '1) $\\dfrac{(x-4)(x+4)}{(x+4)(x-4)}=1$.  2) $\\dfrac{5(x+1)}{x+1}=5$.  3) $x-8=0\\Rightarrow x=8$.',
        },
      },
      {
        id: 'ro5-exit-note',
        type: 'text' as const,
        content: `## You're Ready

You've simplified, multiplied, divided, found LCDs, added, subtracted, and tamed complex fractions. Three questions stand between you and mastery of rational-expression operations.

> 💡 Take your time, factor first, and mind every minus sign.`,
      },
      {
        id: 'ro5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which value must be excluded from $\\dfrac{x+1}{x^2 + 2x - 8}$?',
              options: ['$x = 2$ and $x = -4$', '$x = -2$ and $x = 4$', '$x = 8$ only', '$x = -1$ only'],
              correctAnswer: 0,
              explanation: 'Factor: $x^2 + 2x - 8 = (x-2)(x+4)$. Set each to zero: $x = 2$ and $x = -4$.',
            },
            {
              question: 'Simplify $\\dfrac{4}{x-3} - \\dfrac{1}{x-3}$.',
              options: ['$\\dfrac{3}{x-3}$', '$\\dfrac{3}{0}$', '$\\dfrac{5}{x-3}$', '$\\dfrac{3}{2(x-3)}$'],
              correctAnswer: 0,
              explanation: 'Same denominator, so subtract numerators: $\\dfrac{4 - 1}{x-3} = \\dfrac{3}{x-3}$.',
            },
            {
              question: 'Simplify $\\dfrac{x^2 - 1}{x + 1} \\cdot \\dfrac{3}{x - 1}$.',
              options: ['$3$', '$\\dfrac{3}{x-1}$', '$3(x-1)$', '$\\dfrac{3(x-1)}{x+1}$'],
              correctAnswer: 0,
              explanation: '$x^2 - 1 = (x-1)(x+1)$, so $\\dfrac{(x-1)(x+1)}{x+1}\\cdot\\dfrac{3}{x-1}$. Cancel $(x+1)$ and $(x-1)$: $3$.',
            },
          ],
        },
      },
    ],
  },
]
