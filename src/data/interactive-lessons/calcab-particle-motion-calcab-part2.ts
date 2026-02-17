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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Particle at rest when v(t) = 0" refer to in calculus?',
            options: [
              'Particle speeds up when v and a have the same sign',
              'Particle changes direction when v(t) changes sign',
              'Particle at rest when v(t) = 0',
              'Particle slows down when v and a have opposite signs'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Particle at rest when v(t) = 0. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Particle speeds up when v and a have…:',
            options: [
              'Particle at rest when v(t) = 0',
              'Particle slows down when v and a have opposite signs',
              'Particle speeds up when v and a have the same sign',
              'Particle changes direction when v(t) changes sign'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Particle speeds up when v and a have the same sign. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Particle slows down when v and a have…?',
            options: [
              'Particle speeds up when v and a have the same sign',
              'Particle changes direction when v(t) changes sign',
              'Particle slows down when v and a have opposite signs',
              'Particle at rest when v(t) = 0'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Particle slows down when v and a have opposite signs. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Particle at rest when v(t) = 0',
            options: ['Particle at rest when v(t) = 0', 'Particle changes direction when v(t) changes sign', 'Particle slows down when v and a have opposite signs', 'Particle speeds up when v and a have the same sign']
          },
          {
            label: 'Particle changes direction when v(t)…',
            options: ['Particle changes direction when v(t) changes sign', 'Particle slows down when v and a have opposite signs', 'Particle speeds up when v and a have the same sign', 'Particle at rest when v(t) = 0']
          },
          {
            label: 'Particle speeds up when v and a have…',
            options: ['Particle changes direction when v(t) changes sign', 'Particle slows down when v and a have opposite signs', 'Particle at rest when v(t) = 0', 'Particle speeds up when v and a have the same sign']
          }
        ],
        correctAnswers: ['Particle at rest when v(t) = 0', 'Particle changes direction when v(t) changes sign', 'Particle speeds up when v and a have the same sign'],
        hint1: 'Think about what each concept specifically describes in Analyzing Motion.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Analyzing Motion describes a specific idea. Particle at rest when v(t) = 0. Particle changes direction when v(t) changes sign. Particle speeds up when v and a have the same sign.'
      }
    }
  ]
}
