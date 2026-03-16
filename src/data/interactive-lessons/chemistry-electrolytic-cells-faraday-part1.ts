export const chemElectrolyticCellsFaradayPart1Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef1-intro',
      type: 'text' as const,
      content: `
# ⚡ Electrolysis — Driving Non-Spontaneous Reactions

**Part 1 of 7 — Electrolytic Cells and External Voltage**

In a galvanic cell, a spontaneous reaction produces electricity. In an **electrolytic cell**, it is the opposite: we use an external power source to force a **non-spontaneous** reaction to occur. This process is called **electrolysis**.
      `
    },
    {
      id: 'ef1-how-it-works',
      type: 'text' as const,
      content: `
## How Electrolysis Works

### The Key Idea

An external voltage source (battery or power supply) pushes electrons in the **opposite** direction from what they would naturally go, driving a non-spontaneous reaction forward.

### Requirements

1. An **external power source** providing voltage > $|E°_{\\text{cell}}|$
2. An **electrolyte** (molten salt or aqueous solution) to carry current via ions
3. Two **electrodes** (often inert — Pt or graphite)

### Electrode Conventions in Electrolytic Cells

| Property | Galvanic Cell | Electrolytic Cell |
|----------|:------------:|:-----------------:|
| Anode | Oxidation ✓ | Oxidation ✓ |
| Cathode | Reduction ✓ | Reduction ✓ |
| Anode sign | − (negative) | + (positive) |
| Cathode sign | + (positive) | − (negative) |
| Spontaneous? | Yes | No |

**AN OX and RED CAT still apply!** Oxidation is always at the anode, reduction at the cathode — regardless of cell type.
      `
    },
    {
      id: 'ef1-energy',
      type: 'text' as const,
      content: `
## Energy Considerations

### For Electrolysis

$$\\Delta G > 0 \\quad \\text{(non-spontaneous)}$$
$$E_{\\text{cell}} < 0 \\quad \\text{(negative cell potential)}$$

The external power source must supply at least $|E_{\\text{cell}}|$ volts to drive the reaction.

### In Practice: Overpotential

The actual voltage required is usually **higher** than the theoretical minimum due to **overpotential** — extra voltage needed to overcome kinetic barriers at the electrode surfaces.

$$V_{\\text{applied}} = |E_{\\text{cell}}| + \\text{overpotential}$$

### Example: Electrolysis of Water

$$2\\text{H}_2\\text{O}(l) \\rightarrow 2\\text{H}_2(g) + \\text{O}_2(g)$$

- $E° = -1.23$ V (non-spontaneous)
- Minimum applied voltage: 1.23 V
- Typical actual voltage: ~1.8 - 2.0 V (due to overpotential)
      `
    },
    {
      id: 'ef1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Electrolysis Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an electrolytic cell, the external power source:',
            options: [
              'Is not needed — the reaction is spontaneous',
              'Pushes electrons from cathode to anode',
              'Forces electrons from anode to cathode against natural flow',
              'Only heats the solution'
            ],
            correctAnswer: 2,
            explanation: 'The power source forces a non-spontaneous reaction by pushing electrons in the direction they would not naturally flow. It drives the reaction "uphill" energetically.'
          },
          {
            question: 'In an electrolytic cell, the anode is:',
            options: [
              'Negative (like in a galvanic cell)',
              'Positive (connected to the + terminal of the power source)',
              'Neutral',
              'Not present'
            ],
            correctAnswer: 1,
            explanation: 'In an electrolytic cell, the anode is connected to the positive terminal of the power source, making it positive. This is OPPOSITE to a galvanic cell where the anode is negative.'
          },
          {
            question: 'Electrolysis is used for:',
            options: [
              'Generating electricity from chemical reactions',
              'Driving non-spontaneous chemical reactions using electricity',
              'Measuring equilibrium constants',
              'Calculating enthalpy changes'
            ],
            correctAnswer: 1,
            explanation: 'Electrolysis uses electrical energy to drive reactions that would not occur spontaneously. This is the reverse of a galvanic cell.'
          }
        ]
      }
    },
    {
      id: 'ef1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Electrolytic Cell Basics** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In BOTH galvanic and electrolytic cells, oxidation occurs at the',
            options: ['cathode', 'anode', 'salt bridge', 'external wire']
          },
          {
            label: 'In an electrolytic cell, ΔG is',
            options: ['negative', 'zero', 'positive', 'undefined']
          },
          {
            label: 'The minimum voltage needed for electrolysis equals',
            options: ['E°_cell (which is positive)', '|E°_cell| (the absolute value of the negative E°)', 'zero', 'any voltage works']
          },
          {
            label: 'Overpotential is',
            options: ['the extra voltage needed beyond the thermodynamic minimum', 'the voltage of the galvanic cell', 'always zero', 'the voltage of the salt bridge']
          }
        ],
        correctAnswers: ['anode', 'positive', '|E°_cell| (the absolute value of the negative E°)', 'the extra voltage needed beyond the thermodynamic minimum'],
        hint1: 'AN OX applies to all electrochemical cells.',
        hint2: 'Non-spontaneous reaction = ΔG > 0.',
        hint3: 'The applied voltage must overcome the unfavorable cell potential.',
        explanation: 'Oxidation at the anode always (AN OX). ΔG > 0 for electrolysis (non-spontaneous). Minimum voltage = |E°|. Overpotential = extra kinetic barrier voltage needed in practice.'
      }
    },
    {
      id: 'ef1-input-practice',
      type: 'input-boxes' as const,
      content: `
**Electrolysis Energy** 🧮

1) The electrolysis of water has $E° = -1.23$ V. What minimum voltage must be applied? (in V, positive value)

2) If the overpotential is 0.5 V, what is the actual applied voltage needed? (in V)

3) Is the ΔG for electrolysis positive or negative? (type "positive" or "negative")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.23', '1.73', 'positive'],
        hint1: 'Take the absolute value of E°.',
        hint2: '$V_{\\text{applied}} = |E°| + \\text{overpotential}$',
        hint3: 'Electrolysis is non-spontaneous.',
        explanation: '1) Minimum voltage = |−1.23| = 1.23 V. 2) 1.23 + 0.50 = 1.73 V. 3) ΔG > 0 (positive) because the reaction is non-spontaneous.'
      }
    },
    {
      id: 'ef1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Electrolysis Basics** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The anode sign is different in galvanic vs electrolytic cells because:',
            options: [
              'Oxidation and reduction switch between the two cell types',
              'The external power source reverses the electrode polarity',
              'The anode sign is always the same in both cells',
              'Different metals are used'
            ],
            correctAnswer: 1,
            explanation: 'In a galvanic cell, the anode naturally produces electrons (−). In an electrolytic cell, the power source connects the + terminal to the anode, making it +. The chemistry (oxidation at anode) is the same; only the polarity labeling changes.'
          },
          {
            question: 'Which is a real-world example of electrolysis?',
            options: [
              'A car battery producing electricity',
              'Splitting water into H₂ and O₂ using a power supply',
              'A lemon battery lighting an LED',
              'A fuel cell generating power'
            ],
            correctAnswer: 1,
            explanation: 'Splitting water ($2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$) is a non-spontaneous process that requires an external power supply — a classic example of electrolysis.'
          }
        ]
      }
    }
  ]
}
