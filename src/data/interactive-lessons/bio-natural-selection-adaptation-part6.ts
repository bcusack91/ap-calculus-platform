export const bioNatSelectionPart6Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'nsp6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7**

This part is pure practice. We work three multi-step problems end to end, the kind that appear on AP free-response and the hardest multiple-choice items:

1. **Carrier frequency** in a human genetics context.
2. **Selection against recessive homozygotes** — how $q$ changes over a single generation.
3. **Chi-square goodness-of-fit** — a statistical test of whether a population is in Hardy-Weinberg equilibrium.

Keep two toolkits handy:

- **Hardy-Weinberg:** $p + q = 1$ and $p^2 + 2pq + q^2 = 1$; recessive phenotype $= q^2$, so $q = \\sqrt{q^2}$; carriers $= 2pq$.
- **Allele-counting:** $p = \\frac{2(\\text{hom. dom.}) + (\\text{het.})}{2N}$.

> **Strategy:** Always (1) define what allele $p$ and $q$ stand for, (2) find $q$ first (usually from the recessive phenotype), (3) get $p = 1 - q$, then (4) compute whatever the question asks. Label every number with its meaning.
      `
    },
    {
      id: 'nsp6-problem1',
      type: 'text' as const,
      content: `
### Problem 1 — Carrier Frequency (Cystic Fibrosis style)

**Problem:** Cystic fibrosis is an autosomal recessive condition. In a population in Hardy-Weinberg equilibrium, the disease (genotype aa) occurs in **1 out of every 2500** newborns. (a) What is the frequency of the recessive allele $q$? (b) What fraction of the population are unaffected **carriers**? (c) In a town of 50,000 people, about how many carriers are there?

**Step 1 — Recessive phenotype frequency = $q^2$.**

$q^2 = \\frac{1}{2500} = 0.0004$

**Step 2 — Solve for $q$.**

$q = \\sqrt{0.0004} = 0.02$

**Step 3 — Solve for $p$.**

$p = 1 - q = 1 - 0.02 = 0.98$

**Step 4 (b) — Carrier frequency = $2pq$.**

$2pq = 2(0.98)(0.02) = 0.0392 \\approx 0.039$

So about **3.9%** of the population are carriers — roughly **1 in 25 people**.

**Step 5 (c) — Number of carriers in 50,000 people.**

$0.0392 \\times 50{,}000 = 1960 \\text{ carriers}$

**Answers:** $q = 0.02$; carrier frequency $\\approx 3.9\\%$; about **1960 carriers** in the town.

> **Headline insight:** Although only 1 in 2500 are *affected*, about 1 in 25 are *carriers* — roughly **100 times** as many people carry the allele as express the disease. Rare recessive disorders hide an enormous reservoir of heterozygous carriers, because $2pq$ greatly exceeds $q^2$ when $q$ is small.
      `
    },
    {
      id: 'nsp6-problem2',
      type: 'text' as const,
      content: `
### Problem 2 — Selection Against the Recessive Homozygote

**Problem:** A population starts with allele frequencies $p = 0.6$ (A) and $q = 0.4$ (a), in Hardy-Weinberg proportions. The recessive homozygote (aa) is **lethal before reproduction** (relative fitness $w_{aa} = 0$); AA and Aa both have fitness 1. After **one generation** of this selection, what is the new value of $q$?

**Step 1 — Starting genotype frequencies** (per 1.0, or imagine $N = 1000$).

| Genotype | Frequency | Count (of 1000) | Fitness $w$ |
|----------|-----------|-----------------|-------------|
| AA | $p^2 = 0.36$ | 360 | 1 |
| Aa | $2pq = 0.48$ | 480 | 1 |
| aa | $q^2 = 0.16$ | 160 | 0 |

**Step 2 — Apply selection (remove all aa).** Survivors: 360 AA + 480 Aa = **840** individuals; all 160 aa die.

**Step 3 — Count alleles among survivors.** Survivors carry $2 \\times 840 = 1680$ alleles.

- A count $= 2(360) + 1(480) = 720 + 480 = 1200$
- a count $= 2(0) + 1(480) = 480$  *(only the surviving Aa heterozygotes still carry a)*

