export const calcABExamReviewPart7Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'ap-ex7-intro',
      type: 'text' as const,
      content: `
# Comprehensive Review

**Part 7 of 7 — Comprehensive Review**

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
      id: 'ap-ex7-quiz1',
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
              'Average value of a function',
              'displacement vs total distance'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Area between curves, volumes of revolution (disk/washer). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Comprehensive Review, which explains Average value of a function?',
            options: [
              'Accumulation functions and net change',
              'displacement vs total distance',
              'Area between curves, volumes of revolution (disk/washer)',
              'Average value of a function'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Average value of a function. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ap-ex7-detail',
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
      id: 'ap-ex7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Particle motion is correct?',
            options: [
              'displacement vs total distance',
              'Average value of a function',
              'Area between curves, volumes of revolution (disk/washer)',
              'Accumulation functions and net change'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Particle motion: displacement vs total distance. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ap-ex7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area between curves, volumes of…',
            options: ['Area between curves, volumes of revolution (disk/washer)', 'displacement vs total distance', 'Average value of a function', 'Accumulation functions and net change']
          },
          {
            label: 'Accumulation functions and net change',
            options: ['Area between curves, volumes of revolution (disk/washer)', 'Accumulation functions and net change', 'Average value of a function', 'displacement vs total distance']
          },
          {
            label: 'Average value of a function',
            options: ['Accumulation functions and net change', 'Area between curves, volumes of revolution (disk/washer)', 'displacement vs total distance', 'Average value of a function']
          }
        ],
        correctAnswers: ['Area between curves, volumes of revolution (disk/washer)', 'Accumulation functions and net change', 'Average value of a function'],
        hint1: 'Think about what each concept specifically describes in Comprehensive Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Comprehensive Review describes a specific idea. Area between curves, volumes of revolution (disk/washer). Accumulation functions and net change. Average value of a function.'
      }
    }
  ]
}
