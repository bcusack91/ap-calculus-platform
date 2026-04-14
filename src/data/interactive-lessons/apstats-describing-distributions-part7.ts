export const apStatsDistributionsPart7Data = {
  topicSlug: 'describing-distributions-apstats',
  sections: [
    {
      id: 'apstats-describing-distributions-p7-intro',
      type: 'text' as const,
      content: `# 🏆 Review & Applications

**Part 7 of 7 — Comprehensive Review**

---

## Complete Summary

### Describing Distributions Checklist

| Feature | Measures | Notes |
|---------|----------|-------|
| **Shape** | Symmetric, left/right-skewed, unimodal/bimodal | Direction of TAIL = direction of skew |
| **Center** | Mean ($\\bar{x}$), Median ($M$) | Symmetric → mean; Skewed → median |
| **Spread** | Range, IQR, SD ($s$) | Symmetric → SD; Skewed → IQR |
| **Outliers** | 1.5 × IQR rule | Always check and mention |

---

### Formula Reference

| Formula | Expression |
|---------|-----------|
| Mean | $\\bar{x} = \\frac{\\sum x_i}{n}$ |
| Median position | $(n+1)/2$ |
| Range | max $-$ min |
| IQR | $Q_3 - Q_1$ |
| Variance | $s^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n-1}$ |
| Standard Deviation | $s = \\sqrt{s^2}$ |
| Z-score | $z = \\frac{x - \\mu}{\\sigma}$ |
| Lower fence | $Q_1 - 1.5 \\times \\text{IQR}$ |
| Upper fence | $Q_3 + 1.5 \\times \\text{IQR}$ |

---

### Mean vs Median Decision Guide

| If... | Then use... | Because... |
|-------|-----------|-----------|
| Data is symmetric, no outliers | Mean and SD | Mean uses all values; SD pairs with mean |
| Data is skewed | Median and IQR | Both are resistant to skewness |
| Data has outliers | Median and IQR | Both are resistant to outliers |
| You need to find totals | Mean | Total = $\\bar{x} \\times n$ |

---

### The Empirical Rule (Normal Distributions Only)

| Range | Percentage | Above upper | Below lower |
|:-----:|:----------:|:-----------:|:-----------:|
| $\\mu \\pm 1\\sigma$ | 68% | 16% | 16% |
| $\\mu \\pm 2\\sigma$ | 95% | 2.5% | 2.5% |
| $\\mu \\pm 3\\sigma$ | 99.7% | 0.15% | 0.15% |

---

### Key Concepts from Every Part

| Part | Topic | Essential Takeaway |
|:---:|-------|-------------------|
| 1 | Shape, Center, Spread | Always describe all three + outliers |
| 2 | Histograms & Dotplots | Visual displays for quantitative data |
| 3 | Mean vs Median | Skewed → median; Symmetric → mean |
| 4 | Standard Deviation | Measures typical distance from mean; $s \\geq 0$ |
| 5 | Normal Distribution | 68-95-99.7 rule; z-scores standardize |
| 6 | Problem-Solving | Combine concepts; show work; use context |

---

### Transformations Summary

| Operation | Effect on Center | Effect on Spread |
|-----------|:---:|:---:|
| Add $c$ | Add $c$ | No change |
| Multiply by $k$ | Multiply by $k$ | Multiply by $|k|$ |

> 🔑 **Final AP Tip:** On every free-response question, use CONTEXT. Don\'t just say "the distribution is right-skewed with a center of 72." Say "the distribution of quiz scores is right-skewed with a median of 72 points."`
    },
    {
      id: 'apstats-describing-distributions-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The three main features used to describe a distribution are:',
            options: ['Mean, median, mode', 'Shape, center, spread', 'Min, max, range', 'Q1, median, Q3'],
            correctAnswer: 1,
            explanation: 'Shape, center, spread (plus outliers) are the four things to mention when describing a distribution.'
          },
          {
            question: 'IQR is calculated as:',
            options: ['Max − Min', '$Q_3 - Q_1$', 'Mean − Median', '$\\sigma^2$'],
            correctAnswer: 1,
            explanation: 'IQR = $Q_3 - Q_1$, the range of the middle 50% of data.'
          },
          {
            question: 'The median is also called the:',
            options: ['25th percentile', '50th percentile', '75th percentile', '100th percentile'],
            correctAnswer: 1,
            explanation: 'The median divides the data in half — 50% above, 50% below.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Formula Application** 🧮

**1)** Data: 10, 15, 20, 25, 30. What is the mean?

**2)** $\\mu = 80$, $\\sigma = 6$. What z-score corresponds to $x = 92$?

**3)** $Q_1 = 25$, $Q_3 = 45$. What is the upper fence for outliers?
      `,
      exercise: {
        inputs: [
          {
            label: 'Mean',
            correctAnswer: '20',
            explanation: 'Mean = $(10+15+20+25+30)/5 = 100/5 = 20$.'
          },
          {
            label: 'z-score',
            correctAnswer: '2',
            explanation: '$z = \\frac{92 - 80}{6} = \\frac{12}{6} = 2$.'
          },
          {
            label: 'Upper fence',
            correctAnswer: '75',
            explanation: 'IQR = $45 - 25 = 20$. Upper fence = $45 + 1.5(20) = 45 + 30 = 75$.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Connections** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'dd7-p7-1',
            label: 'For right-skewed data, the best summary is ___',
            options: ['Mean and SD', 'Median and IQR', 'Mode and range'],
            correctIndex: 1,
            explanation: 'Both median and IQR are resistant to the skewness and outliers in the right tail.'
          },
          {
            id: 'dd7-p7-2',
            label: 'Adding 5 to every value changes the ___ but not the ___',
            options: ['Mean; SD', 'SD; mean', 'Shape; center', 'Range; IQR'],
            correctIndex: 0,
            explanation: 'Adding a constant shifts the center (mean, median) but doesn\'t change spread (SD, IQR, range).'
          },
          {
            id: 'dd7-p7-3',
            label: 'The Empirical Rule applies to ___ distributions only',
            options: ['All', 'Normal (bell-shaped)', 'Skewed', 'Uniform'],
            correctIndex: 1,
            explanation: 'The 68-95-99.7 rule is specific to normal distributions.'
          },
          {
            id: 'dd7-p7-4',
            label: 'A z-score of 0 means the value is ___',
            options: ['An outlier', 'At the mean', 'At the minimum', 'Missing'],
            correctIndex: 1,
            explanation: '$z = 0$ when $x = \\mu$, meaning the value equals the mean.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exam — Describing Distributions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which measure of spread is resistant to outliers?',
            options: ['Range', 'Standard deviation', 'IQR', 'Variance'],
            correctAnswer: 2,
            explanation: 'IQR only uses Q1 and Q3 (middle 50%), so outliers don\'t affect it.'
          },
          {
            question: 'A normal distribution with $\\mu = 0$ and $\\sigma = 1$ is called:',
            options: ['A uniform distribution', 'The standard normal distribution', 'A skewed distribution', 'A t-distribution'],
            correctAnswer: 1,
            explanation: 'The standard normal distribution has $\\mu = 0$ and $\\sigma = 1$, written $Z \\sim N(0, 1)$.'
          },
          {
            question: '$\\mu = 60$, $\\sigma = 4$. What percentage of data is between 52 and 68?',
            options: ['68%', '95%', '99.7%', '50%'],
            correctAnswer: 1,
            explanation: '$52 = 60 - 2(4)$ and $68 = 60 + 2(4)$. This is $\\mu \\pm 2\\sigma = 95\\%$.'
          },
          {
            question: 'Data: 3, 5, 5, 7, 9, 9, 11. The mode is:',
            options: ['5 only', '9 only', '5 and 9 (bimodal)', '7'],
            correctAnswer: 2,
            explanation: 'Both 5 and 9 appear twice (most frequently). The data is bimodal.'
          },
          {
            question: 'An AP Statistics student writes: "The data is right-skewed." What is missing?',
            options: ['Nothing — this is complete', 'Context — should mention what the data represents', 'A formula', 'A z-score'],
            correctAnswer: 1,
            explanation: 'AP rubrics require context: "The distribution of test scores is right-skewed."'
          },
          {
            question: 'If every value in a data set is multiplied by 3:',
            options: ['SD is multiplied by 3', 'SD is multiplied by 9', 'SD stays the same', 'SD is divided by 3'],
            correctAnswer: 0,
            explanation: 'Multiplying by $k$ multiplies SD by $|k|$. So $\\times 3$ means SD $\\times 3$.'
          },
          {
            question: 'Which graph is best for comparing two distributions side-by-side?',
            options: ['Pie chart', 'Back-to-back stemplot', 'Single histogram', 'Dotplot'],
            correctAnswer: 1,
            explanation: 'Back-to-back stemplots display two distributions sharing the same stems for easy comparison.'
          },
          {
            question: '$z = 2.5$ is more unusual than $z = 1.8$ because:',
            options: ['2.5 > 1.8', 'It is farther from the mean in standard deviation units', 'It is negative', 'It corresponds to a higher raw score'],
            correctAnswer: 1,
            explanation: 'Z-scores measure distance from the mean in SD units. Larger $|z|$ = more unusual.'
          },
          {
            question: 'The five-number summary consists of:',
            options: ['Mean, median, mode, range, SD', 'Min, Q1, median, Q3, max', 'Q1, Q2, Q3, IQR, range', 'Mean, Q1, Q2, Q3, max'],
            correctAnswer: 1,
            explanation: 'The five-number summary: minimum, Q1, median (Q2), Q3, maximum.'
          },
          {
            question: 'On the AP exam, when describing distributions you should ALWAYS:',
            options: ['Calculate the z-score', 'State shape, center, spread, and outliers in context', 'Draw a boxplot', 'Use the Empirical Rule'],
            correctAnswer: 1,
            explanation: 'Every distribution description needs shape, center, spread, outliers, and context for full AP credit.'
          }
        ]
      }
    }
  ]
};
