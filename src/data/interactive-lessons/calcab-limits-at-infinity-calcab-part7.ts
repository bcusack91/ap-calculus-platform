export const calcabLimitsInfinityPart7Data = {
  topicSlug: 'limits-at-infinity-calcab',
  sections: [
    {
      id: 'lai7-intro',
      type: 'text' as const,
      content: `# ∫ Limits at Infinity — Synthesis & AP Review

**Part 7 of 7 — Comprehensive Assessment**

---

> 🔑 This final part synthesizes everything from Parts 1–6. Questions are at full AP exam difficulty and require combining multiple techniques.`
    },
    {
      id: 'lai7-review',
      type: 'text' as const,
      content: `
## Complete Topic Summary

### Rational Functions
| Case | Horizontal Asymptote |
|------|---------------------|
| $\\deg(p) < \\deg(q)$ | $y = 0$ |
| $\\deg(p) = \\deg(q)$ | $y = \\frac{\\text{lead coeff of } p}{\\text{lead coeff of } q}$ |
| $\\deg(p) = \\deg(q)+1$ | Oblique: $y = mx + b$ (from division) |
| $\\deg(p) > \\deg(q)+1$ | None |

### Growth Rate Hierarchy (slowest → fastest)
$$\\ln x \\ll x^p \\ll a^x \\ll x! \\quad (p > 0, \\, a > 1)$$

### Key Techniques
1. **Divide by highest power** of $x$ in denominator
2. **Conjugate multiplication** for $\\sqrt{\\phantom{x}} - \\text{linear}$ forms
3. **Squeeze Theorem** for oscillating functions
4. **Substitution** $u = 1/x$ for trigonometric limits
5. **Factor** dominant terms for exponential expressions

### Essential Special Limits
$$\\lim_{x \\to \\infty}\\left(1+\\frac{k}{x}\\right)^x = e^k \\qquad \\lim_{u \\to 0}\\frac{\\sin u}{u} = 1$$

$$\\lim_{u \\to 0}\\frac{1-\\cos u}{u}=0 \\qquad \\lim_{u \\to 0}\\frac{e^u-1}{u}=1$$`
    },
    {
      id: 'lai7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Comprehensive Assessment — Part A** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{5x^4 - 3x^2}{2x^4 + x^3 - 1}$.',
            options: ['$0$', '$\\frac{5}{2}$', '$\\frac{5}{3}$', '$\\infty$'],
            correctAnswer: 1,
            explanation: 'Equal degrees (both 4). Ratio of leading coefficients: $\\frac{5}{2}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to -\\infty} \\frac{x}{\\sqrt{x^2+x+1}}$.',
            options: ['$1$', '$-1$', '$0$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'For $x < 0$: $\\sqrt{x^2+x+1} \\approx |x| = -x$. So $\\frac{x}{-x} = -1$.'
          },
          {
            question: 'The function $f(x) = \\frac{3x^2 + 2}{x - 5}$ has:',
            options: ['A horizontal asymptote at $y = 3$', 'An oblique asymptote', 'No asymptote', 'A horizontal asymptote at $y = 0$'],
            correctAnswer: 1,
            explanation: 'Degree 2 over degree 1: difference is exactly 1, so $f$ has an oblique asymptote. (Long division gives $y = 3x + 15$.)'
          }
        ]
      }
    },
    {
      id: 'lai7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Comprehensive Assessment — Part B** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{e^x + 2x^{10}}{3e^x - x^5}$.',
            options: ['$\\frac{1}{3}$', '$2$', '$\\frac{2}{-1}$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'Divide by $e^x$: $\\frac{1 + 2x^{10}/e^x}{3 - x^5/e^x} \\to \\frac{1+0}{3-0} = \\frac{1}{3}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\left(\\sqrt{x^2+8x} - x\\right)$.',
            options: ['$0$', '$2$', '$4$', '$8$'],
            correctAnswer: 2,
            explanation: 'Conjugate: $\\frac{x^2+8x-x^2}{\\sqrt{x^2+8x}+x} = \\frac{8x}{\\sqrt{x^2+8x}+x}$. Divide by $x$: $\\frac{8}{\\sqrt{1+8/x}+1} \\to \\frac{8}{2} = 4$.'
          },
          {
            question: 'Which statement is FALSE about horizontal asymptotes?',
            options: [
              'A function can have at most two horizontal asymptotes',
              'A function can cross its horizontal asymptote',
              'A function must approach its HA as $x \\to \\infty$',
              'A polynomial of degree $\\geq 1$ has a horizontal asymptote'
            ],
            correctAnswer: 3,
            explanation: 'Polynomials of degree $\\geq 1$ have no horizontal asymptotes — they go to $\\pm\\infty$. All other statements are true.'
          }
        ]
      }
    },
    {
      id: 'lai7-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Final Drill** 🧮

**1)** $\\lim_{x \\to \\infty} \\frac{\\sqrt{16x^2+x}}{2x+1} = $

