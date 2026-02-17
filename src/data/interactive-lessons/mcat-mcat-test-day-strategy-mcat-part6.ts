export const mcatTestDayPart6Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Score Goals & Applications

**Part 6 of 7 — Score Goals & Applications**

Competitive scores: 510+ for MD, 505+ for DO, 515+ for top-25 schools.

Retake policy: can take 3 times per year, 4 times in 2 years, 7 times lifetime.
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
            question: 'Which of the following best describes a key concept in score goals & applications?',
            options: [
              'Competitive scores: 510+ for MD, 505+ for DO, 515+ for top-25 schools',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Competitive scores: 510+ for MD, 505+ for DO, 515+ for top-25 schools'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Schools see all scores — aim to take it once and do well.

**MCAT Tip:** Balanced scores matter: a 128 in each section (512) is generally viewed more favorably than a 132 + 124 + 128 + 128 (512).
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
            question: 'What is an important principle for MCAT Strategy related to score goals & applications?',
            options: [
              'Schools see all scores — aim to take it once and do well',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Schools see all scores — aim to take it once and do well'
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
            label: 'Competitive scores',
            options: ['Balanced scores matter: a 128 in each section (512) is generally viewed more favorably than a 132 + 124 + 128 + 128 (512).', 'Schools see all scores — aim to take it once and do well.', 'can take 3 times per year, 4 times in 2 years, 7 times lifetime.', '510+ for MD, 505+ for DO, 515+ for top-25 schools.']
          },
          {
            label: 'Retake policy',
            options: ['Balanced scores matter: a 128 in each section (512) is generally viewed more favorably than a 132 + 124 + 128 + 128 (512).', '510+ for MD, 505+ for DO, 515+ for top-25 schools.', 'can take 3 times per year, 4 times in 2 years, 7 times lifetime.', 'Schools see all scores — aim to take it once and do well.']
          },
          {
            label: 'Key Insight',
            options: ['Balanced scores matter: a 128 in each section (512) is generally viewed more favorably than a 132 + 124 + 128 + 128 (512).', 'Schools see all scores — aim to take it once and do well.', '510+ for MD, 505+ for DO, 515+ for top-25 schools.', 'can take 3 times per year, 4 times in 2 years, 7 times lifetime.']
          }
        ],
        correctAnswers: ['510+ for MD, 505+ for DO, 515+ for top-25 schools.', 'can take 3 times per year, 4 times in 2 years, 7 times lifetime.', 'Schools see all scores — aim to take it once and do well.'],
        hint1: 'Think about what each concept specifically describes in Score Goals & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Score Goals & Applications describes a specific idea. Competitive scores: 510+ for MD, 505+ for DO, 515+ for top-25 schools. Retake policy: can take 3 times per year, 4 times in 2 years, 7 times lifetime. Key Insight: Schools see all scores — aim to take it once and do well.'
      }
    }
  ]
}
