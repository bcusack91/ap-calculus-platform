export const actTrigPart1Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t1-intro',
      type: 'text' as const,
      content: `
# 📋 Trigonometry

**Part 1 of 7 — Right Triangle Trig**

SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj.

Always identify which angle you are working with.
      `
    },
    {
      id: 'act-t1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes soh-cah-toa?',
            options: [
              'SOH-CAH-TOA is a key concept for ACT Math',
              'Always identify which angle you are working with',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj'
          }
        ]
      }
    },
    {
      id: 'act-t1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Inverse trig: if sin θ = 0.5, then θ = sin⁻¹(0.5) = 30°.

**ACT Tip:** Pythagorean theorem connects to trig: sin²θ + cos²θ = 1.
      `
    },
    {
      id: 'act-t1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for right triangle trig?',
            options: [
              'Inverse trig: if sin θ = 0.5, then θ = sin⁻¹(0.5) = 30°',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Inverse trig: if sin θ = 0.5, then θ = sin⁻¹(0.5) = 30°'
          }
        ]
      }
    },
    {
      id: 'act-t1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Right Triangle Trig:',
            options: ['SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = o', 'Always identify which angle you are working with', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Inverse trig: if sin θ = 0.5, then θ = sin⁻¹(0.5) ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = o', 'Inverse trig: if sin θ = 0.5, then θ = sin⁻¹(0.5) '],
        hint1: 'Think about right triangle trig',
        hint2: 'Consider the best ACT strategy',
        explanation: 'SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj. Inverse trig: if sin θ = 0.5, then θ = sin⁻¹(0.5) = 30°.'
      }
    }
  ]
}
