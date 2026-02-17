export const calcBCPartialFractionsPart4Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'parti4-intro',
      type: 'text' as const,
      content: `
# Irreducible Quadratic Factors

**Part 4 of 7 — Irreducible Quadratic Factors**

### 1. For irreducible quadratic ax²+bx+c (b²-4ac < 0)

For irreducible quadratic ax²+bx+c (b²-4ac < 0)

### 2. Include

(Ax+B)/(ax²+bx+c) for each irreducible quadratic factor

### 3. The numerator has degree one less than the quadratic

The numerator has degree one less than the quadratic

### 4. If repeated

add (Cx+D)/(ax²+bx+c)² etc.
      `
    },
    {
      id: 'parti4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes For irreducible quadratic ax²+bx+c…?',
            options: [
              'For irreducible quadratic ax²+bx+c (b²-4ac < 0)',
              'add (Cx+D)/(ax²+bx+c)² etc.',
              'The numerator has degree one less than the quadratic',
              '(Ax+B)/(ax²+bx+c) for each irreducible quadratic factor'
            ],
            correctAnswer: 0,
            explanation: 'Correct — For irreducible quadratic ax²+bx+c (b²-4ac < 0). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about The numerator has degree one less than…?',
            options: [
              'For irreducible quadratic ax²+bx+c (b²-4ac < 0)',
              'The numerator has degree one less than the quadratic',
              'add (Cx+D)/(ax²+bx+c)² etc.',
              '(Ax+B)/(ax²+bx+c) for each irreducible quadratic factor'
            ],
            correctAnswer: 1,
            explanation: 'Correct — The numerator has degree one less than the quadratic. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'parti4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **For irreducible quadratic ax²+bx+c (b²-4ac < 0)**
- **Include**: (Ax+B)/(ax²+bx+c) for each irreducible quadratic factor
- **The numerator has degree one less than the quadratic**
- **If repeated**: add (Cx+D)/(ax²+bx+c)² etc.
      `
    },
    {
      id: 'parti4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about If repeated is correct?',
            options: [
              'The numerator has degree one less than the quadratic',
              'add (Cx+D)/(ax²+bx+c)² etc.',
              'For irreducible quadratic ax²+bx+c (b²-4ac < 0)',
              '(Ax+B)/(ax²+bx+c) for each irreducible quadratic factor'
            ],
            correctAnswer: 1,
            explanation: 'Correct — If repeated: add (Cx+D)/(ax²+bx+c)² etc. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Include',
            options: ['The numerator has degree one less than the quadratic', '(Ax+B)/(ax²+bx+c) for each irreducible quadratic factor', 'For irreducible quadratic ax²+bx+c (b²-4ac < 0)', 'add (Cx+D)/(ax²+bx+c)² etc.']
          },
          {
            label: 'If repeated',
            options: ['add (Cx+D)/(ax²+bx+c)² etc.', 'The numerator has degree one less than the quadratic', 'For irreducible quadratic ax²+bx+c (b²-4ac < 0)', '(Ax+B)/(ax²+bx+c) for each irreducible quadratic factor']
          }
        ],
        correctAnswers: ['(Ax+B)/(ax²+bx+c) for each irreducible quadratic factor', 'add (Cx+D)/(ax²+bx+c)² etc.'],
        hint1: 'Think about what each concept specifically describes in Irreducible Quadratic Factors.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Irreducible Quadratic Factors describes a specific idea. Include: (Ax+B)/(ax²+bx+c) for each irreducible quadratic factor. If repeated: add (Cx+D)/(ax²+bx+c)² etc.'
      }
    }
  ]
}
