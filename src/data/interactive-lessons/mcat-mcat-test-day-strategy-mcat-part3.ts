export const mcatTestDayPart3Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Section-by-Section Strategy

**Part 3 of 7 — Section-by-Section Strategy**

Chem/Phys: strong on calculations — practice dimensional analysis and unit conversion.

CARS: practice daily — 1 passage per day minimum; focus on timing and accuracy.
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in section-by-section strategy?',
            options: [
              'Chem/Phys: strong on calculations — practice dimensional analysis and unit conversion',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Chem/Phys: strong on calculations — practice dimensional analysis and unit conversion'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Bio/Biochem: most content-heavy section — amino acids, metabolism, and organ systems are highest yield.

**MCAT Tip:** Psych/Soc: often the easiest to improve — terminology-heavy, less application.
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Strategy related to section-by-section strategy?',
            options: [
              'Bio/Biochem: most content-heavy section — amino acids, metabolism, and organ systems are highest yield',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Bio/Biochem: most content-heavy section — amino acids, metabolism, and organ systems are highest yield'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chem/Phys',
            options: ['strong on calculations — practice dimensional analysis and unit conversion.', 'practice daily — 1 passage per day minimum; focus on timing and accuracy.', 'Bio/Biochem: most content-heavy section — amino acids, metabolism, and organ systems are highest yield.', 'Psych/Soc: often the easiest to improve — terminology-heavy, less application.']
          },
          {
            label: 'CARS',
            options: ['strong on calculations — practice dimensional analysis and unit conversion.', 'Bio/Biochem: most content-heavy section — amino acids, metabolism, and organ systems are highest yield.', 'Psych/Soc: often the easiest to improve — terminology-heavy, less application.', 'practice daily — 1 passage per day minimum; focus on timing and accuracy.']
          },
          {
            label: 'Key Insight',
            options: ['Psych/Soc: often the easiest to improve — terminology-heavy, less application.', 'Bio/Biochem: most content-heavy section — amino acids, metabolism, and organ systems are highest yield.', 'strong on calculations — practice dimensional analysis and unit conversion.', 'practice daily — 1 passage per day minimum; focus on timing and accuracy.']
          }
        ],
        correctAnswers: ['strong on calculations — practice dimensional analysis and unit conversion.', 'practice daily — 1 passage per day minimum; focus on timing and accuracy.', 'Bio/Biochem: most content-heavy section — amino acids, metabolism, and organ systems are highest yield.'],
        hint1: 'Think about what each concept specifically describes in Section-by-Section Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Section-by-Section Strategy describes a specific idea. Chem/Phys: strong on calculations — practice dimensional analysis and unit conversion. CARS: practice daily — 1 passage per day minimum; focus on timing and accuracy. Key Insight: Bio/Biochem: most content-heavy section — amino acids, metabolism, and organ systems are highest yield.'
      }
    }
  ]
}
