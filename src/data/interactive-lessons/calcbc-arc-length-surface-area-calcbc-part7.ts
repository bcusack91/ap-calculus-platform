export const calcBCArcLengthPart7Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc-l7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'arc-l7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Speed at time t" refer to in calculus?',
            options: [
              'reparametrize by distance traveled',
              'Total distance = ∫ₐᵇ |v⃗(t)| dt',
              'Average speed = (total distance)/(total time)',
              '|v⃗(t)| = √[x\'(t)² + y\'(t)²]'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Speed at time t: |v⃗(t)| = √[x\'(t)² + y\'(t)²]. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Average speed = (total distance)/(total…?',
            options: [
              'reparametrize by distance traveled',
              'Average speed = (total distance)/(total time)',
              '|v⃗(t)| = √[x\'(t)² + y\'(t)²]',
              'Total distance = ∫ₐᵇ |v⃗(t)| dt'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Average speed = (total distance)/(total time). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'arc-l7-detail',
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
      id: 'arc-l7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Arc length parametrization?',
            options: [
              'Total distance = ∫ₐᵇ |v⃗(t)| dt',
              'reparametrize by distance traveled',
              'Average speed = (total distance)/(total time)',
              '|v⃗(t)| = √[x\'(t)² + y\'(t)²]'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Arc length parametrization: reparametrize by distance traveled. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'arc-l7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speed at time t',
            options: ['Total distance = ∫ₐᵇ |v⃗(t)| dt', 'Average speed = (total distance)/(total time)', '|v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'reparametrize by distance traveled']
          },
          {
            label: 'Arc length parametrization',
            options: ['|v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'Total distance = ∫ₐᵇ |v⃗(t)| dt', 'Average speed = (total distance)/(total time)', 'reparametrize by distance traveled']
          }
        ],
        correctAnswers: ['|v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'reparametrize by distance traveled'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Speed at time t: |v⃗(t)| = √[x\'(t)² + y\'(t)²]. Arc length parametrization: reparametrize by distance traveled.'
      }
    }
  ]
}
