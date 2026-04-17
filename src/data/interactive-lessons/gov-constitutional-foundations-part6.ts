export const govConstitutionalFoundationsPart6Data = {
  topicSlug: 'gov-constitutional-foundations',
  sections: [
    {
      id: 'govconst6-intro',
      type: 'text' as const,
      content: `
# 🏛️ Constitutional Foundations

**Part 6 of 7 — Problem-Solving Workshop**

Apply Constitutional Foundations concepts to data interpretation and analytical scenarios. Practice the types of questions seen on the AP exam.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Data interpretation** | Analyzing maps, graphs, and tables related to Constitutional Foundations |
| **Argumentation** | Making evidence-based claims about Constitutional Foundations |
| **Spatial reasoning** | Using geographic thinking to analyze Constitutional Foundations |
      `
    },
    {
      id: 'govconst6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When interpreting data about Constitutional Foundations, the first step is:',
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
            question: 'An evidence-based argument about Constitutional Foundations requires:',
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
      id: 'govconst6-content',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Deeper Dive

### Data interpretation
Analyzing maps, graphs, and tables related to Constitutional Foundations. Understanding this concept is essential for mastering Constitutional Foundations in AP US Government.

### Argumentation
Making evidence-based claims about Constitutional Foundations. This builds on the previous concept and connects to broader themes in the course.

### Spatial reasoning
Using geographic thinking to analyze Constitutional Foundations. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      `
    },
    {
      id: 'govconst6-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall (exact term answers)** ✍️

1) What term refers to analyzing maps, graphs, and tables related to Constitutional Foundations?

2) What concept describes making evidence-based claims about Constitutional Foundations?

3) Name the term for using geographic thinking to analyze Constitutional Foundations.

Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Data interpretation', 'Argumentation', 'Spatial reasoning'],
        hint1: 'Starts with: D',
        hint2: 'Starts with: A',
        hint3: 'Starts with: S',
        explanation: 'Expected answers: Data interpretation (Analyzing maps, graphs, and tables related to Constitutional Foundations), Argumentation (Making evidence-based claims about Constitutional Foundations), and Spatial reasoning (Using geographic thinking to analyze Constitutional Foundations).'
      }
    },
    {
      id: 'govconst6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing maps, graphs, and tables related to Constitutional Foundations is called ___',
            options: ['Data interpretation', 'Argumentation', 'Spatial reasoning', 'None of these']
          },
          {
            label: 'Making evidence-based claims about Constitutional Foundations describes ___',
            options: ['Data interpretation', 'Argumentation', 'Spatial reasoning', 'All of these']
          },
          {
            label: 'Using geographic thinking to analyze Constitutional Foundations is known as ___',
            options: ['Spatial reasoning', 'Data interpretation', 'Argumentation', 'None of these']
          }
        ],
        correctAnswers: ['Data interpretation', 'Argumentation', 'Spatial reasoning'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Data interpretation — Analyzing maps, graphs, and tables related to Constitutional Foundations. Argumentation — Making evidence-based claims about Constitutional Foundations. Spatial reasoning — Using geographic thinking to analyze Constitutional Foundations.'
      }
    },
    {
      id: 'govconst6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\'\'t confuse **Data interpretation** with **Argumentation** — while related, they address different aspects of Constitutional Foundations.
- **Spatial reasoning** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about problem-solving workshop, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect problem-solving workshop to broader themes in AP US Government for higher scores.
      `
    },
    {
      id: 'govconst6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'You are given a data table about Constitutional Foundations and asked to identify a trend. You should:',
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
            question: 'A free-response question asks you to use evidence to support an argument about Constitutional Foundations. The best approach is:',
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
