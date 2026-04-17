export const hgSpatialConceptsPart1Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia1-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 1 of 7 — Location & Place**

Location is fundamental to geography. Site refers to internal characteristics of a place, while situation describes a place's relationship to its surroundings.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Site** | The physical characteristics of a place |
| **Situation** | The location of a place relative to other places |
| **Place** | A specific point with physical and human characteristics |
      `
    },
    {
      id: 'hgspatia1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Site refers to:',
            options: [
              'A place\'s relationship to surroundings',
              'The physical characteristics of a location',
              'The cultural meaning of a location',
              'A type of map projection'
            ],
            correctAnswer: 1,
            explanation: 'Site describes the internal physical characteristics of a place — terrain, climate, water features, etc.'
          },
          {
            question: 'Situation is best described as:',
            options: [
              'Internal physical features',
              'A place\'s location relative to other places',
              'The population of a city',
              'The climate of a region'
            ],
            correctAnswer: 1,
            explanation: 'Situation describes how a place relates to its surroundings — its relative position and connectivity.'
          }
        ]
      }
    },
    {
      id: 'hgspatia1-content',
      type: 'text' as const,
      content: `
## Location & Place — Deeper Dive

### Site
The physical characteristics of a place. Understanding this concept is essential for mastering Spatial Concepts & Geographic Data in AP Human Geography.

### Situation
The location of a place relative to other places. This builds on the previous concept and connects to broader themes in the course.

### Place
A specific point with physical and human characteristics. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgspatia1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the physical characteristics of a place?

2) What concept describes the location of a place relative to other places?

3) Name the term for a specific point with physical and human characteristics.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Site', 'Situation', 'Place'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: S',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: Site (The physical characteristics of a place), Situation (The location of a place relative to other places), and Place (A specific point with physical and human characteristics).'
      }
    },
    {
      id: 'hgspatia1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The physical characteristics of a place is called ___',
            options: ['Site', 'Situation', 'Place', 'None of these']
          },
          {
            label: 'The location of a place relative to other places describes ___',
            options: ['Site', 'Situation', 'Place', 'All of these']
          },
          {
            label: 'A specific point with physical and human characteristics is known as ___',
            options: ['Place', 'Site', 'Situation', 'None of these']
          }
        ],
        correctAnswers: ['Site', 'Situation', 'Place'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Site — The physical characteristics of a place. Situation — The location of a place relative to other places. Place — A specific point with physical and human characteristics.'
      }
    },
    {
      id: 'hgspatia1-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Site** with **Situation** — while related, they address different aspects of Spatial Concepts & Geographic Data.
- **Place** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about location & place, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect location & place to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgspatia1-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'New York City\'s harbor, rivers, and flat terrain describe its:',
            options: [
              'Situation — relative to other places',
              'Site — internal physical characteristics',
              'Region — shared characteristics',
              'Distribution — spatial arrangement'
            ],
            correctAnswer: 1,
            explanation: 'The physical characteristics of NYC itself (harbor, rivers, terrain) are site characteristics.'
          },
          {
            question: 'Describing NYC as a gateway between Europe and the American interior describes its:',
            options: [
              'Site',
              'Situation — its strategic position relative to other places',
              'Perceptual region',
              'Formal region'
            ],
            correctAnswer: 1,
            explanation: 'NYC\'s role as a gateway describes its situation — how it relates to other places and trade routes.'
          }
        ]
      }
    }
  ]
}
