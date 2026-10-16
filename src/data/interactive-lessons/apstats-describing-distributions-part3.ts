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

### Effect of Adding or Multiplying by a Constant

| Change | Effect on Mean | Effect on Median |
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
            options: ['Mean > median', 'Mean = median', 'Mean < median', 'Mean = 2 × median'],
            correctAnswer: 2,
            explanation: 'The mean is pulled toward the long left tail, so the mean is less than the median in a left-skewed distribution. Mean greater than median goes with right skew.'
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
            options: ['Mean', 'Median', 'Maximum'],
            correctIndex: 1,
            explanation: 'Income data is right-skewed (a few very high earners pull the tail). Median is more appropriate.'
          },
          {
            id: 'dd3-p3-2',
            label: 'If you add a constant to every data value, the mean ___',
            options: ['Stays the same', 'Increases by that constant', 'Is multiplied by that constant', 'Increases by half that constant'],
            correctIndex: 1,
            explanation: 'Adding a constant shifts every value (and therefore the mean) by that constant.'
          },
          {
            id: 'dd3-p3-3',
            label: 'For symmetric data, mean and median are ___',
            options: ['Very different', 'Approximately equal', 'Equal to the IQR', 'Equal to the range'],
            correctIndex: 1,
            explanation: 'In symmetric distributions, the mean and median are at the same center point. The IQR and range measure spread, not center.'
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
            options: ['80', '400', '16', '85'],
            correctAnswer: 1,
            explanation: 'Total = mean × n = 80 × 5 = 400. 16 divides the mean by 5 instead of multiplying, and 85 adds 5 to the mean.'
          },
          {
            question: 'Data: 5, 5, 5, 5, 5. The mean is:',
            options: ['0', '5', '25', '1'],
            correctAnswer: 1,
            explanation: 'Mean = 25/5 = 5. When all values are equal, the mean equals that value. 25 is the sum, and 0 is the standard deviation of these data.'
          },
          {
            question: 'A news report says "the average household income is \\$95,000." Which summary would better describe a typical household?',
            options: ['The mean income, since it uses every value', 'The median income, since income is right-skewed', 'The range, since it shows the spread', 'The maximum income, since it is largest'],
            correctAnswer: 1,
            explanation: 'Income is right-skewed, so the mean is inflated by very high earners. The median better represents the typical household.'
          },
          {
            question: 'Removing an outlier from a data set will:',
            options: ['Always increase the mean', 'Move the mean closer to the median', 'Not affect either measure', 'Change the median more than the mean'],
            correctAnswer: 1,
            explanation: 'Outliers pull the mean away from the center, so removing one brings the mean back toward the median. Removing a HIGH outlier lowers the mean, and the median changes very little.'
          },
          {
            question: 'Data: 10, 20, 30, 40. The median is:',
            options: ['20', '25', '30', '35'],
            correctAnswer: 1,
            explanation: 'With an even number of values, the median is the mean of the middle two: (20+30)/2 = 25. Picking only 20 or only 30 uses one of the middle values.'
          },
          {
            question: 'Which is true about the mean?',
            options: ['It is always the middle value', 'It is the balance point', 'It is resistant to outliers', 'It ignores the size of each value'],
            correctAnswer: 1,
            explanation: 'The mean is the balance point: the distribution balances at the mean like a seesaw. The middle value is the median, and because the mean uses the size of every value it is NOT resistant to outliers.'
          },
          {
            question: 'If all values are doubled, the median:',
            options: ['Stays the same', 'Is multiplied by 2', 'Is halved', 'Increases by 2'],
            correctAnswer: 1,
            explanation: 'Multiplying all values by a constant multiplies both the mean and the median by that constant. Adding 2 to each value is what would increase the median by 2.'
          },
          {
            question: 'A data set has mean = 50 and median = 38. The distribution is likely:',
            options: ['Left-skewed', 'Symmetric', 'Right-skewed', 'Uniform'],
            correctAnswer: 2,
            explanation: 'Mean > median suggests right skew: the mean is pulled toward a long tail of large values. Symmetric and uniform shapes have the mean near the median, and left skew puts the mean below it.'
          },
          {
            question: 'The median of 100 values is at position:',
            options: ['The 50th value alone', 'The mean of the 50th and 51st values', 'The 51st value alone', 'Halfway between the min and max'],
            correctAnswer: 1,
            explanation: 'For even $n$, the median is the mean of the values in positions $n/2$ and $n/2 + 1$, here the 50th and 51st. The mean of the smallest and largest values is the midpoint of the range, not the median.'
          },
          {
            question: 'Which summary is most appropriate for: "Test scores: 45, 67, 72, 74, 76, 78, 80, 82"?',
            options: ['The mean, since the scores are roughly symmetric', 'The median, since 45 is a low outlier', 'The mean, since it uses all eight scores', 'The range, since it shows the full spread'],
            correctAnswer: 1,
            explanation: 'With $Q_1 = 69.5$ and $Q_3 = 79$, the lower fence is $69.5 - 1.5(9.5) = 55.25$, so 45 is a low outlier that pulls the mean down. The median better represents the typical score, and the range measures spread, not center.'
          }
        ]
      }
    }
  ]
};
