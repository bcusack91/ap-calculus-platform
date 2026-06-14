export const physCEMPotentialPart4Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p4-intro',
      type: 'text' as const,
      content: `# Potential of Charge Distributions

**Part 4 of 7 — Superposition of Potentials**

---

### Superposition Principle

For multiple point charges:

$V = \\sum_i \\frac{kq_i}{r_i}$

> Unlike the electric field, potential is a **scalar** — no vector components to track.

---

### Continuous Distributions

$V = \\int \\frac{k\\,dq}{r}$

Common results:
| Distribution | Potential |
|-------------|-----------|
| Point charge | $V = kQ/r$ |
| Conducting sphere | $V = kQ/R$ (surface), $V = kQ/r$ (outside) |
| Ring (on axis) | $V = kQ/\\sqrt{R^2 + x^2}$ |
| Disk (on axis) | $V = \\dfrac{\\sigma}{2\\epsilon_0}\\left(\\sqrt{R^2+x^2} - x\\right)$ |

> Set up $dq = \\lambda\\,dl$ (line), $\\sigma\\,dA$ (surface), or $\\rho\\,dV$ (volume), then integrate $k\\,dq/r$.`
    },
    {
      id: 'physicsc-electric-potential-em-p4-worked',
      type: 'text' as const,
      content: `### Worked Example — Potential on the Axis of a Charged Ring

**Problem.** A thin ring of radius $R$ carries total charge $Q$ uniformly distributed. Derive the potential at a point on the axis a distance $x$ from the center, then evaluate $E_x$ from it.

**Step 1 — Set up the charge element.** A small arc carries charge $dq$. Every point on the ring is the *same* distance from the axial field point:

$r = \\sqrt{R^2 + x^2}$

**Step 2 — Write the potential integral.** Because $r$ is constant for all $dq$, it comes out of the integral:

$V = \\int \\frac{k\\,dq}{r} = \\frac{k}{\\sqrt{R^2 + x^2}}\\int dq$

**Step 3 — Integrate.** The total charge is $\\int dq = Q$:

$V(x) = \\frac{kQ}{\\sqrt{R^2 + x^2}}$

**Step 4 — Get the axial field by differentiating.** By symmetry the field on the axis is purely along $x$, so $E_x = -dV/dx$. Write $V = kQ(R^2 + x^2)^{-1/2}$:

$E_x = -\\frac{dV}{dx} = -kQ\\cdot\\left(-\\tfrac12\\right)(R^2 + x^2)^{-3/2}(2x)$

$E_x = \\frac{kQ\\,x}{(R^2 + x^2)^{3/2}}$

**Step 5 — Sanity checks.** At the center $x = 0$: $V = kQ/R$ and $E_x = 0$ (symmetry). For $x \\gg R$: $V \\approx kQ/x$ and $E_x \\approx kQ/x^2$ — the ring looks like a point charge.

**Takeaway.** When all source charge is equidistant from the field point, the scalar potential integral is trivial — and differentiating $V$ gives the field for free.`
    },
    {
      id: 'physicsc-electric-potential-em-p4-deepen',
      type: 'text' as const,
      content: `### Setting Up the Charge Element $dq$

The hardest part of a continuous-distribution integral is writing $dq$ correctly. Match the geometry:

| Geometry | Density | Charge element |
|----------|---------|----------------|
| Line / rod | linear $\\lambda$ | $dq = \\lambda\\,dl$ |
| Surface / sheet | surface $\\sigma$ | $dq = \\sigma\\,dA$ |
| Volume | volume $\\rho$ | $dq = \\rho\\,dV$ |

Then express the distance $r$ from that element to the field point **in the same variable** you integrate over, and evaluate

$V = \\int \\frac{k\\,dq}{r}$

**When is the potential integral easy?** If every $dq$ is the *same* distance from the field point (like the ring's axis), $r$ is constant and pulls out of the integral, leaving just $\\int dq = Q$. If $r$ varies, you get a genuine single-variable integral — often a logarithm (rod) or a square root (disk).

**Symmetry shortcut.** For an axial field, once $V(x)$ is known you can get the on-axis field from $E_x = -dV/dx$ instead of doing a separate vector integral.

> Pick the right $dq$, write $r$ in the integration variable, integrate the *scalar* $k\\,dq/r$, then differentiate if you also need the field.`
    },
    {
      id: 'physicsc-electric-potential-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'The advantage of using potential (vs. field) for multiple charges is:',
            options: ['Potential is always positive', 'Potential is a scalar (no vectors to add)', 'Potential is always zero', 'No calculation is needed'],
            correctAnswer: 1,
            explanation: 'Potential is a scalar — you add numbers, not vectors. This is much simpler for complex configurations.'
          },
          {
            question: 'On the axis of a uniformly charged ring (radius $R$, charge $Q$), the potential at the center ($x = 0$) is:',
            options: ['$0$', '$kQ/R$', '$kQ/R^2$', 'Infinite'],
            correctAnswer: 1,
            explanation: 'Set $x = 0$ in $V = kQ/\\sqrt{R^2 + x^2}$ to get $V = kQ/R$. Every charge element is a distance $R$ from the center.'
          },
          {
            question: 'On the axis of a charged ring, the field at the center is zero even though the potential is nonzero because:',
            options: [
              'The potential is also zero there',
              'By symmetry the field contributions cancel, while the scalar potentials simply add',
              'The charge is zero',
              'The field is always zero on any axis'
            ],
            correctAnswer: 1,
            explanation: 'Field contributions from opposite arcs cancel as vectors at the center, but potentials (scalars) add constructively, giving $V = kQ/R \\ne 0$ with $E = 0$.'
          },
          {
            question: 'For a point on the ring axis very far away ($x \\gg R$), the potential approaches:',
            options: ['$kQ/R$', '$kQ/x$', '$kQ/x^2$', '$0$ exactly'],
            correctAnswer: 1,
            explanation: 'For $x \\gg R$, $\\sqrt{R^2 + x^2} \\approx x$, so $V \\approx kQ/x$ — the ring looks like a point charge.'
          },
          {
            question: 'To find the potential of a continuous charge distribution, the correct setup is:',
            options: [
              '$V = \\int k\\,dq\\,r$',
              '$V = \\int \\frac{k\\,dq}{r}$',
              '$V = \\int \\frac{k\\,dq}{r^2}$',
              '$V = \\sum \\vec{E}\\,dr$'
            ],
            correctAnswer: 1,
            explanation: 'Each charge element contributes $dV = k\\,dq/r$; integrating sums these scalar contributions. The $1/r^2$ form is for the field, not the potential.'
          },
          {
            question: 'A uniformly charged rod of length $L$ and linear density $\\lambda$ has a charge element $dq = \\lambda\\,dx$. The potential it produces at a point a distance $r$ away is found by integrating:',
            options: [
              '$\\int k\\lambda\\,dx$',
              '$\\int \\frac{k\\lambda\\,dx}{r}$',
              '$\\int \\frac{k\\lambda}{x}\\,dx$ regardless of geometry',
              '$k\\lambda L / r$ with no integral needed'
            ],
            correctAnswer: 1,
            explanation: 'Substitute $dq = \\lambda\\,dx$ into $dV = k\\,dq/r$, giving $\\int k\\lambda\\,dx/r$, where $r$ is the (generally $x$-dependent) distance from each element to the field point.'
          }
        ]
      }
    }
  ]
};
