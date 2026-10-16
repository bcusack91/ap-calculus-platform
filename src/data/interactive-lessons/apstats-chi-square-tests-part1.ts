export const apStatsChiSquarePart1Data = {
  topicSlug: 'chi-square-tests-apstats',
  sections: [
    {
      id: 'apstats-chisquaretests-p1-intro',
      type: 'text' as const,
      content: `# 📊 The Chi-Square Statistic and Its Distribution

**Part 1 of 7 — Measuring How Far Counts Are From Expected**

---

### Where Chi-Square Tests Fit

Chi-square tests answer questions about **two-way tables of categorical data**. On the AP exam there are two of them:

| Test | Question it answers |
|------|---------------------|
| **Homogeneity** | Is the distribution of one categorical variable the same in two or more populations (or treatment groups)? |
| **Independence** | In one population, are two categorical variables associated? |

Both tests use the same statistic, the same expected counts and the same degrees of freedom. This part builds those tools; Parts 2 and 3 cover each test.

> ℹ️ The goodness-of-fit test (one categorical variable against a claimed distribution) is not part of the current AP Statistics course.

---

### Expected Counts

If the null hypothesis is true, each cell of a two-way table has an **expected count**:

$$\\boxed{\\text{expected count} = \\frac{\\text{row total} \\times \\text{column total}}{\\text{table total}}}$$

**Example:** 200 students (100 in Grade 10, 100 in Grade 12) report how they get to school.

| | Bus | Car | Walk | Total |
|---|---:|---:|---:|---:|
| Grade 10 | 32 | 40 | 28 | 100 |
| Grade 12 | 18 | 50 | 32 | 100 |
| Total | 50 | 90 | 60 | 200 |

Expected count for Grade 10, Bus: $\\frac{100 \\times 50}{200} = 25$. The full set of expected counts is 25, 45, 30 in each row.

---

### The Chi-Square Statistic

$$\\chi^2 = \\sum \\frac{(\\text{observed} - \\text{expected})^2}{\\text{expected}}$$

The sum runs over **every cell** of the table. Each term measures the distance between an observed and an expected count **relative to the expected count**, so a gap of 7 matters more in a cell that expects 25 than in a cell that expects 250.

**For the example:**

$$\\chi^2 = \\frac{(32-25)^2}{25} + \\frac{(40-45)^2}{45} + \\frac{(28-30)^2}{30} + \\frac{(18-25)^2}{25} + \\frac{(50-45)^2}{45} + \\frac{(32-30)^2}{30}$$

$$= 1.960 + 0.556 + 0.133 + 1.960 + 0.556 + 0.133 \\approx 5.30$$

> 🔑 $\\chi^2 = 0$ only when every observed count equals its expected count. The farther the counts are from expected, the larger $\\chi^2$ gets.`
    },
    {
      id: 'apstats-chisquaretests-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**The Statistic Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does the chi-square statistic for a two-way table measure?',
            options: ['The gap between each observed count and the mean count of its row', 'Distance between observed and expected counts, scaled by expected', 'The number of cells whose observed and expected counts are equal', 'The degree to which the row variable causes the column variable'],
            correctAnswer: 1,
            explanation: 'Each term $(O-E)^2/E$ is a squared distance between observed and expected counts scaled by the expected count, and the statistic adds these over all cells. It does not compare counts to a row mean, it is not a tally of exact matches, and a chi-square test can never show causation by itself.'
          },
          {
            question: 'In a two-way table, a cell has row total 80 and column total 45, and the table total is 200. What is its expected count?',
            options: ['$40$', '$22.5$', '$18$', '$36$'],
            correctAnswer: 2,
            explanation: 'Expected count $= (80)(45)/200 = 3600/200 = 18$. Dividing by 100 instead of the table total gives 36; splitting a single margin in half gives 40 or 22.5, which ignores the other margin.'
          },
          {
            question: 'Every observed count in a two-way table equals its expected count. What is $\\chi^2$?',
            options: ['$0$', '$1$', '$df$', '$n$'],
            correctAnswer: 0,
            explanation: 'Each term has numerator $(O-E)^2 = 0$, so the sum is 0. A value of 1, the degrees of freedom or the sample size would each require some cells to differ from expected.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p1-distribution',
      type: 'text' as const,
      content: `## 📈 Chi-Square Distributions

When the null hypothesis is true, the chi-square statistic follows a **chi-square distribution** with

$$df = (\\text{number of rows} - 1)(\\text{number of columns} - 1)$$

For the transport example, $df = (2-1)(3-1) = 2$.

### Shape of the family

| Feature | What to know |
|---------|--------------|
| Values | Always **positive** (a sum of squares divided by positive counts) |
| Shape | **Skewed right** |
| Effect of $df$ | The skew becomes **less pronounced** as $df$ increases |

### Why the p-value is a right-tail area

Only **large** values of $\\chi^2$ are evidence against $H_0$: they mean the observed counts sit far from what $H_0$ predicts. So the p-value is always the area **to the right** of the observed $\\chi^2$ under the chi-square curve with the correct $df$.

For the example, $\\chi^2 \\approx 5.30$ with $df = 2$ gives a right-tail area of about 0.07 (from a table or technology). Parts 4 and 5 show how to read the table.`
    },
    {
      id: 'apstats-chisquaretests-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Distribution Check** 📈
      `,
      exercise: {
        questions: [
          {
            question: 'Which description fits every chi-square distribution?',
            options: ['Symmetric and centered at zero', 'Positive values only and skewed right', 'Skewed left with a long tail toward zero', 'Bell-shaped once the sample is large'],
            correctAnswer: 1,
            explanation: 'Chi-square statistics are sums of nonnegative terms, so the distributions take only positive values and are skewed right. They are never centered at zero or skewed left, and a large sample does not make the distribution normal; the shape depends on the degrees of freedom.'
          },
          {
            question: 'As the degrees of freedom increase, a chi-square density curve:',
            options: ['Becomes more strongly skewed to the right', 'Shifts left so its peak moves toward zero', 'Keeps exactly the same shape and peak', 'Becomes less strongly skewed to the right'],
            correctAnswer: 3,
            explanation: 'Within the chi-square family, the right skew becomes less pronounced as the degrees of freedom grow, and the curve spreads to the right. It does not become more skewed, move toward zero, or stay fixed.'
          },
          {
            question: 'Why is the p-value of a chi-square test always an area in the right tail?',
            options: ['Only large values of the statistic signal a mismatch with $H_0$', 'Observed counts can only ever be larger than the expected counts', 'The alternative hypothesis always claims some count is too large', 'Small values of the statistic mean that the sample was too small'],
            correctAnswer: 0,
            explanation: 'Squaring removes the sign of each gap, so any departure from the expected counts, too high or too low, makes the statistic larger. Observed counts can fall below expected, the alternative claims only a difference or association, and a small statistic means the data fit $H_0$ well, not that the sample was small.'
          }
        ]
      }
    },
    {
      id: 'apstats-chisquaretests-p1-input',
      type: 'input-boxes' as const,
      content: `
**Chi-Square Calculation** 🧮

A two-way table has row totals 60 and 90, column totals 50, 70 and 30, and a table total of 150.

**1)** Expected count for row 1, column 2 = ?

**2)** The observed count in that cell is 35. What is its contribution $(O-E)^2/E$ to $\\chi^2$?

**3)** Degrees of freedom for this table = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['28', '1.75', '2'],
        hint1: 'Expected count $= (60)(70)/150$.',
        hint2: '$(35-28)^2/28 = 49/28$.',
        hint3: 'The table has 2 rows and 3 columns: $(2-1)(3-1)$.',
        explanation: '1) $(60)(70)/150 = 28$. 2) $(35-28)^2/28 = 49/28 = 1.75$. 3) $df = (2-1)(3-1) = 2$.'
      }
    }
  ]
};
