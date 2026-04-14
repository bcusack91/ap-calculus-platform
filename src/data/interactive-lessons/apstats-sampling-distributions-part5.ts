export const apStatsSamplingDistPart5Data = {
  topicSlug: 'sampling-distributions-apstats',
  sections: [
    {
      id: 'apstats-samplingdistributions-p5-intro',
      type: 'text' as const,
      content: `# ✅ Conditions for Inference

**Part 5 of 7 — The Three Conditions You Must Always Check**

---

### Topics in This Part

| Section |
|---------|
| 🎲 The Random Condition |
| 📏 The 10% (Independence) Condition |
| 📊 The Normal/Large Sample Condition |
| 📝 How to State Conditions on the AP Exam |

> 🔑 **Key Concept:** Every inference procedure on the AP exam requires you to check conditions **before** performing the test or building a confidence interval. Missing conditions = lost points.

---

### The Three Conditions Framework

Every inference procedure requires these three conditions:

| # | Condition | What It Checks |
|---|-----------|---------------|
| 1 | **Random** | Data comes from a random sample or random assignment |
| 2 | **10% / Independence** | Sample is < 10% of population (sampling without replacement) |
| 3 | **Normal/Large Sample** | Sampling distribution is approximately normal |

> ⚠️ **Warning:** Simply writing "conditions met" earns zero credit. You must **name** the condition, **check** it with numbers, and **state** whether it is satisfied.`
    },
    {
      id: 'apstats-samplingdistributions-p5-theory',
      type: 'text' as const,
      content: `## 🎲 Condition 1: Random

**What to check:** Was the data collected using a random process?
- Random sample from a population → inference about population parameters
- Random assignment in an experiment → inference about causation

**How to state it on the AP exam:**
- ✅ "The problem states that a random sample of 200 adults was selected."
- ❌ "Random ✓" (too vague — no credit)

---

## 📏 Condition 2: Independence (10% Condition)

**What to check:** Are individual observations approximately independent?

$$\\boxed{n \\leq 0.10 \\times N}$$

**How to state it:**
- ✅ "The sample of 150 is less than 10% of all registered voters in the state (over 5 million), so observations are approximately independent."
- ❌ "10% condition met" (no numbers shown)

> 🔑 **Key Concept:** This condition is automatically satisfied when sampling from a functionally infinite population (all U.S. adults, all manufactured items, etc.).

---

## 📊 Condition 3: Normal/Large Sample

This condition differs depending on the parameter:

### For Means ($\\bar{x}$):
| Situation | Normal condition satisfied? |
|-----------|---------------------------|
| Population is normal | Yes, for any $n$ |
| $n \\geq 30$ | Yes (CLT applies) |
| $15 \\leq n < 30$ | Only if no strong skewness or outliers |
| $n < 15$ | Only if population is approximately normal |

### For Proportions ($\\hat{p}$):
$$\\boxed{np \\geq 10 \\quad \\text{and} \\quad n(1-p) \\geq 10}$$

When checking with sample data (no known $p$):
$$n\\hat{p} \\geq 10 \\quad \\text{and} \\quad n(1-\\hat{p}) \\geq 10$$

**How to state it:**
- ✅ "The sample size is $n = 50 \\geq 30$, so by the CLT, the sampling distribution of $\\bar{x}$ is approximately normal."
- ✅ "$n\\hat{p} = 200(0.65) = 130 \\geq 10$ and $n(1-\\hat{p}) = 200(0.35) = 70 \\geq 10$."

> ⚠️ **Warning:** For proportions, you must check BOTH $np$ and $n(1-p)$. Checking only one is incomplete.`
    },
    {
      id: 'apstats-samplingdistributions-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Conditions Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A convenience sample of 500 shoppers is taken at a mall. Which condition is violated?',
            options: ['10% condition', 'Normal condition', 'Random condition', 'No condition is violated'],
            correctAnswer: 2,
            explanation: 'A convenience sample is NOT a random sample. The Random condition is violated, which means inference about the broader population is not valid.'
          },
          {
            question: 'A researcher samples 200 fish from a lake with 1,500 fish. Is the 10% condition met?',
            options: ['Yes, because $200 < 1500$', 'No, because $200/1500 = 13.3\\% > 10\\%$', 'Yes, because $200 \\geq 30$', 'Cannot determine without more information'],
            correctAnswer: 1,
            explanation: '$200/1500 \\approx 0.133 = 13.3\\%$. Since $13.3\\% > 10\\%$, the 10% condition is NOT met. Observations from this sample are not approximately independent.'
          },
          {
            question: 'For a one-sample $z$-test for a proportion, the Normal condition requires:',
            options: ['$n \\geq 30$', '$np_0 \\geq 10$ and $n(1-p_0) \\geq 10$', '$\\sigma$ is known', 'The population is normal'],
            correctAnswer: 1,
            explanation: 'For proportion inference, we need at least 10 expected successes and 10 expected failures under the null hypothesis value $p_0$.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p5-input',
      type: 'input-boxes' as const,
      content: `
**Checking Conditions Practice** 🧮

A random sample of 80 students from a university of 12,000 finds that 52 prefer online classes.

**1)** What fraction of the population is the sample? Express as a percentage (round to 1 decimal).

**2)** How many "successes" (prefer online) are in the sample?

**3)** How many "failures" (do not prefer online) are in the sample?
      `,
      exercise: {
        inputs: [
          {
            label: 'Sample as % of population',
            correctAnswer: '0.7',
            explanation: '$80/12{,}000 = 0.00\\overline{6} \\approx 0.7\\%$. Since $0.7\\% < 10\\%$, the 10% condition is met ✓.'
          },
          {
            label: 'Number of successes',
            correctAnswer: '52',
            explanation: '52 students prefer online classes. Since $52 \\geq 10$, the success count condition is met ✓.'
          },
          {
            label: 'Number of failures',
            correctAnswer: '28',
            explanation: '$80 - 52 = 28$ students do not prefer online. Since $28 \\geq 10$, the failure count condition is met ✓.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Condition Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'sd5-dd1',
            label: '"The problem states that residents were randomly selected" checks the ___ condition',
            options: ['Random', '10%', 'Normal/Large Sample'],
            correctIndex: 0,
            explanation: 'This statement verifies that data was collected using a random process — the Random condition.'
          },
          {
            id: 'sd5-dd2',
            label: '"250 is less than 10% of all registered voters" checks the ___ condition',
            options: ['Random', '10% / Independence', 'Normal/Large Sample'],
            correctIndex: 1,
            explanation: 'This verifies that the sample is small relative to the population, ensuring approximate independence.'
          },
          {
            id: 'sd5-dd3',
            label: '"$n = 45 \\geq 30$, so by the CLT..." checks the ___ condition',
            options: ['Random', '10%', 'Normal/Large Sample'],
            correctIndex: 2,
            explanation: 'Citing the CLT with $n \\geq 30$ is checking that the sampling distribution is approximately normal.'
          },
          {
            id: 'sd5-dd4',
            label: 'For a sample of 20 with a strongly skewed distribution, the Normal condition is ___',
            options: ['satisfied because $n \\geq 15$', 'not satisfied — sample too small for strong skew', 'always satisfied'],
            correctIndex: 1,
            explanation: 'With strong skewness and $n < 30$, the CLT may not apply. You need a larger sample or evidence that the population is not too skewed.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p5-worked',
      type: 'text' as const,
      content: `## 📝 AP-Style Condition Check (Full Credit Response)

**Problem:** A quality engineer takes a random sample of 150 batteries from a day's production of 2,000 batteries and finds that 12 are defective. She wants to construct a 95% confidence interval for the true proportion of defective batteries.

**Check all conditions for inference.**

---

**Model Response:**

**1. Random:** The problem states that the engineer selected a **random sample** of 150 batteries. ✓

**2. 10% Condition:** $n = 150$ is less than 10% of the day's production of $N = 2{,}000$ batteries ($150 < 200$). Observations are approximately independent. ✓

**3. Normal (Large Counts):** 
- Successes: $n\\hat{p} = 12 \\geq 10$ ✓
- Failures: $n(1-\\hat{p}) = 150 - 12 = 138 \\geq 10$ ✓

The sampling distribution of $\\hat{p}$ is approximately normal.

All conditions are met. We may proceed with the one-proportion $z$-interval.

> 🔑 **AP Tip:** This three-part format (name → check → conclude) is exactly what AP readers look for. Practice writing it out every time.`
    },
    {
      id: 'apstats-samplingdistributions-p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Conditions for Inference** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which condition cannot be fixed by increasing the sample size?',
            options: ['Normal/Large Sample', '10% Condition', 'Random', 'All can be fixed by increasing $n$'],
            correctAnswer: 2,
            explanation: 'If data is not randomly collected, no amount of additional data fixes the fundamental design flaw. Randomness is a property of how data is collected, not how much.'
          },
          {
            question: 'A voluntary online survey receives 5,000 responses. Is the Random condition met?',
            options: ['Yes — 5,000 is very large', 'Yes — online surveys are always random', 'No — voluntary response is not random', 'Cannot determine'],
            correctAnswer: 2,
            explanation: 'Voluntary response surveys attract people with strong opinions and are NOT random samples, regardless of size.'
          },
          {
            question: 'For a one-sample $t$-test with $n = 12$, the Normal condition requires:',
            options: ['Nothing special — $t$-tests always work', 'No strong skewness or outliers in the sample data', '$n \\geq 30$', '$np \\geq 10$'],
            correctAnswer: 1,
            explanation: 'With $n < 15$, the data must show no strong skewness or outliers. A dotplot or normal probability plot of the sample data should be checked.'
          },
          {
            question: 'A sample of 300 from a population of 2,500. Is the 10% condition met?',
            options: ['Yes ($300/2500 = 12\\% > 10\\%$)', 'No ($300/2500 = 12\\% > 10\\%$)', 'Yes ($300 < 2500$)', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$300/2500 = 0.12 = 12\\% > 10\\%$. The sample exceeds 10% of the population, so the condition is NOT met.'
          },
          {
            question: 'In an experiment with random assignment, the Random condition is met because:',
            options: ['Subjects were randomly selected from the population', 'Treatments were randomly assigned to subjects', 'The sample size is large', 'Both groups have equal sizes'],
            correctAnswer: 1,
            explanation: 'In experiments, random ASSIGNMENT (not random selection) satisfies the Random condition. This allows causal inference about treatment effects.'
          },
          {
            question: 'Which best describes why we check conditions?',
            options: ['To make the math easier', 'To ensure the sampling distribution has the assumed shape', 'To increase the sample size', 'To calculate the test statistic'],
            correctAnswer: 1,
            explanation: 'Conditions ensure that the theoretical sampling distribution (usually normal) is a good model for the actual behavior of the statistic.'
          },
          {
            question: 'A sample has $n\\hat{p} = 8$ and $n(1-\\hat{p}) = 92$. The Normal condition for proportions is:',
            options: ['Met — both values are positive', 'Met — $n(1-\\hat{p}) \\geq 10$', 'Not met — $n\\hat{p} < 10$', 'Not met — the values are too different'],
            correctAnswer: 2,
            explanation: 'Both $n\\hat{p} \\geq 10$ AND $n(1-\\hat{p}) \\geq 10$ are required. Here $n\\hat{p} = 8 < 10$, so the condition fails.'
          },
          {
            question: 'When sampling from "all U.S. adults," the 10% condition is:',
            options: ['Always violated', 'Usually satisfied automatically', 'Only met for $n > 10{,}000$', 'Irrelevant'],
            correctAnswer: 1,
            explanation: 'The U.S. adult population is ~260 million. Any reasonable sample size is a tiny fraction of that, so the 10% condition is automatically satisfied.'
          },
          {
            question: 'A student writes "all conditions are met" without explanation. On the AP exam, this earns:',
            options: ['Full credit if conditions are actually met', 'Partial credit', 'No credit — must show work', 'Full credit'],
            correctAnswer: 2,
            explanation: 'The AP rubric requires naming each condition and showing the check with specific numbers or references to the problem. Simply stating "conditions met" earns no credit.'
          },
          {
            question: 'For the CLT to apply to $\\bar{x}$ with $n = 25$, we need:',
            options: ['The population to be normal', 'The sample data to show no strong skewness or outliers', '$np \\geq 10$', 'Either A or B'],
            correctAnswer: 3,
            explanation: 'With $15 \\leq n < 30$, the CLT can apply if the sample shows no strong skewness or outliers. If the population is known to be normal, any $n$ works.'
          }
        ]
      }
    }
  ]
};
