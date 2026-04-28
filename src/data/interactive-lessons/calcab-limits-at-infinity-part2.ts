export const calcabLimitsAtInfinityPart2Data = {
  topicSlug: 'limits-at-infinity',
  sections: [
    {
      id: 'lai2-intro',
      type: 'text' as const,
      content: `# 📊 Rational Functions at Infinity

**Part 2 of 4 — Compare degrees**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The Three-Case Rule |
| Why It Works (Divide-By-Highest-Power) |
| Examples |

> 🔑 **Why this matters:** Almost every AP "limit at infinity" problem on a rational function is solved by the degree-comparison rule.`
    },
    {
      id: 'lai2-rule',
      type: 'text' as const,
      content: `
## 🔑 The Three-Case Rule

For $\\lim_{x \\to \\pm\\infty} \\dfrac{p(x)}{q(x)}$ with degrees $\\deg p = m$, $\\deg q = n$:

| Case | Result |
|------|--------|
| $m < n$ (bottom heavier) | Limit $= 0$ |
| $m = n$ (equal degrees) | Limit $= \\dfrac{\\text{leading coef of } p}{\\text{leading coef of } q}$ |
| $m > n$ (top heavier) | Limit $= \\pm\\infty$ (sign depends on leading coefficients and direction) — DNE as a finite limit |

> 💡 Memorize this. It\'s the single most useful rule in this section.
      `
    },
    {
      id: 'lai2-why',
      type: 'text' as const,
      content: `
## 🛠️ Why It Works — Divide By Highest Power

Take $\\lim_{x \\to \\infty} \\dfrac{3x^2 + 5x}{2x^2 - 7}$. Divide top and bottom by $x^2$:

$$\\dfrac{3 + 5/x}{2 - 7/x^2}$$

As $x \\to \\infty$, $5/x \\to 0$ and $7/x^2 \\to 0$:

$$\\dfrac{3 + 0}{2 - 0} = \\dfrac{3}{2}$$

The non-leading terms become negligible, leaving just the ratio of leading coefficients.
      `
    },
    {
      id: 'lai2-examples',
      type: 'text' as const,
      content: `
## 📝 Examples

| Limit | Case | Answer |
|-------|------|--------|
| $\\lim_{x \\to \\infty} \\dfrac{4x + 1}{x^2 + 3}$ | $m < n$ | $0$ |
| $\\lim_{x \\to \\infty} \\dfrac{6x^3 - 2x}{3x^3 + 5}$ | $m = n$ | $6/3 = 2$ |
| $\\lim_{x \\to \\infty} \\dfrac{x^2}{x + 1}$ | $m > n$ | $+\\infty$ |
| $\\lim_{x \\to -\\infty} \\dfrac{x^3 + 1}{x^2}$ | $m > n$ | $-\\infty$ |
      `
    },
    {
      id: 'lai2-mc',
      type: 'multiple-choice' as const,
      content: `**Apply the Three-Case Rule** 🎯`,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to \\infty} \\dfrac{2x + 7}{5x - 1} = ?$',
            options: ['$0$', '$2/5$', '$5/2$', '$\\infty$'],
            correctAnswer: 1,
            explanation: 'Equal degrees → ratio of leading coefficients: $2/5$.'
          },
          {
            question: '$\\lim_{x \\to \\infty} \\dfrac{x^2 + 1}{x^4 + 5x} = ?$',
            options: ['$0$', '$1$', '$\\infty$', 'DNE'],
            correctAnswer: 0,
            explanation: 'Bottom-heavier → 0.'
          },
          {
            question: '$\\lim_{x \\to \\infty} \\dfrac{x^3 + 7}{2x^2 + 1} = ?$',
            options: ['$0$', '$1/2$', '$+\\infty$', '$-\\infty$'],
            correctAnswer: 2,
            explanation: 'Top-heavier and leading coefficients are positive → $+\\infty$.'
          }
        ]
      }
    },
    {
      id: 'lai2-input',
      type: 'input-boxes' as const,
      content: `**Compute** 🧮

**1)** $\\lim_{x \\to \\infty} \\dfrac{8x^3 - 5}{4x^3 + x} = ?$

**2)** $\\lim_{x \\to \\infty} \\dfrac{3x + 1}{x^2 - 7} = ?$

**3)** $\\lim_{x \\to -\\infty} \\dfrac{6x^2 - 11}{2x^2 + 5} = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '0', '3'],
        hint1: 'Equal degrees, leading coefficients $8$ and $4$ → $8/4$.',
        hint2: 'Top degree 1, bottom degree 2 → 0.',
        hint3: 'Equal degrees, ratio $6/2 = 3$. Direction $\\pm\\infty$ doesn\'t matter for equal-degree case.',
        explanation: 'Equal-degree limits at $\\pm\\infty$ both equal the leading-coefficient ratio.'
      }
    }
  ]
}
