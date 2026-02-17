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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Evaluate the quality of evidence',
            options: ['Look for cherry-picking: does the author ignore contradictory evidence?.', 'Distinguish facts from opinions — the MCAT will test whether you can tell the difference.', 'anecdotal vs. empirical, sample size, controls.', 'Consider alternative explanations for the data presented.']
          },
          {
            label: 'Key Insight',
            options: ['Distinguish facts from opinions — the MCAT will test whether you can tell the difference.', 'Look for cherry-picking: does the author ignore contradictory evidence?.', 'Consider alternative explanations for the data presented.', 'anecdotal vs. empirical, sample size, controls.']
          },
          {
            label: 'MCAT Tip',
            options: ['Distinguish facts from opinions — the MCAT will test whether you can tell the difference.', 'anecdotal vs. empirical, sample size, controls.', 'Look for cherry-picking: does the author ignore contradictory evidence?.', 'Consider alternative explanations for the data presented.']
          }
        ],
        correctAnswers: ['anecdotal vs. empirical, sample size, controls.', 'Look for cherry-picking: does the author ignore contradictory evidence?.', 'Consider alternative explanations for the data presented.'],
        hint1: 'Think about what each concept specifically describes in Evaluating Evidence.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Evaluating Evidence describes a specific idea. Evaluate the quality of evidence: anecdotal vs. empirical, sample size, controls. Key Insight: Look for cherry-picking: does the author ignore contradictory evidence?. MCAT Tip: Consider alternative explanations for the data presented.'
      }
    }
  ]
}
