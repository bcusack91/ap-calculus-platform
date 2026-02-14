export const chemOxidationReductionReactionsPart7Data = {
  topicSlug: 'oxidation-reduction-reactions',
  sections: [
    {
      id: 'or7-intro',
      type: 'text' as const,
      content: `
# ⚡ Synthesis & AP Review

**Part 7 of 7 — Connecting Redox to Electrochemistry and AP-Style Problems**

Redox reactions are the foundation of **electrochemistry** — the study of how chemical energy and electrical energy interconvert. This final lesson connects the redox concepts you\'ve learned to galvanic cells, electrolysis, and the types of problems you\'ll see on the AP exam.
      `
    },
    {
      id: 'or7-electrochemistry-connection',
      type: 'text' as const,
      content: `
## Redox ↔ Electrochemistry Connection

### Galvanic (Voltaic) Cells

A galvanic cell converts **chemical energy → electrical energy** using a spontaneous redox reaction.

| Component | Role |
|-----------|------|
| **Anode** | Where **oxidation** occurs (negative terminal) |
| **Cathode** | Where **reduction** occurs (positive terminal) |
| **Salt bridge** | Allows ion flow to maintain charge balance |
| **Wire** | Carries electrons from anode to cathode |

### Memory Aid

**AN OX** and a **RED CAT**:
- **An**ode = **Ox**idation
- **Red**uction = **Cat**hode

### Cell Notation

$$\\text{Anode} | \\text{Anode ion} || \\text{Cathode ion} | \\text{Cathode}$$

Example: $\\text{Zn}(s) | \\text{Zn}^{2+}(aq) || \\text{Cu}^{2+}(aq) | \\text{Cu}(s)$

This represents: Zn is oxidized at the anode, Cu²⁺ is reduced at the cathode.
      `
    },
    {
      id: 'or7-cell-potential',
      type: 'text' as const,
      content: `
## Standard Cell Potential

### Calculating $E^\\circ_{\\text{cell}}$

$$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$$

### Key Standard Reduction Potentials

| Half-Reaction | $E^\\circ$ (V) |
|--------------|---------------|
| $\\text{F}_2 + 2e^- \\rightarrow 2\\text{F}^-$ | +2.87 |
| $\\text{Au}^{3+} + 3e^- \\rightarrow \\text{Au}$ | +1.50 |
| $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$ | +0.80 |
| $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ | +0.34 |
| $2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2$ | 0.00 |
| $\\text{Ni}^{2+} + 2e^- \\rightarrow \\text{Ni}$ | −0.26 |
| $\\text{Fe}^{2+} + 2e^- \\rightarrow \\text{Fe}$ | −0.45 |
| $\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}$ | −0.76 |
| $\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$ | −1.66 |
| $\\text{Li}^+ + e^- \\rightarrow \\text{Li}$ | −3.04 |

### Spontaneity

- $E^\\circ_{\\text{cell}} > 0$ → **spontaneous** (galvanic cell)
- $E^\\circ_{\\text{cell}} < 0$ → **non-spontaneous** (requires electrolysis)

### Relationship to Free Energy

$$\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}$$

Where $n$ = moles of electrons transferred, $F$ = Faraday\'s constant (96,485 C/mol).
      `
    },
    {
      id: 'or7-ap-quiz-1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Redox Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a galvanic cell made from Zn/Zn²⁺ and Cu/Cu²⁺ half-cells, the zinc electrode is the:',
            options: [
              'Cathode (reduction occurs)',
              'Anode (oxidation occurs)',
              'Salt bridge',
              'It depends on concentration'
            ],
            correctAnswer: 1,
            explanation: 'Zn is more active than Cu (more negative E°). Zn is oxidized (Zn → Zn²⁺ + 2e⁻) at the anode. Cu²⁺ is reduced (Cu²⁺ + 2e⁻ → Cu) at the cathode.'
          },
          {
            question: 'Calculate $E^\\circ_{\\text{cell}}$ for a galvanic cell: Zn | Zn²⁺ || Cu²⁺ | Cu. Given: $E^\\circ_{\\text{Cu}} = +0.34$ V, $E^\\circ_{\\text{Zn}} = -0.76$ V.',
            options: [
              '+0.42 V',
              '+1.10 V',
              '−0.42 V',
              '−1.10 V'
            ],
            correctAnswer: 1,
            explanation: '$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = (+0.34) - (-0.76) = +1.10$ V. Positive value confirms the reaction is spontaneous.'
          },
          {
            question: 'Which statement about a galvanic cell is correct?',
            options: [
              'Electrons flow from cathode to anode through the wire',
              'Cations in the salt bridge migrate toward the cathode',
              'The anode gains mass during operation',
              'Electrons flow from anode to cathode through the wire'
            ],
            correctAnswer: 3,
            explanation: 'In a galvanic cell, electrons flow from the anode (where oxidation releases them) through the external wire to the cathode (where reduction uses them). The anode loses mass as it dissolves.'
          },
          {
            question: 'A student is told that $\\Delta G^\\circ$ for a reaction is negative. This means the reaction is:',
            options: [
              'Non-spontaneous',
              'At equilibrium',
              'Spontaneous under standard conditions',
              'Impossible'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta G^\\circ < 0$ means the reaction is spontaneous under standard conditions. Since $\\Delta G^\\circ = -nFE^\\circ$, a negative $\\Delta G^\\circ$ corresponds to a positive $E^\\circ_{\\text{cell}}$.'
          }
        ]
      }
    },
    {
      id: 'or7-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Cell Potential Calculations** 🧮

Use the reduction potentials: Ag⁺/Ag = +0.80 V, Fe²⁺/Fe = −0.45 V, Cu²⁺/Cu = +0.34 V

1) Calculate $E^\\circ_{\\text{cell}}$ for Fe | Fe²⁺ || Ag⁺ | Ag (in V, to 2 decimal places)

