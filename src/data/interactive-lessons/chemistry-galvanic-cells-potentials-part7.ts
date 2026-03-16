export const chemGalvanicCellsPotentialsPart7Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review — Galvanic Cells

**Part 7 of 7 — Mastery Check**

This final review covers everything about galvanic cells: redox fundamentals, cell structure, standard potentials, cell notation, and the thermodynamic connections. Be ready for any AP question on this topic.
      `
    },
    {
      id: 'gc7-master-summary',
      type: 'text' as const,
      content: `
## Master Summary

### Essential Equations

| Equation | Purpose |
|----------|---------|
| $E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}}$ | Calculate cell voltage |
| $\\Delta G° = -nFE°$ | Connect free energy to voltage |
| $E° = \\frac{0.0592}{n}\\log K$ | Connect voltage to equilibrium (at 25°C) |

### Cell Components

| Component | Role | Memory Aid |
|-----------|------|-----------|
| Anode | Oxidation | AN OX (left in notation) |
| Cathode | Reduction | RED CAT (right in notation) |
| Salt bridge | Maintains neutrality | Ions flow, not electrons |
| Wire | Carries electrons | Anode → Cathode |

### Spontaneity Criteria

| Quantity | Spontaneous | Equilibrium | Nonspontaneous |
|----------|------------|-------------|----------------|
| $E°_{\\text{cell}}$ | $> 0$ | $= 0$ | $< 0$ |
| $\\Delta G°$ | $< 0$ | $= 0$ | $> 0$ |
| $K$ | $> 1$ | $= 1$ | $< 1$ |
      `
    },
    {
      id: 'gc7-comprehensive-quiz',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive AP Review** 🎯

Use: Zn²⁺/Zn = −0.76 V, Cu²⁺/Cu = +0.34 V, Ag⁺/Ag = +0.80 V, Fe²⁺/Fe = −0.44 V
      `,
      exercise: {
        questions: [
          {
            question: 'Can Cu²⁺ spontaneously oxidize Fe? Calculate E°_cell to verify.',
            options: [
              'No — E° = −0.10 V',
              'Yes — E° = +0.78 V',
              'No — E° = −0.78 V',
              'Yes — E° = +0.10 V'
            ],
            correctAnswer: 1,
            explanation: 'Cu²⁺ is reduced (cathode, +0.34 V), Fe is oxidized (anode, −0.44 V). $E° = 0.34 - (-0.44) = +0.78$ V. Positive → spontaneous. Yes, Cu²⁺ can oxidize Fe.'
          },
          {
            question: 'For the Zn-Cu cell (E° = 1.10 V, n = 2), ΔG° is approximately:',
            options: [
              '−212 kJ',
              '+212 kJ',
              '−106 kJ',
              '+106 kJ'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta G° = -nFE° = -(2)(96{,}485)(1.10) = -212{,}267$ J $\\approx -212$ kJ.'
          },
          {
            question: 'In the cell notation Pt | H₂(g) | H⁺(aq) || Cu²⁺(aq) | Cu(s), the Pt electrode is:',
            options: [
              'The cathode where Cu²⁺ is reduced',
              'The anode — an inert electrode for the hydrogen half-reaction',
              'The salt bridge',
              'Not needed'
            ],
            correctAnswer: 1,
            explanation: 'Pt is on the left (anode). It provides an inert surface for the oxidation of H₂: $\\text{H}_2 \\rightarrow 2\\text{H}^+ + 2e^-$.'
          }
        ]
      }
    },
    {
      id: 'gc7-integration-drill',
      type: 'input-boxes' as const,
      content: `
**Integration Problems** 🧮

1) A cell has $E° = +2.00$ V and $n = 3$. What is $\\Delta G°$ in kJ? (to nearest whole number)

2) A cell has $\\Delta G° = -386$ kJ and $n = 4$. What is $E°$ in V? (to 3 significant figures)

3) If $E° = +0.50$ V and $n = 2$ at 298 K, is $K$ greater or less than 1? (type "greater" or "less")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-579', '1.00', 'greater'],
        hint1: '$\\Delta G° = -(3)(96485)(2.00)$',
        hint2: '$E° = 386000/((4)(96485))$',
        hint3: 'Positive $E°$ → spontaneous → products favored.',
        explanation: '1) $\\Delta G° = -(3)(96485)(2.00) = -578{,}910$ J $\\approx -579$ kJ. 2) $E° = 386{,}000/385{,}940 \\approx 1.00$ V. 3) $E° > 0$ → $K > 1$.'
      }
    },
    {
      id: 'gc7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The strongest reducing agent in a table has the',
            options: ['most positive E°', 'most negative E°', 'E° = 0', 'highest atomic number']
          },
          {
            label: 'Electrons flow from',
            options: ['cathode to anode', 'anode to cathode', 'salt bridge to wire', 'solution to electrode']
          },
          {
            label: 'In galvanic cell notation, the cathode is on the',
            options: ['left', 'right', 'top', 'bottom']
          },
          {
            label: 'F = 96,485 C/mol represents the charge of',
            options: ['one electron', 'one proton', 'one mole of electrons', 'one mole of protons']
          }
        ],
        correctAnswers: ['most negative E°', 'anode to cathode', 'right', 'one mole of electrons'],
        hint1: 'Most negative E° = greatest tendency to lose electrons.',
        hint2: 'Electrons are produced at the anode and consumed at the cathode.',
        hint3: 'Convention: anode | anode ion || cathode ion | cathode.',
        explanation: 'Most negative E° → strongest reducing agent. Electrons: anode → cathode. Cathode on the right in cell notation. F = charge of one mole of electrons.'
      }
    },
    {
      id: 'gc7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Galvanic Cells Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student builds a cell with Zn and Ag electrodes but connects the wire backward (Ag to the terminal where Zn should connect). What happens?',
            options: [
              'The cell works normally — wire direction doesn\'t matter',
              'No current flows — the cell potential opposes the wiring',
              'The cell runs in reverse, plating Zn onto Ag',
              'Current flows from Zn to Ag regardless of wiring, producing +1.56 V'
            ],
            correctAnswer: 3,
            explanation: 'Electrons naturally flow from the more reactive metal (Zn, lower E°) to the less reactive (Ag, higher E°). The thermodynamic driving force determines the direction of current, not how the wire is connected. The cell produces +1.56 V.'
          },
          {
            question: 'Which statement about galvanic cells is FALSE?',
            options: [
              'The anode is the negative terminal',
              'The salt bridge allows electron flow between half-cells',
              'E° is an intensive property',
              'ΔG° = −nFE°'
            ],
            correctAnswer: 1,
            explanation: 'The salt bridge allows **ion** flow (not electron flow) between half-cells. Electrons flow through the external wire. All other statements are true.'
          }
        ]
      }
    }
  ]
}
