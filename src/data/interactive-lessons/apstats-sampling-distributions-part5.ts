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
| Population is approximately normal | Yes, for any $n$ |
| $n \\geq 30$ | Yes (CLT applies) |
| $n < 30$, population shape unknown | Only if the sample data are free from strong skewness and outliers (check a dotplot or boxplot of the sample) |

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
            options: ['$n \\geq 30$', '$np_0 \\geq 10$ and $n(1-p_0) \\geq 10$', '$np_0 \\geq 5$ or $n(1-p_0) \\geq 5$', 'The population is normal'],
            correctAnswer: 1,
            explanation: 'For proportion inference we need at least 10 expected successes and 10 expected failures under the null value $p_0$. $n \\geq 30$ is the guideline for means, and the counts must reach 10, both of them.'
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
            options: ['Random', '10%', 'Normal/Large Sample', 'Expected counts'],
            correctIndex: 0,
            explanation: 'This statement verifies that data was collected using a random process — the Random condition.'
          },
          {
            id: 'sd5-dd2',
            label: '"250 is less than 10% of all registered voters" checks the ___ condition',
            options: ['Random', '10% / Independence', 'Normal/Large Sample', 'Expected counts'],
            correctIndex: 1,
            explanation: 'This verifies that the sample is small relative to the population, ensuring approximate independence.'
          },
          {
            id: 'sd5-dd3',
            label: '"$n = 45 \\geq 30$, so by the CLT..." checks the ___ condition',
            options: ['Random', '10%', 'Normal/Large Sample', 'Expected counts'],
            correctIndex: 2,
            explanation: 'Citing the CLT with $n \\geq 30$ is checking that the sampling distribution is approximately normal.'
          },
          {
            id: 'sd5-dd4',
            label: 'For a sample of 20 with a strongly skewed distribution, the Normal condition is ___',
            options: ['satisfied, since $n \\geq 15$', 'not satisfied', 'satisfied, since $n \\geq 10$', 'always satisfied for a mean'],
            correctIndex: 1,
            explanation: 'With $n < 30$, the sample data must be free from strong skewness and outliers. Strongly skewed data with $n = 20$ fail that check, so the Normal condition is not satisfied.'
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
            options: ['Yes, since 5,000 responses is a large sample', 'Yes, since online surveys reach many people', 'No, since respondents chose themselves', 'No, since 5,000 exceeds 10% of the population'],
            correctAnswer: 2,
            explanation: 'Voluntary response surveys attract people with strong opinions and are NOT random samples, regardless of size. Reaching many people or the 10% condition does not create randomness.'
          },
          {
            question: 'For a one-sample $t$-test with $n = 12$, the Normal condition requires:',
            options: ['Nothing extra, since $t$ procedures always work', 'Sample data without strong skew or outliers', 'A sample size of at least 30 or more observations', 'At least 10 successes and 10 failures in the data'],
            correctAnswer: 1,
            explanation: 'With $n = 12 < 30$ and no statement that the population is normal, the sample data must be free from strong skewness and outliers (check a dotplot or boxplot). $n \\geq 30$ cannot be met here, and success/failure counts are for proportions.'
          },
          {
            question: 'A sample of 300 from a population of 2,500. Is the 10% condition met?',
            options: ['Yes, because $300 < 2500$', 'No, because $300/2500 = 12\\% > 10\\%$', 'Yes, because $300 \\geq 30$', 'No, because $300 > 100$'],
            correctAnswer: 1,
            explanation: '$300/2500 = 0.12 = 12\\% > 10\\%$. The sample exceeds 10% of the population, so the condition is NOT met.'
          },
          {
            question: 'In an experiment with random assignment, the Random condition is met because:',
            options: ['Subjects were randomly selected from a population', 'Treatments were given to subjects by chance', 'The number of subjects is large enough', 'Both treatment groups have equal sizes'],
            correctAnswer: 1,
            explanation: 'In experiments, random ASSIGNMENT (not random selection) satisfies the Random condition. This allows causal inference about treatment effects.'
          },
          {
            question: 'Which best describes why we check conditions?',
            options: ['To make the arithmetic simpler', 'So the assumed sampling model is reasonable', 'To increase the size of the sample', 'To compute the test statistic'],
            correctAnswer: 1,
            explanation: 'Conditions check that the model behind the procedure (for example, an approximately normal sampling distribution with independent observations) is reasonable for these data. They do not change the arithmetic or the sample size.'
          },
          {
            question: 'A sample has $n\\hat{p} = 8$ and $n(1-\\hat{p}) = 92$. The Normal condition for proportions is:',
            options: ['Met, since both counts are positive', 'Met, since $n(1-\\hat{p}) \\geq 10$', 'Not met, since $n\\hat{p} < 10$', 'Not met, since the counts are unequal'],
            correctAnswer: 2,
            explanation: 'Both $n\\hat{p} \\geq 10$ AND $n(1-\\hat{p}) \\geq 10$ are required. Here $n\\hat{p} = 8 < 10$, so the condition fails.'
          },
          {
            question: 'When sampling from "all U.S. adults," the 10% condition is:',
            options: ['Always violated for big samples', 'Easily satisfied for typical samples', 'Only met when $n > 10{,}000$', 'Not needed for any survey'],
            correctAnswer: 1,
            explanation: 'There are about 260 million U.S. adults, so any realistic sample is far below 10% of the population and the condition is easily satisfied. It still must be stated.'
          },
          {
            question: 'A student writes "all conditions are met" without explanation. On the AP exam, this earns:',
            options: ['Full credit if the conditions are actually met', 'Full credit as long as the answer is correct', 'No credit for the conditions component', 'Credit only if the sample size is stated'],
            correctAnswer: 2,
            explanation: 'Scoring guidelines require naming each condition and checking it with specifics from the problem. A bare "conditions are met" earns no credit for that part.'
          },
          {
            question: 'For a one-sample $t$ procedure with $n = 25$, the Normal condition is satisfied if:',
            options: ['The population is normal or $np \\geq 10$', 'The sample has $np \\geq 10$ and no outliers', 'The population is normal and $np \\geq 10$', 'The population is normal or the sample shows no strong skew'],
            correctAnswer: 3,
            explanation: 'With $n < 30$, the condition holds if the population is approximately normal OR the sample data are free from strong skewness and outliers. The $np \\geq 10$ check belongs to proportions.'
          }
        ]
      }
    }
  ]
};
