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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of unit circle?',
            options: [
              'Unit circle',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Unit circle: radius 1 centered at the origin'
          },
          {
            question: 'In the context of unit circle, which is accurate?',
            options: [
              '0, π/6, π/4, π/3, π/2 and their multiples',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Key angles: 0, π/6, π/4, π/3, π/2 and their multiples'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Unit circle',
            options: ['radius 1 centered at the origin', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Point on unit circle',
            options: ['(cos θ, sin θ)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Key angles',
            options: ['0, π/6, π/4, π/3, π/2 and their multiples', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['radius 1 centered at the origin', '(cos θ, sin θ)', '0, π/6, π/4, π/3, π/2 and their multiples'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Unit Circle.'
      }
    }
  ]
}
