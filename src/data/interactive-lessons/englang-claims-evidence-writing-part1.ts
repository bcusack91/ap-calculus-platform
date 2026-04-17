export const englangClaimsEvidenceWritingPart1Data = {
  topicSlug: 'englang-claims-evidence-writing',
  sections: [
    {
      id: 'englangc1-intro',
      type: 'text' as const,
      content: `
# ✍️ Claims & Evidence in Writing

**Part 1 of 7 — Core Concepts**

Claims & Evidence in Writing is a fundamental topic in AP English Language. This part introduces the essential concepts and vocabulary you need to master for the AP exam.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Key concept 1** | The foundational principle underlying Claims & Evidence in Writing |
| **Key concept 2** | A critical component of understanding Claims & Evidence in Writing |
| **Key concept 3** | An essential element that connects Claims & Evidence in Writing to broader themes |
      `
    },
    {
      id: 'englangc1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes the main focus of Claims & Evidence in Writing?',
            options: [
              'An unrelated topic',
              'The core principles and patterns within Claims & Evidence in Writing',
              'A mathematical formula',
              'A literary technique'
            ],
            correctAnswer: 1,
            explanation: 'Claims & Evidence in Writing focuses on understanding key principles and patterns within AP English Language.'
          },
          {
            question: 'Why is Claims & Evidence in Writing important in AP English Language?',
            options: [
              'It is not important',
              'It connects to multiple units and is frequently tested on the AP exam',
              'It is only relevant to one question',
              'It has been removed from the curriculum'
            ],
            correctAnswer: 1,
            explanation: 'Claims & Evidence in Writing is a key topic in AP English Language that connects to multiple course themes.'
          }
        ]
      }
    },
    {
      id: 'englangc1-content',
      type: 'text' as const,
      content: `
## Core Concepts — Deeper Dive

### Key concept 1
The foundational principle underlying Claims & Evidence in Writing. Understanding this concept is essential for mastering Claims & Evidence in Writing in AP English Language.

### Key concept 2
A critical component of understanding Claims & Evidence in Writing. This builds on the previous concept and connects to broader themes in the course.

### Key concept 3
An essential element that connects Claims & Evidence in Writing to broader themes. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'englangc1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the foundational principle underlying Claims & Evidence in Writing?

2) What concept describes a critical component of understanding Claims & Evidence in Writing?

3) Name the term for an essential element that connects Claims & Evidence in Writing to broader themes.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Key concept 1', 'Key concept 2', 'Key concept 3'],
        hint1: 'Starts with: K',
        hint2: 'Starts with: K',
        hint3: 'Starts with: K',
        explanation: 'Expected answers: Key concept 1 (The foundational principle underlying Claims & Evidence in Writing), Key concept 2 (A critical component of understanding Claims & Evidence in Writing), and Key concept 3 (An essential element that connects Claims & Evidence in Writing to broader themes).'
      }
    },
    {
      id: 'englangc1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The foundational principle underlying Claims & Evidence in Writing is called ___',
            options: ['Key concept 1', 'Key concept 2', 'Key concept 3', 'None of these']
          },
          {
            label: 'A critical component of understanding Claims & Evidence in Writing describes ___',
            options: ['Key concept 1', 'Key concept 2', 'Key concept 3', 'All of these']
          },
          {
            label: 'An essential element that connects Claims & Evidence in Writing to broader themes is known as ___',
            options: ['Key concept 3', 'Key concept 1', 'Key concept 2', 'None of these']
          }
        ],
        correctAnswers: ['Key concept 1', 'Key concept 2', 'Key concept 3'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Key concept 1 — The foundational principle underlying Claims & Evidence in Writing. Key concept 2 — A critical component of understanding Claims & Evidence in Writing. Key concept 3 — An essential element that connects Claims & Evidence in Writing to broader themes.'
      }
    },
    {
      id: 'englangc1-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Key concept 1** with **Key concept 2** — while related, they address different aspects of Claims & Evidence in Writing.
- **Key concept 3** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about core concepts, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect core concepts to broader themes in AP English Language for higher scores.
      `
    },
    {
      id: 'englangc1-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student needs to explain Claims & Evidence in Writing on a free-response question. The best approach is:',
            options: [
              'Write a one-word answer',
              'Define key terms, provide specific examples, and connect to course themes',
              'Copy the question back',
              'Leave it blank'
            ],
            correctAnswer: 1,
            explanation: 'AP free-response questions require definitions, examples, and connections to broader themes.'
          },
          {
            question: 'When studying Claims & Evidence in Writing, which strategy is most effective?',
            options: [
              'Memorize without understanding',
              'Create connections between concepts and use real-world examples',
              'Skip this topic entirely',
              'Only study the night before'
            ],
            correctAnswer: 1,
            explanation: 'Active engagement with concepts through connections and examples leads to deeper understanding.'
          }
        ]
      }
    }
  ]
}
