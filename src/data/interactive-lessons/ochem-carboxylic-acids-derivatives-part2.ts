export const oChemCarboxylicAcidsPart2Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'carbo2-intro',
      type: 'text' as const,
      content: `
# Nucleophilic Acyl Substitution

**Part 2 of 7 — Nucleophilic Acyl Substitution**

### 1. Nucleophilic acyl substitution

Nu attacks C=O → tetrahedral intermediate → leaving group departs

### 2. Different from nucleophilic addition (no leaving group expulsion with aldehydes/ketones)

Different from nucleophilic addition (no leaving group expulsion with aldehydes/ketones)

### 3. Reactivity order

acid chloride > anhydride > ester > amide

### 4. Better leaving group = more reactive

Better leaving group = more reactive
      `
    },
    {
      id: 'carbo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of nucleophilic acyl substitution?',
            options: [
              'Nucleophilic acyl substitution',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Nucleophilic acyl substitution: Nu attacks C=O → tetrahedral intermediate → leaving group departs'
          },
          {
            question: 'In the context of nucleophilic acyl substitution, which is accurate?',
            options: [
              'acid chloride > anhydride > ester > amide',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Reactivity order: acid chloride > anhydride > ester > amide'
          }
        ]
      }
    },
    {
      id: 'carbo2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Nucleophilic acyl substitution**: Nu attacks C=O → tetrahedral intermediate → leaving group departs
- **Different from nucleophilic addition (no leaving group expulsion with aldehydes/ketones)**
- **Reactivity order**: acid chloride > anhydride > ester > amide
- **Better leaving group = more reactive**
      `
    },
    {
      id: 'carbo2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nucleophilic acyl substitution?',
            options: [
              'Better leaving group = more reactive',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Better leaving group = more reactive'
          }
        ]
      }
    },
    {
      id: 'carbo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleophilic acyl substitution',
            options: ['Nu attacks C=O → tetrahedral intermediate → leavin', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Different from nucleophilic addition (no leaving group expulsion with aldehydes/ketones)',
            options: ['Different from nucleophilic addition (no leaving g', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Reactivity order',
            options: ['acid chloride > anhydride > ester > amide', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Nu attacks C=O → tetrahedral intermediate → leavin', 'Different from nucleophilic addition (no leaving g', 'acid chloride > anhydride > ester > amide'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Nucleophilic Acyl Substitution.'
      }
    }
  ]
}
