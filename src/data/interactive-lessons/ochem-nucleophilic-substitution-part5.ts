export const oChemSNPart5Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'nucle5-intro',
      type: 'text' as const,
      content: `
# Solvent & Leaving Group Effects

**Part 5 of 7 — Solvent & Leaving Group Effects**

### 1. Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)

Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)

### 2. Polar protic solvents favor SN1 (water, alcohols)

Polar protic solvents favor SN1 (water, alcohols)

### 3. Good leaving groups

weak bases (I⁻ > Br⁻ > Cl⁻)

### 4. Tosylates (OTs) and mesylates (OMs) are excellent leaving groups

Tosylates (OTs) and mesylates (OMs) are excellent leaving groups
      `
    },
    {
      id: 'nucle5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of solvent & leaving group effects?',
            options: [
              'Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)'
          },
          {
            question: 'In the context of solvent & leaving group effects, which is accurate?',
            options: [
              'weak bases (I⁻ > Br⁻ > Cl⁻)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Good leaving groups: weak bases (I⁻ > Br⁻ > Cl⁻)'
          }
        ]
      }
    },
    {
      id: 'nucle5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)**
- **Polar protic solvents favor SN1 (water, alcohols)**
- **Good leaving groups**: weak bases (I⁻ > Br⁻ > Cl⁻)
- **Tosylates (OTs) and mesylates (OMs) are excellent leaving groups**
      `
    },
    {
      id: 'nucle5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to solvent & leaving group effects?',
            options: [
              'Tosylates (OTs) and mesylates (OMs) are excellent leaving groups',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Tosylates (OTs) and mesylates (OMs) are excellent leaving groups'
          }
        ]
      }
    },
    {
      id: 'nucle5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)',
            options: ['Polar aprotic solvents favor SN2 (DMSO, DMF, aceto', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Polar protic solvents favor SN1 (water, alcohols)',
            options: ['Polar protic solvents favor SN1 (water, alcohols)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Good leaving groups',
            options: ['weak bases (I⁻ > Br⁻ > Cl⁻)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Polar aprotic solvents favor SN2 (DMSO, DMF, aceto', 'Polar protic solvents favor SN1 (water, alcohols)', 'weak bases (I⁻ > Br⁻ > Cl⁻)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Solvent & Leaving Group Effects.'
      }
    }
  ]
}
