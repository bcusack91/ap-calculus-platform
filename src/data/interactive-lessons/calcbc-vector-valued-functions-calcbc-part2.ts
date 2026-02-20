export const calcbcVectorsPart2Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec2-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 2 of 7 — Integration of Vectors**

### Integrating Vector Functions

$$\int \vec{v}(t)\,dt = \left\langle \int x'(t)\,dt,\, \int y'(t)\,dt \right\rangle + \vec{C}$$

### Position from Velocity

$$\vec{r}(t) = \vec{r}(t_0) + \int_{t_0}^t \vec{v}(s)\,ds$$

### Worked Example

$\vec{v}(t) = \langle 2t, e^t \rangle$, $\vec{r}(0) = \langle 1, 3 \rangle$

$\vec{r}(t) = \langle 1 + t^2, 3 + e^t - 1 \rangle = \langle 1 + t^2, 2 + e^t \rangle$`
    },
    {
      id: 'vec2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Vector Integration** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\vec{v}(t) = \\langle 6t, 2 \\rangle$, $\\vec{r}(0) = \\langle 0, 5 \\rangle$. Find $\\vec{r}(1)$.',
            options: ['$\\langle 3, 7 \\rangle$', '$\\langle 6, 7 \\rangle$', '$\\langle 3, 2 \\rangle$', '$\\langle 1, 7 \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\vec{r}(t) = \\langle 3t^2, 2t + 5 \\rangle$. At $t = 1$: $\\langle 3, 7 \\rangle$.'
          }
        ]
      }
    },
    {
      id: 'vec2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Integrate vectors component-by-component. Don't forget initial conditions!`
    }
  ]
};
