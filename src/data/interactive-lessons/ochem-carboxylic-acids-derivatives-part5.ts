export const oChemCarboxylicAcidsPart5Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'carbo5-intro',
      type: 'text' as const,
      content: `
# Interconversion of Derivatives

**Part 5 of 7 — Interconversion of Derivatives**

### 1. Can go "downhill" in reactivity

acid chloride → anhydride → ester → amide

### 2. Cannot easily go "uphill" without special reagents

Cannot easily go "uphill" without special reagents

### 3. Reduction

LiAlH₄ reduces esters → 2 alcohols, amides → amines

### 4. Hydrolysis

each derivative → carboxylic acid + nucleophile
      `
    },
    {
      id: 'carbo5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Can go "downhill" in reactivity" refer to in this topic?',
            options: [
              'acid chloride → anhydride → ester → amide',
              'each derivative → carboxylic acid + nucleophile',
              'LiAlH₄ reduces esters → 2 alcohols, amides → amines',
              'Cannot easily go "uphill" without special reagents'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Can go "downhill" in reactivity: acid chloride → anhydride → ester → amide. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Reduction?',
            options: [
              'LiAlH₄ reduces esters → 2 alcohols, amides → amines',
              'acid chloride → anhydride → ester → amide',
              'each derivative → carboxylic acid + nucleophile',
              'Cannot easily go "uphill" without special reagents'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Reduction: LiAlH₄ reduces esters → 2 alcohols, amides → amines. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'carbo5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Can go "downhill" in reactivity**: acid chloride → anhydride → ester → amide
- **Cannot easily go "uphill" without special reagents**
- **Reduction**: LiAlH₄ reduces esters → 2 alcohols, amides → amines
- **Hydrolysis**: each derivative → carboxylic acid + nucleophile
      `
    },
    {
      id: 'carbo5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to interconversion of derivatives?',
            options: [
              'each derivative → carboxylic acid + nucleophile',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Hydrolysis: each derivative → carboxylic acid + nucleophile'
          }
        ]
      }
    },
    {
      id: 'carbo5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Can go "downhill" in reactivity',
            options: ['acid chloride → anhydride → ester → amide', 'Cannot easily go "uphill" without special reagents', 'each derivative → carboxylic acid + nucleophile', 'LiAlH₄ reduces esters → 2 alcohols, amides → amines']
          },
          {
            label: 'Reduction',
            options: ['Cannot easily go "uphill" without special reagents', 'LiAlH₄ reduces esters → 2 alcohols, amides → amines', 'each derivative → carboxylic acid + nucleophile', 'acid chloride → anhydride → ester → amide']
          },
          {
            label: 'Hydrolysis',
            options: ['acid chloride → anhydride → ester → amide', 'Cannot easily go "uphill" without special reagents', 'each derivative → carboxylic acid + nucleophile', 'LiAlH₄ reduces esters → 2 alcohols, amides → amines']
          }
        ],
        correctAnswers: ['acid chloride → anhydride → ester → amide', 'LiAlH₄ reduces esters → 2 alcohols, amides → amines', 'each derivative → carboxylic acid + nucleophile'],
        hint1: 'Think about what each concept specifically describes in Interconversion of Derivatives.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Interconversion of Derivatives describes a specific idea. Can go "downhill" in reactivity: acid chloride → anhydride → ester → amide. Reduction: LiAlH₄ reduces esters → 2 alcohols, amides → amines. Hydrolysis: each derivative → carboxylic acid + nucleophile.'
      }
    }
  ]
}
