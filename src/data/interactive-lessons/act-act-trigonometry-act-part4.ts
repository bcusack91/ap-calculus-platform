export const actTrigPart4Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t4-intro',
      type: 'text' as const,
      content: `
# Trig Identities

**Part 4 of 7 — Trig Identities**

Pythagorean: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.

tan θ = sin θ / cos θ.
      `
    },
    {
      id: 'act-t4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Pythagorean?',
            options: [
              'tan θ = sin θ / cos θ.',
              'Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan.',
              'Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = $\\cos^{2}\\theta$ - $\\sin^{2}\\theta$.',
              '$\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Pythagorean: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = $\\cos^{2}\\theta$ - $\\sin^{2}\\theta$.',
              'tan θ = sin θ / cos θ.',
              'Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan.',
              '$\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-t4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan.

**ACT Tip:** Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = $\\cos^{2}\\theta$ - $\\sin^{2}\\theta$.
      `
    },
    {
      id: 'act-t4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              '$\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.',
              'Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan.',
              'Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = $\\cos^{2}\\theta$ - $\\sin^{2}\\theta$.',
              'tan θ = sin θ / cos θ.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = $\\cos^{2}\\theta$ - $\\sin^{2}\\theta$. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pythagorean',
            options: ['$\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.', 'Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan.', 'tan θ = sin θ / cos θ.', 'Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = $\\cos^{2}\\theta$ - $\\sin^{2}\\theta$.']
          },
          {
            label: 'Key Insight',
            options: ['Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan.', 'Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = $\\cos^{2}\\theta$ - $\\sin^{2}\\theta$.', '$\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.', 'tan θ = sin θ / cos θ.']
          },
          {
            label: 'ACT Tip',
            options: ['$\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.', 'Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = $\\cos^{2}\\theta$ - $\\sin^{2}\\theta$.', 'Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan.', 'tan θ = sin θ / cos θ.']
          }
        ],
        correctAnswers: ['$\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1.', 'Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan.', 'Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = $\\cos^{2}\\theta$ - $\\sin^{2}\\theta$.'],
        hint1: 'Think about what each concept specifically describes in Trig Identities.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Trig Identities describes a specific idea. Pythagorean: $\\sin^{2}\\theta$ + $\\cos^{2}\\theta$ = 1. Key Insight: Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan. ACT Tip: Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = $\\cos^{2}\\theta$ - $\\sin^{2}\\theta$.'
      }
    }
  ]
}
