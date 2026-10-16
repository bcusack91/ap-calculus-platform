export const apStatsNormalDistPart4Data = {
  topicSlug: 'normal-distribution-apstats',
  sections: [
    {
      id: 'apstats-normaldistribution-p4-intro',
      type: 'text' as const,
      content: `# 📈 Assessing Normality

**Part 4 of 7 — Is a Normal Model Reasonable?**

---

### Why Check?

A normal curve can model a distribution of data only if the data have a roughly normal shape. Later, inference procedures for means also ask whether the **sample data** could reasonably come from a normal population.

---

### Check the Shape with a Graph

Make a histogram, dotplot, stemplot or boxplot of the data and look for:

| Supports a normal model | Argues against a normal model |
|-------------------------|-------------------------------|
| One main peak (unimodal) | Two or more distinct peaks |
| Roughly symmetric | Strong skew in either direction |
| No outliers | Outliers, gaps or clusters |

> 🔑 **No real data set is perfectly normal.** We look for "close enough": roughly symmetric and unimodal with no outliers.

The AP exam checks normality with graphs and the empirical rule; normal probability plots are not part of the course.`
    },
    {
      id: 'apstats-normaldistribution-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Normality Assessment** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A histogram of 60 commute times is strongly skewed to the right with two high outliers. Is a normal model reasonable for these data?',
            options: ['Yes, because any sample of 60 values is normal', 'No, because the shape is far from symmetric', 'Yes, because the mean can still be calculated', 'No, because a normal model needs at least 100 values'],
            correctAnswer: 1,
            explanation: 'A normal model needs a roughly symmetric, unimodal shape without outliers, and strong right skew with outliers rules that out. A sample size does not make the data themselves normal, being able to compute a mean says nothing about shape, and there is no 100-value rule.'
          },
          {
            question: 'Which feature of a dotplot best supports using a normal model?',
            options: ['Two separate peaks of similar height', 'A long tail stretching to the right', 'One symmetric peak and no outliers', 'Roughly equal heights across all values'],
            correctAnswer: 2,
            explanation: 'A normal curve is unimodal and symmetric with no outliers. Two peaks suggest a bimodal distribution, a long right tail means skew, and equal heights describe an approximately uniform shape.'
          }
        ]
      }
    },
    {
      id: 'apstats-normaldistribution-p4-rule',
      type: 'text' as const,
      content: `### Check with the Empirical Rule

Compare the actual percent of data within 1, 2 and 3 standard deviations of the mean with 68%, 95% and 99.7%.

**Example:** 40 test scores have $\\bar{x} = 50$ and $s = 8$.

| Interval | Count | Percent | Normal model |
|----------|-------|---------|--------------|
| $50 \\pm 8$ (42 to 58) | 29 | 72.5% | 68% |
| $50 \\pm 16$ (34 to 66) | 38 | 95% | 95% |
| $50 \\pm 24$ (26 to 74) | 40 | 100% | 99.7% |

The percents are close to 68–95–99.7, so a normal model is reasonable.

---

### The Sample Data Condition (Preview of Unit 4)

For t-procedures, the population distribution should be approximately normal **or** $n \\geq 30$. With a small sample, check a graph of the sample data: it should be free from strong skewness and outliers.`
    },
    {
      id: 'apstats-normaldistribution-p4-input',
      type: 'input-boxes' as const,
      content: `
**Empirical Rule Check** 🧮

A sample of 50 values has $\\bar{x} = 20$ and $s = 4$. There are 33 values between 16 and 24, 48 values between 12 and 28, and all 50 between 8 and 32.

**1)** Percent within 1 SD of the mean?

**2)** Percent within 2 SDs?

**3)** Percent within 3 SDs?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['66', '96', '100'],
        hint1: '$33/50$',
        hint2: '$48/50$',
        hint3: '$50/50$',
        explanation: '1) $33/50 = 66\\%$. 2) $48/50 = 96\\%$. 3) $100\\%$. These are close to 68%, 95% and 99.7%, so a normal model is reasonable for these data.'
      }
    },
    {
      id: 'apstats-normaldistribution-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Sample Data Condition** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher has a random sample of $n = 12$ and plans a t-procedure for the mean. What does the sample data condition require?',
            options: ['The sample mean equals the median', 'At least 30 observations in the sample', 'No strong skew or outliers in a graph of the data', 'A sample standard deviation below 1'],
            correctAnswer: 2,
            explanation: 'With $n < 30$, a graph of the sample must be free of strong skewness and outliers so a normal population is plausible. Exact equality of mean and median is not required, $n \\geq 30$ is the alternative route that this sample does not meet, and the size of $s$ is irrelevant.'
          }
        ]
      }
    }
  ]
};
