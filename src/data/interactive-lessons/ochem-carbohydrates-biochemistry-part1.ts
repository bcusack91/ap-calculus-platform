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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Monosaccharides" refer to in this topic?',
            options: [
              'based on highest-numbered stereocenter',
              'polyhydroxy aldehydes (aldoses) or ketones (ketoses)',
              'Most natural sugars are D-sugars',
              'glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Monosaccharides: polyhydroxy aldehydes (aldoses) or ketones (ketoses). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ️ Carbohydrates Biochemistry, which explains Most natural sugars are D-sugars?',
            options: [
              'glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)',
              'Most natural sugars are D-sugars',
              'polyhydroxy aldehydes (aldoses) or ketones (ketoses)',
              'based on highest-numbered stereocenter'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Most natural sugars are D-sugars. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Monosaccharides',
            options: ['Most natural sugars are D-sugars', 'glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)', 'polyhydroxy aldehydes (aldoses) or ketones (ketoses)', 'based on highest-numbered stereocenter']
          },
          {
            label: 'D/L configuration',
            options: ['glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)', 'based on highest-numbered stereocenter', 'polyhydroxy aldehydes (aldoses) or ketones (ketoses)', 'Most natural sugars are D-sugars']
          },
          {
            label: 'Common',
            options: ['glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)', 'polyhydroxy aldehydes (aldoses) or ketones (ketoses)', 'based on highest-numbered stereocenter', 'Most natural sugars are D-sugars']
          }
        ],
        correctAnswers: ['polyhydroxy aldehydes (aldoses) or ketones (ketoses)', 'based on highest-numbered stereocenter', 'glucose (aldohexose), fructose (ketohexose), ribose (aldopentose)'],
        hint1: 'Think about what each concept specifically describes in ️ Carbohydrates Biochemistry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Carbohydrates Biochemistry describes a specific idea. Monosaccharides: polyhydroxy aldehydes (aldoses) or ketones (ketoses). D/L configuration: based on highest-numbered stereocenter. Common: glucose (aldohexose), fructose (ketohexose), ribose (aldopentose).'
      }
    }
  ]
}
