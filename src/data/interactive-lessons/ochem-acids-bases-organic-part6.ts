export const oChemAcidsBasesPart6Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'acids6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Ranking acids by pKa

Ranking acids by pKa

### 2. Predicting products of acid-base reactions

Predicting products of acid-base reactions

### 3. Drawing curved arrow mechanisms

Drawing curved arrow mechanisms

### 4. Analyzing effects of substituents on acidity

Analyzing effects of substituents on acidity
      `
    },
    {
      id: 'acids6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Ranking acids by pKa?',
            options: [
              'Analyzing effects of substituents on acidity',
              'Drawing curved arrow mechanisms',
              'Ranking acids by pKa',
              'Predicting products of acid-base reactions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Ranking acids by pKa. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Drawing curved arrow mechanisms?',
            options: [
              'Predicting products of acid-base reactions',
              'Analyzing effects of substituents on acidity',
              'Ranking acids by pKa',
              'Drawing curved arrow mechanisms'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Drawing curved arrow mechanisms. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'acids6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Ranking acids by pKa**
- **Predicting products of acid-base reactions**
- **Drawing curved arrow mechanisms**
- **Analyzing effects of substituents on acidity**
      `
    },
    {
      id: 'acids6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Analyzing effects of substituents on acidity',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing effects of substituents on acidity'
          }
        ]
      }
    },
    {
      id: 'acids6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ranking acids by pKa',
            options: ['Ranking acids by pKa', 'Analyzing effects of substituents on acidity', 'Predicting products of acid-base reactions', 'Drawing curved arrow mechanisms']
          },
          {
            label: 'Predicting products of acid-base…',
            options: ['Drawing curved arrow mechanisms', 'Predicting products of acid-base reactions', 'Analyzing effects of substituents on acidity', 'Ranking acids by pKa']
          },
          {
            label: 'Drawing curved arrow mechanisms',
            options: ['Predicting products of acid-base reactions', 'Drawing curved arrow mechanisms', 'Ranking acids by pKa', 'Analyzing effects of substituents on acidity']
          }
        ],
        correctAnswers: ['Ranking acids by pKa', 'Predicting products of acid-base reactions', 'Drawing curved arrow mechanisms'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Ranking acids by pKa. Predicting products of acid-base reactions. Drawing curved arrow mechanisms.'
      }
    }
  ]
}
