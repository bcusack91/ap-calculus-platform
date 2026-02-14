export const psychPerceptionPart2Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce2-intro',
      type: 'text' as const,
      content: `
# ## Depth Perception

**Part 2 of 7 — Depth Perception**

### 1. Binocular cues

retinal disparity, convergence (need both eyes)

### 2. Monocular cues

relative size, overlap, linear perspective, texture gradient

### 3. Motion parallax

closer objects appear to move faster

### 4. Depth perception develops around 6 months (visual cliff)

Depth perception develops around 6 months (visual cliff)
      `
    },
    {
      id: 'perce2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of depth perception?',
            options: [
              'Binocular cues',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Binocular cues: retinal disparity, convergence (need both eyes)'
          },
          {
            question: 'In the context of depth perception, which is accurate?',
            options: [
              'closer objects appear to move faster',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Motion parallax: closer objects appear to move faster'
          }
        ]
      }
    },
    {
      id: 'perce2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Binocular cues**: retinal disparity, convergence (need both eyes)
- **Monocular cues**: relative size, overlap, linear perspective, texture gradient
- **Motion parallax**: closer objects appear to move faster
- **Depth perception develops around 6 months (visual cliff)**
      `
    },
    {
      id: 'perce2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to depth perception?',
            options: [
              'Depth perception develops around 6 months (visual cliff)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Depth perception develops around 6 months (visual cliff)'
          }
        ]
      }
    },
    {
      id: 'perce2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Binocular cues',
            options: ['retinal disparity, convergence (need both eyes)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Monocular cues',
            options: ['relative size, overlap, linear perspective, textur', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Motion parallax',
            options: ['closer objects appear to move faster', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['retinal disparity, convergence (need both eyes)', 'relative size, overlap, linear perspective, textur', 'closer objects appear to move faster'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Depth Perception.'
      }
    }
  ]
}
