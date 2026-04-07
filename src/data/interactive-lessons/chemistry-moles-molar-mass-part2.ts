export const chemMolesMolarMassPart2Data = {
  topicSlug: 'moles-molar-mass',
  sections: [
    {
      id: 'mm2-intro',
      type: 'text' as const,
      content: `
# ⚖️ Molar Mass

**Part 2 of 7 — The Mass of One Mole**

Now that we know what a mole is, we need a way to connect **moles** to **grams** — something we can actually measure on a balance. That connection is the **molar mass**.
      `
    },
    {
      id: 'mm2-definition',
      type: 'text' as const,
      content: `
## 📖 What Is Molar Mass?

The **molar mass** ($M$) of a substance is the mass in grams of one mole of that substance.

$$M = \\frac{\\text{mass (g)}}{\\text{moles (mol)}}$$

Units: **g/mol**


---

### For Elements

The molar mass of an element equals its **atomic mass from the periodic table**, but in grams per mole:

| Element | Atomic Mass (amu) | Molar Mass (g/mol) |
|---------|-------------------|---------------------|
| Hydrogen (H) | 1.008 | 1.008 |
| Carbon (C) | 12.01 | 12.01 |
| Oxygen (O) | 16.00 | 16.00 |
| Sodium (Na) | 22.99 | 22.99 |
| Iron (Fe) | 55.85 | 55.85 |


---

### Key Insight

The number on the periodic table does double duty: it tells you the **mass of one atom in amu** and the **mass of one mole of atoms in grams**.
      `
    },
    {
      id: 'mm2-compounds',
      type: 'text' as const,
      content: `
## 📌 Molar Mass of Compounds

For a compound, add up the molar masses of all atoms in the formula.


---

### Example 1: Water (H₂O)

> **Problem:** What is the molar mass of water (H₂O)?

**Solution:**

$$M_{\\text{H}_2\\text{O}} = 2(1.008) + 1(16.00) = 2.016 + 16.00 = 18.02 \\text{ g/mol}$$


---

### Example 2: Sodium Chloride (NaCl)

> **Problem:** What is the molar mass of sodium chloride (NaCl)?

**Solution:**

$$M_{\\text{NaCl}} = 22.99 + 35.45 = 58.44 \\text{ g/mol}$$


---

### Example 3: Calcium Carbonate (CaCO₃)

> **Problem:** What is the molar mass of calcium carbonate (CaCO₃)?

**Solution:**

$$M_{\\text{CaCO}_3} = 40.08 + 12.01 + 3(16.00) = 40.08 + 12.01 + 48.00 = 100.09 \\text{ g/mol}$$


---

### Example 4: Glucose (C₆H₁₂O₆)

> **Problem:** What is the molar mass of glucose (C₆H₁₂O₆)?

**Solution:**

$$M_{\\text{C}_6\\text{H}_{12}\\text{O}_6} = 6(12.01) + 12(1.008) + 6(16.00) = 72.06 + 12.10 + 96.00 = 180.16 \\text{ g/mol}$$


---

### Tip: Watch for Parentheses!

> **Problem:** What is the molar mass of calcium hydroxide, Ca(OH)₂?

**Solution:**

$$M = 40.08 + 2(16.00 + 1.008) = 40.08 + 2(17.008) = 40.08 + 34.02 = 74.10 \\text{ g/mol}$$
      `
    },
    {
      id: 'mm2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Molar Mass Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The molar mass of an element can be found by looking at:',
            options: [
              'Its atomic number on the periodic table',
              'Its atomic mass on the periodic table',
              'Its electron configuration',
              'Its electronegativity'
            ],
            correctAnswer: 1,
            explanation: 'The atomic mass (in amu) on the periodic table equals the molar mass in g/mol. For example, carbon has an atomic mass of 12.01 amu and a molar mass of 12.01 g/mol.'
          },
          {
            question: 'What is the molar mass of sulfuric acid (H₂SO₄)? (H = 1.008, S = 32.07, O = 16.00)',
            options: [
              '49.08 g/mol',
              '82.08 g/mol',
              '98.08 g/mol',
              '114.08 g/mol'
            ],
            correctAnswer: 2,
            explanation: '$M = 2(1.008) + 32.07 + 4(16.00) = 2.016 + 32.07 + 64.00 = 98.09 \\approx 98.08$ g/mol.'
          },
          {
            question: 'Which compound has the greatest molar mass?',
            options: [
              'H₂O',
              'CO₂',
              'NaCl',
              'C₆H₁₂O₆'
            ],
            correctAnswer: 3,
            explanation: 'Glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) has the greatest molar mass at 180.16 g/mol because it contains the most atoms and includes heavy carbon and oxygen atoms.'
          }
        ]
      }
    },
    {
      id: 'mm2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Molar Mass Calculation Drill** 🧮

> **Given Atomic Masses (g/mol):**
>
> | H | C | N | O | Na |
> |---|---|---|---|---|
> | 1.008 | 12.01 | 14.01 | 16.00 | 22.99 |
>
> | S | Cl | K | Ca | Fe |
> |---|---|---|---|---|
> | 32.07 | 35.45 | 39.10 | 40.08 | 55.85 |

**1)** Calculate the molar mass of ammonia (NH₃) in g/mol. (to 3 significant figures)

