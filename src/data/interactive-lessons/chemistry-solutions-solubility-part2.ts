export const chemSolutionsSolubilityPart2Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss2-intro',
      type: 'text' as const,
      content: `# 📏 Molarity and Ion Concentrations

**Part 2 of 7 — Molarity, Ion Concentrations, and Mole Fraction**

---

### Topics in This Part

| Section |
|---------|
| 📌 Molarity ($M$) |
| 📌 Counting Particles: Ion Concentrations |
| 📌 Mole Fraction ($\\chi$) |
| 🧪 Mole Fraction Worked Example |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ss2-molarity',
      type: 'text' as const,
      content: `
## 📌 Molarity ($M$)

**Molarity** is the most commonly used concentration unit in chemistry.

$$\\boxed{M = \\frac{\\text{moles of solute}}{\\text{liters of solution}}}$$


---

### Units: mol/L (or simply $M$)


---

### Example

Dissolve 4.00 g of NaOH ($M_{\\text{NaOH}} = 40.00$ g/mol) in enough water to make 500.0 mL of solution.

$$n = 4.00 \\; \\cancel{\\text{g NaOH}} \\times \\frac{1 \\text{ mol NaOH}}{40.00 \\; \\cancel{\\text{g NaOH}}} = 0.100 \\text{ mol NaOH}$$

$$M = \\frac{0.100 \\text{ mol}}{0.5000 \\text{ L}} = 0.200 \\text{ M}$$


---

### Key Points

- Molarity depends on **volume of solution** (not volume of solvent)
- Molarity changes with temperature because volume changes with temperature
- Most useful for **stoichiometry** in solution: moles = $M \\times V$(in liters)
      `
    },
    {
      id: 'ss2-ion-concentrations',
      type: 'text' as const,
      content: `
## 📌 Counting Particles: Ion Concentrations

Soluble ionic compounds are **strong electrolytes**: in water they dissociate completely into ions. The formula tells you how many of each ion every formula unit releases.

$$\\text{CaCl}_2(s) \\rightarrow \\text{Ca}^{2+}(aq) + 2\\,\\text{Cl}^-(aq)$$

So a $0.10$ M $CaCl_{2}$ solution contains:

| Particle | Concentration | Reason |
|----------|---------------|--------|
| $Ca^{2+}$ | $0.10$ M | 1 per formula unit |
| $Cl^{-}$ | $0.20$ M | 2 per formula unit |
| All ions together | $0.30$ M | 3 per formula unit |


---

### The Rule

$$\\boxed{[\\text{ion}] = (\\text{number of that ion per formula unit}) \\times M_{\\text{salt}}}$$

To count **moles** of an ion in a sample, first find moles of salt with $n = M \\times V$, then multiply by the subscript.


---

### Worked Example

> **Problem:** How many moles of $NO_{3}^{-}$ are in 250.0 mL of 0.200 M $Al(NO_{3})_{3}$?

$$n_{\\text{salt}} = (0.200)(0.2500) = 0.0500 \\text{ mol}$$

$$n_{NO_3^-} = 3 \\times 0.0500 = 0.150 \\text{ mol}$$


---

### Molecular Solutes Do Not Split

Glucose, sucrose, and ethanol dissolve as intact molecules. A $0.10$ M glucose solution contains $0.10$ M of dissolved particles, while $0.10$ M NaCl contains $0.20$ M (half $Na^{+}$, half $Cl^{-}$).

