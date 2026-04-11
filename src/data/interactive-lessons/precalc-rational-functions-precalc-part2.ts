export const precalcRationalPart2Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 📈 Vertical & Horizontal Asymptotes

**Part 2 of 7 — Predicting Long-Run and Singular Behavior**

Asymptotes are invisible boundary lines that a rational function's graph approaches but (usually) never reaches. They tell us what happens at the **extremes** — near excluded values and as $x \\to \\pm\\infty$.
      `
    },
    {
      id: 'p2-vertical',
      type: 'text' as const,
      content: `
## 📖 Vertical Asymptotes

A **vertical asymptote** occurs at $x = c$ when:
1. $q(c) = 0$ (denominator is zero), AND
2. The factor $(x - c)$ does **not** cancel with the numerator

$$\\boxed{\\text{VA at } x = c \\iff q(c) = 0 \\text{ and } p(c) \\neq 0}$$

### What Happens Near a VA

As $x$ approaches $c$, $f(x) \\to +\\infty$ or $f(x) \\to -\\infty$ (the graph shoots up or down).

### Worked Example

> **Find the vertical asymptote(s) of $f(x) = \\frac{2x}{x^2 - 1}$.**

**Step 1:** Factor denominator: $x^2 - 1 = (x-1)(x+1)$

**Step 2:** Set each factor to zero: $x = 1$ and $x = -1$

**Step 3:** Check numerator: $2(1) = 2 \\neq 0$ and $2(-1) = -2 \\neq 0$

**Result:** Vertical asymptotes at $x = 1$ and $x = -1$

> ⚠️ If both numerator and denominator are zero at $x = c$, the common factor cancels and you get a **hole** (Part 3), not a vertical asymptote.
      `
    },
    {
      id: 'p2-horizontal',
      type: 'text' as const,
      content: `
## 📖 Horizontal Asymptotes

A **horizontal asymptote** tells you the output value that $f(x)$ approaches as $x \\to \\pm\\infty$. It depends entirely on comparing the **degrees** of the numerator and denominator.

| Degree Comparison | Horizontal Asymptote | Why |
|:------------------|:-------------------:|:----|
| $\\deg(p) < \\deg(q)$ | $y = 0$ | Denominator grows faster → ratio shrinks to $0$ |
| $\\deg(p) = \\deg(q)$ | $y = \\frac{a_n}{b_n}$ (ratio of leading coefficients) | Leading terms dominate equally |
| $\\deg(p) > \\deg(q)$ | **None** (oblique/slant asymptote instead) | Numerator grows faster → ratio grows without bound |

---

### Worked Examples

**Example 1:** $f(x) = \\frac{3x + 1}{x^2 + 5}$ → $\\deg(p) = 1 < \\deg(q) = 2$ → HA: $y = 0$

**Example 2:** $g(x) = \\frac{4x^2 - 1}{2x^2 + 3}$ → $\\deg(p) = \\deg(q) = 2$ → HA: $y = \\frac{4}{2} = 2$

**Example 3:** $h(x) = \\frac{x^3}{x + 1}$ → $\\deg(p) = 3 > \\deg(q) = 1$ → No HA (slant asymptote exists)

> 💡 **Memory aid:** "Bottom wins → $y = 0$. Tie → ratio of leaders. Top wins → no HA."
      `
    },
    {
      id: 'p2-slant',
      type: 'text' as const,
      content: `
## 📐 Slant (Oblique) Asymptotes

When $\\deg(p) = \\deg(q) + 1$ (numerator is exactly one degree higher), the function has a **slant asymptote** found by polynomial long division.

### Example

> **Find the slant asymptote of $f(x) = \\frac{x^2 + 3x + 5}{x + 1}$.**

Divide $x^2 + 3x + 5$ by $x + 1$:

$$x^2 + 3x + 5 = (x + 1)(x + 2) + 3$$

$$f(x) = x + 2 + \\frac{3}{x + 1}$$

As $x \\to \\pm\\infty$, $\\frac{3}{x+1} \\to 0$, so:

$$\\boxed{\\text{Slant asymptote: } y = x + 2}$$
      `
    },
    {
      id: 'p2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Asymptote Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the horizontal asymptote of $f(x) = \\frac{5x^3 + 2}{5x^3 - 1}$?',
            options: [
              '$y = 0$',
              '$y = 1$',
              '$y = 5$',
              'No horizontal asymptote'
            ],
            correctAnswer: 1,
            explanation: '$\\deg(p) = \\deg(q) = 3$, so HA is the ratio of leading coefficients: $y = \\frac{5}{5} = 1$.'
          },
          {
            question: 'How many vertical asymptotes does $f(x) = \\frac{x}{x^2 + 4}$ have?',
            options: [
              '0',
              '1',
              '2',
              'Infinitely many'
            ],
            correctAnswer: 0,
            explanation: '$x^2 + 4 = 0$ gives $x^2 = -4$, which has no real solutions. No denominator zeros means no vertical asymptotes.'
          },
          {
            question: 'Which function has a slant asymptote?',
            options: [
              '$\\frac{x}{x^2 + 1}$',
              '$\\frac{x^2 + 1}{x^2 - 1}$',
              '$\\frac{x^2 + 1}{x - 1}$',
              '$\\frac{x^3 + 1}{x}$'
            ],
            correctAnswer: 2,
            explanation: 'A slant asymptote occurs when $\\deg(p) = \\deg(q) + 1$. For $\\frac{x^2+1}{x-1}$: $\\deg(p) = 2 = 1 + 1 = \\deg(q) + 1$. Option D has $\\deg(p) = 3$ and $\\deg(q) = 1$, so $\\deg(p) = \\deg(q) + 2$ — that gives a parabolic asymptote, not slant.'
          }
        ]
      }
    },
    {
      id: 'p2-input-drill',
      type: 'input-boxes' as const,
      content: `
