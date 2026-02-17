export const calcABDerivAppsPart1Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'appli1-intro',
      type: 'text' as const,
      content: `
# ∫ Applications Of Derivatives

**Part 1 of 7 — Related Rates**

### 1. Related rates

quantities changing with respect to time, connected by an equation

### 2. Steps

draw a picture, identify variables, write an equation, differentiate with respect to t

### 3. Use the chain rule

d/dt[r²] = 2r · dr/dt

### 4. Substitute known values AFTER differentiating, not before

Substitute known values AFTER differentiating, not before
      `
    },
    {
      id: 'appli1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Related rates?',
            options: [
              'draw a picture, identify variables, write an equation, differentiate with respect to t',
              'quantities changing with respect to time, connected by an equation',
              'Substitute known values AFTER differentiating, not before',
              'd/dt[r²] = 2r · dr/dt'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Related rates: quantities changing with respect to time, connected by an equation. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Applications Of Derivatives, which explains Use the chain rule?',
            options: [
              'Substitute known values AFTER differentiating, not before',
              'd/dt[r²] = 2r · dr/dt',
              'draw a picture, identify variables, write an equation, differentiate with respect to t',
              'quantities changing with respect to time, connected by an equation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Use the chain rule: d/dt[r²] = 2r · dr/dt. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'appli1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Related rates**: quantities changing with respect to time, connected by an equation
- **Steps**: draw a picture, identify variables, write an equation, differentiate with respect to t
- **Use the chain rule**: d/dt[r²] = 2r · dr/dt
- **Substitute known values AFTER differentiating, not before**
      `
    },
    {
      id: 'appli1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Applications Of Derivatives, which correctly describes Substitute known values AFTER…?',
            options: [
              'draw a picture, identify variables, write an equation, differentiate with respect to t',
              'quantities changing with respect to time, connected by an equation',
              'Substitute known values AFTER differentiating, not before',
              'd/dt[r²] = 2r · dr/dt'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Substitute known values AFTER differentiating, not before. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'appli1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Related rates',
            options: ['d/dt[r²] = 2r · dr/dt', 'draw a picture, identify variables, write an equation, differentiate with respect to t', 'quantities changing with respect to time, connected by an equation', 'Substitute known values AFTER differentiating, not before']
          },
          {
            label: 'Steps',
            options: ['Substitute known values AFTER differentiating, not before', 'quantities changing with respect to time, connected by an equation', 'd/dt[r²] = 2r · dr/dt', 'draw a picture, identify variables, write an equation, differentiate with respect to t']
          },
          {
            label: 'Use the chain rule',
            options: ['d/dt[r²] = 2r · dr/dt', 'quantities changing with respect to time, connected by an equation', 'draw a picture, identify variables, write an equation, differentiate with respect to t', 'Substitute known values AFTER differentiating, not before']
          }
        ],
        correctAnswers: ['quantities changing with respect to time, connected by an equation', 'draw a picture, identify variables, write an equation, differentiate with respect to t', 'd/dt[r²] = 2r · dr/dt'],
        hint1: 'Think about what each concept specifically describes in Applications Of Derivatives.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applications Of Derivatives describes a specific idea. Related rates: quantities changing with respect to time, connected by an equation. Steps: draw a picture, identify variables, write an equation, differentiate with respect to t. Use the chain rule: d/dt[r²] = 2r · dr/dt.'
      }
    }
  ]
}
