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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Substitution reactions are foundational in synthesis',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Substitution reactions are foundational in synthesis'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Stereochemistry is a key diagnostic tool',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Stereochemistry is a key diagnostic tool'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Substitution reactions are foundational in synthesis',
            options: ['Substitution reactions are foundational in synthes', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'SN1 and SN2 have opposite preferences',
            options: ['SN1 and SN2 have opposite preferences', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Stereochemistry is a key diagnostic tool',
            options: ['Stereochemistry is a key diagnostic tool', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Substitution reactions are foundational in synthes', 'SN1 and SN2 have opposite preferences', 'Stereochemistry is a key diagnostic tool'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
