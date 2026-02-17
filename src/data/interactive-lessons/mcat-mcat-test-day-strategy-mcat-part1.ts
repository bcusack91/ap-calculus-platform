export const mcatTestDayPart1Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Test Day Strategy

**Part 1 of 7 — MCAT Format & Scoring**

4 sections: Chem/Phys (59Q, 95 min), CARS (53Q, 90 min), Bio/Biochem (59Q, 95 min), Psych/Soc (59Q, 95 min).

Total: 230 questions in ~6 hours 15 minutes (with breaks).
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in mcat format & scoring?',
            options: [
              '4 sections: Chem/Phys (59Q, 95 min), CARS (53Q, 90 min), Bio/Biochem (59Q, 95 min), Psych/Soc (59Q, 95 min)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: '4 sections: Chem/Phys (59Q, 95 min), CARS (53Q, 90 min), Bio/Biochem (59Q, 95 min), Psych/Soc (59Q, 95 min)'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Scoring: each section 118-132, total 472-528; median ~500.

**MCAT Tip:** Optional breaks: 10 min after sections 1 and 3; 30-min lunch break after section 2.
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Strategy related to mcat format & scoring?',
            options: [
              'Scoring: each section 118-132, total 472-528; median ~500',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Scoring: each section 118-132, total 472-528; median ~500'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '4 sections',
            options: ['230 questions in ~6 hours 15 minutes (with breaks).', 'Optional breaks: 10 min after sections 1 and 3; 30-min lunch break after section 2.', 'Scoring: each section 118-132, total 472-528; median ~500.', 'Chem/Phys (59Q, 95 min), CARS (53Q, 90 min), Bio/Biochem (59Q, 95 min), Psych/Soc (59Q, 95 min).']
          },
          {
            label: 'Total',
            options: ['230 questions in ~6 hours 15 minutes (with breaks).', 'Chem/Phys (59Q, 95 min), CARS (53Q, 90 min), Bio/Biochem (59Q, 95 min), Psych/Soc (59Q, 95 min).', 'Scoring: each section 118-132, total 472-528; median ~500.', 'Optional breaks: 10 min after sections 1 and 3; 30-min lunch break after section 2.']
          },
          {
            label: 'Key Insight',
            options: ['Optional breaks: 10 min after sections 1 and 3; 30-min lunch break after section 2.', 'Chem/Phys (59Q, 95 min), CARS (53Q, 90 min), Bio/Biochem (59Q, 95 min), Psych/Soc (59Q, 95 min).', '230 questions in ~6 hours 15 minutes (with breaks).', 'Scoring: each section 118-132, total 472-528; median ~500.']
          }
        ],
        correctAnswers: ['Chem/Phys (59Q, 95 min), CARS (53Q, 90 min), Bio/Biochem (59Q, 95 min), Psych/Soc (59Q, 95 min).', '230 questions in ~6 hours 15 minutes (with breaks).', 'Scoring: each section 118-132, total 472-528; median ~500.'],
        hint1: 'Think about what each concept specifically describes in Test Day Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Test Day Strategy describes a specific idea. 4 sections: Chem/Phys (59Q, 95 min), CARS (53Q, 90 min), Bio/Biochem (59Q, 95 min), Psych/Soc (59Q, 95 min). Total: 230 questions in ~6 hours 15 minutes (with breaks). Key Insight: Scoring: each section 118-132, total 472-528; median ~500.'
      }
    }
  ]
}
