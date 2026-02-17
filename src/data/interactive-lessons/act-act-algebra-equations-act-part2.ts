export const actAlgebraPart2Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a2-intro',
      type: 'text' as const,
      content: `
# Inequalities

**Part 2 of 7 — Inequalities**

Solve like equations, but flip the inequality sign when multiplying/dividing by a negative.

Graph solutions on a number line: open circle for < or >, closed for ≤ or ≥.
      `
    },
    {
      id: 'act-a2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Solve like equations, but flip the…" refer to in ACT prep?',
            options: [
              'open circle for < or >, closed for ≤ or ≥.',
              'ACT may present inequalities in word problem form.',
              'Solve like equations, but flip the inequality sign when multiplying/dividing by a negative.',
              'Compound inequalities: AND (intersection) vs. OR (union).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Solve like equations, but flip the inequality sign when multiplying/dividing by a negative. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Inequalities, which explains Key Insight?',
            options: [
              'ACT may present inequalities in word problem form.',
              'open circle for < or >, closed for ≤ or ≥.',
              'Solve like equations, but flip the inequality sign when multiplying/dividing by a negative.',
              'Compound inequalities: AND (intersection) vs. OR (union).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Compound inequalities: AND (intersection) vs. OR (union). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-a2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Compound inequalities: AND (intersection) vs. OR (union).

**ACT Tip:** ACT may present inequalities in word problem form.
      `
    },
    {
      id: 'act-a2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'open circle for < or >, closed for ≤ or ≥.',
              'Compound inequalities: AND (intersection) vs. OR (union).',
              'ACT may present inequalities in word problem form.',
              'Solve like equations, but flip the inequality sign when multiplying/dividing by a negative.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: ACT may present inequalities in word problem form. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-a2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Graph solutions on a number line',
            options: ['ACT may present inequalities in word problem form.', 'Compound inequalities: AND (intersection) vs. OR (union).', 'open circle for < or >, closed for ≤ or ≥.', 'Solve like equations, but flip the inequality sign when multiplying/dividing by a negative.']
          },
          {
            label: 'Key Insight',
            options: ['Compound inequalities: AND (intersection) vs. OR (union).', 'ACT may present inequalities in word problem form.', 'Solve like equations, but flip the inequality sign when multiplying/dividing by a negative.', 'open circle for < or >, closed for ≤ or ≥.']
          },
          {
            label: 'ACT Tip',
            options: ['Solve like equations, but flip the inequality sign when multiplying/dividing by a negative.', 'open circle for < or >, closed for ≤ or ≥.', 'Compound inequalities: AND (intersection) vs. OR (union).', 'ACT may present inequalities in word problem form.']
          }
        ],
        correctAnswers: ['open circle for < or >, closed for ≤ or ≥.', 'Compound inequalities: AND (intersection) vs. OR (union).', 'ACT may present inequalities in word problem form.'],
        hint1: 'Think about what each concept specifically describes in Inequalities.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Inequalities describes a specific idea. Graph solutions on a number line: open circle for < or >, closed for ≤ or ≥. Key Insight: Compound inequalities: AND (intersection) vs. OR (union). ACT Tip: ACT may present inequalities in word problem form.'
      }
    }
  ]
}
