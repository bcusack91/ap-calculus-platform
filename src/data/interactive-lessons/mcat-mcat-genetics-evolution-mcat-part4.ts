export const mcatGeneticsPart4Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge4-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 4 of 7 — Population Genetics**

### Hardy-Weinberg Equilibrium

For a population that is NOT evolving, allele and genotype frequencies stay constant and obey:

$p + q = 1$

$p^2 + 2pq + q^2 = 1$

Where $p$ = frequency of the dominant allele and $q$ = frequency of the recessive allele.

| Term | Represents |
|------|-----------|
| $p^2$ | Frequency of homozygous dominant individuals |
| $2pq$ | Frequency of heterozygous individuals (carriers) |
| $q^2$ | Frequency of homozygous recessive individuals |

### The Five Conditions for Hardy-Weinberg

1. No mutations
2. No migration (no gene flow)
3. No natural selection
4. Large population (no genetic drift)
5. Random mating

If **any** condition is violated, the population is evolving.

### MCAT Shortcut

The recessive phenotype frequency equals $q^2$ (because recessive phenotype = homozygous recessive). So:
- Start with $q^2$ = frequency of affected individuals
- $q = \\sqrt{q^2}$
- $p = 1 - q$
- Carrier (heterozygote) frequency $= 2pq$`
    },
    {
      id: 'ge4-worked',
      type: 'text' as const,
      content: `### Worked Example — Full Hardy-Weinberg Calculation

**Problem.** Cystic fibrosis is autosomal recessive. In a population, **1 in 2,500** newborns is affected. Assuming Hardy-Weinberg equilibrium, find (a) the recessive allele frequency $q$, (b) the dominant allele frequency $p$, (c) the carrier frequency, and (d) the fraction of the population that is homozygous dominant.

**Step 1 — Identify $q^2$.** Affected = homozygous recessive = $q^2$:
$q^2 = \\frac{1}{2500} = 0.0004$

**Step 2 — Solve for $q$.** Take the square root:
$q = \\sqrt{0.0004} = 0.02$

**Step 3 — Solve for $p$.** Since $p + q = 1$:
$p = 1 - q = 1 - 0.02 = 0.98$

**Step 4 — Carrier frequency $2pq$.**
$2pq = 2(0.98)(0.02) = 0.0392 \\approx 0.04$
So about **1 in 25** people is a carrier — roughly **100 times** more common than the disease itself.

**Step 5 — Homozygous dominant $p^2$.**
$p^2 = (0.98)^2 = 0.9604 \\approx 96\\%$

**Sanity check.** The three genotype frequencies must sum to 1: $0.9604 + 0.0392 + 0.0004 = 1.0000$. ✓ The recurring MCAT insight: carriers ($2pq$) vastly outnumber affected individuals ($q^2$), because most copies of a rare recessive allele are "hidden" in heterozygotes.`
    },
    {
      id: 'ge4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Hardy-Weinberg** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a population, 1 in 10,000 individuals has a recessive genetic disease. The carrier frequency is approximately:`,
            options: [`2% ($2pq \\approx 0.02$)`, `1%`, `0.01%`, `10%`],
            correctAnswer: 0,
            explanation: `$q^2 = 1/10{,}000 = 0.0001$, so $q = 0.01$ and $p = 0.99$. Carrier frequency = $2pq = 2(0.99)(0.01) = 0.0198 \\approx 2\\%$. Carrier frequency is MUCH higher than disease frequency — clinically important!`
          },
          {
            question: `In a Hardy-Weinberg population, the recessive allele frequency is $q = 0.3$. What fraction of individuals are expected to be heterozygous?`,
            options: [`0.42 (42%)`, `0.09 (9%)`, `0.21 (21%)`, `0.49 (49%)`],
            correctAnswer: 0,
            explanation: `$p = 1 - 0.3 = 0.7$. Heterozygotes = $2pq = 2(0.7)(0.3) = 0.42$. (Homozygous dominant $p^2 = 0.49$; homozygous recessive $q^2 = 0.09$; these sum to 1.)`
          },
          {
            question: `Which of the following, by itself, does NOT necessarily cause a population to deviate from Hardy-Weinberg equilibrium?`,
            options: [`A very large population size`, `Strong natural selection against the recessive phenotype`, `Frequent migration into the population`, `Nonrandom (assortative) mating`],
            correctAnswer: 0,
            explanation: `A LARGE population size helps MAINTAIN equilibrium by minimizing genetic drift, so it is a condition FOR equilibrium, not a violation. Selection, gene flow (migration), and nonrandom mating each violate a Hardy-Weinberg assumption and can change allele/genotype frequencies.`
          },
          {
            question: `For an X-linked recessive trait with recessive allele frequency $q$, the expected frequency of affected MALES (who are hemizygous) is:`,
            options: [`$q$`, `$q^2$`, `$2pq$`, `$p^2$`],
            correctAnswer: 0,
            explanation: `Males have a single X, so an affected male simply needs one recessive allele: the frequency of affected males equals the recessive allele frequency $q$. Affected FEMALES need two copies, so they occur at frequency $q^2$ — which is why X-linked recessive traits are far more common in males.`
          },
          {
            question: `Over several generations, the frequency of a recessive disease allele in a small island population rises sharply, with no change in selection pressure. The MOST likely explanation is:`,
            options: [`Genetic drift, which has a large effect in small populations`, `An increase in the mutation rate that exactly targets this allele`, `Hardy-Weinberg equilibrium being maintained`, `Natural selection favoring the homozygous dominant genotype`],
            correctAnswer: 0,
            explanation: `In a SMALL population, random sampling error in which alleles get passed on (genetic drift) can cause large, directionless swings in allele frequency. With selection unchanged and the population small, drift is the best explanation. (The scenario explicitly violates the "large population" Hardy-Weinberg condition.)`
          }
        ]
      }
    },
    {
      id: 'ge4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Hardy-Weinberg: $p + q = 1$ and $p^2 + 2pq + q^2 = 1$ (only when the five conditions hold)
- Start with $q^2$ (recessive phenotype frequency), take the square root to get $q$, then $p = 1 - q$
- Carrier frequency $2pq$ is always much higher than disease frequency $q^2$ for rare alleles
- X-linked recessive: affected males occur at frequency $q$, affected females at $q^2$
- Any violation of the five conditions (especially drift in small populations) = evolution occurring`
    }
  ]
};
