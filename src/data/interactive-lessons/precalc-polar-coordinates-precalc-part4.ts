export const precalcPolarPart4Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'polar4-intro',
      type: 'text' as const,
      content: `
# Classic Polar Curves

**Part 4 of 7 — Classic Polar Curves**

### 1. Rose curves

r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even

### 2. Limaçons

r = a + b cos θ; inner loop when |a/b| < 1, cardioid when |a/b| = 1

### 3. Lemniscate

r² = a² cos(2θ) or r² = a² sin(2θ)

### 4. Spiral of Archimedes

r = aθ, distance from pole increases with angle
      `
    },
    {
      id: 'polar4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of classic polar curves?',
            options: [
              'Rose curves',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Rose curves: r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even'
          },
          {
            question: 'In the context of classic polar curves, which is accurate?',
            options: [
              'r² = a² cos(2θ) or r² = a² sin(2θ)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Lemniscate: r² = a² cos(2θ) or r² = a² sin(2θ)'
          }
        ]
      }
    },
    {
      id: 'polar4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Rose curves**: r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even
- **Limaçons**: r = a + b cos θ; inner loop when |a/b| < 1, cardioid when |a/b| = 1
- **Lemniscate**: r² = a² cos(2θ) or r² = a² sin(2θ)
- **Spiral of Archimedes**: r = aθ, distance from pole increases with angle
      `
    },
    {
      id: 'polar4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to classic polar curves?',
            options: [
              'r = aθ, distance from pole increases with angle',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Spiral of Archimedes: r = aθ, distance from pole increases with angle'
          }
        ]
      }
    },
    {
      id: 'polar4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rose curves',
            options: ['r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Limaçons',
            options: ['r = a + b cos θ; inner loop when |a/b| < 1, cardio', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Lemniscate',
            options: ['r² = a² cos(2θ) or r² = a² sin(2θ)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2', 'r = a + b cos θ; inner loop when |a/b| < 1, cardio', 'r² = a² cos(2θ) or r² = a² sin(2θ)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Classic Polar Curves.'
      }
    }
  ]
}
