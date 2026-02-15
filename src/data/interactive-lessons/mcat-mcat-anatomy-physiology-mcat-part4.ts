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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Lymphatic & Immune:',
            options: ['Lymphatic system: returns interstitial fluid to blood; lymph', 'Spleen: filters blood, recycles old RBCs, reservoir of monoc', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Thymus: T cell maturation; Bone marrow: B cell maturation', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Lymphatic system: returns interstitial fluid to blood; lymph', 'Thymus: T cell maturation; Bone marrow: B cell maturation'],
        hint1: 'Think about lymphatic & immune',
        hint2: 'Consider the MCAT application',
        explanation: 'Lymphatic system: returns interstitial fluid to blood; lymph nodes filter pathogens. Thymus: T cell maturation; Bone marrow: B cell maturation.'
      }
    }
  ]
}
