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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'NMR is the most powerful structural tool',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'NMR is the most powerful structural tool'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Splitting pattern reveals connectivity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Splitting pattern reveals connectivity'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'NMR is the most powerful structural tool',
            options: ['NMR is the most powerful structural tool', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Chemical shift indicates electronic environment',
            options: ['Chemical shift indicates electronic environment', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Splitting pattern reveals connectivity',
            options: ['Splitting pattern reveals connectivity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['NMR is the most powerful structural tool', 'Chemical shift indicates electronic environment', 'Splitting pattern reveals connectivity'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
