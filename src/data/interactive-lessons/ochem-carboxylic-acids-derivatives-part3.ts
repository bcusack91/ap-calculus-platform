export const oChemCarboxylicAcidsPart3Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'carbo3-intro',
      type: 'text' as const,
      content: `
# Acid Chlorides & Anhydrides

**Part 3 of 7 — Acid Chlorides & Anhydrides**

### 1. Acid chloride (RCOCl)

most reactive acyl derivative

### 2. Made from RCOOH + SOCl₂ or (COCl)₂

Made from RCOOH + SOCl₂ or (COCl)₂

### 3. Anhydride (RCO-O-COR)

moderately reactive

### 4. Both react with alcohols → esters, amines → amides

Both react with alcohols → esters, amines → amides
      `
    },
    {
      id: 'carbo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Acid chloride (RCOCl)?',
            options: [
              'Made from RCOOH + SOCl₂ or (COCl)₂',
              'Both react with alcohols → esters, amines → amides',
              'most reactive acyl derivative',
              'moderately reactive'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Acid chloride (RCOCl): most reactive acyl derivative. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Anhydride (RCO-O-COR)?',
            options: [
              'Made from RCOOH + SOCl₂ or (COCl)₂',
              'moderately reactive',
              'most reactive acyl derivative',
              'Both react with alcohols → esters, amines → amides'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Anhydride (RCO-O-COR): moderately reactive. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'carbo3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Acid chloride (RCOCl)**: most reactive acyl derivative
- **Made from RCOOH + SOCl₂ or (COCl)₂**
- **Anhydride (RCO-O-COR)**: moderately reactive
- **Both react with alcohols → esters, amines → amides**
      `
    },
    {
      id: 'carbo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to acid chlorides & anhydrides?',
            options: [
              'Both react with alcohols → esters, amines → amides',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Both react with alcohols → esters, amines → amides'
          }
        ]
      }
    },
    {
      id: 'carbo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acid chloride (RCOCl)',
            options: ['Both react with alcohols → esters, amines → amides', 'Made from RCOOH + SOCl₂ or (COCl)₂', 'most reactive acyl derivative', 'moderately reactive']
          },
          {
            label: 'Anhydride (RCO-O-COR)',
            options: ['moderately reactive', 'Both react with alcohols → esters, amines → amides', 'Made from RCOOH + SOCl₂ or (COCl)₂', 'most reactive acyl derivative']
          }
        ],
        correctAnswers: ['most reactive acyl derivative', 'moderately reactive'],
        hint1: 'Think about what each concept specifically describes in Acid Chlorides & Anhydrides.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Acid Chlorides & Anhydrides describes a specific idea. Acid chloride (RCOCl): most reactive acyl derivative. Anhydride (RCO-O-COR): moderately reactive.'
      }
    }
  ]
}
