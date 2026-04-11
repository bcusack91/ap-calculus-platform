export const physCEMPotentialPart2Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p2-intro',
      type: 'text' as const,
      content: `# 🔋 Electric Potential (Voltage)

**Part 2 of 7 — Potential = Energy per Charge**

---

### Definition

$$V = \\frac{U}{q} = \\frac{kQ}{r}$$

Units: Volts (V) = Joules per Coulomb (J/C)

---

### Potential Difference

$$\\Delta V = V_B - V_A = -\\int_A^B \\vec{E} \\cdot d\\vec{l}$$

$$W = q\\Delta V = q(V_B - V_A)$$

---

### Equipotential Surfaces

- Surfaces where $V$ is constant
- Always **perpendicular** to electric field lines
- No work is done moving a charge along an equipotential

> 🔑 Electric field points from high potential to low potential (for positive charges).`
    },
    {
      id: 'physicsc-electric-potential-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The potential at a distance $r$ from a charge $+Q$ is:',
            options: ['$kQ/r^2$', '$kQ/r$', '$kQr$', '$kQ/r^3$'],
            correctAnswer: 1,
            explanation: '$V = kQ/r$ for a point charge.'
          },
          {
            question: 'Moving a charge along an equipotential surface requires:',
            options: ['Maximum work', 'Zero work', 'Negative work', 'Depends on direction'],
            correctAnswer: 1,
            explanation: 'On an equipotential, $\\Delta V = 0$, so $W = q\\Delta V = 0$.'
          }
        ]
      }
    }
  ]
};
