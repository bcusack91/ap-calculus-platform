export const apStatsHypothesisPart2Data = {
  topicSlug: 'hypothesis-testing-apstats',
  sections: [
    {
      id: 'apstats-hypothesis-testing-p2-intro',
      type: 'text' as const,
      content: `# 📊 Test Statistics

**Part 2 of 7 — Measuring the Evidence**

---

### What Is a Test Statistic?

A **test statistic** measures how far the sample result falls from the null hypothesis value, expressed in **standard-error units**.

$$t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}$$

| Symbol | Meaning |
|:------:|---------|
| $\\bar{x}$ | Sample mean |
| $\\mu_0$ | Null hypothesis value |
| $s$ | Sample standard deviation |
| $n$ | Sample size |
| $s / \\sqrt{n}$ | **Standard error** of $\\bar{x}$ |

> 🔑 **Interpretation:** $t$ tells you how many standard errors the sample mean is from the null value. Larger $|t|$ → stronger evidence against $H_0$.

---

### Standard Error (SE)

The standard error measures the typical distance between $\\bar{x}$ and $\\mu$ due to sampling variability:

$$SE = \\frac{s}{\\sqrt{n}}$$

| Factor | Effect on SE |
|--------|-------------|
| Larger $s$ (more variability) | SE increases |
| Larger $n$ (bigger sample) | SE decreases |

> 🔑 **Key Insight:** Quadrupling the sample size **halves** the standard error (because $\\sqrt{4} = 2$).

---

### Degrees of Freedom

For a one-sample $t$-test: $df = n - 1$

The degrees of freedom determine which $t$-distribution to use for finding the P-value. More degrees of freedom → the $t$-distribution looks more like a normal distribution.

---

### Worked Example

**A school claims its average SAT math score is 500. A random sample of 36 students gives $\\bar{x} = 520$ and $s = 60$.**

**Step 1 — Standard Error:**

$$SE = \\frac{s}{\\sqrt{n}} = \\frac{60}{\\sqrt{36}} = \\frac{60}{6} = 10$$

**Step 2 — Test Statistic:**

$$t = \\frac{\\bar{x} - \\mu_0}{SE} = \\frac{520 - 500}{10} = \\frac{20}{10} = 2.0$$

**Step 3 — Degrees of Freedom:**

$$df = n - 1 = 36 - 1 = 35$$

**Interpretation:** The sample mean is 2.0 standard errors above the null value. This is moderate-to-strong evidence against $H_0$.

---

### How Large Is "Large Enough"?

| $|t|$ Value | Rough Guide |
|:-----------:|-------------|
| $< 1$ | Weak evidence against $H_0$ |
| $1$ to $2$ | Moderate evidence |
| $> 2$ | Strong evidence |
| $> 3$ | Very strong evidence |

> ⚠️ **Caution:** These are rough guidelines. Always compute the P-value for a precise conclusion.`
    },
    {
      id: 'apstats-hypothesis-testing-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Test Statistic Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $s = 20$ and $n = 100$, the standard error is:',
            options: ['0.2', '2', '5', '20'],
            correctAnswer: 1,
            explanation: '$SE = s / \\sqrt{n} = 20 / \\sqrt{100} = 20 / 10 = 2$.'
          },
          {
            question: 'A test statistic of $t = 0$ means:',
            options: ['The test failed', 'The sample mean equals the null value', 'The sample size is too small', '$H_0$ is proven true'],
            correctAnswer: 1,
            explanation: '$t = (\\bar{x} - \\mu_0)/SE$. If $t = 0$, then $\\bar{x} = \\mu_0$.'
          },
          {
            question: 'Increasing the sample size from 25 to 100 will:',
            options: ['Double the SE', 'Halve the SE', 'Quadruple the SE', 'Not change the SE'],
            correctAnswer: 1,
            explanation: '$\\sqrt{100}/\\sqrt{25} = 10/5 = 2$, so SE is halved.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p2-input',
      type: 'input-boxes' as const,
      content: `
**Computing Test Statistics** 🧮

**1)** $s = 14$, $n = 49$. What is the standard error?

**2)** $\\bar{x} = 82$, $\\mu_0 = 75$, $SE = 2$. What is the $t$-statistic?

**3)** $n = 26$. What are the degrees of freedom?
      `,
      exercise: {
        inputs: [
          {
            label: 'SE',
            correctAnswer: '2',
            explanation: '$SE = 14 / \\sqrt{49} = 14 / 7 = 2$.'
          },
          {
            label: 't-statistic',
            correctAnswer: '3.5',
            explanation: '$t = (82 - 75) / 2 = 7 / 2 = 3.5$.'
          },
          {
            label: 'Degrees of freedom',
            correctAnswer: '25',
            explanation: '$df = n - 1 = 26 - 1 = 25$.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpreting Test Statistics** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ht2-dd1',
            label: 'A $t$-statistic of $t = 4.2$ provides ___ evidence against $H_0$',
            options: ['Weak', 'Moderate', 'Strong', 'No'],
            correctIndex: 2,
            explanation: '$|t| > 3$ is very strong evidence. $|t| = 4.2$ is far from zero.'
          },
          {
            id: 'ht2-dd2',
            label: 'Increasing sample size while $s$ stays constant will ___ the test statistic',
            options: ['Increase', 'Decrease', 'Not change', 'Make it zero'],
            correctIndex: 0,
            explanation: 'Larger $n$ → smaller SE → larger $|t|$ (assuming $\\bar{x} \\neq \\mu_0$).'
          },
          {
            id: 'ht2-dd3',
            label: 'Standard error measures the variability of:',
            options: ['Individual data points', 'The sample mean', 'The population mean', 'The test statistic'],
            correctIndex: 1,
            explanation: 'SE = $s/\\sqrt{n}$ measures how much $\\bar{x}$ varies from sample to sample.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Test Statistics** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The formula for the one-sample $t$-statistic is:',
            options: ['$t = \\bar{x} - \\mu_0$', '$t = (\\bar{x} - \\mu_0) / (s/\\sqrt{n})$', '$t = s / \\sqrt{n}$', '$t = (\\mu_0 - \\bar{x}) / s$'],
            correctAnswer: 1,
            explanation: '$t = (\\bar{x} - \\mu_0) / (s/\\sqrt{n})$ standardizes the distance in SE units.'
          },
          {
            question: 'If $s = 12$ and $n = 36$, then $SE =$',
            options: ['0.33', '2', '3', '6'],
            correctAnswer: 1,
            explanation: '$SE = 12/\\sqrt{36} = 12/6 = 2$.'
          },
          {
            question: '$\\bar{x} = 105$, $\\mu_0 = 100$, $SE = 2.5$. The $t$-statistic is:',
            options: ['0.5', '2.0', '4.0', '5.0'],
            correctAnswer: 1,
            explanation: '$t = (105 - 100)/2.5 = 5/2.5 = 2.0$.'
          },
          {
            question: 'The degrees of freedom for a one-sample $t$-test with $n = 20$ is:',
            options: ['18', '19', '20', '21'],
            correctAnswer: 1,
            explanation: '$df = n - 1 = 20 - 1 = 19$.'
          },
          {
            question: 'If you quadruple the sample size, the standard error:',
            options: ['Quadruples', 'Doubles', 'Halves', 'Stays the same'],
            correctAnswer: 2,
            explanation: '$SE \\propto 1/\\sqrt{n}$. If $n \\times 4$, then $\\sqrt{n} \\times 2$, so $SE$ is halved.'
          },
          {
            question: 'A $t$-statistic of $-3.1$ indicates:',
            options: ['An error was made', 'The sample mean is below the null value', 'The sample mean is above the null value', 'The test is invalid'],
            correctAnswer: 1,
            explanation: 'Negative $t$ means $\\bar{x} < \\mu_0$ — the sample mean is below the null value.'
          },
          {
            question: 'Which would produce the largest $|t|$?',
            options: ['$\\bar{x}$ far from $\\mu_0$, small SE', '$\\bar{x}$ far from $\\mu_0$, large SE', '$\\bar{x}$ close to $\\mu_0$, small SE', '$\\bar{x}$ close to $\\mu_0$, large SE'],
            correctAnswer: 0,
            explanation: '$|t| = |\\bar{x} - \\mu_0| / SE$. Large numerator + small denominator = largest $|t|$.'
          },
          {
            question: 'The standard error decreases when:',
            options: ['$s$ increases', '$n$ decreases', '$n$ increases', '$\\bar{x}$ increases'],
            correctAnswer: 2,
            explanation: '$SE = s/\\sqrt{n}$. Increasing $n$ makes $\\sqrt{n}$ larger, so SE decreases.'
          },
          {
            question: '$\\bar{x} = 50$, $\\mu_0 = 50$, $s = 10$, $n = 25$. The $t$-statistic is:',
            options: ['0', '1', '2.5', '5'],
            correctAnswer: 0,
            explanation: '$SE = 10/5 = 2$, then $t = (50 - 50)/2 = 0$. No evidence against $H_0$.'
          },
          {
            question: 'As $df$ increases, the $t$-distribution:',
            options: ['Gets wider', 'Becomes more skewed', 'Approaches the normal distribution', 'Stays exactly the same'],
            correctAnswer: 2,
            explanation: 'With more df, the $t$-distribution has thinner tails and approaches the standard normal.'
          }
        ]
      }
    }
  ]
};
