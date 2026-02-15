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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of solving des with series?',
            options: [
              'For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients'
          },
          {
            question: 'In the context of solving des with series, which is accurate?',
            options: [
              'This gives a recurrence relation for the coefficients aₙ',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'This gives a recurrence relation for the coefficients aₙ'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to solving des with series?',
            options: [
              'Yields a power series solution even when closed-form solution is unknown',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Yields a power series solution even when closed-form solution is unknown'
          }
        ]
      }
    },
    {
      id: 'serie3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For y\' = f(x,y), assume y = Σaₙxⁿ and match coefficients',
            options: ['For y\' = f(x,y), assume y = Σaₙxⁿ and match coeffi', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Substitute the series into the DE and equate coefficients of like powers',
            options: ['Substitute the series into the DE and equate coeff', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'This gives a recurrence relation for the coefficients aₙ',
            options: ['This gives a recurrence relation for the coefficie', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['For y\' = f(x,y), assume y = Σaₙxⁿ and match coeffi', 'Substitute the series into the DE and equate coeff', 'This gives a recurrence relation for the coefficie'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Solving DEs with Series.'
      }
    }
  ]
}
