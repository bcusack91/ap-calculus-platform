export const hgPopulationDistributionPart7Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula7-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 7 of 7 — AP Review**

Master population distribution and composition for the AP exam. Focus on density measures, population pyramids, and spatial distribution patterns.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Demographic transition model** | A model showing how population changes as a country develops |
| **Overpopulation** | When population exceeds the capacity of the environment to support it |
| **Population distribution** | The spatial arrangement of people across Earth's surface |
      `
    },
    {
      id: 'hgpopula7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The demographic transition model describes:',
            options: [
              'How population changes as countries industrialize',
              'Only birth rates',
              'Only death rates',
              'Immigration patterns'
            ],
            correctAnswer: 0,
            explanation: 'The DTM describes the transition from high birth and death rates to low birth and death rates as countries develop.'
          },
          {
            question: 'Overpopulation is best understood as:',
            options: [
              'Having many people in a country',
              'Population exceeding the environment\'s carrying capacity',
              'Having a high arithmetic density',
              'Having more males than females'
            ],
            correctAnswer: 1,
            explanation: 'Overpopulation is not just about numbers — it occurs when population demands exceed environmental resources and carrying capacity.'
          }
        ]
      }
    },
    {
      id: 'hgpopula7-content',
      type: 'text' as const,
      content: `
## AP Review — Deeper Dive

### Demographic transition model
A model showing how population changes as a country develops. Understanding this concept is essential for mastering Population Distribution & Composition in AP Human Geography.

### Overpopulation
When population exceeds the capacity of the environment to support it. This builds on the previous concept and connects to broader themes in the course.

### Population distribution
The spatial arrangement of people across Earth's surface. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgpopula7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to a model showing how population changes as a country develops?

2) What concept describes when population exceeds the capacity of the environment to support it?

3) Name the term for the spatial arrangement of people across Earth's surface.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Demographic transition model', 'Overpopulation', 'Population distribution'],
        hint1: 'Starts with: D',
        hint2: 'Starts with: O',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: Demographic transition model (A model showing how population changes as a country develops), Overpopulation (When population exceeds the capacity of the environment to support it), and Population distribution (The spatial arrangement of people across Earth\'s surface).'
      }
    },
    {
      id: 'hgpopula7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A model showing how population changes as a country develops is called ___',
            options: ['Demographic transition model', 'Overpopulation', 'Population distribution', 'None of these']
          },
          {
            label: 'When population exceeds the capacity of the environment to support it describes ___',
            options: ['Demographic transition model', 'Overpopulation', 'Population distribution', 'All of these']
          },
          {
            label: 'The spatial arrangement of people across Earth\'s surface is known as ___',
            options: ['Population distribution', 'Demographic transition model', 'Overpopulation', 'None of these']
          }
        ],
        correctAnswers: ['Demographic transition model', 'Overpopulation', 'Population distribution'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Demographic transition model — A model showing how population changes as a country develops. Overpopulation — When population exceeds the capacity of the environment to support it. Population distribution — The spatial arrangement of people across Earth\'s surface.'
      }
    },
    {
      id: 'hgpopula7-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Demographic transition model** with **Overpopulation** — while related, they address different aspects of Population Distribution & Composition.
- **Population distribution** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about ap review, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect ap review to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgpopula7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On the AP exam, you are given population pyramids for two countries. Country A has a wide base; Country B has a narrow base and wide top. Country A is likely:',
            options: [
              'A developed country with an aging population',
              'A developing country with high birth rates and a youthful population',
              'An uninhabited area',
              'A country with zero migration'
            ],
            correctAnswer: 1,
            explanation: 'A wide-based pyramid indicates high birth rates and a young population — typical of developing countries.'
          },
          {
            question: 'A free-response question asks you to explain population distribution in Southeast Asia. Your answer should address:',
            options: [
              'Only climate',
              'Physical factors (rivers, climate), economic factors (agriculture, trade), and historical factors',
              'Only political boundaries',
              'Only language patterns'
            ],
            correctAnswer: 1,
            explanation: 'AP free-response answers should address multiple factors: physical environment, economic activities, and historical development.'
          }
        ]
      }
    }
  ]
}
