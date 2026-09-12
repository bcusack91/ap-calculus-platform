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

These never flip. What flips between cell types (Part 2) is the SIGN of each electrode.

### Anatomy of a Galvanic (Voltaic) Cell

A galvanic cell harvests a SPONTANEOUS redox reaction as electrical energy — chemical energy out as current. Classic build (the Daniell cell): a zinc strip in $\\text{Zn}^{2+}$ solution, a copper strip in $\\text{Cu}^{2+}$ solution, wire between the metals, salt bridge between the solutions.

- Zinc is easier to oxidize: $\\text{Zn} \\rightarrow \\text{Zn}^{2+} + 2e^-$ at the anode; the zinc electrode slowly DISSOLVES.
- Electrons travel through the WIRE from anode to cathode.
- At the cathode: $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$; copper PLATES onto the electrode and the blue $\\text{Cu}^{2+}$ solution fades.
- In a galvanic cell the anode is labeled $(-)$ and the cathode $(+)$: electrons pour OUT of the anode terminal.

### The Salt Bridge

Without it, charge would pile up in each beaker and the cell would die instantly. The bridge lets inert ions flow to keep both solutions neutral:

- **Anions** migrate toward the ANODE compartment (where positive ions are being produced).
- **Cations** migrate toward the CATHODE compartment (where positive ions are being consumed).

Ions complete the circuit in solution; electrons never swim.

### Standard Cell Potential

Every half-reaction has a standard REDUCTION potential $E^\\circ$; more positive means more eager to be reduced. The half-cell with the higher reduction potential runs as the cathode:

$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$

(both taken from the reduction-potential table, no sign gymnastics). A spontaneous (galvanic) cell has $E^\\circ_{cell} > 0$, which corresponds to $\\Delta G < 0$ via $\\Delta G^\\circ = -nFE^\\circ_{cell}$.

**Never multiply $E^\\circ$ by stoichiometric coefficients** — potential is an intensive property, energy per unit charge.`
    },
    {
      id: 'echem1-worked',
      type: 'text' as const,
      content: `### Worked Example — Building the Daniell Cell from a Table

Given standard reduction potentials: $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$, $E^\\circ = +0.34\\;\\text{V}$; and $\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}$, $E^\\circ = -0.76\\;\\text{V}$.

**Step 1 — Assign the electrodes.** Copper's reduction potential is higher, so copper is REDUCED: copper = cathode, zinc = anode.

**Step 2 — Cell potential.**

$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.34 - (-0.76) = 1.10\\;\\text{V}$

Positive, confirming spontaneity — this is a working battery.

**Step 3 — Trace every mover.** Electrons: zinc strip, through the wire, to the copper strip. Sulfate anions in the salt bridge: toward the zinc (anode) beaker. Mass: zinc electrode shrinks, copper electrode grows.

### Worked Example — Predicting Whether a Reaction Goes

Will $\\text{Ni}^{2+}$ oxidize solid silver? ($E^\\circ$: $\\text{Ag}^+/\\text{Ag} = +0.80\\;\\text{V}$, $\\text{Ni}^{2+}/\\text{Ni} = -0.25\\;\\text{V}$)

**Step 1 — Proposed roles.** $\\text{Ni}^{2+}$ would be reduced (cathode role); Ag would be oxidized (anode role).

**Step 2 — Compute.** $E^\\circ_{cell} = -0.25 - 0.80 = -1.05\\;\\text{V}$.

Negative → nonspontaneous. Silver stays untouched in nickel solution. (The REVERSE reaction, $+1.05\\;\\text{V}$, is the one that runs: silver ion plates onto nickel.)`
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
            explanation: `AN OX — oxidation at the anode, in every cell type. In a galvanic cell that anode happens to be the negative terminal; the positive terminal is the cathode, where reduction occurs.`
          },
          {
            question: `In the external wire of a galvanic cell, electrons flow:`,
            options: [`From the anode to the cathode`, `From the cathode to the anode`, `Through the salt bridge`, `From the solution into both electrodes`],
            correctAnswer: 0,
            explanation: `Oxidation at the anode releases electrons, which travel the wire to the cathode where reduction consumes them. Electrons never cross the salt bridge — only spectator ions move there.`
          },
          {
            question: `For a cell to operate spontaneously as a galvanic cell, its standard cell potential must be:`,
            options: [`Negative`, `Exactly zero`, `Positive`, `Equal to $0.0592\\;\\text{V}$`],
            correctAnswer: 2,
            explanation: `$E^\\circ_{cell} > 0$ corresponds to $\\Delta G^\\circ = -nFE^\\circ_{cell} < 0$, the thermodynamic requirement for spontaneity.`
          },
          {
            question: `Given $E^\\circ(\\text{Ag}^+/\\text{Ag}) = +0.80\\;\\text{V}$ and $E^\\circ(\\text{Ni}^{2+}/\\text{Ni}) = -0.25\\;\\text{V}$, the standard potential of the spontaneous cell built from these couples is:`,
            options: [`$0.55\\;\\text{V}$`, `$1.05\\;\\text{V}$`, `$-1.05\\;\\text{V}$`, `$0.30\\;\\text{V}$`],
            correctAnswer: 1,
            explanation: `Silver (higher $E^\\circ$) is the cathode: $E^\\circ_{cell} = 0.80 - (-0.25) = 1.05\\;\\text{V}$. Adding wrong signs gives $0.55$; picking nickel as cathode gives the negative value.`
          },
          {
            question: `While a galvanic cell runs, the anions in the salt bridge migrate:`,
            options: [`Toward the cathode compartment`, `Into the external wire`, `Nowhere — the bridge ions are stationary`, `Toward the anode compartment`],
            correctAnswer: 3,
            explanation: `The anode compartment accumulates fresh positive ions (metal being oxidized into solution), so negative bridge ions flow there to neutralize it. Cations go the other way, to the cathode side.`
          }
        ]
      }
    },
    {
      id: 'echem1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- OIL RIG; oxidizing agent gets reduced, reducing agent gets oxidized
- AN OX and RED CAT hold in every cell, always
- Galvanic: spontaneous, chemical to electrical; anode $(-)$ dissolves, cathode $(+)$ plates; electrons wire-only, anode to cathode
- Salt bridge: anions to anode, cations to cathode — keeps beakers neutral
- $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$ (reduction values as-is); positive means spontaneous ($\\Delta G^\\circ = -nFE^\\circ < 0$); never scale $E^\\circ$ by coefficients`
    }
  ]
};
