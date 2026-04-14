export const calcabAreaCurvesPart6Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area6-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 6 of 7 \u2014 AP-Style Workshop**

### AP FRQ Pattern

Many FRQ problems give you a region $R$ and ask multiple parts about it. Here is a typical structure:

| Part | What They Ask | What You Do |
|:---:|:---:|:---:|
| (a) | Find the area of $R$ | $\\int_a^b(\\text{top}-\\text{bottom})\\,dx$ |
| (b) | Volume with known cross-sections | $\\int_a^b A(x)\\,dx$ |
| (c) | Volume of revolution | $\\pi\\int_a^b R^2\\,dx$ or washer |
| (d) | Write but do not evaluate | Set up only; simplify nothing |

### Worked AP Problem

> Region $R$ is bounded by $y = \\sqrt{x}$, $y = 0$, and $x = 4$.

**(a) Area of $R$:**

$$A = \\int_0^4 \\sqrt{x}\\,dx = \\left[\\frac{2}{3}x^{3/2}\\right]_0^4 = \\frac{2}{3}(8) = \\boxed{\\frac{16}{3}}$$

**(b) $R$ has cross-sections perpendicular to $x$-axis that are squares. Volume:**

Side $= \\sqrt{x}$. $A(x) = (\\sqrt{x})^2 = x$.

$$V = \\int_0^4 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^4 = 8$$

**(c) Rotate $R$ about $x$-axis. Volume:**

$$V = \\pi\\int_0^4(\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\boxed{8\\pi}$$

> **AP Tip:** For "write but do not evaluate," you earn full credit for a correct integral with correct limits. Do NOT simplify the integrand.`
    },
    {
      id: 'area6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Area Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Region bounded by $y = e^x$, $y = 1$, $x = 2$. Area:',
            options: ['$e^2-3$', '$e^2-1$', '$e^2+1$', '$e^2-2$'],
            correctAnswer: 0,
            explanation: '$e^x = 1$ at $x = 0$. $A = \\int_0^2(e^x-1)\\,dx = [e^x-x]_0^2 = (e^2-2)-1 = e^2-3$.'
          },
          {
            question: 'Area between $y = \\sqrt{x}$ and $y = x^2$ for $x \\geq 0$:',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: 'Intersect at $x=0,1$. $\\sqrt{x} \\geq x^2$ on $[0,1]$. $A = [\\frac{2}{3}x^{3/2}-\\frac{x^3}{3}]_0^1 = \\frac{2}{3}-\\frac{1}{3} = \\frac{1}{3}$.'
          },
          {
            question: 'Region between $y = 4-x^2$ and $y = x+2$. The area is:',
            options: ['$\\frac{9}{2}$', '$\\frac{7}{2}$', '$4$', '$6$'],
            correctAnswer: 0,
            explanation: '$4-x^2 = x+2 \\Rightarrow x^2+x-2=0 \\Rightarrow x=-2,1$. $A = \\int_{-2}^1(2-x-x^2)\\,dx = [2x-\\frac{x^2}{2}-\\frac{x^3}{3}]_{-2}^1 = \\frac{7}{6}+\\frac{10}{3} = \\frac{9}{2}$.'
          }
        ]
      }
    },
    {
      id: 'area6-dropdown',
      type: 'dropdown-select' as const,
      content: '**AP setup decisions.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Region between $y=\\ln x$ and $y=0$ from $x=1$ to $x=e$. In $dy$, limits are:',
            options: ['$y = 0$ to $y = 1$', '$y = 1$ to $y = e$', '$y = 0$ to $y = e$', '$x = 1$ to $x = e$'],
            correctAnswers: ['$y = 0$ to $y = 1$'],
            hints: ['$\\ln(1) = 0$ and $\\ln(e) = 1$.'],
            explanation: '$y$ ranges from $\\ln 1 = 0$ to $\\ln e = 1$.'
          },
          {
            label: '"Write but do not evaluate" means:',
            options: ['Set up integral with limits; do not compute', 'Describe in words only', 'Evaluate and check', 'Graph only'],
            correctAnswers: ['Set up integral with limits; do not compute'],
            hints: ['This is a specific AP instruction. Show the integral but stop there.'],
            explanation: 'Write the definite integral with correct integrand and limits. Do not simplify or evaluate.'
          },
          {
            label: 'To earn full credit on an area FRQ, you must show:',
            options: ['Intersection points, integral setup, evaluation', 'Only the final answer', 'A graph of the region', 'The antiderivative only'],
            correctAnswers: ['Intersection points, integral setup, evaluation'],
            hints: ['Each step earns partial credit.'],
            explanation: 'AP grading gives points for finding intersections, setting up the integral correctly, and evaluating.'
          }
        ]
      }
    },
    {
      id: 'area6-input',
      type: 'input-box' as const,
      content: '**AP Challenge.** \u270d\ufe0f',
      exercise: {
        question: 'Region $R$ is bounded by $y = x^2$ and $y = 2x$. Find the area.\n\n$A = ?$ (Enter a fraction as a/b.)',
        correctAnswer: '4/3',
        acceptableAnswers: ['4/3'],
        hints: [
          'Intersect: $x^2 = 2x \\Rightarrow x(x-2) = 0 \\Rightarrow x = 0, 2$.',
          'Top: $2x$, Bottom: $x^2$ on $[0,2]$.',
          '$A = \\int_0^2(2x-x^2)\\,dx = [x^2-\\frac{x^3}{3}]_0^2$.'
        ],
        explanation: '$A = 4-\\frac{8}{3} = \\frac{4}{3}$.'
      }
    },
    {
      id: 'area6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- AP FRQs often define a region $R$ and ask area, cross-section, and revolution questions
- "Write but do not evaluate" = show integral with limits, do not compute
- Always show intersection work for partial credit
- Practice the full sequence: intersections \u2192 setup \u2192 evaluate`
    }
  ]
};
