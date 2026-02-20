export const mcatCarsReasonPart6Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr6-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 6 of 7 — Evidence Evaluation**

### Types of Evidence in CARS

| Evidence Type | Strength | Example |
|--------------|----------|---------|
| **Empirical data** | Strong | "A study of 10,000 participants showed..." |
| **Expert testimony** | Moderate | "According to Dr. Smith, a leading researcher..." |
| **Historical precedent** | Moderate | "In 1932, a similar policy led to..." |
| **Anecdotal** | Weak | "My friend tried it and it worked" |
| **Hypothetical** | Weak | "Imagine a world where..." |

### Evaluating Evidence on CARS

Questions may ask:
- "Which evidence most supports the author's claim?"
- "The author uses the example of X primarily to..."
- "How does paragraph 3 relate to the main argument?"

### Role of Examples in Arguments

Examples in CARS passages serve specific functions:
1. **Illustrate** a general principle
2. **Provide evidence** for a claim
3. **Counter** an opposing position
4. **Qualify** or nuance a broad claim
5. **Introduce** a new perspective

**Key Insight**: Always ask WHY the author included an example, not just WHAT it says.`
    },
    {
      id: 'cr6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Evidence Evaluation** 🎯`,
      exercise: {
        questions: [
          {
            question: `An author argues that education reform improves outcomes, then describes one school that succeeded after reforms. A questioner could fairly note that:`,
            options: [`One school is anecdotal evidence — not sufficient to generalize to all schools`, `The school must be representative of all schools`, `Education reform always works everywhere`, `The example disproves the argument`],
            correctAnswer: 0,
            explanation: `A single case study is anecdotal — it illustrates possibility but doesn't prove the claim for all schools. The MCAT tests whether you can evaluate the strength and limitations of evidence.`
          }
        ]
      }
    },
    {
      id: 'cr6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Empirical data > expert opinion > historical precedent > anecdote > hypothetical
- Always ask WHY the author included an example
- Single case studies don't prove general claims
- Evidence can illustrate, support, counter, or qualify a claim`
    }
  ]
};
