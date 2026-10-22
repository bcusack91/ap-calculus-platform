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
      figure: {
        svg: '<svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="0.75"><line x1="70" y1="50" x2="70" y2="210"/><line x1="100" y1="50" x2="100" y2="210"/><line x1="130" y1="50" x2="130" y2="210"/><line x1="160" y1="50" x2="160" y2="210"/><line x1="190" y1="50" x2="190" y2="210"/><line x1="220" y1="50" x2="220" y2="210"/><line x1="250" y1="50" x2="250" y2="210"/><line x1="280" y1="50" x2="280" y2="210"/><line x1="310" y1="50" x2="310" y2="210"/><line x1="40" y1="210" x2="310" y2="210"/><line x1="40" y1="190" x2="310" y2="190"/><line x1="40" y1="150" x2="310" y2="150"/><line x1="40" y1="130" x2="310" y2="130"/><line x1="40" y1="110" x2="310" y2="110"/><line x1="40" y1="90" x2="310" y2="90"/><line x1="40" y1="70" x2="310" y2="70"/><line x1="40" y1="50" x2="310" y2="50"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="170" x2="325" y2="170"/><line x1="40" y1="225" x2="40" y2="30"/></g><text x="322" y="164" font-size="12" fill="currentColor">x</text><text x="46" y="36" font-size="12" fill="currentColor">y</text><text x="130" y="185" font-size="11" fill="currentColor" text-anchor="middle">3</text><text x="220" y="185" font-size="11" fill="currentColor" text-anchor="middle">6</text><text x="310" y="185" font-size="11" fill="currentColor" text-anchor="middle">9</text><text x="254" y="164" font-size="11" fill="currentColor" text-anchor="middle">7</text><text x="32" y="54" font-size="11" fill="currentColor" text-anchor="end">6</text><text x="32" y="94" font-size="11" fill="currentColor" text-anchor="end">4</text><text x="32" y="134" font-size="11" fill="currentColor" text-anchor="end">2</text><text x="32" y="214" font-size="11" fill="currentColor" text-anchor="end">-2</text><g class="fig-accent"><polyline points="40,170 130,50 250,210 310,170" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="40" cy="170" r="3.5" fill="currentColor"/><circle cx="130" cy="50" r="3.5" fill="currentColor"/><circle cx="250" cy="210" r="3.5" fill="currentColor"/><circle cx="310" cy="170" r="3.5" fill="currentColor"/></g><text x="130" y="42" font-size="11" fill="currentColor" text-anchor="middle">(3, 6)</text><text x="250" y="226" font-size="11" fill="currentColor" text-anchor="middle">(7, -2)</text></svg>',
        alt: 'Graph of y = f(x) on [0, 9]: line segments from (0, 0) up to (3, 6), down through (6, 0) to (7, -2), and back up to (9, 0). The graph is above the x-axis on (0, 6) and below it on (6, 9).',
        caption: 'The graph of $f$. Its vertices are $(0,0)$, $(3,6)$, $(7,-2)$ and $(9,0)$.',
      },
      content: `### Worked Example: Piecewise Linear Graph

Suppose $f$ is piecewise linear on $[0, 9]$ with vertices at $(0,0)$, $(3,6)$, $(7,-2)$ and $(9,0)$, and $g(x) = \\int_0^x f(t)\\,dt$.

The segment from $(3,6)$ to $(7,-2)$ has slope $-2$, so it crosses the axis at $x = 6$: $f(6) = 0$.

**Computing $g$ values using geometric areas:**

| $x$ | Shape from previous to $x$ | Area | $g(x)$ (running total) |
|:---:|:---:|:---:|:---:|
| $0$ | — | — | $0$ |
| $3$ | Triangle: $\\frac{1}{2}(3)(6)$ | $+9$ | $9$ |
| $6$ | Triangle: $\\frac{1}{2}(3)(6)$ | $+9$ | $18$ |
| $7$ | Triangle below the axis: $\\frac{1}{2}(1)(2)$ | $-1$ | $17$ |
| $9$ | Triangle below the axis: $\\frac{1}{2}(2)(2)$ | $-2$ | $15$ |

**Analysis of $g$:**

| Property | Answer | Reasoning |
|:---:|:---:|:---:|
| $g$ increasing | $(0, 6)$ | $g' = f > 0$ on $(0, 6)$ |
| $g$ decreasing | $(6, 9)$ | $g' = f < 0$ on $(6, 9)$ |
| Absolute max of $g$ | $g(6) = 18$ | $f$ changes from $+$ to $-$ at $x = 6$; candidates $g(0) = 0$, $g(9) = 15$ are smaller |
| Absolute min of $g$ | $g(0) = 0$ | Smallest of the candidates $0$, $18$, $15$ |
| $g$ concave up | $(0, 3)$ and $(7, 9)$ | $g'' = f'$: $f$ is increasing there |
| $g$ concave down | $(3, 7)$ | $g'' = f'$: $f$ is decreasing there |
| Inflection points of $g$ | $x = 3$ and $x = 7$ | $f'$ changes sign: $f$ has a local max at 3 and a local min at 7 |

> **Watch out:** An inflection point of $g$ needs a sign change of $g'' = f'$. If $f$ had a flat (constant) segment, $g$ would be linear there, and the endpoints of that segment would not automatically be inflection points.`
    },
    {
      id: 'acc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Graph Analysis Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Let $g(x) = \\int_0^x f(t)\\,dt$ where $f$ has a local maximum at $x=3$. At $x=3$, $g$ has:',
            options: ['A local maximum', 'A local minimum', 'An inflection point', 'A critical point'],
            correctAnswer: 2,
            explanation: '$g\'\'(x) = f\'(x)$. Local max of $f$ means $f\'$ changes from $+$ to $-$, so $g\'\'$ changes sign: inflection point of $g$. $g$ has a critical point only where $f = 0$, which a local max of $f$ does not guarantee.'
          },
          {
            question: 'If $f(x) > 0$ for all $x$ in $(a,b)$ and $g(x) = \\int_a^x f(t)\\,dt$, then on $(a,b)$:',
            options: ['$g$ is concave up', '$g$ is increasing', '$g$ has a maximum in $(a,b)$', '$g$ is decreasing'],
            correctAnswer: 1,
            explanation: '$g\'(x) = f(x) > 0$, so $g$ is increasing (starting from $g(a) = 0$). Concavity depends on $f\'$, which is not given, and an increasing function has no maximum inside the open interval.'
          },
          {
            question: 'If $f$ is linear with positive slope on $[a,b]$, then $g(x) = \\int_a^x f(t)\\,dt$ is:',
            options: ['Linear with positive slope', 'Quadratic and concave up', 'Quadratic and concave down', 'Cubic with an inflection point'],
            correctAnswer: 1,
            explanation: '$f$ linear ($f\'$ = positive constant) means $g\'\'(x) = f\'(x) > 0$, so $g$ is concave up. Integrating a linear function raises the degree by one, giving a quadratic, not a linear or cubic function.'
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
            options: ['$\\cos(x^3) - \\cos(0)$', '$3x^2\\cos(x^3)$', '$\\sin(x^3) \\cdot 3x^2$', '$-\\sin(x^3) \\cdot 3x^2$'],
            correctAnswer: 1,
            explanation: 'By FTC + chain rule: $\\cos(x^3) \\cdot 3x^2$. The lower limit is a constant, so nothing is subtracted, and $\\sin(x^3) \\cdot 3x^2$ uses the antiderivative instead of the integrand.'
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
            options: ['Constant: $g(x) = k$', 'Linear: $g(x) = kx$', 'Quadratic: $g(x) = \\frac{k}{2}x^2$', 'Exponential: $g(x) = e^{kx}$'],
            correctAnswers: ['Linear: $g(x) = kx$'],
            hints: ['Integral of a constant is a linear function.'],
            explanation: '$g(x) = kx$, which is linear with slope $k$.'
          },
          {
            label: 'Net change from a rate table: $R(t)$ at $t=0,2,4,6$ is $3,5,4,1$. Best approximation of $\\int_0^6 R(t)\\,dt$ using trapezoids:',
            options: ['$13$', '$22$', '$24$', '$26$'],
            correctAnswers: ['$22$'],
            hints: ['Trapezoidal: $\\frac{\\Delta t}{2}[R_0 + 2R_1 + 2R_2 + R_3]$.'],
            explanation: '$\\frac{2}{2}\\big(3+2(5)+2(4)+1\\big) = 1 \\cdot 22 = 22$. Interior values are counted twice because each one is shared by two trapezoids.'
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
