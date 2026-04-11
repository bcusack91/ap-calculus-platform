export const precalcRationalPart5Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📉 Graphing Rational Functions

**Part 5 of 7 — Transformations & Complete Graph Sketching**

Graphing a rational function means assembling all the pieces from Parts 1–4: domain, intercepts, asymptotes, holes, and sign behavior. This part gives you a systematic graphing procedure and introduces transformations of the parent function $y = \\frac{1}{x}$.
      `
    },
    {
      id: 'p5-parent',
      type: 'text' as const,
      content: `
## 📖 The Parent Function $y = \\frac{1}{x}$

Every simple rational function is a transformation of this parent graph.

| Feature | Value |
|:--------|:------|
| Domain | $(-\\infty, 0) \\cup (0, \\infty)$ |
| Range | $(-\\infty, 0) \\cup (0, \\infty)$ |
| VA | $x = 0$ |
| HA | $y = 0$ |
| Symmetry | Odd function (symmetric about the origin) |
| Quadrants | I and III |

---

### Transformation Form

$$\\boxed{f(x) = \\frac{a}{x - h} + k}$$

| Parameter | Effect | Example |
|:---------:|:-------|:--------|
| $h$ | Shifts graph **right** $h$ units (VA moves to $x = h$) | $h = 3$: VA at $x = 3$ |
| $k$ | Shifts graph **up** $k$ units (HA moves to $y = k$) | $k = -2$: HA at $y = -2$ |
| $a$ | Vertical stretch by $|a|$; reflects over $x$-axis if $a < 0$ | $a = -1$: reflected |

**Example:** $f(x) = \\frac{-2}{x + 1} + 3$ has VA at $x = -1$, HA at $y = 3$, reflected and stretched by 2.
      `
    },
    {
      id: 'p5-graphing-procedure',
      type: 'text' as const,
      content: `
## 📋 Complete Graphing Procedure

Follow these steps for **any** rational function $f(x) = \\frac{p(x)}{q(x)}$:

| Step | Action | What It Gives You |
|:----:|--------|:------------------|
| 1 | Factor numerator and denominator completely | Reveals all features at once |
| 2 | Find domain exclusions | Where $q(x) = 0$ |
| 3 | Identify holes (common factors) | Points to mark with open circles |
| 4 | Find vertical asymptotes (remaining denom zeros) | Dashed vertical lines |
| 5 | Find horizontal/slant asymptote | Dashed horizontal or diagonal line |
| 6 | Find $x$-intercepts | Set $p(x) = 0$ (after canceling) |
| 7 | Find $y$-intercept | Evaluate $f(0)$ |
| 8 | Test sign in each interval | Determines which side of asymptotes |
| 9 | Plot key points & sketch | Connect through the structure |

---

### Worked Example

> **Sketch $f(x) = \\frac{x - 1}{x^2 - 4}$**

1. **Factor:** $\\frac{x-1}{(x-2)(x+2)}$ — no common factors
2. **Domain:** $x \\neq 2, x \\neq -2$
3. **Holes:** None
4. **VAs:** $x = 2$ and $x = -2$
5. **HA:** $\\deg(p) = 1 < \\deg(q) = 2$ → $y = 0$
6. **$x$-intercept:** $x - 1 = 0 \\implies x = 1$ → point $(1, 0)$
7. **$y$-intercept:** $f(0) = \\frac{-1}{-4} = \\frac{1}{4}$ → point $\\left(0, \\frac{1}{4}\\right)$
8. **Sign analysis:** Test in intervals $(-\\infty, -2)$, $(-2, 1)$, $(1, 2)$, $(2, \\infty)$
      `
    },
    {
      id: 'p5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Graphing Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The function $f(x) = \\frac{3}{x - 2} + 1$ has:',
            options: [
              'VA at $x = 2$, HA at $y = 1$',
              'VA at $x = -2$, HA at $y = 1$',
              'VA at $x = 2$, HA at $y = 3$',
              'VA at $x = 1$, HA at $y = 2$'
            ],
            correctAnswer: 0,
            explanation: 'In $\\frac{a}{x-h} + k$ form: $h = 2$ (VA at $x = 2$) and $k = 1$ (HA at $y = 1$).'
          },
          {
            question: 'How many $x$-intercepts does $f(x) = \\frac{x^2 - 9}{x^2 + 1}$ have?',
            options: [
              '0',
              '1',
              '2',
              '3'
            ],
            correctAnswer: 2,
            explanation: '$x$-intercepts occur where the numerator is zero: $x^2 - 9 = 0 \\implies x = \\pm 3$. The denominator $x^2 + 1 > 0$ always, so neither is excluded. Two $x$-intercepts.'
          },
          {
            question: 'The graph of $f(x) = \\frac{-1}{x}$ compared to $g(x) = \\frac{1}{x}$:',
            options: [
              'Is shifted left 1 unit',
              'Is reflected across the $x$-axis (lives in quadrants II and IV)',
              'Is reflected across the $y$-axis',
              'Is identical'
            ],
            correctAnswer: 1,
            explanation: 'Multiplying by $-1$ reflects the graph across the $x$-axis. The parent $\\frac{1}{x}$ is in quadrants I and III; $\\frac{-1}{x}$ is in quadrants II and IV.'
          }
        ]
      }
    },
    {
      id: 'p5-input-drill',
      type: 'input-boxes' as const,
      content: `
