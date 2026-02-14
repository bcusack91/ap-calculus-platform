export const chemStoichiometryLimitingReactantsPart7Data = {
  topicSlug: 'stoichiometry-limiting-reactants',
  sections: [
    {
      id: 'sl7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Comprehensive Stoichiometry Problems & AP Exam Strategies**

This final part challenges you with AP-level stoichiometry problems that combine every concept: mole ratios, mass-to-mass conversions, limiting reactants, percent yield, and solution stoichiometry. Master these, and you\'re ready for the AP exam.
      `
    },
    {
      id: 'sl7-summary',
      type: 'text' as const,
      content: `
## Complete Stoichiometry Toolkit

| Concept | Key Formula |
|---------|-------------|
| Moles from grams | $n = m / M$ |
| Moles from solution | $n = M_{\\text{soln}} \\times V$ |
| Mole-to-mole conversion | $n_B = n_A \\times (\\text{coeff}_B / \\text{coeff}_A)$ |
| Grams from moles | $m = n \\times M$ |
| Limiting reactant | Compare mol product from each reactant |
| Theoretical yield | From limiting reactant calculation |
| Percent yield | $\\% = (\\text{actual} / \\text{theoretical}) \\times 100$ |
| Excess remaining | Initial − consumed |

## AP Exam Tips

1. **Show your work** — AP graders want to see the setup, not just the answer
2. **Use dimensional analysis** — set up conversion factors so units cancel
3. **Significant figures** — match the least precise measurement
4. **Label everything** — always include units and chemical formulas
5. **Check your answer** — does the magnitude make sense?
6. **Common mistake**: forgetting to balance the equation before using mole ratios
      `
    },
    {
      id: 'sl7-ap-scenario-1',
      type: 'text' as const,
      content: `
## AP-Style Problem Walkthrough

**Problem:** A student reacts 25.0 mL of 0.400 M Pb(NO₃)₂ with 35.0 mL of 0.300 M KI. Find the mass of PbI₂ precipitate formed.

$$\\text{Pb(NO}_3)_2(\\text{aq}) + 2\\text{KI}(\\text{aq}) \\rightarrow \\text{PbI}_2(\\text{s}) + 2\\text{KNO}_3(\\text{aq})$$

$M_{\\text{PbI}_2} = 461.0$ g/mol

### Step 1: Find Moles

- mol Pb(NO₃)₂ = $0.400 \\times 0.0250 = 0.0100$ mol
- mol KI = $0.300 \\times 0.0350 = 0.0105$ mol

### Step 2: Limiting Reactant

- From Pb(NO₃)₂: $0.0100 \\times 1/1 = 0.0100$ mol PbI₂
- From KI: $0.0105 \\times 1/2 = 0.00525$ mol PbI₂
- KI produces less → **KI is limiting**

### Step 3: Mass of PbI₂

$$m = 0.00525 \\times 461.0 = 2.42 \\text{ g PbI}_2$$

### Key Insight

Even though we had fewer moles of Pb(NO₃)₂ initially (0.0100 vs 0.0105), KI was limiting because the reaction requires **2 mol KI per 1 mol Pb(NO₃)₂**.
      `
    },
    {
      id: 'sl7-ap-quiz-1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$, 10.0 g of CaCO₃ ($M = 100.1$) reacts with excess HCl. What volume of CO₂ is produced at STP (1 mol gas = 22.4 L)?',
            options: [
              '1.12 L',
              '2.24 L',
              '11.2 L',
              '22.4 L'
            ],
            correctAnswer: 1,
            explanation: 'Moles CaCO₃: 10.0/100.1 = 0.0999 mol. Mole ratio 1:1 → 0.0999 mol CO₂. Volume at STP: 0.0999 × 22.4 = 2.24 L.'
          },
          {
            question: 'A student obtains 3.50 g of a product with a theoretical yield of 5.00 g. The percent yield is:',
            options: [
              '35.0%',
              '50.0%',
              '70.0%',
              '142.9%'
            ],
            correctAnswer: 2,
            explanation: '$\\% \\text{ yield} = (3.50/5.00) \\times 100 = 70.0\\%$.'
          },
          {
            question: 'In a titration, 15.0 mL of 0.100 M Ba(OH)₂ neutralizes 30.0 mL of HCl. The molarity of HCl is:',
            options: [
              '0.050 M',
              '0.100 M',
              '0.200 M',
              '0.300 M'
            ],
            correctAnswer: 1,
            explanation: '$\\text{Ba(OH)}_2 + 2\\text{HCl} \\rightarrow \\text{BaCl}_2 + 2\\text{H}_2\\text{O}$. Mol Ba(OH)₂ = 0.100 × 0.0150 = 0.00150 mol. Mol HCl = 0.00150 × 2 = 0.00300 mol. M(HCl) = 0.00300/0.0300 = 0.100 M.'
          },
          {
            question: 'Which of the following is NOT needed to solve a limiting reactant problem?',
            options: [
              'A balanced chemical equation',
              'The amounts of each reactant',
              'The molar masses of the reactants',
              'The color of the reactants'
            ],
            correctAnswer: 3,
            explanation: 'Limiting reactant problems require: a balanced equation (for mole ratios), amounts of each reactant, and molar masses (to convert grams to moles). The color is irrelevant to stoichiometric calculations.'
          }
        ]
      }
    },
    {
      id: 'sl7-comprehensive-drill',
      type: 'input-boxes' as const,
      content: `
**Comprehensive Stoichiometry Drill** 🧮

Given: $2\\text{Al} + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2$

$M_{\\text{Al}} = 26.98$, $M_{\\text{HCl}} = 36.46$, $M_{\\text{AlCl}_3} = 133.34$, $M_{\\text{H}_2} = 2.016$

A student reacts 13.49 g of Al with 109.4 g of HCl. Percent yield = 90%.

1) The limiting reactant is which? Type **Al** or **HCl**.

2) What is the theoretical yield of AlCl₃ in grams? (to 1 decimal place)

3) What is the actual yield of AlCl₃ in grams? (to 1 decimal place)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Al', '66.7', '60.0'],
        hint1: 'Mol Al = 13.49/26.98 = 0.500. Mol HCl = 109.4/36.46 = 3.000. From Al: 0.500 × 2/2 = 0.500 mol AlCl₃. From HCl: 3.000 × 2/6 = 1.000 mol AlCl₃. Which produces less?',
        hint2: 'Theoretical = 0.500 × 133.34.',
        hint3: 'Actual = theoretical × 0.90.',
        explanation: '1) Mol Al = 0.500 → 0.500 mol AlCl₃. Mol HCl = 3.000 → 1.000 mol AlCl₃. Al produces less → Al is limiting. 2) Theoretical: 0.500 × 133.34 = 66.7 g. 3) Actual: 66.7 × 0.90 = 60.0 g.'
      }
    },
    {
      id: 'sl7-ap-quiz-2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 2** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$, a student uses 2.43 g of Mg ($M = 24.31$) and 50.0 mL of 3.00 M HCl. The limiting reactant is:',
            options: [
              'Mg',
              'HCl',
              'MgCl₂',
              'They are in exact ratio'
            ],
            correctAnswer: 1,
            explanation: 'Mol Mg = 2.43/24.31 = 0.100 mol → 0.100 mol MgCl₂. Mol HCl = 3.00 × 0.0500 = 0.150 mol → 0.150/2 = 0.075 mol MgCl₂. HCl produces less → HCl is limiting.'
          },
          {
            question: 'For the AP free-response section, which approach earns the most credit for stoichiometry problems?',
            options: [
              'Writing only the final numerical answer',
              'Showing dimensional analysis with units canceling at each step',
              'Stating the molar masses only',
              'Drawing the molecular structures'
            ],
            correctAnswer: 1,
            explanation: 'The AP exam awards points for process, not just the final answer. Showing dimensional analysis with proper unit cancellation demonstrates understanding and earns partial credit even if the final number has an arithmetic error.'
          }
        ]
      }
    },
    {
      id: 'sl7-dropdown-comprehensive',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The bridge between grams and moles is the',
            options: ['density', 'molar mass', 'mole ratio', 'percent yield']
          },
          {
            label: 'The bridge between moles of different substances is the',
            options: ['molar mass', 'mole ratio from balanced equation', 'Avogadro\'s number', 'molarity']
          },
          {
            label: 'In solution stoichiometry, the bridge between volume and moles is',
            options: ['density', 'molar mass', 'molarity (M × V = n)', 'the gas constant R']
          },
          {
            label: 'On the AP exam, stoichiometry problems most commonly appear in',
            options: ['multiple choice only', 'free response only', 'both multiple choice and free response', 'the lab section only']
          }
        ],
        correctAnswers: ['molar mass', 'mole ratio from balanced equation', 'molarity (M × V = n)', 'both multiple choice and free response'],
        hint1: '$n = m/M$ — what converts between mass and moles?',
        hint2: 'Coefficients in the balanced equation.',
        hint3: 'For solutions: moles = M × V.',
        explanation: 'Molar mass converts grams ↔ moles. Mole ratio (from balanced equation) converts moles A ↔ moles B. Molarity converts volume ↔ moles for solutions. Stoichiometry appears in both MC and FRQ on the AP exam.'
      }
    },
    {
      id: 'sl7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Stoichiometry Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student reacts 40.0 mL of 0.500 M Na₂CO₃ with 60.0 mL of 0.400 M CaCl₂. How many grams of CaCO₃ ($M = 100.1$) precipitate form? ($\\text{Na}_2\\text{CO}_3 + \\text{CaCl}_2 \\rightarrow \\text{CaCO}_3 + 2\\text{NaCl}$)',
            options: [
              '1.00 g',
              '2.00 g',
              '2.40 g',
              '4.00 g'
            ],
            correctAnswer: 1,
            explanation: 'Mol Na₂CO₃ = 0.500 × 0.0400 = 0.0200 mol → 0.0200 mol CaCO₃. Mol CaCl₂ = 0.400 × 0.0600 = 0.0240 mol → 0.0240 mol CaCO₃. Na₂CO₃ produces less → limiting. CaCO₃ = 0.0200 × 100.1 = 2.00 g.'
          },
          {
            question: 'A pharmaceutical company needs to produce 500 g of aspirin with a process that has 82% yield. The theoretical yield they must target is approximately:',
            options: [
              '410 g',
              '500 g',
              '610 g',
              '750 g'
            ],
            correctAnswer: 2,
            explanation: 'Theoretical = actual needed / (% yield / 100) = 500 / 0.82 = 609.8 ≈ 610 g. They must start with enough reactant to theoretically produce 610 g.'
          }
        ]
      }
    }
  ]
}
