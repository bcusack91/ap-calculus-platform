export const calcbcVectorsPart4Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec4-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 4 of 7 — Motion Analysis**

### Direction of Motion

The velocity vector $\vec{v}(t)$ points in the direction of motion.

### When Is the Particle at Rest?

At rest when $\vec{v}(t) = \vec{0}$, meaning **both** $x'(t) = 0$ **and** $y'(t) = 0$ simultaneously.`
    },
    {
      id: 'vec4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Motion Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\vec{r}(t) = \\langle t^2 - 4t, t^2 - 6t \\rangle$. When is the particle at rest?',
            options: ['Never (components zero at different times)', '$t = 2$', '$t = 3$', '$t = 0$'],
            correctAnswer: 0,
            explanation: '$x\'(t) = 2t - 4 = 0$ at $t = 2$. $y\'(t) = 2t - 6 = 0$ at $t = 3$. They are never simultaneously zero.'
          }
        ]
      }
    },
    {
      id: 'vec4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
A particle is at rest only when ALL velocity components are zero simultaneously.`
    }
  ]
};
