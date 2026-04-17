export const apushReconstructionPart3Data = {
  topicSlug: 'apush-reconstruction',
  sections: [
    {
      id: 'apushrec3-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Reconstruction

**Part 3 of 7 — Patterns & Examples**

This part examines specific patterns and real-world examples related to Reconstruction. Case studies help illustrate abstract concepts.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Spatial pattern** | The geographic distribution related to Reconstruction |
| **Case study** | A specific real-world example that illustrates Reconstruction |
| **Comparison** | Analyzing similarities and differences across examples of Reconstruction |
      `
    },
    {
      id: 'apushrec3-quiz1',
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
            question: 'Comparing examples of Reconstruction across regions helps:',
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
      id: 'apushrec3-content',
      type: 'text' as const,
      content: `
## Patterns & Examples — Deeper Dive

### Spatial pattern
The geographic distribution related to Reconstruction. Understanding this concept is essential for mastering Reconstruction in AP US History.

### Case study
A specific real-world example that illustrates Reconstruction. This builds on the previous concept and connects to broader themes in the course.

### Comparison
Analyzing similarities and differences across examples of Reconstruction. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'apushrec3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the geographic distribution related to Reconstruction?

2) What concept describes a specific real-world example that illustrates Reconstruction?

3) Name the term for analyzing similarities and differences across examples of Reconstruction.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Spatial pattern', 'Case study', 'Comparison'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: C',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: Spatial pattern (The geographic distribution related to Reconstruction), Case study (A specific real-world example that illustrates Reconstruction), and Comparison (Analyzing similarities and differences across examples of Reconstruction).'
      }
    },
    {
      id: 'apushrec3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The geographic distribution related to Reconstruction is called ___',
            options: ['Spatial pattern', 'Case study', 'Comparison', 'None of these']
          },
          {
            label: 'A specific real-world example that illustrates Reconstruction describes ___',
            options: ['Spatial pattern', 'Case study', 'Comparison', 'All of these']
          },
          {
            label: 'Analyzing similarities and differences across examples of Reconstruction is known as ___',
            options: ['Comparison', 'Spatial pattern', 'Case study', 'None of these']
          }
        ],
        correctAnswers: ['Spatial pattern', 'Case study', 'Comparison'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Spatial pattern — The geographic distribution related to Reconstruction. Case study — A specific real-world example that illustrates Reconstruction. Comparison — Analyzing similarities and differences across examples of Reconstruction.'
      }
    },
    {
      id: 'apushrec3-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Spatial pattern** with **Case study** — while related, they address different aspects of Reconstruction.
- **Comparison** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about patterns & examples, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect patterns & examples to broader themes in AP US History for higher scores.
      `
    },
    {
      id: 'apushrec3-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP question asks you to provide TWO examples of Reconstruction. The strongest response would:',
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
            question: 'A pattern observed in Reconstruction is consistent across multiple world regions. This suggests:',
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
