export const mcatPsychBehavPart5Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Developmental Psychology

**Part 5 of 7 — Developmental Psychology**

Piagets stages: sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+).

Erikson: 8 psychosocial stages from trust vs mistrust to integrity vs despair.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in developmental psychology?',
            options: [
              'Piagets stages: sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Piagets stages: sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+)'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Kohlberg: preconventional (reward/punishment), conventional (social norms), postconventional (universal principles).

**MCAT Tip:** Attachment: Ainsworth — secure, anxious-avoidant, anxious-ambivalent, disorganized.
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Psych/Soc related to developmental psychology?',
            options: [
              'Kohlberg: preconventional (reward/punishment), conventional (social norms), postconventional (universal principles)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Kohlberg: preconventional (reward/punishment), conventional (social norms), postconventional (universal principles)'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Developmental Psychology:',
            options: ['Piagets stages: sensorimotor (0-2), preoperational (2-7), co', 'Erikson: 8 psychosocial stages from trust vs mistrust to int', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Kohlberg: preconventional (reward/punishment), conventional ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Piagets stages: sensorimotor (0-2), preoperational (2-7), co', 'Kohlberg: preconventional (reward/punishment), conventional '],
        hint1: 'Think about developmental psychology',
        hint2: 'Consider the MCAT application',
        explanation: 'Piagets stages: sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+). Kohlberg: preconventional (reward/punishment), conventional (social norms), postconventional (universal principles).'
      }
    }
  ]
}
