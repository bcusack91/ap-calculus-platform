export const satCirclesTrigPart1Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-c1-intro',
      type: 'text' as const,
      content: `
# 📝 Circles Trig

**Part 1 of 7 — Circle Equations**

Standard form: (x - h)² + (y - k)² = r², center (h, k), radius r.

General form: x² + y² + Dx + Ey + F = 0 — complete the square to convert.
      `
    },
    {
      id: 'sat-c1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Standard form?',
            options: [
              'x² + y² + Dx + Ey + F = 0 — complete the square to convert.',
              '(x - h)² + (y - k)² = r², center (h, k), radius r.',
              'SAT may give general form and ask for center or radius.',
              'Two circles: compare centers and radii to determine relationship.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Standard form: (x - h)² + (y - k)² = r², center (h, k), radius r. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Circles Trig, which explains Key Insight?',
            options: [
              'Two circles: compare centers and radii to determine relationship.',
              '(x - h)² + (y - k)² = r², center (h, k), radius r.',
              'x² + y² + Dx + Ey + F = 0 — complete the square to convert.',
              'SAT may give general form and ask for center or radius.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: SAT may give general form and ask for center or radius. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** SAT may give general form and ask for center or radius.

**SAT Tip:** Two circles: compare centers and radii to determine relationship.
      `
    },
    {
      id: 'sat-c1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              '(x - h)² + (y - k)² = r², center (h, k), radius r.',
              'x² + y² + Dx + Ey + F = 0 — complete the square to convert.',
              'Two circles: compare centers and radii to determine relationship.',
              'SAT may give general form and ask for center or radius.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Two circles: compare centers and radii to determine relationship. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Standard form',
            options: ['SAT may give general form and ask for center or radius.', '(x - h)² + (y - k)² = r², center (h, k), radius r.', 'x² + y² + Dx + Ey + F = 0 — complete the square to convert.', 'Two circles: compare centers and radii to determine relationship.']
          },
          {
            label: 'General form',
            options: ['SAT may give general form and ask for center or radius.', 'Two circles: compare centers and radii to determine relationship.', '(x - h)² + (y - k)² = r², center (h, k), radius r.', 'x² + y² + Dx + Ey + F = 0 — complete the square to convert.']
          },
          {
            label: 'Key Insight',
            options: ['Two circles: compare centers and radii to determine relationship.', 'x² + y² + Dx + Ey + F = 0 — complete the square to convert.', 'SAT may give general form and ask for center or radius.', '(x - h)² + (y - k)² = r², center (h, k), radius r.']
          }
        ],
        correctAnswers: ['(x - h)² + (y - k)² = r², center (h, k), radius r.', 'x² + y² + Dx + Ey + F = 0 — complete the square to convert.', 'SAT may give general form and ask for center or radius.'],
        hint1: 'Think about what each concept specifically describes in Circles Trig.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Circles Trig describes a specific idea. Standard form: (x - h)² + (y - k)² = r², center (h, k), radius r. General form: x² + y² + Dx + Ey + F = 0 — complete the square to convert. Key Insight: SAT may give general form and ask for center or radius.'
      }
    }
  ]
}
