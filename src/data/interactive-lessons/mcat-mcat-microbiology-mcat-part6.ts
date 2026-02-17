export const mcatMicroPart6Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Host-Pathogen Interactions

**Part 6 of 7 — Host-Pathogen Interactions**

Virulence factors: toxins (exotoxins, endotoxins), adhesins, capsule, biofilm.

Exotoxins: secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane.
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
            question: 'Which of the following best describes a key concept in host-pathogen interactions?',
            options: [
              'Virulence factors: toxins (exotoxins, endotoxins), adhesins, capsule, biofilm',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Virulence factors: toxins (exotoxins, endotoxins), adhesins, capsule, biofilm'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Koch postulates: criteria to establish a microorganism as the cause of a disease.

**MCAT Tip:** Immune evasion: antigenic variation, intracellular hiding, capsule to resist phagocytosis.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to host-pathogen interactions?',
            options: [
              'Koch postulates: criteria to establish a microorganism as the cause of a disease',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Koch postulates: criteria to establish a microorganism as the cause of a disease'
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
            label: 'Virulence factors',
            options: ['Koch postulates: criteria to establish a microorganism as the cause of a disease.', 'secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane.', 'toxins (exotoxins, endotoxins), adhesins, capsule, biofilm.', 'Immune evasion: antigenic variation, intracellular hiding, capsule to resist phagocytosis.']
          },
          {
            label: 'Exotoxins',
            options: ['toxins (exotoxins, endotoxins), adhesins, capsule, biofilm.', 'secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane.', 'Immune evasion: antigenic variation, intracellular hiding, capsule to resist phagocytosis.', 'Koch postulates: criteria to establish a microorganism as the cause of a disease.']
          },
          {
            label: 'Key Insight',
            options: ['secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane.', 'Immune evasion: antigenic variation, intracellular hiding, capsule to resist phagocytosis.', 'toxins (exotoxins, endotoxins), adhesins, capsule, biofilm.', 'Koch postulates: criteria to establish a microorganism as the cause of a disease.']
          }
        ],
        correctAnswers: ['toxins (exotoxins, endotoxins), adhesins, capsule, biofilm.', 'secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane.', 'Koch postulates: criteria to establish a microorganism as the cause of a disease.'],
        hint1: 'Think about what each concept specifically describes in Host-Pathogen Interactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Host-Pathogen Interactions describes a specific idea. Virulence factors: toxins (exotoxins, endotoxins), adhesins, capsule, biofilm. Exotoxins: secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane. Key Insight: Koch postulates: criteria to establish a microorganism as the cause of a disease.'
      }
    }
  ]
}
