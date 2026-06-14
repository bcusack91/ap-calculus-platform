export const physCEMInductionPart4Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p4-intro',
      type: 'text' as const,
      content: `# ⏱️ RL Circuits

**Part 4 of 7 — Inductors in DC Circuits**

---

### Current Growth (RL circuit with battery)

$$I(t) = \\frac{\\mathcal{E}}{R}(1 - e^{-t/\\tau})$$

where $\\tau = L/R$

---

### Current Decay

$$I(t) = I_0 e^{-t/\\tau}$$

---

### Comparison with RC Circuits

| Property | RC | RL |
|----------|----|----|
| Time constant | $\\tau = RC$ | $\\tau = L/R$ |
| Charging | $q = C\\mathcal{E}(1-e^{-t/\\tau})$ | $I = (\\mathcal{E}/R)(1-e^{-t/\\tau})$ |
| Discharging | $q = Q_0 e^{-t/\\tau}$ | $I = I_0 e^{-t/\\tau}$ |

> 🔑 Inductors resist changes in current, just as capacitors resist changes in voltage.`
    },
    {
      id: 'physicsc-em-induction-em-p4-behavior',
      type: 'text' as const,
      content: `### Reading the RL Curve

The growth solution $I(t) = \\frac{\\mathcal{E}}{R}\\left(1 - e^{-t/\\tau}\\right)$ has three regimes worth memorizing:

| Time | Current | Inductor acts like |
|------|---------|-------------------|
| $t = 0^+$ | $I = 0$ | **Open circuit** (blocks sudden change) |
| $t = \\tau$ | $I \\approx 0.63\\,I_{\\max}$ | Transitioning |
| $t \\gg \\tau$ | $I \\to \\frac{\\mathcal{E}}{R}$ | **Short circuit** (plain wire) |

**Why $\\tau = L/R$?** Larger $L$ stores more magnetic energy and fights changes harder, slowing the response; larger $R$ dissipates energy faster, letting the current settle sooner. The product carries units of seconds: $[\\text{H}/\\Omega] = [\\text{V}\\cdot\\text{s}/\\text{A}]/[\\text{V}/\\text{A}] = \\text{s}$.

### Energy Accounting During Charging

As current builds, the battery delivers energy that splits between two destinations: heat in the resistor ($\\int I^2 R\\,dt$) and magnetic energy stored in the inductor ($\\frac{1}{2}LI^2$). At steady state the inductor holds $\\frac{1}{2}L I_{\\max}^2$ while the resistor continues to dissipate $I_{\\max}^2 R$ for as long as the circuit runs.`
    },
    {
      id: 'physicsc-em-induction-em-p4-worked',
      type: 'text' as const,
      content: `### Worked Example — Solving the RL Loop Equation

A battery of EMF $\\mathcal{E} = 12\\text{ V}$ is connected in series with $R = 6.0\\,\\Omega$ and $L = 3.0\\text{ H}$. The switch closes at $t = 0$. (a) Derive $I(t)$. (b) Find the current at $t = 0.50\\text{ s}$. (c) Find $\\frac{dI}{dt}$ at that instant.

**Part (a) — Kirchhoff's voltage law.** Going around the loop, $\\mathcal{E} - IR - L\\frac{dI}{dt} = 0$. Rearranging,

$\\frac{dI}{dt} = \\frac{\\mathcal{E} - IR}{L}.$

Separating variables and integrating from $I=0$ gives $I(t) = \\frac{\\mathcal{E}}{R}\\left(1 - e^{-t/\\tau}\\right)$ with $\\tau = \\frac{L}{R} = \\frac{3.0}{6.0} = 0.50\\text{ s}$.

**Part (b) — Current at $t = \\tau$.** $I_{\\max} = \\frac{\\mathcal{E}}{R} = \\frac{12}{6.0} = 2.0\\text{ A}$. At $t = \\tau$, $I = 2.0(1 - e^{-1}) = 2.0(0.632) = 1.26\\text{ A}$.

**Part (c) — Slope by differentiating.** $\\frac{dI}{dt} = \\frac{\\mathcal{E}}{R}\\cdot\\frac{1}{\\tau}e^{-t/\\tau} = \\frac{\\mathcal{E}}{L}e^{-t/\\tau}$. At $t = \\tau$: $\\frac{dI}{dt} = \\frac{12}{3.0}e^{-1} = 4.0(0.368) = 1.47\\text{ A/s}$. The inductor's back-EMF, $L\\frac{dI}{dt} = 3.0(1.47) = 4.4\\text{ V}$, is exactly what is left over after the resistor drop $IR = 1.26(6.0) = 7.6\\text{ V}$.`
    },
    {
      id: 'physicsc-em-induction-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The time constant of an RL circuit is:',
            options: ['$LR$', '$L/R$', '$R/L$', '$\\sqrt{LR}$'],
            correctAnswer: 1,
            explanation: '$\\tau = L/R$. Note that larger $L$ means a longer time constant (more resistance to change).'
          },
          {
            question: 'Immediately after the switch closes in an RL circuit (current was zero), the inductor behaves like:',
            options: ['A short circuit (zero resistance)', 'An open circuit (no current flows)', 'An ideal battery', 'A pure resistor equal to R'],
            correctAnswer: 1,
            explanation: 'At $t = 0^+$ the inductor opposes any sudden change in current, so $I = 0$ — it acts momentarily as an open circuit.'
          },
          {
            question: 'A long time after the switch closes, the inductor behaves like:',
            options: ['An open circuit', 'A short circuit (the current is steady at $\\mathcal{E}/R$)', 'A capacitor', 'A source of EMF'],
            correctAnswer: 1,
            explanation: 'As $t\\to\\infty$, $\\frac{dI}{dt}\\to 0$ so the back-EMF vanishes; the inductor acts as a plain wire and $I \\to \\mathcal{E}/R$.'
          },
          {
            question: 'In a decaying RL circuit $I(t) = I_0 e^{-t/\\tau}$, how many time constants are needed for the current to fall to about 37% of $I_0$?',
            options: ['$0.5\\,\\tau$', '$1\\,\\tau$', '$2\\,\\tau$', '$3\\,\\tau$'],
            correctAnswer: 1,
            explanation: 'After one time constant, $I = I_0 e^{-1} \\approx 0.368\\,I_0$, i.e. about 37%.'
          },
          {
            question: 'An RL circuit has $L = 2.0\\text{ H}$ and $R = 100\\,\\Omega$. Its time constant is:',
            options: ['$200\\text{ s}$', '$50\\text{ s}$', '$0.02\\text{ s}$', '$0.5\\text{ s}$'],
            correctAnswer: 2,
            explanation: '$\\tau = L/R = 2.0/100 = 0.020$ s = 20 ms.'
          },
          {
            question: 'Comparing an RC and an RL circuit, the inductor resists changes in _____ just as the capacitor resists changes in _____.',
            options: ['voltage; current', 'current; voltage', 'charge; flux', 'power; energy'],
            correctAnswer: 1,
            explanation: 'An inductor opposes sudden changes in current ($V_L = L\\,dI/dt$); a capacitor opposes sudden changes in voltage ($I = C\\,dV/dt$).'
          }
        ]
      }
    }
  ]
};
