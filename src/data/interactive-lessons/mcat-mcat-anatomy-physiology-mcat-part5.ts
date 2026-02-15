export const mcatAnatPhysPart5Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Sensory Systems

**Part 5 of 7 — Sensory Systems**

Vision: cornea + lens focus light on retina; rods (dim light) and cones (color).

Hearing: sound waves vibrate tympanic membrane, ossicles amplify, cochlea transduces.
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
            question: 'Which of the following best describes a key concept in sensory systems?',
            options: [
              'Vision: cornea + lens focus light on retina; rods (dim light) and cones (color)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Vision: cornea + lens focus light on retina; rods (dim light) and cones (color)'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Vestibular system: semicircular canals detect rotational acceleration; otolith organs detect linear.

**MCAT Tip:** Taste and smell: chemoreceptors; Somatosensory: mechanoreceptors, thermoreceptors, nociceptors.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to sensory systems?',
            options: [
              'Vestibular system: semicircular canals detect rotational acceleration; otolith organs detect linear',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Vestibular system: semicircular canals detect rotational acceleration; otolith organs detect linear'
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
            label: 'Core concept for Sensory Systems:',
            options: ['Vision: cornea + lens focus light on retina; rods (dim light', 'Hearing: sound waves vibrate tympanic membrane, ossicles amp', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Vestibular system: semicircular canals detect rotational acc', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Vision: cornea + lens focus light on retina; rods (dim light', 'Vestibular system: semicircular canals detect rotational acc'],
        hint1: 'Think about sensory systems',
        hint2: 'Consider the MCAT application',
        explanation: 'Vision: cornea + lens focus light on retina; rods (dim light) and cones (color). Vestibular system: semicircular canals detect rotational acceleration; otolith organs detect linear.'
      }
    }
  ]
}
