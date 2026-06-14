export const physCEMMaxwellPart1Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p1-intro',
      type: 'text' as const,
      content: `# 🌐 Maxwell's Equations

**Part 1 of 7 — The Four Laws of Electromagnetism**

---

### The Four Equations

| # | Name | Integral Form |
|---|------|--------------|
| 1 | Gauss's Law (E) | $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\varepsilon_0}$ |
| 2 | Gauss's Law (B) | $\\oint \\vec{B} \\cdot d\\vec{A} = 0$ |
| 3 | Faraday's Law | $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$ |
| 4 | Ampere-Maxwell | $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0\\left(I + \\varepsilon_0 \\frac{d\\Phi_E}{dt}\\right)$ |

---

### Physical Meaning

| Equation | Says... |
|----------|---------|
| Gauss (E) | Electric charges create electric fields |
| Gauss (B) | No magnetic monopoles |
| Faraday | Changing B creates E |
| Ampere-Maxwell | Currents AND changing E create B |

> 🔑 Maxwell's equations unify electricity and magnetism and predict electromagnetic waves.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p1-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Gauss's Law with Calculus

A point charge $Q = +4.0 \\text{ nC}$ sits at the center of a sphere of radius $r = 0.20 \\text{ m}$. Find the electric flux through the sphere, then the field magnitude on its surface.

**Step 1 — Apply Gauss's Law.** The closed-surface integral gives the enclosed charge over $\\varepsilon_0$:

$\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\varepsilon_0} = \\frac{4.0 \\times 10^{-9}}{8.85 \\times 10^{-12}} \\approx 452 \\text{ N}\\cdot\\text{m}^2/\\text{C}$

**Step 2 — Exploit spherical symmetry.** By symmetry $\\vec{E}$ is radial and constant in magnitude over the surface, so $\\oint \\vec{E} \\cdot d\\vec{A} = E \\oint dA = E(4\\pi r^2)$.

**Step 3 — Solve for the field.** Setting $E(4\\pi r^2) = \\frac{Q}{\\varepsilon_0}$ gives the familiar point-charge result:

$E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{r^2} = \\frac{(8.99 \\times 10^9)(4.0 \\times 10^{-9})}{(0.20)^2} \\approx 899 \\text{ N/C}$

> 🔑 Gauss's Law is most powerful when symmetry lets you pull $E$ outside the surface integral.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which Maxwell equation says there are no magnetic monopoles?',
            options: ['Gauss\'s Law for E', 'Gauss\'s Law for B', 'Faraday\'s Law', 'Ampere-Maxwell'],
            correctAnswer: 1,
            explanation: '$\\oint \\vec{B} \\cdot d\\vec{A} = 0$ — the net magnetic flux through any closed surface is zero, so no net magnetic charge exists.'
          },
          {
            question: 'Maxwell\'s addition to Ampere\'s law was the:',
            options: ['Magnetic current', 'Displacement current $\\varepsilon_0 \\frac{d\\Phi_E}{dt}$', 'Gravitational term', 'Quantum correction'],
            correctAnswer: 1,
            explanation: 'Maxwell added the displacement-current term $\\varepsilon_0 \\frac{d\\Phi_E}{dt}$ to account for the magnetic effect of a changing electric flux.'
          },
          {
            question: 'A point charge is enclosed by both a small sphere and a large cube. The total electric flux through each surface is:',
            options: ['Larger for the cube', 'Larger for the sphere', 'The same for both', 'Zero for the cube'],
            correctAnswer: 2,
            explanation: 'Gauss\'s Law gives $\\Phi_E = Q_{enc}/\\varepsilon_0$, which depends only on the enclosed charge — not on the size or shape of the closed surface.'
          },
          {
            question: 'Faraday\'s Law, $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$, implies that a changing magnetic flux produces:',
            options: ['A static charge', 'A circulating (non-conservative) electric field', 'A magnetic monopole', 'Zero EMF'],
            correctAnswer: 1,
            explanation: 'A time-varying magnetic flux drives a nonzero line integral of $\\vec{E}$ around a closed loop, i.e. an induced, non-conservative (circulating) electric field that produces an EMF.'
          },
          {
            question: 'If the charge enclosed by a Gaussian surface doubles while the surface is unchanged, the net flux through it:',
            options: ['Stays the same', 'Doubles', 'Halves', 'Quadruples'],
            correctAnswer: 1,
            explanation: 'Flux is directly proportional to enclosed charge: $\\Phi_E = Q_{enc}/\\varepsilon_0$. Doubling $Q_{enc}$ doubles the flux.'
          },
          {
            question: 'Which physical insight is unique to combining all four of Maxwell\'s equations?',
            options: ['Charges attract', 'Electromagnetic waves propagate at speed $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$', 'Energy is conserved', 'Current makes heat'],
            correctAnswer: 1,
            explanation: 'Only when the four equations act together do they predict self-sustaining EM waves traveling at $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ — light itself.'
          }
        ]
      }
    }
  ]
};
