export const mcatCarsReasonPart4Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr4-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 4 of 7 — Strengthening & Weakening Arguments**

### How to Strengthen an Argument

Add evidence/premises that make the conclusion MORE likely.
- Provides supporting data
- Eliminates alternative explanations
- Reinforces an assumption

### How to Weaken an Argument

Add evidence/premises that make the conclusion LESS likely.
- Provides contradicting data
- Introduces alternative explanations
- Undermines an assumption

### The Process

1. **Identify the argument's conclusion**
2. **Identify the evidence/reasoning**
3. **Find the gap** (assumption) between evidence and conclusion
4. **The best strengthener bridges that gap; the best weakener widens it**

### MCAT Example

Argument: "City X reduced crime by installing more streetlights."

- **Strengthener**: "Cities with similar demographics that didn't install lights saw no crime reduction" (eliminates alternative explanation)
- **Weakener**: "City X also hired 200 new police officers during the same period" (introduces alternative explanation)`
    },
    {
      id: 'cr4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Strengthen/Weaken** 🎯`,
      exercise: {
        questions: [
          {
            question: `An author argues that meditation reduces anxiety based on a study where meditators reported less anxiety than non-meditators. Which would MOST weaken this argument?`,
            options: [`People who choose to meditate may have been less anxious to begin with (self-selection bias)`, `Meditation has existed for thousands of years`, `Some meditators also exercise regularly`, `Anxiety can be measured in multiple ways`],
            correctAnswer: 0,
            explanation: `Self-selection bias provides an alternative explanation: the correlation may not be causal. Less anxious people might simply be more likely to try meditation. This directly undermines the argument's core assumption of causation.`
          }
        ]
      }
    },
    {
      id: 'cr4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- To strengthen: support assumptions, eliminate alternatives, add confirming evidence
- To weaken: undermine assumptions, introduce alternatives, add contradicting evidence
- Always identify the CONCLUSION and the GAP first
- Best weakeners often provide alternative explanations`
    }
  ]
};
