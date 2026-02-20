export const calcbcVectorsPart5Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec5-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 5 of 7 — Acceleration & Tangent/Normal**

### Tangent Vector

$$\hat{T}(t) = \frac{\vec{v}(t)}{|\vec{v}(t)|}$$

### Acceleration decomposition (BC topic)

$\vec{a}$ can be decomposed into tangential and normal components:

- **Tangential** $a_T = \frac{d}{dt}|\vec{v}|$ — changes speed
- **Normal** $a_N$ — changes direction`
    },
    {
      id: 'vec5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Acceleration** 🎯',
      exercise: {
        questions: [
          {
            question: 'For circular motion $\\vec{r}(t) = \\langle R\\cos t, R\\sin t \\rangle$, what is $\\vec{a}(t)$?',
            options: ['$\\langle -R\\cos t, -R\\sin t \\rangle$', '$\\langle R\\cos t, R\\sin t \\rangle$', '$\\langle 0, 0 \\rangle$', '$\\langle -R\\sin t, R\\cos t \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\vec{a} = \\langle -R\\cos t, -R\\sin t \\rangle = -\\vec{r}(t)$. Acceleration points toward the center!'
          }
        ]
      }
    },
    {
      id: 'vec5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
For uniform circular motion, acceleration is centripetal (toward center).`
    }
  ]
};
