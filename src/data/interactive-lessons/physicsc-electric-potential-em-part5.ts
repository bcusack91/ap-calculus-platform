export const physCEMPotentialPart5Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p5-intro',
      type: 'text' as const,
      content: `# Conductors and Potential

**Part 5 of 7 — Electrostatics of Conductors**

---

### Key Facts About Conductors

| Property | Explanation |
|----------|------------|
| $\\vec{E} = 0$ inside | Charges rearrange until the interior field vanishes |
| $V$ constant throughout | $\\vec{E} = 0 \\Rightarrow \\Delta V = 0$ everywhere inside |
| Charge on the surface only | No net charge in the interior (Gauss's law) |
| $\\vec{E}$ perpendicular to surface | Any tangential field would push surface charge until it vanishes |

Just outside a conductor, the surface field is $E = \\sigma/\\epsilon_0$.

---

### Charge Distribution on Conductors

- Charge concentrates at **sharp points** (small radius of curvature)
- The field is strongest near sharp points
- This is the principle behind lightning rods

> A conductor in equilibrium is a single equipotential — surface and interior are all at the same voltage.`
    },
    {
      id: 'physicsc-electric-potential-em-p5-worked',
      type: 'text' as const,
      content: `### Worked Example — Field and Potential of a Charged Conducting Sphere

**Problem.** A solid conducting sphere of radius $R$ carries total charge $Q$. Use Gauss's law to find $E(r)$ for $r > R$, then integrate to find $V(r)$ outside and the potential of the sphere itself.

**Step 1 — Apply Gauss's law outside ($r > R$).** Choose a concentric spherical Gaussian surface of radius $r$. By symmetry $\\vec{E}$ is radial and uniform on it:

$\\oint \\vec{E}\\cdot d\\vec{A} = E\\,(4\\pi r^2) = \\frac{Q_{\\text{enc}}}{\\epsilon_0} = \\frac{Q}{\\epsilon_0}$

**Step 2 — Solve for the field.**

$E(r) = \\frac{Q}{4\\pi\\epsilon_0 r^2} = \\frac{kQ}{r^2} \\qquad (r > R)$

This is identical to a point charge — all the charge "looks" concentrated at the center.

**Step 3 — Integrate the field to get the potential** (taking $V(\\infty) = 0$):

$V(r) = -\\int_{\\infty}^{r} E\\,dr' = -\\int_{\\infty}^{r}\\frac{kQ}{r'^2}\\,dr' = -kQ\\left[-\\frac{1}{r'}\\right]_{\\infty}^{r} = \\frac{kQ}{r} \\qquad (r \\ge R)$

**Step 4 — Potential of the sphere.** Inside a conductor $E = 0$, so $V$ does not change from the surface inward. Evaluate the outside result at $r = R$:

$V_{\\text{sphere}} = \\frac{kQ}{R} \\qquad (r \\le R)$

**Takeaway.** Gauss's law gives the field from symmetry; integrating $-\\int E\\,dr$ gives the potential; and because $E = 0$ inside a conductor, the *entire* sphere sits at the constant value $kQ/R$.`
    },
    {
      id: 'physicsc-electric-potential-em-p5-deepen',
      type: 'text' as const,
      content: `### Graphing $E(r)$ and $V(r)$ for a Charged Conducting Sphere

Knowing the *shapes* of these graphs is a frequent AP free-response expectation.

**Field $E(r)$:**
- For $r < R$ (inside the conductor): $E = 0$ (flat line on the axis).
- At $r = R$: $E$ **jumps** discontinuously to $kQ/R^2$.
- For $r > R$: $E = kQ/r^2$, decaying as $1/r^2$.

**Potential $V(r)$:**
- For $r \\le R$: $V = kQ/R$, a **constant** (the conductor is an equipotential).
- For $r > R$: $V = kQ/r$, decaying as $1/r$ and joining the constant value *continuously* at $r = R$.

**The key contrast:** the *field* is discontinuous at the surface (because of the surface charge), but the *potential* is always continuous. This follows from $V = -\\int E\\,dr$: integrating even a jump in $E$ produces a smooth $V$.

> Field can jump across a charged surface; potential never does. Sketch the flat-then-$1/r$ shape for $V$ and the zero-then-$1/r^2$ shape for $E$.`
    },
    {
      id: 'physicsc-electric-potential-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Inside a charged conductor (electrostatic equilibrium), the electric field is:',
            options: ['Maximum', 'Constant but nonzero', 'Zero', 'Dependent on shape'],
            correctAnswer: 2,
            explanation: 'In electrostatic equilibrium, $\\vec{E} = 0$ everywhere inside a conductor; otherwise charges would keep moving.'
          },
          {
            question: 'A solid conducting sphere of radius $R$ has charge $Q$. The potential at its center is:',
            options: ['$0$', '$kQ/R$', '$kQ/R^2$', 'Infinite'],
            correctAnswer: 1,
            explanation: 'Since $\\vec{E} = 0$ inside, $V$ is constant throughout and equals its surface value $kQ/R$, including at the center.'
          },
          {
            question: 'Just outside a conductor, the electric field is related to the local surface charge density by:',
            options: ['$E = \\sigma\\epsilon_0$', '$E = \\sigma/\\epsilon_0$', '$E = \\sigma/(2\\epsilon_0)$', '$E = 0$'],
            correctAnswer: 1,
            explanation: 'A Gaussian pillbox at a conductor surface (field zero inside, $E$ perpendicular outside) gives $E = \\sigma/\\epsilon_0$.'
          },
          {
            question: 'For a charged conducting sphere of radius $R$, the field just outside the surface ($r = R^+$) and just inside ($r = R^-$) are, respectively:',
            options: [
              '$kQ/R^2$ and $kQ/R^2$',
              '$kQ/R^2$ and $0$',
              '$0$ and $kQ/R^2$',
              '$0$ and $0$'
            ],
            correctAnswer: 1,
            explanation: 'Outside, Gauss’s law gives $E = kQ/R^2$. Inside a conductor $E = 0$. The field is discontinuous across the surface charge.'
          },
          {
            question: 'Why does charge accumulate near sharp points on a conductor?',
            options: [
              'Sharp points have larger surface area',
              'A smaller radius of curvature supports a higher surface charge density at the same potential',
              'Charge is repelled from flat regions only',
              'Sharp points have lower potential'
            ],
            correctAnswer: 1,
            explanation: 'To keep the whole surface at one potential, regions of small radius of curvature carry higher $\\sigma$ and thus stronger local fields — the basis of lightning rods.'
          },
          {
            question: 'A point charge is placed inside a hollow, uncharged conducting shell. The field in the conducting material of the shell is:',
            options: ['Equal to the point charge field', 'Zero', 'Directed inward', 'Uniform'],
            correctAnswer: 1,
            explanation: 'Induced charges on the inner and outer surfaces arrange so that the field *within the conductor* is zero, as required for electrostatic equilibrium.'
          }
        ]
      }
    }
  ]
};
