export const calcABExamReviewPart3Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'ap-ex3-intro',
      type: 'text' as const,
      content: `
# Applications of Derivatives Review

**Part 3 of 7 — Applications of Derivatives Review**

### 1. Critical points, extrema, increasing/decreasing intervals

Critical points, extrema, increasing/decreasing intervals

### 2. Mean Value Theorem and Rolle's Theorem

Mean Value Theorem and Rolle's Theorem

### 3. Optimization

set up and solve applied max/min problems

### 4. Concavity, inflection points, second derivative test

Concavity, inflection points, second derivative test
      `
    },
    {
      id: 'ap-ex3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of applications of derivatives review?',
            options: [
              'Critical points, extrema, increasing/decreasing intervals',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Critical points, extrema, increasing/decreasing intervals'
          },
          {
            question: 'In the context of applications of derivatives review, which is accurate?',
            options: [
              'set up and solve applied max/min problems',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Optimization: set up and solve applied max/min problems'
          }
        ]
      }
    },
    {
      id: 'ap-ex3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Critical points, extrema, increasing/decreasing intervals**
- **Mean Value Theorem and Rolle's Theorem**
- **Optimization**: set up and solve applied max/min problems
- **Concavity, inflection points, second derivative test**
      `
    },
    {
      id: 'ap-ex3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to applications of derivatives review?',
            options: [
              'Concavity, inflection points, second derivative test',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Concavity, inflection points, second derivative test'
          }
        ]
      }
    },
    {
      id: 'ap-ex3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Critical points, extrema, increasing/decreasing intervals',
            options: ['Critical points, extrema, increasing/decreasing in', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Mean Value Theorem and Rolle\'s Theorem',
            options: ['Mean Value Theorem and Rolle\'s Theorem', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Optimization',
            options: ['set up and solve applied max/min problems', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Critical points, extrema, increasing/decreasing in', 'Mean Value Theorem and Rolle\'s Theorem', 'set up and solve applied max/min problems'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Applications of Derivatives Review.'
      }
    }
  ]
}
