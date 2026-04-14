export const apStatsSamplingDistPart4Data = {
  topicSlug: 'sampling-distributions-apstats',
  sections: [
    {
      id: 'apstats-samplingdistributions-p4-intro',
      type: 'text' as const,
      content: `# � Standard Error

**Part 4 of 7 — Measuring the Precision of Estimates**

---

### Topics in This Part

| Section |
|---------|
| 📐 Standard Deviation vs. Standard Error |
| 📊 SE for Means and Proportions |
| 🧮 The 10% Condition |
| ⚠️ Common Misconceptions |

> 🔑 **Key Concept:** Standard error (SE) measures how much a sample statistic typically varies from sample to sample. Smaller SE = more precise estimate.

---

### What You'll Master in Part 4
- Distinguishing standard deviation from standard error
- Computing SE for both $\\bar{x}$ and $\\hat{p}$
- Understanding how sample size affects precision
- Applying the 10% condition for independence`
    },
    {
      id: 'apstats-samplingdistributions-p4-theory',
      type: 'text' as const,
      content: `## 📐 Standard Deviation vs. Standard Error

These two concepts are **frequently confused** on the AP exam:

| Concept | Measures | Formula (for means) |
|---------|----------|-------------------|
| **Standard deviation** ($\\sigma$ or $s$) | Spread of **individual observations** | $s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$ |
| **Standard error** (SE) | Spread of a **sample statistic** | $SE_{\\bar{x}} = \\frac{s}{\\sqrt{n}}$ |

> ⚠️ **Warning:** The AP exam specifically tests whether you know the difference. Standard deviation describes the data; standard error describes the statistic.

---

### Standard Error Formulas

| Statistic | True SE (using parameters) | Estimated SE (using statistics) |
|-----------|---------------------------|-------------------------------|
| Sample mean $\\bar{x}$ | $\\sigma_{\\bar{x}} = \\dfrac{\\sigma}{\\sqrt{n}}$ | $SE_{\\bar{x}} = \\dfrac{s}{\\sqrt{n}}$ |
| Sample proportion $\\hat{p}$ | $\\sigma_{\\hat{p}} = \\sqrt{\\dfrac{p(1-p)}{n}}$ | $SE_{\\hat{p}} = \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}$ |

> 🔑 **Key Concept:** In practice, we rarely know the population parameters $\\sigma$ and $p$. So we **estimate** the SE by plugging in sample statistics ($s$ and $\\hat{p}$).

---

### The 10% Condition

When sampling **without replacement**, observations are not truly independent. However, if the sample is less than 10% of the population, the dependence is negligible:

$$\\boxed{n < 0.10 \\times N}$$

where $N$ is the population size.

**Why it matters:** The SE formulas assume independent observations. The 10% condition ensures this assumption is approximately met.

**Example:** Polling 1,000 voters from a city of 50,000 registered voters.
- Check: $1000 < 0.10 \\times 50{,}000 = 5{,}000$ ✓ → Independence is reasonable.

---

### How Sample Size Affects SE

$$SE \\propto \\frac{1}{\\sqrt{n}}$$

| If you multiply $n$ by... | SE is multiplied by... |
|--------------------------|----------------------|
| 4 | $1/2$ (halved) |
| 9 | $1/3$ |
| 100 | $1/10$ |

> 🔑 **AP Tip:** To halve the margin of error, you must **quadruple** the sample size. This is a frequently tested relationship.`
    },
    {
      id: 'apstats-samplingdistributions-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Standard Error Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A sample of 64 has $s = 16$. The standard error of $\\bar{x}$ is:',
            options: ['$16$', '$8$', '$4$', '$2$'],
            correctAnswer: 2,
            explanation: '$SE_{\\bar{x}} = s/\\sqrt{n} = 16/\\sqrt{64} = 16/8 = 2$.'
          },
          {
            question: 'Standard error measures the variability of:',
            options: ['Individual data points', 'The population', 'A sample statistic across repeated samples', 'The residuals'],
            correctAnswer: 2,
            explanation: 'SE measures how much a statistic (like $\\bar{x}$ or $\\hat{p}$) varies from sample to sample. It describes the spread of the sampling distribution.'
          },
          {
            question: 'To cut the standard error in half, you must multiply $n$ by:',
            options: ['2', '4', '8', '16'],
            correctAnswer: 1,
            explanation: 'Since $SE \\propto 1/\\sqrt{n}$, halving SE requires $\\sqrt{n}$ to double, which means $n$ must quadruple.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p4-input',
      type: 'input-boxes' as const,
      content: `
**SE Calculations** 🧮

**1)** A sample of 100 students has $s = 15$. Find $SE_{\\bar{x}}$.

**2)** In a sample of 400, $\\hat{p} = 0.30$. Find $SE_{\\hat{p}}$ (round to 4 decimal places).

**3)** A researcher surveys 500 people from a town of 4,000. Is the 10% condition satisfied? Enter "yes" or "no".
      `,
      exercise: {
        inputs: [
          {
            label: 'SE of x-bar',
            correctAnswer: '1.5',
            explanation: '$SE_{\\bar{x}} = s/\\sqrt{n} = 15/\\sqrt{100} = 15/10 = 1.5$.'
          },
          {
            label: 'SE of p-hat',
            correctAnswer: '0.0229',
            explanation: '$SE_{\\hat{p}} = \\sqrt{0.30 \\times 0.70 / 400} = \\sqrt{0.21/400} = \\sqrt{0.000525} \\approx 0.0229$.'
          },
          {
            label: '10% condition met?',
            correctAnswer: 'no',
            explanation: '$500/4000 = 0.125 = 12.5\\% > 10\\%$. The sample is more than 10% of the population, so the 10% condition is **not** satisfied.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concepts Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'sd4-dd1',
            label: 'When we use $s$ instead of $\\sigma$ in the SE formula, we are ___ the standard error',
            options: ['calculating exactly', 'estimating', 'ignoring'],
            correctIndex: 1,
            explanation: 'Since $\\sigma$ is usually unknown, we substitute $s$ to get an **estimate** of the standard error.'
          },
          {
            id: 'sd4-dd2',
            label: 'Tripling the sample size multiplies SE by ___',
            options: ['$1/3$', '$1/\\sqrt{3} \\approx 0.577$', '$\\sqrt{3}$', '$3$'],
            correctIndex: 1,
            explanation: '$SE \\propto 1/\\sqrt{n}$. Tripling $n$ multiplies SE by $1/\\sqrt{3} \\approx 0.577$.'
          },
          {
            id: 'sd4-dd3',
            label: 'The 10% condition checks whether ___ is reasonable',
            options: ['normality', 'independence', 'randomness', 'symmetry'],
            correctIndex: 1,
            explanation: 'The 10% condition ensures that sampling without replacement is close enough to independent sampling for the SE formulas to be valid.'
          },
          {
            id: 'sd4-dd4',
            label: 'As sample size increases, the standard error ___',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 1,
            explanation: 'Larger samples produce more precise estimates, so the SE decreases as $n$ increases.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p4-worked',
      type: 'text' as const,
      content: `## 📝 AP-Style Worked Example

**Problem:** A state health department reports that the average wait time at emergency rooms is 45 minutes. A hospital takes a random sample of 50 patients and finds $\\bar{x} = 52$ minutes with $s = 20$ minutes.

**(a)** Calculate the standard error of $\\bar{x}$.

$$SE_{\\bar{x}} = \\frac{s}{\\sqrt{n}} = \\frac{20}{\\sqrt{50}} = \\frac{20}{7.071} \\approx 2.828 \\text{ minutes}$$

**(b)** Interpret the SE in context.

In repeated random samples of 50 patients from this hospital, the sample mean wait time would typically differ from the true mean by about 2.83 minutes.

**(c)** How large a sample would be needed to achieve $SE \\leq 1$ minute?

$$1 \\geq \\frac{20}{\\sqrt{n}} \\implies \\sqrt{n} \\geq 20 \\implies n \\geq 400$$

> 🔑 **AP Tip:** When interpreting SE, always connect it to the context: "The sample [statistic] would typically vary by about [SE] [units] from the true [parameter] across repeated samples."`
    },
    {
      id: 'apstats-samplingdistributions-p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Standard Error** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes the standard error?',
            options: ['The average distance of data points from the mean', 'The typical distance of a sample statistic from the true parameter', 'The margin of error of a confidence interval', 'The probability of a Type I error'],
            correctAnswer: 1,
            explanation: 'Standard error describes how much a sample statistic (like $\\bar{x}$) typically differs from the true parameter across repeated samples.'
          },
          {
            question: 'A sample of 225 has $s = 30$. What is $SE_{\\bar{x}}$?',
            options: ['$30$', '$15$', '$2$', '$0.133$'],
            correctAnswer: 2,
            explanation: '$SE = 30/\\sqrt{225} = 30/15 = 2$.'
          },
          {
            question: 'In a sample of 600, $\\hat{p} = 0.45$. What is $SE_{\\hat{p}}$?',
            options: ['$0.0045$', '$0.0203$', '$0.0412$', '$0.4500$'],
            correctAnswer: 1,
            explanation: '$SE_{\\hat{p}} = \\sqrt{0.45 \\times 0.55 / 600} = \\sqrt{0.2475/600} = \\sqrt{0.0004125} \\approx 0.0203$.'
          },
          {
            question: 'A researcher wants $SE_{\\bar{x}} = 0.5$ with $s = 10$. What sample size is needed?',
            options: ['$n = 20$', '$n = 100$', '$n = 200$', '$n = 400$'],
            correctAnswer: 3,
            explanation: '$0.5 = 10/\\sqrt{n} \\implies \\sqrt{n} = 20 \\implies n = 400$.'
          },
          {
            question: 'Which is NOT a reason to prefer a larger sample size?',
            options: ['Smaller standard error', 'More precise estimates', 'Narrower confidence intervals', 'Eliminates bias in the sampling method'],
            correctAnswer: 3,
            explanation: 'Larger samples reduce SE and improve precision, but they do NOT fix bias. A biased sampling method (e.g., convenience sample) stays biased regardless of size.'
          },
          {
            question: 'The formula $SE_{\\hat{p}} = \\sqrt{\\hat{p}(1-\\hat{p})/n}$ uses $\\hat{p}$ instead of $p$ because:',
            options: ['$\\hat{p}$ is more accurate', 'We usually do not know $p$', '$\\hat{p}$ gives a larger SE', 'The AP formula sheet requires it'],
            correctAnswer: 1,
            explanation: 'In practice, the population proportion $p$ is unknown. We estimate SE by substituting the observed $\\hat{p}$.'
          },
          {
            question: 'A sample of 80 from a population of 600 is drawn. Is the 10% condition met?',
            options: ['Yes, because $80 < 60$', 'Yes, because $80/600 = 13.3\\% < 100\\%$', 'No, because $80/600 = 13.3\\% > 10\\%$', 'No, because $n < 100$'],
            correctAnswer: 2,
            explanation: '$80/600 \\approx 0.133 = 13.3\\%$. Since $13.3\\% > 10\\%$, the 10% condition is NOT met.'
          },
          {
            question: 'If $SE_{\\bar{x}} = 3$ with $n = 100$, what would SE be with $n = 400$?',
            options: ['$0.75$', '$1.5$', '$3$', '$6$'],
            correctAnswer: 1,
            explanation: 'Quadrupling $n$ halves SE: $3 \\times (1/\\sqrt{4}) = 3 \\times 0.5 = 1.5$.'
          },
          {
            question: 'The SD of a dataset is 12. A sample of 36 is drawn. Which value is the standard error?',
            options: ['$12$', '$6$', '$4$', '$2$'],
            correctAnswer: 2,
            explanation: '$SE = \\sigma/\\sqrt{n} = 12/\\sqrt{36} = 12/6 = 2$.'
          },
          {
            question: 'Why do we divide by $\\sqrt{n}$ rather than $n$ in the SE formula?',
            options: ['Convention', 'Because variance divides by $n$, and SE is the square root of variance', 'To make the number smaller', 'Because of the Central Limit Theorem'],
            correctAnswer: 1,
            explanation: 'The variance of $\\bar{x}$ is $\\sigma^2/n$. Taking the square root gives $\\sigma/\\sqrt{n}$. The square root converts from variance to standard deviation.'
          }
        ]
      }
    }
  ]
};
