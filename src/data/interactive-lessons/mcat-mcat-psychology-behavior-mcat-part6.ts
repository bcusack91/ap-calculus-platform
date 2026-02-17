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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Big Five (OCEAN)',
            options: ['id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.).', 'Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.', 'openness, conscientiousness, extraversion, agreeableness, neuroticism.', 'DSM-5 classification: categorical diagnosis based on symptom criteria and duration.']
          },
          {
            label: 'Freud',
            options: ['Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.', 'openness, conscientiousness, extraversion, agreeableness, neuroticism.', 'DSM-5 classification: categorical diagnosis based on symptom criteria and duration.', 'id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.).']
          },
          {
            label: 'Key Insight',
            options: ['Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.', 'id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.).', 'openness, conscientiousness, extraversion, agreeableness, neuroticism.', 'DSM-5 classification: categorical diagnosis based on symptom criteria and duration.']
          }
        ],
        correctAnswers: ['openness, conscientiousness, extraversion, agreeableness, neuroticism.', 'id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.).', 'Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.'],
        hint1: 'Think about what each concept specifically describes in Personality & Disorders.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Personality & Disorders describes a specific idea. Big Five (OCEAN): openness, conscientiousness, extraversion, agreeableness, neuroticism. Freud: id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.). Key Insight: Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.'
      }
    }
  ]
}
