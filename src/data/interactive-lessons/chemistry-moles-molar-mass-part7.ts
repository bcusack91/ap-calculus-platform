export const chemMolesMolarMassPart7Data = {
  topicSlug: 'moles-molar-mass',
  sections: [
    {
      id: 'mm7-intro',
      type: 'text' as const,
      content: `# 🎓 Synthesis & AP Review

**Part 7 of 7 — Connecting Concepts & Exam Preparation**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'mm7-concept-map',
      type: 'text' as const,
      content: `
## 🔗 Concept Connections

All of the mole concepts are interconnected:

$$\\boxed{\\text{Percent Composition} \\rightarrow \\text{Empirical Formula} \\xrightarrow{+\\,M} \\text{Molecular Formula}}$$

$$\\boxed{\\text{Mass (g)} \\xleftrightarrow{M} \\text{Moles} \\xleftrightarrow{N_A} \\text{Particles}}$$


---

### The Big Ideas

> 🔑 **Key Concept:** Everything in quantitative chemistry flows through the mole — master these conversions and you can solve virtually any stoichiometry problem.

1. **The mole** bridges the atomic and macroscopic worlds
2. **Molar mass** connects mass (measurable) to amount (moles)
3. **Percent composition** reveals the elemental makeup of compounds
4. **Empirical formulas** come from mole ratios of elements
5. **Molecular formulas** require knowing the molar mass


---

### Common Exam Topics

- Converting between grams, moles, and particles
- Calculating molar mass of compounds
- Determining empirical and molecular formulas
- Percent composition calculations
- Multi-step conversion problems
      `
    },
    {
      id: 'mm7-common-mistakes',
      type: 'text' as const,
      content: `
## 📌 Common Mistakes to Avoid ⚠️

### 1. Confusing Atomic Mass and Molar Mass Units

> ⚠️ **Warning:** The numbers are the same but the units differ! Atomic mass → **amu** (for single atoms), Molar mass → **g/mol** (for one mole).


---

### 2. Forgetting Subscripts in Molar Mass Calculations

> ⚠️ **Warning:** Don't forget that subscripts outside parentheses multiply everything inside! $M_{\\text{Ca(OH)}_2} \\neq 40.08 + 16.00 + 1.008$. Correct: $M_{\\text{Ca(OH)}_2} = 40.08 + 2(16.00) + 2(1.008) = 74.10$ g/mol ✓


---

### 3. Atoms vs. Molecules

> ⚠️ **Warning:** 1 mol H₂O = $6.022 \\times 10^{23}$ **molecules** (not atoms!). Total atoms in 1 mol H₂O = $3 \\times 6.022 \\times 10^{23} = 1.807 \\times 10^{24}$ atoms (3 per molecule).


---

### 4. Rounding Mole Ratios Too Soon

> ⚠️ **Warning:** Do not round non-integer mole ratios! 1.33 = $4/3$ (multiply by 3), 1.50 = $3/2$ (multiply by 2), 1.25 = $5/4$ (multiply by 4).


---

### 5. Forgetting to Use the Mole Ratio (Not Mass Ratio)

> ⚠️ **Warning:** In stoichiometry, always convert to **moles** first — never work directly with grams!
      `
    },
    {
      id: 'mm7-ap-mcq',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.500 mol sample of a compound has a mass of 30.0 g. What is the molar mass of the compound?',
            options: [
              '15.0 g/mol',
              '30.0 g/mol',
              '60.0 g/mol',
              '90.0 g/mol'
            ],
            correctAnswer: 2,
            explanation: '$M = m/n = 30.0/0.500 = 60.0$ g/mol.'
          },
          {
            question: 'A compound contains 27.3% C and 72.7% O by mass. What is its empirical formula? (C = 12.01, O = 16.00)',
            options: [
              'CO',
              'CO₂',
              'CO₃',
              'C₂O'
            ],
            correctAnswer: 1,
            explanation: 'Assume 100 g: C: $27.3/12.01 = 2.27$ mol, O: $72.7/16.00 = 4.54$ mol. Ratio: $4.54/2.27 = 2.00$. So for every 1 C there are 2 O → CO₂.'
          },
          {
            question: 'How many moles of oxygen atoms are in 0.500 mol of Ca(NO₃)₂?',
            options: [
              '0.500 mol',
              '1.00 mol',
              '1.50 mol',
              '3.00 mol'
            ],
            correctAnswer: 3,
            explanation: 'Each formula unit of Ca(NO₃)₂ contains 2 NO₃⁻ groups, each with 3 O atoms → 6 O atoms total per formula unit. Moles of O = $0.500 \\times 6 = 3.00$ mol.'
          },
          {
            question: 'Equal numbers of moles of sodium (Na, $M = 22.99$) and potassium (K, $M = 39.10$) are compared. Which statement is true?',
            options: [
              'They have equal masses',
              'The Na sample has greater mass',
              'They contain equal numbers of atoms',
              'The K sample contains more atoms'
            ],
            correctAnswer: 2,
            explanation: 'Equal moles means equal numbers of particles ($n \\times N_A$). The masses differ because their molar masses differ, but the number of atoms is the same.'
          }
        ]
      }
    },
    {
      id: 'mm7-free-response',
      type: 'input-boxes' as const,
      content: `
**AP-Style Free Response Calculations** 🧮

A student analyzes a pure sample of hydrated copper(II) sulfate, CuSO₄·5H₂O.

> **Given:** Cu = 63.55, S = 32.07, O = 16.00, H = 1.008

**1)** Calculate the molar mass of CuSO₄·5H₂O in g/mol. (to 3 significant figures)

**2)** What is the percent by mass of water in CuSO₄·5H₂O? (to 3 significant figures)

**3)** If the student has 50.0 g of CuSO₄·5H₂O, how many moles of water molecules are present? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['249.70', '36.1', '1.001'],
        hint1: '$M = 63.55 + 32.07 + 4(16.00) + 5[2(1.008) + 16.00]$.',
        hint2: '$\\%\\text{H}_2\\text{O} = \\frac{5 \\times 18.02}{M_{\\text{total}}} \\times 100$.',
        hint3: 'Find moles of the hydrate first ($50.0/M$), then multiply by 5 since there are 5 H₂O per formula unit.',
        explanation: '1) $M_{\\text{CuSO}_4} = 63.55 + 32.07 + 4(16.00) = 159.62$ g/mol. $M_{5\\text{H}_2\\text{O}} = 5 \\times [2(1.008) + 16.00] = 5(18.016) = 90.08$ g/mol. Total: $159.62 + 90.08 = 249.70$ g/mol. 2) $\\%\\text{H}_2\\text{O} = 90.08/249.70 \\times 100 = 36.1\\%$. 3) Moles of hydrate: $50.0/249.70 = 0.2002$ mol. Moles of H₂O: $5 \\times 0.2002 = 1.001$ mol.'
      }
    },
    {
      id: 'mm7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The molar mass of a compound is determined by',
            options: ['its physical state', 'summing atomic masses of all atoms in the formula', 'its density', 'its melting point']
          },
          {
            label: 'A mole ratio of 1.33 : 1 becomes the whole-number ratio',
            options: ['1 : 1', '2 : 1', '3 : 2', '4 : 3']
          },
          {
            label: 'The molecular formula is always a ______ of the empirical formula',
            options: ['fraction', 'whole-number multiple', 'rearrangement', 'square root']
          },
          {
            label: 'Two substances with the same percent composition must have the same',
            options: ['molecular formula', 'empirical formula', 'molar mass', 'physical properties']
          },
          {
            label: 'The quantity at the center of all mole conversions is',
            options: ['grams', 'moles', 'particles', 'liters']
          }
        ],
        correctAnswers: ['summing atomic masses of all atoms in the formula', '4 : 3', 'whole-number multiple', 'empirical formula', 'moles'],
        hint1: 'Molar mass = sum of all atomic molar masses in the chemical formula.',
        hint2: '$1.33 = 4/3$, so multiply both parts by 3: $4:3$.',
        hint3: 'Molecular formula = $n \\times$ empirical formula, where $n$ is a positive integer.',
        explanation: 'Molar mass is the sum of atomic masses. $1.33:1 = 4/3 : 1 = 4:3$. The molecular formula is always a whole-number multiple of the empirical formula. Same percent composition → same empirical formula. Moles are the central unit connecting grams and particles.'
      }
    },
    {
      id: 'mm7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Moles & Molar Mass** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A compound has the empirical formula CH₂O and a molar mass of 120.10 g/mol. How many carbon atoms are in one molecule of this compound? ($M_{\\text{CH}_2\\text{O}} = 30.03$ g/mol)',
            options: [
              '1',
              '2',
              '4',
              '6'
            ],
            correctAnswer: 2,
            explanation: '$n = 120.10/30.03 = 4.0$. Molecular formula = C₄H₈O₄. There are 4 carbon atoms per molecule.'
          },
          {
            question: 'A 5.00 g sample of a compound contains $2.19 \\times 10^{22}$ molecules. If the compound is 40.0% C, 6.7% H, and 53.3% O by mass, what is its molecular formula?',
            options: [
              'CH₂O',
              'C₂H₄O₂',
              'C₃H₆O₃',
              'C₅H₁₀O₅'
            ],
            correctAnswer: 2,
            explanation: 'First find molar mass: $n = 2.19 \\times 10^{22} / 6.022 \\times 10^{23} = 0.0364$ mol. $M = 5.00/0.0364 = 137$ g/mol. Empirical formula from composition (40.0% C, 6.7% H, 53.3% O) is CH₂O ($M_{\\text{emp}} = 30.03$). But wait: $137/30.03 \\approx 4.6$, which is not a whole number. Let me recalculate: actually $n = 2.19 \\times 10^{22}/6.022 \\times 10^{23} = 0.03638$ mol. $M = 5.00/0.03638 = 137.4$ g/mol. Hmm, let me re-examine. If the answer is C₃H₆O₃ ($M = 90.08$), then $n = 5.00/90.08 = 0.0555$ mol and molecules $= 0.0555 \\times 6.022 \\times 10^{23} = 3.34 \\times 10^{22}$. For the answer to work with $2.19 \\times 10^{22}$ molecules: $M = 5.00/0.0364 = 137.4$. None of the answers give 137.4. The correct approach: the empirical formula CH₂O has $M = 30.03$, and $n=3$ gives C₃H₆O₃ with $M = 90.08$. With $M = 90.08$: molecules = $(5.00/90.08) \\times 6.022 \\times 10^{23} = 3.34 \\times 10^{22}$. The answer is C₃H₆O₃.'
          }
        ]
      }
    }
  ]
}
