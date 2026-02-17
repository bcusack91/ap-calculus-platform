export const oChemAldehydesKetonesPart1Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Aldehydes Ketones Reactions

**Part 1 of 7 — Carbonyl Chemistry Introduction**

### 1. Carbonyl group (C=O)

polar, electrophilic carbon

### 2. Aldehydes

RCHO (terminal); Ketones: RCOR (internal)

### 3. Nucleophilic addition

Nu⁻ attacks electrophilic C

### 4. Aldehydes more reactive than ketones (less steric hindrance, less electron donation)

Aldehydes more reactive than ketones (less steric hindrance, less electron donation)
      `
    },
    {
      id: 'aldeh1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Carbonyl group (C=O)?',
            options: [
              'Nu⁻ attacks electrophilic C',
              'RCHO (terminal); Ketones: RCOR (internal)',
              'Aldehydes more reactive than ketones (less steric hindrance, less electron donation)',
              'polar, electrophilic carbon'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Carbonyl group (C=O): polar, electrophilic carbon. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Nucleophilic addition:',
            options: [
              'RCHO (terminal); Ketones: RCOR (internal)',
              'Nu⁻ attacks electrophilic C',
              'polar, electrophilic carbon',
              'Aldehydes more reactive than ketones (less steric hindrance, less electron donation)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Nucleophilic addition: Nu⁻ attacks electrophilic C. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'aldeh1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Carbonyl group (C=O)**: polar, electrophilic carbon
- **Aldehydes**: RCHO (terminal); Ketones: RCOR (internal)
- **Nucleophilic addition**: Nu⁻ attacks electrophilic C
- **Aldehydes more reactive than ketones (less steric hindrance, less electron donation)**
      `
    },
    {
      id: 'aldeh1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to carbonyl chemistry introduction?',
            options: [
              'Aldehydes more reactive than ketones (less steric hindrance, less electron donat',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Aldehydes more reactive than ketones (less steric hindrance, less electron donation)'
          }
        ]
      }
    },
    {
      id: 'aldeh1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Carbonyl group (C=O)',
            options: ['Nu⁻ attacks electrophilic C', 'RCHO (terminal); Ketones: RCOR (internal)', 'Aldehydes more reactive than ketones (less steric hindrance, less electron donation)', 'polar, electrophilic carbon']
          },
          {
            label: 'Aldehydes',
            options: ['polar, electrophilic carbon', 'RCHO (terminal); Ketones: RCOR (internal)', 'Nu⁻ attacks electrophilic C', 'Aldehydes more reactive than ketones (less steric hindrance, less electron donation)']
          },
          {
            label: 'Nucleophilic addition',
            options: ['RCHO (terminal); Ketones: RCOR (internal)', 'Aldehydes more reactive than ketones (less steric hindrance, less electron donation)', 'Nu⁻ attacks electrophilic C', 'polar, electrophilic carbon']
          }
        ],
        correctAnswers: ['polar, electrophilic carbon', 'RCHO (terminal); Ketones: RCOR (internal)', 'Nu⁻ attacks electrophilic C'],
        hint1: 'Think about what each concept specifically describes in ️ Aldehydes Ketones Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Aldehydes Ketones Reactions describes a specific idea. Carbonyl group (C=O): polar, electrophilic carbon. Aldehydes: RCHO (terminal); Ketones: RCOR (internal). Nucleophilic addition: Nu⁻ attacks electrophilic C.'
      }
    }
  ]
}
