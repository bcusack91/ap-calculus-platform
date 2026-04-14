export const calcabIntAppsPart6Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia6-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 6 of 7 \u2014 Problem-Solving Workshop**

### Integration Application Decision Guide

| Given | Method |
|:---:|:---:|
| Two curves, find area | $\\int [\\text{top}-\\text{bottom}]dx$ |
| Region + cross-section shape | $\\int A(x)\\,dx$ with shape formula |
| Rotation about axis, one boundary | Disk: $\\pi\\int R^2\\,dx$ |
| Rotation about axis, two boundaries | Washer: $\\pi\\int(R^2-r^2)dx$ |
| Table of values | Riemann sum or trapezoidal rule |
| Rate function | Net change: $\\int_a^b f'(t)\\,dt$ |
| Rate in / rate out | $Q_0 + \\int(R_{in}-R_{out})dt$ |

> **Key Fact:** The first step is always identifying the problem type. The correct setup determines 90% of your score.`
    },
    {
      id: 'ia6-worked',
      type: 'text' as const,
      content: `### AP-Style Worked Problem

Region $R$ is bounded by $y = 4-x^2$ and $y = 0$.

**(a) Find the area of $R$.**

$A = \\int_{-2}^{2}(4-x^2)dx = [4x-\\frac{x^3}{3}]_{-2}^{2} = \\frac{32}{3}$

**(b) Cross sections perpendicular to $x$-axis are squares. Find volume.**

$s = 4-x^2$. $V = \\int_{-2}^{2}(4-x^2)^2 dx$

$= \\int_{-2}^{2}(16-8x^2+x^4)dx = 2[16x-\\frac{8x^3}{3}+\\frac{x^5}{5}]_0^2$

$= 2(32-\\frac{64}{3}+\\frac{32}{5}) = 2 \\cdot \\frac{480-320+96}{15} = \\frac{512}{15}$

**(c) Rotate $R$ about the $x$-axis. Find volume.**

$V = \\pi\\int_{-2}^{2}(4-x^2)^2 dx = \\frac{512\\pi}{15}$

> **AP Tip:** Parts (b) and (c) have the same integral! Cross sections \u2192 no $\\pi$. Revolution \u2192 multiply by $\\pi$.`
    },
    {
      id: 'ia6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Applications** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Region between $y = x$ and $y = x^2$ on $[0,1]$. Semicircular cross sections with diameter from $y=x^2$ to $y=x$. Volume:',
            options: ['$\\frac{\\pi}{8}\\int_0^1(x-x^2)^2 dx = \\frac{\\pi}{240}$', '$\\pi\\int_0^1(x-x^2)^2 dx$', '$\\int_0^1(x-x^2)^2 dx$', '$\\frac{\\pi}{2}\\int_0^1(x-x^2)^2dx$'],
            correctAnswer: 0,
            explanation: 'Diameter $= x-x^2$. Semicircle area $= \\frac{\\pi}{8}d^2 = \\frac{\\pi}{8}(x-x^2)^2$. $V = \\frac{\\pi}{8} \\cdot \\frac{1}{30} = \\frac{\\pi}{240}$.'
          },
          {
            question: 'For $f(0)=1, f(1)=4, f(2)=3, f(3)=6$, the right Riemann sum with $\\Delta x=1$ is:',
            options: ['$13$', '$8$', '$14$', '$10$'],
            correctAnswer: 0,
            explanation: '$R_3 = f(1)+f(2)+f(3) = 4+3+6 = 13$.'
          },
          {
            question: 'Rotate $y = 3$ and $y = x^2-1$ about $y = -2$. The outer radius at $x=1$ is:',
            options: ['$5$', '$3$', '$4$', '$2$'],
            correctAnswer: 0,
            explanation: 'Outer: distance from $y=3$ to $y=-2$: $|3-(-2)| = 5$.'
          }
        ]
      }
    },
    {
      id: 'ia6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the right setup.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'The base of a solid is a circle of radius 3. Cross sections perpendicular to a diameter are equilateral triangles. The volume integral is:',
            options: ['$\\int_{-3}^{3} \\frac{\\sqrt{3}}{4}(2\\sqrt{9-x^2})^2 dx$', '$\\int_{-3}^{3} (2\\sqrt{9-x^2})^2 dx$', '$\\pi\\int_{-3}^{3} (9-x^2) dx$', '$\\int_{-3}^{3} \\sqrt{9-x^2}\\,dx$'],
            correctAnswers: ['$\\int_{-3}^{3} \\frac{\\sqrt{3}}{4}(2\\sqrt{9-x^2})^2 dx$'],
            hints: ['Side $= 2\\sqrt{9-x^2}$. Equilateral triangle area $= \\frac{\\sqrt{3}}{4}s^2$.'],
            explanation: '$s = 2\\sqrt{9-x^2}$. $A = \\frac{\\sqrt{3}}{4}\\cdot 4(9-x^2) = \\sqrt{3}(9-x^2)$.'
          },
          {
            label: '$f(0)=2, f(3)=5, f(6)=3$ with $\\Delta x = 3$. Trapezoidal approximation:',
            options: ['$\\frac{3}{2}(2+2(5)+3) = 22.5$', '$\\frac{3}{2}(2+2\\cdot5+3)$', '$3(2+5+3) = 30$', '$\\frac{6}{2}(2+2(5)+3) = 45$'],
            correctAnswers: ['$\\frac{3}{2}(2+2\\cdot5+3)$'],
            hints: ['$T = \\frac{\\Delta x}{2}[f_0+2f_1+f_2] = \\frac{3}{2}(2+10+3)$.'],
            explanation: '$\\frac{3}{2}(2+10+3) = \\frac{3}{2}(15) = 22.5$.'
          },
          {
            label: 'A particle\u2019s velocity is always positive on $[0,5]$. Then displacement equals:',
            options: ['Total distance', 'Zero', 'Negative of distance', 'Half the distance'],
            correctAnswers: ['Total distance'],
            hints: ['If $v > 0$ always, then $|v| = v$.'],
            explanation: 'When $v(t) > 0$ throughout, $\\int v\\,dt = \\int|v|\\,dt$: displacement = total distance.'
          }
        ]
      }
    },
    {
      id: 'ia6-input',
      type: 'input-box' as const,
      content: '**Mixed problem.** \u270d\ufe0f',
      exercise: {
        question: 'Region between $y = x$ and $y = 0$ from $x=0$ to $x=3$. Square cross sections perpendicular to $x$-axis. Volume:\n\n(Enter an integer.)',
        correctAnswer: '9',
        acceptableAnswers: ['9'],
        hints: [
          'Side $= x$. Area $= x^2$.',
          '$V = \\int_0^3 x^2\\,dx$.',
          '$[\\frac{x^3}{3}]_0^3 = 9$.'
        ],
        explanation: '$V = \\int_0^3 x^2\\,dx = [x^3/3]_0^3 = 9$.'
      }
    },
    {
      id: 'ia6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

| Problem Type | Key Setup |
|:---:|:---:|
| Area | $\\int(\\text{top}-\\text{bottom})$ |
| Cross-section | $\\int A(x)\\,dx$ |
| Revolution | $\\pi\\int R^2$ or $\\pi\\int(R^2-r^2)$ |
| Table data | Riemann sums or trapezoidal |
| Rates | $\\int f'(t)\\,dt = f(b)-f(a)$ |

> **Up Next:** Part 7 \u2014 Comprehensive Assessment.`
    }
  ]
};
