export const calcbcVectorsPart6Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec6-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'vec6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\vec{r}(t) = \\langle 2\\cos t, 3\\sin t \\rangle$ traces what shape?',
            options: ['An ellipse', 'A circle', 'A parabola', 'A line'],
            correctAnswer: 0,
            explanation: '$x = 2\\cos t$, $y = 3\\sin t$ → $\\frac{x^2}{4} + \\frac{y^2}{9} = 1$. Ellipse!'
          },
          {
            question: 'Find the speed of $\\vec{r}(t) = \\langle 5\\cos(2t), 5\\sin(2t) \\rangle$.',
            options: ['$10$', '$5$', '$25$', '$2$'],
            correctAnswer: 0,
            explanation: '$\\vec{v} = \\langle -10\\sin(2t), 10\\cos(2t) \\rangle$. $|\\vec{v}| = \\sqrt{100\\sin^2(2t) + 100\\cos^2(2t)} = 10$.'
          }
        ]
      }
    },
    {
      id: 'vec6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
