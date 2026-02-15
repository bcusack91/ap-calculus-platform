export const precalcInverseTrigPart4Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'inver4-intro',
      type: 'text' as const,
      content: `
# Compositions with Inverse Trig

**Part 4 of 7 — Compositions with Inverse Trig**

### 1. For sin(cos⁻¹(x)), draw a right triangle with cos θ = x

For sin(cos⁻¹(x)), draw a right triangle with cos θ = x

### 2. Use the Pythagorean theorem to find the missing side

Use the Pythagorean theorem to find the missing side

### 3. Evaluate the desired trig function from the triangle

Evaluate the desired trig function from the triangle

### 4. This technique works for any composition of trig and inverse trig

This technique works for any composition of trig and inverse trig
      `
    },
    {
      id: 'inver4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of compositions with inverse trig?',
            options: [
              'For sin(cos⁻¹(x)), draw a right triangle with cos θ = x',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'For sin(cos⁻¹(x)), draw a right triangle with cos θ = x'
          },
          {
            question: 'In the context of compositions with inverse trig, which is accurate?',
            options: [
              'Evaluate the desired trig function from the triangle',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evaluate the desired trig function from the triangle'
          }
        ]
      }
    },
    {
      id: 'inver4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **For sin(cos⁻¹(x)), draw a right triangle with cos θ = x**
- **Use the Pythagorean theorem to find the missing side**
- **Evaluate the desired trig function from the triangle**
- **This technique works for any composition of trig and inverse trig**
      `
    },
    {
      id: 'inver4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to compositions with inverse trig?',
            options: [
              'This technique works for any composition of trig and inverse trig',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'This technique works for any composition of trig and inverse trig'
          }
        ]
      }
    },
    {
      id: 'inver4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For sin(cos⁻¹(x)), draw a right triangle with cos θ = x',
            options: ['For sin(cos⁻¹(x)), draw a right triangle with cos ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Use the Pythagorean theorem to find the missing side',
            options: ['Use the Pythagorean theorem to find the missing si', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Evaluate the desired trig function from the triangle',
            options: ['Evaluate the desired trig function from the triang', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['For sin(cos⁻¹(x)), draw a right triangle with cos ', 'Use the Pythagorean theorem to find the missing si', 'Evaluate the desired trig function from the triang'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Compositions with Inverse Trig.'
      }
    }
  ]
}
