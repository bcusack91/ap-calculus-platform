export const calcABAccumulationPart2Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'accum2-intro',
      type: 'text' as const,
      content: `
# FTC with Variable Bounds

**Part 2 of 7 — FTC with Variable Bounds**

### 1. d/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)

d/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)

### 2. With variable upper bound g(x)

d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g'(x)

### 3. With variable lower bound

d/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h'(x)

### 4. Both bounds variable

split into two integrals and apply chain rule to each
      `
    },
    {
      id: 'accum2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ftc with variable bounds?',
            options: [
              'd/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)'
          },
          {
            question: 'In the context of ftc with variable bounds, which is accurate?',
            options: [
              'd/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'With variable lower bound: d/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)'
          }
        ]
      }
    },
    {
      id: 'accum2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **d/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)**
- **With variable upper bound g(x)**: d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g'(x)
- **With variable lower bound**: d/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h'(x)
- **Both bounds variable**: split into two integrals and apply chain rule to each
      `
    },
    {
      id: 'accum2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ftc with variable bounds?',
            options: [
              'split into two integrals and apply chain rule to each',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Both bounds variable: split into two integrals and apply chain rule to each'
          }
        ]
      }
    },
    {
      id: 'accum2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)',
            options: ['d/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'With variable upper bound g(x)',
            options: ['d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'With variable lower bound',
            options: ['d/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)', 'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x)', 'd/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding FTC with Variable Bounds.'
      }
    }
  ]
}
