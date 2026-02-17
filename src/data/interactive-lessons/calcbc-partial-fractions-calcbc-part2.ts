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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "For distinct linear factors…" refer to in calculus?',
            options: [
              'set each factor to zero to find constants',
              'A/(ax+b) + B/(cx+d) + ...',
              'For distinct linear factors (ax+b)(cx+d)...',
              'Multiply both sides by Q(x) and solve for A, B, ...'
            ],
            correctAnswer: 2,
            explanation: 'Correct — For distinct linear factors (ax+b)(cx+d)... The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Distinct Linear Factors, which explains Multiply both sides by Q(x) and solve…?',
            options: [
              'Multiply both sides by Q(x) and solve for A, B, ...',
              'For distinct linear factors (ax+b)(cx+d)...',
              'A/(ax+b) + B/(cx+d) + ...',
              'set each factor to zero to find constants'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Multiply both sides by Q(x) and solve for A, B, ... Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Use strategic substitution?',
            options: [
              'set each factor to zero to find constants',
              'A/(ax+b) + B/(cx+d) + ...',
              'Multiply both sides by Q(x) and solve for A, B, ...',
              'For distinct linear factors (ax+b)(cx+d)...'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Use strategic substitution: set each factor to zero to find constants. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For distinct linear factors…',
            options: ['set each factor to zero to find constants', 'Multiply both sides by Q(x) and solve for A, B, ...', 'A/(ax+b) + B/(cx+d) + ...', 'For distinct linear factors (ax+b)(cx+d)...']
          },
          {
            label: 'A/(ax+b) + B/(cx+d) + ...',
            options: ['For distinct linear factors (ax+b)(cx+d)...', 'set each factor to zero to find constants', 'Multiply both sides by Q(x) and solve for A, B, ...', 'A/(ax+b) + B/(cx+d) + ...']
          },
          {
            label: 'Multiply both sides by Q(x) and solve…',
            options: ['A/(ax+b) + B/(cx+d) + ...', 'For distinct linear factors (ax+b)(cx+d)...', 'Multiply both sides by Q(x) and solve for A, B, ...', 'set each factor to zero to find constants']
          }
        ],
        correctAnswers: ['For distinct linear factors (ax+b)(cx+d)...', 'A/(ax+b) + B/(cx+d) + ...', 'Multiply both sides by Q(x) and solve for A, B, ...'],
        hint1: 'Think about what each concept specifically describes in Distinct Linear Factors.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Distinct Linear Factors describes a specific idea. For distinct linear factors (ax+b)(cx+d)... A/(ax+b) + B/(cx+d) + ... Multiply both sides by Q(x) and solve for A, B, ...'
      }
    }
  ]
}
