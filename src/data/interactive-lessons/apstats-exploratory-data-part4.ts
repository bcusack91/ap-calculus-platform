export const apStatsEDAPart4Data = {
  topicSlug: 'exploratory-data-apstats',
  sections: [
    {
      id: 'exploratorydata-p4-intro',
      type: 'text' as const,
      content: `# 📏 Measures of Spread

**Part 4 of 7 — Range, IQR, Standard Deviation**

---

### Range

$$\\\\text{Range} = \\\\max - \\\\min$$

Simple but not resistant to outliers.

### Interquartile Range (IQR)

$$IQR = Q_3 - Q_1$$

- Middle 50% of the data
- **Resistant** to outliers
- Best for skewed distributions

### Standard Deviation ($s$)

$$s = \\\\sqrt{\\\\frac{\\\\sum(x_i - \\\\bar{x})^2}{n-1}}$$

- Measures average distance from the mean
- NOT resistant to outliers
- Best for symmetric distributions
- $s = 0$ only when all values are identical

---

### Outlier Rule (1.5 × IQR)

A value is an outlier if it falls:
- Below $Q_1 - 1.5 \\\\times IQR$
- Above $Q_3 + 1.5 \\\\times IQR$`
    },    {
      id: 'exploratorydata-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'IQR measures:',
            options: ['The range of all data', 'The spread of the middle 50%', 'The distance from mean to median', 'The number of outliers'],
            correctAnswer: 1,
            explanation: '$IQR = Q_3 - Q_1$, capturing the spread of the middle half of the data.'
          },
          {
            question: 'As you add a constant to every value in a dataset, the standard deviation:',
            options: ['Increases', 'Decreases', 'Stays the same', 'Doubles'],
            correctAnswer: 2,
            explanation: 'Adding a constant shifts all values equally — spread doesn’t change.'
          },
          {
            question: '$Q_1 = 20, Q_3 = 40$. An outlier is any value above:',
            options: ['60', '70', '80', '100'],
            correctAnswer: 1,
            explanation: '$IQR = 20$. Upper fence = $40 + 1.5(20) = 40 + 30 = 70$.'
          }
        ]
      }
    },    {
      id: 'exploratorydata-p4-input',
      type: 'input-boxes' as const,
      content: `
**Spread Calculations** 🧮

Five-number summary: Min = 5, $Q_1 = 12$, Median = 18, $Q_3 = 24$, Max = 50.

**1)** $IQR = ?$

**2)** Upper outlier fence = $Q_3 + 1.5 \\\\times IQR = ?$

**3)** Is the maximum value (50) an outlier? (yes/no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '42', 'yes'],
        hint1: '$Q_3 - Q_1$',
        hint2: '$24 + 1.5(12)$',
        hint3: 'Is $50 > 42$?',
        explanation: '1) $IQR = 24 - 12 = 12$. 2) $24 + 18 = 42$. 3) Yes — $50 > 42$.'
      }
    }
  ]
};
