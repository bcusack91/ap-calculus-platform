export const calcabTypesDiscontinuityPart3Data = {
  topicSlug: 'types-of-discontinuity',
  sections: [
    {
      id: 'td3-intro',
      type: 'text' as const,
      content: `# ⚡ Infinite (Essential) Discontinuities

**Part 3 of 4 — Asymptote-style discontinuities**

---

### Topics in This Part

| Section |
|---------|
| What Is an Infinite Discontinuity? |
| 🔑 Spotting Them |
| Why They\'re Not Removable |

> 🔑 **Why this matters:** This is the "vertical asymptote" type from your infinite-limits lesson, viewed through the discontinuity lens.`
    },
    {
      id: 'td3-def',
      type: 'text' as const,
      content: `
## 📐 Definition

> A function has an **infinite discontinuity** (also called *essential* discontinuity) at $x = a$ if at least one one-sided limit at $a$ is $\\pm\\infty$.

The function blows up near $a$ — there\'s a vertical asymptote there.

> 💡 The connection: infinite discontinuity ⇔ vertical asymptote at that $x$-value.
      `
    },
    {
      id: 'td3-spot',
      type: 'text' as const,
      content: `
## 🔑 Spotting Infinite Discontinuities

For a rational function $\\dfrac{p(x)}{q(x)}$:

- $q(a) = 0$ AND $p(a) \\ne 0$ → infinite discontinuity at $a$.
- $q(a) = 0$ AND $p(a) = 0$ → factor and check (could be hole or asymptote).

**Worked example.** $f(x) = \\dfrac{x + 5}{x - 1}$.

- $x = 1$: $q(1) = 0$, $p(1) = 6 \\ne 0$ → infinite discontinuity at $x = 1$.
- One side $\\to +\\infty$, other $\\to -\\infty$.

Other common cases: $\\ln x$ at $x = 0$, $\\tan x$ at $x = \\pi/2 + k\\pi$.
      `
    },
    {
      id: 'td3-notrem',
      type: 'text' as const,
      content: `
## 🚫 Why They\'re Not Removable

For a discontinuity to be removable, the limit must exist as a *finite* number. With an infinite discontinuity, the function values aren\'t bounded near $a$ — no finite value can "fix" the gap. The discontinuity is **essential**.

| Type | Two-sided limit | Removable? |
|------|------------------|------------|
| Removable (hole) | Finite, exists | ✅ Yes |
| Jump | DNE (sides finite, disagree) | ❌ No |
| Infinite | DNE / $\\pm\\infty$ | ❌ No |
      `
    },
    {
      id: 'td3-mc',
      type: 'multiple-choice' as const,
      content: `**Infinite vs. Other** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\dfrac{1}{x - 4}$, the discontinuity at $x = 4$ is:',
            options: ['Removable', 'Jump', 'Infinite', 'No discontinuity'],
            correctAnswer: 2,
            explanation: 'Nonzero / 0 pattern → vertical asymptote → infinite discontinuity.'
          },
          {
            question: 'For $\\tan x$ at $x = \\pi/2$, the discontinuity is:',
            options: ['Removable', 'Jump', 'Infinite (essential)', 'No discontinuity'],
            correctAnswer: 2,
            explanation: '$\\tan$ has a vertical asymptote at $\\pi/2$ — infinite discontinuity.'
          },
          {
            question: 'Can an infinite discontinuity be removed by redefining $f$ at one point?',
            options: ['Yes', 'No — the limit is not a finite number'],
            correctAnswer: 1,
            explanation: 'No single value can patch an unbounded gap.'
          }
        ]
      }
    },
    {
      id: 'td3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Classify** 🔽`,
      exercise: {
        dropdowns: [
          { label: '$f(x) = \\dfrac{x^2 - 1}{x - 1}$ at $x = 1$', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] },
          { label: '$g(x) = \\dfrac{1}{x}$ at $x = 0$', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] },
          { label: '$h(x) = \\ln x$ at $x = 0$', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] },
          { label: '$\\tan x$ at $x = 0$', options: ['Removable', 'Jump', 'Infinite', 'Continuous'] },
        ],
        correctAnswers: ['Removable', 'Infinite', 'Infinite', 'Continuous'],
        hint1: 'Cancellable factor → hole.',
        hint2: 'Nonzero / 0 → asymptote.',
        hint3: 'Log\'s only asymptote.',
        explanation: 'Use the catalog: cancellable $0/0$ → removable; nonzero/0 → infinite; jump if pieces differ; otherwise continuous.'
      }
    }
  ]
}
