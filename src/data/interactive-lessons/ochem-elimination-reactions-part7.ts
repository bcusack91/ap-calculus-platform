export const oChemElimPart7Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Elimination competes with substitution

Elimination competes with substitution

### 2. Reaction conditions determine which pathway dominates

Reaction conditions determine which pathway dominates

### 3. E2 requires specific geometry

E2 requires specific geometry

### 4. Review

SN1/SN2/E1/E2 decision flowchart
      `
    },
    {
      id: 'elimi7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Elimination competes with substitution',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Elimination competes with substitution'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'E2 requires specific geometry',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'E2 requires specific geometry'
          }
        ]
      }
    },
    {
      id: 'elimi7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Elimination competes with substitution**
- **Reaction conditions determine which pathway dominates**
- **E2 requires specific geometry**
- **Review**: SN1/SN2/E1/E2 decision flowchart
      `
    },
    {
      id: 'elimi7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'SN1/SN2/E1/E2 decision flowchart',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: SN1/SN2/E1/E2 decision flowchart'
          }
        ]
      }
    },
    {
      id: 'elimi7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Elimination competes with substitution',
            options: ['Elimination competes with substitution', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Reaction conditions determine which pathway dominates',
            options: ['Reaction conditions determine which pathway domina', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'E2 requires specific geometry',
            options: ['E2 requires specific geometry', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Elimination competes with substitution', 'Reaction conditions determine which pathway domina', 'E2 requires specific geometry'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
