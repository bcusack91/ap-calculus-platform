export const chemElectrolyticCellsFaradayPart2Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef2-intro',
      type: 'text' as const,
      content: `
# 🔄 Galvanic vs. Electrolytic Cells

**Part 2 of 7 — A Detailed Comparison**

Understanding the similarities and differences between galvanic and electrolytic cells is one of the most frequently tested concepts on the AP Chemistry exam. Let\'s compare them side by side.
      `
    },
    {
      id: 'ef2-comparison-table',
      type: 'text' as const,
      content: `
## Complete Comparison

| Feature | Galvanic Cell | Electrolytic Cell |
|---------|:------------:|:-----------------:|
| **Spontaneous?** | Yes ($\\Delta G < 0$) | No ($\\Delta G > 0$) |
| **$E_{\\text{cell}}$** | Positive | Negative |
| **Energy conversion** | Chemical → Electrical | Electrical → Chemical |
| **External power?** | No (produces power) | Yes (requires power) |
| **Anode** | Oxidation (−) | Oxidation (+) |
| **Cathode** | Reduction (+) | Reduction (−) |
| **Electron flow** | Anode → Cathode | Anode → Cathode |
| **Salt bridge** | Usually present | Often not needed |
| **Example** | Battery, fuel cell | Electroplating, electrolysis |

### What STAYS THE SAME

- **Oxidation at the anode** (AN OX)
- **Reduction at the cathode** (RED CAT)
- **Electrons flow from anode to cathode**
- **Cations migrate toward cathode, anions toward anode**

### What CHANGES

- **Sign of anode/cathode** (reversed!)
- **Direction of energy flow** (chemical ↔ electrical)
- **Spontaneity** (spontaneous vs. forced)
      `
    },
    {
      id: 'ef2-charging-battery',
      type: 'text' as const,
      content: `
## Recharging: Galvanic → Electrolytic

When you recharge a battery, you convert it from a galvanic cell to an electrolytic cell:

### Discharging (Galvanic Mode)

$$\\text{Pb}(s) + \\text{PbO}_2(s) + 2\\text{H}_2\\text{SO}_4(aq) \\rightarrow 2\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l)$$

- Spontaneous: $E > 0$
- Produces electrical energy

### Charging (Electrolytic Mode)

$$2\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l) \\rightarrow \\text{Pb}(s) + \\text{PbO}_2(s) + 2\\text{H}_2\\text{SO}_4(aq)$$

- Non-spontaneous: $E < 0$
- Consumes electrical energy (from the charger)
- The reaction is driven in reverse

### Key Point

The **anode and cathode swap** when switching between galvanic and electrolytic modes! The electrode that was the anode during discharge becomes the cathode during charging.
      `
    },
    {
      id: 'ef2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Galvanic vs. Electrolytic Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement is true for BOTH galvanic and electrolytic cells?',
            options: [
              'The anode is positive',
              'The cell produces electrical energy',
              'Oxidation occurs at the anode',
              'The reaction is spontaneous'
            ],
            correctAnswer: 2,
            explanation: 'Oxidation at the anode (AN OX) is true for ALL electrochemical cells. The sign, spontaneity, and energy direction differ between the two types.'
          },
          {
            question: 'In an electrolytic cell, the cathode is connected to:',
            options: [
              'The positive terminal of the power source',
              'The negative terminal of the power source',
              'Nothing — it is free-floating',
              'The salt bridge'
            ],
            correctAnswer: 1,
            explanation: 'In an electrolytic cell, the cathode is connected to the negative (−) terminal of the power source. This supplies electrons to the cathode for reduction.'
          },
          {
            question: 'When a rechargeable battery is being charged:',
            options: [
              'It operates as a galvanic cell',
              'It operates as an electrolytic cell',
              'No electrochemistry occurs',
              'The salt bridge is removed'
            ],
            correctAnswer: 1,
            explanation: 'Charging forces the non-spontaneous reverse reaction to occur — this is electrolysis. The charger provides the external voltage needed.'
          }
        ]
      }
    },
    {
      id: 'ef2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Cell Comparison** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a galvanic cell, the anode is the',
            options: ['positive terminal', 'negative terminal', 'neutral', 'not present']
          },
          {
            label: 'In an electrolytic cell, the anode is the',
            options: ['positive terminal', 'negative terminal', 'neutral', 'not present']
          },
          {
            label: 'In BOTH cell types, electrons flow from',
            options: ['cathode to anode', 'anode to cathode', 'power source to cell', 'cell to power source']
          },
          {
            label: 'A galvanic cell converts',
            options: ['electrical → chemical energy', 'chemical → electrical energy', 'heat → light energy', 'nuclear → chemical energy']
          },
          {
            label: 'An electrolytic cell converts',
            options: ['electrical → chemical energy', 'chemical → electrical energy', 'heat → light energy', 'nuclear → chemical energy']
          }
        ],
        correctAnswers: ['negative terminal', 'positive terminal', 'anode to cathode', 'chemical → electrical energy', 'electrical → chemical energy'],
        hint1: 'Galvanic anode produces electrons → negative.',
        hint2: 'Electrolytic anode connected to + terminal of power source.',
        hint3: 'Electrons always flow from where they are produced (anode) to where they are consumed (cathode).',
        explanation: 'Galvanic: anode (−), cathode (+). Electrolytic: anode (+), cathode (−). Electrons always: anode → cathode. Galvanic: chem → elec. Electrolytic: elec → chem.'
      }
    },
    {
      id: 'ef2-input-practice',
      type: 'input-boxes' as const,
      content: `
**Quick Comparison** 🧮

Answer with "galvanic" or "electrolytic":

1) ΔG < 0 and E > 0 describes a _____ cell.

2) Requires an external power source: _____ cell.

3) The anode is positive in a _____ cell.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['galvanic', 'electrolytic', 'electrolytic'],
        hint1: 'Spontaneous reaction: ΔG < 0.',
        hint2: 'Non-spontaneous reactions need energy input.',
        hint3: 'Connected to the + terminal of the battery.',
        explanation: '1) Galvanic — spontaneous, ΔG < 0, E > 0. 2) Electrolytic — non-spontaneous, needs external voltage. 3) Electrolytic — anode connected to + terminal.'
      }
    },
    {
      id: 'ef2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Galvanic vs. Electrolytic** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student says: "In electrolytic cells, reduction occurs at the anode." Is this correct?',
            options: [
              'Yes — electrolytic cells reverse the electrode assignments',
              'No — reduction ALWAYS occurs at the cathode in all cells',
              'Yes — but only for molten salt electrolysis',
              'No — neither oxidation nor reduction occurs in electrolytic cells'
            ],
            correctAnswer: 1,
            explanation: 'Reduction at the cathode (RED CAT) is a universal rule. It applies to galvanic cells, electrolytic cells, and all other electrochemical cells. Only the sign of the electrodes changes.'
          },
          {
            question: 'During discharge of a lead-acid battery (galvanic), Pb is the anode. During charging (electrolytic), Pb is the:',
            options: [
              'Still the anode',
              'The cathode',
              'Neither — it is inert during charging',
              'The salt bridge'
            ],
            correctAnswer: 1,
            explanation: 'During charging, the reaction reverses: PbSO₄ is reduced back to Pb. Since reduction occurs at the cathode, the Pb electrode becomes the cathode during charging.'
          }
        ]
      }
    }
  ]
}
