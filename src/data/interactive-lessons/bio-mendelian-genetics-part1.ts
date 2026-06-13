export const bioMendelianPart1Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mgp1-intro',
      type: 'text' as const,
      content: `
## Mendel's Laws

**Part 1 of 7**

In the 1860s, an Augustinian friar named **Gregor Mendel** quietly founded the science of genetics by counting peas. While other naturalists described inheritance in vague terms of "blending," Mendel treated heredity as a problem of **discrete, countable units** passed from parent to offspring. His genius was quantitative: he tracked thousands of plants across multiple generations and discovered ratios so clean that they pointed directly to the underlying mechanism — even though chromosomes and meiosis would not be understood for another forty years.

This part establishes the vocabulary and the three classical laws. Get these definitions exact, because every later part of the unit (Punnett squares, probability, pedigrees) is just an application of them.

### Core vocabulary

| Term | Precise definition |
|------|-------------------|
| **Gene** | A unit of heredity; a stretch of DNA that codes for a particular trait (e.g., seed color) |
| **Allele** | One of the alternative versions of a gene (e.g., the *Y* allele for yellow vs. the *y* allele for green) |
| **Genotype** | The genetic makeup — the specific pair of alleles an organism carries (e.g., *Yy*) |
| **Phenotype** | The observable trait that results from the genotype (e.g., yellow seeds) |
| **Homozygous** | Two identical alleles at a locus (*YY* or *yy*) |
| **Heterozygous** | Two different alleles at a locus (*Yy*) |
| **Dominant** | An allele whose phenotype is expressed in the heterozygote; written as a capital letter (*Y*) |
| **Recessive** | An allele whose phenotype appears only in the homozygote; written lowercase (*y*) |

> **Key distinction:** Genotype is the *cause*; phenotype is the *effect*. Two organisms with different genotypes (*YY* and *Yy*) can share the same phenotype (yellow). This single fact is the source of more AP exam errors than any other in the unit.
      `
    },
    {
      id: 'mgp1-pea-experiments',
      type: 'text' as const,
      content: `
### Mendel's Pea Experiments: P, F1, and F2

Mendel chose the garden pea (*Pisum sativum*) deliberately. Peas have clearly contrasting traits (round vs. wrinkled seeds, tall vs. short stems), grow quickly, and — crucially — can be made to **self-pollinate** (controlled, predictable crosses) or be **cross-pollinated** by hand.

He began with **true-breeding** lines — plants that, when self-crossed, always produce offspring identical to the parent. A true-breeding tall plant is homozygous (*TT*); a true-breeding short plant is homozygous (*tt*).

**The generations he tracked:**

| Generation | Symbol | Meaning |
|------------|--------|---------|
| Parental | **P** | The two true-breeding parents he crossed (*TT* $\\times$ *tt*) |
| First filial | **F1** | The offspring of the P cross (all *Tt*) |
| Second filial | **F2** | The offspring of F1 self-crossing (*Tt* $\\times$ *Tt*) |

**What Mendel observed:**

1. In the **F1 generation**, every plant looked like *one* parent. Crossing tall $\\times$ short gave **100% tall** offspring — not medium-height plants. This disproved blending inheritance: the "short" factor had vanished from view but, as the next step showed, had not been destroyed.

2. In the **F2 generation**, the hidden trait *reappeared*. Self-crossing the tall F1 plants produced both tall and short offspring in a striking and repeatable **3:1 ratio** (about 3 tall for every 1 short). The recessive "short" factor had been carried silently through the F1 and resurfaced.

This 3:1 ratio, appearing again and again across seven different traits, is the empirical fingerprint of Mendelian inheritance. The next sections explain *why* it appears.
      `
    },
    {
      id: 'mgp1-three-laws',
      type: 'text' as const,
      content: `
### The Three Laws

**1. Law of Dominance**

In a heterozygote, one allele (the dominant one) masks the phenotypic effect of the other (the recessive one). This is why F1 plants (*Tt*) are all tall: the *T* allele determines the phenotype even though *t* is present. Dominance describes the relationship *between alleles within an individual* — it says nothing about how common an allele is in a population. (A dominant allele can be rare; a recessive allele can be widespread.)

**2. Law of Segregation**

Each organism carries two alleles for each gene, and these two alleles **separate (segregate) during gamete formation**, so that each gamete receives only **one** allele. When fertilization unites two gametes, the offspring's two-allele pairing is restored.

This is the deepest of the three laws. A *Tt* parent produces two kinds of gametes in equal proportion — half carrying *T*, half carrying *t*. That 50/50 split of a heterozygote's alleles is what ultimately generates the 3:1 ratio.

**3. Law of Independent Assortment**

When forming gametes, the alleles of *different* genes assort **independently** of one another — the allele a gamete receives for seed color does not influence which allele it receives for seed shape. (This holds for genes on different chromosomes or far apart on the same chromosome. Genes close together are *linked* and violate it — covered in a later unit.) Independent assortment is the basis of the dihybrid cross and is explored fully in Part 3.

### The Chromosomal Basis: Why Segregation Happens

Mendel did not know about chromosomes, but his laws are a direct consequence of **meiosis**:

- A diploid cell carries **homologous chromosome pairs** — one from each parent. The two alleles of a gene sit at the same locus on the two homologs.
- During **anaphase I of meiosis**, the homologous chromosomes are pulled to opposite poles. This physical separation of homologs *is* the law of segregation — the two alleles end up in different cells.
- Because each homologous pair lines up **independently** of every other pair at metaphase I, the alleles of different genes are distributed independently — the physical basis of independent assortment.

> **Connect the levels:** "Alleles segregate" (Mendel's abstract rule) and "homologous chromosomes separate at anaphase I" (the cellular event) are the *same phenomenon* described at two scales. The AP exam loves to ask you to link them.
      `
    },
    {
      id: 'mgp1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Vocabulary in Action
      `,
      exercise: {
        questions: [
          {
            question: 'In pea plants, purple flower color (P) is dominant to white (p). A purple-flowered plant is crossed with a white-flowered plant, and the offspring are 50% purple and 50% white. What is the genotype of the purple parent?',
            options: [
              'PP (homozygous dominant)',
              'Pp (heterozygous)',
              'pp (homozygous recessive)',
              'It cannot be determined from this information'
            ],
            correctAnswer: 1,
            explanation: 'The white parent is pp (recessive phenotype requires two recessive alleles), so it contributes only p gametes. For half the offspring to be white (pp), the purple parent must contribute p to half its gametes — meaning it is Pp. A PP parent (the trap in option A) would give only P gametes, producing 100% purple offspring, not the observed 50/50 split.'
          },
          {
            question: 'A student claims that because tall (T) is dominant to short (t) in pea plants, most pea plants in a wild population must be tall. Why is this reasoning flawed?',
            options: [
              'Dominant alleles are always rarer than recessive alleles',
              'Dominance describes which allele is expressed in a heterozygote, not how frequent an allele is in a population',
              'Tall and short are actually codominant, so the population is 50/50',
              'Phenotype frequency cannot be measured in wild populations'
            ],
            correctAnswer: 1,
            explanation: 'Dominance is a relationship between alleles within an individual — the dominant allele masks the recessive one in heterozygotes. It carries no information about allele frequency. If the t allele happened to be far more common in the population, short plants could easily outnumber tall ones. Option A overcorrects: dominant alleles are not "always rarer" either — frequency is simply independent of dominance.'
          }
        ]
      }
    },
    {
      id: 'mgp1-worked-3to1',
      type: 'text' as const,
      content: `
### Worked Example: Where Does the 3:1 Ratio Come From?

**Problem.** Mendel self-crossed heterozygous tall F1 pea plants (*Tt* $\\times$ *Tt*). Predict the phenotypic ratio of the F2 offspring and explain why it arises.

**Step 1 — Apply the law of segregation to find the gametes.**
Each *Tt* parent produces two gamete types in equal frequency: $\\frac{1}{2}$ *T* and $\\frac{1}{2}$ *t*.

**Step 2 — Build a Punnett square.** The Punnett square is a bookkeeping grid: parent gametes label the rows and columns, and each cell is one equally likely fertilization outcome.

|        | **T** (½) | **t** (½) |
|--------|-----------|-----------|
| **T** (½) | TT | Tt |
| **t** (½) | Tt | tt |

**Step 3 — Read the genotypes.** The four equally likely cells are:
- 1 × **TT** (homozygous dominant)
- 2 × **Tt** (heterozygous)
- 1 × **tt** (homozygous recessive)

This is the **genotypic ratio 1 : 2 : 1**.

**Step 4 — Translate genotype to phenotype using the law of dominance.** Both *TT* and *Tt* show the dominant phenotype (tall) because the *T* allele masks *t*. Only *tt* shows the recessive phenotype (short):
- Tall = $\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$ of offspring
- Short = $\\frac{1}{4}$ of offspring

This gives the **phenotypic ratio 3 : 1** — exactly what Mendel counted.

> **The big idea in one sentence:** The 3:1 *phenotypic* ratio and the 1:2:1 *genotypic* ratio describe the same four offspring; dominance "collapses" three of the four genotypic outcomes into a single visible class. Keep these two ratios distinct — confusing them is a classic AP trap, and Part 2 drills it directly.
      `
    },
    {
      id: 'mgp1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Segregation and Meiosis
      `,
      exercise: {
        questions: [
          {
            question: 'A pea plant is heterozygous for seed shape (Rr). At which stage of meiosis do the R and r alleles physically separate into different cells, fulfilling Mendel\'s law of segregation?',
            options: [
              'Prophase I, when crossing over occurs',
              'Anaphase I, when homologous chromosomes are pulled to opposite poles',
              'Anaphase II, when sister chromatids separate',
              'Metaphase II, when chromosomes line up at the equator'
            ],
            correctAnswer: 1,
            explanation: 'The R and r alleles sit at the same locus on a pair of homologous chromosomes. Those homologs separate at anaphase I, sending R to one pole and r to the other — this physical event IS the law of segregation. Anaphase II (the trap in option C) separates sister chromatids, which carry identical copies of the same allele, so it does not separate R from r.'
          },
          {
            question: 'Mendel\'s F1 plants from a tall × short cross were ALL tall, yet short plants reappeared in the F2 generation. Which combination of laws best explains this disappearance and reappearance?',
            options: [
              'Independent assortment hid the trait in F1, and dominance restored it in F2',
              'Dominance masked the recessive allele in the heterozygous F1, and segregation allowed two recessive alleles to recombine in some F2 plants',
              'Blending diluted the short trait in F1, and mutation recreated it in F2',
              'The short allele was destroyed in F1 and a new short allele arose in F2'
            ],
            correctAnswer: 1,
            explanation: 'The F1 are all Tt: the recessive t allele is present but masked by dominance (law of dominance). When the F1 self-cross, segregation produces t-carrying gametes from both parents, which can unite to form tt offspring — restoring the short phenotype in roughly 1/4 of the F2. Options C and D describe blending and mutation, which Mendel\'s data specifically refuted: the allele was never destroyed, merely hidden.'
          }
        ]
      }
    },
    {
      id: 'mgp1-beyond-simple',
      type: 'text' as const,
      content: `
### When Dominance Is Not Complete

Mendel happened to choose seven pea traits that each show **complete dominance** (the heterozygote looks exactly like the dominant homozygote). Many real traits do not, and the AP exam expects you to recognize the exceptions. Crucially, in *all* of these cases the **law of segregation still holds** — alleles still separate 50/50 into gametes; only the genotype-to-phenotype rule changes.

| Pattern | Heterozygote phenotype | Classic F2 phenotype ratio |
|---------|------------------------|----------------------------|
| **Complete dominance** | Identical to dominant homozygote | 3 : 1 |
| **Incomplete dominance** | *Blended* intermediate (e.g., red × white → pink) | 1 : 2 : 1 |
| **Codominance** | *Both* alleles fully expressed (e.g., AB blood type) | 1 : 2 : 1 |

**The diagnostic difference between 3:1 and 1:2:1.** Under incomplete dominance and codominance, every genotype produces a *distinct* phenotype, so the phenotypic ratio **equals** the genotypic ratio (1:2:1). The "collapse" of three genotype classes into two phenotype classes — which gives 3:1 — happens *only* under complete dominance.

**Worked micro-example (incomplete dominance).** In snapdragons, red (*C^R*) and white (*C^W*) flowers cross to give all-pink F1 (*C^R C^W*). Self-crossing the pink F1 gives an F2 of:
- $\\frac{1}{4}$ red (*C^R C^R*)
- $\\frac{1}{2}$ pink (*C^R C^W*)
- $\\frac{1}{4}$ white (*C^W C^W*)

That is **1 red : 2 pink : 1 white** — a 1:2:1 *phenotypic* ratio, the visual fingerprint of incomplete dominance. If you ever see a 1:2:1 phenotype ratio reported, suspect that dominance is incomplete (or codominant), not complete.

> **AP connection:** these extensions are explored in a later unit, but Part 1's takeaway is conceptual: dominance is a statement about *phenotype expression in heterozygotes*, and it is logically separate from segregation. Segregation is universal; dominance relationships vary.
      `
    },
    {
      id: 'mgp1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 1 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A pure-breeding red-flowered plant is crossed with a pure-breeding white-flowered plant, and ALL F1 offspring are pink. When the pink F1 are self-crossed, the F2 appears in a ratio of about 1 red : 2 pink : 1 white. What does this tell you about the alleles, and is Mendel\'s law of segregation violated?',
            options: [
              'The alleles show incomplete dominance; segregation still holds because alleles separated normally, but the heterozygote has its own intermediate phenotype',
              'The alleles show complete dominance; segregation is violated',
              'A new pink allele arose by mutation; segregation does not apply',
              'Red and white blended permanently, disproving Mendel'
            ],
            correctAnswer: 0,
            explanation: 'The pink heterozygote and the 1:2:1 phenotypic ratio are the signature of incomplete dominance — each genotype produces a distinct phenotype, so phenotype ratio equals genotype ratio. Segregation is NOT violated: the C^R and C^W alleles still separated into gametes normally, which is exactly why the F2 genotypes appear in the Mendelian 1:2:1 proportions. Option D misreads this as permanent blending — but the red and white phenotypes REAPPEAR cleanly in the F2, which blending could never explain.'
          },
          {
            question: 'A diploid organism is heterozygous Aa. Considering the chromosomal basis of Mendel\'s laws, which statement correctly links the cellular event to the genetic outcome?',
            options: [
              'The A and a alleles are on sister chromatids and separate during anaphase II',
              'The A and a alleles are on homologous chromosomes and separate during anaphase I, which is the physical basis of the law of segregation',
              'The A and a alleles are on the same chromatid and never separate',
              'The A and a alleles separate during mitosis, not meiosis'
            ],
            correctAnswer: 1,
            explanation: 'In a heterozygote, the two different alleles (A and a) sit at the same locus on a pair of HOMOLOGOUS chromosomes. Homologs separate at anaphase I of meiosis, distributing A and a to different gametes — this is the cellular embodiment of the law of segregation. Option A confuses homologs with sister chromatids: sister chromatids (separated at anaphase II) carry IDENTICAL copies of the same allele, so they cannot separate A from a.'
          }
        ]
      }
    }
  ]
};
