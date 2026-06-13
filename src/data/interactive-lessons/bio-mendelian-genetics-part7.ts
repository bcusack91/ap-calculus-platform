export const bioMendelianPart7Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mgp7-intro',
      type: 'text' as const,
      content: `
## AP Review

**Part 7 of 7**

This final part synthesizes the unit, names the misconceptions that cost students the most points, and introduces the **chi-square goodness-of-fit test** — the quantitative skill the AP exam expects you to perform. Treat this as your pre-exam consolidation.

### The unit in one map

| Concept | Core result | Key tool |
|---------|-------------|----------|
| Mendel's laws | Segregation, independent assortment, dominance | Meiosis (anaphase I) |
| Monohybrid cross | Genotype 1:2:1, phenotype 3:1 | Punnett square; test cross |
| Dihybrid cross | Phenotype 9:3:3:1 | 4×4 grid; forked-line / $2^n$ gametes |
| Probability | Product (AND), sum (OR), complement, binomial | Per-gene multiplication |
| Pedigrees | Deduce mode of inheritance | Conditional (carrier) probability |
| Data testing | Do observed counts fit the model? | Chi-square $\\chi^2 = \\sum \\frac{(O-E)^2}{E}$ |

> **The unifying insight:** every quantitative answer in this unit comes from the fact that a heterozygote's two alleles segregate 50/50 into gametes, and the alleles of unlinked genes assort independently. Punnett squares, the 9:3:3:1 ratio, and the product rule are all consequences of those two facts.
      `
    },
    {
      id: 'mgp7-traps',
      type: 'text' as const,
      content: `
### The Five AP Traps That Cost the Most Points

**Trap 1 — "Dominant means most common."** Dominance describes which allele is *expressed* in a heterozygote, not how *frequent* it is in a population. A dominant allele can be vanishingly rare (e.g., Huntington's); a recessive allele can be widespread. Allele frequency is set by population genetics, not by dominance.

**Trap 2 — Confusing genotypic and phenotypic ratios.** A *Tt* $\\times$ *Tt* cross is **1:2:1 by genotype** but **3:1 by phenotype**. Read whether the question asks for genotypes or phenotypes and answer the one asked. Writing 3:1 when genotypes were requested is an automatic miss.

**Trap 3 — Assuming independent assortment always holds.** The 9:3:3:1 ratio requires the two genes to be **unlinked** (on different chromosomes, or far apart on the same one). Genes that are **linked** stay together during meiosis and produce distorted ratios with excess parental types — independent assortment does *not* apply.

**Trap 4 — Forgetting to condition on known outcomes.** "An unaffected sibling of an *aa* child is a carrier with probability $\\frac{2}{3}$, not $\\frac{1}{2}$" — because being *unaffected* removes the *aa* possibility and you must renormalize over the surviving genotypes.

**Trap 5 — Misapplying AND vs. OR.** "Affected for trait 1 **AND** trait 2" → **multiply**. "Genotype can arise this way **OR** that way" → **add**. And for "**at least one**," use the complement $1 - P(\\text{none})$ rather than summing overlapping cases.

> **Exam habit:** when two answer choices both look plausible, pick the one that correctly distinguishes genotype from phenotype, or that conditions on the information given. The AP exam's distractors are built from exactly these five errors.
      `
    },
    {
      id: 'mgp7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### AP-Style Application Questions
      `,
      exercise: {
        questions: [
          {
            question: 'In a certain plant, flower color is controlled by one gene with simple dominance. A cross between two plants yields 148 purple and 52 white offspring. A student concludes the parents were both heterozygous. Which statement best evaluates this conclusion?',
            options: [
              'The conclusion is wrong; a 148:52 ratio indicates codominance',
              'The conclusion is reasonable; 148:52 is close to the 3:1 ratio expected from a heterozygous × heterozygous cross',
              'The conclusion is wrong; the parents must have been purple × white',
              'The conclusion is wrong; a true 3:1 ratio would require exactly 150:50'
            ],
            correctAnswer: 1,
            explanation: 'A heterozygous × heterozygous monohybrid cross predicts a 3:1 phenotypic ratio. Out of 200 offspring, 3:1 predicts 150 purple : 50 white, and the observed 148:52 is essentially that — small deviations are expected from random sampling. Option D reflects a key misconception: real data are NEVER required to hit the expected ratio exactly; a chi-square test would confirm 148:52 is statistically consistent with 3:1.'
          },
          {
            question: 'In dihybrid pea crosses, Mendel obtained the 9:3:3:1 ratio. A different pair of genes, studied later, consistently gave offspring in roughly a 3:1:1:3 pattern instead, with a large excess of parental phenotype combinations. What is the most likely explanation?',
            options: [
              'One of the genes underwent a high mutation rate',
              'The two genes are linked (close together on the same chromosome), so they do not assort independently',
              'The traits are controlled by the environment, not genetics',
              'The parents were not true-breeding'
            ],
            correctAnswer: 1,
            explanation: 'The 9:3:3:1 ratio depends on independent assortment. When two genes are LINKED (physically close on the same chromosome), they tend to be inherited together, inflating the parental-type combinations and depleting the recombinant types — exactly the distortion described. Option A is wrong because mutation is far too rare to shift whole-population ratios this way; linkage, not mutation, explains a systematic excess of parental types.'
          }
        ]
      }
    },
    {
      id: 'mgp7-chisquare',
      type: 'text' as const,
      content: `
### Chi-Square Goodness-of-Fit: A Worked Computation

A chi-square test answers a precise question: **are the deviations between my observed counts and the ratio I predicted small enough to be due to chance, or large enough to suggest my genetic model is wrong?**

$\\chi^2 = \\sum \\frac{(O-E)^2}{E}$

- **O** = observed count for each phenotype class
- **E** = expected count for each class (total offspring × predicted fraction)
- Sum the term over **all** classes.

**Worked example.** You predict a 3:1 ratio from a monohybrid cross and score **200 offspring**: **160 dominant, 40 recessive**. Do the data fit?

**Step 1 — Compute expected counts (E)** from the 3:1 prediction over 200 offspring:
- Dominant: $200 \\times \\frac{3}{4} = 150$
- Recessive: $200 \\times \\frac{1}{4} = 50$

**Step 2 — Compute each class term $\\frac{(O-E)^2}{E}$:**

| Class | O | E | $(O-E)$ | $(O-E)^2$ | $\\frac{(O-E)^2}{E}$ |
|-------|-----|-----|---------|-----------|----------------------|
| Dominant | 160 | 150 | +10 | 100 | $\\frac{100}{150} = 0.667$ |
| Recessive | 40 | 50 | −10 | 100 | $\\frac{100}{50} = 2.000$ |

**Step 3 — Sum to get $\\chi^2$:**
$\\chi^2 = 0.667 + 2.000 = 2.667$

**Step 4 — Interpret with degrees of freedom.** Degrees of freedom (df) = (number of classes − 1) = $2 - 1 = 1$. For df = 1, the **critical value at $p = 0.05$ is 3.84**. Our $\\chi^2 = 2.667$ is **less than 3.84**, so we **fail to reject** the null hypothesis: the data are **consistent with** the predicted 3:1 ratio (the deviation is plausibly due to chance).

> **Decision rule to memorize:** if $\\chi^2 \\geq$ critical value, **reject** the model (deviation too large to be chance — your predicted ratio is probably wrong). If $\\chi^2 <$ critical value, **fail to reject** (data fit the model). A larger $\\chi^2$ means a worse fit. Always pair $\\chi^2$ with its degrees of freedom before comparing to the table.
      `
    },
    {
      id: 'mgp7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Chi-Square and Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher tests a 9:3:3:1 prediction in a dihybrid cross and calculates χ² = 9.10. The cross has 4 phenotype classes (df = 3), and the critical value at p = 0.05 for df = 3 is 7.81. What should the researcher conclude?',
            options: [
              'Fail to reject the null; the data fit the 9:3:3:1 ratio well',
              'Reject the null; the deviation from 9:3:3:1 is larger than expected by chance, suggesting the model may be wrong',
              'The χ² value is too small to interpret',
              'The genes must be assorting independently'
            ],
            correctAnswer: 1,
            explanation: 'Because χ² = 9.10 EXCEEDS the critical value of 7.81 (for df = 3), the deviation from the expected 9:3:3:1 ratio is too large to attribute to chance, so the researcher rejects the null hypothesis. Option A has the decision rule backwards: you fail to reject only when χ² is BELOW the critical value. Here the large χ² signals the data do NOT fit the simple independent-assortment model (linkage or another factor may be involved).'
          },
          {
            question: 'A pedigree shows a rare trait appearing in every generation, transmitted from affected parents to roughly half their children, with males and females affected equally. The trait never skips a generation. Which conclusion is best supported, and which common misconception does it correct?',
            options: [
              'Autosomal recessive; the trait is rare so it must be recessive',
              'Autosomal dominant; appearing in every generation without skipping and affecting both sexes equally indicates dominance, and "rare" does not imply "recessive"',
              'X-linked recessive; rare traits are usually sex-linked',
              'The data are insufficient to determine inheritance mode'
            ],
            correctAnswer: 1,
            explanation: 'A trait in every generation (no skipping), passed from affected parent to about half the offspring, with equal sex ratios, is the signature of autosomal dominant inheritance. Crucially, rarity has nothing to do with whether an allele is dominant or recessive — that is the misconception in options A and C. Many dominant disorders (e.g., Huntington\'s) are rare; frequency is governed by population genetics, not by the dominance relationship.'
          },
          {
            question: 'Two parents heterozygous for an autosomal recessive disorder (Aa × Aa) have four children, and the disorder appears in NONE of them. A relative concludes "the gene must not be in this family after all." Which statement best corrects this reasoning?',
            options: [
              'The relative is correct; four unaffected children prove neither parent carries the allele',
              'Each child independently had a 3/4 chance of being unaffected, and (3/4)⁴ ≈ 0.32 — so four unaffected children is fairly likely even though both parents are carriers',
              'The disorder must have changed to dominant',
              'The expected 3:1 ratio guarantees exactly one of four children is affected'
            ],
            correctAnswer: 1,
            explanation: 'Each child of an Aa × Aa cross has a 1/4 chance of being affected and 3/4 unaffected, independently. The probability that all four are unaffected is (3/4)⁴ ≈ 0.32 — about a 1-in-3 outcome, entirely consistent with both parents being carriers. Option D embodies the core misconception: the 3:1 ratio is a long-run expectation over many offspring, NOT a guarantee that a small sibship of four contains exactly one affected child. Small samples deviate from expected ratios all the time.'
          }
        ]
      }
    },
    {
      id: 'mgp7-reference',
      type: 'text' as const,
      content: `
### Rapid-Review Reference Card

Use this as a final pre-exam scan. Each row is a fact that, if recalled cleanly, prevents a common error.

| Situation | What to remember |
|-----------|------------------|
| Monohybrid Tt × Tt | Genotype **1:2:1**, phenotype **3:1** |
| Test cross (× homozygous recessive) | Any recessive offspring ⇒ unknown parent is heterozygous |
| Dihybrid AaBb × AaBb | Phenotype **9:3:3:1**; use forked-line / product rule, not a 16-box grid |
| Gamete types | $2^n$ for *n* heterozygous gene pairs |
| "AND" across genes/events | **Multiply** (product rule) |
| "OR" across mutually exclusive outcomes | **Add** (sum rule) |
| "At least one" | $1 - P(\\text{none})$ (complement) |
| "Exactly k of n offspring" | Binomial $\\binom{n}{k}p^k q^{n-k}$ |
| Unaffected sib of an *aa* child | Carrier probability **$\\frac{2}{3}$**, not $\\frac{1}{2}$ |
| Incomplete dominance / codominance | Phenotype ratio **equals** genotype ratio (1:2:1) |
| Chi-square decision | $\\chi^2 \\geq$ critical value ⇒ **reject**; pair with df = (classes − 1) |

### The last-mile checklist for any genetics free-response

1. **Define allele symbols explicitly** (graders look for this).
2. **State the cross** in genotype form before computing.
3. **Show the Punnett square or the probability multiplication** — partial credit lives in the work.
4. **Answer the exact question asked** — genotype vs. phenotype, "at least one" vs. "exactly," carrier vs. affected.
5. **Sanity-check probabilities**: they must lie between 0 and 1, and a full set of mutually exclusive outcomes must sum to 1.

> **Final reminder:** the deepest idea in this unit is that a heterozygote splits its alleles 50/50 into gametes and that unlinked genes do so independently. Almost every quantitative answer follows from those two sentences. Master them, and Mendelian genetics becomes arithmetic.
      `
    },
    {
      id: 'mgp7-chisq-dihybrid',
      type: 'text' as const,
      content: `
### A Second Chi-Square: Testing a 9:3:3:1 Dihybrid

The monohybrid example used 2 classes (df = 1). Dihybrid crosses give **4 phenotype classes (df = 3)**, and the AP exam often pairs the larger table with a higher critical value. Here is the full computation.

**Setup.** A dihybrid cross is predicted to give **9:3:3:1**. A total of **160 offspring** are scored: **88, 34, 28, 10** in the four phenotype classes.

**Step 1 — Expected counts** (160 × each predicted fraction):
- $\\frac{9}{16}\\times 160 = 90$
- $\\frac{3}{16}\\times 160 = 30$
- $\\frac{3}{16}\\times 160 = 30$
- $\\frac{1}{16}\\times 160 = 10$

**Step 2 — Per-class $\\frac{(O-E)^2}{E}$:**

| Class | O | E | $(O-E)^2$ | $\\frac{(O-E)^2}{E}$ |
|-------|-----|-----|-----------|----------------------|
| 1 | 88 | 90 | 4 | $\\frac{4}{90} = 0.044$ |
| 2 | 34 | 30 | 16 | $\\frac{16}{30} = 0.533$ |
| 3 | 28 | 30 | 4 | $\\frac{4}{30} = 0.133$ |
| 4 | 10 | 10 | 0 | $\\frac{0}{10} = 0.000$ |

**Step 3 — Sum:**
$\\chi^2 = 0.044 + 0.533 + 0.133 + 0.000 = 0.71$

**Step 4 — Decide.** df = (4 classes − 1) = 3; the critical value at $p = 0.05$ for df = 3 is **7.81**. Since $\\chi^2 = 0.71 < 7.81$, we **fail to reject** the null hypothesis — the observed counts fit the predicted 9:3:3:1 ratio comfortably (the genes appear to assort independently).

> **Contrast worth remembering:** the *same* numerical $\\chi^2$ can be "significant" or "not significant" depending on df, because the critical value rises with more classes (3.84 for df = 1, 7.81 for df = 3, 9.49 for df = 4). Always compute df = (classes − 1) **before** comparing to the table — judging $\\chi^2$ without its df is the most common chi-square mistake.
      `
    }
  ]
};
