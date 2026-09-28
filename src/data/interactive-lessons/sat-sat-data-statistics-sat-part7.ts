export const satDataStatsPart7Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds7-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 7 of 7 — Review & SAT Mixed Practice**

### Data & Statistics Quick Reference

| Concept | Key Point |
|---------|-----------|
| Mean | Sum ÷ count; affected by outliers |
| Median | Middle value; resistant to outliers |
| SD | Measures spread; add → same, multiply → changes |
| Scatterplot slope | Predicted change in $y$ per unit $x$ |
| Residual | Actual − predicted |
| Two-way tables | Watch the denominator! |
| "Selected from [group]" | That group's total is the denominator |
| "NOT" probability | 1 minus the probability |
| Causation | Only from randomized experiments |

### Common SAT Question Types

1. **Calculate** the mean/median from given data
2. **Interpret** a slope or y-intercept in context
3. **Read** a two-way table for conditional probability
4. **Evaluate** whether a study conclusion is valid
5. **Compare** standard deviations visually

---

### Worked Example 1 — Multi-Concept Problem

**A survey of 200 students found a regression equation $\\hat{y} = 1.5x + 50$ relating weekly study hours ($x$) to test scores ($y$). The mean study time was 10 hours with SD 3.**

| Question | Work |
|----------|------|
| Predicted score at $x = 10$ | $1.5(10) + 50 = 65$ |
| Predicted score at $x = 16$ | $1.5(16) + 50 = 74$ |
| If scores multiplied by 2, new SD of study hours? | SD of $x$ is unchanged (transformation was on $y$, not $x$) |

### Worked Example 2 — Two-Way Table + Probability

**In a class: 15 males passed, 5 males failed, 20 females passed, 10 females failed.**

|  | Pass | Fail | Total |
|--|------|------|-------|
| Male | 15 | 5 | 20 |
| Female | 20 | 10 | 30 |
| Total | 35 | 15 | 50 |

| Question | Answer |
|----------|--------|
| Selected from everyone: passed? | $35/50 = 70\\%$ |
| Selected from the males: passed? | $15/20 = 75\\%$ |
| Selected from those who passed: male? | $15/35 ≈ 42.9\\%$ |
| Is gender associated with passing? | Males pass at $15/20 = 75\\%$, females at $20/30 ≈ 66.7\\%$; the rates differ, so the data suggest an association |`
    },
    {
      id: 'ds7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'The mean of a dataset is 50. If every value is multiplied by 3 and then 10 is added, the new mean is:',
            options: ['$160$', '$150$', '$180$', '$60$'],
            correctAnswer: 0,
            explanation: 'First multiply: mean $= 50 \\times 3 = 150$. Then add: mean $= 150 + 10 = 160$.'
          },
          {
            question: 'A regression equation for test scores is $\\hat{y} = 5.2x + 30$ where $x$ = hours studied. A student studies 10 hours and scores 90. The residual is:',
            options: ['$8$', '$-8$', '$82$', '$0$'],
            correctAnswer: 0,
            explanation: 'Predicted: $5.2(10) + 30 = 82$. Residual = actual − predicted $= 90 - 82 = 8$ (above the line).'
          },
          {
            question: 'A survey of 500 randomly selected adults found that 60% support a new policy. Which conclusion is most appropriate?',
            options: ['About 60% of all adults likely support the policy', 'Exactly 60% of all adults support the policy', 'The policy should be implemented', 'More research is needed before drawing any conclusion'],
            correctAnswer: 0,
            explanation: 'Random sample → can generalize to the population. "About 60%" is appropriate (with margin of error). We can\'t say "exactly" from a sample.'
          }
        ]
      }
    },
    {
      id: 'ds7-text2',
      type: 'text' as const,
      content: `### SAT Data & Statistics Cheat Sheet

| Topic | Key Formula / Concept |
|-------|----------------------|
| Mean | $\\bar{x} = \\frac{\\sum x}{n}$; Sum = Mean × Count |
| Median | Middle value; sort first |
| SD | Spread from mean; add → same; multiply → changes |
| Slope | Predicted $\\Delta y$ per unit $\\Delta x$ |
| Residual | Actual − Predicted |
| "NOT" questions | 1 minus the probability (or count the other outcomes) |
| Table, unrestricted | One cell over the grand total |
| Table, "from those who…" | Cell over that row/column total |
| Compare groups | Compare each group's rate |
| Causation | Only from randomized experiments |
| Generalization | Only from random sampling |

### Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| Using wrong denominator in two-way table | Re-read "of [group]" to find denominator |
| Saying association = causation | Use "associated with" unless random assignment |
| Using the grand total when the question says "from those who…" | The word after "from" names your denominator |
| Confusing "all values" with "the mean" | Adding 10 to every value ≠ adding 10 to just the mean |
| Ignoring "without replacement" | After removing one item, total decreases by 1 |`
    },
    {
      id: 'ds7-quiz2',
      type: 'multiple-choice' as const,
      content: '**SAT Challenge Round** 🎯',
      exercise: {
        questions: [
          {
            question: 'A data set of 100 values has $Q_1 = 30$, median $50$, $Q_3 = 70$, and largest value $125$. If the largest value is changed to $400$, which statistic must change?',
            options: ['The mean', 'The median', 'The IQR', 'The first quartile'],
            correctAnswer: 0,
            explanation: 'Only the largest value moves, and it stays the largest, so every value keeps its place in order: the median, both quartiles, and the IQR stay the same. The sum rises by $400 - 125 = 275$, so the mean rises by $275/100 = 2.75$. The mean uses every value; the median and quartiles use only positions.'
          },
          {
            question: 'The points on a scatterplot form a shapeless cloud with no upward or downward trend. What does this suggest?',
            options: ['Virtually no linear relationship', 'Strong positive relationship', 'Strong negative relationship', 'Perfect positive relationship'],
            correctAnswer: 0,
            explanation: 'A positive relationship would show the points rising from left to right, and a negative one would show them falling. A shapeless cloud with neither trend means there is virtually no linear relationship between the variables.'
          },
          {
            question: 'A weighted average of two groups is 72. Group A (20 people) averages 60, and Group B averages 80. How many people are in Group B?',
            options: ['$30$', '$20$', '$40$', '$25$'],
            correctAnswer: 0,
            explanation: '$\\frac{20(60) + n(80)}{20 + n} = 72$. $1200 + 80n = 72(20+n) = 1440 + 72n$. $8n = 240$. $n = 30$.'
          }
        ]
      }
    },
    {
      id: 'ds7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick Concept Check** 🔍\n\nMatch each scenario to the correct statistical concept.',
      exercise: {
        dropdowns: [
          { label: 'A dataset: {5, 5, 5, 5, 5}. What is the SD?', options: ['0', '5', '1', 'Cannot determine'] },
          { label: 'A scatterplot of shoe size vs. SAT score shows a shapeless cloud of points', options: ['No meaningful relationship', 'Strong positive relationship', 'Moderate relationship', 'Shoe size causes high scores'] },
          { label: 'Poll: 50% ± 4%. Can we conclude a majority?', options: ['No — interval includes values below 50%', 'Yes — 50% is a majority', 'Yes — the margin is only 4%', 'Need more data'] },
          { label: '"Students who eat breakfast scored 15 points higher on average"', options: ['Association, not necessarily causation', 'Breakfast causes higher scores', 'Higher scores cause breakfast eating', 'No relationship'] }
        ],
        correctAnswers: ['0', 'No meaningful relationship', 'No — interval includes values below 50%', 'Association, not necessarily causation'],
        hint1: 'All identical values → zero distance from the mean → SD = 0.',
        hint2: 'No upward or downward trend in the cloud means no linear pattern.',
        hint3: 'Confidence interval: $46\\%$ to $54\\%$. Since $46\\% < 50\\%$, we can\'t guarantee a majority.',
        explanation: 'Identical values → SD = 0. Shapeless cloud → no linear relationship. Interval includes below 50% → can\'t conclude majority. Observational → association only.'
      }
    },
    {
      id: 'ds7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

| Part | Core Skill |
|------|------------|
| 1 | Mean, median, mode — and how outliers affect them |
| 2 | Standard deviation — comparing spread, effect of transformations |
| 3 | Scatterplots — slope interpretation, residuals, describing association |
| 4 | Two-way tables — joint, marginal, conditional frequencies |
| 5 | Probability — complements and "selected from" table questions |
| 6 | Study design — causation vs. association, bias types |
| 7 | Review — combining all skills for SAT questions |

### Top 5 SAT Data & Statistics Rules

1. **Mean = Sum ÷ Count** — use Sum = Mean × Count to find missing values
2. **Association ≠ Causation** — only experiments prove cause
3. **Watch the denominator** — "of males" vs. "of all" changes the answer
4. **"NOT" questions** — the probability of NOT happening is 1 minus the probability of happening
5. **Slope in context** — "For each additional [x], [y] is predicted to [increase/decrease] by [slope]"`
    }
  ]
};