**Step 4 — New allele frequencies.**

$q' = \\frac{480}{1680} \\approx 0.286 \\qquad p' = \\frac{1200}{1680} \\approx 0.714$

**Shortcut formula (worth knowing).** For complete selection against a lethal recessive ($w_{aa}=0$), the recessive allele frequency after one generation is

$q' = \\frac{q}{1 + q}$

Check: $q' = \\frac{0.4}{1 + 0.4} = \\frac{0.4}{1.4} \\approx 0.286$. ✓ — matches the long calculation.

**Answer:** $q$ falls from 0.40 to about **0.286** in one generation, $\\Delta q \\approx -0.114$.

> **Why selection against a recessive is SLOW at low $q$:** the heterozygous Aa survivors still carry and transmit a alleles, "hiding" them from selection. Using $q' = \\frac{q}{1+q}$: starting at $q = 0.01$ gives $q' \\approx 0.0099$ — an almost imperceptible drop. This is precisely why deleterious recessive alleles persist in populations for many generations and can never be fully eliminated by selection against the homozygote alone.
      `
    },
    {
      id: 'nsp6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Carriers and Selection
      `,
      exercise: {
        questions: [
          {
            question: 'A recessive disorder affects 1 in 10,000 individuals (aa) in a Hardy-Weinberg population. What is the approximate carrier (heterozygote) frequency?',
            options: [
              '0.0001',
              '0.01',
              '0.0198',
              '0.99'
            ],
            correctAnswer: 2,
            explanation: '$q^{2}$ = 1/10,000 = 0.0001, so q = 0.01 and p = 0.99. Carrier frequency = 2pq = 2(0.99)(0.01) = 0.0198 (about 2%). Option B (0.01) is the trap — that is the ALLELE frequency q, not the carrier (heterozygote) frequency 2pq. Option A (0.0001) is $q^{2}$ (the affected frequency). The carrier frequency (~1 in 50) is far larger than the affected frequency (1 in 10,000).'
          },
          {
            question: 'A population has q = 0.5 for a recessive allele, and the recessive homozygote is lethal before reproduction (w = 0). Using q\' = q/(1 + q), what is q after one generation of selection?',
            options: [
              '0.25',
              '0.33',
              '0.50 (unchanged)',
              '0.00'
            ],
            correctAnswer: 1,
            explanation: 'q\' = q/(1 + q) = 0.5/(1 + 0.5) = 0.5/1.5 ≈ 0.33. Option D (0.00) is the trap: even though every aa individual dies, the recessive allele is NOT eliminated in one generation because surviving heterozygotes (Aa) still carry it. Complete selection against the recessive homozygote reduces q but cannot drive it to zero in a single generation — heterozygotes shelter the allele.'
          }
        ]
      }
    },
    {
      id: 'nsp6-problem3',
      type: 'text' as const,
      content: `
### Problem 3 — Chi-Square Goodness-of-Fit Test for Hardy-Weinberg

When observed genotype counts *differ* from the Hardy-Weinberg prediction, we need a statistical test to decide whether the difference is real or just sampling noise. The **chi-square ($\\chi^2$) goodness-of-fit test** does this.

$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$

where $O$ = observed count and $E$ = expected count for each category, summed over all categories.

**Problem:** A biologist samples **1000** beetles and observes **600 AA, 280 Aa, 120 aa**. Test whether the population is in Hardy-Weinberg equilibrium at $\\alpha = 0.05$.

**Step 1 — Actual allele frequencies (allele-counting).** Total alleles $= 2000$.

- A count $= 2(600) + 280 = 1480 \\Rightarrow p = \\frac{1480}{2000} = 0.74$
- a count $= 2(120) + 280 = 520 \\Rightarrow q = \\frac{520}{2000} = 0.26$

**Step 2 — Expected counts under equilibrium** (using $p = 0.74$, $q = 0.26$, $N = 1000$).

| Genotype | Expected freq | $E$ (count) |
|----------|---------------|-------------|
| AA | $p^2 = 0.5476$ | $547.6$ |
| Aa | $2pq = 0.3848$ | $384.8$ |
| aa | $q^2 = 0.0676$ | $67.6$ |

**Step 3 — Compute $\\chi^2$ term by term.**

| Genotype | $O$ | $E$ | $O - E$ | $\\frac{(O-E)^2}{E}$ |
|----------|-----|-----|---------|----------------------|
| AA | 600 | 547.6 | $+52.4$ | $\\frac{52.4^2}{547.6} \\approx 5.01$ |
| Aa | 280 | 384.8 | $-104.8$ | $\\frac{104.8^2}{384.8} \\approx 28.54$ |
| aa | 120 | 67.6 | $+52.4$ | $\\frac{52.4^2}{67.6} \\approx 40.62$ |

$\\chi^2 \\approx 5.01 + 28.54 + 40.62 = 74.2$

**Step 4 — Degrees of freedom.** For a Hardy-Weinberg chi-square, $df = (\\text{number of genotype classes}) - (\\text{number of alleles}) = 3 - 2 = 1$. (We estimated one independent allele frequency from the data, since $p$ and $q$ are linked by $p + q = 1$.)

**Step 5 — Compare to the critical value.** At $df = 1$ and $\\alpha = 0.05$, the critical $\\chi^2 = 3.84$.

Since $\\chi^2 = 74.2 \\gg 3.84$, we **REJECT** the null hypothesis of Hardy-Weinberg equilibrium.

**Interpretation:** The observed genotypes deviate far more from expectation than chance allows — there is a striking **deficit of heterozygotes** (280 observed vs. ~385 expected) and an **excess of both homozygotes**. This pattern is consistent with **non-random mating (inbreeding)** or selection against heterozygotes. The population is **evolving** (or its mating is non-random) at this locus.

> **Decision rule:** If $\\chi^2 \\geq$ critical value → **reject** the null (significant deviation; the population is NOT in equilibrium). If $\\chi^2 <$ critical value → **fail to reject** (the deviation is within chance; consistent with equilibrium). A large $\\chi^2$ means a poor fit to the "no-evolution" model.
      `
    },
    {
      id: 'nsp6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Chi-Square Reasoning
      `,
      exercise: {
        questions: [
          {
            question: 'A student performs a chi-square goodness-of-fit test comparing observed genotype counts to Hardy-Weinberg expectations for a locus with two alleles and three genotypes. The calculated $\\chi^{2}$ = 2.10, and the critical value at df = 1, α = 0.05 is 3.84. What is the correct conclusion?',
            options: [
              'Reject the null hypothesis; the population is definitely evolving',
              'Fail to reject the null hypothesis; the deviation is small enough to be due to chance, consistent with Hardy-Weinberg equilibrium',
              'The test is invalid because $\\chi^{2}$ must be greater than the critical value',
              'Accept the null hypothesis as proven true'
            ],
            correctAnswer: 1,
            explanation: 'Because $\\chi^{2}$ = 2.10 < 3.84 (critical value), we FAIL TO REJECT the null hypothesis — the observed counts are close enough to expected that the difference could be chance, consistent with equilibrium. Option D is the trap: we never "prove" or "accept" a null hypothesis as true; failing to reject means only that we lack evidence against it. Also note df = 3 genotypes − 2 alleles = 1, which is correct here.'
          },
          {
            question: 'In a Hardy-Weinberg chi-square test with three genotype classes (AA, Aa, aa) where allele frequencies were estimated from the same sample, the correct number of degrees of freedom is:',
            options: [
              '3 (one per genotype class)',
              '2 (number of classes minus 1)',
              '1 (number of classes minus number of alleles)',
              '0 (no free parameters)'
            ],
            correctAnswer: 2,
            explanation: 'For a Hardy-Weinberg goodness-of-fit test, df = (number of genotype classes) − (number of alleles) = 3 − 2 = 1, because estimating the allele frequency from the data costs an extra degree of freedom (p and q are linked by p + q = 1). Option B (2) is the trap: the usual "classes minus 1" rule does NOT apply directly here because we additionally estimated an allele frequency from the sample, removing one more degree of freedom.'
          }
        ]
      }
    }
  ]
};
