export const calcabLimitsInfinityPart3Data = {
  topicSlug: 'limits-at-infinity-calcab',
  sections: [
    {
      id: 'lai3-intro',
      type: 'text' as const,
      content: `# ∫ Limits at Infinity — Unbounded & Oscillating End Behavior

**Part 3 of 7 — When Horizontal Asymptotes Don't Exist**

---

### Topics in This Part

| Section |
|---------|
| 📖 Unbounded End Behavior |
| Leading-Term Analysis |
| 📌 End Behavior of Non-Rational Functions |
| Piecewise & Absolute Value Limits |

> 🔑 **Key Concept:** A function has no horizontal asymptote when its values grow without bound or keep oscillating. The limit at infinity then tells you which: $\\infty$, $-\\infty$, or no limit at all.`
    },
    {
      id: 'lai3-unbounded',
      type: 'text' as const,
      content: `
## 📖 Unbounded End Behavior

When $\\deg(p) > \\deg(q)$ in $\\frac{p(x)}{q(x)}$, the limit at infinity is $\\infty$ or $-\\infty$, and there is no horizontal asymptote.

### Leading-Term Analysis

For large $|x|$, only the leading terms matter:

$$\\frac{p(x)}{q(x)} \\approx \\frac{a_n x^n}{b_m x^m} = \\frac{a_n}{b_m}\\,x^{n-m}$$

The sign of $\\frac{a_n}{b_m}$ and whether $n - m$ is odd or even decide the sign of the infinite limit.

---

### Worked Example (Odd Degree Difference)

$f(x) = \\frac{x^2 + 3x + 2}{2x - 5}$. Leading terms: $\\frac{x^2}{2x} = \\frac{x}{2}$.

- As $x \\to \\infty$: $\\frac{x}{2} \\to \\infty$, so $\\lim_{x \\to \\infty} f(x) = \\infty$.
- As $x \\to -\\infty$: $\\frac{x}{2} \\to -\\infty$, so $\\lim_{x \\to -\\infty} f(x) = -\\infty$.

---

### Worked Example (Even Degree Difference)

$g(x) = \\frac{-3x^4 + x}{x^2 + 1}$. Leading terms: $\\frac{-3x^4}{x^2} = -3x^2$.

Since $-3x^2 \\to -\\infty$ in both directions, $\\lim_{x \\to \\pm\\infty} g(x) = -\\infty$.

> ⚠️ **Warning:** Check each direction separately. An odd degree difference sends the two ends in opposite directions; an even one sends them the same way.

---

### Summary for Rational Functions

| Degree Comparison | $\\lim_{x \\to \\pm\\infty} \\frac{p(x)}{q(x)}$ | Horizontal Asymptote |
|-------------------|---------------|---------------|
| $\\deg(p) < \\deg(q)$ | $0$ | $y = 0$ |
| $\\deg(p) = \\deg(q)$ | $\\frac{a_n}{b_n}$ | $y = \\frac{a_n}{b_n}$ |
| $\\deg(p) > \\deg(q)$ | $\\infty$ or $-\\infty$ (leading terms) | None |

Slant (oblique) asymptotes are a precalculus idea; they are not tested on the AP Calculus exam.`
    },
    {
      id: 'lai3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Unbounded End Behavior Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to -\\infty} \\frac{x^2 - 4}{x + 3}$.',
            options: ['$\\infty$', '$-\\infty$', '$1$', '$0$'],
            correctAnswer: 1,
            explanation: 'Leading terms: $\\frac{x^2}{x} = x$, which goes to $-\\infty$ as $x \\to -\\infty$. Answering $\\infty$ ignores the direction, $1$ (the ratio of leading coefficients) applies only to equal degrees, and $0$ applies when the denominator has the higher degree.'
          },
          {
            question: 'Which function satisfies $\\lim_{x \\to \\infty} f(x) = \\infty$ AND $\\lim_{x \\to -\\infty} f(x) = \\infty$?',
            options: ['$\\frac{x}{x^2+1}$', '$\\frac{x^2+1}{x}$', '$\\frac{x^2}{x^2+1}$', '$\\frac{x^3}{x+1}$'],
            correctAnswer: 3,
            explanation: '$\\frac{x^3}{x+1} \\approx x^2$, which goes to $\\infty$ in both directions. $\\frac{x^2+1}{x} \\approx x$ goes to $-\\infty$ on the left, $\\frac{x}{x^2+1} \\to 0$, and $\\frac{x^2}{x^2+1} \\to 1$.'
          }
        ]
      }
    },
    {
      id: 'lai3-end-behavior',
      type: 'text' as const,
      content: `
## 📌 End Behavior of Non-Rational Functions

### Trigonometric Functions

Most trig functions **oscillate** and have no limit at infinity:

$$\\lim_{x \\to \\infty} \\sin x = \\text{DNE} \\qquad \\lim_{x \\to \\infty} \\cos x = \\text{DNE}$$

But they can be "tamed" by dividing:

$$\\lim_{x \\to \\infty} \\frac{\\sin x}{x} = 0$$

since $-1 \\leq \\sin x \\leq 1$, so $\\frac{-1}{x} \\leq \\frac{\\sin x}{x} \\leq \\frac{1}{x}$, and both bounds $\\to 0$ (Squeeze Theorem).

---

### Piecewise Functions

Evaluate each piece's limit:

$$f(x) = \\begin{cases} \\frac{x^2}{x+1} & x \\geq 0 \\\\ \\frac{2x}{x-3} & x < 0 \\end{cases}$$

- $\\lim_{x \\to \\infty} f(x) = \\lim_{x \\to \\infty} \\frac{x^2}{x+1} = \\infty$
- $\\lim_{x \\to -\\infty} f(x) = \\lim_{x \\to -\\infty} \\frac{2x}{x-3} = 2$

---

### Absolute Value Functions

$$\\lim_{x \\to \\infty} \\frac{|x-3|}{x+1}$$

For large $x > 3$: $|x-3| = x-3$, so $\\frac{x-3}{x+1} \\to 1$.

$$\\lim_{x \\to -\\infty} \\frac{|x-3|}{x+1}$$

For $x < 3$: $|x-3| = -(x-3) = 3-x$, so $\\frac{3-x}{x+1} = \\frac{-x+3}{x+1} \\to -1$.`
    },
    {
      id: 'lai3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**End Behavior Drill** 🧮

Evaluate each limit. Enter a number, "infinity", or "-infinity".

**1)** $\\lim_{x \\to \\infty} \\frac{3x^2 + 2x - 1}{x + 2}$

