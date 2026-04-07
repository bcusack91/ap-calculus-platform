export const chemMolesMolarMassPart1Data = {
  topicSlug: 'moles-molar-mass',
  sections: [
    {
      id: 'mm1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Introduction to the Mole

**Part 1 of 7 — Avogadro's Number & Counting by Weighing**

Chemistry deals with incredibly tiny particles — atoms, molecules, and ions. A single drop of water contains roughly $10^{21}$ molecules. How do chemists keep track of such enormous numbers?

The answer is the **mole** — one of the most important concepts in all of chemistry.
      `
    },
    {
      id: 'mm1-what-is-mole',
      type: 'text' as const,
      content: `
## What Is a Mole?

A **mole** (abbreviated **mol**) is a counting unit, just like a "dozen" means 12 items. But instead of 12, a mole is a **very** large number:

$$1 \\text{ mol} = 6.022 \\times 10^{23} \\text{ particles}$$

This number is called **Avogadro's number** ($N_A$), named after Italian scientist Amedeo Avogadro.

### Putting It in Perspective

- A dozen eggs = 12 eggs
- A gross of pencils = 144 pencils
- A ream of paper = 500 sheets
- **A mole of atoms = $6.022 \\times 10^{23}$ atoms**

### Why Such a Specific Number?

Avogadro's number is defined so that **one mole of carbon-12 atoms has a mass of exactly 12 grams**. This connects the atomic mass scale (in amu) to the laboratory mass scale (in grams).

| Particle | Mass of 1 atom/molecule (amu) | Mass of 1 mole (g) |
|----------|-------------------------------|---------------------|
| H | 1.008 | 1.008 |
| C | 12.01 | 12.01 |
| O | 16.00 | 16.00 |
| H₂O | 18.02 | 18.02 |
      `
    },
    {
      id: 'mm1-counting-by-weighing',
      type: 'text' as const,
      content: `
## Counting by Weighing

It would be impossible to count individual atoms one by one. Instead, chemists **count by weighing**.

### The Analogy

Imagine you work at a hardware store and need to sell 500 nails. You could count each one, or you could:

1. Weigh one nail → say it is 2.0 g
2. Calculate: $500 \\times 2.0 \\text{ g} = 1000 \\text{ g} = 1.0 \\text{ kg}$
3. Simply weigh out 1.0 kg of nails!

**Chemistry works the same way.** We know the mass of one mole of any element or compound, so we weigh out the right mass to get the number of particles we need.

### The Core Conversion

$$\\text{moles} = \\frac{\\text{number of particles}}{6.022 \\times 10^{23}}$$

$$\\text{number of particles} = \\text{moles} \\times 6.022 \\times 10^{23}$$
      `
    },
    {
      id: 'mm1-conversion-examples',
      type: 'text' as const,
      content: `
## Mole ↔ Particle Conversions

### Example 1: Moles → Particles

> **Problem:** How many atoms are in 2.50 mol of iron (Fe)?

**Solution:**

$$\\text{atoms of Fe} = 2.50 \\; \\cancel{\\text{mol Fe}} \\times \\frac{6.022 \\times 10^{23} \\text{ atoms Fe}}{1 \\; \\cancel{\\text{mol Fe}}} = 1.506 \\times 10^{24} \\text{ atoms Fe}$$

### Example 2: Particles → Moles

> **Problem:** How many moles is $3.011 \\times 10^{23}$ molecules of CO₂?

**Solution:**

$$\\text{mol CO}_2 = 3.011 \\times 10^{23} \\; \\cancel{\\text{molecules CO}_2} \\times \\frac{1 \\text{ mol CO}_2}{6.022 \\times 10^{23} \\; \\cancel{\\text{molecules CO}_2}} = 0.500 \\text{ mol CO}_2$$

### Watch Out for Polyatomic Molecules!

> **Problem:** If you have 1 mol of H₂O, how many molecules and atoms do you have?

**Solution:**

**Molecules of H₂O:**

$$1 \\; \\cancel{\\text{mol H}_2\\text{O}} \\times \\frac{6.022 \\times 10^{23} \\text{ molecules H}_2\\text{O}}{1 \\; \\cancel{\\text{mol H}_2\\text{O}}} = 6.022 \\times 10^{23} \\text{ molecules of H}_2\\text{O}$$

**Atoms of H:**

$$6.022 \\times 10^{23} \\; \\cancel{\\text{molecules H}_2\\text{O}} \\times \\frac{2 \\text{ atoms H}}{1 \\; \\cancel{\\text{molecule H}_2\\text{O}}} = 1.204 \\times 10^{24} \\text{ atoms of H}$$

**Atoms of O:**

$$6.022 \\times 10^{23} \\; \\cancel{\\text{molecules H}_2\\text{O}} \\times \\frac{1 \\text{ atom O}}{1 \\; \\cancel{\\text{molecule H}_2\\text{O}}} = 6.022 \\times 10^{23} \\text{ atoms of O}$$

**Total:**

$$1.204 \\times 10^{24} + 6.022 \\times 10^{23} = 1.807 \\times 10^{24} \\text{ atoms overall}$$
      `
    },
    {
      id: 'mm1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mole Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is Avogadro\'s number?',
            options: [
              '$6.022 \\times 10^{22}$',
              '$6.022 \\times 10^{23}$',
              '$6.022 \\times 10^{24}$',
              '$6.626 \\times 10^{23}$'
            ],
            correctAnswer: 1,
            explanation: 'Avogadro\'s number is $6.022 \\times 10^{23}$, defined as the number of particles in one mole of a substance.'
          },
          {
            question: 'How many molecules are in 3.00 mol of water (H₂O)?',
            options: [
              '$6.022 \\times 10^{23}$',
              '$1.204 \\times 10^{24}$',
              '$1.807 \\times 10^{24}$',
              '$5.420 \\times 10^{24}$'
            ],
            correctAnswer: 2,
            explanation: '$3.00 \\text{ mol} \\times 6.022 \\times 10^{23} = 1.807 \\times 10^{24}$ molecules. Note: this is the number of H₂O molecules, not individual atoms.'
          },
          {
            question: 'One mole of any substance always contains:',
            options: [
              'The same mass',
              'The same volume',
              'The same number of particles',
              'The same number of electrons'
            ],
            correctAnswer: 2,
            explanation: 'One mole always contains $6.022 \\times 10^{23}$ particles (atoms, molecules, ions, etc.), regardless of the substance. The mass and volume will differ.'
          }
        ]
      }
    },
    {
      id: 'mm1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Mole-Particle Conversion Drill** 🧮

**1)** How many atoms are in 0.750 mol of aluminum (Al)? Express your answer in scientific notation as $a \\times 10^{23}$ — enter only the value of $a$ (to 3 significant figures).

**2)** A sample contains $1.806 \\times 10^{24}$ molecules of CO₂. How many moles is this? (to 3 significant figures)

**3)** How many individual oxygen atoms are in 2.00 mol of O₂? Express as $a \\times 10^{24}$ — enter only $a$ (to 3 significant figures).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.52', '3.00', '2.409'],
        hint1: 'Multiply moles by Avogadro\'s number: $0.750 \\times 6.022 \\times 10^{23} = 4.517 \\times 10^{23}$.',
        hint2: 'Divide particles by Avogadro\'s number: $1.806 \\times 10^{24} \\div 6.022 \\times 10^{23}$.',
        hint3: 'Each O₂ molecule has 2 oxygen atoms, so multiply moles of O₂ by $N_A$ and then by 2.',
        explanation: '1) $0.750 \\times 6.022 \\times 10^{23} = 4.517 \\times 10^{23}$, so $a = 4.52$. 2) $1.806 \\times 10^{24} / 6.022 \\times 10^{23} = 3.00$ mol. 3) $2.00 \\text{ mol O}_2 \\times 6.022 \\times 10^{23} = 1.2044 \\times 10^{24}$ molecules, each with 2 O atoms: $2.4088 \\times 10^{24}$ atoms, so $a = 2.409$.'
      }
    },
    {
      id: 'mm1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Mole Concept — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A mole is a unit that measures',
            options: ['mass', 'volume', 'amount of substance', 'temperature']
          },
          {
            label: 'The number $6.022 \\times 10^{23}$ is called',
            options: ['Boltzmann\'s constant', 'Avogadro\'s number', 'Planck\'s constant', 'the gas constant']
          },
          {
            label: '2 mol of helium atoms contains ______ atoms than 2 mol of lead atoms',
            options: ['more', 'fewer', 'the same number of', 'double the']
          },
          {
            label: 'If you have 0.5 mol of NaCl, you have ______ formula units',
            options: ['6.022 × 10²³', '3.011 × 10²³', '1.204 × 10²⁴', '3.011 × 10²²']
          }
        ],
        correctAnswers: ['amount of substance', 'Avogadro\'s number', 'the same number of', '3.011 × 10²³'],
        hint1: 'The mole is the SI base unit for the amount of substance.',
        hint2: '$N_A = 6.022 \\times 10^{23}$ is named after Amedeo Avogadro.',
        hint3: 'A mole is a fixed number — 2 mol always means $2 \\times 6.022 \\times 10^{23}$ particles, regardless of the element.',
        explanation: 'The mole measures amount of substance. $6.022 \\times 10^{23}$ is Avogadro\'s number. Two moles of any substance contain the same number of particles ($1.204 \\times 10^{24}$). 0.5 mol $\\times 6.022 \\times 10^{23} = 3.011 \\times 10^{23}$ formula units.'
      }
    },
    {
      id: 'mm1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — The Mole** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A sample of neon gas contains $1.2044 \\times 10^{24}$ atoms. How many moles of neon is this?',
            options: [
              '0.500 mol',
              '1.00 mol',
              '2.00 mol',
              '3.00 mol'
            ],
            correctAnswer: 2,
            explanation: '$n = 1.2044 \\times 10^{24} / 6.022 \\times 10^{23} = 2.00$ mol.'
          },
          {
            question: 'One mole of H₂O contains how many total atoms?',
            options: [
              '$6.022 \\times 10^{23}$',
              '$1.204 \\times 10^{24}$',
              '$1.807 \\times 10^{24}$',
              '$2.409 \\times 10^{24}$'
            ],
            correctAnswer: 2,
            explanation: 'Each H₂O molecule has 3 atoms (2 H + 1 O). Total atoms = $3 \\times 6.022 \\times 10^{23} = 1.807 \\times 10^{24}$.'
          }
        ]
      }
    }
  ]
}
