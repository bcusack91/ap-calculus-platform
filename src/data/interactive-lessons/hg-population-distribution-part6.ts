export const hgPopulationDistributionPart6Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula6-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 6 of 7 — Problem-Solving Workshop**

Apply population concepts to data analysis. Practice reading population pyramids and calculating demographic measures.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Demographic analysis** | The statistical study of human population characteristics |
| **Census** | An official count of a population with detailed demographic data |
| **Cohort** | A group of people sharing a common characteristic, usually age |
      `
    },
    {
      id: 'hgpopula6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A demographic analysis typically includes:',
            options: [
              'Population size, composition, and distribution data',
              'Only birth rates',
              'Only death rates',
              'Only migration data'
            ],
            correctAnswer: 0,
            explanation: 'Demographic analysis examines multiple population characteristics: size, age structure, distribution, growth rates, etc.'
          },
          {
            question: 'A cohort in demographic studies refers to:',
            options: [
              'The total population',
              'A group sharing a common characteristic like birth year',
              'A type of government',
              'A migration pattern'
            ],
            correctAnswer: 1,
            explanation: 'A cohort is a group of people who share a characteristic — most commonly, people born in the same time period.'
          }
        ]
      }
    },
    {
      id: 'hgpopula6-content',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Deeper Dive

### Demographic analysis
The statistical study of human population characteristics. Understanding this concept is essential for mastering Population Distribution & Composition in AP Human Geography.

### Census
An official count of a population with detailed demographic data. This builds on the previous concept and connects to broader themes in the course.

### Cohort
A group of people sharing a common characteristic, usually age. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgpopula6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the statistical study of human population characteristics?

2) What concept describes an official count of a population with detailed demographic data?

3) Name the term for a group of people sharing a common characteristic, usually age.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Demographic analysis', 'Census', 'Cohort'],
        hint1: 'Starts with: D',
        hint2: 'Starts with: C',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: Demographic analysis (The statistical study of human population characteristics), Census (An official count of a population with detailed demographic data), and Cohort (A group of people sharing a common characteristic, usually age).'
      }
    },
    {
      id: 'hgpopula6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The statistical study of human population characteristics is called ___',
            options: ['Demographic analysis', 'Census', 'Cohort', 'None of these']
          },
          {
            label: 'An official count of a population with detailed demographic data describes ___',
            options: ['Demographic analysis', 'Census', 'Cohort', 'All of these']
          },
          {
            label: 'A group of people sharing a common characteristic, usually age is known as ___',
            options: ['Cohort', 'Demographic analysis', 'Census', 'None of these']
          }
        ],
        correctAnswers: ['Demographic analysis', 'Census', 'Cohort'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Demographic analysis — The statistical study of human population characteristics. Census — An official count of a population with detailed demographic data. Cohort — A group of people sharing a common characteristic, usually age.'
      }
    },
    {
      id: 'hgpopula6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Demographic analysis** with **Census** — while related, they address different aspects of Population Distribution & Composition.
- **Cohort** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about problem-solving workshop, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect problem-solving workshop to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgpopula6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A population pyramid with a narrow base and bulging middle (barrel-shaped) suggests:',
            options: [
              'High birth rates',
              'A baby boom generation aging through the population',
              'Rapid population growth',
              'High infant mortality'
            ],
            correctAnswer: 1,
            explanation: 'A barrel-shaped pyramid with a bulge in the middle shows a large cohort (often a baby boom generation) aging.'
          },
          {
            question: 'Two countries have the same arithmetic density but very different physiological densities. The best explanation is:',
            options: [
              'They have different amounts of arable land relative to total area',
              'They are in different hemispheres',
              'They speak different languages',
              'Their populations are exactly equal'
            ],
            correctAnswer: 0,
            explanation: 'Same arithmetic density but different physiological density means they differ in the proportion of land that is arable.'
          }
        ]
      }
    }
  ]
}
