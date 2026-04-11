export const physCGravitationPart5Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p5-intro',
      type: 'text' as const,
      content: `# 🛰️ Energy of Orbiting Bodies

**Part 5 of 7 — Total Energy in Orbits**

---

### Energy Summary for Circular Orbits

$$KE = \\frac{1}{2}mv^2 = \\frac{GMm}{2r}$$

$$PE = -\\frac{GMm}{r}$$

$$E_{\\text{total}} = KE + PE = -\\frac{GMm}{2r}$$

> 🔑 Total energy is **negative** for bound orbits. $E = 0$ at the boundary (parabolic trajectory = escape).`
    },
    {
      id: 'physicsc-gravitation-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A bound orbital system has total energy that is:',
            options: ['Positive', 'Zero', 'Negative', 'Depends on speed'],
            correctAnswer: 2,
            explanation: 'Bound orbits have $E < 0$. Unbound trajectories have $E \\geq 0$.'
          }
        ]
      }
    }
  ]
};
