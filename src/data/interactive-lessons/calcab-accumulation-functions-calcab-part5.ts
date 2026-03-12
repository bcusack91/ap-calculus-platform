export const calcabAccumulationPart5Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc5-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 5 of 7 \u2014 Average Value of a Function**

### Average Value Formula

$$f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$$

### Mean Value Theorem for Integrals

There exists $c \\in [a,b]$ such that $f(c) = f_{\\text{avg}}$.

### Worked Example

Find the average value of $f(x) = x^2$ on $[0, 3]$.

$$f_{\\text{avg}} = \\frac{1}{3-0}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot \\frac{27}{3} = 3$$`
    },
    {
      id: 'acc5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Average Value** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the average value of $f(x) = \\sin x$ on $[0, \\pi]$.',
            options: ['$\\frac{2}{\\pi}$', '$\\frac{1}{\\pi}$', '$1$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{\\pi}\\int_0^{\\pi} \\sin x\\,dx = \\frac{1}{\\pi}[-\\cos x]_0^{\\pi} = \\frac{1}{\\pi}(1+1) = \\frac{2}{\\pi}$.'
          },
          {
            question: 'The average value of $f(x) = 3x + 1$ on $[0, 4]$ is:',
            options: ['$7$', '$6$', '$8$', '$5$'],
            correctAnswer: 0,
            explanation: '$f_{\\text{avg}} = \\frac{1}{4}\\int_0^4 (3x+1)\\,dx = \\frac{1}{4}[\\frac{3x^2}{2}+x]_0^4 = \\frac{1}{4}(24+4) = 7$.'
          }
        ]
      }
    },
    {
      id: 'acc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5
1. Average value = $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$
2. MVT for integrals guarantees $f(c) = f_{\\text{avg}}$ for some $c$`
    }
  ]
};
