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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Esters (RCOOR\')?',
            options: [
              'moderate reactivity',
              'RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyzed)',
              'least reactive (nitrogen lone pair resonance)',
              'ester + NaOH → carboxylate + alcohol'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Esters (RCOOR\'): moderate reactivity. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Amides (RCONHR\')?',
            options: [
              'least reactive (nitrogen lone pair resonance)',
              'moderate reactivity',
              'ester + NaOH → carboxylate + alcohol',
              'RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyzed)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Amides (RCONHR\'): least reactive (nitrogen lone pair resonance). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Esters (RCOOR\')',
            options: ['RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyzed)', 'least reactive (nitrogen lone pair resonance)', 'ester + NaOH → carboxylate + alcohol', 'moderate reactivity']
          },
          {
            label: 'Fischer esterification',
            options: ['ester + NaOH → carboxylate + alcohol', 'least reactive (nitrogen lone pair resonance)', 'moderate reactivity', 'RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyzed)']
          },
          {
            label: 'Amides (RCONHR\')',
            options: ['moderate reactivity', 'least reactive (nitrogen lone pair resonance)', 'ester + NaOH → carboxylate + alcohol', 'RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyzed)']
          }
        ],
        correctAnswers: ['moderate reactivity', 'RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyzed)', 'least reactive (nitrogen lone pair resonance)'],
        hint1: 'Think about what each concept specifically describes in Esters & Amides.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Esters & Amides describes a specific idea. Esters (RCOOR\'): moderate reactivity. Fischer esterification: RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyzed). Amides (RCONHR\'): least reactive (nitrogen lone pair resonance).'
      }
    }
  ]
}
