export const negativeNumbersPart2Data = {
  topicSlug: 'negative-numbers-grade6',
  sections: [
    {
      id: 'neg-add-same',
      type: 'text' as const,
      content: `## Adding Negative Numbers — Same Signs

When both numbers have the **same sign**, add their absolute values and keep the sign.

$$(-3) + (-5) = -(3 + 5) = -8$$

Think: if you owe \\$3 and then owe \\$5 more, you owe \\$8 total → $-8$.`,
    },
    {
      id: 'neg-mc-add-same',
      type: 'multiple-choice' as const,
      content: 'What is $(-4) + (-7)$?',
      exercise: {
        questions: [
          {
            question: 'What is $(-4) + (-7)$?',
            options: ['$-11$', '$11$', '$-3$', '$3$'],
            correctAnswer: 0,
            explanation: 'Same signs: $4 + 7 = 11$, keep the negative → $-11$.',
          },
        ],
      },
    },
    {
      id: 'neg-add-diff',
      type: 'text' as const,
      content: `## Adding Negative Numbers — Different Signs

When the signs are **different**, subtract the smaller absolute value from the larger and take the sign of the number with the larger absolute value.

$$7 + (-4) = 7 - 4 = 3 \\quad\\text{(positive wins, } |7| > |{-4}|\\text{)}$$

$$(-9) + 2 = -(9 - 2) = -7 \\quad\\text{(negative wins, } |{-9}| > |2|\\text{)}$$`,
    },
    {
      id: 'neg-mc-add-diff',
      type: 'multiple-choice' as const,
      content: 'What is $10 + (-15)$?',
      exercise: {
        questions: [
          {
            question: 'What is $10 + (-15)$?',
            options: ['$-5$', '$5$', '$-25$', '$25$'],
            correctAnswer: 0,
            explanation: 'Different signs: $15 - 10 = 5$. The larger absolute value ($15$) is negative, so the answer is $-5$.',
          },
        ],
      },
    },
    {
      id: 'neg-subtract',
      type: 'text' as const,
      content: `## Subtracting Negative Numbers

The golden rule:

> **Subtracting a negative = adding a positive.**

$$5 - (-3) = 5 + 3 = 8$$

$$(-4) - (-6) = -4 + 6 = 2$$

Think of the two minus signs canceling each other out.`,
    },
    {
      id: 'neg-mc-subtract',
      type: 'multiple-choice' as const,
      content: 'What is $(-2) - (-9)$?',
      exercise: {
        questions: [
          {
            question: 'What is $(-2) - (-9)$?',
            options: ['$7$', '$-7$', '$11$', '$-11$'],
            correctAnswer: 0,
            explanation: 'Subtracting a negative = adding: $(-2) - (-9) = -2 + 9 = 7$.',
          },
        ],
      },
    },
    {
      id: 'neg-mc-subtract-2',
      type: 'multiple-choice' as const,
      content: 'A diver is at $-30$ feet. She ascends $18$ feet and then descends $7$ feet. What is her depth now?',
      exercise: {
        questions: [
          {
            question: 'A diver is at $-30$ feet. She ascends $18$ feet and then descends $7$ feet. What is her depth now?',
            options: ['$-19$ feet', '$-41$ feet', '$-5$ feet', '$-55$ feet'],
            correctAnswer: 0,
            explanation: '$-30 + 18 = -12$, then $-12 + (-7) = -19$ feet.',
          },
        ],
      },
    },
  ],
}
