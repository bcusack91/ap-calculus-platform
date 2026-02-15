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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of series & function representation?',
            options: [
              'Taylor series represent functions as infinite polynomials',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Taylor series represent functions as infinite polynomials'
          },
          {
            question: 'In the context of series & function representation, which is accurate?',
            options: [
              'Convergence tests determine where the representation is valid',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Convergence tests determine where the representation is valid'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to series & function representation?',
            options: [
              'Error bounds quantify the quality of polynomial approximations',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Error bounds quantify the quality of polynomial approximations'
          }
        ]
      }
    },
    {
      id: 'revie2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Taylor series represent functions as infinite polynomials',
            options: ['Taylor series represent functions as infinite poly', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The series "remembers" the function via its derivatives at the center',
            options: ['The series "remembers" the function via its deriva', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Convergence tests determine where the representation is valid',
            options: ['Convergence tests determine where the representati', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Taylor series represent functions as infinite poly', 'The series "remembers" the function via its deriva', 'Convergence tests determine where the representati'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Series & Function Representation.'
      }
    }
  ]
}
