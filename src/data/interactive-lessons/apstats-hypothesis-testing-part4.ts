export const apStatsHypothesisPart4Data = {
  topicSlug: 'hypothesis-testing-apstats',
  sections: [
    {
      id: 'apstats-hypothesis-testing-p4-intro',
      type: 'text' as const,
      content: `# 📈 Type I & Type II Errors

**Part 4 of 7 — Making the Wrong Decision**

---

### Decision Table

Every hypothesis test has four possible outcomes:

| | $H_0$ is actually **true** | $H_0$ is actually **false** |
|---|:---:|:---:|
| **Reject $H_0$** | ❌ Type I Error ($\\alpha$) | ✅ Correct Decision (Power) |
| **Fail to reject $H_0$** | ✅ Correct Decision | ❌ Type II Error ($\\beta$) |

---

### Type I Error (False Positive)

**Definition:** Rejecting $H_0$ when it is actually true.

- Probability = $\\alpha$ (the significance level)
- You conclude there IS an effect when there really isn\'t one

**Real-world example:** A medical test says the patient has a disease, but they are actually healthy.

> 🔑 **Key Connection:** Choosing $\\alpha = 0.05$ means you accept a 5% chance of a Type I error.

---

### Type II Error (False Negative)

**Definition:** Failing to reject $H_0$ when it is actually false.

- Probability = $\\beta$
- You conclude there is NO effect when there really IS one

**Real-world example:** A medical test says the patient is healthy, but they actually have the disease.

---

### Power

**Definition:** The probability of correctly rejecting a false $H_0$.

$$\\text{Power} = 1 - \\beta$$

| Factor | Effect on Power |
|--------|:--------------:|
| Increase $n$ (sample size) | Power increases |
| Increase $\\alpha$ | Power increases (but more Type I risk) |
| Larger true effect size | Power increases |
| Decrease variability ($s$) | Power increases |

> 🔑 **AP Tip:** Power is typically considered adequate when it is at least 0.80 (80%).

---

### The $\\alpha$–$\\beta$ Tradeoff

| Action | Type I Risk ($\\alpha$) | Type II Risk ($\\beta$) | Power ($1-\\beta$) |
|--------|:---:|:---:|:---:|
| Lower $\\alpha$ (e.g., 0.01) | Decreases ✅ | Increases ❌ | Decreases ❌ |
| Raise $\\alpha$ (e.g., 0.10) | Increases ❌ | Decreases ✅ | Increases ✅ |
| Increase $n$ | No change | Decreases ✅ | Increases ✅ |

> 🔑 **The only way to reduce BOTH errors is to increase the sample size.**

---

### Worked Example

**A jury trial: $H_0$: The defendant is innocent.**

| Outcome | Error Type | Consequence |
|---------|:----------:|-------------|
| Convict an innocent person | Type I | Wrongful conviction |
| Acquit a guilty person | Type II | Criminal goes free |

The justice system sets a very low $\\alpha$ ("beyond reasonable doubt") because Type I errors have severe consequences.`
    },
    {
      id: 'apstats-hypothesis-testing-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Error Identification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Rejecting a true $H_0$ is:',
            options: ['A correct decision', 'A Type I error', 'A Type II error', 'Power'],
            correctAnswer: 1,
            explanation: 'Rejecting a true null = false positive = Type I error.'
          },
          {
            question: 'A drug has a real effect, but the study fails to detect it. This is:',
            options: ['A Type I error', 'A Type II error', 'A correct decision', 'Low $\\alpha$'],
            correctAnswer: 1,
            explanation: 'Failing to reject a false $H_0$ = Type II error (false negative).'
          },
          {
            question: 'Which factor does NOT increase power?',
            options: ['Increasing sample size', 'Increasing $\\alpha$', 'Decreasing $\\alpha$', 'Larger effect size'],
            correctAnswer: 2,
            explanation: 'Decreasing $\\alpha$ makes it harder to reject $H_0$, which reduces power.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p4-input',
      type: 'input-boxes' as const,
      content: `
**Error Probabilities** 🧮

**1)** Rejecting a true $H_0$ is a Type ___ error.

**2)** If $\\alpha = 0.05$, the probability of a Type I error is:

**3)** If $\\beta = 0.20$, the power is:
      `,
      exercise: {
        inputs: [
          {
            label: 'Error type for rejecting true H₀',
            correctAnswer: '1',
            explanation: 'Type I error = false positive = rejecting a true null.'
          },
          {
            label: 'P(Type I)',
            correctAnswer: '0.05',
            explanation: '$P(\\text{Type I}) = \\alpha = 0.05$.'
          },
          {
            label: 'Power',
            correctAnswer: '0.80',
            explanation: 'Power $= 1 - \\beta = 1 - 0.20 = 0.80$.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Error Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ht4-dd1',
            label: 'Power equals:',
            options: ['$\\alpha$', '$\\beta$', '$1 - \\alpha$', '$1 - \\beta$'],
            correctIndex: 3,
            explanation: 'Power $= 1 - \\beta$ = probability of correctly rejecting a false $H_0$.'
          },
          {
            id: 'ht4-dd2',
            label: 'Increasing sample size ___ power:',
            options: ['Increases', 'Decreases', 'Does not affect', 'Eliminates'],
            correctIndex: 0,
            explanation: 'Larger samples → smaller SE → easier to detect real effects → more power.'
          },
          {
            id: 'ht4-dd3',
            label: 'If $\\alpha$ is lowered from 0.05 to 0.01, Type II error risk:',
            options: ['Decreases', 'Increases', 'Stays the same', 'Becomes zero'],
            correctIndex: 1,
            explanation: 'Lower $\\alpha$ makes it harder to reject $H_0$, increasing the chance of missing a real effect.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Type I & Type II Errors** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A fire alarm goes off when there is no fire. This is analogous to:',
            options: ['Type I error', 'Type II error', 'Correct decision', 'Power'],
            correctAnswer: 0,
            explanation: 'False alarm = false positive = Type I error.'
          },
          {
            question: 'A fire alarm does NOT go off during a fire. This is:',
            options: ['Type I error', 'Type II error', 'Correct decision', 'High power'],
            correctAnswer: 1,
            explanation: 'Missing a real event = false negative = Type II error.'
          },
          {
            question: 'The probability of a Type I error is:',
            options: ['$\\beta$', '$1 - \\beta$', '$\\alpha$', '$1 - \\alpha$'],
            correctAnswer: 2,
            explanation: '$P(\\text{Type I}) = \\alpha$, the significance level.'
          },
          {
            question: 'The probability of a Type II error is:',
            options: ['$\\alpha$', '$\\beta$', 'Power', '$1 - \\alpha$'],
            correctAnswer: 1,
            explanation: '$P(\\text{Type II}) = \\beta$.'
          },
          {
            question: 'If power = 0.85, then $\\beta =$',
            options: ['0.85', '0.15', '0.05', '0.50'],
            correctAnswer: 1,
            explanation: '$\\beta = 1 - \\text{Power} = 1 - 0.85 = 0.15$.'
          },
          {
            question: 'In a medical screening context, which error is usually more serious?',
            options: ['Type I (telling a healthy person they are sick)', 'Type II (missing a disease)', 'They are equally serious', 'Neither is serious'],
            correctAnswer: 1,
            explanation: 'Missing a disease (Type II) can be life-threatening. Contexts determine which error is worse.'
          },
          {
            question: 'The only way to reduce BOTH Type I and Type II error simultaneously is to:',
            options: ['Lower $\\alpha$', 'Raise $\\alpha$', 'Increase sample size', 'Decrease sample size'],
            correctAnswer: 2,
            explanation: 'Larger $n$ reduces SE, making the test more precise and reducing both error types.'
          },
          {
            question: 'A test with power = 0.50 means:',
            options: ['50% chance of correctly rejecting a true $H_0$', '50% chance of correctly rejecting a false $H_0$', '50% significance level', 'The test always works'],
            correctAnswer: 1,
            explanation: 'Power = probability of rejecting $H_0$ when it IS false. 0.50 is quite low.'
          },
          {
            question: 'Which combination is possible?',
            options: ['$\\alpha = 0.05$, $\\beta = 0$, $n = 10$', '$\\alpha = 0.05$, $\\beta = 0.20$, Power = 0.80', '$\\alpha = 0.05$, Power = 0.95, $\\beta = 0.10$', '$\\alpha + \\beta = 1$ always'],
            correctAnswer: 1,
            explanation: 'Power $= 1 - \\beta = 1 - 0.20 = 0.80$ ✓. Note: $\\alpha + \\beta$ does NOT have to equal 1.'
          },
          {
            question: 'A researcher wants to decrease $\\alpha$ from 0.05 to 0.01 without losing power. They should:',
            options: ['Use a one-tailed test', 'Increase the sample size', 'Decrease the sample size', 'Use $\\beta = 0.01$'],
            correctAnswer: 1,
            explanation: 'Lowering $\\alpha$ reduces power. To compensate, increase $n$.'
          }
        ]
      }
    }
  ]
};
