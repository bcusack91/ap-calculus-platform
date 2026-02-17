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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Grignard reaction?',
            options: [
              'NaBH₄ or LiAlH₄',
              'RMgBr + carbonyl → alcohol',
              'Hydrolysis of esters gives alcohols',
              'Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Grignard reaction: RMgBr + carbonyl → alcohol. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Reduction of carbonyls?',
            options: [
              'NaBH₄ or LiAlH₄',
              'Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)',
              'RMgBr + carbonyl → alcohol',
              'Hydrolysis of esters gives alcohols'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Reduction of carbonyls: NaBH₄ or LiAlH₄. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Grignard reaction',
            options: ['RMgBr + carbonyl → alcohol', 'Hydrolysis of esters gives alcohols', 'Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)', 'NaBH₄ or LiAlH₄']
          },
          {
            label: 'Hydration of alkenes',
            options: ['RMgBr + carbonyl → alcohol', 'Hydrolysis of esters gives alcohols', 'NaBH₄ or LiAlH₄', 'Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)']
          },
          {
            label: 'Reduction of carbonyls',
            options: ['Hydrolysis of esters gives alcohols', 'NaBH₄ or LiAlH₄', 'Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)', 'RMgBr + carbonyl → alcohol']
          }
        ],
        correctAnswers: ['RMgBr + carbonyl → alcohol', 'Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃)', 'NaBH₄ or LiAlH₄'],
        hint1: 'Think about what each concept specifically describes in Alcohol Synthesis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Alcohol Synthesis describes a specific idea. Grignard reaction: RMgBr + carbonyl → alcohol. Hydration of alkenes: Markovnikov (H₃O⁺) or anti-Markovnikov (BH₃). Reduction of carbonyls: NaBH₄ or LiAlH₄.'
      }
    }
  ]
}
