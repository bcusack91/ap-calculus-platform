export const mcatCarsStratPart3Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs3-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 3 of 7 — Eliminating Wrong Answers**

### The CARS Elimination Framework

On CARS, finding the WRONG answers is often easier than finding the right one.

### Types of Wrong Answers

| Type | Description | Example |
|------|-------------|---------|
| **Too extreme** | Uses absolute language ("always," "never," "all") | "No author has ever addressed this topic" |
| **Out of scope** | Introduces ideas not in the passage | References a theory never mentioned |
| **Opposite** | Reverses the author's position | Says author supports X when author opposes X |
| **Too narrow** | Only addresses a detail, not the main question | Correct for one paragraph but not the whole passage |
| **Distortion** | Takes a passage idea and twists it | Exaggerates a qualified claim |

### The "Goldilocks" Principle

The best CARS answer is usually:
- Not too extreme, not too narrow
- Closely supported by text
- Matches the author's tone
- Addresses the specific question being asked`
    },
    {
      id: 'cs3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Elimination Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: `A passage discusses how modern architecture balances aesthetics with function. The author argues both matter equally. Which answer to "What is the main idea?" is BEST?`,
            options: [`Modern architecture must integrate both aesthetic appeal and functional design`, `Function is always more important than aesthetics in architecture`, `The aesthetic qualities of modern buildings are declining`, `Every architect prioritizes aesthetics over function`],
            correctAnswer: 0,
            explanation: `Option B uses "always" (too extreme). Option C introduces "declining" (not stated — distortion). Option D uses "every" and reverses the balance (extreme + opposite). Option A correctly captures the balanced main idea.`
          }
        ]
      }
    },
    {
      id: 'cs3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Eliminate before selecting: easier to find wrong than right
- Watch for: extreme language, out of scope, opposite of author, distortion
- Best answers are moderate, text-supported, and address the question asked
- "Closest to the text" usually wins`
    }
  ]
};
