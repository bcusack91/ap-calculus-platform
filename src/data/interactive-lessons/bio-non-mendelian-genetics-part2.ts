export const bioNonMendelianPart2Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-2-intro-p1',
      type: 'text' as const,
      content: `
## Multiple Alleles & Polygenic

**Part 2 of 7 — Multiple Alleles & Polygenic**

Mendel's model has one gene, two alleles and one trait. Real genetics stretches that model in two different directions, and students often blur them together:

| | Multiple alleles | Polygenic inheritance |
|---|---|---|
| Number of genes | **One** gene | **Several** genes |
| Number of alleles | Three or more in the **population** | Often two per gene |
| Typical phenotypes | A few distinct categories | A continuous range of values |
| Classic examples | ABO blood type; rabbit coat color | Human height; human skin color |

The key fact for multiple alleles: **a diploid individual still carries only two alleles of the gene**, one on each homologous chromosome. "Multiple" describes the population, not the person.

### The ABO Blood Group

The ABO gene codes for an enzyme that adds a sugar to a surface carbohydrate on red blood cells. It has three common alleles:

- $I^{A}$ adds the A sugar (A antigen).
- $I^{B}$ adds the B sugar (B antigen).
- $i$ makes a nonfunctional enzyme, so no A or B sugar is added.

$I^{A}$ and $I^{B}$ are **codominant** with each other, and both are **completely dominant** to $i$. One gene therefore shows two dominance relationships at once.

| Genotype | Blood type | Antigens on red blood cells |
|---|---|---|
| $I^{A}I^{A}$ or $I^{A}i$ | A | A only |
| $I^{B}I^{B}$ or $I^{B}i$ | B | B only |
| $I^{A}I^{B}$ | AB | Both A and B |
| $ii$ | O | Neither |

Three alleles give **six genotypes but only four phenotypes**, because the dominance relationships hide some genotypes behind the same phenotype.
      `
    },
    {
      id: 'non-2-abo-worked',
      type: 'text' as const,
      content: `
### Worked Example 1: An A × B Cross With Every Blood Type

**Problem.** A type A woman and a type B man have a type O child. Give the parents' genotypes and the chance that their next child is type AB.

**Step 1 — Use the O child.** Type O is $ii$, so the child received $i$ from **each** parent. The mother must be $I^{A}i$ and the father must be $I^{B}i$.

**Step 2 — Cross them.**

|  | $I^{B}$ | $i$ |
|---|---|---|
| $I^{A}$ | $I^{A}I^{B}$ (AB) | $I^{A}i$ (A) |
| $i$ | $I^{B}i$ (B) | $ii$ (O) |

**Step 3 — Read the answer.** Each blood type has probability $\\frac{1}{4}$, so P(AB) = $\\frac{1}{4}$. Each child is an independent event, so the earlier type O child does not change this.

> **Paternity logic:** a type AB parent always passes on $I^{A}$ or $I^{B}$, so an AB parent **cannot** have a type O child. Blood types can exclude a possible father but cannot prove that a man is the father.

### A Dominance Series: Rabbit Coat Color

The rabbit C gene has four alleles arranged in a **dominance series**, where each allele is dominant to every allele listed after it:

$C$ (full color) > $c^{ch}$ (chinchilla, silver-gray) > $c^{h}$ (Himalayan, white with dark ears, nose, feet and tail) > $c$ (albino)

| Phenotype | Possible genotypes |
|---|---|
| Full color | $CC$, $Cc^{ch}$, $Cc^{h}$, $Cc$ |
| Chinchilla | $c^{ch}c^{ch}$, $c^{ch}c^{h}$, $c^{ch}c$ |
| Himalayan | $c^{h}c^{h}$, $c^{h}c$ |
| Albino | $cc$ |

The table lists all 10 genotypes, which produce only 4 phenotypes. To solve any cross, write each parent's two alleles, form the four offspring combinations, and then ask which allele in each pair is higher in the series. (The Himalayan allele returns in Part 5, because its enzyme works only at cool temperatures.)
      `
    },
    {
      id: 'non-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Multiple Alleles
      `,
      exercise: {
        questions: [
          {
            question: 'A type A woman and a type B man have a child with type O blood. What are the genotypes of the parents?',
            options: [
              '$I^{A}I^{A}$ and $I^{B}I^{B}$',
              '$I^{A}I^{A}$ and $I^{B}i$',
              '$I^{A}i$ and $I^{B}i$',
              '$I^{A}i$ and $I^{B}I^{B}$'
            ],
            correctAnswer: 2,
            explanation: 'A type O child is $ii$, so each parent must carry and pass on an $i$ allele, which makes the mother $I^{A}i$ and the father $I^{B}i$. Any parent who is homozygous for $I^{A}$ or $I^{B}$ has no $i$ to give.'
          },
          {
            question: 'In rabbits the dominance series is C > cᶜʰ > cʰ > c. A chinchilla rabbit with genotype cᶜʰcʰ is crossed with a Himalayan rabbit with genotype cʰc. What offspring phenotypes are expected?',
            options: [
              '3 chinchilla : 1 Himalayan',
              '1 chinchilla : 2 Himalayan : 1 albino',
              '1 chinchilla : 1 Himalayan',
              '2 chinchilla : 1 Himalayan : 1 albino'
            ],
            correctAnswer: 2,
            explanation: 'The offspring are cᶜʰcʰ, cᶜʰc, cʰcʰ and cʰc in equal numbers; the first two are chinchilla and the last two are Himalayan, giving 1 : 1. No offspring can be albino, because albino rabbits need c from both parents and the chinchilla parent carries no c.'
          },
          {
            question: 'A coat-color gene has four different alleles in a rabbit population. Which statement about one diploid rabbit from that population is accurate?',
            options: [
              'It carries all four alleles, but only the highest one in the series is expressed',
              'It carries four copies of the gene, one for each allele found in the population',
              'It carries two alleles, and the other two alleles are switched on as it matures',
              'It carries at most two of the four alleles, one inherited from each of its parents'
            ],
            correctAnswer: 3,
            explanation: 'A diploid cell has two copies of each autosomal gene, one on each homolog, so a rabbit can carry at most two of the four alleles. The number of alleles describes the population; no individual carries or later activates the others.'
          }
        ]
      }
    },
    {
      id: 'non-2-polygenic',
      type: 'text' as const,
      content: `
### Polygenic Inheritance: Many Genes, One Trait

A **polygenic** trait is controlled by two or more genes, usually on different chromosomes. The simplest model is the **additive model**:

- Each gene has a "contributing" allele (written in capitals) and a "non-contributing" allele (lowercase).
- Every contributing allele adds the same small amount to the phenotype (for example, one unit of pigment).
- The phenotype depends only on **how many** contributing alleles an individual has, not on which genes they sit at.

So $AABbcc$, $AaBbCc$ and $aaBBCc$ all have three contributing alleles and the same phenotype.

### Counting Phenotype Classes

With $n$ genes there are $2n$ allele copies, and an individual can have anywhere from 0 to $2n$ contributing alleles. That gives **$2n + 1$ phenotype classes**.

| Genes | Allele copies | Phenotype classes | F2 distribution (from all-heterozygous parents) |
|---|---|---|---|
| 1 | 2 | 3 | 1 : 2 : 1 |
| 2 | 4 | 5 | 1 : 4 : 6 : 4 : 1 (out of 16) |
| 3 | 6 | 7 | Middle class most common; each extreme 1 out of 64 |

### Worked Example 2: Three Additive Genes

**Problem.** Kernel color in a plant is controlled by three unlinked genes with additive alleles. Two plants that are $AaBbCc$ are crossed. What fraction of offspring are as dark as the darkest possible plant, and what fraction have the same genotype as their parents?

**Step 1 — Darkest class.** The darkest plant is $AABBCC$. Each gene independently gives $AA$ with probability $\\frac{1}{4}$, so P = $\\frac{1}{4} \\times \\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{64}$.

**Step 2 — Same genotype as the parents.** Each gene independently gives a heterozygote ($Aa$, $Bb$ or $Cc$) with probability $\\frac{1}{2}$, so by the product rule P($AaBbCc$) = $\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$. These offspring have three contributing alleles, the middle class, but other genotypes such as $AABbcc$ land in that class too, which is why the middle class is the largest.

**Step 3 — Picture it.** The middle class is the most common and the extremes are rare. Plotting the 7 classes already gives a rough bell shape.
      `
    },
    {
      id: 'non-2-boxes',
      type: 'input-boxes' as const,
      content: `
### Practice — Counting Polygenic Classes

Assume additive alleles at unlinked genes.

**1)** How many phenotype classes are possible for a trait controlled by 4 genes?
**2)** In an $AaBb$ × $AaBb$ cross, how many of the 16 offspring combinations have exactly 2 contributing alleles?
**3)** In an $AaBbCc$ × $AaBbCc$ cross, how many of the 64 combinations are the lightest possible phenotype?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '6', '1'],
        hint1: 'Classes = 2n + 1, where n is the number of genes.',
        hint2: 'For two genes, the 16 combinations fall into 1 : 4 : 6 : 4 : 1 by number of contributing alleles.',
        hint3: 'The lightest plant has zero contributing alleles, so it must be aabbcc.',
        explanation: 'Four genes give 2(4) + 1 = 9 classes. With two genes, 6 of the 16 combinations carry exactly 2 contributing alleles. Only 1 of the 64 combinations (aabbcc) has zero contributing alleles, so the lightest class is 1/64.'
      }
    },
    {
      id: 'non-2-continuous',
      type: 'text' as const,
      content: `
### From Steps to a Smooth Curve

If only a few genes were involved, a population would show a handful of separate steps. Human height and skin color instead show **continuous variation**: a smooth, bell-shaped (normal) distribution. Two factors smooth the steps:

1. **Many genes.** Human height is influenced by hundreds of genetic variants, each with a very small effect. As $n$ grows, the $2n + 1$ classes become so close together that they merge.
2. **Environment.** Nutrition, health and sun exposure shift each person a little up or down within their genetic class, blurring the boundaries between classes.

Polygenic traits therefore do **not** sort into Mendelian ratios such as 3 : 1, even though every individual gene still segregates by Mendel's laws.

> **AP Connection:** The CED's point is that many traits are the product of multiple genes and/or physiological processes acting together, so they do not segregate in Mendelian patterns. If an AP graph shows a bell-shaped histogram of a trait, the expected explanation is many genes plus environmental effects, not one gene with many alleles. Polygenic traits also carry the continuous variation that directional, stabilizing and disruptive selection act on.
      `
    },
    {
      id: 'non-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Polygenic Traits
      `,
      exercise: {
        questions: [
          {
            question: 'Which observation would best support the claim that a trait is polygenic rather than controlled by several alleles of a single gene?',
            options: [
              'Offspring fall into four sharp classes with no intermediates',
              'Heterozygotes show both parental phenotypes side by side at full strength',
              'Offspring show a continuous, bell-shaped range of values for the trait',
              'The population carries three or more different alleles at the trait locus'
            ],
            correctAnswer: 2,
            explanation: 'Many additive genes produce so many closely spaced classes that the trait varies continuously in a bell-shaped curve. A few sharp classes, codominant heterozygotes and three or more alleles at one locus all fit a single gene with multiple alleles.'
          },
          {
            question: 'Why do measurements of adult human height form a smooth curve rather than a set of distinct steps?',
            options: [
              'One gene with incomplete dominance gives a full range of intermediate heights',
              'Many genes each add a small amount, and environment blurs the gaps',
              'Height alleles blend together each generation, producing every possible value',
              'Each person inherits a unique height allele unlike any other'
            ],
            correctAnswer: 1,
            explanation: 'Height is polygenic, and the many small genetic steps are further smoothed by nutrition and health, giving a continuous curve. A single incompletely dominant gene gives only three classes, alleles do not blend, and people share height-associated alleles rather than each carrying a unique one.'
          }
        ]
      }
    }
  ]
}
