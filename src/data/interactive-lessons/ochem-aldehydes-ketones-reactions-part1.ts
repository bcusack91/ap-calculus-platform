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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of carbonyl chemistry introduction?',
            options: [
              'Carbonyl group (C=O)',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Carbonyl group (C=O): polar, electrophilic carbon'
          },
          {
            question: 'In the context of carbonyl chemistry introduction, which is accurate?',
            options: [
              'Nu⁻ attacks electrophilic C',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Nucleophilic addition: Nu⁻ attacks electrophilic C'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Carbonyl group (C=O)',
            options: ['polar, electrophilic carbon', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Aldehydes',
            options: ['RCHO (terminal); Ketones: RCOR (internal)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Nucleophilic addition',
            options: ['Nu⁻ attacks electrophilic C', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['polar, electrophilic carbon', 'RCHO (terminal); Ketones: RCOR (internal)', 'Nu⁻ attacks electrophilic C'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Carbonyl Chemistry Introduction.'
      }
    }
  ]
}
