export const mcatCarsReasonPart3Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr3-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 3 of 7 — Assumptions & Implicit Reasoning**

### What is an Assumption?

An assumption is an UNSTATED premise that must be true for the argument to work.

**Example:**
- Argument: "Students who take AP classes get into better colleges."
- Unstated assumption: AP classes are a significant factor in admissions (not just correlation).

### Finding Assumptions on CARS

Ask yourself: **"What must be true for this conclusion to follow from this evidence?"**

### The Negation Test

To check if something is a necessary assumption:
1. Negate the statement
2. If the argument falls apart → it was a necessary assumption
3. If the argument still works → it was NOT a necessary assumption

**Example:**
- Argument: "Organic food is healthier because it has no pesticides."
- Test: "What if absence of pesticides doesn't make food healthier?" → Argument collapses!
- Therefore, "no pesticides = healthier" is a necessary assumption.

### CARS Questions About Assumptions

- "The author's argument assumes which of the following?"
- "Which is a necessary condition for the author's conclusion?"
- "The argument depends on the assumption that..."`
    },
    {
      id: 'cr3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Assumptions** 🎯`,
      exercise: {
        questions: [
          {
            question: `An author argues that teaching students chess improves their math skills because chess requires logical thinking. An assumption of this argument is:`,
            options: [`Logical thinking skills transfer between different domains (chess to math)`, `All students enjoy chess`, `Math is the most important subject`, `Chess is harder than math`],
            correctAnswer: 0,
            explanation: `The argument assumes that practicing logical thinking in one domain (chess) improves it in another (math). If skills don't transfer between domains, the argument fails. Use the negation test to verify.`
          }
        ]
      }
    },
    {
      id: 'cr3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Assumptions are unstated premises the argument depends on
- Ask: "What must be true for this conclusion to follow?"
- Negation test: Negate it — if the argument breaks, it's a necessary assumption
- Assumption questions are among the most common on CARS`
    }
  ]
};
