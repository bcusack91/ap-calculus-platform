export const mcatPopGenPart4Data = {
  topicSlug: 'mcat-genetics-evolution-population-genetics-mcat',
  sections: [
    {
      id: 'pg4-intro',
      type: 'text' as const,
      content: `# Population Genetics — Deep Dive

**Part 4 of 4 — MCAT Integration: X-Linked, Multi-Allele & Passage-Style H-W**

### X-Linked Hardy-Weinberg

Males are hemizygous: one X means one allele, so a male's phenotype directly reports his genotype.

| Group | Affected frequency (X-linked recessive, allele freq q) |
|-------|--------------------------------------------------------|
| Males | $q$ |
| Females | $q^2$ |
| Carrier females | $2pq$ |

Two exam-ready consequences:

- The frequency of affected MALES equals the allele frequency itself — the fastest way to read $q$ from a passage.
- The male-to-female ratio of an X-linked recessive condition is $q / q^2 = 1/q$, so the rarer the allele, the more male-biased the condition. Color blindness at $q = 0.08$ gives a ratio of $1/0.08 = 12.5$.

### Multiple Alleles: ABO Blood Groups

With three alleles ($I^A$ at frequency $p$, $I^B$ at $q$, $i$ at $r$): $p + q + r = 1$, and genotypes expand as

$(p + q + r)^2 = p^2 + q^2 + r^2 + 2pq + 2pr + 2qr = 1$

| Blood type | Genotypes | Frequency |
|------------|-----------|-----------|
| A | $I^A I^A, I^A i$ | $p^2 + 2pr$ |
| B | $I^B I^B, I^B i$ | $q^2 + 2qr$ |
| AB | $I^A I^B$ | $2pq$ |
| O | $ii$ | $r^2$ |

Solving order: type O is the only pure class, so start with $r = \\sqrt{r^2}$, then use type A (or B) plus $r$ to extract $p$ (or $q$).

### Testing H-W Fit: Chi-Square Logic

1. From OBSERVED genotype counts, compute allele frequencies by allele counting.
2. Use those frequencies to compute EXPECTED H-W counts ($p^2 N$, $2pqN$, $q^2 N$).
3. $\\chi^2 = \\sum (O - E)^2 / E$ over the three genotype classes.
4. Degrees of freedom = (number of classes) − (number of independent allele frequencies estimated) − 1 = $3 - 1 - 1 = 1$ for a biallelic locus — NOT 2, because $p$ was estimated from the same data.
5. Compare to the critical value (3.84 at df = 1, 5% level): larger means the population deviates from H-W.

### Diagnosing WHICH Assumption Broke

The chi-square only says "not H-W" — the pattern of deviation names the culprit:

- **Heterozygote deficit** (too few Aa): inbreeding or positive assortative mating; OR unrecognized population substructure — pooling two subpopulations with different allele frequencies produces a heterozygote shortfall even if each subpopulation is itself in H-W (**Wahlund effect**).
- **Heterozygote excess**: overdominant selection acting before sampling, or negative assortative mating.
- **Allele frequencies shifting across generations** (genotypes still fitting H-W within each generation): selection, drift, or migration — use population size and directionality across replicates to separate them.

### Combining H-W with Pedigrees

Passages love hybrid problems: get the CARRIER probability of an outside partner from population data ($2pq$, or the shortcut $2q$ for rare alleles), get the family member's carrier probability from Mendelian logic (e.g., an unaffected sibling of an affected child is a carrier with probability $2/3$), then multiply: risk of an affected child $= P(\\text{both carriers}) \\times \\tfrac{1}{4}$.`
    },
    {
      id: 'pg4-worked',
      type: 'text' as const,
      content: `### Worked Example — X-Linked Color Blindness, Both Sexes

**Problem.** In a large population, 8% of males are red-green color blind (X-linked recessive). Predict (a) the frequency of color-blind females, (b) the frequency of carrier females, (c) the male-to-female ratio of the condition, and (d) the probability that a random woman's first son is color blind.

**(a) Males read out the allele frequency directly.**
$q = 0.08, \\qquad p = 0.92$

Color-blind females need two copies:
$q^2 = (0.08)^2 = 0.0064 = 0.64\\%$

**(b) Carrier females.**
$2pq = 2(0.92)(0.08) = 0.1472 \\approx 14.7\\%$

Note the asymmetry: nearly 15% of women carry the allele but only 0.64% express it.

**(c) Sex ratio of the condition.**
$\\frac{0.08}{0.0064} = \\frac{1}{q} = 12.5$

Twelve to thirteen affected males for every affected female — the hallmark of X-linked recessive inheritance at the population level.

**(d) A random woman's son.** A son inherits one of his mother's two X chromosomes at random, so the chance his X carries the allele equals the allele frequency among female X chromosomes, which is $q = 0.08$. (Longer route that must agree: mothers are $q^2 = 0.0064$ affected, passing the allele with probability 1, plus $2pq = 0.1472$ carriers passing it with probability $\\tfrac{1}{2}$: $0.0064 + 0.0736 = 0.08$.) ✓

**Assumption check.** This calculation quietly assumed allele frequencies are equal in the two sexes and that mating is random with respect to color vision — exactly the kind of assumption a passage will violate on purpose, e.g., by describing a founder population or assortative mating, and then asking why the observed female frequency exceeds $q^2$.`
    },
    {
      id: 'pg4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Passage-Style Hardy-Weinberg** 🎯`,
      exercise: {
        questions: [
          {
            question: `An X-linked recessive disorder affects 1 in 100 males in a randomly mating population. The expected frequency of affected females is:`,
            options: [`1 in 100`, `1 in 10,000`, `1 in 200`, `1 in 5,000`],
            correctAnswer: 1,
            explanation: `Affected males give the allele frequency directly: $q = 0.01$. Affected females are homozygous: $q^2 = 0.0001 = 1/10{,}000$. Choosing 1 in 100 forgets that females need two copies; 1 in 200 incorrectly halves the male frequency instead of squaring the allele frequency.`
          },
          {
            question: `In a population at H-W equilibrium for the ABO locus, the allele frequencies are p(I-A) = 0.3, q(I-B) = 0.3, r(i) = 0.4. The expected frequency of blood type AB is:`,
            options: [`0.09`, `0.12`, `0.24`, `0.18`],
            correctAnswer: 3,
            explanation: `Type AB has exactly one genotype, the heterozygote $I^A I^B$, at frequency $2pq = 2(0.3)(0.3) = 0.18$. Answer 0.09 is $pq$ without the factor of 2 (heterozygotes form two ways); 0.24 is $2pr$, the A-carrier heterozygote with i, which contributes to type A, not AB.`
          },
          {
            question: `Researchers genotype a wide sample drawn from across an island and find significantly FEWER heterozygotes than H-W predicts, though allele frequencies are stable across generations. The most likely explanation is:`,
            options: [`Inbreeding, assortative mating, or the unrecognized pooling of distinct subpopulations (Wahlund effect)`, `Heterozygote advantage at this locus`, `A high mutation rate at this locus`, `Strong directional selection against the recessive allele`],
            correctAnswer: 0,
            explanation: `A heterozygote deficit with unchanged allele frequencies is the signature of nonrandom mating or hidden substructure — pooling two H-W subpopulations with different allele frequencies mimics inbreeding in the combined sample. Heterozygote advantage would produce an EXCESS of heterozygotes, and selection or recurrent mutation would shift allele frequencies over time, which was ruled out.`
          },
          {
            question: `A chi-square test compares observed AA/Aa/aa counts to H-W expectations, with the allele frequency estimated from the same sample. The appropriate degrees of freedom is:`,
            options: [`3`, `2`, `1`, `0`],
            correctAnswer: 2,
            explanation: `Start with 3 genotype classes, subtract 1 because the counts must sum to the sample size, and subtract 1 more because one parameter ($p$) was estimated from the data: $3 - 1 - 1 = 1$. Answering 2 is the classic error of forgetting the estimated-parameter penalty.`
          },
          {
            question: `An autosomal recessive disease affects 1 in 10,000 people. A healthy man whose brother has the disease (both parents unaffected) marries an unrelated woman from the general population. The approximate probability their first child is affected is:`,
            options: [`1/600`, `1/300`, `1/150`, `1/10,000`],
            correctAnswer: 1,
            explanation: `The man: his parents are obligate carriers, and given he is unaffected, he is Aa with probability $2/3$. The woman: $q^2 = 10^{-4}$ gives $q = 0.01$, so her carrier probability is about $2q = 1/50$. Child affected: $\\tfrac{2}{3} \\times \\tfrac{1}{50} \\times \\tfrac{1}{4} = \\tfrac{1}{300}$. Using $1/2$ instead of $2/3$ for the brother (forgetting to condition on his being unaffected) gives the 1/400-ish trap; forgetting the final $\\tfrac{1}{4}$ cross gives answers near 1/75.`
          }
        ]
      }
    },
    {
      id: 'pg4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- X-linked recessive: affected males $= q$ (hemizygosity reads out the allele frequency), affected females $= q^2$, carriers $= 2pq$; male:female ratio $= 1/q$
- A random woman's son is affected with probability $q$ — the two-path calculation (affected mothers + half of carriers' sons) must collapse to $q$
- ABO: $p + q + r = 1$; start from type O ($r^2$), the only single-genotype class; AB $= 2pq$
- H-W fit test: expected counts from allele-counted frequencies; $\\chi^2 = \\sum (O-E)^2/E$; df $= 3 - 1 - 1 = 1$ for two alleles
- Heterozygote deficit → inbreeding, assortative mating, or Wahlund substructure; heterozygote excess → overdominance or negative assortative mating; shifting allele frequencies → selection, drift, or migration
- Hybrid pedigree problems: population gives the outsider's carrier risk ($\\approx 2q$), Mendel gives the relative's (unaffected sib of affected $= 2/3$), multiply both by $\\tfrac{1}{4}$`
    }
  ]
};
