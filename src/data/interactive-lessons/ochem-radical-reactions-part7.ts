export const oChemRadicalsPart7Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'radic7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Radical reactions follow distinct mechanistic patterns

Radical reactions follow distinct mechanistic patterns

### 2. Selectivity depends on halogen choice

Selectivity depends on halogen choice

### 3. Radical stability parallels carbocation stability

Radical stability parallels carbocation stability

### 4. Review

radical halogenation and addition
      `
    },
    {
      id: 'radic7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Radical reactions follow distinct mechanistic patterns',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Radical reactions follow distinct mechanistic patterns'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Radical stability parallels carbocation stability',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Radical stability parallels carbocation stability'
          }
        ]
      }
    },
    {
      id: 'radic7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Radical reactions follow distinct mechanistic patterns**
- **Selectivity depends on halogen choice**
- **Radical stability parallels carbocation stability**
- **Review**: radical halogenation and addition
      `
    },
    {
      id: 'radic7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'radical halogenation and addition',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: radical halogenation and addition'
          }
        ]
      }
    },
    {
      id: 'radic7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Radical reactions follow distinct mechanistic patterns',
            options: ['Radical reactions follow distinct mechanistic patt', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Selectivity depends on halogen choice',
            options: ['Selectivity depends on halogen choice', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Radical stability parallels carbocation stability',
            options: ['Radical stability parallels carbocation stability', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Radical reactions follow distinct mechanistic patt', 'Selectivity depends on halogen choice', 'Radical stability parallels carbocation stability'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
