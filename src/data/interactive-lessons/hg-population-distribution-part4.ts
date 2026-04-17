export const hgPopulationDistributionPart4Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula4-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 4 of 7 — Factors Influencing Distribution**

Physical, economic, and political factors determine where people settle. Climate, water access, and economic opportunity are key drivers.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Pull factor** | A positive attribute that attracts people to a location |
| **Push factor** | A negative condition that drives people away from a location |
| **Intervening obstacle** | A barrier that hinders migration between source and destination |
      `
    },
    {
      id: 'hgpopula4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A pull factor for migration would be:',
            options: [
              'War in the home country',
              'Job opportunities in a new city',
              'Famine at home',
              'Political persecution'
            ],
            correctAnswer: 1,
            explanation: 'Pull factors attract people to a destination — job opportunities, better education, safety, etc.'
          },
          {
            question: 'An intervening obstacle is:',
            options: [
              'A barrier that makes migration difficult',
              'A reason to migrate',
              'A type of map',
              'A population pyramid'
            ],
            correctAnswer: 0,
            explanation: 'Intervening obstacles — like oceans, deserts, or border controls — make it harder to migrate between two places.'
          }
        ]
      }
    },
    {
      id: 'hgpopula4-content',
      type: 'text' as const,
      content: `
## Factors Influencing Distribution — Deeper Dive

### Pull factor
A positive attribute that attracts people to a location. Understanding this concept is essential for mastering Population Distribution & Composition in AP Human Geography.

### Push factor
A negative condition that drives people away from a location. This builds on the previous concept and connects to broader themes in the course.

### Intervening obstacle
A barrier that hinders migration between source and destination. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgpopula4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to a positive attribute that attracts people to a location?

2) What concept describes a negative condition that drives people away from a location?

3) Name the term for a barrier that hinders migration between source and destination.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Pull factor', 'Push factor', 'Intervening obstacle'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: P',
        hint3: 'Starts with: I',
        explanation: 'Expected answers: Pull factor (A positive attribute that attracts people to a location), Push factor (A negative condition that drives people away from a location), and Intervening obstacle (A barrier that hinders migration between source and destination).'
      }
    },
    {
      id: 'hgpopula4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A positive attribute that attracts people to a location is called ___',
            options: ['Pull factor', 'Push factor', 'Intervening obstacle', 'None of these']
          },
          {
            label: 'A negative condition that drives people away from a location describes ___',
            options: ['Pull factor', 'Push factor', 'Intervening obstacle', 'All of these']
          },
          {
            label: 'A barrier that hinders migration between source and destination is known as ___',
            options: ['Intervening obstacle', 'Pull factor', 'Push factor', 'None of these']
          }
        ],
        correctAnswers: ['Pull factor', 'Push factor', 'Intervening obstacle'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Pull factor — A positive attribute that attracts people to a location. Push factor — A negative condition that drives people away from a location. Intervening obstacle — A barrier that hinders migration between source and destination.'
      }
    },
    {
      id: 'hgpopula4-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Pull factor** with **Push factor** — while related, they address different aspects of Population Distribution & Composition.
- **Intervening obstacle** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about factors influencing distribution, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect factors influencing distribution to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgpopula4-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Syrian refugees face border closures when trying to reach Europe. The closed borders are:',
            options: [
              'Pull factors attracting them to Europe',
              'Intervening obstacles hindering their migration',
              'Push factors driving them from Syria',
              'Cultural diffusion'
            ],
            correctAnswer: 1,
            explanation: 'Closed borders are intervening obstacles — barriers between the origin (Syria) and the desired destination (Europe).'
          },
          {
            question: 'A family moves from a rural area to a city for better schools and healthcare. The schools and healthcare are:',
            options: [
              'Push factors',
              'Pull factors — positive attributes attracting them to the city',
              'Intervening obstacles',
              'Carrying capacity'
            ],
            correctAnswer: 1,
            explanation: 'Better schools and healthcare are positive attributes that pull people toward a location.'
          }
        ]
      }
    }
  ]
}
