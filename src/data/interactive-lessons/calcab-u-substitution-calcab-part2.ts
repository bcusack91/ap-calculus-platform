export const calcABUSubPart2Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'u-sub2-intro',
      type: 'text' as const,
      content: `
# Choosing u

**Part 2 of 7 — Choosing u**

### 1. Choose u as the "inside" function (the argument of a composite function)

Choose u as the "inside" function (the argument of a composite function)

### 2. du should match (or be a constant multiple of) the remaining factors

du should match (or be a constant multiple of) the remaining factors

### 3. Common choices

u = expression inside a power, inside a trig function, exponent, denominator

### 4. If the first choice doesn't work, try a different u

If the first choice doesn't work, try a different u
      `
    },
    {
      id: 'u-sub2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of choosing u?',
            options: [
              'Choose u as the "inside" function (the argument of a composite function)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Choose u as the "inside" function (the argument of a composite function)'
          },
          {
            question: 'In the context of choosing u, which is accurate?',
            options: [
              'u = expression inside a power, inside a trig function, exponent, denominator',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Common choices: u = expression inside a power, inside a trig function, exponent, denominator'
          }
        ]
      }
    },
    {
      id: 'u-sub2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Choose u as the "inside" function (the argument of a composite function)**
- **du should match (or be a constant multiple of) the remaining factors**
- **Common choices**: u = expression inside a power, inside a trig function, exponent, denominator
- **If the first choice doesn't work, try a different u**
      `
    },
    {
      id: 'u-sub2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to choosing u?',
            options: [
              'If the first choice doesn\'t work, try a different u',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'If the first choice doesn\'t work, try a different u'
          }
        ]
      }
    },
    {
      id: 'u-sub2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Choose u as the "inside" function (the argument of a composite function)',
            options: ['Choose u as the "inside" function (the argument of', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'du should match (or be a constant multiple of) the remaining factors',
            options: ['du should match (or be a constant multiple of) the', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Common choices',
            options: ['u = expression inside a power, inside a trig funct', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Choose u as the "inside" function (the argument of', 'du should match (or be a constant multiple of) the', 'u = expression inside a power, inside a trig funct'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Choosing u.'
      }
    }
  ]
}
