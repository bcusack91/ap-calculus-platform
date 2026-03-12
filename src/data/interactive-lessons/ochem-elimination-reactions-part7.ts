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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Elimination competes with substitution" refer to in this topic?',
            options: [
              'SN1/SN2/E1/E2 decision flowchart',
              'Reaction conditions determine which pathway dominates',
              'E2 requires specific geometry',
              'Elimination competes with substitution'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Elimination competes with substitution. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes E2 requires specific geometry:',
            options: [
              'Reaction conditions determine which pathway dominates',
              'E2 requires specific geometry',
              'SN1/SN2/E1/E2 decision flowchart',
              'Elimination competes with substitution'
            ],
            correctAnswer: 1,
            explanation: 'Correct — E2 requires specific geometry. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Elimination competes with substitution',
            options: ['Reaction conditions determine which pathway dominates', 'SN1/SN2/E1/E2 decision flowchart', 'E2 requires specific geometry', 'Elimination competes with substitution']
          },
          {
            label: 'Reaction conditions determine which…',
            options: ['SN1/SN2/E1/E2 decision flowchart', 'Elimination competes with substitution', 'E2 requires specific geometry', 'Reaction conditions determine which pathway dominates']
          },
          {
            label: 'E2 requires specific geometry',
            options: ['Elimination competes with substitution', 'Reaction conditions determine which pathway dominates', 'SN1/SN2/E1/E2 decision flowchart', 'E2 requires specific geometry']
          }
        ],
        correctAnswers: ['Elimination competes with substitution', 'Reaction conditions determine which pathway dominates', 'E2 requires specific geometry'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Elimination competes with substitution. Reaction conditions determine which pathway dominates. E2 requires specific geometry.'
      }
    }
  ]
}
