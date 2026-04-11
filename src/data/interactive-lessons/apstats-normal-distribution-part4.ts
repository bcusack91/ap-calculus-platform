export const apStatsNormalDistPart4Data = {
  topicSlug: 'normal-distribution-apstats',
  sections: [
    {
      id: 'apstats-normaldistribution-p4-intro',
      type: 'text' as const,
      content: `# 📈 Assessing Normality

**Part 4 of 7 — Is the Data Normal?**

---

### Why Check Normality?

Many statistical procedures assume the data comes from a normal distribution. Before applying them:
- Check with a **histogram** — should be roughly bell-shaped
- Use a **normal probability plot (Q-Q plot)** — points should follow a straight line
- Apply the **Empirical Rule** — about 68/95/99.7% should fall within 1/2/3 SDs

---

### Normal Probability Plot (Q-Q Plot)

| Pattern | Interpretation |
|---------|---------------|
| Points follow a straight line | Data is approximately normal |
| Points curve up at both ends | Data has heavier tails (leptokurtic) |
| S-shaped curve | Data is skewed |
| Points curve down at both ends | Data has lighter tails (platykurtic) |

> 🔑 **No real data is perfectly normal.** We look for "close enough" — roughly symmetric with no extreme outliers.`
    },
    {
      id: 'apstats-normaldistribution-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Normality Assessment** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A Q-Q plot shows points curving upward away from the line at both ends. The distribution has:',
            options: ['Lighter tails than normal', 'Heavier tails than normal', 'A perfect normal shape', 'Left skewness'],
            correctAnswer: 1,
            explanation: 'Points above the line at both tails = more extreme values than expected = heavier tails.'
          },
          {
            question: 'Which is the best method to assess if data is normally distributed?',
            options: ['Check if the mean equals the mode', 'Look at the sample size', 'Use a normal probability plot', 'Calculate the range'],
            correctAnswer: 2,
            explanation: 'A normal probability plot (Q-Q plot) is the most reliable visual method for assessing normality.'
          }
        ]
      }
    }
  ]
};
