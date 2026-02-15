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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Sensation & Perception:',
            options: ['Sensation: detection of stimuli by sensory receptors; Percep', 'Absolute threshold: minimum stimulus intensity detected 50% ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Signal detection theory: ability to detect signal depends on', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Sensation: detection of stimuli by sensory receptors; Percep', 'Signal detection theory: ability to detect signal depends on'],
        hint1: 'Think about sensation & perception',
        hint2: 'Consider the MCAT application',
        explanation: 'Sensation: detection of stimuli by sensory receptors; Perception: interpretation by the brain. Signal detection theory: ability to detect signal depends on sensitivity and response bias.'
      }
    }
  ]
}
