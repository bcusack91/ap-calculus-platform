export const precalcRationalPart6Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# ⚖️ Rational Zeros & Inequalities

**Part 6 of 7 — Rational Zeros & Inequalities**

Up to now we have analyzed rational functions. This part shifts to **solving**: finding where a rational function equals zero and where it is positive or negative. The critical skill is telling a real zero apart from a hole, because a value can make the numerator zero without being a zero of the function.
      `
    },
    {
      id: 'p6-zeros',
      type: 'text' as const,
      content: `
## 📖 Zeros of a Rational Function

A rational function $r(x) = \\frac{p(x)}{q(x)}$ equals $0$ exactly where the **numerator** is $0$ and the **denominator is not**.

| Step | Action | Example: $r(x) = \\frac{x^2 - 9}{x^2 - 3x}$ |
|:----:|--------|----------------------------------------------|
| 1 | Factor both parts | $\\frac{(x-3)(x+3)}{x(x-3)}$ |
| 2 | Zeros of the numerator | $x = 3$ and $x = -3$ |
| 3 | Discard any that also zero the denominator | $x = 3$ makes $x(x-3) = 0$: hole, not a zero |
| 4 | The real zeros of $r$ | $x = -3$ only |

> ⚠️ **Step 3 is mandatory.** At $x = 3$ the function is undefined, so it cannot equal $0$ there. The graph has a hole at $x = 3$ instead.

### Reading Zeros from a Model

If $C(t) = \\frac{50(t - 4)}{t + 2}$ gives a quantity for $t \\ge 0$, then $C(t) = 0$ only at $t = 4$: the numerator is $0$ there and the denominator is $6$, not $0$.
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
| 1 | Write the inequality as $r(x)$ compared with $0$ (for example $r(x) \\geq 0$) |
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
            question: 'What are the real zeros of $r(x) = \\frac{x^2 - 4}{x^2 + x - 2}$?',
            options: [
              '$x = 2$ only',
              '$x = 2$ and $x = -2$',
              '$x = -2$ and $x = 1$',
              '$x = -2$ only'
            ],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{(x-2)(x+2)}{(x+2)(x-1)}$. The numerator is $0$ at $x = 2$ and $x = -2$, but $x = -2$ also makes the denominator $0$, so it is a hole. The only zero is $x = 2$. Keeping $x = -2$ counts the hole as a zero, and $x = 1$ comes from the denominator.'
          },
          {
            question: 'Solve $\\frac{(x+1)(x-4)}{x-2} \\geq 0$.',
            options: [
              '$[-1, 2) \\cup [4, \\infty)$',
              '$[-1, 2] \\cup [4, \\infty)$',
              '$(-\\infty, -1] \\cup (2, 4]$',
              '$(-1, 2) \\cup (4, \\infty)$'
            ],
            correctAnswer: 0,
            explanation: 'Critical values: $-1$ and $4$ (numerator zeros, included by $\\geq$) and $2$ (denominator zero, always excluded). Signs: $-$ for $x < -1$, $+$ on $(-1, 2)$, $-$ on $(2, 4)$, $+$ for $x > 4$. A bracket at $2$ includes an undefined point, the third choice keeps the negative intervals, and open endpoints at $-1$ and $4$ drop the zeros.'
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

**1)** What is the zero of $r(x) = \\frac{2x - 6}{x + 1}$? (e.g., $\\frac{3x - 12}{x + 5}$ is zero where $3x - 12 = 0$, so at $x = 4$)

**2)** How many real zeros does $r(x) = \\frac{x^2 - 4}{x - 2}$ have? (e.g., $\\frac{x^2 - 1}{x - 1}$ has $1$ zero, $x = -1$, because $x = 1$ is a hole)

**3)** For $\\frac{x+1}{x-3} > 0$, how many intervals are in the solution set? (e.g., $\\frac{x}{x-1} > 0$ has solution $(-\\infty, 0) \\cup (1, \\infty)$ — that is $2$ intervals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '1', '2'],
        hint1: 'Set the numerator equal to $0$: $2x - 6 = 0$. Check that the denominator is not $0$ there.',
        hint2: 'The numerator is $0$ at $x = 2$ and $x = -2$. Which of these also makes the denominator $0$?',
        hint3: 'Critical values: $x = -1$ and $x = 3$. Test signs in three intervals: $(-\\infty, -1)$, $(-1, 3)$, $(3, \\infty)$.',
        explanation: '1) $x = 3$, where the denominator is $4 \\ne 0$. 2) $x = 2$ is a hole because it also zeros the denominator, so the only zero is $x = -2$: $1$ zero. 3) Positive on $(-\\infty, -1)$ and $(3, \\infty)$ — two intervals.'
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
            label: 'If $x = c$ makes both the numerator and the denominator zero, then $x = c$ is',
            options: ['a zero of $r$', 'not a zero of $r$', 'always an asymptote', 'always an $x$-intercept']
          },
          {
            label: 'The real zeros of $r$ are the zeros of the _____ that do not zero the denominator',
            options: ['numerator', 'denominator', 'leading term', 'constant term']
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
        correctAnswers: ['not a zero of $r$', 'numerator', 'denominator is zero', 'odd-multiplicity zero of numerator or denominator'],
        hint1: 'A function cannot equal $0$ where it is undefined.',
        hint2: 'A fraction is $0$ only when its top is $0$.',
        hint3: 'The function is undefined where the denominator is zero — never valid.',
        explanation: 'A shared zero of the numerator and denominator is not a zero of $r$ (it is usually a hole). Zeros of $r$ come from the numerator. Never include denominator zeros in inequality solutions. Sign changes occur at odd-multiplicity zeros (even-multiplicity zeros cause a touch, not a sign change).'
      }
    },
    {
      id: 'p6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rational Zeros & Inequalities** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Solve $\\frac{x - 3}{(x + 1)^2} < 0$.',
            options: [
              '$(-\\infty, -1) \\cup (-1, 3)$',
              '$(-1, 3)$',
              '$(-\\infty, 3]$',
              '$(-\\infty, -1) \\cup (3, \\infty)$'
            ],
            correctAnswer: 0,
            explanation: 'The denominator $(x + 1)^2$ is positive for every $x \\neq -1$, so the sign matches $x - 3$: negative for $x < 3$. Exclude $x = -1$ (undefined). The even multiplicity means no sign change at $-1$, so the interval $(-1, 3)$ alone misses $x < -1$, and a bracket at $3$ includes a zero that a strict inequality leaves out.'
          },
          {
            question: 'Solve $\\frac{x^2 - 1}{x + 1} \\leq 0$. After simplification (with hole noted), the solution is:',
            options: [
              '$(-\\infty, 1]$',
              '$(-\\infty, -1) \\cup (-1, 1]$',
              '$(-\\infty, -1) \\cup (-1, 1)$',
              '$[1, \\infty)$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{(x-1)(x+1)}{x+1} = x - 1$ for $x \\neq -1$. Solve $x - 1 \\leq 0$: $x \\leq 1$. But $x = -1$ must be excluded (original denominator is zero), so the solution is $(-\\infty, -1) \\cup (-1, 1]$. Writing $(-\\infty, 1]$ keeps the hole, and an open endpoint at $1$ drops a zero that $\\leq$ includes.'
          }
        ]
      }
    }
  ]
};
