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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Dehydration?',
            options: [
              'H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)',
              '3° alcohols cannot be oxidized',
              'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)',
              'HX, PBr₃, SOCl₂'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Dehydration: H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Conversion to alkyl halides?',
            options: [
              'HX, PBr₃, SOCl₂',
              'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)',
              'H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)',
              '3° alcohols cannot be oxidized'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Conversion to alkyl halides: HX, PBr₃, SOCl₂. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dehydration',
            options: ['PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)', 'H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)', 'HX, PBr₃, SOCl₂', '3° alcohols cannot be oxidized']
          },
          {
            label: 'Oxidation',
            options: ['HX, PBr₃, SOCl₂', 'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)', '3° alcohols cannot be oxidized', 'H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)']
          },
          {
            label: 'Conversion to alkyl halides',
            options: ['HX, PBr₃, SOCl₂', 'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)', 'H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)', '3° alcohols cannot be oxidized']
          }
        ],
        correctAnswers: ['H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)', 'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)', 'HX, PBr₃, SOCl₂'],
        hint1: 'Think about what each concept specifically describes in Alcohol Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Alcohol Reactions describes a specific idea. Dehydration: H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°). Oxidation: PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone). Conversion to alkyl halides: HX, PBr₃, SOCl₂.'
      }
    }
  ]
}
