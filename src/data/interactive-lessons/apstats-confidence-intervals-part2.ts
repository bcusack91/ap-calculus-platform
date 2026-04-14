export const apStatsConfIntPart2Data = {
  topicSlug: 'confidence-intervals-apstats',
  sections: [
    {
      id: 'apstats-confidenceintervals-p2-intro',
      type: 'text' as const,
      content: `# 📊 One-Sample Z-Interval for Proportions

**Part 2 of 7 — Estimating a Population Proportion**

---

### Topics in This Part

| Section |
|---------|
| 📐 The One-Proportion $z$-Interval Formula |
| ✅ Conditions for the $z$-Interval |
| 📝 Full Worked Example |
| ⚠️ Interpretation Dos and Don\'ts |

> 🔑 **Key Concept:** The one-proportion $z$-interval is the most common confidence interval on the AP exam. Master the formula, conditions, and interpretation.

---

### The Formula

$$\\boxed{\\hat{p} \\pm z^* \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}}$$

| Component | Meaning |
|-----------|---------|
| $\\hat{p}$ | Sample proportion (point estimate) |
| $z^*$ | Critical value for desired confidence level |
| $\\sqrt{\\hat{p}(1-\\hat{p})/n}$ | Standard error of $\\hat{p}$ |
| $z^* \\cdot SE$ | Margin of error |

### Critical Values Reference

| Confidence Level | $z^*$ |
|-----------------|-------|
| 90% | 1.645 |
| 95% | 1.960 |
| 99% | 2.576 |`
    },
    {
      id: 'apstats-confidenceintervals-p2-conditions',
      type: 'text' as const,
      content: `## ✅ Conditions for the One-Proportion $z$-Interval

Before constructing the interval, verify:

**1. Random:** Data comes from a random sample or randomized experiment.

**2. 10% Condition (Independence):** $n < 0.10N$ — the sample is less than 10% of the population.

**3. Large Counts:** $n\\hat{p} \\geq 10$ and $n(1-\\hat{p}) \\geq 10$ — enough successes and failures.

> ⚠️ **Warning:** Note that for confidence intervals we check $n\\hat{p}$ and $n(1-\\hat{p})$ (using $\\hat{p}$), whereas for hypothesis tests we use $np_0$ and $n(1-p_0)$ (using the null value). This is a subtle but important distinction.

---

## 📝 Full Worked Example

**Problem:** A random sample of 500 U.S. adults finds that 320 support a proposed policy. Construct a 95% confidence interval for the true proportion who support the policy.

**Step 1 — Identify:**
$\\hat{p} = 320/500 = 0.64$, $n = 500$, confidence level = 95%, $z^* = 1.960$

**Step 2 — Check conditions:**
- **Random:** "A random sample" — stated ✓
- **10%:** 500 is less than 10% of all U.S. adults (~260 million) ✓
- **Large Counts:** $500(0.64) = 320 \\geq 10$ ✓ and $500(0.36) = 180 \\geq 10$ ✓

**Step 3 — Calculate:**
$$SE = \\sqrt{\\frac{0.64 \\times 0.36}{500}} = \\sqrt{\\frac{0.2304}{500}} = \\sqrt{0.0004608} = 0.02147$$

$$ME = 1.960 \\times 0.02147 = 0.04208$$

$$CI = 0.64 \\pm 0.042 = (0.598, 0.682)$$

**Step 4 — Interpret:**
We are 95% confident that the true proportion of all U.S. adults who support the proposed policy is between 0.598 and 0.682.

> 🔑 **AP Tip:** Always state the interval in the context of the problem. Generic statements like "we are 95% confident the proportion is between 0.598 and 0.682" will lose points if they don\'t mention WHAT proportion (of WHOM doing WHAT).`
    },
    {
      id: 'apstats-confidenceintervals-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**One-Proportion Z-Interval Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the formula $\\hat{p} \\pm z^*\\sqrt{\\hat{p}(1-\\hat{p})/n}$, the term $z^*\\sqrt{\\hat{p}(1-\\hat{p})/n}$ is called the:',
            options: ['Standard error', 'Point estimate', 'Margin of error', 'Confidence level'],
            correctAnswer: 2,
            explanation: 'The margin of error = $z^* \\times SE$. It represents the "plus or minus" part of the confidence interval.'
          },
          {
            question: 'A 99% CI will be ___ a 95% CI (same data):',
            options: ['Narrower than', 'Wider than', 'The same width as', 'Cannot compare'],
            correctAnswer: 1,
            explanation: 'Higher confidence requires a larger $z^*$ ($2.576$ vs $1.960$), producing a larger margin of error and wider interval.'
          },
          {
            question: 'Which would NOT help reduce the margin of error?',
            options: ['Increasing sample size', 'Using a lower confidence level', 'Getting $\\hat{p}$ closer to 0 or 1', 'Increasing the population size'],
            correctAnswer: 3,
            explanation: 'Population size does not appear in the margin of error formula ($z^*\\sqrt{\\hat{p}(1-\\hat{p})/n}$). The ME depends on $n$, $z^*$, and $\\hat{p}$.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p2-input',
      type: 'input-boxes' as const,
      content: `
**Build a Confidence Interval** 🧮

A survey of 800 randomly selected teenagers finds that 480 use social media daily.

**1)** What is $\\hat{p}$?

**2)** What is the standard error? (Round to 4 decimal places)

**3)** What is the 95% margin of error? (Round to 3 decimal places)
      `,
      exercise: {
        inputs: [
          {
            label: 'Sample proportion',
            correctAnswer: '0.60',
            explanation: '$\\hat{p} = 480/800 = 0.60$.'
          },
          {
            label: 'Standard error',
            correctAnswer: '0.0173',
            explanation: '$SE = \\sqrt{0.60 \\times 0.40/800} = \\sqrt{0.24/800} = \\sqrt{0.0003} \\approx 0.0173$.'
          },
          {
            label: 'Margin of error',
            correctAnswer: '0.034',
            explanation: '$ME = 1.960 \\times 0.0173 \\approx 0.034$. The 95% CI is approximately $(0.566, 0.634)$.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpretation Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ci2-dd1',
            label: '"There is a 95% chance that $p$ is in this interval" is:',
            options: ['Correct', 'Incorrect — $p$ is fixed, not random'],
            correctIndex: 1,
            explanation: 'The parameter $p$ is a fixed (unknown) value. It is either in the interval or not. The 95% refers to the long-run success rate of the method.'
          },
          {
            id: 'ci2-dd2',
            label: 'For CIs, the Large Counts condition uses ___ (not $p_0$)',
            options: ['$\\hat{p}$', '$\\mu$', '$\\sigma$', '$z^*$'],
            correctIndex: 0,
            explanation: 'Confidence intervals use $\\hat{p}$ for condition checks because there is no hypothesized value. Hypothesis tests use $p_0$.'
          },
          {
            id: 'ci2-dd3',
            label: 'If a 95% CI for $p$ is $(0.45, 0.55)$, we ___ reject $H_0: p = 0.50$ at $\\alpha = 0.05$',
            options: ['would', 'would not'],
            correctIndex: 1,
            explanation: '0.50 is inside the interval, so it is a plausible value. We would NOT reject $H_0: p = 0.50$ at the 5% level.'
          },
          {
            id: 'ci2-dd4',
            label: 'The confidence level determines the value of ___',
            options: ['$\\hat{p}$', '$n$', '$z^*$', '$SE$'],
            correctIndex: 2,
            explanation: 'The confidence level (90%, 95%, 99%) determines the critical value $z^*$ (1.645, 1.960, 2.576).'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — One-Proportion Z-Interval** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 95% CI is $(0.42, 0.58)$. The point estimate $\\hat{p}$ is:',
            options: ['$0.42$', '$0.50$', '$0.58$', '$0.16$'],
            correctAnswer: 1,
            explanation: '$\\hat{p}$ is the midpoint: $(0.42 + 0.58)/2 = 0.50$.'
          },
          {
            question: 'The margin of error for the interval $(0.42, 0.58)$ is:',
            options: ['$0.42$', '$0.08$', '$0.16$', '$0.50$'],
            correctAnswer: 1,
            explanation: '$ME = (0.58 - 0.42)/2 = 0.16/2 = 0.08$.'
          },
          {
            question: 'A sample of 200 yields $\\hat{p} = 0.75$. The standard error is:',
            options: ['$0.0306$', '$0.0375$', '$0.1875$', '$0.7500$'],
            correctAnswer: 0,
            explanation: '$SE = \\sqrt{0.75 \\times 0.25/200} = \\sqrt{0.1875/200} = \\sqrt{0.0009375} \\approx 0.0306$.'
          },
          {
            question: 'Checking conditions: $n = 60$, $\\hat{p} = 0.08$. Is the Large Counts condition met?',
            options: ['Yes — $n \\geq 30$', 'No — $n\\hat{p} = 4.8 < 10$', 'Yes — $n(1-\\hat{p}) = 55.2 \\geq 10$', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$n\\hat{p} = 60(0.08) = 4.8 < 10$. The condition fails — not enough successes for the normal approximation.'
          },
          {
            question: 'To decrease the margin of error, a researcher could:',
            options: ['Increase the confidence level', 'Decrease the sample size', 'Increase the sample size', 'Use $\\hat{p} = 0.5$'],
            correctAnswer: 2,
            explanation: 'Increasing $n$ decreases SE, which decreases ME. Increasing confidence level would INCREASE ME.'
          },
          {
            question: 'A 90% CI for $p$ is $(0.55, 0.65)$. A 95% CI from the same data would be:',
            options: ['Narrower', 'Wider', 'The same', 'Centered differently'],
            correctAnswer: 1,
            explanation: 'Higher confidence → larger $z^*$ → wider interval. Both intervals are centered at the same $\\hat{p}$.'
          },
          {
            question: 'Which is a correct interpretation? "We are 95% confident that..."',
            options: ['...95% of Americans support the policy', '...the true proportion of Americans who support the policy is between 0.52 and 0.68', '...the sample proportion is between 0.52 and 0.68', '...the next sample will give $\\hat{p}$ between 0.52 and 0.68'],
            correctAnswer: 1,
            explanation: 'A CI estimates the population PARAMETER (the true proportion), not the sample statistic or individual data values.'
          },
          {
            question: 'If $\\hat{p} = 0.50$ and $n = 2500$, the margin of error for a 95% CI is approximately:',
            options: ['$0.01$', '$0.02$', '$0.05$', '$0.10$'],
            correctAnswer: 1,
            explanation: '$SE = \\sqrt{0.25/2500} = \\sqrt{0.0001} = 0.01$. $ME = 1.96 \\times 0.01 = 0.0196 \\approx 0.02$.'
          },
          {
            question: 'The 10% condition for a poll of 1,200 people requires the population to be at least:',
            options: ['$120$', '$1{,}200$', '$12{,}000$', '$120{,}000$'],
            correctAnswer: 2,
            explanation: '$n < 0.10N \\implies N > 10n = 10 \\times 1200 = 12{,}000$.'
          },
          {
            question: 'A senator claims 60% support. A 95% CI is $(0.52, 0.58)$. We can conclude:',
            options: ['60% is plausible', '60% is not a plausible value for $p$', 'The senator is definitely wrong', 'The CI is too narrow'],
            correctAnswer: 1,
            explanation: '$0.60$ falls outside the interval $(0.52, 0.58)$. It is not a plausible value at the 95% confidence level, which casts doubt on the claim.'
          }
        ]
      }
    }
  ]
};
