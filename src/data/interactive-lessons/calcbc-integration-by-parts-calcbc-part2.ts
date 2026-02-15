export const calcBCIntByPartsPart2Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'integ2-intro',
      type: 'text' as const,
      content: `
# Choosing u and dv (LIATE)

**Part 2 of 7 — Choosing u and dv (LIATE)**

### 1. LIATE priority for choosing u

Logarithmic, Inverse trig, Algebraic, Trig, Exponential

### 2. u should get simpler when differentiated

u should get simpler when differentiated

### 3. dv must be something you can integrate

dv must be something you can integrate

### 4. Example

∫x·eˣ dx → u = x, dv = eˣ dx
      `
    },
    {
      id: 'integ2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of choosing u and dv (liate)?',
            options: [
              'LIATE priority for choosing u',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'LIATE priority for choosing u: Logarithmic, Inverse trig, Algebraic, Trig, Exponential'
          },
          {
            question: 'In the context of choosing u and dv (liate), which is accurate?',
            options: [
              'dv must be something you can integrate',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'dv must be something you can integrate'
          }
        ]
      }
    },
    {
      id: 'integ2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **LIATE priority for choosing u**: Logarithmic, Inverse trig, Algebraic, Trig, Exponential
- **u should get simpler when differentiated**
- **dv must be something you can integrate**
- **Example**: ∫x·eˣ dx → u = x, dv = eˣ dx
      `
    },
    {
      id: 'integ2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to choosing u and dv (liate)?',
            options: [
              '∫x·eˣ dx → u = x, dv = eˣ dx',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Example: ∫x·eˣ dx → u = x, dv = eˣ dx'
          }
        ]
      }
    },
    {
      id: 'integ2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'LIATE priority for choosing u',
            options: ['Logarithmic, Inverse trig, Algebraic, Trig, Expone', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'u should get simpler when differentiated',
            options: ['u should get simpler when differentiated', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'dv must be something you can integrate',
            options: ['dv must be something you can integrate', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Logarithmic, Inverse trig, Algebraic, Trig, Expone', 'u should get simpler when differentiated', 'dv must be something you can integrate'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Choosing u and dv (LIATE).'
      }
    }
  ]
}
