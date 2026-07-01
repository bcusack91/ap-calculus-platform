export const englangLogicalFallaciesPart3Data = {
  topicSlug: 'englang-logical-fallacies',
  sections: [
    {
      id: 'englangl3-intro',
      type: 'text' as const,
      content: `
# ✍️ Logical Fallacies

**Part 3 of 7 — Patterns & Examples**

This part examines specific patterns and real-world examples related to Logical Fallacies. Case studies help illustrate abstract concepts.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Structural pattern** | A recurring structure within Logical Fallacies |
| **Case study** | A specific real-world example that illustrates Logical Fallacies |
| **Comparison** | Analyzing similarities and differences across examples of Logical Fallacies |
      `
    },
    {
      id: 'englangl3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do analysts use case studies?',
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
            question: 'Comparing examples of Logical Fallacies across examples helps:',
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
      id: 'englangl3-content',
      type: 'text' as const,
      content: `
## Patterns & Examples — Deeper Dive

### Structural pattern
A recurring structure within Logical Fallacies. Understanding this concept is essential for mastering Logical Fallacies in AP English Language.

### Case study
A specific real-world example that illustrates Logical Fallacies. This builds on the previous concept and connects to broader themes in the course.

### Comparison
Analyzing similarities and differences across examples of Logical Fallacies. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'englangl3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to a recurring structure within Logical Fallacies?

2) What concept describes a specific real-world example that illustrates Logical Fallacies?

3) Name the term for analyzing similarities and differences across examples of Logical Fallacies.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Structural pattern', 'Case study', 'Comparison'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: C',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: Structural pattern (A recurring structure within Logical Fallacies), Case study (A specific real-world example that illustrates Logical Fallacies), and Comparison (Analyzing similarities and differences across examples of Logical Fallacies).'
      }
    },
    {
      id: 'englangl3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A recurring structure within Logical Fallacies is called ___',
            options: ['Structural pattern', 'Case study', 'Comparison', 'None of these']
          },
          {
            label: 'A specific real-world example that illustrates Logical Fallacies describes ___',
            options: ['Structural pattern', 'Case study', 'Comparison', 'All of these']
          },
          {
            label: 'Analyzing similarities and differences across examples of Logical Fallacies is known as ___',
            options: ['Comparison', 'Structural pattern', 'Case study', 'None of these']
          }
        ],
        correctAnswers: ['Structural pattern', 'Case study', 'Comparison'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Structural pattern — A recurring structure within Logical Fallacies. Case study — A specific real-world example that illustrates Logical Fallacies. Comparison — Analyzing similarities and differences across examples of Logical Fallacies.'
      }
    },
    {
      id: 'englangl3-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Structural pattern** with **Case study** — while related, they address different aspects of Logical Fallacies.
- **Comparison** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about patterns & examples, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect patterns & examples to broader themes in AP English Language for higher scores.
      `
    },
    {
      id: 'englangl3-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP question asks you to provide TWO examples of Logical Fallacies. The strongest response would:',
            options: [
              'Use two examples from the same place',
              'Use examples from different examples to show the concept applies broadly',
              'Make up fictional examples',
              'Provide only one example'
            ],
            correctAnswer: 1,
            explanation: 'Using examples from different contexts demonstrates broader understanding and the universality of the concept.'
          },
          {
            question: 'A pattern observed in Logical Fallacies is consistent across many examples. This suggests:',
            options: [
              'Coincidence',
              'An underlying process that reflects a broad general principle',
              'The data is wrong',
              'Local factors only'
            ],
            correctAnswer: 1,
            explanation: 'Consistent patterns across examples suggest a systematic process rather than coincidence.'
          }
        ]
      }
    }
  ]
}
