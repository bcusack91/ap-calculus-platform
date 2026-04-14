export const calcbcAdvIntegrationPart7Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'ai7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review — Advanced Integration

**Part 7 of 7 — Final Assessment**

### Integration Methods Summary

| Method | Recognizable by |
|--------|----------------|
| $u$-substitution | Composite function with inner derivative present |
| By parts | Product of unlike function types |
| Partial fractions | Rational function, factorable denominator |
| Complete the square | Quadratic denominator, no real roots |
| Inverse trig formula | $1/(a^2+u^2)$ or $1/\\sqrt{a^2-u^2}$ |
| Trig powers | $\\sin^m x \\cos^n x$ |
| Long division | Degree of numerator $\\ge$ denominator |

$$\\boxed{\\text{Simplify} \\to \\text{Identify} \\to \\text{Execute} \\to \\text{Verify by differentiation}}$$`
    },
    {
      id: 'ai7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Set A**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{\\cos x}{1 + \\sin^2 x}\\,dx =$',
            options: ['$\\arctan(\\sin x) + C$', '$\\ln(1+\\sin^2 x) + C$', '$\\sin x \\arctan x + C$', '$\\arcsin(\\cos x) + C$'],
            correctAnswer: 0,
            explanation: '$u = \\sin x$, $du = \\cos x\\,dx$. $\\int du/(1+u^2) = \\arctan u + C$.'
          },
          {
            question: '$\\int \\frac{x^2}{x+1}\\,dx$ after long division:',
            options: ['$\\frac{x^2}{2} - x + \\ln|x+1| + C$', '$x^2\\ln|x+1| + C$', '$\\frac{x^3}{3(x+1)} + C$', '$\\frac{x^2}{2} + \\ln|x+1| + C$'],
            correctAnswer: 0,
            explanation: '$x^2/(x+1) = x - 1 + 1/(x+1)$. Integrate: $x^2/2 - x + \\ln|x+1| + C$.'
          },
          {
            question: '$\\frac{d}{dx}\\int_1^{\\sin x} t^3\\,dt =$',
            options: ['$\\sin^3 x \\cos x$', '$\\sin^3 x$', '$\\cos^3 x$', '$3\\sin^2 x \\cos x$'],
            correctAnswer: 0,
            explanation: 'FTC + chain rule: $f(g(x)) \\cdot g\'(x) = (\\sin x)^3 \\cdot \\cos x$.'
          }
        ]
      }
    },
    {
      id: 'ai7-mc2',
      type: 'multiple-choice' as const,
      content: '**Review Set B**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{dx}{\\sqrt{9 - 4x^2}}$. Rewrite as $\\int \\frac{dx}{\\sqrt{9 - (2x)^2}}$:',
            options: ['$\\frac{1}{2}\\arcsin\\frac{2x}{3} + C$', '$\\arcsin\\frac{2x}{3} + C$', '$\\frac{1}{3}\\arcsin\\frac{2x}{3} + C$', '$\\arcsin\\frac{x}{3} + C$'],
            correctAnswer: 0,
            explanation: '$u = 2x$, $du = 2dx$. $\\frac{1}{2}\\int du/\\sqrt{9-u^2} = \\frac{1}{2}\\arcsin(u/3) + C$.'
          },
          {
            question: 'The integral $\\int_1^\\infty \\frac{dx}{x^2}$ converges to:',
            options: ['$1$', '$\\infty$', '$0$', '$1/2$'],
            correctAnswer: 0,
            explanation: '$\\lim_{b \\to \\infty} [-1/x]_1^b = 0 - (-1) = 1$.'
          }
        ]
      }
    },
    {
      id: 'ai7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Method Identification**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int x\\sin(x^2)\\,dx$ — best method:',
            options: ['$u$-sub with $u = x^2$ (answer: $-\\frac{1}{2}\\cos(x^2) + C$)', 'Integration by parts', 'Trig identity', 'Partial fractions'],
            correctAnswers: ['$u$-sub with $u = x^2$ (answer: $-\\frac{1}{2}\\cos(x^2) + C$)'],
            hints: ['$du = 2x\\,dx$, so $x\\,dx = du/2$.'],
            explanation: '$\\frac{1}{2}\\int \\sin u\\,du = -\\frac{1}{2}\\cos u + C$.'
          },
          {
            label: '$\\int \\frac{5}{(x+1)(x-2)}\\,dx$ — best method:',
            options: ['Partial fractions', '$u$-substitution', 'Integration by parts', 'Complete the square'],
            correctAnswers: ['Partial fractions'],
            hints: ['Rational with factored denominator.'],
            explanation: '$\\frac{5}{(x+1)(x-2)} = \\frac{A}{x+1} + \\frac{B}{x-2}$.'
          }
        ]
      }
    },
    {
      id: 'ai7-input',
      type: 'input-box' as const,
      content: '**Final Problem**',
      exercise: {
        question: '$\\int_0^1 xe^x\\,dx$ using integration by parts. Give the exact answer.',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0', '1.00'],
        hints: ['$u = x$, $dv = e^x dx$. $[xe^x - e^x]_0^1 = (e - e) - (0 - 1)$.'],
        explanation: '$[xe^x - e^x]_0^1 = (e - e) - (0 - 1) = 0 + 1 = 1$.'
      }
    },
    {
      id: 'ai7-summary',
      type: 'text' as const,
      content: `### Advanced Integration — Complete

You've mastered:
- Choosing the right integration technique
- Inverse trig integrals ($\\arcsin$, $\\arctan$)
- Trig integrals (powers of sine/cosine, trig sub)
- Algebraic preparation (long division, completing the square, splitting numerators)
- FTC with variable bounds and chain rule
- AP exam strategies

$$\\boxed{\\int = \\text{pattern recognition + algebraic skill + careful execution}}$$`
    }
  ]
};
