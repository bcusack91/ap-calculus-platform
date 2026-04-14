export const apStatsEDAPart5Data = {
  topicSlug: 'exploratory-data-apstats',
  sections: [
    {
      id: 'exploratorydata-p5-intro',
      type: 'text' as const,
      content: `# 📈 Shape and Outliers

**Part 5 of 7 — Describing Distributions Completely**

---

### Shapes of Distributions

| Shape | Description | Example |
|-------|------------|---------|
| **Symmetric** | Mirror image, roughly equal tails | Test scores |
| **Skewed right** | Long right tail | Income, home prices |
| **Skewed left** | Long left tail | Age at retirement |
| **Bimodal** | Two peaks | Heights of men & women combined |
| **Uniform** | All values equally likely | Rolling a die |

---

### The Effect of Outliers

Outliers affect:
- **Mean** (pulled toward outlier) — NOT resistant
- **Standard deviation** (increases) — NOT resistant
- **Range** (increases) — NOT resistant

Outliers do NOT significantly affect:
- **Median** — resistant
- **IQR** — resistant

### Boxplots

The five-number summary is displayed visually:
$$\\\\text{Min}, Q_1, \\\\text{Median}, Q_3, \\\\text{Max}$$

Modified boxplots show outliers as individual dots beyond the fences.`
    },    {
      id: 'exploratorydata-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Income data is typically:',
            options: ['Symmetric', 'Skewed right', 'Skewed left', 'Uniform'],
            correctAnswer: 1,
            explanation: 'Most people earn moderate incomes, but a few high earners create a long right tail.'
          },
          {
            question: 'A modified boxplot differs from a regular boxplot by:',
            options: ['Using a different median', 'Showing outliers as individual points', 'Not showing quartiles', 'Using the mean instead of median'],
            correctAnswer: 1,
            explanation: 'Modified boxplots plot outliers individually beyond the whiskers (fences).'
          },
          {
            question: 'Which pair of statistics is BOTH resistant to outliers?',
            options: ['Mean and SD', 'Median and IQR', 'Mean and IQR', 'Median and range'],
            correctAnswer: 1,
            explanation: 'Both median and IQR are resistant measures (not affected by extreme values).'
          }
        ]
      }
    },    {
      id: 'exploratorydata-p5-input',
      type: 'input-boxes' as const,
      content: `
**Distribution Description** 🧮

A histogram of household income in a city shows a peak around $50,000 with a long tail stretching to $500,000+.

**1)** What is the shape? (symmetric/skewed right/skewed left)

**2)** Is the mean likely above or below the median?

**3)** Which is a better measure of center for this data? (mean/median)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['skewed right', 'above', 'median'],
        hint1: 'Long right tail',
        hint2: 'Skewed right pulls the mean which way?',
        hint3: 'Resistant to skewness',
        explanation: '1) Skewed right (long tail toward high incomes). 2) Above (right tail pulls mean up). 3) Median (resistant to the right skew).'
      }
    }
  ]
};
