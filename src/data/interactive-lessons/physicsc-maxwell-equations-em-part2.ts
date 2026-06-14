export const physCEMMaxwellPart2Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p2-intro',
      type: 'text' as const,
      content: `# 🔄 Displacement Current

**Part 2 of 7 — Maxwell's Key Insight**

---

### The Problem with Ampere's Law

Consider a charging capacitor — current flows in the wire but not between the plates. Ampere's law gives different answers depending on which surface you choose!

---

### Maxwell's Fix: Displacement Current

$I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$

This changing electric flux acts like a current for purposes of producing a magnetic field.

$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0(I + I_d)$

> 🔑 Between capacitor plates, there is no real current — but the changing $\\vec{E}$ creates a magnetic field just as if there were current.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p2-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Displacement Current in a Capacitor

A parallel-plate capacitor with circular plates of radius $R = 5.0 \\text{ cm}$ is charged so the electric field between the plates increases at $\\frac{dE}{dt} = 2.0 \\times 10^{12} \\text{ V/m per s}$. Find the displacement current.

**Step 1 — Write the electric flux.** For a uniform field perpendicular to plates of area $A = \\pi R^2$:

$\\Phi_E = E A = E\\,\\pi R^2$

**Step 2 — Differentiate with respect to time.** Since $A$ is constant, the derivative passes through:

$\\frac{d\\Phi_E}{dt} = \\pi R^2 \\frac{dE}{dt}$

**Step 3 — Multiply by $\\varepsilon_0$.** The displacement current is

$I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\varepsilon_0 \\pi R^2 \\frac{dE}{dt}$

$I_d = (8.85 \\times 10^{-12})\\,\\pi (0.050)^2 (2.0 \\times 10^{12}) \\approx 0.14 \\text{ A}$

> 🔑 The displacement current between the plates exactly equals the conduction current in the wire — that is what makes Ampere-Maxwell consistent for any surface.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Displacement current is proportional to:',
            options: ['Electric field', 'Rate of change of electric flux', 'Magnetic flux', 'Charge density'],
            correctAnswer: 1,
            explanation: '$I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$ — it is the rate of change of electric flux times $\\varepsilon_0$.'
          },
          {
            question: 'While a capacitor charges, the displacement current between the plates compared to the conduction current in the wire is:',
            options: ['Zero', 'Half as large', 'Exactly equal', 'Twice as large'],
            correctAnswer: 2,
            explanation: 'Charge conservation forces $I_d$ between the plates to equal the conduction current $I$ in the wire, so Ampere-Maxwell gives the same $\\vec{B}$ for any surface spanning the loop.'
          },
          {
            question: 'A capacitor is fully charged and connected to a steady DC source (no further charging). The displacement current between the plates is:',
            options: ['Maximum', 'Zero, because $\\frac{d\\Phi_E}{dt} = 0$', 'Equal to the leakage current', 'Negative'],
            correctAnswer: 1,
            explanation: 'Once $\\vec{E}$ is constant, $\\frac{d\\Phi_E}{dt} = 0$, so $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = 0$.'
          },
          {
            question: 'For circular capacitor plates, the magnetic field between them at radius $r < R$ is found by applying Ampere-Maxwell to a circle of radius $r$. The enclosed displacement current scales as:',
            options: ['$r^0$ (constant)', '$r$', '$r^2$', '$1/r$'],
            correctAnswer: 2,
            explanation: 'The enclosed flux is $\\Phi_E = E\\,\\pi r^2$, so $I_{d,enc} \\propto r^2$. (The resulting field $B \\propto r$ inside the plates.)'
          },
          {
            question: 'Why did Ampere\'s original law need correcting?',
            options: ['It violated energy conservation', 'It gave different $\\vec{B}$ for different surfaces bounded by the same loop', 'It predicted monopoles', 'It only worked for DC'],
            correctAnswer: 1,
            explanation: 'For a charging capacitor, one surface threads conduction current while a bulging surface between the plates threads none — Ampere\'s law was ambiguous until the displacement-current term fixed it.'
          }
        ]
      }
    }
  ]
};
