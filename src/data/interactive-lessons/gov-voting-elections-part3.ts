export const govVotingElectionsPart3Data = {
  topicSlug: 'gov-voting-elections',
  sections: [
    {
      id: 'govvotin3-intro',
      type: 'text' as const,
      content: `
# 🏛️ Voting & Elections

**Part 3 of 7 — Patterns & Examples**

This part examines specific patterns and real-world examples related to Voting & Elections. Case studies help illustrate abstract concepts.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Spatial pattern** | The geographic distribution related to Voting & Elections |
| **Case study** | A specific real-world example that illustrates Voting & Elections |
| **Comparison** | Analyzing similarities and differences across examples of Voting & Elections |
      `
    },
    {
      id: 'govvotin3-quiz1',
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
            question: 'Comparing examples of Voting & Elections across regions helps:',
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
      id: 'govvotin3-content',
      type: 'text' as const,
      content: `
## Patterns & Examples — Deeper Dive

### Spatial pattern
The geographic distribution related to Voting & Elections. Understanding this concept is essential for mastering Voting & Elections in AP US Government.

### Case study
A specific real-world example that illustrates Voting & Elections. This builds on the previous concept and connects to broader themes in the course.

### Comparison
Analyzing similarities and differences across examples of Voting & Elections. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'govvotin3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the geographic distribution related to Voting & Elections?

2) What concept describes a specific real-world example that illustrates Voting & Elections?

3) Name the term for analyzing similarities and differences across examples of Voting & Elections.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Spatial pattern', 'Case study', 'Comparison'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: C',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: Spatial pattern (The geographic distribution related to Voting & Elections), Case study (A specific real-world example that illustrates Voting & Elections), and Comparison (Analyzing similarities and differences across examples of Voting & Elections).'
      }
    },
    {
      id: 'govvotin3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The geographic distribution related to Voting & Elections is called ___',
            options: ['Spatial pattern', 'Case study', 'Comparison', 'None of these']
          },
          {
            label: 'A specific real-world example that illustrates Voting & Elections describes ___',
            options: ['Spatial pattern', 'Case study', 'Comparison', 'All of these']
          },
          {
            label: 'Analyzing similarities and differences across examples of Voting & Elections is known as ___',
            options: ['Comparison', 'Spatial pattern', 'Case study', 'None of these']
          }
        ],
        correctAnswers: ['Spatial pattern', 'Case study', 'Comparison'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Spatial pattern — The geographic distribution related to Voting & Elections. Case study — A specific real-world example that illustrates Voting & Elections. Comparison — Analyzing similarities and differences across examples of Voting & Elections.'
      }
    },
    {
      id: 'govvotin3-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Spatial pattern** with **Case study** — while related, they address different aspects of Voting & Elections.
- **Comparison** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about patterns & examples, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect patterns & examples to broader themes in AP US Government for higher scores.
      `
    },
    {
      id: 'govvotin3-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP question asks you to provide TWO examples of Voting & Elections. The strongest response would:',
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
            question: 'A pattern observed in Voting & Elections is consistent across multiple world regions. This suggests:',
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
