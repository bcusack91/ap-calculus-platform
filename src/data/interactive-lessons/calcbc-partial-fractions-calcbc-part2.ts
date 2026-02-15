export const calcBCPartialFractionsPart2Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'parti2-intro',
      type: 'text' as const,
      content: `
# Distinct Linear Factors

**Part 2 of 7 — Distinct Linear Factors**

### 1. For distinct linear factors (ax+b)(cx+d)...

For distinct linear factors (ax+b)(cx+d)...

### 2. A/(ax+b) + B/(cx+d) + ...

A/(ax+b) + B/(cx+d) + ...

### 3. Multiply both sides by Q(x) and solve for A, B, ...

Multiply both sides by Q(x) and solve for A, B, ...

### 4. Use strategic substitution

set each factor to zero to find constants
      `
    },
    {
      id: 'parti2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of distinct linear factors?',
            options: [
              'For distinct linear factors (ax+b)(cx+d)...',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'For distinct linear factors (ax+b)(cx+d)...'
          },
          {
            question: 'In the context of distinct linear factors, which is accurate?',
            options: [
              'Multiply both sides by Q(x) and solve for A, B, ...',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Multiply both sides by Q(x) and solve for A, B, ...'
          }
        ]
      }
    },
    {
      id: 'parti2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **For distinct linear factors (ax+b)(cx+d)...**
- **A/(ax+b) + B/(cx+d) + ...**
- **Multiply both sides by Q(x) and solve for A, B, ...**
- **Use strategic substitution**: set each factor to zero to find constants
      `
    },
    {
      id: 'parti2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to distinct linear factors?',
            options: [
              'set each factor to zero to find constants',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Use strategic substitution: set each factor to zero to find constants'
          }
        ]
      }
    },
    {
      id: 'parti2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For distinct linear factors (ax+b)(cx+d)...',
            options: ['For distinct linear factors (ax+b)(cx+d)...', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'A/(ax+b) + B/(cx+d) + ...',
            options: ['A/(ax+b) + B/(cx+d) + ...', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Multiply both sides by Q(x) and solve for A, B, ...',
            options: ['Multiply both sides by Q(x) and solve for A, B, ..', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['For distinct linear factors (ax+b)(cx+d)...', 'A/(ax+b) + B/(cx+d) + ...', 'Multiply both sides by Q(x) and solve for A, B, ..'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Distinct Linear Factors.'
      }
    }
  ]
}
