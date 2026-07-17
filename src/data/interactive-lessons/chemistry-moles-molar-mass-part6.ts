export const chemMolesMolarMassPart6Data = {
  topicSlug: 'moles-molar-mass',
  sections: [
    {
      id: 'mm6-intro',
      type: 'text' as const,
      content: `# 🧪 Problem-Solving Workshop

**Part 6 of 7 — Multi-Step Conversions & Real-World Applications**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'mm6-conversion-map',
      type: 'text' as const,
      content: `
## ⚖️ The Mole Conversion Map

Here is the complete conversion roadmap you should have memorized:

$$\\boxed{\\text{Particles} \\xleftrightarrow{\\times \\text{ or } \\div \\; N_A} \\text{Moles} \\xleftrightarrow{\\times \\text{ or } \\div \\; M} \\text{Grams}}$$

> 🔑 **Key Concept:** Moles are always at the center of conversions — you must pass through moles to convert between grams and particles.


---

### Key Formulas Summary

| Conversion | Formula |
|-----------|---------|
| Grams → Moles | $n = m / M$ |
| Moles → Grams | $m = n \\times M$ |
| Moles → Particles | $N = n \\times N_A$ |
| Particles → Moles | $n = N / N_A$ |
| Grams → Particles | $N = (m/M) \\times N_A$ |
| Particles → Grams | $m = (N/N_A) \\times M$ |


---

### Strategy for Multi-Step Problems

> 💡 **Tip:** When stuck on a multi-step problem, write down the units of what you have and what you need, then build a conversion path through moles.

1. **Identify** what you are given and what you need to find
2. **Plan** the conversion path (grams → moles → particles, etc.)
3. **Set up** conversion factors so units cancel
4. **Calculate** and check significant figures
5. **Verify** — does the answer make sense?
      `
    },
    {
      id: 'mm6-lab-scenario',
      type: 'text' as const,
      content: `
## 📌 Lab Scenario: Analyzing an Unknown

A student in the lab weighs out 11.0 g of an unknown white solid. Analysis shows it is pure calcium carbonate ($CaCO_{3}$, $M = 100.09$ g/mol).


---

### Questions to Answer

**a) How many moles?**

$$\\text{mol CaCO}_3 = 11.0 \\; \\cancel{\\text{g CaCO}_3} \\times \\frac{1 \\text{ mol CaCO}_3}{100.09 \\; \\cancel{\\text{g CaCO}_3}} = 0.1099 \\text{ mol CaCO}_3$$

**b) How many formula units?**

$$\\text{formula units} = 0.1099 \\; \\cancel{\\text{mol CaCO}_3} \\times \\frac{6.022 \\times 10^{23} \\text{ formula units CaCO}_3}{1 \\; \\cancel{\\text{mol CaCO}_3}} = 6.62 \\times 10^{22} \\text{ formula units CaCO}_3$$

**c) How many total atoms?** ($CaCO_{3}$ has 5 atoms per formula unit: 1 Ca + 1 C + 3 O)

$$\\text{atoms} = 6.62 \\times 10^{22} \\; \\cancel{\\text{formula units CaCO}_3} \\times \\frac{5 \\text{ atoms}}{1 \\; \\cancel{\\text{formula unit CaCO}_3}} = 3.31 \\times 10^{23} \\text{ atoms}$$

**d) How many grams of calcium are in the sample?**

$$\\text{g Ca} = 0.1099 \\; \\cancel{\\text{mol CaCO}_3} \\times \\frac{1 \\; \\cancel{\\text{mol Ca}}}{1 \\; \\cancel{\\text{mol CaCO}_3}} \\times \\frac{40.08 \\text{ g Ca}}{1 \\; \\cancel{\\text{mol Ca}}} = 4.41 \\text{ g Ca}$$

Or using percent composition: $\\%\\text{Ca} = 40.08/100.09 \\times 100 = 40.04\\%$; $m_{\\text{Ca}} = 0.4004 \\times 11.0 = 4.40$ g.
      `
    },
    {
      id: 'mm6-multi-step-quiz',
      type: 'multiple-choice' as const,
      content: `
**Multi-Step Problem Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many oxygen atoms are in 44.0 g of $CO_{2}$ ($M = 44.01$ g/mol)?',
            options: [
              '$6.022 \\times 10^{23}$',
              '$1.204 \\times 10^{24}$',
              '$1.806 \\times 10^{24}$',
              '$3.011 \\times 10^{23}$'
            ],
            correctAnswer: 1,
            explanation: 'Moles of $CO_{2}$: $44.0/44.01 = 1.00$ mol. Molecules: $1.00 \\times 6.022 \\times 10^{23} = 6.022 \\times 10^{23}$. Each $CO_{2}$ has 2 oxygen atoms: $2 \\times 6.022 \\times 10^{23} = 1.204 \\times 10^{24}$ oxygen atoms.'
          },
          {
            question: 'A student needs exactly $3.011 \\times 10^{23}$ molecules of ethanol ($C_{2}H_{5}OH$, $M = 46.07$ g/mol). What mass should they weigh out?',
            options: [
              '11.5 g',
              '23.0 g',
              '46.1 g',
              '92.1 g'
            ],
            correctAnswer: 1,
            explanation: 'Moles: $3.011 \\times 10^{23} / 6.022 \\times 10^{23} = 0.500$ mol. Mass: $0.500 \\times 46.07 = 23.0$ g.'
          },
          {
            question: 'Which sample contains the greatest number of atoms?',
            options: [
              '10.0 g of He ($M = 4.003$)',
              '10.0 g of Ne ($M = 20.18$)',
              '10.0 g of Ar ($M = 39.95$)',
              '10.0 g of Fe ($M = 55.85$)'
            ],
            correctAnswer: 0,
            explanation: 'For monatomic elements, more moles = more atoms. He: $10.0/4.003 = 2.50$ mol. Ne: $10.0/20.18 = 0.496$ mol. Ar: $10.0/39.95 = 0.250$ mol. Fe: $10.0/55.85 = 0.179$ mol. He has the most moles and therefore the most atoms.'
          }
        ]
      }
    },
    {
      id: 'mm6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Calculation Drill** 🧮

> **Given:** H = 1.008, C = 12.01, N = 14.01, O = 16.00, Na = 22.99, Cl = 35.45, Fe = 55.85

**1)** How many grams of iron (Fe) contain the same number of atoms as 12.01 g of carbon (C)? (to 3 significant figures)

