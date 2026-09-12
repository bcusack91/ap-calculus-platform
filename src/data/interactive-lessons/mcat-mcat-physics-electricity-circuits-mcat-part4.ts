import type { LessonData } from './registry'

export const circuitsMcatPart4: LessonData = {
  topicSlug: 'mcat-physics-electricity-circuits-mcat',
  sections: [
    {
      id: 'ci4-strategy',
      type: 'text' as const,
      content: `# Circuits

**Part 4 of 4 — MCAT Integration: Complex Circuits & Bioelectricity**

MCAT circuit questions hide simple rules inside layered networks and biological wrappers. The playbook:

### Strategy 1 — Collapse the Network from the Inside Out

Find the innermost pure-series or pure-parallel cluster, replace it with one equivalent resistor, redraw, repeat. Then walk BACK out: total current first, then split voltages and currents step by step. Never try to write every current at once.

### Strategy 2 — Know What Series and Parallel Really Mean

- Series: elements share the SAME single current path — no junction between them.
- Parallel: elements connect the SAME two nodes — identical voltage, no matter how the wires are drawn.

Exam figures deliberately stretch wires to disguise parallel pairs. Trace nodes, not drawings.

### Strategy 3 — Rank Power Without Computing It

- Same current (series): $P = I^2R$ — bigger $R$ wins.
- Same voltage (parallel): $P = V^2/R$ — smaller $R$ wins.

Most "which resistor dissipates the most power" questions fall to this in ten seconds.

### Strategy 4 — The Cell Membrane Is an RC Circuit

The lipid bilayer is a capacitor (an insulator separating two conducting solutions); ion channels are resistors in parallel with it. Consequences the MCAT tests:

- Membrane potential cannot change instantly — it charges with time constant $\\tau = R_mC_m$.
- Blocking channels raises $R_m$, so $\\tau$ LENGTHENS and the neuron integrates inputs more slowly.
- Myelin thickens the "dielectric," LOWERING membrane capacitance — less charge is needed per millivolt, so signals travel faster.

### Strategy 5 — Defibrillators and Capacitor Discharge

A defibrillator charges a capacitor slowly (small current, several seconds), then dumps $U = \\frac{1}{2}CV^2$ through the chest in milliseconds. Same energy, wildly different power — power is energy per TIME. That asymmetry (slow charge, fast discharge) is the whole point of using a capacitor.`
    },
    {
      id: 'ci4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Two-Step Network (Passage Style)

A $12\\;\\text{V}$ battery feeds a $2\\;\\Omega$ resistor in series with a parallel pair: $6\\;\\Omega$ and $3\\;\\Omega$.

**Step 1 — Collapse the parallel pair.**

$R_{pair} = \\frac{(6)(3)}{6 + 3} = 2\\;\\Omega$

**Step 2 — Total resistance and current.**

$R_{total} = 2 + 2 = 4\\;\\Omega, \\quad I = \\frac{12}{4} = 3\\;\\text{A}$

**Step 3 — Walk back out.** The series resistor drops $V = (3)(2) = 6\\;\\text{V}$, leaving $6\\;\\text{V}$ across the pair:

$I_6 = \\frac{6}{6} = 1\\;\\text{A}, \\quad I_3 = \\frac{6}{3} = 2\\;\\text{A}$

Junction check: $1 + 2 = 3\\;\\text{A}$. The $3\\;\\Omega$ branch carries twice the current of the $6\\;\\Omega$ branch — inverse to resistance, always.

### Worked Example — Defibrillator Energy and Power

A defibrillator capacitor ($C = 100\\;\\mu\\text{F}$) is charged to $2000\\;\\text{V}$ and discharges $80\\%$ of its energy into the chest in $10\\;\\text{ms}$.

**Step 1 — Stored energy.**

$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10^{-4})(2 \\times 10^3)^2 = \\frac{1}{2}(10^{-4})(4 \\times 10^6) = 200\\;\\text{J}$

**Step 2 — Delivered energy and average power.**

$E = 0.8 \\times 200 = 160\\;\\text{J}, \\quad P = \\frac{160\\;\\text{J}}{10^{-2}\\;\\text{s}} = 16{,}000\\;\\text{W}$

Sixteen kilowatts — from a device that draws only a few hundred watts from the wall while charging. The capacitor is a power amplifier by time compression, not an energy source.`
    },
    {
      id: 'ci4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Circuits** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $10\\;\\text{V}$ battery drives a $3\\;\\Omega$ resistor in series with two $4\\;\\Omega$ resistors that are in parallel with each other. The battery current is:`,
            options: [`$0.5\\;\\text{A}$`, `$1.0\\;\\text{A}$`, `$1.4\\;\\text{A}$`, `$2.0\\;\\text{A}$`],
            correctAnswer: 3,
            explanation: `Two equal $4\\;\\Omega$ resistors in parallel make $2\\;\\Omega$; total $R = 3 + 2 = 5\\;\\Omega$; $I = 10/5 = 2.0\\;\\text{A}$. ($1.4\\;\\text{A}$ comes from wrongly using $3 + 4 = 7\\;\\Omega$.)`
          },
          {
            question: `A patch of membrane has resistance $R_m = 2 \\times 10^6\\;\\Omega$ and capacitance $C_m = 5 \\times 10^{-9}\\;\\text{F}$. Its time constant is:`,
            options: [`$1\\;\\text{ms}$`, `$10\\;\\text{ms}$`, `$100\\;\\text{ms}$`, `$1\\;\\text{s}$`],
            correctAnswer: 1,
            explanation: `$\\tau = R_mC_m = (2 \\times 10^6)(5 \\times 10^{-9}) = 10^{-2}\\;\\text{s} = 10\\;\\text{ms}$ — the membrane voltage needs about this long to respond to a current step.`
          },
          {
            question: `A defibrillator capacitor of $200\\;\\mu\\text{F}$ charged to $1000\\;\\text{V}$ stores:`,
            options: [`$50\\;\\text{J}$`, `$200\\;\\text{J}$`, `$100\\;\\text{J}$`, `$400\\;\\text{J}$`],
            correctAnswer: 2,
            explanation: `$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(2 \\times 10^{-4})(10^6) = 100\\;\\text{J}$. Forgetting the $\\frac{1}{2}$ gives $200\\;\\text{J}$.`
          },
          {
            question: `Household outlets are wired in parallel rather than series primarily because parallel wiring ensures that:`,
            options: [`Each appliance receives the full line voltage and runs independently of the others`, `The total resistance of the house is maximized`, `The current through every appliance is identical`, `Less total power is drawn from the grid`],
            correctAnswer: 0,
            explanation: `Parallel branches all see the full supply voltage, and switching one off does not break the others' circuit. Identical current everywhere describes series — where unplugging one lamp would kill them all.`
          },
          {
            question: `Long after a switch closes in a DC circuit, a fully charged capacitor behaves like:`,
            options: [`A wire with zero resistance`, `An open switch — no current flows in its branch`, `A resistor equal to $1/C$`, `A source of steadily increasing current`],
            correctAnswer: 1,
            explanation: `At full charge the capacitor voltage balances whatever drives its branch, so current there is zero — treat the branch as removed. (It acts most like a plain wire only at the FIRST instant, while uncharged.)`
          }
        ]
      }
    },
    {
      id: 'ci4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Collapse networks inside-out, then walk currents and voltages back out; junction-check at the end
- Series vs parallel is about shared nodes, not how the figure is drawn
- Power ranking: series favors big $R$ ($I^2R$), parallel favors small $R$ ($V^2/R$)
- Membrane = RC circuit: bilayer capacitor, channel resistors, $\\tau = R_mC_m$; myelin cuts $C_m$
- Defibrillator: energy $\\frac{1}{2}CV^2$ stored slowly, released fast — huge power from modest energy
- Full capacitor in DC = open branch; empty capacitor = momentary wire`
    }
  ]
};
