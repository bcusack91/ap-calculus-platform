export const calcbcIntByPartsPart7Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp7-intro',
      type: 'text' as const,
      content: `# \u222B Integration by Parts \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Review & Assessment**

This final part tests your mastery of all IBP techniques: the basic formula, LIATE, tabular method, cycling, definite integrals, and special cases.

### Complete Reference Table

| Integral | Antiderivative |
|----------|---------------|
| $\\int xe^x\\,dx$ | $e^x(x-1) + C$ |
| $\\int x\\cos x\\,dx$ | $x\\sin x + \\cos x + C$ |
| $\\int x\\sin x\\,dx$ | $-x\\cos x + \\sin x + C$ |
| $\\int x^2 e^x\\,dx$ | $e^x(x^2 - 2x + 2) + C$ |
| $\\int e^x\\sin x\\,dx$ | $\\frac{e^x(\\sin x - \\cos x)}{2} + C$ |
| $\\int e^x\\cos x\\,dx$ | $\\frac{e^x(\\sin x + \\cos x)}{2} + C$ |
| $\\int \\ln x\\,dx$ | $x(\\ln x - 1) + C$ |
| $\\int \\arctan x\\,dx$ | $x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C$ |
| $\\int \\arcsin x\\,dx$ | $x\\arcsin x + \\sqrt{1-x^2} + C$ |`
    },
    {
      id: 'ibp7-mc1',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Conceptual**',
      exercise: {
        questions: [
          {
            question: 'The LIATE rule prioritizes which function type highest for the choice of $u$?',
            options: ['Logarithmic', 'Algebraic', 'Trigonometric', 'Exponential'],
            correctAnswer: 0,
            explanation: 'LIATE: Logarithmic > Inverse trig > Algebraic > Trig > Exponential. Log functions always become $u$.'
          },
          {
            question: 'The tabular method terminates when:',
            options: [
              'The differentiation column reaches 0',
              'The integration column eventually reaches 0',
              'Both columns become constant at the same row',
              'The alternating signs return to a plus sign'
            ],
            correctAnswer: 0,
            explanation: 'The polynomial in the differentiation column eventually reaches 0, ending the table. The integration column never reaches 0 (it keeps producing $e^x$ or trig terms), and the sign pattern simply alternates every row.'
          },
          {
            question: 'In a cycling IBP problem like $\\int e^{ax}\\sin(bx)\\,dx$, the denominator in the final answer is:',
            options: ['$a^2 + b^2$', '$a + b$', '$a^2 - b^2$', '$2ab$'],
            correctAnswer: 0,
            explanation: 'After two IBP applications, solving for $I$ yields a denominator of $a^2 + b^2$.'
          }
        ]
      }
    },
    {
      id: 'ibp7-mc2',
      type: 'multiple-choice' as const,
      content: '**Assessment \u2014 Computational**',
      exercise: {
        questions: [
          {
            question: '$\\int_0^1 x^2 e^x\\,dx = $',
            options: ['$e - 2$', '$e$', '$e - 1$', '$2e - 2$'],
            correctAnswer: 0,
            explanation: 'Antiderivative: $e^x(x^2-2x+2)$. At $x=1$: $e(1-2+2)=e$. At $x=0$: $1(0-0+2)=2$. Result: $e - 2$.'
          },
          {
            question: '$\\int e^{2x}\\sin x\\,dx = $',
            options: [
              '$\\frac{e^{2x}(2\\sin x - \\cos x)}{5} + C$',
              '$\\frac{e^{2x}(\\sin x - \\cos x)}{2} + C$',
              '$e^{2x}\\sin x + C$',
              '$\\frac{e^{2x}\\cos x}{5} + C$'
            ],
            correctAnswer: 0,
            explanation: 'Cycling IBP: $a=2$, $b=1$. $\\frac{e^{2x}(2\\sin x - 1\\cos x)}{4+1} = \\frac{e^{2x}(2\\sin x - \\cos x)}{5} + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Method Selection Review**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int x^5 e^{-x}\\,dx$ \u2192 best method:',
            options: ['Tabular method', 'Cycling IBP', 'u-substitution', 'Standard IBP (once)'],
            correctAnswers: ['Tabular method'],
            hints: ['$x^5$ differentiates to 0 in 5 steps. Perfect for tabular.'],
            explanation: 'Polynomial \u00d7 exponential: tabular method with 6 rows.'
          },
          {
            label: '$\\int e^{-3x}\\sin(4x)\\,dx$ \u2192 denominator in the answer:',
            options: ['7', '12', '25', '5'],
            correctAnswers: ['25'],
            hints: ['$a = -3$, $b = 4$. Denominator = $a^2 + b^2$.'],
            explanation: '$(-3)^2 + 4^2 = 9 + 16 = 25$.'
          },
          {
            label: '$\\int (\\ln x)^3\\,dx$ needs integration by parts how many times?',
            options: ['Once', 'Twice', 'Three times', 'Not applicable'],
            correctAnswers: ['Three times'],
            hints: ['$(\\ln x)^3 \\to (\\ln x)^2 \\to \\ln x \\to 1$. Each step uses IBP.'],
            explanation: 'Each round with $u = (\\ln x)^n$ and $dv = dx$ lowers the power of $\\ln x$ by one, since $du = \\frac{n(\\ln x)^{n-1}}{x}\\,dx$ and the $\\frac{1}{x}$ cancels the $x$ from $v$. Going $(\\ln x)^3 \\to (\\ln x)^2 \\to \\ln x \\to \\int dx$ takes three rounds.'
          }
        ]
      }
    },
    {
      id: 'ibp7-input',
      type: 'input-box' as const,
      content: '**Final Calculation**',
      exercise: {
        question: 'Evaluate $\\int_0^{\\pi/2} x\\cos x\\,dx$. The antiderivative is $x\\sin x + \\cos x$. Give the value to three decimal places.',
        correctAnswer: '0.571',
        acceptableAnswers: ['0.571', '0.5708', 'pi/2-1', 'pi/2 - 1'],
        hints: ['At $x = \\pi/2$: $\\frac{\\pi}{2}(1) + 0 = \\frac{\\pi}{2}$.', 'At $x = 0$: $0 + 1 = 1$.'],
        explanation: '$[x\\sin x + \\cos x]_0^{\\pi/2} = (\\frac{\\pi}{2} + 0) - (0 + 1) = \\frac{\\pi}{2} - 1 \\approx 0.571$.'
      }
    },
    {
      id: 'ibp7-summary',
      type: 'text' as const,
      content: `### Integration by Parts \u2014 Complete! \u2705

You\u2019ve mastered:
1. \u2714 The IBP formula and LIATE rule
2. \u2714 Tabular method for polynomial \u00d7 exp/trig
3. \u2714 Cycling technique for $e^{ax}$ \u00d7 trig
4. \u2714 Definite integrals with IBP
5. \u2714 Special cases (inverse trig, logs)
6. \u2714 Mixed problem identification

### Which Approach Fits

| Integrand | Approach |
|----------|-------------------------|
| Polynomial \u00d7 $e^{ax}$, $\\sin$, or $\\cos$ | Basic IBP or tabular |
| $e^{ax}$ \u00d7 trig | Cycling: solve for the integral |
| $\\ln x$ or an inverse trig function alone | $dv = dx$ |
| Definite integral | Apply $[uv]_a^b - \\int_a^b v\\,du$ |

> **Key Fact:** Integration by parts (CED 6.11) is a BC-only technique. Master these approaches and you\u2019ll handle any IBP problem confidently.`
    }
  ]
};
