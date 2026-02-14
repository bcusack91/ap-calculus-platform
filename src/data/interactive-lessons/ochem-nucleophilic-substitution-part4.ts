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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of substrate & nucleophile effects?',
            options: [
              'SN2 favored',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'SN2 favored: methyl > primary > secondary >> tertiary (steric hindrance)'
          },
          {
            question: 'In the context of substrate & nucleophile effects, which is accurate?',
            options: [
              'Strong nucleophiles favor SN2; weak nucleophiles favor SN1',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Strong nucleophiles favor SN2; weak nucleophiles favor SN1'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SN2 favored',
            options: ['methyl > primary > secondary >> tertiary (steric h', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'SN1 favored',
            options: ['tertiary > secondary >> primary (carbocation stabi', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Strong nucleophiles favor SN2; weak nucleophiles favor SN1',
            options: ['Strong nucleophiles favor SN2; weak nucleophiles f', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['methyl > primary > secondary >> tertiary (steric h', 'tertiary > secondary >> primary (carbocation stabi', 'Strong nucleophiles favor SN2; weak nucleophiles f'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Substrate & Nucleophile Effects.'
      }
    }
  ]
}
