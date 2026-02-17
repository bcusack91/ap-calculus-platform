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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Vision',
            options: ['Taste and smell: chemoreceptors; Somatosensory: mechanoreceptors, thermoreceptors, nociceptors.', 'cornea + lens focus light on retina; rods (dim light) and cones (color).', 'sound waves vibrate tympanic membrane, ossicles amplify, cochlea transduces.', 'Vestibular system: semicircular canals detect rotational acceleration; otolith organs detect linear.']
          },
          {
            label: 'Hearing',
            options: ['sound waves vibrate tympanic membrane, ossicles amplify, cochlea transduces.', 'Taste and smell: chemoreceptors; Somatosensory: mechanoreceptors, thermoreceptors, nociceptors.', 'cornea + lens focus light on retina; rods (dim light) and cones (color).', 'Vestibular system: semicircular canals detect rotational acceleration; otolith organs detect linear.']
          },
          {
            label: 'Key Insight',
            options: ['cornea + lens focus light on retina; rods (dim light) and cones (color).', 'sound waves vibrate tympanic membrane, ossicles amplify, cochlea transduces.', 'Taste and smell: chemoreceptors; Somatosensory: mechanoreceptors, thermoreceptors, nociceptors.', 'Vestibular system: semicircular canals detect rotational acceleration; otolith organs detect linear.']
          }
        ],
        correctAnswers: ['cornea + lens focus light on retina; rods (dim light) and cones (color).', 'sound waves vibrate tympanic membrane, ossicles amplify, cochlea transduces.', 'Vestibular system: semicircular canals detect rotational acceleration; otolith organs detect linear.'],
        hint1: 'Think about what each concept specifically describes in Sensory Systems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sensory Systems describes a specific idea. Vision: cornea + lens focus light on retina; rods (dim light) and cones (color). Hearing: sound waves vibrate tympanic membrane, ossicles amplify, cochlea transduces. Key Insight: Vestibular system: semicircular canals detect rotational acceleration; otolith organs detect linear.'
      }
    }
  ]
}
