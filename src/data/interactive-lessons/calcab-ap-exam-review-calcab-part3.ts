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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Critical points, extrema,…?',
            options: [
              'Mean Value Theorem and Rolle\'s Theorem',
              'set up and solve applied max/min problems',
              'Critical points, extrema, increasing/decreasing intervals',
              'Concavity, inflection points, second derivative test'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Critical points, extrema, increasing/decreasing intervals. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Applications of Derivatives Review, which explains Optimization?',
            options: [
              'Concavity, inflection points, second derivative test',
              'Mean Value Theorem and Rolle\'s Theorem',
              'set up and solve applied max/min problems',
              'Critical points, extrema, increasing/decreasing intervals'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Optimization: set up and solve applied max/min problems. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Applications of Derivatives Review, which correctly describes Concavity, inflection points, second…?',
            options: [
              'Concavity, inflection points, second derivative test',
              'set up and solve applied max/min problems',
              'Mean Value Theorem and Rolle\'s Theorem',
              'Critical points, extrema, increasing/decreasing intervals'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Concavity, inflection points, second derivative test. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ap-ex3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Critical points, extrema,…',
            options: ['Mean Value Theorem and Rolle\'s Theorem', 'Critical points, extrema, increasing/decreasing intervals', 'set up and solve applied max/min problems', 'Concavity, inflection points, second derivative test']
          },
          {
            label: 'Mean Value Theorem and Rolle\'s Theorem',
            options: ['Concavity, inflection points, second derivative test', 'Critical points, extrema, increasing/decreasing intervals', 'Mean Value Theorem and Rolle\'s Theorem', 'set up and solve applied max/min problems']
          },
          {
            label: 'Optimization',
            options: ['set up and solve applied max/min problems', 'Mean Value Theorem and Rolle\'s Theorem', 'Concavity, inflection points, second derivative test', 'Critical points, extrema, increasing/decreasing intervals']
          }
        ],
        correctAnswers: ['Critical points, extrema, increasing/decreasing intervals', 'Mean Value Theorem and Rolle\'s Theorem', 'set up and solve applied max/min problems'],
        hint1: 'Think about what each concept specifically describes in Applications of Derivatives Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applications of Derivatives Review describes a specific idea. Critical points, extrema, increasing/decreasing intervals. Mean Value Theorem and Rolle\'s Theorem. Optimization: set up and solve applied max/min problems.'
      }
    }
  ]
}