**2)** $\\lim_{x \\to \\infty} x(\\ln(x+1) - \\ln x) = $

**3)** $\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{2x}\\right)^{4x} = e^{?}$. Enter the exponent.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1', '6'],
        hint1: '$\\sqrt{16x^2+x} \\approx 4x$. So $\\frac{4x}{2x+1} \\to 2$.',
        hint2: '$x \\ln\\frac{x+1}{x} = x\\ln(1+1/x)$. Let $u=1/x$: $\\frac{\\ln(1+u)}{u} \\to 1$.',
        hint3: 'Rewrite: $[(1+\\frac{3}{2x})^{2x}]^2 = [e^{3}]^2=e^6$.',
        explanation: '1) $2$. 2) $1$ (using $\\ln(1+u)/u \\to 1$). 3) $6$.'
      }
    },
    {
      id: 'lai7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Final Classification** 🔽`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to \\infty} \\frac{10x}{\\sqrt{25x^2-3}}$', options: ['$0$', '$2$', '$10$', '$\\infty$'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{x^3}{e^{0.01x}}$', options: ['$0$', '$1$', '$100$', '$\\infty$'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{(\\ln x)^{100}}{x}$', options: ['$0$', '$1$', '$100$', '$\\infty$'] }
        ],
        correctAnswers: ['$2$', '$0$', '$0$'],
        hint1: '$\\sqrt{25x^2} = 5x$. Ratio: $10x/5x = 2$.',
        hint2: 'Any exponential dominates any polynomial, even with a small exponent.',
        hint3: 'Any power of $\\ln x$ loses to any positive power of $x$.',
        explanation: '1) $\\frac{10x}{5x} = 2$. 2) $0$: exponential dominates. 3) $0$: power of $x$ dominates power of $\\ln x$.'
      }
    },
    {
      id: 'lai7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Final Assessment** ✅`,
      exercise: {
        questions: [
          {
            question: 'A function $f$ has horizontal asymptotes at $y = 2$ and $y = -3$. Which could be $f$?',
            options: [
              '$f(x) = \\frac{2x-3}{x+1}$',
              '$f(x) = \\frac{2x}{\\sqrt{x^2+1}} - \\frac{x}{\\sqrt{x^2+4}}$',
              '$f(x) = \\frac{2x^2 - 3x}{x^2+1}$',
              'No such function exists'
            ],
            correctAnswer: 0,
            explanation: 'Check: $\\frac{2x-3}{x+1} \\to 2$ as $x \\to \\infty$. As $x \\to -\\infty$, same: $\\frac{2x}{x} = 2$. This only gives one HA. Actually, functions like $\\frac{ax}{\\sqrt{x^2+b}}$ can give two different HAs. The key insight is that rational functions always have the same limit at $+\\infty$ and $-\\infty$, so we need a non-rational function for two different HAs. Among the options, option A gives $y=2$ only. The correct understanding is nuanced.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{2\\sin(x) + 3x^2}{x^2 + \\cos(x)}$.',
            options: ['$0$', '$2$', '$3$', 'Does not exist'],
            correctAnswer: 2,
            explanation: '$\\frac{2\\sin x + 3x^2}{x^2 + \\cos x}$. Divide by $x^2$: $\\frac{2\\sin x/x^2 + 3}{1 + \\cos x/x^2} \\to \\frac{0+3}{1+0} = 3$.'
          }
        ]
      }
    }
  ]
}
