export const calcABExamReviewPart6Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'ap-ex6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Area between curves, volumes of revolution (disk/washer)

Area between curves, volumes of revolution (disk/washer)

### 2. Accumulation functions and net change

Accumulation functions and net change

### 3. Average value of a function

Average value of a function

### 4. Particle motion

displacement vs total distance
      `
    },
    {
      id: 'ap-ex6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Area between curves, volumes of revolution (disk/washer)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Area between curves, volumes of revolution (disk/washer)'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Average value of a function',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Average value of a function'
          }
        ]
      }
    },
    {
      id: 'ap-ex6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Area between curves, volumes of revolution (disk/washer)**
- **Accumulation functions and net change**
- **Average value of a function**
- **Particle motion**: displacement vs total distance
      `
    },
    {
      id: 'ap-ex6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'displacement vs total distance',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Particle motion: displacement vs total distance'
          }
        ]
      }
    },
    {
      id: 'ap-ex6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area between curves, volumes of revolution (disk/washer)',
            options: ['Area between curves, volumes of revolution (disk/w', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Accumulation functions and net change',
            options: ['Accumulation functions and net change', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Average value of a function',
            options: ['Average value of a function', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Area between curves, volumes of revolution (disk/w', 'Accumulation functions and net change', 'Average value of a function'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
