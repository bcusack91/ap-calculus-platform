export const calcabTheoremsPart2Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm2-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 2 of 7 \u2014 The Mean Value Theorem (MVT)**

### Statement

If $f$ is **continuous** on $[a,b]$ and **differentiable** on $(a,b)$:

$$\\boxed{\\exists\\, c \\in (a,b) \\text{ such that } f'(c) = \\frac{f(b) - f(a)}{b - a}}$$

### Geometric Meaning

There\u2019s a point where the **tangent line is parallel to the secant line** connecting $(a, f(a))$ and $(b, f(b))$.

### MVT vs. IVT

| Feature | IVT | MVT |
|:---|:---:|:---:|
| Hypothesis | Continuous | Continuous + differentiable |
| Conclusion | $f(c) = N$ | $f'(c) = \\text{avg. rate}$ |
| Guarantees about | Function values | Derivative values |

> **Key Fact:** MVT requires TWO hypotheses: continuity on $[a,b]$ AND differentiability on $(a,b)$. You must verify both on the AP exam.

### Worked Example

> $f(x) = x^2$ on $[1, 3]$. Find the $c$ guaranteed by MVT.

Average rate: $\\frac{f(3)-f(1)}{3-1} = \\frac{9-1}{2} = 4$.

$f'(c) = 2c = 4 \\Rightarrow c = 2 \\in (1,3)$. \u2713

### AP Writing Template

> "Since $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, by the Mean Value Theorem there exists $c \\in (a,b)$ such that $f'(c) = \\frac{f(b)-f(a)}{b-a} = \\ldots$"`
    },
    {
      id: 'thm2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 MVT** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$f(x) = x^3 - 3x$ on $[0, 2]$. Find the average rate of change.',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 0,
            explanation: '$f(0) = 0$, $f(2) = 8 - 6 = 2$. Average rate $= \\frac{2 - 0}{2 - 0} = 1$.'
          },
          {
            question: 'Continuing: $f\'(x) = 3x^2 - 3$. Solve $f\'(c) = 1$ for $c \\in (0,2)$.',
            options: ['$c = \\frac{2}{\\sqrt{3}}$', '$c = 1$', '$c = \\sqrt{2}$', '$c = \\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: '$3c^2 - 3 = 1 \\Rightarrow c^2 = 4/3 \\Rightarrow c = 2/\\sqrt{3} \\approx 1.15 \\in (0,2)$.'
          },
          {
            question: 'MVT cannot be applied to $f(x) = |x|$ on $[-1, 1]$ because:',
            options: ['$f$ is not differentiable at $x = 0$', '$f$ is not continuous', '$f(-1) \\ne f(1)$', 'MVT always applies'],
            correctAnswer: 0,
            explanation: '$|x|$ has a corner at $x = 0$, so it is not differentiable on $(-1,1)$. MVT requires differentiability.'
          }
        ]
      }
    },
    {
      id: 'thm2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Apply MVT step by step.** \ud83d\udd0d\n\n$f(x) = \\sqrt{x}$ on $[1, 9]$.',
      exercise: {
        dropdowns: [
          {
            label: 'Average rate of change:',
            options: ['$1/4$', '$1/2$', '$1/3$', '$2/8$'],
            correctAnswers: ['$1/4$'],
            hints: ['$\\frac{f(9)-f(1)}{9-1} = \\frac{3-1}{8}$.'],
            explanation: '$\\frac{3 - 1}{8} = \\frac{2}{8} = \\frac{1}{4}$.'
          },
          {
            label: '$f\'(x) = \\frac{1}{2\\sqrt{x}}$. Solve $f\'(c) = 1/4$:',
            options: ['$c = 4$', '$c = 2$', '$c = 9$', '$c = 1$'],
            correctAnswers: ['$c = 4$'],
            hints: ['$\\frac{1}{2\\sqrt{c}} = \\frac{1}{4}$.'],
            explanation: '$2\\sqrt{c} = 4 \\Rightarrow \\sqrt{c} = 2 \\Rightarrow c = 4 \\in (1,9)$. \u2713'
          },
          {
            label: 'Is the tangent at $c = 4$ parallel to the secant?',
            options: ['Yes \u2014 that is exactly what MVT states', 'No \u2014 MVT is about existence only', 'Only for polynomials', 'Cannot determine'],
            correctAnswers: ['Yes \u2014 that is exactly what MVT states'],
            hints: ['MVT: $f\'(c) =$ slope of secant.'],
            explanation: '$f\'(4) = 1/4$ = average rate = slope of secant. The tangent is parallel to the secant.'
          }
        ]
      }
    },
    {
      id: 'thm2-input',
      type: 'input-box' as const,
      content: '**Find $c$.** \u270d\ufe0f',
      exercise: {
        question: '$f(x) = x^2 + 2x$ on $[1, 5]$. By MVT, $f\'(c) = \\frac{f(5)-f(1)}{4}$ for some $c$. Find $c$.\n\n(Enter an integer.)',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: [
          '$f(1) = 3$, $f(5) = 35$.',
          'Average rate $= \\frac{35 - 3}{4} = 8$.',
          '$f\'(x) = 2x + 2 = 8 \\Rightarrow x = 3$.'
        ],
        explanation: '$f\'(c) = 2c + 2 = 8 \\Rightarrow c = 3 \\in (1,5)$.'
      }
    },
    {
      id: 'thm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- MVT: instantaneous rate = average rate at some point
- Requires continuity on $[a,b]$ AND differentiability on $(a,b)$
- Geometric meaning: tangent parallel to secant
- Always verify both hypotheses on the AP exam`
    }
  ]
};
