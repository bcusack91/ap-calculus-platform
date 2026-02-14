export const chemSolutionsSolubilityPart2Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss2-intro',
      type: 'text' as const,
      content: `
# 📏 Concentration Units

**Part 2 of 7 — Molarity, Molality, Mass Percent, Mole Fraction, and ppm**

There are many ways to express how much solute is dissolved in a solution. Each concentration unit has specific advantages depending on the context — molarity for stoichiometry, molality for colligative properties, and ppm for trace analysis.
      `
    },
    {
      id: 'ss2-molarity',
      type: 'text' as const,
      content: `
## Molarity ($M$)

**Molarity** is the most commonly used concentration unit in chemistry.

$$M = \\frac{\\text{moles of solute}}{\\text{liters of solution}}$$

### Units: mol/L (or simply $M$)

### Example

Dissolve 4.00 g of NaOH ($M_{\\text{NaOH}} = 40.00$ g/mol) in enough water to make 500.0 mL of solution.

$$n = \\frac{4.00}{40.00} = 0.100 \\text{ mol}$$

$$M = \\frac{0.100 \\text{ mol}}{0.5000 \\text{ L}} = 0.200 \\text{ M}$$

### Key Points

- Molarity depends on **volume of solution** (not volume of solvent)
- Molarity changes with temperature because volume changes with temperature
- Most useful for **stoichiometry** in solution: moles = $M \\times V$(in liters)
      `
    },
    {
      id: 'ss2-molality',
      type: 'text' as const,
      content: `
## Molality ($m$)

$$m = \\frac{\\text{moles of solute}}{\\text{kilograms of solvent}}$$

### Units: mol/kg (or simply $m$)

### Example

Dissolve 18.0 g of glucose ($M_{\\text{glucose}} = 180.16$ g/mol) in 250.0 g of water.

$$n = \\frac{18.0}{180.16} = 0.0999 \\text{ mol}$$

$$m = \\frac{0.0999 \\text{ mol}}{0.2500 \\text{ kg}} = 0.400 \\; m$$

### Why Molality?

- Molality depends on **mass of solvent**, which does **not** change with temperature
- This makes molality ideal for **colligative property** calculations (boiling point elevation, freezing point depression)
- On the AP exam, colligative property formulas use molality, not molarity
      `
    },
    {
      id: 'ss2-other-units',
      type: 'text' as const,
      content: `
## Other Concentration Units

### Mass Percent (Weight Percent)

$$\\text{mass \\%} = \\frac{\\text{mass of solute}}{\\text{mass of solution}} \\times 100\\%$$

Example: 5.0 g NaCl in 95.0 g H₂O → mass% = $\\frac{5.0}{5.0 + 95.0} \\times 100 = 5.0\\%$

### Mole Fraction ($\\chi$)

$$\\chi_A = \\frac{n_A}{n_A + n_B + \\cdots}$$

- Mole fraction is **unitless** and always between 0 and 1
- The sum of all mole fractions in a solution equals **1**
- Used in Raoult\'s law and gas law calculations

### Parts Per Million (ppm)

$$\\text{ppm} = \\frac{\\text{mass of solute}}{\\text{mass of solution}} \\times 10^6$$

- Used for very dilute solutions (trace contaminants, water quality)
- 1 ppm = 1 mg solute per 1 kg solution (for dilute aqueous solutions, 1 ppm ≈ 1 mg/L)

### Summary Table

| Unit | Formula | Temperature Dependent? | Best Used For |
|------|---------|----------------------|---------------|
| Molarity ($M$) | mol solute / L solution | Yes | Stoichiometry |
| Molality ($m$) | mol solute / kg solvent | No | Colligative properties |
| Mass % | (mass solute / mass solution) × 100 | No | General, industry |
| Mole fraction ($\\chi$) | mol A / total mol | No | Raoult\'s law, gases |
| ppm | (mass solute / mass solution) × 10⁶ | No | Trace analysis |
      `
    },
    {
      id: 'ss2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concentration Unit Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concentration unit is temperature-dependent?',
            options: [
              'Molality',
              'Molarity',
              'Mass percent',
              'Mole fraction'
            ],
            correctAnswer: 1,
            explanation: 'Molarity (mol/L) depends on volume, which expands or contracts with temperature. Molality, mass percent, and mole fraction all depend on mass, which is independent of temperature.'
          },
          {
            question: 'Which concentration unit is most appropriate for calculating boiling point elevation?',
            options: [
              'Molarity',
              'Molality',
              'Mass percent',
              'ppm'
            ],
            correctAnswer: 1,
            explanation: 'Colligative property formulas ($\\Delta T_b = iK_bm$) use molality because it is temperature-independent. As the solution heats up, molality stays constant while molarity would change.'
          },
          {
            question: 'A solution is made by dissolving 0.50 mol of KCl in 2.0 L of solution. What is the molarity?',
            options: [
              '0.10 M',
              '0.25 M',
              '0.50 M',
              '1.0 M'
            ],
            correctAnswer: 1,
            explanation: '$M = \\frac{\\text{mol}}{\\text{L}} = \\frac{0.50}{2.0} = 0.25$ M.'
          }
        ]
      }
    },
    {
      id: 'ss2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Concentration Calculations** 🧮

Use: Na = 22.99, Cl = 35.45, O = 16.00, H = 1.008, C = 12.01

1) What is the molarity of a solution prepared by dissolving 11.7 g of NaCl ($M = 58.44$ g/mol) in water to make 250.0 mL of solution? (to 3 significant figures, in mol/L)

