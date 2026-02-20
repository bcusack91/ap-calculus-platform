export const mcatPhysMechPart4Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm4-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 4 of 7 — Momentum & Collisions**

### Linear Momentum

$$\\vec{p} = m\\vec{v}$$

### Impulse-Momentum Theorem

$$\\vec{J} = \\vec{F}\\Delta t = \\Delta\\vec{p}$$

### Conservation of Momentum

$$m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}$$

Always conserved in the absence of external forces!

### Collision Types

| Type | Momentum | Kinetic Energy |
|------|----------|---------------|
| Elastic | Conserved | Conserved |
| Inelastic | Conserved | NOT conserved (some lost to heat/deformation) |
| Perfectly inelastic | Conserved | Maximum KE loss (objects stick together) |

For perfectly inelastic: $m_1v_1 + m_2v_2 = (m_1 + m_2)v_f$`
    },
    {
      id: 'pm4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Momentum** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 1000 kg car at 20 m/s collides with a stationary 2000 kg truck. They stick together. The final velocity is:',
            options: ['6.67 m/s', '10 m/s', '20 m/s', '3.33 m/s'],
            correctAnswer: 0,
            explanation: 'Perfectly inelastic: $m_1v_1 = (m_1 + m_2)v_f$. $1000(20) = 3000 \\cdot v_f \\implies v_f = 20{,}000/3000 \\approx 6.67$ m/s.'
          }
        ]
      }
    },
    {
      id: 'pm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Momentum is ALWAYS conserved in collisions (absent external forces)
- KE is ONLY conserved in elastic collisions
- Perfectly inelastic = objects stick together = maximum KE loss
- Impulse ($F\\Delta t$) = change in momentum — explains why airbags work (increase $\\Delta t$)`
    }
  ]
};
