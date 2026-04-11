export const apStatsChiSquarePart5Data = {
  topicSlug: 'chi-square-tests-apstats',
  sections: [
    {
      id: 'apstats-chisquaretests-p5-intro',
      type: 'text' as const,
      content: `# 📊 Interpreting Results

**Part 5 of 7 — Interpreting Results**

---

### Key Concepts

This section covers essential concepts related to **interpreting results** in AP Statistics.

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
      id: 'apstats-chisquaretests-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Interpreting Results Check** 🎯
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