**Graphing Features Drill** 🧮

**1)** What is the $y$-intercept of $f(x) = \\frac{x + 3}{x - 1}$? Give the $y$-value. (e.g., for $\\frac{x+2}{x-4}$, $f(0) = \\frac{2}{-4} = -0.5$)

**2)** For $g(x) = \\frac{5}{x + 4} - 2$, what is the horizontal asymptote? Give the $y$-value. (e.g., $\\frac{3}{x-1} + 7$ has HA at $y = 7$)

**3)** How many vertical asymptotes does $h(x) = \\frac{x}{x^3 - x}$ have after simplification? (e.g., $\\frac{x}{x^2-x} = \\frac{x}{x(x-1)} = \\frac{1}{x-1}$ has $1$ VA)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-3', '-2', '2'],
        hint1: '$f(0) = \\frac{0+3}{0-1} = \\frac{3}{-1}$.',
        hint2: 'In $\\frac{a}{x-h} + k$ form, the HA is $y = k$.',
        hint3: 'Factor: $x^3 - x = x(x^2-1) = x(x-1)(x+1)$. Cancel the $x$. Remaining: $(x-1)(x+1)$.',
        explanation: '1) $f(0) = -3$. 2) HA at $y = -2$ (the $k$ value). 3) $\\frac{x}{x(x-1)(x+1)} = \\frac{1}{(x-1)(x+1)}$ for $x \\neq 0$. VAs at $x = 1$ and $x = -1$ (plus a hole at $x = 0$). Two VAs.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Graphing Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $f(x) = \\frac{a}{x - h} + k$, the vertical asymptote is at',
            options: ['$x = k$', '$x = h$', '$x = a$', '$y = h$']
          },
          {
            label: 'To find $x$-intercepts of a rational function, set the _____ equal to zero',
            options: ['denominator', 'numerator', 'leading coefficient', 'degree']
          },
          {
            label: 'If $a < 0$ in $\\frac{a}{x - h} + k$, the graph is',
            options: ['shifted down', 'reflected across the $x$-axis', 'shifted left', 'compressed horizontally']
          },
          {
            label: 'Between two vertical asymptotes, the graph',
            options: ['must cross the $x$-axis', 'stays entirely above or below the $x$-axis', 'could be above, below, or cross — use sign analysis', 'is always increasing']
          }
        ],
        correctAnswers: ['$x = h$', 'numerator', 'reflected across the $x$-axis', 'could be above, below, or cross — use sign analysis'],
        hint1: '$h$ controls the horizontal shift, which moves the VA.',
        hint2: 'A fraction is zero when its top is zero (and bottom is not).',
        hint3: 'Negative $a$ flips the entire curve upside-down.',
        explanation: 'VA at $x = h$. Intercepts from numerator = 0. Negative $a$ reflects over $x$-axis. Between VAs, you must test a point to determine sign.'
      }
    },
    {
      id: 'p5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Graphing** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\frac{x^2 - 4}{x^2 - x - 2}$, which is correct?',
            options: [
              'VA at $x = 2$ and $x = -1$, HA at $y = 1$',
              'Hole at $x = 2$, VA at $x = -1$, HA at $y = 1$',
              'Hole at $x = -1$, VA at $x = 2$, HA at $y = 1$',
              'VAs at $x = 2$ and $x = -1$, no HA'
            ],
            correctAnswer: 1,
            explanation: 'Factor: $\\frac{(x-2)(x+2)}{(x-2)(x+1)}$. The $(x-2)$ cancels → hole at $x = 2$. Remaining: $\\frac{x+2}{x+1}$. VA at $x = -1$. Equal degrees → HA at $y = \\frac{1}{1} = 1$.'
          },
          {
            question: 'The graph of $f(x) = \\frac{-2}{x + 3} - 1$ is in which quadrants relative to its asymptotes?',
            options: [
              'Above-left and below-right of the intersection $(−3, −1)$',
              'Below-left and above-right of the intersection $(−3, −1)$',
              'Above on both sides',
              'Below on both sides'
            ],
            correctAnswer: 0,
            explanation: 'Since $a = -2 < 0$, the graph is reflected. For $\\frac{a}{x-h}+k$ with $a < 0$, the branches are in the upper-left and lower-right regions relative to the asymptote intersection point $(h, k) = (-3, -1)$.'
          }
        ]
      }
    }
  ]
};
