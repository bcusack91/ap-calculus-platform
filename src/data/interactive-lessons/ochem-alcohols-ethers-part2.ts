export const oChemAlcoholsPart2Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh2-intro',
      type: 'text' as const,
      content: `
# Alcohol Synthesis

**Part 2 of 7 — Alcohol Synthesis**

### 1. Grignard reaction

RMgBr + carbonyl → alcohol

### 2. Hydration of alkenes

Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)

### 3. Reduction of carbonyls

NaBH₄ or LiAlH₄

### 4. Hydrolysis of esters gives alcohols

Hydrolysis of esters gives alcohols
      `
    },
    {
      id: 'alcoh2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alcohol synthesis?',
            options: [
              'Grignard reaction',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Grignard reaction: RMgBr + carbonyl → alcohol'
          },
          {
            question: 'In the context of alcohol synthesis, which is accurate?',
            options: [
              'NaBH₄ or LiAlH₄',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Reduction of carbonyls: NaBH₄ or LiAlH₄'
          }
        ]
      }
    },
    {
      id: 'alcoh2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Grignard reaction**: RMgBr + carbonyl → alcohol
- **Hydration of alkenes**: Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)
- **Reduction of carbonyls**: NaBH₄ or LiAlH₄
- **Hydrolysis of esters gives alcohols**
      `
    },
    {
      id: 'alcoh2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alcohol synthesis?',
            options: [
              'Hydrolysis of esters gives alcohols',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Hydrolysis of esters gives alcohols'
          }
        ]
      }
    },
    {
      id: 'alcoh2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Grignard reaction',
            options: ['RMgBr + carbonyl → alcohol', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Hydration of alkenes',
            options: ['Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Reduction of carbonyls',
            options: ['NaBH₄ or LiAlH₄', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['RMgBr + carbonyl → alcohol', 'Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)', 'NaBH₄ or LiAlH₄'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alcohol Synthesis.'
      }
    }
  ]
}