> ⚠️ **Warning:** Polyatomic ions stay together. $Na_{2}SO_{4}$ gives $2\\,Na^{+} + SO_{4}^{2-}$ (3 ions), not separate S and O atoms.
      `
    },
    {
      id: 'ss2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Molarity and Ion Concentration Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A solution is made by dissolving 0.50 mol of KCl in enough water to make 2.0 L of solution. What is the molarity?',
            options: [
              '0.10 M',
              '0.25 M',
              '0.50 M',
              '1.0 M'
            ],
            correctAnswer: 1,
            explanation: '$M = \\frac{\\text{mol}}{\\text{L}} = \\frac{0.50}{2.0} = 0.25$ M.'
          },
          {
            question: 'What is the chloride ion concentration in 0.15 M $CaCl_{2}$(aq)?',
            options: [
              '0.075 M',
              '0.15 M',
              '0.30 M',
              '0.45 M'
            ],
            correctAnswer: 2,
            explanation: 'Each $CaCl_{2}$ releases two $Cl^{-}$ ions, so $[Cl^{-}] = 2 \\times 0.15 = 0.30$ M. The value 0.45 M is the total ion concentration ($Ca^{2+}$ plus $Cl^{-}$), and 0.075 M comes from dividing by two instead of multiplying.'
          },
          {
            question: 'Which 0.10 M solution contains the greatest total concentration of dissolved particles?',
            options: [
              'Glucose, $C_{6}H_{12}O_{6}$',
              'Sodium chloride, NaCl',
              'Potassium sulfate, $K_{2}SO_{4}$',
              'Ethanol, $C_{2}H_{5}OH$'
            ],
            correctAnswer: 2,
            explanation: '$K_{2}SO_{4}$ dissociates into $2K^{+} + SO_{4}^{2-}$, giving 0.30 M of ions. NaCl gives 0.20 M of ions, while glucose and ethanol are molecular and stay at 0.10 M of dissolved molecules.'
          }
        ]
      }
    },
    {
      id: 'ss2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Molarity and Ion Calculations** 🧮

> **Given:** Na = 22.99, Cl = 35.45, O = 16.00, H = 1.008, C = 12.01

**1)** What is the molarity of a solution prepared by dissolving 11.7 g of NaCl ($M = 58.44$ g/mol) in water to make 250.0 mL of solution? (to 3 significant figures, in mol/L)

**2)** What is the nitrate ion concentration in 0.250 M $Al(NO_{3})_{3}$? (to 3 significant figures, in mol/L)

**3)** How many total moles of ions are present in 50.0 mL of 0.200 M $Na_{2}SO_{4}$? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.800', '0.750', '0.0300'],
        hint1: '$M = n/V$. Find moles: $n = 11.7/58.44$. Volume in liters: $0.2500$ L.',
        hint2: 'Each $Al(NO_{3})_{3}$ releases three $NO_{3}^{-}$ ions.',
        hint3: 'Moles of salt $= (0.200)(0.0500)$. Each $Na_{2}SO_{4}$ gives 3 ions.',
        explanation: '1) $n = 11.7/58.44 = 0.2002$ mol. $M = 0.2002/0.2500 = 0.800$ M. 2) $[NO_{3}^{-}] = 3 \\times 0.250 = 0.750$ M. 3) Moles of $Na_{2}SO_{4}$ $= (0.200)(0.0500) = 0.0100$ mol; each formula unit gives $2Na^{+} + SO_{4}^{2-}$, so total ions $= 3 \\times 0.0100 = 0.0300$ mol.'
      }
    },
    {
      id: 'ss2-mole-fraction-def',
      type: 'text' as const,
      content: `
## 📌 Mole Fraction ($\\chi$)

Molarity is the concentration unit the AP exam uses for solutions. The one other composition measure you need is the **mole fraction**, which also appears with gas mixtures and partial pressures.

$$\\boxed{\\chi_A = \\frac{n_A}{n_A + n_B + \\cdots}}$$

- Mole fraction is **unitless** and always between 0 and 1
- The sum of all mole fractions in a mixture equals **1**
- Because it counts moles, not volume, it does not change with temperature

> 💡 **Tip:** Molality, percent by mass, and parts per million for solutions appear in many textbooks, but they are not assessed on the AP exam.
      `
    },
    {
      id: 'ss2-mole-fraction',
      type: 'text' as const,
      content: `
## 🧪 Mole Fraction Worked Example

> **Problem:** A solution contains 46.0 g of ethanol ($C_{2}H_{5}OH$, $M = 46.07$ g/mol) and 72.0 g of water ($M = 18.02$ g/mol). Calculate the mole fraction of ethanol.

> **Solution:**

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
**Concentration — Identify and Apply** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '2.0 M NaCl means there are 2.0 moles of NaCl per',
            options: ['kilogram of water', 'liter of solution', 'liter of water', 'kilogram of solution']
          },
          {
            label: 'If the mole fraction of solute is 0.10, the mole fraction of solvent is',
            options: ['0.10', '0.90', '1.00', '0.010']
          },
          {
            label: 'In 0.40 M $(NH_{4})_{3}PO_{4}$, the ammonium ion concentration is',
            options: ['0.13 M', '0.40 M', '1.2 M', '1.6 M']
          },
          {
            label: 'Moles of solute in 0.500 L of 0.300 M KOH equal',
            options: ['0.150 mol', '0.600 mol', '1.67 mol', '0.300 mol']
          }
        ],
        correctAnswers: ['liter of solution', '0.90', '1.2 M', '0.150 mol'],
        hint1: 'Molarity is defined using the volume of the finished solution.',
        hint2: 'Mole fractions must sum to 1.',
        hint3: 'Each $(NH_{4})_{3}PO_{4}$ releases three $NH_{4}^{+}$ ions; for moles, use $n = MV$.',
        explanation: 'Molarity is mol per liter of solution. Mole fractions sum to 1: $1.00 - 0.10 = 0.90$. Three ammonium ions per formula unit give $3 \\times 0.40 = 1.2$ M. Moles of KOH $= (0.300)(0.500) = 0.150$ mol.'
      }
    },
    {
      id: 'ss2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Molarity and Ions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student dissolves 0.0400 mol of $MgCl_{2}$ in water and dilutes to exactly 200.0 mL. What is the concentration of chloride ion?',
            options: [
              '0.200 M',
              '0.400 M',
              '0.0800 M',
              '0.600 M'
            ],
            correctAnswer: 1,
            explanation: '$[MgCl_{2}] = 0.0400/0.2000 = 0.200$ M. Each formula unit releases two chloride ions, so $[Cl^{-}] = 2 \\times 0.200 = 0.400$ M. The value 0.600 M is the total ion concentration, and 0.200 M forgets the subscript.'
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
