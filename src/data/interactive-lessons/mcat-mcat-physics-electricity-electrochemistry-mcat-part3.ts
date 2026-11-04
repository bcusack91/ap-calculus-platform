import type { LessonData } from './registry'

export const electrochemistryMcatPart3: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrochemistry-mcat',
  sections: [
    {
      id: 'echem3-intro',
      type: 'text' as const,
      content: `# Electrochemistry

**Part 3 of 4 — Batteries, Concentration Cells & the Nernst Equation**

### Off-Standard Conditions: the Nernst Equation

Standard potentials assume $1\\;\\text{M}$ everything. Real cells drift as they run. At $25^\\circ\\text{C}$:
$E = E^\\circ - \\frac{0.0592}{n}\\log Q$

where $Q$ is the reaction quotient (products over reactants; solid electrodes are left out of $Q$) and $n$ the electrons transferred. Qualitative readings the MCAT actually tests:

- Products pile up ($Q$ rises) → $E$ FALLS. Every battery dies this way.
- Reactants enriched ($Q < 1$, $\\log Q < 0$) → $E$ climbs ABOVE $E^\\circ$.
- At equilibrium, $Q = K$ and $E = 0$: a dead battery is a cell at equilibrium.

### Concentration Cells

Build a cell from two IDENTICAL half-cells — same metal, same ion — differing only in concentration. Then $E^\\circ_{cell} = 0$: all the driving force is entropic, pushing the two concentrations toward equality.

- **Reduction happens in the CONCENTRATED compartment** (consuming its excess ions); oxidation in the dilute one (topping it up).
- The voltage is small — from the Nernst equation, $E = \\frac{0.0592}{n}\\log\\frac{[\\text{conc}]}{[\\text{dilute}]}$ — about $59\\;\\text{mV}$ per tenfold ratio for a one-electron ion, and half that when $n = 2$.
- The cell runs until concentrations match, then dies at $E = 0$.

**Biology is powered by this.** The resting membrane potential of a neuron is concentration-cell physics: the $\\text{K}^+$ gradient across the membrane sets a Nernst potential near $-90\\;\\text{mV}$; the $\\text{Na}^+$ gradient, near $+60\\;\\text{mV}$. The resting potential (about $-70\\;\\text{mV}$) sits near $E_K$ because the resting membrane is most permeable to $\\text{K}^+$. The MCAT loves this bridge between chapters.

### Real Batteries

A battery is one or more galvanic cells packaged with practical trade-offs:

- **Lead-acid** (car battery): six ~$2\\;\\text{V}$ cells in series for $12\\;\\text{V}$; the electrodes are lead and lead(IV) oxide in sulfuric acid; on discharge both electrodes become $\\text{PbSO}_4$ and the acid is used up; RECHARGEABLE; heavy but delivers huge surge current.
- **Nickel-cadmium (NiCd)**: Cd anode, $\\text{NiO(OH)}$ cathode in KOH, about $1.2\\;\\text{V}$; rechargeable.
- **Alkaline** (standard disposables): about $1.5\\;\\text{V}$; not designed for recharging.

<!-- yield:low -->
- NiMH and lithium-ion are newer rechargeable chemistries; lithium-ion wins on energy per kilogram, which is why it powers phones and laptops. (Pacemakers use non-rechargeable lithium-iodine cells.)
<!-- /yield -->

**Recharging = running the cell as an electrolytic cell**: the charger overpowers the cell's own EMF and forces current backward, regenerating reactants. Each electrode keeps its polarity sign, but its ROLE swaps (the discharge cathode becomes the charging anode).

Link back to circuits: a battery's internal resistance makes its terminal voltage sag under load ($V = \\varepsilon - Ir$), as the *Circuits Part 3: EMF & Capacitance* lesson shows — chemistry supplies the EMF, physics collects the tax.`
    },
    {
      id: 'echem3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Copper Concentration Cell

**Problem 1.** Two copper electrodes sit in $\\text{Cu}^{2+}$ solutions of $0.010\\;\\text{M}$ and $1.0\\;\\text{M}$, joined by wire and salt bridge.

- **(a)** Which beaker holds the cathode, and what happens at the other electrode?
- **(b)** What is the cell voltage?
- **(c)** How do the two solutions change as the cell runs, and when does the current stop?

**(a) Assign the electrodes.** Reduction runs in the CONCENTRATED ($1.0\\;\\text{M}$) beaker — that side is the cathode. The dilute side oxidizes its copper electrode, releasing more $\\text{Cu}^{2+}$.

**(b) Voltage.** With $n = 2$ and a $100$-fold ratio:

$E = \\frac{0.0592}{2}\\log\\frac{1.0}{0.010} = (0.0296)(2) = 0.0592\\;\\text{V}$

About $59\\;\\text{mV}$ — real but tiny; concentration cells are weak batteries.

**(c) Endgame.** The concentrated side dilutes, the dilute side concentrates; at equal concentrations, $E = 0$ and the current stops.

### Worked Example — Reading a Dying Battery with Nernst

**Problem 1.** A Daniell cell ($E^\\circ = 1.10\\;\\text{V}$, $n = 2$, $Q = [\\text{Zn}^{2+}]/[\\text{Cu}^{2+}]$) has run until $[\\text{Zn}^{2+}] = 1.0\\;\\text{M}$ and $[\\text{Cu}^{2+}] = 0.01\\;\\text{M}$.

- **(a)** What is the reaction quotient, and what is the cell potential now?
- **(b)** Why has the voltage dropped, and where does the decline end?

**(a) Nernst correction.** $Q = 1.0/0.01 = 100$, so:

$E = 1.10 - \\frac{0.0592}{2}\\log(100) = 1.10 - (0.0296)(2) = 1.10 - 0.06 = 1.04\\;\\text{V}$

**(b) Interpret.** Product ion accumulating and reactant ion depleting shaved $0.06\\;\\text{V}$ off the standard voltage — and the slide continues until equilibrium ($E = 0$, battery dead).`
    },
    {
      id: 'echem3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Batteries, Concentration Cells & Nernst** 🎯`,
      exercise: {
        questions: [
          {
            question: `The STANDARD cell potential ($E^\\circ$) of any concentration cell is:`,
            options: [`Always positive`, `Always negative`, `Zero`, `Exactly $0.0592\\;\\text{V}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Both half-cells are chemically identical, so their standard reduction potentials cancel exactly. The WORKING voltage comes entirely from the Nernst term driven by the concentration difference.`
          },
          {
            question: `In a concentration cell, reduction takes place in the half-cell with the:`,
            options: [`Lower concentration of the shared ion`, `Higher concentration of the shared ion`, `Higher standard reduction potential`, `Electrode the electrons leave through`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The cell runs to equalize concentrations: reduction consumes ions where they are in excess (concentrated side = cathode), while oxidation replenishes the dilute side. The two half-cells have identical standard reduction potentials, so $E^\\circ$ cannot pick the cathode, and electrons leave through the dilute side's electrode, which is the anode.`
          },
          {
            question: `Recharging a lead-acid battery makes it operate, during the charging, as:`,
            options: [`An electrolytic cell`, `A stronger galvanic cell`, `A concentration cell`, `A fuel cell`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The charger forces current backward against the cell's EMF, driving the discharge reaction in reverse — the definition of electrolytic operation. Electrode ROLES swap while their polarity signs stay put.`
          },
          {
            question: `According to the Nernst equation, starting from standard conditions, letting products accumulate (raising $Q$ above 1) causes the cell potential to:`,
            options: [`Rise above $E^\\circ$`, `Stay locked at $E^\\circ$`, `Oscillate around zero`, `Fall below $E^\\circ$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$E = E^\\circ - (0.0592/n)\\log Q$: larger $Q$ means a larger subtraction. The slide ends at equilibrium, where $Q = K$ and $E = 0$ — a dead battery.`
          },
          {
            question: `The resting potential across a neuron's membrane is best modeled as the voltage of:`,
            options: [`A galvanic cell of two different metals`, `A concentration cell driven by ion gradients`, `An electrolytic cell driven by ATP directly`, `A capacitor with no ion gradient`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Same ion, different concentrations across a membrane — pure concentration-cell physics, giving Nernst potentials near $-90\\;\\text{mV}$ for $\\text{K}^+$ and $+60\\;\\text{mV}$ for $\\text{Na}^+$. (ATP maintains the gradients; it is not the immediate voltage source.)`
          }
        ]
      }
    },
    {
      id: 'echem3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **The Nernst equation.** $E = E^\\circ - (0.0592/n)\\log Q$, solids left out of $Q$; $E$ falls as products build, to $0$ at $Q = K$.
- **Concentration cells.** $E^\\circ = 0$; reduction runs on the concentrated side, and the cell dies once concentrations match.
- **Neurons as concentration cells.** Ion gradients across the membrane set Nernst potentials, near $-90\\;\\text{mV}$ for $\\text{K}^+$.
- **Recharging is electrolysis.** A charger drives a rechargeable cell, such as lead-acid, backward and regenerates its reactants.

**Common traps**

- **A nonzero concentration-cell $E^\\circ$.** Identical half-cells give $E^\\circ = 0$; all the voltage comes from the Nernst term.
- **Reduction on the dilute side.** Reduction consumes ions where they are in excess, so the concentrated side is the cathode.
- **Signs swapping on recharge.** Each terminal keeps its sign while charging; it is the anode and cathode ROLE that swaps.
- **Multiplying 59 mV by $n$.** The slope is $0.0592/n$, so a two-electron ion gives only about $30\\;\\text{mV}$ per tenfold ratio.

<!-- yield:low -->
- Low-yield extras: NiMH and lithium-ion chemistries and their energy density; pacemaker cells.
<!-- /yield -->`
    }
  ]
};
