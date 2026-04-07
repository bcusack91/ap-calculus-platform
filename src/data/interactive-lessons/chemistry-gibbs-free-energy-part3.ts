export const chemGibbsFreeEnergyPart3Data = {
  topicSlug: 'gibbs-free-energy',
  sections: [
    {
      id: 'gf3-intro',
      type: 'text' as const,
      content: `
# 🏗️ Standard Free Energy of Formation

**Part 3 of 7 — Calculating ΔG° from Tables**

Just as we used $\\Delta H°_f$ to calculate $\\Delta H°_{\\text{rxn}}$, we can use standard free energies of formation ($\\Delta G°_f$) to calculate $\\Delta G°_{\\text{rxn}}$. The formula is identical in structure.
      `
    },
    {
      id: 'gf3-definition',
      type: 'text' as const,
      content: `
## ⚡ Standard Free Energy of Formation ($\\Delta G°_f$)

The free energy change when **one mole** of a compound is formed from its **elements** in their **standard states** at standard conditions.


---

### The Master Equation

$$\\Delta G°_{\\text{rxn}} = \\sum n \\cdot \\Delta G°_f(\\text{products}) - \\sum m \\cdot \\Delta G°_f(\\text{reactants})$$


---

### Key Rule

$$\\Delta G°_f = 0 \\text{ for all elements in their standard states}$$

(Same convention as $\\Delta H°_f$)


---

### Sample Values

| Substance | $\\Delta G°_f$ (kJ/mol) |
|-----------|----------------------|
| $\\text{CO}_2(g)$ | $-394.4$ |
| $\\text{H}_2\\text{O}(l)$ | $-237.1$ |
| $\\text{H}_2\\text{O}(g)$ | $-228.6$ |
| $\\text{NH}_3(g)$ | $-16.4$ |
| $\\text{NO}_2(g)$ | $+51.3$ |
| $\\text{C}_2\\text{H}_6(g)$ | $-32.0$ |
| $\\text{O}_2(g)$ | $0$ |
| $\\text{N}_2(g)$ | $0$ |
      `
    },
    {
      id: 'gf3-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

Calculate $\\Delta G°$ for: $\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$

| Substance | $\\Delta G°_f$ (kJ/mol) |
|-----------|----------------------|
| $\\text{CH}_4(g)$ | $-50.7$ |
| $\\text{O}_2(g)$ | $0$ |
| $\\text{CO}_2(g)$ | $-394.4$ |
| $\\text{H}_2\\text{O}(l)$ | $-237.1$ |

$$\\Delta G° = [(-394.4) + 2(-237.1)] - [(-50.7) + 2(0)]$$
$$= [-394.4 - 474.2] - [-50.7]$$
$$= -868.6 + 50.7 = -817.9 \\text{ kJ}$$

The large negative $\\Delta G°$ confirms that combustion of methane is very spontaneous.


---

### Two Methods to Calculate ΔG°

1. **From $\\Delta G°_f$ values** (this method) — direct lookup
2. **From $\\Delta H°$ and $\\Delta S°$**: $\\Delta G° = \\Delta H° - T\\Delta S°$

Both methods give the same answer at 25°C.
      `
    },
    {
      id: 'gf3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Standard Free Energy Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\Delta G°_f$ for Fe(s) is:',
            options: [
              'A large negative number',
              'A small positive number',
              'Exactly zero',
              'Depends on temperature'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta G°_f = 0$ for all elements in their standard states. Fe(s) is iron in its standard state.'
          },
          {
            question: 'If ΔG°_rxn is negative, this tells us:',
            options: [
              'The reaction is fast',
              'The reaction goes to completion',
              'The reaction is spontaneous under standard conditions',
              'The reaction is exothermic'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta G° < 0$ means the reaction is spontaneous under standard conditions (1 atm, 1 M, 25°C). It says nothing about rate (that is kinetics) and does not necessarily mean the reaction is exothermic.'
          },
          {
            question: 'How is ΔG°_f different from ΔH°_f?',
            options: [
              'They use different formulas (products minus reactants)',
              'ΔG°_f includes entropy effects; ΔH°_f does not',
              'ΔG°_f is always more negative than ΔH°_f',
              'ΔG°_f applies only at high temperatures'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G°_f$ incorporates both enthalpy AND entropy through $\\Delta G = \\Delta H - T\\Delta S$. $\\Delta H°_f$ accounts only for the enthalpy change. The same "products minus reactants" formula applies to both.'
          }
        ]
      }
    },
    {
      id: 'gf3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**ΔG° Calculations** 🧮

> **Given:** 

| Substance | $\\Delta G°_f$ (kJ/mol) |
|---|---|
| $\\text{CO}_2(g)$ | $-394.4$ |
| $\\text{H}_2\\text{O}(l)$ | $-237.1$ |
| $\\text{C}_2\\text{H}_6(g)$ | $-32.0$ |
| $\\text{O}_2(g)$ | $0$ |

**1)** Calculate $\\Delta G°$ for: $\\text{C}_2\\text{H}_6(g) + \\frac{7}{2}\\text{O}_2(g) \\rightarrow 2\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(l)$ (in kJ, to 1 decimal)

**2)** Is this reaction spontaneous under standard conditions? (type "yes" or "no")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['-1468.1', 'yes'],
        hint1: '$[2(-394.4) + 3(-237.1)] - [(-32.0) + 0]$',
        hint2: 'Is $\\Delta G° < 0$?',
        explanation: '1) $\\Delta G° = [2(-394.4) + 3(-237.1)] - [-32.0] = [-788.8 - 711.3] - [-32.0] = -1500.1 + 32.0 = -1468.1$ kJ. 2) Yes — $\\Delta G° < 0$, so the reaction is spontaneous under standard conditions.'
      }
    },
    {
      id: 'gf3-comparison',
      type: 'text' as const,
      content: `
## ⚖️ Comparing the Three Formation Quantities

| Quantity | Symbol | Elements | Units | What It Tells You |
|----------|--------|----------|-------|-------------------|
| Formation enthalpy | $\\Delta H°_f$ | = 0 | kJ/mol | Heat flow |
| Standard entropy | $S°$ | ≠ 0 (positive!) | J/(mol·K) | Disorder |
| Formation free energy | $\\Delta G°_f$ | = 0 | kJ/mol | Spontaneity |


---

### Common AP Mistake

Students often confuse these three quantities. Remember:
- $\\Delta H°_f$ and $\\Delta G°_f$ are **zero** for elements in standard states
- $S°$ is **NOT zero** — it is always positive at $T > 0$ K
      `
    },
    {
      id: 'gf3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Formation Free Energy Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The formula for ΔG°_rxn from formation values is',
            options: ['products + reactants', 'products × reactants', 'Σ products − Σ reactants', 'reactants − products']
          },
          {
            label: 'ΔG°_f for N₂(g) is',
            options: ['191.6 J/(mol·K)', '0 kJ/mol', '-16.4 kJ/mol', 'undefined']
          },
          {
            label: 'A compound with ΔG°_f > 0 is',
            options: ['more stable than its elements', 'less stable than its elements', 'an element', 'always a gas']
          },
          {
            label: 'ΔG° includes the effects of both',
            options: ['temperature and pressure', 'enthalpy and entropy', 'volume and mass', 'concentration and rate']
          }
        ],
        correctAnswers: ['Σ products − Σ reactants', '0 kJ/mol', 'less stable than its elements', 'enthalpy and entropy'],
        hint1: 'Same pattern as ΔH° calculations.',
        hint2: 'N₂(g) is an element in its standard state.',
        hint3: 'Positive ΔG°_f means decomposition back to elements is spontaneous.',
        explanation: 'ΔG° = Σ products − Σ reactants (same as ΔH°). N₂(g) is an element in its standard state, so ΔG°_f = 0. If ΔG°_f > 0, the compound is thermodynamically unstable relative to its elements. ΔG = ΔH − TΔS captures both enthalpy and entropy.'
      }
    },
    {
      id: 'gf3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Standard Free Energy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Given ΔG°_f (kJ/mol): NO₂(g) = +51.3, N₂O₄(g) = +97.9. Calculate ΔG° for 2NO₂(g) → N₂O₄(g).',
            options: [
              '+4.7 kJ',
              '−4.7 kJ',
              '+149.2 kJ',
              '−149.2 kJ'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G° = [97.9] - [2(51.3)] = 97.9 - 102.6 = -4.7$ kJ. The dimerization of NO₂ is slightly spontaneous under standard conditions.'
          },
          {
            question: 'Why might ΔG°_rxn calculated from ΔG°_f values differ from ΔG at non-standard conditions?',
            options: [
              'Because ΔG°_f values are approximate',
              'Because the ° symbol means standard conditions (1 atm, 1M, 25°C)',
              'Because temperature has no effect on ΔG',
              'They are always the same'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G°$ applies at standard conditions only. At non-standard conditions, we need: $\\Delta G = \\Delta G° + RT\\ln Q$ (covered in Part 5).'
          }
        ]
      }
    }
  ]
}
