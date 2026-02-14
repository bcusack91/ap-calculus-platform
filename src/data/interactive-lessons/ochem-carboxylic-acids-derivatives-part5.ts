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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of interconversion of derivatives?',
            options: [
              'Can go "downhill" in reactivity',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Can go "downhill" in reactivity: acid chloride → anhydride → ester → amide'
          },
          {
            question: 'In the context of interconversion of derivatives, which is accurate?',
            options: [
              'LiAlH₄ reduces esters → 2 alcohols, amides → amines',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Reduction: LiAlH₄ reduces esters → 2 alcohols, amides → amines'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Can go "downhill" in reactivity',
            options: ['acid chloride → anhydride → ester → amide', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Cannot easily go "uphill" without special reagents',
            options: ['Cannot easily go "uphill" without special reagents', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Reduction',
            options: ['LiAlH₄ reduces esters → 2 alcohols, amides → amine', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['acid chloride → anhydride → ester → amide', 'Cannot easily go "uphill" without special reagents', 'LiAlH₄ reduces esters → 2 alcohols, amides → amine'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Interconversion of Derivatives.'
      }
    }
  ]
}
