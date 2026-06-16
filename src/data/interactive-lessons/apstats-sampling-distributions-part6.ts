export const apStatsSamplingDistPart6Data = {
  topicSlug: 'sampling-distributions-apstats',
  sections: [
    {
      id: 'apstats-samplingdistributions-p6-intro',
      type: 'text' as const,
      content: `# � Problem-Solving Workshop

**Part 6 of 7 — Putting It All Together**

---

### Topics in This Part

| Section |
|---------|
| 🧮 Multi-Step Sampling Distribution Problems |
| 📊 Comparing Means vs. Proportions |
| 📝 AP Free-Response Strategies |
| ⚠️ Common Mistakes to Avoid |

> 🔑 **Key Concept:** AP free-response questions on sampling distributions typically require you to (1) describe the sampling distribution, (2) check conditions, and (3) calculate a probability. Practice doing all three in sequence.

---

### Problem-Solving Framework

For any sampling distribution problem, follow these steps:

1. **Identify** the parameter and statistic ($\\mu$ and $\\bar{x}$, or $p$ and $\\hat{p}$)
2. **Check conditions** (Random, 10%, Normal/Large Sample)
3. **Describe** the sampling distribution (Shape, Center, Spread)
4. **Calculate** using the $z$-score formula
5. **Interpret** in context`
    },
    {
      id: 'apstats-samplingdistributions-p6-worked1',
      type: 'text' as const,
      content: `## 📝 Worked Example 1: Sample Means

**Problem:** The weights of apples at a farm are normally distributed with $\\mu = 150$ g and $\\sigma = 20$ g. A random sample of 25 apples is selected.

**(a)** Describe the sampling distribution of $\\bar{x}$.

**Solution:**
- **Shape:** Population is normal, so the sampling distribution of $\\bar{x}$ is **exactly normal** for any $n$.
- **Center:** $\\mu_{\\bar{x}} = 150$ g
- **Spread:** $\\sigma_{\\bar{x}} = 20/\\sqrt{25} = 20/5 = 4$ g

$$\\bar{X} \\sim N(150, 4)$$

**(b)** Find $P(\\bar{x} > 158)$.

$$z = \\frac{158 - 150}{4} = \\frac{8}{4} = 2.00$$

$$P(\\bar{x} > 158) = P(Z > 2.00) = 1 - 0.9772 = 0.0228$$

**(c)** Find $P(145 < \\bar{x} < 155)$.

$$z_1 = \\frac{145 - 150}{4} = -1.25 \\qquad z_2 = \\frac{155 - 150}{4} = 1.25$$

$$P(145 < \\bar{x} < 155) = P(-1.25 < Z < 1.25) = 0.8944 - 0.1056 = 0.7888$$

---

## 📝 Worked Example 2: Sample Proportions

**Problem:** A website reports a 25% click-through rate ($p = 0.25$). A marketer samples 200 visitors.

**(a)** Check whether the normal approximation is valid.

- $np = 200(0.25) = 50 \\geq 10$ ✓
- $n(1-p) = 200(0.75) = 150 \\geq 10$ ✓

**(b)** Find $P(\\hat{p} < 0.20)$.

$$\\sigma_{\\hat{p}} = \\sqrt{\\frac{0.25 \\times 0.75}{200}} = \\sqrt{\\frac{0.1875}{200}} = \\sqrt{0.0009375} = 0.03062$$

$$z = \\frac{0.20 - 0.25}{0.03062} = \\frac{-0.05}{0.03062} = -1.63$$

$$P(\\hat{p} < 0.20) = P(Z < -1.63) = 0.0516$$

> 🔑 **AP Tip:** About 5% of the time, a sample of 200 would show less than 20% click-through — rare enough to be noteworthy, but not extreme.`
    },
    {
      id: 'apstats-samplingdistributions-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Problem-Solving Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'ACT scores: $\\mu = 21$, $\\sigma = 5$. For a random sample of 100, $P(\\bar{x} > 22)$ is closest to:',
            options: ['$0.4207$', '$0.3085$', '$0.0228$', '$0.0013$'],
            correctAnswer: 2,
            explanation: '$SE = 5/\\sqrt{100} = 0.5$. $z = (22-21)/0.5 = 2.0$. $P(Z > 2.0) = 0.0228$.'
          },
          {
            question: 'In a population where $p = 0.60$, a sample of 400 is drawn. $P(\\hat{p} > 0.64)$ is closest to:',
            options: ['$0.0516$', '$0.0228$', '$0.0516$', '$0.0505$'],
            correctAnswer: 1,
            explanation: '$\\sigma_{\\hat{p}} = \\sqrt{0.60 \\times 0.40/400} = \\sqrt{0.0006} = 0.02449$. $z = (0.64 - 0.60)/0.02449 = 1.63$. Wait — $P(Z>1.63) \\approx 0.0516$. Let me recalculate: $z = 0.04/0.02449 \\approx 1.633$, $P(Z > 1.633) \\approx 0.0512$. Closest to $0.0516$.'
          },
          {
            question: 'Why is $P(\\bar{x} > k)$ typically much smaller than $P(X > k)$ for the same $k > \\mu$?',
            options: ['Because $\\bar{x}$ is always less than $X$', 'Because the sampling distribution of $\\bar{x}$ has smaller spread than the population', 'Because the CLT changes the mean', 'Because of rounding errors'],
            correctAnswer: 1,
            explanation: 'The sampling distribution of $\\bar{x}$ has SD = $\\sigma/\\sqrt{n}$, which is much smaller than $\\sigma$. So extreme values of $\\bar{x}$ are much less common than extreme individual values.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Practice** 🧮

The mean household income in a city is $\\mu =$ \\$65,000 with $\\sigma =$ \\$15,000. A random sample of 225 households is drawn.

**1)** What is the standard error of $\\bar{x}$?

**2)** What is the $z$-score for $\\bar{x} =$ \\$67,000?

**3)** What is $P(\\bar{x} > 67{,}000)$ for $\\bar{x}$ in dollars (i.e. \\$67,000)? (Use $P(Z > 2) = 0.0228$)
      `,
      exercise: {
        inputs: [
          {
            label: 'Standard error',
            correctAnswer: '1000',
            explanation: '$SE = 15{,}000/\\sqrt{225} = 15{,}000/15 = 1{,}000$.'
          },
          {
            label: 'z-score',
            correctAnswer: '2',
            explanation: '$z = (67{,}000 - 65{,}000)/1{,}000 = 2{,}000/1{,}000 = 2$.'
          },
          {
            label: 'Probability',
            correctAnswer: '0.0228',
            explanation: '$P(\\bar{x} > 67{,}000) = P(Z > 2) = 0.0228$.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p6-mistakes',
      type: 'text' as const,
      content: `## ⚠️ Common Mistakes on the AP Exam

