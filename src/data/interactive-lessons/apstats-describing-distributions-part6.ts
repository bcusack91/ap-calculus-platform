export const apStatsDistributionsPart6Data = {
  topicSlug: 'describing-distributions-apstats',
  sections: [
    {
      id: 'apstats-describing-distributions-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Putting It All Together**

---

## Worked Example 1: Describing a Distribution

### Problem
A teacher records quiz scores for 20 students:
45, 52, 55, 60, 62, 65, 67, 68, 70, 72, 73, 75, 76, 78, 80, 82, 85, 88, 90, 95

Describe this distribution completely.

### Solution

**Shape:** The distribution is roughly symmetric with a slight left skew (the lower scores stretch a bit further from center).

**Center:** 
- Mean: $\\bar{x} = \\frac{\\sum x_i}{20} = \\frac{1458}{20} = 72.9$
- Median: Average of 10th and 11th values = $\\frac{72 + 73}{2} = 72.5$

**Spread:**
- Range: $95 - 45 = 50$
- IQR: $Q_1 = 63.5$, $Q_3 = 81$, IQR $= 81 - 63.5 = 17.5$

**Outliers:** Using the 1.5 × IQR rule:
- Lower fence: $63.5 - 1.5(17.5) = 37.25$ → no values below this
- Upper fence: $81 + 1.5(17.5) = 107.25$ → no values above this
- **No outliers**

> **AP-Style Response:** "The distribution of quiz scores is roughly symmetric and unimodal with a center (median) of 72.5 points. The scores have moderate spread with an IQR of 17.5 points and a range of 50 points. There are no apparent outliers."

---

## Worked Example 2: Normal Distribution Application

### Problem
Heights of adult women are normally distributed with $\\mu = 64.5$ inches and $\\sigma = 2.5$ inches.

**(a)** What percentage of women are taller than 69.5 inches?

**(b)** What height corresponds to the 16th percentile?

### Solution

**(a)** $z = \\frac{69.5 - 64.5}{2.5} = \\frac{5}{2.5} = 2.0$

69.5 inches is exactly $\\mu + 2\\sigma$. By the Empirical Rule, 95% of data falls within $\\mu \\pm 2\\sigma$, so 5% is outside this range, and 2.5% is above $\\mu + 2\\sigma$.

**Answer: About 2.5% of women are taller than 69.5 inches.**

**(b)** The 16th percentile means 16% of data is below this value. By the Empirical Rule:
- 50% is below the mean
- 34% is between $\\mu - \\sigma$ and $\\mu$ (half of 68%)
- So 16% is below $\\mu - \\sigma$

$\\mu - \\sigma = 64.5 - 2.5 = 62.0$ inches

**Answer: The 16th percentile is approximately 62.0 inches.**

---

### 1.5 × IQR Rule for Outliers

$$\\text{Outlier if } x < Q_1 - 1.5 \\times \\text{IQR} \\text{ or } x > Q_3 + 1.5 \\times \\text{IQR}$$

| Term | Formula |
|------|---------|
| Lower fence | $Q_1 - 1.5 \\times \\text{IQR}$ |
| Upper fence | $Q_3 + 1.5 \\times \\text{IQR}$ |
| IQR | $Q_3 - Q_1$ |

> 🔑 **AP Tip:** On free-response questions, SHOW the fence calculations when identifying outliers. Don\'t just say "there are outliers" — prove it mathematically.`
    },
    {
      id: 'apstats-describing-distributions-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Workshop Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\mu = 75$, $\\sigma = 8$. What percentage of data is below 59?',
            options: ['16%', '5%', '2.5%', '0.15%'],
            correctAnswer: 2,
            explanation: '$59 = 75 - 2(8) = \\mu - 2\\sigma$. Below $\\mu - 2\\sigma$: $(100\\% - 95\\%)/2 = 2.5\\%$.'
          },
          {
            question: 'Data: 12, 15, 18, 20, 22, 25, 28, 90. Which measure of center is more appropriate?',
            options: ['Mean (because the data has many values)', 'Median (because 90 is a likely outlier)', 'Mode (because it is always best)', 'Range'],
            correctAnswer: 1,
            explanation: 'The value 90 is far from the cluster. It would inflate the mean, so the median is more appropriate.'
          },
          {
            question: '$Q_1 = 20$, $Q_3 = 40$, IQR = 20. The upper fence for outliers is:',
            options: ['50', '60', '70', '80'],
            correctAnswer: 2,
            explanation: 'Upper fence = $Q_3 + 1.5 \\times \\text{IQR} = 40 + 1.5(20) = 40 + 30 = 70$.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Calculations** 🧮

**1)** $\\mu = 100$, $\\sigma = 15$. What percentage of data is between 85 and 115? (answer as whole number)

**2)** $Q_1 = 30$, $Q_3 = 50$. What is the IQR?

**3)** Using the values above, what is the lower fence for outliers?
      `,
      exercise: {
        inputs: [
          {
            label: 'Percentage in 1 SD',
            correctAnswer: '68',
            explanation: '$85 = 100 - 15 = \\mu - \\sigma$ and $115 = 100 + 15 = \\mu + \\sigma$. By the Empirical Rule, 68%.'
          },
          {
            label: 'IQR',
            correctAnswer: '20',
            explanation: 'IQR = $Q_3 - Q_1 = 50 - 30 = 20$.'
          },
          {
            label: 'Lower fence',
            correctAnswer: '0',
            explanation: 'Lower fence = $Q_1 - 1.5 \\times \\text{IQR} = 30 - 1.5(20) = 30 - 30 = 0$.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Decision Making** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'dd6-p6-1',
            label: 'For symmetric data, mean and median are ___',
            options: ['Very different', 'Approximately equal', 'Both zero', 'Undefined'],
            correctIndex: 1,
            explanation: 'In symmetric distributions, the mean and median coincide at the center.'
          },
          {
            id: 'dd6-p6-2',
            label: 'The 68-95-99.7 rule applies ONLY to ___ distributions',
            options: ['All', 'Normal (bell-shaped)', 'Skewed', 'Uniform'],
            correctIndex: 1,
            explanation: 'The Empirical Rule is specific to normal distributions.'
          },
          {
            id: 'dd6-p6-3',
            label: 'A value is an outlier if it falls ___ the fences',
            options: ['Inside', 'Outside (beyond)', 'At', 'Near'],
            correctIndex: 1,
            explanation: 'Outliers are defined as values beyond the lower fence ($Q_1 - 1.5 \\times \\text{IQR}$) or upper fence ($Q_3 + 1.5 \\times \\text{IQR}$).'
          },
          {
            id: 'dd6-p6-4',
            label: 'When the mean is much larger than the median, the distribution is likely ___',
            options: ['Left-skewed', 'Symmetric', 'Right-skewed'],
            correctIndex: 2,
            explanation: 'Mean > median suggests the mean is pulled right by a right tail → right-skewed.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A complete distribution description includes:',
            options: ['Shape only', 'Shape and center', 'Shape, center, spread', 'Shape, center, spread, and outliers'],
            correctAnswer: 3,
            explanation: 'AP rubrics require all four elements for full credit.'
          },
          {
            question: '$\\mu = 500$, $\\sigma = 100$. The 84th percentile is approximately:',
            options: ['400', '500', '600', '700'],
            correctAnswer: 2,
            explanation: '84th percentile = $\\mu + 1\\sigma$ (since 50% + 34% = 84%). $500 + 100 = 600$.'
          },
          {
            question: '$Q_1 = 10$, $Q_3 = 30$, IQR = 20. Is 65 an outlier?',
            options: ['Yes — it is above the upper fence of 60', 'No — it is within the fences', 'Cannot determine', 'Only if the data is normal'],
            correctAnswer: 0,
            explanation: 'Upper fence = $30 + 1.5(20) = 60$. Since $65 > 60$, it IS an outlier.'
          },
          {
            question: 'A boxplot shows the median closer to Q3 than Q1. The distribution is likely:',
            options: ['Right-skewed', 'Left-skewed', 'Symmetric', 'Uniform'],
            correctAnswer: 1,
            explanation: 'When the median is closer to Q3, the left whisker is longer → left-skewed.'
          },
          {
            question: 'Data: 1, 2, 3, 4, 5, 6, 7, 8, 9, 100. The best numerical summary is:',
            options: ['Mean and SD', 'Median and IQR', 'Mode and range', 'Mean and range'],
            correctAnswer: 1,
            explanation: 'The outlier 100 makes the data right-skewed. Median and IQR are resistant to the outlier.'
          },
          {
            question: '$\\mu = 70$, $\\sigma = 5$. What percentage is between 60 and 80?',
            options: ['68%', '95%', '99.7%', '50%'],
            correctAnswer: 1,
            explanation: '$60 = \\mu - 2\\sigma$ and $80 = \\mu + 2\\sigma$. By the Empirical Rule, 95%.'
          },
          {
            question: 'Two students from different classes want to compare test scores. The best approach is to:',
            options: ['Compare raw scores', 'Compare z-scores', 'Compare medians', 'Compare ranges'],
            correctAnswer: 1,
            explanation: 'Z-scores standardize values to the same scale, allowing fair comparison across different distributions.'
          },
          {
            question: 'A histogram has a tall bar on the left and gradually shorter bars going right. This is:',
            options: ['Symmetric', 'Left-skewed', 'Right-skewed', 'Uniform'],
            correctAnswer: 2,
            explanation: 'Most data is on the left with a tail extending right → right-skewed.'
          },
          {
            question: 'Which graph would best display 200 exam scores?',
            options: ['Dotplot', 'Histogram', 'Pie chart', 'Bar chart'],
            correctAnswer: 1,
            explanation: 'Histograms work well for large data sets. Dotplots become cluttered with 200 values.'
          },
          {
            question: 'If you multiply every value by $-1$:',
            options: ['The SD stays the same', 'The SD becomes negative', 'The SD doubles', 'The shape reverses (left-skew becomes right-skew)'],
            correctAnswer: 3,
            explanation: 'Multiplying by $-1$ flips all values, reversing the direction of skewness. SD stays the same ($|-1| = 1$).'
          }
        ]
      }
    }
  ]
};
