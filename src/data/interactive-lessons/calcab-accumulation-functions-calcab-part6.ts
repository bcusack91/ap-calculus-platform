export const calcabAccumulationPart6Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc6-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 6 of 7 — Problem-Solving Workshop**

### Graph-to-Accumulation Strategy

Given a graph of $f$ and $g(x) = \\int_a^x f(t)\\,dt$:

| Step | What to Find | How |
|:---:|:---:|:---:|
| 1 | $g(c)$ for specific $c$ | Compute signed area from $a$ to $c$ |
| 2 | $g'(x)$ | Equals $f(x)$ by FTC |
| 3 | $g$ increasing/decreasing | Where $f > 0$ / $f < 0$ |
| 4 | Local max/min of $g$ | Where $f$ changes sign |
| 5 | $g''(x)$ | Equals $f'(x)$ (slope of $f$) |
| 6 | Concavity of $g$ | Where $f$ is increasing/decreasing |
| 7 | Inflection points of $g$ | Where $f$ has local extrema |

> **Key Fact:** Every property of $g$ is read from $f$ — you never need to find a formula for $g$.`
    },
    {
      id: 'acc6-worked1',
      type: 'text' as const,
      content: `### Worked Example: Piecewise Linear Graph

Suppose $f$ is piecewise linear with vertices at $(0,0)$, $(2,4)$, $(5,4)$, $(7,0)$, $(9,-2)$, and $g(x) = \\int_0^x f(t)\\,dt$.

**Computing $g$ values using geometric areas:**

| $x$ | Shape from previous to $x$ | Area | $g(x)$ (running total) |
|:---:|:---:|:---:|:---:|
| $0$ | — | — | $0$ |
| $2$ | Triangle: $\\frac{1}{2}(2)(4)$ | $+4$ | $4$ |
| $5$ | Rectangle: $3 \\times 4$ | $+12$ | $16$ |
| $7$ | Triangle: $\\frac{1}{2}(2)(4)$ | $+4$ | $20$ |
| $9$ | Triangle: $\\frac{1}{2}(2)(-2)$ | $-2$ | $18$ |

**Analysis of $g$:**

