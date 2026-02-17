export const oChemNMRPart5Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s5-intro',
      type: 'text' as const,
      content: `
# Structure Determination

**Part 5 of 7 — Structure Determination**

### 1. Step 1

determine molecular formula and degrees of unsaturation

### 2. Step 2

analyze IR for functional groups

### 3. Step 3

count ¹H NMR signals, integration, splitting

### 4. Step 4

assemble fragments into consistent structure
      `
    },
    {
      id: 'nmr-s5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Step 1?',
            options: [
              'analyze IR for functional groups',
              'determine molecular formula and degrees of unsaturation',
              'assemble fragments into consistent structure',
              'count ¹H NMR signals, integration, splitting'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Step 1: determine molecular formula and degrees of unsaturation. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Step 3?',
            options: [
              'count ¹H NMR signals, integration, splitting',
              'assemble fragments into consistent structure',
              'analyze IR for functional groups',
              'determine molecular formula and degrees of unsaturation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Step 3: count ¹H NMR signals, integration, splitting. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'nmr-s5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Step 1**: determine molecular formula and degrees of unsaturation
- **Step 2**: analyze IR for functional groups
- **Step 3**: count ¹H NMR signals, integration, splitting
- **Step 4**: assemble fragments into consistent structure
      `
    },
    {
      id: 'nmr-s5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to structure determination?',
            options: [
              'assemble fragments into consistent structure',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Step 4: assemble fragments into consistent structure'
          }
        ]
      }
    },
    {
      id: 'nmr-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Step 1',
            options: ['determine molecular formula and degrees of unsaturation', 'count ¹H NMR signals, integration, splitting', 'analyze IR for functional groups', 'assemble fragments into consistent structure']
          },
          {
            label: 'Step 2',
            options: ['determine molecular formula and degrees of unsaturation', 'assemble fragments into consistent structure', 'count ¹H NMR signals, integration, splitting', 'analyze IR for functional groups']
          },
          {
            label: 'Step 3',
            options: ['determine molecular formula and degrees of unsaturation', 'analyze IR for functional groups', 'count ¹H NMR signals, integration, splitting', 'assemble fragments into consistent structure']
          }
        ],
        correctAnswers: ['determine molecular formula and degrees of unsaturation', 'analyze IR for functional groups', 'count ¹H NMR signals, integration, splitting'],
        hint1: 'Think about what each concept specifically describes in Structure Determination.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Structure Determination describes a specific idea. Step 1: determine molecular formula and degrees of unsaturation. Step 2: analyze IR for functional groups. Step 3: count ¹H NMR signals, integration, splitting.'
      }
    }
  ]
}
