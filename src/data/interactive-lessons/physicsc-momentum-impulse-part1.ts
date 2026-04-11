export const physCMomentumPart1Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p1-intro',
      type: 'text' as const,
      content: `# 🎯 Linear Momentum

**Part 1 of 7 — Momentum and Its Conservation**

---

### What Is Momentum?

$$\\vec{p} = m\\vec{v}$$

| Quantity | Symbol | Units |
|----------|--------|-------|
| Momentum | $\\vec{p}$ | kg·m/s |
| Mass | $m$ | kg |
| Velocity | $\\vec{v}$ | m/s |

> 🔑 Momentum is a **vector** — it has both magnitude and direction.

---

### Newton's Second Law in Terms of Momentum

$$\\vec{F}_{\\text{net}} = \\frac{d\\vec{p}}{dt}$$

For constant mass: $\\vec{F} = m\\vec{a} = m\\frac{d\\vec{v}}{dt} = \\frac{d(m\\vec{v})}{dt}$

This more general form handles cases where mass changes (like rockets).

---

### Conservation of Momentum

When no external forces act on a system:

$$\\vec{p}_{\\text{initial}} = \\vec{p}_{\\text{final}}$$

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

> This is valid for **any** collision or interaction within an isolated system.`
    },
    {
      id: 'physicsc-momentum-impulse-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg ball moving at 3 m/s has momentum:',
            options: ['$2$ kg·m/s', '$3$ kg·m/s', '$5$ kg·m/s', '$6$ kg·m/s'],
            correctAnswer: 3,
            explanation: '$p = mv = 2(3) = 6$ kg·m/s.'
          },
          {
            question: 'Momentum is conserved when:',
            options: ['Energy is conserved', 'No external net force acts', 'Objects are elastic', 'Mass is constant'],
            correctAnswer: 1,
            explanation: 'Conservation of momentum requires zero net external force on the system.'
          },
          {
            question: '$\\vec{F} = d\\vec{p}/dt$ is the most general form of:',
            options: ['Newton’s First Law', 'Newton’s Second Law', 'Newton’s Third Law', 'Conservation of energy'],
            correctAnswer: 1,
            explanation: 'Newton’s Second Law in its most general form relates force to the rate of change of momentum.'
          }
        ]
      }
    }
  ]
};
