export const chemEntropySecondLawPart1Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en1-intro',
      type: 'text' as const,
      content: `# 🎲 What Is Entropy?

**Part 1 of 7 — Entropy as the Dispersal of Matter and Energy**

---

### Topics in This Part

| Section |
|---------|
| 🌡️ Entropy and Dispersal |
| 📌 Dispersal of Matter |
| 📌 Dispersal of Energy |
| 🔬 Units and Properties of Entropy |

> 🔑 **Key Concept:** Entropy ($S$) increases when **matter** becomes more dispersed and when **energy** becomes more dispersed (CED 9.1.A). The AP exam asks you to predict the sign and relative size of entropy changes from these two ideas.

---

### What You'll Master in Part 1
- Explaining entropy in terms of the dispersal of matter and energy
- Comparing the entropy of solids, liquids, gases, and solutions
- Explaining why entropy increases with temperature`
    },
    {
      id: 'en1-disorder',
      type: 'text' as const,
      content: `
## 🌡️ Entropy and Dispersal

Entropy is often described as "disorder." A more precise description, and the one the AP exam uses, is **dispersal**: entropy increases when particles spread out into more space or gain more freedom to move, and when energy spreads out over more possible motions.


---

### Everyday Examples of Increasing Entropy

| Process | Lower Entropy | Higher Entropy |
|---------|--------------|----------------|
| Ice melting | Solid (fixed positions) | Liquid (particles move past each other) |
| Gas expanding | Compressed gas | Gas spread through a larger volume |
| Dissolving salt | Crystalline solid | Ions dispersed through the solution |
| Heating a gas | Narrow range of particle speeds | Broader range of particle speeds |

---

> 🔑 **Key Concept:** Matter and energy tend to spread out because there are vastly more ways to be spread out than to be concentrated. A gas never gathers in one corner of its container on its own.
      `
    },
    {
      id: 'en1-dispersal',
      type: 'text' as const,
      content: `
## 📌 Dispersal of Matter

Entropy increases when particles become freer to move or occupy a larger volume (CED 9.1.A.1):

| Change | Effect on $S$ | Why |
|--------|---------------|-----|
| Solid → liquid → gas | Increases | Particles move more freely and (for gases) occupy far more volume |
| Gas expands at constant $T$ | Increases | Molecules move within a larger space |
| More moles of gas produced than consumed | Increases | More gas particles dispersed through the volume |
| A solid dissolves | Usually increases | Ions or molecules spread through the solvent |


---

## 📌 Dispersal of Energy

As temperature rises, the distribution of kinetic energies among the particles **broadens** (CED 9.1.A.2). Energy is spread over a wider range of motions, so the entropy of a substance **increases with temperature**, even without a phase change.

> 💡 **Tip:** Connect this to the Maxwell-Boltzmann distribution from kinetics: the higher-temperature curve is broader, and a broader distribution of energy means higher entropy.
      `
    },
    {
      id: 'en1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Entropy Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At constant temperature, which change increases the entropy of a gas sample?',
            options: [
              'Compressing the gas into a smaller volume',
              'Allowing the gas to expand into a larger volume',
              'Condensing part of the gas to a liquid',
              'Cooling the gas container by 10 °C'
            ],
            correctAnswer: 1,
            explanation: 'Expanding into a larger volume lets the molecules disperse through more space, so entropy increases. Compression and condensation confine the particles, and cooling narrows the distribution of energies, all of which lower entropy.'
          },
          {
            question: 'Which has the highest entropy?',
            options: [
              '1 mol $H_{2}O(s)$ at 0°C',
              '1 mol $H_{2}O(l)$ at 100°C',
              '1 mol $H_{2}O(g)$ at 100°C',
              '1 mol $H_{2}O(l)$ at 0°C'
            ],
            correctAnswer: 2,
            explanation: 'Gas particles are the most dispersed: they move freely through a large volume. Even at the same temperature, 1 mol of water vapor at 100°C has much more entropy than 1 mol of liquid water at 100°C, and both exceed the colder liquid and the ice.'
          },
          {
            question: 'Entropy is measured in:',
            options: [
              'kJ/mol or J/mol',
              'J/K or J/(mol·K)',
              'J·K or J·K/mol',
              'atm·L or (atm·L)/mol'
            ],
            correctAnswer: 1,
            explanation: 'Entropy is energy per kelvin: J/K, or J/(mol·K) for molar entropy. kJ/mol is the unit of ΔH, atm·L is a unit of energy, and J·K multiplies by temperature where it should divide. Note: tabulated entropies use joules, not kilojoules! This is a common AP exam unit trap.'
          }
        ]
      }
    },
    {
      id: 'en1-entropy-units',
      type: 'text' as const,
      content: `
## 🔬 Units and Properties of Entropy

### Units

Entropy is measured in **J/K** (joules per kelvin) or **J/(mol·K)** for molar entropy.

> ⚠️ **Warning:** Unlike enthalpy (kJ), entropy uses **joules** — a common source of unit errors on the AP exam!


---

### Key Properties

| Property | Description |
|----------|-------------|
| Extensive | Proportional to amount of substance: twice the sample, twice the entropy |
| Always positive | $S > 0$ for any real substance above 0 K |
| Increases with T | Energy is spread over a broader range of motions |
| Increases solid → liquid → gas | Matter becomes more dispersed |

---

> 💡 **Tip:** A reaction's entropy change can be positive or negative even though every substance's absolute entropy is positive. The sign of $\\Delta S$ tells you whether the products are more dispersed (+) or less dispersed (−) than the reactants.
      `
    },
    {
      id: 'en1-dispersal-drill',
      type: 'input-boxes' as const,
      content: `
**Dispersal Drill** 🧮

For each process, type **increase** or **decrease** for the entropy of the system.

**1)** A sample of $\\text{N}_2(g)$ is heated from 300 K to 400 K at constant volume.

**2)** $\\text{CO}_2(g)$ is compressed to half its volume at constant temperature.

**3)** Solid iodine sublimes: $\\text{I}_2(s) \\rightarrow \\text{I}_2(g)$.
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'increase', acceptableAnswers: ['increase', 'increases'] }, { question: '(2)', answer: 'decrease', acceptableAnswers: ['decrease', 'decreases'] }, { question: '(3)', answer: 'increase', acceptableAnswers: ['increase', 'increases'] }],
        hint1: 'What happens to the spread of kinetic energies as T rises?',
        hint2: 'The molecules are confined to less space.',
        hint3: 'A solid becomes a gas.',
        explanation: '1) Increase: heating broadens the distribution of kinetic energies, dispersing energy. 2) Decrease: the gas molecules occupy a smaller volume. 3) Increase: particles go from fixed positions in a solid to free motion in a gas.'
      }
    },
    {
      id: 'en1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Entropy Basics** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Entropy increases when matter or energy becomes more',
            options: ['concentrated', 'dispersed', 'ordered', 'compressed']
          },
          {
            label: 'As temperature increases, entropy',
            options: ['decreases', 'increases', 'stays constant', 'becomes zero']
          },
          {
            label: 'A gas expanding into a vacuum undergoes an entropy',
            options: ['decrease', 'increase', 'no change', 'reversal']
          },
          {
            label: 'Standard molar entropies are reported in units of',
            options: ['kJ/mol', 'J/(mol·K)', 'J/mol', 'K/J']
          }
        ],
        correctAnswers: ['dispersed', 'increases', 'increase', 'J/(mol·K)'],
        hint1: 'Think about spreading out.',
        hint2: 'A broader distribution of kinetic energies means more dispersed energy.',
        hint3: 'Expanding into more volume lets the molecules spread out.',
        explanation: 'Entropy increases with the dispersal of matter and energy. Higher T broadens the energy distribution. Gas expansion lets the molecules spread through more space. Molar entropies are in J/(mol·K).'
      }
    },
    {
      id: 'en1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — What Is Entropy?** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Why do gas molecules spread out to fill their container?',
            options: [
              'Gas molecules repel one another and push apart until evenly spaced',
              'Spread-out arrangements vastly outnumber clustered ones',
              'Pressure from the container walls pushes the molecules apart',
              'Gas molecules seek the lowest-energy arrangement, which is spread out'
            ],
            correctAnswer: 1,
            explanation: 'Spreading is a matter of probability, not force. Arrangements with the molecules dispersed through the container vastly outnumber arrangements with them clustered in one spot, so the dispersed state is overwhelmingly more likely. Ideal-gas molecules barely interact, the walls do not push them apart, and the energy of an ideal gas does not change when it spreads at constant temperature.'
          },
          {
            question: 'Which process involves a DECREASE in entropy?',
            options: [
              'Ice melting to liquid water',
              'Water evaporating to steam',
              'Water freezing to ice',
              'A gas expanding into a vacuum'
            ],
            correctAnswer: 2,
            explanation: 'Freezing locks mobile liquid particles into fixed positions in a solid, so matter becomes less dispersed and entropy decreases. All other options increase entropy.'
          }
        ]
      }
    }
  ]
}
