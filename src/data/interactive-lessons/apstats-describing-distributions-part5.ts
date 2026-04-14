export const apStatsDistributionsPart5Data = {
  topicSlug: 'describing-distributions-apstats',
  sections: [
    {
      id: 'apstats-describing-distributions-p5-intro',
      type: 'text' as const,
      content: `# 🧮 Normal Distribution & Empirical Rule

**Part 5 of 7 — The Bell Curve**

---

### The Normal Distribution

A **normal distribution** is a symmetric, bell-shaped curve completely described by two parameters:

| Parameter | Symbol | Role |
|-----------|:------:|------|
| Mean | $\\mu$ | Center of the distribution |
| Standard Deviation | $\\sigma$ | Controls the width/spread |

**Notation:** $X \\sim N(\\mu, \\sigma)$

---

### The Empirical Rule (68-95-99.7 Rule)

For any normal distribution:

| Range | Percentage |
|:-----:|:----------:|
| $\\mu \\pm 1\\sigma$ | **68%** of data |
| $\\mu \\pm 2\\sigma$ | **95%** of data |
| $\\mu \\pm 3\\sigma$ | **99.7%** of data |

---

### Worked Example 1: Empirical Rule

**IQ scores: $\\mu = 100$, $\\sigma = 15$**

| Range | Interval | Percentage |
|-------|:--------:|:----------:|
| $\\mu \\pm 1\\sigma$ | $100 \\pm 15 = [85, 115]$ | 68% |
| $\\mu \\pm 2\\sigma$ | $100 \\pm 30 = [70, 130]$ | 95% |
| $\\mu \\pm 3\\sigma$ | $100 \\pm 45 = [55, 145]$ | 99.7% |

So about 68% of IQ scores fall between 85 and 115.

---

### Z-Scores

A **z-score** standardizes any value by telling how many SDs it is from the mean:

$$z = \\frac{x - \\mu}{\\sigma}$$

| z-score | Meaning |
|:-------:|---------|
| $z = 0$ | At the mean |
| $z = 1$ | 1 SD above the mean |
| $z = -2$ | 2 SDs below the mean |

> 🔑 **Key Insight:** Z-scores let you compare values from DIFFERENT distributions. A student with $z = 1.5$ on a math test did relatively better than a student with $z = 0.8$ on an English test.

---

### Worked Example 2: Z-Scores

**SAT Math: $\\mu = 500$, $\\sigma = 100$. A student scores 680.**

$$z = \\frac{680 - 500}{100} = \\frac{180}{100} = 1.8$$

This score is 1.8 standard deviations above the mean.

---

### Using the Normal Distribution

To find the percentage of values below a value $x$:
1. Calculate $z = \\frac{x - \\mu}{\\sigma}$
2. Use the **z-table** (or calculator: normalcdf) to find the area

| Calculator Command | Purpose |
|--------------------|---------|
| normalcdf(lower, upper, $\\mu$, $\\sigma$) | Area between two values |
| invNorm(area, $\\mu$, $\\sigma$) | Value at a given percentile |

> ⚠️ **AP Tip:** Always show the z-score calculation AND draw a sketch of the normal curve with the area shaded.`
    },
    {
      id: 'apstats-describing-distributions-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Normal Distribution Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '95% of data in a normal distribution falls within:',
            options: ['1 standard deviation of the mean', '2 standard deviations of the mean', '3 standard deviations of the mean', 'The IQR'],
            correctAnswer: 1,
            explanation: 'The Empirical Rule: 68% within 1 SD, 95% within 2 SDs, 99.7% within 3 SDs.'
          },
          {
            question: 'A z-score of $-1.5$ means:',
            options: ['1.5 SDs above the mean', '1.5 SDs below the mean', 'The value is negative', 'The score is invalid'],
            correctAnswer: 1,
            explanation: 'Negative z = below the mean. $z = -1.5$ means 1.5 standard deviations below $\\mu$.'
          },
          {
            question: 'If $\\mu = 50$ and $\\sigma = 5$, what percentage of data is between 40 and 60?',
            options: ['68%', '95%', '99.7%', '50%'],
            correctAnswer: 1,
            explanation: '$40 = 50 - 2(5)$ and $60 = 50 + 2(5)$, so this is $\\mu \\pm 2\\sigma$ = 95%.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Z-Score Calculations** 🧮

**Distribution: $\\mu = 200$, $\\sigma = 25$**

**1)** What is the z-score for $x = 250$?

**2)** What value has $z = -1$?

**3)** The 68% interval is $[\\text{lower}, \\text{upper}]$. What is the lower bound?
      `,
      exercise: {
        inputs: [
          {
            label: 'z-score for 250',
            correctAnswer: '2',
            explanation: '$z = \\frac{250 - 200}{25} = \\frac{50}{25} = 2$.'
          },
          {
            label: 'Value at z = -1',
            correctAnswer: '175',
            explanation: '$x = \\mu + z\\sigma = 200 + (-1)(25) = 175$.'
          },
          {
            label: 'Lower bound of 68%',
            correctAnswer: '175',
            explanation: '$\\mu - 1\\sigma = 200 - 25 = 175$.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Normal Curve Properties** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'dd5-p5-1',
            label: 'A normal distribution is ___ and ___',
            options: ['Symmetric and bell-shaped', 'Skewed and flat', 'Uniform and rectangular', 'Bimodal and symmetric'],
            correctIndex: 0,
            explanation: 'The normal distribution is always symmetric and bell-shaped.'
          },
          {
            id: 'dd5-p5-2',
            label: 'The total area under any normal curve equals ___',
            options: ['0', '0.5', '1', 'It depends on $\\sigma$'],
            correctIndex: 2,
            explanation: 'The total area under any probability distribution curve equals 1 (100%).'
          },
          {
            id: 'dd5-p5-3',
            label: 'A student scores $z = 2.0$. This is ___ the mean',
            options: ['Below', 'At', 'Above'],
            correctIndex: 2,
            explanation: 'Positive z-scores are above the mean. $z = 2.0$ means 2 SDs above.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Normal Distribution** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The Empirical Rule applies to:',
            options: ['Any distribution', 'Only normal (bell-shaped) distributions', 'Only skewed distributions', 'Only uniform distributions'],
            correctAnswer: 1,
            explanation: 'The 68-95-99.7 rule is specifically for normal distributions.'
          },
          {
            question: '$\\mu = 60$, $\\sigma = 8$. About 99.7% of data falls between:',
            options: ['52 and 68', '44 and 76', '36 and 84', '28 and 92'],
            correctAnswer: 2,
            explanation: '$\\mu \\pm 3\\sigma = 60 \\pm 24 = [36, 84]$.'
          },
          {
            question: 'Z-score of $x = 75$ when $\\mu = 75$ is:',
            options: ['-1', '0', '1', '75'],
            correctAnswer: 1,
            explanation: '$z = \\frac{75 - 75}{\\sigma} = 0$. Any value equal to the mean has $z = 0$.'
          },
          {
            question: 'Which z-score represents a more unusual value?',
            options: ['$z = 0.5$', '$z = -1.2$', '$z = 2.8$', '$z = -0.3$'],
            correctAnswer: 2,
            explanation: 'The further from 0, the more unusual. $|2.8| = 2.8$ is the largest absolute z-score.'
          },
          {
            question: 'In a normal distribution, approximately what percentage of data is above the mean?',
            options: ['25%', '50%', '68%', '95%'],
            correctAnswer: 1,
            explanation: 'The normal distribution is symmetric, so exactly 50% is above and 50% is below the mean.'
          },
          {
            question: 'SAT scores: $\\mu = 1060$, $\\sigma = 200$. A score of 1260 has z = :',
            options: ['0.5', '1.0', '-1.0', '2.0'],
            correctAnswer: 1,
            explanation: '$z = \\frac{1260 - 1060}{200} = \\frac{200}{200} = 1.0$.'
          },
          {
            question: 'The inflection points of a normal curve are at:',
            options: ['$\\mu$', '$\\mu \\pm \\sigma$', '$\\mu \\pm 2\\sigma$', '$\\mu \\pm 3\\sigma$'],
            correctAnswer: 1,
            explanation: 'Inflection points (where the curve changes from concave up to concave down) occur at $\\mu \\pm \\sigma$.'
          },
          {
            question: 'If you increase $\\sigma$ while keeping $\\mu$ the same, the normal curve becomes:',
            options: ['Taller and narrower', 'Shorter and wider', 'Shifted right', 'Shifted left'],
            correctAnswer: 1,
            explanation: 'Larger $\\sigma$ means more spread → the curve flattens out (shorter and wider) to keep total area = 1.'
          },
          {
            question: 'What percentage of data falls between $z = -1$ and $z = 1$?',
            options: ['50%', '68%', '95%', '99.7%'],
            correctAnswer: 1,
            explanation: 'This is the $\\mu \\pm 1\\sigma$ range = 68% by the Empirical Rule.'
          },
          {
            question: 'On the AP exam, when using the normal distribution you should:',
            options: ['Just give the answer', 'Show the z-score calculation and name the distribution', 'Only draw a picture', 'Use technology without explanation'],
            correctAnswer: 1,
            explanation: 'AP rubrics require naming the distribution (Normal), showing the z-score calculation, and providing the answer.'
          }
        ]
      }
    }
  ]
};
