export const hgPopulationDistributionPart5Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula5-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 5 of 7 — World Population Clusters**

The four major population clusters are East Asia, South Asia, Southeast Asia, and Europe. Each developed due to unique historical and environmental conditions.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **East Asian cluster** | The densely populated region including China, Japan, and Korea |
| **South Asian cluster** | The population concentration in India, Pakistan, and Bangladesh |
| **European cluster** | The population concentration in Western and Central Europe |
      `
    },
    {
      id: 'hgpopula5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The largest population cluster in the world is:',
            options: [
              'Europe',
              'East Asia',
              'North America',
              'South America'
            ],
            correctAnswer: 1,
            explanation: 'East Asia, centered on China, is the world\'s largest population cluster with over 1.5 billion people.'
          },
          {
            question: 'South Asia\'s population cluster is primarily located in:',
            options: [
              'The Himalayan mountains',
              'The Indo-Gangetic Plain and coastal areas',
              'The Sahara Desert',
              'The Arctic region'
            ],
            correctAnswer: 1,
            explanation: 'South Asia\'s population concentrates on the fertile Indo-Gangetic Plain and along the coasts of India.'
          }
        ]
      }
    },
    {
      id: 'hgpopula5-content',
      type: 'text' as const,
      content: `
## World Population Clusters — Deeper Dive

### East Asian cluster
The densely populated region including China, Japan, and Korea. Understanding this concept is essential for mastering Population Distribution & Composition in AP Human Geography.

### South Asian cluster
The population concentration in India, Pakistan, and Bangladesh. This builds on the previous concept and connects to broader themes in the course.

### European cluster
The population concentration in Western and Central Europe. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgpopula5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the densely populated region including China, Japan, and Korea?

2) What concept describes the population concentration in India, Pakistan, and Bangladesh?

3) Name the term for the population concentration in Western and Central Europe.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['East Asian cluster', 'South Asian cluster', 'European cluster'],
        hint1: 'Starts with: E',
        hint2: 'Starts with: S',
        hint3: 'Starts with: E',
        explanation: 'Expected answers: East Asian cluster (The densely populated region including China, Japan, and Korea), South Asian cluster (The population concentration in India, Pakistan, and Bangladesh), and European cluster (The population concentration in Western and Central Europe).'
      }
    },
    {
      id: 'hgpopula5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The densely populated region including China, Japan, and Korea is called ___',
            options: ['East Asian cluster', 'South Asian cluster', 'European cluster', 'None of these']
          },
          {
            label: 'The population concentration in India, Pakistan, and Bangladesh describes ___',
            options: ['East Asian cluster', 'South Asian cluster', 'European cluster', 'All of these']
          },
          {
            label: 'The population concentration in Western and Central Europe is known as ___',
            options: ['European cluster', 'East Asian cluster', 'South Asian cluster', 'None of these']
          }
        ],
        correctAnswers: ['East Asian cluster', 'South Asian cluster', 'European cluster'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'East Asian cluster — The densely populated region including China, Japan, and Korea. South Asian cluster — The population concentration in India, Pakistan, and Bangladesh. European cluster — The population concentration in Western and Central Europe.'
      }
    },
    {
      id: 'hgpopula5-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **East Asian cluster** with **South Asian cluster** — while related, they address different aspects of Population Distribution & Composition.
- **European cluster** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about world population clusters, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect world population clusters to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgpopula5-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why is the Amazon Basin sparsely populated despite being in a large country?',
            options: [
              'Dense tropical rainforest, poor soils, and hot-humid climate discourage settlement',
              'The government prohibits settlement',
              'There is no water supply',
              'The area is covered by ice'
            ],
            correctAnswer: 0,
            explanation: 'The Amazon\'s dense forest, nutrient-poor soils, and extreme climate make it inhospitable for large settlements despite Brazil\'s overall population.'
          },
          {
            question: 'Europe\'s population cluster developed partly because:',
            options: [
              'It has tropical climate',
              'It has navigable rivers, moderate climate, and industrial history',
              'It has no mountains',
              'It has the most arable land on Earth'
            ],
            correctAnswer: 1,
            explanation: 'Europe\'s population developed due to moderate climate, navigable rivers for trade, and early industrialization.'
          }
        ]
      }
    }
  ]
}
