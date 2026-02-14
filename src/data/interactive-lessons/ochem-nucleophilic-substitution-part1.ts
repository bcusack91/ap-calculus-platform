export const oChemSNPart1Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'nucle1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Nucleophilic Substitution

**Part 1 of 7 — Introduction to Substitution**

### 1. Nucleophilic substitution

nucleophile replaces leaving group

### 2. Nu

⁻ + R-LG → R-Nu + LG:⁻

### 3. Two mechanisms

SN1 and SN2

### 4. Mechanism depends on substrate, nucleophile, solvent, leaving group

Mechanism depends on substrate, nucleophile, solvent, leaving group
      `
    },
    {
      id: 'nucle1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to substitution?',
            options: [
              'Nucleophilic substitution',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Nucleophilic substitution: nucleophile replaces leaving group'
          },
          {
            question: 'In the context of introduction to substitution, which is accurate?',
            options: [
              'SN1 and SN2',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Two mechanisms: SN1 and SN2'
          }
        ]
      }
    },
    {
      id: 'nucle1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Nucleophilic substitution**: nucleophile replaces leaving group
- **Nu**: ⁻ + R-LG → R-Nu + LG:⁻
- **Two mechanisms**: SN1 and SN2
- **Mechanism depends on substrate, nucleophile, solvent, leaving group**
      `
    },
    {
      id: 'nucle1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to substitution?',
            options: [
              'Mechanism depends on substrate, nucleophile, solvent, leaving group',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Mechanism depends on substrate, nucleophile, solvent, leaving group'
          }
        ]
      }
    },
    {
      id: 'nucle1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleophilic substitution',
            options: ['nucleophile replaces leaving group', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Nu',
            options: ['⁻ + R-LG → R-Nu + LG:⁻', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Two mechanisms',
            options: ['SN1 and SN2', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['nucleophile replaces leaving group', '⁻ + R-LG → R-Nu + LG:⁻', 'SN1 and SN2'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Substitution.'
      }
    }
  ]
}
