export const bioHardyWeinbergEquilibriumPart6Data = {
  topicSlug: 'hardy-weinberg-equilibrium',
  sections: [
    {
      id: 'hw6-intro',
      type: 'text' as const,
      content: `
## Chi-Square Analysis with Hardy-Weinberg

**Part 6 of 7**

In Part 4, we compared observed and expected genotype frequencies by eye. But how do we know if the differences are **statistically significant** or just due to random sampling? The answer is the **chi-square ($\\chi^2$) goodness-of-fit test**.

### The Chi-Square Formula

$$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$

Where:
- $O$ = observed count for each category
- $E$ = expected count for each category
- The sum is taken over all categories (genotypes)

### Steps for a Hardy-Weinberg Chi-Square Test

1. **State the null hypothesis ($H_0$):** The population is in Hardy-Weinberg equilibrium
2. **Calculate** allele frequencies (p and q) from the data
3. **Calculate** expected genotype counts using $p^2$, $2pq$, $q^2$
4. **Compute** $\\chi^2$ using the formula
5. **Determine** degrees of freedom: $df = \\text{categories} - 1 - \\text{parameters estimated}$
6. **Compare** $\\chi^2$ to the critical value at $\\alpha = 0.05$
7. **Conclude:** reject or fail to reject $H_0$

> ⚠️ **Degrees of freedom for HW:** With 3 genotype categories and 1 estimated parameter (p or q), $df = 3 - 1 - 1 = 1$.
      `
    },
    {
      id: 'hw6-worked-example',
      type: 'text' as const,
      content: `
### Worked Example: MN Blood Type

In a population of 1,000 individuals:
- 298 **MM**, 489 **MN**, 213 **NN**

**Step 1:** Null hypothesis — population is in HW equilibrium

**Step 2:** Calculate allele frequencies

Total alleles = 2,000

$$p_M = \\frac{2(298) + 489}{2000} = \\frac{1085}{2000} = 0.5425$$

$$q_N = \\frac{2(213) + 489}{2000} = \\frac{915}{2000} = 0.4575$$

**Step 3:** Expected genotype counts

| Genotype | Expected frequency | Expected count |
|----------|-------------------|---------------|
| MM | $p^2 = (0.5425)^2 = 0.2943$ | 294.3 |
| MN | $2pq = 2(0.5425)(0.4575) = 0.4964$ | 496.4 |
| NN | $q^2 = (0.4575)^2 = 0.2093$ | 209.3 |

**Step 4:** Calculate $\\chi^2$

$$\\chi^2 = \\frac{(298 - 294.3)^2}{294.3} + \\frac{(489 - 496.4)^2}{496.4} + \\frac{(213 - 209.3)^2}{209.3}$$

$$\\chi^2 = \\frac{(3.7)^2}{294.3} + \\frac{(-7.4)^2}{496.4} + \\frac{(3.7)^2}{209.3}$$

$$\\chi^2 = \\frac{13.69}{294.3} + \\frac{54.76}{496.4} + \\frac{13.69}{209.3}$$

$$\\chi^2 = 0.047 + 0.110 + 0.065 = 0.222$$

**Step 5:** $df = 1$

**Step 6:** Critical value at $\\alpha = 0.05$, $df = 1$ → $\\chi^2_{\\text{crit}} = 3.841$

**Step 7:** Since $0.222 < 3.841$, we **fail to reject** $H_0$.

> ✅ **Conclusion:** There is no significant evidence that this population deviates from Hardy-Weinberg equilibrium for the MN blood group.
      `
    },
    {
      id: 'hw6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Chi-Square Basics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In a Hardy-Weinberg chi-square test with three genotype categories, the degrees of freedom equals:',
            options: ['3', '2', '1', '0'],
            correctAnswer: 2,
            explanation: 'df = (number of categories) − 1 − (number of estimated parameters) = 3 − 1 − 1 = 1. We subtract 1 because we estimated one parameter (p) from the data; q is determined since p + q = 1.'
          },
          {
            question: 'If the calculated chi-square value is LARGER than the critical value, you should:',
            options: [
              'Accept the null hypothesis',
              'Reject the null hypothesis — population is likely NOT in HW equilibrium',
              'Increase sample size and retest',
              'Conclude that no evolution has occurred'
            ],
            correctAnswer: 1,
            explanation: 'When χ² > critical value, the probability that the observed deviation from HW expectations occurred by chance is less than 5% (at α = 0.05). We reject H₀ and conclude the population is likely NOT in HW equilibrium.'
          }
        ]
      }
    },
    {
      id: 'hw6-critical-values',
      type: 'text' as const,
      content: `
### Chi-Square Critical Values Reference

For HW tests, $df = 1$. Here are critical values at common significance levels:

| Significance level ($\\alpha$) | Critical $\\chi^2$ value | Meaning |
|-------------------------------|------------------------|---------|
| 0.10 | 2.706 | 10% chance of Type I error |
| **0.05** | **3.841** | **Standard threshold for AP exam** |
| 0.01 | 6.635 | 1% chance of Type I error |
| 0.001 | 10.828 | Very stringent |

### Interpreting Results

- $\\chi^2 < 3.841$ → **Fail to reject** $H_0$ → Data are consistent with HW equilibrium
- $\\chi^2 > 3.841$ → **Reject** $H_0$ → Population may not be in HW equilibrium

> ⚠️ **Common AP mistake:** "Fail to reject" does NOT mean "we proved the population is in equilibrium." It means we don't have enough statistical evidence to conclude otherwise. The population may still be evolving — we just can't detect it with this sample.

### When $\\chi^2$ is Large: What's Causing the Deviation?

Look at which genotype category contributes most to $\\chi^2$:

- **Excess homozygotes** → suggests inbreeding or population substructure
- **Excess heterozygotes** → suggests heterozygote advantage (balancing selection)
- **Shift in one direction** → suggests directional selection
      `
    },
    {
      id: 'hw6-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Practice: Interpreting Chi-Square Results** 🔍

A biologist tests whether a population of frogs is in HW equilibrium for a color gene. She observes 40 GG, 120 Gg, and 40 gg (n = 200). Expected under HW: 50 GG, 100 Gg, 50 gg.`,
      exercise: {
        dropdowns: [
          { label: 'The (O−E)²/E for GG = ___', options: ['1.0', '2.0', '4.0', '0.5'] },
          { label: 'The (O−E)²/E for Gg = ___', options: ['1.0', '2.0', '4.0', '0.5'] },
          { label: 'Total χ² = ___', options: ['3.0', '4.0', '6.0', '8.0'] },
          { label: 'At α = 0.05, the null hypothesis should be ___', options: ['rejected', 'not rejected', 'accepted', 'restated'] }
        ],
        correctAnswers: ['2.0', '4.0', '8.0', 'rejected'],
        hint1: 'For GG: (40 − 50)²/50 = 100/50',
        hint2: 'For Gg: (120 − 100)²/100 = 400/100',
        hint3: 'Total χ² = 2.0 + 4.0 + 2.0 = 8.0. Compare with 3.841.',
        explanation: 'GG: (40−50)²/50 = 2.0. Gg: (120−100)²/100 = 4.0. gg: (40−50)²/50 = 2.0. Total χ² = 8.0. Since 8.0 > 3.841, we reject H₀. There is excess heterozygosity — possibly heterozygote advantage.'
      }
    },
    {
      id: 'hw6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Chi-Square Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A researcher calculates χ² = 1.85 for a HW test (df = 1, α = 0.05). What should she conclude?',
            options: [
              'The population is definitely in HW equilibrium',
              'The population is evolving',
              'There is insufficient evidence to reject HW equilibrium',
              'The sample size was too small'
            ],
            correctAnswer: 2,
            explanation: 'Since χ² = 1.85 < 3.841 (critical value at α = 0.05, df = 1), we fail to reject the null hypothesis. This means we do not have sufficient statistical evidence to conclude the population deviates from HW equilibrium — but this does NOT prove equilibrium exists.'
          },
          {
            question: 'In the frog example, the excess of heterozygotes (Gg) compared to HW expectations most likely suggests:',
            options: [
              'High mutation rate',
              'Heterozygote advantage or negative assortative mating',
              'Inbreeding in the population',
              'A recent population bottleneck'
            ],
            correctAnswer: 1,
            explanation: 'Excess heterozygosity compared to HW predictions typically indicates heterozygote advantage (balancing selection favoring heterozygotes) or negative assortative mating (unlike genotypes preferentially mating). Inbreeding and bottlenecks would decrease heterozygosity.'
          }
        ]
      }
    }
  ]
}
