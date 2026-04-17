export const hgSpatialConceptsPart7Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia7-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 7 of 7 — AP Review**

Comprehensive review of spatial concepts for the AP exam. Master location types, spatial patterns, map skills, and interaction models.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Geographic perspective** | The unique lens of geography — analyzing WHERE and WHY there |
| **Spatial association** | When two or more phenomena share similar spatial patterns |
| **Environmental determinism vs possibilism** | Debate over whether environment controls or influences human activity |
      `
    },
    {
      id: 'hgspatia7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Environmental determinism argues that:',
            options: [
              'Humans shape the environment',
              'The environment controls human behavior and development',
              'Humans and environment have no relationship',
              'Technology eliminates environmental constraints'
            ],
            correctAnswer: 1,
            explanation: 'Environmental determinism claims the physical environment dictates human activity and cultural development.'
          },
          {
            question: 'Possibilism differs from environmental determinism by arguing:',
            options: [
              'Environment has no effect on humans',
              'Environment sets limitations but humans can adapt and choose',
              'Technology is irrelevant',
              'Culture doesn\'t matter'
            ],
            correctAnswer: 1,
            explanation: 'Possibilism holds that the environment offers possibilities and constraints, but humans make choices within those limits.'
          }
        ]
      }
    },
    {
      id: 'hgspatia7-content',
      type: 'text' as const,
      content: `
## AP Review — Deeper Dive

### Geographic perspective
The unique lens of geography — analyzing WHERE and WHY there. Understanding this concept is essential for mastering Spatial Concepts & Geographic Data in AP Human Geography.

### Spatial association
When two or more phenomena share similar spatial patterns. This builds on the previous concept and connects to broader themes in the course.

### Environmental determinism vs possibilism
Debate over whether environment controls or influences human activity. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgspatia7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the unique lens of geography — analyzing WHERE and WHY there?

2) What concept describes when two or more phenomena share similar spatial patterns?

3) Name the term for debate over whether environment controls or influences human activity.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Geographic perspective', 'Spatial association', 'Environmental determinism vs possibilism'],
        hint1: 'Starts with: G',
        hint2: 'Starts with: S',
        hint3: 'Starts with: E',
        explanation: 'Expected answers: Geographic perspective (The unique lens of geography — analyzing WHERE and WHY there), Spatial association (When two or more phenomena share similar spatial patterns), and Environmental determinism vs possibilism (Debate over whether environment controls or influences human activity).'
      }
    },
    {
      id: 'hgspatia7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The unique lens of geography — analyzing WHERE and WHY there is called ___',
            options: ['Geographic perspective', 'Spatial association', 'Environmental determinism vs possibilism', 'None of these']
          },
          {
            label: 'When two or more phenomena share similar spatial patterns describes ___',
            options: ['Geographic perspective', 'Spatial association', 'Environmental determinism vs possibilism', 'All of these']
          },
          {
            label: 'Debate over whether environment controls or influences human activity is known as ___',
            options: ['Environmental determinism vs possibilism', 'Geographic perspective', 'Spatial association', 'None of these']
          }
        ],
        correctAnswers: ['Geographic perspective', 'Spatial association', 'Environmental determinism vs possibilism'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Geographic perspective — The unique lens of geography — analyzing WHERE and WHY there. Spatial association — When two or more phenomena share similar spatial patterns. Environmental determinism vs possibilism — Debate over whether environment controls or influences human activity.'
      }
    },
    {
      id: 'hgspatia7-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Geographic perspective** with **Spatial association** — while related, they address different aspects of Spatial Concepts & Geographic Data.
- **Environmental determinism vs possibilism** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about ap review, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect ap review to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgspatia7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two maps show that areas with high poverty and areas with poor health outcomes overlap significantly. This demonstrates:',
            options: [
              'Coincidence',
              'Spatial association — the similar spatial distribution suggests a relationship',
              'Causation — poverty definitely causes poor health',
              'Distance decay'
            ],
            correctAnswer: 1,
            explanation: 'When spatial patterns of different phenomena overlap, it suggests spatial association — though correlation doesn\'t prove causation.'
          },
          {
            question: 'A critic argues that a Mercator projection world map in a classroom gives students a biased view of the world. This criticism relates to:',
            options: [
              'Map projections distorting area and potentially reinforcing Eurocentric worldviews',
              'Maps being too expensive',
              'Students not liking geography',
              'The map being too old'
            ],
            correctAnswer: 0,
            explanation: 'The Mercator projection exaggerates high-latitude areas (mostly wealthy nations), potentially reinforcing biased perceptions of the world.'
          }
        ]
      }
    }
  ]
}
