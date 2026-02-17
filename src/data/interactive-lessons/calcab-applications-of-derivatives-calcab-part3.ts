export const calcABDerivAppsPart3Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'appli3-intro',
      type: 'text' as const,
      content: `
# Mean Value Theorem

**Part 3 of 7 — Mean Value Theorem**

### 1. MVT

if f is continuous on [a,b] and differentiable on (a,b), then f'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)

### 2. There exists at least one point where the instantaneous rate equals the average rate

There exists at least one point where the instantaneous rate equals the average rate

### 3. Rolle's Theorem is MVT with f(a) = f(b), giving f'(c) = 0

Rolle's Theorem is MVT with f(a) = f(b), giving f'(c) = 0

### 4. MVT requires both continuity on [a,b] and differentiability on (a,b)

MVT requires both continuity on [a,b] and differentiability on (a,b)
      `
    },
    {
      id: 'appli3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes MVT?',
            options: [
              'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0',
              'There exists at least one point where the instantaneous rate equals the average rate',
              'MVT requires both continuity on [a,b] and differentiability on (a,b)',
              'if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — MVT: if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Mean Value Theorem, which explains Rolle\'s Theorem is MVT with f(a) =…?',
            options: [
              'There exists at least one point where the instantaneous rate equals the average rate',
              'if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)',
              'MVT requires both continuity on [a,b] and differentiability on (a,b)',
              'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'appli3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **MVT**: if f is continuous on [a,b] and differentiable on (a,b), then f'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)
- **There exists at least one point where the instantaneous rate equals the average rate**
- **Rolle's Theorem is MVT with f(a) = f(b), giving f'(c) = 0**
- **MVT requires both continuity on [a,b] and differentiability on (a,b)**
      `
    },
    {
      id: 'appli3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents MVT requires both continuity on [a,b]…?',
            options: [
              'if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)',
              'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0',
              'There exists at least one point where the instantaneous rate equals the average rate',
              'MVT requires both continuity on [a,b] and differentiability on (a,b)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — MVT requires both continuity on [a,b] and differentiability on (a,b). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'appli3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'MVT',
            options: ['if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)', 'MVT requires both continuity on [a,b] and differentiability on (a,b)', 'There exists at least one point where the instantaneous rate equals the average rate', 'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0']
          },
          {
            label: 'There exists at least one point where…',
            options: ['Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0', 'if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)', 'There exists at least one point where the instantaneous rate equals the average rate', 'MVT requires both continuity on [a,b] and differentiability on (a,b)']
          },
          {
            label: 'Rolle\'s Theorem is MVT with f(a) =…',
            options: ['if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)', 'MVT requires both continuity on [a,b] and differentiability on (a,b)', 'There exists at least one point where the instantaneous rate equals the average rate', 'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0']
          }
        ],
        correctAnswers: ['if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)', 'There exists at least one point where the instantaneous rate equals the average rate', 'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0'],
        hint1: 'Think about what each concept specifically describes in Mean Value Theorem.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Mean Value Theorem describes a specific idea. MVT: if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b). There exists at least one point where the instantaneous rate equals the average rate. Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0.'
      }
    }
  ]
}
