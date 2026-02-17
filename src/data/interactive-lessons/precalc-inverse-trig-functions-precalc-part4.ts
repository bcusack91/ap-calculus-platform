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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "For sin(cos⁻¹(x)), draw a right…" refer to in precalculus?',
            options: [
              'Use the Pythagorean theorem to find the missing side',
              'For sin(cos⁻¹(x)), draw a right triangle with cos θ = x',
              'This technique works for any composition of trig and inverse trig',
              'Evaluate the desired trig function from the triangle'
            ],
            correctAnswer: 1,
            explanation: 'Correct — For sin(cos⁻¹(x)), draw a right triangle with cos θ = x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Compositions with Inverse Trig, which explains Evaluate the desired trig function from…?',
            options: [
              'For sin(cos⁻¹(x)), draw a right triangle with cos θ = x',
              'This technique works for any composition of trig and inverse trig',
              'Use the Pythagorean theorem to find the missing side',
              'Evaluate the desired trig function from the triangle'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Evaluate the desired trig function from the triangle. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For sin(cos⁻¹(x)), draw a right…',
            options: ['This technique works for any composition of trig and inverse trig', 'For sin(cos⁻¹(x)), draw a right triangle with cos θ = x', 'Use the Pythagorean theorem to find the missing side', 'Evaluate the desired trig function from the triangle']
          },
          {
            label: 'Use the Pythagorean theorem to find the…',
            options: ['For sin(cos⁻¹(x)), draw a right triangle with cos θ = x', 'Use the Pythagorean theorem to find the missing side', 'Evaluate the desired trig function from the triangle', 'This technique works for any composition of trig and inverse trig']
          },
          {
            label: 'Evaluate the desired trig function from…',
            options: ['This technique works for any composition of trig and inverse trig', 'For sin(cos⁻¹(x)), draw a right triangle with cos θ = x', 'Evaluate the desired trig function from the triangle', 'Use the Pythagorean theorem to find the missing side']
          }
        ],
        correctAnswers: ['For sin(cos⁻¹(x)), draw a right triangle with cos θ = x', 'Use the Pythagorean theorem to find the missing side', 'Evaluate the desired trig function from the triangle'],
        hint1: 'Think about what each concept specifically describes in Compositions with Inverse Trig.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Compositions with Inverse Trig describes a specific idea. For sin(cos⁻¹(x)), draw a right triangle with cos θ = x. Use the Pythagorean theorem to find the missing side. Evaluate the desired trig function from the triangle.'
      }
    }
  ]
}
