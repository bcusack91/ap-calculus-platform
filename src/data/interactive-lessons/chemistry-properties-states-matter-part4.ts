export const chemPropertiesStatesMatterPart4Data = {
  topicSlug: 'properties-states-matter',
  sections: [
    {
      id: 'sm4-intro',
      type: 'text' as const,
      title: 'Phase Changes — Introduction',
      content: `# 🔥 Phase Changes

**Part 4 of 7 — Melting, Boiling, Sublimation, and Heating Curves**

---

### Topics in This Part

| Section |
|---------|
| The Six Phase Changes |
| Key Relationships |
| Heating Curves |
| The Five Regions |
| Calculating Total Energy for Heating Curves |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'sm4-types-of-phase-changes',
      type: 'text' as const,
      title: 'Types of Phase Changes',
      content: `
## The Six Phase Changes

| Phase Change | From → To | Energy | Name |
|-------------|-----------|--------|------|
| **Melting** (fusion) | Solid → Liquid | Endothermic (absorbed) | $\\Delta H_{\\text{fus}}$ |
| **Freezing** | Liquid → Solid | Exothermic (released) | $-\\Delta H_{\\text{fus}}$ |
| **Vaporization** | Liquid → Gas | Endothermic (absorbed) | $\\Delta H_{\\text{vap}}$ |
| **Condensation** | Gas → Liquid | Exothermic (released) | $-\\Delta H_{\\text{vap}}$ |
| **Sublimation** | Solid → Gas | Endothermic (absorbed) | $\\Delta H_{\\text{sub}}$ |
| **Deposition** | Gas → Solid | Exothermic (released) | $-\\Delta H_{\\text{sub}}$ |

### Key Relationships

Since enthalpy is a state function, sublimation can be thought of as melting + vaporization:

$$\\boxed{\\Delta H_{\\text{sub}} = \\Delta H_{\\text{fus}} + \\Delta H_{\\text{vap}}}$$

---

> ⚠️ **Warning:** $\\Delta H_{\\text{vap}}$ is **always** greater than $\\Delta H_{\\text{fus}}$ for the same substance. Vaporization completely overcomes IMFs; melting only partially disrupts them. Don\'t confuse the two!

For water: $\\Delta H_{\\text{fus}} = 6.01$ kJ/mol vs. $\\Delta H_{\\text{vap}} = 40.7$ kJ/mol
      `
    },
    {
      id: 'sm4-phase-change-q1',
      type: 'multiple-choice' as const,
      title: 'Phase Change Identification',
      content: 'Identify the correct phase change.',
      exercise: {
        questions: [
          {
            question: 'Dry ice $(solid CO_{2})$ converts directly to $CO_{2}$ gas at room temperature. This process is called:',
            options: [
              'Vaporization',
              'Deposition',
              'Sublimation',
              'Melting'
            ],
            correctAnswer: 2,
            explanation: 'The direct conversion of a solid to a gas (bypassing the liquid phase) is sublimation. Dry ice sublimes at −78°C at 1 atm.'
          },
          {
            question: 'Frost forming on a cold window on a winter morning is an example of:',
            options: [
              'Freezing',
              'Condensation',
              'Sublimation',
              'Deposition'
            ],
            correctAnswer: 3,
            explanation: 'Deposition is the direct conversion of gas → solid. Water vapor in the air converts directly to solid ice crystals on the cold surface without first becoming liquid water.'
          },
          {
            question: 'Why is $\\Delta H_{\\text{vap}}$ always greater than $\\Delta H_{\\text{fus}}$ for the same substance?',
            options: [
              'Vaporization involves breaking intramolecular bonds',
              'Melting requires more energy because solids are harder to break apart',
              'Vaporization completely separates particles, requiring more energy to overcome all IMFs',
              'Fusion occurs at a higher temperature than vaporization'
            ],
            correctAnswer: 2,
            explanation: 'During vaporization, particles must be completely separated from the liquid — all remaining IMFs must be overcome. During melting, particles merely transition from fixed positions to sliding past each other, only partially disrupting IMFs.'
          }
        ]
      }
    },
    {
      id: 'sm4-heating-curve',
      type: 'text' as const,
      title: 'Heating Curves',
      content: `
## Heating Curves

A **heating curve** plots **temperature vs. heat added** as a substance is heated from solid to gas at constant pressure. It has five distinct regions:

### The Five Regions

**Region 1: Heating the Solid** (temperature rises)
- $q = m \\times c_{\\text{solid}} \\times \\Delta T$
- Particles vibrate faster; temperature increases

**Region 2: Melting (Plateau)** (temperature constant at $T_{\\text{m}}$)
- $q = n \\times \\Delta H_{\\text{fus}}$ (or $q = m \\times \\Delta H_{\\text{fus, per gram}}$)
- Energy breaks IMFs to convert solid → liquid
- Temperature stays constant — all energy disrupts the lattice

**Region 3: Heating the Liquid** (temperature rises)
- $q = m \\times c_{\\text{liquid}} \\times \\Delta T$
- Particles move faster; temperature increases

**Region 4: Boiling (Plateau)** (temperature constant at $T_{\\text{b}}$)
- $q = n \\times \\Delta H_{\\text{vap}}$
- Energy completely separates particles from the liquid
- Temperature stays constant — all energy overcomes remaining IMFs
- This plateau is **longer** than the melting plateau because $\\Delta H_{\\text{vap}} > \\Delta H_{\\text{fus}}$

**Region 5: Heating the Gas** (temperature rises)
- $q = m \\times c_{\\text{gas}} \\times \\Delta T$
- Gas particles move faster; temperature increases

---

> 🔑 **Key Concept:** **Flat regions** on a heating curve = phase changes (temperature constant, energy overcomes IMFs). **Sloped regions** = single phase (temperature rises, energy increases KE).

> 💡 **Tip:** The boiling plateau is **longer** than the melting plateau because $\\Delta H_{\\text{vap}} > \\Delta H_{\\text{fus}}$. The **slope** of each region depends on the specific heat capacity $c$ of that phase — a smaller $c$ gives a steeper slope.
      `
    },
    {
      id: 'sm4-heating-curve-dropdown',
      type: 'dropdown-select' as const,
      title: 'Heating Curve Analysis',
      content: 'Complete each statement about heating curves.',
      exercise: {
        dropdowns: [
          {
            id: 'sm4-dd1',
            label: 'During a phase change (melting or boiling)',
            options: ['increases', 'decreases', 'remains constant'],
            correctIndex: 2,
            explanation: 'During a phase change (melting or boiling), all added energy goes into overcoming IMFs, not into increasing kinetic energy. Temperature remains constant.'
          },
          {
            id: 'sm4-dd2',
            label: 'The _______ is longer because $\\Delta H_{\\text{vap}} > \\Delta H_{\\text{fus}}$',
            options: ['melting plateau', 'boiling plateau', 'solid heating region'],
            correctIndex: 1,
            explanation: 'The boiling plateau is longer because $\\Delta H_{\\text{vap}} > \\Delta H_{\\text{fus}}$. More energy is required to completely separate particles (vaporization) than to merely disrupt the solid lattice (melting).'
          },
          {
            id: 'sm4-dd3',
            label: 'During a phase change, the added heat energy goes entirely into overcoming (or',
            options: ['kinetic energy of particles', 'intermolecular forces', 'intramolecular bonds'],
            correctIndex: 1,
            explanation: 'During a phase change, the added heat energy goes entirely into overcoming (or forming) intermolecular forces, not into raising kinetic energy (which would increase temperature).'
          }
        ]
      }
    },
    {
      id: 'sm4-heating-calc',
      type: 'text' as const,
      title: 'Heating Curve Calculations',
      content: `
## Calculating Total Energy for Heating Curves

To calculate the total energy required to heat a substance through a phase change, you must add the energy for each region separately.

> **Problem:** Calculate the total energy required to heat 1 mole (18.015 g) of ice at −20°C to steam at 120°C.

Given for water:
- $c_{\\text{ice}} = 2.09$ J/(g·°C)
- $\\Delta H_{\\text{fus}} = 6.01$ kJ/mol = 334 J/g
- $c_{\\text{water}} = 4.18$ J/(g·°C)
- $\\Delta H_{\\text{vap}} = 40.7$ kJ/mol = 2,260 J/g
- $c_{\\text{steam}} = 2.01$ J/(g·°C)

For 1 mole (18.015 g) of water:

> **Solution:**

**Step 1:** Heat ice from −20°C to 0°C: $q_1 = 18.015 \\times 2.09 \\times 20 = 753$ J

**Step 2:** Melt ice at 0°C: $q_2 = 1 \\times 6010 = 6{,}010$ J

**Step 3:** Heat water from 0°C to 100°C: $q_3 = 18.015 \\times 4.18 \\times 100 = 7{,}530$ J

**Step 4:** Boil water at 100°C: $q_4 = 1 \\times 40{,}700 = 40{,}700$ J

**Step 5:** Heat steam from 100°C to 120°C: $q_5 = 18.015 \\times 2.01 \\times 20 = 724$ J

**Total:** $q_{\\text{total}} = 753 + 6{,}010 + 7{,}530 + 40{,}700 + 724 = 55{,}717$ J $\\approx 55.7$ kJ
      `
    },
    {
      id: 'sm4-heating-calc-input',
      type: 'input-boxes' as const,
      title: 'Heating Curve Calculation Practice',
      content: 'Calculate the energy for individual steps. Use: $c_{\\text{ice}} = 2.09$ J/(g·°C), $\\Delta H_{\\text{fus}} = 334$ J/g, $c_{\\text{water}} = 4.18$ J/(g·°C), $\\Delta H_{\\text{vap}} = 2260$ J/g.',
      exercise: {
        inputs: [
          {
            label: 'How much energy (in J) is needed to melt 50.0 g of ice at 0°C? (whole number)',
            correctAnswer: '16700',
            explanation: '$q = m \\times \\Delta H_{\\text{fus}} = 50.0 \\times 334 = 16{,}700$ J. During melting, all energy goes into breaking the solid lattice; temperature stays at 0°C.'
          },
          {
            label: 'How much energy (in J) is needed to heat 50.0 g of liquid water from 0°C to 100°C? (whole number)',
            correctAnswer: '20900',
            explanation: '$q = m \\times c_{\\text{water}} \\times \\Delta T = 50.0 \\times 4.18 \\times 100 = 20{,}900$ J.'
          },
          {
            label: 'How much energy (in J) is needed to vaporize 50.0 g of water at 100°C? (whole number)',
            correctAnswer: '113000',
            explanation: '$q = m \\times \\Delta H_{\\text{vap}} = 50.0 \\times 2260 = 113{,}000$ J. Notice this is much larger than the melting step because $\\Delta H_{\\text{vap}} \\gg \\Delta H_{\\text{fus}}$.'
          }
        ]
      }
    },
    {
      id: 'sm4-cooling-curves',
      type: 'text' as const,
      title: 'Cooling Curves',
      content: `
## Cooling Curves

A **cooling curve** is the reverse of a heating curve — it plots temperature vs. time (or energy removed) as a substance cools.

- The same plateaus appear at the same temperatures (freezing point and condensation point).
- Energy is **released** (exothermic) during phase changes: condensation and freezing.
- The magnitudes of $\\Delta H$ are the same, but the sign is negative (energy released).

---

> ⚠️ **Warning:** **Supercooling** can occur — a liquid cooled below its freezing point without solidifying. When crystallization finally begins, the temperature may briefly **rise** back to the freezing point as the exothermic freezing process releases heat. Don\'t confuse this with a normal heating curve feature!
      `
    },
    {
      id: 'sm4-exit-quiz',
      type: 'multiple-choice' as const,
      title: 'Phase Changes Exit Quiz',
      content: 'Test your overall understanding of phase changes and heating curves.',
      exercise: {
        questions: [
          {
            question: 'During the boiling plateau of a heating curve, what is happening to the added energy?',
            options: [
              'It is increasing the temperature of the liquid',
              'It is increasing the kinetic energy of the gas particles',
              'It is overcoming the remaining IMFs to convert liquid to gas',
              'It is breaking intramolecular covalent bonds'
            ],
            correctAnswer: 2,
            explanation: 'During the boiling plateau, all added energy goes into overcoming the intermolecular forces holding liquid molecules together. Temperature remains constant because KE is not increasing — the energy is used for the phase transition.'
          },
          {
            question: 'For water, which step requires the most energy?',
            options: [
              'Heating ice from −20°C to 0°C',
              'Melting ice at 0°C',
              'Heating water from 0°C to 100°C',
              'Vaporizing water at 100°C'
            ],
            correctAnswer: 3,
            explanation: 'Vaporization requires by far the most energy ($\\Delta H_{\\text{vap}} = 40.7$ kJ/mol) because it completely separates particles. Melting requires only $\\Delta H_{\\text{fus}} = 6.01$ kJ/mol. The heating steps require even less for typical sample sizes.'
          }
        ]
      }
    },
    {
      id: 'sm4-exit-input',
      type: 'input-boxes' as const,
      title: 'Part 4 Exit Check',
      content: 'Complete these statements about phase changes.',
      exercise: {
        inputs: [
          {
            label: 'The direct conversion of a solid to a gas is called _____ (one word)',
            correctAnswer: 'sublimation',
            explanation: 'Sublimation is the phase transition from solid directly to gas, skipping the liquid phase. Example: dry ice $(CO_{2})$ sublimes at −78°C.'
          },
          {
            label: 'During a phase change, the temperature _____ (increases/decreases/remains constant)',
            correctAnswer: 'remains constant',
            explanation: 'During a phase change, all added (or removed) energy goes into overcoming (or forming) intermolecular forces. Kinetic energy does not change, so temperature remains constant.'
          }
        ]
      }
    }
  ]
};
