export const calcbcPolarPart4Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar4-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 4 of 7 — Common Polar Curves**

### Gallery of Polar Curves

| Equation | Shape |
|----------|-------|
| $r = a$ | Circle (radius $a$) |
| $r = a\\cos\\theta$ | Circle through origin |
| $r = a\\sin\\theta$ | Circle through origin |
| $r = 1 + \\cos\\theta$ | Cardioid |
| $r = 1 + 2\\cos\\theta$ | Limaçon with inner loop |
| $r = \\cos(2\\theta)$ | Rose (4 petals) |
| $r = \\cos(3\\theta)$ | Rose (3 petals) |`
    },
    {
      id: 'polar4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polar Curve ID** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many petals does $r = \\sin(4\\theta)$ have?',
            options: ['$8$', '$4$', '$2$', '$16$'],
            correctAnswer: 0,
            explanation: '$r = \\sin(n\\theta)$ has $2n$ petals when $n$ is even. $2(4) = 8$ petals.'
          },
          {
            question: 'Area of one petal of $r = \\cos(2\\theta)$ equals:',
            options: ['$\\frac{\\pi}{8}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\pi$'],
            correctAnswer: 0,
            explanation: 'One petal from $-\\pi/4$ to $\\pi/4$. $A = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}\\cos^2(2\\theta)\\,d\\theta = \\frac{1}{2} \\cdot \\frac{\\pi}{4} = \\frac{\\pi}{8}$.'
          }
        ]
      }
    },
    {
      id: 'polar4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Know the standard polar curves for the AP exam.`
    }
  ]
};
