export const calcbcVectorsPart3Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec3-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 3 of 7 — Distance Traveled**

### Total Distance

$$\text{Distance} = \int_a^b |\vec{v}(t)|\,dt = \int_a^b \sqrt{[x'(t)]^2 + [y'(t)]^2}\,dt$$

### Displacement vs Distance

**Displacement** (net change): $\vec{r}(b) - \vec{r}(a)$

**Distance** (total path length): $\int_a^b |\vec{v}(t)|\,dt$`
    },
    {
      id: 'vec3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Distance** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle$ for $0 \\leq t \\leq 2\\pi$. Find the total distance.',
            options: ['$2\\pi$', '$0$', '$\\pi$', '$4$'],
            correctAnswer: 0,
            explanation: '$|\\vec{v}(t)| = \\sqrt{\\sin^2 t + \\cos^2 t} = 1$. Distance $= \\int_0^{2\\pi} 1\\,dt = 2\\pi$.'
          }
        ]
      }
    },
    {
      id: 'vec3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Distance ≠ displacement. Distance integrates speed; displacement is net change.`
    }
  ]
};
