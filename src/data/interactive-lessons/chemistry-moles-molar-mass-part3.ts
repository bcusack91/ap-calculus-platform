export const chemMolesMolarMassPart3Data = {
  topicSlug: 'moles-molar-mass',
  sections: [
    {
      id: 'mm3-intro',
      type: 'text' as const,
      content: `
# 🔄 Mole-Mass Conversions

**Part 3 of 7 — Grams, Moles, and Particles**

You now know what a mole is and what molar mass means. The next step is the most practical skill in chemistry: **converting between grams, moles, and particles**. This is the foundation of all stoichiometry.
      `
    },
    {
      id: 'mm3-grams-to-moles',
      type: 'text' as const,
      content: `
## Grams → Moles

To convert from grams to moles, divide by the molar mass:

$$n = \\frac{m}{M}$$

where $n$ = moles, $m$ = mass in grams, $M$ = molar mass in g/mol.

### Example 1

> **Problem:** How many moles are in 36.04 g of water (H₂O)?

**Solution:**

$$\\text{mol H}_2\\text{O} = 36.04 \\; \\cancel{\\text{g H}_2\\text{O}} \\times \\frac{1 \\text{ mol H}_2\\text{O}}{18.02 \\; \\cancel{\\text{g H}_2\\text{O}}} = 2.000 \\text{ mol H}_2\\text{O}$$

### Example 2

> **Problem:** How many moles are in 100.0 g of NaCl? ($M = 58.44$ g/mol)

**Solution:**

$$\\text{mol NaCl} = 100.0 \\; \\cancel{\\text{g NaCl}} \\times \\frac{1 \\text{ mol NaCl}}{58.44 \\; \\cancel{\\text{g NaCl}}} = 1.711 \\text{ mol NaCl}$$

## Moles → Grams

To convert from moles to grams, multiply by the molar mass:

$$m = n \\times M$$

### Example 3

> **Problem:** What is the mass of 0.250 mol of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$, $M = 180.16$ g/mol)?

**Solution:**

$$\\text{g C}_6\\text{H}_{12}\\text{O}_6 = 0.250 \\; \\cancel{\\text{mol C}_6\\text{H}_{12}\\text{O}_6} \\times \\frac{180.16 \\text{ g C}_6\\text{H}_{12}\\text{O}_6}{1 \\; \\cancel{\\text{mol C}_6\\text{H}_{12}\\text{O}_6}} = 45.04 \\text{ g C}_6\\text{H}_{12}\\text{O}_6$$
      `
    },
    {
      id: 'mm3-multi-step',
      type: 'text' as const,
      content: `
## Multi-Step Conversions: Grams ↔ Moles ↔ Particles

Often you need to go from **grams to particles** (or vice versa). This requires two steps:

$$\\text{grams} \\xrightarrow{\\div M} \\text{moles} \\xrightarrow{\\times N_A} \\text{particles}$$

$$\\text{particles} \\xrightarrow{\\div N_A} \\text{moles} \\xrightarrow{\\times M} \\text{grams}$$

### Example: Grams → Particles

> **Problem:** How many molecules are in 9.01 g of H₂O?

**Solution:**

**Step 1:** Convert grams to moles:

$$\\text{mol H}_2\\text{O} = 9.01 \\; \\cancel{\\text{g H}_2\\text{O}} \\times \\frac{1 \\text{ mol H}_2\\text{O}}{18.02 \\; \\cancel{\\text{g H}_2\\text{O}}} = 0.500 \\text{ mol H}_2\\text{O}$$

**Step 2:** Convert moles to molecules:

$$\\text{molecules of H}_2\\text{O} = 0.500 \\; \\cancel{\\text{mol H}_2\\text{O}} \\times \\frac{6.022 \\times 10^{23} \\text{ molecules H}_2\\text{O}}{1 \\; \\cancel{\\text{mol H}_2\\text{O}}} = 3.011 \\times 10^{23} \\text{ molecules H}_2\\text{O}$$

### Example: Particles → Grams

> **Problem:** What is the mass of $1.505 \\times 10^{24}$ atoms of iron (Fe, $M = 55.85$ g/mol)?

**Solution:**

**Step 1:** Convert atoms to moles:

$$n = 1.505 \\times 10^{24} \\; \\cancel{\\text{atoms Fe}} \\times \\frac{1 \\text{ mol Fe}}{6.022 \\times 10^{23} \\; \\cancel{\\text{atoms Fe}}} = 2.50 \\text{ mol Fe}$$

**Step 2:** Convert moles to grams:

$$m = 2.50 \\; \\cancel{\\text{mol Fe}} \\times \\frac{55.85 \\text{ g Fe}}{1 \\; \\cancel{\\text{mol Fe}}} = 139.6 \\text{ g Fe}$$
      `
    },
    {
      id: 'mm3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Conversion Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To convert from grams to moles, you:',
            options: [
              'Multiply by the molar mass',
              'Divide by the molar mass',
              'Multiply by Avogadro\'s number',
              'Divide by Avogadro\'s number'
            ],
            correctAnswer: 1,
            explanation: '$n = m / M$. Dividing mass by molar mass gives moles. Think of units: $\\text{g} \\div \\text{g/mol} = \\text{mol}$.'
          },
          {
            question: 'How many grams are in 3.00 mol of CO₂ ($M = 44.01$ g/mol)?',
            options: [
              '14.67 g',
              '44.01 g',
              '88.02 g',
              '132.03 g'
            ],
            correctAnswer: 3,
            explanation: '$m = n \\times M = 3.00 \\times 44.01 = 132.03$ g.'
          },
          {
            question: 'To convert grams directly to number of particles, you need:',
            options: [
              'Only the molar mass',
              'Only Avogadro\'s number',
              'Both the molar mass and Avogadro\'s number',
              'The density of the substance'
            ],
            correctAnswer: 2,
            explanation: 'Grams → moles (divide by $M$) → particles (multiply by $N_A$). Both conversion factors are needed.'
          }
        ]
      }
    },
    {
      id: 'mm3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Mole-Mass Conversion Drill** 🧮

> **Given Atomic Masses (g/mol):**
>
> | H | C | O | Na | Cl | Ca |
> |---|---|---|---|---|---|
> | 1.008 | 12.01 | 16.00 | 22.99 | 35.45 | 40.08 |

**1)** How many moles are in 25.0 g of CaCO₃ ($M = 100.09$ g/mol)? (to 3 significant figures)

