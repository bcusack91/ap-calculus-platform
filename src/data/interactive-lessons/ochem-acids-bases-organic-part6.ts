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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Ranking acids by pKa',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Ranking acids by pKa'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Drawing curved arrow mechanisms',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Drawing curved arrow mechanisms'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ranking acids by pKa',
            options: ['Ranking acids by pKa', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Predicting products of acid-base reactions',
            options: ['Predicting products of acid-base reactions', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Drawing curved arrow mechanisms',
            options: ['Drawing curved arrow mechanisms', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Ranking acids by pKa', 'Predicting products of acid-base reactions', 'Drawing curved arrow mechanisms'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
