export const mcatPsychBehavPart1Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Psychology Behavior

**Part 1 of 7 — Sensation & Perception**

Sensation: detection of stimuli by sensory receptors; Perception: interpretation by the brain.

Absolute threshold: minimum stimulus intensity detected 50% of the time.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in sensation & perception?',
            options: [
              'Sensation: detection of stimuli by sensory receptors; Perception: interpretation by the brain',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Sensation: detection of stimuli by sensory receptors; Perception: interpretation by the brain'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Signal detection theory: ability to detect signal depends on sensitivity and response bias.

**MCAT Tip:** Weber law: just noticeable difference (JND) is proportional to stimulus magnitude (delta-I/I = constant).
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Psych/Soc related to sensation & perception?',
            options: [
              'Signal detection theory: ability to detect signal depends on sensitivity and response bias',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Signal detection theory: ability to detect signal depends on sensitivity and response bias'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sensation',
            options: ['minimum stimulus intensity detected 50% of the time.', 'Signal detection theory: ability to detect signal depends on sensitivity and response bias.', 'Weber law: just noticeable difference (JND) is proportional to stimulus magnitude (delta-I/I = constant).', 'detection of stimuli by sensory receptors; Perception: interpretation by the brain.']
          },
          {
            label: 'Absolute threshold',
            options: ['minimum stimulus intensity detected 50% of the time.', 'Signal detection theory: ability to detect signal depends on sensitivity and response bias.', 'detection of stimuli by sensory receptors; Perception: interpretation by the brain.', 'Weber law: just noticeable difference (JND) is proportional to stimulus magnitude (delta-I/I = constant).']
          },
          {
            label: 'Key Insight',
            options: ['minimum stimulus intensity detected 50% of the time.', 'Signal detection theory: ability to detect signal depends on sensitivity and response bias.', 'detection of stimuli by sensory receptors; Perception: interpretation by the brain.', 'Weber law: just noticeable difference (JND) is proportional to stimulus magnitude (delta-I/I = constant).']
          }
        ],
        correctAnswers: ['detection of stimuli by sensory receptors; Perception: interpretation by the brain.', 'minimum stimulus intensity detected 50% of the time.', 'Signal detection theory: ability to detect signal depends on sensitivity and response bias.'],
        hint1: 'Think about what each concept specifically describes in Psychology Behavior.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Psychology Behavior describes a specific idea. Sensation: detection of stimuli by sensory receptors; Perception: interpretation by the brain. Absolute threshold: minimum stimulus intensity detected 50% of the time. Key Insight: Signal detection theory: ability to detect signal depends on sensitivity and response bias.'
      }
    }
  ]
}