| Mistake | Why It's Wrong | Correct Approach |
|---------|---------------|-----------------|
| Using $\\sigma$ instead of $\\sigma/\\sqrt{n}$ | Confuses individual variability with sampling variability | Always use $\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n}$ for means |
| Forgetting to check conditions | Loses 1–2 points per FRQ | Name, check, and conclude for each condition |
| Writing $P(\\bar{x} = 158)$ | Continuous distributions have $P(=) = 0$ | Use $P(\\bar{x} > 158)$ or $P(\\bar{x} \\leq 158)$ |
| Checking $np \\geq 10$ for means | This is the proportions condition | For means, use $n \\geq 30$ or check for normality |
| Not interpreting in context | AP rubric requires context | "There is a 2.28% probability that the sample mean weight exceeds 158 g" |

> 🔑 **AP Tip:** The most common error is using $\\sigma$ where you need $\\sigma/\\sqrt{n}$. The sampling distribution is ALWAYS narrower than the population distribution.`
    },
    {
      id: 'apstats-samplingdistributions-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Error Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'sd6-dd1',
            label: 'A student calculates $z = (158 - 150)/20$ for a sample of 25. The error is:',
            options: ['Used wrong mean', 'Used $\\sigma$ instead of $\\sigma/\\sqrt{n}$', 'Used wrong $z$-table', 'No error'],
            correctIndex: 1,
            explanation: 'Should be $z = (158 - 150)/(20/\\sqrt{25}) = 8/4 = 2$, not $8/20 = 0.4$. Must divide $\\sigma$ by $\\sqrt{n}$.'
          },
          {
            id: 'sd6-dd2',
            label: 'The condition "$np \\geq 10$" applies to the sampling distribution of ___',
            options: ['$\\bar{x}$', '$\\hat{p}$', 'Both', 'Neither'],
            correctIndex: 1,
            explanation: 'The $np \\geq 10$ condition is specifically for the sampling distribution of sample proportions $\\hat{p}$.'
          },
          {
            id: 'sd6-dd3',
            label: '"We can be 95% confident" is appropriate language for ___',
            options: ['Hypothesis tests', 'Confidence intervals', 'Sampling distributions', 'Descriptive statistics'],
            correctIndex: 1,
            explanation: '"95% confident" language belongs to confidence intervals. For hypothesis tests, we talk about p-values and significance levels.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Battery life: $\\mu = 500$ hrs, $\\sigma = 40$ hrs. Sample of 64. $P(\\bar{x} < 490)$ is:',
            options: ['$0.0228$', '$0.1587$', '$0.4013$', '$0.0062$'],
            correctAnswer: 0,
            explanation: '$SE = 40/8 = 5$. $z = (490-500)/5 = -2$. $P(Z < -2) = 0.0228$.'
          },
          {
            question: 'A population has $p = 0.40$. Sample of 300. $\\sigma_{\\hat{p}}$ is:',
            options: ['$0.0283$', '$0.0400$', '$0.2400$', '$0.4000$'],
            correctAnswer: 0,
            explanation: '$\\sigma_{\\hat{p}} = \\sqrt{0.40 \\times 0.60/300} = \\sqrt{0.0008} = 0.0283$.'
          },
          {
            question: 'Exam scores: $\\mu = 72$, $\\sigma = 10$. For $n = 25$, what is $P(70 < \\bar{x} < 74)$?',
            options: ['$0.3413$', '$0.6827$', '$0.9544$', '$0.1587$'],
            correctAnswer: 1,
            explanation: '$SE = 10/5 = 2$. $z_1 = (70-72)/2 = -1$, $z_2 = (74-72)/2 = 1$. $P(-1 < Z < 1) \\approx 0.6827$.'
          },
          {
            question: 'Which would produce the smallest SE for $\\bar{x}$?',
            options: ['$n = 25, \\sigma = 10$', '$n = 100, \\sigma = 10$', '$n = 25, \\sigma = 20$', '$n = 100, \\sigma = 20$'],
            correctAnswer: 1,
            explanation: '$SE = \\sigma/\\sqrt{n}$. Option B: $10/10 = 1$. Option A: $10/5 = 2$. Option C: $20/5 = 4$. Option D: $20/10 = 2$. Smallest is 1.'
          },
          {
            question: 'A factory claims $p = 0.02$ defect rate. A sample of 1000 finds $\\hat{p} = 0.035$. The $z$-score is:',
            options: ['$1.07$', '$2.14$', '$3.39$', '$0.34$'],
            correctAnswer: 2,
            explanation: '$\\sigma_{\\hat{p}} = \\sqrt{0.02 \\times 0.98/1000} = \\sqrt{0.0000196} = 0.004427$. $z = (0.035-0.02)/0.004427 = 0.015/0.004427 \\approx 3.39$.'
          },
          {
            question: 'Why is the sampling distribution of $\\bar{x}$ more useful than the population distribution for inference?',
            options: ['It is easier to graph', 'It tells us how sample means behave, which is what we observe', 'It has a larger standard deviation', 'It is always symmetric'],
            correctAnswer: 1,
            explanation: 'We observe sample statistics, not population parameters. The sampling distribution describes the behavior of those statistics across repeated samples, enabling inference.'
          },
          {
            question: 'Heights of men: $\\mu = 70$ in, $\\sigma = 3$ in. For $n = 36$, $P(\\bar{x} > 71)$ is:',
            options: ['$0.0228$', '$0.3707$', '$0.1587$', '$0.0456$'],
            correctAnswer: 0,
            explanation: '$SE = 3/6 = 0.5$. $z = (71-70)/0.5 = 2$. $P(Z > 2) = 0.0228$.'
          },
          {
            question: 'If $P(\\hat{p} > 0.55) = 0.0228$ when $p = 0.50$ and $n = 400$, then $P(\\hat{p} < 0.45)$ is:',
            options: ['$0.0228$', '$0.9772$', '$0.0456$', '$0.5000$'],
            correctAnswer: 0,
            explanation: 'By symmetry of the normal distribution around $p = 0.50$, $P(\\hat{p} < 0.45) = P(\\hat{p} > 0.55) = 0.0228$.'
          },
          {
            question: 'A sample of 16 from a heavily skewed population. The CLT:',
            options: ['Guarantees normality of $\\bar{x}$', 'Does NOT guarantee normality — $n$ is too small', 'Is irrelevant for this situation', 'Only applies to proportions'],
            correctAnswer: 1,
            explanation: 'For heavily skewed populations, $n \\geq 30$ (or more) is typically needed. With $n = 16$, the CLT does not guarantee approximate normality.'
          },
          {
            question: 'The phrase "sampling variability" refers to:',
            options: ['Errors made during data collection', 'The natural variation of a statistic from sample to sample', 'Bias in the sampling method', 'The range of the data'],
            correctAnswer: 1,
            explanation: 'Sampling variability is the natural, expected variation in a statistic when different random samples are drawn. It is measured by the standard error.'
          }
        ]
      }
    }
  ]
};
