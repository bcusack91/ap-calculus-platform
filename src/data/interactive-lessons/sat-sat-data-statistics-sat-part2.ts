export const satDataStatsPart2Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds2-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 2 of 7 — Standard Deviation & Data Spread**

### Standard Deviation (σ)

Measures how spread out values are from the mean. You won't calculate it on the SAT, but you must understand it.

- **Low SD**: values are close to the mean (consistent data)
- **High SD**: values are far from the mean (varied data)
- **SD = 0**: all values are the same

### Comparing Standard Deviations

Data A: $\\{48, 49, 50, 51, 52\\}$ → low SD (clustered near 50)

Data B: $\\{10, 30, 50, 70, 90\\}$ → high SD (spread out)

Both have mean 50, but B has a much larger standard deviation.

### Effect of Transformations

| Transformation | Mean | SD |
|---------------|------|-----|
| Add $k$ to all values | Mean $+ k$ | **Same** |
| Multiply all by $k$ | Mean $\\times k$ | SD $\\times |k|$ |

Adding a constant shifts all data equally — spread doesn't change.
Multiplying stretches the data — spread increases.`
    },
    {
      id: 'ds2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Standard Deviation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which data set has the largest standard deviation?',
            options: ['$\\{1, 50, 99\\}$', '$\\{48, 50, 52\\}$', '$\\{50, 50, 50\\}$', '$\\{40, 50, 60\\}$'],
            correctAnswer: 0,
            explanation: '$\\{1, 50, 99\\}$ has values most spread from the mean (50). The differences are ±49, much larger than the other sets.'
          },
          {
            question: 'A data set has mean 30 and SD 5. If 10 is added to every value, the new SD is:',
            options: ['$5$', '$15$', '$50$', '$35$'],
            correctAnswer: 0,
            explanation: 'Adding a constant shifts all values equally — the spread doesn\'t change. New mean = 40, but SD stays 5.'
          },
          {
            question: 'A data set has mean 20 and SD 4. If every value is doubled, the new SD is:',
            options: ['$8$', '$4$', '$16$', '$24$'],
            correctAnswer: 0,
            explanation: 'Multiplying by $k$ multiplies the SD by $|k|$. New SD $= 4 \\times 2 = 8$.'
          }
        ]
      }
    },
    {
      id: 'ds2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- SD measures spread — you compare, not calculate on the SAT
- More spread out data = higher SD; identical values = SD of 0
- Adding a constant: mean changes, SD does NOT change
- Multiplying by a constant: both mean and SD are multiplied`
    }
  ]
};
