export const mcatSociologyPart1Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Sociology

**Part 1 of 7 — Social Structure & Stratification**

Social stratification: unequal distribution of resources based on class, race, gender.

Social class: upper, middle, working, lower — defined by income, education, occupation, and wealth.
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
            question: 'Which of the following best describes a key concept in social structure & stratification?',
            options: [
              'Social stratification: unequal distribution of resources based on class, race, gender',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Social stratification: unequal distribution of resources based on class, race, gender'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Social mobility: intragenerational (within lifetime) vs intergenerational (across generations).

**MCAT Tip:** Intersectionality: race, class, gender, and other identities overlap to create unique experiences.
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
            question: 'What is an important principle for MCAT Psych/Soc related to social structure & stratification?',
            options: [
              'Social mobility: intragenerational (within lifetime) vs intergenerational (across generations)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Social mobility: intragenerational (within lifetime) vs intergenerational (across generations)'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Social Structure & Stratification:',
            options: ['Social stratification: unequal distribution of resources bas', 'Social class: upper, middle, working, lower — defined by inc', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Social mobility: intragenerational (within lifetime) vs inte', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Social stratification: unequal distribution of resources bas', 'Social mobility: intragenerational (within lifetime) vs inte'],
        hint1: 'Think about social structure & stratification',
        hint2: 'Consider the MCAT application',
        explanation: 'Social stratification: unequal distribution of resources based on class, race, gender. Social mobility: intragenerational (within lifetime) vs intergenerational (across generations).'
      }
    }
  ]
}
