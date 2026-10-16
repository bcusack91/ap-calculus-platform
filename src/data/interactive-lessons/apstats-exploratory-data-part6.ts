export const apStatsEDAPart6Data = {
  topicSlug: 'exploratory-data-apstats',
  sections: [
    {
      id: 'exploratorydata-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### AP Exam Framework for EDA

When describing a distribution, ALWAYS address:
1. **Shape** (is it symmetric? skewed? bimodal?)
2. **Outliers** (are there any? use the 1.5×IQR rule)
3. **Center** (give an approximate value and name the statistic)
4. **Spread** (report the appropriate measure)

---

### Template Answer

“The distribution of [variable] is [shape] with [center measure] approximately [value] and [spread measure] approximately [value]. [There are / are no] outliers.”

### Comparing Distributions

Always compare both distributions on ALL four features. Use comparative language: “higher,” “wider,” “more skewed.”`
    },    {
      id: 'exploratorydata-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP free-response asks you to “describe the distribution.” You should include:',
            options: ['Center and spread, both stated in context', 'Center, shape and spread, with no context', 'Shape, center, spread and unusual features', 'The five-number summary and the mean'],
            correctAnswer: 2,
            explanation: 'A complete description addresses shape, center, spread and unusual features such as outliers, gaps or clusters, all in context. Leaving out shape or unusual features is incomplete, a description without context loses credit, and a list of statistics is not a description.'
          },
          {
            question: 'When comparing two distributions, you should:',
            options: ['Describe each group separately', 'Use comparative words such as "higher than"', 'Mention only the features that differ', 'Compare the two means and nothing else'],
            correctAnswer: 1,
            explanation: 'Compare directly: “Group A has a higher median than Group B,” “Group B is more spread out.” Two separate descriptions do not make the comparison, similarities in shape or spread are worth stating too, and center alone is not a full comparison.'
          },
          {
            question: 'Which measures should you report for a skewed distribution?',
            options: ['Mean and standard deviation', 'Median and IQR', 'Range and median', 'Mean and the IQR'],
            correctAnswer: 1,
            explanation: 'For skewed data, use resistant measures: the median for center and the IQR for spread. The mean, SD and range are all pulled by the long tail.'
          }
        ]
      }
    },    {
      id: 'exploratorydata-p6-input',
      type: 'input-boxes' as const,
      content: `
**SOCS Description** 🧮

Test scores: Min=45, $Q_1=65$, Med=75, $Q_3=85$, Max=98. Roughly symmetric, no outliers.

**1)** Best measure of center? (mean/median) and its approximate value?

**2)** $IQR = ?$

**3)** Lower fence for outliers by the 1.5×IQR rule = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['75', '20', '35'],
        hint1: 'Symmetric → either works; median is given',
        hint2: '$Q_3 - Q_1$',
        hint3: '$Q_1 - 1.5 \\times IQR = 65 - 30$',
        explanation: '1) Median = 75 (or mean ≈ 75 for symmetric data). 2) $IQR = 85 - 65 = 20$. 3) Lower fence = $65 - 30 = 35$. Min = 45 > 35, so no outliers.'
      }
    }
  ]
};
