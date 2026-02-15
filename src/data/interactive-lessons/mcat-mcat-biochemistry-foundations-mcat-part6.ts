export const mcatBiochemPart6Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Bioenergetics & ATP

**Part 6 of 7 — Bioenergetics & ATP**

Oxidative phosphorylation: ETC creates proton gradient; ATP synthase uses it to make ATP.

NADH yields ~2.5 ATP; FADH2 yields ~1.5 ATP (via Complex I and II respectively).
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
            question: 'Which of the following best describes a key concept in bioenergetics & atp?',
            options: [
              'Oxidative phosphorylation: ETC creates proton gradient; ATP synthase uses it to make ATP',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Oxidative phosphorylation: ETC creates proton gradient; ATP synthase uses it to make ATP'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).

**MCAT Tip:** Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.
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
            question: 'What is an important principle for MCAT Chem/Phys related to bioenergetics & atp?',
            options: [
              'Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC)'
          }
        ]
      }
    },
    {
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Bioenergetics & ATP:',
            options: ['Oxidative phosphorylation: ETC creates proton gradient; ATP ', 'NADH yields ~2.5 ATP; FADH2 yields ~1.5 ATP (via Complex I a', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Complete glucose oxidation: ~30-32 ATP total (glycolysis + K', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Oxidative phosphorylation: ETC creates proton gradient; ATP ', 'Complete glucose oxidation: ~30-32 ATP total (glycolysis + K'],
        hint1: 'Think about bioenergetics & atp',
        hint2: 'Consider the MCAT application',
        explanation: 'Oxidative phosphorylation: ETC creates proton gradient; ATP synthase uses it to make ATP. Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).'
      }
    }
  ]
}
