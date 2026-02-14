export const oChemAldehydesKetonesPart4Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh4-intro',
      type: 'text' as const,
      content: `
# Reduction & Oxidation

**Part 4 of 7 — Reduction & Oxidation**

### 1. NaBH₄

reduces aldehydes and ketones to alcohols

### 2. LiAlH₄

reduces all carbonyls including esters and amides

### 3. Oxidation

Tollens (Ag⁺), Jones, PCC

### 4. Only aldehydes give positive Tollens test (silver mirror)

Only aldehydes give positive Tollens test (silver mirror)
      `
    },
    {
      id: 'aldeh4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of reduction & oxidation?',
            options: [
              'NaBH₄',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'NaBH₄: reduces aldehydes and ketones to alcohols'
          },
          {
            question: 'In the context of reduction & oxidation, which is accurate?',
            options: [
              'Tollens (Ag⁺), Jones, PCC',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Oxidation: Tollens (Ag⁺), Jones, PCC'
          }
        ]
      }
    },
    {
      id: 'aldeh4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **NaBH₄**: reduces aldehydes and ketones to alcohols
- **LiAlH₄**: reduces all carbonyls including esters and amides
- **Oxidation**: Tollens (Ag⁺), Jones, PCC
- **Only aldehydes give positive Tollens test (silver mirror)**
      `
    },
    {
      id: 'aldeh4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to reduction & oxidation?',
            options: [
              'Only aldehydes give positive Tollens test (silver mirror)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Only aldehydes give positive Tollens test (silver mirror)'
          }
        ]
      }
    },
    {
      id: 'aldeh4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'NaBH₄',
            options: ['reduces aldehydes and ketones to alcohols', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'LiAlH₄',
            options: ['reduces all carbonyls including esters and amides', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Oxidation',
            options: ['Tollens (Ag⁺), Jones, PCC', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['reduces aldehydes and ketones to alcohols', 'reduces all carbonyls including esters and amides', 'Tollens (Ag⁺), Jones, PCC'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Reduction & Oxidation.'
      }
    }
  ]
}
