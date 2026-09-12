import type { LessonData } from './registry'

export const electrochemistryMcatPart4: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrochemistry-mcat',
  sections: [
    {
      id: 'echem4-strategy',
      type: 'text' as const,
      content: `# Electrochemistry

**Part 4 of 4 — MCAT Integration: Sign Conventions, Cell Diagrams & Passage Strategy**

Electrochemistry passages hand you a table of reduction potentials and a cell sketch, then probe whether your sign conventions survive contact. The playbook:

### Strategy 1 — The Master Sign Table (Memorize Once)

| | Galvanic | Electrolytic |
|---|---------|--------------|
| Anode | oxidation, $(-)$ | oxidation, $(+)$ |
| Cathode | reduction, $(+)$ | reduction, $(-)$ |
| $\\Delta G$ | $< 0$ | $> 0$ |
| $E_{cell}$ | $> 0$ | $< 0$ (must be driven) |

Chemistry (AN OX, RED CAT) is invariant; only signs and spontaneity flip. When a question feels ambiguous, first decide WHICH cell type you are in.

### Strategy 2 — Read Cell Diagram Notation Left to Right

$\\text{Zn}(s)\\;|\\;\\text{Zn}^{2+}(aq)\\;||\\;\\text{Cu}^{2+}(aq)\\;|\\;\\text{Cu}(s)$

- ANODE on the LEFT, cathode on the right — by convention, always.
- Single bar $|$ = phase boundary; double bar $||$ = salt bridge.
- Electrons flow left to right through the external wire.

### Strategy 3 — Work the Potential Table Like a Ladder

Reduction potentials sorted from most positive to most negative:

- **Best oxidizing agent** = species on the LEFT of the topmost (most positive) half-reaction — it is the most eager electron thief.
- **Best reducing agent** = species on the RIGHT of the bottommost (most negative) half-reaction — most eager electron donor.
- **Biggest possible battery** = pair the top half-reaction (as cathode) with the bottom one (as anode): $E^\\circ_{cell} = E^\\circ_{top} - E^\\circ_{bottom}$.

### Strategy 4 — Potentials Are Intensive

Doubling a half-reaction's coefficients does NOT double its $E^\\circ$ — volts are joules PER coulomb, already normalized. Only $\\Delta G = -nFE$ scales with $n$. Passages that multiply a half-reaction by 2 and invite you to double the potential are running the classic trap.

### Strategy 5 — Connect the Chapters

- Cell EMF drives circuit analysis: current through an external resistor is $I = \\varepsilon/(R + r)$, power delivered $I^2R$ — circuits vocabulary, electrochemical source.
- Electrolysis stoichiometry is dimensional analysis: $\\text{A}\\cdot\\text{s} \\rightarrow \\text{C} \\rightarrow \\text{mol}\\;e^- \\rightarrow \\text{mol metal} \\rightarrow \\text{grams}$. Write the chain; never freelance.
- Membrane potentials, electrophoresis, and galvanic corrosion are the same ideas wearing biology, lab-methods, and materials costumes.`
    },
    {
      id: 'echem4-worked',
      type: 'text' as const,
      content: `### Worked Example — Interrogating a Potential Table

A passage provides standard reduction potentials: $\\text{F}_2/\\text{F}^-$ $+2.87\\;\\text{V}$; $\\text{Ag}^+/\\text{Ag}$ $+0.80\\;\\text{V}$; $\\text{Zn}^{2+}/\\text{Zn}$ $-0.76\\;\\text{V}$; $\\text{Li}^+/\\text{Li}$ $-3.04\\;\\text{V}$.

**Best oxidizing agent:** $\\text{F}_2$ — it owns the most positive reduction potential, so it is reduced most readily.

**Best reducing agent:** solid $\\text{Li}$ — the product side of the most NEGATIVE half-reaction; reversing that half-reaction (oxidation of Li) is the most favorable electron donation. Note it is Li metal, not $\\text{Li}^+$: the ion has no electron to give.

**Largest cell voltage available:**

$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 2.87 - (-3.04) = 5.91\\;\\text{V}$

pairing fluorine reduction with lithium oxidation — which is why lithium chemistry (tamed) powers batteries.

### Worked Example — Galvanic or Electrolytic? Follow the Wire

A passage shows a cell wired to a DC power supply, silver bar on one side, spoon on the other, in $\\text{Ag}^+$ solution. The spoon is connected to the supply's negative terminal. What happens?

**Step 1 — Cell type.** External supply drives it → electrolytic.

**Step 2 — Electrode roles.** Negative terminal feeds electrons to the spoon → the spoon is the cathode → $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$ deposits silver onto the spoon. That is electroplating.

**Step 3 — The other side.** The silver bar (anode, $+$) oxidizes: $\\text{Ag} \\rightarrow \\text{Ag}^+ + e^-$, replenishing the solution. The bar shrinks at the same rate the spoon gains — the solution concentration holds steady.`
    },
    {
      id: 'echem4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Electrochemistry** 🎯`,
      exercise: {
        questions: [
          {
            question: `Given reduction potentials $\\text{F}_2$ $+2.87\\;\\text{V}$, $\\text{Ag}^+$ $+0.80\\;\\text{V}$, $\\text{Zn}^{2+}$ $-0.76\\;\\text{V}$, $\\text{Li}^+$ $-3.04\\;\\text{V}$, the strongest OXIDIZING agent listed is:`,
            options: [`$\\text{Li}^+$`, `$\\text{F}_2$`, `$\\text{Zn}^{2+}$`, `$\\text{Ag}^+$`],
            correctAnswer: 1,
            explanation: `The strongest oxidizing agent is the species most easily REDUCED — the most positive reduction potential, $\\text{F}_2$ at $+2.87\\;\\text{V}$. ($\\text{Li}^+$ is the WEAKEST oxidizer; Li METAL is the strongest reducer.)`
          },
          {
            question: `Using the same table, the maximum standard cell potential obtainable from any pair of these couples is:`,
            options: [`$5.91\\;\\text{V}$`, `$2.07\\;\\text{V}$`, `$3.84\\;\\text{V}$`, `$2.24\\;\\text{V}$`],
            correctAnswer: 0,
            explanation: `Pair the most positive couple as cathode with the most negative as anode: $2.87 - (-3.04) = 5.91\\;\\text{V}$. Any other pairing spans a smaller gap on the ladder.`
          },
          {
            question: `In the cell diagram $\\text{Zn}\\;|\\;\\text{Zn}^{2+}\\;||\\;\\text{Cu}^{2+}\\;|\\;\\text{Cu}$, the double vertical line represents:`,
            options: [`The external wire`, `A phase boundary between solid and solution`, `The direction of electron flow`, `The salt bridge`],
            correctAnswer: 3,
            explanation: `Double bar = salt bridge separating the half-cells; single bars are phase boundaries. Convention also puts the anode on the left — so electrons flow left to right in the wire.`
          },
          {
            question: `Which feature is the SAME in galvanic and electrolytic cells?`,
            options: [`The polarity sign of the anode`, `The sign of $\\Delta G$ for the cell reaction`, `Oxidation occurring at the anode`, `The direction of energy conversion`],
            correctAnswer: 2,
            explanation: `AN OX / RED CAT never flip. Anode sign ($-$ galvanic, $+$ electrolytic), spontaneity, and energy direction are precisely what distinguish the two types.`
          },
          {
            question: `A battery with EMF $1.5\\;\\text{V}$ reads only $1.3\\;\\text{V}$ across its terminals while powering a device. The missing $0.2\\;\\text{V}$ is best explained by:`,
            options: [`The voltage drop across the battery's internal resistance`, `A violation of Kirchhoff's loop rule`, `The Nernst equation raising $E$ above standard`, `Electrons losing charge as they traverse the circuit`],
            correctAnswer: 0,
            explanation: `Under load, $V_{terminal} = \\varepsilon - Ir$: the chemistry still generates $1.5\\;\\text{V}$, but $0.2\\;\\text{V}$ is spent pushing current through the cell's own internals. Charge is conserved and Kirchhoff holds — the loop rule is exactly what this equation expresses.`
          }
        ]
      }
    },
    {
      id: 'echem4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Master table: chemistry fixed (AN OX, RED CAT), signs flip (galvanic anode $-$, electrolytic anode $+$)
- Cell notation: anode left, cathode right; $|$ phase boundary, $||$ salt bridge
- Table ladder: most positive $E^\\circ$ = best oxidizer (that species gets reduced); most negative couple's METAL = best reducer; max voltage = top minus bottom
- $E^\\circ$ is intensive — never doubled with coefficients; only $\\Delta G = -nFE$ scales with $n$
- Follow the wire to classify a cell: external supply = electrolytic; plating happens where electrons enter (cathode)
- Battery in a circuit: $I = \\varepsilon/(R + r)$, terminal voltage sags by $Ir$`
    }
  ]
};
