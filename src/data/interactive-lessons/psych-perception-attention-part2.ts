export const psychPerceptionPart2Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce2-intro',
      type: 'text' as const,
      content: `
## Depth Perception

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Binocular cues?',
            options: [
              'relative size, overlap, linear perspective, texture gradient',
              'retinal disparity, convergence (need both eyes)',
              'closer objects appear to move faster',
              'Depth perception develops around 6 months (visual cliff)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Binocular cues: retinal disparity, convergence (need both eyes). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Depth Perception, which explains Motion parallax?',
            options: [
              'relative size, overlap, linear perspective, texture gradient',
              'retinal disparity, convergence (need both eyes)',
              'Depth perception develops around 6 months (visual cliff)',
              'closer objects appear to move faster'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Motion parallax: closer objects appear to move faster. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'perce2-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Binocular cues',
            options: ['Depth perception develops around 6 months (visual cliff)', 'relative size, overlap, linear perspective, texture gradient', 'closer objects appear to move faster', 'retinal disparity, convergence (need both eyes)']
          },
          {
            label: 'Monocular cues',
            options: ['Depth perception develops around 6 months (visual cliff)', 'closer objects appear to move faster', 'retinal disparity, convergence (need both eyes)', 'relative size, overlap, linear perspective, texture gradient']
          },
          {
            label: 'Motion parallax',
            options: ['retinal disparity, convergence (need both eyes)', 'Depth perception develops around 6 months (visual cliff)', 'relative size, overlap, linear perspective, texture gradient', 'closer objects appear to move faster']
          }
        ],
        correctAnswers: ['retinal disparity, convergence (need both eyes)', 'relative size, overlap, linear perspective, texture gradient', 'closer objects appear to move faster'],
        hint1: 'Think about what each concept specifically describes in Depth Perception.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Depth Perception describes a specific idea. Binocular cues: retinal disparity, convergence (need both eyes). Monocular cues: relative size, overlap, linear perspective, texture gradient. Motion parallax: closer objects appear to move faster.'
      }
    }
  ]
}
