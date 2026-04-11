export const physCMomentumPart2Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p2-intro',
      type: 'text' as const,
      content: `# 💥 Impulse

**Part 2 of 7 — Impulse-Momentum Theorem**

---

### Impulse Defined

$$\\vec{J} = \\int_{t_1}^{t_2} \\vec{F} \, dt = \\Delta \\vec{p}$$

| Variable | Meaning |
|----------|---------|
| $\\vec{J}$ | Impulse (N·s = kg·m/s) |
| $\\vec{F}$ | Force (may vary with time) |
| $\\Delta\\vec{p}$ | Change in momentum |

For constant force: $\\vec{J} = \\vec{F} \\cdot \\Delta t$

---

### Impulse-Momentum Theorem

$$\\vec{J} = \\vec{p}_f - \\vec{p}_i = m\\vec{v}_f - m\\vec{v}_i$$

**Example:** A 0.15 kg baseball at 40 m/s is hit and leaves at 50 m/s in the opposite direction.

$J = m(v_f - v_i) = 0.15(50 - (-40)) = 0.15(90) = 13.5$ N·s

> 🔑 The area under the $F$ vs. $t$ curve equals the impulse.`
    },
    {
      id: 'physicsc-momentum-impulse-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Impulse has the same units as:',
            options: ['Force', 'Energy', 'Momentum', 'Power'],
            correctAnswer: 2,
            explanation: 'Impulse = change in momentum. Both have units of kg·m/s (or equivalently N·s).'
          },
          {
            question: 'A 5 N force acts for 3 seconds. The impulse is:',
            options: ['$1.67$ N·s', '$5$ N·s', '$8$ N·s', '$15$ N·s'],
            correctAnswer: 3,
            explanation: '$J = F \\Delta t = 5(3) = 15$ N·s.'
          }
        ]
      }
    }
  ]
};
