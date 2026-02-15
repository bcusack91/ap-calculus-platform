export const mcatCarsReasonPart4Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Evaluating Evidence

**Part 4 of 7 — Evaluating Evidence**

Evaluate the quality of evidence: anecdotal vs. empirical, sample size, controls.

Distinguish facts from opinions — the MCAT will test whether you can tell the difference.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in evaluating evidence?',
            options: [
              'Evaluate the quality of evidence: anecdotal vs. empirical, sample size, controls',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Evaluate the quality of evidence: anecdotal vs. empirical, sample size, controls'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look for cherry-picking: does the author ignore contradictory evidence?.

**MCAT Tip:** Consider alternative explanations for the data presented.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to evaluating evidence?',
            options: [
              'Look for cherry-picking: does the author ignore contradictory evidence?',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Look for cherry-picking: does the author ignore contradictory evidence?'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Evaluating Evidence:',
            options: ['Evaluate the quality of evidence: anecdotal vs. empirical, s', 'Distinguish facts from opinions — the MCAT will test whether', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Look for cherry-picking: does the author ignore contradictor', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Evaluate the quality of evidence: anecdotal vs. empirical, s', 'Look for cherry-picking: does the author ignore contradictor'],
        hint1: 'Think about evaluating evidence',
        hint2: 'Consider the MCAT application',
        explanation: 'Evaluate the quality of evidence: anecdotal vs. empirical, sample size, controls. Look for cherry-picking: does the author ignore contradictory evidence?.'
      }
    }
  ]
}
