export const calcabUSubPart7Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub7-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 7 of 7 — Comprehensive Assessment**

### Complete Formula Reference

| Integral | Formula |
|:---:|:---:|
| $\\int [f(x)]^n f'(x)\\,dx$ | $\\frac{[f(x)]^{n+1}}{n+1} + C$ $(n \\neq -1)$ |
| $\\int \\frac{f'(x)}{f(x)}\\,dx$ | $\\ln|f(x)| + C$ |
| $\\int e^{f(x)} f'(x)\\,dx$ | $e^{f(x)} + C$ |
| $\\int \\sin(f(x)) f'(x)\\,dx$ | $-\\cos(f(x)) + C$ |
| $\\int \\cos(f(x)) f'(x)\\,dx$ | $\\sin(f(x)) + C$ |
| $\\int \\sec^2(f(x)) f'(x)\\,dx$ | $\\tan(f(x)) + C$ |
| $\\int f(ax+b)\\,dx$ | $\\frac{1}{a}F(ax+b) + C$ |
| $\\int \\frac{f'(x)}{[f(x)]^2+a^2}\\,dx$ | $\\frac{1}{a}\\arctan\\frac{f(x)}{a} + C$ |

### Top AP Mistakes to Avoid

| Mistake | Correction |
|:---:|:---:|
| Moving variables outside $\\int$ | Only CONSTANTS can exit |
| Forgetting $\\frac{1}{a}$ in linear shortcut | Always divide by inner coefficient |
| Wrong sign: $d(\\cos x) = -\\sin x\\,dx$ | Track negative signs carefully |
| Not changing limits with $u$-sub | Convert: $x \\to u(x)$ |
| Adding $+C$ to definite integrals | No $+C$ when bounds are present |
| Forgetting to back-substitute | If using original limits, convert $u \\to x$ |`
    },
    {
      id: 'usub7-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Questions — Set 1** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int_0^{\\pi} \\sin(x)\\cos(x)\\,dx =$',
            options: ['$0$', '$1$', '$1/2$', '$-1/2$'],
            correctAnswer: 0,
            explanation: '$u = \\sin x$: $\\int_0^0 u\\,du = 0$. (Both limits give $u=0$!) Or: $\\sin x \\cos x = \\frac{1}{2}\\sin(2x)$, and $\\int_0^{\\pi} \\sin(2x)\\,dx = 0$.'
          },
          {
            question: '$\\int \\frac{e^{2x}}{e^{2x}+1}\\,dx =$',
            options: ['$\\ln(e^{2x}+1) + C$', '$\\frac{1}{2}\\ln(e^{2x}+1) + C$', '$\\arctan(e^x) + C$', '$e^{2x}\\ln(e^{2x}+1) + C$'],
            correctAnswer: 1,
            explanation: '$u = e^{2x}+1$, $du = 2e^{2x}dx$. $\\frac{1}{2}\\int \\frac{du}{u} = \\frac{1}{2}\\ln(e^{2x}+1)+C$.'
          },
          {
            question: 'If $\\int_0^3 f(x)\\,dx = 5$ and $g(x) = f(3x)$, then $\\int_0^1 g(x)\\,dx =$',
            options: ['$5$', '$15$', '$5/3$', '$3/5$'],
            correctAnswer: 2,
            explanation: '$u = 3x$, $du = 3dx$. $\\int_0^1 f(3x)\\,dx = \\frac{1}{3}\\int_0^3 f(u)\\,du = 5/3$.'
          },
          {
            question: '$\\frac{d}{dx}\\int_1^{x^2} \\sqrt{t^3+1}\\,dt =$',
            options: ['$\\sqrt{x^6+1}$', '$2x\\sqrt{x^6+1}$', '$\\sqrt{x^3+1}$', '$2x\\sqrt{x^3+1}$'],
            correctAnswer: 1,
            explanation: 'FTC Part 1 with chain rule: $f(x^2) \\cdot 2x = \\sqrt{(x^2)^3+1} \\cdot 2x = 2x\\sqrt{x^6+1}$.'
          }
        ]
      }
    },
    {
      id: 'usub7-quiz2',
      type: 'multiple-choice' as const,
      content: '**AP-Style Questions — Set 2** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int x\\sqrt{4-x^2}\\,dx =$',
            options: ['$-\\frac{1}{3}(4-x^2)^{3/2} + C$', '$\\frac{2}{3}(4-x^2)^{3/2} + C$', '$-\\frac{2}{3}(4-x^2)^{1/2} + C$', '$\\frac{x^2}{2}\\arcsin(x/2) + C$'],
            correctAnswer: 0,
            explanation: '$u = 4-x^2$, $du = -2x\\,dx$. $-\\frac{1}{2}\\int u^{1/2}\\,du = -\\frac{1}{2}\\cdot\\frac{2}{3}u^{3/2} = -\\frac{1}{3}(4-x^2)^{3/2}+C$.'
          },
          {
            question: '$\\int_0^{\\ln 3} \\frac{e^x}{e^x + 1}\\,dx =$',
            options: ['$\\ln 2$', '$\\ln(3/2)$', '$\\ln 3$', '$\\ln(4/3)$'],
            correctAnswer: 0,
            explanation: '$u = e^x+1$: $x=0 \\to u=2$, $x=\\ln 3 \\to u=4$. $\\int_2^4 \\frac{du}{u} = \\ln 4 - \\ln 2 = \\ln 2$.'
          },
          {
            question: '$\\int \\sec x\\,dx =$',
            options: ['$\\tan x + C$', '$\\ln|\\sec x + \\tan x| + C$', '$\\sec x \\tan x + C$', '$\\arctan(\\sin x) + C$'],
            correctAnswer: 1,
            explanation: 'Classic result: multiply by $\\frac{\\sec x + \\tan x}{\\sec x + \\tan x}$. Numerator becomes $du$ where $u = \\sec x + \\tan x$.'
          }
        ]
      }
    },
    {
      id: 'usub7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final classification challenge.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{5x^2+3}{x^3+2}\\,dx$ — identify the pattern:',
            options: ['Power rule', '$f\'/f \\to \\ln$ (with adjustment)', 'Inverse trig', 'Long division'],
            correctAnswers: ['$f\'/f \\to \\ln$ (with adjustment)'],
            hints: ['$d(x^3+2) = 3x^2\\,dx$. The numerator $5x^2$ is a constant multiple of $3x^2$.'],
            explanation: '$u = x^3+2$, $du = 3x^2\\,dx$: $\\frac{5}{3}\\ln|x^3+2| + C$.'
          },
          {
            label: '$\\int_{ -2}^{2} x^3 \\sin(x^4)\\,dx$ equals:',
            options: ['Requires full computation', '$0$ by symmetry', '$2\\int_0^2 x^3\\sin(x^4)\\,dx$', 'Cannot be evaluated'],
            correctAnswers: ['$0$ by symmetry'],
            hints: ['$x^3$ is odd, $\\sin(x^4)$ is even. Odd $\\times$ even = odd.'],
            explanation: 'The integrand is odd, and the interval is symmetric: $\\int_{-a}^a (\\text{odd}) = 0$.'
          },
          {
            label: '$\\int \\frac{1}{\\sqrt{9-(x-1)^2}}\\,dx$ is:',
            options: ['$\\arctan$ form', '$\\arcsin$ form', '$\\ln$ form', 'Requires u-sub first'],
            correctAnswers: ['$\\arcsin$ form'],
            hints: ['$\\frac{1}{\\sqrt{a^2 - u^2}} \\to \\arcsin(u/a)$.'],
            explanation: '$\\arcsin\\frac{x-1}{3} + C$. This matches $\\frac{1}{\\sqrt{a^2-u^2}}$ with $a=3, u=x-1$.'
          }
        ]
      }
    },
    {
      id: 'usub7-input',
      type: 'input-box' as const,
      content: '**Final challenge.** ✍️',
      exercise: {
        question: 'A particle has velocity $v(t) = t \\cdot e^{-t^2}$. Find the total displacement from $t=0$ to $t=1$.\n\n(Give the exact answer in the form $(a - e^b)/c$.)',
        correctAnswer: '(1 - e^(-1))/2',
        acceptableAnswers: ['(1 - e^(-1))/2', '(1-e^(-1))/2', '(1-1/e)/2', '(e-1)/(2e)'],
        hints: [
          'Displacement $= \\int_0^1 t \\cdot e^{-t^2}\\,dt$.',
          '$u = -t^2$, $du = -2t\\,dt$, so $t\\,dt = -du/2$.',
          'Limits: $t=0 \\to u=0$, $t=1 \\to u=-1$. $-\\frac{1}{2}\\int_0^{-1} e^u\\,du = \\frac{1}{2}\\int_{-1}^{0} e^u\\,du$.'
        ],
        explanation: '$u=-t^2$: $-\\frac{1}{2}[e^u]_0^{-1} = -\\frac{1}{2}(e^{-1}-1) = \\frac{1-e^{-1}}{2} = \\frac{e-1}{2e}$.'
      }
    },
    {
      id: 'usub7-summary',
      type: 'text' as const,
      content: `### u-Substitution — Complete Summary

| Concept | Key Idea |
|:---:|:---:|
| Basic u-sub | Reverse chain rule: $\\int f(g(x))g'(x)\\,dx$ |
| Constant adjustment | Multiply/divide by constants (NEVER variables) |
| Definite integrals | Change limits to $u$-values, or back-substitute |
| Linear shortcut | $\\int f(ax+b)\\,dx = \\frac{1}{a}F(ax+b)+C$ |
| $f'/f$ pattern | $\\int f'/f = \\ln|f|+C$ |
| Trickier subs | Express extra $x$'s in terms of $u$ |
| Long division | When $\\deg(\\text{num}) \\geq \\deg(\\text{denom})$ |
| Complete the square | Irreducible quadratic $\\to \\arctan/\\arcsin$ |
| Symmetry | Odd integrand on $[-a,a] \\to 0$ |

> **Congratulations!** You've mastered u-substitution — the most important integration technique on the AP Calculus AB exam.`
    }
  ]
};
