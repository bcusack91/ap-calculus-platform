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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains d/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)?',
            options: [
              'd/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)',
              'd/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)',
              'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x)',
              'split into two integrals and apply chain rule to each'
            ],
            correctAnswer: 1,
            explanation: 'Correct — d/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of FTC with Variable Bounds, which explains With variable lower bound?',
            options: [
              'd/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)',
              'd/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)',
              'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x)',
              'split into two integrals and apply chain rule to each'
            ],
            correctAnswer: 1,
            explanation: 'Correct — With variable lower bound: d/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding FTC with Variable Bounds, which correctly describes Both bounds variable?',
            options: [
              'split into two integrals and apply chain rule to each',
              'd/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)',
              'd/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)',
              'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Both bounds variable: split into two integrals and apply chain rule to each. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'accum2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'With variable upper bound g(x)',
            options: ['d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x)', 'd/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)', 'd/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)', 'split into two integrals and apply chain rule to each']
          },
          {
            label: 'With variable lower bound',
            options: ['split into two integrals and apply chain rule to each', 'd/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)', 'd/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)', 'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x)']
          },
          {
            label: 'Both bounds variable',
            options: ['d/dx[∫ₐˣ f(t)dt] = f(x) (FTC Part 1)', 'split into two integrals and apply chain rule to each', 'd/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)', 'd/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x)']
          }
        ],
        correctAnswers: ['d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x)', 'd/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x)', 'split into two integrals and apply chain rule to each'],
        hint1: 'Think about what each concept specifically describes in FTC with Variable Bounds.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in FTC with Variable Bounds describes a specific idea. With variable upper bound g(x): d/dx[∫ₐ^(g(x)) f(t)dt] = f(g(x))·g\'(x). With variable lower bound: d/dx[∫_(h(x))^b f(t)dt] = -f(h(x))·h\'(x). Both bounds variable: split into two integrals and apply chain rule to each.'
      }
    }
  ]
}
