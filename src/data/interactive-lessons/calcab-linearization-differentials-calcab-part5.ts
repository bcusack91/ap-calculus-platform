export const calcabLinearizationPart5Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin5-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 5 of 7 — Linearization with Tables**

### Using a Table of Values

When given a table of $f(a)$ and $f'(a)$, you can write the linearization immediately:

$$L(x) = f(a) + f'(a)(x - a)$$`
    },
    {
      id: 'lin5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table-Based Linearization** 🎯\n\nGiven: $f(3) = 7$ and $f\'(3) = -2$.',
      exercise: {
        questions: [
          {
            question: 'Write the linearization at $a = 3$ and approximate $f(3.1)$.',
            options: ['$6.8$', '$7.2$', '$7$', '$6.98$'],
            correctAnswer: 0,
            explanation: '$L(x) = 7 + (-2)(x-3) = 7 - 2(x-3)$. $L(3.1) = 7 - 2(0.1) = 6.8$.'
          },
          {
            question: 'Using the same linearization, approximate $f(2.9)$.',
            options: ['$7.2$', '$6.8$', '$7.1$', '$6.9$'],
            correctAnswer: 0,
            explanation: '$L(2.9) = 7 - 2(-0.1) = 7 + 0.2 = 7.2$.'
          }
        ]
      }
    },
    {
      id: 'lin5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Table problems give you $f(a)$ and $f'(a)$ directly
2. Just plug into $L(x) = f(a) + f'(a)(x-a)$`
    }
  ]
};
