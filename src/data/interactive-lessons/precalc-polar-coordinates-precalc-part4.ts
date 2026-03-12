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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Rose curves?',
            options: [
              'r = a + b cos θ; inner loop when |a/b| < 1, cardioid when |a/b| = 1',
              'r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even',
              'r = aθ, distance from pole increases with angle',
              'r² = a² cos(2θ) or r² = a² sin(2θ)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Rose curves: r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Classic Polar Curves, which explains Lemniscate?',
            options: [
              'r = a + b cos θ; inner loop when |a/b| < 1, cardioid when |a/b| = 1',
              'r² = a² cos(2θ) or r² = a² sin(2θ)',
              'r = aθ, distance from pole increases with angle',
              'r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Lemniscate: r² = a² cos(2θ) or r² = a² sin(2θ). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rose curves',
            options: ['r = a + b cos θ; inner loop when |a/b| < 1, cardioid when |a/b| = 1', 'r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even', 'r = aθ, distance from pole increases with angle', 'r² = a² cos(2θ) or r² = a² sin(2θ)']
          },
          {
            label: 'Limaçons',
            options: ['r = a + b cos θ; inner loop when |a/b| < 1, cardioid when |a/b| = 1', 'r² = a² cos(2θ) or r² = a² sin(2θ)', 'r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even', 'r = aθ, distance from pole increases with angle']
          },
          {
            label: 'Lemniscate',
            options: ['r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even', 'r = a + b cos θ; inner loop when |a/b| < 1, cardioid when |a/b| = 1', 'r² = a² cos(2θ) or r² = a² sin(2θ)', 'r = aθ, distance from pole increases with angle']
          }
        ],
        correctAnswers: ['r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even', 'r = a + b cos θ; inner loop when |a/b| < 1, cardioid when |a/b| = 1', 'r² = a² cos(2θ) or r² = a² sin(2θ)'],
        hint1: 'Think about what each concept specifically describes in Classic Polar Curves.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Classic Polar Curves describes a specific idea. Rose curves: r = a cos(nθ) or r = a sin(nθ); n petals if odd, 2n petals if even. Limaçons: r = a + b cos θ; inner loop when |a/b| < 1, cardioid when |a/b| = 1. Lemniscate: r² = a² cos(2θ) or r² = a² sin(2θ).'
      }
    }
  ]
}
