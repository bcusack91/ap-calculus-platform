export const apStatsProbDistPart4Data = {
  topicSlug: 'probability-distributions-apstats',
  sections: [
    {
      id: 'probdistributions-p4-intro',
      type: 'text' as const,
      content: `# 🔍 Assessing Normality

**Part 4 of 7 — Is the Data Normal?**

---

### Normal Probability Plot (Normal Quantile Plot)

A graph that plots each data value against its expected z-score if the data were perfectly Normal.

**Interpretation:**
- **Roughly linear pattern** → Data is approximately Normal
- **Curved pattern** → Data is NOT Normal
- **S-shape** → Data has outliers or is heavy-tailed

---

### Other Methods to Assess Normality

| Method | What to Look For |
|--------|-----------------|
| Histogram | Bell-shaped? |
| Boxplot | Symmetric? No extreme outliers? |
| 68-95-99.7 Rule | Do percentages roughly match? |
| Normal probability plot | Points approximately linear? |

### When Can We Assume Normality?

- **Large samples** ($n \\\\geq 30$): CLT applies regardless
- **Small samples**: Need to check Normal probability plot
- **Known Normal populations**: Always OK`
    },    {
      id: 'probdistributions-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A Normal probability plot that is roughly linear suggests:',
            options: ['The data is skewed', 'The data is approximately Normal', 'The sample is too small', 'Outliers are present'],
            correctAnswer: 1,
            explanation: 'A roughly linear Normal probability plot indicates the data follows an approximately Normal distribution.'
          },
          {
            question: 'Which is the best way to assess Normality for a small sample?',
            options: ['Look at the mean', 'Use a Normal probability plot', 'Check if the standard deviation is small', 'Assume it’s Normal'],
            correctAnswer: 1,
            explanation: 'For small samples, the Normal probability plot is the most reliable visual check.'
          },
          {
            question: 'The Central Limit Theorem says the sampling distribution is approximately Normal when:',
            options: ['The population is Normal', '$n \\\\geq 30$', 'The data has no outliers', 'All of the above help'],
            correctAnswer: 3,
            explanation: 'Normal population (always), large $n$ (CLT), and no outliers (for small $n$) all support using Normal methods.'
          }
        ]
      }
    },    {
      id: 'probdistributions-p4-input',
      type: 'input-boxes' as const,
      content: `
**Normality Assessment** 🧮

**1)** A Normal probability plot shows an S-shaped curve. Is the data Normal? (yes/no)

**2)** For $n = 50$ data points, can you use Normal methods even if the population isn’t Normal? (yes/no)

**3)** What rule can you use to check if data roughly follows a Normal distribution? (state the name)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['no', 'yes', '68-95-99.7'],
        hint1: 'S-shape = departure from Normality',
        hint2: 'Central Limit Theorem with large $n$',
        hint3: 'The Empirical Rule has three numbers',
        explanation: '1) No — an S-shape indicates non-Normality. 2) Yes — CLT applies for $n \\\\geq 30$. 3) The 68-95-99.7 (Empirical) Rule.'
      }
    }
  ]
};
