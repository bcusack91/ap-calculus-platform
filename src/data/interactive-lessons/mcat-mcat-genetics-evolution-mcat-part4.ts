export const mcatGeneticsPart4Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'ge4-intro',
      type: 'text' as const,
      content: `# Genetics & Evolution for the MCAT

**Part 4 of 7 — Population Genetics**

### Hardy-Weinberg Equilibrium

For a population NOT evolving:

$$p + q = 1$$
$$p^2 + 2pq + q^2 = 1$$

Where: $p$ = frequency of dominant allele, $q$ = frequency of recessive allele

| Term | Represents |
|------|-----------|
| $p^2$ | Frequency of homozygous dominant |
| $2pq$ | Frequency of heterozygous (carriers) |
| $q^2$ | Frequency of homozygous recessive |

### Conditions for Hardy-Weinberg (no evolution)

1. No mutations
2. No migration (gene flow)
3. No natural selection
4. Large population (no genetic drift)
5. Random mating

If ANY condition is violated → population is evolving!

### MCAT Shortcut

Usually given: "$q^2$ = frequency of affected individuals (recessive phenotype)"
- Calculate $q = \\sqrt{q^2}$
- Then $p = 1 - q$
- Carrier frequency = $2pq$`
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
            explanation: `$q^2 = 1/10{,}000 = 0.0001$, so $q = 0.01$ and $p = 0.99$. Carrier frequency = $2pq = 2(0.99)(0.01) = 0.0198 \\approx 2\\%$. Note: carrier frequency is MUCH higher than disease frequency — this is clinically important!`
          }
        ]
      }
    },
    {
      id: 'ge4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Hardy-Weinberg: $p^2 + 2pq + q^2 = 1$ (only if 5 conditions met)
- Start with $q^2$ (recessive phenotype frequency), then work backward
- Carrier frequency ($2pq$) is always much higher than disease frequency ($q^2$)
- Any violation of the 5 conditions = evolution occurring`
    }
  ]
};
