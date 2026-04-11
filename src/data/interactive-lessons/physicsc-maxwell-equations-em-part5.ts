export const physCEMMaxwellPart5Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p5-intro',
      type: 'text' as const,
      content: `# 💡 Energy and Momentum of EM Waves

**Part 5 of 7 — Poynting Vector and Radiation Pressure**

---

### Poynting Vector

$$\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$$

$|\\vec{S}|$ = power per unit area (W/m²)

Average intensity: $I = \\frac{1}{2}c\\epsilon_0 E_0^2 = \\frac{E_0 B_0}{2\\mu_0}$

---

### Radiation Pressure

| Surface | Pressure |
|---------|----------|
| Perfect absorber | $P = I/c$ |
| Perfect reflector | $P = 2I/c$ |

EM waves carry momentum: $p = U/c$ (for absorbed radiation)

> 🔑 Light exerts pressure — this is the basis of solar sails and laser propulsion.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'EM radiation pressure on a perfect reflector is:',
            options: ['$I/c$', '$2I/c$', '$I/c^2$', 'Zero'],
            correctAnswer: 1,
            explanation: 'Reflected light transfers twice the momentum → pressure $= 2I/c$.'
          }
        ]
      }
    }
  ]
};
