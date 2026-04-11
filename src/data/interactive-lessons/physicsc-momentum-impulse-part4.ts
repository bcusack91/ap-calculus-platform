export const physCMomentumPart4Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p4-intro',
      type: 'text' as const,
      content: `# 🎱 Collisions in Two Dimensions

**Part 4 of 7 — Vector Conservation of Momentum**

---

### 2D Momentum Conservation

Momentum is conserved independently in each direction:

$$\\text{x-direction:} \quad m_1 v_{1xi} + m_2 v_{2xi} = m_1 v_{1xf} + m_2 v_{2xf}$$
$$\\text{y-direction:} \quad m_1 v_{1yi} + m_2 v_{2yi} = m_1 v_{1yf} + m_2 v_{2yf}$$

---

### Strategy for 2D Collision Problems

1. Choose a coordinate system
2. Resolve all velocities into $x$ and $y$ components
3. Apply conservation of momentum in each direction independently
4. If elastic, also apply conservation of KE

> 🔑 Treat each dimension separately — just like projectile motion.`
    },
    {
      id: 'physicsc-momentum-impulse-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In 2D collisions, momentum is conserved:',
            options: ['Only in x', 'Only in y', 'In each direction independently', 'Only for elastic'],
            correctAnswer: 2,
            explanation: 'Momentum is a vector; it is conserved independently in each component direction.'
          }
        ]
      }
    }
  ]
};
