import type { LessonData } from './registry'

export const dcCircuitsMcatPart3: LessonData = {
  topicSlug: 'mcat-physics-electricity-dc-circuits-mcat',
  sections: [
    {
      id: 'dc3-intro',
      type: 'text' as const,
      content: `# Circuits Part 1: Current & Resistance

**Part 3 of 4 — Kirchhoff's Rules & Reducing Networks**

### Kirchhoff's Rules

Every circuit calculation rests on two conservation laws.

**Junction rule (conservation of charge).** At any node, the total current flowing in equals the total current flowing out:

$$\\sum I_{in} = \\sum I_{out}$$

Charge cannot pile up in a wire, so whatever arrives at a junction must leave it.

**Loop rule (conservation of energy).** Around any closed loop, the changes in potential add to zero:

$$\\sum \\Delta V = 0$$

A charge that travels around a loop and returns to its starting point is back at the same potential, so every volt gained in a source is dropped somewhere along the way.

**Sign conventions for walking a loop.** Choose a walking direction (either one works) and a direction for each current (guess if you must; a negative answer just means the current runs the other way). Then record:

| Element crossed | Direction of travel | $\\Delta V$ recorded |
|---|---|---|
| resistor | WITH the current | $-IR$ (a drop) |
| resistor | AGAINST the current | $+IR$ (a rise) |
| ideal source | $-$ terminal to $+$ terminal | $+V$ (a rise) |
| ideal source | $+$ terminal to $-$ terminal | $-V$ (a drop) |
| ideal wire | either way | $0$ |

**A single loop, walked.** A $24\\;\\text{V}$ ideal battery drives $2\\;\\Omega$, $4\\;\\Omega$ and $6\\;\\Omega$ resistors in series. Walking with the current: $+24 - 2I - 4I - 6I = 0$, so $I = 2\\;\\text{A}$. The drops are $4\\;\\text{V}$, $8\\;\\text{V}$ and $12\\;\\text{V}$, and they add back to $24\\;\\text{V}$. Now ground the battery's negative terminal and track potentials: $24\\;\\text{V}$ just past the positive terminal, $20\\;\\text{V}$ after the $2\\;\\Omega$ resistor, $12\\;\\text{V}$ after the $4\\;\\Omega$, and $0\\;\\text{V}$ after the $6\\;\\Omega$, right back at ground. The loop closes.

**Two sources in one loop.** Sources that push the same way add; sources that oppose subtract. The net source voltage drives the current through the total resistance. For example, a $12\\;\\text{V}$ and a $3\\;\\text{V}$ battery opposing each other across $3\\;\\Omega$: $+12 - 3 - 3I = 0$, so $I = 3\\;\\text{A}$.

Most MCAT circuits are single loops or networks that collapse into one. Expect to apply the two rules as reasoning tools, not to solve systems of equations.

<!-- yield:low -->
- When sources sit in more than one branch, the network does not collapse: write one junction equation and enough loop equations, then solve them simultaneously. This is rarely required on the MCAT.
<!-- /yield -->`
    },
    {
      id: 'dc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Kirchhoff's Rules** 🎯`,
      exercise: {
        questions: [
          {
            question: `At a node, $4\\;\\text{A}$ arrives from the left wire and $1\\;\\text{A}$ arrives from the top wire, while $2\\;\\text{A}$ leaves through the right wire. The current in the fourth wire, at the bottom, is:`,
            options: [`$1\\;\\text{A}$, flowing out of the node`, `$3\\;\\text{A}$, flowing out of the node`, `$7\\;\\text{A}$, flowing out of the node`, `$3\\;\\text{A}$, flowing into the node`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Current in is $4 + 1 = 5\\;\\text{A}$ and only $2\\;\\text{A}$ leaves by the right wire, so $3\\;\\text{A}$ must leave through the bottom. The $1\\;\\text{A}$ answer treats the top wire as an outflow, and $7\\;\\text{A}$ adds every current regardless of direction.`
          },
          {
            question: `A single loop contains a $9\\;\\text{V}$ battery and a $3\\;\\text{V}$ battery connected so that they push in opposite directions, plus a $2\\;\\Omega$ resistor. The current in the loop is:`,
            options: [`$6\\;\\text{A}$`, `$4.5\\;\\text{A}$`, `$1.5\\;\\text{A}$`, `$3\\;\\text{A}$`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Walking the loop in the direction the larger battery pushes: $+9 - 3 - 2I = 0$, so $I = 3\\;\\text{A}$. Adding the two batteries gives $6\\;\\text{A}$, the mistake of ignoring their orientation; $4.5\\;\\text{A}$ ignores the smaller battery entirely, and $1.5\\;\\text{A}$ uses only the smaller one.`
          },
          {
            question: `A $9\\;\\text{V}$ ideal battery drives current through a $1\\;\\text{k}\\Omega$ resistor (attached to the positive terminal) and then a $2\\;\\text{k}\\Omega$ resistor in series. The node BETWEEN the two resistors is grounded. The potential of the battery's negative terminal is:`,
            options: [`$-6\\;\\text{V}$`, `$+6\\;\\text{V}$`, `$-3\\;\\text{V}$`, `$0\\;\\text{V}$`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The current is $9/3000 = 3\\;\\text{mA}$, so the drops are $3\\;\\text{V}$ across the $1\\;\\text{k}\\Omega$ and $6\\;\\text{V}$ across the $2\\;\\text{k}\\Omega$. Potential falls by $6\\;\\text{V}$ going from the grounded node through the $2\\;\\text{k}\\Omega$ resistor to the negative terminal, so that terminal sits at $-6\\;\\text{V}$ (and the positive terminal at $+3\\;\\text{V}$). Grounding a point shifts every potential but no difference.`
          },
          {
            question: `In a circuit figure, resistor X is drawn along the top edge and resistor Y along the bottom edge, far apart. However, each one's left lead connects by bare wire to node P and its right lead to node Q. X and Y are:`,
            options: [`In series, since current must pass X and then Y`, `In series, since together they form a closed loop`, `In parallel, since they share both nodes`, `Neither, since they are drawn on opposite sides`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Elements connected between the same two nodes have the same voltage across them, which is the definition of parallel, however the wires are stretched on the page. Series would require a single path with no junction between X and Y; here the current splits at P and rejoins at Q.`
          }
        ]
      }
    },
    {
      id: 'dc3-reduce',
      type: 'text' as const,
      content: `### Collapsing Networks Inside-Out

MCAT networks hide simple rules inside layers. Use the same routine every time:

1. **Trace nodes, not drawings.** Treat every set of points joined by bare wire as a single node. Two elements between the same two nodes are in parallel, however the figure stretches them. Two elements are in series only if no junction lies between them.
2. **Collapse the innermost cluster.** Find a pure series or pure parallel group, replace it with one equivalent resistor, and redraw. Repeat until a single $R_{eq}$ remains.
3. **Find the total current.** $I = V/R_{eq}$.
4. **Walk back out.** Through series pieces the current is shared, so split the VOLTAGE; across parallel pieces the voltage is shared, so split the CURRENT. Finish with a junction check and a loop check.

Never try to write every current at once. One layer at a time keeps each step a one-line Ohm's law calculation.

### Voltage Dividers and Current Dividers

**Voltage divider.** Two resistors in series across a voltage $V$ share it in proportion to resistance:

$$V_1 = V\\,\\frac{R_1}{R_1 + R_2}$$

**Current divider.** Two resistors in parallel carrying a total current $I$ split it in INVERSE proportion to resistance:

$$I_1 = I\\,\\frac{R_2}{R_1 + R_2}$$

Notice the OTHER resistor in the numerator: current favours the smaller resistance. A $1\\;\\Omega$ and a $3\\;\\Omega$ branch in parallel split the current $3 : 1$, so three-quarters goes through the $1\\;\\Omega$ path.

**Biology link.** Current passing between two electrodes on the body splits among parallel tissue paths in inverse proportion to their resistances, so most of it travels through low-resistance blood and muscle rather than fat or bone.`
    },
    {
      id: 'dc3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Two-Step Network

A $12\\;\\text{V}$ ideal battery feeds a $2\\;\\Omega$ resistor in series with a parallel pair: $6\\;\\Omega$ and $3\\;\\Omega$.

**Step 1 — Collapse the parallel pair.**

$R_{pair} = \\dfrac{(6)(3)}{6 + 3} = \\dfrac{18}{9} = 2\\;\\Omega$

**Step 2 — Total resistance and current.**

$R_{eq} = 2 + 2 = 4\\;\\Omega, \\quad I = \\dfrac{12}{4} = 3\\;\\text{A}$

**Step 3 — Walk back out.** The series resistor drops $V = (3)(2) = 6\\;\\text{V}$, leaving $12 - 6 = 6\\;\\text{V}$ across the pair:

$I_6 = \\dfrac{6}{6} = 1\\;\\text{A}, \\quad I_3 = \\dfrac{6}{3} = 2\\;\\text{A}$

Junction check: $1 + 2 = 3\\;\\text{A}$. Loop check: $12 - 6 - 6 = 0$. The $3\\;\\Omega$ branch carries twice the current of the $6\\;\\Omega$ branch, inverse to resistance, exactly as the current divider predicts.

**Step 4 — What if the $6\\;\\Omega$ branch breaks open?** Now the $2\\;\\Omega$ and $3\\;\\Omega$ resistors are simply in series: $R_{eq} = 5\\;\\Omega$ and $I = 12/5 = 2.4\\;\\text{A}$. The $2\\;\\Omega$ resistor drops $4.8\\;\\text{V}$ and the $3\\;\\Omega$ resistor $7.2\\;\\text{V}$. The total current FELL (3 A to 2.4 A), yet the current in the surviving $3\\;\\Omega$ branch ROSE (2 A to 2.4 A), because the series resistor now takes less of the voltage.

**Step 5 — What if instead the $2\\;\\Omega$ resistor is shorted?** It drops out, so $R_{eq} = 2\\;\\Omega$ and $I = 6\\;\\text{A}$. The pair now sees the full $12\\;\\text{V}$: $2\\;\\text{A}$ through the $6\\;\\Omega$ and $4\\;\\text{A}$ through the $3\\;\\Omega$, both doubled.`
    },
    {
      id: 'dc3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Dividers & Networks** 🎯`,
      exercise: {
        questions: [
          {
            question: `Current from a stimulating electrode reaches two parallel tissue paths: a $1\\;\\text{k}\\Omega$ muscle path and a $4\\;\\text{k}\\Omega$ fat path. If $5.0\\;\\text{mA}$ enters the pair, the current through the muscle path is:`,
            options: [`$1.0\\;\\text{mA}$`, `$4.0\\;\\text{mA}$`, `$2.5\\;\\text{mA}$`, `$5.0\\;\\text{mA}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Current divides in inverse proportion to resistance: $I_{muscle} = 5.0 \\times \\frac{4}{1 + 4} = 4.0\\;\\text{mA}$. The value $1.0\\;\\text{mA}$ gives the larger share to the larger resistance, and $2.5\\;\\text{mA}$ splits the current evenly as if the paths were identical.`
          },
          {
            question: `Two resistors, $2\\;\\text{k}\\Omega$ and $8\\;\\text{k}\\Omega$, are connected in series across a $10\\;\\text{V}$ ideal source. The voltage across the $8\\;\\text{k}\\Omega$ resistor is:`,
            options: [`$2\\;\\text{V}$`, `$5\\;\\text{V}$`, `$10\\;\\text{V}$`, `$8\\;\\text{V}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Series resistors share the voltage in proportion to resistance: $V_8 = 10 \\times \\frac{8}{2 + 8} = 8\\;\\text{V}$. The value $2\\;\\text{V}$ puts the smaller resistor on top, as the current-divider formula does; $5\\;\\text{V}$ splits the voltage evenly, and $10\\;\\text{V}$ is the whole source, which only a parallel branch would see.`
          },
          {
            question: `A passage describes a $24\\;\\text{V}$ ideal source in series with a $2\\;\\Omega$ resistor and a pair of $4\\;\\Omega$ resistors in parallel. One of the $4\\;\\Omega$ resistors then fails open. The current in the other $4\\;\\Omega$ resistor:`,
            options: [`Rises from $3\\;\\text{A}$ to $4\\;\\text{A}$`, `Rises from $3\\;\\text{A}$ to $6\\;\\text{A}$`, `Stays at $3\\;\\text{A}$`, `Falls from $3\\;\\text{A}$ to $2\\;\\text{A}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Before: the pair is $2\\;\\Omega$, $R_{eq} = 4\\;\\Omega$, $I = 6\\;\\text{A}$, split $3\\;\\text{A}$ per branch. After: $R_{eq} = 2 + 4 = 6\\;\\Omega$ and $I = 4\\;\\text{A}$, all through the surviving resistor. Answering $6\\;\\text{A}$ assumes the total current stays fixed when the resistance changes.`
          }
        ]
      }
    },
    {
      id: 'dc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Junction rule = conservation of charge: current in equals current out at every node
- Loop rule = conservation of energy: potential changes around any closed loop sum to zero
- Walking a loop: resistor with the current $-IR$, against $+IR$; source $-$ to $+$ is a rise
- Ground is a reference choice; it shifts potentials but never differences
- Collapse networks inside-out, find the total current, then walk back out splitting voltage (series) and current (parallel)
- Voltage divider: share proportional to $R$. Current divider: share inversely proportional to $R$ (the other resistor goes on top)

**Common traps**

- Trusting the drawing instead of the nodes
- Adding opposing sources instead of subtracting
- Assuming total current stays fixed after the network changes

<!-- yield:low -->
- Low-yield extras: simultaneous-equation solutions for multi-source networks.
<!-- /yield -->`
    }
  ]
}
