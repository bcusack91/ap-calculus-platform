export const physCGravitationPart7Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p7-intro',
      type: 'text' as const,
      content: `# 📋 Gravitation Review

**Part 7 of 7 — Master Summary**

---

### Essential Formulas

| Formula | Use |
|---------|-----|
| $F = GMm/r^2$ | Force between two masses |
| $U = -GMm/r$ | Gravitational PE |
| $v = \\sqrt{GM/r}$ | Orbital speed |
| $v_{esc} = \\sqrt{2GM/r}$ | Escape velocity |
| $T^2 = (4\\pi^2/GM)r^3$ | Orbital period |
| Shell theorem | Field inside shell = 0 |`
    },
    {
      id: 'physicsc-gravitation-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At what fraction of escape velocity is orbital velocity?',
            options: ['$1/2$', '$1/\\sqrt{2}$', '$\\sqrt{2}$', '$2$'],
            correctAnswer: 1,
            explanation: '$v_{orbit} = \\sqrt{GM/r}$, $v_{esc} = \\sqrt{2GM/r} = \\sqrt{2} \\cdot v_{orbit}$. So $v_{orbit}/v_{esc} = 1/\\sqrt{2}$.'
          }
        ]
      }
    }
  ]
};
