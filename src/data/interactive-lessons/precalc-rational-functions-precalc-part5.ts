export const precalcRationalPart5Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'ratio5-intro',
      type: 'text' as const,
      content: `
# Solving Rational Equations

**Part 5 of 7 — Solving Rational Equations**

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
      id: 'ratio5-quiz1',
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
              'Multiply both sides by the LCD to eliminate fractions',
              'Solve resulting polynomial equation after clearing fractions',
              'solutions that make a denominator zero'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Multiply both sides by the LCD to eliminate fractions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Extraneous solutions?',
            options: [
              'Multiply both sides by the LCD to eliminate fractions',
              'Check all solutions against the original domain',
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
      id: 'ratio5-detail',
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
      id: 'ratio5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to solving rational equations?',
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
      id: 'ratio5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiply both sides by the LCD to…',
            options: ['Multiply both sides by the LCD to eliminate fractions', 'solutions that make a denominator zero', 'Check all solutions against the original domain', 'Solve resulting polynomial equation after clearing fractions']
          },
          {
            label: 'Check all solutions against the…',
            options: ['Multiply both sides by the LCD to eliminate fractions', 'Solve resulting polynomial equation after clearing fractions', 'solutions that make a denominator zero', 'Check all solutions against the original domain']
          },
          {
            label: 'Extraneous solutions',
            options: ['Check all solutions against the original domain', 'solutions that make a denominator zero', 'Multiply both sides by the LCD to eliminate fractions', 'Solve resulting polynomial equation after clearing fractions']
          }
        ],
        correctAnswers: ['Multiply both sides by the LCD to eliminate fractions', 'Check all solutions against the original domain', 'solutions that make a denominator zero'],
        hint1: 'Think about what each concept specifically describes in Solving Rational Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Solving Rational Equations describes a specific idea. Multiply both sides by the LCD to eliminate fractions. Check all solutions against the original domain. Extraneous solutions: solutions that make a denominator zero.'
      }
    }
  ]
}
