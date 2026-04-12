export const apStatsEDAPart1Data = {
  topicSlug: 'exploratory-data-apstats',
  sections: [
    {
      id: 'exploratorydata-p1-intro',
      type: 'text' as const,
      content: `# 📊 Exploratory Data Analysis

**Part 1 of 7 — Boxplots & Five-Number Summary**

---

### Five-Number Summary

| Statistic | Description |
|-----------|-------------|
| **Minimum** | Smallest value |
| **Q1** | 25th percentile (median of lower half) |
| **Median** | 50th percentile (middle value) |
| **Q3** | 75th percentile (median of upper half) |
| **Maximum** | Largest value |

### IQR (Interquartile Range)
$$IQR = Q3 - Q1$$

The IQR contains the middle 50% of the data.

---

### Modified Boxplot

A modified boxplot identifies **outliers** using the 1.5 × IQR rule:
- **Low outliers:** below $Q1 - 1.5 \\\\times IQR$
- **High outliers:** above $Q3 + 1.5 \\\\times IQR$

Whiskers extend to the most extreme non-outlier values. Outliers are shown as individual dots.

---

### Example
Data: 2, 5, 7, 8, 9, 10, 11, 12, 14, 30
- Min = 2, Q1 = 7, Med = 9.5, Q3 = 12, Max = 30
- IQR = 5, Upper fence = $12 + 7.5 = 19.5$
- 30 is an outlier!`
    },
    {
      id: 'exploratorydata-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes boxplots & five-number summary?',
            options: ['A fundamental concept in this unit', 'Not covered on the AP exam', 'Only relevant for AP Calculus', 'A concept from physics'],
            correctAnswer: 0,
            explanation: 'Boxplots & Five-Number Summary is a core AP Statistics concept tested on the exam.'
          }
        ]
      }
    }
  ]
};
