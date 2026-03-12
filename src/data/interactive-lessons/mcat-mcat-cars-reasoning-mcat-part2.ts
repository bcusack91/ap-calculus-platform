export const mcatCarsReasonPart2Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr2-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 2 of 7 — Logical Fallacies**

### Common Fallacies Tested on CARS

| Fallacy | Description | Example |
|---------|-------------|---------|
| **Ad hominem** | Attacking the person, not the argument | "His theory is wrong because he's biased" |
| **Straw man** | Misrepresenting someone's argument to attack it easily | "She wants slight reform" → "She wants to destroy everything" |
| **False dichotomy** | Presenting only 2 options when more exist | "Either we ban it completely or accept all consequences" |
| **Appeal to authority** | Using someone's status instead of evidence | "A celebrity says it works, so it must" |
| **Circular reasoning** | Conclusion restates the premise | "It's true because it's a fact" |
| **Hasty generalization** | Broad conclusion from limited data | "I met two rude people from X, so everyone from X is rude" |
| **Post hoc** | Assuming cause because of timing | "I wore my lucky hat and won, so the hat caused the win" |
| **Slippery slope** | Assuming chain reaction without evidence | "If we allow X, then Y and Z will inevitably follow" |

### On the MCAT

Questions may ask you to identify the flaw in reasoning, either in the passage or in an answer choice.`
    },
    {
      id: 'cr2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Logical Fallacies** 🎯`,
      exercise: {
        questions: [
          {
            question: `A critic responds to a scientist's climate research by saying, "She receives government funding, so her conclusions cannot be trusted." This is an example of:`,
            options: [`Ad hominem — attacking the researcher\`s credibility rather than the evidence`, `Straw man`, `False dichotomy`, `Circular reasoning'`],
            correctAnswer: 0,
            explanation: `Ad hominem attacks the person rather than addressing the argument's merits. The funding source doesn't automatically invalidate the research findings.`
          }
        ]
      }
    },
    {
      id: 'cr2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Know the major fallacies — they appear in CARS passages and questions
- Ad hominem, straw man, and false dichotomy are most common
- Questions may ask you to identify weaknesses in an argument
- An argument can still have a true conclusion even if it uses a fallacy`
    }
  ]
};
