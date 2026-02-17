export const mcatMicroPart7Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Virulence factors: toxins (exotoxins, endotoxins), adhesins, capsule, biofilm.

Exotoxins: secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane.
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
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Koch postulates: criteria to establish a microorganism as the cause of a disease.

**MCAT Tip:** Immune evasion: antigenic variation, intracellular hiding, capsule to resist phagocytosis.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to review & mcat practice?',
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
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Virulence factors',
            options: ['secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane.', 'toxins (exotoxins, endotoxins), adhesins, capsule, biofilm.', 'Immune evasion: antigenic variation, intracellular hiding, capsule to resist phagocytosis.', 'Koch postulates: criteria to establish a microorganism as the cause of a disease.']
          },
          {
            label: 'Exotoxins',
            options: ['toxins (exotoxins, endotoxins), adhesins, capsule, biofilm.', 'secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane.', 'Koch postulates: criteria to establish a microorganism as the cause of a disease.', 'Immune evasion: antigenic variation, intracellular hiding, capsule to resist phagocytosis.']
          },
          {
            label: 'Key Insight',
            options: ['Koch postulates: criteria to establish a microorganism as the cause of a disease.', 'Immune evasion: antigenic variation, intracellular hiding, capsule to resist phagocytosis.', 'toxins (exotoxins, endotoxins), adhesins, capsule, biofilm.', 'secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane.']
          }
        ],
        correctAnswers: ['toxins (exotoxins, endotoxins), adhesins, capsule, biofilm.', 'secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane.', 'Koch postulates: criteria to establish a microorganism as the cause of a disease.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Virulence factors: toxins (exotoxins, endotoxins), adhesins, capsule, biofilm. Exotoxins: secreted proteins (botulism, cholera, diphtheria); Endotoxins: lipid A of Gram-negative outer membrane. Key Insight: Koch postulates: criteria to establish a microorganism as the cause of a disease.'
      }
    }
  ]
}
