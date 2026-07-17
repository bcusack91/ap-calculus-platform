export const chemMolesMolarMassPart4Data = {
  topicSlug: 'moles-molar-mass',
  sections: [
    {
      id: 'mm4-intro',
      type: 'text' as const,
      content: `# 📊 Percent Composition

**Part 4 of 7 — What's in Your Compound?**

---

### Topics in This Part

| Section |
|---------|
| 📌 Mass Percent Formula |
| Example 1 |
| Example 2 |
| 🔍 Finding Empirical Formula from Percent Composition |
| Method |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'mm4-definition',
      type: 'text' as const,
      content: `
## 📌 Mass Percent Formula

The **mass percent** of an element in a compound is:

$$\\boxed{\\% \\text{ by mass} = \\frac{\\text{mass of element in 1 mol of compound}}{\\text{molar mass of compound}} \\times 100\\%}$$

> 🔑 **Key Concept:** Percent composition tells you what fraction of a compound's mass comes from each element — essential for identifying unknown compounds.


---

### Example 1

> **Problem:** Find the percent composition of water ($H_{2}O$, $M = 18.02$ g/mol).

**Solution:**

- Mass of H in 1 mol $H_{2}O$: $2(1.008) = 2.016$ g
- Mass of O in 1 mol $H_{2}O$: $1(16.00) = 16.00$ g

$$\\%\\text{H} = \\frac{2.016 \\text{ g H}}{18.02 \\text{ g H}_2\\text{O}} \\times 100\\% = 11.19\\%$$

$$\\%\\text{O} = \\frac{16.00 \\text{ g O}}{18.02 \\text{ g H}_2\\text{O}} \\times 100\\% = 88.79\\%$$

**Check:** $11.19 + 88.79 = 99.98\\% \\approx 100\\%$ ✓ (small rounding difference is fine)


---

### Example 2

> **Problem:** Find the percent composition of glucose ($C_{6}H_{12}O_{6}$, $M = 180.16$ g/mol).

**Solution:**

$$\\%\\text{C} = \\frac{6(12.01) \\text{ g C}}{180.16 \\text{ g C}_6\\text{H}_{12}\\text{O}_6} \\times 100\\% = \\frac{72.06}{180.16} \\times 100\\% = 40.00\\%$$

$$\\%\\text{H} = \\frac{12(1.008) \\text{ g H}}{180.16 \\text{ g C}_6\\text{H}_{12}\\text{O}_6} \\times 100\\% = \\frac{12.10}{180.16} \\times 100\\% = 6.71\\%$$

$$\\%\\text{O} = \\frac{6(16.00) \\text{ g O}}{180.16 \\text{ g C}_6\\text{H}_{12}\\text{O}_6} \\times 100\\% = \\frac{96.00}{180.16} \\times 100\\% = 53.28\\%$$
      `
    },
    {
      id: 'mm4-empirical-from-percent',
      type: 'text' as const,
      content: `
## 🔍 Finding Empirical Formula from Percent Composition

If you know the percent composition, you can determine the **empirical formula** (simplest whole-number ratio of atoms).


---

### Method

> 💡 **Tip:** By assuming exactly 100 g, every percentage converts directly to grams — making the math much simpler!

1. **Assume 100 g** of the compound (so percentages become grams directly)
2. **Convert grams to moles** for each element: $n = m/M$
3. **Divide all by the smallest** mole value to get the ratio
4. **Round** to the nearest whole number (or multiply if you get values like 1.5, 2.5, etc.)


---

### Example

> **Problem:** A compound is 40.0% C, 6.7% H, and 53.3% O by mass. Find the empirical formula.

**Solution:**

**Step 1:** Assume 100 g → 40.0 g C, 6.7 g H, 53.3 g O

**Step 2:** Convert to moles:
- C: $40.0 / 12.01 = 3.33$ mol
- H: $6.7 / 1.008 = 6.65$ mol
- O: $53.3 / 16.00 = 3.33$ mol

**Step 3:** Divide by smallest (3.33):
- C: $3.33/3.33 = 1.00$
- H: $6.65/3.33 = 2.00$
- O: $3.33/3.33 = 1.00$

**Step 4:** Ratio = 1 : 2 : 1 → Empirical formula: **$CH_{2}O$**
      `
    },
    {
      id: 'mm4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Percent Composition Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the percent composition of oxygen in $CO_{2}$? ($M = 44.01$ g/mol)',
            options: [
              '27.29%',
              '36.36%',
              '63.64%',
              '72.71%'
            ],
            correctAnswer: 3,
            explanation: '$\\%\\text{O} = \\frac{2(16.00)}{44.01} \\times 100\\% = \\frac{32.00}{44.01} \\times 100\\% = 72.71\\%$.'
          },
          {
            question: 'When finding an empirical formula from percent composition, the first step is to:',
            options: [
              'Find the molar mass',
              'Assume a 100 g sample',
              'Balance the equation',
              'Calculate the density'
            ],
            correctAnswer: 1,
            explanation: 'Assuming a 100 g sample converts percentages directly to grams, making the calculation straightforward.'
          },
          {
            question: 'A compound has the empirical formula $CH_{2}O$. Which of these could be its molecular formula?',
            options: [
              '$CO_{2}$',
              '$C_{2}H_{4}O$',
              '$C_{2}H_{4}O_{2}$',
              '$C_{3}H_{6}O_{2}$'
            ],
            correctAnswer: 2,
            explanation: 'The molecular formula must be a whole-number multiple of the empirical formula $CH_{2}O$. $\\text{C}_2\\text{H}_4\\text{O}_2 = 2 \\times \\text{CH}_2\\text{O}$ ✓. The other options do not maintain the 1:2:1 ratio.'
          }
        ]
      }
    },
    {
      id: 'mm4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Percent Composition Calculation Drill** 🧮

> **Given:** H = 1.008, C = 12.01, N = 14.01, O = 16.00, S = 32.07

**1)** What is the percent by mass of nitrogen in ammonia ($NH_{3}$, $M = 17.03$ g/mol)? (to 3 significant figures)

**2)** What is the percent by mass of sulfur in $SO_{3}$ ($M = 80.07$ g/mol)? (to 3 significant figures)

**3)** A compound is 85.7% C and 14.3% H by mass. What is the ratio of C to H in the empirical formula? (Enter as a single number: if the ratio is $C_{1}H_{2}$, enter 2)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['82.2', '40.1', '2'],
        hint1: '$\\%\\text{N} = \\frac{14.01}{17.03} \\times 100\\%$.',
        hint2: '$\\%\\text{S} = \\frac{32.07}{80.07} \\times 100\\%$.',
        hint3: 'Assume 100 g: 85.7 g C and 14.3 g H. Convert to moles and divide by the smallest value.',
        explanation: '1) $\\%\\text{N} = 14.01/17.03 \\times 100 = 82.2\\%$. 2) $\\%\\text{S} = 32.07/80.07 \\times 100 = 40.1\\%$. 3) C: $85.7/12.01 = 7.14$ mol; H: $14.3/1.008 = 14.19$ mol. Ratio: $14.19/7.14 = 1.99 \\approx 2$. So the formula is $CH_{2}$ and the H-to-C ratio is 2.'
      }
    },
    {
      id: 'mm4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Percent Composition — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The sum of all mass percents in a compound should equal',
            options: ['50%', '75%', '100%', 'the molar mass']
          },
          {
            label: 'If two compounds have the same empirical formula, they have the same',
            options: ['molar mass', 'percent composition', 'molecular formula', 'density']
          },
          {
            label: 'A compound with a high percent of oxygen by mass will likely have',
            options: ['many oxygen atoms relative to its total mass', 'a low molar mass', 'a high density', 'a high boiling point']
          },
          {
            label: 'When dividing mole ratios gives 1.50, you should multiply all ratios by',
            options: ['1', '2', '3', '4']
          }
        ],
        correctAnswers: ['100%', 'percent composition', 'many oxygen atoms relative to its total mass', '2'],
        hint1: 'All mass percents must account for the total mass of the compound.',
        hint2: 'Compounds with the same empirical formula (like $CH_{2}O$ and $C_{2}H_{4}O_{2}$) have identical percent compositions.',
        hint3: 'Percent composition depends on the fraction of total mass from each element.',
        explanation: 'Mass percents sum to 100%. Same empirical formula → same percent composition. High %O means much of the mass is oxygen. A ratio of 1.50 = 3/2, so multiply by 2 to get whole numbers (e.g., 1.50 → 3).'
      }
    },
    {
      id: 'mm4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Percent Composition** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Aspirin has the formula $C_{9}H_{8}O_{4}$. What is its percent composition of carbon? (C = 12.01, H = 1.008, O = 16.00)',
            options: [
              '40.00%',
              '50.00%',
              '60.00%',
              '75.00%'
            ],
            correctAnswer: 2,
            explanation: '$M = 9(12.01) + 8(1.008) + 4(16.00) = 108.09 + 8.064 + 64.00 = 180.15$ g/mol. $\\%\\text{C} = 108.09/180.15 \\times 100\\% = 60.00\\%$.'
          },
          {
            question: 'A compound is 52.2% C, 13.0% H, and 34.8% O. What is its empirical formula?',
            options: [
              'CHO',
              '$CH_{2}O$',
              '$CH_{3}O$',
              '$C_{2}H_{6}O$'
            ],
            correctAnswer: 3,
            explanation: 'Assume 100 g: C: $52.2/12.01 = 4.35$ mol, H: $13.0/1.008 = 12.90$ mol, O: $34.8/16.00 = 2.175$ mol. Divide by smallest (2.175): C = 2.00, H = 5.93 ≈ 6, O = 1.00. Ratio = 2:6:1 → empirical formula is $C_{2}H_{6}O$ (this is already the simplest ratio since the subscripts share no common factor greater than 1).'
          }
        ]
      }
    }
  ]
}
