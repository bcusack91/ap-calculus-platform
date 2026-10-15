export const chemIdealGasLawPart4Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl4-intro',
      type: 'text' as const,
      content: `# ⚖️ Molar Mass & Gas Density

**Part 4 of 7 — Connecting Gases to Molar Mass**

---

### Topics in This Part

| Section |
|---------|
| 💨 Molar Mass from Gas Data |
| Example |
| Lab Application: Dumas Method |
| 💨 Gas Density |
| Key Observations |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'gl4-molar-mass',
      type: 'text' as const,
      content: `
## 💨 Molar Mass from Gas Data

Starting with $PV = nRT$ and substituting $n = m/M$ (where $m$ = mass, $M$ = molar mass):

$$PV = \\frac{m}{M}RT$$

Solving for molar mass:

$$\\boxed{M = \\frac{mRT}{PV}}$$


---

### Example

> **Problem:** A 0.325 g sample of gas occupies 225 mL at 100°C and 0.960 atm. Find the molar mass.

> **Solution:**

$$T = 100 + 273.15 = 373.15 \\text{ K}, \\quad V = 0.225 \\text{ L}$$

$$M = \\frac{(0.325)(0.0821)(373.15)}{(0.960)(0.225)} = \\frac{9.957}{0.216} = 46.1 \\text{ g/mol}$$

This matches ethanol $(C_{2}H_{5}OH)$, which has $M = 46.07$ g/mol.


---

### Lab Application: Dumas Method

> 💡 **Tip:** The Dumas method is a classic lab technique for finding the molar mass of volatile liquids.

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
## 💨 Gas Density

Density is mass per volume: $d = m/V$. From $PV = (m/M)RT$:

$$\\frac{m}{V} = \\frac{PM}{RT}$$

$$\\boxed{d = \\frac{PM}{RT}}$$


---

### Key Observations

- Gas density **increases** with pressure (more molecules per volume)
- Gas density **decreases** with temperature (gas expands)
- Gas density **increases** with molar mass (heavier molecules)


---

### Example

> **Problem:** What is the density of $O_{2}$ ($M = 32.00$ g/mol) at STP?

> **Solution:**

$$d = \\frac{PM}{RT} = \\frac{(1.00)(32.00)}{(0.0821)(273.15)} = \\frac{32.00}{22.43} = 1.43 \\text{ g/L}$$


---

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
              '11.4 g/mol',
              '0.0875 g/mol',
              '43.9 g/mol',
              '48.0 g/mol'
            ],
            correctAnswer: 2,
            explanation: 'At STP, $M = d \\times V_m = 1.96 \\times 22.4 = 43.9$ g/mol. Alternatively: $M = dRT/P = (1.96)(0.0821)(273.15)/1.00 = 43.9$ g/mol. This could be $CO_{2}$ (44.01 g/mol). Dividing 22.4 by 1.96 gives 11.4, dividing 1.96 by 22.4 gives 0.0875, and using 24.5 L/mol (25°C) gives 48.0.'
          },
          {
            question: 'Which gas is denser at the same temperature and pressure?',
            options: [
              'He (M = 4.00 g/mol)',
              '$N_{2}$ (M = 28.0 g/mol)',
              'Ar (M = 39.9 g/mol)',
              '$CO_{2}$ (M = 44.0 g/mol)'
            ],
            correctAnswer: 3,
            explanation: '$d = PM/(RT)$. At the same T and P, the gas with the largest molar mass has the highest density. $CO_{2}$ (44.0 g/mol) is the heaviest of the options.'
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

**1)** A 1.56 g sample of gas occupies 1.00 L at 27°C and 1.00 atm. What is the molar mass? (in g/mol, to 3 significant figures)

**2)** What is the density of $N_{2}$ ($M = 28.02$ g/mol) at 25°C and 1.00 atm? (in g/L, to 3 significant figures)

