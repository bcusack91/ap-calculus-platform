export const chemEntropySecondLawV2Part1Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en1v2-intro',
      type: 'text' as const,
      content: `
# 🃏 Entropy: Nature's Shuffle

**Part 1 of 7 — Why Things Spread Out**

Imagine dropping a single drop of red food coloring into a glass of water. It doesn't stay as a dot — it diffuses until the entire glass is uniformly pink. **Why?** The answer: **entropy**.
      `
    },
    {
      id: 'en1v2-analogy',
      type: 'text' as const,
      content: `
## 📌 The Bedroom Analogy

Think of your bedroom. There's exactly **one** way for everything to be perfectly organized: shoes paired, books alphabetized, clothes folded. But there are **billions** of ways for it to be messy.

This is the core idea of entropy: **there are far more disordered arrangements than ordered ones**.


---

### From Bedrooms to Molecules

| Scenario | Ordered States | Disordered States |
|----------|---------------|------------------|
| Bedroom | 1 perfectly clean arrangement | Billions of messy ones |
| A few gas molecules in a box | Few arrangements with all of them crowded into one half | Many more arrangements with them spread through the box |
| $10^{23}$ molecules | Essentially no chance of all crowding into one corner | Spread-out arrangements are overwhelmingly likely |


---

### The Punch Line

Nature doesn't have a preference for disorder — it just plays the odds. When there are overwhelmingly more disordered states, that's what you'll observe.
      `
    },
    {
      id: 'en1v2-dispersal',
      type: 'text' as const,
      content: `
## 📌 Two Kinds of Spreading

The AP exam describes entropy as **dispersal** (CED 9.1.A). Entropy increases when either of two things spreads out:

---

### 1. Matter Spreads Out

- **Phase changes:** solid → liquid → gas lets particles move more freely and (for gases) fill far more volume.
- **Gas expansion:** at constant temperature, a gas in a larger volume has higher entropy.
- **Moles of gas:** a reaction that makes more moles of gas than it uses usually increases entropy.
- **Dissolving:** a solid's ions or molecules spread through the solvent.

---

### 2. Energy Spreads Out

As temperature rises, the distribution of particle kinetic energies **broadens**. Energy is spread over a wider range of motions, so entropy increases with temperature even when nothing changes phase.

> 💡 **Tip:** The food coloring spreads (matter dispersal). A hot drink cools to room temperature as its energy spreads into the surroundings (energy dispersal). Both are entropy at work.
      `
    },
    {
      id: 'en1v2-properties',
      type: 'text' as const,
      content: `
## 🔬 Key Properties of Entropy

| Property | What It Means | Why It Matters |
|----------|---------------|----------------|
| **Extensive** | Doubles when amount doubles | 2 mol has twice the entropy of 1 mol |
| **Always positive** ($T > 0$) | No substance has zero entropy above 0 K | Even crystals have thermal vibrations |
| **Units: J/K** | Not kJ! | Common AP exam trap — watch your units |


---

### Entropy Changes Can Be Positive or Negative

Every substance has a positive entropy, but a **change** in entropy, $\\Delta S$, can have either sign. $\\Delta S > 0$ means matter or energy became more dispersed; $\\Delta S < 0$ means it became less dispersed (for example, a gas condensing).

This sign, together with $\\Delta H$, is the key to understanding why some processes are thermodynamically favored and others aren't!
      `
    },
    {
      id: 'en1v2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Food coloring spreads in water because:',
            options: [
              'Water molecules collide with the dye and push it apart evenly',
              'The dye is less dense than water, so it rises and spreads',
              'Dispersed arrangements vastly outnumber clustered ones',
              'Bonds between dye molecules break, freeing them to move'
            ],
            correctAnswer: 2,
            explanation: 'Spreading is driven by probability: arrangements with the dye molecules spread throughout the water astronomically outnumber arrangements with them concentrated in one spot. No push, density difference or bond breaking is needed.'
          },
          {
            question: 'A sealed flask of gas is heated from 25 °C to 75 °C. Why does its entropy increase even though its volume is unchanged?',
            options: [
              'The gas molecules become larger at higher temperature',
              'The distribution of molecular kinetic energies broadens',
              'Heating creates additional moles of gas',
              'Heating converts the gas into a liquid'
            ],
            correctAnswer: 1,
            explanation: 'At a higher temperature the kinetic energies of the molecules spread over a wider range, so energy is more dispersed and entropy increases (CED 9.1.A.2). The molecules do not grow, the amount of gas is unchanged, and heating does not condense a gas.'
          },
          {
            question: 'Which process has a NEGATIVE entropy change for the system?',
            options: [
              'Dry ice subliming to $CO_{2}$ gas',
              'Steam condensing to liquid water',
              'Sugar dissolving in water',
              'Helium expanding into a larger container'
            ],
            correctAnswer: 1,
            explanation: 'Condensation turns a dispersed gas into a liquid whose particles are confined close together, so ΔS < 0. Sublimation, dissolving, and expansion all disperse matter, so their entropy changes are positive.'
          }
        ]
      }
    },
    {
      id: 'en1v2-dispersal-drill',
      type: 'input-boxes' as const,
      content: `
**Dispersal Practice** 🧮

For each change, type **increase** or **decrease** for the entropy of the system.

**1)** Liquid bromine evaporates: $\\text{Br}_2(l) \\rightarrow \\text{Br}_2(g)$

**2)** A balloon of helium is cooled from 300 K to 200 K at constant volume.

**3)** $2\\text{NO}_2(g) \\rightarrow \\text{N}_2\\text{O}_4(g)$
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'increase', acceptableAnswers: ['increase', 'increases'] }, { question: '(2)', answer: 'decrease', acceptableAnswers: ['decrease', 'decreases'] }, { question: '(3)', answer: 'decrease', acceptableAnswers: ['decrease', 'decreases'] }],
        hint1: 'Liquid → gas.',
        hint2: 'What happens to the spread of kinetic energies when T falls?',
        hint3: 'Compare moles of gas on each side.',
        explanation: '1) Increase: the liquid becomes a gas, dispersing matter. 2) Decrease: a lower temperature narrows the energy distribution. 3) Decrease: 2 mol of gas become 1 mol, so matter is less dispersed.'
      }
    },
    {
      id: 'en1v2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Complete the Statements** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'More dispersal of matter or energy means',
            options: ['lower entropy', 'higher entropy', 'same entropy', 'lower temperature']
          },
          {
            label: 'Entropy has units of',
            options: ['kJ/mol', 'J/K', 'atm', 'mol/L']
          },
          {
            label: 'Raising the temperature of a substance makes its entropy',
            options: ['decrease', 'increase', 'stay the same', 'become zero']
          },
          {
            label: 'A solid changing to a liquid is an entropy',
            options: ['decrease', 'increase', 'no change', 'reversal']
          }
        ],
        correctAnswers: ['higher entropy', 'J/K', 'increase', 'increase'],
        hint1: 'Entropy measures dispersal.',
        hint2: 'Be careful: J not kJ!',
        hint3: 'A broader energy distribution means more dispersed energy.',
        explanation: 'More dispersal = higher $S$. Entropy uses J/K (not kJ). Heating broadens the energy distribution, raising entropy. Melting lets particles move more freely → higher entropy.'
      }
    },
    {
      id: 'en1v2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A glass of ice water sits in a warm room. Why does the ice melt?',
            options: [
              'The warm room supplies the activation energy the ice needs',
              'Above 0 °C, entropy gain outweighs ΔH > 0',
              'Ice is less stable than liquid water at every temperature',
              'Melting lowers the energy of the water molecules'
            ],
            correctAnswer: 1,
            explanation: 'Melting is endothermic (unfavorable energy change) but disperses the molecules (favorable entropy change). Above 0°C the entropy factor wins, so ice melts. Melting raises rather than lowers the molecules\' energy, activation energy affects only the rate, and ice is the stable phase below 0°C.'
          },
          {
            question: 'Which statement about entropy is FALSE?',
            options: [
              'Entropy increases when a gas expands at constant T',
              'Entropy decreases when a liquid boils',
              'Entropy has units of J/K',
              'Entropy is always positive above 0 K'
            ],
            correctAnswer: 1,
            explanation: 'Boiling turns a liquid into a far more dispersed gas, so entropy INCREASES. The other statements are true: expansion disperses a gas, entropy is measured in J/K, and every substance has positive entropy above 0 K.'
          }
        ]
      }
    }
  ]
}
