export const calcabContinuityIVTPart2Data = {
  topicSlug: 'continuity-ivt-calcab',
  sections: [
    {
      id: 'ci2-intro',
      type: 'text' as const,
      content: `# ∫ Continuity — Piecewise Functions & Algebraic Tests

**Part 2 of 7 — Making Piecewise Functions Continuous**

---

> 🔑 **Key Concept:** The AP exam frequently asks you to find values of parameters (like $a$ and $b$) that make a piecewise function continuous. This requires matching limits at the boundary points.`
    },
    {
      id: 'ci2-piecewise',
      type: 'text' as const,
      content: `
## 📖 Continuity of Piecewise Functions

For a piecewise function with a boundary at $x = c$, continuity requires:

$$\\boxed{\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)}$$

### Worked Example 1: One Unknown

$$f(x) = \\begin{cases} x^2 + k & x \\leq 1 \\\\ 3x + 2 & x > 1 \\end{cases}$$

At $x = 1$: Left limit = $1 + k$, Right limit = $5$, $f(1) = 1 + k$

For continuity: $1 + k = 5 \\implies k = 4$

---

### Worked Example 2: Two Unknowns

$$g(x) = \\begin{cases} 2x & x < 1 \\\\ ax + b & 1 \\leq x \\leq 3 \\\\ -x + 10 & x > 3 \\end{cases}$$

**At $x = 1$:** $\\lim_{x \\to 1^-} 2x = 2$ and $g(1) = a + b$. So $a + b = 2$.

**At $x = 3$:** $g(3) = 3a + b$ and $\\lim_{x \\to 3^+}(-x+10) = 7$. So $3a + b = 7$.

**Solve:** $3a + b - (a + b) = 7 - 2 \\implies 2a = 5 \\implies a = 5/2, b = -1/2$.

---

### Worked Example 3: Trigonometric Boundary

$$h(x) = \\begin{cases} \\frac{\\sin(2x)}{x} & x \\neq 0 \\\\ c & x = 0 \\end{cases}$$

$\\lim_{x \\to 0} \\frac{\\sin 2x}{x} = \\lim_{x \\to 0} \\frac{2\\sin 2x}{2x} = 2$

For continuity: $c = 2$.`
    },
    {
      id: 'ci2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Piecewise Continuity** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Find $k$ so that $f(x) = \\begin{cases} kx^2 & x \\leq 2 \\\\ x + 6 & x > 2 \\end{cases}$ is continuous at $x = 2$.',
            options: ['$k = 1$', '$k = 2$', '$k = 4$', '$k = 8$'],
            correctAnswer: 1,
            explanation: 'Left: $k(4) = 4k$. Right: $2 + 6 = 8$. So $4k = 8 \\implies k = 2$.'
          },
          {
            question: 'For $g(x) = \\begin{cases} e^x & x < 0 \\\\ ax + b & x \\geq 0 \\end{cases}$ to be continuous AND differentiable at $x = 0$, what is $a$?',
            options: ['$0$', '$1$', '$e$', '$-1$'],
            correctAnswer: 1,
            explanation: 'Continuity: $e^0 = b \\implies b = 1$. Differentiability: derivatives must match. Left: $e^0 = 1$. Right: $a$. So $a = 1$.'
          }
        ]
      }
    },
    {
      id: 'ci2-algebraic',
      type: 'text' as const,
      content: `
## 📌 Algebraic Properties of Continuous Functions

If $f$ and $g$ are continuous at $x = a$, then so are:

| Operation | Function | Why |
|-----------|----------|-----|
| Sum | $f + g$ | $\\lim(f+g) = \\lim f + \\lim g$ |
| Difference | $f - g$ | Limit law for differences |
| Product | $f \\cdot g$ | $\\lim(fg) = (\\lim f)(\\lim g)$ |
| Quotient | $f/g$ | If $g(a) \\neq 0$ |
| Scalar | $cf$ | $\\lim(cf) = c \\lim f$ |
| Composition | $f \\circ g$ | $\\lim f(g(x)) = f(\\lim g(x))$ |
| Power | $[f]^n$ | Product of continuous functions |

### Application

Since $\\sin x$ and $x^2$ are continuous everywhere, $\\sin(x^2)$ is continuous everywhere (composition of continuous functions).

Since $e^x$ is continuous and $\\cos x$ is continuous, $e^{\\cos x}$ is continuous everywhere.

> **AP Tip:** You can build complex continuous functions from simple ones using these properties. On the exam, state which property you're using.`
    },
    {
      id: 'ci2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Making Functions Continuous** 🧮

**1)** Find $c$ so that $f(x) = \\begin{cases} x^2 - 1 & x < 3 \\\\ cx - 5 & x \\geq 3 \\end{cases}$ is continuous. $c = $

