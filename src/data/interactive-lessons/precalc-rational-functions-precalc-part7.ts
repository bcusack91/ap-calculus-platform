export const precalcRationalPart7Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'ratio7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Multiply both sides by the LCD to eliminate fractions

Multiply both sides by the LCD to eliminate fractions

### 2. Check all solutions against the original domain

Check all solutions against the original domain

### 3. Extraneous solutions

solutions that make a denominator zero

### 4. Solve resulting polynomial equation after clearing fractions

Solve resulting polynomial equation after clearing fractions
      `
    },
    {
      id: 'ratio7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Multiply both sides by the LCD to…?',
            options: [
              'Check all solutions against the original domain',
              'solutions that make a denominator zero',
              'Multiply both sides by the LCD to eliminate fractions',
              'Solve resulting polynomial equation after clearing fractions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Multiply both sides by the LCD to eliminate fractions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Extraneous solutions:',
            options: [
              'Check all solutions against the original domain',
              'Multiply both sides by the LCD to eliminate fractions',
              'solutions that make a denominator zero',
              'Solve resulting polynomial equation after clearing fractions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Extraneous solutions: solutions that make a denominator zero. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ratio7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Multiply both sides by the LCD to eliminate fractions**
- **Check all solutions against the original domain**
- **Extraneous solutions**: solutions that make a denominator zero
- **Solve resulting polynomial equation after clearing fractions**
      `
    },
    {
      id: 'ratio7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'Solve resulting polynomial equation after clearing fractions',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Solve resulting polynomial equation after clearing fractions'
          }
        ]
      }
    },
    {
      id: 'ratio7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiply both sides by the LCD to…',
            options: ['solutions that make a denominator zero', 'Check all solutions against the original domain', 'Multiply both sides by the LCD to eliminate fractions', 'Solve resulting polynomial equation after clearing fractions']
          },
          {
            label: 'Check all solutions against the…',
            options: ['Multiply both sides by the LCD to eliminate fractions', 'Check all solutions against the original domain', 'solutions that make a denominator zero', 'Solve resulting polynomial equation after clearing fractions']
          },
          {
            label: 'Extraneous solutions',
            options: ['Solve resulting polynomial equation after clearing fractions', 'Multiply both sides by the LCD to eliminate fractions', 'solutions that make a denominator zero', 'Check all solutions against the original domain']
          }
        ],
        correctAnswers: ['Multiply both sides by the LCD to eliminate fractions', 'Check all solutions against the original domain', 'solutions that make a denominator zero'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Multiply both sides by the LCD to eliminate fractions. Check all solutions against the original domain. Extraneous solutions: solutions that make a denominator zero.'
      }
    }
  ]
}
