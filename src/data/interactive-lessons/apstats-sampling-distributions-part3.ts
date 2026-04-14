export const apStatsSamplingDistPart3Data = {
  topicSlug: 'sampling-distributions-apstats',
  sections: [
    {
      id: 'apstats-samplingdistributions-p3-intro',
      type: 'text' as const,
      content: `# 📊 Distribution of Sample Proportions

**Part 3 of 7 — From Counts to Proportions**

---

### Topics in This Part

| Section |
|---------|
| 📐 Sample Proportion $\\hat{p}$ |
| 📊 Shape, Center & Spread of $\\hat{p}$ |
| 🧮 Normal Approximation for $\\hat{p}$ |
| ⚠️ Conditions for Normality |

> 🔑 **Key Concept:** Parts 1–2 focused on sample means ($\\bar{x}$). Now we shift to **sample proportions** ($\\hat{p}$), which are used whenever the variable is categorical (yes/no, success/failure).

---

### What You'll Master in Part 3
- Defining and computing the sample proportion $\\hat{p}$
- Describing the sampling distribution of $\\hat{p}$ (center, spread, shape)
- Checking conditions for the normal approximation
- Using $z$-scores to find probabilities about $\\hat{p}$`
    },
    {
      id: 'apstats-samplingdistributions-p3-theory',
      type: 'text' as const,
      content: `## 📐 The Sample Proportion

When a variable is categorical (e.g., "supports policy" vs. "does not"), we summarize samples with a **proportion** rather than a mean.

$$\\boxed{\\hat{p} = \\frac{\\text{number of successes}}{n}}$$

**Example:** In a sample of 200 voters, 120 support a candidate. Then:

$$\\hat{p} = \\frac{120}{200} = 0.60$$

---

### Sampling Distribution of $\\hat{p}$

If repeated random samples of size $n$ are drawn from a population where the true proportion is $p$:

| Property | Formula |
|----------|---------|
| **Mean** | $\\mu_{\\hat{p}} = p$ |
| **Standard deviation** | $\\sigma_{\\hat{p}} = \\sqrt{\\dfrac{p(1-p)}{n}}$ |
| **Shape** | Approximately normal when conditions are met |

> 🔑 **Key Concept:** The sampling distribution of $\\hat{p}$ is **centered at the true proportion $p$** — so $\\hat{p}$ is an unbiased estimator of $p$.

---

### Normal Approximation Conditions

The sampling distribution of $\\hat{p}$ is approximately normal when:

$$\\boxed{np \\geq 10 \\quad \\text{and} \\quad n(1-p) \\geq 10}$$

This ensures enough successes AND failures for the bell curve to be a good model.

> ⚠️ **Warning:** If either condition fails, the normal approximation is not valid. You would need exact binomial probabilities instead.

---

### Finding Probabilities About $\\hat{p}$

To find $P(\\hat{p} > k)$, standardize:

$$z = \\frac{\\hat{p} - p}{\\sqrt{\\dfrac{p(1-p)}{n}}}$$

Then use the $z$-table.

**Worked Example:** A factory produces items with 5% defect rate ($p = 0.05$). In a sample of $n = 500$:

$$\\sigma_{\\hat{p}} = \\sqrt{\\frac{0.05 \\times 0.95}{500}} = \\sqrt{\\frac{0.0475}{500}} = \\sqrt{0.000095} = 0.00975$$

Check: $np = 25 \\geq 10$ ✓ and $n(1-p) = 475 \\geq 10$ ✓

$$P(\\hat{p} > 0.07) = P\\left(z > \\frac{0.07 - 0.05}{0.00975}\\right) = P(z > 2.05) = 1 - 0.9798 = 0.0202$$`
    },
    {
      id: 'apstats-samplingdistributions-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sample Proportions Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a random sample of 400 adults, 260 own a smartphone. What is $\\hat{p}$?',
            options: ['$0.35$', '$0.50$', '$0.65$', '$1.54$'],
            correctAnswer: 2,
            explanation: '$\\hat{p} = 260/400 = 0.65$. Always divide the count of successes by the sample size $n$.'
          },
          {
            question: 'The mean of the sampling distribution of $\\hat{p}$ equals:',
            options: ['$\\hat{p}$', '$p$', '$p(1-p)$', '$\\sqrt{p(1-p)/n}$'],
            correctAnswer: 1,
            explanation: '$\\mu_{\\hat{p}} = p$, the true population proportion. This makes $\\hat{p}$ an **unbiased** estimator of $p$.'
          },
          {
            question: 'Which condition is needed for the normal approximation to the sampling distribution of $\\hat{p}$?',
            options: ['$n \\geq 30$', '$np \\geq 10$ and $n(1-p) \\geq 10$', '$\\sigma$ is known', '$p = 0.5$'],
            correctAnswer: 1,
            explanation: 'We need at least 10 expected successes ($np \\geq 10$) and 10 expected failures ($n(1-p) \\geq 10$) for the normal approximation to be valid.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Standard Deviation of $\\hat{p}$ Practice** 🧮

A political poll samples $n = 900$ voters from a state where 40% support a ballot measure ($p = 0.40$).

**1)** What is the mean of the sampling distribution of $\\hat{p}$?

**2)** Calculate $\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n}$. Round to 4 decimal places.

