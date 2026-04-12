export const apStatsErrorsPart1Data = {
  topicSlug: 'type-errors-power-apstats',
  sections: [
    {
      id: 'typeerrorspower-p1-intro',
      type: 'text' as const,
      content: `# ⚠️ Type I & Type II Errors

**Part 1 of 7 — Understanding Decision Errors**

---

### The Four Possible Outcomes

| | $H_0$ True | $H_0$ False |
|---|-----------|-------------|
| **Reject $H_0$** | Type I Error ($\\\\alpha$) | Correct! (Power) |
| **Fail to reject** | Correct! | Type II Error ($\\\\beta$) |

---

### Type I Error
- **What:** Rejecting $H_0$ when it’s actually true
- **Probability:** $\\\\alpha$ (significance level)
- **Real-world:** Convicting an innocent person; approving an ineffective drug

### Type II Error
- **What:** Failing to reject $H_0$ when it’s actually false
- **Probability:** $\\\\beta$
- **Real-world:** Acquitting a guilty person; missing an effective drug

### Power
$$\\\\text{Power} = 1 - \\\\beta = P(\\\\text{reject } H_0 | H_0 \\\\text{ is false})$$

> 🔑 Power is the probability of correctly detecting a real effect.`
    },
    {
      id: 'typeerrorspower-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes type i & type ii errors?',
            options: ['A fundamental concept in this unit', 'Not covered on the AP exam', 'Only relevant for AP Calculus', 'A concept from physics'],
            correctAnswer: 0,
            explanation: 'Type I & Type II Errors is a core AP Statistics concept tested on the exam.'
          }
        ]
      }
    }
  ]
};
