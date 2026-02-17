export const mcatPsychBehavPart7Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Big Five (OCEAN): openness, conscientiousness, extraversion, agreeableness, neuroticism.

Freud: id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.).
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
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
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.

**MCAT Tip:** DSM-5 classification: categorical diagnosis based on symptom criteria and duration.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Psych/Soc related to review & mcat practice?',
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
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Big Five (OCEAN)',
            options: ['Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.', 'openness, conscientiousness, extraversion, agreeableness, neuroticism.', 'id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.).', 'DSM-5 classification: categorical diagnosis based on symptom criteria and duration.']
          },
          {
            label: 'Freud',
            options: ['openness, conscientiousness, extraversion, agreeableness, neuroticism.', 'DSM-5 classification: categorical diagnosis based on symptom criteria and duration.', 'Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.', 'id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.).']
          },
          {
            label: 'Key Insight',
            options: ['id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.).', 'DSM-5 classification: categorical diagnosis based on symptom criteria and duration.', 'Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.', 'openness, conscientiousness, extraversion, agreeableness, neuroticism.']
          }
        ],
        correctAnswers: ['openness, conscientiousness, extraversion, agreeableness, neuroticism.', 'id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.).', 'Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Big Five (OCEAN): openness, conscientiousness, extraversion, agreeableness, neuroticism. Freud: id (pleasure), ego (reality), superego (morality); defense mechanisms (repression, projection, etc.). Key Insight: Psychological disorders: anxiety, mood, psychotic, personality, trauma-related.'
      }
    }
  ]
}