**3)** Is the normal approximation valid? How many expected successes are there? ($np = ?$)
      `,
      exercise: {
        inputs: [
          {
            label: 'Mean of sampling distribution',
            correctAnswer: '0.40',
            explanation: '$\\mu_{\\hat{p}} = p = 0.40$. The center of the sampling distribution equals the true proportion.'
          },
          {
            label: 'Standard deviation of p-hat',
            correctAnswer: '0.0163',
            explanation: '$\\sigma_{\\hat{p}} = \\sqrt{0.40 \\times 0.60 / 900} = \\sqrt{0.24/900} = \\sqrt{0.000267} \\approx 0.0163$.'
          },
          {
            label: 'Expected successes (np)',
            correctAnswer: '360',
            explanation: '$np = 900 \\times 0.40 = 360 \\geq 10$ ✓. Also $n(1-p) = 540 \\geq 10$ ✓. Normal approximation is valid.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Proportions Concepts Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'sd3-dd1',
            label: 'As sample size $n$ increases, the standard deviation of $\\hat{p}$ ___',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 1,
            explanation: '$\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n}$. As $n$ increases, the denominator grows, so the SD decreases. Larger samples give more precise estimates.'
          },
          {
            id: 'sd3-dd2',
            label: 'The standard deviation of $\\hat{p}$ is largest when $p = $ ___',
            options: ['0', '0.5', '1'],
            correctIndex: 1,
            explanation: '$p(1-p)$ is maximized when $p = 0.5$ (giving $0.25$). The product is smaller for values of $p$ near 0 or 1.'
          },
          {
            id: 'sd3-dd3',
            label: 'If $n = 50$ and $p = 0.02$, the normal approximation is ___',
            options: ['valid', 'not valid'],
            correctIndex: 1,
            explanation: '$np = 50 \\times 0.02 = 1 < 10$. The expected number of successes is too small, so the normal approximation fails.'
          },
          {
            id: 'sd3-dd4',
            label: '$\\hat{p}$ is an ___ estimator of $p$ because $E(\\hat{p}) = p$',
            options: ['biased', 'unbiased', 'consistent'],
            correctIndex: 1,
            explanation: 'An estimator is unbiased if its expected value equals the parameter. Since $\\mu_{\\hat{p}} = p$, $\\hat{p}$ is unbiased.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p3-worked',
      type: 'text' as const,
      content: `## 📝 AP-Style Worked Example

**Problem:** A large university reports that 70% of students live off campus. A random sample of 150 students is selected.

**(a)** Describe the sampling distribution of $\\hat{p}$.

**Solution:**
- **Shape:** Check: $np = 150(0.70) = 105 \\geq 10$ ✓ and $n(1-p) = 150(0.30) = 45 \\geq 10$ ✓. Approximately normal.
- **Center:** $\\mu_{\\hat{p}} = 0.70$
- **Spread:** $\\sigma_{\\hat{p}} = \\sqrt{\\frac{0.70 \\times 0.30}{150}} = \\sqrt{\\frac{0.21}{150}} = \\sqrt{0.0014} \\approx 0.0374$

**(b)** Find the probability that $\\hat{p} < 0.65$.

$$z = \\frac{0.65 - 0.70}{0.0374} = \\frac{-0.05}{0.0374} = -1.34$$

$$P(\\hat{p} < 0.65) = P(z < -1.34) = 0.0901$$

