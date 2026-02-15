export const precalcRationalPart7Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'ratio7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Multiply both sides by the LCD to eliminate fractions

Multiply both sides by the LCD to eliminate fractions

### 2. Check all solutions against the original domain

Check all solutions against the original domain

### 3. Extraneous solutions

solutions that make a denominator zero

### 4. Solve resulting polynomial equation after clearing fractions

Solve resulting polynomial equation after clearing fractions
      `
    },
    {
      id: 'ratio7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Multiply both sides by the LCD to eliminate fractions',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Multiply both sides by the LCD to eliminate fractions'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'solutions that make a denominator zero',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Extraneous solutions: solutions that make a denominator zero'
          }
        ]
      }
    },
    {
      id: 'ratio7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Multiply both sides by the LCD to eliminate fractions**
- **Check all solutions against the original domain**
- **Extraneous solutions**: solutions that make a denominator zero
- **Solve resulting polynomial equation after clearing fractions**
      `
    },
    {
      id: 'ratio7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'Solve resulting polynomial equation after clearing fractions',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Solve resulting polynomial equation after clearing fractions'
          }
        ]
      }
    },
    {
      id: 'ratio7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiply both sides by the LCD to eliminate fractions',
            options: ['Multiply both sides by the LCD to eliminate fracti', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Check all solutions against the original domain',
            options: ['Check all solutions against the original domain', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Extraneous solutions',
            options: ['solutions that make a denominator zero', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Multiply both sides by the LCD to eliminate fracti', 'Check all solutions against the original domain', 'solutions that make a denominator zero'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
