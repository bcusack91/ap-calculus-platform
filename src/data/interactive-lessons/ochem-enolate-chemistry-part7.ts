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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Enolate chemistry builds C-C bonds',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Enolate chemistry builds C-C bonds'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Michael/Robinson extends to complex synthesis',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Michael/Robinson extends to complex synthesis'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Enolate chemistry builds C-C bonds',
            options: ['Enolate chemistry builds C-C bonds', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Aldol and Claisen are the most important C-C forming reactions',
            options: ['Aldol and Claisen are the most important C-C formi', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Michael/Robinson extends to complex synthesis',
            options: ['Michael/Robinson extends to complex synthesis', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Enolate chemistry builds C-C bonds', 'Aldol and Claisen are the most important C-C formi', 'Michael/Robinson extends to complex synthesis'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
