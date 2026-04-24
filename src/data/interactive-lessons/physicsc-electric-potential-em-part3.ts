export const physCEMPotentialPart3Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p3-intro',
      type: 'text' as const,
      content: `# 🔗 Potential and Electric Field

**Part 3 of 7 — $\\vec{E}$ from $V$ and $V$ from $\\vec{E}$**

---

### Finding E from V

$$E_x = -\\frac{\\partial V}{\\partial x}, \\quad E_y = -\\frac{\\partial V}{\\partial y}, \\quad E_z = -\\frac{\\partial V}{\\partial z}$$

$$\\vec{E} = -\\nabla V$$

For spherical symmetry: $E = -dV/dr$

---

### Finding V from E

$$V(r) - V(\\infty) = -\\int_{\\infty}^{r} \\vec{E} \\cdot d\\vec{l}$$

> 🔑 $\\vec{E}$ points in the direction of steepest decrease in $V$.`
    },
    {
      id: 'physicsc-electric-potential-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $V = 3x^2 + 2y$, then $E_x =$',
            options: ['$3x^2$', '$-6x$', '$6x$', '$2$'],
            correctAnswer: 1,
            explanation: '$E_x = -\\partial V/\\partial x = -6x$.'
          },
          {
            question: 'The electric field is related to potential by:',
            options: ['$E = V/d$', '$E = -dV/dr$', '$E = V \\cdot r$', '$E = V^2$'],
            correctAnswer: 1,
            explanation: 'The field is the negative gradient of the potential.'
          }
        ]
      }
    }
  ]
};
