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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Host-Pathogen Interactions:',
            options: ['Virulence factors: toxins (exotoxins, endotoxins), adhesins,', 'Exotoxins: secreted proteins (botulism, cholera, diphtheria)', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Koch postulates: criteria to establish a microorganism as th', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Virulence factors: toxins (exotoxins, endotoxins), adhesins,', 'Koch postulates: criteria to establish a microorganism as th'],
        hint1: 'Think about host-pathogen interactions',
        hint2: 'Consider the MCAT application',
        explanation: 'Virulence factors: toxins (exotoxins, endotoxins), adhesins, capsule, biofilm. Koch postulates: criteria to establish a microorganism as the cause of a disease.'
      }
    }
  ]
}
