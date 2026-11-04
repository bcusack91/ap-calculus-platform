import type { LessonData } from './registry'

export const electrochemistryMcatPart4: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrochemistry-mcat',
  sections: [
    {
      id: 'echem4-strategy',
      type: 'text' as const,
      content: `# Electrochemistry

**Part 4 of 4 — MCAT Integration: Sign Conventions, Cell Diagrams & Passage Strategy**

### Strategy 1 — The Master Sign Table (Memorize Once)

Electrochemistry passages hand you a table of reduction potentials and a cell sketch, then probe whether your sign conventions survive contact. The playbook starts with the signs:

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

- Cell EMF drives circuit analysis: current through an external resistor is $I = \\varepsilon/(R + r)$, power delivered $I^2R$ — circuits vocabulary, electrochemical source (EMF and internal resistance are taught in the *Circuits Part 3: EMF & Capacitance* lesson).
- Electrolysis stoichiometry is dimensional analysis: $\\text{A}\\cdot\\text{s} \\rightarrow \\text{C} \\rightarrow \\text{mol}\\;e^- \\rightarrow \\text{mol metal} \\rightarrow \\text{grams}$. Write the chain; never freelance.
- Membrane potentials, electrophoresis, and galvanic corrosion are the same ideas wearing biology, lab-methods, and materials costumes.`
    },
    {
      id: 'echem4-worked',
      type: 'text' as const,
      content: `### Worked Example — Interrogating a Potential Table

**Problem 1.** A passage lists these reduction potentials: $\\text{F}_2/\\text{F}^-$ $+2.87\\;\\text{V}$; $\\text{Ag}^+/\\text{Ag}$ $+0.80\\;\\text{V}$; $\\text{Zn}^{2+}/\\text{Zn}$ $-0.76\\;\\text{V}$; $\\text{Li}^+/\\text{Li}$ $-3.04\\;\\text{V}$.

- **(a)** Which species is the best oxidizing agent?
- **(b)** Which species is the best reducing agent?
- **(c)** What is the largest cell voltage these couples can give, and from which pairing?

**(a) Best oxidizing agent.** $\\text{F}_2$ — it owns the most positive reduction potential, so it is reduced most readily.

**(b) Best reducing agent.** Solid $\\text{Li}$ — the product side of the most NEGATIVE half-reaction; reversing that half-reaction (oxidation of Li) is the most favorable electron donation. Note it is Li metal, not $\\text{Li}^+$: the ion has no electron to give.

**(c) Largest cell voltage.** Pair fluorine reduction (cathode) with lithium oxidation (anode), the oxidizer from (a) with the reducer from (b):

$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 2.87 - (-3.04) = 5.91\\;\\text{V}$

That is why lithium chemistry (tamed) powers batteries.

### Worked Example — Galvanic or Electrolytic? Follow the Wire

**Problem 1.** A passage shows a cell wired to a DC power supply: a silver bar on one side and a spoon on the other, both in $\\text{Ag}^+$ solution. The spoon is connected to the supply's negative terminal.

- **(a)** Is the cell galvanic or electrolytic, which electrode is the spoon, and what happens on it?
- **(b)** What happens at the silver bar, and what happens to the solution's concentration?

**(a) Cell type and the spoon.** External supply drives it → electrolytic. Negative terminal feeds electrons to the spoon → the spoon is the cathode → $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$ deposits silver onto the spoon. That is electroplating.

**(b) The other side.** The silver bar (anode, $+$) oxidizes: $\\text{Ag} \\rightarrow \\text{Ag}^+ + e^-$, replenishing the solution. The bar shrinks at the same rate the spoon gains — the solution concentration holds steady.`
    },
    {
      id: 'echem4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Electrochemistry** 🎯`,
      exercise: {
        questions: [
          {
            question: `Given reduction potentials $\\text{Br}_2/\\text{Br}^-$ $+1.07\\;\\text{V}$, $\\text{Cu}^{2+}/\\text{Cu}$ $+0.34\\;\\text{V}$, $\\text{Fe}^{2+}/\\text{Fe}$ $-0.44\\;\\text{V}$, $\\text{Na}^+/\\text{Na}$ $-2.71\\;\\text{V}$, the strongest OXIDIZING agent listed is:`,
            options: [`$\\text{Na}^+$`, `$\\text{Br}_2$`, `$\\text{Fe}^{2+}$`, `$\\text{Cu}^{2+}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The strongest oxidizing agent is the species most easily REDUCED — the most positive reduction potential, $\\text{Br}_2$ at $+1.07\\;\\text{V}$. $\\text{Cu}^{2+}$ and $\\text{Fe}^{2+}$ sit lower on the ladder, so they are weaker oxidizers. ($\\text{Na}^+$ is the WEAKEST oxidizer; Na METAL is the strongest reducer.)`
          },
          {
            question: `Using the same table, the maximum standard cell potential obtainable from any pair of these couples is:`,
            options: [`$3.78\\;\\text{V}$`, `$6.49\\;\\text{V}$`, `$3.05\\;\\text{V}$`, `$1.51\\;\\text{V}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Pair the most positive couple as cathode with the most negative as anode: $1.07 - (-2.71) = 3.78\\;\\text{V}$. $6.49\\;\\text{V}$ doubles sodium's potential because two Na are oxidized per $\\text{Br}_2$, but potentials never scale with coefficients. The other values are real pairings with smaller gaps: copper with sodium gives $3.05\\;\\text{V}$, bromine with iron $1.51\\;\\text{V}$.`
          },
          {
            question: `In the cell diagram $\\text{Zn}\\;|\\;\\text{Zn}^{2+}\\;||\\;\\text{Cu}^{2+}\\;|\\;\\text{Cu}$, the double vertical line represents:`,
            options: [`The external wire`, `A phase boundary between solid and solution`, `The direction of electron flow`, `The salt bridge`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Double bar = salt bridge separating the half-cells; single bars are phase boundaries. Convention also puts the anode on the left — so electrons flow left to right in the wire.`
          },
          {
            question: `In an electrolytic cell, the cathode is:`,
            options: [`Positive, and the site of reduction`, `Negative, and the site of oxidation`, `Negative, and the site of reduction`, `Positive, and the site of oxidation`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `RED CAT holds in every cell, so the cathode is always where reduction happens; oxidation belongs to the anode. The sign is what flips: the supply's $-$ terminal pushes electrons into the electrolytic cathode, making it negative. "Positive, and the site of reduction" describes a GALVANIC cathode.`
          },
          {
            question: `A battery with EMF $1.5\\;\\text{V}$ reads only $1.3\\;\\text{V}$ across its terminals while powering a device. The missing $0.2\\;\\text{V}$ is best explained by:`,
            options: [`The voltage drop across the battery's internal resistance`, `A violation of Kirchhoff's loop rule`, `The Nernst equation raising $E$ above standard`, `Electrons losing charge as they traverse the circuit`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Under load, $V_{terminal} = \\varepsilon - Ir$: the chemistry still generates $1.5\\;\\text{V}$, but $0.2\\;\\text{V}$ is spent pushing current through the cell's own internals. Charge is conserved and Kirchhoff holds — the loop rule is exactly what this equation expresses.`
          }
        ]
      }
    },
    {
      id: 'echem4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **The master sign table.** AN OX and RED CAT never change; the anode is $(-)$ in galvanic cells and $(+)$ in electrolytic ones.
- **Cell notation.** Anode on the left, cathode on the right; $|$ is a phase boundary and $||$ is the salt bridge.
- **The potential ladder.** Top-left species is the best oxidizer, bottom-right metal the best reducer; max voltage is top minus bottom.
- **Follow the wire.** An external supply means electrolytic; plating happens where electrons enter, at the cathode.

**Common traps**

- **Doubling $E^\\circ$ with coefficients.** Volts are already per coulomb; only $\\Delta G = -nFE$ scales with $n$.
- **The ion as best reducer.** The best reducer is Li metal, not $\\text{Li}^+$; the ion has no electron left to give.
- **Expecting the full EMF under load.** A working battery reads $\\varepsilon - Ir$, less than its EMF, because of internal resistance.
- **Signs before cell type.** Decide galvanic or electrolytic first; only then assign the electrode signs.`
    }
  ]
};
