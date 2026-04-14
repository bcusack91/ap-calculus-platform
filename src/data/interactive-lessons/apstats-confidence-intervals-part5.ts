export const apStatsConfIntPart5Data = {
  topicSlug: 'confidence-intervals-apstats',
  sections: [
    {
      id: 'apstats-confidenceintervals-p5-intro',
      type: 'text' as const,
      content: `# 📊 Interpreting Confidence Intervals

**Part 5 of 7 — What a CI Really Means**

---

### Topics in This Part

| Section |
|---------|
| 📐 Correct Interpretation Template |
| ❌ Common Misinterpretations |
| 🔗 Connecting CIs to Significance Tests |
| 📝 AP Free-Response Scoring |

> 🔑 **Key Concept:** A confidence interval is about the *process*, not the specific interval. "95% confident" means the method produces intervals that capture the true parameter 95% of the time in repeated sampling.

---

### The Correct Interpretation

The AP exam requires this precise language:

$$\\text{"We are [C]\\% confident that the true [parameter in context] is between [lower] and [upper]."}$$

**Breaking it down:**

| Component | What It Means |
|-----------|---------------|
| "We are 95% confident..." | The method captures the true parameter 95% of the time |
| "the true [parameter]..." | This is the population parameter, NOT the sample statistic |
| "is between..." | States the interval bounds |
| "...in context" | References the specific variable and population |

### Full-Credit Example

**Context:** 95% CI for mean commute time: $(25.4, 31.4)$

✅ "We are 95% confident that the **true mean commute time for all workers in this city** is between 25.4 and 31.4 minutes."

---

### Common Misinterpretations (All Are WRONG)

| ❌ Wrong Statement | Why It Is Wrong |
|-------------------|-----------------|
| "There is a 95% probability that $\\mu$ is in this interval" | After computing, $\\mu$ is either in the interval or it is not — no probability |
| "95% of samples fall in this interval" | Samples have values, not intervals |
| "95% of all commuters have commute times between 25.4 and 31.4" | CIs estimate the mean, not individual values |
| "The sample mean is between 25.4 and 31.4" | We know $\\bar{x}$ exactly — it is the center of the interval |
| "95% of the time, $\\bar{x}$ falls in this interval" | Backward — the interval is built around $\\bar{x}$ |

> ⚠️ **AP Scoring Note:** Using "probability" instead of "confidence" when interpreting a CI loses points on the AP exam.

---

### What "95% Confident" Really Means

If we took **many samples** and built a CI from each one:
- About **95% of those intervals** would contain the true $\\mu$
- About **5% would miss** it
- Any single interval either contains $\\mu$ or does not — we just don't know which

This is the **frequentist interpretation**: confidence describes the long-run success rate of the method.

---

### Connecting CIs to Hypothesis Tests

A confidence interval can be used as a two-sided test:

| If the CI... | Then at significance level $\\alpha$... |
|-------------|---------------------------------------|
| Contains $\\mu_0$ | Fail to reject $H_0: \\mu = \\mu_0$ |
| Does not contain $\\mu_0$ | Reject $H_0: \\mu = \\mu_0$ |

**Relationship:** A 95% CI corresponds to $\\alpha = 0.05$ two-sided test. A 99% CI corresponds to $\\alpha = 0.01$ two-sided test.

**Example:** If a 95% CI for $\\mu$ is $(25.4, 31.4)$, then:
- $H_0: \\mu = 28$ → fail to reject (28 is in the interval)
- $H_0: \\mu = 35$ → reject (35 is outside the interval)`
    },
    {
      id: 'apstats-confidenceintervals-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Interpretation Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 95% CI for $\\mu$ is $(40, 60)$. Which interpretation is correct?',
            options: ['There is a 95% chance $\\mu$ is between 40 and 60', 'We are 95% confident the true mean is between 40 and 60', '95% of individuals fall between 40 and 60', 'The sample mean is between 40 and 60'],
            correctAnswer: 1,
            explanation: '"95% confident" means the method works 95% of the time. We never say "95% chance" about a specific computed interval.'
          },
          {
            question: '"95% confidence" refers to:',
            options: ['The probability that this specific interval contains $\\mu$', 'The long-run capture rate of the method', 'The percentage of data in the interval', 'How sure you feel about the answer'],
            correctAnswer: 1,
            explanation: 'Confidence describes the long-run success rate: if we repeated the process many times, about 95% of intervals would capture $\\mu$.'
          },
          {
            question: 'A 90% CI for $\\mu$ is $(12, 20)$. Can we use this to test $H_0: \\mu = 22$ at $\\alpha = 0.10$?',
            options: ['No — CIs and tests are unrelated', 'Yes — reject $H_0$ since 22 is outside the interval', 'Yes — fail to reject since 22 is close', 'Only if we use a $z$-test'],
            correctAnswer: 1,
            explanation: 'A 90% CI corresponds to a two-sided test at $\\alpha = 0.10$. Since 22 is outside the interval, we reject $H_0$.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Right or Wrong?** 🔍

Classify each interpretation of a 95% CI $(50, 70)$ for the mean test score.
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ci5-dd1',
            label: '"We are 95% confident the true mean score is between 50 and 70" →',
            options: ['Correct', 'Incorrect'],
            correctIndex: 0,
            explanation: 'This uses the proper template: confidence level + true parameter + interval bounds.'
          },
          {
            id: 'ci5-dd2',
            label: '"There is a 95% probability that $\\mu$ is between 50 and 70" →',
            options: ['Correct', 'Incorrect'],
            correctIndex: 1,
            explanation: 'WRONG — after computing the interval, $\\mu$ is either in it or not. We say "confident," not "probability."'
          },
          {
            id: 'ci5-dd3',
            label: '"95% of students scored between 50 and 70" →',
            options: ['Correct', 'Incorrect'],
            correctIndex: 1,
            explanation: 'WRONG — the CI estimates the population mean, not individual values. Most individual scores have far more spread than the CI.'
          },
          {
            id: 'ci5-dd4',
            label: '"If we repeated this study many times, about 95% of the resulting CIs would contain $\\mu$" →',
            options: ['Correct', 'Incorrect'],
            correctIndex: 0,
            explanation: 'This is the correct long-run frequency interpretation of "95% confidence."'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p5-input',
      type: 'input-boxes' as const,
      content: `
**CI and Hypothesis Test Connection** 🧮

A 95% CI for $\\mu$ is $(18.2, 24.8)$.

**1)** What is the point estimate $\\bar{x}$? (Hint: center of the interval)

**2)** What is the margin of error?

**3)** A test of $H_0: \\mu = 25$ at $\\alpha = 0.05$ (two-sided) would ___? Enter "reject" or "fail to reject".
      `,
      exercise: {
        inputs: [
          {
            label: 'Point estimate',
            correctAnswer: '21.5',
            explanation: '$\\bar{x} = (18.2 + 24.8)/2 = 43.0/2 = 21.5$. The point estimate is always the center of the CI.'
          },
          {
            label: 'Margin of error',
            correctAnswer: '3.3',
            explanation: '$ME = (24.8 - 18.2)/2 = 6.6/2 = 3.3$. The ME is half the width of the interval.'
          },
          {
            label: 'Decision',
            correctAnswer: 'reject',
            explanation: '25 is outside the 95% CI $(18.2, 24.8)$, so we reject $H_0: \\mu = 25$ at $\\alpha = 0.05$.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Interpreting CIs** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'On the AP exam, "We are 95% confident..." means:',
            options: ['We are personally 95% sure', 'The method captures the true parameter 95% of the time in repeated sampling', '95% of the data is in the interval', 'The p-value is 0.95'],
            correctAnswer: 1,
            explanation: 'Confidence is about the method, not personal certainty. In repeated sampling, 95% of CIs produced this way would capture the parameter.'
          },
          {
            question: 'A student writes: "There is a 95% probability that $\\mu$ falls in this interval." This costs points because:',
            options: ['The word "probability" should be "chance"', 'After computing, $\\mu$ is either in the interval or not — it is not random', 'The interval is too wide', '95% is not high enough'],
            correctAnswer: 1,
            explanation: '$\\mu$ is a fixed (unknown) value. Once the interval is computed, it either contains $\\mu$ or does not. Probability applies to the method, not the specific interval.'
          },
          {
            question: 'A 99% CI is $(10, 30)$ and a 95% CI is $(12, 28)$. Which is wider?',
            options: ['The 99% CI', 'The 95% CI', 'They are the same', 'Cannot tell'],
            correctAnswer: 0,
            explanation: '99% CI width = $30 - 10 = 20$. 95% CI width = $28 - 12 = 16$. Higher confidence → wider interval.'
          },
          {
            question: 'A 95% CI for $\\mu$ is $(100, 120)$. Testing $H_0: \\mu = 115$ at $\\alpha = 0.05$:',
            options: ['Reject — 115 is in the interval', 'Fail to reject — 115 is in the interval', 'Reject — 115 is close to the edge', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '115 is inside the 95% CI, so at $\\alpha = 0.05$, we fail to reject $H_0: \\mu = 115$.'
          },
          {
            question: 'Which is the correct way to state conditions before interpreting?',
            options: ['Skip conditions if the sample is large', 'State Random, 10%, and Normal/Large counts before computing', 'Only check normality', 'Conditions are only for hypothesis tests'],
            correctAnswer: 1,
            explanation: 'The AP rubric requires checking all three conditions (Random, 10%, Normal/Large) before constructing and interpreting a CI.'
          },
          {
            question: '"95% of all intervals constructed this way contain the true $\\mu$." This statement is:',
            options: ['Correct', 'Incorrect — it should say "exactly 95%"', 'Incorrect — it should say "probability"', 'Incorrect — it describes individual values'],
            correctAnswer: 0,
            explanation: 'This correctly describes the long-run frequency interpretation of 95% confidence.'
          },
          {
            question: 'A CI for $\\mu$ is $(45, 55)$. The sample mean $\\bar{x}$ is:',
            options: ['Unknown', '50', 'Between 45 and 55 but not exactly 50', 'Could be anything'],
            correctAnswer: 1,
            explanation: 'The sample mean is always the center of the CI: $(45+55)/2 = 50$.'
          },
          {
            question: 'A 95% CI of $(2.1, 5.3)$ means that $\\mu = 3.7$ is:',
            options: ['The true value', 'A plausible value at the 95% level', 'Proven correct', 'The only possible value'],
            correctAnswer: 1,
            explanation: '3.7 is inside the interval, so it is a plausible value for $\\mu$ at the 95% confidence level.'
          },
          {
            question: 'If 100 researchers each build a 95% CI for the same $\\mu$, we expect:',
            options: ['All 100 intervals to contain $\\mu$', 'About 95 to contain $\\mu$', 'Exactly 95 to contain $\\mu$', 'None — each interval either contains $\\mu$ or not'],
            correctAnswer: 1,
            explanation: 'About 95 of the 100 intervals would be expected to contain $\\mu$. Not exactly 95 — there is randomness in the process.'
          },
          {
            question: 'A full-credit AP interpretation includes all EXCEPT:',
            options: ['Confidence level', 'The parameter in context', 'Interval bounds', 'The sample statistic value'],
            correctAnswer: 3,
            explanation: 'The interpretation mentions confidence level, the true parameter in context, and the bounds. The sample statistic is not part of the interpretation.'
          }
        ]
      }
    }
  ]
};
