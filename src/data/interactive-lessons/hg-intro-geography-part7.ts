export const hgIntroGeographyPart7Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog7-intro',
      type: 'text' as const,
      content: `
# 🌍 Introduction to Geography

**Part 7 of 7 — AP Review**

This review consolidates Unit 1 concepts for the AP Human Geography exam. Focus on map skills, spatial thinking, region types, and diffusion patterns — all heavily tested topics.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Spatial organization** | How human activities and features are arranged across Earth's surface |
| **Cultural landscape** | The visible imprint of human activity on the natural landscape |
| **Globalization** | The increasing interconnection of people and places through economic, cultural, and political networks |
      `
    },
    {
      id: 'hgintrog7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The arrangement of cities, farms, and roads across a region reflects:',
            options: [
              'Spatial organization of human activity',
              'Random chance',
              'Biological processes',
              'Chemical reactions'
            ],
            correctAnswer: 0,
            explanation: 'The distribution of human features across space reflects spatial organization — the core concept of geography.'
          },
          {
            question: 'Which best describes cultural landscape?',
            options: [
              'Untouched wilderness',
              'The visible imprint of human activity on the environment',
              'Underground geological formations',
              'Ocean currents'
            ],
            correctAnswer: 1,
            explanation: 'Cultural landscape is the visible result of human modification of the natural environment — buildings, farms, roads, etc.'
          }
        ]
      }
    },
    {
      id: 'hgintrog7-content',
      type: 'text' as const,
      content: `
## AP Review — Deeper Dive

### Spatial organization
How human activities and features are arranged across Earth's surface. Understanding this concept is essential for mastering Introduction to Geography in AP Human Geography.

### Cultural landscape
The visible imprint of human activity on the natural landscape. This builds on the previous concept and connects to broader themes in the course.

### Globalization
The increasing interconnection of people and places through economic, cultural, and political networks. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgintrog7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to how human activities and features are arranged across Earth's surface?

2) What concept describes the visible imprint of human activity on the natural landscape?

3) Name the term for the increasing interconnection of people and places through economic, cultural, and political networks.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Spatial organization', 'Cultural landscape', 'Globalization'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: C',
        hint3: 'Starts with: G',
        explanation: 'Expected answers: Spatial organization (How human activities and features are arranged across Earth\'s surface), Cultural landscape (The visible imprint of human activity on the natural landscape), and Globalization (The increasing interconnection of people and places through economic, cultural, and political networks).'
      }
    },
    {
      id: 'hgintrog7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'How human activities and features are arranged across Earth\'s surface is called ___',
            options: ['Spatial organization', 'Cultural landscape', 'Globalization', 'None of these']
          },
          {
            label: 'The visible imprint of human activity on the natural landscape describes ___',
            options: ['Spatial organization', 'Cultural landscape', 'Globalization', 'All of these']
          },
          {
            label: 'The increasing interconnection of people and places through economic, cultural, and political networks is known as ___',
            options: ['Globalization', 'Spatial organization', 'Cultural landscape', 'None of these']
          }
        ],
        correctAnswers: ['Spatial organization', 'Cultural landscape', 'Globalization'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Spatial organization — How human activities and features are arranged across Earth\'s surface. Cultural landscape — The visible imprint of human activity on the natural landscape. Globalization — The increasing interconnection of people and places through economic, cultural, and political networks.'
      }
    },
    {
      id: 'hgintrog7-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Spatial organization** with **Cultural landscape** — while related, they address different aspects of Introduction to Geography.
- **Globalization** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about ap review, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect ap review to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgintrog7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student must explain why Walmart stores are concentrated in the southeastern US. The best approach is:',
            options: [
              'Analyze the spatial diffusion from the origin point (Bentonville, AR)',
              'Study the chemical composition of building materials',
              'Read Walmart\'s financial statements',
              'Survey individual shoppers'
            ],
            correctAnswer: 0,
            explanation: 'Walmart\'s distribution can be explained through spatial diffusion from its origin, combined with hierarchical expansion.'
          },
          {
            question: 'On the AP exam, you are asked to identify a region type. The question describes an area where people share a common cultural identity. This is:',
            options: [
              'Formal region — defined by shared cultural characteristics',
              'Functional region — organized around a node',
              'Perceptual region — based on feelings',
              'Administrative region — defined by government'
            ],
            correctAnswer: 0,
            explanation: 'A shared cultural identity is a uniform characteristic, making this a formal (uniform) region.'
          }
        ]
      }
    }
  ]
}
