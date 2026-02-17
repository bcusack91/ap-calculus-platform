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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains BC includes all AB content plus?',
            options: [
              'BC sub-score (the AB portion) is reported separately',
              'series, parametric/polar, integration techniques',
              'series, parametric/polar/vector calculus, advanced integration',
              'About 60% of BC exam is AB content'
            ],
            correctAnswer: 2,
            explanation: 'Correct — BC includes all AB content plus: series, parametric/polar/vector calculus, advanced integration. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about BC sub-score (the AB portion) is…?',
            options: [
              'series, parametric/polar/vector calculus, advanced integration',
              'BC sub-score (the AB portion) is reported separately',
              'About 60% of BC exam is AB content',
              'series, parametric/polar, integration techniques'
            ],
            correctAnswer: 1,
            explanation: 'Correct — BC sub-score (the AB portion) is reported separately. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Focus extra study time on BC-only topics?',
            options: [
              'About 60% of BC exam is AB content',
              'series, parametric/polar, integration techniques',
              'series, parametric/polar/vector calculus, advanced integration',
              'BC sub-score (the AB portion) is reported separately'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Focus extra study time on BC-only topics: series, parametric/polar, integration techniques. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'bc-ex1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'BC includes all AB content plus',
            options: ['series, parametric/polar, integration techniques', 'series, parametric/polar/vector calculus, advanced integration', 'BC sub-score (the AB portion) is reported separately', 'About 60% of BC exam is AB content']
          },
          {
            label: 'Focus extra study time on BC-only topics',
            options: ['series, parametric/polar, integration techniques', 'About 60% of BC exam is AB content', 'series, parametric/polar/vector calculus, advanced integration', 'BC sub-score (the AB portion) is reported separately']
          }
        ],
        correctAnswers: ['series, parametric/polar/vector calculus, advanced integration', 'series, parametric/polar, integration techniques'],
        hint1: 'Think about what each concept specifically describes in ∮ Bc Exam Strategies.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Bc Exam Strategies describes a specific idea. BC includes all AB content plus: series, parametric/polar/vector calculus, advanced integration. Focus extra study time on BC-only topics: series, parametric/polar, integration techniques.'
      }
    }
  ]
}
