export const hgIntroGeographyPart3Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog3-intro',
      type: 'text' as const,
      content: `
# 🌍 Introduction to Geography

**Part 3 of 7 — Regions and Regionalization**

Geographers organize Earth's surface into regions based on shared characteristics. There are three types of regions: formal, functional, and perceptual, each defined by different criteria.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Formal region** | An area defined by uniform characteristics like language or climate |
| **Functional region** | An area organized around a central node or focal point |
| **Perceptual region** | An area defined by people's beliefs and attitudes |
      `
    },
    {
      id: 'hgintrog3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A formal region is defined by:',
            options: [
              'A central node of activity',
              'Uniform characteristics',
              'People\'s perceptions',
              'Government decree'
            ],
            correctAnswer: 1,
            explanation: 'Formal regions are defined by uniform or homogeneous characteristics, such as a language spoken or climate type.'
          },
          {
            question: 'Which is an example of a functional region?',
            options: [
              'The Great Plains',
              'A newspaper delivery area',
              'The South',
              'The Sahara Desert'
            ],
            correctAnswer: 1,
            explanation: 'A newspaper delivery area is organized around a central node (the newspaper office) and diminishes with distance — a functional region.'
          }
        ]
      }
    },
    {
      id: 'hgintrog3-content',
      type: 'text' as const,
      content: `
## Regions and Regionalization — Deeper Dive

### Formal region
An area defined by uniform characteristics like language or climate. Understanding this concept is essential for mastering Introduction to Geography in AP Human Geography.

### Functional region
An area organized around a central node or focal point. This builds on the previous concept and connects to broader themes in the course.

### Perceptual region
An area defined by people's beliefs and attitudes. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgintrog3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to an area defined by uniform characteristics like language or climate?

2) What concept describes an area organized around a central node or focal point?

3) Name the term for an area defined by people's beliefs and attitudes.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Formal region', 'Functional region', 'Perceptual region'],
        hint1: 'Starts with: F',
        hint2: 'Starts with: F',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: Formal region (An area defined by uniform characteristics like language or climate), Functional region (An area organized around a central node or focal point), and Perceptual region (An area defined by people\'s beliefs and attitudes).'
      }
    },
    {
      id: 'hgintrog3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An area defined by uniform characteristics like language or climate is called ___',
            options: ['Formal region', 'Functional region', 'Perceptual region', 'None of these']
          },
          {
            label: 'An area organized around a central node or focal point describes ___',
            options: ['Formal region', 'Functional region', 'Perceptual region', 'All of these']
          },
          {
            label: 'An area defined by people\'s beliefs and attitudes is known as ___',
            options: ['Perceptual region', 'Formal region', 'Functional region', 'None of these']
          }
        ],
        correctAnswers: ['Formal region', 'Functional region', 'Perceptual region'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Formal region — An area defined by uniform characteristics like language or climate. Functional region — An area organized around a central node or focal point. Perceptual region — An area defined by people\'s beliefs and attitudes.'
      }
    },
    {
      id: 'hgintrog3-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Formal region** with **Functional region** — while related, they address different aspects of Introduction to Geography.
- **Perceptual region** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about regions and regionalization, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect regions and regionalization to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgintrog3-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The "Bible Belt" in the United States is best classified as:',
            options: [
              'A formal region — defined by state boundaries',
              'A functional region — organized around churches',
              'A perceptual region — based on cultural beliefs about religious influence',
              'An administrative region — created by the federal government'
            ],
            correctAnswer: 2,
            explanation: 'The Bible Belt is a perceptual region — its boundaries are not precisely defined but based on cultural perceptions of high religious influence.'
          },
          {
            question: 'A pizza delivery zone that extends 5 miles from the restaurant is:',
            options: [
              'A formal region — defined by a uniform characteristic',
              'A functional region — organized around the restaurant as a node',
              'A perceptual region — defined by customer beliefs',
              'A natural region — defined by physical geography'
            ],
            correctAnswer: 1,
            explanation: 'The delivery zone is a functional region centered on the restaurant, with boundaries defined by the reach of the delivery service.'
          }
        ]
      }
    }
  ]
}
