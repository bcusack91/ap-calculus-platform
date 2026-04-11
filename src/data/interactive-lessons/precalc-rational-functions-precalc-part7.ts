export const precalcRationalPart7Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Rational Functions — Full Synthesis

**Part 7 of 7 — Putting It All Together**

This final part integrates every concept: domain, asymptotes, holes, simplification, graphing, and solving. The problems are multi-step — just like exam questions.

### Your Rational Functions Toolkit

| Concept (Part) | Key Question |
|:---|:---|
| Domain & Excluded Values (1) | Where is the denominator zero? |
| Vertical & Horizontal Asymptotes (2) | What happens near excluded values and at $\\pm\\infty$? |
| Holes (3) | Do any factors cancel? |
| Simplification (4) | Can we factor, combine, or divide? |
| Graphing (5) | What does the complete picture look like? |
| Equations & Inequalities (6) | What $x$-values satisfy the condition? |
      `
    },
    {
      id: 'p7-complete-analysis',
      type: 'text' as const,
      content: `
## 📋 Complete Rational Function Analysis

### Worked Example

> **Fully analyze $f(x) = \\frac{2x^2 - 2}{x^2 - 4x + 3}$.**

**Step 1 — Factor completely:**
$$f(x) = \\frac{2(x^2 - 1)}{(x-1)(x-3)} = \\frac{2(x-1)(x+1)}{(x-1)(x-3)}$$

**Step 2 — Identify features:**

| Feature | Analysis |
|:--------|:---------|
| Common factor | $(x - 1)$ → **hole at $x = 1$** |
| Simplified form | $\\frac{2(x+1)}{x-3}$ for $x \\neq 1$ |
| Hole coordinates | $\\frac{2(1+1)}{1-3} = \\frac{4}{-2} = -2$ → hole at $(1, -2)$ |
| VA | $x - 3 = 0$ → $x = 3$ |
| HA | $\\deg = \\deg$ → $y = \\frac{2}{1} = 2$ |
| $x$-intercept | $2(x+1) = 0 \\implies x = -1$ → point $(-1, 0)$ |
| $y$-intercept | $f(0) = \\frac{2(1)}{-3} = -\\frac{2}{3}$ → point $\\left(0, -\\frac{2}{3}\\right)$ |
| Domain | $(-\\infty, 1) \\cup (1, 3) \\cup (3, \\infty)$ |
      `
    },
    {
      id: 'p7-equation-graph',
      type: 'text' as const,
      content: `
## ✏️ From Graph to Equation

When given a rational function's graph, work backwards:

