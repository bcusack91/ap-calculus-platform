export const calcBCArcLengthPart6Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc-l6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Speed at time t

|v⃗(t)| = √[x'(t)² + y'(t)²]

### 2. Total distance = ∫ₐᵇ |v⃗(t)| dt

Total distance = ∫ₐᵇ |v⃗(t)| dt

### 3. Average speed = (total distance)/(total time)

Average speed = (total distance)/(total time)

### 4. Arc length parametrization

reparametrize by distance traveled
      `
    },
    {
      id: 'arc-l6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Speed at time t" refer to in calculus?',
            options: [
              'Average speed = (total distance)/(total time)',
              'Total distance = ∫ₐᵇ |v⃗(t)| dt',
              '|v⃗(t)| = √[x\'(t)² + y\'(t)²]',
              'reparametrize by distance traveled'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Speed at time t: |v⃗(t)| = √[x\'(t)² + y\'(t)²]. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Average speed = (total distance)/(total…?',
            options: [
              '|v⃗(t)| = √[x\'(t)² + y\'(t)²]',
              'Average speed = (total distance)/(total time)',
              'Total distance = ∫ₐᵇ |v⃗(t)| dt',
              'reparametrize by distance traveled'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Average speed = (total distance)/(total time). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'arc-l6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Speed at time t**: |v⃗(t)| = √[x'(t)² + y'(t)²]
- **Total distance = ∫ₐᵇ |v⃗(t)| dt**
- **Average speed = (total distance)/(total time)**
- **Arc length parametrization**: reparametrize by distance traveled
      `
    },
    {
      id: 'arc-l6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Arc length parametrization is correct?',
            options: [
              'reparametrize by distance traveled',
              'Average speed = (total distance)/(total time)',
              '|v⃗(t)| = √[x\'(t)² + y\'(t)²]',
              'Total distance = ∫ₐᵇ |v⃗(t)| dt'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Arc length parametrization: reparametrize by distance traveled. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'arc-l6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speed at time t',
            options: ['|v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'reparametrize by distance traveled', 'Total distance = ∫ₐᵇ |v⃗(t)| dt', 'Average speed = (total distance)/(total time)']
          },
          {
            label: 'Arc length parametrization',
            options: ['reparametrize by distance traveled', 'Average speed = (total distance)/(total time)', 'Total distance = ∫ₐᵇ |v⃗(t)| dt', '|v⃗(t)| = √[x\'(t)² + y\'(t)²]']
          }
        ],
        correctAnswers: ['|v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'reparametrize by distance traveled'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Speed at time t: |v⃗(t)| = √[x\'(t)² + y\'(t)²]. Arc length parametrization: reparametrize by distance traveled.'
      }
    }
  ]
}
