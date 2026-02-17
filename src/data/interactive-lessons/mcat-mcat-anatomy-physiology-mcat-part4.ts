export const mcatAnatPhysPart4Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Lymphatic & Immune

**Part 4 of 7 — Lymphatic & Immune**

Lymphatic system: returns interstitial fluid to blood; lymph nodes filter pathogens.

Spleen: filters blood, recycles old RBCs, reservoir of monocytes and platelets.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in lymphatic & immune?',
            options: [
              'Lymphatic system: returns interstitial fluid to blood; lymph nodes filter pathogens',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Lymphatic system: returns interstitial fluid to blood; lymph nodes filter pathogens'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Thymus: T cell maturation; Bone marrow: B cell maturation.

**MCAT Tip:** Vaccines: expose immune system to antigen, generating memory cells without disease.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to lymphatic & immune?',
            options: [
              'Thymus: T cell maturation; Bone marrow: B cell maturation',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Thymus: T cell maturation; Bone marrow: B cell maturation'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lymphatic system',
            options: ['Vaccines: expose immune system to antigen, generating memory cells without disease.', 'Thymus: T cell maturation; Bone marrow: B cell maturation.', 'returns interstitial fluid to blood; lymph nodes filter pathogens.', 'filters blood, recycles old RBCs, reservoir of monocytes and platelets.']
          },
          {
            label: 'Spleen',
            options: ['Vaccines: expose immune system to antigen, generating memory cells without disease.', 'filters blood, recycles old RBCs, reservoir of monocytes and platelets.', 'Thymus: T cell maturation; Bone marrow: B cell maturation.', 'returns interstitial fluid to blood; lymph nodes filter pathogens.']
          },
          {
            label: 'Key Insight',
            options: ['filters blood, recycles old RBCs, reservoir of monocytes and platelets.', 'Thymus: T cell maturation; Bone marrow: B cell maturation.', 'returns interstitial fluid to blood; lymph nodes filter pathogens.', 'Vaccines: expose immune system to antigen, generating memory cells without disease.']
          }
        ],
        correctAnswers: ['returns interstitial fluid to blood; lymph nodes filter pathogens.', 'filters blood, recycles old RBCs, reservoir of monocytes and platelets.', 'Thymus: T cell maturation; Bone marrow: B cell maturation.'],
        hint1: 'Think about what each concept specifically describes in Lymphatic & Immune.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Lymphatic & Immune describes a specific idea. Lymphatic system: returns interstitial fluid to blood; lymph nodes filter pathogens. Spleen: filters blood, recycles old RBCs, reservoir of monocytes and platelets. Key Insight: Thymus: T cell maturation; Bone marrow: B cell maturation.'
      }
    }
  ]
}
