export const precalcParametricPart6Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'param6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Horizontal

x = v₀ cos(θ) · t

### 2. Vertical

y = v₀ sin(θ) · t - ½gt² + h₀

### 3. Maximum height at t = v₀ sin(θ)/g

Maximum height at t = v₀ sin(θ)/g

### 4. Range (horizontal distance) = v₀² sin(2θ)/g

Range (horizontal distance) = v₀² sin(2θ)/g
      `
    },
    {
      id: 'param6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Horizontal?',
            options: [
              'x = v₀ cos(θ) · t',
              'Range (horizontal distance) = v₀² sin(2θ)/g',
              'Maximum height at t = v₀ sin(θ)/g',
              'y = v₀ sin(θ) · t - ½gt² + h₀'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Horizontal: x = v₀ cos(θ) · t. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Maximum height at t = v₀ sin(θ)/g?',
            options: [
              'Maximum height at t = v₀ sin(θ)/g',
              'y = v₀ sin(θ) · t - ½gt² + h₀',
              'Range (horizontal distance) = v₀² sin(2θ)/g',
              'x = v₀ cos(θ) · t'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Maximum height at t = v₀ sin(θ)/g. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'param6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Horizontal**: x = v₀ cos(θ) · t
- **Vertical**: y = v₀ sin(θ) · t - ½gt² + h₀
- **Maximum height at t = v₀ sin(θ)/g**
- **Range (horizontal distance) = v₀² sin(2θ)/g**
      `
    },
    {
      id: 'param6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Range (horizontal distance) = v₀² sin(2θ)/g',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Range (horizontal distance) = v₀² sin(2θ)/g'
          }
        ]
      }
    },
    {
      id: 'param6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Horizontal',
            options: ['y = v₀ sin(θ) · t - ½gt² + h₀', 'Range (horizontal distance) = v₀² sin(2θ)/g', 'Maximum height at t = v₀ sin(θ)/g', 'x = v₀ cos(θ) · t']
          },
          {
            label: 'Vertical',
            options: ['x = v₀ cos(θ) · t', 'Maximum height at t = v₀ sin(θ)/g', 'y = v₀ sin(θ) · t - ½gt² + h₀', 'Range (horizontal distance) = v₀² sin(2θ)/g']
          }
        ],
        correctAnswers: ['x = v₀ cos(θ) · t', 'y = v₀ sin(θ) · t - ½gt² + h₀'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Horizontal: x = v₀ cos(θ) · t. Vertical: y = v₀ sin(θ) · t - ½gt² + h₀.'
      }
    }
  ]
}
