export const mcatGeneticsPart2Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge2-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 2 of 7 — Non-Mendelian Inheritance**

### Extensions to Mendel

| Pattern | Description | Example |
|---------|-------------|---------|
| **Incomplete dominance** | Heterozygote = intermediate phenotype | Red $\\times$ White → Pink flowers |
| **Codominance** | Both alleles fully expressed | Blood type AB (both A and B antigens) |
| **Multiple alleles** | >2 alleles exist in population | ABO blood type ($I^A$, $I^B$, i) |
| **Pleiotropy** | One gene → multiple phenotypic effects | Sickle cell anemia |
| **Epistasis** | One gene masks another gene's expression | Coat color in labs |
| **Polygenic** | Multiple genes → one trait | Height, skin color |

### ABO Blood Type (MCAT FAVORITE)

| Genotype | Blood Type | Antigens | Antibodies |
|----------|-----------|----------|-----------|
| $I^AI^A$ or $I^Ai$ | A | A antigen | Anti-B |
| $I^BI^B$ or $I^Bi$ | B | B antigen | Anti-A |
| $I^AI^B$ | AB | Both A and B | Neither |
| ii | O | Neither | Anti-A and Anti-B |

- $I^A$ and $I^B$ are **codominant** to each other
- Both are **dominant** over i
- Type O = universal donor (no antigens)
- Type AB = universal recipient (no antibodies)`
    },
    {
      id: 'ge2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Non-Mendelian** 🎯',
      exercise: {
        questions: [
          {
            question: 'A mother with blood type A (genotype $I^Ai$) and a father with blood type B (genotype $I^Bi$) can have children with which blood types?',
            options: ['A, B, AB, or O — all four are possible', 'Only A or B', 'Only AB', 'Only A, B, or AB'],
            correctAnswer: 0,
            explanation: 'Cross $I^Ai \\times I^Bi$: offspring can be $I^AI^B$ (AB), $I^Ai$ (A), $I^Bi$ (B), or ii (O). All four blood types are possible — a classic MCAT genetics question.'
          }
        ]
      }
    },
    {
      id: 'ge2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Incomplete dominance: blending. Codominance: both expressed (AB blood).
- ABO: $I^A$ and $I^B$ codominant, both dominant over i
- Pleiotropy = one gene, many effects. Epistasis = one gene masks another.
- Polygenic traits show continuous variation (bell curve)`
    }
  ]
};
