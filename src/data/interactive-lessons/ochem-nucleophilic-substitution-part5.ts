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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Polar aprotic solvents favor SN2 (DMSO,…?',
            options: [
              'Polar protic solvents favor SN1 (water, alcohols)',
              'Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)',
              'weak bases (I⁻ > Br⁻ > Cl⁻)',
              'Tosylates (OTs) and mesylates (OMs) are excellent leaving groups'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Polar aprotic solvents favor SN2 (DMSO, DMF, acetone). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Solvent & Leaving Group Effects, which explains Good leaving groups?',
            options: [
              'weak bases (I⁻ > Br⁻ > Cl⁻)',
              'Polar protic solvents favor SN1 (water, alcohols)',
              'Tosylates (OTs) and mesylates (OMs) are excellent leaving groups',
              'Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Good leaving groups: weak bases (I⁻ > Br⁻ > Cl⁻). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polar aprotic solvents favor SN2 (DMSO,…',
            options: ['Polar protic solvents favor SN1 (water, alcohols)', 'weak bases (I⁻ > Br⁻ > Cl⁻)', 'Tosylates (OTs) and mesylates (OMs) are excellent leaving groups', 'Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)']
          },
          {
            label: 'Polar protic solvents favor SN1 (water,…',
            options: ['Tosylates (OTs) and mesylates (OMs) are excellent leaving groups', 'Polar protic solvents favor SN1 (water, alcohols)', 'Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)', 'weak bases (I⁻ > Br⁻ > Cl⁻)']
          },
          {
            label: 'Good leaving groups',
            options: ['weak bases (I⁻ > Br⁻ > Cl⁻)', 'Polar protic solvents favor SN1 (water, alcohols)', 'Tosylates (OTs) and mesylates (OMs) are excellent leaving groups', 'Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)']
          }
        ],
        correctAnswers: ['Polar aprotic solvents favor SN2 (DMSO, DMF, acetone)', 'Polar protic solvents favor SN1 (water, alcohols)', 'weak bases (I⁻ > Br⁻ > Cl⁻)'],
        hint1: 'Think about what each concept specifically describes in Solvent & Leaving Group Effects.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Solvent & Leaving Group Effects describes a specific idea. Polar aprotic solvents favor SN2 (DMSO, DMF, acetone). Polar protic solvents favor SN1 (water, alcohols). Good leaving groups: weak bases (I⁻ > Br⁻ > Cl⁻).'
      }
    }
  ]
}