| Property | Answer | Reasoning |
|:---:|:---:|:---:|
| $g$ increasing | $(0, 7)$ | $f > 0$ on $(0,7)$ |
| $g$ decreasing | $(7, 9)$ | $f < 0$ on $(7,9)$ |
| Absolute max of $g$ | $x = 7$, $g(7)=20$ | $f$ changes from $+$ to $-$ |
| $g$ concave up | $(0, 2)$ | $f$ increasing (slope $> 0$) |
| $g$ concave down | $(2, 5)$? No, $f$ constant on $(2,5)$ | $f'=0$, so $g$ is linear there |
| Inflection points | $x=2, 5, 7$ | $f$ changes from increasing to constant, etc. |`
    },
    {
      id: 'acc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Graph Analysis Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Let $g(x) = \\int_0^x f(t)\\,dt$ where $f$ has a local maximum at $x=3$. At $x=3$, $g$ has:',
            options: ['A local maximum', 'A local minimum', 'An inflection point', 'Cannot determine without more information'],
            correctAnswer: 2,
            explanation: '$g\'\'(x) = f\'(x)$. Local max of $f$ means $f\'$ changes from $+$ to $-$, so $g\'\'$ changes sign: inflection point of $g$.'
          },
          {
            question: 'If $f(x) > 0$ for all $x$ in $(a,b)$ and $g(x) = \\int_a^x f(t)\\,dt$, then on $(a,b)$:',
            options: ['$g$ is positive and increasing', '$g$ is increasing (but may start at 0)', '$g$ is concave up', '$g$ is decreasing'],
            correctAnswer: 1,
            explanation: '$g\'(x) = f(x) > 0$, so $g$ is increasing. $g(a) = 0$, so $g$ starts at $0$ and increases.'
          },
          {
            question: 'If $f$ is linear with positive slope on $[a,b]$, then $g(x) = \\int_a^x f(t)\\,dt$ is:',
            options: ['Linear', 'Quadratic and concave up', 'Quadratic and concave down', 'Cubic'],
            correctAnswer: 1,
            explanation: '$f$ linear ($f\'$ = positive constant) means $g\'\'(x) = f\'(x) > 0$, so $g$ is concave up. Integrating a linear function gives a quadratic.'
          }
        ]
      }
    },
    {
      id: 'acc6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Combined Topics** 🎯',
      exercise: {
        questions: [
          {
            question: 'The average value of $f$ on $[0,6]$ is $5$. Then $\\int_0^6 f(x)\\,dx =$',
            options: ['$5$', '$30$', '$\\frac{5}{6}$', '$\\frac{6}{5}$'],
            correctAnswer: 1,
            explanation: '$f_{avg} = \\frac{1}{6}\\int_0^6 f\\,dx = 5$, so $\\int_0^6 f\\,dx = 30$.'
          },
          {
            question: '$\\frac{d}{dx}\\int_0^{x^3} \\cos(t)\\,dt =$',
            options: ['$\\cos(x^3)$', '$3x^2\\cos(x^3)$', '$\\sin(x^3) \\cdot 3x^2$', '$-\\sin(x^3) \\cdot 3x^2$'],
            correctAnswer: 1,
            explanation: 'By FTC + chain rule: $\\cos(x^3) \\cdot 3x^2$.'
          }
        ]
      }
    },
    {
      id: 'acc6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the correct analysis.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$g(x) = \\int_0^x f(t)\\,dt$. If $f(3) = 0$ and $f$ changes from positive to negative at $x=3$:',
            options: ['$g$ has a local max at $x=3$', '$g$ has a local min at $x=3$', '$g$ has an inflection point at $x=3$', '$g(3) = 0$'],
            correctAnswers: ['$g$ has a local max at $x=3$'],
            hints: ['$g\' = f$ changes from $+$ to $-$: that is a local max of $g$.'],
            explanation: '$g\'(3)=f(3)=0$ and $g\'$ changes from $+$ to $-$, giving a local max.'
          },
          {
            label: 'If $f$ is constant ($f(t) = k$), then $g(x) = \\int_0^x k\\,dt$ is:',
            options: ['Constant', 'Linear: $g(x) = kx$', 'Quadratic', 'Exponential'],
            correctAnswers: ['Linear: $g(x) = kx$'],
            hints: ['Integral of a constant is a linear function.'],
            explanation: '$g(x) = kx$, which is linear with slope $k$.'
          },
          {
            label: 'Net change from a rate table: $R(t)$ at $t=0,2,4,6$ is $3,5,4,1$. Best approximation of $\\int_0^6 R(t)\\,dt$ using trapezoids:',
            options: ['$12$', '$22$', '$24$', '$26$'],
            correctAnswers: ['$22$'],
            hints: ['Trapezoidal: $\\frac{\\Delta t}{2}[R_0 + 2R_1 + 2R_2 + R_3]$.'],
            explanation: '$\\frac{2}{2}(3+2(5)+2(4)+1) = 1 \\cdot 22 = 22$.'
          }
        ]
      }
    },
    {
      id: 'acc6-input',
      type: 'input-box' as const,
      content: '**Compute from a graph.** ✍️',
      exercise: {
        question: '$f$ is piecewise linear: $(0,2)$ to $(3,2)$ to $(5,-2)$ to $(7,-2)$. If $g(x)=\\int_0^x f(t)\\,dt$, find $g(7)$.\n\n(Enter an integer.)',
        correctAnswer: '2',
        acceptableAnswers: ['2'],
        hints: [
          '$[0,3]$: rectangle $3 \\times 2 = 6$.',
          '$[3,5]$: trapezoid $\\frac{1}{2}(2)(2+(-2)) = 0$.',
          '$[5,7]$: rectangle $2 \\times (-2) = -4$. Total: $6+0+(-4)$.'
        ],
        explanation: '$g(7) = 6 + 0 + (-4) = 2$. Rectangle + trapezoid + rectangle (negative).'
      }
    },
    {
      id: 'acc6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| To find... | Look at... |
|:---:|:---:|
| $g(c)$ | Signed area of $f$ from $a$ to $c$ |
| $g$ increasing/decreasing | Sign of $f$ |
| Local extrema of $g$ | Sign changes of $f$ |
| Concavity of $g$ | Increasing/decreasing behavior of $f$ |
| Inflection points of $g$ | Local extrema of $f$ |

> **Up Next:** Part 7 — Comprehensive Assessment.`
    }
  ]
};
