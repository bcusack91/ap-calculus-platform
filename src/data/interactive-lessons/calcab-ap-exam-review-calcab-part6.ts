export const calcabExamReviewPart6Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er6-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 6 of 7 — Applications of Integration**

### Key Applications

1. **Area between curves**: $\\int [f - g]\\,dx$
2. **Volumes (disk/washer)**: $\\pi\\int [R^2 - r^2]\\,dx$
3. **Cross sections**: $\\int A(x)\\,dx$
4. **Average value**: $\\frac{1}{b-a}\\int_a^b f\\,dx$`
    },
    {
      id: 'er6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration Applications Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'The area between $y = x^3$ and $y = x$ on $[0, 1]$ is:',
            options: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{6}$'],
            correctAnswer: 0,
            explanation: '$x > x^3$ on $(0,1)$. $\\int_0^1 (x - x^3)\\,dx = [x^2/2 - x^4/4]_0^1 = 1/2 - 1/4 = 1/4$.'
          }
        ]
      }
    },
    {
      id: 'er6-summary',
      type: 'text' as const,
      content: `### Review — Part 6 Complete`
    }
  ]
};
