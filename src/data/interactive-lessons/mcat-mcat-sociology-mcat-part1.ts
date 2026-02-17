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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Social stratification',
            options: ['Social mobility: intragenerational (within lifetime) vs intergenerational (across generations).', 'unequal distribution of resources based on class, race, gender.', 'upper, middle, working, lower — defined by income, education, occupation, and wealth.', 'Intersectionality: race, class, gender, and other identities overlap to create unique experiences.']
          },
          {
            label: 'Social class',
            options: ['upper, middle, working, lower — defined by income, education, occupation, and wealth.', 'unequal distribution of resources based on class, race, gender.', 'Intersectionality: race, class, gender, and other identities overlap to create unique experiences.', 'Social mobility: intragenerational (within lifetime) vs intergenerational (across generations).']
          },
          {
            label: 'Key Insight',
            options: ['Intersectionality: race, class, gender, and other identities overlap to create unique experiences.', 'upper, middle, working, lower — defined by income, education, occupation, and wealth.', 'unequal distribution of resources based on class, race, gender.', 'Social mobility: intragenerational (within lifetime) vs intergenerational (across generations).']
          }
        ],
        correctAnswers: ['unequal distribution of resources based on class, race, gender.', 'upper, middle, working, lower — defined by income, education, occupation, and wealth.', 'Social mobility: intragenerational (within lifetime) vs intergenerational (across generations).'],
        hint1: 'Think about what each concept specifically describes in Sociology.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sociology describes a specific idea. Social stratification: unequal distribution of resources based on class, race, gender. Social class: upper, middle, working, lower — defined by income, education, occupation, and wealth. Key Insight: Social mobility: intragenerational (within lifetime) vs intergenerational (across generations).'
      }
    }
  ]
}
