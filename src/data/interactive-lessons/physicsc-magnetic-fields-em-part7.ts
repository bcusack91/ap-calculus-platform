export const physCEMMagFieldsPart7Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p7-intro',
      type: 'text' as const,
      content: `# 📋 Magnetic Fields Review

**Part 7 of 7 — Summary**

---

### Key Formulas

| Formula | Use |
|---------|-----|
| $\\vec{F} = q\\vec{v} \\times \\vec{B}$ | Force on charge |
| $r = mv/(qB)$ | Cyclotron radius |
| $B = \\mu_0 I/(2\\pi r)$ | Long wire |
| $B = \\mu_0 nI$ | Solenoid |
| $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$ | Ampere’s law |
| $\\Phi_B = BA\\cos\\theta$ | Flux |`
    },
    {
      id: 'physicsc-magnetic-fields-em-p7-synthesis',
      type: 'text' as const,
      content: `### The Big Picture of Magnetostatics

**Currents make fields; fields push currents.** Those are the two halves of the unit.

**Making fields.** All field results trace back to Biot-Savart, $d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I\\,d\\vec{l}\\times\\hat{r}}{r^2}$. When symmetry is high, Ampère's law $\\oint\\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$ shortcuts the integral. Standard answers to memorize: long wire $\\frac{\\mu_0 I}{2\\pi r}$, loop center $\\frac{\\mu_0 I}{2R}$, solenoid $\\mu_0 nI$.

**Feeling forces.** A field exerts $\\vec{F} = q\\vec{v}\\times\\vec{B}$ on a charge and $\\vec{F} = I\\vec{L}\\times\\vec{B}$ on a wire. Because these are cross products, the force is perpendicular to the motion, so **magnetic forces do no work** — they bend paths into circles and helices but never change speed.

**Two field laws you can quote.**
- $\\oint\\vec{B}\\cdot d\\vec{A} = 0$ (Gauss for magnetism — no monopoles).
- $\\oint\\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$ (Ampère, magnetostatic form).

> Together with the two electric Maxwell equations and Faraday's law from the induction unit, these complete the electromagnetic picture.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p7-worked',
      type: 'text' as const,
      content: `### Worked Example — Velocity Selector and Mass Spectrometer

A velocity selector has perpendicular fields $E = 3.0\\times10^{4}\\text{ V/m}$ and $B_1 = 0.10\\text{ T}$. Ions then enter a region of field $B_2 = 0.20\\text{ T}$. (a) Find the selected speed. (b) A singly-charged ion ($q = 1.6\\times10^{-19}\\text{ C}$) then bends in a circle of radius $r = 0.050\\text{ m}$; find its mass.

**Part (a) — Balance electric and magnetic forces.** An ion passes straight through only if $qE = qvB_1$, so the speed is independent of charge:

$v = \\frac{E}{B_1} = \\frac{3.0\\times10^{4}}{0.10} = 3.0\\times10^{5}\\text{ m/s}.$

**Part (b) — Circular motion in $B_2$.** From $r = \\frac{mv}{qB_2}$, solve for mass:

$m = \\frac{qB_2 r}{v} = \\frac{(1.6\\times10^{-19})(0.20)(0.050)}{3.0\\times10^{5}} = \\frac{1.6\\times10^{-21}}{3.0\\times10^{5}} = 5.3\\times10^{-27}\\text{ kg}.$

This pair of ideas — a velocity selector feeding a momentum analyzer — is exactly how a mass spectrometer separates isotopes: equal-speed ions of different mass trace circles of different radius via $r = mv/(qB)$.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\mu_0$ is called:',
            options: ['Permittivity of free space', 'Permeability of free space', 'Magnetic flux', 'Susceptibility'],
            correctAnswer: 1,
            explanation: '$\\mu_0$ is the permeability of free space ($4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A}$).'
          },
          {
            question: 'In a velocity selector with crossed $\\vec{E}$ and $\\vec{B}$ fields, the speed that passes undeflected is:',
            options: ['$EB$', '$E/B$', '$B/E$', '$\\sqrt{EB}$'],
            correctAnswer: 1,
            explanation: 'Setting $qE = qvB$ gives $v = E/B$, independent of charge and mass.'
          },
          {
            question: 'The radius of a charged particle’s circular path in a uniform field is $r = mv/(qB)$. Which change INCREASES the radius?',
            options: ['Increasing the field $B$', 'Increasing the charge $q$', 'Increasing the momentum $mv$', 'Decreasing the speed $v$'],
            correctAnswer: 2,
            explanation: '$r \\propto mv$ (momentum) and $r \\propto 1/(qB)$. Larger momentum gives a larger radius; larger $q$ or $B$ shrinks it.'
          },
          {
            question: 'A 3.0 A current in a long wire produces, at 0.02 m, a field closest to:',
            options: ['$3.0\\times10^{-5}$ T', '$1.5\\times10^{-5}$ T', '$6.0\\times10^{-5}$ T', '$9.0\\times10^{-5}$ T'],
            correctAnswer: 0,
            explanation: '$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{(4\\pi\\times10^{-7})(3.0)}{2\\pi(0.02)} = \\frac{(2\\times10^{-7})(3.0)}{0.02} = 3.0\\times10^{-5}$ T.'
          },
          {
            question: 'Which statement about the magnetic force on a moving charge is TRUE?',
            options: ['It can change the particle’s speed', 'It is always parallel to the velocity', 'It does no work and changes only direction', 'It is independent of the angle between $\\vec{v}$ and $\\vec{B}$'],
            correctAnswer: 2,
            explanation: 'Because $\\vec{F}\\perp\\vec{v}$, the magnetic force does no work; it changes the direction of motion (curving the path) but not the speed.'
          },
          {
            question: 'Gauss’s law for magnetism, $\\oint \\vec{B}\\cdot d\\vec{A} = 0$, is a direct consequence of:',
            options: ['Conservation of charge', 'The absence of magnetic monopoles', 'Faraday’s law', 'Ohm’s law'],
            correctAnswer: 1,
            explanation: 'Zero net magnetic flux through any closed surface reflects that there are no isolated magnetic charges; field lines always close on themselves.'
          }
        ]
      }
    }
  ]
};
