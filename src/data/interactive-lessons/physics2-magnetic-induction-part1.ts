export const physics2MagInductPart1Data = {
  topicSlug: 'magnetic-induction',
  sections: [
    {
      id: 'magneticinduction-p1-intro',
      type: 'text' as const,
      content: `# 🧲 Electromagnetic Induction

**Part 1 of 7 — Magnetic Flux**

---

### Magnetic Flux

$$\\\\Phi_B = BA\\\\cos\\\\theta$$

| Variable | Meaning | Units |
|----------|---------|-------|
| $\\\\Phi_B$ | Magnetic flux | Wb (webers) |
| $B$ | Magnetic field | T |
| $A$ | Area | m² |
| $\\\\theta$ | Angle between $\\\\vec{B}$ and area normal | rad |

---

### Changing Flux Induces EMF

Faraday’s Law:
$$\\\\mathcal{E} = -\\\\frac{d\\\\Phi_B}{dt} = -N\\\\frac{\\\\Delta\\\\Phi_B}{\\\\Delta t}$$

Ways to change flux:
1. Change $B$ (turn magnet on/off)
2. Change $A$ (expand/contract loop)
3. Change $\\\\theta$ (rotate loop)
4. Move into/out of field region

> 🔑 The negative sign is **Lenz’s Law**: the induced current opposes the change in flux.`
    },
    {
      id: 'magneticinduction-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes magnetic flux?',
            options: ['A core AP Physics 2 concept', 'Not tested on the AP exam', 'Only relevant for Physics C', 'A concept from chemistry'],
            correctAnswer: 0,
            explanation: 'Magnetic Flux is a fundamental concept tested on the AP Physics 2 exam.'
          }
        ]
      }
    }
  ]
};
