export const oChemSNPart4Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'nucle4-intro',
      type: 'text' as const,
      content: `
# Substrate & Nucleophile Effects

**Part 4 of 7 — Substrate & Nucleophile Effects**

### 1. SN2 favored

methyl > primary > secondary >> tertiary (steric hindrance)

### 2. SN1 favored

tertiary > secondary >> primary (carbocation stability)

### 3. Strong nucleophiles favor SN2; weak nucleophiles favor SN1

Strong nucleophiles favor SN2; weak nucleophiles favor SN1

### 4. Nucleophilicity

I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)
      `
    },
    {
      id: 'nucle4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "SN2 favored" refer to in this topic?',
            options: [
              'tertiary > secondary >> primary (carbocation stability)',
              'I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)',
              'Strong nucleophiles favor SN2; weak nucleophiles favor SN1',
              'methyl > primary > secondary >> tertiary (steric hindrance)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SN2 favored: methyl > primary > secondary >> tertiary (steric hindrance). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Substrate & Nucleophile Effects, which explains Strong nucleophiles favor SN2; weak…?',
            options: [
              'Strong nucleophiles favor SN2; weak nucleophiles favor SN1',
              'tertiary > secondary >> primary (carbocation stability)',
              'I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)',
              'methyl > primary > secondary >> tertiary (steric hindrance)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Strong nucleophiles favor SN2; weak nucleophiles favor SN1. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'nucle4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **SN2 favored**: methyl > primary > secondary >> tertiary (steric hindrance)
- **SN1 favored**: tertiary > secondary >> primary (carbocation stability)
- **Strong nucleophiles favor SN2; weak nucleophiles favor SN1**
- **Nucleophilicity**: I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)
      `
    },
    {
      id: 'nucle4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to substrate & nucleophile effects?',
            options: [
              'I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Nucleophilicity: I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)'
          }
        ]
      }
    },
    {
      id: 'nucle4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SN2 favored',
            options: ['tertiary > secondary >> primary (carbocation stability)', 'I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)', 'methyl > primary > secondary >> tertiary (steric hindrance)', 'Strong nucleophiles favor SN2; weak nucleophiles favor SN1']
          },
          {
            label: 'SN1 favored',
            options: ['tertiary > secondary >> primary (carbocation stability)', 'methyl > primary > secondary >> tertiary (steric hindrance)', 'I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)', 'Strong nucleophiles favor SN2; weak nucleophiles favor SN1']
          },
          {
            label: 'Nucleophilicity',
            options: ['methyl > primary > secondary >> tertiary (steric hindrance)', 'I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)', 'tertiary > secondary >> primary (carbocation stability)', 'Strong nucleophiles favor SN2; weak nucleophiles favor SN1']
          }
        ],
        correctAnswers: ['methyl > primary > secondary >> tertiary (steric hindrance)', 'tertiary > secondary >> primary (carbocation stability)', 'I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic)'],
        hint1: 'Think about what each concept specifically describes in Substrate & Nucleophile Effects.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Substrate & Nucleophile Effects describes a specific idea. SN2 favored: methyl > primary > secondary >> tertiary (steric hindrance). SN1 favored: tertiary > secondary >> primary (carbocation stability). Nucleophilicity: I⁻ > Br⁻ > Cl⁻ > F⁻ (in polar aprotic).'
      }
    }
  ]
}
