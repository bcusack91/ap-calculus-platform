export const mcatCarsPsgPart3Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp3-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 3 of 7 — Argumentative Passages**

### Structure of an Argument

1. **Claim/Thesis**: The main point the author is making
2. **Evidence/Support**: Facts, examples, reasoning that back the claim
3. **Warrants**: Assumptions connecting evidence to the claim (often unstated!)
4. **Counterarguments**: Opposing views the author addresses
5. **Conclusion**: Where the argument lands

### Common Argument Patterns in CARS

| Pattern | Structure | Example Signal |
|---------|-----------|----------------|
| **Claim-Evidence** | Thesis → support | "Studies show..." |
| **Problem-Solution** | Problem → proposed fix | "To address this..." |
| **Compare-Contrast** | View A vs. View B | "While some argue... others contend..." |
| **Cause-Effect** | X led to Y | "As a result of..." |
| **Critique** | Examines and evaluates a position | "This argument fails because..." |

### Identifying the Argument

After reading, you should be able to articulate:
- **What is being argued?** (the claim)
- **Why should I believe it?** (the evidence)
- **What are the assumptions?** (often tested on CARS!)`
    },
    {
      id: 'cp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Argument Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A passage argues that public art funding improves community well-being, citing three city case studies. An unstated assumption is likely:`,
            options: [`That the improvements in those cities were caused by the art funding and not other factors`, `That all cities are identical`, `That public art is always popular`, `That community well-being cannot be measured`],
            correctAnswer: 0,
            explanation: `The argument assumes a causal link between art funding and improved well-being. But the case studies could be explained by other factors (confounding variables). CARS loves testing your ability to identify unstated assumptions.`
          }
        ]
      }
    },
    {
      id: 'cp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Every argument has: claim + evidence + assumptions + conclusion
- Unstated assumptions are frequently tested on CARS
- Know the common patterns: claim-evidence, problem-solution, compare-contrast
- "Why should I believe this?" is the critical reader's key question`
    }
  ]
};
