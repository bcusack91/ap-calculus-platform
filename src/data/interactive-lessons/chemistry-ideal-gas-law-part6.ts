export const chemIdealGasLawPart6Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl6-intro',
      type: 'text' as const,
      content: `
# 🧪 Problem-Solving Workshop

**Part 6 of 7 — Mixed Gas Law Calculations**

Now it\'s time to put all the gas laws together. In this workshop, you\'ll practice selecting the right equation, converting units, and solving multi-step problems — exactly the way they appear on the AP Chemistry exam.
      `
    },
    {
      id: 'gl6-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

1. **Identify what you know and what you need to find.**
2. **Choose the right law:**
   - One gas, two sets of conditions → Combined gas law: $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$
   - One set of conditions → Ideal gas law: $PV = nRT$
   - Gas mixtures → Dalton\'s law: $P_{\\text{total}} = \\sum P_i$
   - Unknown molar mass → $M = mRT/(PV)$
   - Gas density → $d = PM/(RT)$
3. **Convert all units** — Kelvin for $T$, liters for $V$, atm for $P$ (if using $R = 0.0821$).
4. **Solve and check** — does the answer make physical sense?

### The Combined Gas Law

When the amount of gas is constant but P, V, and T all change:

$$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$$

This reduces to Boyle\'s or Charles\'s law when one variable is held constant.
      `
    },
    {
      id: 'gl6-stp-problems',
      type: 'text' as const,
      content: `
## STP Problems

At STP (0°C = 273.15 K, 1.00 atm):
- 1 mol of ideal gas = 22.4 L
- This gives a quick shortcut for many calculations

### Example 1: Volume at STP

What volume does 0.750 mol of CO₂ occupy at STP?

$$V = 0.750 \\times 22.4 = 16.8 \\text{ L}$$

### Example 2: Moles from Volume at STP

A sample of gas occupies 5.60 L at STP. How many moles?

$$n = \\frac{5.60}{22.4} = 0.250 \\text{ mol}$$

### Example 3: Combined Gas Law

A gas at 2.00 atm, 10.0 L, and 300 K is changed to 1.00 atm and 600 K. New volume?

$$V_2 = \\frac{P_1V_1T_2}{T_1P_2} = \\frac{(2.00)(10.0)(600)}{(300)(1.00)} = 40.0 \\text{ L}$$
      `
    },
    {
      id: 'gl6-stoichiometry',
      type: 'text' as const,
      content: `
## Gas Stoichiometry

When gases appear in chemical reactions, you can use the ideal gas law with stoichiometry:

$$\\text{grams} \\rightarrow \\text{moles} \\rightarrow \\text{mole ratio} \\rightarrow \\text{moles of gas} \\rightarrow PV = nRT$$

### Example

How many liters of O₂ at 25°C and 1.00 atm are produced from the decomposition of 49.0 g of KClO₃?

$$2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$$

Step 1: Moles of KClO₃ ($M = 122.55$ g/mol):
$$n = 49.0/122.55 = 0.400 \\text{ mol}$$

Step 2: Moles of O₂:
$$0.400 \\times \\frac{3}{2} = 0.600 \\text{ mol O}_2$$

Step 3: Volume:
$$V = \\frac{nRT}{P} = \\frac{(0.600)(0.0821)(298.15)}{1.00} = 14.7 \\text{ L}$$
      `
    },
    {
      id: 'gl6-mixed-quiz',
      type: 'multiple-choice' as const,
      content: `
**Problem Type Identification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A gas at 1.50 atm and 200 K occupies 8.00 L. What volume does it occupy at STP? Which law should you use?',
            options: [
              'Ideal gas law only',
              'Combined gas law',
              'Dalton\'s law',
              'Avogadro\'s law'
            ],
            correctAnswer: 1,
            explanation: 'Same gas, same amount, but P and T both change → use the combined gas law: $P_1V_1/T_1 = P_2V_2/T_2$.'
          },
          {
            question: 'Using the combined gas law for the problem above, the volume at STP is:',
            options: [
              '8.19 L',
              '10.9 L',
              '16.4 L',
              '21.8 L'
            ],
            correctAnswer: 2,
            explanation: '$V_2 = P_1V_1T_2/(T_1P_2) = (1.50)(8.00)(273.15)/((200)(1.00)) = 3277.8/200 = 16.4$ L.'
          },
          {
            question: 'How many liters of H₂ at STP are produced when 6.54 g of Zn reacts with excess HCl? ($\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$; Zn = 65.38 g/mol)',
            options: [
              '1.12 L',
              '2.24 L',
              '11.2 L',
              '22.4 L'
            ],
            correctAnswer: 1,
            explanation: 'Moles Zn $= 6.54/65.38 = 0.100$ mol. 1:1 ratio → 0.100 mol H₂. At STP: $V = 0.100 \\times 22.4 = 2.24$ L.'
          }
        ]
      }
    },
    {
      id: 'gl6-workshop-inputs',
      type: 'input-boxes' as const,
      content: `
**Calculation Workshop** 🧮

1) A 5.00 L gas sample at 2.00 atm and 400 K is cooled to 200 K and compressed to 1.00 L. What is the new pressure? (in atm)

2) At STP, how many grams of CO₂ ($M = 44.01$ g/mol) occupy 11.2 L? (in g, to 3 significant figures)

3) A mixture of 0.30 mol He and 0.70 mol Ar has a total pressure of 5.00 atm. What is the partial pressure of Ar? (in atm)
      `,
      exercise: {
        inputs: [
          {
            label: 'New pressure (atm)',
            correctAnswer: '5.00',
            explanation: 'Combined gas law: $P_2 = P_1V_1T_2/(T_1V_2) = (2.00)(5.00)(200)/((400)(1.00)) = 2000/400 = 5.00$ atm.'
          },
          {
            label: 'Mass of CO₂ (g)',
            correctAnswer: '22.01',
            explanation: 'At STP: $n = 11.2/22.4 = 0.500$ mol. $m = nM = 0.500 \\times 44.01 = 22.005 \\approx 22.01$ g.'
          },
          {
            label: 'Partial pressure of Ar (atm)',
            correctAnswer: '3.50',
            explanation: '$\\chi_{Ar} = 0.70/(0.30+0.70) = 0.70$. $P_{Ar} = 0.70 \\times 5.00 = 3.50$ atm.'
          }
        ]
      }
    },
    {
      id: 'gl6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick Decision Guide** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'gl6-dd1',
            options: ['PV = nRT', 'P₁V₁/T₁ = P₂V₂/T₂', 'M = mRT/(PV)', 'Dalton\'s Law'],
            correctIndex: 0,
            explanation: 'When you know P, V, T and need to find n (or vice versa) for a single set of conditions, use the ideal gas law directly.'
          },
          {
            id: 'gl6-dd2',
            options: ['PV = nRT', 'P₁V₁/T₁ = P₂V₂/T₂', 'M = mRT/(PV)', 'Dalton\'s Law'],
            correctIndex: 1,
            explanation: 'When the same gas sample changes conditions (different P, V, or T before and after), use the combined gas law.'
          },
          {
            id: 'gl6-dd3',
            options: ['PV = nRT', 'P₁V₁/T₁ = P₂V₂/T₂', 'M = mRT/(PV)', 'Dalton\'s Law'],
            correctIndex: 3,
            explanation: 'When multiple gases are in the same container and you need individual or total pressures, use Dalton\'s Law of Partial Pressures.'
          }
        ]
      }
    },
    {
      id: 'gl6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem Solving** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A balloon at 25°C and 1.00 atm has a volume of 3.00 L. If taken to an altitude where T = -25°C and P = 0.500 atm, the new volume is approximately:',
            options: [
              '3.00 L',
              '4.00 L',
              '5.00 L',
              '6.00 L'
            ],
            correctAnswer: 2,
            explanation: '$T_1 = 298$ K, $T_2 = 248$ K. $V_2 = (P_1V_1T_2)/(T_1P_2) = (1.00)(3.00)(248)/((298)(0.500)) = 744/149 = 4.99 \\approx 5.00$ L.'
          },
          {
            question: 'At STP, which of the following samples contains the most molecules?',
            options: [
              '22.4 L of He',
              '11.2 L of O₂',
              '44.8 L of N₂',
              '22.4 L of CO₂'
            ],
            correctAnswer: 2,
            explanation: 'At STP, 22.4 L = 1 mol for any ideal gas. He: 1 mol, O₂: 0.5 mol, N₂: 2 mol, CO₂: 1 mol. N₂ at 44.8 L has the most moles and therefore the most molecules.'
          }
        ]
      }
    }
  ]
}
