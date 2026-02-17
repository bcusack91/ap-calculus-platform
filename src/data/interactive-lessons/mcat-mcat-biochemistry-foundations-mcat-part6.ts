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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Oxidative phosphorylation',
            options: ['NADH yields ~2.5 ATP; FADH2 yields ~1.5 ATP (via Complex I and II respectively).', 'Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).', 'ETC creates proton gradient; ATP synthase uses it to make ATP.', 'Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.']
          },
          {
            label: 'Key Insight',
            options: ['ETC creates proton gradient; ATP synthase uses it to make ATP.', 'Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.', 'Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).', 'NADH yields ~2.5 ATP; FADH2 yields ~1.5 ATP (via Complex I and II respectively).']
          },
          {
            label: 'MCAT Tip',
            options: ['ETC creates proton gradient; ATP synthase uses it to make ATP.', 'Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.', 'NADH yields ~2.5 ATP; FADH2 yields ~1.5 ATP (via Complex I and II respectively).', 'Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).']
          }
        ],
        correctAnswers: ['ETC creates proton gradient; ATP synthase uses it to make ATP.', 'Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).', 'Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.'],
        hint1: 'Think about what each concept specifically describes in Bioenergetics & ATP.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Bioenergetics & ATP describes a specific idea. Oxidative phosphorylation: ETC creates proton gradient; ATP synthase uses it to make ATP. Key Insight: Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC). MCAT Tip: Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.'
      }
    }
  ]
}
