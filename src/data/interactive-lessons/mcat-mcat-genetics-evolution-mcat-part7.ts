export const mcatGeneticsPart7Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge7-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 7 of 7 — Genetic Diseases & Chromosomal Abnormalities**

### Autosomal Dominant Diseases

| Disease | Gene/Feature |
|---------|-------------|
| Huntington's disease | HTT gene, trinucleotide repeat (CAG) |
| Marfan syndrome | Fibrillin-1, connective tissue |
| Familial hypercholesterolemia | LDL receptor deficiency |
| Achondroplasia | FGFR3 mutation, dwarfism |

### Autosomal Recessive Diseases

| Disease | Feature | Population |
|---------|---------|-----------|
| Cystic fibrosis | CFTR chloride channel (thick mucus) | European descent |
| Sickle cell anemia | HbS (Glu→Val), pleiotropic | African descent |
| Phenylketonuria (PKU) | Can't metabolize phenylalanine | Newborn screening |
| Tay-Sachs | Hexosaminidase A deficiency | Ashkenazi Jewish |

### Chromosomal Abnormalities

| Condition | Karyotype | Features |
|-----------|----------|---------|
| Down syndrome | Trisomy 21 | Most common viable trisomy |
| Turner syndrome | 45,X (monosomy X) | Female, short, infertile |
| Klinefelter syndrome | 47,XXY | Male, tall, infertile |

### Heterozygote Advantage

Sickle cell carriers (HbAS) are resistant to malaria → explains high frequency of sickle cell allele in malaria-endemic regions. This is **balancing selection**.`
    },
    {
      id: 'ge7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Genetic Diseases** 🎯',
      exercise: {
        questions: [
          {
            question: 'Sickle cell disease persists at high frequency in malaria-endemic regions because:',
            options: ['Heterozygote advantage — carriers (HbAS) have malaria resistance without severe disease', 'Sickle cell is dominant', 'There is no selective pressure against it', 'The mutation is beneficial in all individuals'],
            correctAnswer: 0,
            explanation: 'HbAS carriers have mild sickling that kills malaria parasites in RBCs but don\'t have the severe complications of HbSS. This heterozygote advantage (balancing selection) maintains the allele at ~20% frequency in affected regions.'
          }
        ]
      }
    },
    {
      id: 'ge7-summary',
      type: 'text' as const,
      content: `### Genetics & Evolution — Complete! ✅

From Mendel to Hardy-Weinberg to natural selection to genetic diseases — genetics and evolution are heavily tested on the MCAT. Master Punnett squares, pedigree analysis, and population genetics calculations for test day.`
    }
  ]
};
