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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of acid chlorides & anhydrides?',
            options: [
              'Acid chloride (RCOCl)',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Acid chloride (RCOCl): most reactive acyl derivative'
          },
          {
            question: 'In the context of acid chlorides & anhydrides, which is accurate?',
            options: [
              'moderately reactive',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Anhydride (RCO-O-COR): moderately reactive'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acid chloride (RCOCl)',
            options: ['most reactive acyl derivative', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Made from RCOOH + SOCl₂ or (COCl)₂',
            options: ['Made from RCOOH + SOCl₂ or (COCl)₂', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Anhydride (RCO-O-COR)',
            options: ['moderately reactive', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['most reactive acyl derivative', 'Made from RCOOH + SOCl₂ or (COCl)₂', 'moderately reactive'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Acid Chlorides & Anhydrides.'
      }
    }
  ]
}
