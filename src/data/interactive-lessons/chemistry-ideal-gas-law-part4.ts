export const chemIdealGasLawPart4Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Molar Mass & Gas Density

**Part 4 of 7 — Connecting Gases to Molar Mass**

The ideal gas law can be rearranged to find the **molar mass** of an unknown gas, or to calculate the **density** of a gas at any temperature and pressure. These are powerful lab techniques used frequently in AP Chemistry.
      `
    },
    {
      id: 'gl4-molar-mass',
      type: 'text' as const,
      content: `
## Molar Mass from Gas Data

Starting with $PV = nRT$ and substituting $n = m/M$ (where $m$ = mass, $M$ = molar mass):

$$PV = \\frac{m}{M}RT$$

Solving for molar mass:

$$M = \\frac{mRT}{PV}$$

### Example

A 0.325 g sample of gas occupies 225 mL at 100°C and 0.960 atm. Find the molar mass.

$$T = 100 + 273.15 = 373.15 \\text{ K}, \\quad V = 0.225 \\text{ L}$$

$$M = \\frac{(0.325)(0.0821)(373.15)}{(0.960)(0.225)} = \\frac{9.957}{0.216} = 46.1 \\text{ g/mol}$$

This matches ethanol (C₂H₅OH), which has $M = 46.07$ g/mol.

### Lab Application: Dumas Method

In the Dumas method for finding molar mass:
1. Vaporize a liquid in a flask of known volume
2. Measure the temperature and atmospheric pressure
3. Condense the vapor and weigh it
4. Use $M = mRT/(PV)$
      `
    },
    {
      id: 'gl4-density',
      type: 'text' as const,
      content: `
## Gas Density

Density is mass per volume: $d = m/V$. From $PV = (m/M)RT$:

$$\\frac{m}{V} = \\frac{PM}{RT}$$

$$\\boxed{d = \\frac{PM}{RT}}$$

### Key Observations

- Gas density **increases** with pressure (more molecules per volume)
- Gas density **decreases** with temperature (gas expands)
- Gas density **increases** with molar mass (heavier molecules)

### Example

What is the density of O₂ ($M = 32.00$ g/mol) at STP?

$$d = \\frac{PM}{RT} = \\frac{(1.00)(32.00)}{(0.0821)(273.15)} = \\frac{32.00}{22.43} = 1.43 \\text{ g/L}$$

### Comparing Gases

At the same $T$ and $P$, the ratio of gas densities equals the ratio of molar masses:

$$\\frac{d_1}{d_2} = \\frac{M_1}{M_2}$$
      `
    },
    {
      id: 'gl4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Molar Mass & Density Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An unknown gas has a density of 1.96 g/L at STP. What is its molar mass?',
            options: [
              '22.4 g/mol',
              '32.0 g/mol',
              '43.9 g/mol',
              '58.1 g/mol'
            ],
            correctAnswer: 2,
            explanation: 'At STP, $M = d \\times V_m = 1.96 \\times 22.4 = 43.9$ g/mol. Alternatively: $M = dRT/P = (1.96)(0.0821)(273.15)/1.00 = 43.9$ g/mol. This could be CO₂ (44.01 g/mol).'
          },
          {
            question: 'Which gas is denser at the same temperature and pressure?',
            options: [
              'He (M = 4.00 g/mol)',
              'N₂ (M = 28.0 g/mol)',
              'Ar (M = 39.9 g/mol)',
              'CO₂ (M = 44.0 g/mol)'
            ],
            correctAnswer: 3,
            explanation: '$d = PM/(RT)$. At the same T and P, the gas with the largest molar mass has the highest density. CO₂ (44.0 g/mol) is the heaviest of the options.'
          },
          {
            question: 'A gas has a density of 2.86 g/L at STP. If the temperature is doubled (to 546.3 K) at constant pressure, the new density will be:',
            options: [
              '1.43 g/L',
              '2.86 g/L',
              '5.72 g/L',
              '0.715 g/L'
            ],
            correctAnswer: 0,
            explanation: '$d = PM/(RT)$. Density is inversely proportional to T at constant P. Doubling T halves the density: $2.86/2 = 1.43$ g/L.'
          }
        ]
      }
    },
    {
      id: 'gl4-calculations',
      type: 'input-boxes' as const,
      content: `