**2)** For $g(x) = \\begin{cases} \\frac{x^2-4}{x-2} & x \\neq 2 \\\\ k & x = 2 \\end{cases}$, find $k$ for continuity. $k = $

**3)** How many values of $x$ make $h(x) = \\frac{x+3}{x^2-9}$ discontinuous?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['13/3', '4', '2'],
        hint1: 'Left limit at 3: $9-1=8$. Right: $3c-5$. Set $3c-5=8$.',
        hint2: 'Factor: $\\frac{(x-2)(x+2)}{x-2} = x+2$. Limit at 2 is $4$.',
        hint3: '$x^2-9 = (x-3)(x+3) = 0$ at $x = 3$ and $x = -3$.',
        explanation: '1) $3c-5=8$, so $c=13/3$. 2) $\\lim_{x\\to 2}(x+2)=4$. 3) Two points: $x=3$ and $x=-3$.'
      }
    },
    {
      id: 'ci2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Continuity True/False** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'If $f$ is continuous at $a$ and $g$ is continuous at $f(a)$, then $g \\circ f$ is continuous at $a$', options: ['True', 'False'] },
          { label: 'If $f$ has a removable discontinuity at $a$, then $\\lim_{x \\to a} f(x)$ exists', options: ['True', 'False'] },
          { label: 'If $f$ is continuous on $[a,b]$ then $f$ has a maximum on $[a,b]$', options: ['True', 'False'] },
          { label: 'If $\\lim_{x \\to a} f(x) = f(a)$, then $f$ is continuous at $a$', options: ['True', 'False'] }
        ],
        correctAnswers: ['True', 'True', 'True', 'True'],
        hint1: 'Composition of continuous functions is continuous.',
        hint2: 'Removable means the limit exists but equals the wrong value (or function is undefined).',
        hint3: 'This is the Extreme Value Theorem.',
        explanation: 'All four statements are true. Statement 3 is the Extreme Value Theorem. Statement 4 encompasses all three conditions (if the limit equals $f(a)$, both must exist).'
      }
    },
    {
      id: 'ci2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz** ✅`,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = \\begin{cases} ax^2 + b & x \\leq 1 \\\\ 2x + 1 & x > 1 \\end{cases}$ is continuous and differentiable at $x = 1$, find $a + b$.',
            options: ['$3$', '$2$', '$1$', '$4$'],
            correctAnswer: 0,
            explanation: 'Continuity: $a + b = 3$. Differentiability: $2a = 2$, so $a = 1, b = 2$. $a + b = 3$.'
          },
          {
            question: 'The function $f(x) = \\sqrt{4-x^2}$ is continuous on:',
            options: ['$(-\\infty, \\infty)$', '$(-2, 2)$', '$[-2, 2]$', '$[0, 2]$'],
            correctAnswer: 2,
            explanation: '$ 4 - x^2 \\geq 0$ requires $-2 \\leq x \\leq 2$. $f$ is continuous on its entire domain $[-2, 2]$, including the endpoints (one-sided continuity).'
          }
        ]
      }
    }
  ]
}
