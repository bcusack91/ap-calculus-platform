export const hgSpatialConceptsPart6Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia6-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 6 of 7 — Problem-Solving Workshop**

Practice applying spatial concepts to real-world geographic problems. Use models and data to explain patterns.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Spatial analysis** | Systematic examination of location patterns and relationships |
| **Place-based thinking** | Understanding phenomena by connecting them to specific locations |
| **Scale of analysis** | How conclusions change depending on the geographic level examined |
      `
    },
    {
      id: 'hgspatia6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Changing the scale of analysis from local to national might:',
            options: [
              'Reveal different patterns than those visible at local scale',
              'Show the exact same patterns',
              'Make analysis impossible',
              'Only work for physical geography'
            ],
            correctAnswer: 0,
            explanation: 'Different scales reveal different patterns — what appears clustered locally might appear dispersed nationally.'
          },
          {
            question: 'A spatial analysis of disease outbreaks would likely use:',
            options: [
              'GIS to map cases and identify clusters',
              'Only literary analysis',
              'Only chemical testing',
              'Only historical documents'
            ],
            correctAnswer: 0,
            explanation: 'GIS mapping of disease cases reveals spatial clusters and helps identify sources and patterns of spread.'
          }
        ]
      }
    },
    {
      id: 'hgspatia6-content',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Deeper Dive

### Spatial analysis
Systematic examination of location patterns and relationships. Understanding this concept is essential for mastering Spatial Concepts & Geographic Data in AP Human Geography.

### Place-based thinking
Understanding phenomena by connecting them to specific locations. This builds on the previous concept and connects to broader themes in the course.

### Scale of analysis
How conclusions change depending on the geographic level examined. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgspatia6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to systematic examination of location patterns and relationships?

2) What concept describes understanding phenomena by connecting them to specific locations?

3) Name the term for how conclusions change depending on the geographic level examined.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Spatial analysis', 'Place-based thinking', 'Scale of analysis'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: P',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: Spatial analysis (Systematic examination of location patterns and relationships), Place-based thinking (Understanding phenomena by connecting them to specific locations), and Scale of analysis (How conclusions change depending on the geographic level examined).'
      }
    },
    {
      id: 'hgspatia6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Systematic examination of location patterns and relationships is called ___',
            options: ['Spatial analysis', 'Place-based thinking', 'Scale of analysis', 'None of these']
          },
          {
            label: 'Understanding phenomena by connecting them to specific locations describes ___',
            options: ['Spatial analysis', 'Place-based thinking', 'Scale of analysis', 'All of these']
          },
          {
            label: 'How conclusions change depending on the geographic level examined is known as ___',
            options: ['Scale of analysis', 'Spatial analysis', 'Place-based thinking', 'None of these']
          }
        ],
        correctAnswers: ['Spatial analysis', 'Place-based thinking', 'Scale of analysis'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Spatial analysis — Systematic examination of location patterns and relationships. Place-based thinking — Understanding phenomena by connecting them to specific locations. Scale of analysis — How conclusions change depending on the geographic level examined.'
      }
    },
    {
      id: 'hgspatia6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Spatial analysis** with **Place-based thinking** — while related, they address different aspects of Spatial Concepts & Geographic Data.
- **Scale of analysis** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about problem-solving workshop, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect problem-solving workshop to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgspatia6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At the local scale, a flood affects one neighborhood. At the regional scale, it affects an entire river basin. This illustrates:',
            options: [
              'Scale of analysis — different conclusions at different levels',
              'Distance decay — decreasing impact with distance',
              'Gravity model — population-based interaction',
              'Space-time compression — technology effects'
            ],
            correctAnswer: 0,
            explanation: 'The same phenomenon looks different depending on the scale of analysis — a core geographic concept.'
          },
          {
            question: 'A researcher finds that poverty causes crime at the neighborhood level, but at the state level, wealthy states have more crime. This is:',
            options: [
              'A contradiction that invalidates both findings',
              'An ecological fallacy — patterns at one scale don\'t always hold at another',
              'Proof that poverty doesn\'t matter',
              'Evidence that crime is random'
            ],
            correctAnswer: 1,
            explanation: 'The ecological fallacy shows that relationships at one scale may not hold at other scales — a critical concept in geographic analysis.'
          }
        ]
      }
    }
  ]
}
