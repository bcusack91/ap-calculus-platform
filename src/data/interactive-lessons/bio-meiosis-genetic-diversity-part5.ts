export const bioMeiosisPart5Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio5-intro-p5',
      type: 'text' as const,
      content: `
## Sources of Genetic Variation

**Part 5 of 7 — Sources of Genetic Variation**

Apart from identical twins, no two children of the same parents are genetically identical. The CED names three features of sexual reproduction that produce this variation: **independent assortment** of chromosomes in meiosis I, **crossing over** in prophase I, and **random fertilization**. This part quantifies each one and then places them beside the ultimate source of all new alleles, **mutation**.

### Source 1: Independent assortment

At metaphase I, each homologous pair lines up with its maternal homolog facing either pole, and each pair's orientation is **independent** of the others. So each gamete receives a random mix of maternal and paternal chromosomes.

**Worked example (n = 2).** A cell is heterozygous Aa for a gene on chromosome 1 and Bb for a gene on chromosome 2. At metaphase I there are two equally likely arrangements:

| Arrangement at metaphase I | Gametes produced by this meiosis |
|---|---|
| A and B face the same pole | AB, AB, ab, ab |
| A and b face the same pole | Ab, Ab, aB, aB |

Across many meioses, the individual makes **four** gamete types (AB, Ab, aB, ab) in equal proportions. That is $2^2 = 4$.

**General rule:** with $n$ homologous pairs, independent assortment alone can produce $2^{n}$ different combinations of maternal and paternal chromosomes.

| Organism | n | Combinations, $2^{n}$ |
|---|---|---|
| Model cell | 2 | 4 |
| Fruit fly | 4 | 16 |
| Garden pea | 7 | 128 |
| Human | 23 | 8,388,608 (about 8.4 million) |

> **Mendel connection:** Independent orientation of different homologous pairs is the physical basis of Mendel's **law of independent assortment**, which holds for genes on **different** chromosomes. Separation of the two homologs of one pair is the basis of the **law of segregation**.
      `
    },
    {
      id: 'meio5-input',
      type: 'input-boxes' as const,
      content: `
**Count the Combinations** 🧮

Ignore crossing over. Enter the number of different chromosome combinations independent assortment can produce in the gametes of each organism.

**1)** An organism with $n = 3$
**2)** An organism with $2n = 10$
**3)** An organism with $2n = 12$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '32', '64'],
        hint1: 'Use $2^{n}$, where n is the number of homologous pairs.',
        hint2: 'If you are given 2n, halve it first: 2n = 10 means n = 5.',
        hint3: '$2^{5} = 32$ and $2^{6} = 64$.',
        explanation: '1) $2^{3} = 8$. 2) n = 5, so $2^{5} = 32$. 3) n = 6, so $2^{6} = 64$. A common error is to use 2n as the exponent, which squares the true answer.'
      }
    },
    {
      id: 'meio5-fert-cross',
      type: 'text' as const,
      content: `
### Source 2: Crossing over

Part 4 showed that crossing over in prophase I builds recombinant chromosomes carrying new combinations of alleles. Because crossovers fall at different places in different meioses, crossing over multiplies the 8.4 million combinations from independent assortment into a number so large it is effectively unlimited.

### Source 3: Random fertilization

Any one of a father's sperm can fertilize any one of a mother's eggs. Ignoring crossing over:

$$2^{23} \\times 2^{23} = 2^{46} \\approx 7 \\times 10^{13}$$

That is about **70 trillion** possible chromosome combinations in a zygote from one couple, **before** crossing over is counted.

### Where each source acts

| Source | When it acts | What it shuffles |
|---|---|---|
| Crossing over | Prophase I | Alleles **within** a chromosome |
| Independent assortment | Metaphase I / anaphase I | **Whole chromosomes** among gametes |
| Random fertilization | Fertilization (after meiosis) | Which gamete from each parent forms the zygote |
| Mutation | Any time DNA is copied or damaged | Creates **new alleles** |

### Mutation: the ultimate source

The three sources above **reshuffle alleles that already exist**. Only **mutation**, a change in DNA sequence, creates a new allele. A mutation passes to offspring only if it is present in the **germ line** (the cells that make gametes). So mutation supplies the raw variants, and meiosis and fertilization arrange them into new combinations every generation.
      `
    },
    {
      id: 'meio5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Quantifying Variation
      `,
      exercise: {
        questions: [
          {
            question: 'Two siblings with the same parents are genetically different. Which source of variation acts at the moment the zygote forms?',
            options: [
              'Independent assortment',
              'Crossing over',
              'Gene duplication',
              'Random fertilization'
            ],
            correctAnswer: 3,
            explanation: 'Random fertilization means any sperm can fuse with any egg, and it acts when the zygote forms. Independent assortment and crossing over act earlier, during meiosis, when each parent\'s gametes are made.'
          },
          {
            question: 'Humans have 23 chromosome pairs. Ignoring crossing over, about how many genetically different zygotes can one couple produce?',
            options: [
              'About 70 trillion',
              'About 8.4 million',
              'About 16.8 million',
              'About 529'
            ],
            correctAnswer: 0,
            explanation: 'Each parent can make $2^{23}$ (about 8.4 million) different gametes by independent assortment. Random fertilization multiplies the two: $2^{23}$ × $2^{23}$ = about 70 trillion combinations, even before crossing over adds more. Adding the two numbers (16.8 million) or squaring 23 (529) uses the wrong operation.'
          },
          {
            question: 'Which statement explains why mutation, and not meiosis, is called the ultimate source of genetic variation?',
            options: [
              'Meiosis only rearranges alleles that already exist; mutation makes new ones',
              'Meiosis happens only in plants, so animals depend on mutation for variety',
              'Meiosis removes harmful alleles; mutation adds only helpful alleles',
              'Meiosis copies alleles exactly; mutation shuffles them into new orders'
            ],
            correctAnswer: 0,
            explanation: 'Crossing over and independent assortment recombine alleles already present in the parents, while mutation changes the DNA sequence and creates new alleles. Mutations are mostly neutral or harmful rather than helpful, meiosis occurs in animals as well as plants, and it is meiosis, not mutation, that shuffles alleles.'
          }
        ]
      }
    },
    {
      id: 'meio5-evolution',
      type: 'text' as const,
      content: `
### Why variation matters: sexual vs. asexual reproduction

Natural selection acts on **phenotypic variation** among individuals. A population whose members differ genetically is more likely to contain some individuals that survive and reproduce when the environment changes, for example when a new pathogen or a new climate arrives.

| Feature | Asexual reproduction | Sexual reproduction |
|---|---|---|
| Cell division used | Mitosis (or binary fission in prokaryotes) | Meiosis to make gametes, then fertilization |
| Parents | One | Usually two |
| Offspring | Genetically identical to parent (clones) | Genetically unique |
| Sources of variation | Mutation only (plus gene transfer in prokaryotes) | Mutation, crossing over, independent assortment, random fertilization |
| Speed of population growth | Fast; every individual can reproduce | Slower; needs a mate and only some individuals bear young |
| Advantage | Efficient in a stable environment | Variation helps a population persist in a changing environment |

**Worked reasoning.** A population of clonal plants and a population of sexually reproducing plants of the same species are both exposed to a new fungal disease. In the clonal population, if one plant is susceptible, essentially all are, because they share the same genotype. In the sexual population, new allele combinations each generation make it more likely that **some** individuals carry resistance, survive and pass those alleles on. Natural selection then increases the frequency of resistance.

> **AP Connection:** The CED's wording is that gamete formation, including crossing over, the random assortment of chromosomes during meiosis, and the subsequent fertilization of gametes, serves to **increase variation**. Note the precise claim: meiosis and fertilization **increase variation**. They do not "cause evolution" by themselves, and they do not produce variation "because the organism needs it."
      `
    },
    {
      id: 'meio5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Variation and Selection
      `,
      exercise: {
        questions: [
          {
            question: 'An organism is heterozygous for two genes on different chromosomes (AaBb). Ignoring crossing over, which gametes can a single meiotic cell produce?',
            options: [
              'AB, AB, ab, ab or Ab, Ab, aB, aB',
              'AB, Ab, aB and ab, one of each type',
              'Aa, Aa, Bb and Bb, two of each type',
              'AaBb in all four, identical to the parent'
            ],
            correctAnswer: 0,
            explanation: 'One meiosis has a single metaphase I arrangement, so it yields two kinds of gametes, either AB and ab or Ab and aB. All four types appear only across many meioses. Gametes carry one allele of each gene, never both alleles of a pair.'
          },
          {
            question: 'Why is a population of sexually reproducing organisms often better able to survive a new disease than a clonal population?',
            options: [
              'Sexual reproduction creates resistance alleles whenever disease appears',
              'Genetic variation makes it likelier that some individuals resist the disease',
              'Sexual reproduction yields offspring faster, outpacing the disease',
              'Clonal organisms cannot carry alleles for disease resistance'
            ],
            correctAnswer: 1,
            explanation: 'Sexual reproduction reshuffles alleles each generation, so the population is more varied and more likely to include individuals that happen to resist the pathogen. Variation is not produced in response to need, sexual populations usually grow more slowly than clonal ones, and clones can carry resistance alleles; they just all share the same ones.'
          }
        ]
      }
    }
  ]
}
