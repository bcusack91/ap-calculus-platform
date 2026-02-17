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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Area between curves, volumes of…?',
            options: [
              'Accumulation functions and net change',
              'Average value of a function',
              'displacement vs total distance',
              'Area between curves, volumes of revolution (disk/washer)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Area between curves, volumes of revolution (disk/washer). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Average value of a function?',
            options: [
              'displacement vs total distance',
              'Accumulation functions and net change',
              'Average value of a function',
              'Area between curves, volumes of revolution (disk/washer)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Average value of a function. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Particle motion?',
            options: [
              'Average value of a function',
              'displacement vs total distance',
              'Accumulation functions and net change',
              'Area between curves, volumes of revolution (disk/washer)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Particle motion: displacement vs total distance. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ap-ex6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area between curves, volumes of…',
            options: ['Area between curves, volumes of revolution (disk/washer)', 'Accumulation functions and net change', 'Average value of a function', 'displacement vs total distance']
          },
          {
            label: 'Accumulation functions and net change',
            options: ['Average value of a function', 'displacement vs total distance', 'Accumulation functions and net change', 'Area between curves, volumes of revolution (disk/washer)']
          },
          {
            label: 'Average value of a function',
            options: ['Average value of a function', 'displacement vs total distance', 'Area between curves, volumes of revolution (disk/washer)', 'Accumulation functions and net change']
          }
        ],
        correctAnswers: ['Area between curves, volumes of revolution (disk/washer)', 'Accumulation functions and net change', 'Average value of a function'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Area between curves, volumes of revolution (disk/washer). Accumulation functions and net change. Average value of a function.'
      }
    }
  ]
}
