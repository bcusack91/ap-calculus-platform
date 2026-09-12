import type { LessonData } from './registry'

export const circuitsMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-circuits-mcat',
  sections: [
    {
      id: 'ci1-intro',
      type: 'text' as const,
      content: `# Circuits

**Part 1 of 4 — Current, Voltage & Resistance**

### Current

$I = \\frac{Q}{t}$ — charge passing a point per second, in amperes ($1\\;\\text{A} = 1\\;\\text{C/s}$).

- **Conventional current** points in the direction POSITIVE charge flows — opposite to the actual electron drift in a wire.
- In electrolyte solutions (and in the body), current is carried by IONS moving both ways: cations along the current direction, anions against it.

### Voltage (Potential Difference)

Voltage is the electrical "pressure difference" that drives current. A battery is a chemical pump that maintains a fixed potential difference — its **EMF** — between its terminals.

### Resistance and Ohm's Law

$V = IR$

Resistance measures how hard it is to push current through an element, in ohms ($\\Omega$). For a wire:

$R = \\rho\\frac{L}{A}$

- $\\rho$ (resistivity) is a material property — low for copper, high for glass, in between for physiological saline.
- Longer wire ($L$ up) → more resistance. Fatter wire ($A$ up) → less resistance.
- For most metals, resistivity INCREASES with temperature.

### Series vs. Parallel Resistors

| | Series | Parallel |
|---|--------|----------|
| Current | same through each | splits between branches |
| Voltage | splits across each | same across each |
| Equivalent $R$ | $R_{eq} = R_1 + R_2 + \\cdots$ (grows) | $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$ (shrinks) |

Two useful facts about parallel:

- Two resistors: $R_{eq} = \\dfrac{R_1 R_2}{R_1 + R_2}$ ("product over sum")
- $R_{eq}$ is always SMALLER than the smallest branch — adding a path always lets more current flow.

### Kirchhoff's Rules (Conservation Laws in Disguise)

- **Junction rule**: current in = current out at every node (conservation of charge).
- **Loop rule**: voltage gains equal voltage drops around any closed loop (conservation of energy).`
    },
    {
      id: 'ci1-worked',
      type: 'text' as const,
      content: `### Worked Example — A Simple Series Circuit

A $24\\;\\text{V}$ battery drives current through three resistors in series: $2\\;\\Omega$, $4\\;\\Omega$, and $6\\;\\Omega$.

**Step 1 — Equivalent resistance.**

$R_{eq} = 2 + 4 + 6 = 12\\;\\Omega$

**Step 2 — Current (same everywhere in series).**

$I = \\frac{V}{R_{eq}} = \\frac{24}{12} = 2.0\\;\\text{A}$

**Step 3 — Voltage drops.**

$V_2 = (2.0)(2) = 4\\;\\text{V}, \\quad V_4 = (2.0)(4) = 8\\;\\text{V}, \\quad V_6 = (2.0)(6) = 12\\;\\text{V}$

Check with the loop rule: $4 + 8 + 12 = 24\\;\\text{V}$ — every volt the battery supplies is dropped. The largest resistor takes the largest share of the voltage.

### Worked Example — Product Over Sum

A $3\\;\\Omega$ and a $6\\;\\Omega$ resistor sit in parallel across a $12\\;\\text{V}$ battery.

**Step 1 — Equivalent resistance.**

$R_{eq} = \\frac{(3)(6)}{3 + 6} = \\frac{18}{9} = 2\\;\\Omega$

(Smaller than $3\\;\\Omega$, as parallel must be.)

**Step 2 — Branch currents (each branch sees the full $12\\;\\text{V}$).**

$I_3 = \\frac{12}{3} = 4\\;\\text{A}, \\quad I_6 = \\frac{12}{6} = 2\\;\\text{A}$

**Step 3 — Junction check.** Total $I = 4 + 2 = 6\\;\\text{A}$, and indeed $V/R_{eq} = 12/2 = 6\\;\\text{A}$. More current takes the easier (lower-resistance) path, in exact inverse proportion.`
    },
    {
      id: 'ci1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Current, Voltage & Resistance** 🎯`,
      exercise: {
        questions: [
          {
            question: `If $6.0\\;\\text{C}$ of charge passes through a resistor in $2.0\\;\\text{s}$, the current is:`,
            options: [`$12\\;\\text{A}$`, `$0.33\\;\\text{A}$`, `$3.0\\;\\text{A}$`, `$6.0\\;\\text{A}$`],
            correctAnswer: 2,
            explanation: `$I = Q/t = 6.0/2.0 = 3.0\\;\\text{A}$.`
          },
          {
            question: `A wire is stretched so its length doubles while its cross-sectional area halves. Its resistance:`,
            options: [`Quadruples`, `Doubles`, `Is unchanged`, `Halves`],
            correctAnswer: 0,
            explanation: `$R = \\rho L/A$: doubling $L$ doubles $R$, and halving $A$ doubles it again — a factor of $4$ total.`
          },
          {
            question: `In a series circuit, which quantity is the same for every resistor?`,
            options: [`Voltage drop`, `Power dissipated`, `Resistance`, `Current`],
            correctAnswer: 3,
            explanation: `Series elements form a single path, so the same current threads them all. Voltage and power then divide in proportion to each resistance ($V = IR$, $P = I^2R$).`
          },
          {
            question: `The equivalent resistance of a $4\\;\\Omega$ and a $12\\;\\Omega$ resistor in parallel is:`,
            options: [`$16\\;\\Omega$`, `$3\\;\\Omega$`, `$8\\;\\Omega$`, `$48\\;\\Omega$`],
            correctAnswer: 1,
            explanation: `Product over sum: $(4)(12)/(4+12) = 48/16 = 3\\;\\Omega$. Sanity check: parallel equivalent must be less than $4\\;\\Omega$, which eliminates every other choice. $16\\;\\Omega$ is the series answer.`
          },
          {
            question: `Three currents meet at a junction: $5\\;\\text{A}$ and $3\\;\\text{A}$ flow in. The current flowing out must be:`,
            options: [`$2\\;\\text{A}$`, `$15\\;\\text{A}$`, `$8\\;\\text{A}$`, `Cannot be determined`],
            correctAnswer: 2,
            explanation: `Kirchhoff's junction rule (conservation of charge): in = out, so $5 + 3 = 8\\;\\text{A}$ leaves the node.`
          }
        ]
      }
    },
    {
      id: 'ci1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $I = Q/t$; conventional current follows positive charge; in solution, ions carry it both ways
- Ohm: $V = IR$; wires: $R = \\rho L/A$ (long and thin = high resistance)
- Series: same $I$, voltages add, $R_{eq}$ grows. Parallel: same $V$, currents add, $R_{eq}$ shrinks below the smallest branch
- Two in parallel: product over sum
- Kirchhoff = conservation: charge at junctions, energy around loops`
    }
  ]
};
