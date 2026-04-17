export const microSupplyDemandPart3Data = {
  topicSlug: 'micro-supply-demand',
  sections: [
    {
      id: 'microsup3-intro',
      type: 'text' as const,
      content: `
# 💰 Supply & Demand

**Part 3 of 7 — Patterns & Examples**

This part examines specific patterns and real-world examples related to Supply & Demand. Case studies help illustrate abstract concepts.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Spatial pattern** | The geographic distribution related to Supply & Demand |
| **Case study** | A specific real-world example that illustrates Supply & Demand |
| **Comparison** | Analyzing similarities and differences across examples of Supply & Demand |
      `
    },
    {
      id: 'microsup3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do geographers/analysts use case studies?',
            options: [
              'They are easier than analysis',
              'They provide concrete examples that illustrate abstract concepts',
              'They replace all other methods',
              'They are required by law'
            ],
            correctAnswer: 1,
            explanation: 'Case studies ground abstract concepts in specific, real-world examples that are easier to understand and remember.'
          },
          {
            question: 'Comparing examples of Supply & Demand across regions helps:',
            options: [
              'Nothing',
              'Identify universal patterns and unique local variations',
              'Confuse students',
              'Waste time'
            ],
            correctAnswer: 1,
            explanation: 'Comparison reveals both common patterns (generalizable) and unique local factors (context-dependent).'
          }
        ]
      }
    },
    {
      id: 'microsup3-content',
      type: 'text' as const,
      content: `
## Patterns & Examples — Deeper Dive

### Spatial pattern
The geographic distribution related to Supply & Demand. Understanding this concept is essential for mastering Supply & Demand in AP Microeconomics.

### Case study
A specific real-world example that illustrates Supply & Demand. This builds on the previous concept and connects to broader themes in the course.

### Comparison
Analyzing similarities and differences across examples of Supply & Demand. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'microsup3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the geographic distribution related to Supply & Demand?

2) What concept describes a specific real-world example that illustrates Supply & Demand?

3) Name the term for analyzing similarities and differences across examples of Supply & Demand.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Spatial pattern', 'Case study', 'Comparison'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: C',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: Spatial pattern (The geographic distribution related to Supply & Demand), Case study (A specific real-world example that illustrates Supply & Demand), and Comparison (Analyzing similarities and differences across examples of Supply & Demand).'
      }
    },
    {
      id: 'microsup3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The geographic distribution related to Supply & Demand is called ___',
            options: ['Spatial pattern', 'Case study', 'Comparison', 'None of these']
          },
          {
            label: 'A specific real-world example that illustrates Supply & Demand describes ___',
            options: ['Spatial pattern', 'Case study', 'Comparison', 'All of these']
          },
          {
            label: 'Analyzing similarities and differences across examples of Supply & Demand is known as ___',
            options: ['Comparison', 'Spatial pattern', 'Case study', 'None of these']
          }
        ],
        correctAnswers: ['Spatial pattern', 'Case study', 'Comparison'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Spatial pattern — The geographic distribution related to Supply & Demand. Case study — A specific real-world example that illustrates Supply & Demand. Comparison — Analyzing similarities and differences across examples of Supply & Demand.'
      }
    },
    {
      id: 'microsup3-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Spatial pattern** with **Case study** — while related, they address different aspects of Supply & Demand.
- **Comparison** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about patterns & examples, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect patterns & examples to broader themes in AP Microeconomics for higher scores.
      `
    },
    {
      id: 'microsup3-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP question asks you to provide TWO examples of Supply & Demand. The strongest response would:',
            options: [
              'Use two examples from the same place',
              'Use examples from different regions to show the concept operates across contexts',
              'Make up fictional examples',
              'Provide only one example'
            ],
            correctAnswer: 1,
            explanation: 'Using examples from different regions demonstrates broader understanding and the universality of the concept.'
          },
          {
            question: 'A pattern observed in Supply & Demand is consistent across multiple world regions. This suggests:',
            options: [
              'Coincidence',
              'An underlying process that operates at a global scale',
              'The data is wrong',
              'Local factors only'
            ],
            correctAnswer: 1,
            explanation: 'Consistent patterns across regions suggest a systematic process rather than coincidence.'
          }
        ]
      }
    }
  ]
}