| Given Feature | What It Tells You |
|:--------------|:------------------|
| Vertical asymptote at $x = a$ | $(x - a)$ is in the denominator (doesn't cancel) |
| Hole at $x = b$ | $(x - b)$ is in both numerator and denominator |
| HA at $y = 0$ | Degree of numerator < degree of denominator |
| HA at $y = c$ ($c \\neq 0$) | Equal degrees; $c$ = ratio of leading coefficients |
| $x$-intercept at $x = r$ | $(x - r)$ is a factor of the numerator |
| $y$-intercept at $(0, k)$ | $f(0) = k$ — use to find the leading coefficient |

### Example

> **A rational function has VA at $x = -2$, HA at $y = 3$, $x$-intercept at $x = 1$, and $y$-intercept at $(0, -\\frac{3}{2})$.**

**Build the equation:**

VA at $x = -2$ → denominator has $(x + 2)$

$x$-intercept at $x = 1$ → numerator has $(x - 1)$

HA at $y = 3$ → equal degrees, ratio of leading coefficients is $3$

$$f(x) = \\frac{3(x - 1)}{x + 2}$$

**Verify $y$-intercept:** $f(0) = \\frac{3(-1)}{2} = -\\frac{3}{2}$ ✔
      `
    },
    {
      id: 'p7-synthesis-quiz',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The function $f(x) = \\frac{x^2 - 4x + 3}{x^2 - 1}$ has:',
            options: [
              'Hole at $x = 1$, VA at $x = -1$, HA at $y = 1$',
              'VAs at $x = 1$ and $x = -1$, HA at $y = 1$',
              'Hole at $x = -1$, VA at $x = 1$, HA at $y = 1$',
              'Hole at $x = 1$, VA at $x = -1$, HA at $y = 0$'
            ],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{(x-1)(x-3)}{(x-1)(x+1)}$. Common factor $(x-1)$ → hole at $x = 1$. Remaining: $\\frac{x-3}{x+1}$. VA at $x = -1$. Equal degrees → HA at $y = 1$.'
          },
          {
            question: 'A rational function has VA at $x = 2$, hole at $x = -3$, HA at $y = 0$, and passes through $(0, 1)$. Which could it be?',
            options: [
              '$\\frac{x + 3}{(x - 2)(x + 3)}$',
              '$\\frac{-2(x + 3)}{(x - 2)(x + 3)}$',
              '$\\frac{x + 3}{(x + 3)}$',
              '$\\frac{2(x + 3)}{(x - 2)(x + 3)}$'
            ],
            correctAnswer: 1,
            explanation: 'Need: $(x+3)$ in both for hole, $(x-2)$ in denominator for VA, $\\deg(p) < \\deg(q)$ for HA $y = 0$. After simplification: $\\frac{a}{x-2}$. At $x = 0$: $\\frac{a}{-2} = 1$, so $a = -2$. This gives $\\frac{-2(x+3)}{(x-2)(x+3)}$.'
          },
          {
            question: 'Solve $\\frac{x}{x-2} = \\frac{2}{x-2} + 1$. The solution set is:',
            options: [
              '$\\{4\\}$',
              '$\\{2\\}$',
              '$\\{2, 4\\}$',
              'All reals except $x = 2$'
            ],
            correctAnswer: 3,
            explanation: 'Multiply by $(x-2)$: $x = 2 + (x-2) = x$. This is an identity ($x = x$, always true). But $x = 2$ makes the original undefined. Solution: all reals except $2$.'
          }
        ]
      }
    },
    {
      id: 'p7-multi-step-drill',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Drill** 🧮

**1)** For $f(x) = \\frac{x^2 - 9}{x + 3}$, what is the $y$-coordinate of the hole? (e.g., $\\frac{x^2 - 4}{x - 2} = x + 2$ for $x \\neq 2$, hole $y$-value: $2 + 2 = 4$)

**2)** What is the horizontal asymptote of $\\frac{3x^3 + 1}{6x^3 - x}$? Give the $y$-value. (e.g., $\\frac{4x^2}{2x^2+1}$ has HA $y = \\frac{4}{2} = 2$)

**3)** How many vertical asymptotes does $\\frac{x^2 - 1}{x^3 - x}$ have? (e.g., $\\frac{x}{x^2 - x} = \\frac{1}{x - 1}$ has $1$ VA)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-6', '0.5', '1'],
        hint1: '$x^2 - 9 = (x-3)(x+3)$. Cancel $(x+3)$: $f(x) = x - 3$. Evaluate at $x = -3$.',
        hint2: 'Equal degrees ($3 = 3$). Ratio of leading coefficients: $\\frac{3}{6}$.',
        hint3: 'Factor: $\\frac{(x-1)(x+1)}{x(x-1)(x+1)} = \\frac{1}{x}$ for $x \\neq \\pm 1$. The remaining denominator factor $x$ gives VA at $x = 0$.',
        explanation: '1) Cancel $(x+3)$: simplified is $x - 3$. At $x = -3$: $-3 - 3 = -6$. Hole at $(-3, -6)$. 2) Equal degrees: $\\frac{3}{6} = 0.5$. HA at $y = 0.5$. 3) Factor: $\\frac{(x-1)(x+1)}{x(x-1)(x+1)} = \\frac{1}{x}$ with holes at $x = \\pm 1$. Only VA is at $x = 0$. Answer: $1$.'
      }
    },
    {
      id: 'p7-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Synthesis — Match the Strategy** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To determine if $x = c$ is a hole or VA, check whether $(x - c)$',
            options: ['is in the numerator', 'is in the denominator', 'cancels between numerator and denominator', 'makes the function positive']
          },
          {
            label: 'Given a complete graph, the first thing to identify is the',
            options: ['slant asymptote', 'domain restrictions (VAs and holes)', '$y$-intercept', 'end behavior']
          },
          {
            label: 'When solving a rational equation, the LCD method can introduce',
            options: ['complex numbers', 'extraneous solutions', 'new asymptotes', 'imaginary roots']
          },
          {
            label: 'The $y$-intercept of ANY function is found by evaluating at',
            options: ['$x = 1$', '$x = -1$', '$x = 0$', 'the VA']
          }
        ],
        correctAnswers: ['cancels between numerator and denominator', 'domain restrictions (VAs and holes)', 'extraneous solutions', '$x = 0$'],
        hint1: 'Hole = canceled factor. VA = uncanceled factor in denominator.',
        hint2: 'Asymptotes and holes define the skeleton of the graph.',
        hint3: 'LCD multiplication can make denominators disappear, masking division-by-zero issues.',
        explanation: 'Cancel → hole; no cancel → VA. Read VAs/holes from a graph first. LCD method risks extraneous solutions. $y$-intercept is always $f(0)$.'
      }
    },
    {
      id: 'p7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Rational Functions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Complete analysis: $f(x) = \\frac{x^2 + x - 6}{x^2 - 4}$. Which statement is fully correct?',
            options: [
              'Hole at $(2, \\frac{5}{4})$, VA at $x = -2$, HA at $y = 1$, $x$-int at $x = -3$',
              'VAs at $x = 2$ and $x = -2$, HA at $y = 1$',
              'Hole at $(-2, \\frac{5}{4})$, VA at $x = 2$, HA at $y = 1$, $x$-int at $x = -3$',
              'Hole at $(2, \\frac{5}{4})$, VA at $x = -2$, HA at $y = 1$, $x$-int at $x = 3$'
            ],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{(x+3)(x-2)}{(x-2)(x+2)}$. Cancel $(x-2)$: hole at $x = 2$. Simplified: $\\frac{x+3}{x+2}$. Hole $y$-value: $\\frac{5}{4}$. VA at $x = -2$. HA at $y = 1$. $x$-intercept: $x + 3 = 0 \\Rightarrow x = -3$.'
          },
          {
            question: 'Which combination of information uniquely determines a simple rational function $\\frac{ax + b}{cx + d}$?',
            options: [
              'VA and HA only',
              'VA, HA, and one point',
              'Two $x$-intercepts',
              'The degree alone'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{ax+b}{cx+d}$ has 4 parameters but only 3 independent ones (you can divide through by one). VA gives $d/c$, HA gives $a/c$, and one point provides the remaining constraint. Three independent conditions determine the function uniquely.'
          }
        ]
      }
    }
  ]
};
