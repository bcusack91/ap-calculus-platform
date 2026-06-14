export const mcatGeneticsPart7Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge7-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 7 of 7 — Genetic Diseases & Chromosomal Abnormalities**

### Autosomal Dominant Diseases

| Disease | Gene / Feature |
|---------|-------------|
| Huntington's disease | HTT gene, CAG trinucleotide repeat expansion |
| Marfan syndrome | Fibrillin-1, connective tissue |
| Familial hypercholesterolemia | LDL receptor deficiency |
| Achondroplasia | FGFR3 mutation, short-limbed dwarfism |

### Autosomal Recessive Diseases

| Disease | Feature | Population |
|---------|---------|-----------|
| Cystic fibrosis | CFTR chloride channel defect (thick mucus) | European descent |
| Sickle cell anemia | HbS (Glu→Val at position 6), pleiotropic | African descent |
| Phenylketonuria (PKU) | Cannot metabolize phenylalanine | Newborn screening |
| Tay-Sachs | Hexosaminidase A deficiency | Ashkenazi Jewish |

### Chromosomal Abnormalities

| Condition | Karyotype | Features |
|-----------|----------|---------|
| Down syndrome | Trisomy 21 | Most common viable autosomal trisomy |
| Turner syndrome | 45,X (monosomy X) | Female, short stature, infertile |
| Klinefelter syndrome | 47,XXY | Male, tall, often infertile |

Most aneuploidies arise from **nondisjunction** — the failure of chromosomes (meiosis I) or sister chromatids (meiosis II) to separate properly.

### Heterozygote Advantage

Sickle cell carriers (HbAS) are resistant to malaria, which explains the high frequency of the sickle cell allele in malaria-endemic regions. This is **balancing selection** maintaining both alleles in the population.`
    },
    {
      id: 'ge7-worked',
      type: 'text' as const,
      content: `### Worked Example — Tracing Nondisjunction to a Trisomy

**Problem.** A child is born with Down syndrome (trisomy 21), having **three** copies of chromosome 21. Cytogenetic analysis shows the two maternally derived copies are **non-identical** (they are the two different homologs of chromosome 21 the mother carries). In which meiotic division did the nondisjunction most likely occur, and in which parent?

**Step 1 — Recall the two types of nondisjunction.**
- **Meiosis I nondisjunction**: homologous chromosomes fail to separate, so a gamete receives **both homologs** (which are non-identical).
- **Meiosis II nondisjunction**: sister chromatids fail to separate, so a gamete receives **two identical copies** of the same chromosome.

**Step 2 — Use the clue.** The two extra-from-mom copies are **different homologs** (non-identical). Receiving both homologs is the hallmark of **meiosis I** nondisjunction.

**Step 3 — Assign the parent.** The two extra copies trace to the **mother**, so the error occurred in **maternal meiosis I**. (This fits the epidemiology: most trisomy 21 cases arise from maternal meiosis I nondisjunction, and the risk rises with maternal age because oocytes are arrested in prophase I for years.)

**Conclusion.** Maternal **meiosis I** nondisjunction produced an egg with two non-identical copies of chromosome 21; fertilization by a normal sperm yielded a trisomic (2n + 1) zygote. Distinguishing "both homologs" (MI) from "two identical chromatids" (MII) is the key reasoning the MCAT tests.`
    },
    {
      id: 'ge7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Genetic Diseases** 🎯`,
      exercise: {
        questions: [
          {
            question: `Sickle cell disease persists at high frequency in malaria-endemic regions because:`,
            options: [`Heterozygote advantage — carriers (HbAS) have malaria resistance without severe disease`, `Sickle cell is dominant`, `There is no selective pressure against it`, `The mutation is beneficial in all individuals`],
            correctAnswer: 0,
            explanation: `HbAS carriers have mild sickling that kills malaria parasites in RBCs but lack the severe complications of HbSS. This heterozygote advantage (a form of balancing selection) maintains the allele at substantial frequency in affected regions.`
          },
          {
            question: `Huntington's disease is autosomal dominant with onset typically after age 40. Why does the disease allele persist in the population despite being harmful?`,
            options: [`Symptoms usually appear after reproductive age, so carriers often pass on the allele before being affected`, `The allele is recessive and hidden in carriers`, `Huntington's improves fitness`, `The allele constantly arises from new mutations only`],
            correctAnswer: 0,
            explanation: `Because Huntington's is late-onset, affected individuals frequently have children before symptoms appear. Natural selection cannot efficiently remove an allele whose harm comes after reproduction, so the dominant allele persists across generations.`
          },
          {
            question: `A karyotype shows 45 chromosomes with a single X and no Y (45,X). This describes:`,
            options: [`Turner syndrome — a phenotypic female with short stature and infertility`, `Klinefelter syndrome (47,XXY)`, `Down syndrome (trisomy 21)`, `A normal male karyotype`],
            correctAnswer: 0,
            explanation: `45,X is monosomy X, characteristic of Turner syndrome: affected individuals are phenotypically female, typically short, and usually infertile (streak gonads). It is the only viable human monosomy.`
          },
          {
            question: `Cystic fibrosis is autosomal recessive. Two unaffected parents already have a child with CF. What is the probability that their NEXT child is an unaffected CARRIER?`,
            options: [`1/2`, `1/4`, `1/3`, `2/3`],
            correctAnswer: 0,
            explanation: `Both parents must be carriers (Aa × Aa). Across all offspring, the genotype ratio is 1 AA : 2 Aa : 1 aa, so the probability of an Aa carrier (out of ALL children) is 2/4 = 1/2. (Note: 2/3 would be the answer only if you condition on the child being unaffected.)`
          },
          {
            question: `Klinefelter syndrome (47,XXY) most commonly results from:`,
            options: [`Nondisjunction during meiosis, producing a gamete with an extra sex chromosome`, `A single point mutation in an X-linked gene`, `Deletion of part of the Y chromosome`, `Mitochondrial inheritance from the mother`],
            correctAnswer: 0,
            explanation: `47,XXY is an aneuploidy caused by nondisjunction in meiosis (either an XX egg fertilized by a Y sperm, or an X egg fertilized by an XY sperm). It is a whole-chromosome number error, not a point mutation or deletion.`
          }
        ]
      }
    },
    {
      id: 'ge7-summary',
      type: 'text' as const,
      content: `### Genetics & Evolution — Complete! ✅

From Mendel to Hardy-Weinberg to natural selection to genetic diseases, genetics and evolution are heavily tested on the MCAT. Master Punnett squares, pedigree analysis, population-genetics calculations, and the meiosis-I-vs-II logic behind aneuploidy for test day.

**High-yield reminders:**
- Late-onset dominant alleles (Huntington's) escape selection by acting after reproduction
- Heterozygote advantage (sickle cell + malaria) is balancing selection
- Aneuploidy comes from nondisjunction: MI = both homologs, MII = identical sister chromatids`
    }
  ]
};
