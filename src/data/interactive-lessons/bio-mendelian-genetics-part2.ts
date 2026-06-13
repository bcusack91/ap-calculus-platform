export const bioMendelianPart2Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mgp2-intro',
      type: 'text' as const,
      content: `
## Monohybrid Crosses

**Part 2 of 7**

A **monohybrid cross** follows the inheritance of a **single gene** (one trait). It is the foundational skill of Mendelian genetics: once you can set up, solve, and interpret a monohybrid cross fluently, every harder problem in this unit is built from the same moves.

This part walks through a reliable procedure, drills the all-important distinction between **genotypic** and **phenotypic** ratios, and introduces the **test cross** — the experimental trick geneticists use to figure out an unknown genotype.

### A reliable five-step procedure

1. **Assign symbols.** Capital = dominant allele, lowercase = recessive (e.g., *B* = brown, *b* = blue).
2. **Write the parent genotypes** from the information given.
3. **Determine each parent's gametes** (apply the law of segregation).
4. **Fill a Punnett square** — each cell is one equally likely offspring.
5. **Tally genotypic and phenotypic ratios** separately.

Follow these steps every time. On the AP exam, partial credit is awarded for a correct Punnett square even when the final ratio is miscounted, so always show the grid.
      `
    },
    {
      id: 'mgp2-worked-tt',
      type: 'text' as const,
      content: `
### Worked Example 1: A Complete Tt × Tt Cross

**Problem.** In pea plants, tall (*T*) is dominant to short (*t*). Two heterozygous tall plants are crossed. Give the genotypic ratio, the phenotypic ratio, and the probability that a randomly chosen offspring is a true-breeding tall plant.

**Step 1–2 — Symbols and parents.** *T* = tall (dominant), *t* = short (recessive). Both parents are **Tt**.

**Step 3 — Gametes.** Each *Tt* parent produces $\\frac{1}{2}$ *T* and $\\frac{1}{2}$ *t* gametes.

**Step 4 — Punnett square.**

|        | **T** | **t** |
|--------|-------|-------|
| **T** | TT | Tt |
| **t** | Tt | tt |

**Step 5 — Tally the ratios.**

| Genotype | Count | Fraction | Phenotype |
|----------|-------|----------|-----------|
| TT | 1 | $\\frac{1}{4}$ | Tall |
| Tt | 2 | $\\frac{2}{4}$ | Tall |
| tt | 1 | $\\frac{1}{4}$ | Short |

- **Genotypic ratio = 1 TT : 2 Tt : 1 tt** (i.e., 1 : 2 : 1)
- **Phenotypic ratio = 3 Tall : 1 Short** (i.e., 3 : 1)

**Answering the final question.** A *true-breeding* tall plant is homozygous dominant (*TT*) — only *TT* breeds true for tall, because *Tt* would yield some short offspring. From the square, exactly one of the four cells is *TT*, so:

$P(\\text{true-breeding tall}) = \\frac{1}{4}$

> **Trap watch:** "Tall" is $\\frac{3}{4}$ of offspring, but "*true-breeding* tall" is only $\\frac{1}{4}$. The word *true-breeding* forces the genotype to be homozygous. Read genotype-vs-phenotype wording carefully.
      `
    },
    {
      id: 'mgp2-geno-vs-pheno',
      type: 'text' as const,
      content: `
### Genotypic Ratio vs. Phenotypic Ratio

These two ratios describe the *same* offspring but answer *different* questions. Mixing them up is the single most common monohybrid error.

| | Genotypic ratio | Phenotypic ratio |
|---|----------------|------------------|
| **Question it answers** | What allele combinations appear? | What traits are visible? |
| **Tt × Tt result** | 1 : 2 : 1 (TT : Tt : tt) | 3 : 1 (dominant : recessive) |
| **Why they differ** | Counts all three genotypes | Dominance merges TT and Tt into one visible class |

**A useful sanity check:** the phenotypic ratio is what you get by "collapsing" the genotypic ratio according to dominance. In a simple-dominance monohybrid cross, $1 + 2 = 3$ dominant-phenotype offspring and $1$ recessive — the 1:2:1 *becomes* 3:1. If a question gives you the phenotypic ratio and asks for genotypes, you must "un-collapse" it.

> **Why it matters for AP:** A free-response prompt may ask for "the expected ratio of offspring genotypes" — that is **1:2:1**, not 3:1. Read whether the question says *genotype* or *phenotype* and answer the one asked. Writing 3:1 when genotypes were requested loses the point.
      `
    },
    {
      id: 'mgp2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reading the Ratios
      `,
      exercise: {
        questions: [
          {
            question: 'In rabbits, black fur (B) is dominant to brown (b). Two heterozygous black rabbits are crossed and produce a large litter over several seasons. What is the expected ratio of GENOTYPES among the offspring?',
            options: [
              '3 black : 1 brown',
              '1 BB : 2 Bb : 1 bb',
              '1 black : 1 brown',
              'All Bb'
            ],
            correctAnswer: 1,
            explanation: 'A Bb × Bb cross yields genotypes in a 1:2:1 ratio (1 BB : 2 Bb : 1 bb). Option A (3:1) is the trap: that is the PHENOTYPIC ratio (3 black : 1 brown). The question explicitly asks for genotypes, so the three-class 1:2:1 answer is required, not the two-class phenotype ratio.'
          },
          {
            question: 'A monohybrid cross produces offspring in an approximate 1:1 phenotypic ratio (half dominant, half recessive). Which parental cross would produce this result?',
            options: [
              'TT × tt',
              'Tt × Tt',
              'TT × Tt',
              'Tt × tt'
            ],
            correctAnswer: 3,
            explanation: 'A 1:1 phenotypic ratio comes from a heterozygote crossed with a homozygous recessive (Tt × tt): the tt parent contributes only t, so offspring are 1/2 Tt (dominant) and 1/2 tt (recessive). Option B (Tt × Tt) gives 3:1, and option A (TT × tt) gives 100% dominant (all Tt) — neither produces the 1:1 split observed.'
          }
        ]
      }
    },
    {
      id: 'mgp2-test-cross',
      type: 'text' as const,
      content: `
### The Test Cross: Revealing an Unknown Genotype

Here is the practical problem dominance creates: an organism showing the **dominant phenotype** could be either **homozygous (TT)** or **heterozygous (Tt)**. You cannot tell which just by looking. So how does a breeder find out?

**The solution is a test cross:** cross the mystery individual (dominant phenotype, unknown genotype) with a **homozygous recessive (tt)**. The recessive parent contributes only *t* gametes, so the offspring phenotypes act as a readout of the mystery parent's hidden allele.

**Case A — the unknown is homozygous (TT):**

|        | **T** | **T** |
|--------|-------|-------|
| **t** | Tt | Tt |
| **t** | Tt | Tt |

All offspring are *Tt* → **100% dominant phenotype**. No recessive offspring ever appear.

**Case B — the unknown is heterozygous (Tt):**

|        | **T** | **t** |
|--------|-------|-------|
| **t** | Tt | tt |
| **t** | Tt | tt |

Offspring are $\\frac{1}{2}$ *Tt* and $\\frac{1}{2}$ *tt* → **1 dominant : 1 recessive phenotype**.

**The interpretation rule:**
- If **any** recessive offspring appear, the unknown parent **must** be heterozygous (*Tt*) — it had to contribute a *t* allele.
- If **all** offspring show the dominant phenotype (especially over a large number), the unknown is most likely homozygous (*TT*).

### Test cross vs. back-cross

A **back-cross** is any cross of an offspring back to one of its *parents* (or to an individual of the parental genotype). A **test cross** is the specific case where that cross is to a homozygous **recessive** individual in order to deduce a genotype. Every test cross to a recessive parent is a back-cross in form, but not every back-cross is a test cross (e.g., crossing back to a homozygous dominant parent reveals nothing about a hidden recessive allele).
      `
    },
    {
      id: 'mgp2-worked-testcross',
      type: 'text' as const,
      content: `
### Worked Example 2: Solving a Test Cross

**Problem.** A purple-flowered pea plant (*P* dominant to *p*) is test-crossed. Among 80 offspring, 38 are purple and 42 are white. What is the genotype of the purple parent?

**Step 1 — Identify the cross.** A test cross means the other parent is homozygous recessive (*pp*), contributing only *p* gametes.

**Step 2 — Interpret the offspring.** White offspring (*pp*) appeared. For an offspring to be *pp*, it must have received a *p* allele from **each** parent. Since white offspring exist, the purple parent **must carry a p allele** — so it cannot be *PP*.

**Step 3 — Confirm with the expected ratio.** A *Pp* $\\times$ *pp* cross predicts a **1 purple : 1 white** ratio. The observed 38 : 42 is statistically indistinguishable from 40 : 40 (sampling noise around the expected 1:1).

**Conclusion:** The purple parent is **heterozygous (Pp)**.

> **Reasoning shortcut:** The appearance of *even one* recessive offspring in a test cross is decisive proof of heterozygosity — you do not need the full 1:1 ratio to conclude it. The ratio is useful when *zero* recessives appear: the more dominant-only offspring you score, the more confident you are that the parent is homozygous (because the probability of getting all-dominant offspring by chance from a heterozygote shrinks rapidly — Part 4 quantifies this).
      `
    },
    {
      id: 'mgp2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Test Cross Reasoning
      `,
      exercise: {
        questions: [
          {
            question: 'A farmer has a black bull (black, B, is dominant to red, b) and wants to know if it is homozygous or heterozygous. He crosses it with 25 red (bb) cows. ALL 25 calves are black. What is the most justified conclusion?',
            options: [
              'The bull is definitely heterozygous (Bb)',
              'The bull is most likely homozygous (BB), because a heterozygote would be expected to produce roughly half red calves',
              'The bull must carry a hidden red allele that was destroyed',
              'No conclusion is possible from a test cross'
            ],
            correctAnswer: 1,
            explanation: 'In a test cross (× bb), a heterozygous Bb bull would be expected to produce about 50% red calves. Getting 25 black calves and zero red is overwhelmingly unlikely if the bull were Bb (it would require the recessive allele to lose the coin-flip 25 times in a row), so the bull is almost certainly homozygous BB. Option A is backwards — heterozygosity is what is ruled OUT by the absence of red calves.'
          },
          {
            question: 'In guinea pigs, short hair (S) is dominant to long hair (s). A short-haired guinea pig is crossed with a long-haired one, producing 6 short-haired and 5 long-haired offspring. Which statement is correct?',
            options: [
              'The short-haired parent is homozygous (SS) and this is not a true test cross',
              'The short-haired parent is heterozygous (Ss), as shown by the appearance of long-haired (ss) offspring',
              'Both parents must be heterozygous',
              'Long hair is actually the dominant trait'
            ],
            correctAnswer: 1,
            explanation: 'The long-haired parent is ss, so this IS a test cross. Long-haired (ss) offspring appeared, which means each received an s allele from BOTH parents — so the short-haired parent must carry s and is therefore Ss. The roughly 1:1 ratio (6:5) confirms a Ss × ss cross. Option A is wrong because an SS parent could never produce long-haired offspring in this cross.'
          }
        ]
      }
    }
  ]
};
