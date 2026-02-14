export const oChemAlcoholsPart3Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh3-intro',
      type: 'text' as const,
      content: `
# Alcohol Reactions

**Part 3 of 7 — Alcohol Reactions**

### 1. Dehydration

H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)

### 2. Oxidation

PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)

### 3. Conversion to alkyl halides

HX, PBr₃, SOCl₂

### 4. 3° alcohols cannot be oxidized

3° alcohols cannot be oxidized
      `
    },
    {
      id: 'alcoh3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alcohol reactions?',
            options: [
              'Dehydration',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Dehydration: H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)'
          },
          {
            question: 'In the context of alcohol reactions, which is accurate?',
            options: [
              'HX, PBr₃, SOCl₂',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Conversion to alkyl halides: HX, PBr₃, SOCl₂'
          }
        ]
      }
    },
    {
      id: 'alcoh3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Dehydration**: H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)
- **Oxidation**: PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)
- **Conversion to alkyl halides**: HX, PBr₃, SOCl₂
- **3° alcohols cannot be oxidized**
      `
    },
    {
      id: 'alcoh3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alcohol reactions?',
            options: [
              '3° alcohols cannot be oxidized',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: '3° alcohols cannot be oxidized'
          }
        ]
      }
    },
    {
      id: 'alcoh3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dehydration',
            options: ['H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Oxidation',
            options: ['PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic a', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Conversion to alkyl halides',
            options: ['HX, PBr₃, SOCl₂', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)', 'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic a', 'HX, PBr₃, SOCl₂'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alcohol Reactions.'
      }
    }
  ]
}
