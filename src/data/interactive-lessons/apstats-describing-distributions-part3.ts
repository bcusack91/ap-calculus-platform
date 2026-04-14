export const apStatsDistributionsPart3Data = {
  topicSlug: 'describing-distributions-apstats',
  sections: [
    {
      id: 'apstats-describing-distributions-p3-intro',
      type: 'text' as const,
      content: `# 🔢 Mean vs Median

**Part 3 of 7 — Choosing the Right Measure of Center**

---

### Mean ($\\bar{x}$)

$$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$$

| Property | Detail |
|----------|--------|
| Uses every data value | Yes — all values contribute |
| Sensitive to outliers | Yes — extreme values pull it |
| Best for | Symmetric distributions |
| Balance point | The mean is the "balance point" of the distribution |

---

### Median ($M$)

**Procedure:**
1. Order all data from smallest to largest
2. If $n$ is odd: median = middle value (position $\\frac{n+1}{2}$)
3. If $n$ is even: median = average of the two middle values

| Property | Detail |
|----------|--------|
| Uses every data value | No — only the position matters |
| Sensitive to outliers | No — **resistant** to extreme values |
| Best for | Skewed distributions or data with outliers |

---

### When to Use Each

| Situation | Use | Why |
|-----------|-----|-----|
| Symmetric data | Mean or Median | They\'re approximately equal |
| Right-skewed data | Median | Mean is inflated by the right tail |
| Left-skewed data | Median | Mean is deflated by the left tail |
| Data with outliers | Median | Mean is pulled by outliers |
| Need to calculate totals | Mean | $\\text{Total} = \\bar{x} \\times n$ |

---

### Worked Example

**Data: 2, 4, 6, 8, 100**

| Measure | Calculation | Result |
|---------|-------------|--------|
| Mean | $\\frac{2+4+6+8+100}{5} = \\frac{120}{5}$ | 24 |
| Median | Middle (3rd) value of ordered data | 6 |

The outlier 100 pulls the mean up to 24, but the median (6) better represents the typical value.

> 🔑 **AP Tip:** When asked "which measure of center is more appropriate," always explain WHY. Connect your answer to the shape of the distribution or the presence of outliers.

---

### Effect of Transformations

| Transformation | Effect on Mean | Effect on Median |
|----------------|:-:|:-:|
| Add constant $c$ to all values | Add $c$ | Add $c$ |
| Multiply all values by $k$ | Multiply by $k$ | Multiply by $k$ |
| Add an outlier | Pulled toward outlier | Minimal change |
| Remove an outlier | Moves back toward center | Minimal change |`
    },
    {
      id: 'apstats-describing-distributions-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mean vs Median Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which measure of center is resistant to outliers?',
            options: ['Mean', 'Median', 'Range', 'Standard deviation'],
            correctAnswer: 1,
            explanation: 'The median depends only on the middle position, so outliers don\'t affect it.'
          },
          {
            question: 'Data: 10, 12, 14, 16, 18. If 18 is changed to 180, which changes MORE?',
            options: ['Mean', 'Median', 'Both change equally', 'Neither changes'],
            correctAnswer: 0,
            explanation: 'Mean changes from 14 to 46.4. Median stays at 14 (still the 3rd value).'
          },
          {
            question: 'In a left-skewed distribution:',
            options: ['Mean > median', 'Mean = median', 'Mean < median', 'Cannot determine'],
            correctAnswer: 2,
            explanation: 'The mean is pulled toward the left tail, so mean < median in a left-skewed distribution.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Calculations** 🧮

**1)** Mean of: 8, 12, 16, 20, 24

**2)** Median of: 3, 7, 9, 15, 21, 25

**3)** Mean of: 1, 2, 3, 4, 100
      `,
      exercise: {
        inputs: [
          {
            label: 'Mean',
            correctAnswer: '16',
            explanation: 'Mean = (8+12+16+20+24)/5 = 80/5 = 16.'
          },
          {
            label: 'Median',
            correctAnswer: '12',
            explanation: 'With 6 values, median = average of 3rd and 4th: (9+15)/2 = 12.'
          },
          {
            label: 'Mean with outlier',
            correctAnswer: '22',
            explanation: 'Mean = (1+2+3+4+100)/5 = 110/5 = 22. The outlier 100 pulls the mean far above the median (3).'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choosing the Right Measure** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'dd3-p3-1',
            label: 'Household income data (which is typically right-skewed) should be summarized using the ___',
            options: ['Mean', 'Median', 'Mode'],
            correctIndex: 1,
            explanation: 'Income data is right-skewed (a few very high earners pull the tail). Median is more appropriate.'
          },
          {
            id: 'dd3-p3-2',
            label: 'If you add a constant to every data value, the mean ___',
            options: ['Stays the same', 'Increases by that constant', 'Doubles', 'Cannot be determined'],
            correctIndex: 1,
            explanation: 'Adding a constant shifts every value (and therefore the mean) by that constant.'
          },
          {
            id: 'dd3-p3-3',
            label: 'For symmetric data, mean and median are ___',
            options: ['Very different', 'Approximately equal', 'Both zero', 'Undefined'],
            correctIndex: 1,
            explanation: 'In symmetric distributions, the mean and median are at the same center point.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Mean vs Median** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The mean of 5 test scores is 80. What is the total of all scores?',
            options: ['80', '400', '16', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'Total = mean × n = 80 × 5 = 400.'
          },
          {
            question: 'Data: 5, 5, 5, 5, 5. The mean is:',
            options: ['0', '5', '25', '1'],
            correctAnswer: 1,
            explanation: 'Mean = 25/5 = 5. When all values are equal, the mean equals that value.'
          },
          {
            question: 'A news report says "the average household income is $95,000." A better summary might be:',
            options: ['The mean income', 'The median income (because income is right-skewed)', 'The mode income', 'The range of incomes'],
            correctAnswer: 1,
            explanation: 'Income is right-skewed, so the mean is inflated by very high earners. The median better represents the typical household.'
          },
          {
            question: 'Removing an outlier from a data set will:',
            options: ['Always increase the mean', 'Move the mean closer to the median', 'Not affect either measure', 'Change the median more than the mean'],
            correctAnswer: 1,
            explanation: 'Outliers pull the mean away from center. Removing them brings the mean back toward the median.'
          },
          {
            question: 'Data: 10, 20, 30, 40. The median is:',
            options: ['20', '25', '30', '35'],
            correctAnswer: 1,
            explanation: 'Even number of values: median = average of middle two = (20+30)/2 = 25.'
          },
          {
            question: 'Which is true about the mean?',
            options: ['It is always the middle value', 'It is the balance point of the distribution', 'It is always resistant to outliers', 'It equals the mode'],
            correctAnswer: 1,
            explanation: 'The mean is the balance point — the distribution balances at the mean like a seesaw.'
          },
          {
            question: 'If all values are doubled, the median:',
            options: ['Stays the same', 'Is doubled', 'Is halved', 'Cannot be determined'],
            correctAnswer: 1,
            explanation: 'Multiplying all values by a constant multiplies both the mean and median by that constant.'
          },
          {
            question: 'A data set has mean = 50 and median = 38. The distribution is likely:',
            options: ['Left-skewed', 'Symmetric', 'Right-skewed', 'Uniform'],
            correctAnswer: 2,
            explanation: 'Mean > median suggests right-skewness (the mean is pulled right by the tail).'
          },
          {
            question: 'The median of 100 values is at position:',
            options: ['50', '50.5 (average of 50th and 51st)', '51', '100'],
            correctAnswer: 1,
            explanation: 'For even $n$, median = average of values at positions $n/2$ and $n/2 + 1$ = 50th and 51st.'
          },
          {
            question: 'Which summary is most appropriate for: "Test scores: 45, 67, 72, 74, 76, 78, 80, 82"?',
            options: ['Mean (because data is roughly symmetric)', 'Median (because of the outlier 45)', 'Mode', 'Range'],
            correctAnswer: 1,
            explanation: 'The score 45 is an outlier pulling the mean down. The median better represents the typical score.'
          }
        ]
      }
    }
  ]
};
