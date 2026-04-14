export const calcabDefiniteIntegralsPart2Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int2-intro',
      type: 'text' as const,
      content: `# ∫ Definite Integrals

**Part 2 of 7 — The Definite Integral**

### From Riemann Sums to Exact Area

The definite integral is the **limit of a Riemann sum** as $n \\to \\infty$:

$$\\boxed{\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x}$$

### Signed Area

| Region | Sign |
|:---:|:---:|
| Between curve and $x$-axis, curve ABOVE axis | **Positive** |
| Between curve and $x$-axis, curve BELOW axis | **Negative** |

$$\\boxed{\\text{Signed area} = \\int_a^b f(x)\\,dx \\qquad \\text{Total area} = \\int_a^b |f(x)|\\,dx}$$

> **Key Concept:** The definite integral gives **signed area**, not total area. The AP Exam tests this distinction frequently!`
    },
    {
      id: 'int2-geometric',
      type: 'text' as const,
      content: `### Geometric Evaluation

Some integrals can be evaluated using geometry instead of antiderivatives:

| Shape | Integral | Value |
|:---:|:---:|:---:|
| Rectangle | $\\int_0^3 5\\,dx$ | $5 \\times 3 = 15$ |
| Triangle | $\\int_0^4 2x\\,dx$ | $\\frac{1}{2}(4)(8) = 16$ |
| Trapezoid | $\\int_0^3 (2x+1)\\,dx$ | $\\frac{1}{2}(1+7)(3) = 12$ |
| Semicircle | $\\int_{-r}^{r} \\sqrt{r^2-x^2}\\,dx$ | $\\frac{\\pi r^2}{2}$ |

**Verify:** $\\int_0^3 (2x+1)\\,dx = [x^2 + x]_0^3 = 12$ ✓

### Worked Example — Semicircle

$\\int_{-3}^{3} \\sqrt{9-x^2}\\,dx$ = area of semicircle with $r = 3$ = $\\frac{9\\pi}{2}$

> **AP Tip:** If you see $\\sqrt{r^2 - x^2}$, think semicircle! No antiderivative needed.`
    },
    {
      id: 'int2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Definite Integral Concepts** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $\\int_0^5 f(x)\\,dx = 8$ and the area of the region below the $x$-axis on $[0,5]$ is $3$, what is the total area between $f$ and the $x$-axis?',
            options: ['$5$', '$8$', '$11$', '$14$'],
            correctAnswer: 3,
            explanation: 'Signed area: (area above) − (area below) = 8. So area above = 8 + 3 = 11. Total area = 11 + 3 = 14.'
          },
          {
            question: 'Evaluate $\\int_{-3}^{3} \\sqrt{9-x^2}\\,dx$.',
            options: ['$0$', '$9\\pi$', '$\\frac{9\\pi}{2}$', '$3\\pi$'],
            correctAnswer: 2,
            explanation: '$\\sqrt{9-x^2}$ is a semicircle with $r = 3$. Area = $\\frac{\\pi(3)^2}{2} = \\frac{9\\pi}{2}$.'
          },
          {
            question: 'Evaluate $\\int_0^6 |x - 3|\\,dx$ geometrically.',
            options: ['$0$', '$9$', '$18$', '$6$'],
            correctAnswer: 1,
            explanation: '$|x-3|$ forms a V-shape: two right triangles, each with base 3 and height 3. Total area = $2 \\times \\frac{1}{2}(3)(3) = 9$.'
          }
        ]
      }
    },
    {
      id: 'int2-symmetry',
      type: 'text' as const,
      content: `### Even and Odd Function Shortcuts

$$\\boxed{\\text{Odd: } \\int_{-a}^{a} f(x)\\,dx = 0 \\qquad \\text{Even: } \\int_{-a}^{a} f(x)\\,dx = 2\\int_0^a f(x)\\,dx}$$

| Type | Definition | Examples | Integral on $[-a, a]$ |
|:---:|:---:|:---:|:---:|
| Odd | $f(-x) = -f(x)$ | $x, x^3, \\sin x$ | $= 0$ |
| Even | $f(-x) = f(x)$ | $x^2, x^4, \\cos x, |x|$ | $= 2\\int_0^a f$ |

### Worked Example

$\\int_{-1}^{1} (x^4 + x^3)\\,dx$

Split: $\\underbrace{\\int_{-1}^1 x^4\\,dx}_{\\text{even}} + \\underbrace{\\int_{-1}^1 x^3\\,dx}_{\\text{odd}}$

$= 2\\int_0^1 x^4\\,dx + 0 = 2 \\cdot \\frac{1}{5} = \\frac{2}{5}$

> **AP Tip:** Check for symmetry BEFORE computing! It can save significant time on the exam.`
    },
    {
      id: 'int2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Evaluate Definite Integrals** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_{-2}^{2} x^3\\,dx$ without computing an antiderivative.',
            options: ['$0$', '$4$', '$8$', '$-8$'],
            correctAnswer: 0,
            explanation: '$x^3$ is odd, interval is symmetric about 0. $\\int_{-a}^a (\\text{odd})\\,dx = 0$.'
          },
          {
            question: 'Evaluate $\\int_1^4 (3x^2 - 2x + 1)\\,dx$.',
            options: ['$54$', '$48$', '$51$', '$42$'],
            correctAnswer: 2,
            explanation: '$[x^3 - x^2 + x]_1^4 = (64 - 16 + 4) - (1 - 1 + 1) = 52 - 1 = 51$.'
          },
          {
            question: 'Evaluate $\\int_0^{\\pi} \\sin x\\,dx$.',
            options: ['$0$', '$1$', '$2$', '$\\pi$'],
            correctAnswer: 2,
            explanation: '$[-\\cos x]_0^{\\pi} = -\\cos\\pi + \\cos 0 = 1 + 1 = 2$.'
          }
        ]
      }
    },
    {
      id: 'int2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Interpret each integral.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_{-2}^{2} x^5\\,dx$ equals:',
            options: ['0', 'Positive', 'Negative', 'Cannot determine'],
            correctAnswers: ['0'],
            hints: ['Is $x^5$ odd or even?'],
            explanation: '$x^5$ is odd, symmetric interval → integral = 0.'
          },
          {
            label: '$\\int_{-1}^{1} (x^2 + 1)\\,dx$ can be simplified to:',
            options: ['$0$', '$2\\int_0^1 (x^2+1)\\,dx$', '$\\int_0^1 (x^2+1)\\,dx$', 'Cannot simplify'],
            correctAnswers: ['$2\\int_0^1 (x^2+1)\\,dx$'],
            hints: ['$x^2+1$ is an even function (all even powers).'],
            explanation: 'Even function on symmetric interval: $= 2\\int_0^1 (x^2+1)\\,dx = 2(\\frac{1}{3}+1) = \\frac{8}{3}$.'
          },
          {
            label: '$\\int_0^4 (2-x)\\,dx$ represents:',
            options: ['Positive area only', 'Negative area only', 'Mix of positive and negative signed area', 'Zero'],
            correctAnswers: ['Mix of positive and negative signed area'],
            hints: ['Where does $2-x$ change sign on $[0,4]$?'],
            explanation: '$2-x > 0$ on $[0,2)$ and $2-x < 0$ on $(2,4]$. The integral has both positive and negative contributions.'
          }
        ]
      }
    },
    {
      id: 'int2-input',
      type: 'input-box' as const,
      content: '**Geometric Evaluation** ✍️',
      exercise: {
        question: 'Evaluate $\\int_{-4}^{4} \\sqrt{16-x^2}\\,dx$.\n\nGive your exact answer in terms of $\\pi$.\n\n(Enter as: 8pi, 16pi, etc.)',
        correctAnswer: '8pi',
        acceptableAnswers: ['8pi', '8π', '8 pi', '25.13'],
        hints: [
          'What shape does $y = \\sqrt{16-x^2}$ represent?',
          'This is the upper half of the circle $x^2 + y^2 = 16$, i.e., a semicircle with $r = 4$.',
          'Area of semicircle = $\\frac{\\pi r^2}{2} = \\frac{16\\pi}{2}$.'
        ],
        explanation: '$\\sqrt{16-x^2}$ is a semicircle with radius 4. Area $= \\frac{\\pi(4)^2}{2} = 8\\pi$.'
      }
    },
    {
      id: 'int2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Concept | Key Point |
|:---:|:---:|
| Definition | $\\int_a^b f\\,dx = \\lim_{n \\to \\infty} \\sum f(x_i^*)\\Delta x$ |
| Signed area | Above axis = +, below = − |
| Total area | $\\int |f(x)|\\,dx$ (absolute value) |
| Odd functions | Integral = 0 on symmetric intervals |
| Even functions | $2 \\times$ integral from 0 to $a$ |
| Geometry | Use triangles, trapezoids, semicircles |

> **Up Next:** Part 3 — Properties of Integrals.`
    }
  ]
};
