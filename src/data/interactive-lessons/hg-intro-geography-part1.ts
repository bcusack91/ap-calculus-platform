export const hgIntroGeographyPart1Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog1-intro',
      type: 'text' as const,
      content: `
# 🌍 Introduction to Geography

**Part 1 of 7 — Geographic Thinking**

Geography is the study of the spatial organization of human activity and how people interact with their environment. Geographers analyze patterns, processes, and relationships across space and scale.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Geography** | The study of spatial patterns and processes on Earth |
| **Spatial perspective** | Viewing the world through the lens of location and distribution |
| **Scale** | The level of analysis from local to global |
      `
    },
    {
      id: 'hgintrog1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the primary focus of geography?',
            options: [
              'Historical timelines',
              'Spatial patterns and processes',
              'Chemical compounds',
              'Literary analysis'
            ],
            correctAnswer: 1,
            explanation: 'Geography focuses on spatial patterns and processes — how things are distributed across Earth\'s surface.'
          },
          {
            question: 'Which perspective is unique to geography?',
            options: [
              'Temporal',
              'Spatial',
              'Biological',
              'Economic'
            ],
            correctAnswer: 1,
            explanation: 'The spatial perspective is what distinguishes geography from other disciplines.'
          }
        ]
      }
    },
    {
      id: 'hgintrog1-content',
      type: 'text' as const,
      content: `
## Geographic Thinking — Deeper Dive

### Geography
The study of spatial patterns and processes on Earth. Understanding this concept is essential for mastering Introduction to Geography in AP Human Geography.

### Spatial perspective
Viewing the world through the lens of location and distribution. This builds on the previous concept and connects to broader themes in the course.

### Scale
The level of analysis from local to global. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgintrog1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the study of spatial patterns and processes on Earth?

2) What concept describes viewing the world through the lens of location and distribution?

3) Name the term for the level of analysis from local to global.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Geography', 'Spatial perspective', 'Scale'],
        hint1: 'Starts with: G',
        hint2: 'Starts with: S',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: Geography (The study of spatial patterns and processes on Earth), Spatial perspective (Viewing the world through the lens of location and distribution), and Scale (The level of analysis from local to global).'
      }
    },
    {
      id: 'hgintrog1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The study of spatial patterns and processes on Earth is called ___',
            options: ['Geography', 'Spatial perspective', 'Scale', 'None of these']
          },
          {
            label: 'Viewing the world through the lens of location and distribution describes ___',
            options: ['Geography', 'Spatial perspective', 'Scale', 'All of these']
          },
          {
            label: 'The level of analysis from local to global is known as ___',
            options: ['Scale', 'Geography', 'Spatial perspective', 'None of these']
          }
        ],
        correctAnswers: ['Geography', 'Spatial perspective', 'Scale'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Geography — The study of spatial patterns and processes on Earth. Spatial perspective — Viewing the world through the lens of location and distribution. Scale — The level of analysis from local to global.'
      }
    },
    {
      id: 'hgintrog1-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Geography** with **Spatial perspective** — while related, they address different aspects of Introduction to Geography.
- **Scale** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about geographic thinking, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect geographic thinking to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgintrog1-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher studies why coffee shops cluster near universities. This analysis uses:',
            options: [
              'Historical perspective — tracing coffee origins',
              'Spatial perspective — analyzing location patterns',
              'Chemical perspective — studying caffeine',
              'Literary perspective — reading about coffee'
            ],
            correctAnswer: 1,
            explanation: 'Studying the clustering of businesses near other features is spatial analysis — a core geographic approach.'
          },
          {
            question: 'A study examines deforestation at the local, national, and global levels. This demonstrates:',
            options: [
              'Scale analysis — examining patterns at different levels',
              'Temporal analysis — studying change over time',
              'Chemical analysis — testing soil composition',
              'Biological analysis — classifying species'
            ],
            correctAnswer: 0,
            explanation: 'Examining the same phenomenon at different geographic scales is a fundamental geographic approach.'
          }
        ]
      }
    }
  ]
}
