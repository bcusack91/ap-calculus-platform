export const hgSpatialConceptsPart4Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia4-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 4 of 7 — Geographic Data Sources**

Geographers use both quantitative and qualitative data. Census data, satellite imagery, fieldwork, and surveys all provide spatial information.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Quantitative data** | Numerical data that can be measured and analyzed statistically |
| **Qualitative data** | Descriptive data about characteristics, experiences, and perceptions |
| **Remote sensing** | Collecting data about Earth's surface from satellites or aircraft |
      `
    },
    {
      id: 'hgspatia4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Census data is an example of:',
            options: [
              'Qualitative data',
              'Quantitative data',
              'Remote sensing',
              'Field observation'
            ],
            correctAnswer: 1,
            explanation: 'Census data provides numerical (quantitative) information about population, income, housing, etc.'
          },
          {
            question: 'Remote sensing involves:',
            options: [
              'Door-to-door surveys',
              'Collecting data using satellites or aircraft',
              'Reading historical documents',
              'Conducting interviews'
            ],
            correctAnswer: 1,
            explanation: 'Remote sensing uses technology like satellites to collect data about Earth without direct contact.'
          }
        ]
      }
    },
    {
      id: 'hgspatia4-content',
      type: 'text' as const,
      content: `
## Geographic Data Sources — Deeper Dive

### Quantitative data
Numerical data that can be measured and analyzed statistically. Understanding this concept is essential for mastering Spatial Concepts & Geographic Data in AP Human Geography.

### Qualitative data
Descriptive data about characteristics, experiences, and perceptions. This builds on the previous concept and connects to broader themes in the course.

### Remote sensing
Collecting data about Earth's surface from satellites or aircraft. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgspatia4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to numerical data that can be measured and analyzed statistically?

2) What concept describes descriptive data about characteristics, experiences, and perceptions?

3) Name the term for collecting data about Earth's surface from satellites or aircraft.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Quantitative data', 'Qualitative data', 'Remote sensing'],
        hint1: 'Starts with: Q',
        hint2: 'Starts with: Q',
        hint3: 'Starts with: R',
        explanation: 'Expected answers: Quantitative data (Numerical data that can be measured and analyzed statistically), Qualitative data (Descriptive data about characteristics, experiences, and perceptions), and Remote sensing (Collecting data about Earth\'s surface from satellites or aircraft).'
      }
    },
    {
      id: 'hgspatia4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Numerical data that can be measured and analyzed statistically is called ___',
            options: ['Quantitative data', 'Qualitative data', 'Remote sensing', 'None of these']
          },
          {
            label: 'Descriptive data about characteristics, experiences, and perceptions describes ___',
            options: ['Quantitative data', 'Qualitative data', 'Remote sensing', 'All of these']
          },
          {
            label: 'Collecting data about Earth\'s surface from satellites or aircraft is known as ___',
            options: ['Remote sensing', 'Quantitative data', 'Qualitative data', 'None of these']
          }
        ],
        correctAnswers: ['Quantitative data', 'Qualitative data', 'Remote sensing'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Quantitative data — Numerical data that can be measured and analyzed statistically. Qualitative data — Descriptive data about characteristics, experiences, and perceptions. Remote sensing — Collecting data about Earth\'s surface from satellites or aircraft.'
      }
    },
    {
      id: 'hgspatia4-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Quantitative data** with **Qualitative data** — while related, they address different aspects of Spatial Concepts & Geographic Data.
- **Remote sensing** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about geographic data sources, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect geographic data sources to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgspatia4-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A geographer studying urban sprawl over 30 years would most likely use:',
            options: [
              'Remote sensing — comparing satellite imagery over time',
              'Interviews with city residents',
              'A chemistry lab',
              'A literary analysis'
            ],
            correctAnswer: 0,
            explanation: 'Satellite imagery from different years allows geographers to track changes in land use — ideal for studying urban sprawl.'
          },
          {
            question: 'To understand why immigrants choose certain neighborhoods, a geographer would use:',
            options: [
              'Only quantitative census data',
              'Qualitative data from interviews and fieldwork',
              'Only satellite imagery',
              'Only road maps'
            ],
            correctAnswer: 1,
            explanation: 'Understanding motivations and experiences requires qualitative methods like interviews — numbers alone can\'t explain "why."'
          }
        ]
      }
    }
  ]
}
