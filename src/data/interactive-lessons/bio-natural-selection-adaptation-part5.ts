export const bioNatSelectionPart5Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'nsp5-intro',
      type: 'text' as const,
      content: `
## The Hardy-Weinberg Principle

**Part 5 of 7**

The Hardy-Weinberg principle is the **null model** of population genetics. It describes the allele and genotype frequencies expected in a population that is **NOT evolving**. By comparing a real population's data to this idealized prediction, we can detect whether (and how much) evolution is occurring — much as a control group lets you detect the effect of a treatment.

Hardy-Weinberg gives us two equations:

$p + q = 1$

$p^2 + 2pq + q^2 = 1$

where $p$ is the frequency of the dominant allele and $q$ is the frequency of the recessive allele at a locus with two alleles.

> **Anchor idea:** Hardy-Weinberg is a *baseline for comparison*, **not** a claim that real populations are static. If observed genotype frequencies deviate from the predicted $p^2$, $2pq$, $q^2$, at least one evolutionary force (selection, drift, gene flow, mutation, or non-random mating) is acting.
      `
    },
    {
      id: 'nsp5-conditions',
      type: 'text' as const,
      content: `
### The Five Conditions for Hardy-Weinberg Equilibrium

A population remains in equilibrium (no change in allele frequencies) **only if ALL FIVE** conditions hold. Each condition is the *absence* of one of the five evolutionary forces from Part 4.

| # | Condition | Force it excludes |
|---|-----------|-------------------|
| 1 | **No natural selection** — all genotypes have equal fitness | Natural selection |
| 2 | **No genetic drift** — the population is **very large** (effectively infinite) | Genetic drift |
| 3 | **No gene flow** — no migration of alleles in or out | Gene flow |
| 4 | **No mutation** — allele identities do not change | Mutation |
| 5 | **Random mating** — mates pair without regard to genotype | Non-random mating |

A handy way to remember the *spirit* of these: a Hardy-Weinberg population is large, isolated, non-mutating, randomly mating, and selectively neutral. In reality **no** natural population perfectly meets all five — which is exactly why the model is useful as a comparison point.

> **AP trap:** Hardy-Weinberg equilibrium does **not** require that genotype frequencies be equal or that the dominant phenotype be most common. It requires that the frequencies *match the predicted $p^2 : 2pq : q^2$ ratios and stay constant across generations.* A population can be in equilibrium with $q$ much larger than $p$.
      `
    },
    {
      id: 'nsp5-terms',
      type: 'text' as const,
      content: `
### What Each Term Means

For a locus with a dominant allele (A) and recessive allele (a):

| Term | Represents | In words |
|------|------------|----------|
| $p$ | frequency of allele A | proportion of A alleles in the gene pool |
| $q$ | frequency of allele a | proportion of a alleles in the gene pool |
| $p^2$ | frequency of genotype **AA** | homozygous dominant |
| $2pq$ | frequency of genotype **Aa** | heterozygous (the factor of 2 covers Aa **and** aA) |
| $q^2$ | frequency of genotype **aa** | homozygous recessive |

Two relationships you will use constantly:

- **Carrier frequency** = frequency of heterozygotes = $2pq$. Carriers show the *dominant* phenotype but secretly carry one recessive allele.
- **Dominant phenotype frequency** = $p^2 + 2pq$ (both AA and Aa look dominant). This is why you can almost never read $p$ directly off the phenotypes — but you **can** read $q$ off the **recessive** phenotype, because only aa shows it.

> **The master move:** The recessive phenotype frequency **equals $q^2$** (only aa shows it). So $q = \\sqrt{q^2}$ lets you back-calculate the recessive allele frequency from the observed fraction of recessive individuals, then $p = 1 - q$, and finally all genotype frequencies. Almost every Hardy-Weinberg problem starts here.
      `
    },
    {
      id: 'nsp5-worked-a',
      type: 'text' as const,
      content: `
### Worked Example (a) — From 16% Recessive Phenotype to All Frequencies

**Problem:** In a population in Hardy-Weinberg equilibrium, **16%** of individuals show the recessive phenotype (genotype aa). Find $q$, $p$, and the frequencies of all three genotypes, including carriers.

**Step 1 — Recessive phenotype frequency = $q^2$.**
Only aa individuals show the recessive phenotype, so

$q^2 = 0.16$

**Step 2 — Solve for $q$.**

$q = \\sqrt{q^2} = \\sqrt{0.16} = 0.4$

**Step 3 — Solve for $p$ using $p + q = 1$.**

$p = 1 - q = 1 - 0.4 = 0.6$

**Step 4 — Compute genotype frequencies.**

| Genotype | Formula | Value | Percent |
|----------|---------|-------|---------|
| AA | $p^2 = 0.6^2$ | $0.36$ | 36% |
| Aa (carriers) | $2pq = 2(0.6)(0.4)$ | $0.48$ | 48% |
| aa | $q^2 = 0.4^2$ | $0.16$ | 16% |

**Check:** $0.36 + 0.48 + 0.16 = 1.00$. ✓

**Answers:** $q = 0.4$, $p = 0.6$; AA = 36%, **carriers (Aa) = 48%**, aa = 16%. Note that the **carrier** frequency (48%) is far higher than the affected (16%) frequency — a recessive condition that is rare in *appearance* can be carried by a large fraction of the population. That insight is a favorite exam point.
      `
    },
    {
      id: 'nsp5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Back-Calculating from the Recessive Phenotype
      `,
      exercise: {
        questions: [
          {
            question: 'In a population of 10,000 plants in Hardy-Weinberg equilibrium, 900 plants have white flowers (recessive, genotype aa) and the rest have purple flowers (dominant). What is the frequency of the recessive allele (q)?',
            options: [
              '0.09',
              '0.30',
              '0.70',
              '0.81'
            ],
            correctAnswer: 1,
            explanation: 'The recessive phenotype frequency = $q^{2}$. Here $q^{2}$ = 900/10,000 = 0.09, so q = $\\sqrt{0.09}$ = 0.30. Option A (0.09) is the trap: 0.09 is $q^{2}$ (the GENOTYPE/phenotype frequency of aa), not the ALLELE frequency q. You must take the square root to get the allele frequency. Forgetting the square root is the most common Hardy-Weinberg error.'
          },
          {
            question: 'Using the same plant population (q = 0.30, so p = 0.70), what fraction of the plants are heterozygous CARRIERS that show purple flowers but carry the white allele?',
            options: [
              '0.09',
              '0.21',
              '0.42',
              '0.49'
            ],
            correctAnswer: 2,
            explanation: 'Carriers are heterozygotes (Aa), with frequency 2pq = 2(0.70)(0.30) = 0.42, or 42%. Option D (0.49) is the trap: that is $p^{2}$ = $0.70^{2}$ = 0.49, the frequency of HOMOZYGOUS DOMINANT (AA) plants, not heterozygotes. Be careful to use 2pq for carriers, not $p^{2}$.'
          }
        ]
      }
    },
    {
      id: 'nsp5-worked-b',
      type: 'text' as const,
      content: `
### Worked Example (b) — From Allele Frequencies to Next-Generation Genotype COUNTS

**Problem:** A randomly mating population of **2000** mice is in Hardy-Weinberg equilibrium at a coat-color locus with $p = 0.8$ (allele B) and $q = 0.2$ (allele b). Predict the **number** of individuals of each genotype expected in the next generation.

**Step 1 — Compute the genotype frequencies.**

| Genotype | Formula | Frequency |
|----------|---------|-----------|
| BB | $p^2 = 0.8^2$ | $0.64$ |
| Bb | $2pq = 2(0.8)(0.2)$ | $0.32$ |
| bb | $q^2 = 0.2^2$ | $0.04$ |

Check: $0.64 + 0.32 + 0.04 = 1.00$. ✓

**Step 2 — Multiply each frequency by the population size $N = 2000$ to get counts.**

| Genotype | Frequency $\\times N$ | Expected count |
|----------|----------------------|----------------|
| BB | $0.64 \\times 2000$ | **1280** |
| Bb | $0.32 \\times 2000$ | **640** |
| bb | $0.04 \\times 2000$ | **80** |
| **Total** | — | **2000** |

**Answers:** about **1280 BB, 640 Bb, 80 bb**. Because the population meets the equilibrium conditions, these expected counts also represent the **next** generation — under Hardy-Weinberg, frequencies do not change from one generation to the next. This is the "no evolution" prediction against which real data are compared.

> **Note the workflow direction:** Example (a) went *backward* (phenotype → allele frequencies). Example (b) goes *forward* (allele frequencies → genotype counts). AP problems travel in both directions, so practice each.
      `
    },
    {
      id: 'nsp5-worked-c',
      type: 'text' as const,
      content: `
### Worked Example (c) — "Is This Population in Equilibrium?"

**Problem:** A biologist samples **1000** snails and records the genotypes directly: **490 RR, 420 Rr, 90 rr**. Is this population in Hardy-Weinberg equilibrium?

**Step 1 — Find the actual allele frequencies by allele-counting.**
Total alleles $= 2N = 2000$.

- R count $= 2(\\text{RR}) + 1(\\text{Rr}) = 2(490) + 420 = 980 + 420 = 1400$
- r count $= 2(\\text{rr}) + 1(\\text{Rr}) = 2(90) + 420 = 180 + 420 = 600$

$p = \\frac{1400}{2000} = 0.70 \\qquad q = \\frac{600}{2000} = 0.30$

**Step 2 — Predict the genotype counts IF the population were in equilibrium** (using $p = 0.70$, $q = 0.30$, $N = 1000$).

| Genotype | Expected frequency | Expected count |
|----------|--------------------|----------------|
| RR | $p^2 = 0.49$ | $490$ |
| Rr | $2pq = 0.42$ | $420$ |
| rr | $q^2 = 0.09$ | $90$ |

**Step 3 — Compare observed vs. expected.**

| Genotype | Observed | Expected |
|----------|----------|----------|
| RR | 490 | 490 |
| Rr | 420 | 420 |
| rr | 90 | 90 |

**Conclusion:** Observed = expected for every genotype, so this population **IS in Hardy-Weinberg equilibrium** — there is no evidence of evolutionary change at this locus. (In Part 6 we make this comparison rigorous using a **chi-square goodness-of-fit test** when the observed and expected values differ.)

> **The general procedure** for an "is it in equilibrium?" question: (1) compute actual allele frequencies from the genotype counts by allele-counting; (2) use those $p$ and $q$ to predict equilibrium genotype counts; (3) compare predicted to observed. A large discrepancy signals that an evolutionary force is acting.
      `
    },
    {
      id: 'nsp5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Predicting and Testing Equilibrium
      `,
      exercise: {
        questions: [
          {
            question: 'A population of 400 birds in Hardy-Weinberg equilibrium has allele frequencies p = 0.9 and q = 0.1 at a locus. Approximately how many birds are expected to be HETEROZYGOUS?',
            options: [
              '4',
              '36',
              '72',
              '324'
            ],
            correctAnswer: 2,
            explanation: 'Heterozygote frequency = 2pq = 2(0.9)(0.1) = 0.18; count = 0.18 × 400 = 72. Option D (324) is the trap: that is $p^{2}$ × 400 = 0.81 × 400 = 324, the number of HOMOZYGOUS DOMINANT birds, not heterozygotes. Option A (4) is $q^{2}$ × 400 = 0.01 × 400 = 4 (homozygous recessive). Match the term to 2pq for heterozygotes.'
          },
          {
            question: 'A biologist samples 200 fish and finds 50 AA, 100 Aa, and 50 aa. To test whether this population is in Hardy-Weinberg equilibrium, what is the correct FIRST step?',
            options: [
              'Conclude immediately it is NOT in equilibrium because the genotype counts are not all equal',
              'Calculate the actual allele frequencies (p and q) from the genotype counts by allele-counting, then predict expected genotype counts and compare',
              'Assume p = q = 0.5 because there are two alleles',
              'Conclude it IS in equilibrium because heterozygotes are the most common genotype'
            ],
            correctAnswer: 1,
            explanation: 'The correct procedure is to compute actual allele frequencies from the data (here p = [2(50)+100]/400 = 0.5, q = 0.5), predict expected counts ($p^{2}\\cdot N$ = 50, 2pq·N = 100, $q^{2}\\cdot N$ = 50), and compare to observed — they match, so it IS in equilibrium. Option A is the trap: equilibrium does NOT require equal genotype counts; it requires the observed counts to match the $p^{2}$:2pq:$q^{2}$ prediction, which must be calculated, not assumed from whether categories look "equal."'
          }
        ]
      }
    }
  ]
};
