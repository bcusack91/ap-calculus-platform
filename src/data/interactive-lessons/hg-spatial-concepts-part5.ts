export const hgSpatialConceptsPart5Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia5-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 5 of 7 — Spatial Interaction Models**

Models like gravity, distance decay, and Tobler's first law help explain spatial relationships. The gravity model predicts interaction based on size and distance.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Gravity model** | Predicts interaction between places based on population size and distance |
| **Tobler's first law** | Everything is related to everything else, but near things are more related |
| **Space-time compression** | The reduction in travel time between places due to technology |
      `
    },
    {
      id: 'hgspatia5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The gravity model predicts that interaction between two cities will:',
            options: [
              'Increase with distance',
              'Increase with population size and decrease with distance',
              'Be the same regardless of distance',
              'Only depend on transportation'
            ],
            correctAnswer: 1,
            explanation: 'The gravity model says larger populations generate more interaction, but distance reduces it.'
          },
          {
            question: 'Tobler\'s first law states:',
            options: [
              'Distance doesn\'t matter',
              'Near things are more related than distant things',
              'All places are equally connected',
              'Technology eliminates distance'
            ],
            correctAnswer: 1,
            explanation: 'Tobler\'s first law of geography: everything is related, but near things are more related than distant things.'
          }
        ]
      }
    },
    {
      id: 'hgspatia5-content',
      type: 'text' as const,
      content: `
## Spatial Interaction Models — Deeper Dive

### Gravity model
Predicts interaction between places based on population size and distance. Understanding this concept is essential for mastering Spatial Concepts & Geographic Data in AP Human Geography.

### Tobler's first law
Everything is related to everything else, but near things are more related. This builds on the previous concept and connects to broader themes in the course.

### Space-time compression
The reduction in travel time between places due to technology. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgspatia5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to predicts interaction between places based on population size and distance?

2) What concept describes everything is related to everything else, but near things are more related?

3) Name the term for the reduction in travel time between places due to technology.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Gravity model', 'Tobler\'s first law', 'Space-time compression'],
        hint1: 'Starts with: G',
        hint2: 'Starts with: T',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: Gravity model (Predicts interaction between places based on population size and distance), Tobler\'s first law (Everything is related to everything else, but near things are more related), and Space-time compression (The reduction in travel time between places due to technology).'
      }
    },
    {
      id: 'hgspatia5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicts interaction between places based on population size and distance is called ___',
            options: ['Gravity model', 'Tobler\'s first law', 'Space-time compression', 'None of these']
          },
          {
            label: 'Everything is related to everything else, but near things are more related describes ___',
            options: ['Gravity model', 'Tobler\'s first law', 'Space-time compression', 'All of these']
          },
          {
            label: 'The reduction in travel time between places due to technology is known as ___',
            options: ['Space-time compression', 'Gravity model', 'Tobler\'s first law', 'None of these']
          }
        ],
        correctAnswers: ['Gravity model', 'Tobler\'s first law', 'Space-time compression'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Gravity model — Predicts interaction between places based on population size and distance. Tobler\'s first law — Everything is related to everything else, but near things are more related. Space-time compression — The reduction in travel time between places due to technology.'
      }
    },
    {
      id: 'hgspatia5-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Gravity model** with **Tobler's first law** — while related, they address different aspects of Spatial Concepts & Geographic Data.
- **Space-time compression** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about spatial interaction models, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect spatial interaction models to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgspatia5-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'High-speed rail reducing travel time from 4 hours to 1 hour between cities demonstrates:',
            options: [
              'Gravity model — predicting interaction',
              'Space-time compression — technology reducing the friction of distance',
              'Distance decay — interaction decreasing with distance',
              'Tobler\'s law — near things being more related'
            ],
            correctAnswer: 1,
            explanation: 'Faster transportation compresses the effective distance between places — space-time compression.'
          },
          {
            question: 'Two equally sized cities are 100 miles and 500 miles from a third city. The gravity model predicts:',
            options: [
              'Equal interaction with both',
              'More interaction with the closer city',
              'More interaction with the farther city',
              'No interaction with either'
            ],
            correctAnswer: 1,
            explanation: 'The gravity model predicts greater interaction with the nearby city because distance is inversely related to interaction.'
          }
        ]
      }
    }
  ]
}
