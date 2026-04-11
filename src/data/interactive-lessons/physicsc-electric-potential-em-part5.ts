export const physCEMPotentialPart5Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p5-intro',
      type: 'text' as const,
      content: `# 🔲 Conductors and Potential

**Part 5 of 7 — Electrostatics of Conductors**

---

### Key Facts About Conductors

| Property | Explanation |
|----------|------------|
| $\\vec{E} = 0$ inside | Charges rearrange until field is zero |
| $V$ = constant throughout | $E = 0 \\Rightarrow \\Delta V = 0$ everywhere inside |
| Charge on surface only | No net charge inside a conductor |
| $\\vec{E}$ perpendicular to surface | Otherwise charges would move along surface |

---

### Charge Distribution on Conductors

- Charge concentrates at **sharp points** (small radius of curvature)
- Field is strongest near sharp points
- This is the principle behind lightning rods

> 🔑 A conductor is a single equipotential. The entire surface (and interior) is at the same voltage.`
    },
    {
      id: 'physicsc-electric-potential-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Inside a charged conductor, the electric field is:',
            options: ['Maximum', 'Constant but nonzero', 'Zero', 'Depends on shape'],
            correctAnswer: 2,
            explanation: 'In electrostatic equilibrium, $E = 0$ everywhere inside a conductor.'
          }
        ]
      }
    }
  ]
};
