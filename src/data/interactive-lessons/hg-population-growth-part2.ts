export const hgPopulationGrowthPart2Data = {
  topicSlug: 'hg-population-growth',
  sections: [
    {
      id: 'hgpopula2-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Growth & Decline

**Part 2 of 7 — Key Processes**

Understanding the processes related to Population Growth & Decline helps explain how and why patterns develop. This part explores the mechanisms driving key phenomena.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Process 1** | The primary mechanism that drives patterns in Population Growth & Decline |
| **Process 2** | A secondary process that shapes outcomes in Population Growth & Decline |
| **Cause and effect** | The relationship between actions and outcomes in Population Growth & Decline |
      `
    },
    {
      id: 'hgpopula2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key process in Population Growth & Decline?',
            options: [
              'A random event',
              'A systematic mechanism that produces predictable patterns',
              'An unexplainable phenomenon',
              'A one-time occurrence'
            ],
            correctAnswer: 1,
            explanation: 'Key processes are systematic mechanisms that produce identifiable, often predictable patterns.'
          },
          {
            question: 'Understanding cause and effect in Population Growth & Decline helps students:',
            options: [
              'Memorize dates',
              'Explain why patterns exist rather than just describing them',
              'Avoid analysis',
              'Skip exam questions'
            ],
            correctAnswer: 1,
            explanation: 'Cause-and-effect reasoning helps explain WHY patterns exist — a higher-order skill tested on the AP exam.'
          }
        ]
      }
    },
    {
      id: 'hgpopula2-content',
      type: 'text' as const,
      content: `
## Key Processes — Deeper Dive

### Process 1
The primary mechanism that drives patterns in Population Growth & Decline. Understanding this concept is essential for mastering Population Growth & Decline in AP Human Geography.

### Process 2
A secondary process that shapes outcomes in Population Growth & Decline. This builds on the previous concept and connects to broader themes in the course.

### Cause and effect
The relationship between actions and outcomes in Population Growth & Decline. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgpopula2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the primary mechanism that drives patterns in Population Growth & Decline?

2) What concept describes a secondary process that shapes outcomes in Population Growth & Decline?

3) Name the term for the relationship between actions and outcomes in Population Growth & Decline.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Process 1', 'Process 2', 'Cause and effect'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: P',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: Process 1 (The primary mechanism that drives patterns in Population Growth & Decline), Process 2 (A secondary process that shapes outcomes in Population Growth & Decline), and Cause and effect (The relationship between actions and outcomes in Population Growth & Decline).'
      }
    },
    {
      id: 'hgpopula2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The primary mechanism that drives patterns in Population Growth & Decline is called ___',
            options: ['Process 1', 'Process 2', 'Cause and effect', 'None of these']
          },
          {
            label: 'A secondary process that shapes outcomes in Population Growth & Decline describes ___',
            options: ['Process 1', 'Process 2', 'Cause and effect', 'All of these']
          },
          {
            label: 'The relationship between actions and outcomes in Population Growth & Decline is known as ___',
            options: ['Cause and effect', 'Process 1', 'Process 2', 'None of these']
          }
        ],
        correctAnswers: ['Process 1', 'Process 2', 'Cause and effect'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Process 1 — The primary mechanism that drives patterns in Population Growth & Decline. Process 2 — A secondary process that shapes outcomes in Population Growth & Decline. Cause and effect — The relationship between actions and outcomes in Population Growth & Decline.'
      }
    },
    {
      id: 'hgpopula2-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Process 1** with **Process 2** — while related, they address different aspects of Population Growth & Decline.
- **Cause and effect** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about key processes, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect key processes to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgpopula2-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student observes a pattern and needs to explain the underlying process. They should:',
            options: [
              'Just describe what they see',
              'Identify the mechanism causing the pattern and explain how it operates',
              'Say the pattern is random',
              'Ignore the pattern'
            ],
            correctAnswer: 1,
            explanation: 'Explaining processes requires identifying the underlying mechanism, not just describing the observable pattern.'
          },
          {
            question: 'On the AP exam, process questions typically require students to:',
            options: [
              'List facts',
              'Explain how a mechanism works and connect it to outcomes',
              'Draw a picture',
              'Write a poem'
            ],
            correctAnswer: 1,
            explanation: 'AP process questions test whether students understand HOW things work, not just WHAT happens.'
          }
        ]
      }
    }
  ]
}
