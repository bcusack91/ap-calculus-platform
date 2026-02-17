export const oChemElimPart1Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Elimination Reactions

**Part 1 of 7 — Introduction to Elimination**

### 1. Elimination

removal of H and leaving group → alkene

### 2. Base removes a proton; leaving group departs

Base removes a proton; leaving group departs

### 3. Two mechanisms

E1 and E2

### 4. Competes with substitution (SN1/SN2)

Competes with substitution (SN1/SN2)
      `
    },
    {
      id: 'elimi1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Elimination?',
            options: [
              'Competes with substitution (SN1/SN2)',
              'removal of H and leaving group → alkene',
              'E1 and E2',
              'Base removes a proton; leaving group departs'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Elimination: removal of H and leaving group → alkene. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ️ Elimination Reactions, which explains Two mechanisms?',
            options: [
              'Base removes a proton; leaving group departs',
              'removal of H and leaving group → alkene',
              'Competes with substitution (SN1/SN2)',
              'E1 and E2'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Two mechanisms: E1 and E2. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'elimi1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Elimination**: removal of H and leaving group → alkene
- **Base removes a proton; leaving group departs**
- **Two mechanisms**: E1 and E2
- **Competes with substitution (SN1/SN2)**
      `
    },
    {
      id: 'elimi1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to elimination?',
            options: [
              'Competes with substitution (SN1/SN2)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Competes with substitution (SN1/SN2)'
          }
        ]
      }
    },
    {
      id: 'elimi1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Elimination',
            options: ['Competes with substitution (SN1/SN2)', 'Base removes a proton; leaving group departs', 'E1 and E2', 'removal of H and leaving group → alkene']
          },
          {
            label: 'Two mechanisms',
            options: ['Competes with substitution (SN1/SN2)', 'Base removes a proton; leaving group departs', 'E1 and E2', 'removal of H and leaving group → alkene']
          }
        ],
        correctAnswers: ['removal of H and leaving group → alkene', 'E1 and E2'],
        hint1: 'Think about what each concept specifically describes in ️ Elimination Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Elimination Reactions describes a specific idea. Elimination: removal of H and leaving group → alkene. Two mechanisms: E1 and E2.'
      }
    }
  ]
}
