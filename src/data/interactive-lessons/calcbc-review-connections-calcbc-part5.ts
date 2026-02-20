export const calcbcReviewPart5Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rev5-intro',
      type: 'text' as const,
      content: `# BC Review

**Part 5 of 7 — Applications Summary**

### BC Applications Checklist

- **Area between curves**: $\int (f - g)\,dx$
- **Volume (disk/washer)**: $\pi\int [R^2 - r^2]\,dx$
- **Volume (shell)**: $2\pi\int x \cdot f(x)\,dx$
- **Arc length**: $\int \sqrt{1 + (f')^2}\,dx$ or $\int \sqrt{(x')^2 + (y')^2}\,dt$
- **Polar area**: $\frac{1}{2}\int r^2\,d\theta$
- **Accumulation**: $F(x) = F(a) + \int_a^x f(t)\,dt$`
    },
    {
      id: 'rev5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'Volume of $y = \\sqrt{x}$ from $0$ to $4$ revolved about the $x$-axis (disk):',
            options: ['$8\\pi$', '$4\\pi$', '$16\\pi$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi[x^2/2]_0^4 = 8\\pi$.'
          }
        ]
      }
    },
    {
      id: 'rev5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Know every application formula. Draw pictures!`
    }
  ]
};
