export const physics2TemperaturePart2Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te2-intro',
      type: 'text' as const,
      content: `
# ⚖️ Thermal Equilibrium & the Zeroth Law

**Part 2 of 7 — The Foundation of Temperature Measurement**

Before we can measure temperature, we need a fundamental principle that tells us what temperature **means** when two objects interact. This principle is so basic that it was added to thermodynamics after the first and second laws — and numbered "zero."
      `
    },
    {
      id: 'te2-zeroth-law',
      type: 'text' as const,
      content: `
## The Zeroth Law of Thermodynamics

### Thermal Equilibrium

When two objects are placed in thermal contact, energy (heat) flows from the hotter object to the cooler one. Eventually, the net heat flow stops and both objects reach the **same temperature**. They are then in **thermal equilibrium**.

> 🔑 Two objects in thermal equilibrium have the **same temperature**. No net heat flows between them.

### The Zeroth Law

$$\\text{If } A \\leftrightarrow C \\text{ and } B \\leftrightarrow C, \\text{ then } A \\leftrightarrow B$$

Where $\\leftrightarrow$ means "is in thermal equilibrium with."

**In words:** If object A is in thermal equilibrium with object C, and object B is also in thermal equilibrium with object C, then A and B are in thermal equilibrium with each other (they have the same temperature).

### Why It Matters

This law is what makes **thermometers possible**! A thermometer (object C) reaches thermal equilibrium with your body (object A). Later it reaches equilibrium with a pot of water (object B). If the readings match, A and B have the same temperature — even though A and B never touched each other.

### Direction of Heat Flow

Heat **always** flows spontaneously from higher temperature to lower temperature:

$$T_{\\text{hot}} \\xrightarrow{\\text{heat}} T_{\\text{cold}}$$

This continues until $T_{\\text{hot}} = T_{\\text{cold}}$ (thermal equilibrium). Heat never flows from cold to hot on its own — that would require external work (refrigerators, heat pumps).
      `
    },
    {
      id: 'te2-thermometers',
      type: 'text' as const,
      content: `
## How Thermometers Work

All thermometers exploit some **thermometric property** — a physical quantity that changes predictably with temperature:

| Thermometer Type | Thermometric Property |
|---|---|
| Mercury/alcohol | Volume of liquid (thermal expansion) |
| Thermocouple | Voltage across a junction |
| Resistance (RTD) | Electrical resistance of metal |
| Infrared | Intensity of emitted radiation |
| Gas (constant volume) | Pressure of a gas |
| Bimetallic strip | Differential expansion of two metals |

### The Constant-Volume Gas Thermometer

This is the most fundamental thermometer. It measures the pressure of a fixed amount of gas at constant volume:

$$T = (273.16 \\text{ K}) \\frac{P}{P_{\\text{triple}}}$$

where $P_{\\text{triple}}$ is the pressure at the triple point of water (273.16 K by definition). As the amount of gas is reduced toward zero, all gases give the same reading — this defines the **ideal gas temperature scale**, which is identical to the Kelvin scale.
      `
    },
    {
      id: 'te2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Zeroth Law & Equilibrium Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'The Zeroth Law of Thermodynamics establishes:',
            options: [
              'Energy conservation in thermal processes',
              'The transitivity of thermal equilibrium, enabling temperature measurement',
              'That entropy always increases',
              'That heat flows from hot to cold'
            ],
            correctAnswer: 1,
            explanation: 'The Zeroth Law says thermal equilibrium is transitive: if A is in equilibrium with C and B is in equilibrium with C, then A is in equilibrium with B. This is what makes thermometers meaningful.'
          },
          {
            question: 'Two objects are in thermal equilibrium when:',
            options: [
              'They have the same mass',
              'They are made of the same material',
              'They are at the same temperature and no net heat flows between them',
              'They have the same total thermal energy'
            ],
            correctAnswer: 2,
            explanation: 'Thermal equilibrium means equal temperatures and zero net heat transfer. Objects can differ in mass, material, and total energy while being in thermal equilibrium.'
          },
          {
            question: 'A metal spoon at 20°C is placed in soup at 80°C. Heat flows:',
            options: [
              'From spoon to soup',
              'From soup to spoon until both reach 80°C',
              'From soup to spoon until they reach the same temperature between 20°C and 80°C',
              'In both directions equally'
            ],
            correctAnswer: 2,
            explanation: 'Heat flows from hot (soup) to cold (spoon). The final equilibrium temperature is between 20°C and 80°C (the exact value depends on the masses and specific heats). The soup cools and the spoon warms.'
          }
        ]
      }
    },
    {
      id: 'te2-dropdown-drill',
      type: 'dropdown-select' as const,
      content: `
**Thermal Equilibrium Reasoning** 🎯

Complete each statement about thermal equilibrium and heat flow.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When two objects at different temperatures are placed in contact, heat flows from',
            options: ['cold to hot', 'hot to cold', 'both directions equally', 'neither direction']
          },
          {
            label: 'A thermometer reads 37°C after being in your mouth. This means the thermometer and your body are in',
            options: ['chemical equilibrium', 'thermal equilibrium', 'mechanical equilibrium', 'dynamic equilibrium']
          },
          {
            label: 'Object X is in thermal equilibrium with a thermometer reading 50°C. Object Y is also in equilibrium with a thermometer reading 50°C. By the Zeroth Law, X and Y are',
            options: ['not related', 'in thermal equilibrium with each other', 'at different temperatures', 'exchanging heat']
          },
          {
            label: 'At thermal equilibrium, the net heat transfer between two objects is',
            options: ['maximum', 'increasing', 'zero', 'undefined']
          }
        ],
        correctAnswers: ['hot to cold', 'thermal equilibrium', 'in thermal equilibrium with each other', 'zero'],
        hint1: 'Heat spontaneously flows in only one direction based on temperature difference.',
        hint2: 'A thermometer works by reaching the same temperature as the object it measures.',
        hint3: 'The Zeroth Law is about transitivity — if A = C and B = C, then A = B.',
        explanation: 'Heat flows from hot to cold. A thermometer reaches thermal equilibrium with what it contacts. The Zeroth Law guarantees transitivity. At equilibrium, net heat transfer is zero.'
      }
    },
    {
      id: 'te2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A thermometer works because of:',
            options: [
              'The first law of thermodynamics',
              'The zeroth law of thermodynamics',
              'Conservation of momentum',
              'The second law of thermodynamics'
            ],
            correctAnswer: 1,
            explanation: 'The zeroth law guarantees that if the thermometer is in thermal equilibrium with object A, and later in equilibrium with object B at the same reading, then A and B have the same temperature.'
          },
          {
            question: 'Object A is at 50°C and object B is at 50°C. If brought into thermal contact:',
            options: [
              'Heat flows from A to B',
              'Heat flows from B to A',
              'No net heat flow occurs',
              'Both objects cool down'
            ],
            correctAnswer: 2,
            explanation: 'Since both objects are at the same temperature (50°C), they are already in thermal equilibrium. No net heat transfer occurs — there is no temperature difference to drive heat flow.'
          }
        ]
      }
    }
  ]
}
