export const psychHistoryApproachesPart4Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo4-stats',
      type: 'text' as const,
      content: `
## Descriptive Statistics

### Measures of Central Tendency

| Measure | Definition | When to Use |
|---------|-----------|-------------|
| **Mean** | Average of all scores | Normal distribution |
| **Median** | Middle score | Skewed distribution |
| **Mode** | Most frequent score | Categorical data |

### Measures of Variability

| Measure | Definition |
|---------|------------|
| **Range** | Highest - lowest score |
| **Standard deviation** | Average distance from the mean |
| **Variance** | Standard deviation squared |

### Normal Distribution

- Bell-shaped curve
- Mean = median = mode
- ~68% of scores within 1 SD of mean
- ~95% within 2 SD
- ~99.7% within 3 SD
      `
    },
    {
      id: 'histo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a normal distribution, approximately what percentage of scores fall within 1 standard deviation of the mean?',
            options: [
              '50%',
              '68%',
              '95%',
              '99.7%'
            ],
            correctAnswer: 1,
            explanation: 'In a normal distribution, approximately 68% of scores fall within 1 standard deviation of the mean (the 68-95-99.7 rule).'
          }
        ]
      }
    },
    {
      id: 'histo4-inferential',
      type: 'text' as const,
      content: `
## Inferential Statistics

### Statistical Significance

- **p-value:** probability that results occurred by chance
- **p < 0.05:** results are statistically significant
- Means there's less than a 5% chance the results are due to chance

### Key Concepts

- **Reliability:** consistency of results
- **Validity:** does it measure what it claims to?
- **Replication:** repeating a study to verify results
- **Operational definition:** precise description of how a variable is measured
      `
    },
    {
      id: 'histo4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A p-value of 0.03 means:',
            options: [
              'The results are not significant',
              'There is a 3% chance the results are due to chance',
              'The experiment failed',
              '97% of participants responded'
            ],
            correctAnswer: 1,
            explanation: 'A p-value of 0.03 means there is a 3% probability that the results occurred by chance. Since p < 0.05, the results are statistically significant.'
          }
        ]
      }
    },
    {
      id: 'histo4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The best measure of central tendency for skewed data is the ___',
            options: ['mean', 'median', 'mode', 'range']
          },
          {
            label: 'Results are statistically significant when p < ___',
            options: ['0.01', '0.05', '0.50', '1.00']
          },
          {
            label: '___ refers to whether a test measures what it claims to measure',
            options: ['Reliability', 'Validity', 'Replication', 'Standardization']
          }
        ],
        correctAnswers: ['median', '0.05', 'Validity'],
        hint1: 'The median is resistant to outliers.',
        hint2: 'The standard threshold in psychology.',
        hint3: 'Does the test measure the right thing?',
        explanation: 'Median is best for skewed data. p < 0.05 is the standard significance threshold. Validity = measuring what you intend to measure.'
      }
    }
  ]
}
