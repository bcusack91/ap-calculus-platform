export const oChemNMRPart7Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. NMR is the most powerful structural tool

NMR is the most powerful structural tool

### 2. Chemical shift indicates electronic environment

Chemical shift indicates electronic environment

### 3. Splitting pattern reveals connectivity

Splitting pattern reveals connectivity

### 4. Review

systematic structure determination
      `
    },
    {
      id: 'nmr-s7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes NMR is the most powerful structural tool?',
            options: [
              'NMR is the most powerful structural tool',
              'systematic structure determination',
              'Splitting pattern reveals connectivity',
              'Chemical shift indicates electronic environment'
            ],
            correctAnswer: 0,
            explanation: 'Correct — NMR is the most powerful structural tool. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Splitting pattern reveals connectivity?',
            options: [
              'NMR is the most powerful structural tool',
              'systematic structure determination',
              'Chemical shift indicates electronic environment',
              'Splitting pattern reveals connectivity'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Splitting pattern reveals connectivity. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'nmr-s7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **NMR is the most powerful structural tool**
- **Chemical shift indicates electronic environment**
- **Splitting pattern reveals connectivity**
- **Review**: systematic structure determination
      `
    },
    {
      id: 'nmr-s7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'systematic structure determination',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: systematic structure determination'
          }
        ]
      }
    },
    {
      id: 'nmr-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'NMR is the most powerful structural tool',
            options: ['Splitting pattern reveals connectivity', 'systematic structure determination', 'NMR is the most powerful structural tool', 'Chemical shift indicates electronic environment']
          },
          {
            label: 'Chemical shift indicates electronic…',
            options: ['Chemical shift indicates electronic environment', 'Splitting pattern reveals connectivity', 'systematic structure determination', 'NMR is the most powerful structural tool']
          },
          {
            label: 'Splitting pattern reveals connectivity',
            options: ['Splitting pattern reveals connectivity', 'Chemical shift indicates electronic environment', 'NMR is the most powerful structural tool', 'systematic structure determination']
          }
        ],
        correctAnswers: ['NMR is the most powerful structural tool', 'Chemical shift indicates electronic environment', 'Splitting pattern reveals connectivity'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. NMR is the most powerful structural tool. Chemical shift indicates electronic environment. Splitting pattern reveals connectivity.'
      }
    }
  ]
}
