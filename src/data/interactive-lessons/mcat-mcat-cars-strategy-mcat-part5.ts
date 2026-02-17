export const mcatCarsStratPart5Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Tone & Author Perspective

**Part 5 of 7 — Tone & Author Perspective**

Author attitude: positive, negative, neutral, mixed, or ironic.

Word choice reveals tone: clinical vs. passionate, dismissive vs. respectful.
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
            question: 'Which of the following best describes a key concept in tone & author perspective?',
            options: [
              'Author attitude: positive, negative, neutral, mixed, or ironic',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Author attitude: positive, negative, neutral, mixed, or ironic'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Distinguish the authors view from views they are describing or critiquing.

**MCAT Tip:** Rhetorical purpose: why did the author include this example or argument?.
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
            question: 'What is an important principle for MCAT CARS related to tone & author perspective?',
            options: [
              'Distinguish the authors view from views they are describing or critiquing',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Distinguish the authors view from views they are describing or critiquing'
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
            label: 'Author attitude',
            options: ['Distinguish the authors view from views they are describing or critiquing.', 'clinical vs. passionate, dismissive vs. respectful.', 'positive, negative, neutral, mixed, or ironic.', 'Rhetorical purpose: why did the author include this example or argument?.']
          },
          {
            label: 'Word choice reveals tone',
            options: ['Rhetorical purpose: why did the author include this example or argument?.', 'Distinguish the authors view from views they are describing or critiquing.', 'clinical vs. passionate, dismissive vs. respectful.', 'positive, negative, neutral, mixed, or ironic.']
          },
          {
            label: 'Key Insight',
            options: ['Rhetorical purpose: why did the author include this example or argument?.', 'positive, negative, neutral, mixed, or ironic.', 'Distinguish the authors view from views they are describing or critiquing.', 'clinical vs. passionate, dismissive vs. respectful.']
          }
        ],
        correctAnswers: ['positive, negative, neutral, mixed, or ironic.', 'clinical vs. passionate, dismissive vs. respectful.', 'Distinguish the authors view from views they are describing or critiquing.'],
        hint1: 'Think about what each concept specifically describes in Tone & Author Perspective.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Tone & Author Perspective describes a specific idea. Author attitude: positive, negative, neutral, mixed, or ironic. Word choice reveals tone: clinical vs. passionate, dismissive vs. respectful. Key Insight: Distinguish the authors view from views they are describing or critiquing.'
      }
    }
  ]
}
