export const calcabLimitsInfinityPart3Data = {
  topicSlug: 'limits-at-infinity-calcab',
  sections: [
    {
      id: 'lai3-intro',
      type: 'text' as const,
      content: `# ∫ Limits at Infinity — Oblique & Slant Asymptotes

**Part 3 of 7 — When Horizontal Asymptotes Don't Exist**

---

### Topics in This Part

| Section |
|---------|
| 📖 Oblique (Slant) Asymptotes |
| Polynomial Long Division |
| 📌 End Behavior of Non-Rational Functions |
| Piecewise & Absolute Value Limits |

> 🔑 **Key Concept:** When the numerator's degree exceeds the denominator's by exactly one, the function has an oblique asymptote — a slanted line the graph approaches at infinity.`
    },
    {
      id: 'lai3-oblique',
      type: 'text' as const,
      content: `
## 📖 Oblique (Slant) Asymptotes

When $\\deg(p) = \\deg(q) + 1$ in $\\frac{p(x)}{q(x)}$, the function has an **oblique asymptote**.

### How to Find It: Polynomial Long Division

Divide $p(x)$ by $q(x)$:

$$\\frac{p(x)}{q(x)} = (\\text{linear quotient}) + \\frac{\\text{remainder}}{q(x)}$$

As $x \\to \\pm\\infty$, the remainder fraction $\\to 0$, leaving just the linear part.

---

### Worked Example

Find the oblique asymptote of $f(x) = \\frac{x^2 + 3x + 2}{x + 1}$.

**Long division:**

$$x^2 + 3x + 2 \\div (x+1) = x + 2 \\text{ R } 0$$

So $f(x) = x + 2$ (exactly, after cancellation). The oblique asymptote is $y = x + 2$.

---

### Example with Remainder

$g(x) = \\frac{2x^2 - x + 3}{x - 1}$

**Long division:**

$$2x^2 - x + 3 \\div (x-1) = 2x + 1 \\text{ R } 4$$

$$g(x) = 2x + 1 + \\frac{4}{x-1}$$

As $x \\to \\pm\\infty$, $\\frac{4}{x-1} \\to 0$, so the oblique asymptote is $y = 2x + 1$.

> ⚠️ **Warning:** If $\\deg(p) - \\deg(q) \\geq 2$, there is no oblique asymptote — the end behavior is parabolic or higher.

---

### Summary of Asymptote Types

| Degree Comparison | Asymptote Type |
|-------------------|---------------|
| $\\deg(p) < \\deg(q)$ | Horizontal: $y = 0$ |
| $\\deg(p) = \\deg(q)$ | Horizontal: $y = \\frac{a_n}{b_n}$ |
| $\\deg(p) = \\deg(q) + 1$ | Oblique: $y = mx + b$ |
| $\\deg(p) > \\deg(q) + 1$ | No asymptote (→ ±∞) |`
    },
    {
      id: 'lai3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Oblique Asymptotes Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What is the oblique asymptote of $f(x) = \\frac{x^2 - 4}{x + 3}$?',
            options: ['$y = x - 3$', '$y = x + 3$', '$y = x - 7$', '$y = x$'],
            correctAnswer: 0,
            explanation: 'Long division: $x^2 - 4 \\div (x+3) = x - 3$ remainder $5$. So the oblique asymptote is $y = x - 3$.'
          },
          {
            question: 'Which function has an oblique asymptote?',
            options: ['$\\frac{x}{x^2+1}$', '$\\frac{x^2+1}{x}$', '$\\frac{x^2}{x^2+1}$', '$\\frac{x^3}{x+1}$'],
            correctAnswer: 1,
            explanation: '$\\frac{x^2+1}{x}$: degree 2 over degree 1, difference is exactly 1. This gives an oblique asymptote. ($\\frac{x^3}{x+1}$ has degree difference 2, so no oblique asymptote.)'
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
**Oblique Asymptote Drill** 🧮

Find the oblique asymptote $y = mx + b$. Enter your answer as "mx + b" (e.g., "2x + 3").

**1)** $f(x) = \\frac{3x^2 + 2x - 1}{x + 2}$. Oblique asymptote:

**2)** $g(x) = \\frac{x^2 - 5x + 4}{x - 2}$. Oblique asymptote:

**3)** $h(x) = \\frac{-x^2 + 6x}{x - 1}$. Oblique asymptote:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3x - 4', 'x - 3', '-x + 5'],
        hint1: '$3x^2 + 2x - 1 \\div (x+2)$: first term $3x$, then $3x(x+2)=3x^2+6x$, remainder starts with $-4x-1$. Continue division.',
        hint2: '$x^2 - 5x + 4 \\div (x-2)$: first term $x$, then $x(x-2) = x^2-2x$, subtract to get $-3x+4$. Next term $-3$.',
        hint3: '$-x^2+6x \\div (x-1)$: first term $-x$, then $-x(x-1) = -x^2+x$, subtract to get $5x$. Next term $5$.',
        explanation: '1) $3x - 4$ (R $7$). 2) $x - 3$ (R $-2$). 3) $-x + 5$ (R $5$).'
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
          { label: '$f(x) = \\frac{x^2+1}{2x-3}$', options: ['Horizontal at $y=0$', 'Horizontal at $y=1/2$', 'Oblique', 'No asymptote'] },
          { label: '$g(x) = \\frac{5x^3}{x^3+x}$', options: ['Horizontal at $y=0$', 'Horizontal at $y=5$', 'Oblique', 'No asymptote'] },
          { label: '$h(x) = \\frac{x^4+2}{x^2-1}$', options: ['Horizontal at $y=0$', 'Horizontal at $y=1$', 'Oblique', 'No asymptote'] },
          { label: '$k(x) = \\frac{3}{x^2+4}$', options: ['Horizontal at $y=0$', 'Horizontal at $y=3$', 'Oblique', 'No asymptote'] }
        ],
        correctAnswers: ['Oblique', 'Horizontal at $y=5$', 'No asymptote', 'Horizontal at $y=0$'],
        hint1: 'Degree 2 over degree 1: difference is 1, so oblique.',
        hint2: 'Degree 3 over degree 3: equal degrees, horizontal at ratio of leading coefficients.',
        hint3: 'Degree 4 over degree 2: difference is 2, so no oblique (parabolic end behavior).',
        explanation: '$f$: oblique (deg diff = 1). $g$: horizontal $y=5$ (equal degrees). $h$: no asymptote (deg diff = 2). $k$: horizontal $y=0$ (deg 0 < deg 2).'
      }
    },
    {
      id: 'lai3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Oblique Asymptotes & End Behavior** ✅`,
      exercise: {
        questions: [
          {
            question: 'The oblique asymptote of $f(x) = \\frac{2x^2 + 5x - 3}{x + 4}$ is:',
            options: ['$y = 2x - 3$', '$y = 2x + 5$', '$y = 2x + 13$', '$y = 2x - 13$'],
            correctAnswer: 0,
            explanation: 'Long division: $2x^2+5x-3 \\div (x+4)$. First: $2x$, multiply: $2x^2+8x$, subtract: $-3x-3$. Next: $-3$, multiply: $-3x-12$, subtract: $9$. Asymptote: $y = 2x-3$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\left(\\sqrt{4x^2 + x} - 2x\\right)$.',
            options: ['$0$', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '$1$'],
            correctAnswer: 1,
            explanation: 'Conjugate: $\\frac{4x^2+x-4x^2}{\\sqrt{4x^2+x}+2x} = \\frac{x}{\\sqrt{4x^2+x}+2x}$. Divide by $x$: $\\frac{1}{\\sqrt{4+1/x}+2} \\to \\frac{1}{2+2} = \\frac{1}{4}$.'
          }
        ]
      }
    }
  ]
}
