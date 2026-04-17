export const govIdeologiesPart1Data = {
  topicSlug: 'gov-ideologies',
  sections: [
    {
      id: 'govideol1-intro',
      type: 'text' as const,
      content: `
# 🏛️ Political Ideologies & Beliefs

**Part 1 of 7 — Core Concepts**

Political Ideologies & Beliefs is a fundamental topic in AP US Government. This part introduces the essential concepts and vocabulary you need to master for the AP exam.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Key concept 1** | The foundational principle underlying Political Ideologies & Beliefs |
| **Key concept 2** | A critical component of understanding Political Ideologies & Beliefs |
| **Key concept 3** | An essential element that connects Political Ideologies & Beliefs to broader themes |
      `
    },
    {
      id: 'govideol1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes the main focus of Political Ideologies & Beliefs?',
            options: [
              'An unrelated topic',
              'The core principles and patterns within Political Ideologies & Beliefs',
              'A mathematical formula',
              'A literary technique'
            ],
            correctAnswer: 1,
            explanation: 'Political Ideologies & Beliefs focuses on understanding key principles and patterns within AP US Government.'
          },
          {
            question: 'Why is Political Ideologies & Beliefs important in AP US Government?',
            options: [
              'It is not important',
              'It connects to multiple units and is frequently tested on the AP exam',
              'It is only relevant to one question',
              'It has been removed from the curriculum'
            ],
            correctAnswer: 1,
            explanation: 'Political Ideologies & Beliefs is a key topic in AP US Government that connects to multiple course themes.'
          }
        ]
      }
    },
    {
      id: 'govideol1-content',
      type: 'text' as const,
      content: `
## Core Concepts — Deeper Dive

### Key concept 1
The foundational principle underlying Political Ideologies & Beliefs. Understanding this concept is essential for mastering Political Ideologies & Beliefs in AP US Government.

### Key concept 2
A critical component of understanding Political Ideologies & Beliefs. This builds on the previous concept and connects to broader themes in the course.

### Key concept 3
An essential element that connects Political Ideologies & Beliefs to broader themes. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'govideol1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the foundational principle underlying Political Ideologies & Beliefs?

2) What concept describes a critical component of understanding Political Ideologies & Beliefs?

3) Name the term for an essential element that connects Political Ideologies & Beliefs to broader themes.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Key concept 1', 'Key concept 2', 'Key concept 3'],
        hint1: 'Starts with: K',
        hint2: 'Starts with: K',
        hint3: 'Starts with: K',
        explanation: 'Expected answers: Key concept 1 (The foundational principle underlying Political Ideologies & Beliefs), Key concept 2 (A critical component of understanding Political Ideologies & Beliefs), and Key concept 3 (An essential element that connects Political Ideologies & Beliefs to broader themes).'
      }
    },
    {
      id: 'govideol1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The foundational principle underlying Political Ideologies & Beliefs is called ___',
            options: ['Key concept 1', 'Key concept 2', 'Key concept 3', 'None of these']
          },
          {
            label: 'A critical component of understanding Political Ideologies & Beliefs describes ___',
            options: ['Key concept 1', 'Key concept 2', 'Key concept 3', 'All of these']
          },
          {
            label: 'An essential element that connects Political Ideologies & Beliefs to broader themes is known as ___',
            options: ['Key concept 3', 'Key concept 1', 'Key concept 2', 'None of these']
          }
        ],
        correctAnswers: ['Key concept 1', 'Key concept 2', 'Key concept 3'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Key concept 1 — The foundational principle underlying Political Ideologies & Beliefs. Key concept 2 — A critical component of understanding Political Ideologies & Beliefs. Key concept 3 — An essential element that connects Political Ideologies & Beliefs to broader themes.'
      }
    },
    {
      id: 'govideol1-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Key concept 1** with **Key concept 2** — while related, they address different aspects of Political Ideologies & Beliefs.
- **Key concept 3** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about core concepts, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect core concepts to broader themes in AP US Government for higher scores.
      `
    },
    {
      id: 'govideol1-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student needs to explain Political Ideologies & Beliefs on a free-response question. The best approach is:',
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
            question: 'When studying Political Ideologies & Beliefs, which strategy is most effective?',
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
