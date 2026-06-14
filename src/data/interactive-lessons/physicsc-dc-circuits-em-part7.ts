export const physCEMCircuitsPart7Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p7-intro',
      type: 'text' as const,
      content: `# DC Circuits Review

**Part 7 of 7 — Summary**

---

### Essential Formulas

| Formula | Use |
|---------|-----|
| $I = dQ/dt$ | Definition of current |
| $V = IR$ | Ohm's law |
| $R_s = R_1 + R_2$ | Series resistance |
| $1/R_p = 1/R_1 + 1/R_2$ | Parallel resistance |
| $P = IV = I^2R = V^2/R$ | Power |
| $\\tau = RC$ | Time constant |
| $q(t) = Q_0 e^{-t/RC}$ | Discharge |
| $q(t) = C\\mathcal{E}(1 - e^{-t/RC})$ | Charging |
| $V_{\\text{term}} = \\mathcal{E} - Ir$ | Real battery |

> Master the two RC limits ($t = 0^+$: capacitor = wire; $t \\to \\infty$: capacitor = open) and most exam problems fall out quickly.`
    },
    {
      id: 'physicsc-dc-circuits-em-p7-worked',
      type: 'text' as const,
      content: `### Worked Example — A Capstone RC + Resistor Network

**Problem.** A $20\\,\\text{V}$ battery connects to a $10\\,\\Omega$ resistor in series with a parallel combination of a $20\\,\\Omega$ resistor and an (initially uncharged) capacitor $C = 5\\,\\mu\\text{F}$. Find (a) the current right after the switch closes, (b) the steady-state voltage across the capacitor, and (c) the charging time constant.

**Step 1 — At $t = 0^+$, the capacitor is a wire.** It shorts out the parallel $20\\,\\Omega$ resistor, so the battery sees only the $10\\,\\Omega$:

$I_0 = \\frac{\\mathcal{E}}{R} = \\frac{20}{10} = 2.0\\,\\text{A}$

**Step 2 — At $t \\to \\infty$, the capacitor is an open switch.** No current flows into the capacitor branch, so the current runs through $10\\,\\Omega$ and $20\\,\\Omega$ in series:

$I_\\infty = \\frac{20}{10 + 20} = \\frac{20}{30} \\approx 0.67\\,\\text{A}$

**Step 3 — Steady-state capacitor voltage.** The capacitor sits across the $20\\,\\Omega$ resistor, which carries $I_\\infty$:

$V_C = I_\\infty (20) = \\left(\\frac{2}{3}\\right)(20) \\approx 13.3\\,\\text{V}$

**Step 4 — Time constant.** For charging, the capacitor "sees" the Thévenin resistance: the $20\\,\\Omega$ in parallel with the $10\\,\\Omega$ (the battery is an ideal short for this purpose):

$R_{\\text{Th}} = \\frac{(10)(20)}{10 + 20} = \\frac{200}{30} \\approx 6.7\\,\\Omega$

$\\tau = R_{\\text{Th}}\\,C = (6.7)(5\\times10^{-6}) \\approx 3.3\\times10^{-5}\\,\\text{s}$

**Takeaway.** Use the $t=0^+$ and $t\\to\\infty$ limits for the endpoints, and the Thévenin resistance seen by the capacitor for $\\tau$.`
    },
    {
      id: 'physicsc-dc-circuits-em-p7-deepen',
      type: 'text' as const,
      content: `### Units and Sanity Checks That Catch Errors

On a timed exam, a few quick checks save you from sign and factor mistakes:

| Check | What it catches |
|-------|-----------------|
| $\\tau = RC$ has units of seconds ($\\Omega\\cdot\\text{F} = \\text{s}$) | Mixing up $RC$ vs. $R/C$ |
| Parallel $R_{eq}$ is **smaller** than the smallest resistor | Sign/reciprocal slips |
| Series $R_{eq}$ is **larger** than the largest resistor | Same |
| Power $P = I^2R = V^2/R$ is always positive for a resistor | Wrong branch voltage |
| Energy balance: $\\sum \\mathcal{E} I = \\sum I^2 R$ (+ capacitor storage) | Arithmetic in Kirchhoff systems |

**Limiting cases** are the most powerful check of all: let $R \\to 0$, $R \\to \\infty$, $t \\to 0$, or $t \\to \\infty$ and confirm your formula reduces to something obvious (a short, an open, the full EMF, or zero current).

> If a symbolic answer fails a limiting-case check, the algebra is wrong — find the slip before plugging in numbers.`
    },
    {
      id: 'physicsc-dc-circuits-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which combination gives the smallest equivalent resistance?',
            options: ['$10\\,\\Omega$ and $10\\,\\Omega$ in series', '$10\\,\\Omega$ and $10\\,\\Omega$ in parallel', '$20\\,\\Omega$ alone', 'All are equal'],
            correctAnswer: 1,
            explanation: 'Series: $20\\,\\Omega$. Parallel: $5\\,\\Omega$. A single $20\\,\\Omega$ is $20\\,\\Omega$. The parallel combination ($5\\,\\Omega$) is smallest.'
          },
          {
            question: 'In the capstone network above, the current immediately after the switch closes is larger than the steady-state current because:',
            options: [
              'The capacitor adds EMF',
              'The uncharged capacitor initially shorts out the parallel resistor',
              'Resistance increases over time',
              'The battery voltage rises'
            ],
            correctAnswer: 1,
            explanation: 'At $t = 0^+$ the uncharged capacitor acts as a wire, bypassing the $20\\,\\Omega$ resistor, so the total resistance is smaller and the current larger.'
          },
          {
            question: 'A $100\\,\\Omega$ resistor dissipates $4\\,\\text{W}$. The current through it is:',
            options: ['$0.04\\,\\text{A}$', '$0.2\\,\\text{A}$', '$2\\,\\text{A}$', '$20\\,\\text{A}$'],
            correctAnswer: 1,
            explanation: '$P = I^2R \\Rightarrow I = \\sqrt{P/R} = \\sqrt{4/100} = 0.2\\,\\text{A}$.'
          },
          {
            question: 'The current $I(t) = (\\mathcal{E}/R)e^{-t/RC}$ in a charging RC circuit. The charge that has accumulated on the capacitor by time $t$ equals $\\int_0^t I\\,dt$, which gives:',
            options: [
              '$C\\mathcal{E}\\,e^{-t/RC}$',
              '$C\\mathcal{E}(1 - e^{-t/RC})$',
              '$\\mathcal{E}/R$',
              '$C\\mathcal{E}\\,t/RC$'
            ],
            correctAnswer: 1,
            explanation: 'Integrating the current: $\\int_0^t (\\mathcal{E}/R)e^{-t\'/RC}dt\' = C\\mathcal{E}(1 - e^{-t/RC})$, the standard charging expression for $q(t)$.'
          },
          {
            question: 'Two $1000\\,\\mu\\text{F}$ capacitors in series have an equivalent capacitance of:',
            options: ['$2000\\,\\mu\\text{F}$', '$1000\\,\\mu\\text{F}$', '$500\\,\\mu\\text{F}$', '$250\\,\\mu\\text{F}$'],
            correctAnswer: 2,
            explanation: 'Capacitors in series add like resistors in parallel: $1/C_{eq} = 1/1000 + 1/1000 = 2/1000$, so $C_{eq} = 500\\,\\mu\\text{F}$.'
          },
          {
            question: 'A symbolic answer for current is $I = \\mathcal{E}/(R + r)$. Letting $R \\to 0$ (a short across the terminals) gives $I \\to \\mathcal{E}/r$, which is a good sign because:',
            options: [
              'The current should become infinite for a short',
              'Internal resistance correctly limits the short-circuit current to a finite value',
              'The current should go to zero',
              'The EMF should vanish'
            ],
            correctAnswer: 1,
            explanation: 'A real source cannot deliver infinite current; the internal resistance $r$ caps the short-circuit current at $\\mathcal{E}/r$. Passing this limiting-case check builds confidence in the formula.'
          }
        ]
      }
    }
  ]
};
