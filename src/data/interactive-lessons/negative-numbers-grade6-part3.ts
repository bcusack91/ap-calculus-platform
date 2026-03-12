export const negativeNumbersPart3Data = {
  topicSlug: 'negative-numbers-grade6',
  sections: [
    {
      id: 'neg-ordering',
      type: 'text' as const,
      content: `## Ordering Negative Numbers

To put numbers in order, picture them on a number line.

**Example:** Order $-3, 5, -8, 0, 2$ from least to greatest.

1. Find the most negative (farthest left): $-8$
2. Next: $-3$
3. Then zero
4. Then the positives: $2, 5$

$$-8 < -3 < 0 < 2 < 5$$`,
    },
    {
      id: 'neg-mc-order',
      type: 'multiple-choice' as const,
      content: 'Which lists $-6, 1, -2, 4, 0$ from least to greatest?',
      exercise: {
        questions: [
          {
            question: 'Which lists $-6, 1, -2, 4, 0$ from least to greatest?',
            options: [
              '$-6, -2, 0, 1, 4$',
              '$-2, -6, 0, 1, 4$',
              '$4, 1, 0, -2, -6$',
              '$0, -2, -6, 1, 4$',
            ],
            correctAnswer: 0,
            explanation: 'From the number line: $-6 < -2 < 0 < 1 < 4$.',
          },
        ],
      },
    },
    {
      id: 'neg-summary',
      type: 'text' as const,
      content: `## Quick Review

| Concept | Key Idea |
|---|---|
| Negative numbers | Less than zero; go left on the number line |
| Comparing | Closer to zero = greater ($-2 > -7$) |
| Absolute value | Distance from zero ($\\lvert{-8}\\rvert = 8$) |
| Same-sign addition | Add values, keep the sign |
| Different-sign addition | Subtract values, keep sign of larger |
| Subtract a negative | Same as adding a positive |

Great job — you now have a solid understanding of negative numbers! 🎉`,
    },
    {
      id: 'neg-mc-final-1',
      type: 'multiple-choice' as const,
      content: 'The temperature started at $-5°F$ and rose $12$ degrees. What is the new temperature?',
      exercise: {
        questions: [
          {
            question: 'The temperature started at $-5°F$ and rose $12$ degrees. What is the new temperature?',
            options: ['$7°F$', '$-17°F$', '$17°F$', '$-7°F$'],
            correctAnswer: 0,
            explanation: '$-5 + 12 = 7$. Rising $12$ degrees from $-5$ gives $7°F$.',
          },
        ],
      },
    },
    {
      id: 'neg-mc-final-2',
      type: 'multiple-choice' as const,
      content: 'What is $(-3) + (-8) - (-5)$?',
      exercise: {
        questions: [
          {
            question: 'What is $(-3) + (-8) - (-5)$?',
            options: ['$-6$', '$-16$', '$6$', '$0$'],
            correctAnswer: 0,
            explanation: '$(-3) + (-8) = -11$, then $-11 - (-5) = -11 + 5 = -6$.',
          },
        ],
      },
    },
  ],
}
