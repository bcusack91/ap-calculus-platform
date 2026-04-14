export const calcbcIntTechPart5Data = {
  topicSlug: 'integration-techniques-calcbc',
  sections: [
    {
      id: 'it5-intro',
      type: 'text' as const,
      content: `# Advanced Integration Techniques

**Part 5 of 7 \u2014 Strategy Selection**

The hardest part of integration is choosing the right technique. This part builds your decision-making framework for the AP exam.`
    },
    {
      id: 'it5-flowchart',
      type: 'text' as const,
      content: `### Decision Flowchart

| What You See | Technique |
|:---:|:---:|
| Composition $f(g(x)) \\cdot g'(x)$ | $u$-substitution |
| Product of two different types | Integration by parts |
| Rational function $P(x)/Q(x)$ | Partial fractions |
| $\\sqrt{a^2-x^2}$, $\\sqrt{a^2+x^2}$, $\\sqrt{x^2-a^2}$ | Trig substitution |
| $\\sin^m x \\cos^n x$ | Trig integrals |
| Quadratic in denominator | Complete the square |
| Numerator degree $\\ge$ denominator | Long division first |

$$\\boxed{\\text{Try } u\\text{-sub first} \\to \\text{IBP} \\to \\text{Partial fractions or Trig sub}}$$

> **AP Tip:** On the AP exam, 80% of integrals use $u$-substitution or basic antiderivatives. The BC-specific techniques handle the remaining 20%.`
    },
    {
      id: 'it5-mc1',
      type: 'multiple-choice' as const,
      content: '**Identify the Technique**',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x^3}{x^2 + 1}\\,dx$ \u2014 best approach?',
            options: [
              'Long division, then $u$-sub',
              'Partial fractions',
              'Trig substitution',
              'Integration by parts'
            ],
            correctAnswer: 0,
            explanation: 'Degree of numerator (3) $\\ge$ degree of denominator (2). Long division: $\\frac{x^3}{x^2+1} = x - \\frac{x}{x^2+1}$. Then integrate directly.'
          },
          {
            question: '$\\int x^2 e^{3x}\\,dx$ \u2014 best approach?',
            options: [
              'Integration by parts (tabular method, 2 rows)',
              '$u$-substitution with $u = 3x$',
              'Partial fractions',
              'Trig substitution'
            ],
            correctAnswer: 0,
            explanation: 'Product of polynomial and exponential \u2192 IBP. Use tabular method with $u = x^2$ (differentiate) and $dv = e^{3x}dx$ (integrate).'
          },
          {
            question: '$\\int \\frac{5x + 3}{(x-1)(x+2)}\\,dx$ \u2014 best approach?',
            options: [
              'Partial fractions',
              'Integration by parts',
              '$u$-substitution',
              'Trig substitution'
            ],
            correctAnswer: 0,
            explanation: 'Rational function with factorable denominator and degree(num) < degree(den) \u2192 partial fractions.'
          }
        ]
      }
    },
    {
      id: 'it5-tricky',
      type: 'text' as const,
      content: `### Tricky Cases

**Case 1:** $\\int \\frac{1}{x^2 + 4x + 8}\\,dx$
- Not factorable \u2192 complete the square: $(x+2)^2 + 4$
- Result: $\\frac{1}{2}\\arctan\\frac{x+2}{2} + C$

**Case 2:** $\\int \\frac{x+5}{x^2+4x+8}\\,dx$
- Split: $\\frac{x+5}{(x+2)^2+4} = \\frac{(x+2)+3}{(x+2)^2+4}$
- Result: $\\frac{1}{2}\\ln(x^2+4x+8) + \\frac{3}{2}\\arctan\\frac{x+2}{2} + C$

**Case 3:** $\\int \\frac{e^x}{1+e^{2x}}\\,dx$
- Let $u = e^x$: $\\int \\frac{du}{1+u^2} = \\arctan(e^x) + C$
- Recognize substitution that converts to known form!`
    },
    {
      id: 'it5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick Classification**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{\\ln x}{x^2}\\,dx$:',
            options: ['IBP with $u = \\ln x$', '$u$-sub with $u = \\ln x$', 'Partial fractions', 'Trig sub'],
            correctAnswers: ['IBP with $u = \\ln x$'],
            hints: ['Product of $\\ln x$ and $x^{-2}$. Can\u2019t separate cleanly with $u$-sub.'],
            explanation: 'IBP: $u = \\ln x$, $dv = x^{-2}dx$. Get $-\\frac{\\ln x}{x} + \\int \\frac{1}{x^2}dx = -\\frac{\\ln x}{x} - \\frac{1}{x} + C$.'
          },
          {
            label: '$\\int \\frac{dx}{x\\sqrt{x^2-4}}$:',
            options: ['Trig sub: $x = 2\\sec\\theta$', 'Partial fractions', '$u = x^2 - 4$', 'Complete the square'],
            correctAnswers: ['Trig sub: $x = 2\\sec\\theta$'],
            hints: ['$\\sqrt{x^2 - a^2}$ form with $a = 2$.'],
            explanation: 'Form $\\sqrt{x^2 - 4}$: $x = 2\\sec\\theta$. Result involves $\\arccos$ or $\\operatorname{arcsec}$.'
          },
          {
            label: '$\\int x\\sin(x^2)\\,dx$:',
            options: ['$u$-sub: $u = x^2$', 'IBP: $u = x$', 'Trig identity', 'Trig sub'],
            correctAnswers: ['$u$-sub: $u = x^2$'],
            hints: ['$x$ is (up to a constant) the derivative of $x^2$.'],
            explanation: '$u = x^2$, $du = 2x\\,dx$: $\\frac{1}{2}\\int \\sin u\\,du = -\\frac{1}{2}\\cos(x^2) + C$.'
          }
        ]
      }
    },
    {
      id: 'it5-input',
      type: 'input-box' as const,
      content: '**Strategy in Action**',
      exercise: {
        question: 'Evaluate $\\int_0^1 \\frac{x^3 + x}{x^2 + 1}\\,dx$. First observe: $\\frac{x^3+x}{x^2+1} = \\frac{x(x^2+1)}{x^2+1} = x$. What is the exact value?',
        correctAnswer: '1/2',
        acceptableAnswers: ['1/2', '0.5', '0.50'],
        hints: ['The fraction simplifies to $x$.', '$\\int_0^1 x\\,dx = [x^2/2]_0^1 = 1/2$.'],
        explanation: '$\\frac{x(x^2+1)}{x^2+1} = x$. So $\\int_0^1 x\\,dx = \\frac{1}{2}$. Always simplify first!'
      }
    },
    {
      id: 'it5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

**The Integration Hierarchy:**
1. Simplify first (algebra, trig identities)
2. Try $u$-substitution
3. Try integration by parts
4. Try partial fractions (for rationals)
5. Try trig substitution (for roots of quadratics)
6. Complete the square (for irreducible quadratics)

> **Coming Up:** Part 6 is a **Problem-Solving Workshop** with mixed techniques.`
    }
  ]
};
