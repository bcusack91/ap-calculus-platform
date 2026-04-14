export const calcbcReviewPart5Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rc5-intro',
      type: 'text' as const,
      content: `# Integration Techniques Review

**Part 5 of 7 — Choosing the Right Method**

### Integration Decision Flowchart

| See this... | Try this... |
|-------------|------------|
| Product of unlike functions ($xe^x$, $x\\ln x$) | **Integration by parts** |
| Rational function $P(x)/Q(x)$ | **Partial fractions** |
| $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, $\\sqrt{x^2 - a^2}$ | **Trig substitution** |
| Powers of $\\sin x$, $\\cos x$ | **Trig identities** (even: half-angle; odd: save one) |
| Composition $f(g(x))g'(x)$ | **u-substitution** |
| $1/(x^2 + a^2)$, $1/\\sqrt{a^2 - x^2}$ | **Inverse trig** ($\\arctan$, $\\arcsin$) |
| Infinite bounds or vertical asymptote | **Improper integral** (limit definition) |

> **Key Insight:** Most BC integrals require recognizing which technique to use. The computation itself is usually straightforward.`
    },
    {
      id: 'rc5-ibp',
      type: 'text' as const,
      content: `### Quick Reference: Integration by Parts

$$\\int u\\,dv = uv - \\int v\\,du$$

**LIATE rule** for choosing $u$: **L**og, **I**nverse trig, **A**lgebraic, **T**rig, **E**xponential

**Tabular method** for repeated parts (e.g., $\\int x^3 e^x\\,dx$):

| $u$ derivatives | $dv$ integrals | Sign |
|-----------------|----------------|------|
| $x^3$ | $e^x$ | $+$ |
| $3x^2$ | $e^x$ | $-$ |
| $6x$ | $e^x$ | $+$ |
| $6$ | $e^x$ | $-$ |
| $0$ | $e^x$ | $+$ |

$$\\int x^3 e^x\\,dx = x^3 e^x - 3x^2 e^x + 6xe^x - 6e^x + C$$`
    },
    {
      id: 'rc5-mc',
      type: 'multiple-choice' as const,
      content: '**Method Selection**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x+3}{x^2 + x - 2}\\,dx$ requires:',
            options: ['Partial fractions: $\\frac{A}{x-1} + \\frac{B}{x+2}$', 'u-substitution with $u = x^2 + x - 2$', 'Integration by parts', 'Trig substitution'],
            correctAnswer: 0,
            explanation: '$x^2 + x - 2 = (x-1)(x+2)$. Partial fractions: $\\frac{x+3}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$.'
          },
          {
            question: '$\\int x^2 \\sin x\\,dx$ requires:',
            options: ['Integration by parts (twice)', 'u-substitution', 'Partial fractions', 'Trig identity'],
            correctAnswer: 0,
            explanation: 'Product of algebraic and trig. By LIATE, $u = x^2$, $dv = \\sin x\\,dx$. Apply parts twice (or use tabular method).'
          },
          {
            question: '$\\int \\frac{dx}{\\sqrt{9 - x^2}}$ is:',
            options: ['$\\arcsin(x/3) + C$', '$\\arctan(x/3) + C$', '$\\ln|\\sqrt{9-x^2}| + C$', '$-\\sqrt{9-x^2} + C$'],
            correctAnswer: 0,
            explanation: '$\\int \\frac{dx}{\\sqrt{a^2-x^2}} = \\arcsin(x/a) + C$. With $a = 3$: $\\arcsin(x/3) + C$.'
          }
        ]
      }
    },
    {
      id: 'rc5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Improper Integrals Review**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_1^\\infty \\frac{dx}{x^2}$ converges or diverges?',
            options: ['Converges to $1$', 'Diverges', 'Converges to $\\infty$', 'Cannot be determined'],
            correctAnswers: ['Converges to $1$'],
            hints: ['$p$-integral with $p = 2 > 1$.'],
            explanation: '$\\lim_{b\\to\\infty}[-1/x]_1^b = \\lim(-1/b + 1) = 1$. Converges.'
          },
          {
            label: '$\\int_1^\\infty \\frac{dx}{\\sqrt{x}}$ converges or diverges?',
            options: ['Diverges', 'Converges to $2$', 'Converges to $1$', 'Cannot be determined'],
            correctAnswers: ['Diverges'],
            hints: ['$p$-integral with $p = 1/2 < 1$.'],
            explanation: '$\\int x^{-1/2}\\,dx = 2\\sqrt{x}$. $\\lim_{b\\to\\infty}[2\\sqrt{x}]_1^b = \\infty$. Diverges ($p = 1/2 \\leq 1$).'
          }
        ]
      }
    },
    {
      id: 'rc5-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'Evaluate: $\\int_0^1 x e^x\\,dx$ (give exact answer).',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['By parts: $u = x$, $dv = e^x dx$. $[xe^x - e^x]_0^1$.'],
        explanation: '$[xe^x - e^x]_0^1 = (e - e) - (0 - 1) = 0 + 1 = 1$.'
      }
    },
    {
      id: 'rc5-summary',
      type: 'text' as const,
      content: `### Integration Checklist

- ✓ u-substitution (most common)
- ✓ Integration by parts (products of unlike functions)
- ✓ Partial fractions (rational functions)
- ✓ Inverse trig ($\\arcsin$, $\\arctan$ patterns)
- ✓ Improper integrals (limits for $\\infty$ or discontinuities)
- ✓ Know when series integration is needed (no antiderivative exists)

**Next: Part 6 — Mixed-Topic Workshop**`
    }
  ]
};
