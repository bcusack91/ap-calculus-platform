export const mcatCarsStratPart2Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs2-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 2 of 7 — Active Reading Techniques**

### How to Read CARS Passages

**DO NOT** read passively! Active reading means:

1. **Identify the main idea** of each paragraph as you go
2. **Track the author's tone** (positive, negative, neutral, critical?)
3. **Note structural shifts** ("However," "On the other hand," "Despite this")
4. **Don't memorize details** — know WHERE things are, not WHAT they say

### The Paragraph Map Strategy

After reading each paragraph, mentally note:
- P1: Main claim or thesis
- P2: Supporting evidence or counterargument
- P3: Author's response or new perspective
- Continue...

### Author's Main Idea (AMI)

After finishing the passage, you should be able to state:
- What is the MAIN argument?
- Is the author FOR or AGAINST it?
- What evidence supports the position?

### Warning Signs of Passive Reading

- You reached the end but can't summarize the passage
- You're rereading sentences multiple times
- You're highlighting everything (or nothing)
- You don't know the author's position`
    },
    {
      id: 'cs2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Active Reading** 🎯`,
      exercise: {
        questions: [
          {
            question: `While reading a CARS passage, you encounter the phrase "Although critics have argued otherwise." This signals:`,
            options: [`A contrast — the author is about to present a counter or their own view`, `The author agrees with the critics`, `The passage is about literary criticism`, `The argument is about to end`],
            correctAnswer: 0,
            explanation: `"Although" is a contrast word. The author is acknowledging an opposing view and will likely argue against it. Track these transitions — they reveal argument structure.`
          }
        ]
      }
    },
    {
      id: 'cs2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Read ACTIVELY: track main ideas, author's tone, and transitions
- Know WHERE information is, not every detail
- After each paragraph: what was the point?
- After the passage: what is the Author's Main Idea?`
    }
  ]
};
