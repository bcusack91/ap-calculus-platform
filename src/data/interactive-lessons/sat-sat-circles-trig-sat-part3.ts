export const satCirclesTrigPart3Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-c3-intro',
      type: 'text' as const,
      content: `
# Right Triangle Trig

**Part 3 of 7 — Right Triangle Trig**

sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent.

SOH-CAH-TOA.
      `
    },
    {
      id: 'sat-c3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains sin θ = opposite/hypotenuse; cos θ =…?',
            options: [
              'sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent.',
              'Complementary angles: sin(x) = cos(90° - x).',
              'SOH-CAH-TOA.',
              'Pythagorean identity: sin²θ + cos²θ = 1.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Right Triangle Trig, which explains Key Insight?',
            options: [
              'Complementary angles: sin(x) = cos(90° - x).',
              'sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent.',
              'SOH-CAH-TOA.',
              'Pythagorean identity: sin²θ + cos²θ = 1.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Complementary angles: sin(x) = cos(90° - x). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Complementary angles: sin(x) = cos(90° - x).

**SAT Tip:** Pythagorean identity: sin²θ + cos²θ = 1.
      `
    },
    {
      id: 'sat-c3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Complementary angles: sin(x) = cos(90° - x).',
              'SOH-CAH-TOA.',
              'sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent.',
              'Pythagorean identity: sin²θ + cos²θ = 1.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Pythagorean identity: sin²θ + cos²θ = 1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['SOH-CAH-TOA.', 'Pythagorean identity: sin²θ + cos²θ = 1.', 'Complementary angles: sin(x) = cos(90° - x).', 'sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent.']
          },
          {
            label: 'SAT Tip',
            options: ['sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent.', 'SOH-CAH-TOA.', 'Pythagorean identity: sin²θ + cos²θ = 1.', 'Complementary angles: sin(x) = cos(90° - x).']
          }
        ],
        correctAnswers: ['Complementary angles: sin(x) = cos(90° - x).', 'Pythagorean identity: sin²θ + cos²θ = 1.'],
        hint1: 'Think about what each concept specifically describes in Right Triangle Trig.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Right Triangle Trig describes a specific idea. Key Insight: Complementary angles: sin(x) = cos(90° - x). SAT Tip: Pythagorean identity: sin²θ + cos²θ = 1.'
      }
    }
  ]
}
