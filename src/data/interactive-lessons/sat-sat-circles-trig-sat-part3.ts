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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent?',
            options: [
              'sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent is a fundamental concept in SAT Math',
              'SOH-CAH-TOA',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for right triangle trig?',
            options: [
              'Complementary angles: sin(x) = cos(90° - x)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Complementary angles: sin(x) = cos(90° - x)'
          }
        ]
      }
    },
    {
      id: 'sat-c3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Right Triangle Trig:',
            options: ['sin θ = opposite/hypotenuse; cos θ = adjacent/hypo', 'SOH-CAH-TOA', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Complementary angles: sin(x) = cos(90° - x)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['sin θ = opposite/hypotenuse; cos θ = adjacent/hypo', 'Complementary angles: sin(x) = cos(90° - x)'],
        hint1: 'Think about right triangle trig',
        hint2: 'Consider the best SAT strategy',
        explanation: 'sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent. Complementary angles: sin(x) = cos(90° - x).'
      }
    }
  ]
}
