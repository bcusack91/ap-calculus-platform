export const actIntermAlgPart3Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-i3-intro',
      type: 'text' as const,
      content: `
# Radical Expressions

**Part 3 of 7 — Radical Expressions**

√(ab) = √a · √b; √(a/b) = √a/√b.

Simplify by factoring out perfect squares.
      `
    },
    {
      id: 'act-i3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "√(ab) = √a · √b; √(a/b) = √a/√b." refer to in ACT prep?',
            options: [
              'Simplify by factoring out perfect squares.',
              'Cannot add unlike radicals: √2 + √3 ≠ √5.',
              'Rationalize denominators: multiply by √n/√n.',
              '√(ab) = √a · √b; √(a/b) = √a/√b.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — √(ab) = √a · √b; √(a/b) = √a/√b. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Radical Expressions, which explains Key Insight?',
            options: [
              'Rationalize denominators: multiply by √n/√n.',
              'Cannot add unlike radicals: √2 + √3 ≠ √5.',
              'Simplify by factoring out perfect squares.',
              '√(ab) = √a · √b; √(a/b) = √a/√b.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Rationalize denominators: multiply by √n/√n. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-i3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Rationalize denominators: multiply by √n/√n.

**ACT Tip:** Cannot add unlike radicals: √2 + √3 ≠ √5.
      `
    },
    {
      id: 'act-i3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Rationalize denominators: multiply by √n/√n.',
              'Simplify by factoring out perfect squares.',
              '√(ab) = √a · √b; √(a/b) = √a/√b.',
              'Cannot add unlike radicals: √2 + √3 ≠ √5.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Cannot add unlike radicals: √2 + √3 ≠ √5. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-i3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['√(ab) = √a · √b; √(a/b) = √a/√b.', 'Rationalize denominators: multiply by √n/√n.', 'Cannot add unlike radicals: √2 + √3 ≠ √5.', 'Simplify by factoring out perfect squares.']
          },
          {
            label: 'ACT Tip',
            options: ['√(ab) = √a · √b; √(a/b) = √a/√b.', 'Rationalize denominators: multiply by √n/√n.', 'Simplify by factoring out perfect squares.', 'Cannot add unlike radicals: √2 + √3 ≠ √5.']
          }
        ],
        correctAnswers: ['Rationalize denominators: multiply by √n/√n.', 'Cannot add unlike radicals: √2 + √3 ≠ √5.'],
        hint1: 'Think about what each concept specifically describes in Radical Expressions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Radical Expressions describes a specific idea. Key Insight: Rationalize denominators: multiply by √n/√n. ACT Tip: Cannot add unlike radicals: √2 + √3 ≠ √5.'
      }
    }
  ]
}
