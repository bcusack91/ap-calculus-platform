export const mcatThermoPart2Data = {
  topicSlug: 'mcat-general-chemistry-thermodynamics-mcat',
  sections: [
    {
      id: 'thermo2-intro',
      type: 'text' as const,
      content: `# Thermodynamics

**Part 2 of 5 — Entropy ($\\Delta S$), Spontaneity & the Laws of Thermodynamics**

## Entropy ($S$)

**Entropy** is a measure of disorder or randomness of a system.

$$\\Delta S = S_{\\text{products}} - S_{\\text{reactants}}$$

| $\\Delta S$ | Meaning |
|------------|---------|
| Positive ($\\Delta S > 0$) | Increased disorder |
| Negative ($\\Delta S < 0$) | Decreased disorder |

## Predicting the Sign of $\\Delta S$

**$\\Delta S > 0$ (entropy increases) when:**

1. Gases are produced from solids/liquids ($\\Delta n_{\\text{gas}} > 0$)
2. A solid dissolves to form aqueous ions
3. Temperature increases (for any substance)
4. A substance vaporizes or melts
5. Mixing occurs
6. Gas occupies larger volume

**$\\Delta S < 0$ (entropy decreases) when:**

1. Gases are consumed ($\\Delta n_{\\text{gas}} < 0$, e.g., 3 mol gas → 1 mol gas)
2. A substance crystallizes/freezes
3. Complex molecules form from simpler ones (polymerization)

## Laws of Thermodynamics

**Zeroth Law:** If A is in thermal equilibrium with B, and B with C, then A is in equilibrium with C. (Defines temperature)

**First Law:** Energy is conserved. $\\Delta E_{\\text{universe}} = 0$.

$$\\Delta U = q + w \\quad (\\text{internal energy} = \\text{heat} + \\text{work})$$

where $w = -P\\Delta V$ for expansion/compression work.

**Second Law:** The entropy of the universe always increases for spontaneous processes.

$$\\Delta S_{\\text{universe}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0 \\quad (\\text{spontaneous})$$

**Third Law:** The entropy of a perfect crystal at absolute zero (0 K) is exactly zero. This establishes an absolute reference for entropy measurements.

## Standard Molar Entropy ($S°$)

$S° > 0$ for all pure substances (third law). More complex molecules have higher $S°$ values.

$$\\Delta S°_{\\text{rxn}} = \\sum n S°(\\text{products}) - \\sum m S°(\\text{reactants})$$

## Spontaneity — First Look

A process is **spontaneous** if it can proceed without continuous external input of energy.

**Caution:** Spontaneous does NOT mean fast (kinetics is separate from thermodynamics).

- Exothermic processes ($\\Delta H < 0$) tend to be spontaneous — enthalpy drives spontaneity
- Disorder increasing ($\\Delta S > 0$) tends to be spontaneous — entropy drives spontaneity
- But both factors matter — see Gibbs free energy (Part 3)

| $\\Delta H$ | $\\Delta S$ | Spontaneous? |
|------------|------------|-------------|
| − | + | Always spontaneous |
| + | − | Never spontaneous |
| − | − | Depends on T (low T favors) |
| + | + | Depends on T (high T favors) |
`
    },
    {
      id: 'thermo2-quiz',
      type: 'multiple-choice' as const,
      content: `**Entropy & Laws of Thermodynamics** 🎯`,
      exercise: {
        questions: [
          {
            question: `For the reaction $\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$, what is the sign of $\\Delta S$?`,
            options: [
              `$\\Delta S < 0$ — two solids form`,
              `$\\Delta S > 0$ — a gas is produced`,
              `$\\Delta S = 0$ — no net change in moles`,
              `Cannot be determined without data`
            ],
            correctAnswer: 1,
            explanation: `A gas ($\\text{CO}_2$) is produced from a solid. Gas has far more entropy than solid phases. $\\Delta n_{\\text{gas}} = +1 \\Rightarrow \\mathbf{\\Delta S > 0}$.`
          },
          {
            question: `The Second Law of Thermodynamics states that:`,
            options: [
              `Energy cannot be created or destroyed`,
              `The entropy of the universe increases for all spontaneous processes`,
              `The entropy of a perfect crystal is zero at 0 K`,
              `The enthalpy of a reaction must be negative for spontaneity`
            ],
            correctAnswer: 1,
            explanation: `The **Second Law**: $\\Delta S_{\\text{universe}} > 0$ for spontaneous processes. Option A is the First Law; Option C is the Third Law; Option D is incorrect — spontaneity requires $\\Delta G < 0$, not just $\\Delta H < 0$.`
          },
          {
            question: `Which process has $\\Delta S < 0$?`,
            options: [
              `Vaporization of water`,
              `Dissolution of NaCl in water`,
              `$\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$`,
              `Melting of ice`
            ],
            correctAnswer: 2,
            explanation: `$\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$: 4 moles of gas → 2 moles of gas. $\\Delta n_{\\text{gas}} = -2$. Entropy **decreases** ($\\Delta S < 0$). The other options all involve increased disorder.`
          },
          {
            question: `A reaction has $\\Delta H = +50$ kJ and $\\Delta S = +100$ J/K. At what temperature does the reaction become spontaneous?`,
            options: [
              `T > 0 K`,
              `T > 500 K`,
              `T > 50 K`,
              `The reaction is never spontaneous`
            ],
            correctAnswer: 1,
            explanation: `Spontaneous when $\\Delta G < 0$: $\\Delta G = \\Delta H - T\\Delta S < 0$. $+50{,}000 - T(100) < 0$ (converting kJ and J consistently). $T > 50{,}000/100 = \\mathbf{500\\text{ K}}$.`
          },
          {
            question: `For the freezing of water at 0°C and 1 atm, which statement is correct?`,
            options: [
              `$\\Delta S_{\\text{sys}} > 0$; spontaneous`,
              `$\\Delta S_{\\text{sys}} < 0$; not spontaneous`,
              `$\\Delta S_{\\text{sys}} < 0$; spontaneous at equilibrium (0°C)`,
              `$\\Delta S_{\\text{universe}} < 0$; spontaneous`
            ],
            correctAnswer: 2,
            explanation: `At the freezing point (0°C), liquid water and ice are in equilibrium. Freezing decreases disorder, so $\\Delta S_{\\text{sys}} < 0$. However, the released heat to the surroundings increases $\\Delta S_{\\text{surr}}$ by exactly the same amount, so $\\Delta S_{\\text{universe}} = 0$ — the process is reversible at equilibrium.`
          }
        ]
      }
    },
    {
      id: 'thermo2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- Entropy increases when gases form, substances dissolve, temperature rises, or mixing occurs
- Entropy decreases when gases condense, substances crystallize, or complexity increases
- **Second Law:** $\\Delta S_{\\text{universe}} > 0$ for all spontaneous processes
- **Third Law:** $S = 0$ for perfect crystal at 0 K; all $S° > 0$ at room temperature
- Spontaneous ≠ fast; thermodynamics says nothing about how quickly a reaction occurs
- $\\Delta H < 0$ favors spontaneity; $\\Delta S > 0$ favors spontaneity; temperature controls the trade-off
`
    }
  ]
};
