export const apStatsProbDistPart1Data = {
  topicSlug: 'probability-distributions-apstats',
  sections: [
    {
      id: 'probabilitydistributions-p1-intro',
      type: 'text' as const,
      content: `# 🎲 Probability Rules & Distributions

**Part 1 of 7 — Conditional Probability & Independence**

---

### Conditional Probability

$$P(A | B) = \\\\frac{P(A \\\\cap B)}{P(B)}$$

“The probability of $A$ given that $B$ has occurred.”

---

### Independence

Events $A$ and $B$ are independent if knowing one doesn’t change the probability of the other:

$$P(A | B) = P(A) \\\\quad \\\\text{or equivalently} \\\\quad P(A \\\\cap B) = P(A) \\\\cdot P(B)$$

---

### Two-Way Table Example

| | Laptop | Desktop | Total |
|---|--------|---------|-------|
| **Student** | 120 | 30 | 150 |
| **Faculty** | 50 | 50 | 100 |
| **Total** | 170 | 80 | 250 |

- $P(\\\\text{Laptop}) = 170/250 = 0.68$
- $P(\\\\text{Laptop | Student}) = 120/150 = 0.80$
- Since $0.80 \\\\neq 0.68$, device type and role are NOT independent.`
    },
    {
      id: 'probabilitydistributions-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes conditional probability & independence?',
            options: ['A fundamental concept in this unit', 'Not covered on the AP exam', 'Only relevant for AP Calculus', 'A concept from physics'],
            correctAnswer: 0,
            explanation: 'Conditional Probability & Independence is a core AP Statistics concept tested on the exam.'
          }
        ]
      }
    }
  ]
};