2) What is the molality of a solution made by dissolving 36.0 g of glucose ($M = 180.16$ g/mol) in 500.0 g of water? (to 3 significant figures, in mol/kg)

3) What is the mass percent of a solution containing 8.0 g of NaOH in 200.0 g of solution? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.800', '0.400', '4.0', '0.8000', '0.80', '0.4000', '0.40', '4.00'],
        hint1: '$M = n/V$. Find moles: $n = 11.7/58.44$. Volume in liters: $0.2500$ L.',
        hint2: '$m = n/\\text{kg solvent}$. Find moles: $n = 36.0/180.16$. Solvent mass in kg: $0.5000$ kg.',
        hint3: 'Mass % = (mass solute / mass solution) × 100 = $(8.0/200.0) \\times 100$.',
        explanation: '1) $n = 11.7/58.44 = 0.2002$ mol. $M = 0.2002/0.2500 = 0.800$ M. 2) $n = 36.0/180.16 = 0.1998$ mol. $m = 0.1998/0.5000 = 0.400$ m. 3) Mass % = $(8.0/200.0) \\times 100 = 4.0\\%$.'
      }
    },
    {
      id: 'ss2-mole-fraction',
      type: 'text' as const,
      content: `
## Mole Fraction Worked Example

**Problem:** A solution contains 46.0 g of ethanol (C₂H₅OH, $M = 46.07$ g/mol) and 72.0 g of water ($M = 18.02$ g/mol). Calculate the mole fraction of ethanol.

**Step 1:** Moles of ethanol: $n_{\\text{eth}} = 46.0/46.07 = 0.9985$ mol

**Step 2:** Moles of water: $n_{\\text{H}_2\\text{O}} = 72.0/18.02 = 3.996$ mol

**Step 3:** Mole fraction of ethanol:

$$\\chi_{\\text{eth}} = \\frac{0.9985}{0.9985 + 3.996} = \\frac{0.9985}{4.995} = 0.200$$

**Check:** $\\chi_{\\text{H}_2\\text{O}} = 3.996/4.995 = 0.800$. And $0.200 + 0.800 = 1.000$ ✓
      `
    },
    {
      id: 'ss2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Concentration Units — Identify and Apply** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A water quality report states lead content as 15 μg/L. This is best expressed in',
            options: ['Molarity', 'Molality', 'Mass percent', 'ppm or ppb']
          },
          {
            label: 'If the mole fraction of solute is 0.10, the mole fraction of solvent is',
            options: ['0.10', '0.90', '1.00', '0.010']
          },
          {
            label: '2.0 M NaCl means there are 2.0 moles of NaCl per',
            options: ['kilogram of water', 'liter of solution', 'liter of water', 'kilogram of solution']
          },
          {
            label: 'A 10.0% by mass glucose solution contains 10.0 g glucose per',
            options: ['100 g solution', '100 g water', '1 L solution', '1 kg water']
          }
        ],
        correctAnswers: ['ppm or ppb', '0.90', 'liter of solution', '100 g solution', '0.900', '0.9'],
        hint1: 'Trace quantities like μg/L are in the parts-per-million or parts-per-billion range.',
        hint2: 'Mole fractions must sum to 1.',
        hint3: 'Molarity is defined as moles per liter of solution.',
        explanation: 'Trace contaminants use ppm/ppb. Mole fractions sum to 1: $1.00 - 0.10 = 0.90$. Molarity is mol/L of solution. Mass percent is g solute per 100 g of solution.'
      }
    },
    {
      id: 'ss2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Concentration Units** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A solution is prepared by dissolving 90.0 g of glucose ($M = 180.16$ g/mol) in 500.0 g of water. What is the molality?',
            options: [
              '0.500 m',
              '0.999 m',
              '1.00 m',
              '1.80 m'
            ],
            correctAnswer: 1,
            explanation: '$n = 90.0/180.16 = 0.4996$ mol. $m = 0.4996/0.5000 = 0.999$ m ≈ $1.00$ m. The answer with proper sig figs is 0.999 m.'
          },
          {
            question: 'How many grams of KOH ($M = 56.11$ g/mol) are needed to prepare 2.00 L of 0.500 M solution?',
            options: [
              '28.1 g',
              '56.1 g',
              '112 g',
              '14.0 g'
            ],
            correctAnswer: 1,
            explanation: 'Moles needed: $n = M \\times V = 0.500 \\times 2.00 = 1.00$ mol. Mass: $m = 1.00 \\times 56.11 = 56.1$ g.'
          }
        ]
      }
    }
  ]
}
