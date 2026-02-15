export const mcatPsychBehavPart6Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Personality & Disorders

**Part 6 of 7 — Personality & Disorders**

Big Five (OCEAN): openness, conscientiousness, extraversion, agreeableness, neuroticism.

Freud: id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.).
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
            question: 'Which of the following best describes a key concept in personality & disorders?',
            options: [
              'Big Five (OCEAN): openness, conscientiousness, extraversion, agreeableness, neuroticism',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Big Five (OCEAN): openness, conscientiousness, extraversion, agreeableness, neuroticism'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.

**MCAT Tip:** DSM-5 classification: categorical diagnosis based on symptom criteria and duration.
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
            question: 'What is an important principle for MCAT Psych/Soc related to personality & disorders?',
            options: [
              'Psychological disorders: anxiety, mood, psychotic, personality, trauma-related',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Psychological disorders: anxiety, mood, psychotic, personality, trauma-related'
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
            label: 'Core concept for Personality & Disorders:',
            options: ['Big Five (OCEAN): openness, conscientiousness, extraversion,', 'Freud: id (pleasure), ego (reality), superego (morality); de', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Psychological disorders: anxiety, mood, psychotic, personali', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Big Five (OCEAN): openness, conscientiousness, extraversion,', 'Psychological disorders: anxiety, mood, psychotic, personali'],
        hint1: 'Think about personality & disorders',
        hint2: 'Consider the MCAT application',
        explanation: 'Big Five (OCEAN): openness, conscientiousness, extraversion, agreeableness, neuroticism. Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.'
      }
    }
  ]
}
