export const mcatThermoPart3Data = {
  topicSlug: 'mcat-general-chemistry-thermodynamics-mcat',
  sections: [
    {
      id: 'thermo3-intro',
      type: 'text' as const,
      content: `# Thermodynamics

**Part 3 of 5 — Gibbs Free Energy, $K_{eq}$ & Cell Potential**

## Gibbs Free Energy ($G$)

$$\\Delta G = \\Delta H - T\\Delta S$$

$\\Delta G$ combines both enthalpy and entropy to predict spontaneity:

| $\\Delta G$ | Process |
|-----------|---------|
| $\\Delta G < 0$ | Spontaneous (thermodynamically favorable) |
| $\\Delta G = 0$ | At equilibrium |
| $\\Delta G > 0$ | Non-spontaneous (requires energy input) |

Temperature governs which effect wins when $\\Delta H$ and $\\Delta S$ have the same sign.

## Standard Gibbs Free Energy ($\\Delta G°$)

$$\\Delta G° = \\Delta H° - T\\Delta S°$$

Also calculable from formation values:
$$\\Delta G° = \\sum n\\Delta G°_f(\\text{products}) - \\sum m\\Delta G°_f(\\text{reactants})$$

## Relationship Between $\\Delta G°$ and $K_{eq}$

$$\\Delta G° = -RT\\ln K$$

where $R = 8.314$ J/mol·K, $T$ in Kelvin.

| $\\Delta G°$ | $K$ | Meaning |
|------------|-----|---------|
| $< 0$ | $K > 1$ | Products favored at equilibrium |
| $= 0$ | $K = 1$ | Reactants and products roughly equal |
| $> 0$ | $K < 1$ | Reactants favored at equilibrium |

**Large negative $\\Delta G°$ → large $K$ → reaction runs nearly to completion.**

## Relationship to Cell Potential ($E° _{\\text{cell}}$)

For electrochemical reactions:

$$\\Delta G° = -nFE°_{\\text{cell}}$$

where:
- $n$ = moles of electrons transferred
- $F = 96{,}485$ C/mol (Faraday constant)
- $E°_{\\text{cell}}$ measured in volts (V)

**Connection between $\\Delta G°$, $K$, and $E°_{\\text{cell}}$:**

$$\\Delta G° = -RT\\ln K = -nFE°_{\\text{cell}}$$

| Sign of $E°_{\\text{cell}}$ | $\\Delta G°$ | Spontaneous? |
|---------------------------|------------|-------------|
| $E°_{\\text{cell}} > 0$ | Negative | Yes |
| $E°_{\\text{cell}} < 0$ | Positive | No |
| $E°_{\\text{cell}} = 0$ | Zero | At equilibrium |

## $\\Delta G$ at Non-Standard Conditions

When the system is not at standard conditions:

$$\\Delta G = \\Delta G° + RT\\ln Q$$

At equilibrium, $\\Delta G = 0$ and $Q = K$, which yields $\\Delta G° = -RT\\ln K$ (as above).

## Coupled Reactions

In biochemistry, non-spontaneous reactions are driven by coupling with spontaneous ones:

**Example:** Glucose phosphorylation ($\\Delta G° = +13.8$ kJ) is coupled with ATP hydrolysis ($\\Delta G° = -30.5$ kJ):

$$\\Delta G°_{\\text{total}} = 13.8 + (-30.5) = -16.7\\text{ kJ} \\quad \\text{(spontaneous)}$$

This is how cells use ATP to drive energetically unfavorable biochemical reactions.
`
    },
    {
      id: 'thermo3-quiz',
      type: 'multiple-choice' as const,
      content: `**Gibbs Free Energy, $K_{eq}$ & $E°_{\\text{cell}}$** 🎯`,
      exercise: {
        questions: [
          {
            question: `A reaction has $\\Delta H° = -100$ kJ and $\\Delta S° = -200$ J/K. At what temperature does the reaction become non-spontaneous?`,
            options: [`T > 0 K`, `T > 500 K`, `T > 200 K`, `Always spontaneous`],
            correctAnswer: 1,
            explanation: `$\\Delta G = \\Delta H - T\\Delta S = -100{,}000 - T(-200) = -100{,}000 + 200T$. Non-spontaneous when $\\Delta G > 0$: $-100{,}000 + 200T > 0 \\Rightarrow T > 500\\text{ K}$. Below 500 K, the negative $\\Delta H$ dominates and the reaction is spontaneous.`
          },
          {
            question: `A reaction has $\\Delta G° = -17.1$ kJ at 298 K. What is $K_{eq}$? ($R = 8.314$ J/mol·K; $\\ln K = -\\Delta G°/RT$)`,
            options: [`K < 1`, `K = 1`, `K ≈ 1000`, `K ≈ 0.001`],
            correctAnswer: 2,
            explanation: `$\\ln K = -\\Delta G°/RT = -(-17{,}100)/(8.314 \\times 298) = 17{,}100/2477 = 6.90$. $K = e^{6.90} \\approx \\mathbf{1000}$. Since $\\Delta G° < 0$, $K > 1$ as expected.`
          },
          {
            question: `A galvanic cell has $E°_{\\text{cell}} = +1.20$ V and $n = 2$ mol electrons. What is $\\Delta G°$? ($F = 96{,}500$ C/mol)`,
            options: [
              `$+231.6$ kJ`,
              `$-231.6$ kJ`,
              `$+115.8$ kJ`,
              `$-115.8$ kJ`
            ],
            correctAnswer: 1,
            explanation: `$\\Delta G° = -nFE° = -(2)(96{,}500)(1.20) = -231{,}600\\text{ J} = \\mathbf{-231.6\\text{ kJ}}$. Positive $E°_{\\text{cell}}$ → negative $\\Delta G°$ → galvanic cell is spontaneous.`
          },
          {
            question: `In biochemistry, ATP hydrolysis ($\\Delta G° = -30.5$ kJ) is coupled to drive a reaction with $\\Delta G° = +20.0$ kJ. Is the coupled process spontaneous?`,
            options: [
              `No — the driven reaction has $\\Delta G° > 0$`,
              `Yes — total $\\Delta G° = -10.5$ kJ`,
              `Cannot determine without temperature`,
              `Yes — but only if a catalyst is present`
            ],
            correctAnswer: 1,
            explanation: `Coupled reaction total: $\\Delta G°_{\\text{total}} = +20.0 + (-30.5) = -10.5\\text{ kJ}$. Since total $\\Delta G° < 0$, the coupled process is **spontaneous**. This is the biochemical role of ATP — coupling its hydrolysis to drive non-spontaneous reactions.`
          },
          {
            question: `If $\\Delta G° > 0$ for a reaction, which of the following is TRUE at standard conditions?`,
            options: [
              `The reaction cannot proceed in any direction`,
              `The reaction is non-spontaneous as written, but $K < 1$ means reactants are favored`,
              `The reaction has a negative cell potential in an electrochemical cell`,
              `Both B and C are correct`
            ],
            correctAnswer: 3,
            explanation: `$\\Delta G° > 0$ means: (1) non-spontaneous as written; (2) $K < 1$ (reactants favored); (3) $E°_{\\text{cell}} < 0$ (from $\\Delta G° = -nFE°_{\\text{cell}}$, positive $\\Delta G°$ gives negative $E°$). All of B and C are correct.`
          }
        ]
      }
    },
    {
      id: 'thermo3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- $\\Delta G = \\Delta H - T\\Delta S$: negative $\\Delta G$ = spontaneous
- $\\Delta G° = -RT\\ln K$: negative $\\Delta G°$ → $K > 1$ (products favored)
- $\\Delta G° = -nFE°_{\\text{cell}}$: positive $E°_{\\text{cell}}$ → negative $\\Delta G°$ → spontaneous galvanic cell
- At equilibrium: $\\Delta G = 0$, $Q = K$
- Non-standard conditions: $\\Delta G = \\Delta G° + RT\\ln Q$
- Coupled reactions: add $\\Delta G°$ values; ATP hydrolysis drives non-spontaneous biochemical reactions
- The $\\Delta G$, $K$, and $E°_{\\text{cell}}$ are all interconnected — if you know one, you can find the others
`
    }
  ]
};
