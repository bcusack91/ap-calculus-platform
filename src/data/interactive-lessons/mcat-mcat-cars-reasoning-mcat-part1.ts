export const mcatCarsReasonPart1Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr1-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 1 of 7 — Deductive vs. Inductive Reasoning**

### Deductive Reasoning

Starts from general principles → specific conclusions

**If the premises are true, the conclusion MUST be true.**

Example:
- All mammals breathe air. (premise)
- Whales are mammals. (premise)
- Therefore, whales breathe air. (conclusion — guaranteed!)

### Inductive Reasoning

Starts from specific observations → general conclusions

**Even if the premises are true, the conclusion is only PROBABLE.**

Example:
- Every swan I've seen is white. (observation)
- Therefore, all swans are white. (conclusion — could be wrong! Black swans exist.)

### Why This Matters for CARS

- CARS passages often use inductive reasoning — conclusions based on evidence
- Questions may test whether you can identify the type of reasoning
- "Strongest" answers provide deductive certainty; "weakest" answers rely on thin induction`
    },
    {
      id: 'cr1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Reasoning Types** 🎯',
      exercise: {
        questions: [
          {
            question: 'An author surveys 500 college students and concludes that young adults prefer digital textbooks. This is an example of:',
            options: ['Inductive reasoning — generalizing from a sample to a broad claim', 'Deductive reasoning from established principles', 'Neither — this is pure observation', 'Circular reasoning'],
            correctAnswer: 0,
            explanation: 'The author moves from specific observations (500 students) to a general claim (young adults broadly). This is inductive — the conclusion may be likely but is not guaranteed.'
          }
        ]
      }
    },
    {
      id: 'cr1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Deductive: general → specific, conclusion is certain if premises true
- Inductive: specific → general, conclusion is probable but not guaranteed
- Most CARS arguments are inductive — evidence-based but not airtight
- Identifying reasoning type helps you evaluate argument strength`
    }
  ]
};
