export const calcabAccumulationPart7Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc7-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 7 of 7 — Comprehensive Assessment**

### Complete Formula Reference

| Formula | Expression |
|:---:|:---:|
| Accumulation function | $g(x) = \\int_a^x f(t)\\,dt$ |
| FTC Part 1 | $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$ |
| FTC + Chain Rule | $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x))g'(x)$ |
| Net change | $\\int_a^b f'(t)\\,dt = f(b)-f(a)$ |
| Displacement | $\\int_a^b v(t)\\,dt$ |
| Total distance | $\\int_a^b |v(t)|\\,dt$ |
| Average value | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |
| MVT for Integrals | $\\exists\\,c: f(c) = f_{avg}$ |

### Top AP Mistakes

| Mistake | Correction |
|:---:|:---:|
| Forgetting chain rule in FTC | $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)$ |
| Confusing displacement and distance | Distance uses $|v(t)|$ inside the integral |
| Wrong sign for lower-limit variable | $\\frac{d}{dx}\\int_x^b = -f(x)$ |
| Forgetting $\\frac{1}{b-a}$ in average value | Average = $\\frac{\\text{integral}}{\\text{interval length}}$ |
| Assuming $g(a) \\ne 0$ | $g(a) = \\int_a^a f(t)\\,dt = 0$ always |
| Reading $g$ from $f$ graph backwards | $g' = f$, not $g = f'$ |`
    },
    {
      id: 'acc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quiz — FTC & Chain Rule** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}\\int_3^{\\tan x} \\sqrt{1+t^4}\\,dt =$',
            options: ['$\\sqrt{1+\\tan^4 x}$', '$\\sqrt{1+\\tan^4 x} \\cdot \\sec^2 x$', '$\\sqrt{1+\\tan^4 x} - \\sqrt{82}$', '$\\sqrt{1+x^4} \\cdot \\sec^2 x$'],
            correctAnswer: 1,
            explanation: 'FTC + chain rule: $f(\\tan x) \\cdot (\\tan x)\' = \\sqrt{1+\\tan^4 x} \\cdot \\sec^2 x$. The constant lower limit $3$ contributes nothing (so no $\\sqrt{82}$ is subtracted), and the integrand is evaluated at $\\tan x$, not at $x$.'
          },
          {
            question: 'If $g(x) = \\int_x^{x^2} e^{-t}\\,dt$, then $g\'(1) =$',
            options: ['$2e^{-1}$', '$e^{-1}$', '$3e^{-1}$', '$-e^{-1}$'],
            correctAnswer: 1,
            explanation: '$g\'(x) = e^{-x^2} \\cdot 2x - e^{-x} \\cdot 1$. $g\'(1) = 2e^{-1} - e^{-1} = e^{-1}$. Dropping the lower-limit term gives $2e^{-1}$, and adding it instead of subtracting gives $3e^{-1}$.'
          },
          {
            question: '$\\frac{d}{dx}\\int_{\\sin x}^{0} t^3\\,dt =$',
            options: ['$\\sin^3 x \\cdot \\cos x$', '$-\\sin^3 x \\cdot \\cos x$', '$-\\frac{\\sin^4 x}{4}$', '$\\cos^3 x$'],
            correctAnswer: 1,
            explanation: '$= -\\frac{d}{dx}\\int_0^{\\sin x} t^3\\,dt = -(\\sin^3 x)(\\cos x)$. Forgetting the sign flip gives $\\sin^3 x \\cdot \\cos x$, and $-\\frac{\\sin^4 x}{4}$ is the integral itself, not its derivative.'
          }
        ]
      }
    },
    {
      id: 'acc7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quiz — Net Change & Average Value** 🎯',
      exercise: {
        questions: [
          {
            question: 'A car has velocity $v(t)$. $\\int_0^{10} v(t)\\,dt = 50$ and $\\int_0^{10} |v(t)|\\,dt = 70$. The car traveled backward a total of:',
            options: ['$10$ units', '$20$ units', '$50$ units', '$60$ units'],
            correctAnswer: 0,
            explanation: '$F-B=50$ and $F+B=70$. So $2B=20$, $B=10$.'
          },
          {
            question: 'The average value of $f(x)=e^{2x}$ on $[0,1]$ is:',
            options: ['$\\frac{e^2-1}{2}$', '$e^2-1$', '$\\frac{e^2}{2}$', '$e-1$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{1}\\int_0^1 e^{2x}\\,dx = [\\frac{e^{2x}}{2}]_0^1 = \\frac{e^2-1}{2}$. Forgetting the lower-limit value gives $\\frac{e^2}{2}$, and dropping the $\\frac{1}{2}$ from the antiderivative gives $e^2 - 1$.'
          },
          {
            question: 'Water flows in at $5$ gal/min and out at $2+t$ gal/min. Starting with $100$ gal, the amount at $t=6$ is:',
            options: ['$118$', '$130$', '$82$', '$100$'],
            correctAnswer: 3,
            explanation: '$\\int_0^6(5-(2+t))dt = \\int_0^6(3-t)dt = [3t-\\frac{t^2}{2}]_0^6 = 18-18 = 0$. Amount $= 100+0=100$. Dropping the $-t$ term gives $100 + 18 = 118$, ignoring the outflow gives $100 + 30 = 130$, and subtracting $18$ gives $82$.'
          },
          {
            question: 'If $g(x) = \\int_0^x f(t)\\,dt$ and the graph of $f$ shows $f$ has a local minimum at $x=4$, then at $x=4$, $g$ has:',
            options: ['A local minimum', 'A local maximum', 'An inflection point', 'A critical point'],
            correctAnswer: 2,
            explanation: '$g\'\'(x) = f\'(x)$. Local min of $f$ means $f\'$ changes $-$ to $+$, so $g\'\'$ changes sign: inflection point. $g$ has a critical point only where $f = 0$, which a local min of $f$ does not guarantee.'
          }
        ]
      }
    },
    {
      id: 'acc7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each scenario.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$g(x) = \\int_0^x f(t)\\,dt$ where $f > 0$ and $f$ is decreasing on $(0,5)$. On this interval $g$ is:',
            options: ['Increasing and concave up', 'Increasing and concave down', 'Decreasing and concave up', 'Decreasing and concave down'],
            correctAnswers: ['Increasing and concave down'],
            hints: ['$f > 0$ means $g\' > 0$ (increasing). $f$ decreasing means $g\'\' = f\' < 0$ (concave down).'],
            explanation: '$g\' = f > 0$: increasing. $g\'\' = f\' < 0$: concave down.'
          },
          {
            label: 'A particle with $v(t) = t(t-4)$ on $[0,6]$ is farthest from its starting point at:',
            options: ['$t = 0$', '$t = 2$', '$t = 6$', '$t = 4$'],
            correctAnswers: ['$t = 4$'],
            hints: ['Compute $\\int_0^c v\\,dt$ at each critical point and endpoint. $v=0$ at $t=0,4$.'],
            explanation: 'Displacement $g(t) = \\int_0^t (\\tau^2 - 4\\tau)\\,d\\tau = \\frac{t^3}{3} - 2t^2$. Then $g(2) = -\\frac{16}{3}$, $g(4) = -\\frac{32}{3}$, and $g(6) = 0$ (back at the start). The particle moves left until $v$ changes sign at $t = 4$, so it is farthest from its start, $\\frac{32}{3}$ units to the left, at $t = 4$.'
          },
          {
            label: 'If $\\int_0^{10} R(t)\\,dt = 200$ where $R(t)$ is gallons/hour, the average rate is:',
            options: ['$200$ gal/hr', '$2000$ gal/hr', '$100$ gal/hr', '$20$ gal/hr'],
            correctAnswers: ['$20$ gal/hr'],
            hints: ['Average rate $= \\frac{1}{b-a}\\int_a^b R(t)\\,dt$.'],
            explanation: 'Average rate $= \\frac{1}{10-0}\\int_0^{10} R(t)\\,dt = \\frac{200}{10} = 20$ gal/hr.'
          }
        ]
      }
    },
    {
      id: 'acc7-input',
      type: 'input-box' as const,
      content: '**Final Challenge** ✍️',
      exercise: {
        question: 'Let $g(x) = \\int_0^x (6t^2 - 6t)\\,dt$. Find the value of $x > 0$ where $g$ has a local minimum.\n\n(Enter an integer.)',
        correctAnswer: '1',
        acceptableAnswers: ['1'],
        hints: [
          '$g\'(x) = 6x^2 - 6x = 6x(x-1)$.',
          'Critical points: $x = 0$ and $x = 1$.',
          'For $x > 0$: $g\'$ changes from negative ($0 < x < 1$) to positive ($x > 1$) at $x = 1$.'
        ],
        explanation: '$g\'(x) = 6x^2-6x = 6x(x-1) = 0$ at $x=0,1$. For $x \\in (0,1)$: $g\' < 0$. For $x > 1$: $g\' > 0$. So $g$ has a local min at $x=1$.'
      }
    },
    {
      id: 'acc7-summary',
      type: 'text' as const,
      content: `### Accumulation Functions — Complete!

You've mastered:

| Part | Topic |
|:---:|:---:|
| 1 | Accumulation function definition & FTC Part 1 |
| 2 | Graph interpretation & area computation |
| 3 | FTC with chain rule — all variations |
| 4 | Net change, displacement, rate in/out |
| 5 | Average value & MVT for integrals |
| 6 | Problem-solving workshop |
| 7 | Comprehensive assessment |

> **You're ready for AP-level accumulation function problems!**`
    }
  ]
};