2) Calculate $E^\\circ_{\\text{cell}}$ for Fe | Fe²⁺ || Cu²⁺ | Cu (in V, to 2 decimal places)

3) Is the cell Cu | Cu²⁺ || Fe²⁺ | Fe spontaneous? Type **yes** or **no**.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.25', '0.79', 'no'],
        hint1: '$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0.80 - (-0.45)$',
        hint2: '$E^\\circ_{\\text{cell}} = 0.34 - (-0.45)$',
        hint3: 'Cu is the anode, Fe is the cathode. $E^\\circ = (-0.45) - (0.34) = ?$ Is it positive?',
        explanation: '1) $E^\\circ = 0.80 - (-0.45) = 1.25$ V. 2) $E^\\circ = 0.34 - (-0.45) = 0.79$ V. 3) $E^\\circ = (-0.45) - (0.34) = -0.79$ V. Negative = non-spontaneous → no.'
      }
    },
    {
      id: 'or7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**AP Redox Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Oxidation occurs at the',
            options: ['cathode', 'anode', 'salt bridge', 'wire']
          },
          {
            label: 'A positive $E^\\circ_{\\text{cell}}$ means the reaction is',
            options: ['non-spontaneous', 'at equilibrium', 'spontaneous', 'impossible']
          },
          {
            label: 'In the mnemonic AN OX RED CAT, the anode is where',
            options: ['reduction occurs', 'oxidation occurs', 'nothing happens', 'ions migrate']
          },
          {
            label: 'The salt bridge in a galvanic cell serves to',
            options: ['carry electrons', 'maintain electrical neutrality', 'store energy', 'prevent the reaction']
          }
        ],
        correctAnswers: ['anode', 'spontaneous', 'oxidation occurs', 'maintain electrical neutrality'],
        hint1: 'AN OX — Anode = Oxidation.',
        hint2: '$E^\\circ > 0$ means $\\Delta G^\\circ < 0$.',
        hint3: 'AN OX = Anode + Oxidation.',
        explanation: 'Oxidation at the anode, reduction at the cathode. $E^\\circ > 0$ → spontaneous. AN OX: anode = oxidation. The salt bridge allows ion flow to maintain charge balance in each half-cell.'
      }
    },
    {
      id: 'or7-ap-quiz-2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 2** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'Balance in acidic solution: MnO₄⁻ + Sn²⁺ → Mn²⁺ + Sn⁴⁺. What is the coefficient of Sn²⁺ in the balanced equation?',
            options: [
              '2',
              '3',
              '4',
              '5'
            ],
            correctAnswer: 3,
            explanation: 'Reduction: MnO₄⁻ → Mn²⁺ gains 5e⁻ (Mn: +7 → +2). Oxidation: Sn²⁺ → Sn⁴⁺ loses 2e⁻. LCM(5,2) = 10. Multiply reduction by 2: 2MnO₄⁻. Multiply oxidation by 5: 5Sn²⁺. Balanced: 2MnO₄⁻ + 5Sn²⁺ + 16H⁺ → 2Mn²⁺ + 5Sn⁴⁺ + 8H₂O. Coefficient of Sn²⁺ = 5.'
          },
          {
            question: 'A strip of copper is placed in a solution of AgNO₃. Which statement is true?',
            options: [
              'No reaction occurs because copper is less active than silver',
              'Silver crystals form on the copper strip and the solution turns blue',
              'Copper crystals form and the solution turns colorless',
              'Both metals dissolve into solution'
            ],
            correctAnswer: 1,
            explanation: 'Cu is above Ag in the activity series. Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s). Silver deposits on the copper strip (shiny crystals), and Cu²⁺ ions make the solution turn blue.'
          }
        ]
      }
    },
    {
      id: 'or7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Redox Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction: 2Al(s) + 3Cu²⁺(aq) → 2Al³⁺(aq) + 3Cu(s), how many total electrons are transferred?',
            options: [
              '2',
              '3',
              '6',
              '9'
            ],
            correctAnswer: 2,
            explanation: 'Each Al loses 3e⁻ × 2 Al = 6e⁻ total lost. Each Cu²⁺ gains 2e⁻ × 3 Cu²⁺ = 6e⁻ total gained. Six electrons are transferred in the balanced equation.'
          },
          {
            question: 'Which of the following best explains why redox reactions are fundamental to electrochemistry?',
            options: [
              'Redox reactions always produce gases',
              'Electron transfer in redox can be harnessed as electrical current',
              'Redox reactions only occur in batteries',
              'Electrochemistry does not involve redox'
            ],
            correctAnswer: 1,
            explanation: 'Redox reactions involve electron transfer. By separating the oxidation and reduction half-reactions into different compartments (half-cells), the electron flow through a wire generates electrical current. This is the basis of all batteries and fuel cells.'
          }
        ]
      }
    }
  ]
}
