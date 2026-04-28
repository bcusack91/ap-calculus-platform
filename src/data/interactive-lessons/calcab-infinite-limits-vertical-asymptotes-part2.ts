export const calcabInfiniteLimitsPart2Data = {
  topicSlug: 'infinite-limits-vertical-asymptotes',
  sections: [
    {
      id: 'ilva2-intro',
      type: 'text' as const,
      content: `# 🔍 Diagnosing Infinite Limits

**Part 2 of 4 — The "nonzero / zero" pattern**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The Nonzero-Over-Zero Test |
| Sign Analysis on Each Side |
| Worked Examples |

> 🔑 **Why this matters:** Recognizing the $c/0$ pattern (nonzero $c$) tells you immediately you have a vertical asymptote — and a sign analysis tells you which infinity.`
    },
    {
      id: 'ilva2-test',
      type: 'text' as const,
      content: `
## 🔑 The Nonzero-Over-Zero Test

For $\\lim_{x \\to a} \\dfrac{p(x)}{q(x)}$:

| Direct substitution gives | Conclusion |
|---------------------------|------------|
| Number $L$ | Limit is $L$ ✅ |
| $0/0$ | Indeterminate — factor/rationalize |
| Nonzero / 0 | **Vertical asymptote at $x = a$** — limit is $\\pm\\infty$ or DNE |

The key is: **if the denominator is approaching 0 but the numerator is approaching a nonzero number**, the magnitude blows up.

> 💡 The next question is just *which sign* of infinity each side gives.
      `
    },
    {
      id: 'ilva2-sign',
      type: 'text' as const,
      content: `
## ➕➖ Sign Analysis

Once you know "nonzero / zero," determine the sign of the result on each side of $a$:

1. **Numerator sign:** plug $a$ into $p(x)$ — get the sign (positive or negative).
2. **Denominator sign as $x \\to a^+$:** is $q(x)$ slightly positive or slightly negative?
3. **Denominator sign as $x \\to a^-$:** same question.
4. **Combine:** like signs → $+\\infty$, opposite signs → $-\\infty$.

**Worked example.** $\\lim_{x \\to 2^+} \\dfrac{1}{x - 2}$.

- Numerator: $1 > 0$.
- For $x$ slightly bigger than 2: $x - 2$ is small **positive**.
- $\\dfrac{+}{+} = +$. So $\\to +\\infty$.

For $\\lim_{x \\to 2^-} \\dfrac{1}{x - 2}$: $x - 2$ slightly **negative**, so $\\dfrac{+}{-} = -$, $\\to -\\infty$.

Sides disagree → two-sided limit DNE.
      `
    },
    {
      id: 'ilva2-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

| Limit | Numerator at $a$ | Denominator on each side | Result |
|-------|-------------------|--------------------------|--------|
| $\\lim_{x \\to 3^+} \\dfrac{x}{x - 3}$ | $+3$ | small $+$ | $+\\infty$ |
| $\\lim_{x \\to 3^-} \\dfrac{x}{x - 3}$ | $+3$ | small $-$ | $-\\infty$ |
| $\\lim_{x \\to 0^+} \\dfrac{-1}{x}$ | $-1$ | small $+$ | $-\\infty$ |
| $\\lim_{x \\to 0^-} \\dfrac{-1}{x}$ | $-1$ | small $-$ | $+\\infty$ |
| $\\lim_{x \\to 1} \\dfrac{1}{(x-1)^2}$ | $+1$ | small $+$ on both sides (squared) | $+\\infty$ on both sides; two-sided $= +\\infty$ |
      `
    },
    {
      id: 'ilva2-mc',
      type: 'multiple-choice' as const,
      content: `**Diagnose** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Compute $\\lim_{x \\to 4^+} \\dfrac{x + 1}{x - 4}$.',
            options: ['$0$', '$5$', '$+\\infty$', '$-\\infty$'],
            correctAnswer: 2,
            explanation: 'Numerator $\\to 5 > 0$, denominator slightly positive. $+/+ = +\\infty$.'
          },
          {
            question: 'Compute $\\lim_{x \\to 4^-} \\dfrac{x + 1}{x - 4}$.',
            options: ['$0$', '$5$', '$+\\infty$', '$-\\infty$'],
            correctAnswer: 3,
            explanation: 'Numerator still $\\to 5 > 0$, but denominator slightly negative. $+/- = -\\infty$.'
          },
          {
            question: 'For $f(x) = \\dfrac{1}{(x-2)^2}$, the two-sided limit at $x = 2$ is:',
            options: ['$-\\infty$', '$+\\infty$', 'DNE (sides disagree)', '$0$'],
            correctAnswer: 1,
            explanation: 'Squared denominator is positive on both sides, so both sides $\\to +\\infty$. Two-sided limit equals $+\\infty$.'
          }
        ]
      }
    },
    {
      id: 'ilva2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Sign Analysis** 🔽`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 0^+} \\dfrac{1}{x}$', options: ['$+\\infty$', '$-\\infty$', '$0$', 'DNE'] },
          { label: '$\\lim_{x \\to 0^-} \\dfrac{1}{x}$', options: ['$+\\infty$', '$-\\infty$', '$0$', 'DNE'] },
          { label: '$\\lim_{x \\to 0} \\dfrac{1}{x}$', options: ['$+\\infty$', '$-\\infty$', '$0$', 'DNE — sides disagree'] },
          { label: '$\\lim_{x \\to 0} \\dfrac{1}{x^2}$', options: ['$+\\infty$', '$-\\infty$', '$0$', 'DNE'] },
        ],
        correctAnswers: ['$+\\infty$', '$-\\infty$', 'DNE — sides disagree', '$+\\infty$'],
        hint1: 'Right side: $1/(\\text{small +}) = $ large +.',
        hint2: 'Left side: $1/(\\text{small -}) = $ large -.',
        hint3: '$1/x^2$: denominator squared, always positive.',
        explanation: 'Sign analysis on each side dictates whether you get $+\\infty$, $-\\infty$, or DNE.'
      }
    }
  ]
}
