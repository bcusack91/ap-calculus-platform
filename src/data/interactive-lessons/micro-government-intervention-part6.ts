export const microGovernmentInterventionPart6Data = {
  topicSlug: 'micro-government-intervention',
  sections: [
    {
      id: 'microgov6-intro',
      type: 'text' as const,
      content: `
# 💰 Government Intervention

**Part 6 of 7 — Problem-Solving Workshop**

Apply Government Intervention concepts to data interpretation and analytical scenarios. Practice the types of questions seen on the AP exam.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Data interpretation** | Analyzing maps, graphs, and tables related to Government Intervention |
| **Argumentation** | Making evidence-based claims about Government Intervention |
| **Spatial reasoning** | Using geographic thinking to analyze Government Intervention |
      `
    },
    {
      id: 'microgov6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When interpreting data about Government Intervention, the first step is:',
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
            question: 'An evidence-based argument about Government Intervention requires:',
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
      id: 'microgov6-content',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Deeper Dive

### Data interpretation
Analyzing maps, graphs, and tables related to Government Intervention. Understanding this concept is essential for mastering Government Intervention in AP Microeconomics.

### Argumentation
Making evidence-based claims about Government Intervention. This builds on the previous concept and connects to broader themes in the course.

### Spatial reasoning
Using geographic thinking to analyze Government Intervention. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'microgov6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to analyzing maps, graphs, and tables related to Government Intervention?

2) What concept describes making evidence-based claims about Government Intervention?

3) Name the term for using geographic thinking to analyze Government Intervention.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Data interpretation', 'Argumentation', 'Spatial reasoning'],
        hint1: 'Starts with: D',
        hint2: 'Starts with: A',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: Data interpretation (Analyzing maps, graphs, and tables related to Government Intervention), Argumentation (Making evidence-based claims about Government Intervention), and Spatial reasoning (Using geographic thinking to analyze Government Intervention).'
      }
    },
    {
      id: 'microgov6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing maps, graphs, and tables related to Government Intervention is called ___',
            options: ['Data interpretation', 'Argumentation', 'Spatial reasoning', 'None of these']
          },
          {
            label: 'Making evidence-based claims about Government Intervention describes ___',
            options: ['Data interpretation', 'Argumentation', 'Spatial reasoning', 'All of these']
          },
          {
            label: 'Using geographic thinking to analyze Government Intervention is known as ___',
            options: ['Spatial reasoning', 'Data interpretation', 'Argumentation', 'None of these']
          }
        ],
        correctAnswers: ['Data interpretation', 'Argumentation', 'Spatial reasoning'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Data interpretation — Analyzing maps, graphs, and tables related to Government Intervention. Argumentation — Making evidence-based claims about Government Intervention. Spatial reasoning — Using geographic thinking to analyze Government Intervention.'
      }
    },
    {
      id: 'microgov6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Data interpretation** with **Argumentation** — while related, they address different aspects of Government Intervention.
- **Spatial reasoning** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about problem-solving workshop, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect problem-solving workshop to broader themes in AP Microeconomics for higher scores.
      `
    },
    {
      id: 'microgov6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'You are given a data table about Government Intervention and asked to identify a trend. You should:',
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
            question: 'A free-response question asks you to use evidence to support an argument about Government Intervention. The best approach is:',
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
