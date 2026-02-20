export const mcatOrgChemPart4Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc4-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 4 of 7 — Carboxylic Acid Derivatives**

### Reactivity Order (most reactive → least)

$$\\text{Acid halide} > \\text{Anhydride} > \\text{Ester} > \\text{Amide} > \\text{Carboxylate}$$

### Why? The better the leaving group, the more reactive.

- Acid halide: Cl$^-$ is excellent leaving group
- Amide: NH$_2^-$ is terrible leaving group → most stable

### Key Interconversions

- Acid halide + ROH → Ester
- Acid halide + RNH$_2$ → Amide (how peptide bonds form in lab!)
- Ester + H$_2$O (acid/base) → Carboxylic acid + ROH (hydrolysis)
- Ester + NaOH → Carboxylate + ROH (saponification = soap making!)

### Biochemistry Connection

Thioester (CoA derivatives) are key metabolic intermediates — more reactive than regular esters due to weak C-S bond.`
    },
    {
      id: 'oc4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Carboxylic Acid Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which carboxylic acid derivative is LEAST reactive toward nucleophilic acyl substitution?',
            options: ['Amide', 'Acid chloride', 'Ester', 'Anhydride'],
            correctAnswer: 0,
            explanation: 'Amides are least reactive because $\\text{NH}_2^-$ is a very poor leaving group. Also, nitrogen donates electrons into the carbonyl via resonance, reducing electrophilicity.'
          }
        ]
      }
    },
    {
      id: 'oc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Reactivity of acid derivatives: halide > anhydride > ester > amide
- Saponification = base hydrolysis of an ester → soap (carboxylate salt)
- Thioesters (e.g., acetyl-CoA) are bioloical activated intermediates
- Peptide bond = amide bond — resistant to hydrolysis (needs enzymes)`
    }
  ]
};
