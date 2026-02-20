export const calcabExpModelsPart6Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp6-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'exp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'If the half-life of a substance is 5 years, what fraction remains after 15 years?',
            options: ['$1/8$', '$1/4$', '$1/3$', '$1/16$'],
            correctAnswer: 0,
            explanation: '15 years = 3 half-lives. $(1/2)^3 = 1/8$.'
          },
          {
            question: 'A population triples every 4 hours. How long until it is 81 times its original size?',
            options: ['$16$ hours', '$12$ hours', '$8$ hours', '$20$ hours'],
            correctAnswer: 0,
            explanation: '$81 = 3^4$. So we need 4 tripling periods = $4 \\times 4 = 16$ hours.'
          }
        ]
      }
    },
    {
      id: 'exp6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
