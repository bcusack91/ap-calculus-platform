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
      id: 'histo4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What measure of central tendency is best for skewed distributions?

      2) What is the standard threshold for statistical significance? (format: p < ___)

      3) What term means a test measures what it claims to measure?

      Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['median', '0.05', 'validity'],
        hint1: 'Starts with: M — resistant to outliers',
        hint2: 'The standard threshold in psychology',
        hint3: 'Starts with: V — does it measure the right thing?',
        explanation: 'Expected answers: median (resistant to outliers/skew), 0.05 (standard significance threshold), and validity (does the test measure what it claims to).'
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
    },
    {
      id: 'histo4-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - The mean is NOT always the best measure of central tendency — outliers and skewed distributions make the median more appropriate.
      - A p-value of 0.05 does NOT mean there's a 95% chance the hypothesis is true — it means there's a 5% probability the results occurred by chance IF the null hypothesis is true.
      - Reliability and validity are NOT the same — a test can be reliable (consistent) without being valid (measuring the right thing).
      - Standard deviation is NOT the range — SD measures average distance from the mean; range is just highest minus lowest.

      ### AP Strategy Moves
      - If a distribution has extreme outliers or is described as "skewed," choose the median over the mean.
      - Know the 68-95-99.7 rule cold: within 1 SD (68%), 2 SD (95%), 3 SD (99.7%).
      - p < 0.05 questions appear frequently — be ready to interpret what it means and what it does NOT mean.
      - Distinguish reliability (consistency) from validity (accuracy). A broken clock is reliable but not valid.
      `
    },
    {
      id: 'histo4-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Five employees earn $30K, $32K, $35K, $33K, and $200K. Which measure of central tendency best represents the typical salary?',
            options: [
              'Median ($33K) — the mean would be inflated by the $200K outlier',
              'Mean ($66K) — it averages all values equally',
              'Mode — use the most frequent value',
              'Range — it captures the spread of salaries'
            ],
            correctAnswer: 0,
            explanation: 'The $200K salary is an extreme outlier that pulls the mean ($66K) far above most salaries. The median ($33K) is unaffected by outliers and better represents the typical salary. This is why the AP exam tests when to use mean vs. median.'
          },
          {
            question: 'A personality test gives a student similar scores every time they take it, but experts agree it doesn\'t actually measure personality well. This test has:',
            options: [
              'high reliability but low validity — it\'s consistent but doesn\'t measure what it claims',
              'high validity but low reliability — it measures well but inconsistently',
              'both high reliability and high validity',
              'neither reliability nor validity'
            ],
            correctAnswer: 0,
            explanation: 'Consistent scores = high reliability. Not measuring personality well = low validity. A test can be reliable without being valid (like a bathroom scale that always reads 5 pounds too heavy — it\'s consistent but inaccurate).'
          }
        ]
      }
    }
  ]
}
