export const apStatsProbDistPart4Data = {
  topicSlug: 'probability-distributions-apstats',
  sections: [
    {
      id: 'probdistributions-p4-intro',
      type: 'text' as const,
      content: `# 🔍 Assessing Normality

**Part 4 of 7 — Is the Data Normal?**

---

### Look at a Graph of the Data

| Graph | Consistent with a Normal model | Not consistent |
|-------|--------------------------------|----------------|
| Histogram or dotplot | One peak, roughly symmetric | Strong skew, two peaks, gaps |
| Boxplot | Median near the middle of the box, similar whiskers, no outliers | Long whisker on one side, outliers |
| 68-95-99.7 Rule | Percents within 1, 2, 3 SDs near 68%, 95%, 99.7% | Percents far from those values |

> 🔑 Real data are never exactly Normal. The question is whether a Normal model is a reasonable approximation.

---

### When Can We Use Normal Methods?

- **Data:** a Normal model fits the data only if the graph looks roughly symmetric and unimodal with no outliers.
- **Sample means:** the sampling distribution of $\\bar{x}$ is approximately Normal if the population is Normal **or** $n \\geq 30$ (Central Limit Theorem).
- **Small samples:** check a graph of the sample for strong skewness and outliers.`
    },    {
      id: 'probdistributions-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A boxplot of 40 reaction times has the median near the middle of the box, whiskers of similar length and no outliers. What does this suggest?',
            options: ['The data are skewed to the left', 'A Normal model may be reasonable', 'The data have two distinct peaks', 'The mean is far above the median'],
            correctAnswer: 1,
            explanation: 'A centered median, balanced whiskers and no outliers point to a roughly symmetric distribution, which is consistent with a Normal model. Left skew would stretch the lower whisker, a boxplot cannot show two peaks, and symmetry puts the mean near the median.'
          },
          {
            question: 'In 50 data values, 49% lie within 1 SD of the mean, 88% within 2 SDs and 94% within 3 SDs. Is a Normal model reasonable?',
            options: ['Yes, because every percent is below 100%', 'No, because each percent is well below the rule', 'Yes, because 50 values is a large enough sample', 'No, a Normal model needs exactly 68% within 1 SD'],
            correctAnswer: 1,
            explanation: 'The observed 49%, 88% and 94% fall well short of 68%, 95% and 99.7%, so the data are more spread into the tails than a Normal curve. Real data never match the rule exactly, so the test is closeness, and the sample size does not make the data themselves Normal.'
          },
          {
            question: 'The Central Limit Theorem says the sampling distribution of $\\bar{x}$ is approximately Normal when:',
            options: ['The population is strongly skewed and $n$ is small', 'The data in each individual sample look Normal', 'The population is large, whatever the sample size', '$n$ is large, whatever the population\'s shape'],
            correctAnswer: 3,
            explanation: 'The CLT is about sample size: for large $n$ (often $n \\geq 30$), the sampling distribution of $\\bar{x}$ is approximately Normal whatever the population\'s shape. A Normal population makes it Normal for any $n$, but that is a separate fact, not the CLT. The population\'s size does not matter, and individual samples need not look Normal.'
          }
        ]
      }
    },    {
      id: 'probdistributions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Normality Assessment** 🧮

**1)** A histogram of the data shows two distinct peaks. Is a Normal model reasonable? (yes/no)

**2)** For $n = 50$ observations from a skewed population, is the sampling distribution of $\\bar{x}$ approximately Normal? (yes/no)

**3)** What rule compares the percent of data within 1, 2 and 3 SDs to a Normal model? (state the name)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['no', 'yes', '68-95-99.7'],
        hint1: 'A Normal curve has a single peak.',
        hint2: 'Central Limit Theorem with large $n$',
        hint3: 'The Empirical Rule has three numbers',
        explanation: '1) No — a Normal curve is unimodal, so two peaks rule it out. 2) Yes — the CLT applies for $n \\geq 30$. 3) The 68-95-99.7 (Empirical) Rule.'
      }
    }
  ]
};
