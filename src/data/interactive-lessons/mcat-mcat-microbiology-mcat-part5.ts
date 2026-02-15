export const mcatMicroPart5Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Antimicrobial Agents

**Part 5 of 7 — Antimicrobial Agents**

Antibiotics: target cell wall (penicillin), protein synthesis (tetracycline), DNA replication (fluoroquinolones).

Antivirals: target viral entry, replication, or assembly (e.g., acyclovir, protease inhibitors).
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in antimicrobial agents?',
            options: [
              'Antibiotics: target cell wall (penicillin), protein synthesis (tetracycline), DNA replication (fluoroquinolones)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Antibiotics: target cell wall (penicillin), protein synthesis (tetracycline), DNA replication (fluoroquinolones)'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Antibiotic resistance: mutation or acquired via horizontal gene transfer; a growing global threat.

**MCAT Tip:** Antiseptics (on living tissue) vs disinfectants (on surfaces) vs sterilization (complete elimination).
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to antimicrobial agents?',
            options: [
              'Antibiotic resistance: mutation or acquired via horizontal gene transfer; a growing global threat',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Antibiotic resistance: mutation or acquired via horizontal gene transfer; a growing global threat'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Antimicrobial Agents:',
            options: ['Antibiotics: target cell wall (penicillin), protein synthesi', 'Antivirals: target viral entry, replication, or assembly (e.', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Antibiotic resistance: mutation or acquired via horizontal g', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Antibiotics: target cell wall (penicillin), protein synthesi', 'Antibiotic resistance: mutation or acquired via horizontal g'],
        hint1: 'Think about antimicrobial agents',
        hint2: 'Consider the MCAT application',
        explanation: 'Antibiotics: target cell wall (penicillin), protein synthesis (tetracycline), DNA replication (fluoroquinolones). Antibiotic resistance: mutation or acquired via horizontal gene transfer; a growing global threat.'
      }
    }
  ]
}
