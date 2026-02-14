export const oChemCarbsPart1Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'carbo1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Carbohydrates Biochemistry

**Part 1 of 7 — Monosaccharide Structure**

### 1. Monosaccharides

polyhydroxy aldehydes (aldoses) or ketones (ketoses)

### 2. D/L configuration

based on highest-numbered stereocenter

### 3. Most natural sugars are D-sugars

Most natural sugars are D-sugars

### 4. Common

glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)
      `
    },
    {
      id: 'carbo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of monosaccharide structure?',
            options: [
              'Monosaccharides',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Monosaccharides: polyhydroxy aldehydes (aldoses) or ketones (ketoses)'
          },
          {
            question: 'In the context of monosaccharide structure, which is accurate?',
            options: [
              'Most natural sugars are D-sugars',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Most natural sugars are D-sugars'
          }
        ]
      }
    },
    {
      id: 'carbo1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Monosaccharides**: polyhydroxy aldehydes (aldoses) or ketones (ketoses)
- **D/L configuration**: based on highest-numbered stereocenter
- **Most natural sugars are D-sugars**
- **Common**: glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)
      `
    },
    {
      id: 'carbo1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to monosaccharide structure?',
            options: [
              'glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Common: glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)'
          }
        ]
      }
    },
    {
      id: 'carbo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Monosaccharides',
            options: ['polyhydroxy aldehydes (aldoses) or ketones (ketose', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'D/L configuration',
            options: ['based on highest-numbered stereocenter', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Most natural sugars are D-sugars',
            options: ['Most natural sugars are D-sugars', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['polyhydroxy aldehydes (aldoses) or ketones (ketose', 'based on highest-numbered stereocenter', 'Most natural sugars are D-sugars'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Monosaccharide Structure.'
      }
    }
  ]
}
