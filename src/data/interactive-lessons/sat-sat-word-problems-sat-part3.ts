export const satWordProblemsPart3Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w3-intro',
      type: 'text' as const,
      content: `
# Mixture Problems

**Part 3 of 7 — Mixture Problems**

Concentration problems: amount of substance = concentration × volume.

Mixture equation: c₁v₁ + c₂v₂ = c_final × v_total.
      `
    },
    {
      id: 'sat-w3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Concentration problems?',
            options: [
              'c₁v₁ + c₂v₂ = c_final × v_total.',
              'Track what stays constant (usually the amount of pure substance).',
              'amount of substance = concentration × volume.',
              'Table method: organize given info into a table before writing equations.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Concentration problems: amount of substance = concentration × volume. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'c₁v₁ + c₂v₂ = c_final × v_total.',
              'Track what stays constant (usually the amount of pure substance).',
              'Table method: organize given info into a table before writing equations.',
              'amount of substance = concentration × volume.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Track what stays constant (usually the amount of pure substance). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-w3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Track what stays constant (usually the amount of pure substance).

**SAT Tip:** Table method: organize given info into a table before writing equations.
      `
    },
    {
      id: 'sat-w3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'c₁v₁ + c₂v₂ = c_final × v_total.',
              'amount of substance = concentration × volume.',
              'Table method: organize given info into a table before writing equations.',
              'Track what stays constant (usually the amount of pure substance).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Table method: organize given info into a table before writing equations. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-w3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Concentration problems',
            options: ['Table method: organize given info into a table before writing equations.', 'c₁v₁ + c₂v₂ = c_final × v_total.', 'Track what stays constant (usually the amount of pure substance).', 'amount of substance = concentration × volume.']
          },
          {
            label: 'Mixture equation',
            options: ['c₁v₁ + c₂v₂ = c_final × v_total.', 'Track what stays constant (usually the amount of pure substance).', 'Table method: organize given info into a table before writing equations.', 'amount of substance = concentration × volume.']
          },
          {
            label: 'Key Insight',
            options: ['Table method: organize given info into a table before writing equations.', 'amount of substance = concentration × volume.', 'c₁v₁ + c₂v₂ = c_final × v_total.', 'Track what stays constant (usually the amount of pure substance).']
          }
        ],
        correctAnswers: ['amount of substance = concentration × volume.', 'c₁v₁ + c₂v₂ = c_final × v_total.', 'Track what stays constant (usually the amount of pure substance).'],
        hint1: 'Think about what each concept specifically describes in Mixture Problems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Mixture Problems describes a specific idea. Concentration problems: amount of substance = concentration × volume. Mixture equation: c₁v₁ + c₂v₂ = c_final × v_total. Key Insight: Track what stays constant (usually the amount of pure substance).'
      }
    }
  ]
}
