export const calcABTheoremsPart1Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'theor1-intro',
      type: 'text' as const,
      content: `
# ∫ Theorem Applications

**Part 1 of 7 — Extreme Value Theorem**

### 1. EVT

a continuous function on [a,b] attains both a global max and a global min

### 2. Global max and min occur at critical points or endpoints

Global max and min occur at critical points or endpoints

### 3. Check f' = 0, f' undefined, and endpoints

Check f' = 0, f' undefined, and endpoints

### 4. EVT guarantees existence; finding extrema requires calculation

EVT guarantees existence; finding extrema requires calculation
      `
    },
    {
      id: 'theor1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes EVT?',
            options: [
              'Global max and min occur at critical points or endpoints',
              'EVT guarantees existence; finding extrema requires calculation',
              'Check f\' = 0, f\' undefined, and endpoints',
              'a continuous function on [a,b] attains both a global max and a global min'
            ],
            correctAnswer: 3,
            explanation: 'Correct — EVT: a continuous function on [a,b] attains both a global max and a global min. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Check f\' = 0, f\' undefined, and…:',
            options: [
              'a continuous function on [a,b] attains both a global max and a global min',
              'Check f\' = 0, f\' undefined, and endpoints',
              'Global max and min occur at critical points or endpoints',
              'EVT guarantees existence; finding extrema requires calculation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Check f\' = 0, f\' undefined, and endpoints. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'theor1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **EVT**: a continuous function on [a,b] attains both a global max and a global min
- **Global max and min occur at critical points or endpoints**
- **Check f' = 0, f' undefined, and endpoints**
- **EVT guarantees existence; finding extrema requires calculation**
      `
    },
    {
      id: 'theor1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents EVT guarantees existence; finding…?',
            options: [
              'Check f\' = 0, f\' undefined, and endpoints',
              'EVT guarantees existence; finding extrema requires calculation',
              'Global max and min occur at critical points or endpoints',
              'a continuous function on [a,b] attains both a global max and a global min'
            ],
            correctAnswer: 1,
            explanation: 'Correct — EVT guarantees existence; finding extrema requires calculation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'theor1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'EVT',
            options: ['a continuous function on [a,b] attains both a global max and a global min', 'Check f\' = 0, f\' undefined, and endpoints', 'Global max and min occur at critical points or endpoints', 'EVT guarantees existence; finding extrema requires calculation']
          },
          {
            label: 'Global max and min occur at critical…',
            options: ['Check f\' = 0, f\' undefined, and endpoints', 'a continuous function on [a,b] attains both a global max and a global min', 'EVT guarantees existence; finding extrema requires calculation', 'Global max and min occur at critical points or endpoints']
          },
          {
            label: 'Check f\' = 0, f\' undefined, and…',
            options: ['Global max and min occur at critical points or endpoints', 'a continuous function on [a,b] attains both a global max and a global min', 'EVT guarantees existence; finding extrema requires calculation', 'Check f\' = 0, f\' undefined, and endpoints']
          }
        ],
        correctAnswers: ['a continuous function on [a,b] attains both a global max and a global min', 'Global max and min occur at critical points or endpoints', 'Check f\' = 0, f\' undefined, and endpoints'],
        hint1: 'Think about what each concept specifically describes in Theorem Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Theorem Applications describes a specific idea. EVT: a continuous function on [a,b] attains both a global max and a global min. Global max and min occur at critical points or endpoints. Check f\' = 0, f\' undefined, and endpoints.'
      }
    }
  ]
}
