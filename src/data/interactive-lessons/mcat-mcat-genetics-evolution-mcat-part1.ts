export const mcatGeneticsPart1Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge1-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 1 of 7 — Mendelian Genetics**

### Mendel's Laws

1. **Law of Segregation**: The two alleles for each gene separate during gamete formation, so each gamete carries only one allele.
2. **Law of Independent Assortment**: Genes located on different chromosomes (or far apart on the same chromosome) sort into gametes independently of one another.

### Key Terminology

| Term | Definition |
|------|-----------|
| Genotype | Genetic makeup (e.g., Aa) |
| Phenotype | Observable physical expression |
| Homozygous | Same alleles (AA or aa) |
| Heterozygous | Different alleles (Aa) |
| Dominant | Expressed in the heterozygote |
| Recessive | Only expressed when homozygous |

### Cross Types

**Monohybrid cross** (Aa $\\times$ Aa):
- Genotype ratio: 1 AA : 2 Aa : 1 aa
- Phenotype ratio: 3 dominant : 1 recessive

**Test cross**: Cross an unknown dominant phenotype with a homozygous recessive (aa) individual.
- If all offspring are dominant → the parent was AA
- If 50% dominant, 50% recessive → the parent was Aa

### MCAT Punnett Square Strategy

Always set up the cross systematically. For dihybrid crosses (AaBb $\\times$ AaBb), use a 4$\\times$4 Punnett square or the shortcut phenotype ratio:
$9\\ \\text{A\\_B\\_} : 3\\ \\text{A\\_bb} : 3\\ \\text{aaB\\_} : 1\\ \\text{aabb}$`
    },
    {
      id: 'ge1-worked',
      type: 'text' as const,
      content: `### Worked Example — Dihybrid Probability Without Drawing the Square

**Problem.** In pea plants, tall (T) is dominant to short (t), and round seeds (R) are dominant to wrinkled (r). Two plants heterozygous for both genes are crossed: $TtRr \\times TtRr$. What fraction of the offspring are expected to be **tall AND wrinkled**?

**Strategy — use the product rule instead of the full 16-box grid.** Because the two genes assort independently, you can treat each gene as a separate monohybrid cross and multiply the probabilities.

**Step 1 — Probability of tall.** $Tt \\times Tt$ gives $\\tfrac{3}{4}$ tall (T\\_) and $\\tfrac{1}{4}$ short (tt). So $P(\\text{tall}) = \\tfrac{3}{4}$.

**Step 2 — Probability of wrinkled.** $Rr \\times Rr$ gives $\\tfrac{3}{4}$ round (R\\_) and $\\tfrac{1}{4}$ wrinkled (rr). So $P(\\text{wrinkled}) = \\tfrac{1}{4}$.

**Step 3 — Multiply (product rule).**
$P(\\text{tall and wrinkled}) = \\frac{3}{4} \\times \\frac{1}{4} = \\frac{3}{16}$

This matches the $9{:}3{:}3{:}1$ ratio: the "tall, wrinkled" class (A\\_bb-style) is $\\tfrac{3}{16}$. On test day the product rule is faster and far less error-prone than drawing a 16-box square — reserve the grid for when you need the full distribution.`
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
          },
          {
            question: `In the dihybrid cross $TtRr \\times TtRr$, what fraction of offspring are expected to be homozygous recessive for BOTH genes (ttrr)?`,
            options: [`1/16`, `1/4`, `9/16`, `3/16`],
            correctAnswer: 0,
            explanation: `By the product rule, $P(tt) = \\tfrac{1}{4}$ and $P(rr) = \\tfrac{1}{4}$, so $P(ttrr) = \\tfrac{1}{4} \\times \\tfrac{1}{4} = \\tfrac{1}{16}$. This is the "1" in the 9:3:3:1 ratio.`
          },
          {
            question: `Mendel's Law of Independent Assortment is best explained at the cellular level by which event in meiosis?`,
            options: [`Random orientation of homologous chromosome pairs at metaphase I`, `Sister chromatids separating in anaphase II`, `DNA replication during S phase`, `Crossing over during prophase I`],
            correctAnswer: 0,
            explanation: `Independent assortment results from the random alignment of each homologous pair on the metaphase I plate — each pair orients independently, so alleles on different chromosomes are distributed into gametes independently. (Crossing over creates new combinations of LINKED alleles, but is not the basis of the law itself.)`
          },
          {
            question: `Two heterozygous parents (Aa $\\times$ Aa) have one offspring that is homozygous recessive (aa). What is the probability that their NEXT child is also aa?`,
            options: [`1/4 — each fertilization is an independent event`, `1/16, because two recessive children in a row is less likely`, `0, because they already used their recessive allele`, `1/2`],
            correctAnswer: 0,
            explanation: `Each fertilization is independent — prior outcomes do not change future probabilities. $P(aa) = \\tfrac{1}{4}$ for every child regardless of previous children. The probability of TWO aa children in a row (computed in advance) would be $\\tfrac{1}{4}\\times\\tfrac{1}{4}=\\tfrac{1}{16}$, but that is a different question.`
          }
        ]
      }
    },
    {
      id: 'ge1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Mendelian ratios: monohybrid 3:1 (phenotype), 1:2:1 (genotype); dihybrid 9:3:3:1
- Test cross with a homozygous recessive reveals an unknown genotype
- Law of Segregation: alleles separate. Independent Assortment: genes on different chromosomes sort independently (cellular basis = random metaphase I orientation)
- Use the **product rule** (multiply single-gene probabilities) to handle dihybrid questions quickly
- Each fertilization is independent — past offspring don't change future probabilities`
    }
  ]
};