**2)** Calculate the molar mass of potassium permanganate (KMnO₄) in g/mol. (Mn = 54.94; to 3 significant figures)

**3)** Calculate the molar mass of iron(III) oxide (Fe₂O₃) in g/mol. (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17.03', '158.04', '159.70'],
        hint1: '$M_{\\text{NH}_3} = 14.01 + 3(1.008)$.',
        hint2: '$M_{\\text{KMnO}_4} = 39.10 + 54.94 + 4(16.00)$.',
        hint3: '$M_{\\text{Fe}_2\\text{O}_3} = 2(55.85) + 3(16.00)$.',
        explanation: '1) $14.01 + 3(1.008) = 14.01 + 3.024 = 17.03$ g/mol. 2) $39.10 + 54.94 + 64.00 = 158.04$ g/mol. 3) $2(55.85) + 3(16.00) = 111.70 + 48.00 = 159.70$ g/mol.'
      }
    },
    {
      id: 'mm2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Molar Mass Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The units of molar mass are',
            options: ['g', 'mol', 'g/mol', 'amu']
          },
          {
            label: 'One mole of carbon-12 has a mass of exactly',
            options: ['1 g', '6 g', '12 g', '14 g']
          },
          {
            label: 'To find the molar mass of a compound, you ______ the molar masses of all atoms in the formula',
            options: ['multiply', 'add', 'divide', 'subtract']
          },
          {
            label: 'The molar mass of O₂ is ______ the molar mass of O',
            options: ['equal to', 'half', 'double', 'triple']
          }
        ],
        correctAnswers: ['g/mol', '12 g', 'add', 'double'],
        hint1: 'Molar mass = mass in grams per mole.',
        hint2: 'The mole is defined so that 1 mol of ¹²C = 12 g exactly.',
        hint3: 'You sum all the individual atomic molar masses.',
        explanation: 'Molar mass is in g/mol. 1 mol of C-12 = 12 g by definition. You add individual atomic masses to get the compound molar mass. O₂ has 2 oxygen atoms, so its molar mass ($32.00$) is double that of a single O atom ($16.00$).'
      }
    },
    {
      id: 'mm2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Molar Mass** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What is the molar mass of aluminum sulfate, Al₂(SO₄)₃? (Al = 26.98, S = 32.07, O = 16.00)',
            options: [
              '150.17 g/mol',
              '278.03 g/mol',
              '342.17 g/mol',
              '214.10 g/mol'
            ],
            correctAnswer: 2,
            explanation: '$M = 2(26.98) + 3(32.07) + 12(16.00) = 53.96 + 96.21 + 192.00 = 342.17$ g/mol. Remember: the subscript 3 outside the parentheses multiplies everything inside — 3 S atoms and 12 O atoms total.'
          },
          {
            question: 'A substance has a molar mass of 44.01 g/mol. If you have exactly 1 mole, the sample weighs:',
            options: [
              '22.00 g',
              '44.01 g',
              '88.02 g',
              'It depends on the substance'
            ],
            correctAnswer: 1,
            explanation: 'By definition, the molar mass is the mass of one mole. So 1 mol of a substance with $M = 44.01$ g/mol has a mass of 44.01 g.'
          }
        ]
      }
    }
  ]
}