**Asymptote Drill** 🧮

**1)** What is the horizontal asymptote of $f(x) = \\frac{6x^2 + 1}{3x^2 - 7}$? Give the $y$-value. (e.g., for $\\frac{8x^2}{4x^2 + 1}$, HA is $y = \\frac{8}{4} = 2$)

**2)** How many vertical asymptotes does $g(x) = \\frac{1}{x^2 - 5x + 6}$ have? (e.g., for $\\frac{1}{x^2-1}$, factor to $(x-1)(x+1)$ → $2$ VAs)

**3)** For $h(x) = \\frac{x^2 + x}{x + 1}$, after canceling the common factor, what is $h(x)$ simplified? Give just the simplified expression as a number (evaluate $h(2)$). (e.g., $\\frac{x(x+3)}{x+3} = x$, so $h(2) = 2$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '2', '2'],
        hint1: 'Leading coefficients: $\\frac{6}{3}$.',
        hint2: 'Factor: $x^2 - 5x + 6 = (x-2)(x-3)$. How many distinct roots?',
        hint3: '$x^2 + x = x(x+1)$. Cancel $(x+1)$. Then $h(x) = x$ (for $x \\neq -1$).',
        explanation: '1) $\\frac{6}{3} = 2$. 2) $(x-2)(x-3) = 0$ at $x = 2, 3$ — two VAs. 3) $\\frac{x(x+1)}{x+1} = x$, so $h(2) = 2$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Asymptote Rules — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When $\\deg(p) < \\deg(q)$, the horizontal asymptote is',
            options: ['$y = 1$', '$y = 0$', 'the ratio of leading coefficients', 'there is no HA']
          },
          {
            label: 'A vertical asymptote at $x = c$ means $q(c) = 0$ and',
            options: ['$p(c) = 0$ also', '$p(c) \\neq 0$ (factor does not cancel)', 'the degree of $p$ is less than $q$', '$f(c) = \\infty$']
          },
          {
            label: 'A slant asymptote exists when $\\deg(p)$ exceeds $\\deg(q)$ by exactly',
            options: ['0', '1', '2', 'any amount']
          },
          {
            label: 'Can a rational function cross its horizontal asymptote?',
            options: ['Never', 'Yes, but only finitely many times', 'Only at $x = 0$', 'Only when $\\deg(p) = \\deg(q)$']
          }
        ],
        correctAnswers: ['$y = 0$', '$p(c) \\neq 0$ (factor does not cancel)', '1', 'Yes, but only finitely many times'],
        hint1: 'If the denominator grows faster, the ratio shrinks toward zero.',
        hint2: 'If both are zero, the common factor cancels → hole, not VA.',
        hint3: 'Difference of 1 → linear quotient → slant. Difference of 0 → HA. Difference ≥ 2 → neither.',
        explanation: 'Bottom wins → $y=0$. VA requires the factor to NOT cancel. Slant needs exactly degree difference 1. A function CAN cross its HA — the HA only describes end behavior as $x \\to \\pm\\infty$.'
      }
    },
    {
      id: 'p2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Asymptotes** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The function $f(x) = \\frac{2x^2 - 3x + 1}{x^2 - 4}$ has:',
            options: [
              'HA at $y = 2$, VAs at $x = 2$ and $x = -2$',
              'HA at $y = 0$, VAs at $x = 2$ and $x = -2$',
              'HA at $y = 2$, VA at $x = 2$ only',
              'Slant asymptote $y = 2x - 3$, VAs at $x = \\pm 2$'
            ],
            correctAnswer: 0,
            explanation: '$\\deg(p) = \\deg(q) = 2$, so HA: $y = \\frac{2}{1} = 2$. Denominator: $x^2 - 4 = (x-2)(x+2) = 0$ at $x = 2, -2$. Numerator at those values: $p(2) = 8-6+1 = 3 \\neq 0$ and $p(-2) = 8+6+1 = 15 \\neq 0$, so both are VAs (not holes).'
          },
          {
            question: 'Which statement about $f(x) = \\frac{x^2 - x - 6}{x - 3}$ is correct?',
            options: [
              'VA at $x = 3$, HA at $y = 0$',
              'VA at $x = 3$, slant asymptote $y = x + 2$',
              'No VA (hole at $x = 3$), the function simplifies to $x + 2$',
              'VA at $x = 3$ and $x = -2$'
            ],
            correctAnswer: 2,
            explanation: '$x^2 - x - 6 = (x-3)(x+2)$. The $(x-3)$ cancels: $f(x) = x + 2$ for $x \\neq 3$. Since the factor cancels, $x = 3$ is a hole, not a VA. The simplified function is linear — no asymptotes at all.'
          }
        ]
      }
    }
  ]
};