**2)** A chemist has 25.0 g of NaCl ($M = 58.44$). How many chloride ions ($\\text{Cl}^-$) are present? Express as $a \\times 10^{23}$ — enter $a$ (to 3 significant figures).

**3)** How many hydrogen atoms are in 36.04 g of water ($M_{\\text{H}_2\\text{O}} = 18.02$)? Express as $a \\times 10^{24}$ — enter $a$ (to 3 significant figures).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['55.85', '2.57', '2.409'],
        hint1: '12.01 g of C = 1.000 mol of C. You need 1.000 mol of Fe.',
        hint2: 'Moles of NaCl = $25.0/58.44$. Each formula unit has 1 $Cl^{-}$, so multiply moles by $N_A$.',
        hint3: 'Moles of $H_{2}O$ = $36.04/18.02 = 2.00$ mol. Each molecule has 2 H atoms.',
        explanation: '1) $12.01$ g C $= 1.000$ mol C $= 6.022 \\times 10^{23}$ atoms. We need the same number of Fe atoms, which is $1.000$ mol Fe $= 55.85$ g. 2) $n = 25.0/58.44 = 0.4278$ mol NaCl → $0.4278$ mol $Cl^{-}$. $N = 0.4278 \\times 6.022 \\times 10^{23} = 2.576 \\times 10^{23}$, so $a = 2.57$. 3) $2.00$ mol $H_{2}O$ $\\times 6.022 \\times 10^{23} = 1.2044 \\times 10^{24}$ molecules $\\times 2 = 2.409 \\times 10^{24}$ H atoms.'
      }
    },
    {
      id: 'mm6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Problem-Solving Strategy — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find the number of atoms in a given mass, the conversion path is',
            options: ['grams → particles → moles', 'grams → moles → particles', 'particles → grams → moles', 'moles → grams → particles']
          },
          {
            label: 'In 1 mol of $H_{2}SO_{4}$, the total number of atoms is',
            options: ['3', '7', '3 × $6.022 \\times 10^{23}$', '7 × $6.022 \\times 10^{23}$']
          },
          {
            label: 'Equal masses of aluminum ($M = 26.98$) and iron ($M = 55.85$) contain',
            options: ['equal moles', 'more moles of Al', 'more moles of Fe', 'equal atoms']
          },
          {
            label: 'The mass of one atom of carbon-12 in grams is $12.01 / N_A$, which is approximately',
            options: ['$1.99 \\times 10^{-23}$ g', '$2.00 \\times 10^{-23}$ g', '$1.99 \\times 10^{-22}$ g', '$6.02 \\times 10^{-23}$ g']
          }
        ],
        correctAnswers: ['grams → moles → particles', '7 × $6.022 \\times 10^{23}$', 'more moles of Al', '$1.99 \\times 10^{-23}$ g'],
        hint1: 'You always go through moles as the central hub.',
        hint2: '$H_{2}SO_{4}$ has 2 H + 1 S + 4 O = 7 atoms per formula unit.',
        hint3: 'Smaller molar mass means more moles per gram.',
        explanation: 'Grams → moles → particles is the correct path. $H_{2}SO_{4}$ has 7 atoms per molecule, so 1 mol has $7 \\times N_A$ atoms. Al has a lower molar mass, so equal masses yield more moles of Al. $12.01/(6.022 \\times 10^{23}) = 1.994 \\times 10^{-23}$ g per atom.'
      }
    },
    {
      id: 'mm6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 10.0 g sample of a compound contains $1.505 \\times 10^{23}$ molecules. What is the molar mass of the compound?',
            options: [
              '20.0 g/mol',
              '40.0 g/mol',
              '60.0 g/mol',
              '80.0 g/mol'
            ],
            correctAnswer: 1,
            explanation: 'Moles: $1.505 \\times 10^{23} / 6.022 \\times 10^{23} = 0.250$ mol. Molar mass: $M = m/n = 10.0/0.250 = 40.0$ g/mol.'
          },
          {
            question: 'How many grams of oxygen are in 50.0 g of calcium carbonate ($CaCO_{3}$, $M = 100.09$ g/mol)?',
            options: [
              '16.0 g',
              '24.0 g',
              '32.0 g',
              '48.0 g'
            ],
            correctAnswer: 1,
            explanation: 'Moles of $CaCO_{3}$: $50.0/100.09 = 0.4996$ mol. Each $CaCO_{3}$ has 3 O atoms, so moles of O: $3 \\times 0.4996 = 1.499$ mol. Mass of O: $1.499 \\times 16.00 = 24.0$ g. Or by percent: $\\%O = 3(16.00)/100.09 = 47.96\\%$; $0.4796 \\times 50.0 = 24.0$ g.'
          }
        ]
      }
    }
  ]
}
