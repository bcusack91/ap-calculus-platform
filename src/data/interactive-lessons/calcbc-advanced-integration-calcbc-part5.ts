export const calcbcAdvIntegrationPart5Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'ai5-intro',
      type: 'text' as const,
      content: `# AP Exam Strategies — Advanced Integration

**Part 5 of 7 — Scoring Maximum Points**

### Integration on the BC Exam

| Section | What to expect |
|---------|---------------|
| MC (no calc) | Antiderivative identification, method selection |
| MC (calc) | Definite integrals with complex integrands |
| FRQ (no calc) | Separation + integration, FTC applications |
| FRQ (calc) | Accumulation problems, numerical integrals |

### Quick Decision Guide

$$\\boxed{\\text{Can I use a known formula?} \\to \\text{Is it a } u\\text{-sub?} \\to \\text{By parts?} \\to \\text{Partial fractions?}}$$

> **AP Tip:** On calculator sections, you don't need to find antiderivatives. Use $\\texttt{fnInt}$ for definite integrals. On non-calculator sections, you MUST know the techniques.`
    },
    {
      id: 'ai5-common',
      type: 'text' as const,
      content: `### Most Common BC Integration Results

| Integral | Answer |
|----------|--------|
| $\\int e^{ax}\\,dx$ | $\\frac{1}{a}e^{ax} + C$ |
| $\\int \\frac{dx}{x}$ | $\\ln|x| + C$ |
| $\\int \\frac{dx}{\\sqrt{1-x^2}}$ | $\\arcsin x + C$ |
| $\\int \\frac{dx}{1+x^2}$ | $\\arctan x + C$ |
| $\\int \\ln x\\,dx$ | $x\\ln x - x + C$ |
| $\\int x^n e^x\\,dx$ | IBP (tabular method) |
| $\\int \\sec^2 x\\,dx$ | $\\tan x + C$ |
| $\\int \\sec x \\tan x\\,dx$ | $\\sec x + C$ |

### Common Traps

1. $\\int \\frac{dx}{x} = \\ln|x|$, NOT $\\ln x$ (absolute value matters)
2. $\\int e^{3x}\\,dx = \\frac{1}{3}e^{3x}$, NOT $e^{3x}$ (don't forget the chain rule factor)
3. $\\int \\frac{dx}{x^2+4} = \\frac{1}{2}\\arctan(x/2)$, NOT $\\arctan(x/2)$ (don't forget the $1/a$ factor)`
    },
    {
      id: 'ai5-mc',
      type: 'multiple-choice' as const,
      content: '**AP-Style Questions**',
      exercise: {
        questions: [
          {
            question: '$\\int_0^1 \\frac{x}{\\sqrt{1 - x^2}}\\,dx =$',
            options: ['$1$ (let $u = 1-x^2$)', '$\\pi/4$', '$\\pi/2$', '$1/2$'],
            correctAnswer: 0,
            explanation: '$u = 1 - x^2$, $du = -2x\\,dx$. $-\\frac{1}{2}\\int_1^0 u^{-1/2}\\,du = \\frac{1}{2}[2\\sqrt{u}]_0^1 = 1$.'
          },
          {
            question: 'On a no-calculator FRQ: $\\int \\frac{3}{x^2 - 9}\\,dx$. Best approach:',
            options: ['Partial fractions: $\\frac{3}{(x-3)(x+3)} = \\frac{A}{x-3} + \\frac{B}{x+3}$', '$u$-sub with $u = x^2 - 9$', 'Trig substitution', 'Cannot be integrated by hand'],
            correctAnswer: 0,
            explanation: 'Factor denominator, then partial fractions: $A = 1/2$, $B = -1/2$.'
          },
          {
            question: 'If the AP FRQ says "set up but do not evaluate," you should:',
            options: ['Write the complete integral expression with correct bounds and integrand', 'Evaluate it anyway for extra credit', 'Only write the integrand', 'Write the result as a decimal'],
            correctAnswer: 0,
            explanation: '"Set up" means write the integral with correct bounds. Do NOT evaluate — you will not earn extra credit and may lose points for errors.'
          }
        ]
      }
    },
    {
      id: 'ai5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Speed Round**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{e^x}{1 + e^{2x}}\\,dx$. With $u = e^x$:',
            options: ['$\\arctan(e^x) + C$', '$\\ln(1 + e^{2x}) + C$', '$e^x\\arctan(e^x) + C$', '$\\frac{e^x}{1+e^{2x}} + C$'],
            correctAnswers: ['$\\arctan(e^x) + C$'],
            hints: ['$u = e^x$, $du = e^x\\,dx$. Integral becomes $\\int du/(1+u^2)$.'],
            explanation: '$\\int \\frac{du}{1+u^2} = \\arctan u + C = \\arctan(e^x) + C$.'
          },
          {
            label: '$\\int \\frac{2x + 3}{x^2 + 3x + 7}\\,dx =$',
            options: ['$\\ln|x^2 + 3x + 7| + C$ (numerator is derivative of denominator)', '$\\arctan(x^2 + 3x + 7) + C$', '$(x^2+3x+7)^2/2 + C$', 'Partial fractions needed'],
            correctAnswers: ['$\\ln|x^2 + 3x + 7| + C$ (numerator is derivative of denominator)'],
            hints: ['$d(x^2+3x+7)/dx = 2x+3$.'],
            explanation: 'Numerator = derivative of denominator → $\\ln|\\text{denom}| + C$.'
          }
        ]
      }
    },
    {
      id: 'ai5-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: '$\\int_0^1 \\frac{dx}{1 + x^2}$. Give the exact answer. (Use pi for $\\pi$.)',
        correctAnswer: 'pi/4',
        acceptableAnswers: ['pi/4', 'π/4', '0.785', '0.7854'],
        hints: ['$[\\arctan x]_0^1 = \\arctan 1 - \\arctan 0 = \\pi/4 - 0$.'],
        explanation: '$\\arctan(1) - \\arctan(0) = \\pi/4 - 0 = \\pi/4$.'
      }
    },
    {
      id: 'ai5-summary',
      type: 'text' as const,
      content: `### Exam Day Integration Checklist

1. ✓ Can I evaluate directly (known antiderivative)?
2. ✓ Is it a $u$-substitution (chain rule in reverse)?
3. ✓ Is the numerator the derivative of the denominator? ($\\to \\ln$)
4. ✓ Should I complete the square? ($\\to \\arctan$ or $\\arcsin$)
5. ✓ Partial fractions? (factor denominator)
6. ✓ By parts? (product of unlike types)
7. ✓ Calculator allowed? (just compute numerically)

**Next: Part 6 — Problem-Solving Workshop**`
    }
  ]
};
