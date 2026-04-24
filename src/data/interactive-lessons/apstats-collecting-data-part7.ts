export const apStatsCollectingDataPart7Data = {
  topicSlug: 'collecting-data-apstats',
  sections: [
    {
      id: 'apstats-collectingdata-p7-intro',
      type: 'text' as const,
      content: `# 📋 Review & Applications

**Part 7 of 7 — Comprehensive Review**

---

### Key Concepts Summary

| Concept | Key Point |
|---------|-----------|
| **Observational vs. Experiment** | Only experiments with random assignment → causation |
| **SRS** | Every individual has equal probability of selection |
| **Stratified** | Divide into strata, SRS within each |
| **Cluster** | Randomly select whole groups |
| **Bias** | Systematic error — not fixed by larger $n$ |
| **Confounding** | Third variable explains apparent relationship |
| **Random assignment** | Reduces confounding in experiments |
| **Blocking** | Control for known sources of variation |
| **Expected value** | $E(X) = \\sum x_i P(x_i)$ — long-run average |`
    },
    {
      id: 'apstats-collectingdata-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is NOT a principle of experimental design?',
            options: ['Control', 'Randomization', 'Convenience', 'Replication'],
            correctAnswer: 2,
            explanation: 'The four principles are Control, Randomization, Replication, and (optionally) Blocking. Convenience is a type of sampling bias.'
          },
          {
            question: 'A study randomly assigns 50 rats to a high-fat diet and 50 to a low-fat diet, measuring weight gain. This can establish causation because:',
            options: ['The sample is large', 'Random assignment was used', 'Rats are similar to humans', 'Weight is easy to measure'],
            correctAnswer: 1,
            explanation: 'Random assignment of treatments distributes confounders evenly, allowing causal conclusions.'
          },
          {
            question: 'An online poll asking "Should the government ban plastic bags?" receives 10,000 responses. This is:',
            options: ['A reliable result due to large sample', 'Affected by voluntary response bias', 'A properly conducted SRS', 'Free of bias'],
            correctAnswer: 1,
            explanation: 'Online polls suffer from voluntary response bias — people with extreme views are overrepresented, regardless of sample size.'
          }
        ]
      }
    },
    {
      id: 'apstats-collectingdata-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Review** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: 'Causation requires:', options: ['Large sample', 'Randomized experiment', 'Observational study', 'Correlation'] },
          { label: 'Bias is reduced by:', options: ['Larger samples', 'Better sampling methods', 'More questions', 'Longer studies'] },
          { label: '$E(X+Y) =$', options: ['$E(X) \\cdot E(Y)$', '$E(X) + E(Y)$', '$E(X) - E(Y)$', 'Cannot be determined'] }
        ],
        correctAnswers: ['Randomized experiment', 'Better sampling methods', '$E(X) + E(Y)$'],
        hint1: 'Only experiments with random assignment.',
        hint2: 'Bias is systematic, not random.',
        hint3: 'Always true, regardless of independence.',
        explanation: 'Causation: experiments. Bias: better methods. $E(X+Y) = E(X)+E(Y)$ always.'
      }
    }
  ]
};
