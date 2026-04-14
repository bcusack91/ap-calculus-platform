export const apStatsConfIntPart3Data = {
  topicSlug: 'confidence-intervals-apstats',
  sections: [
    {
      id: 'apstats-confidenceintervals-p3-intro',
      type: 'text' as const,
      content: `# 📊 One-Sample T-Interval for Means

**Part 3 of 7 — Estimating a Population Mean**

---

### Topics in This Part

| Section |
|---------|
| 📐 Why We Use $t$ Instead of $z$ |
| 📊 The One-Sample $t$-Interval Formula |
| ✅ Conditions |
| 📝 Full Worked Example |

> 🔑 **Key Concept:** When $\\sigma$ is unknown (almost always in practice), we use the $t$-distribution instead of the $z$-distribution. The $t$-interval is wider to account for the extra uncertainty from estimating $\\sigma$ with $s$.

---

### Why $t$ Instead of $z$?

| Situation | Distribution | When Used |
|-----------|-------------|-----------|
| $\\sigma$ known | $z$-distribution | Rare in practice |
| $\\sigma$ unknown, use $s$ | $t$-distribution | Almost always |

The $t$-distribution:
- Is bell-shaped and symmetric, like the normal
- Has **heavier tails** (more spread) than the normal
- Depends on **degrees of freedom**: $df = n - 1$
- Approaches the normal distribution as $df \\to \\infty$

---

### The Formula

$$\\boxed{\\bar{x} \\pm t^* \\cdot \\frac{s}{\\sqrt{n}}}$$

where $t^*$ is the critical value from the $t$-distribution with $df = n - 1$.

### Selected $t^*$ Values (95% Confidence)

| $df$ | $t^*$ |
|-----|------|
| 5 | 2.571 |
| 10 | 2.228 |
| 20 | 2.086 |
| 30 | 2.042 |
| 50 | 2.009 |
| 100 | 1.984 |
| $\\infty$ | 1.960 |

> ⚠️ **Warning:** Notice that $t^*$ is always larger than $z^* = 1.960$ for finite $df$. This makes $t$-intervals wider than $z$-intervals — by design.`
    },
    {
      id: 'apstats-confidenceintervals-p3-conditions',
      type: 'text' as const,
      content: `## ✅ Conditions for the One-Sample $t$-Interval

**1. Random:** Data comes from a random sample or randomized experiment.

**2. 10% Condition:** $n < 0.10N$ (if sampling without replacement).

**3. Normal/Large Sample:**
| $n$ | Requirement |
|-----|-------------|
| $n \\geq 30$ | CLT applies — no shape restriction |
| $15 \\leq n < 30$ | No strong skewness or outliers |
| $n < 15$ | Population must be approximately normal |

> 🔑 **AP Tip:** For the Normal condition with means, you should reference the sample data (boxplot, dotplot, or histogram). Saying "no strong skewness or outliers in the sample" is the expected language.

---

## 📝 Full Worked Example

**Problem:** A random sample of 35 commuters has a mean commute of $\\bar{x} = 28.4$ minutes with $s = 8.6$ minutes. Construct a 95% confidence interval for the true mean commute time.

**Step 1 — Identify:**
$\\bar{x} = 28.4$, $s = 8.6$, $n = 35$, $df = 34$, $t^* \\approx 2.032$ (from table, $df = 34$)

**Step 2 — Check conditions:**
- **Random:** Stated — random sample ✓
- **10%:** $35$ is less than 10% of all commuters ✓
- **Normal:** $n = 35 \\geq 30$, so by the CLT, the sampling distribution of $\\bar{x}$ is approximately normal ✓

**Step 3 — Calculate:**
$$SE = \\frac{s}{\\sqrt{n}} = \\frac{8.6}{\\sqrt{35}} = \\frac{8.6}{5.916} = 1.454$$

$$ME = 2.032 \\times 1.454 = 2.954$$

$$CI = 28.4 \\pm 2.954 = (25.45, 31.35)$$

**Step 4 — Interpret:**
We are 95% confident that the true mean commute time for all commuters is between 25.45 and 31.35 minutes.`
    },
    {
      id: 'apstats-confidenceintervals-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**$t$-Interval Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The $t$-distribution has heavier tails than the normal because:',
            options: ['The sample is always small', 'It accounts for extra uncertainty from estimating $\\sigma$ with $s$', 'It is based on the population', 'The degrees of freedom are too large'],
            correctAnswer: 1,
            explanation: 'Using $s$ instead of $\\sigma$ introduces additional variability. The heavier tails of the $t$-distribution reflect this extra uncertainty.'
          },
          {
            question: 'As degrees of freedom increase, the $t$-distribution:',
            options: ['Becomes more spread out', 'Approaches the standard normal', 'Becomes skewed', 'Stays the same'],
            correctAnswer: 1,
            explanation: 'As $df \\to \\infty$, $s$ becomes an increasingly precise estimate of $\\sigma$, and the $t$-distribution converges to the standard normal $z$-distribution.'
          },
          {
            question: 'For a sample of $n = 20$, the degrees of freedom for a one-sample $t$-interval are:',
            options: ['$20$', '$19$', '$21$', '$18$'],
            correctAnswer: 1,
            explanation: '$df = n - 1 = 20 - 1 = 19$.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p3-input',
      type: 'input-boxes' as const,
      content: `
**$t$-Interval Calculations** 🧮

A random sample of 25 test scores: $\\bar{x} = 82$, $s = 10$. Build a 95% CI. Use $t^* = 2.064$ ($df = 24$).

**1)** What is the standard error?

**2)** What is the margin of error?

**3)** What is the lower bound of the 95% CI? (Round to 1 decimal)
      `,
      exercise: {
        inputs: [
          {
            label: 'Standard error',
            correctAnswer: '2',
            explanation: '$SE = s/\\sqrt{n} = 10/\\sqrt{25} = 10/5 = 2$.'
          },
          {
            label: 'Margin of error',
            correctAnswer: '4.128',
            explanation: '$ME = t^* \\times SE = 2.064 \\times 2 = 4.128$.'
          },
          {
            label: 'Lower bound',
            correctAnswer: '77.9',
            explanation: 'Lower bound $= 82 - 4.128 = 77.872 \\approx 77.9$. The 95% CI is approximately $(77.9, 86.1)$.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**$z$ vs. $t$ Decision** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ci3-dd1',
            label: 'Population SD is known → use the ___ distribution',
            options: ['$z$', '$t$'],
            correctIndex: 0,
            explanation: 'When $\\sigma$ is known, use $z$. In practice this is rare — most problems use $t$.'
          },
          {
            id: 'ci3-dd2',
            label: 'Sample SD $s$ is used → use the ___ distribution',
            options: ['$z$', '$t$'],
            correctIndex: 1,
            explanation: 'When $\\sigma$ is unknown and estimated by $s$, use $t$ with $df = n-1$.'
          },
          {
            id: 'ci3-dd3',
            label: 'With $n = 10$ and no outliers, the Normal condition is ___ for a $t$-interval',
            options: ['satisfied — if population is approximately normal', 'not satisfied — need $n \\geq 30$', 'always satisfied for $t$-tests'],
            correctIndex: 0,
            explanation: 'With $n < 15$, we need the population to be approximately normal (check via dotplot/histogram). No strong skewness or outliers allows us to proceed.'
          },
          {
            id: 'ci3-dd4',
            label: 'The $t^*$ value for 95% confidence with $df = 9$ is ___ $z^* = 1.96$',
            options: ['less than', 'equal to', 'greater than'],
            correctIndex: 2,
            explanation: '$t^*$ for $df = 9$ at 95% is about 2.262, which is greater than $z^* = 1.960$. The $t$-interval is always wider.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — One-Sample $t$-Interval** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which formula is correct for a one-sample $t$-interval?',
            options: ['$\\hat{p} \\pm z^*\\sqrt{\\hat{p}(1-\\hat{p})/n}$', '$\\bar{x} \\pm t^* \\cdot s/\\sqrt{n}$', '$\\bar{x} \\pm z^* \\cdot \\sigma/\\sqrt{n}$', '$\\bar{x} \\pm t^* \\cdot \\sigma/\\sqrt{n}$'],
            correctAnswer: 1,
            explanation: 'The one-sample $t$-interval uses $t^*$ (not $z^*$) and $s$ (not $\\sigma$) because $\\sigma$ is unknown.'
          },
          {
            question: 'A 95% $t$-interval with $df = 5$ uses $t^* = 2.571$. The same interval with $df = 50$ uses $t^* = 2.009$. The interval with $df = 5$ is:',
            options: ['Narrower', 'Wider', 'The same width', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'Larger $t^*$ produces a larger margin of error and thus a wider interval. Small samples give less information, so the interval must be wider.'
          },
          {
            question: '$\\bar{x} = 50$, $s = 12$, $n = 36$, $t^* = 2.030$. The 95% CI is:',
            options: ['$(45.94, 54.06)$', '$( 47.97, 52.03)$', '$(46.84, 53.16)$', '$(49.66, 50.34)$'],
            correctAnswer: 0,
            explanation: '$SE = 12/6 = 2$. $ME = 2.030 \\times 2 = 4.06$. CI $= 50 \\pm 4.06 = (45.94, 54.06)$.'
          },
          {
            question: 'Which condition is specific to $t$-intervals (not $z$-intervals for proportions)?',
            options: ['Random', '10%', 'Check sample data for skewness and outliers', 'Large counts'],
            correctAnswer: 2,
            explanation: 'For means with small $n$, we check the sample data (dotplot/histogram) for skewness and outliers. The "large counts" condition is for proportions.'
          },
          {
            question: 'A 95% CI for $\\mu$ is $(12.3, 18.7)$. The claim $\\mu = 20$ is:',
            options: ['Supported by the data', 'Not a plausible value at the 95% level', 'Proven false', 'The point estimate'],
            correctAnswer: 1,
            explanation: '20 falls outside the interval, so it is not a plausible value for $\\mu$ at 95% confidence.'
          },
          {
            question: 'Why do we use $n - 1$ degrees of freedom?',
            options: ['Convention', 'Because $s$ uses $n - 1$ in its denominator, creating a constraint', 'To make the interval narrower', 'Because we lose one data point'],
            correctAnswer: 1,
            explanation: 'The sample standard deviation $s$ divides by $n-1$, creating one constraint (the deviations must sum to zero). This leaves $n-1$ free pieces of information.'
          },
          {
            question: 'For $n = 8$ and a strongly skewed sample, what should you do?',
            options: ['Proceed with the $t$-interval — $t$ handles skewness', 'Do not construct the interval — Normal condition is not met', 'Use a $z$-interval instead', 'Increase $t^*$ to compensate'],
            correctAnswer: 1,
            explanation: 'With $n < 15$ and strong skewness, the Normal condition fails. The $t$-interval is not appropriate. Consider a larger sample or a nonparametric method.'
          },
          {
            question: 'The width of a confidence interval equals:',
            options: ['Margin of error', '$2 \\times$ margin of error', '$z^* \\times SE$', 'Upper bound minus $\\bar{x}$'],
            correctAnswer: 1,
            explanation: 'Width = upper bound $-$ lower bound $= (\\bar{x} + ME) - (\\bar{x} - ME) = 2 \\times ME$.'
          },
          {
            question: 'A 90% CI is $(40, 60)$ and a 99% CI is $(35, 65)$. The point estimate $\\bar{x}$ is:',
            options: ['$40$', '$50$', '$60$', 'Different for each interval'],
            correctAnswer: 1,
            explanation: 'Both intervals are centered at the same point estimate: $(40+60)/2 = (35+65)/2 = 50$. Only the width changes with confidence level.'
          },
          {
            question: 'A student constructs a $t$-interval but forgets to check conditions. On the AP exam, this typically costs:',
            options: ['No points — the answer is what matters', '1 point (out of 4)', '1–2 points — conditions are separately scored', 'All points'],
            correctAnswer: 2,
            explanation: 'The AP rubric typically allocates 1–2 points (out of 4) for correctly stating and checking conditions. Skipping them is costly.'
          }
        ]
      }
    }
  ]
};
