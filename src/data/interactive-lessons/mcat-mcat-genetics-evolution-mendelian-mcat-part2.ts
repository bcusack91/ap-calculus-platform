export const mcatMendelianPart2Data = {
  topicSlug: 'mcat-genetics-evolution-mendelian-mcat',
  sections: [
    {
      id: 'men2-intro',
      type: 'text' as const,
      content: `# Mendelian Genetics — Deep Dive

**Part 2 of 4 — Linkage, Recombination & Gene Mapping**

### When Independent Assortment Fails

Mendel's second law assumes genes travel on different chromosomes. Genes on the **same chromosome** tend to be inherited together — they are **linked**. Linkage is the most common reason a dihybrid cross deviates from the expected $9:3:3:1$ (or a test cross from $1:1:1:1$).

### Crossing Over Breaks Linkage

During **prophase I**, homologous chromosomes synapse and exchange segments (crossing over at chiasmata). A crossover **between** two linked genes produces **recombinant** gametes; no crossover between them leaves **parental** gametes.

- Parental (nonrecombinant) gametes carry the same allele combinations as the parent's own chromosomes
- Recombinant gametes carry new combinations
- Because a crossover between two genes is the exception rather than the rule when genes are close together, **parental classes outnumber recombinant classes**

### Recombination Frequency (RF)

$RF = \\frac{\\text{number of recombinant offspring}}{\\text{total offspring}} \\times 100\\%$

- $1\\%$ recombination = **1 map unit** = 1 centimorgan (cM)
- RF increases with the physical distance between genes: more room for a crossover
- **Maximum observable RF is 50%** — genes very far apart on the same chromosome (or on different chromosomes) assort as if independent. RF can never exceed 50% because even guaranteed crossovers produce at most half recombinant chromatids

### Reading a Test Cross for Linkage

Cross a dihybrid $AB/ab$ (alleles A and B on one homolog, a and b on the other — this arrangement is called **cis** or coupling) to $ab/ab$:

| Offspring class | Type | Expected if unlinked | Observed if linked |
|-----------------|------|---------------------|--------------------|
| AB/ab | Parental | 25% | Large (e.g., 42%) |
| ab/ab | Parental | 25% | Large (e.g., 42%) |
| Ab/ab | Recombinant | 25% | Small (e.g., 8%) |
| aB/ab | Recombinant | 25% | Small (e.g., 8%) |

If the parent were in **trans** (repulsion) configuration ($Ab/aB$), the identities flip: $Ab$ and $aB$ are the parental classes. Always identify parental classes as the **two most frequent** — do not assume.

### Sex Linkage Basics

- X-linked genes: males are **hemizygous** (one allele = phenotype). No father-to-son transmission of X-linked alleles
- In fruit fly and human crosses, reciprocal crosses give **different results** for X-linked genes — a classic experimental signature (autosomal reciprocal crosses give identical results)
- Y-linked (holandric) traits: strictly father-to-all-sons`
    },
    {
      id: 'men2-worked',
      type: 'text' as const,
      content: `### Worked Example — Two-Point Mapping From Test-Cross Data

**Problem.** A fly heterozygous for body color (b, black recessive) and wing shape (vg, vestigial recessive) is test-crossed to a $b\\,vg/b\\,vg$ fly. Offspring:

| Class | Count |
|-------|-------|
| Gray, normal wings ($b^+ vg^+$) | 415 |
| Black, vestigial ($b\\ vg$) | 405 |
| Gray, vestigial ($b^+ vg$) | 92 |
| Black, normal ($b\\ vg^+$) | 88 |

**Step 1 — Identify parental vs. recombinant classes.** The two largest classes (415 + 405) are parental → the heterozygous parent's chromosomes were $b^+ vg^+ / b\\ vg$ (cis configuration). The two smallest (92 + 88) are recombinant.

**Step 2 — Compute RF.**
$RF = \\frac{92 + 88}{415 + 405 + 92 + 88} = \\frac{180}{1000} = 18\\%$

**Step 3 — Convert to map distance.** $18\\%$ recombination → the genes are **18 map units (cM)** apart.

**Interpretation check.** If the genes were unlinked, all four classes would be about 250 each ($1:1:1:1$). The strong excess of two classes proves linkage; the identity of the big classes reveals the parental configuration. On the MCAT, expect exactly this move: spot the skewed test-cross table, name the two rare classes as recombinants, and compute RF.`
    },
    {
      id: 'men2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Linkage & Recombination** 🎯`,
      exercise: {
        questions: [
          {
            question: `Two genes show a recombination frequency of 50% in a test cross. Which conclusion is best supported?`,
            options: [`The genes are exactly 50 nucleotides apart`, `The genes assort as if independent — they are on different chromosomes or very far apart on the same one`, `The genes are tightly linked`, `Crossing over never occurs between them`],
            correctAnswer: 1,
            explanation: `RF saturates at 50%, the value expected for independent assortment. A 50% RF therefore cannot distinguish "different chromosomes" from "same chromosome but very far apart." Tightly linked genes would show RF near 0%, not 50%.`
          },
          {
            question: `In a test cross of a dihybrid, the four offspring classes appear at 44%, 44%, 6%, and 6%. The recombination frequency between the genes is:`,
            options: [`6%`, `44%`, `12%`, `50%`],
            correctAnswer: 2,
            explanation: `Recombinants are the TWO rare classes combined: $6\\% + 6\\% = 12\\%$, so the genes are 12 cM apart. Choosing 6% (a single class) is the classic error — recombination events produce two reciprocal recombinant classes, and both count.`
          },
          {
            question: `A test cross of a dihybrid fly yields mostly $Ab$ and $aB$ offspring gamete types, with few $AB$ and $ab$. The heterozygous parent's chromosome configuration was:`,
            options: [`Trans (repulsion): A with b on one homolog, a with B on the other`, `Cis (coupling): A with B on one homolog`, `The genes are unlinked`, `The parent was homozygous at both loci`],
            correctAnswer: 0,
            explanation: `Parental classes are the most frequent, and here they are $Ab$ and $aB$ — so those combinations sat together on the parent's homologs: $Ab/aB$, the trans (repulsion) arrangement. Cis would have made $AB$ and $ab$ the majority classes.`
          },
          {
            question: `Why can recombination frequency never exceed 50%, even for genes at opposite ends of a long chromosome?`,
            options: [`Crossing over occurs in at most 50% of meioses`, `Each crossover involves only two of the four chromatids, so even guaranteed (or multiple) crossovers leave on average half the products parental`, `Natural selection removes recombinant gametes`, `Genes more than 50 cM apart cannot recombine`],
            correctAnswer: 1,
            explanation: `A single crossover involves 2 of the 4 chromatids of a tetrad, yielding 2 recombinant + 2 parental products (50% recombinant for that meiosis). Multiple crossovers can restore parental arrangements, so averaged over many meioses the recombinant fraction approaches but never exceeds 50%.`
          },
          {
            question: `Reciprocal crosses (mother's and father's phenotypes swapped) give clearly different F1 results for a particular trait. This is evidence that the trait is:`,
            options: [`Autosomal dominant`, `Autosomal recessive`, `Controlled by two unlinked genes`, `Sex-linked (or otherwise dependent on parental origin)`],
            correctAnswer: 3,
            explanation: `For autosomal genes, reciprocal crosses give identical results because each parent contributes one autosomal allele either way. X-linked genes break this symmetry: sons get their only X from the mother, so swapping the parents changes son phenotypes. (Mitochondrial and imprinted genes also give reciprocal-cross differences.)`
          }
        ]
      }
    },
    {
      id: 'men2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Linked genes (same chromosome) violate independent assortment; parental classes outnumber recombinant classes in a test cross
- $RF = \\text{recombinants}/\\text{total} \\times 100\\%$; $1\\% = 1$ map unit (cM); RF maxes out at 50%
- Both rare reciprocal classes count as recombinants — never just one
- Identify parental configuration (cis $AB/ab$ vs. trans $Ab/aB$) from the two most frequent classes
- Reciprocal-cross asymmetry is the experimental fingerprint of X-linkage; no father-to-son X transmission`
    }
  ]
};
