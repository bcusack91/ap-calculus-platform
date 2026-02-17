export const actCoordGeomPart2Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-c2-intro',
      type: 'text' as const,
      content: `
# Distance & Midpoint

**Part 2 of 7 — Distance & Midpoint**

Distance: d = √((x₂-x₁)² + (y₂-y₁)²).

Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2).
      `
    },
    {
      id: 'act-c2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Distance?',
            options: [
              'Distance formula is the Pythagorean theorem in disguise.',
              '((x₁+x₂)/2, (y₁+y₂)/2).',
              'd = √((x₂-x₁)² + (y₂-y₁)²).',
              'These formulas are NOT provided on the ACT — memorize them.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Distance: d = √((x₂-x₁)² + (y₂-y₁)²). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'These formulas are NOT provided on the ACT — memorize them.',
              '((x₁+x₂)/2, (y₁+y₂)/2).',
              'd = √((x₂-x₁)² + (y₂-y₁)²).',
              'Distance formula is the Pythagorean theorem in disguise.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Distance formula is the Pythagorean theorem in disguise. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-c2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Distance formula is the Pythagorean theorem in disguise.

**ACT Tip:** These formulas are NOT provided on the ACT — memorize them.
      `
    },
    {
      id: 'act-c2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'd = √((x₂-x₁)² + (y₂-y₁)²).',
              'Distance formula is the Pythagorean theorem in disguise.',
              '((x₁+x₂)/2, (y₁+y₂)/2).',
              'These formulas are NOT provided on the ACT — memorize them.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: These formulas are NOT provided on the ACT — memorize them. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-c2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Distance',
            options: ['Distance formula is the Pythagorean theorem in disguise.', '((x₁+x₂)/2, (y₁+y₂)/2).', 'd = √((x₂-x₁)² + (y₂-y₁)²).', 'These formulas are NOT provided on the ACT — memorize them.']
          },
          {
            label: 'Midpoint',
            options: ['d = √((x₂-x₁)² + (y₂-y₁)²).', '((x₁+x₂)/2, (y₁+y₂)/2).', 'These formulas are NOT provided on the ACT — memorize them.', 'Distance formula is the Pythagorean theorem in disguise.']
          },
          {
            label: 'Key Insight',
            options: ['d = √((x₂-x₁)² + (y₂-y₁)²).', '((x₁+x₂)/2, (y₁+y₂)/2).', 'Distance formula is the Pythagorean theorem in disguise.', 'These formulas are NOT provided on the ACT — memorize them.']
          }
        ],
        correctAnswers: ['d = √((x₂-x₁)² + (y₂-y₁)²).', '((x₁+x₂)/2, (y₁+y₂)/2).', 'Distance formula is the Pythagorean theorem in disguise.'],
        hint1: 'Think about what each concept specifically describes in Distance & Midpoint.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Distance & Midpoint describes a specific idea. Distance: d = √((x₂-x₁)² + (y₂-y₁)²). Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2). Key Insight: Distance formula is the Pythagorean theorem in disguise.'
      }
    }
  ]
}
