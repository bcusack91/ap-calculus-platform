export const precalcRationalPart6Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# ⚖️ Rational Equations & Inequalities

**Part 6 of 7 — Solving Rational Equations, Checking for Extraneous Solutions, and Rational Inequalities**

Up to now we have analyzed rational functions. This part shifts to **solving** — finding $x$-values that satisfy rational equations and inequalities. The critical new skill is checking for **extraneous solutions** introduced when you multiply both sides by an expression containing the variable.
      `
    },
    {
      id: 'p6-equations',
      type: 'text' as const,
      content: `
## 📖 Solving Rational Equations

### The LCD Method

| Step | Action | Example: $\\frac{3}{x} + \\frac{1}{x+2} = 1$ |
|:----:|--------|----------------------------------------------|
| 1 | Find the LCD | $\\text{LCD} = x(x+2)$ |
| 2 | Multiply every term by the LCD | $3(x+2) + x = x(x+2)$ |
| 3 | Expand and simplify | $3x + 6 + x = x^2 + 2x$ |
| 4 | Collect to one side | $x^2 - 2x - 6 = 0$ |
| 5 | Solve (quadratic formula) | $x = \\frac{2 \\pm \\sqrt{4 + 24}}{2} = 1 \\pm \\sqrt{7}$ |
| 6 | **Check for extraneous solutions** | Neither value makes $x = 0$ or $x = -2$ ✔ |

> ⚠️ **Step 6 is mandatory.** Multiplying by the LCD can introduce false solutions that make the original denominator zero.
      `
    },
    {
      id: 'p6-extraneous',
      type: 'text' as const,
      content: `
## 🚨 Extraneous Solutions

### What Are They?

An **extraneous solution** is a value that satisfies the transformed equation but makes a denominator in the original equation equal to zero.

### Example: Extraneous Solution in Action

> **Solve $\\frac{x}{x - 3} = \\frac{3}{x - 3} + 2$**

**Step 1:** LCD $= (x - 3)$. Multiply through:
$$x = 3 + 2(x - 3)$$

**Step 2:** Simplify:
$$x = 3 + 2x - 6 = 2x - 3$$
$$-x = -3 \\implies x = 3$$

**Step 3: CHECK.** The original equation has $x - 3$ in the denominator.

At $x = 3$: denominator $= 3 - 3 = 0$ ❌ **Undefined!**

$$\\boxed{\\text{No solution (the only candidate is extraneous)}}$$

> 💡 Always check your answers against the **original** equation's domain restrictions.
      `
    },
    {
      id: 'p6-inequalities',
      type: 'text' as const,
      content: `
## 📊 Rational Inequalities

For inequalities like $\\frac{p(x)}{q(x)} > 0$ or $\\frac{p(x)}{q(x)} \\leq 0$, use a **sign chart**:

| Step | Action |
|:----:|--------|
| 1 | Move everything to one side: $\\frac{p(x)}{q(x)} - k \\geq 0$ → combine into single fraction |
| 2 | Factor numerator and denominator completely |
| 3 | Find all zeros of numerator (= 0) and denominator (undefined) |
| 4 | Place these critical values on a number line |
| 5 | Test one value in each interval to determine sign |
| 6 | Include/exclude endpoints based on $\\leq$ vs $<$ (never include where denominator = 0) |

### Example

> **Solve $\\frac{x - 1}{x + 3} \\geq 0$**

Critical values: $x = 1$ (numerator = 0) and $x = -3$ (denominator = 0)

| Interval | Test point | Sign of $\\frac{x-1}{x+3}$ |
|:---------|:----------:|:-------------------------:|
| $(-\\infty, -3)$ | $x = -4$: $\\frac{-5}{-1} = +$ | $+$ |
| $(-3, 1)$ | $x = 0$: $\\frac{-1}{3} = -$ | $-$ |
| $(1, \\infty)$ | $x = 2$: $\\frac{1}{5} = +$ | $+$ |

$\\geq 0$: want positive or zero. Include $x = 1$ (zero), exclude $x = -3$ (undefined).

$$\\boxed{(-\\infty, -3) \\cup [1, \\infty)}$$
      `
    },
    {
      id: 'p6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Equations & Inequalities Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When solving $\\frac{5}{x-1} = \\frac{5}{x-1}$, which is true?',
            options: [
              'Every real number is a solution',
              'All reals except $x = 1$',
              '$x = 1$ is the only solution',
              'No solution'
            ],
            correctAnswer: 1,
            explanation: 'The equation is an identity — true for every $x$ where both sides are defined. But $x = 1$ makes both denominators zero, so the solution set is all reals except $x = 1$.'
          },
          {
            question: 'Solving $\\frac{x+2}{x} = 1 + \\frac{2}{x}$ gives $x + 2 = x + 2$. How many solutions are there?',
            options: [
              'No solution — it is an identity, but we need to check domain',
              'All real numbers',
              'All real numbers except $x = 0$',
              'Only $x = 2$'
            ],
            correctAnswer: 2,
            explanation: 'The equation simplifies to an identity (always true). But the original has $x$ in a denominator, so $x \\neq 0$. Solution: all reals except $0$.'
          },
          {
            question: 'For the inequality $\\frac{x}{x-2} < 0$, the solution is:',
            options: [
              '$(0, 2)$',
              '$(-\\infty, 0) \\cup (2, \\infty)$',
              '$(0, 2]$',
              '$[0, 2)$'
            ],
            correctAnswer: 0,
            explanation: 'Critical values: $x = 0$ (numerator) and $x = 2$ (denominator). Sign chart: $(-\\infty, 0)$ positive, $(0, 2)$ negative, $(2, \\infty)$ positive. Want negative (< 0): $(0, 2)$. Strict inequality excludes endpoints.'
          }
        ]
      }
    },
    {
      id: 'p6-input-drill',
      type: 'input-boxes' as const,
      content: `
