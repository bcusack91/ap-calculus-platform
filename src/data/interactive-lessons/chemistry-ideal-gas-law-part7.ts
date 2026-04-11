export const chemIdealGasLawPart7Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl7-intro',
      type: 'text' as const,
      content: `# 🏆 Synthesis & AP Review

**Part 7 of 7 — Ideal vs. Real Gases & AP Exam Preparation**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'gl7-ideal-vs-real',
      type: 'text' as const,
      content: `
## 📌 Ideal vs. Real Gases

> ⚠️ **Warning:** The ideal gas law is an approximation! Real gases deviate from ideal behavior, especially at high pressures and low temperatures.

The ideal gas law works well under many conditions, but **real gases** deviate from ideal behavior when:

| Factor | Ideal Assumption | Reality |
|--------|-----------------|---------|
| **Molecular volume** | Negligible | Molecules have finite size |
| **Intermolecular forces** | None | Attractive forces exist (London, dipole-dipole, H-bonds) |


---

### When Do Gases Deviate Most?

- **High pressure** → molecules are close together → volume of molecules matters, attractions are significant
- **Low temperature** → molecules move slowly → attractions have more effect
- **Near the boiling point** → gas is close to condensing → strong intermolecular forces


---

### When Is Ideal Behavior Best?

> 🔑 **Key Concept:** Gases behave most ideally at high temperature and low pressure — conditions where molecules are far apart and moving fast.

- **Low pressure** → molecules far apart → negligible volume and attractions
- **High temperature** → fast-moving molecules → overcome attractions easily
- **Noble gases and small nonpolar molecules** → weakest intermolecular forces
      `
    },
    {
      id: 'gl7-van-der-waals',
      type: 'text' as const,
      content: `
## 📌 The van der Waals Equation

To correct for real gas behavior:

$$\\boxed{\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT}$$

| Correction | Term | What It Fixes |
|-----------|------|---------------|
| Pressure correction | $+an^2/V^2$ | Accounts for intermolecular attractions reducing observed pressure |
| Volume correction | $-nb$ | Accounts for the finite volume occupied by gas molecules |

- $a$ = attraction parameter (larger for polar molecules with strong IMFs)
- $b$ = size parameter (larger for bigger molecules)


---

### Example Values

| Gas | $a$ (L²·atm/mol²) | $b$ (L/mol) |
|-----|-------------------|-------------|
| He | 0.034 | 0.024 |
| N₂ | 1.39 | 0.039 |
| CO₂ | 3.59 | 0.043 |
| H₂O | 5.46 | 0.031 |

Notice: H₂O has a large $a$ (strong H-bonds) but small $b$ (small molecule). He has tiny values for both (noble gas, very small).
      `
    },
    {
      id: 'gl7-real-gas-quiz',
      type: 'multiple-choice' as const,
      content: `
**Ideal vs. Real Gas Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which gas would be expected to deviate MOST from ideal behavior at moderate conditions?',
            options: [
              'He',
              'H₂',
              'NH₃',
              'Ne'
            ],
            correctAnswer: 2,
            explanation: 'NH₃ is a polar molecule that can form hydrogen bonds, giving it strong intermolecular forces. Noble gases (He, Ne) and H₂ have very weak London forces, so they behave more ideally.'
          },
          {
            question: 'In the van der Waals equation, the "$a$" parameter corrects for:',
            options: [
              'The finite volume of gas molecules',
              'Intermolecular attractive forces',
              'Non-elastic collisions',
              'Molecular speed distribution'
            ],
            correctAnswer: 1,
            explanation: 'The $a$ parameter corrects for intermolecular attractions. These attractions pull molecules toward each other, reducing the observed pressure below what the ideal gas law predicts. The term $an^2/V^2$ is added back to the measured pressure.'
          },
          {
            question: 'At very high pressures, the measured volume of a real gas is typically:',
            options: [
              'Less than predicted by ideal gas law',
              'Greater than predicted by ideal gas law',
              'Equal to ideal gas prediction',
              'Zero'
            ],
            correctAnswer: 1,
            explanation: 'At very high pressures, the finite volume of molecules becomes significant ($nb$ term). This means the real gas cannot be compressed as much as an ideal gas would, so the actual volume is greater than predicted.'
          }
        ]
      }
    },
    {
      id: 'gl7-ap-inputs',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculation Practice** 🧮

**1)** 0.500 mol of an ideal gas at 1.00 atm and 273 K occupies what volume? (in L, to 3 significant figures)

