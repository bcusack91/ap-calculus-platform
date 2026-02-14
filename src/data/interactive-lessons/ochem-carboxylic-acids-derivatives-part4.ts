export const oChemCarboxylicAcidsPart4Data = {
  topicSlug: 'carboxylic-acids-derivatives',
  sections: [
    {
      id: 'carbo4-intro',
      type: 'text' as const,
      content: `
# Esters & Amides

**Part 4 of 7 — Esters & Amides**

### 1. Esters (RCOOR')

moderate reactivity

### 2. Fischer esterification

RCOOH + R'OH ⇌ RCOOR' + H₂O (acid catalyzed)

### 3. Amides (RCONHR')

least reactive (nitrogen lone pair resonance)

### 4. Saponification

ester + NaOH → carboxylate + alcohol
      `
    },
    {
      id: 'carbo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of esters & amides?',
            options: [
              'Esters (RCOOR\')',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Esters (RCOOR\'): moderate reactivity'
          },
          {
            question: 'In the context of esters & amides, which is accurate?',
            options: [
              'least reactive (nitrogen lone pair resonance)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Amides (RCONHR\'): least reactive (nitrogen lone pair resonance)'
          }
        ]
      }
    },
    {
      id: 'carbo4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Esters (RCOOR')**: moderate reactivity
- **Fischer esterification**: RCOOH + R'OH ⇌ RCOOR' + H₂O (acid catalyzed)
- **Amides (RCONHR')**: least reactive (nitrogen lone pair resonance)
- **Saponification**: ester + NaOH → carboxylate + alcohol
      `
    },
    {
      id: 'carbo4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to esters & amides?',
            options: [
              'ester + NaOH → carboxylate + alcohol',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Saponification: ester + NaOH → carboxylate + alcohol'
          }
        ]
      }
    },
    {
      id: 'carbo4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Esters (RCOOR\')',
            options: ['moderate reactivity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Fischer esterification',
            options: ['RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyzed)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Amides (RCONHR\')',
            options: ['least reactive (nitrogen lone pair resonance)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['moderate reactivity', 'RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyzed)', 'least reactive (nitrogen lone pair resonance)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Esters & Amides.'
      }
    }
  ]
}
