export const hgPopulationDistributionPart1Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula1-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 1 of 7 — Population Distribution**

Earth's population is unevenly distributed. Major concentrations exist in East Asia, South Asia, and Europe. Physical factors like climate and topography shape where people live.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Population density** | The number of people per unit of area |
| **Ecumene** | The portion of Earth permanently inhabited by humans |
| **Arithmetic density** | Total population divided by total land area |
      `
    },
    {
      id: 'hgpopula1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The ecumene refers to:',
            options: [
              'Uninhabited areas',
              'The portion of Earth permanently inhabited by humans',
              'Ocean areas',
              'Areas with no vegetation'
            ],
            correctAnswer: 1,
            explanation: 'The ecumene is the habitable portion of Earth where humans have made permanent settlements.'
          },
          {
            question: 'Arithmetic density is calculated by:',
            options: [
              'Dividing population by arable land',
              'Dividing total population by total land area',
              'Counting farmers per acre',
              'Measuring urban population only'
            ],
            correctAnswer: 1,
            explanation: 'Arithmetic density is the simplest measure: total population divided by total land area.'
          }
        ]
      }
    },
    {
      id: 'hgpopula1-content',
      type: 'text' as const,
      content: `
## Population Distribution — Deeper Dive

### Population density
The number of people per unit of area. Understanding this concept is essential for mastering Population Distribution & Composition in AP Human Geography.

### Ecumene
The portion of Earth permanently inhabited by humans. This builds on the previous concept and connects to broader themes in the course.

### Arithmetic density
Total population divided by total land area. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgpopula1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the number of people per unit of area?

2) What concept describes the portion of Earth permanently inhabited by humans?

3) Name the term for total population divided by total land area.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Population density', 'Ecumene', 'Arithmetic density'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: E',
        hint3: 'Starts with: A',
        explanation: 'Expected answers: Population density (The number of people per unit of area), Ecumene (The portion of Earth permanently inhabited by humans), and Arithmetic density (Total population divided by total land area).'
      }
    },
    {
      id: 'hgpopula1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The number of people per unit of area is called ___',
            options: ['Population density', 'Ecumene', 'Arithmetic density', 'None of these']
          },
          {
            label: 'The portion of Earth permanently inhabited by humans describes ___',
            options: ['Population density', 'Ecumene', 'Arithmetic density', 'All of these']
          },
          {
            label: 'Total population divided by total land area is known as ___',
            options: ['Arithmetic density', 'Population density', 'Ecumene', 'None of these']
          }
        ],
        correctAnswers: ['Population density', 'Ecumene', 'Arithmetic density'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Population density — The number of people per unit of area. Ecumene — The portion of Earth permanently inhabited by humans. Arithmetic density — Total population divided by total land area.'
      }
    },
    {
      id: 'hgpopula1-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Population density** with **Ecumene** — while related, they address different aspects of Population Distribution & Composition.
- **Arithmetic density** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about population distribution, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect population distribution to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgpopula1-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Bangladesh has a high physiological density. This means:',
            options: [
              'It has a large total area',
              'It has many people relative to its arable farmland',
              'It has few people per square mile',
              'It has extensive wilderness'
            ],
            correctAnswer: 1,
            explanation: 'High physiological density means a lot of people depend on limited farmland — indicating potential food supply pressure.'
          },
          {
            question: 'Most of Australia\'s population lives along the southeastern coast because:',
            options: [
              'The interior has favorable climate',
              'The coast offers better climate, ports, and resources',
              'Government policy requires coastal settlement',
              'The interior has more arable land'
            ],
            correctAnswer: 1,
            explanation: 'Australia\'s arid interior pushes population to the more hospitable coastal areas with better climate and economic opportunities.'
          }
        ]
      }
    }
  ]
}
