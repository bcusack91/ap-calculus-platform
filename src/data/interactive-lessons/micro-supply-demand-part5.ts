export const microSupplyDemandPart5Data = {
  topicSlug: 'micro-supply-demand',
  sections: [
    {
      id: 'microsup5-intro',
      type: 'text' as const,
      content: `
# 💰 Supply & Demand

**Part 5 of 7 — Change Over Time**

Supply & Demand has evolved over time. Understanding historical and contemporary changes helps explain current patterns and predict future trends.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Continuity** | Aspects of Supply & Demand that have remained stable over time |
| **Change** | How Supply & Demand has transformed due to new forces and conditions |
| **Trend** | The direction of change in Supply & Demand over time |
      `
    },
    {
      id: 'microsup5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Studying change over time in Supply & Demand helps:',
            options: [
              'Only with history classes',
              'Explain current patterns and predict future developments',
              'Nothing',
              'Memorize dates'
            ],
            correctAnswer: 1,
            explanation: 'Understanding how things have changed reveals the forces shaping current conditions and likely future trends.'
          },
          {
            question: 'Continuity in Supply & Demand means:',
            options: [
              'Everything changes',
              'Some aspects have remained stable despite other changes',
              'Nothing ever happened',
              'The topic is boring'
            ],
            correctAnswer: 1,
            explanation: 'Continuity refers to elements that persist even as other aspects change — an important analytical concept.'
          }
        ]
      }
    },
    {
      id: 'microsup5-content',
      type: 'text' as const,
      content: `
## Change Over Time — Deeper Dive

### Continuity
Aspects of Supply & Demand that have remained stable over time. Understanding this concept is essential for mastering Supply & Demand in AP Microeconomics.

### Change
How Supply & Demand has transformed due to new forces and conditions. This builds on the previous concept and connects to broader themes in the course.

### Trend
The direction of change in Supply & Demand over time. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'microsup5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to aspects of Supply & Demand that have remained stable over time?

2) What concept describes how Supply & Demand has transformed due to new forces and conditions?

3) Name the term for the direction of change in Supply & Demand over time.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Continuity', 'Change', 'Trend'],
        hint1: 'Starts with: C',
        hint2: 'Starts with: C',
        hint3: 'Starts with: T',
        explanation: 'Expected answers: Continuity (Aspects of Supply & Demand that have remained stable over time), Change (How Supply & Demand has transformed due to new forces and conditions), and Trend (The direction of change in Supply & Demand over time).'
      }
    },
    {
      id: 'microsup5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Aspects of Supply & Demand that have remained stable over time is called ___',
            options: ['Continuity', 'Change', 'Trend', 'None of these']
          },
          {
            label: 'How Supply & Demand has transformed due to new forces and conditions describes ___',
            options: ['Continuity', 'Change', 'Trend', 'All of these']
          },
          {
            label: 'The direction of change in Supply & Demand over time is known as ___',
            options: ['Trend', 'Continuity', 'Change', 'None of these']
          }
        ],
        correctAnswers: ['Continuity', 'Change', 'Trend'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Continuity — Aspects of Supply & Demand that have remained stable over time. Change — How Supply & Demand has transformed due to new forces and conditions. Trend — The direction of change in Supply & Demand over time.'
      }
    },
    {
      id: 'microsup5-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Continuity** with **Change** — while related, they address different aspects of Supply & Demand.
- **Trend** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about change over time, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect change over time to broader themes in AP Microeconomics for higher scores.
      `
    },
    {
      id: 'microsup5-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An AP question asks how Supply & Demand has changed in the last 50 years. A strong answer would:',
            options: [
              'Say nothing has changed',
              'Identify specific changes, explain their causes, and note what has remained constant',
              'Only list dates',
              'Make up information'
            ],
            correctAnswer: 1,
            explanation: 'Strong AP answers address both change AND continuity, explaining causes and consequences of transformation.'
          },
          {
            question: 'A trend in Supply & Demand shows acceleration in recent decades. The most likely explanation is:',
            options: [
              'Random chance',
              'New technologies, policies, or conditions intensifying existing processes',
              'The data is wrong',
              'Nothing has changed'
            ],
            correctAnswer: 1,
            explanation: 'Accelerating trends are typically driven by new forces (technology, policy, globalization) intensifying existing processes.'
          }
        ]
      }
    }
  ]
}
