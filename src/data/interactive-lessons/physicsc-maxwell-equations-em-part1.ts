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
The AP course numbers Maxwell's equations as you meet them during the year:

| # | Name | Integral Form |
|---|------|--------------|
| 1 | Gauss's Law for E | $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\varepsilon_0}$ |
| 2 | Gauss's Law for B | $\\oint \\vec{B} \\cdot d\\vec{A} = 0$ |
| 3 | Faraday's Law | $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$ |
| 4 | Ampère's Law + Maxwell's addition | $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc} + \\mu_0\\varepsilon_0 \\frac{d\\Phi_E}{dt}$ |

---

### Physical Meaning

| Equation | Says... |
|----------|---------|
| Gauss for E | Electric charges create electric fields; flux counts enclosed charge |
| Gauss for B | No magnetic monopoles — magnetic field lines form closed loops |
| Faraday | A changing magnetic flux creates a (circulating) electric field |
| Ampère + Maxwell | Currents create magnetic fields, and so does a changing electric field |

You will use the first three, and the current term of the fourth, quantitatively. Maxwell's addition (the changing-$\\vec{E}$ term) is needed only as an idea: a changing electric field produces a magnetic field.

> 🔑 Maxwell's equations are the complete set of laws of classical electromagnetism. (They also predict electromagnetic waves, which are not assessed on the AP Physics C: E&M exam.)`
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
            options: ['Gauss\'s law for $\\vec{E}$', 'Gauss\'s law for $\\vec{B}$', 'Faraday\'s law', 'Ampère\'s law'],
            correctAnswer: 1,
            explanation: '$\\oint \\vec{B} \\cdot d\\vec{A} = 0$ — the net magnetic flux through any closed surface is zero, so no isolated magnetic pole can sit inside it.'
          },
          {
            question: 'Maxwell\'s addition to Ampère\'s law states that a magnetic field is also produced by:',
            options: ['A changing electric field', 'A steady, uniform electric field', 'A stationary electric charge', 'An isolated magnetic monopole'],
            correctAnswer: 0,
            explanation: 'Just as a moving charge creates a magnetic field, a changing electric field does too. Static charges and steady electric fields produce no magnetic field, and monopoles do not exist.'
          },
          {
            question: 'Faraday\'s law, $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$, implies that a changing magnetic flux produces:',
            options: ['A static charge on the loop', 'A circulating electric field', 'A magnetic monopole', 'No electric field at all'],
            correctAnswer: 1,
            explanation: 'A time-varying magnetic flux makes the line integral of $\\vec{E}$ around a closed loop nonzero, so the induced electric field circulates (it is non-conservative) and drives an EMF.'
          }
        ]
      }
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
      id: 'physicsc-maxwell-equations-em-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A point charge is enclosed by both a small sphere and a large cube. The total electric flux through each surface is:',
            options: ['Larger for the cube', 'Larger for the sphere', 'Equal for the two shapes', 'Zero for the cube'],
            correctAnswer: 2,
            explanation: 'Gauss\'s Law gives $\\Phi_E = Q_{enc}/\\varepsilon_0$, which depends only on the enclosed charge — not on the size or shape of the closed surface.'
          },
          {
            question: 'If the charge enclosed by a Gaussian surface doubles while the surface is unchanged, the net flux through it:',
            options: ['Stays the same', 'Doubles', 'Halves', 'Quadruples'],
            correctAnswer: 1,
            explanation: 'Flux is directly proportional to enclosed charge: $\\Phi_E = Q_{enc}/\\varepsilon_0$. Doubling $Q_{enc}$ doubles the flux.'
          },
          {
            question: 'In the AP course\'s numbering, Faraday\'s law of induction is Maxwell\'s:',
            options: ['Third equation', 'First equation', 'Second equation', 'Fourth equation'],
            correctAnswer: 0,
            explanation: 'Gauss\'s law is the first, Gauss\'s law for magnetism the second, Faraday\'s law the third, and Ampère\'s law with Maxwell\'s addition the fourth.'
          }
        ]
      }
    }
  ]
};
