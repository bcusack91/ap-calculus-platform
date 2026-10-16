export const apStatsEDAPart3Data = {
  topicSlug: 'exploratory-data-apstats',
  sections: [
    {
      id: 'exploratorydata-p3-intro',
      type: 'text' as const,
      content: `# 📍 Measures of Center

**Part 3 of 7 — Mean and Median**

---

### Mean ($\\bar{x}$)

$$\\bar{x} = \\frac{\\sum x_i}{n}$$

- Arithmetic average of ALL values
- **Sensitive** to outliers and skewness
- Best for symmetric distributions

### Median ($M$ or $\\tilde{x}$)

- Middle value when data is ordered
- **Resistant** to outliers
- Best for skewed distributions

### Relationship Between Mean and Median

| Shape | Relationship |
|-------|-------------|
| Symmetric | Mean $\\approx$ Median |
| Skewed right | Mean > Median |
| Skewed left | Mean < Median |

---

### Why Does Skewness Pull the Mean?

Outliers and long tails pull the mean toward the tail, while the median stays put.`
    },    {
      id: 'exploratorydata-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a right-skewed distribution:',
            options: ['Mean < Median', 'Mean = Median', 'Mean > Median', 'The two are unrelated'],
            correctAnswer: 2,
            explanation: 'The long right tail pulls the mean toward larger values, while the median stays at the middle position, so the mean is greater than the median. Mean less than median goes with left skew, and equality goes with symmetry.'
          },
          {
            question: 'Which summary statistic is resistant to outliers?',
            options: ['The mean', 'The median', 'The range', 'The SD'],
            correctAnswer: 1,
            explanation: 'The median depends only on the middle position, so extreme values barely affect it. The mean, the range and the standard deviation all use the extreme values and are nonresistant.'
          },
          {
            question: 'Data: 2, 3, 5, 7, 100. The mean is:',
            options: ['5', '23.4', '29.25', '4.25'],
            correctAnswer: 1,
            explanation: '$\\bar{x} = (2+3+5+7+100)/5 = 117/5 = 23.4$; the outlier 100 pulls the mean far above the median of 5. 29.25 divides by 4 instead of 5, and 4.25 is the mean with the outlier left out.'
          }
        ]
      }
    },    {
      id: 'exploratorydata-p3-input',
      type: 'input-boxes' as const,
      content: `
**Center Calculations** 🧮

Data: 10, 12, 14, 15, 19

**1)** Mean $\\bar{x} = ?$

**2)** Median = ?

**3)** If we add 100 to the dataset, which changes more — the mean or the median?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14', '14', 'mean'],
        hint1: '$(10+12+14+15+19)/5$',
        hint2: 'Middle value of 5 ordered numbers',
        hint3: 'The outlier pulls which measure?',
        explanation: '1) $(10+12+14+15+19)/5 = 70/5 = 14$. 2) Middle value = 14. 3) The mean changes much more — the median only shifts slightly.'
      }
    }
  ]
};
