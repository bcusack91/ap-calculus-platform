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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes NaBH₄?',
            options: [
              'reduces all carbonyls including esters and amides',
              'Only aldehydes give positive Tollens test (silver mirror)',
              'reduces aldehydes and ketones to alcohols',
              'Tollens (Ag⁺), Jones, PCC'
            ],
            correctAnswer: 2,
            explanation: 'Correct — NaBH₄: reduces aldehydes and ketones to alcohols. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Oxidation:',
            options: [
              'reduces all carbonyls including esters and amides',
              'reduces aldehydes and ketones to alcohols',
              'Only aldehydes give positive Tollens test (silver mirror)',
              'Tollens (Ag⁺), Jones, PCC'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Oxidation: Tollens (Ag⁺), Jones, PCC. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'NaBH₄',
            options: ['Tollens (Ag⁺), Jones, PCC', 'reduces all carbonyls including esters and amides', 'Only aldehydes give positive Tollens test (silver mirror)', 'reduces aldehydes and ketones to alcohols']
          },
          {
            label: 'LiAlH₄',
            options: ['reduces aldehydes and ketones to alcohols', 'reduces all carbonyls including esters and amides', 'Tollens (Ag⁺), Jones, PCC', 'Only aldehydes give positive Tollens test (silver mirror)']
          },
          {
            label: 'Oxidation',
            options: ['Tollens (Ag⁺), Jones, PCC', 'reduces all carbonyls including esters and amides', 'reduces aldehydes and ketones to alcohols', 'Only aldehydes give positive Tollens test (silver mirror)']
          }
        ],
        correctAnswers: ['reduces aldehydes and ketones to alcohols', 'reduces all carbonyls including esters and amides', 'Tollens (Ag⁺), Jones, PCC'],
        hint1: 'Think about what each concept specifically describes in Reduction & Oxidation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reduction & Oxidation describes a specific idea. NaBH₄: reduces aldehydes and ketones to alcohols. LiAlH₄: reduces all carbonyls including esters and amides. Oxidation: Tollens (Ag⁺), Jones, PCC.'
      }
    }
  ]
}
