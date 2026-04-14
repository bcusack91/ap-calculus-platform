export const apStatsMeansInfPart6Data = {
  topicSlug: 'means-inference-apstats',
  sections: [
    {
      id: 'meansinference-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Choosing the Right Procedure

| Scenario | Procedure |
|----------|-----------|
| One mean, $\\\\sigma$ unknown | One-sample t |
| Two independent means | Two-sample t |
| Paired data | Matched pairs t |
| One proportion | One-sample z |
| Two proportions | Two-sample z |

---

### AP Scoring Tips

- Name the procedure explicitly (“one-sample t-test”, not just “t-test”)
- Always identify the parameter in context
- State ALL conditions, not just assume them
- Use proper notation ($\\\\bar{x}$, $s$, $t$, etc.)`
    },    {
      id: 'meansinference-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A study measures the heights of men and women separately. What procedure compares the means?',
            options: ['Matched pairs t-test', 'Two-sample t-test', 'One-sample t-test', 'Chi-square test'],
            correctAnswer: 1,
            explanation: 'Two independent groups (men vs. women) → two-sample t-test.'
          },
          {
            question: 'A researcher measures reaction time before and after coffee. The correct procedure is:',
            options: ['Two-sample t-test', 'Matched pairs t-test', 'One-sample z-test', 'Two-proportion z-test'],
            correctAnswer: 1,
            explanation: 'Same subjects measured before and after → matched pairs.'
          },
          {
            question: 'For the AP exam, conditions should be checked:',
            options: ['Only if asked explicitly', 'Always, for every inference procedure', 'Only for hypothesis tests', 'Only for confidence intervals'],
            correctAnswer: 1,
            explanation: 'Always check and state conditions — they are part of the scoring rubric.'
          }
        ]
      }
    },    {
      id: 'meansinference-p6-input',
      type: 'input-boxes' as const,
      content: `
**Procedure Selection** 🧮

Name the correct procedure for each:

**1)** Estimating the mean GPA of all students at a school based on a random sample of 50.

**2)** Comparing mean test scores between students who used a study app vs. those who didn’t.

**3)** Testing whether a training program improved employees’ productivity (measured before and after).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['one-sample t interval', 'two-sample t test', 'matched pairs t test'],
        hint1: 'One group, estimating $\\\\mu$',
        hint2: 'Two independent groups',
        hint3: 'Same people, before and after',
        explanation: '1) One-sample t interval. 2) Two-sample t test. 3) Matched pairs t test.'
      }
    }
  ]
};
