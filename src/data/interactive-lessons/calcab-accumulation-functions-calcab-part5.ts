export const calcabAccumulationPart5Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc5-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 5 of 7 — Average Value of a Function**

### Average Value Formula

$$\\boxed{f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx}$$

**Intuition:** The average value is the height of a rectangle with the same base $[a,b]$ that has the same area as the region under $f$.

| Discrete Average | Continuous Average |
|:---:|:---:|
| $\\frac{x_1+x_2+\\cdots+x_n}{n}$ | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |
| Sum divided by count | Integral divided by interval length |

> **Key Fact:** The factor $\\frac{1}{b-a}$ normalizes the integral. Without it, wider intervals would always give larger "averages."`
    },
    {
      id: 'acc5-mvt',
      type: 'text' as const,
      content: `### Mean Value Theorem for Integrals

$$\\boxed{\\text{If } f \\text{ is continuous on } [a,b], \\text{ then } \\exists\\, c \\in (a,b) \\text{ such that } f(c) = \\frac{1}{b-a}\\int_a^b f(x)\\,dx}$$

**Translation:** A continuous function hits its average value at least once.

### Worked Example

Find the average value of $f(x) = x^2$ on $[0, 3]$.

$$f_{\\text{avg}} = \\frac{1}{3-0}\\int_0^3 x^2\\,dx = \\frac{1}{3}\\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{1}{3} \\cdot 9 = 3$$

Find $c$ where $f(c) = 3$: $c^2 = 3 \\Rightarrow c = \\sqrt{3} \\approx 1.732$.

| Step | Computation |
|:---:|:---:|
| Set up | $\\frac{1}{3}\\int_0^3 x^2\\,dx$ |
| Evaluate integral | $\\frac{1}{3}\\cdot 9 = 3$ |
| Find $c$ | $c^2 = 3 \\Rightarrow c = \\sqrt{3}$ |
| Verify $c \\in (0,3)$ | $\\sqrt{3} \\approx 1.73$ ✓ |`
    },
    {
      id: 'acc5-variations',
      type: 'text' as const,
      content: `### Common Variations on AP Exams

| Problem Type | Setup |
|:---:|:---:|
| Average temperature over $[0, 12]$ hours | $\\frac{1}{12}\\int_0^{12} T(t)\\,dt$ |
| Average velocity over $[a,b]$ | $\\frac{1}{b-a}\\int_a^b v(t)\\,dt = \\frac{s(b)-s(a)}{b-a}$ |
| Average rate of production | $\\frac{1}{b-a}\\int_a^b R(t)\\,dt$ |
| Average value from table data | Use Riemann sum or trapezoidal rule to approximate $\\int$ |

> **AP Tip:** Average velocity $= \\frac{\\text{displacement}}{\\text{time}}$. This naturally equals $\\frac{1}{b-a}\\int_a^b v(t)\\,dt$ by Net Change Theorem.

### Key Distinction

| Average velocity | Average speed |
|:---:|:---:|
| $\\frac{1}{b-a}\\int_a^b v(t)\\,dt$ | $\\frac{1}{b-a}\\int_a^b |v(t)|\\,dt$ |
| Uses signed velocity | Uses absolute value |
| Can be zero or negative | Always $\\ge 0$ |`
    },
    {
      id: 'acc5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Average Value** 🎯',
      exercise: {
        questions: [
          {
            question: 'The average value of $f(x) = \\sin(x)$ on $[0, \\pi]$ is:',
            options: ['$0$', '$\\frac{1}{\\pi}$', '$\\frac{2}{\\pi}$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 2,
            explanation: '$\\frac{1}{\\pi}\\int_0^{\\pi} \\sin x\\,dx = \\frac{1}{\\pi}[-\\cos x]_0^{\\pi} = \\frac{1}{\\pi}(1+1) = \\frac{2}{\\pi}$.'
          },
          {
            question: 'If $\\int_1^5 f(x)\\,dx = 20$, the average value of $f$ on $[1,5]$ is:',
            options: ['$4$', '$5$', '$20$', '$80$'],
            correctAnswer: 1,
            explanation: '$f_{\\text{avg}} = \\frac{1}{5-1} \\cdot 20 = 5$.'
          },
          {
            question: 'A particle moves with velocity $v(t) = t^2$ on $[0, 6]$. The average velocity is:',
            options: ['$36$', '$72$', '$18$', '$12$'],
            correctAnswer: 3,
            explanation: '$\\frac{1}{6}\\int_0^6 t^2\\,dt = \\frac{1}{6} \\cdot \\frac{216}{3} = \\frac{72}{6} = 12$.'
          }
        ]
      }
    },
    {
      id: 'acc5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Average value concepts.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'The MVT for Integrals guarantees $f(c) = f_{avg}$ because:',
            options: ['$f$ is differentiable', '$f$ is continuous on $[a,b]$ (Intermediate Value Theorem applies)', '$f$ is increasing', '$f$ has an antiderivative'],
            correctAnswers: ['$f$ is continuous on $[a,b]$ (Intermediate Value Theorem applies)'],
            hints: ['Continuity is the key hypothesis.'],
            explanation: 'Since $f$ is continuous, it achieves every value between its min and max, including $f_{avg}$.'
          },
          {
            label: 'Average value of $f(x) = 6x$ on $[0, 4]$:',
            options: ['$6$', '$12$', '$24$', '$48$'],
            correctAnswers: ['$12$'],
            hints: ['$\\frac{1}{4}\\int_0^4 6x\\,dx = \\frac{1}{4}[3x^2]_0^4$.'],
            explanation: '$\\frac{1}{4}\\cdot 48 = 12$.'
          },
          {
            label: 'If average value of $f$ on $[2,8]$ is $7$, then $\\int_2^8 f(x)\\,dx =$',
            options: ['$7$', '$42$', '$\\frac{7}{6}$', '$56$'],
            correctAnswers: ['$42$'],
            hints: ['$f_{avg} = \\frac{1}{b-a}\\int_a^b f\\,dx$, so $\\int = f_{avg}(b-a)$.'],
            explanation: '$\\int_2^8 f\\,dx = 7 \\cdot (8-2) = 42$.'
          }
        ]
      }
    },
    {
      id: 'acc5-input',
      type: 'input-box' as const,
      content: '**Compute the average value.** ✍️',
      exercise: {
        question: 'Find the average value of $f(x) = 3x^2 + 2$ on the interval $[1, 3]$.\n\n(Enter an integer.)',
        correctAnswer: '15',
        acceptableAnswers: ['15'],
        hints: [
          '$f_{avg} = \\frac{1}{3-1}\\int_1^3 (3x^2+2)\\,dx$.',
          '$\\int_1^3 (3x^2+2)\\,dx = [x^3+2x]_1^3$.',
          '$= (27+6)-(1+2) = 33-3 = 30$. Then $\\frac{30}{2}$.'
        ],
        explanation: '$\\frac{1}{2}\\int_1^3(3x^2+2)dx = \\frac{1}{2}[x^3+2x]_1^3 = \\frac{1}{2}(33-3) = \\frac{30}{2} = 15$.'
      }
    },
    {
      id: 'acc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Concept | Formula |
|:---:|:---:|
| Average value | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |
| MVT for Integrals | $\\exists\\,c: f(c) = f_{avg}$ |
| Average velocity | $\\frac{s(b)-s(a)}{b-a}$ |
| Reverse: find $\\int$ from avg | $\\int = f_{avg} \\cdot (b-a)$ |

> **Up Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
