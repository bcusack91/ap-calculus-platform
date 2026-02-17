export const actAlgebraPart3Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a3-intro',
      type: 'text' as const,
      content: `
# Systems of Equations

**Part 3 of 7 — Systems of Equations**

Substitution: solve one equation for a variable, plug into the other.

Elimination: add/subtract equations to cancel a variable.
      `
    },
    {
      id: 'act-a3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Substitution" refer to in ACT prep?',
            options: [
              'ACT tip: if the system looks complex, try elimination first.',
              'add/subtract equations to cancel a variable.',
              'Special cases: no solution (parallel lines) or infinite solutions (same line).',
              'solve one equation for a variable, plug into the other.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Substitution: solve one equation for a variable, plug into the other. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Systems of Equations, which explains Key Insight?',
            options: [
              'ACT tip: if the system looks complex, try elimination first.',
              'Special cases: no solution (parallel lines) or infinite solutions (same line).',
              'solve one equation for a variable, plug into the other.',
              'add/subtract equations to cancel a variable.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Special cases: no solution (parallel lines) or infinite solutions (same line). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-a3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Special cases: no solution (parallel lines) or infinite solutions (same line).

**ACT Tip:** ACT tip: if the system looks complex, try elimination first.
      `
    },
    {
      id: 'act-a3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'solve one equation for a variable, plug into the other.',
              'ACT tip: if the system looks complex, try elimination first.',
              'add/subtract equations to cancel a variable.',
              'Special cases: no solution (parallel lines) or infinite solutions (same line).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: ACT tip: if the system looks complex, try elimination first. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-a3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Substitution',
            options: ['solve one equation for a variable, plug into the other.', 'ACT tip: if the system looks complex, try elimination first.', 'Special cases: no solution (parallel lines) or infinite solutions (same line).', 'add/subtract equations to cancel a variable.']
          },
          {
            label: 'Elimination',
            options: ['ACT tip: if the system looks complex, try elimination first.', 'solve one equation for a variable, plug into the other.', 'add/subtract equations to cancel a variable.', 'Special cases: no solution (parallel lines) or infinite solutions (same line).']
          },
          {
            label: 'Key Insight',
            options: ['add/subtract equations to cancel a variable.', 'solve one equation for a variable, plug into the other.', 'Special cases: no solution (parallel lines) or infinite solutions (same line).', 'ACT tip: if the system looks complex, try elimination first.']
          }
        ],
        correctAnswers: ['solve one equation for a variable, plug into the other.', 'add/subtract equations to cancel a variable.', 'Special cases: no solution (parallel lines) or infinite solutions (same line).'],
        hint1: 'Think about what each concept specifically describes in Systems of Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Systems of Equations describes a specific idea. Substitution: solve one equation for a variable, plug into the other. Elimination: add/subtract equations to cancel a variable. Key Insight: Special cases: no solution (parallel lines) or infinite solutions (same line).'
      }
    }
  ]
}
