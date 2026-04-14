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
              'The integration column reaches 0',
              'Both columns become constant',
              'The signs stop alternating'
            ],
            correctAnswer: 0,
            explanation: 'The polynomial in the differentiation column eventually reaches 0, ending the table.'
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
            label: '$\\int (\\ln x)^3\\,dx$ uses the reduction formula how many times?',
            options: ['Once', 'Twice', 'Three times', 'Not applicable'],
            correctAnswers: ['Three times'],
            hints: ['$(\\ln x)^3 \\to (\\ln x)^2 \\to \\ln x \\to 1$. Each step uses IBP.'],
            explanation: 'The reduction formula $\\int(\\ln x)^n\\,dx = x(\\ln x)^n - n\\int(\\ln x)^{n-1}\\,dx$ is applied 3 times: $n=3 \\to 2 \\to 1 \\to 0$.'
          }
        ]
      }
    },
    {
      id: 'ibp7-input',
      type: 'input-box' as const,
      content: '**Final Calculation**',
      exercise: {
        question: 'Evaluate $\\int_0^{\\pi/2} x\\cos x\\,dx$. The antiderivative is $x\\sin x + \\cos x$. Compute $[x\\sin x + \\cos x]_0^{\\pi/2}$ exactly. The answer is $\\frac{\\pi}{a} - b$. Find $a + b$.',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: ['At $x = \\pi/2$: $\\frac{\\pi}{2}(1) + 0 = \\frac{\\pi}{2}$.', 'At $x = 0$: $0 + 1 = 1$.', 'Result: $\\frac{\\pi}{2} - 1$. So $a = 2$, $b = 1$.'],
        explanation: '$[x\\sin x + \\cos x]_0^{\\pi/2} = (\\frac{\\pi}{2} + 0) - (0 + 1) = \\frac{\\pi}{2} - 1$. Thus $a = 2$, $b = 1$, $a + b = 3$.'
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

### AP Exam Frequency

| IBP Type | Likelihood on AP BC Exam |
|----------|-------------------------|
| Basic IBP or tabular | Almost certain (MC + FRQ) |
| Cycling ($e^{ax}$ \u00d7 trig) | Common in MC |
| Special cases ($\\ln$, inverse trig) | Frequent in FRQ |
| Definite IBP | Very common |

> **Key Fact:** Integration by parts appears on every AP Calculus BC exam. Master all five approaches and you\u2019ll handle any IBP problem confidently.`
    }
  ]
};
