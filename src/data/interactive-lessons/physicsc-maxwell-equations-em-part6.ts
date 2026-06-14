export const physCEMMaxwellPart6Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Maxwell Workshop

**Part 6 of 7 — Practice**

---

### AP Physics C E&M: Maxwell Topics

| Concept | What to Know |
|---------|-------------|
| Identify which equation applies | Match to symmetry and context |
| Displacement current | $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$ |
| EM wave speed | $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$ |
| E/B ratio | $E = cB$ |
| Poynting vector | Direction of energy flow |
| Radiation pressure | $P = \\frac{I}{c}$ (absorber), $\\frac{2I}{c}$ (reflector) |`
    },
    {
      id: 'physicsc-maxwell-equations-em-p6-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Faraday's Law for an Induced Field

A uniform magnetic field fills a circular region of radius $R = 0.10 \\text{ m}$ and increases at $\\frac{dB}{dt} = 0.50 \\text{ T/s}$. Find the induced electric field magnitude at radius $r = 0.10 \\text{ m}$ (the edge).

**Step 1 — Write Faraday's Law.** Around a circular loop of radius $r$, symmetry makes $\\vec{E}$ tangential and constant, so

$\\oint \\vec{E} \\cdot d\\vec{l} = E(2\\pi r) = -\\frac{d\\Phi_B}{dt}$

**Step 2 — Express the flux.** For $r \\le R$ the loop encloses the full field over area $\\pi r^2$:

$\\Phi_B = B\\,\\pi r^2 \\quad\\Rightarrow\\quad \\frac{d\\Phi_B}{dt} = \\pi r^2 \\frac{dB}{dt}$

**Step 3 — Solve for $E$.** Taking magnitudes,

$E = \\frac{r}{2}\\frac{dB}{dt} = \\frac{0.10}{2}(0.50) = 0.025 \\text{ N/C}$

> 🔑 Inside the field region $E \\propto r$; outside it ($r > R$) the enclosed flux is fixed at $B\\pi R^2$, so $E \\propto 1/r$.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an EM wave, $\\vec{E}$ and $\\vec{B}$ are:',
            options: ['Parallel', 'Anti-parallel', 'Perpendicular', 'At 45°'],
            correctAnswer: 2,
            explanation: 'In an EM wave, $\\vec{E} \\perp \\vec{B}$ and both are perpendicular to the direction of propagation.'
          },
          {
            question: 'Which symmetry is most useful for applying Ampere-Maxwell to a long straight wire?',
            options: ['Planar', 'Cylindrical', 'Spherical', 'None'],
            correctAnswer: 1,
            explanation: 'Cylindrical (Amperian loop) symmetry lets $\\vec{B}$ be constant and tangential around the loop, so $\\oint \\vec{B}\\cdot d\\vec{l} = B(2\\pi r)$.'
          },
          {
            question: 'For the induced electric field of Faraday\'s Law inside a uniform changing-field region, $E$ depends on radius as:',
            options: ['$E \\propto 1/r$', '$E \\propto r$', '$E$ is constant', '$E \\propto r^2$'],
            correctAnswer: 1,
            explanation: 'Inside the region $\\Phi_B = B\\pi r^2$, giving $E(2\\pi r) = \\pi r^2 \\frac{dB}{dt}$, so $E = \\frac{r}{2}\\frac{dB}{dt} \\propto r$.'
          },
          {
            question: 'An EM wave with intensity $I$ strikes a perfect absorber. The pressure it exerts is:',
            options: ['$\\frac{2I}{c}$', '$\\frac{I}{c}$', '$Ic$', '$\\frac{I}{c^2}$'],
            correctAnswer: 1,
            explanation: 'A perfect absorber takes all the photon momentum once, giving $P = I/c$ (half the reflector value).'
          },
          {
            question: 'Which Maxwell equation has zero on the right-hand side, expressing the absence of magnetic monopoles?',
            options: ['$\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{Q}{\\varepsilon_0}$', '$\\oint \\vec{B}\\cdot d\\vec{A} = 0$', '$\\oint \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$', '$\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I$'],
            correctAnswer: 1,
            explanation: 'Gauss\'s Law for magnetism, $\\oint \\vec{B}\\cdot d\\vec{A} = 0$, states the net magnetic flux through any closed surface is zero.'
          }
        ]
      }
    }
  ]
};
