export const calcABTheoremsPart2Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'theor2-intro',
      type: 'text' as const,
      content: `
# Mean Value Theorem Applications

**Part 2 of 7 — Mean Value Theorem Applications**

### 1. MVT

f'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)

### 2. Interpretation

at some point the instantaneous rate equals the average rate

### 3. If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph

If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph

### 4. Rolle's

if f(a) = f(b), then f'(c) = 0 for some c in (a,b)
      `
    },
    {
      id: 'theor2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes MVT?',
            options: [
              'at some point the instantaneous rate equals the average rate',
              'If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph',
              'f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)',
              'if f(a) = f(b), then f\'(c) = 0 for some c in (a,b)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — MVT: f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes If a car travels 60 miles in 1 hour, at…:',
            options: [
              'at some point the instantaneous rate equals the average rate',
              'If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph',
              'f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)',
              'if f(a) = f(b), then f\'(c) = 0 for some c in (a,b)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'theor2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **MVT**: f'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)
- **Interpretation**: at some point the instantaneous rate equals the average rate
- **If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph**
- **Rolle's**: if f(a) = f(b), then f'(c) = 0 for some c in (a,b)
      `
    },
    {
      id: 'theor2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Rolle\'s is correct?',
            options: [
              'at some point the instantaneous rate equals the average rate',
              'If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph',
              'f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)',
              'if f(a) = f(b), then f\'(c) = 0 for some c in (a,b)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Rolle\'s: if f(a) = f(b), then f\'(c) = 0 for some c in (a,b). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'theor2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'MVT',
            options: ['if f(a) = f(b), then f\'(c) = 0 for some c in (a,b)', 'If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph', 'at some point the instantaneous rate equals the average rate', 'f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)']
          },
          {
            label: 'Interpretation',
            options: ['at some point the instantaneous rate equals the average rate', 'If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph', 'if f(a) = f(b), then f\'(c) = 0 for some c in (a,b)', 'f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)']
          },
          {
            label: 'Rolle\'s',
            options: ['f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)', 'at some point the instantaneous rate equals the average rate', 'if f(a) = f(b), then f\'(c) = 0 for some c in (a,b)', 'If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph']
          }
        ],
        correctAnswers: ['f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)', 'at some point the instantaneous rate equals the average rate', 'if f(a) = f(b), then f\'(c) = 0 for some c in (a,b)'],
        hint1: 'Think about what each concept specifically describes in Mean Value Theorem Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Mean Value Theorem Applications describes a specific idea. MVT: f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b). Interpretation: at some point the instantaneous rate equals the average rate. Rolle\'s: if f(a) = f(b), then f\'(c) = 0 for some c in (a,b).'
      }
    }
  ]
}