**2)** What is the mass (in grams) of 0.400 mol of NaCl ($M = 58.44$ g/mol)? (to 3 significant figures)

**3)** How many molecules are in 5.00 g of CO₂ ($M = 44.01$ g/mol)? Express as $a \\times 10^{22}$ — enter $a$ (to 3 significant figures).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.250', '23.38', '6.84'],
        hint1: '$n = m/M = 25.0/100.09$.',
        hint2: '$m = n \\times M = 0.400 \\times 58.44$.',
        hint3: 'First find moles: $5.00/44.01$. Then multiply by $6.022 \\times 10^{23}$.',
        explanation: '1) $n = 25.0/100.09 = 0.2498 \\approx 0.250$ mol. 2) $m = 0.400 \\times 58.44 = 23.38$ g. 3) $n = 5.00/44.01 = 0.1136$ mol; molecules $= 0.1136 \\times 6.022 \\times 10^{23} = 6.84 \\times 10^{22}$.'
      }
    },
    {
      id: 'mm3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Conversion Roadmap — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To go from grams to moles, the conversion factor is',
            options: ['multiply by M', 'divide by M', 'multiply by Nₐ', 'divide by Nₐ']
          },
          {
            label: 'To go from moles to particles, the conversion factor is',
            options: ['multiply by M', 'divide by M', 'multiply by Nₐ', 'divide by Nₐ']
          },
          {
            label: 'To go from particles to grams requires ______ conversion step(s)',
            options: ['one', 'two', 'three', 'zero']
          },
          {
            label: 'If you double the mass of a pure substance, the number of moles',
            options: ['stays the same', 'doubles', 'halves', 'quadruples']
          }
        ],
        correctAnswers: ['divide by M', 'multiply by Nₐ', 'two', 'doubles'],
        hint1: '$n = m/M$ means you divide mass by molar mass.',
        hint2: 'Number of particles = $n \\times N_A$.',
        hint3: 'Particles → moles → grams: that is two steps.',
        explanation: 'Grams to moles: divide by $M$. Moles to particles: multiply by $N_A$. Particles to grams requires two steps (divide by $N_A$, then multiply by $M$). Since $n = m/M$, doubling $m$ doubles $n$.'
      }
    },
    {
      id: 'mm3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Mole-Mass Conversions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student has 90.08 g of water (H₂O, $M = 18.02$ g/mol). How many moles and how many molecules does this represent?',
            options: [
              '5.00 mol, $3.011 \\times 10^{24}$ molecules',
              '4.00 mol, $2.409 \\times 10^{24}$ molecules',
              '5.00 mol, $3.011 \\times 10^{23}$ molecules',
              '2.50 mol, $1.506 \\times 10^{24}$ molecules'
            ],
            correctAnswer: 0,
            explanation: '$n = 90.08/18.02 = 5.00$ mol. Molecules $= 5.00 \\times 6.022 \\times 10^{23} = 3.011 \\times 10^{24}$.'
          },
          {
            question: 'What mass of NaOH ($M = 40.00$ g/mol) contains $3.011 \\times 10^{23}$ formula units?',
            options: [
              '10.0 g',
              '20.0 g',
              '40.0 g',
              '80.0 g'
            ],
            correctAnswer: 1,
            explanation: '$n = 3.011 \\times 10^{23} / 6.022 \\times 10^{23} = 0.500$ mol. $m = 0.500 \\times 40.00 = 20.0$ g.'
          }
        ]
      }
    }
  ]
}
