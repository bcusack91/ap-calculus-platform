export const physCEMPotentialPart3Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p3-intro',
      type: 'text' as const,
      content: `# Potential and Electric Field

**Part 3 of 7 — $\\vec{E}$ from $V$ and $V$ from $\\vec{E}$**

---

### Finding E from V

$E_x = -\\frac{\\partial V}{\\partial x}, \\quad E_y = -\\frac{\\partial V}{\\partial y}, \\quad E_z = -\\frac{\\partial V}{\\partial z}$

$\\vec{E} = -\\nabla V$

For spherical symmetry: $E_r = -\\dfrac{dV}{dr}$.

---

### Finding V from E

$V(r) - V(\\infty) = -\\int_{\\infty}^{r} \\vec{E} \\cdot d\\vec{l}$

> $\\vec{E}$ points in the direction of steepest *decrease* of $V$.`
    },
    {
      id: 'physicsc-electric-potential-em-p3-worked',
      type: 'text' as const,
      content: `### Worked Example — The Gradient in Two Dimensions

**Problem.** In a region the potential is $V(x,y) = (4.0\\,\\text{V/m}^2)\\,x^2 y$. Find the electric-field vector $\\vec{E}$ at the point $(x, y) = (1.0\\,\\text{m}, 2.0\\,\\text{m})$.

**Step 1 — Take partial derivatives.** Treat the other variable as a constant each time.

$\\frac{\\partial V}{\\partial x} = 4\\cdot 2x\\,y = 8xy, \\qquad \\frac{\\partial V}{\\partial y} = 4x^2$

**Step 2 — Apply $\\vec{E} = -\\nabla V$.**

$E_x = -\\frac{\\partial V}{\\partial x} = -8xy, \\qquad E_y = -\\frac{\\partial V}{\\partial y} = -4x^2$

**Step 3 — Evaluate at $(1, 2)$.**

$E_x = -8(1)(2) = -16\\,\\text{V/m}, \\qquad E_y = -4(1)^2 = -4\\,\\text{V/m}$

**Step 4 — Combine into a vector and find the magnitude.**

$\\vec{E} = (-16\\,\\hat{x} - 4\\,\\hat{y})\\,\\text{V/m}$

$|\\vec{E}| = \\sqrt{(-16)^2 + (-4)^2} = \\sqrt{256 + 16} = \\sqrt{272} \\approx 16.5\\,\\text{V/m}$

**Takeaway.** Each component of $\\vec{E}$ is *minus* the partial derivative of $V$ in that direction; differentiate, then negate, then evaluate.`
    },
    {
      id: 'physicsc-electric-potential-em-p3-deepen',
      type: 'text' as const,
      content: `### Which Direction Should You Compute — V from E, or E from V?

Both directions appear on the AP exam; pick the easier path for the given information.

**Use $V = -\\int \\vec{E}\\cdot d\\vec{l}$ (integration) when you know the field.** This is natural right after a Gauss's-law problem: you already have $E(r)$, so integrate inward from infinity to get $V(r)$.

**Use $\\vec{E} = -\\nabla V$ (differentiation) when you know the potential.** This is natural after a superposition problem: scalar potentials are easy to add, and differentiating the sum gives the (otherwise messy) vector field.

**Equipotentials and field lines.** Because $\\vec{E} = -\\nabla V$:
- Field lines are always **perpendicular** to equipotential surfaces.
- $\\vec{E}$ points "downhill" — from high $V$ to low $V$.
- Where equipotentials are densely spaced, $|\\vec{E}|$ is large (steep gradient).

> Field known → integrate to get $V$. Potential known → differentiate to get $\\vec{E}$. The gradient is the bridge between the two.`
    },
    {
      id: 'physicsc-electric-potential-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
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
            options: ['$E = V/d$ always', '$\\vec{E} = -\\nabla V$', '$E = V \\cdot r$', '$E = V^2$'],
            correctAnswer: 1,
            explanation: 'The field is the negative gradient of the potential. $E = V/d$ is only the special case of a uniform field.'
          },
          {
            question: 'For the potential $V = 3x^2 + 2y$, the $y$-component of the field is:',
            options: ['$-2$', '$2$', '$0$', '$-2y$'],
            correctAnswer: 0,
            explanation: '$E_y = -\\partial V/\\partial y = -2$ (constant, since $V$ is linear in $y$).'
          },
          {
            question: 'A potential is constant everywhere in some region: $V = 12\\,\\text{V}$. The electric field in that region is:',
            options: ['$12\\,\\text{V/m}$', 'Zero', '$-12\\,\\text{V/m}$', 'Cannot be determined'],
            correctAnswer: 1,
            explanation: 'The gradient of a constant is zero, so $\\vec{E} = -\\nabla V = 0$. A region of constant potential has no field.'
          },
          {
            question: 'Outside a point charge, $V(r) = kQ/r$. The radial field $E_r = -dV/dr$ equals:',
            options: ['$-kQ/r^2$', '$kQ/r^2$', '$kQ/r$', '$2kQ/r^3$'],
            correctAnswer: 1,
            explanation: '$E_r = -d/dr(kQ/r) = -kQ(-1/r^2) = kQ/r^2$, the familiar Coulomb field.'
          },
          {
            question: 'Which statement about $\\vec{E}$ and $V$ is correct?',
            options: [
              '$V$ can be large where $\\vec{E} = 0$',
              '$\\vec{E}$ must be zero wherever $V$ is large',
              '$V$ must be zero wherever $\\vec{E} = 0$',
              '$\\vec{E}$ points toward higher potential'
            ],
            correctAnswer: 0,
            explanation: 'It is the *gradient* of $V$, not $V$ itself, that determines $\\vec{E}$. A region can have large constant $V$ with zero field; and $\\vec{E}$ points toward lower potential.'
          }
        ]
      }
    }
  ]
};