**2)** A real gas has $a = 3.59$ L²·atm/mol² and $b = 0.043$ L/mol. For 1.00 mol in a 0.500 L container at 500 K, calculate the ideal gas pressure first: $P_{\\text{ideal}} = nRT/V$. (in atm, to 3 significant figures)

**3)** What is the corrected van der Waals pressure for the same gas? Use $P = nRT/(V-nb) - an^2/V^2$. (in atm, to 3 significant figures)
      `,
      exercise: {
        inputs: [
          {
            label: 'Volume (L)',
            correctAnswer: '11.2',
            explanation: '$V = nRT/P = (0.500)(0.0821)(273)/(1.00) = 11.2$ L. This is exactly half the molar volume at STP, as expected for 0.5 mol.'
          },
          {
            label: 'Ideal pressure (atm)',
            correctAnswer: '82.1',
            explanation: '$P_{\\text{ideal}} = nRT/V = (1.00)(0.0821)(500)/(0.500) = 82.1$ atm.'
          },
          {
            label: 'van der Waals pressure (atm)',
            correctAnswer: '75.5',
            explanation: '$P = nRT/(V-nb) - an^2/V^2 = (1.00)(0.0821)(500)/(0.500-0.043) - (3.59)(1.00)^2/(0.500)^2 = 41.05/0.457 - 14.36 = 89.8 - 14.4 = 75.5$ atm. The real pressure is lower due to intermolecular attractions.'
          }
        ]
      }
    },
    {
      id: 'gl7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Real Gas Behavior Trends** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'gl7-dd1',
            label: 'At higher temperature, gas behavior becomes ___',
            options: ['more ideal', 'less ideal', 'unchanged'],
            correctIndex: 0,
            explanation: 'Higher temperature means molecules move faster, overcoming intermolecular attractions. Behavior approaches ideal.'
          },
          {
            id: 'gl7-dd2',
            label: 'At higher pressure, gas behavior becomes ___',
            options: ['more ideal', 'less ideal', 'unchanged'],
            correctIndex: 1,
            explanation: 'Higher pressure forces molecules closer together, making molecular volume and intermolecular forces more significant. Behavior deviates from ideal.'
          },
          {
            id: 'gl7-dd3',
            label: 'A gas with strong intermolecular forces has a ___',
            options: ['large a value', 'small a value', 'a = 0'],
            correctIndex: 0,
            explanation: 'Strong intermolecular forces (like hydrogen bonding in H₂O or NH₃) correspond to a large $a$ value in the van der Waals equation.'
          },
          {
            id: 'gl7-dd4',
            label: 'A gas with larger molecules has a ___',
            options: ['large b value', 'small b value', 'b = 0'],
            correctIndex: 0,
            explanation: 'Larger molecules occupy more physical volume, corresponding to a larger $b$ value in the van der Waals equation.'
          }
        ]
      }
    },
    {
      id: 'gl7-ap-frq',
      type: 'multiple-choice' as const,
      content: `
