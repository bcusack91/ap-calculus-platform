export const apStatsConfIntPart1Data = {
  topicSlug: 'confidence-intervals-apstats',
  sections: [
    {
      id: 'apstats-confidenceintervals-p1-intro',
      type: 'text' as const,
      content: `# 📐 Introduction to Confidence Intervals

**Part 1 of 7 — Estimating Population Parameters**

---

### Point Estimates vs. Interval Estimates

| Type | Example | Limitation |
|------|---------|-----------|
| **Point estimate** | $\\hat{p} = 0.52$ | No indication of precision |
| **Confidence interval** | $(0.48, 0.56)$ | Shows range of plausible values |

---

### Confidence Interval Structure

$$\\text{estimate} \\pm \\text{margin of error}$$

$$\\text{estimate} \\pm z^* \\cdot \\text{standard error}$$

---

### What Does "95% Confident" Mean?

If we repeated the sampling process many times and built a 95% CI each time, **about 95% of those intervals would contain the true parameter**.

> ⚠️ It does **NOT** mean there is a 95% probability that the parameter is in this particular interval. The parameter is fixed — it is either in the interval or it is not.

---

### Common Confidence Levels

| Confidence Level | $z^*$ | Margin of Error |
|-----------------|-------|----------------|
| 90% | 1.645 | Narrower |
| 95% | 1.960 | Standard |
| 99% | 2.576 | Wider |

> 🔑 Higher confidence → wider interval → less precise. There is always a tradeoff between confidence and precision.`
    },
    {
      id: 'apstats-confidenceintervals-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Confidence Interval Basics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 95% confidence interval means:',
            options: ['95% of the data falls in this range', '95% probability the parameter is in this interval', '95% of samples produce intervals containing the parameter', 'The sample is 95% accurate'],
            correctAnswer: 2,
            explanation: 'A 95% CI means the method produces intervals that capture the true parameter 95% of the time over many repetitions.'
          },
          {
            question: 'Increasing the confidence level from 95% to 99% will:',
            options: ['Narrow the interval', 'Widen the interval', 'Not change the interval', 'Reduce the sample size needed'],
            correctAnswer: 1,
            explanation: 'Higher confidence requires a larger $z^*$ (2.576 vs 1.960), producing a wider interval.'
          },
          {
            question: 'The margin of error depends on all of these EXCEPT:',
            options: ['Sample size', 'Confidence level', 'Standard error', 'Population parameter'],
            correctAnswer: 3,
            explanation: 'The margin of error = $z^* \\times SE$. It depends on sample size (through SE), confidence level (through $z^*$), but not the unknown population parameter.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p1-input',
      type: 'input-boxes' as const,
      content: `
**Confidence Interval Calculations** 🧮

A poll finds $\\hat{p} = 0.60$ with $n = 400$.

**1)** Standard error $= \\sqrt{\\hat{p}(1-\\hat{p})/n} = \\sqrt{0.24/400}$. Round to 3 decimal places.

**2)** For a 95% CI, the margin of error $= 1.96 \\times SE$. Round to 3 decimal places.

**3)** The 95% CI upper bound $= 0.60 + ME$. Round to 3 decimal places.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.024', '0.048', '0.648'],
        hint1: '$\\sqrt{0.0006} \\approx 0.0245 \\approx 0.024$.',
        hint2: '$1.96 \\times 0.0245 \\approx 0.048$.',
        hint3: '$0.60 + 0.048 = 0.648$.',
        explanation: '1) SE $\\approx 0.024$. 2) ME $\\approx 0.048$. 3) Upper bound $\\approx 0.648$. The 95% CI is approximately $(0.552, 0.648)$.'
      }
    }
  ]
};
