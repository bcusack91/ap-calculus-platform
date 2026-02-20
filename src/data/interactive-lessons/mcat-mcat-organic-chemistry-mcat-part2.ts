export const mcatOrgChemPart2Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc2-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 2 of 7 — SN1, SN2, E1, E2 Reactions**

### Substitution vs. Elimination Decision Tree

| Factor | SN2 | SN1 | E2 | E1 |
|--------|-----|-----|----|----|
| Substrate | Methyl/1° | 3° | 3° (or 2°) | 3° |
| Nucleophile | Strong | Weak | Strong BASE | Weak base |
| Solvent | Polar aprotic | Polar protic | — | Polar protic |
| Mechanism | 1 step, backside | 2 steps, carbocation | 1 step, anti | 2 steps |
| Stereochem | Inversion | Racemization | Anti-periplanar | — |

### Key Points

- **SN2**: Rate = $k[\\text{substrate}][\\text{nuc}]$. Backside attack → inversion. Sterically hindered substrates slow it.
- **SN1**: Rate = $k[\\text{substrate}]$. Carbocation intermediate → racemization. Favored by 3° substrates, polar protic solvents.
- **E2**: Strong BULKY base (t-BuOK) favors elimination over substitution. Anti-periplanar geometry required.
- **E1**: Shares carbocation intermediate with SN1. Heat favors elimination.`
    },
    {
      id: 'oc2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Reaction Mechanisms** 🎯',
      exercise: {
        questions: [
          {
            question: 'A 3° alkyl halide treated with NaOH in water would most likely undergo:',
            options: ['SN1 and E1 (competing)', 'SN2', 'E2 only', 'No reaction'],
            correctAnswer: 0,
            explanation: '3° substrate blocks SN2 (too sterically hindered). Water is polar protic. NaOH is both nucleophile and base but not bulky. Both SN1 and E1 proceed through the same carbocation intermediate. Heat favors E1.'
          },
          {
            question: 'An SN2 reaction on a chiral substrate produces:',
            options: ['Inversion of configuration', 'Retention of configuration', 'Racemic mixture', 'Random configuration'],
            correctAnswer: 0,
            explanation: 'SN2 proceeds through a single backside-attack step, giving 100% inversion of stereochemistry at the carbon center (Walden inversion).'
          }
        ]
      }
    },
    {
      id: 'oc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- SN2: strong nuc + methyl/1° + polar aprotic → inversion
- SN1: weak nuc + 3° + polar protic → racemization
- E2: strong bulky base + 2°/3° → Zaitsev product
- The SN1/E1/SN2/E2 decision chart is GUARANTEED on the MCAT`
    }
  ]
};