**Molar Mass & Density Calculations** 🧮

Use $R = 0.0821$ L·atm/(mol·K).

1) A 1.56 g sample of gas occupies 1.00 L at 27°C and 1.00 atm. What is the molar mass? (in g/mol, to 1 decimal place)

2) What is the density of N₂ ($M = 28.02$ g/mol) at 25°C and 1.00 atm? (in g/L, to 2 decimal places)

3) A gas has a density of 3.17 g/L at STP. What is its molar mass? (in g/mol, to 1 decimal place)
      `,
      exercise: {
        inputs: [
          {
            label: 'Molar mass (g/mol)',
            correctAnswer: '38.4',
            explanation: '$T = 300.15$ K. $M = mRT/(PV) = (1.56)(0.0821)(300.15)/((1.00)(1.00)) = 38.4$ g/mol (close to F₂ at 38.00 g/mol).'
          },
          {
            label: 'Density of N₂ (g/L)',
            correctAnswer: '1.15',
            explanation: '$T = 298.15$ K. $d = PM/(RT) = (1.00)(28.02)/((0.0821)(298.15)) = 28.02/24.47 = 1.145 \\approx 1.15$ g/L.'
          },
          {
            label: 'Molar mass from density (g/mol)',
            correctAnswer: '71.0',
            explanation: 'At STP: $M = d \\times 22.4 = 3.17 \\times 22.4 = 71.0$ g/mol (close to Cl₂ at 70.90 g/mol).'
          }
        ]
      }
    },
    {
      id: 'gl4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Density Relationships** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'gl4-dd1',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 0,
            explanation: '$d = PM/(RT)$. Increasing P at constant T and for the same gas means density increases.'
          },
          {
            id: 'gl4-dd2',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 1,
            explanation: '$d = PM/(RT)$. Increasing T at constant P means density decreases (gas expands).'
          },
          {
            id: 'gl4-dd3',
            options: ['lighter than air', 'heavier than air', 'the same as air'],
            correctIndex: 0,
            explanation: 'Air has an average molar mass of about 29 g/mol. He has M = 4 g/mol, so helium is much lighter than air, which is why helium balloons float.'
          },
          {
            id: 'gl4-dd4',
            options: ['lighter than air', 'heavier than air', 'the same as air'],
            correctIndex: 1,
            explanation: 'CO₂ has M = 44 g/mol, which is heavier than air (≈29 g/mol). This is why CO₂ sinks and can accumulate in low-lying areas.'
          }
        ]
      }
    },
    {
      id: 'gl4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Molar Mass & Density** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In the Dumas method, a student measures the mass of vapor, temperature, pressure, and flask volume. Which formula gives the molar mass?',
            options: [
              '$M = PV/(nRT)$',
              '$M = mRT/(PV)$',
              '$M = dV/n$',
              '$M = PVm/(RT)$'
            ],
            correctAnswer: 1,
            explanation: 'Starting from $PV = (m/M)RT$, solve for $M$: $M = mRT/(PV)$. The student knows $m$, $R$, $T$, $P$, and $V$.'
          },
          {
            question: 'At the same T and P, gas A has twice the density of gas B. What can you conclude?',
            options: [
              'Gas A has twice the molar mass of gas B',
              'Gas A has half the molar mass of gas B',
              'Gas A has the same molar mass as gas B',
              'Not enough information to determine'
            ],
            correctAnswer: 0,
            explanation: 'At constant T and P: $d_A/d_B = M_A/M_B$. If $d_A = 2d_B$, then $M_A = 2M_B$. Gas A has twice the molar mass.'
          }
        ]
      }
    }
  ]
}
