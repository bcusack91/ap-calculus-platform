export const physCGravitationPart1Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p1-intro',
      type: 'text' as const,
      content: `# 🌍 Newton’s Law of Universal Gravitation

**Part 1 of 7 — The Gravitational Force**

---

### The Law

$$F = G\\frac{m_1 m_2}{r^2}$$

| Constant | Value |
|----------|-------|
| $G$ | $6.674 \\times 10^{-11}$ N·m²/kg² |

---

### Gravitational Field

$$\\vec{g} = -\\frac{GM}{r^2}\\hat{r}$$

At Earth’s surface: $g \\approx 9.8$ m/s²

> 🔑 Gravity is always attractive. The force is along the line connecting the two masses.`
    },
    {
      id: 'physicsc-gravitation-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If the distance between two masses is tripled, the gravitational force:',
            options: ['Triples', 'Is reduced by 1/3', 'Is reduced by 1/9', 'Is unchanged'],
            correctAnswer: 2,
            explanation: '$F \\propto 1/r^2$. Tripling $r$ → $F$ decreases by factor $3^2 = 9$.'
          },
          {
            question: 'The gravitational field has units of:',
            options: ['N', 'N/kg', 'kg·m/s²', 'J/kg'],
            correctAnswer: 1,
            explanation: 'Gravitational field = force per unit mass = N/kg = m/s².'
          }
        ]
      }
    }
  ]
};
