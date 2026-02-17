export const oChemSNPart7Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'nucle7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Substitution reactions are foundational in synthesis

Substitution reactions are foundational in synthesis

### 2. SN1 and SN2 have opposite preferences

SN1 and SN2 have opposite preferences

### 3. Stereochemistry is a key diagnostic tool

Stereochemistry is a key diagnostic tool

### 4. Review

predicting substitution outcomes
      `
    },
    {
      id: 'nucle7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Substitution reactions are foundational…?',
            options: [
              'Substitution reactions are foundational in synthesis',
              'SN1 and SN2 have opposite preferences',
              'Stereochemistry is a key diagnostic tool',
              'predicting substitution outcomes'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Substitution reactions are foundational in synthesis. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & Review, which explains Stereochemistry is a key diagnostic tool?',
            options: [
              'Substitution reactions are foundational in synthesis',
              'SN1 and SN2 have opposite preferences',
              'predicting substitution outcomes',
              'Stereochemistry is a key diagnostic tool'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Stereochemistry is a key diagnostic tool. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'nucle7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Substitution reactions are foundational in synthesis**
- **SN1 and SN2 have opposite preferences**
- **Stereochemistry is a key diagnostic tool**
- **Review**: predicting substitution outcomes
      `
    },
    {
      id: 'nucle7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'predicting substitution outcomes',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: predicting substitution outcomes'
          }
        ]
      }
    },
    {
      id: 'nucle7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Substitution reactions are foundational…',
            options: ['Stereochemistry is a key diagnostic tool', 'Substitution reactions are foundational in synthesis', 'SN1 and SN2 have opposite preferences', 'predicting substitution outcomes']
          },
          {
            label: 'SN1 and SN2 have opposite preferences',
            options: ['predicting substitution outcomes', 'Stereochemistry is a key diagnostic tool', 'Substitution reactions are foundational in synthesis', 'SN1 and SN2 have opposite preferences']
          },
          {
            label: 'Stereochemistry is a key diagnostic tool',
            options: ['predicting substitution outcomes', 'SN1 and SN2 have opposite preferences', 'Substitution reactions are foundational in synthesis', 'Stereochemistry is a key diagnostic tool']
          }
        ],
        correctAnswers: ['Substitution reactions are foundational in synthesis', 'SN1 and SN2 have opposite preferences', 'Stereochemistry is a key diagnostic tool'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Substitution reactions are foundational in synthesis. SN1 and SN2 have opposite preferences. Stereochemistry is a key diagnostic tool.'
      }
    }
  ]
}
