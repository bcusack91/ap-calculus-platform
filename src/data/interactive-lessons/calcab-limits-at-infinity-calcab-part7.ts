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
| $\\deg(p) > \\deg(q)$ | None: $f(x) \\to \\pm\\infty$ |

### Growth Rate Hierarchy (slowest → fastest)
$$\\ln x \\ll x^p \\ll a^x \\quad (p > 0, \\, a > 1)$$

### Key Techniques
1. **Divide by highest power** of $x$ in denominator
2. **Pull $\\sqrt{x^2} = |x|$ out of radicals**, using $|x| = -x$ when $x \\to -\\infty$
3. **Squeeze Theorem** for oscillating functions
4. **Continuity** for composite limits: find the inside limit first
5. **Factor** dominant terms for exponential expressions

### Essential Special Limits
$$\\lim_{u \\to 0}\\frac{\\sin u}{u} = 1 \\qquad \\lim_{u \\to 0}\\frac{1-\\cos u}{u}=0 \\qquad \\lim_{u \\to 0}\\frac{e^u-1}{u}=1$$`
    },
    {
      id: 'lai7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Comprehensive Assessment — Part A** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{5x^4 - 3x^2}{2x^4 + x^3 - 1}$.',
            options: ['$0$', '$\\frac{5}{2}$', '$5$', '$\\infty$'],
            correctAnswer: 1,
            explanation: 'Equal degrees (both 4). Ratio of leading coefficients: $\\frac{5}{2}$. Using only the numerator\'s coefficient gives $5$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to -\\infty} \\frac{x}{\\sqrt{x^2+x+1}}$.',
            options: ['$1$', '$-1$', '$0$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'For $x < 0$: $\\sqrt{x^2+x+1} \\approx |x| = -x$. So $\\frac{x}{-x} = -1$.'
          },
          {
            question: 'The function $f(x) = \\frac{3x^2 + 2}{x - 5}$ has:',
            options: ['A horizontal asymptote at $y = 3$', 'No horizontal asymptote at all', 'A horizontal asymptote at $y = 0$', 'Two horizontal asymptotes, $y = \\pm 3$'],
            correctAnswer: 1,
            explanation: 'The numerator has the higher degree, so $f(x) \\to \\infty$ as $x \\to \\infty$ and $f(x) \\to -\\infty$ as $x \\to -\\infty$: no horizontal asymptote on either side. The value $3$ is the ratio of leading coefficients, which applies only to equal degrees; $y = 0$ applies when the denominator has the higher degree; and a rational function has the same end behavior type on both sides, so it cannot have two. ($f$ does have a vertical asymptote at $x = 5$.)'
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
            options: ['$\\frac{1}{3}$', '$2$', '$-2$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'Divide by $e^x$: $\\frac{1 + 2x^{10}/e^x}{3 - x^5/e^x} \\to \\frac{1+0}{3-0} = \\frac{1}{3}$. Taking the ratio of the polynomial coefficients, $\\frac{2}{-1} = -2$, ignores that the exponentials dominate every power of $x$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{\\sqrt{x^2+8x}}{2x - 1}$.',
            options: ['$1$', '$2$', '$\\frac{1}{2}$', '$4$'],
            correctAnswer: 2,
            explanation: 'Factor $x^2$ out of the radical: $\\sqrt{x^2 + 8x} = x\\sqrt{1 + 8/x}$ for $x > 0$, so the limit is $\\frac{\\sqrt{1 + 0}}{2 - 0} = \\frac{1}{2}$. The value $2$ flips the coefficients, $1$ ignores the $2$ in the denominator, and $4$ uses the $8x$ term, which becomes negligible.'
          },
          {
            question: 'Which statement is FALSE about horizontal asymptotes?',
            options: [
              'A function can have at most two horizontal asymptotes',
              'A function can cross its horizontal asymptote',
              'A function can have an HA on only one side',
              'A polynomial of degree $\\geq 1$ has a horizontal asymptote'
            ],
            correctAnswer: 3,
            explanation: 'Polynomials of degree $\\geq 1$ have no horizontal asymptotes — they go to $\\pm\\infty$. All other statements are true: a function can have one HA on each side, can cross an HA, and can have an HA on just one side (for example, $e^x$ approaches $y = 0$ only as $x \\to -\\infty$).'
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

**2)** $\\lim_{x \\to \\infty} \\frac{5x + 3\\cos x}{x + 2} = $

**3)** $\\lim_{x \\to \\infty} \\frac{4}{\\pi}\\arctan x = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '5', '2'],
        hint1: '$\\sqrt{16x^2+x} \\approx 4x$. So $\\frac{4x}{2x+1} \\to 2$.',
        hint2: 'Divide by $x$: $\\frac{5 + 3\\cos x / x}{1 + 2/x}$, and $\\frac{3\\cos x}{x} \\to 0$ by the Squeeze Theorem.',
        hint3: '$\\arctan x \\to \\frac{\\pi}{2}$ as $x \\to \\infty$.',
        explanation: '1) $2$. 2) $5$ (the bounded $\\cos x$ term is negligible). 3) $\\frac{4}{\\pi} \\cdot \\frac{\\pi}{2} = 2$.'
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
              '$f(x) = \\frac{2x^2 - 3x}{x^2+1}$',
              '$f(x) = \\frac{5x}{2\\sqrt{x^2+1}} - \\frac{1}{2}$',
              '$f(x) = \\frac{2x}{\\sqrt{x^2+1}} - \\frac{3x}{\\sqrt{x^2+4}}$',
              'No function can have two different horizontal asymptotes'
            ],
            correctAnswer: 1,
            explanation: 'Use $\\sqrt{x^2+1} \\approx |x|$. As $x \\to \\infty$, $\\frac{5x}{2\\sqrt{x^2+1}} \\to \\frac{5}{2}$, so $f(x) \\to \\frac{5}{2} - \\frac{1}{2} = 2$. As $x \\to -\\infty$, $\\sqrt{x^2+1} \\approx -x$, so $\\frac{5x}{2\\sqrt{x^2+1}} \\to -\\frac{5}{2}$ and $f(x) \\to -\\frac{5}{2} - \\frac{1}{2} = -3$. A rational function with a horizontal asymptote approaches the same value in both directions, so $\\frac{2x^2-3x}{x^2+1}$ approaches $2$ both ways. The other square-root function approaches $2 - 3 = -1$ as $x \\to \\infty$ and $-2 + 3 = 1$ as $x \\to -\\infty$, the wrong pair. Functions with two different horizontal asymptotes do exist, as this example shows.'
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
