export const calcBCSeriesAppsPart3Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'serie3-intro',
      type: 'text' as const,
      content: `
# Solving DEs with Series

**Part 3 of 7 — Solving DEs with Series**

### 1. For y' = f(x,y), assume y = Σaₙxⁿ and match coefficients

For y' = f(x,y), assume y = Σaₙxⁿ and match coefficients

### 2. Substitute the series into the DE and equate coefficients of like powers

Substitute the series into the DE and equate coefficients of like powers

### 3. This gives a recurrence relation for the coefficients aₙ

This gives a recurrence relation for the coefficients aₙ

### 4. Yields a power series solution even when closed-form solution is unknown

Yields a power series solution even when closed-form solution is unknown
      `
    },
    {
      id: 'serie3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes For y\' = f(x,y), assume y = Σaₙxⁿ and…?',
            options: [
              'Yields a power series solution even when closed-form solution is unknown',
              'This gives a recurrence relation for the coefficients aₙ',
              'Substitute the series into the DE and equate coefficients of like powers',
              'For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients'
            ],
            correctAnswer: 3,
            explanation: 'Correct — For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes This gives a recurrence relation for…:',
            options: [
              'This gives a recurrence relation for the coefficients aₙ',
              'Yields a power series solution even when closed-form solution is unknown',
              'Substitute the series into the DE and equate coefficients of like powers',
              'For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients'
            ],
            correctAnswer: 0,
            explanation: 'Correct — This gives a recurrence relation for the coefficients aₙ. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'serie3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **For y' = f(x,y), assume y = Σaₙxⁿ and match coefficients**
- **Substitute the series into the DE and equate coefficients of like powers**
- **This gives a recurrence relation for the coefficients aₙ**
- **Yields a power series solution even when closed-form solution is unknown**
      `
    },
    {
      id: 'serie3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Solving DEs with Series, which correctly describes Yields a power series solution even…?',
            options: [
              'Yields a power series solution even when closed-form solution is unknown',
              'For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients',
              'This gives a recurrence relation for the coefficients aₙ',
              'Substitute the series into the DE and equate coefficients of like powers'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Yields a power series solution even when closed-form solution is unknown. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'serie3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For y\' = f(x,y), assume y = Σaₙxⁿ and…',
            options: ['Yields a power series solution even when closed-form solution is unknown', 'For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients', 'Substitute the series into the DE and equate coefficients of like powers', 'This gives a recurrence relation for the coefficients aₙ']
          },
          {
            label: 'Substitute the series into the DE and…',
            options: ['For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients', 'This gives a recurrence relation for the coefficients aₙ', 'Substitute the series into the DE and equate coefficients of like powers', 'Yields a power series solution even when closed-form solution is unknown']
          },
          {
            label: 'This gives a recurrence relation for…',
            options: ['Yields a power series solution even when closed-form solution is unknown', 'For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients', 'Substitute the series into the DE and equate coefficients of like powers', 'This gives a recurrence relation for the coefficients aₙ']
          }
        ],
        correctAnswers: ['For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients', 'Substitute the series into the DE and equate coefficients of like powers', 'This gives a recurrence relation for the coefficients aₙ'],
        hint1: 'Think about what each concept specifically describes in Solving DEs with Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Solving DEs with Series describes a specific idea. For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients. Substitute the series into the DE and equate coefficients of like powers. This gives a recurrence relation for the coefficients aₙ.'
      }
    }
  ]
}
