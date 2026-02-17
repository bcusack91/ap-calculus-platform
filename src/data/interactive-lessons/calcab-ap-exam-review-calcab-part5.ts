export const calcABExamReviewPart5Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'ap-ex5-intro',
      type: 'text' as const,
      content: `
# Applications of Integrals Review

**Part 5 of 7 — Applications of Integrals Review**

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
      id: 'ap-ex5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Area between curves, volumes of…?',
            options: [
              'Area between curves, volumes of revolution (disk/washer)',
              'Accumulation functions and net change',
              'displacement vs total distance',
              'Average value of a function'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Area between curves, volumes of revolution (disk/washer). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Applications of Integrals Review, which explains Average value of a function?',
            options: [
              'Accumulation functions and net change',
              'Average value of a function',
              'Area between curves, volumes of revolution (disk/washer)',
              'displacement vs total distance'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Average value of a function. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ap-ex5-detail',
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
      id: 'ap-ex5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Particle motion?',
            options: [
              'Average value of a function',
              'Accumulation functions and net change',
              'Area between curves, volumes of revolution (disk/washer)',
              'displacement vs total distance'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Particle motion: displacement vs total distance. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ap-ex5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area between curves, volumes of…',
            options: ['Accumulation functions and net change', 'displacement vs total distance', 'Area between curves, volumes of revolution (disk/washer)', 'Average value of a function']
          },
          {
            label: 'Accumulation functions and net change',
            options: ['Accumulation functions and net change', 'Area between curves, volumes of revolution (disk/washer)', 'Average value of a function', 'displacement vs total distance']
          },
          {
            label: 'Average value of a function',
            options: ['displacement vs total distance', 'Average value of a function', 'Accumulation functions and net change', 'Area between curves, volumes of revolution (disk/washer)']
          }
        ],
        correctAnswers: ['Area between curves, volumes of revolution (disk/washer)', 'Accumulation functions and net change', 'Average value of a function'],
        hint1: 'Think about what each concept specifically describes in Applications of Integrals Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applications of Integrals Review describes a specific idea. Area between curves, volumes of revolution (disk/washer). Accumulation functions and net change. Average value of a function.'
      }
    }
  ]
}
