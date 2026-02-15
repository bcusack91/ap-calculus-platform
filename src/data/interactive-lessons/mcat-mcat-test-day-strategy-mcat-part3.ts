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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Section-by-Section Strategy:',
            options: ['Chem/Phys: strong on calculations — practice dimensional ana', 'CARS: practice daily — 1 passage per day minimum; focus on t', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Bio/Biochem: most content-heavy section — amino acids, metab', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Chem/Phys: strong on calculations — practice dimensional ana', 'Bio/Biochem: most content-heavy section — amino acids, metab'],
        hint1: 'Think about section-by-section strategy',
        hint2: 'Consider the MCAT application',
        explanation: 'Chem/Phys: strong on calculations — practice dimensional analysis and unit conversion. Bio/Biochem: most content-heavy section — amino acids, metabolism, and organ systems are highest yield.'
      }
    }
  ]
}
