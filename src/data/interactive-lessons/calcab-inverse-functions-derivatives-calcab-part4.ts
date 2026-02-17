export const calcABInverseDerivPart4Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inver4-intro',
      type: 'text' as const,
      content: `
# Integrals Leading to Inverse Trig

**Part 4 of 7 — Integrals Leading to Inverse Trig**

### 1. ∫1/√(a²-x²) dx = arcsin(x/a) + C

∫1/√(a²-x²) dx = arcsin(x/a) + C

### 2. ∫1/(a²+x²) dx = (1/a)arctan(x/a) + C

∫1/(a²+x²) dx = (1/a)arctan(x/a) + C

### 3. Recognize these forms in integrands

Recognize these forms in integrands

### 4. May need to complete the square or factor to reveal these forms

May need to complete the square or factor to reveal these forms
      `
    },
    {
      id: 'inver4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes ∫1/√(a²-x²) dx = arcsin(x/a) + C?',
            options: [
              'Recognize these forms in integrands',
              '∫1/√(a²-x²) dx = arcsin(x/a) + C',
              '∫1/(a²+x²) dx = (1/a)arctan(x/a) + C',
              'May need to complete the square or factor to reveal these forms'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ∫1/√(a²-x²) dx = arcsin(x/a) + C. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Recognize these forms in integrands:',
            options: [
              '∫1/√(a²-x²) dx = arcsin(x/a) + C',
              'May need to complete the square or factor to reveal these forms',
              '∫1/(a²+x²) dx = (1/a)arctan(x/a) + C',
              'Recognize these forms in integrands'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Recognize these forms in integrands. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'inver4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫1/√(a²-x²) dx = arcsin(x/a) + C**
- **∫1/(a²+x²) dx = (1/a)arctan(x/a) + C**
- **Recognize these forms in integrands**
- **May need to complete the square or factor to reveal these forms**
      `
    },
    {
      id: 'inver4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Integrals Leading to Inverse Trig, which correctly describes May need to complete the square or…?',
            options: [
              '∫1/√(a²-x²) dx = arcsin(x/a) + C',
              'May need to complete the square or factor to reveal these forms',
              '∫1/(a²+x²) dx = (1/a)arctan(x/a) + C',
              'Recognize these forms in integrands'
            ],
            correctAnswer: 1,
            explanation: 'Correct — May need to complete the square or factor to reveal these forms. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'inver4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫1/√(a²-x²) dx = arcsin(x/a) + C',
            options: ['∫1/(a²+x²) dx = (1/a)arctan(x/a) + C', 'May need to complete the square or factor to reveal these forms', 'Recognize these forms in integrands', '∫1/√(a²-x²) dx = arcsin(x/a) + C']
          },
          {
            label: '∫1/(a²+x²) dx = (1/a)arctan(x/a) + C',
            options: ['Recognize these forms in integrands', '∫1/√(a²-x²) dx = arcsin(x/a) + C', 'May need to complete the square or factor to reveal these forms', '∫1/(a²+x²) dx = (1/a)arctan(x/a) + C']
          },
          {
            label: 'Recognize these forms in integrands',
            options: ['∫1/(a²+x²) dx = (1/a)arctan(x/a) + C', 'May need to complete the square or factor to reveal these forms', 'Recognize these forms in integrands', '∫1/√(a²-x²) dx = arcsin(x/a) + C']
          }
        ],
        correctAnswers: ['∫1/√(a²-x²) dx = arcsin(x/a) + C', '∫1/(a²+x²) dx = (1/a)arctan(x/a) + C', 'Recognize these forms in integrands'],
        hint1: 'Think about what each concept specifically describes in Integrals Leading to Inverse Trig.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integrals Leading to Inverse Trig describes a specific idea. ∫1/√(a²-x²) dx = arcsin(x/a) + C. ∫1/(a²+x²) dx = (1/a)arctan(x/a) + C. Recognize these forms in integrands.'
      }
    }
  ]
}
