export const bioHardyWeinbergEquilibriumPart7Data = {
  topicSlug: 'hardy-weinberg-equilibrium',
  sections: [
    {
      id: 'hw7-intro',
      type: 'text' as const,
      content: `
## AP Exam-Level Problems: Hardy-Weinberg

**Part 7 of 7**

This final part presents multi-step problems at the level of difficulty you will see on the AP Biology exam. Each problem requires you to integrate allele frequency calculations, equilibrium testing, and interpretation of evolutionary forces.

> 🎯 **Strategy reminder:** On the AP exam, always start by identifying what you can measure directly. For complete dominance, start with $q^2$ (recessive phenotype). For codominance, count alleles directly.
      `
    },
    {
      id: 'hw7-problem1',
      type: 'text' as const,
      content: `
### Problem 1: PKU in a Human Population

Phenylketonuria (PKU) is an autosomal recessive metabolic disorder. In a screening of 10,000 newborns in a European country:
- 9 babies are diagnosed with PKU

**Calculations:**

$$q^2 = \\frac{9}{10{,}000} = 0.0009$$

$$q = \\sqrt{0.0009} = 0.03$$

$$p = 1 - 0.03 = 0.97$$

**Genotype frequencies and expected counts:**

| Genotype | Frequency | Expected count |
|----------|-----------|---------------|
| Normal homozygous (PP) | $p^2 = 0.9409$ | 9,409 |
| Carrier (Pp) | $2pq = 0.0582$ | 582 |
| PKU affected (pp) | $q^2 = 0.0009$ | 9 |

**Key insight:** Approximately **1 in 17** people ($582/10{,}000$) is a carrier for PKU. The carrier frequency is dramatically higher than the disease frequency (1 in 17 vs. 1 in 1,111).

This is a general principle: for rare recessive disorders, **most copies of the recessive allele are "hidden" in heterozygous carriers**.
      `
    },
    {
      id: 'hw7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Problem 1 Follow-up** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If two known PKU carriers (Pp × Pp) have a child, what is the probability the child has PKU?',
            options: ['1/2', '1/4', '1/8', '1/17'],
            correctAnswer: 1,
            explanation: 'This is a simple Mendelian cross: Pp × Pp → 1/4 PP, 2/4 Pp, 1/4 pp. The probability of a pp (PKU) child is 1/4. Note: this is different from the population frequency of PKU because we already know both parents are carriers.'
          },
          {
            question: 'What is the probability that a randomly selected healthy person from this population is a PKU carrier?',
            options: [
              '0.0582',
              '0.0583 / 0.9991 ≈ 0.0584',
              '0.03',
              '0.97'
            ],
            correctAnswer: 1,
            explanation: 'Among healthy individuals (PP + Pp), the probability of being a carrier is 2pq / $(p^{2} + 2pq)$ = 0.0582 / (0.9409 + 0.0582) = 0.0582/0.9991 ≈ 0.0584, or about 1 in 17.'
          }
        ]
      }
    },
    {
      id: 'hw7-problem2',
      type: 'text' as const,
      content: `
### Problem 2: Two Generations of Data

A researcher studies wing color in a butterfly population over two generations:

| | Generation 1 (n=500) | Generation 2 (n=500) |
|---|---|---|
| Dark (BB) | 120 | 155 |
| Intermediate (Bb) | 250 | 230 |
| Light (bb) | 130 | 115 |

*Codominant inheritance — all genotypes are distinguishable*

**Generation 1 allele frequencies:**

$$p = \\frac{2(120) + 250}{1000} = \\frac{490}{1000} = 0.49$$

$$q = \\frac{2(130) + 250}{1000} = \\frac{510}{1000} = 0.51$$

**Generation 2 allele frequencies:**

$$p = \\frac{2(155) + 230}{1000} = \\frac{540}{1000} = 0.54$$

$$q = \\frac{2(115) + 230}{1000} = \\frac{460}{1000} = 0.46$$

**Analysis:** The frequency of the B allele increased from 0.49 to 0.54 between generations. This shift away from equilibrium suggests an evolutionary force is acting — most likely **directional selection favoring the dark phenotype** (or the B allele).
      `
    },
    {
      id: 'hw7-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Problem 2 Analysis** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'The allele frequency of B changed from ___ to ___ between generations', options: ['0.49 to 0.54', '0.51 to 0.46', '0.24 to 0.31', '0.49 to 0.49'] },
          { label: 'The most likely evolutionary mechanism is ___', options: ['Genetic drift', 'Directional selection for B allele', 'Gene flow', 'Mutation'] },
          { label: 'Is this population in Hardy-Weinberg equilibrium?', options: ['Yes — allele frequencies are stable', 'No — allele frequencies changed between generations', 'Cannot determine without a chi-square test', 'Yes — both alleles are still present'] }
        ],
        correctAnswers: ['0.49 to 0.54', 'Directional selection for B allele', 'No — allele frequencies changed between generations'],
        hint1: 'Calculate p for each generation using the codominant allele counting method.',
        hint2: 'The B allele is increasing — which mechanism causes consistent directional change?',
        hint3: 'If allele frequencies change between generations, the population is NOT in equilibrium.',
        explanation: 'The B allele increased from 0.49 to 0.54, while b decreased from 0.51 to 0.46. This directional change most likely reflects selection favoring the B allele (dark phenotype). By definition, changing allele frequencies means the population is not in HW equilibrium.'
      }
    },
    {
      id: 'hw7-problem3',
      type: 'text' as const,
      content: `
### Problem 3: Multi-Population Comparison

Three island populations of a lizard species are sampled for a tail-length gene with two alleles (L = long, l = short). Complete dominance (L dominant).

| Island | Total lizards | Short-tailed (ll) | Long-tailed (L_) |
|--------|-------------|-------------------|-------------------|
| Island A | 400 | 64 | 336 |
| Island B | 400 | 100 | 300 |
| Island C | 400 | 196 | 204 |

**Calculate allele frequencies for each island:**

**Island A:** $q^2 = 64/400 = 0.16$ → $q = 0.4$ → $p = 0.6$

**Island B:** $q^2 = 100/400 = 0.25$ → $q = 0.5$ → $p = 0.5$

**Island C:** $q^2 = 196/400 = 0.49$ → $q = 0.7$ → $p = 0.3$

| Island | p (L) | q (l) | Expected heterozygotes (2pq × 400) |
|--------|-------|-------|-------------------------------------|
| A | 0.6 | 0.4 | 192 |
| B | 0.5 | 0.5 | 200 |
| C | 0.3 | 0.7 | 168 |

**Interpretation:** The three islands have very different allele frequencies. This could be due to:
- **Founder effects** — each island was colonized by a different small group
- **Different selection pressures** — environments favor different tail lengths
- **Genetic drift** — small island populations diverged by chance
- **Limited gene flow** — isolation prevents homogenization
      `
    },
    {
      id: 'hw7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Problem 3 Follow-up** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If gene flow were established between all three islands, what would you predict over many generations?',
            options: [
              'Each island would maintain its current allele frequencies',
              'Allele frequencies would converge toward a common value across all islands',
              'The recessive allele would be eliminated from all islands',
              'All lizards would become heterozygous'
            ],
            correctAnswer: 1,
            explanation: 'Gene flow homogenizes allele frequencies between populations. Over time, the three islands would converge toward a common allele frequency (roughly a weighted average of their current frequencies), reducing genetic differences between populations.'
          },
          {
            question: 'On Island C, if you randomly selected a long-tailed lizard, what is the probability it is heterozygous (Ll)?',
            options: [
              '0.42',
              '0.70',
              '0.82',
              '0.51'
            ],
            correctAnswer: 2,
            explanation: 'On Island C: p = 0.3, q = 0.7. Long-tailed lizards are LL or Ll. P(LL) = $p^{2}$ = 0.09, P(Ll) = 2pq = 0.42. Among long-tailed lizards: P(Ll | long-tailed) = 0.42/(0.09 + 0.42) = 0.42/0.51 ≈ 0.82. About 82% of long-tailed lizards on Island C are heterozygous.'
          }
        ]
      }
    },
    {
      id: 'hw7-final-problem',
      type: 'text' as const,
      content: `
### Problem 4: Putting It All Together

A wildlife biologist studies a population of 600 deer for a coat-color gene.

**Observed genotype counts (codominant):**
- 90 **CC** (dark brown)
- 240 **Cc** (medium brown)  
- 270 **cc** (light tan)

**Step 1:** Allele frequencies

$$p = \\frac{2(90) + 240}{1200} = \\frac{420}{1200} = 0.35$$

$$q = \\frac{2(270) + 240}{1200} = \\frac{780}{1200} = 0.65$$

**Step 2:** Expected HW counts

| Genotype | Expected freq | Expected count | Observed |
|----------|--------------|---------------|----------|
| CC | $0.35^2 = 0.1225$ | 73.5 | 90 |
| Cc | $2(0.35)(0.65) = 0.455$ | 273.0 | 240 |
| cc | $0.65^2 = 0.4225$ | 253.5 | 270 |

**Step 3:** Chi-square test

$$\\chi^2 = \\frac{(90-73.5)^2}{73.5} + \\frac{(240-273)^2}{273} + \\frac{(270-253.5)^2}{253.5}$$

$$= \\frac{272.25}{73.5} + \\frac{1089}{273} + \\frac{272.25}{253.5}$$

$$= 3.704 + 3.989 + 1.074 = 8.767$$

**Step 4:** With $df = 1$ and $\\alpha = 0.05$, the critical value is 3.841.

Since $8.767 > 3.841$, we **reject** $H_0$.

**Conclusion:** This population is NOT in Hardy-Weinberg equilibrium. There is an **excess of homozygotes** and a **deficit of heterozygotes**, which is characteristic of **inbreeding** or **population substructure** (Wahlund effect).
      `
    },
    {
      id: 'hw7-quiz3',
      type: 'multiple-choice' as const,
      content: `**Final Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the deer population problem, both homozygote classes are above expected values while heterozygotes are below. This pattern is most consistent with:',
            options: [
              'Directional selection for the C allele',
              'Heterozygote advantage',
              'Inbreeding within the population',
              'High gene flow from nearby populations'
            ],
            correctAnswer: 2,
            explanation: 'An excess of both homozygote classes and a deficit of heterozygotes is the hallmark of inbreeding (or the Wahlund effect from population substructure). Inbreeding increases the probability that an individual receives two copies of the same allele, boosting homozygosity at the expense of heterozygosity.'
          },
          {
            question: 'A student claims that because the dominant allele in a population has a frequency of 0.1, dominant traits will eventually disappear. This reasoning is:',
            options: [
              'Correct — rare alleles always disappear due to drift',
              'Correct — dominant alleles at low frequency cannot persist',
              'Incorrect — without selection, allele frequencies remain stable regardless of dominance',
              'Incorrect — dominant alleles always increase in frequency'
            ],
            correctAnswer: 2,
            explanation: 'Hardy-Weinberg equilibrium tells us that without evolutionary forces, allele frequencies remain constant regardless of whether an allele is dominant or recessive. Dominance describes how alleles interact to produce phenotypes, not whether they will increase or decrease in a population. A dominant allele at 0.1 will stay at 0.1 indefinitely in a population at equilibrium.'
          }
        ]
      }
    }
  ]
}
