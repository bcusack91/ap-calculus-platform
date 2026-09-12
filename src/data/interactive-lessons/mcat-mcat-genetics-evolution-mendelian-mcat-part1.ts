export const mcatMendelianPart1Data = {
  topicSlug: 'mcat-genetics-evolution-mendelian-mcat',
  sections: [
    {
      id: 'men1-intro',
      type: 'text' as const,
      content: `# Mendelian Genetics — Deep Dive

**Part 1 of 4 — Mendel's Laws & the Probability Toolkit**

### The Two Laws

1. **Law of Segregation**: A diploid individual carries two alleles for each gene; these separate during gamete formation so each gamete receives exactly one. Physical basis: separation of **homologous chromosomes in anaphase I** of meiosis.
2. **Law of Independent Assortment**: Alleles of genes on **different chromosomes** (or far apart on the same chromosome) are distributed to gametes independently. Physical basis: **random orientation of homologous pairs at metaphase I**.

### Vocabulary You Must Not Confuse

| Term | Definition |
|------|-----------|
| Gene | A heritable unit of DNA encoding a product |
| Allele | A version of a gene (A vs. a) |
| Locus | The physical chromosomal position of a gene |
| Genotype | Allele combination (AA, Aa, aa) |
| Phenotype | Observable trait produced by genotype + environment |
| Hemizygous | Only one copy present (X-linked genes in males) |
| True-breeding | Homozygous line; selfing gives identical offspring |

### The Canonical Crosses

**Monohybrid** (Aa $\\times$ Aa): genotypes $1\\ AA : 2\\ Aa : 1\\ aa$; phenotypes $3 : 1$.

**Dihybrid** (AaBb $\\times$ AaBb): phenotypes $9\\ A\\_B\\_ : 3\\ A\\_bb : 3\\ aaB\\_ : 1\\ aabb$ — but ONLY if the genes assort independently and both show complete dominance.

**Test cross**: unknown dominant $\\times$ homozygous recessive (aa).
- All dominant offspring → tested parent AA
- $1:1$ dominant : recessive → tested parent Aa

A test cross works because the recessive parent contributes only recessive alleles, so offspring phenotypes read out the tested parent's gametes directly.

### The Probability Toolkit (faster than Punnett squares)

- **Product rule (AND)**: independent events multiply. $P(A \\text{ and } B) = P(A) \\times P(B)$
- **Sum rule (OR)**: mutually exclusive events add. $P(A \\text{ or } B) = P(A) + P(B)$
- **Complement**: $P(\\text{at least one}) = 1 - P(\\text{none})$

For any multi-gene cross with independent assortment, decompose into single-gene crosses and multiply. A gamete from AaBbCc carries a specific allele combination (say $abc$) with probability $\\tfrac{1}{2} \\times \\tfrac{1}{2} \\times \\tfrac{1}{2} = \\tfrac{1}{8}$ — and such a parent makes $2^3 = 8$ gamete types.

### How Many Gamete Types?

An individual heterozygous at $n$ independently assorting loci produces $2^n$ genetically distinct gamete classes (ignoring crossing over within genes). AaBBCc → heterozygous at 2 loci → $2^2 = 4$ gamete types.`
    },
    {
      id: 'men1-worked',
      type: 'text' as const,
      content: `### Worked Example — Trihybrid Cross Without a 64-Box Grid

**Problem.** In a plant, purple flowers (P) are dominant to white (p), tall stems (T) to short (t), and smooth seeds (S) to rough (s). All three genes assort independently. Cross: $PpTtSs \\times PpTtss$. What fraction of offspring are expected to show **purple, short, smooth**?

**Step 1 — Split into three monohybrid problems.**

- Flower color: $Pp \\times Pp$ → $P(\\text{purple, i.e., } P\\_) = \\tfrac{3}{4}$
- Height: $Tt \\times Tt$ → $P(\\text{short, } tt) = \\tfrac{1}{4}$
- Seed coat: $Ss \\times ss$ → this is a test-cross pattern: $\\tfrac{1}{2}\\ Ss$ (smooth), $\\tfrac{1}{2}\\ ss$ (rough). So $P(\\text{smooth}) = \\tfrac{1}{2}$

**Step 2 — Product rule.**
$P = \\frac{3}{4} \\times \\frac{1}{4} \\times \\frac{1}{2} = \\frac{3}{32}$

**Why this matters on the MCAT.** A full trihybrid Punnett square has $8 \\times 8 = 64$ cells. The decompose-and-multiply strategy takes 20 seconds and generalizes to "at least one" questions via the complement rule. For example, the probability that an offspring shows at least one recessive phenotype is $1 - P(\\text{dominant for all three}) = 1 - \\left(\\tfrac{3}{4} \\times \\tfrac{3}{4} \\times \\tfrac{1}{2}\\right) = 1 - \\tfrac{9}{32} = \\tfrac{23}{32}$.`
    },
    {
      id: 'men1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mendel's Laws & Probability** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which meiotic event is the physical basis of Mendel's Law of Segregation?`,
            options: [`Crossing over in prophase I`, `Separation of homologous chromosomes in anaphase I`, `Separation of sister chromatids in anaphase II`, `Alignment of chromosomes in metaphase II`],
            correctAnswer: 1,
            explanation: `The two alleles of a gene sit on the two homologous chromosomes. When homologs separate in anaphase I, the alleles segregate into different cells — the Law of Segregation. (Metaphase I ORIENTATION underlies independent assortment; anaphase II separates identical sister chromatids.)`
          },
          {
            question: `An individual with genotype AaBbCCDd (all genes on different chromosomes) can produce how many genetically distinct gamete classes?`,
            options: [`16`, `4`, `8`, `2`],
            correctAnswer: 2,
            explanation: `Only heterozygous loci contribute choices: Aa, Bb, and Dd are heterozygous (3 loci); CC always contributes C. So $2^3 = 8$ gamete types. The distractor 16 comes from wrongly counting CC as a fourth heterozygous locus.`
          },
          {
            question: `In the cross $AaBb \\times aabb$ with independent assortment, what fraction of offspring show BOTH dominant phenotypes?`,
            options: [`9/16`, `1/2`, `1/8`, `1/4`],
            correctAnswer: 3,
            explanation: `Each gene is a test-cross pattern: $P(A\\_) = \\tfrac{1}{2}$ and $P(B\\_) = \\tfrac{1}{2}$, so $\\tfrac{1}{2} \\times \\tfrac{1}{2} = \\tfrac{1}{4}$. The 9/16 answer is the trap — it applies to a dihybrid F2 (AaBb $\\times$ AaBb), not a test cross.`
          },
          {
            question: `Two parents are both Aa. What is the probability that at least one of their three children is homozygous recessive (aa)?`,
            options: [`$1 - (3/4)^3 = 37/64$`, `$(1/4)^3 = 1/64$`, `$3/4$`, `$3 \\times 1/4 = 3/4$`],
            correctAnswer: 0,
            explanation: `Use the complement: $P(\\text{no aa child}) = \\left(\\tfrac{3}{4}\\right)^3 = \\tfrac{27}{64}$, so $P(\\text{at least one}) = 1 - \\tfrac{27}{64} = \\tfrac{37}{64}$. Adding $\\tfrac{1}{4}$ three times double-counts families with multiple aa children.`
          },
          {
            question: `A researcher test-crosses a purple-flowered plant of unknown genotype and obtains 62 purple and 58 white offspring. The best conclusion is that the tested plant was:`,
            options: [`Homozygous dominant (PP)`, `Heterozygous (Pp)`, `Homozygous recessive (pp)`, `Impossible to determine without a larger sample`],
            correctAnswer: 1,
            explanation: `A test cross is unknown $\\times$ pp. The observed ratio is very close to $1:1$, the signature of $Pp \\times pp$ ($\\tfrac{1}{2}$ purple, $\\tfrac{1}{2}$ white). PP would give all purple offspring, and a pp plant would have white flowers itself. With 120 offspring, the $1:1$ result is statistically convincing.`
          }
        ]
      }
    },
    {
      id: 'men1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Segregation = homologs separate (anaphase I); Independent Assortment = random metaphase I orientation of different pairs
- Monohybrid: 3:1 phenotype, 1:2:1 genotype. Dihybrid F2: 9:3:3:1 — only with independence and complete dominance
- Test cross ($\\times$ aa) reads out the unknown parent's gametes: all dominant → AA; 1:1 → Aa
- Product rule for AND, sum rule for OR, complement for "at least one"
- Heterozygous at $n$ independent loci → $2^n$ gamete classes; only heterozygous loci count`
    }
  ]
};
