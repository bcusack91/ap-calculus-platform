export const apStatsErrorsPart1Data = {
  topicSlug: 'type-errors-power-apstats',
  sections: [
    {
      id: 'typeerrorspower-p1-intro',
      type: 'text' as const,
      content: `# ⚠️ Type I and Type II Errors

**Part 1 of 7 — Error Types**

---

### Two Kinds of Errors

|  | $H_0$ True | $H_0$ False |
|--|-----------|------------|
| **Reject $H_0$** | Type I Error ($\\\\alpha$) | Correct! (Power) |
| **Fail to reject** | Correct! | Type II Error ($\\\\beta$) |

---

### Definitions

- **Type I Error:** Rejecting $H_0$ when it’s actually true (false positive)
  - Probability = $\\\\alpha$ (significance level)
- **Type II Error:** Failing to reject $H_0$ when it’s actually false (false negative)
  - Probability = $\\\\beta$

### Analogy

| Error | Court Trial | Medical Test |
|-------|-------------|-------------|
| Type I | Convicting an innocent person | False positive (healthy diagnosed sick) |
| Type II | Acquitting a guilty person | False negative (sick diagnosed healthy) |

> 🔑 The significance level $\\\\alpha$ is the probability of a Type I error. YOU choose $\\\\alpha$ before the test.`
    },    {
      id: 'typeerrorspower-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A Type I error occurs when:',
            options: ['You reject a false $H_0$', 'You reject a true $H_0$', 'You fail to reject a false $H_0$', 'You fail to reject a true $H_0$'],
            correctAnswer: 1,
            explanation: 'Type I = rejecting $H_0$ when it IS true. This is a false alarm.'
          },
          {
            question: 'The probability of a Type I error equals:',
            options: ['$\\\\beta$', 'The p-value', '$\\\\alpha$', '$1 - \\\\alpha$'],
            correctAnswer: 2,
            explanation: '$P(\\\\text{Type I}) = \\\\alpha$, the significance level chosen before the test.'
          },
          {
            question: 'In a medical test, a Type II error means:',
            options: ['A healthy person is told they’re sick', 'A sick person is told they’re healthy', 'The test is invalid', 'The sample is too small'],
            correctAnswer: 1,
            explanation: 'Type II = failing to detect a real condition (false negative).'
          }
        ]
      }
    },    {
      id: 'typeerrorspower-p1-input',
      type: 'input-boxes' as const,
      content: `
**Error Classification** 🧮

$H_0$: The defendant is innocent. $H_a$: The defendant is guilty.

**1)** A Type I error in this context means: convicting an _______ person. (innocent/guilty)

**2)** A Type II error means: acquitting a _______ person. (innocent/guilty)

**3)** If $\\\\alpha = 0.01$, the probability of wrongly convicting an innocent person is ___.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['innocent', 'guilty', '0.01'],
        hint1: 'Rejecting $H_0$ when true',
        hint2: 'Failing to reject $H_0$ when false',
        hint3: '$\\\\alpha$ = P(Type I)',
        explanation: '1) Innocent (Type I = rejecting truth). 2) Guilty (Type II = missing reality). 3) 0.01 = $\\\\alpha$.'
      }
    }
  ]
};
