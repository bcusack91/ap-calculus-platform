export const physCEMPotentialPart6Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p6-intro',
      type: 'text' as const,
      content: `# Electric Potential Workshop

**Part 6 of 7 — Strategies and Practice**

---

### Problem-Solving Framework

1. **Identify** the charge configuration and the symmetry
2. **Choose** between $V$ from $\\vec{E}$ (integration) or $V$ from the charges (superposition)
3. **Calculate** the potential at the points of interest
4. **Use** $\\Delta V$ to find work, KE changes, or $\\vec{E}$ via the gradient

### Key Relationships

$W_{\\text{field}} = q(V_i - V_f), \\qquad \\Delta KE = q(V_i - V_f), \\qquad \\vec{E} = -\\nabla V$

> Sign rule of thumb: a positive charge speeds up moving to **lower** potential; an electron speeds up moving to **higher** potential.

> A useful energy unit: $1\\,\\text{eV}$ is the energy gained by a charge of magnitude $e$ moving through $1\\,\\text{V}$.`
    },
    {
      id: 'physicsc-electric-potential-em-p6-worked',
      type: 'text' as const,
      content: `### Worked Example — Accelerating an Electron Through a Potential Difference

**Problem.** An electron (mass $m = 9.11\\times10^{-31}\\,\\text{kg}$, charge magnitude $e = 1.60\\times10^{-19}\\,\\text{C}$) starts from rest and is accelerated toward a region of *higher* potential, crossing $\\Delta V = 100\\,\\text{V}$. Find its final kinetic energy (in eV and in joules) and its final speed.

**Step 1 — Decide whether it speeds up.** The electron is negative, so the electric force pushes it toward higher potential. Moving that way, it **gains** kinetic energy.

**Step 2 — Compute the energy gained.** The magnitude of the kinetic-energy change equals the charge magnitude times the potential difference crossed:

$\\Delta KE = e\\,|\\Delta V| = (1.60\\times10^{-19})(100) = 1.60\\times10^{-17}\\,\\text{J}$

In electron-volts this is simply $\\Delta KE = 100\\,\\text{eV}$, because one electron through $100\\,\\text{V}$ gains $100\\,\\text{eV}$ by definition.

**Step 3 — Relate energy to speed.** Starting from rest, all of $\\Delta KE$ becomes $\\tfrac12 m v^2$:

$\\frac{1}{2}m v^2 = 1.60\\times10^{-17}\\,\\text{J}$

**Step 4 — Solve for $v$.**

$v = \\sqrt{\\frac{2(1.60\\times10^{-17})}{9.11\\times10^{-31}}} = \\sqrt{3.51\\times10^{13}} \\approx 5.9\\times10^{6}\\,\\text{m/s}$

**Takeaway.** The eV is built for this: a charge of magnitude $e$ through $\\Delta V$ volts gains $\\Delta V$ eV. Convert to joules before using $\\tfrac12 m v^2$ to get a speed.`
    },
    {
      id: 'physicsc-electric-potential-em-p6-deepen',
      type: 'text' as const,
      content: `### A Decision Tree for Potential Problems

Faced with an unfamiliar configuration, route yourself quickly:

**1. Are you given the field $\\vec{E}$?**
- Yes, and it is symmetric → integrate $V = -\\int \\vec{E}\\cdot d\\vec{l}$.
- Yes, uniform field → $\\Delta V = -E\\,d$ along the field.

**2. Are you given the charges (points or a distribution)?**
- Point charges → superpose: $V = \\sum kq_i/r_i$ (just add numbers).
- Continuous distribution → set up $dq$ and integrate $\\int k\\,dq/r$.

**3. Do you need the field but already have $V$?**
- Differentiate: $\\vec{E} = -\\nabla V$.

**4. Do you need work, speed, or KE?**
- Use $W_{\\text{field}} = q(V_i - V_f)$ and the work–energy theorem $\\Delta KE = W$.
- Convert eV to joules ($1\\,\\text{eV} = 1.6\\times10^{-19}\\,\\text{J}$) before any $\\tfrac12 mv^2$.

> Scalar tools (potential, energy) are almost always less error-prone than vector tools (field, force) — reach for them first.`
    },
    {
      id: 'physicsc-electric-potential-em-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'An electron moves from a region at $V = 100\\,\\text{V}$ to a region at $V = 50\\,\\text{V}$. Its kinetic energy:',
            options: ['Decreases by 50 eV', 'Increases by 50 eV', 'Stays the same', 'Depends on path'],
            correctAnswer: 0,
            explanation: 'An electron speeds up moving toward higher potential. Here it moves toward lower potential ($100 \\to 50\\,\\text{V}$), so it slows down: its kinetic energy decreases by $e|\\Delta V| = 50\\,\\text{eV}$.'
          },
          {
            question: 'A proton starts from rest and is accelerated through a $200\\,\\text{V}$ potential difference (toward lower potential). Its final kinetic energy is:',
            options: ['$100\\,\\text{eV}$', '$200\\,\\text{eV}$', '$400\\,\\text{eV}$', '$0$'],
            correctAnswer: 1,
            explanation: 'A proton ($+e$) speeds up moving toward lower potential. The energy gained is $e|\\Delta V| = (1)(200) = 200\\,\\text{eV}$.'
          },
          {
            question: 'One electron-volt expressed in joules is approximately:',
            options: ['$1.6\\times10^{-19}\\,\\text{J}$', '$1.6\\times10^{19}\\,\\text{J}$', '$9.1\\times10^{-31}\\,\\text{J}$', '$1\\,\\text{J}$'],
            correctAnswer: 0,
            explanation: '$1\\,\\text{eV} = e \\times 1\\,\\text{V} = (1.6\\times10^{-19}\\,\\text{C})(1\\,\\text{V}) = 1.6\\times10^{-19}\\,\\text{J}$.'
          },
          {
            question: 'A positive charge $q$ is moved from point $i$ to point $f$ with $V_f > V_i$. The work done by the electric field, $W_{\\text{field}} = q(V_i - V_f)$, is:',
            options: ['Positive', 'Negative', 'Zero', 'Undefined'],
            correctAnswer: 1,
            explanation: 'With $V_f > V_i$, the factor $(V_i - V_f) < 0$, and $q > 0$, so $W_{\\text{field}} < 0$. The field opposes a positive charge climbing in potential, doing negative work.'
          },
          {
            question: 'An alpha particle (charge $+2e$) is accelerated from rest through $1000\\,\\text{V}$. The kinetic energy it gains is:',
            options: ['$1000\\,\\text{eV}$', '$2000\\,\\text{eV}$', '$500\\,\\text{eV}$', '$4000\\,\\text{eV}$'],
            correctAnswer: 1,
            explanation: 'Energy gained $= |q||\\Delta V| = (2e)(1000\\,\\text{V}) = 2000\\,\\text{eV}$. Doubling the charge doubles the energy.'
          },
          {
            question: 'A charge is moved between two fixed points along two different paths in an electrostatic field. The work done by the field is:',
            options: [
              'Larger on the longer path',
              'The same on both paths',
              'Zero on any path',
              'Dependent on the speed'
            ],
            correctAnswer: 1,
            explanation: 'The electrostatic force is conservative, so $W_{\\text{field}} = q(V_i - V_f)$ depends only on the endpoints, not on the path taken.'
          }
        ]
      }
    }
  ]
};
