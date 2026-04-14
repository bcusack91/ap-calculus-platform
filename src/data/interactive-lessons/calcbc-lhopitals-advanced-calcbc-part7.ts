export const calcbcLHopPart7Data = {
  topicSlug: 'lhopitals-advanced-calcbc',
  sections: [
    {
      id: 'lh7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review — L'Hôpital's Rule

**Part 7 of 7 — Final Assessment**

### Master Reference

| Form | Strategy |
|------|----------|
| $0/0$ or $\\infty/\\infty$ | L'Hôpital directly |
| $0 \\cdot \\infty$ | Rewrite as quotient |
| $\\infty - \\infty$ | Combine into single fraction |
| $1^\\infty$, $0^0$, $\\infty^0$ | Take $\\ln$, then L'Hôpital |

### Checklist Before Applying

1. ✓ Verify indeterminate form
2. ✓ Differentiate numerator and denominator SEPARATELY
3. ✓ Check if resulting limit exists
4. ✓ Consider if algebra or Taylor is faster

$$\\boxed{\\lim \\frac{f}{g} = \\lim \\frac{f'}{g'} \\quad \\text{when } \\frac{f}{g} \\to \\frac{0}{0} \\text{ or } \\frac{\\infty}{\\infty}}$$`
    },
    {
      id: 'lh7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Set A**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0} \\frac{\\sin(5x)}{\\tan(3x)}$',
            options: ['$5/3$', '$3/5$', '$1$', '$15$'],
            correctAnswer: 0,
            explanation: '$0/0$. L\'H: $\\lim \\frac{5\\cos(5x)}{3\\sec^2(3x)} = 5/3$.'
          },
          {
            question: '$\\lim_{x \\to \\infty} \\frac{(\\ln x)^3}{x}$',
            options: ['$0$ (logarithm always loses to polynomial)', '$\\infty$', '$1$', '$3$'],
            correctAnswer: 0,
            explanation: 'Growth hierarchy: $(\\ln x)^3 \\ll x$. (L\'H: $\\frac{3(\\ln x)^2/x}{1} = \\frac{3(\\ln x)^2}{x}$, repeat...eventually 0.)'
          },
          {
            question: '$\\lim_{x \\to 0} \\left(\\frac{1}{\\sin x} - \\frac{1}{x}\\right)$',
            options: ['$0$ ($\\infty - \\infty$; combine: $\\frac{x - \\sin x}{x\\sin x} \\to 0$)', '$\\infty$', '$1$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\frac{x - \\sin x}{x\\sin x} = \\frac{0}{0}$. L\'H: $\\frac{1 - \\cos x}{\\sin x + x\\cos x} \\to 0/0$. L\'H: $\\frac{\\sin x}{2\\cos x - x\\sin x} = 0/2 = 0$.'
          }
        ]
      }
    },
    {
      id: 'lh7-mc2',
      type: 'multiple-choice' as const,
      content: '**Review Set B**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{n \\to \\infty} n^{1/n}$ (treating $n$ as continuous):',
            options: ['$1$ ($\\infty^0$; $\\ln y = \\ln n/n \\to 0$, so $y \\to e^0 = 1$)', '$e$', '$0$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$\\ln y = \\ln n / n$. L\'H: $1/n / 1 = 1/n \\to 0$. So $y \\to e^0 = 1$.'
          },
          {
            question: 'Which limit does NOT require L\'Hôpital?',
            options: ['$\\lim_{x \\to 2} \\frac{x+3}{x-1} = 5$ (not indeterminate)', '$\\lim_{x \\to 0} \\frac{\\sin x}{x}$', '$\\lim_{x \\to \\infty} \\frac{e^x}{x^2}$', '$\\lim_{x \\to 0} \\frac{e^x - 1}{x}$'],
            correctAnswer: 0,
            explanation: '$(2+3)/(2-1) = 5$. Direct substitution works — no indeterminate form.'
          }
        ]
      }
    },
    {
      id: 'lh7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify and Solve**',
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to 0^+} x^{x^2}$. The form is:',
            options: ['$0^0$ (take $\\ln$)', '$0$', '$1^\\infty$', 'Not indeterminate'],
            correctAnswers: ['$0^0$ (take $\\ln$)'],
            hints: ['Base $\\to 0^+$, exponent $\\to 0$.'],
            explanation: '$0^0$ form.'
          },
          {
            label: '$\\ln y = x^2 \\ln x$. This equals $\\frac{\\ln x}{1/x^2} = \\frac{-\\infty}{\\infty}$. L\'H: $\\frac{1/x}{-2/x^3} = -x^2/2 \\to$',
            options: ['$0$ (so $y \\to e^0 = 1$)', '$-\\infty$ (so $y \\to 0$)', '$1$ (so $y \\to e$)', '$\\infty$'],
            correctAnswers: ['$0$ (so $y \\to e^0 = 1$)'],
            hints: ['$-x^2/2 \\to 0$ as $x \\to 0^+$.'],
            explanation: '$\\ln y \\to 0$, so $y \\to 1$.'
          }
        ]
      }
    },
    {
      id: 'lh7-input',
      type: 'input-box' as const,
      content: '**Final Challenge**',
      exercise: {
        question: '$\\lim_{x \\to 0} \\frac{\\arcsin x}{x}$. Enter the value.',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['$0/0$. L\'H: $\\lim \\frac{1/\\sqrt{1-x^2}}{1} = 1/1 = 1$.'],
        explanation: '$0/0$. L\'H: $\\frac{1/\\sqrt{1-0}}{1} = 1$.'
      }
    },
    {
      id: 'lh7-summary',
      type: 'text' as const,
      content: `### L'Hôpital's Rule — Complete

You've mastered:
- Direct application for $0/0$ and $\\infty/\\infty$
- Converting other indeterminate forms to quotients
- Exponential forms via logarithm
- Common pitfalls and when NOT to apply
- Taylor series as an alternative
- AP exam speed techniques

$$\\boxed{\\text{Verify form} \\to \\text{Differentiate separately} \\to \\text{Evaluate} \\to \\text{Exponentiate if needed}}$$`
    }
  ]
};
