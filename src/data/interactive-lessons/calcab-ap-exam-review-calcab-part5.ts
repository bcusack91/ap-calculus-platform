export const calcabExamReviewPart5Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er5-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 5 of 7 — FTC, Accumulation, and DEs**

### FTC Part 1
$$\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$$

### FTC Part 2
$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

### Separation of Variables
$$\\frac{dy}{dx} = f(x)g(y) \\implies \\frac{dy}{g(y)} = f(x)\\,dx$$`
    },
    {
      id: 'er5-quiz1',
      type: 'multiple-choice' as const,
      content: '**FTC & DE Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $F(x) = \\int_1^x \\sqrt{t^3 + 1}\\,dt$, find $F\'(4)$.',
            options: ['$\\sqrt{65}$', '$65$', '$\\sqrt{17}$', '$4$'],
            correctAnswer: 0,
            explanation: '$F\'(x) = \\sqrt{x^3 + 1}$. $F\'(4) = \\sqrt{64+1} = \\sqrt{65}$.'
          },
          {
            question: 'Solve $\\frac{dy}{dx} = \\frac{x}{y}$ with $y(0) = 4$. Find $y$ when $x = 3$.',
            options: ['$5$', '$\\sqrt{25}$', '$\\sqrt{7}$', '$3$'],
            correctAnswer: 0,
            explanation: '$y\\,dy = x\\,dx$. $y^2/2 = x^2/2 + C$. $y(0)=4$: $C = 8$. $y^2 = x^2 + 16$. $y(3) = \\sqrt{25} = 5$.'
          }
        ]
      }
    },
    {
      id: 'er5-summary',
      type: 'text' as const,
      content: `### Review — Part 5 Complete`
    }
  ]
};
