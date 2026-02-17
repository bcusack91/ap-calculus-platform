export const satTestDayPart4Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-t4-intro',
      type: 'text' as const,
      content: `
# Common Traps & Pitfalls

**Part 4 of 7 — Common Traps & Pitfalls**

Misreading the question: "NOT" or "EXCEPT" or "must be true" vs. "could be true".

Calculation errors: double-check by substituting your answer back in.
      `
    },
    {
      id: 'sat-t4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Misreading the question?',
            options: [
              'Picking the most tempting wrong answer (designed to catch common mistakes).',
              '"NOT" or "EXCEPT" or "must be true" vs. "could be true".',
              'Running out of time: pace yourself with a watch, don\'t get stuck on one question.',
              'double-check by substituting your answer back in.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Misreading the question: "NOT" or "EXCEPT" or "must be true" vs. "could be true". The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Common Traps & Pitfalls, which explains Key Insight?',
            options: [
              '"NOT" or "EXCEPT" or "must be true" vs. "could be true".',
              'Picking the most tempting wrong answer (designed to catch common mistakes).',
              'Running out of time: pace yourself with a watch, don\'t get stuck on one question.',
              'double-check by substituting your answer back in.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Picking the most tempting wrong answer (designed to catch common mistakes). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-t4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Picking the most tempting wrong answer (designed to catch common mistakes).

**SAT Tip:** Running out of time: pace yourself with a watch, don't get stuck on one question.
      `
    },
    {
      id: 'sat-t4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Common Traps & Pitfalls, which correctly describes SAT Tip?',
            options: [
              'Picking the most tempting wrong answer (designed to catch common mistakes).',
              '"NOT" or "EXCEPT" or "must be true" vs. "could be true".',
              'double-check by substituting your answer back in.',
              'Running out of time: pace yourself with a watch, don\'t get stuck on one question.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Running out of time: pace yourself with a watch, don\'t get stuck on one question. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-t4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Misreading the question',
            options: ['double-check by substituting your answer back in.', 'Picking the most tempting wrong answer (designed to catch common mistakes).', '"NOT" or "EXCEPT" or "must be true" vs. "could be true".', 'Running out of time: pace yourself with a watch, don\'t get stuck on one question.']
          },
          {
            label: 'Calculation errors',
            options: ['Running out of time: pace yourself with a watch, don\'t get stuck on one question.', 'double-check by substituting your answer back in.', 'Picking the most tempting wrong answer (designed to catch common mistakes).', '"NOT" or "EXCEPT" or "must be true" vs. "could be true".']
          },
          {
            label: 'Key Insight',
            options: ['"NOT" or "EXCEPT" or "must be true" vs. "could be true".', 'Running out of time: pace yourself with a watch, don\'t get stuck on one question.', 'double-check by substituting your answer back in.', 'Picking the most tempting wrong answer (designed to catch common mistakes).']
          }
        ],
        correctAnswers: ['"NOT" or "EXCEPT" or "must be true" vs. "could be true".', 'double-check by substituting your answer back in.', 'Picking the most tempting wrong answer (designed to catch common mistakes).'],
        hint1: 'Think about what each concept specifically describes in Common Traps & Pitfalls.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Common Traps & Pitfalls describes a specific idea. Misreading the question: "NOT" or "EXCEPT" or "must be true" vs. "could be true". Calculation errors: double-check by substituting your answer back in. Key Insight: Picking the most tempting wrong answer (designed to catch common mistakes).'
      }
    }
  ]
}
