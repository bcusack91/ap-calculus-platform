export const calcbcIntByPartsPart4Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp4-intro',
      type: 'text' as const,
      content: `# \u222B Integration by Parts

**Part 4 of 7 \u2014 Definite Integrals with IBP**

On the AP exam, many IBP problems involve definite integrals. You can either find the antiderivative first, then evaluate at the bounds, or carry the bounds through the entire process.`
    },
    {
      id: 'ibp4-formula',
      type: 'text' as const,
      content: `### Definite Integral IBP Formula

$$\\boxed{\\int_a^b u\\,dv = [uv]_a^b - \\int_a^b v\\,du}$$

### Strategy Options

| Approach | When to Use |
|----------|-------------|
| Find antiderivative, then plug in bounds | Simpler integrals; cleaner algebra |
| Carry bounds through every step | Avoids needing the general antiderivative |

> **AP Tip:** On free-response questions, show each step clearly. Write the $[uv]_a^b$ term explicitly before evaluating.`
    },
    {
      id: 'ibp4-example1',
      type: 'text' as const,
      content: `### Worked Example 1: $\\int_0^1 xe^x\\,dx$

| Step | Work |
|------|------|
| $u = x$, $dv = e^x\\,dx$ | $du = dx$, $v = e^x$ |
| Apply formula | $[xe^x]_0^1 - \\int_0^1 e^x\\,dx$ |
| Evaluate $[uv]$ | $(1 \\cdot e) - (0 \\cdot 1) = e$ |
| Remaining integral | $[e^x]_0^1 = e - 1$ |
| Final answer | $e - (e-1) = 1$ |

$$\\boxed{\\int_0^1 xe^x\\,dx = 1}$$`
    },
    {
      id: 'ibp4-example2',
      type: 'text' as const,
      content: `### Worked Example 2: $\\int_1^e (\\ln x)^2\\,dx$

| Step | Work |
|------|------|
| $u = (\\ln x)^2$, $dv = dx$ | $du = \\frac{2\\ln x}{x}\\,dx$, $v = x$ |
| Apply formula | $[x(\\ln x)^2]_1^e - \\int_1^e 2\\ln x\\,dx$ |
| Evaluate $[uv]$ | $e(1)^2 - 1(0)^2 = e$ |
| Second IBP on $\\int \\ln x\\,dx$ | $x\\ln x - x + C$ |
| Evaluate | $e - 2[x\\ln x - x]_1^e = e - 2[(e-e)-(0-1)]$ |
| Simplify | $e - 2(1) = e - 2$ |

$$\\boxed{\\int_1^e (\\ln x)^2\\,dx = e - 2}$$`
    },
    {
      id: 'ibp4-mc1',
      type: 'multiple-choice' as const,
      content: '**Definite IBP Practice**',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_1^e \\ln x\\,dx$.',
            options: ['$1$', '$e - 1$', '$e$', '$0$'],
            correctAnswer: 0,
            explanation: '$u = \\ln x$, $dv = dx$. $[x\\ln x]_1^e - \\int_1^e dx = (e \\cdot 1 - 1 \\cdot 0) - (e - 1) = e - e + 1 = 1$.'
          },
          {
            question: 'Evaluate $\\int_0^{\\pi} x\\sin x\\,dx$.',
            options: ['$\\pi$', '$2$', '$0$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: '$u = x$, $dv = \\sin x\\,dx \\Rightarrow v = -\\cos x$. $[-x\\cos x]_0^{\\pi} + \\int_0^{\\pi}\\cos x\\,dx = (-\\pi(-1) - 0) + [\\sin x]_0^{\\pi} = \\pi + 0 = \\pi$.'
          },
          {
            question: 'Evaluate $\\int_0^{\\pi/2} x\\cos x\\,dx$.',
            options: [
              '$\\frac{\\pi}{2} - 1$',
              '$\\frac{\\pi}{2}$',
              '$1$',
              '$\\frac{\\pi}{2} + 1$'
            ],
            correctAnswer: 0,
            explanation: '$u = x$, $dv = \\cos x\\,dx \\Rightarrow v = \\sin x$. $[x\\sin x]_0^{\\pi/2} - \\int_0^{\\pi/2}\\sin x\\,dx = \\frac{\\pi}{2} - [-\\cos x]_0^{\\pi/2} = \\frac{\\pi}{2} - (0 - (-1)) = \\frac{\\pi}{2} - 1$.'
          }
        ]
      }
    },
    {
      id: 'ibp4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Step-by-Step Evaluation**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\int_0^2 x e^{-x}\\,dx$, with $u = x$ and $v = -e^{-x}$, the $[uv]_0^2$ term equals:',
            options: ['$-2e^{-2}$', '$2e^{-2}$', '$-2e^{-2} - 0$', '$2e^{-2} + 0$'],
            correctAnswers: ['$-2e^{-2}$'],
            hints: ['$[x \\cdot (-e^{-x})]_0^2 = (-2e^{-2}) - (0 \\cdot (-1))$.'],
            explanation: '$[uv]_0^2 = [-xe^{-x}]_0^2 = -2e^{-2} - 0 = -2e^{-2}$.'
          },
          {
            label: 'Continuing: $\\int_0^2 xe^{-x}\\,dx = -2e^{-2} - \\int_0^2 (-e^{-x})\\,dx$. The final answer simplifies to:',
            options: ['$1 - 3e^{-2}$', '$-1 + 3e^{-2}$', '$1 + 2e^{-2}$', '$2 - 3e^{-2}$'],
            correctAnswers: ['$1 - 3e^{-2}$'],
            hints: ['$\\int_0^2 e^{-x}\\,dx = [-e^{-x}]_0^2 = -e^{-2} + 1 = 1 - e^{-2}$.'],
            explanation: '$-2e^{-2} + (1 - e^{-2}) = 1 - 3e^{-2}$.'
          }
        ]
      }
    },
    {
      id: 'ibp4-input',
      type: 'input-box' as const,
      content: '**Exact Computation**',
      exercise: {
        question: 'Evaluate $\\int_0^{\\pi} x\\sin x\\,dx + \\int_0^1 xe^x\\,dx$. Each integral is an integer. What is the sum?',
        correctAnswer: '4.14',
        acceptableAnswers: ['pi + 1', '\u03C0 + 1', 'pi+1'],
        hints: ['$\\int_0^{\\pi} x\\sin x\\,dx = \\pi$ (computed above).', '$\\int_0^1 xe^x\\,dx = 1$ (computed above).', 'Sum = $\\pi + 1$.'],
        explanation: '$\\pi + 1 \\approx 4.14$. Both are classic definite IBP results.'
      }
    },
    {
      id: 'ibp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

| Integral | Value |
|----------|-------|
| $\\int_0^1 xe^x\\,dx$ | $1$ |
| $\\int_1^e \\ln x\\,dx$ | $1$ |
| $\\int_0^{\\pi} x\\sin x\\,dx$ | $\\pi$ |
| $\\int_1^e (\\ln x)^2\\,dx$ | $e - 2$ |

> **Key Fact:** Many definite IBP integrals yield surprisingly clean answers. Always simplify fully before reporting your answer.

> **Coming Up:** Part 5 covers **special cases** including inverse trig and logarithmic IBP integrals.`
    }
  ]
};
