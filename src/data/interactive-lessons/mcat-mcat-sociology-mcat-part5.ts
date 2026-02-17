export const mcatSociologyPart5Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Health Disparities

**Part 5 of 7 — Health Disparities**

Social determinants of health: income, education, race, environment, access to healthcare.

Health disparities: unequal health outcomes across socioeconomic and demographic groups.
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
            question: 'Which of the following best describes a key concept in health disparities?',
            options: [
              'Social determinants of health: income, education, race, environment, access to healthcare',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Social determinants of health: income, education, race, environment, access to healthcare'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Sick role (Parsons): society expects sick people to seek help and try to get well.

**MCAT Tip:** Healthcare access: uninsured populations have worse outcomes; preventive care reduces disparities.
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
            question: 'What is an important principle for MCAT Psych/Soc related to health disparities?',
            options: [
              'Sick role (Parsons): society expects sick people to seek help and try to get well',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Sick role (Parsons): society expects sick people to seek help and try to get well'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Social determinants of health',
            options: ['income, education, race, environment, access to healthcare.', 'Healthcare access: uninsured populations have worse outcomes; preventive care reduces disparities.', 'Sick role (Parsons): society expects sick people to seek help and try to get well.', 'unequal health outcomes across socioeconomic and demographic groups.']
          },
          {
            label: 'Health disparities',
            options: ['income, education, race, environment, access to healthcare.', 'Healthcare access: uninsured populations have worse outcomes; preventive care reduces disparities.', 'unequal health outcomes across socioeconomic and demographic groups.', 'Sick role (Parsons): society expects sick people to seek help and try to get well.']
          },
          {
            label: 'Key Insight',
            options: ['Healthcare access: uninsured populations have worse outcomes; preventive care reduces disparities.', 'unequal health outcomes across socioeconomic and demographic groups.', 'Sick role (Parsons): society expects sick people to seek help and try to get well.', 'income, education, race, environment, access to healthcare.']
          }
        ],
        correctAnswers: ['income, education, race, environment, access to healthcare.', 'unequal health outcomes across socioeconomic and demographic groups.', 'Sick role (Parsons): society expects sick people to seek help and try to get well.'],
        hint1: 'Think about what each concept specifically describes in Health Disparities.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Health Disparities describes a specific idea. Social determinants of health: income, education, race, environment, access to healthcare. Health disparities: unequal health outcomes across socioeconomic and demographic groups. Key Insight: Sick role (Parsons): society expects sick people to seek help and try to get well.'
      }
    }
  ]
}
