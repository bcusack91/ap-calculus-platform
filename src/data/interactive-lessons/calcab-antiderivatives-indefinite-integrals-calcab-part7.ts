export const calcabAntiderivativesPart7Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti7-intro',
      type: 'text' as const,
      content: `# ∫ Antiderivatives — Comprehensive Review

**Part 7 of 7 — Final Assessment**

### Complete Formula Reference

| Function | Antiderivative | Notes |
|:---:|:---:|:---:|
| $x^n$ $(n \\neq -1)$ | $\\frac{x^{n+1}}{n+1} + C$ | Power Rule |
| $\\frac{1}{x}$ | $\\ln|x| + C$ | Special case $n = -1$ |
| $e^x$ | $e^x + C$ | — |
| $\\sin x$ | $-\\cos x + C$ | Negative! |
| $\\cos x$ | $\\sin x + C$ | — |
| $\\sec^2 x$ | $\\tan x + C$ | — |
| $\\csc^2 x$ | $-\\cot x + C$ | Negative! |
| $\\sec x \\tan x$ | $\\sec x + C$ | — |
| $\\csc x \\cot x$ | $-\\csc x + C$ | Negative! |
| $\\frac{1}{\\sqrt{a^2-x^2}}$ | $\\arcsin(x/a) + C$ | Inverse trig |
| $\\frac{1}{a^2+x^2}$ | $\\frac{1}{a}\\arctan(x/a) + C$ | Inverse trig |

### Quick-Reference Decision Guide

$$\\boxed{\\text{Read} \\to \\text{Rewrite (if needed)} \\to \\text{Recognize the form} \\to \\text{Apply formula} \\to \\text{Add } +C}$$`
    },
    {
      id: 'anti7-mistakes',
      type: 'text' as const,
      content: `### Top AP Exam Mistakes — Antiderivatives

| # | Mistake | Example | Cost |
|:---:|:---:|:---:|:---:|
| 1 | Forgetting $+C$ | Writing $x^2/2$ instead of $x^2/2 + C$ | 1 pt on FRQ |
| 2 | Power Rule with $n = -1$ | $\\int x^{-1} \\neq x^0/0$ → it's $\\ln|x|$ | Full credit |
| 3 | Missing absolute value | $\\ln(x)$ vs $\\ln|x|$ | 1 pt |
| 4 | Sign errors on trig | $\\int \\sin x = \\cos x$ (forgot negative) | Full credit |
| 5 | Coefficient errors | $\\int x^{1/2} = x^{3/2}$ (forgot $\\times 2/3$) | Full credit |
| 6 | Not verifying IVP | Solving for $C$ but plugging into wrong equation | Full credit |

> **Key Fact:** On FRQs, you get a "linkage point" for correctly connecting your antiderivative to the initial condition. Show ALL steps: general solution → plug in IC → solve for $C$ → write particular solution.`
    },
    {
      id: 'anti7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment — Set 1** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\left(\\frac{2}{\\sqrt{x}} + 4x^3 - \\sin x\\right)\\,dx$.',
            options: ['$4\\sqrt{x} + x^4 + \\cos x + C$', '$4\\sqrt{x} + x^4 - \\cos x + C$', '$\\frac{1}{\\sqrt{x}} + x^4 + \\cos x + C$', '$4\\sqrt{x} + 4x^4 + \\cos x + C$'],
            correctAnswer: 0,
            explanation: '$\\int 2x^{-1/2} = 2 \\cdot 2x^{1/2} = 4\\sqrt{x}$. $\\int 4x^3 = x^4$. $\\int (-\\sin x) = \\cos x$. Answer: $4\\sqrt{x} + x^4 + \\cos x + C$.'
          },
          {
            question: 'A particle has $a(t) = 6t$, $v(0) = -5$, $s(0) = 2$. Find $s(2)$.',
            options: ['$0$', '$-2$', '$6$', '$4$'],
            correctAnswer: 0,
            explanation: '$v(t) = 3t^2 - 5$. $s(t) = t^3 - 5t + 2$. $s(2) = 8 - 10 + 2 = 0$.'
          },
          {
            question: 'Evaluate $\\int \\frac{x^3 + x}{x^2}\\,dx$.',
            options: ['$\\frac{x^2}{2} + \\ln|x| + C$', '$\\frac{x^2}{2} - \\frac{1}{x} + C$', '$\\ln|x^3+x| + C$', '$\\frac{x^4}{4} + \\frac{x^2}{2} + C$'],
            correctAnswer: 0,
            explanation: 'Rewrite: $\\int (x + x^{-1})\\,dx = \\frac{x^2}{2} + \\ln|x| + C$.'
          }
        ]
      }
    },
    {
      id: 'anti7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Final Assessment — Set 2** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{5}{25 + x^2}\\,dx$.',
            options: ['$\\arctan(x/5) + C$', '$\\frac{1}{5}\\arctan(x/5) + C$', '$5\\arctan(x/5) + C$', '$\\frac{5}{x}\\arctan(x) + C$'],
            correctAnswer: 0,
            explanation: '$a = 5$: $5 \\cdot \\frac{1}{5}\\arctan(x/5) + C = \\arctan(x/5) + C$.'
          },
          {
            question: 'If $F\'(x) = \\sec^2 x$ and $F(0) = 3$, what is $F(\\pi/4)$?',
            options: ['$3$', '$4$', '$2$', '$1 + 3$'],
            correctAnswer: 1,
            explanation: '$F(x) = \\tan x + C$. $F(0) = 0 + C = 3$, so $C = 3$. $F(\\pi/4) = \\tan(\\pi/4) + 3 = 1 + 3 = 4$.'
          },
          {
            question: 'Evaluate $\\int (\\sin^2 x + \\cos^2 x)\\,dx$.',
            options: ['$x + C$', '$\\sin x \\cos x + C$', '$-\\cos^2 x + \\sin^2 x + C$', '$\\frac{1}{2}x + C$'],
            correctAnswer: 0,
            explanation: '$\\sin^2 x + \\cos^2 x = 1$ always! So $\\int 1\\,dx = x + C$.'
          },
          {
            question: 'Evaluate $\\int (e^x - \\csc x \\cot x + 7)\\,dx$.',
            options: ['$e^x + \\csc x + 7x + C$', '$e^x - \\csc x + 7x + C$', '$e^x + \\cot x + 7x + C$', '$xe^x + \\csc x + 7x + C$'],
            correctAnswer: 0,
            explanation: '$\\int e^x = e^x$. $\\int (-\\csc x \\cot x) = \\csc x$ (negative of negative). $\\int 7 = 7x$. Result: $e^x + \\csc x + 7x + C$.'
          }
        ]
      }
    },
    {
      id: 'anti7-dropdown',
      type: 'dropdown-select' as const,
      content: '**AP-Style Mixed Classification** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{1}{\\sqrt{49-x^2}}\\,dx$ equals:',
            options: ['$\\arcsin(x/7) + C$', '$\\frac{1}{7}\\arctan(x/7) + C$', '$\\ln|49-x^2| + C$', '$-\\sqrt{49-x^2} + C$'],
            correctAnswers: ['$\\arcsin(x/7) + C$'],
            hints: ['$\\sqrt{a^2 - x^2}$ with $a = 7$: arcsin form.'],
            explanation: '$\\int \\frac{1}{\\sqrt{49-x^2}}\\,dx = \\arcsin(x/7) + C$.'
          },
          {
            label: '$\\int (x^{-3} + x^{2/3})\\,dx$ equals:',
            options: ['$-\\frac{1}{2x^2} + \\frac{3}{5}x^{5/3} + C$', '$-3x^{-4} + \\frac{2}{3}x^{-1/3} + C$', '$\\frac{x^{-2}}{-2} + \\frac{x^{5/3}}{5/3} + C$', '$-\\frac{1}{2x^2} + \\frac{5}{3}x^{5/3} + C$'],
            correctAnswers: ['$-\\frac{1}{2x^2} + \\frac{3}{5}x^{5/3} + C$'],
            hints: ['Power Rule on each term. Remember to divide by the new exponent.'],
            explanation: '$\\int x^{-3} = \\frac{x^{-2}}{-2}$ and $\\int x^{2/3} = \\frac{x^{5/3}}{5/3} = \\frac{3}{5}x^{5/3}$.'
          },
          {
            label: 'If $v(t) = 3t^2 - 2$ and $s(0) = 5$, then $s(3)$ equals:',
            options: ['$20$', '$26$', '$32$', '$22$'],
            correctAnswers: ['$26$'],
            hints: ['$s(t) = t^3 - 2t + C$. Use $s(0) = 5$ to find $C$.'],
            explanation: '$s(t) = t^3 - 2t + 5$. $s(3) = 27 - 6 + 5 = 26$.'
          }
        ]
      }
    },
    {
      id: 'anti7-input',
      type: 'input-box' as const,
      content: '**Final Challenge** ✍️',
      exercise: {
        question: 'A particle has acceleration $a(t) = 12t - 6$, initial velocity $v(0) = 4$, and initial position $s(0) = 1$. Find $s(1)$.\n\n(Enter a whole number.)',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        hints: [
          '$v(t) = \\int (12t-6)\\,dt = 6t^2 - 6t + C_1$. Use $v(0) = 4$: $C_1 = 4$.',
          '$v(t) = 6t^2 - 6t + 4$. Now integrate: $s(t) = 2t^3 - 3t^2 + 4t + C_2$.',
          'Use $s(0) = 1$: $C_2 = 1$. So $s(t) = 2t^3 - 3t^2 + 4t + 1$. Compute $s(1)$.'
        ],
        explanation: '$v(t) = 6t^2 - 6t + 4$. $s(t) = 2t^3 - 3t^2 + 4t + 1$. $s(1) = 2 - 3 + 4 + 1 = 4$.'
      }
    },
    {
      id: 'anti7-summary',
      type: 'text' as const,
      content: `### Antiderivatives — Complete! ✅

You have mastered:

| Skill | Parts Covered |
|:---:|:---:|
| Power Rule & Linearity | Parts 1-2 |
| Trig & Exponential Formulas | Part 2 |
| Initial Value Problems | Parts 3, 6 |
| Rewriting Techniques | Part 4 |
| Inverse Trig Antiderivatives | Part 5 |
| Mixed Problem Strategy | Parts 6-7 |

### AP Exam Checklist

- ✅ Can I recognize ALL basic antiderivative forms?
- ✅ Can I rewrite integrands to match known forms?
- ✅ Do I always include $+C$ for indefinite integrals?
- ✅ Can I solve IVPs with one or two initial conditions?
- ✅ Can I distinguish inverse trig from $u$-sub cases?
- ✅ Do I verify answers by differentiating?

$$\\boxed{\\text{Integration is the REVERSE of differentiation — always check by differentiating!}}$$`
    }
  ]
};
