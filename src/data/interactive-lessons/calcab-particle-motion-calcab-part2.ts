export const calcABParticleMotionPart2Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'parti2-intro',
      type: 'text' as const,
      content: `
# Analyzing Motion

**Part 2 of 7 — Analyzing Motion**

### 1. Particle at rest when v(t) = 0

Particle at rest when v(t) = 0

### 2. Particle changes direction when v(t) changes sign

Particle changes direction when v(t) changes sign

### 3. Particle speeds up when v and a have the same sign

Particle speeds up when v and a have the same sign

### 4. Particle slows down when v and a have opposite signs

Particle slows down when v and a have opposite signs
      `
    },
    {
      id: 'parti2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of analyzing motion?',
            options: [
              'Particle at rest when v(t) = 0',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Particle at rest when v(t) = 0'
          },
          {
            question: 'In the context of analyzing motion, which is accurate?',
            options: [
              'Particle speeds up when v and a have the same sign',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Particle speeds up when v and a have the same sign'
          }
        ]
      }
    },
    {
      id: 'parti2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Particle at rest when v(t) = 0**
- **Particle changes direction when v(t) changes sign**
- **Particle speeds up when v and a have the same sign**
- **Particle slows down when v and a have opposite signs**
      `
    },
    {
      id: 'parti2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to analyzing motion?',
            options: [
              'Particle slows down when v and a have opposite signs',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Particle slows down when v and a have opposite signs'
          }
        ]
      }
    },
    {
      id: 'parti2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Particle at rest when v(t) = 0',
            options: ['Particle at rest when v(t) = 0', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Particle changes direction when v(t) changes sign',
            options: ['Particle changes direction when v(t) changes sign', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Particle speeds up when v and a have the same sign',
            options: ['Particle speeds up when v and a have the same sign', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Particle at rest when v(t) = 0', 'Particle changes direction when v(t) changes sign', 'Particle speeds up when v and a have the same sign'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Analyzing Motion.'
      }
    }
  ]
}