**Solving Drill** 🧮

**1)** Solve: $\\frac{6}{x} = 2$. What is $x$? (e.g., $\\frac{10}{x} = 5$ → $x = \\frac{10}{5} = 2$)

**2)** How many extraneous solutions arise when solving $\\frac{x^2 - 4}{x - 2} = x + 2$? (e.g., if the only solution makes a denominator zero, that is $1$ extraneous solution)

**3)** For $\\frac{x+1}{x-3} > 0$, how many intervals are in the solution set? (e.g., $\\frac{x}{x-1} > 0$ has solution $(-\\infty, 0) \\cup (1, \\infty)$ — that is $2$ intervals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '0', '2'],
        hint1: 'Multiply both sides by $x$: $6 = 2x$.',
        hint2: 'Simplify the left side: $\\frac{(x-2)(x+2)}{x-2} = x + 2$ for $x \\neq 2$. This is an identity. Does $x = 2$ solve the transformed equation?',
        hint3: 'Critical values: $x = -1$ and $x = 3$. Test signs in three intervals: $(-\\infty, -1)$, $(-1, 3)$, $(3, \\infty)$.',
        explanation: '1) $x = 3$. 2) The equation simplifies to the identity $x + 2 = x + 2$ (for $x \\neq 2$). All reals except $2$ are solutions. The transformed equation has no spurious roots, so $0$ extraneous. 3) Positive on $(-\\infty, -1)$ and $(3, \\infty)$ — two intervals.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Solving Rules — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After multiplying both sides by the LCD, you must always',
            options: ['factor the result', 'check for extraneous solutions', 'graph the equation', 'use the quadratic formula']
          },
          {
            label: 'An extraneous solution makes a _____ in the original equation equal to zero',
            options: ['numerator', 'denominator', 'coefficient', 'exponent']
          },
          {
            label: 'For a rational inequality, you should never include $x$-values where the',
            options: ['numerator is zero', 'denominator is zero', 'function is positive', 'function is negative']
          },
          {
            label: 'The sign of $\\frac{p(x)}{q(x)}$ changes at each',
            options: ['integer value of $x$', 'odd-multiplicity zero of numerator or denominator', 'even-multiplicity zero', 'horizontal asymptote']
          }
        ],
        correctAnswers: ['check for extraneous solutions', 'denominator', 'denominator is zero', 'odd-multiplicity zero of numerator or denominator'],
        hint1: 'The LCD multiplication step is what can introduce false solutions.',
        hint2: 'Extraneous solutions cause division by zero in the original.',
        hint3: 'The function is undefined where the denominator is zero — never valid.',
        explanation: 'Always check for extraneous solutions. They make denominators zero. Never include denominator zeros in inequality solutions. Sign changes occur at odd-multiplicity zeros (even-multiplicity zeros cause a touch, not a sign change).'
      }
    },
    {
      id: 'p6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rational Equations & Inequalities** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $\\frac{1}{x+1} + \\frac{1}{x-1} = \\frac{2}{x^2-1}$. The solution is:',
            options: [
              '$x = 1$',
              '$x = -1$',
              'No solution',
              '$x = 0$'
            ],
            correctAnswer: 2,
            explanation: 'LCD $= (x+1)(x-1) = x^2-1$. Multiply through: $(x-1) + (x+1) = 2$. Simplify: $2x = 2$, so $x = 1$. But $x = 1$ makes the original denominators $x - 1$ and $x^2 - 1$ equal to zero. The only candidate is extraneous → **no solution**.'
          },
          {
            question: 'Solve $\\frac{x^2 - 1}{x + 1} \\leq 0$. After simplification (with hole noted), the solution is:',
            options: [
              '$(-\\infty, 1]$',
              '$(-\\infty, -1) \\cup (-1, 1]$',
              '$(-\\infty, 1]$ but $x \\neq -1$',
              '$[1, \\infty)$'
            ],
            correctAnswer: 2,
            explanation: '$\\frac{(x-1)(x+1)}{x+1} = x - 1$ for $x \\neq -1$. Solve $x - 1 \\leq 0$: $x \\leq 1$. But $x = -1$ must be excluded (original denominator is zero). Solution: $(-\\infty, 1]$ with $x \\neq -1$.'
          }
        ]
      }
    }
  ]
};
