export const calcBCExamStrategiesPart1Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'bc-ex1-intro',
      type: 'text' as const,
      content: `
# ∮ Bc Exam Strategies

**Part 1 of 7 — BC vs AB Content Overview**

### 1. BC includes all AB content plus

series, parametric/polar/vector calculus, advanced integration

### 2. About 60% of BC exam is AB content

About 60% of BC exam is AB content

### 3. BC sub-score (the AB portion) is reported separately

BC sub-score (the AB portion) is reported separately

### 4. Focus extra study time on BC-only topics

series, parametric/polar, integration techniques
      `
    },
    {
      id: 'bc-ex1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of bc vs ab content overview?',
            options: [
              'BC includes all AB content plus',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'BC includes all AB content plus: series, parametric/polar/vector calculus, advanced integration'
          },
          {
            question: 'In the context of bc vs ab content overview, which is accurate?',
            options: [
              'BC sub-score (the AB portion) is reported separately',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'BC sub-score (the AB portion) is reported separately'
          }
        ]
      }
    },
    {
      id: 'bc-ex1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **BC includes all AB content plus**: series, parametric/polar/vector calculus, advanced integration
- **About 60% of BC exam is AB content**
- **BC sub-score (the AB portion) is reported separately**
- **Focus extra study time on BC-only topics**: series, parametric/polar, integration techniques
      `
    },
    {
      id: 'bc-ex1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to bc vs ab content overview?',
            options: [
              'series, parametric/polar, integration techniques',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Focus extra study time on BC-only topics: series, parametric/polar, integration techniques'
          }
        ]
      }
    },
    {
      id: 'bc-ex1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'BC includes all AB content plus',
            options: ['series, parametric/polar/vector calculus, advanced', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'About 60% of BC exam is AB content',
            options: ['About 60% of BC exam is AB content', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'BC sub-score (the AB portion) is reported separately',
            options: ['BC sub-score (the AB portion) is reported separate', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['series, parametric/polar/vector calculus, advanced', 'About 60% of BC exam is AB content', 'BC sub-score (the AB portion) is reported separate'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding BC vs AB Content Overview.'
      }
    }
  ]
}
