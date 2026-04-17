export const hgPopulationDistributionPart2Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula2-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 2 of 7 — Population Composition**

Population pyramids show age-sex structure. Dependency ratios measure the burden on the working-age population.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Population pyramid** | A graphical representation of age and sex distribution |
| **Dependency ratio** | The ratio of dependents (young and old) to working-age population |
| **Sex ratio** | The number of males per 100 females in a population |
      `
    },
    {
      id: 'hgpopula2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A wide-based population pyramid indicates:',
            options: [
              'An aging population',
              'A youthful population with high birth rates',
              'Zero population growth',
              'A declining population'
            ],
            correctAnswer: 1,
            explanation: 'A wide base on a population pyramid indicates many young people — typical of countries with high birth rates.'
          },
          {
            question: 'The dependency ratio measures:',
            options: [
              'Immigration rates',
              'The proportion of dependents relative to working-age population',
              'Total population size',
              'Birth rates only'
            ],
            correctAnswer: 1,
            explanation: 'The dependency ratio measures how many non-working (too young or old) people depend on the working-age population.'
          }
        ]
      }
    },
    {
      id: 'hgpopula2-content',
      type: 'text' as const,
      content: `
## Population Composition — Deeper Dive

### Population pyramid
A graphical representation of age and sex distribution. Understanding this concept is essential for mastering Population Distribution & Composition in AP Human Geography.

### Dependency ratio
The ratio of dependents (young and old) to working-age population. This builds on the previous concept and connects to broader themes in the course.

### Sex ratio
The number of males per 100 females in a population. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgpopula2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to a graphical representation of age and sex distribution?

2) What concept describes the ratio of dependents (young and old) to working-age population?

3) Name the term for the number of males per 100 females in a population.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Population pyramid', 'Dependency ratio', 'Sex ratio'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: D',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: Population pyramid (A graphical representation of age and sex distribution), Dependency ratio (The ratio of dependents (young and old) to working-age population), and Sex ratio (The number of males per 100 females in a population).'
      }
    },
    {
      id: 'hgpopula2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A graphical representation of age and sex distribution is called ___',
            options: ['Population pyramid', 'Dependency ratio', 'Sex ratio', 'None of these']
          },
          {
            label: 'The ratio of dependents (young and old) to working-age population describes ___',
            options: ['Population pyramid', 'Dependency ratio', 'Sex ratio', 'All of these']
          },
          {
            label: 'The number of males per 100 females in a population is known as ___',
            options: ['Sex ratio', 'Population pyramid', 'Dependency ratio', 'None of these']
          }
        ],
        correctAnswers: ['Population pyramid', 'Dependency ratio', 'Sex ratio'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Population pyramid — A graphical representation of age and sex distribution. Dependency ratio — The ratio of dependents (young and old) to working-age population. Sex ratio — The number of males per 100 females in a population.'
      }
    },
    {
      id: 'hgpopula2-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Population pyramid** with **Dependency ratio** — while related, they address different aspects of Population Distribution & Composition.
- **Sex ratio** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about population composition, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect population composition to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgpopula2-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Japan\'s population pyramid is top-heavy (wider at the top). This indicates:',
            options: [
              'High birth rates and rapid growth',
              'An aging population with more elderly than young people',
              'Recent immigration surge',
              'A perfectly balanced population'
            ],
            correctAnswer: 1,
            explanation: 'A top-heavy pyramid indicates an aging population with low birth rates and longer life expectancy.'
          },
          {
            question: 'A country with a dependency ratio of 0.8 means:',
            options: [
              '80 dependents for every 100 working-age adults',
              'The population is declining',
              '80% of people are employed',
              'Only 20% are dependents'
            ],
            correctAnswer: 0,
            explanation: 'A dependency ratio of 0.8 means there are 80 dependent people (children + elderly) for every 100 working-age adults.'
          }
        ]
      }
    }
  ]
}
