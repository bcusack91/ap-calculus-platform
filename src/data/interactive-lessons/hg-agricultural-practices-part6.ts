export const hgAgriculturalPracticesPart6Data = {
  topicSlug: 'hg-agricultural-practices',
  sections: [
    {
      id: 'hgagricu6-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Practices & Land Use

**Part 6 of 7 — Problem-Solving Workshop**

Apply Agricultural Practices & Land Use concepts to data interpretation and analytical scenarios. Practice the types of questions seen on the AP exam.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Data interpretation** | Analyzing maps, graphs, and tables related to Agricultural Practices & Land Use |
| **Argumentation** | Making evidence-based claims about Agricultural Practices & Land Use |
| **Spatial reasoning** | Using geographic thinking to analyze Agricultural Practices & Land Use |
      `
    },
    {
      id: 'hgagricu6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When interpreting data about Agricultural Practices & Land Use, the first step is:',
            options: [
              'Jump to conclusions',
              'Identify what the data shows and note any patterns or trends',
              'Ignore the data',
              'Only look at the title'
            ],
            correctAnswer: 0,
            explanation: 'Data interpretation should begin with identifying what is shown and noting visible patterns before drawing conclusions.'
          },
          {
            question: 'An evidence-based argument about Agricultural Practices & Land Use requires:',
            options: [
              'Just opinions',
              'A clear claim supported by specific evidence and reasoning',
              'No evidence',
              'Only emotional appeals'
            ],
            correctAnswer: 1,
            explanation: 'Evidence-based arguments need a claim (thesis), supporting evidence (data, examples), and reasoning (explanation).'
          }
        ]
      }
    },
    {
      id: 'hgagricu6-content',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Deeper Dive

### Data interpretation
Analyzing maps, graphs, and tables related to Agricultural Practices & Land Use. Understanding this concept is essential for mastering Agricultural Practices & Land Use in AP Human Geography.

### Argumentation
Making evidence-based claims about Agricultural Practices & Land Use. This builds on the previous concept and connects to broader themes in the course.

### Spatial reasoning
Using geographic thinking to analyze Agricultural Practices & Land Use. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'hgagricu6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to analyzing maps, graphs, and tables related to Agricultural Practices & Land Use?

2) What concept describes making evidence-based claims about Agricultural Practices & Land Use?

3) Name the term for using geographic thinking to analyze Agricultural Practices & Land Use.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Data interpretation', 'Argumentation', 'Spatial reasoning'],
        hint1: 'Starts with: D',
        hint2: 'Starts with: A',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: Data interpretation (Analyzing maps, graphs, and tables related to Agricultural Practices & Land Use), Argumentation (Making evidence-based claims about Agricultural Practices & Land Use), and Spatial reasoning (Using geographic thinking to analyze Agricultural Practices & Land Use).'
      }
    },
    {
      id: 'hgagricu6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing maps, graphs, and tables related to Agricultural Practices & Land Use is called ___',
            options: ['Data interpretation', 'Argumentation', 'Spatial reasoning', 'None of these']
          },
          {
            label: 'Making evidence-based claims about Agricultural Practices & Land Use describes ___',
            options: ['Data interpretation', 'Argumentation', 'Spatial reasoning', 'All of these']
          },
          {
            label: 'Using geographic thinking to analyze Agricultural Practices & Land Use is known as ___',
            options: ['Spatial reasoning', 'Data interpretation', 'Argumentation', 'None of these']
          }
        ],
        correctAnswers: ['Data interpretation', 'Argumentation', 'Spatial reasoning'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Data interpretation — Analyzing maps, graphs, and tables related to Agricultural Practices & Land Use. Argumentation — Making evidence-based claims about Agricultural Practices & Land Use. Spatial reasoning — Using geographic thinking to analyze Agricultural Practices & Land Use.'
      }
    },
    {
      id: 'hgagricu6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Data interpretation** with **Argumentation** — while related, they address different aspects of Agricultural Practices & Land Use.
- **Spatial reasoning** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about problem-solving workshop, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect problem-solving workshop to broader themes in AP Human Geography for higher scores.
      `
    },
    {
      id: 'hgagricu6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'You are given a data table about Agricultural Practices & Land Use and asked to identify a trend. You should:',
            options: [
              'Pick random numbers',
              'Look for consistent increases, decreases, or patterns across the data',
              'Ignore the table',
              'Only read the first row'
            ],
            correctAnswer: 1,
            explanation: 'Trend identification requires examining the entire dataset for consistent patterns of change.'
          },
          {
            question: 'A free-response question asks you to use evidence to support an argument about Agricultural Practices & Land Use. The best approach is:',
            options: [
              'State your opinion without evidence',
              'Make a clear claim, cite specific data or examples, and explain how they support your argument',
              'Copy the question',
              'Write about a different topic'
            ],
            correctAnswer: 1,
            explanation: 'AP free-response answers require a clear thesis, specific supporting evidence, and explanation of how evidence supports the argument.'
          }
        ]
      }
    }
  ]
}
