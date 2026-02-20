export const mcatCarsStratPart5Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs5-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 5 of 7 — Question-Specific Strategies**

### Main Idea Questions

- "The central thesis of the passage is..."
- "The author's primary purpose is..."
- **Strategy**: Should match your AMI (Author's Main Idea). Eliminate options that are too narrow or only cover one paragraph.

### Detail / Retrieval Questions

- "According to the passage..."
- "The author states that..."
- **Strategy**: Go back to the passage! The answer is explicitly stated. Don't rely on memory.

### Inference Questions

- "It can be inferred that..."
- "The author would most likely agree that..."
- **Strategy**: Answer must be SUPPORTED by text but not directly stated. Stay close to the text — don't make big leaps.

### Strengthen / Weaken Questions

- "Which would most strengthen the author's argument?"
- "Which finding would most undermine the claim?"
- **Strategy**: Identify the core argument first, then find the option that reinforces or contradicts it.

### Application Questions

- "If [new scenario], the author would most likely..."
- **Strategy**: Apply the author's stated views/principles to a new context.`
    },
    {
      id: 'cs5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Question Types** 🎯',
      exercise: {
        questions: [
          {
            question: 'A question asks: "Which of the following, if true, would most weaken the author's central argument?" To answer this, you should FIRST:',
            options: ['Clearly identify the author's central argument from the passage', 'Look for the weakest answer choice', 'Find a detail that contradicts one paragraph', 'Choose the most extreme answer'],
            correctAnswer: 0,
            explanation: 'You cannot weaken an argument you don\'t understand. First identify the core claim, then find the answer that most directly contradicts or undermines it.'
          }
        ]
      }
    },
    {
      id: 'cs5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Main idea questions → match your overall passage summary
- Detail questions → go back and find it (don't trust memory)
- Inference → close to text, one logical step away
- Strengthen/weaken → identify the argument before evaluating options`
    }
  ]
};
