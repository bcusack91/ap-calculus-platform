export const calcBCReviewConnectionsPart2Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'revie2-intro',
      type: 'text' as const,
      content: `
# Series & Function Representation

**Part 2 of 7 — Series & Function Representation**

### 1. Taylor series represent functions as infinite polynomials

Taylor series represent functions as infinite polynomials

### 2. The series "remembers" the function via its derivatives at the center

The series "remembers" the function via its derivatives at the center

### 3. Convergence tests determine where the representation is valid

Convergence tests determine where the representation is valid

### 4. Error bounds quantify the quality of polynomial approximations

Error bounds quantify the quality of polynomial approximations
      `
    },
    {
      id: 'revie2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Taylor series represent functions as…?',
            options: [
              'The series "remembers" the function via its derivatives at the center',
              'Convergence tests determine where the representation is valid',
              'Error bounds quantify the quality of polynomial approximations',
              'Taylor series represent functions as infinite polynomials'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Taylor series represent functions as infinite polynomials. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Convergence tests determine where the…:',
            options: [
              'The series "remembers" the function via its derivatives at the center',
              'Error bounds quantify the quality of polynomial approximations',
              'Taylor series represent functions as infinite polynomials',
              'Convergence tests determine where the representation is valid'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Convergence tests determine where the representation is valid. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'revie2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Taylor series represent functions as infinite polynomials**
- **The series "remembers" the function via its derivatives at the center**
- **Convergence tests determine where the representation is valid**
- **Error bounds quantify the quality of polynomial approximations**
      `
    },
    {
      id: 'revie2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Error bounds quantify the quality of…?',
            options: [
              'Error bounds quantify the quality of polynomial approximations',
              'Taylor series represent functions as infinite polynomials',
              'The series "remembers" the function via its derivatives at the center',
              'Convergence tests determine where the representation is valid'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Error bounds quantify the quality of polynomial approximations. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'revie2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Taylor series represent functions as…',
            options: ['Convergence tests determine where the representation is valid', 'The series "remembers" the function via its derivatives at the center', 'Error bounds quantify the quality of polynomial approximations', 'Taylor series represent functions as infinite polynomials']
          },
          {
            label: 'The series "remembers" the function via…',
            options: ['Convergence tests determine where the representation is valid', 'Taylor series represent functions as infinite polynomials', 'Error bounds quantify the quality of polynomial approximations', 'The series "remembers" the function via its derivatives at the center']
          },
          {
            label: 'Convergence tests determine where the…',
            options: ['Convergence tests determine where the representation is valid', 'Error bounds quantify the quality of polynomial approximations', 'Taylor series represent functions as infinite polynomials', 'The series "remembers" the function via its derivatives at the center']
          }
        ],
        correctAnswers: ['Taylor series represent functions as infinite polynomials', 'The series "remembers" the function via its derivatives at the center', 'Convergence tests determine where the representation is valid'],
        hint1: 'Think about what each concept specifically describes in Series & Function Representation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Series & Function Representation describes a specific idea. Taylor series represent functions as infinite polynomials. The series "remembers" the function via its derivatives at the center. Convergence tests determine where the representation is valid.'
      }
    }
  ]
}
