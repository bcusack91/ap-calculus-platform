export const mcatStoichiometryPart1Data = {
  topicSlug: 'mcat-general-chemistry-stoichiometry-mcat',
  sections: [
    {
      id: 'st1-intro',
      type: 'text' as const,
      content: `# Stoichiometry & Chemical Reactions

**Part 1 of 5 — Moles, Molar Mass & Avogadro's Number**

Stoichiometry is the quantitative backbone of chemistry. Every MCAT general chemistry calculation—concentration, yield, titration, gas laws—relies on accurate mole conversions.

## The Mole

One mole = $6.022 \\times 10^{23}$ entities (Avogadro's number, $N_A$).

This is the bridge between **atomic scale** (amu) and **lab scale** (grams):
$$1\\text{ amu} = 1\\text{ g/mol}$$

### Key Conversions

$$\\text{moles} = \\frac{\\text{mass (g)}}{\\text{molar mass (g/mol)}}$$

$$\\text{molecules} = \\text{moles} \\times 6.022 \\times 10^{23}$$

$$\\text{moles (gas at STP)} = \\frac{\\text{volume (L)}}{22.4\\text{ L/mol}}$$

"STP" on the MCAT means 0°C and 1 atm. (Note: some modern definitions use 0°C / 100 kPa; the MCAT typically uses the traditional 22.4 L/mol value.)

## Molar Mass Calculation

Add the atomic masses of all atoms in the formula.

**Example — $\\text{H}_2\\text{SO}_4$ (sulfuric acid):**
- $2 \\times \\text{H} = 2 \\times 1.0 = 2.0$
- $1 \\times \\text{S} = 1 \\times 32.1 = 32.1$
- $4 \\times \\text{O} = 4 \\times 16.0 = 64.0$
- Molar mass $= 2.0 + 32.1 + 64.0 = \\mathbf{98.1\\text{ g/mol}}$

**Example — $\\text{Ca}_3(\\text{PO}_4)_2$ (calcium phosphate):**
- $3 \\times \\text{Ca} = 3 \\times 40.1 = 120.3$
- $2 \\times \\text{P} = 2 \\times 31.0 = 62.0$
- $8 \\times \\text{O} = 8 \\times 16.0 = 128.0$
- Molar mass $= 310.3\\text{ g/mol}$

## Percent Composition

$$\\%\\text{ by mass of element} = \\frac{n \\times M_{\\text{element}}}{M_{\\text{compound}}} \\times 100$$

**Example — % O in $\\text{H}_2\\text{O}$:**
$$\\frac{16.0}{18.0} \\times 100 = 88.9\\%$$

## Empirical vs. Molecular Formula

- **Empirical formula:** Simplest whole-number ratio of atoms.
- **Molecular formula:** Actual number of atoms; always a whole-number multiple of the empirical formula.

**Workflow to find empirical formula from % composition:**
1. Assume 100 g sample → grams = percentages.
2. Divide each by atomic mass to get moles.
3. Divide all by the smallest mole value.
4. Round to integers (multiply if needed to clear fractions).
`
    },
    {
      id: 'st1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Moles & Molar Mass — Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: `How many moles are in 49.0 g of $\\text{H}_2\\text{SO}_4$ (molar mass = 98.1 g/mol)?`,
            options: [`0.25 mol`, `0.50 mol`, `1.00 mol`, `2.00 mol`],
            correctAnswer: 1,
            explanation: `$n = m/M = 49.0/98.1 \\approx 0.50\\text{ mol}$.`
          },
          {
            question: `What is the percent composition of carbon in glucose $\\text{C}_6\\text{H}_{12}\\text{O}_6$ (molar mass = 180 g/mol)?`,
            options: [`40%`, `53%`, `6.7%`, `26.7%`],
            correctAnswer: 0,
            explanation: `% C $= (6 \\times 12.0)/180 \\times 100 = 72/180 \\times 100 = \\mathbf{40\\%}$.`
          },
          {
            question: `A compound is 40.0% C, 6.7% H, and 53.3% O by mass. What is its empirical formula?`,
            options: [`$\\text{CH}_2\\text{O}$`, `$\\text{C}_2\\text{H}_4\\text{O}_2$`, `$\\text{CHO}$`, `$\\text{CH}_4\\text{O}$`],
            correctAnswer: 0,
            explanation: `Moles: C = 40/12 = 3.33; H = 6.7/1 = 6.7; O = 53.3/16 = 3.33. Ratio: C:H:O = 3.33:6.7:3.33 = 1:2:1. Empirical formula = **$\\text{CH}_2\\text{O}$** (formaldehyde unit; glucose and others have this EF).`
          },
          {
            question: `How many molecules are in 2.0 moles of $\\text{CO}_2$?`,
            options: [
              `$6.0 \\times 10^{23}$`,
              `$1.2 \\times 10^{24}$`,
              `$3.0 \\times 10^{23}$`,
              `$4.4 \\times 10^{23}$`
            ],
            correctAnswer: 1,
            explanation: `$2.0\\text{ mol} \\times 6.022 \\times 10^{23}\\text{ molecules/mol} = \\mathbf{1.2 \\times 10^{24}\\text{ molecules}}$.`
          },
          {
            question: `A compound has empirical formula $\\text{CH}_2$ and molar mass 56 g/mol. What is its molecular formula?`,
            options: [`$\\text{C}_2\\text{H}_4$`, `$\\text{C}_3\\text{H}_6$`, `$\\text{C}_4\\text{H}_8$`, `$\\text{C}_5\\text{H}_{10}$`],
            correctAnswer: 2,
            explanation: `Empirical formula mass of $\\text{CH}_2 = 14\\text{ g/mol}$. Ratio $= 56/14 = 4$. Molecular formula $= (\\text{CH}_2)_4 = \\mathbf{\\text{C}_4\\text{H}_8}$ (could be cyclobutane or 1-butene).`
          }
        ]
      }
    },
    {
      id: 'st1-worked',
      type: 'text' as const,
      content: `## Worked Example: Multi-Step Mole Calculation

**Problem:** 9.80 g of $\\text{H}_2\\text{SO}_4$ reacts completely with excess NaOH. How many grams of $\\text{Na}_2\\text{SO}_4$ are produced?

$$\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\to \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$$

**Step 1 — Moles of $\\text{H}_2\\text{SO}_4$:**
$$n = \\frac{9.80\\text{ g}}{98.1\\text{ g/mol}} = 0.100\\text{ mol}$$

**Step 2 — Moles of $\\text{Na}_2\\text{SO}_4$ (1:1 ratio from balanced equation):**
$$0.100\\text{ mol } \\text{H}_2\\text{SO}_4 \\times \\frac{1\\text{ mol } \\text{Na}_2\\text{SO}_4}{1\\text{ mol } \\text{H}_2\\text{SO}_4} = 0.100\\text{ mol}$$

**Step 3 — Grams of $\\text{Na}_2\\text{SO}_4$** (molar mass = $2(23) + 32 + 4(16) = 142\\text{ g/mol}$):
$$0.100\\text{ mol} \\times 142\\text{ g/mol} = \\mathbf{14.2\\text{ g}}$$

### MCAT Strategy
Always write the balanced equation first. Every stoichiometry problem requires it. Check that atoms and charges balance on both sides before calculating.
`
    },
    {
      id: 'st1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Applied Mole Calculations** 🎯`,
      exercise: {
        questions: [
          {
            question: `How many grams of $\\text{NaCl}$ (molar mass = 58.5 g/mol) contain $1.20 \\times 10^{24}$ formula units?`,
            options: [`58.5 g`, `117 g`, `175.5 g`, `234 g`],
            correctAnswer: 1,
            explanation: `Moles $= 1.20 \\times 10^{24} / 6.02 \\times 10^{23} = 2.0\\text{ mol}$. Mass $= 2.0 \\times 58.5 = \\mathbf{117\\text{ g}}$.`
          },
          {
            question: `What volume (in L) does 0.500 mol of an ideal gas occupy at STP?`,
            options: [`11.2 L`, `22.4 L`, `44.8 L`, `5.6 L`],
            correctAnswer: 0,
            explanation: `At STP, 1 mol of ideal gas occupies 22.4 L. So 0.500 mol occupies $0.500 \\times 22.4 = \\mathbf{11.2\\text{ L}}$.`
          },
          {
            question: `Combustion analysis of 0.300 g of a hydrocarbon produces 0.880 g $\\text{CO}_2$ and 0.540 g $\\text{H}_2\\text{O}$. What is the empirical formula?`,
            options: [`CH`, `$\\text{CH}_2$`, `$\\text{CH}_3$`, `$\\text{CH}_4$`],
            correctAnswer: 2,
            explanation: `Moles $\\text{CO}_2 = 0.880/44 = 0.0200$, so mol C $= 0.0200$. Moles $\\text{H}_2\\text{O} = 0.540/18 = 0.0300$, so mol H $= 0.0600$. C:H $= 0.020:0.060 = 1:3$. Empirical formula $= \\mathbf{\\text{CH}_3}$.`
          }
        ]
      }
    },
    {
      id: 'st1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **1 mole = $6.022 \\times 10^{23}$ particles = molar mass in grams = 22.4 L at STP (gas)**
- **Molar mass** = sum of (atomic mass × subscript) for all elements in formula
- **% composition** = (mass of element / molar mass of compound) × 100
- **Empirical formula:** divide % by atomic mass → divide by smallest → round to integers
- **Molecular formula** = empirical formula × (M_total / M_empirical)
- **Balanced equation required** before any stoichiometric calculation
- **Mole ratio** from balanced equation links moles of reactant to moles of product
`
    }
  ]
};
