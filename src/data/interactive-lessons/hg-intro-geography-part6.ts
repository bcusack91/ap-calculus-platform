export const hgIntroGeographyPart6Data = {
  topicSlug: 'hg-intro-geography',
  sections: [
    {
      id: 'hgintrog6-intro',
      type: 'text' as const,
      content: `
# 🌍 Introduction to Geography

**Part 6 of 7 — Problem-Solving Workshop**

This workshop focuses on applying geographic concepts to real-world scenarios. You'll practice using spatial analysis, identifying region types, and analyzing diffusion patterns in context.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Spatial analysis** | The process of examining locations, patterns, and relationships across space |
| **Pattern recognition** | Identifying recurring spatial arrangements in geographic data |
| **Geographic inquiry** | Asking and answering questions about spatial phenomena |
      `
    },
    {
      id: 'hgintrog6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which question best represents geographic inquiry?',
            options: [
              'When did Rome fall?',
              'Why do cities develop along rivers?',
              'Who invented the telephone?',
              'What is photosynthesis?'
            ],
            correctAnswer: 1,
            explanation: 'Geographic inquiry asks about spatial relationships — why certain phenomena occur in certain locations.'
          },
          {
            question: 'Identifying clusters of fast-food restaurants near highway exits demonstrates:',
            options: [
              'Historical analysis',
              'Spatial pattern recognition',
              'Chemical analysis',
              'Literary criticism'
            ],
            correctAnswer: 1,
            explanation: 'Recognizing that businesses cluster near transportation nodes is spatial pattern recognition.'
          }
        ]
      }
    },
    {
      id: 'hgintrog6-content',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Deeper Dive

### Spatial analysis
The process of examining locations, patterns, and relationships across space. Understanding this concept is essential for mastering Introduction to Geography in AP Human Geography.

### Pattern recognition
Identifying recurring spatial arrangements in geographic data. This builds on the previous concept and connects to broader themes in the course.

### Geographic inquiry
Asking and answering questions about spatial phenomena. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgintrog6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to the process of examining locations, patterns, and relationships across space?

2) What concept describes identifying recurring spatial arrangements in geographic data?

3) Name the term for asking and answering questions about spatial phenomena.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Spatial analysis', 'Pattern recognition', 'Geographic inquiry'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: P',
        hint3: 'Starts with: G',
        explanation: 'Expected answers: Spatial analysis (The process of examining locations, patterns, and relationships across space), Pattern recognition (Identifying recurring spatial arrangements in geographic data), and Geographic inquiry (Asking and answering questions about spatial phenomena).'
      }
    },
    {
      id: 'hgintrog6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The process of examining locations, patterns, and relationships across space is called ___',
            options: ['Spatial analysis', 'Pattern recognition', 'Geographic inquiry', 'None of these']
          },
          {
            label: 'Identifying recurring spatial arrangements in geographic data describes ___',
            options: ['Spatial analysis', 'Pattern recognition', 'Geographic inquiry', 'All of these']
          },
          {
            label: 'Asking and answering questions about spatial phenomena is known as ___',
            options: ['Geographic inquiry', 'Spatial analysis', 'Pattern recognition', 'None of these']
          }
        ],
        correctAnswers: ['Spatial analysis', 'Pattern recognition', 'Geographic inquiry'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Spatial analysis — The process of examining locations, patterns, and relationships across space. Pattern recognition — Identifying recurring spatial arrangements in geographic data. Geographic inquiry — Asking and answering questions about spatial phenomena.'
      }
    },
    {
      id: 'hgintrog6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Spatial analysis** with **Pattern recognition** — while related, they address different aspects of Introduction to Geography.
- **Geographic inquiry** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about problem-solving workshop, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect problem-solving workshop to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgintrog6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A geographer notices that dialect boundaries in the US follow the Appalachian Mountains. This shows:',
            options: [
              'Physical geography can create barriers that shape cultural regions',
              'Dialects are unrelated to geography',
              'Mountains have no effect on culture',
              'All Americans speak the same dialect'
            ],
            correctAnswer: 0,
            explanation: 'Physical barriers like mountains can limit interaction, creating distinct cultural regions on either side.'
          },
          {
            question: 'To study the impact of a new highway on nearby businesses, a geographer would most likely use:',
            options: [
              'GIS to overlay highway routes with business locations and revenue data',
              'A historical textbook about road construction',
              'A chemistry lab to test pavement materials',
              'A literary analysis of highway poetry'
            ],
            correctAnswer: 0,
            explanation: 'GIS is the ideal tool for combining multiple spatial data layers to analyze the geographic impact of infrastructure.'
          }
        ]
      }
    }
  ]
}
