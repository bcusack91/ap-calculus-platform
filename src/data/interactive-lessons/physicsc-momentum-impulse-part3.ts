export const physCMomentumPart3Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p3-intro',
      type: 'text' as const,
      content: `# 💫 Collisions in One Dimension

**Part 3 of 7 — Elastic and Inelastic Collisions**

---

### Types of Collisions

| Type | Momentum Conserved? | KE Conserved? |
|------|---------------------|--------------|
| **Elastic** | ✅ Yes | ✅ Yes |
| **Inelastic** | ✅ Yes | ❌ No |
| **Perfectly Inelastic** | ✅ Yes | ❌ No (maximum KE loss) |

---

### Perfectly Inelastic Collision

Objects stick together after collision:
$$m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f$$
$$v_f = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$

---

### Elastic Collision

Both momentum AND kinetic energy are conserved. For 1D elastic:

$$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2} v_{1i} + \\frac{2m_2}{m_1 + m_2} v_{2i}$$

$$v_{2f} = \\frac{2m_1}{m_1 + m_2} v_{1i} + \\frac{m_2 - m_1}{m_1 + m_2} v_{2i}$$

> 🔑 In an elastic collision between equal masses with one at rest, the first stops and the second moves with the original velocity.`
    },
    {
      id: 'physicsc-momentum-impulse-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a perfectly inelastic collision, the objects:',
            options: ['Bounce apart', 'Stick together', 'Exchange velocities', 'Both stop'],
            correctAnswer: 1,
            explanation: 'Perfectly inelastic = objects stick together, maximum KE loss.'
          },
          {
            question: 'A 3 kg ball at 4 m/s collides perfectly inelastically with a 1 kg ball at rest. $v_f =$',
            options: ['$1$ m/s', '$2$ m/s', '$3$ m/s', '$4$ m/s'],
            correctAnswer: 2,
            explanation: '$v_f = (3×4 + 1×0)/(3+1) = 12/4 = 3$ m/s.'
          }
        ]
      }
    }
  ]
};
