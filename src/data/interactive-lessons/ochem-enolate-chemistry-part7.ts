export const oChemEnolatePart7Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'enola7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Enolate chemistry builds C-C bonds

Enolate chemistry builds C-C bonds

### 2. Aldol and Claisen are the most important C-C forming reactions

Aldol and Claisen are the most important C-C forming reactions

### 3. Michael/Robinson extends to complex synthesis

Michael/Robinson extends to complex synthesis

### 4. Review

enolate reactions in synthesis
      `
    },
    {
      id: 'enola7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Enolate chemistry builds C-C bonds?',
            options: [
              'Aldol and Claisen are the most important C-C forming reactions',
              'Michael/Robinson extends to complex synthesis',
              'enolate reactions in synthesis',
              'Enolate chemistry builds C-C bonds'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Enolate chemistry builds C-C bonds. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Michael/Robinson extends to complex…?',
            options: [
              'Aldol and Claisen are the most important C-C forming reactions',
              'enolate reactions in synthesis',
              'Michael/Robinson extends to complex synthesis',
              'Enolate chemistry builds C-C bonds'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Michael/Robinson extends to complex synthesis. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'enola7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Enolate chemistry builds C-C bonds**
- **Aldol and Claisen are the most important C-C forming reactions**
- **Michael/Robinson extends to complex synthesis**
- **Review**: enolate reactions in synthesis
      `
    },
    {
      id: 'enola7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'enolate reactions in synthesis',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: enolate reactions in synthesis'
          }
        ]
      }
    },
    {
      id: 'enola7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Enolate chemistry builds C-C bonds',
            options: ['Michael/Robinson extends to complex synthesis', 'Aldol and Claisen are the most important C-C forming reactions', 'enolate reactions in synthesis', 'Enolate chemistry builds C-C bonds']
          },
          {
            label: 'Aldol and Claisen are the most…',
            options: ['Enolate chemistry builds C-C bonds', 'Aldol and Claisen are the most important C-C forming reactions', 'enolate reactions in synthesis', 'Michael/Robinson extends to complex synthesis']
          },
          {
            label: 'Michael/Robinson extends to complex…',
            options: ['Enolate chemistry builds C-C bonds', 'Michael/Robinson extends to complex synthesis', 'Aldol and Claisen are the most important C-C forming reactions', 'enolate reactions in synthesis']
          }
        ],
        correctAnswers: ['Enolate chemistry builds C-C bonds', 'Aldol and Claisen are the most important C-C forming reactions', 'Michael/Robinson extends to complex synthesis'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Enolate chemistry builds C-C bonds. Aldol and Claisen are the most important C-C forming reactions. Michael/Robinson extends to complex synthesis.'
      }
    }
  ]
}
