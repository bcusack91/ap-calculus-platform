export const hgSpatialConceptsPart3Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia3-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 3 of 7 — Map Types & Projections**

Different map projections distort area, shape, distance, or direction. Understanding these trade-offs is essential for interpreting maps.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Mercator projection** | A projection that preserves shape but distorts area near the poles |
| **Robinson projection** | A compromise projection that minimizes all distortions |
| **Choropleth map** | A thematic map that uses shading to represent data by area |
      `
    },
    {
      id: 'hgspatia3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Mercator projection is criticized because:',
            options: [
              'It distorts area near the poles, making high-latitude areas appear too large',
              'It distorts shape',
              'It cannot show direction',
              'It is too small'
            ],
            correctAnswer: 0,
            explanation: 'The Mercator projection preserves shape and direction but greatly exaggerates the size of areas near the poles.'
          },
          {
            question: 'A choropleth map uses:',
            options: [
              'Dots to show individual occurrences',
              'Colors or shading to show data variation by area',
              'Lines to show elevation',
              'Arrows to show movement'
            ],
            correctAnswer: 1,
            explanation: 'Choropleth maps use color shading to show how a variable (like population density) varies across areas.'
          }
        ]
      }
    },
    {
      id: 'hgspatia3-content',
      type: 'text' as const,
      content: `
## Map Types & Projections — Deeper Dive

### Mercator projection
A projection that preserves shape but distorts area near the poles. Understanding this concept is essential for mastering Spatial Concepts & Geographic Data in AP Human Geography.

### Robinson projection
A compromise projection that minimizes all distortions. This builds on the previous concept and connects to broader themes in the course.

### Choropleth map
A thematic map that uses shading to represent data by area. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgspatia3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to a projection that preserves shape but distorts area near the poles?

2) What concept describes a compromise projection that minimizes all distortions?

3) Name the term for a thematic map that uses shading to represent data by area.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Mercator projection', 'Robinson projection', 'Choropleth map'],
        hint1: 'Starts with: M',
        hint2: 'Starts with: R',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: Mercator projection (A projection that preserves shape but distorts area near the poles), Robinson projection (A compromise projection that minimizes all distortions), and Choropleth map (A thematic map that uses shading to represent data by area).'
      }
    },
    {
      id: 'hgspatia3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A projection that preserves shape but distorts area near the poles is called ___',
            options: ['Mercator projection', 'Robinson projection', 'Choropleth map', 'None of these']
          },
          {
            label: 'A compromise projection that minimizes all distortions describes ___',
            options: ['Mercator projection', 'Robinson projection', 'Choropleth map', 'All of these']
          },
          {
            label: 'A thematic map that uses shading to represent data by area is known as ___',
            options: ['Choropleth map', 'Mercator projection', 'Robinson projection', 'None of these']
          }
        ],
        correctAnswers: ['Mercator projection', 'Robinson projection', 'Choropleth map'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Mercator projection — A projection that preserves shape but distorts area near the poles. Robinson projection — A compromise projection that minimizes all distortions. Choropleth map — A thematic map that uses shading to represent data by area.'
      }
    },
    {
      id: 'hgspatia3-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Mercator projection** with **Robinson projection** — while related, they address different aspects of Spatial Concepts & Geographic Data.
- **Choropleth map** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about map types & projections, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect map types & projections to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgspatia3-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A map shows Greenland as nearly the same size as Africa. This map likely uses:',
            options: [
              'Mercator projection — which distorts area near the poles',
              'Robinson projection — which minimizes distortion',
              'Equal-area projection — which preserves true area',
              'Topographic map — which shows elevation'
            ],
            correctAnswer: 0,
            explanation: 'The Mercator projection makes Greenland appear far larger than it actually is — Africa is actually 14 times larger.'
          },
          {
            question: 'For an AP exam question about displaying income inequality across US counties, the best map type is:',
            options: [
              'A reference map with city names',
              'A choropleth map shading counties by income level',
              'A topographic map showing elevation',
              'A road map showing highways'
            ],
            correctAnswer: 1,
            explanation: 'A choropleth map is ideal for showing how a variable like income varies across geographic areas.'
          }
        ]
      }
    }
  ]
}
