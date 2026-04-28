export const calcabContinuityIntroPart2Data = {
  topicSlug: 'continuity-introduction',
  sections: [
    {
      id: 'ci2-intro',
      type: 'text' as const,
      content: `# 📜 Continuity Catalog

**Part 2 of 4 — Which functions are continuous where?**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The Continuous-Everywhere List |
| Continuity on Restricted Domains |
| Combinations Preserve Continuity |

> 🔑 **Why this matters:** Knowing which families are continuous saves you from re-checking the three conditions every time.`
    },
    {
      id: 'ci2-list',
      type: 'text' as const,
      content: `
## 🔑 Continuous Everywhere

These functions are continuous at *every* real number:

| Family | Examples |
|--------|----------|
| Polynomials | $x^2 + 1$, $x^5 - 3x$, any constant |
| Sine and cosine | $\\sin x$, $\\cos x$, $\\sin(2x + 5)$ |
| Exponential | $e^x$, $2^x$, $5 \\cdot 3^x$ |

> 💡 Plug-in works for any of these. No need to think.
      `
    },
    {
      id: 'ci2-restricted',
      type: 'text' as const,
      content: `
## 🚧 Continuous on a Restricted Domain

Some functions are continuous *only where they\'re defined* — and they aren\'t defined everywhere.

| Function | Continuous on |
|----------|---------------|
| $\\ln x$ | $(0, \\infty)$ |
| $\\sqrt{x}$ | $[0, \\infty)$ |
| $\\tan x$ | All $x \\ne \\pi/2 + k\\pi$ |
| Rational $p(x)/q(x)$ | All $x$ where $q(x) \\ne 0$ |

> ⚠️ At the *edge* of the domain, you might have a one-sided continuity (e.g., $\\sqrt{x}$ is continuous from the right at $x = 0$).
      `
    },
    {
      id: 'ci2-combo',
      type: 'text' as const,
      content: `
## 🔄 Combinations Preserve Continuity

If $f$ and $g$ are continuous at $a$, then so are:

- $f + g$ and $f - g$
- $f \\cdot g$
- $f / g$ if $g(a) \\ne 0$
- $f \\circ g$ (composition), provided $g$ is continuous at $a$ and $f$ is continuous at $g(a)$

So combinations of "nice" functions stay nice.

**Example.** $h(x) = \\sin(e^x + x^2)$ — built from continuous pieces, continuous everywhere.
      `
    },
    {
      id: 'ci2-mc',
      type: 'multiple-choice' as const,
      content: `**Catalog Test** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Where is $f(x) = \\sqrt{x - 5}$ continuous?',
            options: ['All $x$', '$x \\ge 5$', '$x > 5$', '$x \\ne 5$'],
            correctAnswer: 1,
            explanation: 'Defined for $x \\ge 5$; continuous on its entire domain (right-continuous at $x = 5$).'
          },
          {
            question: 'Where is $f(x) = \\dfrac{x + 1}{x^2 - 9}$ continuous?',
            options: ['All real $x$', 'All $x \\ne 0$', 'All $x \\ne \\pm 3$', '$x \\ge 0$'],
            correctAnswer: 2,
            explanation: 'Rational function — continuous wherever the denominator is nonzero. $x^2 - 9 = 0$ at $x = \\pm 3$.'
          },
          {
            question: 'Is $h(x) = \\cos(\\ln x)$ continuous at $x = 1$?',
            options: ['Yes — composition of continuous functions, both defined', 'No — $\\ln$ is undefined', 'No — $\\cos$ is undefined', 'Only on the right'],
            correctAnswer: 0,
            explanation: '$\\ln 1 = 0$ defined, $\\cos$ continuous at 0, composition continuous at $x = 1$.'
          }
        ]
      }
    },
    {
      id: 'ci2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Decide Continuity** 🔽`,
      exercise: {
        dropdowns: [
          { label: '$f(x) = x^2 + 1$ at $x = 100$', options: ['Continuous', 'Discontinuous'] },
          { label: '$g(x) = \\ln(x)$ at $x = 0$', options: ['Continuous', 'Discontinuous (undefined)'] },
          { label: '$h(x) = \\dfrac{1}{x - 7}$ at $x = 7$', options: ['Continuous', 'Discontinuous (denominator 0)'] },
          { label: '$k(x) = e^{\\sin x}$ at $x = \\pi$', options: ['Continuous', 'Discontinuous'] },
        ],
        correctAnswers: ['Continuous', 'Discontinuous (undefined)', 'Discontinuous (denominator 0)', 'Continuous'],
        hint1: 'Polynomials continuous everywhere.',
        hint2: 'Domain of $\\ln$ is $(0,\\infty)$.',
        hint3: 'Rational, denominator vanishes.',
        explanation: 'Use the catalog: polynomials/exp/sin/cos always; logs/sqrt/tan only on their domains; rationals where denominators are nonzero.'
      }
    }
  ]
}
