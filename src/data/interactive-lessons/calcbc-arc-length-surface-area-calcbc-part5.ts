export const calcBCArcLengthPart5Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc-l5-intro',
      type: 'text' as const,
      content: `
# Speed & Distance Applications

**Part 5 of 7 — Speed & Distance Applications**

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
      id: 'arc-l5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of speed & distance applications?',
            options: [
              'Speed at time t',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Speed at time t: |v⃗(t)| = √[x\'(t)² + y\'(t)²]'
          },
          {
            question: 'In the context of speed & distance applications, which is accurate?',
            options: [
              'Average speed = (total distance)/(total time)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Average speed = (total distance)/(total time)'
          }
        ]
      }
    },
    {
      id: 'arc-l5-detail',
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
      id: 'arc-l5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to speed & distance applications?',
            options: [
              'reparametrize by distance traveled',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Arc length parametrization: reparametrize by distance traveled'
          }
        ]
      }
    },
    {
      id: 'arc-l5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speed at time t',
            options: ['|v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Total distance = ∫ₐᵇ |v⃗(t)| dt',
            options: ['Total distance = ∫ₐᵇ |v⃗(t)| dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Average speed = (total distance)/(total time)',
            options: ['Average speed = (total distance)/(total time)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['|v⃗(t)| = √[x\'(t)² + y\'(t)²]', 'Total distance = ∫ₐᵇ |v⃗(t)| dt', 'Average speed = (total distance)/(total time)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Speed & Distance Applications.'
      }
    }
  ]
}
