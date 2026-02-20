export const calcabExamReviewPart3Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'er3-intro',
      type: 'text' as const,
      content: `# AP Exam Review

**Part 3 of 7 — Applications of Derivatives Review**

### Key Applications

1. **Related Rates** — differentiate equation with respect to time
2. **Optimization** — find critical points, check endpoints
3. **First/Second Derivative Test** — classify critical points
4. **Concavity** — second derivative determines shape`
    },
    {
      id: 'er3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Derivative Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f\'(c) = 0$ and $f\'\'(c) < 0$, then $f$ has a:',
            options: ['Local maximum at $c$', 'Local minimum at $c$', 'Inflection point at $c$', 'Neither'],
            correctAnswer: 0,
            explanation: 'Second derivative test: $f\'(c) = 0$ and $f\'\'(c) < 0$ means local maximum.'
          },
          {
            question: 'A sphere expands so $\\frac{dr}{dt} = 2$ cm/s. When $r = 5$, find $\\frac{dV}{dt}$.',
            options: ['$200\\pi$ cm$^3$/s', '$100\\pi$ cm$^3$/s', '$50\\pi$ cm$^3$/s', '$400\\pi$ cm$^3$/s'],
            correctAnswer: 0,
            explanation: '$V = \\frac{4}{3}\\pi r^3$. $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt} = 4\\pi(25)(2) = 200\\pi$.'
          }
        ]
      }
    },
    {
      id: 'er3-summary',
      type: 'text' as const,
      content: `### Review — Part 3 Complete`
    }
  ]
};
