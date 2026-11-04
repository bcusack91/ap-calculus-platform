import type { LessonData } from './registry'

export const electrochemistryMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrochemistry-mcat',
  sections: [
    {
      id: 'echem1-intro',
      type: 'text' as const,
      content: `# Electrochemistry

**Part 1 of 4 — Galvanic Cells & Cell Potential**

### Redox in One Breath

- **Oxidation** = LOSS of electrons; **reduction** = GAIN (OIL RIG).
- The species that gets oxidized is the **reducing agent**; the species that gets reduced is the **oxidizing agent** — agents are named for what they do to the OTHER species.

### The Two Iron Laws of Electrodes

In EVERY electrochemical cell, galvanic or electrolytic:

- **AN OX**: oxidation happens at the ANODE.
- **RED CAT**: reduction happens at the CATHODE.

These never flip. What flips between cell types (Part 2 of this lesson) is the SIGN of each electrode.

### Anatomy of a Galvanic (Voltaic) Cell

A galvanic cell harvests a SPONTANEOUS redox reaction as electrical energy. Classic build (the Daniell cell): a zinc strip in $\\text{Zn}^{2+}$ solution, a copper strip in $\\text{Cu}^{2+}$ solution, wire between the metals, salt bridge between the solutions.

- Zinc is easier to oxidize: $\\text{Zn} \\rightarrow \\text{Zn}^{2+} + 2e^-$ at the anode; the zinc electrode DISSOLVES.
- Electrons travel through the WIRE from anode to cathode.
- At the cathode: $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$; copper PLATES onto the electrode and the blue $\\text{Cu}^{2+}$ solution fades.
- In a galvanic cell the anode is labeled $(-)$ and the cathode $(+)$: electrons pour OUT of the anode terminal.

### The Salt Bridge

Without it, charge would pile up in each beaker and the cell would die instantly. The bridge lets inert ions flow to keep both solutions neutral:

- **Anions** migrate toward the ANODE compartment (where positive ions are being produced).
- **Cations** migrate toward the CATHODE compartment (where positive ions are being consumed).

Ions complete the circuit in solution; electrons never swim.

### Standard Cell Potential

Every half-reaction has a standard REDUCTION potential $E^\\circ$; more positive means more eager to be reduced. The half-cell with the higher reduction potential runs as the cathode, and both values come straight from the reduction-potential table, no sign gymnastics:
$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$

A spontaneous (galvanic) cell has $E^\\circ_{cell} > 0$, which corresponds to $\\Delta G^\\circ < 0$ via $\\Delta G^\\circ = -nFE^\\circ_{cell}$, where $n$ is the moles of electrons transferred and $F \\approx 96{,}500\\;\\text{C/mol}$ is the Faraday constant. Since $\\Delta G^\\circ = -RT\\ln K$, $E^\\circ_{cell} > 0$ also means $K > 1$. **Never multiply $E^\\circ$ by stoichiometric coefficients**: potential is an intensive property, energy per unit charge, so only $\\Delta G^\\circ$ scales with $n$.`
    },
    {
      id: 'echem1-worked',
      type: 'text' as const,
      content: `### Worked Example — Building the Daniell Cell from a Table

**Problem 1.** Zinc and copper half-cells share a wire and a salt bridge. Standard reduction potentials: $\\text{Cu}^{2+}/\\text{Cu}$ $+0.34\\;\\text{V}$; $\\text{Zn}^{2+}/\\text{Zn}$ $-0.76\\;\\text{V}$.

- **(a)** Which metal is the cathode and which is the anode?
- **(b)** What is the standard cell potential, and is the cell spontaneous?
- **(c)** Which way do electrons travel in the wire, and which way do the salt bridge's anions move?
- **(d)** Which electrode loses mass and which gains it?

**(a) Assign the electrodes.** Copper's reduction potential is higher, so copper is REDUCED: copper = cathode, zinc = anode.

**(b) Cell potential.** With copper as the cathode from (a):

$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.34 - (-0.76) = 1.10\\;\\text{V}$

Positive, confirming spontaneity — this is a working battery.

**(c) Trace the movers.** Electrons: zinc strip, through the wire, to the copper strip. Anions in the salt bridge (e.g. $\\text{NO}_3^-$ from a $\\text{KNO}_3$ bridge): toward the zinc (anode) beaker, where fresh $\\text{Zn}^{2+}$ is piling up.

**(d) Mass.** The zinc electrode shrinks as its atoms leave as $\\text{Zn}^{2+}$; the copper electrode grows as $\\text{Cu}^{2+}$ plates onto it.

### Worked Example — Predicting Whether a Reaction Goes

**Problem 1.** A strip of solid silver is placed in a $\\text{Ni}^{2+}$ solution. Standard reduction potentials: $\\text{Ag}^+/\\text{Ag} = +0.80\\;\\text{V}$, $\\text{Ni}^{2+}/\\text{Ni} = -0.25\\;\\text{V}$.

- **(a)** For $\\text{Ni}^{2+}$ to oxidize the silver, which species would take the cathode role and which the anode role?
- **(b)** What is $E^\\circ_{cell}$ for that proposed reaction, and does it run?
- **(c)** Which reaction between these two couples does run, and at what potential?

**(a) Proposed roles.** $\\text{Ni}^{2+}$ would be reduced (cathode role); Ag would be oxidized (anode role).

**(b) Compute.** With those roles from (a): $E^\\circ_{cell} = -0.25 - 0.80 = -1.05\\;\\text{V}$. Negative → nonspontaneous. Silver stays untouched in nickel solution.

**(c) The reverse.** Swap the roles: $E^\\circ_{cell} = 0.80 - (-0.25) = +1.05\\;\\text{V}$. That is the reaction that runs: silver ion plates onto nickel metal.`
    },
    {
      id: 'echem1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Galvanic Cells & Cell Potential** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a galvanic cell, oxidation always occurs at the:`,
            options: [`Cathode`, `Positive terminal`, `Salt bridge`, `Anode`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `AN OX — oxidation at the anode, in every cell type. In a galvanic cell that anode happens to be the negative terminal; the positive terminal is the cathode, where reduction occurs. The salt bridge carries ions between the beakers; no electrons are transferred there, so no redox happens in it.`
          },
          {
            question: `In the external wire of a galvanic cell, electrons flow:`,
            options: [`From the anode to the cathode`, `From the cathode to the anode`, `Through the salt bridge`, `From the solution into both electrodes`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Oxidation at the anode releases electrons, which travel the wire to the cathode where reduction consumes them. Electrons never cross the salt bridge — only spectator ions move there. Nor do they flow from the solution into both electrodes: they leave the anode metal and are consumed at the cathode surface.`
          },
          {
            question: `For a cell to operate spontaneously as a galvanic cell, its standard cell potential must be:`,
            options: [`Negative`, `Exactly zero`, `Positive`, `Equal to $0.0592\\;\\text{V}$`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `$E^\\circ_{cell} > 0$ corresponds to $\\Delta G^\\circ = -nFE^\\circ_{cell} < 0$, the thermodynamic requirement for spontaneity.`
          },
          {
            question: `Given $E^\\circ(\\text{Ag}^+/\\text{Ag}) = +0.80\\;\\text{V}$ and $E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\;\\text{V}$, the standard potential of the spontaneous cell built from these couples is:`,
            options: [`$0.04\\;\\text{V}$`, `$1.56\\;\\text{V}$`, `$-1.56\\;\\text{V}$`, `$2.36\\;\\text{V}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Silver (higher $E^\\circ$) is the cathode: $E^\\circ_{cell} = 0.80 - (-0.76) = 1.56\\;\\text{V}$. Adding the two listed values gives $0.04\\;\\text{V}$; making zinc the cathode gives $-1.56\\;\\text{V}$. $2.36\\;\\text{V}$ doubles silver's potential because two $\\text{Ag}^+$ are reduced per Zn, but $E^\\circ$ is intensive and never scales with coefficients.`
          },
          {
            question: `While a galvanic cell runs, the anions in the salt bridge migrate:`,
            options: [`Toward the cathode compartment`, `Into the external wire with the electrons`, `Nowhere — the bridge ions are stationary`, `Toward the anode compartment`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The anode compartment accumulates fresh positive ions (metal being oxidized into solution), so negative bridge ions flow there to neutralize it. Cations go the other way, to the cathode side. Ions never enter the external wire; only electrons carry the current there.`
          }
        ]
      }
    },
    {
      id: 'echem1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Redox and agents.** Oxidation is electron loss and reduction is gain; the oxidizing agent is the species that gets reduced.
- **AN OX, RED CAT.** In every cell, galvanic or electrolytic, oxidation happens at the anode and reduction at the cathode.
- **Galvanic anatomy.** The $(-)$ anode dissolves and the $(+)$ cathode plates; electrons cross the wire, ions cross the bridge.
- **Cell potential.** $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$; positive means $\\Delta G^\\circ < 0$, a spontaneous cell.

**Common traps**

- **Scaling $E^\\circ$ by coefficients.** Potential is energy per charge, so doubling a half-reaction never doubles its $E^\\circ$.
- **Flipping a sign twice.** Subtract the anode's reduction potential exactly as listed; do not reverse its sign first as well.
- **Electrons in the salt bridge.** Electrons travel only through the wire; the bridge carries ions, anions toward the anode.
- **A positive galvanic anode.** In a galvanic cell the anode is $(-)$: electrons pour out of it into the wire.`
    }
  ]
};
