export const hgIntroGeographyPart5Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog5-intro',
      type: 'text' as const,
      content: `
# 🌍 Introduction to Geography

**Part 5 of 7 — Diffusion Patterns**

Diffusion is the spread of ideas, innovations, and practices from their point of origin. Types include expansion diffusion (hierarchical, contagious, stimulus) and relocation diffusion.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Expansion diffusion** | The spread of an innovation from its origin while remaining strong at the source |
| **Relocation diffusion** | The spread of an idea through physical movement of people |
| **Hierarchical diffusion** | Spread from larger to smaller places or from authority figures |
      `
    },
    {
      id: 'hgintrog5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Expansion diffusion involves:',
            options: [
              'Ideas moving to new locations while weakening at origin',
              'Ideas spreading outward while remaining strong at the source',
              'Ideas being carried by migrants',
              'Ideas disappearing from origin'
            ],
            correctAnswer: 1,
            explanation: 'In expansion diffusion, the innovation spreads outward but also remains strong at its point of origin.'
          },
          {
            question: 'Immigration spreading cuisine to new countries is:',
            options: [
              'Expansion diffusion',
              'Relocation diffusion',
              'Hierarchical diffusion',
              'Contagious diffusion'
            ],
            correctAnswer: 1,
            explanation: 'When people physically move and bring their cultural practices, it is relocation diffusion.'
          }
        ]
      }
    },
    {
      id: 'hgintrog5-content',
      type: 'text' as const,
      content: `
## Diffusion Patterns — Deeper Dive

### Expansion diffusion
The spread of an innovation from its origin while remaining strong at the source. Understanding this concept is essential for mastering Introduction to Geography in AP Human Geography.

### Relocation diffusion
The spread of an idea through physical movement of people. This builds on the previous concept and connects to broader themes in the course.

### Hierarchical diffusion
Spread from larger to smaller places or from authority figures. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgintrog5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the spread of an innovation from its origin while remaining strong at the source?

2) What concept describes the spread of an idea through physical movement of people?

3) Name the term for spread from larger to smaller places or from authority figures.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Expansion diffusion', 'Relocation diffusion', 'Hierarchical diffusion'],
        hint1: 'Starts with: E',
        hint2: 'Starts with: R',
        hint3: 'Starts with: H',
        explanation: 'Expected answers: Expansion diffusion (The spread of an innovation from its origin while remaining strong at the source), Relocation diffusion (The spread of an idea through physical movement of people), and Hierarchical diffusion (Spread from larger to smaller places or from authority figures).'
      }
    },
    {
      id: 'hgintrog5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The spread of an innovation from its origin while remaining strong at the source is called ___',
            options: ['Expansion diffusion', 'Relocation diffusion', 'Hierarchical diffusion', 'None of these']
          },
          {
            label: 'The spread of an idea through physical movement of people describes ___',
            options: ['Expansion diffusion', 'Relocation diffusion', 'Hierarchical diffusion', 'All of these']
          },
          {
            label: 'Spread from larger to smaller places or from authority figures is known as ___',
            options: ['Hierarchical diffusion', 'Expansion diffusion', 'Relocation diffusion', 'None of these']
          }
        ],
        correctAnswers: ['Expansion diffusion', 'Relocation diffusion', 'Hierarchical diffusion'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Expansion diffusion — The spread of an innovation from its origin while remaining strong at the source. Relocation diffusion — The spread of an idea through physical movement of people. Hierarchical diffusion — Spread from larger to smaller places or from authority figures.'
      }
    },
    {
      id: 'hgintrog5-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Expansion diffusion** with **Relocation diffusion** — while related, they address different aspects of Introduction to Geography.
- **Hierarchical diffusion** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about diffusion patterns, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect diffusion patterns to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgintrog5-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When a fashion trend starts with celebrities, then spreads to the general public, this is:',
            options: [
              'Contagious diffusion — spreading through direct contact',
              'Hierarchical diffusion — spreading from high-status to lower-status groups',
              'Stimulus diffusion — the underlying idea spreads but changes',
              'Relocation diffusion — spreading through migration'
            ],
            correctAnswer: 1,
            explanation: 'Celebrity-to-public spread follows a hierarchy of influence — hierarchical diffusion.'
          },
          {
            question: 'COVID-19 spreading from person to person in a community is:',
            options: [
              'Hierarchical diffusion — spreading through authority figures',
              'Contagious diffusion — spreading through direct contact',
              'Stimulus diffusion — the concept spreads but changes form',
              'Relocation diffusion — spreading through migration'
            ],
            correctAnswer: 1,
            explanation: 'A disease that spreads through direct contact regardless of social hierarchy is contagious diffusion.'
          }
        ]
      }
    }
  ]
}
