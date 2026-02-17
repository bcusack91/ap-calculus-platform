export const mcatTestDayPart7Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Competitive scores: 510+ for MD, 505+ for DO, 515+ for top-25 schools.

Retake policy: can take 3 times per year, 4 times in 2 years, 7 times lifetime.
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
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Schools see all scores — aim to take it once and do well.

**MCAT Tip:** Balanced scores matter: a 128 in each section (512) is generally viewed more favorably than a 132 + 124 + 128 + 128 (512).
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
            question: 'What is an important principle for MCAT Strategy related to review & mcat practice?',
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
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Competitive scores',
            options: ['can take 3 times per year, 4 times in 2 years, 7 times lifetime.', 'Schools see all scores — aim to take it once and do well.', '510+ for MD, 505+ for DO, 515+ for top-25 schools.', 'Balanced scores matter: a 128 in each section (512) is generally viewed more favorably than a 132 + 124 + 128 + 128 (512).']
          },
          {
            label: 'Retake policy',
            options: ['510+ for MD, 505+ for DO, 515+ for top-25 schools.', 'Schools see all scores — aim to take it once and do well.', 'can take 3 times per year, 4 times in 2 years, 7 times lifetime.', 'Balanced scores matter: a 128 in each section (512) is generally viewed more favorably than a 132 + 124 + 128 + 128 (512).']
          },
          {
            label: 'Key Insight',
            options: ['510+ for MD, 505+ for DO, 515+ for top-25 schools.', 'Schools see all scores — aim to take it once and do well.', 'can take 3 times per year, 4 times in 2 years, 7 times lifetime.', 'Balanced scores matter: a 128 in each section (512) is generally viewed more favorably than a 132 + 124 + 128 + 128 (512).']
          }
        ],
        correctAnswers: ['510+ for MD, 505+ for DO, 515+ for top-25 schools.', 'can take 3 times per year, 4 times in 2 years, 7 times lifetime.', 'Schools see all scores — aim to take it once and do well.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Competitive scores: 510+ for MD, 505+ for DO, 515+ for top-25 schools. Retake policy: can take 3 times per year, 4 times in 2 years, 7 times lifetime. Key Insight: Schools see all scores — aim to take it once and do well.'
      }
    }
  ]
}
