export const chemStoichiometryLimitingReactantsPart5Data = {
  topicSlug: 'stoichiometry-limiting-reactants',
  sections: [
    {
      id: 'sl5-intro',
      type: 'text' as const,
      content: `
# 🧫 Solution Stoichiometry

**Part 5 of 7 — Using Molarity in Stoichiometry**

Many reactions take place in aqueous solution. Instead of weighing solids, you measure **volumes of solutions** with known **molarities**. The key relationship is:

$$M \\times V = n \\quad \\text{(moles = molarity × volume in liters)}$$
      `
    },
    {
      id: 'sl5-molarity-review',
      type: 'text' as const,
      content: `
## Molarity Review

**Molarity** ($M$) is the concentration of a solution in moles per liter:

$$M = \\frac{n}{V} \\quad \\text{or} \\quad n = M \\times V$$

where:
- $M$ = molarity (mol/L)
- $n$ = moles of solute
- $V$ = volume of solution **in liters**

### Unit Conversion Reminder

- 1 L = 1000 mL
- Always convert mL to L before using the formula!
- Example: 250 mL = 0.250 L

### Example

> **Problem:** How many moles of NaOH are in 500 mL of 0.200 M NaOH?

**Solution:**

$$n = M \\times V = 0.200 \\times 0.500 = 0.100 \\text{ mol NaOH}$$
      `
    },
    {
      id: 'sl5-solution-stoich',
      type: 'text' as const,
      content: `
## Solution Stoichiometry Roadmap

$$M_A \\times V_A \\xrightarrow{= n_A} \\text{moles A} \\xrightarrow{\\text{mole ratio}} \\text{moles B} \\xrightarrow{\\div M_B \\text{ or } \\times M_B} V_B \\text{ or grams B}$$

### The Steps

1. Find moles of the known substance: $n = M \\times V$
2. Use the mole ratio to find moles of the unknown
3. Convert to the desired unit (volume, grams, or molarity)

### Worked Example

How many mL of 0.100 M AgNO₃ are needed to react completely with 25.0 mL of 0.200 M NaCl?

$$\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl} + \\text{NaNO}_3$$

**Step 1:** Moles NaCl = $0.200 \\times 0.0250 = 0.00500$ mol

**Step 2:** Mole ratio is 1:1, so moles AgNO₃ = 0.00500 mol

**Step 3:** Volume = $n/M = 0.00500/0.100 = 0.0500$ L $= 50.0$ mL

**Answer:** 50.0 mL of 0.100 M AgNO₃
      `
    },
    {
      id: 'sl5-titration',
      type: 'text' as const,
      content: `
## Titration — A Key Application

A **titration** is a lab technique where you add a solution of known concentration (the **titrant**) to a solution of unknown concentration until the reaction is complete (the **equivalence point**).

### At the Equivalence Point

$$n_{\\text{acid}} \\times \\text{(acid-to-base ratio)} = n_{\\text{base}}$$

For a 1:1 acid-base reaction:

$$M_A \\times V_A = M_B \\times V_B$$

### Worked Example

A student titrates 25.0 mL of HCl of unknown concentration with 0.150 M NaOH. It takes 32.0 mL of NaOH to reach the equivalence point. Find $M_{\\text{HCl}}$.

$$\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O} \\quad (1:1 \\text{ ratio})$$

$$M_{\\text{HCl}} \\times 0.0250 = 0.150 \\times 0.0320$$

$$M_{\\text{HCl}} = \\frac{0.150 \\times 0.0320}{0.0250} = 0.192 \\text{ M}$$

### For Non-1:1 Ratios

$$\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$$

Here: $M_A \\times V_A \\times 1 = M_B \\times V_B \\times \\frac{1}{2}$, or simply find moles and use the ratio.
      `
    },
    {
      id: 'sl5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Solution Stoichiometry Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many moles of HCl are in 100 mL of 0.500 M HCl?',
            options: [
              '0.0050 mol',
              '0.050 mol',
              '0.50 mol',
              '5.0 mol'
            ],
            correctAnswer: 1,
            explanation: '$n = M \\times V = 0.500 \\times 0.100 = 0.050$ mol. Remember to convert 100 mL to 0.100 L first!'
          },
          {
            question: 'In a titration, 20.0 mL of 0.100 M NaOH neutralizes 10.0 mL of H₂SO₄. The molarity of H₂SO₄ is:',
            options: [
              '0.050 M',
              '0.100 M',
              '0.200 M',
              '0.400 M'
            ],
            correctAnswer: 1,
            explanation: '$\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$. Moles NaOH: $0.100 \\times 0.0200 = 0.00200$ mol. Moles H₂SO₄: $0.00200 / 2 = 0.00100$ mol. Molarity: $0.00100/0.0100 = 0.100$ M.'
          },
          {
            question: 'The key formula for solution stoichiometry is:',
            options: [
              '$PV = nRT$',
              '$n = M \\\\times V$ (moles = molarity × volume in L)',
              '$E = mc^2$',
              '$M = n \\\\times V$'
            ],
            correctAnswer: 1,
            explanation: '$n = M \\times V$ where M is molarity (mol/L) and V is volume in liters. This gives moles, which you then use with mole ratios for stoichiometry.'
          }
        ]
      }
    },
    {
      id: 'sl5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Solution Stoichiometry Calculations** 🧮

**1)** How many moles of KOH are in 250 mL of 0.400 M KOH? (to 3 significant figures)

