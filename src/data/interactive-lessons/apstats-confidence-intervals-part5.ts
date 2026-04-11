export const apStatsConfIntPart5Data = {
  topicSlug: 'confidence-intervals-apstats',
  sections: [
    {
      id: 'apstats-confidenceintervals-p5-intro',
      type: 'text' as const,
      content: `# 📊 Interpreting Confidence Intervals

**Part 5 of 7 — Interpreting Confidence Intervals**

---

### Key Concepts

This section covers essential concepts related to **interpreting confidence intervals** in AP Statistics.

Understanding these ideas is crucial for:
- Interpreting statistical output correctly
- Making valid inferences from data
- Succeeding on the AP Statistics exam

---

### Important Formulas and Definitions

Review the key formulas and definitions covered in the previous sections. Practice applying them to new contexts.

> 🔑 **AP Tip:** Always state hypotheses, check conditions, calculate the test statistic, find the p-value, and state your conclusion in context.`
    },
    {
      id: 'apstats-confidenceintervals-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Interpreting Confidence Intervals Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is essential when performing statistical inference?',
            options: ['Large population', 'Checking conditions before proceeding', 'Equal sample sizes', 'Knowing the population parameter'],
            correctAnswer: 1,
            explanation: 'Conditions (randomness, normality, independence) must be verified before any inference procedure.'
          },
          {
            question: 'In AP Statistics, conclusions should always be stated:',
            options: ['Using technical jargon only', 'In the context of the problem', 'Without reference to p-values', 'As certainties'],
            correctAnswer: 1,
            explanation: 'AP scoring rubrics require conclusions in context — referencing the specific variables and setting of the problem.'
          }
        ]
      }
    }
  ]
};
