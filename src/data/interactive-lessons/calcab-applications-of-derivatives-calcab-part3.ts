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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of mean value theorem?',
            options: [
              'MVT',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'MVT: if f is continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)'
          },
          {
            question: 'In the context of mean value theorem, which is accurate?',
            options: [
              'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to mean value theorem?',
            options: [
              'MVT requires both continuity on [a,b] and differentiability on (a,b)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'MVT requires both continuity on [a,b] and differentiability on (a,b)'
          }
        ]
      }
    },
    {
      id: 'appli3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'MVT',
            options: ['if f is continuous on [a,b] and differentiable on ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'There exists at least one point where the instantaneous rate equals the average rate',
            options: ['There exists at least one point where the instanta', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'(c) = 0',
            options: ['Rolle\'s Theorem is MVT with f(a) = f(b), giving f\'', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['if f is continuous on [a,b] and differentiable on ', 'There exists at least one point where the instanta', 'Rolle\'s Theorem is MVT with f(a) = f(b), giving f\''],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Mean Value Theorem.'
      }
    }
  ]
}