**3)** A gas has a density of 3.17 g/L at STP. What is its molar mass? (in g/mol, to 3 significant figures)
      `,
      exercise: {
        inputs: [
          {
            label: 'Molar mass (g/mol)',
            correctAnswer: '38.4',
            explanation: '$T = 300.15$ K. $M = mRT/(PV) = (1.56)(0.0821)(300.15)/((1.00)(1.00)) = 38.4$ g/mol (close to $F_{2}$ at 38.00 g/mol).'
          },
          {
            label: 'Density of $N_{2}$ (g/L)',
            correctAnswer: '1.15',
            explanation: '$T = 298.15$ K. $d = PM/(RT) = (1.00)(28.02)/((0.0821)(298.15)) = 28.02/24.47 = 1.145 \\approx 1.15$ g/L.'
          },
          {
            label: 'Molar mass from density (g/mol)',
            correctAnswer: '71.0',
            explanation: 'At STP: $M = d \\times 22.4 = 3.17 \\times 22.4 = 71.0$ g/mol (close to $Cl_{2}$ at 70.90 g/mol).'
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
            label: 'If pressure increases (constant T, same gas), density ___',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 0,
            explanation: '$d = PM/(RT)$. Increasing P at constant T and for the same gas means density increases.'
          },
          {
            id: 'gl4-dd2',
            label: 'If temperature increases (constant P), density ___',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 1,
            explanation: '$d = PM/(RT)$. Increasing T at constant P means density decreases (gas expands).'
          },
          {
            id: 'gl4-dd3',
            label: 'Helium (M = 4 g/mol) is ___ (M ≈ 29 g/mol)',
            options: ['lighter than air', 'heavier than air', 'the same as air'],
            correctIndex: 0,
            explanation: 'Air has an average molar mass of about 29 g/mol. He has M = 4 g/mol, so helium is much lighter than air, which is why helium balloons float.'
          },
          {
            id: 'gl4-dd4',
            label: '$CO_{2}$ (M = 44 g/mol) is ___ (M ≈ 29 g/mol)',
            options: ['lighter than air', 'heavier than air', 'the same as air'],
            correctIndex: 1,
            explanation: '$CO_{2}$ has M = 44 g/mol, which is heavier than air (≈29 g/mol). This is why $CO_{2}$ sinks and can accumulate in low-lying areas.'
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
          },
          {
            question: 'What is the density of $O_{2}$ (M = 32.0 g/mol) at STP?',
            options: [
              '0.714 g/L',
              '1.43 g/L',
              '0.700 g/L',
              '32.0 g/L'
            ],
            correctAnswer: 1,
            explanation: '$d = PM/(RT) = (1.00)(32.0)/((0.0821)(273.15)) = 32.0/22.4 = 1.43$ g/L. Or simply: M/22.4 at STP. Using the atomic mass of O (16.0) gives 0.714 g/L, inverting the division gives 0.700 g/L, and forgetting to divide gives 32.0 g/L.'
          },
          {
            question: 'The density of an unknown gas at 1.00 atm and 300 K is 1.96 g/L. What is the molar mass?',
            options: [
              '0.0207 g/mol',
              '4890 g/mol',
              '44.0 g/mol',
              '48.3 g/mol'
            ],
            correctAnswer: 3,
            explanation: '$M = dRT/P = (1.96)(0.0821)(300)/1.00 = 48.3$ g/mol. Using the STP shortcut $1.96 \\times 22.4$ at 300 K gives 44.0, using R = 8.314 with atm gives 4890, and inverting the expression gives 0.0207.'
          },
          {
            question: 'Which gas has the greatest density at STP?',
            options: [
              '$NH_{3}$ (M = 17 g/mol)',
              '$N_{2}$ (M = 28 g/mol)',
              '$O_{2}$ (M = 32 g/mol)',
              '$CO_{2}$ (M = 44 g/mol)'
            ],
            correctAnswer: 3,
            explanation: 'At STP (same T and P), density is proportional to molar mass: $d = PM/(RT)$. $CO_{2}$ has the largest M, so it has the greatest density.'
          },
          {
            question: 'A vapor has a mass of 0.800 g and occupies 400 mL at 100°C and 1.00 atm. The molar mass is closest to:',
            options: [
              '16 g/mol',
              '0.061 g/mol',
              '61 g/mol',
              '45 g/mol'
            ],
            correctAnswer: 2,
            explanation: '$T = 373$ K, $V = 0.400$ L. $M = mRT/(PV) = (0.800)(0.0821)(373)/((1.00)(0.400)) = 24.5/0.400 = 61.2$ g/mol. Using 100 instead of 373 K gives 16, leaving V as 400 mL gives 0.061, and using 273 K gives 45.'
          },
          {
            question: 'If the temperature of a gas is doubled at constant pressure, what happens to its density?',
            options: [
              'It doubles',
              'It halves',
              'It stays the same',
              'It quadruples'
            ],
            correctAnswer: 1,
            explanation: '$d = PM/(RT)$. At constant P, density is inversely proportional to T. Doubling T halves the density.'
          },
          {
            question: 'A gas has a density of 2.50 g/L at 2.00 atm and 350 K. What is the molar mass?',
            options: [
              '56.0 g/mol',
              '144 g/mol',
              '35.9 g/mol',
              '71.8 g/mol'
            ],
            correctAnswer: 2,
            explanation: '$M = dRT/P = (2.50)(0.0821)(350)/2.00 = 71.8/2.00 = 35.9$ g/mol. Forgetting to divide by P gives 71.8, multiplying by P gives 144, and the STP shortcut $2.50 \\times 22.4$ gives 56.0, which does not apply at 2.00 atm and 350 K.'
          },
          {
            question: 'Why does a helium balloon float in air?',
            options: [
              'Helium atoms move faster than air molecules and push the balloon up',
              'Helium\'s lower molar mass gives it a lower density than air',
              'Helium forms no intermolecular attractions with air molecules',
              'Gravity pulls less strongly on noble gas atoms than on molecules'
            ],
            correctAnswer: 1,
            explanation: 'At the same T and P, $d \\propto M$. He (M = 4) has much lower density than air (M ≈ 29), so a helium-filled balloon experiences a net upward buoyant force. Faster atoms or weaker attractions do not lower the density, and gravity acts on every gram of matter equally.'
          },
          {
            question: 'The molar mass of a gas can be determined from its density, temperature, and pressure using which rearranged form of the ideal gas law?',
            options: [
              '$M = PV/T$',
              '$M = dRT/P$',
              '$M = nRT/V$',
              '$M = P/(dRT)$'
            ],
            correctAnswer: 1,
            explanation: 'From $PV = nRT$ and $n = m/M$ and $d = m/V$, we get $M = dRT/P$. This connects molar mass directly to measurable quantities.'
          }
        ]
      }
    }
  ]
}
