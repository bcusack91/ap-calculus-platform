export const mcatBiochemPart7Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Oxidative phosphorylation: ETC creates proton gradient; ATP synthase uses it to make ATP.

NADH yields ~2.5 ATP; FADH2 yields ~1.5 ATP (via Complex I and II respectively).
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
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
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).

**MCAT Tip:** Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to review & mcat practice?',
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
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Oxidative phosphorylation',
            options: ['ETC creates proton gradient; ATP synthase uses it to make ATP.', 'Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.', 'NADH yields ~2.5 ATP; FADH2 yields ~1.5 ATP (via Complex I and II respectively).', 'Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).']
          },
          {
            label: 'Key Insight',
            options: ['NADH yields ~2.5 ATP; FADH2 yields ~1.5 ATP (via Complex I and II respectively).', 'ETC creates proton gradient; ATP synthase uses it to make ATP.', 'Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).', 'Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.']
          },
          {
            label: 'MCAT Tip',
            options: ['Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.', 'ETC creates proton gradient; ATP synthase uses it to make ATP.', 'NADH yields ~2.5 ATP; FADH2 yields ~1.5 ATP (via Complex I and II respectively).', 'Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).']
          }
        ],
        correctAnswers: ['ETC creates proton gradient; ATP synthase uses it to make ATP.', 'Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC).', 'Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Oxidative phosphorylation: ETC creates proton gradient; ATP synthase uses it to make ATP. Key Insight: Complete glucose oxidation: ~30-32 ATP total (glycolysis + Krebs + ETC). MCAT Tip: Chemiosmotic theory (Peter Mitchell): proton motive force drives ATP synthesis across inner mitochondrial membrane.'
      }
    }
  ]
}
