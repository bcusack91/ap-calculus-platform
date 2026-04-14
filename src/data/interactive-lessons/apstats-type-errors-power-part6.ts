export const apStatsErrorsPart6Data = {
  topicSlug: 'type-errors-power-apstats',
  sections: [
    {
      id: 'typeerrorspower-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Common AP Questions

1. **Describe** Type I and Type II errors in context
2. **Explain** the consequences of each error type
3. **State** which error is more serious and why
4. **Relationship** between $\\\\alpha$, $\\\\beta$, power, and sample size

---

### Template: Describing Errors in Context

**Type I:** “We conclude [Ha in context] when in reality [H0 in context].”

**Type II:** “We fail to conclude [Ha in context] when in reality [Ha IS true].”

### Example

$H_0$: The new drug is not effective. $H_a$: The new drug IS effective.

- Type I: We conclude the drug is effective when it actually ISN’T (leads to approving an ineffective drug)
- Type II: We fail to detect that the drug IS effective (miss a good drug)`
    },    {
      id: 'typeerrorspower-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$H_0$: The water is safe. $H_a$: The water is contaminated. A Type II error means:',
            options: ['Declaring safe water contaminated', 'Declaring contaminated water safe', 'Testing the wrong water', 'Using too large a sample'],
            correctAnswer: 1,
            explanation: 'Type II: failing to reject $H_0$ when $H_a$ is true = declaring contaminated water safe. Very dangerous!'
          },
          {
            question: 'In the water quality example, which error is more serious?',
            options: ['Type I (false alarm about contamination)', 'Type II (missing real contamination)', 'Both are equally serious', 'Neither is serious'],
            correctAnswer: 1,
            explanation: 'Missing real contamination (Type II) puts people at health risk — far more serious.'
          },
          {
            question: 'If Type II error is more serious, you should:',
            options: ['Use a smaller $\\\\alpha$', 'Use a larger $\\\\alpha$ to increase power', 'Not do the test', 'Use a larger sample only'],
            correctAnswer: 1,
            explanation: 'Larger $\\\\alpha$ increases power, reducing $\\\\beta$ (the chance of the more dangerous Type II error).'
          }
        ]
      }
    },    {
      id: 'typeerrorspower-p6-input',
      type: 'input-boxes' as const,
      content: `
**Error Context** 🧮

$H_0$: The parachute meets safety standards. $H_a$: The parachute does NOT meet safety standards.

**1)** Type I error: reject a parachute that actually _____ safety standards. (meets/fails)

**2)** Type II error: accept a parachute that actually _____ safety standards. (meets/fails)

**3)** Which error is more dangerous? (Type I/Type II)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['meets', 'fails', 'Type II'],
        hint1: 'Type I = rejecting truth ($H_0$ true)',
        hint2: 'Type II = failing to detect problem ($H_a$ true)',
        hint3: 'Which puts lives at risk?',
        explanation: '1) Meets (rejecting a good parachute = waste). 2) Fails (approving a bad parachute = dangerous!). 3) Type II — a faulty parachute could be fatal.'
      }
    }
  ]
};
