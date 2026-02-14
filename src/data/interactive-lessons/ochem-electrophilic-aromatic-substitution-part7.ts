export const oChemEASPart7Data = {
  topicSlug: 'electrophilic-aromatic-substitution',
  sections: [
    {
      id: 'elect7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. EAS is the primary reaction of aromatic compounds

EAS is the primary reaction of aromatic compounds

### 2. Directing effects control regiochemistry

Directing effects control regiochemistry

### 3. Multi-step synthesis requires planning

Multi-step synthesis requires planning

### 4. Review

EAS reactions and directing groups
      `
    },
    {
      id: 'elect7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'EAS is the primary reaction of aromatic compounds',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'EAS is the primary reaction of aromatic compounds'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Multi-step synthesis requires planning',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Multi-step synthesis requires planning'
          }
        ]
      }
    },
    {
      id: 'elect7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **EAS is the primary reaction of aromatic compounds**
- **Directing effects control regiochemistry**
- **Multi-step synthesis requires planning**
- **Review**: EAS reactions and directing groups
      `
    },
    {
      id: 'elect7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'EAS reactions and directing groups',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: EAS reactions and directing groups'
          }
        ]
      }
    },
    {
      id: 'elect7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'EAS is the primary reaction of aromatic compounds',
            options: ['EAS is the primary reaction of aromatic compounds', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Directing effects control regiochemistry',
            options: ['Directing effects control regiochemistry', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Multi-step synthesis requires planning',
            options: ['Multi-step synthesis requires planning', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['EAS is the primary reaction of aromatic compounds', 'Directing effects control regiochemistry', 'Multi-step synthesis requires planning'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
