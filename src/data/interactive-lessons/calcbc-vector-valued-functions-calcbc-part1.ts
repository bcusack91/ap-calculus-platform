export const calcbcVectorsPart1Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec1-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 1 of 7 — Position, Velocity, Acceleration**

### Vector Position

$$\vec{r}(t) = \langle x(t),\, y(t) \rangle$$

### Velocity & Acceleration

$$\vec{v}(t) = \vec{r}\,'(t) = \langle x'(t),\, y'(t) \rangle$$
$$\vec{a}(t) = \vec{v}\,'(t) = \langle x''(t),\, y''(t) \rangle$$

### Speed

$$|\vec{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$$`
    },
    {
      id: 'vec1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Vectors** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $\\vec{r}(t) = \\langle t^2, t^3 \\rangle$, find $\\vec{v}(2)$.',
            options: ['$\\langle 4, 12 \\rangle$', '$\\langle 2, 6 \\rangle$', '$\\langle 4, 8 \\rangle$', '$\\langle 2, 3 \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\vec{v}(t) = \\langle 2t, 3t^2 \\rangle$. At $t = 2$: $\\langle 4, 12 \\rangle$.'
          },
          {
            question: 'Find the speed at $t = 1$ for $\\vec{r}(t) = \\langle 3t, 4t \\rangle$.',
            options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
            correctAnswer: 0,
            explanation: '$\\vec{v} = \\langle 3, 4 \\rangle$. Speed $= \\sqrt{9 + 16} = 5$.'
          }
        ]
      }
    },
    {
      id: 'vec1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Differentiate component-wise. Speed = magnitude of velocity.`
    }
  ]
};
