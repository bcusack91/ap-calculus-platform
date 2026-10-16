export const apStatsEDAPart7Data = {
  topicSlug: 'exploratory-data-apstats',
  sections: [
    {
      id: 'exploratorydata-p7-intro',
      type: 'text' as const,
      content: `# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Quick Reference

| Measure | Resistant? | Best for |
|---------|-----------|----------|
| Mean | No | Symmetric data |
| Median | Yes | Skewed data |
| Std Dev | No | Symmetric data |
| IQR | Yes | Skewed data |
| Range | No | Quick summary |

### EDA Checklist

- [ ] Identify variable type (categorical vs. quantitative)
- [ ] Choose appropriate graph
- [ ] Describe shape (symmetric, skewed L/R, bimodal, uniform)
- [ ] Check for outliers (1.5 × IQR rule)
- [ ] Report center (mean or median)
- [ ] Report spread (SD or IQR)
- [ ] Use context (variable names, units)`
    },    {
      id: 'exploratorydata-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Multiplying every value by 2:',
            options: ['The mean and the SD both double', 'The mean doubles; the SD is unchanged', 'The mean is unchanged; the SD doubles', 'Neither the mean nor the SD changes'],
            correctAnswer: 0,
            explanation: 'Multiplying every value by a constant multiplies both the center and the spread by that constant (changing units works the same way). Only adding a constant leaves the SD unchanged.'
          },
          {
            question: 'The five-number summary includes:',
            options: ['Mean, median, range, IQR, SD', 'Min, $Q_1$, median, $Q_3$, max', 'Mean, SD, min, max, $n$', 'Min, $Q_1$, mean, $Q_3$, max'],
            correctAnswer: 1,
            explanation: 'Five-number summary: Min, $Q_1$, Median, $Q_3$, Max, the values a boxplot displays. It uses the median, not the mean, and contains no measure of spread such as the SD.'
          },
          {
            question: 'Data: 1, 2, 3, 4, 5. $s \\approx$:',
            options: ['1.41', '1.58', '2.50', '2.00'],
            correctAnswer: 1,
            explanation: '$\\bar{x} = 3$. $s = \\sqrt{\\frac{(1-3)^2+(2-3)^2+(3-3)^2+(4-3)^2+(5-3)^2}{4}} = \\sqrt{10/4} = \\sqrt{2.5} \\approx 1.58$. 1.41 divides by $n = 5$ instead of $n - 1$, 2.50 is the variance (no square root), and 2.00 divides by 5 and skips the root.'
          }
        ]
      }
    },    {
      id: 'exploratorydata-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

Data: 3, 5, 7, 8, 9, 10, 12, 14, 50

**1)** $\\bar{x} = ?$ (round to 1 place)

**2)** Median = ?

**3)** Is 50 an outlier by the 1.5×IQR rule? ($Q_1 = 6$, $Q_3 = 13$, so $IQR = ?$ and upper fence = ?)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['13.1', '9', 'yes'],
        hint1: 'Sum = 118, $n = 9$',
        hint2: 'Middle of 9 ordered values',
        hint3: '$IQR = 7$, fence = $13 + 10.5 = 23.5$, and $50 > 23.5$',
        explanation: '1) $118/9 \\approx 13.1$. 2) Median = 9 (5th value). 3) Yes — $IQR = 7$, upper fence = $23.5$, and $50 > 23.5$.'
      }
    }
  ]
};
