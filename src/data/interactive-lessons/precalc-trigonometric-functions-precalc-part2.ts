export const precalcTrigFunctionsPart2Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'trigo2-intro',
      type: 'text' as const,
      content: `
# Unit Circle

**Part 2 of 7 — Unit Circle**

### 1. Unit circle

radius 1 centered at the origin

### 2. Point on unit circle

(cos θ, sin θ)

### 3. Key angles

0, π/6, π/4, π/3, π/2 and their multiples

### 4. Reference angles

acute angle formed with the x-axis
      `
    },
    {
      id: 'trigo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Unit circle?',
            options: [
              '0, π/6, π/4, π/3, π/2 and their multiples',
              'radius 1 centered at the origin',
              'acute angle formed with the x-axis',
              '(cos θ, sin θ)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Unit circle: radius 1 centered at the origin. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key angles:',
            options: [
              '(cos θ, sin θ)',
              'radius 1 centered at the origin',
              '0, π/6, π/4, π/3, π/2 and their multiples',
              'acute angle formed with the x-axis'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key angles: 0, π/6, π/4, π/3, π/2 and their multiples. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'trigo2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Unit circle**: radius 1 centered at the origin
- **Point on unit circle**: (cos θ, sin θ)
- **Key angles**: 0, π/6, π/4, π/3, π/2 and their multiples
- **Reference angles**: acute angle formed with the x-axis
      `
    },
    {
      id: 'trigo2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to unit circle?',
            options: [
              'acute angle formed with the x-axis',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Reference angles: acute angle formed with the x-axis'
          }
        ]
      }
    },
    {
      id: 'trigo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Unit circle',
            options: ['acute angle formed with the x-axis', '(cos θ, sin θ)', '0, π/6, π/4, π/3, π/2 and their multiples', 'radius 1 centered at the origin']
          },
          {
            label: 'Point on unit circle',
            options: ['radius 1 centered at the origin', '(cos θ, sin θ)', '0, π/6, π/4, π/3, π/2 and their multiples', 'acute angle formed with the x-axis']
          },
          {
            label: 'Key angles',
            options: ['radius 1 centered at the origin', 'acute angle formed with the x-axis', '(cos θ, sin θ)', '0, π/6, π/4, π/3, π/2 and their multiples']
          }
        ],
        correctAnswers: ['radius 1 centered at the origin', '(cos θ, sin θ)', '0, π/6, π/4, π/3, π/2 and their multiples'],
        hint1: 'Think about what each concept specifically describes in Unit Circle.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Unit Circle describes a specific idea. Unit circle: radius 1 centered at the origin. Point on unit circle: (cos θ, sin θ). Key angles: 0, π/6, π/4, π/3, π/2 and their multiples.'
      }
    }
  ]
}
