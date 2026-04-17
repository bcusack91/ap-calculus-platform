export const hgSpatialConceptsPart2Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia2-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 2 of 7 — Spatial Patterns**

Geographers analyze how features are distributed across space: clustered, dispersed, or linear. These patterns reveal underlying processes.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Clustered pattern** | Features grouped together in a concentrated area |
| **Dispersed pattern** | Features spread evenly across an area |
| **Linear pattern** | Features arranged along a line such as a road or river |
      `
    },
    {
      id: 'hgspatia2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Houses spread evenly across farmland show:',
            options: [
              'Clustered pattern',
              'Dispersed pattern',
              'Linear pattern',
              'Random pattern'
            ],
            correctAnswer: 1,
            explanation: 'An even distribution across space is a dispersed (uniform) pattern, common in agricultural areas with homestead acts.'
          },
          {
            question: 'Shops along a highway demonstrate:',
            options: [
              'Clustered pattern',
              'Dispersed pattern',
              'Linear pattern',
              'Random pattern'
            ],
            correctAnswer: 2,
            explanation: 'Features arranged along a transportation route form a linear pattern.'
          }
        ]
      }
    },
    {
      id: 'hgspatia2-content',
      type: 'text' as const,
      content: `
## Spatial Patterns — Deeper Dive

### Clustered pattern
Features grouped together in a concentrated area. Understanding this concept is essential for mastering Spatial Concepts & Geographic Data in AP Human Geography.

### Dispersed pattern
Features spread evenly across an area. This builds on the previous concept and connects to broader themes in the course.

### Linear pattern
Features arranged along a line such as a road or river. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgspatia2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to features grouped together in a concentrated area?

2) What concept describes features spread evenly across an area?

3) Name the term for features arranged along a line such as a road or river.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Clustered pattern', 'Dispersed pattern', 'Linear pattern'],
        hint1: 'Starts with: C',
        hint2: 'Starts with: D',
        hint3: 'Starts with: L',
        explanation: 'Expected answers: Clustered pattern (Features grouped together in a concentrated area), Dispersed pattern (Features spread evenly across an area), and Linear pattern (Features arranged along a line such as a road or river).'
      }
    },
    {
      id: 'hgspatia2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Features grouped together in a concentrated area is called ___',
            options: ['Clustered pattern', 'Dispersed pattern', 'Linear pattern', 'None of these']
          },
          {
            label: 'Features spread evenly across an area describes ___',
            options: ['Clustered pattern', 'Dispersed pattern', 'Linear pattern', 'All of these']
          },
          {
            label: 'Features arranged along a line such as a road or river is known as ___',
            options: ['Linear pattern', 'Clustered pattern', 'Dispersed pattern', 'None of these']
          }
        ],
        correctAnswers: ['Clustered pattern', 'Dispersed pattern', 'Linear pattern'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Clustered pattern — Features grouped together in a concentrated area. Dispersed pattern — Features spread evenly across an area. Linear pattern — Features arranged along a line such as a road or river.'
      }
    },
    {
      id: 'hgspatia2-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Clustered pattern** with **Dispersed pattern** — while related, they address different aspects of Spatial Concepts & Geographic Data.
- **Linear pattern** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about spatial patterns, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect spatial patterns to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgspatia2-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Fast-food restaurants clustered near a highway exit demonstrate:',
            options: [
              'Dispersed pattern — spread evenly',
              'Clustered pattern — grouped together for access to customers',
              'Linear pattern — along a route',
              'Random pattern — no discernible organization'
            ],
            correctAnswer: 1,
            explanation: 'Businesses clustering at a highway exit are seeking access to travelers, forming a clustered pattern.'
          },
          {
            question: 'Farms in the Great Plains placed at regular intervals demonstrate:',
            options: [
              'Clustered pattern',
              'Dispersed pattern — evenly spread due to land division policies',
              'Linear pattern',
              'Hierarchical pattern'
            ],
            correctAnswer: 1,
            explanation: 'The homestead system created evenly spaced farms — a dispersed (uniform) settlement pattern.'
          }
        ]
      }
    }
  ]
}
