export const calcabTypesDiscontinuityPart4Data = {
  topicSlug: 'types-of-discontinuity',
  sections: [
    {
      id: 'td4-intro',
      type: 'text' as const,
      content: `# 🧪 Mixed Practice — Classify & Diagnose

**Part 4 of 4 — Putting it all together**

---

### Topics in This Part

| Section |
|---------|
| 🔑 Classification Flowchart |
| Common AP Setups |
| Worked Examples |

> 🔑 **Why this matters:** AP free-response problems often ask you to identify the *type* of discontinuity and justify with limits.`
    },
    {
      id: 'td4-flow',
      type: 'text' as const,
      content: `
## 🔑 Classification Flowchart

For a discontinuity at $x = a$:

1. **Does the two-sided limit exist (finite)?**
   - Yes → **Removable** (hole). Can patch by setting $f(a) = $ limit.
   - No → continue.
2. **Are both one-sided limits finite (just unequal)?**
   - Yes → **Jump**.
   - No → continue.
3. **Is at least one one-sided limit $\\pm\\infty$?**
   - Yes → **Infinite (essential)**.

> 💡 Three categories cover essentially every case you\'ll see in AP Calc AB.
      `
    },
    {
      id: 'td4-setups',
      type: 'text' as const,
      content: `
## 📋 Common AP Setups

| Setup | Type |
|-------|------|
| $\\dfrac{p(x)}{q(x)}$ where both vanish & factors cancel | Removable |
| $\\dfrac{p(x)}{q(x)}$ where only denominator vanishes | Infinite |
| Piecewise with mismatched pieces at boundary | Jump |
| Piecewise where pieces match at boundary | Continuous (no discontinuity) |
| $\\ln x$ at 0; $\\tan x$ at $\\pi/2 + k\\pi$ | Infinite |
      `
    },
    {
      id: 'td4-worked',
      type: 'text' as const,
      content: `
## ✏️ Worked Example

Classify the discontinuities of
$$f(x) = \\begin{cases} \\dfrac{x^2 - 1}{x - 1}, & x \\ne 1 \\\\ 5, & x = 1 \\end{cases}$$

- $\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} (x + 1) = 2$.
- $f(1) = 5 \\ne 2$.
- Limit exists → **removable** discontinuity at $x = 1$.

(You could "fix" it by redefining $f(1) = 2$.)
      `
    },
    {
      id: 'td4-mc',
      type: 'multiple-choice' as const,
      content: `**Classify** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\dfrac{(x - 2)(x + 3)}{x - 2}$, the discontinuity at $x = 2$ is:',
            options: ['Removable', 'Jump', 'Infinite', 'No discontinuity'],
            correctAnswer: 0,
            explanation: 'After cancellation: $f = x + 3$ for $x \\ne 2$. Limit $= 5$, $f(2)$ undefined → removable.'
          },
          {
            question: 'For $f(x) = \\begin{cases} x + 1, & x < 0 \\\\ x - 1, & x \\ge 0 \\end{cases}$, what is the discontinuity at $x = 0$?',
            options: ['Removable', 'Jump (size 2)', 'Infinite', 'No discontinuity'],
            correctAnswer: 1,
            explanation: 'Left limit: $1$. Right limit: $-1$. Finite but disagree → jump of size 2.'
          }
        ]
      }
    },
    {
      id: 'td4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'A removable discontinuity is characterized by:',
            options: [
              'A vertical asymptote',
              'A finite two-sided limit that doesn\'t equal $f(a)$ (or $f(a)$ undefined)',
              'Two finite, unequal one-sided limits',
              'A function value that\'s undefined everywhere'
            ],
            correctAnswer: 1,
            explanation: 'Removable = limit exists finitely; the value can be patched.'
          },
          {
            question: 'Which type of discontinuity occurs at the asymptotes of $\\tan x$?',
            options: ['Removable', 'Jump', 'Infinite (essential)', 'No discontinuity'],
            correctAnswer: 2,
            explanation: '$\\tan$ shoots to $\\pm\\infty$ at $\\pi/2 + k\\pi$ → infinite discontinuity.'
          }
        ]
      }
    }
  ]
}
