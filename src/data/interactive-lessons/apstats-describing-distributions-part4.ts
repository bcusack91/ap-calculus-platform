export const apStatsDistributionsPart4Data = {
  topicSlug: 'describing-distributions-apstats',
  sections: [
    {
      id: 'apstats-describing-distributions-p4-intro',
      type: 'text' as const,
      content: `# 📈 Standard Deviation

**Part 4 of 7 — Measuring Spread from the Mean**

---

### Variance and Standard Deviation

The **standard deviation** ($s$) measures the typical distance of data values from the mean.

$$s = \\sqrt{\\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}}$$

| Term | Definition |
|------|-----------|
| $x_i - \\bar{x}$ | **Deviation** — how far each value is from the mean |
| $(x_i - \\bar{x})^2$ | **Squared deviation** — removes negatives |
| $\\frac{\\sum(x_i - \\bar{x})^2}{n-1}$ | **Variance** ($s^2$) — average squared deviation |
| $s = \\sqrt{s^2}$ | **Standard deviation** — back in original units |

> ⚠️ **Why $n - 1$?** We divide by $n - 1$ (not $n$) because the sample mean $\\bar{x}$ is estimated from the data. This gives a better estimate of the population SD. The value $n - 1$ is called the **degrees of freedom**.

---

### Properties of Standard Deviation

| Property | Detail |
|----------|--------|
| $s \\geq 0$ always | Standard deviation can never be negative |
| $s = 0$ | Only when ALL values are identical |
| Units | Same units as the original data |
| Sensitive to outliers | Yes — outliers inflate $s$ |
| Affected by transformations | Adding $c$: $s$ unchanged. Multiplying by $k$: $s$ multiplied by $|k|$ |

---

### Worked Example

**Data: 2, 4, 6, 8, 10. Find $s$.**

**Step 1:** Mean $\\bar{x} = \\frac{2+4+6+8+10}{5} = \\frac{30}{5} = 6$

**Step 2:** Deviations and squared deviations:

| $x_i$ | $x_i - \\bar{x}$ | $(x_i - \\bar{x})^2$ |
|:------:|:---------:|:-------------:|
| 2 | $-4$ | 16 |
| 4 | $-2$ | 4 |
| 6 | 0 | 0 |
| 8 | 2 | 4 |
| 10 | 4 | 16 |
| | **Sum** | **40** |

**Step 3:** Variance: $s^2 = \\frac{40}{5-1} = \\frac{40}{4} = 10$

**Step 4:** Standard deviation: $s = \\sqrt{10} \\approx 3.16$

> **Interpretation:** The values are typically about 3.16 units from the mean of 6.

---

### Effect of Transformations on $s$

| Transformation | Effect on $s$ | Example |
|----------------|:---:|---------|
| Add constant $c$ | $s$ unchanged | Data + 10: same spread |
| Multiply by $k$ | $s \\times |k|$ | Data × 2: SD doubles |

> 🔑 **AP Tip:** Adding a constant shifts all values equally, so the spread doesn\'t change. Multiplying stretches or compresses the data, changing the spread.`
    },
    {
      id: 'apstats-describing-distributions-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Standard Deviation Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If all values in a data set are identical, the standard deviation is:',
            options: ['1', 'The value itself', '0', 'Undefined'],
            correctAnswer: 2,
            explanation: 'No variation = no deviations from the mean = $s = 0$.'
          },
          {
            question: 'Adding 10 to every value in a data set:',
            options: ['Increases $s$ by 10', 'Doubles $s$', 'Does not change $s$', 'Makes $s = 10$'],
            correctAnswer: 2,
            explanation: 'Adding a constant shifts all values equally, so the spread (and $s$) stays the same.'
          },
          {
            question: 'We divide by $n - 1$ instead of $n$ because:',
            options: ['It makes the calculation easier', 'The sample SD better estimates the population SD', '$n$ is always odd', 'The formula requires it to be positive'],
            correctAnswer: 1,
            explanation: 'Dividing by $n - 1$ corrects for the fact that we estimated $\\mu$ with $\\bar{x}$, giving an unbiased estimate of $\\sigma^2$.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p4-input',
      type: 'input-boxes' as const,
      content: `
**SD Calculations** 🧮

**1)** Data: 3, 5, 7. Mean = 5. What is the variance $s^2$? (Hint: sum of squared deviations ÷ ($n - 1$))

**2)** What is the standard deviation $s$ of the data above?

**3)** Data: 10, 10, 10. Standard deviation $s$ = ?
      `,
      exercise: {
        inputs: [
          {
            label: 'Variance',
            correctAnswer: '4',
            explanation: 'Deviations: $-2, 0, 2$. Squared: $4, 0, 4$. Sum = 8. Variance = $8/(3-1) = 4$.'
          },
          {
            label: 'Standard deviation',
            correctAnswer: '2',
            explanation: '$s = \\sqrt{s^2} = \\sqrt{4} = 2$.'
          },
          {
            label: 'SD of identical values',
            correctAnswer: '0',
            explanation: 'All values are 10, so every deviation is 0. $s = 0$.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**SD Properties** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'dd4-p4-1',
            label: 'Standard deviation can never be ___',
            options: ['Zero', 'Negative', 'Greater than the range', 'Large'],
            correctIndex: 1,
            explanation: 'Since we take the square root of squared values, $s \\geq 0$ always.'
          },
          {
            id: 'dd4-p4-2',
            label: 'Multiplying every data value by 3 will ___ the standard deviation',
            options: ['Triple it', 'Not change it', 'Add 3 to it', 'Square it'],
            correctIndex: 0,
            explanation: 'Multiplying by $k$ multiplies SD by $|k|$. So $\\times 3 \\Rightarrow s \\times 3$.'
          },
          {
            id: 'dd4-p4-3',
            label: 'A data set with a large standard deviation has values that are ___',
            options: ['All close to the mean', 'Widely spread from the mean', 'All positive', 'Normally distributed'],
            correctIndex: 1,
            explanation: 'Large $s$ means values are typically far from the mean (high variability).'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Standard Deviation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Variance is:',
            options: ['The square root of the standard deviation', 'The average squared deviation from the mean', 'The range divided by 2', 'The mean minus the median'],
            correctAnswer: 1,
            explanation: 'Variance $s^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n-1}$, the average squared deviation.'
          },
          {
            question: 'The standard deviation of {1, 5, 9} vs {4, 5, 6}: which set has the larger $s$?',
            options: ['{1, 5, 9}', '{4, 5, 6}', 'They are equal', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '{1, 5, 9} has deviations of $-4, 0, 4$ (more spread). {4, 5, 6} has deviations of $-1, 0, 1$ (less spread).'
          },
          {
            question: 'Standard deviation has the same ___ as the original data.',
            options: ['Mean', 'Units', 'Shape', 'Sample size'],
            correctAnswer: 1,
            explanation: 'Unlike variance (which is in squared units), SD is in the same units as the data.'
          },
          {
            question: 'Which data set has $s = 0$?',
            options: ['{1, 2, 3}', '{0, 0, 0}', '{-1, 0, 1}', '{1, 1, 2}'],
            correctAnswer: 1,
            explanation: '$s = 0$ only when all values are identical. {0, 0, 0} has zero variation.'
          },
          {
            question: 'If test scores have $\\bar{x} = 75$ and $s = 8$, a score of 75 is:',
            options: ['1 SD above the mean', 'At the mean (0 SD away)', '1 SD below the mean', 'An outlier'],
            correctAnswer: 1,
            explanation: 'A score equal to the mean is 0 standard deviations away.'
          },
          {
            question: 'Degrees of freedom for the sample SD with $n = 20$ is:',
            options: ['20', '19', '21', '10'],
            correctAnswer: 1,
            explanation: 'Degrees of freedom = $n - 1 = 20 - 1 = 19$.'
          },
          {
            question: 'Which is NOT true about standard deviation?',
            options: ['It measures spread', 'It is affected by outliers', 'It can be negative', 'It is in the same units as the data'],
            correctAnswer: 2,
            explanation: 'Standard deviation can never be negative since it is a square root of non-negative values.'
          },
          {
            question: 'Two data sets have the same mean but different SDs. The set with smaller $s$:',
            options: ['Has values more tightly clustered around the mean', 'Has a higher median', 'Has more data points', 'Is always symmetric'],
            correctAnswer: 0,
            explanation: 'Smaller SD means less variability — values are closer to the mean.'
          },
          {
            question: 'Converting temperature from Celsius to Fahrenheit ($F = 1.8C + 32$) will:',
            options: ['Not change the SD', 'Multiply the SD by 1.8', 'Add 32 to the SD', 'Multiply the SD by 1.8 and add 32'],
            correctAnswer: 1,
            explanation: 'Adding 32 doesn\'t change spread. Multiplying by 1.8 multiplies SD by 1.8.'
          },
          {
            question: 'The deviations from the mean always sum to:',
            options: ['The mean', '1', '0', 'The standard deviation'],
            correctAnswer: 2,
            explanation: '$\\sum(x_i - \\bar{x}) = 0$ always. Positive and negative deviations cancel out.'
          }
        ]
      }
    }
  ]
};
