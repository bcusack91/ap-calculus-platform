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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to elimination?',
            options: [
              'Elimination',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Elimination: removal of H and leaving group → alkene'
          },
          {
            question: 'In the context of introduction to elimination, which is accurate?',
            options: [
              'E1 and E2',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Two mechanisms: E1 and E2'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Elimination',
            options: ['removal of H and leaving group → alkene', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Base removes a proton; leaving group departs',
            options: ['Base removes a proton; leaving group departs', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Two mechanisms',
            options: ['E1 and E2', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['removal of H and leaving group → alkene', 'Base removes a proton; leaving group departs', 'E1 and E2'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Elimination.'
      }
    }
  ]
}
