export const physCEMInductionPart7Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p7-intro',
      type: 'text' as const,
      content: `# 📋 EM Induction Review

**Part 7 of 7 — Summary**

---

### Key Formulas

| Formula | Use |
|---------|-----|
| $\\mathcal{E} = -d\\Phi_B/dt$ | Faraday’s law |
| $\\mathcal{E} = BLv$ | Motional EMF |
| $L = \\mu_0 n^2 Al$ | Solenoid inductance |
| $U = \\frac{1}{2}LI^2$ | Inductor energy |
| $\\tau_{RL} = L/R$ | RL time constant |
| $\\omega_{LC} = 1/\\sqrt{LC}$ | LC frequency |`
    },
    {
      id: 'physicsc-em-induction-em-p7-synthesis',
      type: 'text' as const,
      content: `### Threads That Tie the Unit Together

**Everything starts with flux.** $\\Phi_B = \\int \\vec{B}\\cdot d\\vec{A}$, and an EMF appears only when that flux *changes in time*. Faraday's law $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$ is the master equation; motional EMF ($BLv$) and the generator EMF ($NBA\\omega\\sin\\omega t$) are just special cases you get by computing $\\frac{d\\Phi_B}{dt}$ for a particular geometry.

**Inductance packages self-flux.** Defining $L = N\\Phi_B/I$ lets us write the back-EMF as $\\mathcal{E} = -L\\frac{dI}{dt}$ and the stored energy as $U = \\frac{1}{2}LI^2$, both obtained by calculus.

**Circuits are differential equations.** Apply Kirchhoff's voltage law with an inductor term $L\\frac{dI}{dt}$:
- One inductor + resistor → first-order equation → **exponential** ($\\tau = L/R$).
- Inductor + capacitor → second-order equation → **sinusoidal** ($\\omega = 1/\\sqrt{LC}$).

> The recurring skill is translating a physical setup into $\\frac{d\\Phi_B}{dt}$ or a loop equation, then differentiating or integrating. Master that and the whole unit collapses into one idea.`
    },
    {
      id: 'physicsc-em-induction-em-p7-worked',
      type: 'text' as const,
      content: `### Worked Example — Cumulative Free-Response Style

A single conducting loop of area $A = 0.040\\text{ m}^2$ and resistance $R = 0.50\\,\\Omega$ lies in a field perpendicular to its plane that varies as $B(t) = (0.60\\text{ T}) e^{-t/2.0}$ ($t$ in seconds). Find (a) the induced EMF, (b) the induced current, and (c) the charge that flows through the loop between $t = 0$ and $t = \\infty$.

**Part (a) — Differentiate the flux.** $\\Phi_B = AB(t) = (0.040)(0.60)e^{-t/2.0} = 0.024\\,e^{-t/2.0}$. Then

$\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -0.024\\left(-\\tfrac{1}{2.0}\\right)e^{-t/2.0} = 0.012\\,e^{-t/2.0}\\text{ V}.$

**Part (b) — Ohm's law.** $I(t) = \\frac{\\mathcal{E}}{R} = \\frac{0.012}{0.50}e^{-t/2.0} = 0.024\\,e^{-t/2.0}\\text{ A}$.

**Part (c) — Charge by integration.** $q = \\int_0^{\\infty} I\\,dt = \\frac{|\\Delta\\Phi_B|}{R}$. Since $\\Phi_B$ drops from $0.024\\text{ Wb}$ to $0$, $q = \\frac{0.024}{0.50} = 0.048\\text{ C}$. Note the total charge depends only on the **net flux change**, not on how fast it happens — a key Physics C result.`
    },
    {
      id: 'physicsc-em-induction-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Faraday’s law says EMF is proportional to:',
            options: ['Magnetic flux', 'Rate of change of magnetic flux', 'Magnetic field strength', 'Current'],
            correctAnswer: 1,
            explanation: '$\\mathcal{E} = -d\\Phi_B/dt$ — EMF is induced by the rate of change of flux, not the flux itself.'
          },
          {
            question: 'The total charge that flows through a loop of resistance $R$ as the flux changes by $\\Delta\\Phi_B$ is:',
            options: ['$\\Delta\\Phi_B \\cdot R$', '$\\Delta\\Phi_B / R$', '$R / \\Delta\\Phi_B$', '$\\Delta\\Phi_B / R^2$'],
            correctAnswer: 1,
            explanation: '$q = \\int I\\,dt = \\int \\frac{1}{R}\\frac{d\\Phi_B}{dt}dt = \\frac{\\Delta\\Phi_B}{R}$ — independent of the rate of change.'
          },
          {
            question: 'Which quantity has units of webers?',
            options: ['Magnetic field $B$', 'Magnetic flux $\\Phi_B$', 'Inductance $L$', 'EMF'],
            correctAnswer: 1,
            explanation: 'Magnetic flux is measured in webers ($1\\text{ Wb} = 1\\text{ T}\\cdot\\text{m}^2$). One volt equals one weber per second.'
          },
          {
            question: 'An inductor of $L = 0.10\\text{ H}$ carries $I = 3.0\\text{ A}$. The stored magnetic energy is:',
            options: ['$0.15$ J', '$0.45$ J', '$0.90$ J', '$0.30$ J'],
            correctAnswer: 1,
            explanation: '$U = \\frac{1}{2}LI^2 = \\frac{1}{2}(0.10)(3.0)^2 = \\frac{1}{2}(0.10)(9.0) = 0.45$ J.'
          },
          {
            question: 'For a solenoid of fixed length and area, doubling the turns-per-length $n$ changes the inductance by a factor of:',
            options: ['$2$', '$4$', '$1/2$', '$8$'],
            correctAnswer: 1,
            explanation: '$L = \\mu_0 n^2 A l \\propto n^2$. Doubling $n$ quadruples $L$.'
          },
          {
            question: 'In an LC oscillator the angular frequency is $\\omega = 1/\\sqrt{LC}$. To halve the frequency, you could:',
            options: ['Halve L', 'Quadruple C', 'Halve C', 'Double L only'],
            correctAnswer: 1,
            explanation: '$\\omega \\propto 1/\\sqrt{C}$, so multiplying $C$ by 4 multiplies $\\omega$ by $1/2$.'
          }
        ]
      }
    }
  ]
};