**AP Free-Response Style Questions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student collects 250 mL of O₂ over water at 22°C and 748 mmHg (vapor pressure of water at 22°C = 19.8 mmHg). Using the ideal gas law, the moles of dry O₂ collected is closest to:',
            options: [
              '0.0078 mol',
              '0.0098 mol',
              '0.0102 mol',
              '0.0125 mol'
            ],
            correctAnswer: 1,
            explanation: '$P_{O_2} = 748 - 19.8 = 728.2$ mmHg $= 728.2/760 = 0.9582$ atm. $V = 0.250$ L, $T = 295.15$ K. $n = PV/(RT) = (0.9582)(0.250)/((0.0821)(295.15)) = 0.2396/24.23 = 0.00989 \\approx 0.0098$ mol.'
          },
          {
            question: 'Consider the reaction: $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(g)$. If 4.0 L of H₂ reacts with excess O₂ at constant T and P, the volume of H₂O produced is:',
            options: [
              '2.0 L',
              '4.0 L',
              '6.0 L',
              '8.0 L'
            ],
            correctAnswer: 1,
            explanation: `At constant T and P, volumes of gases are in the same ratio as moles (Avogadro's Law). 2 mol H₂ → 2 mol H₂O. So 4.0 L H₂ → 4.0 L H₂O (same mole ratio, 2:2 = 1:1).`
          },
          {
            question: 'Which of the following gases would deviate MOST from ideal behavior?',
            options: [
              'He at 500 K and 0.5 atm',
              'H₂ at 400 K and 1 atm',
              'NH₃ at 200 K and 50 atm',
              'Ne at 300 K and 2 atm'
            ],
            correctAnswer: 2,
            explanation: 'NH₃ has strong hydrogen bonding (large intermolecular forces), and at low T and high P, molecules are close together and slow-moving. This maximizes deviation from ideal behavior.'
          },
          {
            question: 'In the van der Waals equation $(P + a(n/V)^2)(V - nb) = nRT$, the "a" term corrects for:',
            options: [
              'Molecular volume',
              'Intermolecular attractive forces',
              'Non-elastic collisions',
              'Temperature-dependent behavior'
            ],
            correctAnswer: 1,
            explanation: 'The "a" correction accounts for intermolecular attractions that reduce the observed pressure compared to ideal behavior.'
          },
          {
            question: 'In the van der Waals equation, the "b" term corrects for:',
            options: [
              'Intermolecular forces',
              'Non-elastic collisions',
              'The physical volume of gas molecules',
              'Temperature dependence'
            ],
            correctAnswer: 2,
            explanation: 'The "b" term subtracts the volume occupied by the gas molecules themselves, correcting for the fact that real molecules have nonzero volume.'
          },
          {
            question: 'A 5.00 L flask contains 0.200 mol of gas at 300 K. The gas is heated to 600 K in the sealed flask. The final pressure is:',
            options: [
              'Half the initial pressure',
              'Equal to the initial pressure',
              'Twice the initial pressure',
              'Four times the initial pressure'
            ],
            correctAnswer: 2,
            explanation: 'At constant V and n: $P \\propto T$. Doubling T from 300 K to 600 K doubles the pressure.'
          },
          {
            question: 'Which condition makes gases behave most ideally?',
            options: [
              'Low temperature, high pressure',
              'High temperature, low pressure',
              'Low temperature, low pressure',
              'High temperature, high pressure'
            ],
            correctAnswer: 1,
            explanation: 'High T means fast molecules that overcome intermolecular forces; low P means molecules are far apart so volume and forces are negligible. Both conditions favor ideal behavior.'
          },
          {
            question: 'At very high pressures, the measured volume of a real gas is ________ the ideal gas prediction.',
            options: [
              'Greater than',
              'Less than',
              'Equal to',
              'Sometimes greater, sometimes less'
            ],
            correctAnswer: 0,
            explanation: 'At very high pressures, the finite volume of the gas molecules themselves becomes significant. The "b" correction in the van der Waals equation means the actual volume exceeds the ideal prediction.'
          },
          {
            question: 'The compressibility factor $Z = PV/(nRT)$ is exactly 1.0 for:',
            options: [
              'All real gases',
              'An ideal gas only',
              'Any gas at STP',
              'Any gas at high pressure'
            ],
            correctAnswer: 1,
            explanation: 'For an ideal gas, $PV = nRT$ exactly, so $Z = 1.0$. Real gases have $Z \\neq 1$ due to intermolecular forces and molecular volume.'
          },
          {
            question: 'On the AP Chemistry exam, a student is given P in kPa, V in L, T in K, and is asked to find n. Which value of R should they use?',
            options: [
              '0.0821 L·atm/(mol·K)',
              '8.314 L·kPa/(mol·K)',
              '62.36 L·torr/(mol·K)',
              'Convert kPa to atm first, then use 0.0821'
            ],
            correctAnswer: 1,
            explanation: 'When P is in kPa and V is in L, use $R = 8.314$ L·kPa/(mol·K) directly — no unit conversion needed.'
          }
        ]
      }
    }
  ]
}
