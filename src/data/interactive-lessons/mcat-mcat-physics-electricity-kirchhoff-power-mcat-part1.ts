import type { LessonData } from './registry'

export const kirchhoffPowerMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat',
  sections: [
    {
      id: 'dc3-intro',
      type: 'text' as const,
      content: `# Circuits Part 2: Kirchhoff's Rules & Power

**Part 1 of 2 — Kirchhoff's Rules & Reducing Networks**

**Where this fits.** The *Circuits Part 1: Current & Resistance* lesson gave you current, voltage, Ohm's law and the series and parallel rules. This lesson applies them to whole circuits: Kirchhoff's junction and loop rules, network reduction and dividers, then how a circuit responds to changes and how power sets bulb brightness and electrical safety. Next comes the *Circuits Part 3: EMF & Capacitance* lesson, which makes the battery real and adds the capacitor.

### Kirchhoff's Rules

Every circuit calculation rests on two conservation laws. Most MCAT circuits are single loops or networks that collapse into one, so expect to apply the rules as reasoning tools, not to solve systems of equations.

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

**Two sources in one loop.** Sources that push the same way add; sources that oppose subtract. The net source voltage drives the current through the total resistance. For example, a $12\\;\\text{V}$ and a $3\\;\\text{V}$ battery opposing each other across $3\\;\\Omega$: $+12 - 3 - 3I = 0$, so $I = 3\\;\\text{A}$.

<!-- yield:low -->
- When sources sit in more than one branch, the network does not collapse: write one junction equation and enough loop equations, then solve them simultaneously. This is rarely required on the MCAT.
<!-- /yield -->

### Worked Example — A Single Loop, Walked

**Problem.** A $30\\;\\text{V}$ ideal battery drives $3\\;\\Omega$, $5\\;\\Omega$ and $7\\;\\Omega$ resistors in series. Walk the loop in the direction of the current.

- **(a)** What equation does the loop rule give, and what current does it predict?
- **(b)** What is the voltage drop across each resistor?
- **(c)** With the battery's negative terminal grounded, what is the potential after each element of the loop?

**(a) Loop equation.** Walking with the current: $+30 - 3I - 5I - 7I = 0$, so $I = 2\\;\\text{A}$.

**(b) Drops.** With $I = 2\\;\\text{A}$ from (a), the drops are $6\\;\\text{V}$, $10\\;\\text{V}$ and $14\\;\\text{V}$, and they add back to $30\\;\\text{V}$.

**(c) Potentials.** $30\\;\\text{V}$ just past the positive terminal, $24\\;\\text{V}$ after the $3\\;\\Omega$ resistor, $14\\;\\text{V}$ after the $5\\;\\Omega$, and $0\\;\\text{V}$ after the $7\\;\\Omega$, right back at ground. The loop closes.`
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

**Problem 1.** A $12\\;\\text{V}$ ideal battery feeds a $2\\;\\Omega$ resistor in series with a parallel pair: $6\\;\\Omega$ and $3\\;\\Omega$.

- **(a)** What is the resistance of the parallel pair?
- **(b)** What is the total resistance, and what current leaves the battery?
- **(c)** What voltage is left across the parallel pair?
- **(d)** What current flows in each branch of the pair?
- **(e)** Do the junction and loop rules check out?

**(a) Collapse the parallel pair.** $R_{pair} = \\dfrac{(6)(3)}{6 + 3} = \\dfrac{18}{9} = 2\\;\\Omega$

**(b) Total resistance and current.** With $R_{pair} = 2\\;\\Omega$ from (a):

$$R_{eq} = 2 + 2 = 4\\;\\Omega, \\quad I = \\dfrac{12}{4} = 3\\;\\text{A}$$

**(c) Walk back out.** With $I = 3\\;\\text{A}$ from (b), the series resistor drops $V = (3)(2) = 6\\;\\text{V}$, leaving $12 - 6 = 6\\;\\text{V}$ across the pair.

**(d) Branch currents.** With $6\\;\\text{V}$ across the pair from (c):

$$I_6 = \\dfrac{6}{6} = 1\\;\\text{A}, \\quad I_3 = \\dfrac{6}{3} = 2\\;\\text{A}$$

**(e) Checks.** Junction: $1 + 2 = 3\\;\\text{A}$. Loop: $12 - 6 - 6 = 0$. The $3\\;\\Omega$ branch carries twice the current of the $6\\;\\Omega$ branch, inverse to resistance, exactly as the current divider predicts.

**Problem 2.** In the same circuit ($12\\;\\text{V}$, a $2\\;\\Omega$ resistor in series with $6\\;\\Omega$ parallel to $3\\;\\Omega$), the $6\\;\\Omega$ branch breaks open.

- **(a)** What are the new total resistance and current?
- **(b)** What voltage drops across each remaining resistor?
- **(c)** How did the total current and the current in the $3\\;\\Omega$ branch change from Problem 1?

**(a) New total.** Now the $2\\;\\Omega$ and $3\\;\\Omega$ resistors are simply in series: $R_{eq} = 5\\;\\Omega$ and $I = 12/5 = 2.4\\;\\text{A}$.

**(b) New drops.** With $I = 2.4\\;\\text{A}$ from (a), the $2\\;\\Omega$ resistor drops $4.8\\;\\text{V}$ and the $3\\;\\Omega$ resistor $7.2\\;\\text{V}$.

**(c) Compare.** The total current FELL (3 A to 2.4 A), yet the current in the surviving $3\\;\\Omega$ branch ROSE (2 A to 2.4 A), because the series resistor now takes less of the voltage.

**Problem 3.** Back in the original circuit, the $2\\;\\Omega$ series resistor is shorted instead, while the $6\\;\\Omega$ and $3\\;\\Omega$ pair stays on the $12\\;\\text{V}$ battery.

- **(a)** What are the new total resistance and current?
- **(b)** What current flows in each branch now, compared with Problem 1?

**(a) New total.** The shorted resistor drops out, so only the pair remains: $R_{eq} = 2\\;\\Omega$ and $I = 6\\;\\text{A}$.

**(b) Branch currents.** The pair now sees the full $12\\;\\text{V}$: $2\\;\\text{A}$ through the $6\\;\\Omega$ and $4\\;\\text{A}$ through the $3\\;\\Omega$, both doubled.`
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

- **Junction rule.** Charge is conserved, so the current into every node equals the current out of it.
- **Loop rule.** Energy is conserved: around a closed loop, $-IR$ with the current and $+V$ from $-$ to $+$ sum to zero.
- **Collapse inside-out.** Reduce the innermost series or parallel group, find $I = V/R_{eq}$, then walk back out.
- **Voltage and current dividers.** Series voltage splits in proportion to $R$; parallel current splits inversely, favouring the smaller $R$.

**Common traps**

- **Trusting the drawing.** Elements between the same two nodes are in parallel, however the figure stretches them.
- **Adding opposing sources.** Sources that push against each other subtract; only sources pushing the same way add.
- **Fixed total current.** Changing a network changes $R_{eq}$, so the total current changes too; recompute it.
- **Wrong divider numerator.** In $I_1 = I\\,R_2/(R_1 + R_2)$ the OTHER resistor goes on top, because current favours the smaller $R$.

<!-- yield:low -->
- Low-yield extras: simultaneous-equation solutions for multi-source networks.
<!-- /yield -->`
    }
  ]
}
