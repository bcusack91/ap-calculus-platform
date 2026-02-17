export const oChemAldehydesKetonesPart3Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh3-intro',
      type: 'text' as const,
      content: `
# Grignard & Organolithium Reactions

**Part 3 of 7 — Grignard & Organolithium Reactions**

### 1. Grignard reagent (RMgBr) adds to carbonyls

Grignard reagent (RMgBr) adds to carbonyls

### 2. Formaldehyde + RMgBr → primary alcohol

Formaldehyde + RMgBr → primary alcohol

### 3. Aldehyde + RMgBr → secondary alcohol

Aldehyde + RMgBr → secondary alcohol

### 4. Ketone + RMgBr → tertiary alcohol

Ketone + RMgBr → tertiary alcohol
      `
    },
    {
      id: 'aldeh3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Grignard reagent (RMgBr) adds to…?',
            options: [
              'Grignard reagent (RMgBr) adds to carbonyls',
              'Formaldehyde + RMgBr → primary alcohol',
              'Aldehyde + RMgBr → secondary alcohol',
              'Ketone + RMgBr → tertiary alcohol'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Grignard reagent (RMgBr) adds to carbonyls. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Aldehyde + RMgBr → secondary alcohol:',
            options: [
              'Ketone + RMgBr → tertiary alcohol',
              'Formaldehyde + RMgBr → primary alcohol',
              'Grignard reagent (RMgBr) adds to carbonyls',
              'Aldehyde + RMgBr → secondary alcohol'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Aldehyde + RMgBr → secondary alcohol. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'aldeh3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Grignard reagent (RMgBr) adds to carbonyls**
- **Formaldehyde + RMgBr → primary alcohol**
- **Aldehyde + RMgBr → secondary alcohol**
- **Ketone + RMgBr → tertiary alcohol**
      `
    },
    {
      id: 'aldeh3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to grignard & organolithium reactions?',
            options: [
              'Ketone + RMgBr → tertiary alcohol',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Ketone + RMgBr → tertiary alcohol'
          }
        ]
      }
    },
    {
      id: 'aldeh3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Grignard reagent (RMgBr) adds to…',
            options: ['Grignard reagent (RMgBr) adds to carbonyls', 'Ketone + RMgBr → tertiary alcohol', 'Aldehyde + RMgBr → secondary alcohol', 'Formaldehyde + RMgBr → primary alcohol']
          },
          {
            label: 'Formaldehyde + RMgBr → primary alcohol',
            options: ['Aldehyde + RMgBr → secondary alcohol', 'Grignard reagent (RMgBr) adds to carbonyls', 'Formaldehyde + RMgBr → primary alcohol', 'Ketone + RMgBr → tertiary alcohol']
          },
          {
            label: 'Aldehyde + RMgBr → secondary alcohol',
            options: ['Aldehyde + RMgBr → secondary alcohol', 'Grignard reagent (RMgBr) adds to carbonyls', 'Ketone + RMgBr → tertiary alcohol', 'Formaldehyde + RMgBr → primary alcohol']
          }
        ],
        correctAnswers: ['Grignard reagent (RMgBr) adds to carbonyls', 'Formaldehyde + RMgBr → primary alcohol', 'Aldehyde + RMgBr → secondary alcohol'],
        hint1: 'Think about what each concept specifically describes in Grignard & Organolithium Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Grignard & Organolithium Reactions describes a specific idea. Grignard reagent (RMgBr) adds to carbonyls. Formaldehyde + RMgBr → primary alcohol. Aldehyde + RMgBr → secondary alcohol.'
      }
    }
  ]
}
