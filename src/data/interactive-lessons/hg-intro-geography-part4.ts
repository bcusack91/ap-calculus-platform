export const hgIntroGeographyPart4Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog4-intro',
      type: 'text' as const,
      content: `
# 🌍 Introduction to Geography

**Part 4 of 7 — Spatial Concepts**

Key spatial concepts include location, place, space, and distance. Absolute and relative location, site and situation, and distance decay help explain why things are where they are.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Absolute location** | The exact position on Earth using coordinates |
| **Relative location** | Position described in relation to other places |
| **Distance decay** | The diminishing effect of interaction with increasing distance |
      `
    },
    {
      id: 'hgintrog4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Latitude and longitude give us:',
            options: [
              'Relative location',
              'Absolute location',
              'Site characteristics',
              'Distance decay'
            ],
            correctAnswer: 1,
            explanation: 'Latitude and longitude provide the absolute (exact) location of any point on Earth.'
          },
          {
            question: 'Distance decay means:',
            options: [
              'Interaction increases with distance',
              'Interaction decreases with distance',
              'Distance has no effect on interaction',
              'All places are equally connected'
            ],
            correctAnswer: 1,
            explanation: 'Distance decay is the principle that interaction between places decreases as distance increases.'
          }
        ]
      }
    },
    {
      id: 'hgintrog4-content',
      type: 'text' as const,
      content: `
## Spatial Concepts — Deeper Dive

### Absolute location
The exact position on Earth using coordinates. Understanding this concept is essential for mastering Introduction to Geography in AP Human Geography.

### Relative location
Position described in relation to other places. This builds on the previous concept and connects to broader themes in the course.

### Distance decay
The diminishing effect of interaction with increasing distance. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgintrog4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the exact position on Earth using coordinates?

2) What concept describes position described in relation to other places?

3) Name the term for the diminishing effect of interaction with increasing distance.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Absolute location', 'Relative location', 'Distance decay'],
        hint1: 'Starts with: A',
        hint2: 'Starts with: R',
        hint3: 'Starts with: D',
        explanation: 'Expected answers: Absolute location (The exact position on Earth using coordinates), Relative location (Position described in relation to other places), and Distance decay (The diminishing effect of interaction with increasing distance).'
      }
    },
    {
      id: 'hgintrog4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The exact position on Earth using coordinates is called ___',
            options: ['Absolute location', 'Relative location', 'Distance decay', 'None of these']
          },
          {
            label: 'Position described in relation to other places describes ___',
            options: ['Absolute location', 'Relative location', 'Distance decay', 'All of these']
          },
          {
            label: 'The diminishing effect of interaction with increasing distance is known as ___',
            options: ['Distance decay', 'Absolute location', 'Relative location', 'None of these']
          }
        ],
        correctAnswers: ['Absolute location', 'Relative location', 'Distance decay'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Absolute location — The exact position on Earth using coordinates. Relative location — Position described in relation to other places. Distance decay — The diminishing effect of interaction with increasing distance.'
      }
    },
    {
      id: 'hgintrog4-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Absolute location** with **Relative location** — while related, they address different aspects of Introduction to Geography.
- **Distance decay** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about spatial concepts, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect spatial concepts to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgintrog4-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Describing a city as "200 miles south of Chicago" uses:',
            options: [
              'Absolute location',
              'Relative location — position relative to another known place',
              'Site characteristics',
              'Formal region classification'
            ],
            correctAnswer: 1,
            explanation: 'Describing location by referencing another place is relative location.'
          },
          {
            question: 'Online shopping has reduced distance decay for retail. This means:',
            options: [
              'Physical distance matters more',
              'Physical distance matters less for purchasing decisions',
              'All stores will close',
              'Distance decay has been eliminated'
            ],
            correctAnswer: 1,
            explanation: 'The internet has reduced (but not eliminated) distance decay by making it possible to shop regardless of physical distance.'
          }
        ]
      }
    }
  ]
}
