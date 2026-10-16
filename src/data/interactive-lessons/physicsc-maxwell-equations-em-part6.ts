export const physCEMMaxwellPart6Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Maxwell Workshop

**Part 6 of 7 — Practice**

---

### Which Equation Does the Job?

| You are asked for... | Equation | Tool |
|---|---|---|
| $\\vec{E}$ of a symmetric charge distribution | Gauss's law | Sphere, coaxial cylinder, or pillbox |
| Net magnetic flux through a closed surface | Gauss's law for magnetism | Always zero |
| EMF in a loop, or the induced $\\vec{E}$ near changing flux | Faraday's law | $\\mathcal{E} = -N\\,d\\Phi_B/dt$; symmetric circle for $E$ |
| $\\vec{B}$ of a symmetric current | Ampère's law | Circle (wire, cylinder) or rectangle (solenoid, slab) |
| Why a charging capacitor's gap has a magnetic field | Maxwell's addition | Qualitative only |

Many problems chain two or three of these: one law gives a field, another uses how that field changes.`
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
            question: 'Which law gives the magnetic field inside a long, ideal solenoid most directly?',
            options: ['Ampère\'s law', 'Biot–Savart law', 'Gauss\'s law', 'Faraday\'s law'],
            correctAnswer: 0,
            explanation: 'A rectangular Amperian loop with one side inside the solenoid gives $BL = \\mu_0 nLI$, so $B = \\mu_0 nI$ in one line.'
          },
          {
            question: 'Which symmetry makes Ampère\'s law useful for a long straight wire?',
            options: ['Planar', 'Cylindrical', 'Spherical', 'None'],
            correctAnswer: 1,
            explanation: 'Cylindrical symmetry makes $\\vec{B}$ constant and tangent around a circle centered on the wire, so $\\oint \\vec{B}\\cdot d\\vec{l} = B(2\\pi r)$.'
          }
        ]
      }
    },
    {
      id: 'physicsc-maxwell-equations-em-p6-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — One Solenoid, Three Equations

A long solenoid of radius $R = 0.030 \\text{ m}$ has $n = 2000$ turns per meter. At one instant its current is $I = 4.0 \\text{ A}$ and increasing at $10 \\text{ A/s}$.

**(a) Field inside — Ampère's law.**
$B = \\mu_0 n I = (4\\pi \\times 10^{-7})(2000)(4.0) \\approx 1.0 \\times 10^{-2} \\text{ T}$

**(b) Flux through a closed box that straddles the windings — Gauss's law for magnetism.**
Whatever the box's shape, the net flux is $0$: field lines that enter it inside the solenoid leave it elsewhere.

**(c) Induced electric field at $r = 0.060 \\text{ m}$, outside — Faraday's law.**
$\\frac{dB}{dt} = \\mu_0 n \\frac{dI}{dt} = (4\\pi \\times 10^{-7})(2000)(10) = 2.5 \\times 10^{-2} \\text{ T/s}$
A circle of radius $r$ encloses flux $B\\pi R^2$, so
$E = \\frac{R^2}{2r}\\frac{dB}{dt} = \\frac{(0.030)^2}{2(0.060)}(2.5 \\times 10^{-2}) \\approx 1.9 \\times 10^{-4} \\text{ V/m}$

> 🔑 Inside the field region $E \\propto r$; outside it the enclosed flux is fixed at $B\\pi R^2$, so $E \\propto 1/r$.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'For the induced electric field of Faraday\'s law inside a uniform changing-field region, $E$ depends on radius as:',
            options: ['$E \\propto 1/r$', '$E \\propto r$', '$E$ is constant', '$E \\propto r^2$'],
            correctAnswer: 1,
            explanation: 'Inside the region $\\Phi_B = B\\pi r^2$, giving $E(2\\pi r) = \\pi r^2 \\frac{dB}{dt}$, so $E = \\frac{r}{2}\\frac{dB}{dt} \\propto r$.'
          },
          {
            question: 'In the worked example, the magnetic field inside the solenoid at that instant is closest to:',
            options: ['$1.0 \\times 10^{-2}$ T', '$2.5 \\times 10^{-2}$ T', '$5.0 \\times 10^{-3}$ T', '$4.0 \\times 10^{-3}$ T'],
            correctAnswer: 0,
            explanation: '$B = \\mu_0 nI = (4\\pi \\times 10^{-7})(2000)(4.0) \\approx 1.0 \\times 10^{-2}$ T. The value $2.5 \\times 10^{-2}$ is $dB/dt$ in T/s, which uses $dI/dt$ instead of $I$.'
          },
          {
            question: 'Which Maxwell equation has zero on the right-hand side, expressing the absence of magnetic monopoles?',
            options: ['$\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{Q}{\\varepsilon_0}$', '$\\oint \\vec{B}\\cdot d\\vec{A} = 0$', '$\\oint \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$', '$\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I$'],
            correctAnswer: 1,
            explanation: 'Gauss\'s law for magnetism, $\\oint \\vec{B}\\cdot d\\vec{A} = 0$, states the net magnetic flux through any closed surface is zero.'
          }
        ]
      }
    }
  ]
};
