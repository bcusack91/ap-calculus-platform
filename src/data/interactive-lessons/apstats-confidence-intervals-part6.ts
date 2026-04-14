export const apStatsConfIntPart6Data = {
  topicSlug: 'confidence-intervals-apstats',
  sections: [
    {
      id: 'apstats-confidenceintervals-p6-intro',
      type: 'text' as const,
      content: `# 📊 Problem-Solving Workshop

**Part 6 of 7 — Full AP Free-Response Practice**

---

### Topics in This Part

| Section |
|---------|
| 📝 The 4-Step Framework |
| 🔢 Worked Example: Proportion |
| 🔢 Worked Example: Mean |
| ⚠️ Common Mistakes |

> 🔑 **Key Concept:** On AP free-response questions, you must clearly show **all four steps**: Identify, Conditions, Calculate, and Interpret. Missing any step costs points.

---

### The 4-Step CI Framework

| Step | What to Do | Points |
|------|-----------|--------|
| **Identify** | State the procedure, parameter, and confidence level | 1 pt |
| **Conditions** | Name and check Random, 10%, Normal/Large | 1–2 pt |
| **Calculate** | Show formula, substitution, and answer | 1 pt |
| **Interpret** | "We are C% confident that the true [parameter in context] is between..." | 1 pt |

---

### Worked Example 1: One-Proportion Z-Interval

**Problem:** In a random sample of 500 adults, 320 support a new policy. Construct a 95% CI for the proportion who support the policy.

**Step 1 — Identify:**
We will construct a **one-proportion $z$-interval** for $p$, the true proportion of all adults who support the policy. $C = 95\\%$.

**Step 2 — Conditions:**
- **Random:** The problem states a random sample ✓
- **10%:** $500 < 10\\%$ of all adults ✓
- **Large Counts:** $n\\hat{p} = 500(0.64) = 320 \\geq 10$ ✓ and $n(1-\\hat{p}) = 500(0.36) = 180 \\geq 10$ ✓

**Step 3 — Calculate:**
$$\\hat{p} = \\frac{320}{500} = 0.64$$

$$SE = \\sqrt{\\frac{0.64(0.36)}{500}} = \\sqrt{\\frac{0.2304}{500}} = \\sqrt{0.000461} = 0.02147$$

$$ME = 1.96 \\times 0.02147 = 0.04209$$

$$CI = 0.64 \\pm 0.042 = (0.598, 0.682)$$

**Step 4 — Interpret:**
We are 95% confident that the true proportion of all adults who support the new policy is between 0.598 and 0.682.

---

### Worked Example 2: One-Sample T-Interval

**Problem:** A nutritionist measures the sodium content (mg) of 40 randomly selected frozen dinners. Results: $\\bar{x} = 894$, $s = 124$. Construct a 90% CI for the mean sodium content. ($t^* = 1.685$ for $df = 39$.)

**Step 1 — Identify:**
We will construct a **one-sample $t$-interval** for $\\mu$, the true mean sodium content of all frozen dinners of this brand. $C = 90\\%$.

**Step 2 — Conditions:**
- **Random:** "randomly selected" ✓
- **10%:** $40 < 10\\%$ of all frozen dinners produced ✓
- **Normal:** $n = 40 \\geq 30$, so by CLT the sampling distribution of $\\bar{x}$ is approximately normal ✓

**Step 3 — Calculate:**
$$SE = \\frac{124}{\\sqrt{40}} = \\frac{124}{6.325} = 19.61$$

$$ME = 1.685 \\times 19.61 = 33.04$$

$$CI = 894 \\pm 33.04 = (860.96, 927.04)$$

**Step 4 — Interpret:**
We are 90% confident that the true mean sodium content of all frozen dinners of this brand is between 860.96 mg and 927.04 mg.`
    },
    {
      id: 'apstats-confidenceintervals-p6-mistakes',
      type: 'text' as const,
      content: `## ⚠️ Common AP Mistakes

| Mistake | Fix |
|---------|-----|
| Not naming the procedure | "One-sample $t$-interval" or "One-proportion $z$-interval" |
| Checking conditions after calculating | Check conditions FIRST — before any computation |
| Writing "Normal" without justification | State WHY: "$n \\geq 30$ so CLT applies" or "no strong skewness/outliers" |
| "95% probability" in interpretation | Say "95% confident" — never "probability" |
| Not stating parameter in context | "true mean sodium content" not just "$\\mu$" |
| Confusing $\\hat{p}$ and $p$ | $\\hat{p}$ is from the sample, $p$ is the unknown parameter |

> 🔑 **AP Advice:** On FRQs, write more rather than less. Lost points from missing steps are harder to recover than time spent writing clearly.`
    },
    {
      id: 'apstats-confidenceintervals-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Framework Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the 4-step CI framework, which step typically earns the most points?',
            options: ['Identify', 'Conditions', 'Calculate', 'Interpret'],
            correctAnswer: 1,
            explanation: 'Conditions usually earns 1–2 points because you must name AND verify each condition. It is the most commonly missed step.'
          },
          {
            question: 'A student checks "Random" by writing "Assume random." This is:',
            options: ['Full credit — assumptions are fine', 'Partial credit — if the problem states random, say so', 'No credit — you cannot assume', 'Full credit — always'],
            correctAnswer: 1,
            explanation: 'If the problem states "random sample," reference that. If it does not, stating "assume random" may get partial credit but is weaker.'
          },
          {
            question: 'The 10% condition for a sample of 200 from a school of 1500 students:',
            options: ['Fails — $200 > 10\\%$ of 1500', 'Passes — $200 < 10\\%$ of 1500', 'Fails — $200/1500 = 13.3\\% > 10\\%$', 'Does not apply'],
            correctAnswer: 2,
            explanation: '$200/1500 = 0.133 = 13.3\\%$, which exceeds 10%. The 10% condition is not satisfied. This could affect the validity of the interval.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p6-input',
      type: 'input-boxes' as const,
      content: `
**Practice Calculations** 🧮

**Problem:** In a random sample of 250 households, 85 have a pet. Build a 99% CI for the true proportion. ($z^* = 2.576$)

**1)** What is $\\hat{p}$?

**2)** What is the standard error? (Round to 4 decimal places)

**3)** What is the margin of error? (Round to 4 decimal places)
      `,
      exercise: {
        inputs: [
          {
            label: 'p-hat',
            correctAnswer: '0.34',
            explanation: '$\\hat{p} = 85/250 = 0.34$.'
          },
          {
            label: 'Standard error',
            correctAnswer: '0.0300',
            explanation: '$SE = \\sqrt{0.34 \\times 0.66 / 250} = \\sqrt{0.2244/250} = \\sqrt{0.000898} = 0.02996 \\approx 0.0300$.'
          },
          {
            label: 'Margin of error',
            correctAnswer: '0.0772',
            explanation: '$ME = 2.576 \\times 0.0300 = 0.07728 \\approx 0.0772$. The 99% CI is approximately $(0.263, 0.417)$.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Procedure?** 🔍

Select the correct procedure for each scenario.
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ci6-dd1',
            label: 'Estimating the proportion of defective items → use',
            options: ['One-proportion $z$-interval', 'One-sample $t$-interval'],
            correctIndex: 0,
            explanation: 'Estimating a proportion → one-proportion $z$-interval.'
          },
          {
            id: 'ci6-dd2',
            label: 'Estimating the mean weight of packages ($\\sigma$ unknown) → use',
            options: ['One-proportion $z$-interval', 'One-sample $t$-interval'],
            correctIndex: 1,
            explanation: 'Estimating a mean with unknown $\\sigma$ → one-sample $t$-interval.'
          },
          {
            id: 'ci6-dd3',
            label: '$n = 12$, no outliers, roughly symmetric dotplot → Normal condition is',
            options: ['Met', 'Not met — need $n \\geq 30$'],
            correctIndex: 0,
            explanation: 'With $n < 15$, we need approximate normality. A symmetric dotplot with no outliers satisfies this for the $t$-interval.'
          },
          {
            id: 'ci6-dd4',
            label: 'A sample of 50 from a class of 300 → 10% condition is',
            options: ['Met — $50 < 10\\%$ of 300', 'Not met — $50/300 = 16.7\\% > 10\\%$'],
            correctIndex: 1,
            explanation: '$50/300 = 16.7\\%$, which exceeds 10%. The 10% condition fails.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The first step in a CI problem is to:',
            options: ['Calculate the interval', 'Identify the procedure and parameter', 'Check conditions', 'State the conclusion'],
            correctAnswer: 1,
            explanation: 'Step 1 is Identify: name the procedure (e.g., one-sample $t$-interval), the parameter, and the confidence level.'
          },
          {
            question: 'A student skips the Conditions step on a 4-point FRQ. Maximum score:',
            options: ['4/4', '3/4', '2/4', '1/4'],
            correctAnswer: 2,
            explanation: 'Conditions typically earn 1–2 points. Skipping them means losing those points, so maximum is about 2/4.'
          },
          {
            question: 'For a one-proportion $z$-interval, which condition checks that $n$ is large enough?',
            options: ['$n \\geq 30$', '$n\\hat{p} \\geq 10$ and $n(1-\\hat{p}) \\geq 10$', '$\\sigma$ is known', 'No outliers in the sample'],
            correctAnswer: 1,
            explanation: 'The Large Counts condition for proportions requires both $n\\hat{p} \\geq 10$ and $n(1-\\hat{p}) \\geq 10$.'
          },
          {
            question: '$\\hat{p} = 0.72$, $n = 150$, 95% CI. The SE is approximately:',
            options: ['$0.0367$', '$0.0200$', '$0.0500$', '$0.0720$'],
            correctAnswer: 0,
            explanation: '$SE = \\sqrt{0.72(0.28)/150} = \\sqrt{0.2016/150} = \\sqrt{0.001344} \\approx 0.0367$.'
          },
          {
            question: 'For a $t$-interval with $n = 25$, $\\bar{x} = 60$, $s = 5$, $t^* = 2.064$, the CI is:',
            options: ['$(57.94, 62.06)$', '$(58.0, 62.0)$', '$(55, 65)$', '$(59.0, 61.0)$'],
            correctAnswer: 0,
            explanation: '$SE = 5/5 = 1$. $ME = 2.064$. CI $= 60 \\pm 2.064 = (57.936, 62.064) \\approx (57.94, 62.06)$.'
          },
          {
            question: 'A 95% CI is $(0.45, 0.61)$. Is it plausible that $p = 0.50$?',
            options: ['Yes — 0.50 is inside the interval', 'No — 0.50 is below the center', 'Cannot determine', 'Only at the 99% level'],
            correctAnswer: 0,
            explanation: '0.50 is between 0.45 and 0.61, so it is a plausible value for $p$ at the 95% confidence level.'
          },
          {
            question: 'The AP exam uses the word "construct" for CIs. This means you must:',
            options: ['Only give the interval bounds', 'Show the 4-step process', 'Just calculate the ME', 'Only interpret'],
            correctAnswer: 1,
            explanation: '"Construct" on AP means the full 4-step process: Identify, Conditions, Calculate, Interpret.'
          },
          {
            question: 'A 90% CI and a 95% CI are built from the same data. Which is wider?',
            options: ['90%', '95%', 'Same width', 'Depends on the data'],
            correctAnswer: 1,
            explanation: 'Higher confidence requires a larger critical value ($z^*$ or $t^*$), producing a wider interval.'
          },
          {
            question: 'If a CI does not contain 0, and the parameter is a difference in proportions, then:',
            options: ['There is no significant difference', 'There is a statistically significant difference', '0 is the point estimate', 'The sample size was too small'],
            correctAnswer: 1,
            explanation: 'If 0 is outside the CI for a difference, we conclude the difference is statistically significant at that confidence level.'
          },
          {
            question: 'The margin of error controls the ___ of the confidence interval.',
            options: ['Center', 'Width', 'Confidence level', 'Shape'],
            correctAnswer: 1,
            explanation: 'Width $= 2 \\times ME$. The center is determined by the point estimate, not the ME.'
          }
        ]
      }
    }
  ]
};
