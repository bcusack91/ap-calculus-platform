export const bioMendelianPart3Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mgp3-intro',
      type: 'text' as const,
      content: `
## Dihybrid Crosses

**Part 3 of 7**

A **dihybrid cross** tracks **two genes at once**. This is where the **law of independent assortment** earns its keep: because the two genes assort independently, the famous **9 : 3 : 3 : 1** phenotypic ratio emerges in the F2 generation. Mendel's discovery of this ratio — by crossing peas that differed in *both* seed shape and seed color — was the experimental evidence for independent assortment.

We will use Mendel's classic example throughout:
- Seed **shape**: round (*R*) dominant to wrinkled (*r*)
- Seed **color**: yellow (*Y*) dominant to green (*y*)

A plant heterozygous for both genes is written **RrYy** (a *dihybrid*).

### Counting gamete types: the $2^n$ rule

Before building any Punnett square, figure out how many gamete types each parent makes. For *n* heterozygous gene pairs, an individual produces $2^n$ genetically distinct gametes:

| Parent genotype | Heterozygous gene pairs (n) | Gamete types ($2^n$) |
|-----------------|------------------------------|------------------------|
| Tt | 1 | $2^1 = 2$ |
| RrYy | 2 | $2^2 = 4$ |
| RrYyAa | 3 | $2^3 = 8$ |

For an **RrYy** parent, the four gamete types are **RY, Ry, rY, ry**. A clean way to generate them is the **FOIL** method — distribute the alleles of gene 1 across the alleles of gene 2: $(R + r)(Y + y) = RY + Ry + rY + ry$. Each appears with probability $\\frac{1}{4}$.
      `
    },
    {
      id: 'mgp3-grid',
      type: 'text' as const,
      content: `
### The 4×4 Punnett Square: RrYy × RrYy

With four gamete types from each parent, the Punnett square is a **4 × 4 grid (16 cells)**. List the gametes **RY, Ry, rY, ry** along the top and side, then combine.

|        | **RY** | **Ry** | **rY** | **ry** |
|--------|--------|--------|--------|--------|
| **RY** | RRYY | RRYy | RrYY | RrYy |
| **Ry** | RRYy | RRyy | RrYy | Rryy |
| **rY** | RrYY | RrYy | rrYY | rrYy |
| **ry** | RrYy | Rryy | rrYy | rryy |

Now classify all 16 offspring by **phenotype** (remember: any *R* gives round, any *Y* gives yellow):

| Phenotype | Genotypes in grid | Count | Fraction |
|-----------|-------------------|-------|----------|
| Round, Yellow | RRYY, RRYy(×2), RrYY(×2), RrYy(×4) | **9** | $\\frac{9}{16}$ |
| Round, green | RRyy, Rryy(×2) | **3** | $\\frac{3}{16}$ |
| wrinkled, Yellow | rrYY, rrYy(×2) | **3** | $\\frac{3}{16}$ |
| wrinkled, green | rryy | **1** | $\\frac{1}{16}$ |

This is the **9 : 3 : 3 : 1 phenotypic ratio** — the signature of a dihybrid cross with two independently assorting genes, each showing simple dominance.

> **What the ratio means:** the two single "outer" classes (round-green and wrinkled-yellow) are the **recombinant** phenotypes — new combinations not seen in the true-breeding parents. Their appearance is direct visual proof that the shape gene and the color gene assorted independently.
      `
    },
    {
      id: 'mgp3-forked-line',
      type: 'text' as const,
      content: `
### The Forked-Line Method: A Faster Route to 9:3:3:1

A 16-cell grid is slow and error-prone. Because the genes are independent, you can treat the dihybrid cross as **two separate monohybrid crosses** and multiply the results (this is the **product rule**, formalized in Part 4).

**Step 1 — Solve each gene separately.**
- Shape: *Rr* $\\times$ *Rr* → $\\frac{3}{4}$ round, $\\frac{1}{4}$ wrinkled
- Color: *Yy* $\\times$ *Yy* → $\\frac{3}{4}$ yellow, $\\frac{1}{4}$ green

**Step 2 — Multiply across every combination (the "fork").**

| Shape | × | Color | = | Combined phenotype | Probability |
|-------|---|-------|---|---------------------|-------------|
| $\\frac{3}{4}$ round | × | $\\frac{3}{4}$ yellow | = | Round, Yellow | $\\frac{9}{16}$ |
| $\\frac{3}{4}$ round | × | $\\frac{1}{4}$ green | = | Round, green | $\\frac{3}{16}$ |
| $\\frac{1}{4}$ wrinkled | × | $\\frac{3}{4}$ yellow | = | wrinkled, Yellow | $\\frac{3}{16}$ |
| $\\frac{1}{4}$ wrinkled | × | $\\frac{1}{4}$ green | = | wrinkled, green | $\\frac{1}{16}$ |

The four products are $\\frac{9}{16}, \\frac{3}{16}, \\frac{3}{16}, \\frac{1}{16}$ — the same **9:3:3:1** ratio, obtained without drawing 16 boxes. They sum to $\\frac{16}{16} = 1$, a good check.

> **Why this works:** independent assortment means the shape outcome and the color outcome are statistically independent events, so their probabilities multiply. The forked-line method is just the product rule applied phenotype-by-phenotype — and it scales to three, four, or more genes where a Punnett square becomes hopeless (a trihybrid cross would need a $64$-cell grid).
      `
    },
    {
      id: 'mgp3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Building the Dihybrid Cross
      `,
      exercise: {
        questions: [
          {
            question: 'A pea plant with genotype RrYy is allowed to self-pollinate. How many genetically distinct types of gametes can this plant produce, and what are they?',
            options: [
              '2 types: RY and ry',
              '4 types: RY, Ry, rY, ry',
              '8 types, one for each cell of half the grid',
              '16 types, one for each Punnett square cell'
            ],
            correctAnswer: 1,
            explanation: 'RrYy is heterozygous for 2 genes, so it makes $2^{2}$ = 4 gamete types: RY, Ry, rY, ry (each allele of gene 1 combined with each allele of gene 2). Option A lists only the two "parental" combinations and misses the recombinant gametes Ry and rY, which independent assortment specifically produces. The 16 in option D is the number of grid CELLS (offspring outcomes), not gamete types.'
          },
          {
            question: 'In a RrYy × RrYy dihybrid cross, what fraction of the offspring are expected to show BOTH recessive phenotypes (wrinkled AND green)?',
            options: [
              '$\\frac{9}{16}$',
              '$\\frac{3}{16}$',
              '$\\frac{1}{16}$',
              '$\\frac{1}{4}$'
            ],
            correctAnswer: 2,
            explanation: 'Both recessive phenotypes require genotype rryy. Using the product rule: P(wrinkled) = 1/4 and P(green) = 1/4, so P(wrinkled and green) = 1/4 × 1/4 = 1/16. This is the single "1" in the 9:3:3:1 ratio. The trap answer 1/4 (option D) is the probability of just ONE recessive trait; forgetting to multiply the two independent 1/4 probabilities is the classic dihybrid error.'
          }
        ]
      }
    },
    {
      id: 'mgp3-worked-genotype',
      type: 'text' as const,
      content: `
### Worked Example: Probability of a Specific Genotype

**Problem.** From the cross **RrYy × RrYy**, what is the probability that an offspring has the exact genotype **AABb**... wait — using our symbols, what is the probability of genotype **RRYy**?

**The Punnett-square route.** Scan the 16-cell grid above for *RRYy*. It appears in 2 cells (row RY × column Ry, and row Ry × column RY). So $P(RRYy) = \\frac{2}{16} = \\frac{1}{8}$.

**The faster product-rule route.** Split into two independent monohybrid crosses and multiply the genotype probabilities:

- Gene 1 (*Rr* $\\times$ *Rr*): $P(RR) = \\frac{1}{4}$
- Gene 2 (*Yy* $\\times$ *Yy*): $P(Yy) = \\frac{2}{4} = \\frac{1}{2}$

$P(RRYy) = P(RR)\\times P(Yy) = \\frac{1}{4}\\times\\frac{1}{2} = \\frac{1}{8}$

Both methods agree: $\\frac{1}{8}$.

**Try the variation: P(RrYy), the double heterozygote.**
- $P(Rr) = \\frac{1}{2}$ and $P(Yy) = \\frac{1}{2}$
- $P(RrYy) = \\frac{1}{2}\\times\\frac{1}{2} = \\frac{1}{4}$ — consistent with the 4 *RrYy* cells out of 16 in the grid.

> **Strategy takeaway:** For a *specific genotype* (not just a phenotype), apply the product rule to the per-gene **genotypic** probabilities (1:2:1 → $\\frac{1}{4}, \\frac{1}{2}, \\frac{1}{4}$). For a *specific phenotype*, use the per-gene **phenotypic** probabilities ($\\frac{3}{4}, \\frac{1}{4}$). Picking the wrong per-gene fractions is the subtle mistake to avoid — and Part 4 makes the product/sum rules fully explicit.
      `
    },
    {
      id: 'mgp3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Dihybrid Probability
      `,
      exercise: {
        questions: [
          {
            question: 'Two pea plants, both RrYy, are crossed. What is the probability that an offspring is round and yellow but HETEROZYGOUS for both genes (genotype RrYy)?',
            options: [
              '$\\frac{9}{16}$',
              '$\\frac{4}{16}$ (i.e. $\\frac{1}{4}$)',
              '$\\frac{1}{16}$',
              '$\\frac{1}{2}$'
            ],
            correctAnswer: 1,
            explanation: 'P(Rr) = 1/2 and P(Yy) = 1/2, so P(RrYy) = 1/2 × 1/2 = 1/4 = 4/16, matching the four RrYy cells in the 16-cell grid. The trap is 9/16 (option A): that is the probability of the round-yellow PHENOTYPE, which lumps together RRYY, RRYy, RrYY, and RrYy. The question asks for the specific double-heterozygous genotype, a subset of the 9/16.'
          },
          {
            question: 'A dihybrid cross AaBb × AaBb is performed. A student needs to find the probability of offspring that are dominant for trait A but recessive for trait B (phenotype A_ bb). What is the fastest correct approach, and the answer?',
            options: [
              'Draw the full 16-box grid; the answer is $\\frac{1}{16}$',
              'Multiply P(A dominant) × P(bb) = $\\frac{3}{4} \\times \\frac{1}{4} = \\frac{3}{16}$',
              'Add P(A dominant) + P(bb) = $\\frac{3}{4} + \\frac{1}{4} = 1$',
              'Multiply P(AA) × P(bb) = $\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}$'
            ],
            correctAnswer: 1,
            explanation: 'For two independent traits, multiply (product rule, the AND case): P(A dominant) = 3/4 and P(bb) = 1/4, giving 3/4 × 1/4 = 3/16. Option C wrongly ADDS the probabilities — the sum rule applies to mutually exclusive OR outcomes, not to two traits that must BOTH occur. Option D uses P(AA) = 1/4 instead of P(A_ ) = 3/4, undercounting by excluding the heterozygous Aa plants that also show the dominant A phenotype.'
          }
        ]
      }
    },
    {
      id: 'mgp3-scaling',
      type: 'text' as const,
      content: `
### Why Punnett Squares Break Down — and Independent Assortment Saves You

The dihybrid grid has 16 cells. Add one more heterozygous gene and the picture gets ugly fast, because both the number of gamete types and the grid size grow as powers of 2.

| Cross | Gamete types per parent ($2^n$) | Punnett grid cells ($4^n$) | Phenotype classes |
|-------|----------------------------------|-----------------------------|--------------------|
| Monohybrid (Aa) | 2 | 4 | 2 |
| Dihybrid (AaBb) | 4 | 16 | 4 |
| Trihybrid (AaBbCc) | 8 | 64 | 8 |
| Tetrahybrid (AaBbCcDd) | 16 | 256 | 16 |

A trihybrid self-cross would require you to draw and classify **64 boxes** by hand — clearly impractical on a timed exam. This is exactly why the law of independent assortment is so powerful: because each gene assorts independently, you never need the full grid. You solve each gene as a one-line monohybrid cross and **multiply** the per-gene probabilities (the product rule of Part 4).

**Worked example (trihybrid, no grid).** From *AaBbCc* $\\times$ *AaBbCc*, what fraction of offspring are *A_ B_ cc* (dominant for A and B, recessive for C)?
- $P(A\\_) = \\frac{3}{4}$
- $P(B\\_) = \\frac{3}{4}$
- $P(cc) = \\frac{1}{4}$

$P(A\\_ B\\_ cc) = \\frac{3}{4}\\times\\frac{3}{4}\\times\\frac{1}{4} = \\frac{9}{64}$

That single multiplication replaces hunting through 64 boxes. The whole trihybrid phenotype distribution, by the way, is **27 : 9 : 9 : 9 : 3 : 3 : 3 : 1** — and every one of those eight numbers is just a product of $\\frac{3}{4}$'s and $\\frac{1}{4}$'s.

> **Takeaway:** the Punnett square is a *conceptual* tool that shows *why* the ratios appear; the product rule is the *computational* tool you actually use once *n* exceeds 2. Part 4 formalizes this fully.
      `
    },
    {
      id: 'mgp3-quiz3',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Scaling Up
      `,
      exercise: {
        questions: [
          {
            question: 'An organism with genotype AaBbCcDd is self-crossed. How many genetically distinct gamete types can it produce, and how many cells would the complete Punnett square contain?',
            options: [
              '8 gamete types; 64 cells',
              '16 gamete types; 256 cells',
              '4 gamete types; 16 cells',
              '16 gamete types; 16 cells'
            ],
            correctAnswer: 1,
            explanation: 'There are 4 heterozygous gene pairs, so gamete types = $2^{4}$ = 16, and the full grid is 16 × 16 = 256 cells. Option A (8 and 64) is the trihybrid answer (n = 3) — a common off-by-one error when you miscount the number of heterozygous genes. The grid size is always $(gamete types)^{2}$, i.e. $4^{n}$, which is why hand-drawing it becomes hopeless past n = 2.'
          },
          {
            question: 'From the trihybrid cross AaBbCc × AaBbCc, what is the probability of an offspring that is homozygous dominant for ALL three genes (AABBCC)?',
            options: [
              '$\\frac{27}{64}$',
              '$\\frac{1}{64}$',
              '$\\frac{1}{8}$',
              '$\\frac{3}{64}$'
            ],
            correctAnswer: 1,
            explanation: 'Each gene independently gives P(homozygous dominant) = 1/4 (from Aa × Aa). By the product rule, P(AABBCC) = 1/4 × 1/4 × 1/4 = 1/64. The trap 27/64 (option A) is the probability of the dominant PHENOTYPE for all three genes (A_ B_ C_), which uses 3/4 per gene and includes heterozygotes. The specific all-homozygous-dominant GENOTYPE is just one of the 64 grid cells.'
          }
        ]
      }
    }
  ]
};
