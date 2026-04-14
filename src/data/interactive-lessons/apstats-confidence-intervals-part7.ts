export const apStatsConfIntPart7Data = {
  topicSlug: 'confidence-intervals-apstats',
  sections: [
    {
      id: 'apstats-confidenceintervals-p7-intro',
      type: 'text' as const,
      content: `# 📊 Review & Applications

**Part 7 of 7 — Comprehensive Review**

---

### Topics in This Part

| Section |
|---------|
| 📋 Summary of All CI Procedures |
| 🔄 Proportions vs. Means Comparison |
| 📐 Formula Reference Sheet |
| 📝 Cumulative Practice |

> 🔑 **Key Concept:** This part brings together everything from the Confidence Intervals unit. Use it as your final review before the exam.

---

### CI Procedure Decision Chart

| Question | Proportion | Mean |
|----------|-----------|------|
| Parameter | $p$ | $\\mu$ |
| Statistic | $\\hat{p}$ | $\\bar{x}$ |
| Distribution | $z$ | $t$ (df $= n-1$) |
| SE formula | $\\sqrt{\\hat{p}(1-\\hat{p})/n}$ | $s/\\sqrt{n}$ |
| Normal condition | $n\\hat{p} \\geq 10$ & $n(1-\\hat{p}) \\geq 10$ | $n \\geq 30$ or approx. normal |

---

### Formula Reference

| Interval | Formula |
|----------|---------|
| One-proportion $z$ | $\\hat{p} \\pm z^* \\sqrt{\\hat{p}(1-\\hat{p})/n}$ |
| One-sample $t$ | $\\bar{x} \\pm t^* \\cdot s/\\sqrt{n}$ |
| Sample size (proportion) | $n = (z^*/ME)^2 \\cdot \\hat{p}(1-\\hat{p})$ |
| Sample size (mean) | $n = (z^* \\sigma / ME)^2$ |

---

### What Affects CI Width?

| Factor | Effect on Width |
|--------|----------------|
| ↑ Confidence level | Wider (larger $z^*$ or $t^*$) |
| ↑ Sample size | Narrower ($SE$ decreases) |
| ↑ Variability ($s$ or $\\hat{p}$ near 0.5) | Wider ($SE$ increases) |

---

### The Complete 4-Step Process

**1. Identify:** Name the procedure, state the parameter in context, give the confidence level.

**2. Conditions:** Check Random, 10%, and Normal/Large Counts (proportions) or Normal/Large Sample (means).

**3. Calculate:** Show the formula, plug in values, give both the ME and the interval.

**4. Interpret:** "We are C% confident that the true [parameter in context] is between [lower] and [upper]."

> ⚠️ **Never say "probability"** in the interpretation. Say "confident."

---

### Interpretation vs. Meaning

| What to Say | When |
|-------------|------|
| "We are 95% confident that the true mean..." | Interpreting a specific CI |
| "If we repeated this many times, about 95% of CIs would contain $\\mu$" | Explaining what 95% confidence means |
| "Values outside the CI are not plausible at the 95% level" | Using CI as hypothesis test |`
    },
    {
      id: 'apstats-confidenceintervals-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'You want to estimate a proportion. Which procedure do you use?',
            options: ['One-sample $t$-interval', 'One-proportion $z$-interval', 'Two-sample $t$-interval', 'Chi-square test'],
            correctAnswer: 1,
            explanation: 'Proportions use the $z$-distribution. The one-proportion $z$-interval is the correct procedure.'
          },
          {
            question: 'The standard error for a sample mean is:',
            options: ['$s/n$', '$s/\\sqrt{n}$', '$\\sigma/n$', '$\\sqrt{\\hat{p}(1-\\hat{p})/n}$'],
            correctAnswer: 1,
            explanation: '$SE = s/\\sqrt{n}$ for a sample mean when $\\sigma$ is unknown.'
          },
          {
            question: 'Which is NOT a way to make a CI narrower?',
            options: ['Increase sample size', 'Decrease confidence level', 'Increase confidence level', 'Decrease variability in the data'],
            correctAnswer: 2,
            explanation: 'Increasing confidence level makes the interval WIDER (larger critical value). The other options all narrow it.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

**Problem 1:** $n = 400$, $\\hat{p} = 0.55$, 95% CI. Calculate the margin of error. (Use $z^* = 1.96$, round to 3 decimal places)

**Problem 2:** $n = 50$, $\\bar{x} = 72$, $s = 10$, $t^* = 2.010$ ($df = 49$). What is the upper bound of the CI?

**Problem 3:** You want ME $\\leq 0.02$ for a 95% CI for a proportion (use $\\hat{p} = 0.5$). What minimum $n$ is needed?
      `,
      exercise: {
        inputs: [
          {
            label: 'ME for proportion',
            correctAnswer: '0.049',
            explanation: '$SE = \\sqrt{0.55 \\times 0.45/400} = \\sqrt{0.2475/400} = \\sqrt{0.000619} = 0.02487$. $ME = 1.96 \\times 0.02487 = 0.04874 \\approx 0.049$.'
          },
          {
            label: 'Upper bound for mean',
            correctAnswer: '74.84',
            explanation: '$SE = 10/\\sqrt{50} = 1.414$. $ME = 2.010 \\times 1.414 = 2.842$. Upper $= 72 + 2.842 = 74.842 \\approx 74.84$.'
          },
          {
            label: 'Required n',
            correctAnswer: '2401',
            explanation: '$n = (1.96/0.02)^2 \\times 0.25 = (98)^2 \\times 0.25 = 9604 \\times 0.25 = 2401$. Since 2401 is exact, $n = 2401$.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ci7-dd1',
            label: 'Estimating the mean height of trees ($\\sigma$ unknown) →',
            options: ['$z$-interval', '$t$-interval'],
            correctIndex: 1,
            explanation: 'Unknown $\\sigma$ and estimating a mean → one-sample $t$-interval.'
          },
          {
            id: 'ci7-dd2',
            label: 'Estimating the proportion of defective parts →',
            options: ['$z$-interval', '$t$-interval'],
            correctIndex: 0,
            explanation: 'Estimating a proportion → one-proportion $z$-interval.'
          },
          {
            id: 'ci7-dd3',
            label: 'A 95% CI is $(0.40, 0.60)$. Testing $H_0: p = 0.55$ at $\\alpha = 0.05$ →',
            options: ['Reject $H_0$', 'Fail to reject $H_0$'],
            correctIndex: 1,
            explanation: '0.55 is inside the interval, so at $\\alpha = 0.05$ we fail to reject $H_0$.'
          },
          {
            id: 'ci7-dd4',
            label: 'Increasing $n$ from 100 to 400 will ___ the ME by a factor of',
            options: ['Halve it', 'Quarter it', 'Double it'],
            correctIndex: 0,
            explanation: '$ME \\propto 1/\\sqrt{n}$. Going from 100 to 400: $\\sqrt{100}/\\sqrt{400} = 10/20 = 0.5$. ME is halved.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exam — Confidence Intervals Unit** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A one-proportion $z$-interval uses $z^*$ rather than $t^*$ because:',
            options: ['The sample is always large', 'The sampling distribution of $\\hat{p}$ is modeled by the normal distribution', 'Proportions have known $\\sigma$', 'The CLT does not apply to proportions'],
            correctAnswer: 1,
            explanation: 'The SD of $\\hat{p}$ can be computed directly from $\\hat{p}$, so we do not need to estimate a separate $\\sigma$. The normal model applies when Large Counts is met.'
          },
          {
            question: 'For a $t$-interval, $df = n - 1$ because:',
            options: ['Convention', 'One degree of freedom is used estimating $\\bar{x}$ when computing $s$', 'We subtract the mean', 'The formula requires it'],
            correctAnswer: 1,
            explanation: 'Computing $s$ uses $\\bar{x}$, which consumes one degree of freedom. This leaves $n-1$ free observations.'
          },
          {
            question: 'A 95% CI for $\\mu$ is $(80, 100)$. The margin of error is:',
            options: ['$80$', '$100$', '$10$', '$20$'],
            correctAnswer: 2,
            explanation: '$ME = (100 - 80)/2 = 10$. The width is 20, and the ME is half the width.'
          },
          {
            question: 'Which increases the width of a CI?',
            options: ['Larger $n$', 'Lower confidence level', 'Smaller $s$', 'Higher confidence level'],
            correctAnswer: 3,
            explanation: 'Higher confidence requires a larger critical value, increasing the margin of error and thus the width.'
          },
          {
            question: '$\\hat{p} = 0.30$, $n = 200$, 95% CI. Which condition check is correct?',
            options: ['$n\\hat{p} = 60 \\geq 10$ and $n(1-\\hat{p}) = 140 \\geq 10$ ✓', '$n = 200 \\geq 30$ ✓', '$\\sigma$ is known ✓', 'No outliers ✓'],
            correctAnswer: 0,
            explanation: 'For proportions, the Normal condition is Large Counts: $n\\hat{p} \\geq 10$ and $n(1-\\hat{p}) \\geq 10$. Both pass here.'
          },
          {
            question: 'The point estimate for a CI is always:',
            options: ['The lower bound', 'The upper bound', 'The center of the interval', 'Outside the interval'],
            correctAnswer: 2,
            explanation: 'The CI is point estimate $\\pm$ ME, so the point estimate is always the midpoint.'
          },
          {
            question: 'A 90% CI is $(12, 18)$ and a 99% CI from the same data is $(10, 20)$. The $\\bar{x}$ is:',
            options: ['15', '12', '18', 'Different for each'],
            correctAnswer: 0,
            explanation: 'Both intervals have the same center: $(12+18)/2 = (10+20)/2 = 15 = \\bar{x}$.'
          },
          {
            question: 'To plan a sample size for a mean, you need an estimate of:',
            options: ['$\\mu$', '$\\sigma$', '$\\hat{p}$', '$t^*$'],
            correctAnswer: 1,
            explanation: 'The formula $n = (z^* \\sigma / ME)^2$ requires a preliminary estimate of $\\sigma$.'
          },
          {
            question: 'A student computes $n = 500.3$ for a desired ME. The correct sample size is:',
            options: ['$500$', '$501$', '$500.3$', '$600$'],
            correctAnswer: 1,
            explanation: 'Always round UP to the next whole number. $n = 500$ would give a ME slightly larger than desired.'
          },
          {
            question: 'On the AP exam, a complete CI problem requires:',
            options: ['Just the interval bounds', 'Calculate and interpret only', 'Identify, Conditions, Calculate, Interpret', 'Hypotheses, test statistic, p-value, conclusion'],
            correctAnswer: 2,
            explanation: 'The 4-step framework for CIs: Identify the procedure, Check conditions, Calculate the interval, Interpret in context.'
          }
        ]
      }
    }
  ]
};