> 🔑 **AP Tip:** Always structure your answer as **Shape–Center–Spread** and show the condition checks. The AP rubric awards separate points for each.`
    },
    {
      id: 'apstats-samplingdistributions-p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Distribution of Sample Proportions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The formula $\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n}$ gives the:',
            options: ['Population standard deviation', 'Standard error of the mean', 'Standard deviation of the sampling distribution of $\\hat{p}$', 'Margin of error'],
            correctAnswer: 2,
            explanation: 'This formula describes the standard deviation (spread) of the sampling distribution of the sample proportion $\\hat{p}$.'
          },
          {
            question: 'A poll of $n = 1000$ finds $\\hat{p} = 0.52$. If $p = 0.50$, the $z$-score for $\\hat{p}$ is approximately:',
            options: ['$0.50$', '$1.00$', '$1.27$', '$2.00$'],
            correctAnswer: 2,
            explanation: '$\\sigma_{\\hat{p}} = \\sqrt{0.50 \\times 0.50/1000} = \\sqrt{0.00025} = 0.01581$. $z = (0.52 - 0.50)/0.01581 \\approx 1.27$.'
          },
          {
            question: 'For which value of $p$ is the standard deviation of $\\hat{p}$ the largest (for fixed $n$)?',
            options: ['$p = 0.1$', '$p = 0.3$', '$p = 0.5$', '$p = 0.9$'],
            correctAnswer: 2,
            explanation: '$p(1-p)$ is maximized at $p = 0.5$, where it equals $0.25$. This means the most variability in $\\hat{p}$ occurs when $p = 0.5$.'
          },
          {
            question: 'If $n = 40$ and $p = 0.15$, is the normal approximation valid?',
            options: ['Yes, because $n \\geq 30$', 'Yes, because $np = 6 \\geq 5$', 'No, because $np = 6 < 10$', 'No, because $n(1-p) = 34 < 40$'],
            correctAnswer: 2,
            explanation: '$np = 40 \\times 0.15 = 6 < 10$. The condition $np \\geq 10$ fails, so the normal approximation is NOT valid.'
          },
          {
            question: 'Increasing the sample size from 100 to 400 will ___ the standard deviation of $\\hat{p}$ by a factor of:',
            options: ['Double it', 'Halve it', 'Quarter it', 'No change'],
            correctAnswer: 1,
            explanation: '$\\sigma_{\\hat{p}} \\propto 1/\\sqrt{n}$. When $n$ quadruples (100 → 400), $\\sqrt{n}$ doubles, so $\\sigma_{\\hat{p}}$ is halved.'
          },
          {
            question: '60% of a large population prefers brand A. In a sample of 250, what is $\\sigma_{\\hat{p}}$?',
            options: ['$0.0196$', '$0.0310$', '$0.0490$', '$0.2400$'],
            correctAnswer: 1,
            explanation: '$\\sigma_{\\hat{p}} = \\sqrt{0.60 \\times 0.40 / 250} = \\sqrt{0.24/250} = \\sqrt{0.00096} \\approx 0.0310$.'
          },
          {
            question: 'Which statement about the sampling distribution of $\\hat{p}$ is FALSE?',
            options: ['It is centered at $p$', 'Its spread decreases as $n$ increases', 'It is always exactly normal', 'It requires $np \\geq 10$ and $n(1-p) \\geq 10$ for normality'],
            correctAnswer: 2,
            explanation: 'The sampling distribution of $\\hat{p}$ is only **approximately** normal when conditions are met. It is never exactly normal because $\\hat{p}$ takes on discrete values.'
          },
          {
            question: 'A sample of 500 finds 275 successes. The sample proportion is:',
            options: ['$0.45$', '$0.50$', '$0.55$', '$0.275$'],
            correctAnswer: 2,
            explanation: '$\\hat{p} = 275/500 = 0.55$.'
          },
          {
            question: 'Why does the formula $\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n}$ use $p$ and not $\\hat{p}$?',
            options: ['Because $p$ is easier to work with', 'Because this describes the true sampling distribution, which depends on the population parameter', 'Because $\\hat{p}$ is always unknown', 'There is no difference'],
            correctAnswer: 1,
            explanation: 'The sampling distribution of $\\hat{p}$ is a theoretical distribution centered at $p$ with spread depending on $p$. We use $p$ because we are describing what happens across all possible samples from this population.'
          },
          {
            question: 'In a random sample of 300 households, 210 have internet access. The 10% condition requires:',
            options: ['The sample is less than 10% of all households', 'At least 10% responded to the survey', 'The proportion is at least 0.10', '$np \\geq 10$'],
            correctAnswer: 0,
            explanation: 'The 10% condition requires that the sample size $n$ is less than 10% of the population. This ensures that sampling without replacement is approximately independent. Here, there must be at least 3000 households in the population.'
          }
        ]
      }
    }
  ]
};
