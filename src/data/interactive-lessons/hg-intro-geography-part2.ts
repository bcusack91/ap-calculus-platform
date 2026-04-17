export const hgIntroGeographyPart2Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog2-intro',
      type: 'text' as const,
      content: `
# 🌍 Introduction to Geography

**Part 2 of 7 — Maps and Spatial Data**

Maps are the geographer's primary tool for visualizing and analyzing spatial data. Different map types serve different purposes, from reference maps showing locations to thematic maps displaying patterns.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Thematic map** | A map that displays a particular theme or pattern across space |
| **GIS** | Geographic Information System — technology for analyzing spatial data |
| **Map projection** | A method of representing Earth's curved surface on a flat map |
      `
    },
    {
      id: 'hgintrog2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a thematic map?',
            options: [
              'A map showing political boundaries',
              'A map displaying a particular pattern or theme',
              'A map used for navigation',
              'A map showing elevation'
            ],
            correctAnswer: 1,
            explanation: 'Thematic maps display specific themes or patterns like population density, climate, or economic activity.'
          },
          {
            question: 'What does GIS stand for?',
            options: [
              'Global Information Service',
              'Geographic Information System',
              'General Internet Source',
              'Geological Investigation Software'
            ],
            correctAnswer: 1,
            explanation: 'GIS stands for Geographic Information System — it allows layering and analysis of spatial data.'
          }
        ]
      }
    },
    {
      id: 'hgintrog2-content',
      type: 'text' as const,
      content: `
## Maps and Spatial Data — Deeper Dive

### Thematic map
A map that displays a particular theme or pattern across space. Understanding this concept is essential for mastering Introduction to Geography in AP Human Geography.

### GIS
Geographic Information System — technology for analyzing spatial data. This builds on the previous concept and connects to broader themes in the course.

### Map projection
A method of representing Earth's curved surface on a flat map. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgintrog2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to a map that displays a particular theme or pattern across space?

2) What concept describes geographic Information System — technology for analyzing spatial data?

3) Name the term for a method of representing Earth's curved surface on a flat map.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Thematic map', 'GIS', 'Map projection'],
        hint1: 'Starts with: T',
        hint2: 'Starts with: G',
        hint3: 'Starts with: M',
        explanation: 'Expected answers: Thematic map (A map that displays a particular theme or pattern across space), GIS (Geographic Information System — technology for analyzing spatial data), and Map projection (A method of representing Earth\'s curved surface on a flat map).'
      }
    },
    {
      id: 'hgintrog2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A map that displays a particular theme or pattern across space is called ___',
            options: ['Thematic map', 'GIS', 'Map projection', 'None of these']
          },
          {
            label: 'Geographic Information System — technology for analyzing spatial data describes ___',
            options: ['Thematic map', 'GIS', 'Map projection', 'All of these']
          },
          {
            label: 'A method of representing Earth\'s curved surface on a flat map is known as ___',
            options: ['Map projection', 'Thematic map', 'GIS', 'None of these']
          }
        ],
        correctAnswers: ['Thematic map', 'GIS', 'Map projection'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Thematic map — A map that displays a particular theme or pattern across space. GIS — Geographic Information System — technology for analyzing spatial data. Map projection — A method of representing Earth\'s curved surface on a flat map.'
      }
    },
    {
      id: 'hgintrog2-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Thematic map** with **GIS** — while related, they address different aspects of Introduction to Geography.
- **Map projection** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about maps and spatial data, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect maps and spatial data to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgintrog2-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A cartographer needs to show population density across the US. The best choice is:',
            options: [
              'A reference map showing state capitals',
              'A thematic choropleth map with shading by density',
              'A road map with highway numbers',
              'A topographic map with elevation contours'
            ],
            correctAnswer: 1,
            explanation: 'A choropleth (thematic) map uses color shading to show variations in population density across regions.'
          },
          {
            question: 'A city planner layers crime data, income levels, and school locations to identify underserved areas. This technology is:',
            options: [
              'GIS — overlaying multiple data layers for spatial analysis',
              'GPS — pinpointing exact coordinates',
              'Remote sensing — collecting satellite imagery',
              'Cartography — drawing maps by hand'
            ],
            correctAnswer: 0,
            explanation: 'GIS allows combining multiple spatial data layers to reveal patterns and inform decisions.'
          }
        ]
      }
    }
  ]
}