**2)** $\\lim_{x \\to -\\infty} \\frac{x^2 - 5x + 4}{x - 2}$

**3)** $\\lim_{x \\to \\infty} \\frac{-x^2 + 6x}{2x^2 - 1}$
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'infinity', acceptableAnswers: ['infinity', '∞', 'inf', '+infinity'] }, { question: '(2)', answer: '-infinity', acceptableAnswers: ['-infinity', '-∞', '-inf'] }, { question: '(3)', answer: '-1/2', acceptableAnswers: ['-1/2', '-0.5', '-.5'] }],
        hint1: 'Leading terms: $\\frac{3x^2}{x} = 3x$. What does $3x$ do as $x \\to \\infty$?',
        hint2: 'Leading terms: $\\frac{x^2}{x} = x$. Now let $x \\to -\\infty$.',
        hint3: 'Equal degrees: use the ratio of leading coefficients, $\\frac{-1}{2}$.',
        explanation: '1) $3x \\to \\infty$. 2) $x \\to -\\infty$. 3) $-\\frac{1}{2}$ (equal degrees).'
      }
    },
    {
      id: 'lai3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Squeeze Theorem at Infinity** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{\\cos(x^2)}{x}$.',
            options: ['$1$', '$0$', '$-1$', 'Does not exist'],
            correctAnswer: 1,
            explanation: '$-1 \\leq \\cos(x^2) \\leq 1$, so $\\frac{-1}{x} \\leq \\frac{\\cos(x^2)}{x} \\leq \\frac{1}{x}$. Both bounds $\\to 0$, so by the Squeeze Theorem the limit is $0$.'
          },
          {
            question: 'Which limit does NOT exist?',
            options: ['$\\lim_{x \\to \\infty} \\frac{\\sin x}{x^2}$', '$\\lim_{x \\to \\infty} \\sin\\left(\\frac{1}{x}\\right)$', '$\\lim_{x \\to \\infty} \\cos x$', '$\\lim_{x \\to \\infty} \\frac{x + \\cos x}{x}$'],
            correctAnswer: 2,
            explanation: '$\\cos x$ oscillates between $-1$ and $1$ forever, so it has no limit. The other three all converge: $\\frac{\\sin x}{x^2} \\to 0$, $\\sin(1/x) \\to 0$, $\\frac{x+\\cos x}{x} \\to 1$.'
          }
        ]
      }
    },
    {
      id: 'lai3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Asymptote Classification** 🔽\n\nFor each function, identify the type of asymptote as $x \\to \\infty$.`,
      exercise: {
        dropdowns: [
          { label: '$f(x) = \\frac{x^2+1}{2x-3}$', options: ['Horizontal at $y=0$', 'Horizontal at $y=1/2$', 'None: $f \\to \\infty$', 'None: $f \\to -\\infty$'] },
          { label: '$g(x) = \\frac{5x^3}{x^3+x}$', options: ['Horizontal at $y=0$', 'Horizontal at $y=5$', 'None: $g \\to \\infty$', 'None: $g \\to -\\infty$'] },
          { label: '$h(x) = \\frac{-x^4+2}{x^2-1}$', options: ['Horizontal at $y=0$', 'Horizontal at $y=-1$', 'None: $h \\to \\infty$', 'None: $h \\to -\\infty$'] },
          { label: '$k(x) = \\frac{3}{x^2+4}$', options: ['Horizontal at $y=0$', 'Horizontal at $y=3$', 'None: $k \\to \\infty$', 'None: $k \\to -\\infty$'] }
        ],
        correctAnswers: ['None: $f \\to \\infty$', 'Horizontal at $y=5$', 'None: $h \\to -\\infty$', 'Horizontal at $y=0$'],
        hint1: 'Leading terms: $\\frac{x^2}{2x} = \\frac{x}{2}$.',
        hint2: 'Degree 3 over degree 3: equal degrees, horizontal at ratio of leading coefficients.',
        hint3: 'Leading terms: $\\frac{-x^4}{x^2} = -x^2$.',
        explanation: '$f \\approx \\frac{x}{2} \\to \\infty$. $g$: horizontal $y=5$ (equal degrees). $h \\approx -x^2 \\to -\\infty$. $k$: horizontal $y=0$ (deg 0 < deg 2).'
      }
    },
    {
      id: 'lai3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Unbounded & Oscillating End Behavior** ✅`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to -\\infty} \\frac{2x^3 + 5x - 3}{x + 4}$.',
            options: ['$\\infty$', '$-\\infty$', '$2$', '$0$'],
            correctAnswer: 0,
            explanation: 'Leading terms: $\\frac{2x^3}{x} = 2x^2$, which goes to $\\infty$ as $x \\to -\\infty$ because the degree difference is even. Answering $-\\infty$ follows the direction of $x$ instead of the sign of $2x^2$, $2$ is the ratio of leading coefficients (equal degrees only), and $0$ needs a higher-degree denominator.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to -\\infty} \\frac{|2x - 1|}{x + 4}$.',
            options: ['$2$', '$-2$', '$0$', '$-\\frac{1}{2}$'],
            correctAnswer: 1,
            explanation: 'For $x < \\frac{1}{2}$, $|2x - 1| = 1 - 2x$, so the expression is $\\frac{1 - 2x}{x + 4} \\to \\frac{-2}{1} = -2$. Dropping the absolute-value sign change gives $2$, $-\\frac{1}{2}$ flips the coefficients, and $0$ would need a higher-degree denominator.'
          }
        ]
      }
    }
  ]
}
