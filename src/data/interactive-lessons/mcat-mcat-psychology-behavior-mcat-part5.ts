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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Piagets stages',
            options: ['Attachment: Ainsworth — secure, anxious-avoidant, anxious-ambivalent, disorganized.', '8 psychosocial stages from trust vs mistrust to integrity vs despair.', 'Kohlberg: preconventional (reward/punishment), conventional (social norms), postconventional (universal principles).', 'sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+).']
          },
          {
            label: 'Erikson',
            options: ['sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+).', 'Attachment: Ainsworth — secure, anxious-avoidant, anxious-ambivalent, disorganized.', 'Kohlberg: preconventional (reward/punishment), conventional (social norms), postconventional (universal principles).', '8 psychosocial stages from trust vs mistrust to integrity vs despair.']
          },
          {
            label: 'Key Insight',
            options: ['8 psychosocial stages from trust vs mistrust to integrity vs despair.', 'Attachment: Ainsworth — secure, anxious-avoidant, anxious-ambivalent, disorganized.', 'sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+).', 'Kohlberg: preconventional (reward/punishment), conventional (social norms), postconventional (universal principles).']
          }
        ],
        correctAnswers: ['sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+).', '8 psychosocial stages from trust vs mistrust to integrity vs despair.', 'Kohlberg: preconventional (reward/punishment), conventional (social norms), postconventional (universal principles).'],
        hint1: 'Think about what each concept specifically describes in Developmental Psychology.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Developmental Psychology describes a specific idea. Piagets stages: sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+). Erikson: 8 psychosocial stages from trust vs mistrust to integrity vs despair. Key Insight: Kohlberg: preconventional (reward/punishment), conventional (social norms), postconventional (universal principles).'
      }
    }
  ]
}
