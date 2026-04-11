export const physCEMMagFieldsPart1Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p1-intro',
      type: 'text' as const,
      content: `# 🧲 Magnetic Force on Moving Charges

**Part 1 of 7 — The Lorentz Force**

---

### Magnetic Force

$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$

Magnitude: $F = qvB\\sin\\theta$

| Fact | Detail |
|------|--------|
| Direction | Right-hand rule (cross product) |
| Perpendicular | Force ⊥ velocity AND ⊥ B |
| No work | Magnetic force does NO work ($\\vec{F} \\perp \\vec{v}$) |

---

### Circular Motion in B Field

$$qvB = \\frac{mv^2}{r}$$

$$r = \\frac{mv}{qB}$$

$$\\omega = \\frac{qB}{m}$$ (cyclotron frequency)

> 🔑 A charged particle in a uniform $\\vec{B}$ moves in a circle (or helix). The magnetic force provides centripetal acceleration.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A magnetic force does _____ work on a charged particle.',
            options: ['Positive', 'Negative', 'Zero', 'Variable'],
            correctAnswer: 2,
            explanation: '$\\vec{F} \\perp \\vec{v}$ always, so $W = \\vec{F} \\cdot \\vec{v} \\, dt = 0$. No work done.'
          },
          {
            question: 'Doubling the speed of a charged particle in a magnetic field:',
            options: ['Doubles the radius', 'Halves the radius', 'No effect on radius', 'Quadruples the radius'],
            correctAnswer: 0,
            explanation: '$r = mv/(qB)$. Doubling $v$ doubles $r$.'
          }
        ]
      }
    }
  ]
};
