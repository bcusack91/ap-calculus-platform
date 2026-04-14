export const calcabAreaCurvesPart2Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area2-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 2 of 7 \u2014 When Curves Cross**

### Splitting the Integral

When curves **switch** which is on top, you **must** split the integral at crossing points:

$$\\boxed{A = \\int_a^c [f(x)-g(x)]\\,dx + \\int_c^b [g(x)-f(x)]\\,dx}$$

> **Key Fact:** If you integrate without splitting, positive and negative areas cancel, giving the **signed** area (net area), not the **total** area.

### How to Spot a Split

| Clue | What to Do |
|:---:|:---:|
| Curves cross inside $[a,b]$ | Find crossing point(s), split there |
| Function changes sign | Split where $f(x) = 0$ |
| Graph shows intersection | Use given $x$-value as split point |

### Worked Example

> Find the area between $y = x^3$ and $y = x$ on $[-1, 1]$.

**Intersections:** $x^3 = x \\Rightarrow x(x^2-1)=0 \\Rightarrow x = -1, 0, 1$

| Interval | Test point | Top curve |
|:---:|:---:|:---:|
| $[-1, 0]$ | $x = -0.5$: $-0.125 > -0.5$ | $y = x^3$ |
| $[0, 1]$ | $x = 0.5$: $0.5 > 0.125$ | $y = x$ |

$$A = \\int_{-1}^{0}(x^3-x)\\,dx + \\int_0^1(x-x^3)\\,dx$$

$$= \\left[\\frac{x^4}{4}-\\frac{x^2}{2}\\right]_{-1}^0 + \\left[\\frac{x^2}{2}-\\frac{x^4}{4}\\right]_0^1 = \\frac{1}{4} + \\frac{1}{4} = \\boxed{\\frac{1}{2}}$$

> **AP Tip:** The AP exam loves problems where curves cross. Always check whether the "top" and "bottom" switch within the interval.`
    },
    {
      id: 'area2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Splitting Integrals** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find area between $y = x^2-1$ and $y = -x^2+1$ on $[-1,1]$.',
            options: ['$\\frac{8}{3}$', '$\\frac{4}{3}$', '$0$', '$4$'],
            correctAnswer: 0,
            explanation: '$-x^2+1 \\geq x^2-1$ on $[-1,1]$ (no crossing inside). $A = \\int_{-1}^1(2-2x^2)\\,dx = 2[2x-\\frac{2x^3}{3}]_0^1 = 2 \\cdot \\frac{4}{3} = \\frac{8}{3}$.'
          },
          {
            question: '$\\int_0^{2\\pi}\\sin x\\,dx = 0$. The total area between $\\sin x$ and the $x$-axis on $[0, 2\\pi]$ is:',
            options: ['$4$', '$0$', '$2$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: 'Split at $\\pi$: $\\int_0^{\\pi}\\sin x\\,dx + \\int_{\\pi}^{2\\pi}(-\\sin x)\\,dx = 2 + 2 = 4$.'
          },
          {
            question: 'Curves $f$ and $g$ cross at $x=3$. On $[0,5]$, $f > g$ on $[0,3)$ and $g > f$ on $(3,5]$. Which setup is correct?',
            options: ['$\\int_0^3(f-g)\\,dx + \\int_3^5(g-f)\\,dx$', '$\\int_0^5(f-g)\\,dx$', '$\\int_0^5|f+g|\\,dx$', '$\\int_0^3(g-f)\\,dx + \\int_3^5(f-g)\\,dx$'],
            correctAnswer: 0,
            explanation: 'Split at crossing point. Top minus bottom on each subinterval.'
          }
        ]
      }
    },
    {
      id: 'area2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the strategy.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$y = x^2 - 4x$ and $y = 0$ on $[0, 5]$. How many sub-regions?',
            options: ['2', '1', '3', '4'],
            correctAnswers: ['2'],
            hints: ['$x^2-4x = 0$ at $x = 0$ and $x = 4$. The parabola is negative on $(0,4)$ and positive on $(4,5)$.'],
            explanation: 'Two regions: $[0,4]$ where the curve is below the $x$-axis, and $[4,5]$ where it is above.'
          },
          {
            label: 'Net (signed) area of $\\sin x$ on $[0, 2\\pi]$ is $0$. This means:',
            options: ['Positive and negative areas cancel', 'The function is zero everywhere', 'The total area is zero', 'There is no area'],
            correctAnswers: ['Positive and negative areas cancel'],
            hints: ['Signed area allows cancellation; total area uses absolute value.'],
            explanation: '$\\int_0^{\\pi}\\sin x\\,dx = 2$ and $\\int_{\\pi}^{2\\pi}\\sin x\\,dx = -2$. They cancel to $0$.'
          },
          {
            label: 'If $f(x)-g(x)$ changes sign at $x = c$, you must:',
            options: ['Split the integral at $x = c$', 'Ignore the sign change', 'Use only $\\int_a^b f\\,dx$', 'Set up as $\\int_a^b[f \\cdot g]\\,dx$'],
            correctAnswers: ['Split the integral at $x = c$'],
            hints: ['Without splitting, positive and negative areas cancel.'],
            explanation: 'Split to ensure each piece gives positive area.'
          }
        ]
      }
    },
    {
      id: 'area2-input',
      type: 'input-box' as const,
      content: '**Calculate.** \u270d\ufe0f',
      exercise: {
        question: 'Find the total area between $y = x^3 - 4x$ and the $x$-axis on $[-2, 2]$.\n\n$A = ?$ (Enter an integer.)',
        correctAnswer: '8',
        acceptableAnswers: ['8'],
        hints: [
          'Roots: $x(x^2-4) = 0 \\Rightarrow x = -2, 0, 2$.',
          'On $[-2,0]$: $x^3-4x \\geq 0$ (test $x=-1$: $-1+4=3$). On $[0,2]$: $x^3-4x \\leq 0$.',
          '$A = \\int_{-2}^0(x^3-4x)\\,dx + \\int_0^2(4x-x^3)\\,dx$.',
          'Each integral $= [\\frac{x^4}{4}-2x^2]_{-2}^0 = 0-(4-8) = 4$. Total $= 4+4$.'
        ],
        explanation: '$A = 4 + 4 = 8$.'
      }
    },
    {
      id: 'area2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- When curves cross, **split** the integral at each crossing point
- Signed area allows cancellation; **total** area does not
- Always use |top \u2212 bottom| on each subinterval
- Test a point in each subinterval to determine which curve is on top`
    }
  ]
};
