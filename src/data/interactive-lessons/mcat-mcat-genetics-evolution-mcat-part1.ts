export const mcatGeneticsPart1Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge1-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 1 of 7 — Mendelian Genetics**

### Mendel's Laws

1. **Law of Segregation**: Two alleles for each gene separate during gamete formation
2. **Law of Independent Assortment**: Genes on different chromosomes sort independently

### Key Terminology

| Term | Definition |
|------|-----------|
| Genotype | Genetic makeup (e.g., Aa) |
| Phenotype | Physical expression |
| Homozygous | Same alleles (AA or aa) |
| Heterozygous | Different alleles (Aa) |
| Dominant | Expressed in heterozygote |
| Recessive | Only expressed when homozygous |

### Cross Types

**Monohybrid cross** (Aa $\\times$ Aa):
- Genotype ratio: 1 AA : 2 Aa : 1 aa
- Phenotype ratio: 3 dominant : 1 recessive

**Test cross**: Cross unknown genotype with homozygous recessive (aa)
- If all offspring dominant → parent was AA
- If 50% dominant, 50% recessive → parent was Aa

### MCAT Punnett Square Strategy

Always set up the cross systematically. For dihybrid crosses (AaBb $\\times$ AaBb), use the 4$\\times$4 Punnett square or the shortcut:
$$\\text{9 A_B_} : \\text{3 A_bb} : \\text{3 aaB_} : \\text{1 aabb}$$`
    },
    {
      id: 'ge1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mendelian Genetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a cross between two heterozygous parents (Aa $\\times$ Aa), what fraction of offspring are EXPECTED to be heterozygous?`,
            options: [`1/2 (50%)`, `1/4 (25%)`, `3/4 (75%)`, `1/3 (33%)`],
            correctAnswer: 0,
            explanation: `Aa $\\times$ Aa → 1 AA : 2 Aa : 1 aa. Heterozygous (Aa) = 2/4 = 1/2. A common MCAT trap: 3/4 is the phenotype ratio (dominant), not the genotype ratio for heterozygotes.`
          },
          {
            question: `A test cross reveals half the offspring are recessive. The tested parent must be:`,
            options: [`Heterozygous (Aa)`, `Homozygous dominant (AA)`, `Homozygous recessive (aa)`, `Cannot determine`],
            correctAnswer: 0,
            explanation: `Test cross = unknown $\\times$ aa. If Aa $\\times$ aa → 1/2 Aa (dominant) : 1/2 aa (recessive). If AA $\\times$ aa → all Aa (all dominant). Since half are recessive, the parent is Aa.`
          }
        ]
      }
    },
    {
      id: 'ge1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Mendelian ratios: Monohybrid 3:1, Dihybrid 9:3:3:1
- Test cross with homozygous recessive reveals unknown genotype
- Law of Segregation: alleles separate. Independent Assortment: genes on different chromosomes sort independently
- The 3:1 ratio is PHENOTYPIC; genotypic ratio is 1:2:1`
    }
  ]
};
