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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Radical reactions follow distinct…" refer to in this topic?',
            options: [
              'Radical reactions follow distinct mechanistic patterns',
              'Selectivity depends on halogen choice',
              'radical halogenation and addition',
              'Radical stability parallels carbocation stability'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Radical reactions follow distinct mechanistic patterns. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Radical stability parallels carbocation…?',
            options: [
              'Selectivity depends on halogen choice',
              'Radical reactions follow distinct mechanistic patterns',
              'radical halogenation and addition',
              'Radical stability parallels carbocation stability'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Radical stability parallels carbocation stability. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Radical reactions follow distinct…',
            options: ['radical halogenation and addition', 'Radical stability parallels carbocation stability', 'Selectivity depends on halogen choice', 'Radical reactions follow distinct mechanistic patterns']
          },
          {
            label: 'Selectivity depends on halogen choice',
            options: ['radical halogenation and addition', 'Radical reactions follow distinct mechanistic patterns', 'Selectivity depends on halogen choice', 'Radical stability parallels carbocation stability']
          },
          {
            label: 'Radical stability parallels carbocation…',
            options: ['Selectivity depends on halogen choice', 'Radical reactions follow distinct mechanistic patterns', 'radical halogenation and addition', 'Radical stability parallels carbocation stability']
          }
        ],
        correctAnswers: ['Radical reactions follow distinct mechanistic patterns', 'Selectivity depends on halogen choice', 'Radical stability parallels carbocation stability'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Radical reactions follow distinct mechanistic patterns. Selectivity depends on halogen choice. Radical stability parallels carbocation stability.'
      }
    }
  ]
}
