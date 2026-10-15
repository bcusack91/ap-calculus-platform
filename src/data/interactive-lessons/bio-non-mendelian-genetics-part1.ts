export const bioNonMendelianPart1Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-1-intro-p1',
      type: 'text' as const,
      content: `
## Incomplete & Codominance

**Part 1 of 7 — Incomplete & Codominance**

Mendel's seven pea traits all showed **complete dominance**: the heterozygote looked exactly like the dominant homozygote, so an F1 × F1 cross gave a **3 : 1** phenotypic ratio. Many real traits break that pattern. This part covers the two simplest departures, **incomplete dominance** and **codominance**, and the idea that ties them together.

### Dominance is a relationship, not a property

"Dominant" does not describe an allele on its own. It describes **how two alleles combine to produce a phenotype in a heterozygote**. The same pair of alleles can look dominant, intermediate or codominant depending on which phenotype you measure. Three points follow:

- **Segregation still holds.** In every pattern in this part, the two alleles stay intact and separate 50/50 into gametes during meiosis. Only the genotype-to-phenotype rule changes.
- **Dominance says nothing about frequency.** The allele for Huntington's disease is dominant but rare; the allele for type O blood is recessive but common in many populations.
- **Dominance says nothing about fitness.** A dominant allele is not "stronger" and is not favored by selection for that reason.

| Pattern | Heterozygote phenotype | F1 × F1 phenotypic ratio | Classic example |
|---------|------------------------|--------------------------|-----------------|
| Complete dominance | Same as the dominant homozygote | 3 : 1 | Purple vs white pea flowers |
| Incomplete dominance | Intermediate between the two homozygotes | 1 : 2 : 1 | Red × white snapdragons give pink |
| Codominance | Both homozygous phenotypes appear at once | 1 : 2 : 1 | Roan cattle; AB blood type |

> **Key idea:** whenever the heterozygote has its own phenotype, the three genotypes give three phenotypes, so the phenotypic ratio equals the genotypic ratio (1 : 2 : 1).
      `
    },
    {
      id: 'non-1-incomplete',
      type: 'text' as const,
      content: `
### Incomplete Dominance: The Heterozygote Is In Between

In snapdragons and four-o'clocks, the allele $C^{R}$ codes for an enzyme in the red pigment pathway and $C^{W}$ codes for a nonfunctional version. A $C^{R}C^{R}$ plant makes plenty of pigment (red). A $C^{W}C^{W}$ plant makes none (white). A $C^{R}C^{W}$ plant has only one working copy, makes about half as much pigment, and is **pink**.

That is the usual molecular explanation for incomplete dominance: **one functional allele is not enough to produce the full phenotype**, so the phenotype tracks the number of working copies.

### Worked Example 1: Pink × Pink Four-O'Clocks

**Problem.** Two pink four-o'clock plants are crossed. Predict the offspring.

**Step 1 — Gametes.** Each pink parent is $C^{R}C^{W}$ and makes $\\frac{1}{2}$ $C^{R}$ and $\\frac{1}{2}$ $C^{W}$ gametes.

**Step 2 — Punnett square.**

|  | $C^{R}$ | $C^{W}$ |
|---|---|---|
| $C^{R}$ | $C^{R}C^{R}$ red | $C^{R}C^{W}$ pink |
| $C^{W}$ | $C^{R}C^{W}$ pink | $C^{W}C^{W}$ white |

**Step 3 — Ratios.** Genotypes 1 : 2 : 1, and phenotypes **1 red : 2 pink : 1 white**.

**Step 4 — Interpret.** Red and white flowers reappear from pink parents. If the parental alleles had **blended** into a new "pink allele," every offspring would be pink. The return of both parental phenotypes is the evidence that the alleles stayed separate. This is why incomplete dominance does **not** support blending inheritance.

**A second cross to know:** pink × white ($C^{R}C^{W}$ × $C^{W}C^{W}$) gives **1 pink : 1 white**. Each phenotype now tells you the genotype directly, so no test cross is needed.
      `
    },
    {
      id: 'non-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reading Incomplete Dominance
      `,
      exercise: {
        questions: [
          {
            question: 'Pink snapdragons are self-pollinated, and red, pink and white plants appear among the offspring. What does the reappearance of red and white plants show?',
            options: [
              'The pink parents carried new mutations that restored the lost pigment genes',
              'The red and white alleles fused in the F1 and then partly separated again',
              'The alleles stayed intact in the pink parents and segregated into gametes',
              'The pink color came from the soil and was not passed to the next generation'
            ],
            correctAnswer: 2,
            explanation: 'Pink plants are heterozygotes whose two alleles remain unchanged and segregate 50/50 into gametes, so red and white homozygotes reappear in a 1 : 2 : 1 ratio. Fused alleles would give only pink offspring, and neither new mutations nor soil effects explain a predictable 1 : 2 : 1 return.'
          },
          {
            question: 'A white four-o\'clock is crossed with a pink four-o\'clock. What phenotypic ratio is expected among the offspring?',
            options: [
              '3 pink : 1 white',
              '1 pink : 1 white',
              '1 red : 2 pink : 1 white',
              'All pink offspring'
            ],
            correctAnswer: 1,
            explanation: 'The cross is $C^{R}C^{W}$ × $C^{W}C^{W}$, so half the offspring receive $C^{R}$ (pink) and half receive $C^{W}$ (white). The 1 : 2 : 1 ratio needs two pink parents, a 3 : 1 ratio needs complete dominance, and all-pink offspring come from red × white.'
          }
        ]
      }
    },
    {
      id: 'non-1-codominance',
      type: 'text' as const,
      content: `
### Codominance: Both Alleles Show, Side by Side

In **codominance**, the heterozygote does not look intermediate. It shows **both** homozygous phenotypes at full strength, at the same time.

**Roan cattle.** In Shorthorn cattle, a red animal ($C^{R}C^{R}$) crossed with a white animal ($C^{W}C^{W}$) gives a **roan** calf. Up close, a roan coat is not pinkish-brown hair. It is a mixture of **fully red hairs and fully white hairs**. Each hair follicle expresses one allele's color completely.

**AB blood type.** Red blood cells carry surface carbohydrates (antigens). The $I^{A}$ allele adds the A antigen and the $I^{B}$ allele adds the B antigen. An $I^{A}I^{B}$ person has **both** A and B antigens on every red blood cell, so the blood types as AB. Neither antigen is diluted. (The full ABO system, with its third allele, is in Part 2.)

| Feature | Incomplete dominance | Codominance |
|---------|----------------------|-------------|
| What the heterozygote shows | One blended-looking intermediate | Both parental phenotypes, each at full strength |
| Typical molecular cause | Half the amount of one product | Two different products, both made |
| Snapdragon / cattle picture | Pink petals | Red hairs mixed with white hairs |
| F1 × F1 phenotypic ratio | 1 : 2 : 1 | 1 : 2 : 1 |

### Worked Example 2: Roan × Roan

**Problem.** Two roan cattle have many calves over several years. Predict the coat colors.

**Step 1.** Both parents are $C^{R}C^{W}$.

**Step 2.** Offspring genotypes are $\\frac{1}{4}$ $C^{R}C^{R}$, $\\frac{1}{2}$ $C^{R}C^{W}$ and $\\frac{1}{4}$ $C^{W}C^{W}$.

**Step 3.** Phenotypes are **1 red : 2 roan : 1 white**.

**Step 4 — the shortcut.** Since the ratio is identical to incomplete dominance, **a ratio alone cannot tell the two patterns apart**. You have to look at the heterozygote's phenotype: intermediate means incomplete dominance; both traits visible means codominance.
      `
    },
    {
      id: 'non-1-boxes',
      type: 'input-boxes' as const,
      content: `
### Practice — Expected Counts

Two pink four-o'clock plants are crossed, and 160 seeds are grown. Enter the **expected number** of each phenotype.

**1)** Red plants
**2)** Pink plants
**3)** White plants
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '80', '40'],
        hint1: 'Both parents are heterozygous, so the phenotypic ratio is 1 red : 2 pink : 1 white.',
        hint2: 'One quarter of the offspring are red, one half are pink and one quarter are white.',
        hint3: 'Multiply each fraction by 160: 160 × 1/4 and 160 × 1/2.',
        explanation: 'Pink × pink gives 1/4 red, 1/2 pink and 1/4 white, so 160 seeds are expected to give 40 red, 80 pink and 40 white plants.'
      }
    },
    {
      id: 'non-1-levels',
      type: 'text' as const,
      content: `
### Dominance Depends on the Level You Measure

Sickle-cell disease is the classic case of one allele pair showing three different dominance relationships. $Hb^{A}$ codes for normal beta-globin and $Hb^{S}$ codes for sickle beta-globin, which differs by a single amino acid.

| Level of observation | What a heterozygote ($Hb^{A}Hb^{S}$) shows | Relationship at that level |
|---|---|---|
| Whole organism, normal oxygen | Usually healthy, with no sickle-cell disease | $Hb^{A}$ is dominant (disease is recessive) |
| Red blood cells, low oxygen | Some cells sickle, fewer than in $Hb^{S}Hb^{S}$ | Incomplete dominance |
| Protein molecules | Both normal and sickle hemoglobin are made | Codominance |
| Resistance to malaria | Heterozygotes are more resistant than $Hb^{A}Hb^{A}$ | $Hb^{S}$ acts as dominant for resistance |

So the question "Is the sickle-cell allele dominant or recessive?" has no single answer. You must name the phenotype first.

> **AP Connection:** AP questions often describe a trait at one level (a protein on a gel, a cell shape, a symptom) and ask you to classify the dominance. Read what is being measured. The heterozygote advantage in malaria regions also returns in evolution as an example of how selection can keep a harmful allele common in a population.

### Common Mistakes

- Calling every 1 : 2 : 1 ratio "incomplete dominance." Codominance gives the same ratio.
- Saying a pink flower has "a pink allele." It has one red allele and one white allele.
- Assuming a dominant allele must be common. Frequency depends on selection, drift and mutation, not on dominance.
      `
    },
    {
      id: 'non-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Classifying Dominance
      `,
      exercise: {
        questions: [
          {
            question: 'A red Shorthorn bull is mated with a white Shorthorn cow. Their calf has a coat in which every hair is either fully red or fully white. Which pattern of inheritance does this show?',
            options: [
              'Incomplete dominance',
              'Complete dominance',
              'Recessive epistasis',
              'Codominance'
            ],
            correctAnswer: 3,
            explanation: 'Both parental colors appear at full strength in separate hairs, which is codominance. Incomplete dominance would give hairs of an intermediate shade, complete dominance would give a calf identical to one parent, and epistasis involves a second gene.'
          },
          {
            question: 'Two true-breeding plants, one red-flowered and one white-flowered, are crossed. Which F1 result would indicate codominance rather than incomplete dominance?',
            options: [
              'Petals of a uniform, intermediate pink shade',
              'Petals that are entirely red, like one parent',
              'Petals with distinct red and white patches',
              'Petals that are entirely white, like one parent'
            ],
            correctAnswer: 2,
            explanation: 'In codominance each parental phenotype is expressed fully, so red and white show up as separate patches. A uniform pink shade is the signature of incomplete dominance, and a heterozygote that matches one parent indicates complete dominance.'
          },
          {
            question: 'A person heterozygous for the sickle-cell allele feels healthy, yet a lab test finds both normal and sickle beta-globin in their red blood cells. How should the relationship between the two alleles be described?',
            options: [
              'Sickle allele silenced, so only the normal allele is expressed in each cell',
              'Normal allele dominant for the disease, but the alleles codominant for the protein',
              'Sickle allele dominant, since its protein is present in the heterozygote cells',
              'Alleles incompletely dominant, so each red blood cell is partly sickle shaped'
            ],
            correctAnswer: 1,
            explanation: 'At the organism level the heterozygote is healthy, so the normal allele is dominant for the disease, but both forms of beta-globin are made, which is codominance at the protein level. The sickle allele is clearly transcribed, and having its protein present does not make it dominant for the disease phenotype.'
          }
        ]
      }
    },
    {
      id: 'non-1-summary',
      type: 'text' as const,
      content: `
### Part 1 Summary

- **Complete dominance:** heterozygote matches one homozygote; F2 phenotypes 3 : 1.
- **Incomplete dominance:** heterozygote is intermediate (pink snapdragons, four-o'clocks); F2 phenotypes 1 : 2 : 1.
- **Codominance:** heterozygote shows both phenotypes fully (roan cattle, AB blood); F2 phenotypes 1 : 2 : 1.
- Segregation is unchanged in all three; only the mapping from genotype to phenotype differs.
- Dominance is defined for a specific phenotype, so one allele pair can be dominant, incomplete and codominant at different levels (sickle-cell).

**Next:** Part 2 adds more than two alleles per gene and more than one gene per trait.
      `
    }
  ]
}
