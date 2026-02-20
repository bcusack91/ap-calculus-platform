export const calcbcVectorsPart7Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec7-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'vec7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\vec{v}(t) = \\langle t, t^2 \\rangle$, $\\vec{r}(0) = \\langle 1, 0 \\rangle$. Find $\\vec{r}(2)$.',
            options: ['$\\langle 3, 8/3 \\rangle$', '$\\langle 3, 4 \\rangle$', '$\\langle 2, 8/3 \\rangle$', '$\\langle 5, 8 \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\vec{r}(t) = \\langle t^2/2 + 1, t^3/3 \\rangle$. At $t=2$: $\\langle 2 + 1, 8/3 \\rangle = \\langle 3, 8/3 \\rangle$.'
          },
          {
            question: 'If $|\\vec{v}(t)|$ is constant, what must be true about $\\vec{a}$ and $\\vec{v}$?',
            options: ['$\\vec{a} \\perp \\vec{v}$', '$\\vec{a} \\parallel \\vec{v}$', '$\\vec{a} = \\vec{0}$', '$|\\vec{a}|$ is constant'],
            correctAnswer: 0,
            explanation: 'Constant speed means $\\frac{d}{dt}|\\vec{v}|^2 = 0$, so $\\vec{v} \\cdot \\vec{a} = 0$. They are perpendicular.'
          }
        ]
      }
    },
    {
      id: 'vec7-summary',
      type: 'text' as const,
      content: `### Vector-Valued Functions — Complete! ✅`
    }
  ]
};
