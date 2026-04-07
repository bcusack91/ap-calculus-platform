export const chemEnthalpyCalorimetryPart1Data = {
  topicSlug: 'enthalpy-calorimetry',
  sections: [
    {
      id: 'eh1-intro',
      type: 'text' as const,
      content: `
# 🔥 Energy, Systems, and Surroundings

**Part 1 of 7 — Foundations of Thermochemistry**

Every chemical reaction involves energy changes. Thermochemistry is the branch of chemistry that studies the heat absorbed or released during chemical reactions and physical changes. Before we can calculate enthalpy, we need to understand the language of energy flow.
      `
    },
    {
      id: 'eh1-system-surroundings',
      type: 'text' as const,
      content: `
## System and Surroundings

In thermochemistry, we divide the universe into two parts:

| Term | Definition | Example |
|------|-----------|---------|
| **System** | The part we are studying | The reacting chemicals in a beaker |
| **Surroundings** | Everything else | The beaker, the water, the air, the lab |
| **Universe** | System + Surroundings | Everything |

### Energy Transfer

Energy flows between the system and surroundings. The **First Law of Thermodynamics** states:

$$\\Delta E_{\\text{universe}} = \\Delta E_{\\text{system}} + \\Delta E_{\\text{surroundings}} = 0$$

Energy is **conserved** — it is neither created nor destroyed, only transferred.

### Sign Conventions

| Direction of Energy Flow | $q_{\\text{system}}$ | Temperature of Surroundings |
|--------------------------|---------------------|----------------------------|
| Energy flows **into** system | Positive (+) | Decreases |
| Energy flows **out of** system | Negative (−) | Increases |
      `
    },
    {
      id: 'eh1-endo-exo',
      type: 'text' as const,
      content: `
## Endothermic vs. Exothermic Processes

### Exothermic ($q < 0$)

The system **releases** heat to the surroundings.

- The surroundings get **warmer**
- $\\Delta H < 0$ (negative)
- Products have **lower** energy than reactants
- Energy is a **product** of the reaction

**Examples:** combustion, neutralization, condensation, freezing

$$\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l) \\quad \\Delta H = -890 \\text{ kJ}$$

### Endothermic ($q > 0$)

The system **absorbs** heat from the surroundings.

- The surroundings get **cooler**
- $\\Delta H > 0$ (positive)
- Products have **higher** energy than reactants
- Energy is a **reactant**

**Examples:** photosynthesis, melting ice, evaporation, dissolving $\\text{NH}_4\\text{NO}_3$

$$\\text{6CO}_2(g) + 6\\text{H}_2\\text{O}(l) \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6(s) + 6\\text{O}_2(g) \\quad \\Delta H = +2803 \\text{ kJ}$$
      `
    },
    {
      id: 'eh1-energy-diagrams',
      type: 'text' as const,
      content: `
## Energy Diagrams

Energy diagrams visually show the energy change during a reaction.

### Exothermic Diagram

- Reactants are at a **higher** energy level
- Products are at a **lower** energy level
- $\\Delta H$ arrow points **downward** (negative)
- The difference = energy released to surroundings

### Endothermic Diagram

- Reactants are at a **lower** energy level
- Products are at a **higher** energy level
- $\\Delta H$ arrow points **upward** (positive)
- The difference = energy absorbed from surroundings

### Key Relationship

$$\\Delta H_{\\text{forward}} = -\\Delta H_{\\text{reverse}}$$

If a reaction is exothermic in the forward direction, it is endothermic in reverse, and vice versa.
      `
    },
    {
      id: 'eh1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Energy Fundamentals Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When an exothermic reaction occurs in a beaker, the temperature of the water surrounding the reaction:',
            options: [
              'Decreases',
              'Increases',
              'Stays the same',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'In an exothermic reaction, the system releases heat to the surroundings. The surrounding water absorbs this heat, so its temperature increases.'
          },
          {
            question: 'For the reaction N₂(g) + O₂(g) → 2NO(g) with ΔH = +181 kJ, energy is:',
            options: [
              'Released; this is exothermic',
              'Absorbed; this is exothermic',
              'Released; this is endothermic',
              'Absorbed; this is endothermic'
            ],
            correctAnswer: 3,
            explanation: 'A positive ΔH means the system absorbs energy from the surroundings. Absorbing energy = endothermic process.'
          },
          {
            question: 'According to the First Law of Thermodynamics:',
            options: [
              'Energy always flows from cold to hot',
              'Energy can be created in exothermic reactions',
              'The total energy of the universe is constant',
              'Heat always equals work'
            ],
            correctAnswer: 2,
            explanation: 'The First Law states that energy is conserved. It cannot be created or destroyed, only transferred between system and surroundings.'
          }
        ]
      }
    },
    {
      id: 'eh1-classify-drill',
      type: 'input-boxes' as const,
      content: `
**Classify the Process** 🧮

Type "exothermic" or "endothermic" for each process:

**1)** Water freezing into ice

**2)** Dissolving ammonium nitrate in water (the solution feels cold)

**3)** Burning natural gas on a stove
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['exothermic', 'endothermic', 'exothermic'],
        hint1: 'Freezing releases heat to the surroundings (you must remove heat to freeze water).',
        hint2: 'If the solution feels cold, heat flowed from your hand INTO the solution — the dissolving process absorbed heat.',
        hint3: 'Burning (combustion) releases large amounts of heat.',
        explanation: '1) Freezing is exothermic — the water releases heat as intermolecular bonds form. 2) NH₄NO₃ dissolving is endothermic — it absorbs heat from surroundings, making them feel cold. 3) Combustion is always exothermic — burning methane releases heat energy.'
      }
    },
    {
      id: 'eh1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**System and Energy Flow** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In an exothermic reaction, the sign of q for the system is',
            options: ['positive', 'negative', 'zero', 'undefined']
          },
          {
            label: 'When ice melts, the process is',
            options: ['exothermic', 'endothermic', 'isothermal and exothermic', 'neither']
          },
          {
            label: 'If ΔH for a forward reaction is −200 kJ, then ΔH for the reverse reaction is',
            options: ['-200 kJ', '+200 kJ', '0 kJ', '-400 kJ']
          },
          {
            label: 'The surroundings cool down when the reaction is',
            options: ['exothermic', 'endothermic', 'at equilibrium', 'nonspontaneous']
          }
        ],
        correctAnswers: ['negative', 'endothermic', '+200 kJ', 'endothermic'],
        hint1: 'Exothermic = system loses heat, so q is negative for the system.',
        hint2: 'Melting requires heat input to break intermolecular forces.',
        hint3: '$\\Delta H_{\\text{forward}} = -\\Delta H_{\\text{reverse}}$.',
        explanation: 'Exothermic: q < 0 for the system. Melting is endothermic (absorbs heat). Reverse ΔH has opposite sign. In endothermic reactions, the system takes heat from surroundings, cooling them.'
      }
    },
    {
      id: 'eh1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Energy Fundamentals** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A chemical cold pack contains ammonium nitrate and water. When activated, the pack feels cold because:',
            options: [
              'The dissolving process is exothermic',
              'The dissolving process is endothermic — it absorbs heat from your hand',
              'The cold pack creates cold energy',
              'The reaction destroys heat energy'
            ],
            correctAnswer: 1,
            explanation: 'NH₄NO₃ dissolving in water is endothermic. The system absorbs heat from your hand (the surroundings), making your hand feel cold. Energy is not created or destroyed — it flows from surroundings to system.'
          },
          {
            question: 'If ΔH = −484 kJ for the reaction 2H₂(g) + O₂(g) → 2H₂O(l), what is ΔH for 2H₂O(l) → 2H₂(g) + O₂(g)?',
            options: [
              '−484 kJ',
              '+484 kJ',
              '−968 kJ',
              '+242 kJ'
            ],
            correctAnswer: 1,
            explanation: 'Reversing a reaction changes the sign of ΔH. If the forward reaction releases 484 kJ, the reverse reaction absorbs 484 kJ. $\\Delta H_{\\text{reverse}} = +484$ kJ.'
          }
        ]
      }
    }
  ]
}
