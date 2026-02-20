export const mcatOrgChemPart3Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc3-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 3 of 7 — Carbonyl Chemistry**

### Carbonyl Reactivity

The $C=O$ is polar: carbon is electrophilic (attacked by nucleophiles).

### Aldol Condensation

$$\\text{Enolate} + \\text{Aldehyde} \\to \\beta\\text{-hydroxy carbonyl} \\xrightarrow{\\text{heat}} \\alpha,\\beta\\text{-unsaturated carbonyl}$$

### Key Carbonyl Reactions

| Reaction | Produces | Mechanism |
|----------|----------|-----------|
| Reduction of aldehyde | 1° alcohol | NaBH$_4$ or LiAlH$_4$ |
| Reduction of ketone | 2° alcohol | NaBH$_4$ or LiAlH$_4$ |
| Reduction of carboxylic acid | 1° alcohol | LiAlH$_4$ only (stronger) |
| Oxidation of 1° alcohol | Aldehyde (PCC) or carboxylic acid (Jones) | Depends on reagent |
| Oxidation of 2° alcohol | Ketone | PCC, Jones, or K$_2$Cr$_2$O$_7$ |
| Fischer esterification | Ester | Acid + Alcohol + H$^+$ catalyst |

### MCAT High Yield: Reducing Agents

- **NaBH$_4$**: mild, reduces aldehydes and ketones only
- **LiAlH$_4$**: strong, reduces ALL carbonyls (including esters, carboxylic acids, amides)`
    },
    {
      id: 'oc3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Carbonyl Chemistry** 🎯',
      exercise: {
        questions: [
          {
            question: 'Treatment of a carboxylic acid with $\\text{NaBH}_4$ gives:',
            options: ['No reaction (NaBH$_4$ is too mild)', 'A primary alcohol', 'An aldehyde', 'An ester'],
            correctAnswer: 0,
            explanation: '$\\text{NaBH}_4$ cannot reduce carboxylic acids or esters. You need $\\text{LiAlH}_4$ for those. NaBH$_4$ only reduces aldehydes and ketones.'
          },
          {
            question: 'PCC (pyridinium chlorochromate) oxidation of a primary alcohol gives:',
            options: ['An aldehyde (mild oxidation stops here)', 'A carboxylic acid', 'A ketone', 'No reaction'],
            correctAnswer: 0,
            explanation: 'PCC is a mild oxidizing agent that converts 1° ROH to an aldehyde without over-oxidation. Jones reagent (CrO$_3$/H$_2$SO$_4$) would go all the way to carboxylic acid.'
          }
        ]
      }
    },
    {
      id: 'oc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- NaBH$_4$: mild (aldehydes/ketones only). LiAlH$_4$: strong (everything).
- PCC: mild oxidation (1° ROH → aldehyde). Jones/CrO$_3$: full oxidation.
- Fischer esterification: carboxylic acid + alcohol + acid catalyst → ester + water
- Amide bonds (peptides) are resistant to hydrolysis — that's why enzymes are needed!`
    }
  ]
};
