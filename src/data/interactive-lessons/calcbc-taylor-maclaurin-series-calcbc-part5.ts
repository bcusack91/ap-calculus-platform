export const calcBCTaylorMaclaurinPart5Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'taylo5-intro',
      type: 'text' as const,
      content: `
# Constructing New Series

**Part 5 of 7 — Constructing New Series**

### 1. Substitution

replace x in a known series (e.g., e^(-x²) from eˣ)

### 2. Differentiation

differentiate a known series term by term

### 3. Integration

integrate a known series term by term

### 4. Multiplication

multiply series together for products of functions
      `
    },
    {
      id: 'taylo5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Substitution?',
            options: [
              'integrate a known series term by term',
              'multiply series together for products of functions',
              'differentiate a known series term by term',
              'replace x in a known series (e.g., e^(-x²) from eˣ)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Substitution: replace x in a known series (e.g., e^(-x²) from eˣ). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Integration?',
            options: [
              'integrate a known series term by term',
              'differentiate a known series term by term',
              'multiply series together for products of functions',
              'replace x in a known series (e.g., e^(-x²) from eˣ)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Integration: integrate a known series term by term. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'taylo5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Substitution**: replace x in a known series (e.g., e^(-x²) from eˣ)
- **Differentiation**: differentiate a known series term by term
- **Integration**: integrate a known series term by term
- **Multiplication**: multiply series together for products of functions
      `
    },
    {
      id: 'taylo5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Constructing New Series, which correctly describes Multiplication?',
            options: [
              'differentiate a known series term by term',
              'multiply series together for products of functions',
              'replace x in a known series (e.g., e^(-x²) from eˣ)',
              'integrate a known series term by term'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Multiplication: multiply series together for products of functions. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'taylo5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Substitution',
            options: ['replace x in a known series (e.g., e^(-x²) from eˣ)', 'multiply series together for products of functions', 'differentiate a known series term by term', 'integrate a known series term by term']
          },
          {
            label: 'Differentiation',
            options: ['multiply series together for products of functions', 'integrate a known series term by term', 'replace x in a known series (e.g., e^(-x²) from eˣ)', 'differentiate a known series term by term']
          },
          {
            label: 'Integration',
            options: ['replace x in a known series (e.g., e^(-x²) from eˣ)', 'multiply series together for products of functions', 'differentiate a known series term by term', 'integrate a known series term by term']
          }
        ],
        correctAnswers: ['replace x in a known series (e.g., e^(-x²) from eˣ)', 'differentiate a known series term by term', 'integrate a known series term by term'],
        hint1: 'Think about what each concept specifically describes in Constructing New Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Constructing New Series describes a specific idea. Substitution: replace x in a known series (e.g., e^(-x²) from eˣ). Differentiation: differentiate a known series term by term. Integration: integrate a known series term by term.'
      }
    }
  ]
}
