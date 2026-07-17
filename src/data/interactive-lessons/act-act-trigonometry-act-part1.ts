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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes SOH-CAH-TOA?',
            options: [
              'Pythagorean theorem connects to trig: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.',
              'sin = opp/hyp, cos = adj/hyp, tan = opp/adj.',
              'Inverse trig: if sin θ = 0.5, then θ = $\\sin^{-1}(0.5)$ = 30°.',
              'Always identify which angle you are working with.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'sin = opp/hyp, cos = adj/hyp, tan = opp/adj.',
              'Always identify which angle you are working with.',
              'Inverse trig: if sin θ = 0.5, then θ = $\\sin^{-1}(0.5)$ = 30°.',
              'Pythagorean theorem connects to trig: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Inverse trig: if sin θ = 0.5, then θ = $\\sin^{-1}(0.5)$ = 30°. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-t1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Inverse trig: if sin θ = 0.5, then θ = $\\sin^{-1}(0.5)$ = 30°.

**ACT Tip:** Pythagorean theorem connects to trig: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.
      `
    },
    {
      id: 'act-t1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Pythagorean theorem connects to trig: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.',
              'Always identify which angle you are working with.',
              'sin = opp/hyp, cos = adj/hyp, tan = opp/adj.',
              'Inverse trig: if sin θ = 0.5, then θ = $\\sin^{-1}(0.5)$ = 30°.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Pythagorean theorem connects to trig: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SOH-CAH-TOA',
            options: ['Inverse trig: if sin θ = 0.5, then θ = $\\sin^{-1}(0.5)$ = 30°.', 'sin = opp/hyp, cos = adj/hyp, tan = opp/adj.', 'Always identify which angle you are working with.', 'Pythagorean theorem connects to trig: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.']
          },
          {
            label: 'Key Insight',
            options: ['Pythagorean theorem connects to trig: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.', 'Inverse trig: if sin θ = 0.5, then θ = $\\sin^{-1}(0.5)$ = 30°.', 'sin = opp/hyp, cos = adj/hyp, tan = opp/adj.', 'Always identify which angle you are working with.']
          },
          {
            label: 'ACT Tip',
            options: ['sin = opp/hyp, cos = adj/hyp, tan = opp/adj.', 'Pythagorean theorem connects to trig: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.', 'Inverse trig: if sin θ = 0.5, then θ = $\\sin^{-1}(0.5)$ = 30°.', 'Always identify which angle you are working with.']
          }
        ],
        correctAnswers: ['sin = opp/hyp, cos = adj/hyp, tan = opp/adj.', 'Inverse trig: if sin θ = 0.5, then θ = $\\sin^{-1}(0.5)$ = 30°.', 'Pythagorean theorem connects to trig: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.'],
        hint1: 'Think about what each concept specifically describes in Trigonometry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Trigonometry describes a specific idea. SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj. Key Insight: Inverse trig: if sin θ = 0.5, then θ = $\\sin^{-1}(0.5)$ = 30°. ACT Tip: Pythagorean theorem connects to trig: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.'
      }
    }
  ]
}
