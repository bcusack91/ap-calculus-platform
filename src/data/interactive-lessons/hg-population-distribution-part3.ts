export const hgPopulationDistributionPart3Data = {
  topicSlug: 'hg-population-distribution',
  sections: [
    {
      id: 'hgpopula3-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Distribution & Composition

**Part 3 of 7 — Population Density Measures**

Different density measures reveal different aspects of population pressure. Agricultural density focuses on farmers per arable land.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Physiological density** | Population per unit of arable land |
| **Agricultural density** | Number of farmers per unit of arable land |
| **Carrying capacity** | The maximum population an area can support |
      `
    },
    {
      id: 'hgpopula3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Physiological density differs from arithmetic density because it uses:',
            options: [
              'Total land area',
              'Only arable (farmable) land',
              'Only urban land',
              'Only water area'
            ],
            correctAnswer: 1,
            explanation: 'Physiological density uses arable land in the denominator, giving a better picture of food production pressure.'
          },
          {
            question: 'A country with low agricultural density likely has:',
            options: [
              'Many subsistence farmers',
              'Mechanized, efficient agriculture',
              'No farmland',
              'Overpopulation'
            ],
            correctAnswer: 1,
            explanation: 'Low agricultural density means few farmers per arable acre — indicating mechanized, efficient farming systems.'
          }
        ]
      }
    },
    {
      id: 'hgpopula3-content',
      type: 'text' as const,
      content: `
## Population Density Measures — Deeper Dive

### Physiological density
Population per unit of arable land. Understanding this concept is essential for mastering Population Distribution & Composition in AP Human Geography.

### Agricultural density
Number of farmers per unit of arable land. This builds on the previous concept and connects to broader themes in the course.

### Carrying capacity
The maximum population an area can support. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgpopula3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to population per unit of arable land?

2) What concept describes number of farmers per unit of arable land?

3) Name the term for the maximum population an area can support.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Physiological density', 'Agricultural density', 'Carrying capacity'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: A',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: Physiological density (Population per unit of arable land), Agricultural density (Number of farmers per unit of arable land), and Carrying capacity (The maximum population an area can support).'
      }
    },
    {
      id: 'hgpopula3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Population per unit of arable land is called ___',
            options: ['Physiological density', 'Agricultural density', 'Carrying capacity', 'None of these']
          },
          {
            label: 'Number of farmers per unit of arable land describes ___',
            options: ['Physiological density', 'Agricultural density', 'Carrying capacity', 'All of these']
          },
          {
            label: 'The maximum population an area can support is known as ___',
            options: ['Carrying capacity', 'Physiological density', 'Agricultural density', 'None of these']
          }
        ],
        correctAnswers: ['Physiological density', 'Agricultural density', 'Carrying capacity'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Physiological density — Population per unit of arable land. Agricultural density — Number of farmers per unit of arable land. Carrying capacity — The maximum population an area can support.'
      }
    },
    {
      id: 'hgpopula3-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Physiological density** with **Agricultural density** — while related, they address different aspects of Population Distribution & Composition.
- **Carrying capacity** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about population density measures, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect population density measures to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgpopula3-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country A has high arithmetic but low physiological density. This suggests:',
            options: [
              'A large total area with abundant farmland',
              'A small total area with little farmland',
              'Overpopulation on limited land',
              'No agricultural production'
            ],
            correctAnswer: 0,
            explanation: 'High arithmetic but low physiological density means the country is large (lowering arithmetic density\'s usefulness) but has plenty of farmland per person.'
          },
          {
            question: 'As technology improves agricultural yields, a region\'s carrying capacity:',
            options: [
              'Stays the same',
              'May increase as more food can be produced',
              'Decreases',
              'Becomes irrelevant'
            ],
            correctAnswer: 1,
            explanation: 'Improved technology can increase carrying capacity by enabling more food production from the same land.'
          }
        ]
      }
    }
  ]
}
