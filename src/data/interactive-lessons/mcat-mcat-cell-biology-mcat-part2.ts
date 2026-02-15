export const mcatCellBioPart2Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Membrane Transport

**Part 2 of 7 — Membrane Transport**

Passive transport: diffusion, osmosis, facilitated diffusion — no energy required, down concentration gradient.

Active transport: Na+/K+ ATPase (3 Na+ out, 2 K+ in per ATP), against gradient.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in membrane transport?',
            options: [
              'Passive transport: diffusion, osmosis, facilitated diffusion — no energy required, down concentration gradient',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Passive transport: diffusion, osmosis, facilitated diffusion — no energy required, down concentration gradient'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Endocytosis: phagocytosis (solids), pinocytosis (fluids), receptor-mediated (specific molecules).

**MCAT Tip:** Exocytosis: vesicles fuse with membrane to release contents (neurotransmitters, hormones).
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to membrane transport?',
            options: [
              'Endocytosis: phagocytosis (solids), pinocytosis (fluids), receptor-mediated (specific molecules)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Endocytosis: phagocytosis (solids), pinocytosis (fluids), receptor-mediated (specific molecules)'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Membrane Transport:',
            options: ['Passive transport: diffusion, osmosis, facilitated diffusion', 'Active transport: Na+/K+ ATPase (3 Na+ out, 2 K+ in per ATP)', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Endocytosis: phagocytosis (solids), pinocytosis (fluids), re', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Passive transport: diffusion, osmosis, facilitated diffusion', 'Endocytosis: phagocytosis (solids), pinocytosis (fluids), re'],
        hint1: 'Think about membrane transport',
        hint2: 'Consider the MCAT application',
        explanation: 'Passive transport: diffusion, osmosis, facilitated diffusion — no energy required, down concentration gradient. Endocytosis: phagocytosis (solids), pinocytosis (fluids), receptor-mediated (specific molecules).'
      }
    }
  ]
}
