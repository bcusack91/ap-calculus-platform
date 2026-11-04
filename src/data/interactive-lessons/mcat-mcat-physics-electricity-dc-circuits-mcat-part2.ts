import type { LessonData } from './registry'

export const dcCircuitsMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-dc-circuits-mcat',
  sections: [
    {
      id: 'dc2-intro',
      type: 'text' as const,
      content: `# Circuits Part 1: Current & Resistance

**Part 2 of 2 — Resistance, Ohm's Law & Series vs. Parallel**

### Resistance and Ohm's Law

**Resistance** $R$ measures how strongly an element opposes current. It is the ratio of the voltage across the element to the current through it, measured in ohms ($1\\;\\Omega = 1\\;\\text{V/A}$):

$$V = IR$$

Its reciprocal is the **conductance**, $G = 1/R$, measured in siemens ($1\\;\\text{S} = 1\\;\\Omega^{-1}$): the more conductance, the more current per volt.

Read Ohm's law three ways, depending on what the circuit holds fixed:

- **Fixed $R$:** current is proportional to voltage. Double $V$, double $I$.
- **Fixed $V$** (an outlet, or a branch wired straight across a battery): $I \\propto 1/R$. Halve the resistance, double the current.
- **Fixed $I$** (elements in one series path): $V \\propto R$. The bigger resistor takes the bigger share of the voltage.

**What sets $R$: material and geometry.**

$$R = \\rho\\frac{L}{A}$$

- $\\rho$ is the **resistivity**, in $\\Omega \\cdot \\text{m}$. It belongs to the MATERIAL, not the object: very low for metals, intermediate for saline and tissue, enormous for glass, rubber and lipid. Its reciprocal is the conductivity introduced earlier in this lesson.
- **Longer** means more resistance ($R \\propto L$): carriers must cross more obstacles.
- **Fatter** means less resistance ($R \\propto 1/A$): more side-by-side lanes. For a round wire $A = \\pi r^2$, so doubling the DIAMETER quadruples $A$ and cuts $R$ to one-quarter.
- **Stretching** at constant volume: if $L$ rises by a factor $n$, $A$ falls by $n$, so $R$ rises by $n^2$.
- **Biology link:** an axon's cytoplasm is a resistor. Its internal resistance per unit length goes as $1/r^2$, so a wider axon lets current spread farther down its length and conducts faster.
- **Fluid trap:** pipe flow resistance goes as $1/r^4$ (Poiseuille), but a wire's electrical resistance goes as $1/r^2$. Do not mix them up.

**Temperature dependence.** For metals, resistivity INCREASES with temperature: a hotter lattice scatters electrons more often. A glowing tungsten filament has many times the resistance it has when cold. (Electrolytes go the other way, as Part 1 of this lesson showed.)

<!-- yield:low -->
- Semiconductors lose resistance as they warm, because heating frees more carriers; certain materials become superconductors, with exactly zero resistance, below a critical temperature.
<!-- /yield -->

### Ohmic vs. Non-Ohmic Elements

An **ohmic** element keeps the same $R$ whatever the voltage. Its graph of $I$ against $V$ is a straight line through the origin with slope $1/R$ (a graph of $V$ against $I$ has slope $R$). A **non-ohmic** element curves. On an $I$-vs-$V$ graph, a filament bulb's curve flattens as the filament heats (the slope $1/R$ shrinks): its resistance climbs, so doubling the voltage less than doubles the current. $V = IR$ still DEFINES $R$ at each instant; "ohmic" simply means that $R$ stays constant.

<!-- yield:low -->
- A diode is an extreme non-ohmic device: it passes current easily in one direction and almost none in the other.
<!-- /yield -->`
    },
    {
      id: 'dc2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Resistance & Ohm's Law** 🎯`,
      exercise: {
        questions: [
          {
            question: `A metal wire is drawn out to three times its original length; its volume and resistivity do not change. Its resistance:`,
            options: [`Triples`, `Stays the same`, `Increases ninefold`, `Increases sixfold`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `At constant volume, tripling $L$ cuts $A$ to one-third. Since $R = \\rho L/A$, the resistance rises by $3 \\times 3 = 9$. "Triples" accounts for the extra length but forgets that the wire also got thinner.`
          },
          {
            question: `Two unmyelinated axons have identical cytoplasm, but axon B has twice the diameter of axon A. Compared with a 1 cm length of axon A, the internal resistance of a 1 cm length of axon B is:`,
            options: [`One-quarter as large`, `One-half as large`, `Twice as large`, `One-sixteenth as large`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Resistance goes as $1/A$, and doubling the diameter quadruples the cross-sectional area, so $R$ falls to one-quarter. "One-half" treats resistance as depending on diameter rather than area; "one-sixteenth" borrows the $r^4$ scaling of fluid flow through a pipe.`
          },
          {
            question: `For an ohmic resistor, a graph of current (vertical axis) against voltage (horizontal axis) is a straight line through the origin. Its slope equals:`,
            options: [`The resistance, $R$`, `The conductance, $1/R$`, `The power, $IV$`, `The resistivity, $\\rho$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `From $V = IR$, $I = (1/R)V$, so the slope of $I$ against $V$ is $1/R$. The slope equals $R$ only when the axes are swapped, with $V$ on the vertical axis. Resistivity is a material property and cannot be read from one component's graph.`
          },
          {
            question: `The voltage across an incandescent bulb is doubled, from a dim setting to its full rating. The current through the filament:`,
            options: [`Exactly doubles, as Ohm's law requires`, `Stays the same, since $R$ is fixed`, `Rises by more than a factor of two`, `Rises by less than a factor of two`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `The hotter filament has a higher resistivity, so $R$ grows as the voltage rises and the current increases less than proportionally: the bulb is non-ohmic. An exact doubling would hold only if $R$ stayed constant; a more-than-double rise would need $R$ to fall as the voltage rises.`
          }
        ]
      }
    },
    {
      id: 'dc2-series-parallel',
      type: 'text' as const,
      content: `### Series vs. Parallel Resistors

Identify the arrangement by current paths and shared connection points (nodes), never by how the figure is drawn:

- **Series:** elements sit one after another on a single path, with no junction between them. They carry the SAME current.
- **Parallel:** elements each connect the SAME two nodes. They have the SAME voltage across them.

| | Series | Parallel |
|---|---|---|
| Same for every element | current $I$ | voltage $V$ |
| What divides | voltage: $V = V_1 + V_2 + \\cdots$ | current: $I = I_1 + I_2 + \\cdots$ |
| Equivalent resistance | $R_{eq} = R_1 + R_2 + \\cdots$ | $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$ |
| Adding one more resistor | $R_{eq}$ rises, current falls | $R_{eq}$ falls, total current rises |
| Biggest share goes to | largest $R$ (most voltage) | smallest $R$ (most current) |
| One element breaks open | current stops everywhere | the other branches carry on |

**Why the rules look the way they do.** Series resistors are like added LENGTH, so resistances add. Parallel resistors are like added cross-sectional AREA, so it is the conductances ($G = 1/R$) that add.

**Shortcuts worth memorizing:**

- **Two in parallel:** $R_{eq} = \\dfrac{R_1 R_2}{R_1 + R_2}$ ("product over sum").
- **$n$ identical resistors:** $nR$ in series, $R/n$ in parallel.
- **Bounds:** a parallel $R_{eq}$ is always SMALLER than the smallest branch (every new path lets more current through); a series $R_{eq}$ is always LARGER than the largest element.
- **Lopsided pairs:** a huge resistor in parallel with a small one barely changes the small one's value; the small path dominates.

**Short circuits.** A wire of negligible resistance connected across an element holds both of its ends at the same potential. Then $V = 0$ across the element and $I = V/R = 0$ through it: the element is bypassed and drops out of the circuit, and all the current takes the wire. Shorting a source directly makes $R_{eq}$ nearly zero, which drives a dangerously large current and heats the wiring.

**Open branches.** A broken branch carries no current and can be erased from the drawing. If an ideal source sits directly across a parallel bank, the remaining branches keep their voltage and current. (The *Circuits Part 2: Kirchhoff's Rules & Power* lesson shows what changes when a series resistor sits in front of the bank.)`
    },
    {
      id: 'dc2-worked',
      type: 'text' as const,
      content: `### Worked Example — Series String, Parallel Bank, Identical Branches

**Problem 1.** A $24\\;\\text{V}$ ideal battery drives three resistors in series: $2\\;\\Omega$, $4\\;\\Omega$ and $6\\;\\Omega$.

- **(a)** What is the equivalent resistance?
- **(b)** What current flows through each resistor?
- **(c)** What is the voltage drop across each resistor?
- **(d)** Do the drops add back to the battery voltage, and how do they compare with the resistances?

**(a) Equivalent resistance.** $R_{eq} = 2 + 4 + 6 = 12\\;\\Omega$

**(b) Current.** With $R_{eq} = 12\\;\\Omega$ from (a): $I = 24/12 = 2.0\\;\\text{A}$, the same everywhere, because series elements share one path.

**(c) Voltage drops.** With $I = 2.0\\;\\text{A}$ from (b): $V_2 = (2.0)(2) = 4\\;\\text{V}$, $V_4 = 8\\;\\text{V}$, $V_6 = 12\\;\\text{V}$

**(d) Check.** $4 + 8 + 12 = 24\\;\\text{V}$. The drops are in the ratio $1 : 2 : 3$, the same as the resistances.

**Problem 2.** A $12\\;\\text{V}$ ideal battery sits across a $4\\;\\Omega$ and a $12\\;\\Omega$ resistor in parallel.

- **(a)** What is the equivalent resistance?
- **(b)** What current flows in each branch?
- **(c)** Does the junction rule agree with the total current from $R_{eq}$?
- **(d)** How does the ratio of the branch currents compare with the ratio of the resistances?

**(a) Product over sum.** $R_{eq} = \\dfrac{(4)(12)}{4 + 12} = \\dfrac{48}{16} = 3\\;\\Omega$, below $4\\;\\Omega$ as it must be.

**(b) Branch currents.** Each branch sees the full $12\\;\\text{V}$: $I_4 = 12/4 = 3\\;\\text{A}$ and $I_{12} = 12/12 = 1\\;\\text{A}$.

**(c) Junction check.** From (b), $3 + 1 = 4\\;\\text{A}$; from (a), $V/R_{eq} = 12/3 = 4\\;\\text{A}$. They agree.

**(d) Inverse ratio.** The currents are in the ratio $3 : 1$, the INVERSE of the resistance ratio $1 : 3$.

**Problem 3.** Four identical $20\\;\\Omega$ heating elements are connected to a $10\\;\\text{V}$ source.

- **(a)** Wired in parallel, how much current does the source supply, and how much flows through each element?
- **(b)** Wired in series, how much current flows?
- **(c)** How many times as much current does the parallel bank draw, and why that number?

**(a) In parallel.** $R_{eq} = 20/4 = 5\\;\\Omega$, so the source supplies $10/5 = 2\\;\\text{A}$, or $0.5\\;\\text{A}$ per element.

**(b) In series.** $R_{eq} = 4 \\times 20 = 80\\;\\Omega$, so $I = 10/80 = 0.125\\;\\text{A}$.

**(c) The ratio.** With $2\\;\\text{A}$ from (a) and $0.125\\;\\text{A}$ from (b), the parallel bank draws $2/0.125 = 16$ times as much current, that is $n^2$ for $n = 4$: the resistance fell by $n$ in one arrangement and rose by $n$ in the other.`
    },
    {
      id: 'dc2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Series, Parallel & Shorts** 🎯`,
      exercise: {
        questions: [
          {
            question: `Three resistors of $6\\;\\Omega$, $6\\;\\Omega$ and $3\\;\\Omega$ are connected in parallel. Their equivalent resistance is:`,
            options: [`$1.5\\;\\Omega$`, `$15\\;\\Omega$`, `$5\\;\\Omega$`, `$0.67\\;\\Omega$`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `The two $6\\;\\Omega$ resistors combine to $6/2 = 3\\;\\Omega$, and that $3\\;\\Omega$ in parallel with the other $3\\;\\Omega$ gives $1.5\\;\\Omega$, below the smallest branch. $0.67\\;\\Omega$ is the sum of reciprocals ($2/3$) left un-inverted; $15\\;\\Omega$ is the series sum.`
          },
          {
            question: `Three identical resistors are in series across an ideal battery. A wire of negligible resistance is then connected across the middle resistor. The current drawn from the battery:`,
            options: [`Triples`, `Is unchanged`, `Rises by a factor of $3/2$`, `Falls by one-third`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The shorted resistor drops out, so $R_{eq}$ falls from $3R$ to $2R$ and the current rises from $V/3R$ to $V/2R$, a factor of $3/2$. The middle resistor itself now carries no current. "Triples" would require all of the resistance to vanish, not just one-third.`
          },
          {
            question: `A lab report states that an unknown resistor wired in parallel with an $8\\;\\Omega$ resistor produced a measured equivalent resistance of $12\\;\\Omega$. What is the best conclusion?`,
            options: [`The unknown must be $4\\;\\Omega$, since $8 + 4 = 12$`, `The data are consistent; the unknown is $24\\;\\Omega$`, `The unknown must be $20\\;\\Omega$, since $8 + 12 = 20$`, `The data are flawed: the pair must be below $8\\;\\Omega$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `A parallel combination is always smaller than its smallest branch, so no resistor in parallel with $8\\;\\Omega$ can give $12\\;\\Omega$. Solving $1/12 = 1/8 + 1/R$ gives $R = -24\\;\\Omega$, which is unphysical; reporting $24\\;\\Omega$ drops that sign. The $4\\;\\Omega$ answer treats the pair as series.`
          }
        ]
      }
    },
    {
      id: 'dc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Ohm's law three ways.** $V = IR$: fixed $R$ gives $I \\propto V$, fixed $V$ gives $I \\propto 1/R$, fixed $I$ gives $V \\propto R$.
- **Geometry sets resistance.** $R = \\rho L/A$: doubling the diameter quarters $R$; stretching by $n$ at constant volume multiplies it by $n^2$.
- **Series vs. parallel.** Series shares current and $R_{eq}$ adds up; parallel shares voltage and $R_{eq}$ falls below the smallest branch.
- **Shorts and opens.** A shorted element carries no current and drops out; an open branch carries none and can be erased.

**Common traps**

- **Diameter for area.** Wire resistance goes as $1/r^2$ through the area, not as $1/d$ and not as the fluid $1/r^4$ law.
- **Swapped formulas.** Resistances add in series; in parallel it is the conductances $1/R$ that add.
- **Un-inverted reciprocal.** The sum $1/R_1 + 1/R_2$ is $1/R_{eq}$; invert it at the end to get $R_{eq}$.
- **Oversized parallel result.** A parallel $R_{eq}$ above any branch is an error; it is always below the smallest branch.

<!-- yield:low -->
- Low-yield extras: semiconductors and superconductors versus temperature; diodes as non-ohmic devices.
<!-- /yield -->

**Next up:** the *Circuits Part 2: Kirchhoff's Rules & Power* lesson — Kirchhoff's junction and loop rules, reducing whole networks, voltage and current dividers, and how power sets bulb brightness and electrical safety.`
    }
  ]
}
