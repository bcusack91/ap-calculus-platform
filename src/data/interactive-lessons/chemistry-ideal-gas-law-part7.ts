export const chemIdealGasLawPart7Data = {
  topicSlug: 'ideal-gas-law',
  sections: [
    {
      id: 'gl7-intro',
      type: 'text' as const,
      content: `
# 🏆 Synthesis & AP Review

**Part 7 of 7 — Ideal vs. Real Gases & AP Exam Preparation**

You\'ve mastered the ideal gas law and all its variations. Now we examine when the ideal gas model **breaks down**, introduce the **van der Waals equation** for real gases, and tackle AP-style free-response questions.
      `
    },
    {
      id: 'gl7-ideal-vs-real',
      type: 'text' as const,
      content: `
## Ideal vs. Real Gases

The ideal gas law works well under many conditions, but **real gases** deviate from ideal behavior when:

| Factor | Ideal Assumption | Reality |
|--------|-----------------|---------|
| **Molecular volume** | Negligible | Molecules have finite size |
| **Intermolecular forces** | None | Attractive forces exist (London, dipole-dipole, H-bonds) |

### When Do Gases Deviate Most?

- **High pressure** → molecules are close together → volume of molecules matters, attractions are significant
- **Low temperature** → molecules move slowly → attractions have more effect
- **Near the boiling point** → gas is close to condensing → strong intermolecular forces

### When Is Ideal Behavior Best?

- **Low pressure** → molecules far apart → negligible volume and attractions
- **High temperature** → fast-moving molecules → overcome attractions easily
- **Noble gases and small nonpolar molecules** → weakest intermolecular forces
      `
    },
    {
      id: 'gl7-van-der-waals',
      type: 'text' as const,
      content: `
## The van der Waals Equation

To correct for real gas behavior:

$$\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT$$

| Correction | Term | What It Fixes |
|-----------|------|---------------|
| Pressure correction | $+an^2/V^2$ | Accounts for intermolecular attractions reducing observed pressure |
| Volume correction | $-nb$ | Accounts for the finite volume occupied by gas molecules |

- $a$ = attraction parameter (larger for polar molecules with strong IMFs)
- $b$ = size parameter (larger for bigger molecules)

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

1) 0.500 mol of an ideal gas at 1.00 atm and 273 K occupies what volume? (in L, to 1 decimal place)

2) A real gas has $a = 3.59$ L²·atm/mol² and $b = 0.043$ L/mol. For 1.00 mol in a 0.500 L container at 500 K, calculate the ideal gas pressure first: $P_{\\text{ideal}} = nRT/V$. (in atm, to 1 decimal place)

3) What is the corrected van der Waals pressure for the same gas? Use $P = nRT/(V-nb) - an^2/V^2$. (in atm, to 1 decimal place)
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
            options: ['more ideal', 'less ideal', 'unchanged'],
            correctIndex: 0,
            explanation: 'Higher temperature means molecules move faster, overcoming intermolecular attractions. Behavior approaches ideal.'
          },
          {
            id: 'gl7-dd2',
            options: ['more ideal', 'less ideal', 'unchanged'],
            correctIndex: 1,
            explanation: 'Higher pressure forces molecules closer together, making molecular volume and intermolecular forces more significant. Behavior deviates from ideal.'
          },
          {
            id: 'gl7-dd3',
            options: ['large a value', 'small a value', 'a = 0'],
            correctIndex: 0,
            explanation: 'Strong intermolecular forces (like hydrogen bonding in H₂O or NH₃) correspond to a large $a$ value in the van der Waals equation.'
          },
          {
            id: 'gl7-dd4',
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
            explanation: 'At constant T and P, volumes of gases are in the same ratio as moles (Avogadro\'s Law). 2 mol H₂ → 2 mol H₂O. So 4.0 L H₂ → 4.0 L H₂O (same mole ratio, 2:2 = 1:1).'
          }
        ]
      }
    }
  ]
}
