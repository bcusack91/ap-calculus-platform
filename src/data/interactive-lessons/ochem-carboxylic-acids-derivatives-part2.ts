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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Nucleophilic acyl substitution?',
            options: [
              'Different from nucleophilic addition (no leaving group expulsion with aldehydes/ketones)',
              'acid chloride > anhydride > ester > amide',
              'Better leaving group = more reactive',
              'Nu attacks C=O → tetrahedral intermediate → leaving group departs'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Nucleophilic acyl substitution: Nu attacks C=O → tetrahedral intermediate → leaving group departs. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Nucleophilic Acyl Substitution, which explains Reactivity order?',
            options: [
              'Better leaving group = more reactive',
              'acid chloride > anhydride > ester > amide',
              'Different from nucleophilic addition (no leaving group expulsion with aldehydes/ketones)',
              'Nu attacks C=O → tetrahedral intermediate → leaving group departs'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Reactivity order: acid chloride > anhydride > ester > amide. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleophilic acyl substitution',
            options: ['Better leaving group = more reactive', 'Nu attacks C=O → tetrahedral intermediate → leaving group departs', 'acid chloride > anhydride > ester > amide', 'Different from nucleophilic addition (no leaving group expulsion with aldehydes/ketones)']
          },
          {
            label: 'Reactivity order',
            options: ['Different from nucleophilic addition (no leaving group expulsion with aldehydes/ketones)', 'acid chloride > anhydride > ester > amide', 'Better leaving group = more reactive', 'Nu attacks C=O → tetrahedral intermediate → leaving group departs']
          }
        ],
        correctAnswers: ['Nu attacks C=O → tetrahedral intermediate → leaving group departs', 'acid chloride > anhydride > ester > amide'],
        hint1: 'Think about what each concept specifically describes in Nucleophilic Acyl Substitution.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Nucleophilic Acyl Substitution describes a specific idea. Nucleophilic acyl substitution: Nu attacks C=O → tetrahedral intermediate → leaving group departs. Reactivity order: acid chloride > anhydride > ester > amide.'
      }
    }
  ]
}
