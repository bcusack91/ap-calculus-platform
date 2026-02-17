export const mcatPhysElecPart6Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Electrochemistry

**Part 6 of 7 — Electrochemistry**

Galvanic (voltaic) cells: spontaneous redox, positive Ecell, negative delta-G.

Electrolytic cells: non-spontaneous, require external voltage, used for plating/purification.
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in electrochemistry?',
            options: [
              'Galvanic (voltaic) cells: spontaneous redox, positive Ecell, negative delta-G',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Galvanic (voltaic) cells: spontaneous redox, positive Ecell, negative delta-G'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions.

**MCAT Tip:** Standard reduction potentials: more positive = stronger oxidizing agent (wants to be reduced).
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to electrochemistry?',
            options: [
              'Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions'
          }
        ]
      }
    },
    {
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Galvanic (voltaic) cells',
            options: ['spontaneous redox, positive Ecell, negative delta-G.', 'Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions.', 'Standard reduction potentials: more positive = stronger oxidizing agent (wants to be reduced).', 'non-spontaneous, require external voltage, used for plating/purification.']
          },
          {
            label: 'Electrolytic cells',
            options: ['Standard reduction potentials: more positive = stronger oxidizing agent (wants to be reduced).', 'non-spontaneous, require external voltage, used for plating/purification.', 'spontaneous redox, positive Ecell, negative delta-G.', 'Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions.']
          },
          {
            label: 'Key Insight',
            options: ['non-spontaneous, require external voltage, used for plating/purification.', 'Standard reduction potentials: more positive = stronger oxidizing agent (wants to be reduced).', 'Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions.', 'spontaneous redox, positive Ecell, negative delta-G.']
          }
        ],
        correctAnswers: ['spontaneous redox, positive Ecell, negative delta-G.', 'non-spontaneous, require external voltage, used for plating/purification.', 'Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions.'],
        hint1: 'Think about what each concept specifically describes in Electrochemistry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Electrochemistry describes a specific idea. Galvanic (voltaic) cells: spontaneous redox, positive Ecell, negative delta-G. Electrolytic cells: non-spontaneous, require external voltage, used for plating/purification. Key Insight: Nernst equation: E = E0 - (RT/nF)*ln(Q) — adjusts cell potential for non-standard conditions.'
      }
    }
  ]
}
