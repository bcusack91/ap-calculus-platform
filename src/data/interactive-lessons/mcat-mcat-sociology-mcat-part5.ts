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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Health Disparities:',
            options: ['Social determinants of health: income, education, race, envi', 'Health disparities: unequal health outcomes across socioecon', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Sick role (Parsons): society expects sick people to seek hel', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Social determinants of health: income, education, race, envi', 'Sick role (Parsons): society expects sick people to seek hel'],
        hint1: 'Think about health disparities',
        hint2: 'Consider the MCAT application',
        explanation: 'Social determinants of health: income, education, race, environment, access to healthcare. Sick role (Parsons): society expects sick people to seek help and try to get well.'
      }
    }
  ]
}