**2)** In the reaction $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$, how many mL of 0.250 M NaOH are needed to neutralize 50.0 mL of 0.100 M HCl? (to 3 significant figures)

**3)** A titration requires 28.5 mL of 0.200 M KOH to neutralize 25.0 mL of HNO₃ (1:1 ratio). What is the molarity of HNO₃? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.100', '20.0', '0.228'],
        hint1: '$n = 0.400 \\times 0.250$.',
        hint2: 'Moles HCl = $0.100 \\times 0.050 = 0.005$ mol. Need same moles NaOH. $V = n/M = 0.005/0.250$.',
        hint3: 'Moles KOH = $0.200 \\times 0.0285$. Since 1:1, moles HNO₃ = same. $M = n/V = n/0.0250$.',
        explanation: '1) $n = 0.400 \\times 0.250 = 0.100$ mol. 2) Moles HCl = $0.100 \\times 0.0500 = 0.00500$ mol = moles NaOH. $V = 0.00500/0.250 = 0.0200$ L $= 20.0$ mL. 3) Moles KOH = $0.200 \\times 0.0285 = 0.00570$ mol = moles HNO₃. $M = 0.00570/0.0250 = 0.228$ M.'
      }
    },
    {
      id: 'sl5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Solution Stoichiometry Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Before using n = M × V, the volume must be in',
            options: ['milliliters', 'liters', 'cubic centimeters', 'gallons']
          },
          {
            label: 'At the equivalence point of a titration, the',
            options: ['pH is always 7', 'moles of acid equal moles of base (for 1:1)', 'solution turns clear', 'reaction stops']
          },
          {
            label: 'Doubling the volume of a solution while keeping molarity constant will',
            options: ['halve the moles', 'double the moles', 'keep moles the same', 'double the molarity']
          },
          {
            label: 'If you know the volume and moles of solute, molarity equals',
            options: ['V/n', 'n × V', 'n/V', 'V − n']
          }
        ],
        correctAnswers: ['liters', 'moles of acid equal moles of base (for 1:1)', 'double the moles', 'n/V'],
        hint1: 'Molarity is mol/L, so volume must match the denominator unit.',
        hint2: 'Equivalence = stoichiometric completion.',
        hint3: '$n = M \\times V$. If M stays the same and V doubles...',
        explanation: 'Volume must be in liters for $n = M \\times V$. At equivalence, stoichiometric moles are matched. Doubling V at constant M doubles n. Molarity = n/V by definition.'
      }
    },
    {
      id: 'sl5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Solution Stoichiometry** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'How many grams of NaCl ($M_{\\text{NaCl}} = 58.44$) are produced when 50.0 mL of 0.300 M NaOH reacts with excess HCl?',
            options: [
              '0.439 g',
              '0.878 g',
              '1.75 g',
              '8.77 g'
            ],
            correctAnswer: 1,
            explanation: '$\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$ (1:1). Moles NaOH: $0.300 \\times 0.0500 = 0.01500$ mol = moles NaCl. Mass: $0.01500 \\times 58.44 = 0.877$ g ≈ 0.878 g.'
          },
          {
            question: 'A student needs 0.0500 mol of AgNO₃ from a 0.250 M solution. What volume should be measured?',
            options: [
              '50.0 mL',
              '100 mL',
              '200 mL',
              '500 mL'
            ],
            correctAnswer: 2,
            explanation: '$V = n/M = 0.0500/0.250 = 0.200$ L $= 200$ mL.'
          }
        ]
      }
    }
  ]
}
