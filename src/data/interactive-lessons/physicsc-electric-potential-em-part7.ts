export const physCEMPotentialPart7Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p7-intro',
      type: 'text' as const,
      content: `# Electric Potential Review

**Part 7 of 7 — Summary**

---

### Key Formulas

| Formula | Use |
|---------|-----|
| $V = kQ/r$ | Potential from a point charge |
| $V = \\int k\\,dq/r$ | Potential from a continuous distribution |
| $\\Delta V = -\\int \\vec{E} \\cdot d\\vec{l}$ | Potential from the field |
| $\\vec{E} = -\\nabla V$ | Field from the potential |
| $W = q\\,\\Delta V$ | Work to move a charge |
| $U = kq_1q_2/r$ | PE of two point charges |
| $\\oint \\vec{E}\\cdot d\\vec{A} = Q_{\\text{enc}}/\\epsilon_0$ | Gauss's law (field by symmetry) |

> Potential is a *scalar* — superpose by adding numbers. Field is a *vector* — get it from $-\\nabla V$ when you already know $V$.`
    },
    {
      id: 'physicsc-electric-potential-em-p7-worked',
      type: 'text' as const,
      content: `### Worked Example — Two-Sphere Capstone

**Problem.** A small conducting sphere of radius $R_1 = 0.020\\,\\text{m}$ carries charge $Q = +4.0\\,\\text{nC}$. (a) Find the potential at its surface. (b) A test charge $q = +1.0\\,\\text{nC}$ is brought from infinity to a point $r = 0.10\\,\\text{m}$ from the sphere's center. How much work does an external agent do? Use $k = 9.0\\times10^{9}\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2$.

**Step 1 — Surface potential of the sphere.**

$V(R_1) = \\frac{kQ}{R_1} = \\frac{(9.0\\times10^{9})(4.0\\times10^{-9})}{0.020} = \\frac{36}{0.020} = 1800\\,\\text{V}$

**Step 2 — Potential at $r = 0.10\\,\\text{m}$.** Outside the sphere it behaves like a point charge:

$V(r) = \\frac{kQ}{r} = \\frac{(9.0\\times10^{9})(4.0\\times10^{-9})}{0.10} = \\frac{36}{0.10} = 360\\,\\text{V}$

**Step 3 — Work to bring in the test charge.** The external work equals the change in potential energy, $W_{\\text{ext}} = q\\,[V(r) - V(\\infty)]$ with $V(\\infty) = 0$:

$W_{\\text{ext}} = q\\,V(r) = (1.0\\times10^{-9})(360) = 3.6\\times10^{-7}\\,\\text{J}$

**Step 4 — Interpret the sign.** $W_{\\text{ext}} > 0$: positive work is required to push a positive test charge toward the positive sphere, against the repulsion.

**Takeaway.** Compute the *potential* the source produces at the field point, then multiply by the test charge to get energy or work — no vector integral needed once $V$ is known.`
    },
    {
      id: 'physicsc-electric-potential-em-p7-deepen',
      type: 'text' as const,
      content: `### Connecting the Whole Unit

The electric potential unit ties together every tool from the course. Here is the web of relationships in one place:

$\\vec{F} = q\\vec{E} \\quad\\longleftrightarrow\\quad U = qV$

$\\vec{E} = -\\nabla V \\quad\\longleftrightarrow\\quad V = -\\int \\vec{E}\\cdot d\\vec{l}$

$\\vec{E} \\;\\text{(vector, superpose with components)} \\quad\\text{vs.}\\quad V \\;\\text{(scalar, superpose by adding)}$

**Reading the column on the left vs. right:** the left column is everything about *force and field* (vectors); the right column is everything about *energy and potential* (scalars). Multiplying a field quantity by the charge $q$ moves you to the corresponding energy quantity.

**Gauss's law** sits upstream of all of it: from symmetry it hands you $\\vec{E}$, which you then integrate to $V$ or use directly in $\\vec{F} = q\\vec{E}$.

> Master the two-column map — force/field on the left, energy/potential on the right, joined by $\\times q$ and by the gradient — and any problem becomes a matter of choosing the easier column.`
    },
    {
      id: 'physicsc-electric-potential-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'The SI unit of electric potential is the:',
            options: ['Newton', 'Coulomb', 'Volt', 'Ampere'],
            correctAnswer: 2,
            explanation: 'Electric potential is measured in volts (V), equal to joules per coulomb.'
          },
          {
            question: 'A conducting sphere of radius $0.020\\,\\text{m}$ carries $+4.0\\,\\text{nC}$. Its surface potential is:',
            options: ['$180\\,\\text{V}$', '$1800\\,\\text{V}$', '$360\\,\\text{V}$', '$3600\\,\\text{V}$'],
            correctAnswer: 1,
            explanation: '$V = kQ/R = (9.0\\times10^9)(4.0\\times10^{-9})/0.020 = 36/0.020 = 1800\\,\\text{V}$.'
          },
          {
            question: 'The work to bring a $+1.0\\,\\text{nC}$ charge from infinity to a point where the potential is $360\\,\\text{V}$ is:',
            options: ['$3.6\\times10^{-7}\\,\\text{J}$', '$-3.6\\times10^{-7}\\,\\text{J}$', '$360\\,\\text{J}$', '$0$'],
            correctAnswer: 0,
            explanation: '$W = q\\Delta V = (1.0\\times10^{-9})(360 - 0) = 3.6\\times10^{-7}\\,\\text{J}$.'
          },
          {
            question: 'Gauss’s law, $\\oint \\vec{E}\\cdot d\\vec{A} = Q_{\\text{enc}}/\\epsilon_0$, is most directly useful for finding the field when the charge distribution has:',
            options: ['No symmetry', 'High symmetry (spherical, cylindrical, or planar)', 'Only negative charge', 'A finite size'],
            correctAnswer: 1,
            explanation: 'A symmetric distribution lets you pull $E$ out of the flux integral over a well-chosen Gaussian surface, making the field easy to solve for.'
          },
          {
            question: 'Which quantity is a scalar (no direction)?',
            options: ['Electric field $\\vec{E}$', 'Electric potential $V$', 'Force $\\vec{F}$', 'Acceleration'],
            correctAnswer: 1,
            explanation: 'Electric potential is a scalar; the field, force, and acceleration are all vectors. This is why superposing potentials is just addition.'
          },
          {
            question: 'If the potential is known everywhere as a function of position, the electric field is found by:',
            options: ['Integrating $V$', 'Taking the negative gradient, $\\vec{E} = -\\nabla V$', 'Dividing $V$ by charge', 'Multiplying $V$ by $r$'],
            correctAnswer: 1,
            explanation: 'The field is the negative gradient of the potential: $E_x = -\\partial V/\\partial x$, and similarly for $y$ and $z$.'
          }
        ]
      }
    }
  ]
};
