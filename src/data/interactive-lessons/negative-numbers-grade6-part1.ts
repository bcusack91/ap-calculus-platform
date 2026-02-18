export const negativeNumbersPart1Data = {
  topicSlug: 'negative-numbers-grade6',
  sections: [
    {
      id: 'neg-intro',
      type: 'text' as const,
      content: `## What Are Negative Numbers?

**Negative numbers** are numbers less than zero. They are written with a **minus sign** in front, like $-3$, $-7$, or $-15$.

You see negative numbers in real life all the time:
- **Temperature:** $-5°F$ means 5 degrees *below* zero
- **Elevation:** $-200$ ft means 200 feet *below* sea level
- **Money:** Owing \\$20 can be represented as $-20$

Zero is the dividing line — it is neither positive nor negative.`,
    },
    {
      id: 'neg-number-line',
      type: 'text' as const,
      content: `## The Number Line

Picture a horizontal line with **zero in the middle**.

$$\\cdots\\;\\; -5 \\;\\; -4 \\;\\; -3 \\;\\; -2 \\;\\; -1 \\;\\; 0 \\;\\; 1 \\;\\; 2 \\;\\; 3 \\;\\; 4 \\;\\; 5 \\;\\;\\cdots$$

- **Right** of zero → positive numbers (get larger)
- **Left** of zero → negative numbers (get smaller)

The farther left you go, the **smaller** the number.`,
    },
    {
      id: 'neg-mc-1',
      type: 'multiple-choice' as const,
      content: 'A city records a temperature of $-11°F$. What does the negative sign tell us?',
      exercise: {
        questions: [
          {
            question: 'A city records a temperature of $-11°F$. What does the negative sign tell us?',
            options: [
              'The temperature is 11 degrees below zero',
              'The temperature is 11 degrees above zero',
              'The thermometer is broken',
              'The temperature is exactly zero',
            ],
            correctAnswer: 0,
            explanation: 'A negative temperature means it is *below* zero. $-11°F$ is 11 degrees below zero.',
          },
        ],
      },
    },
    {
      id: 'neg-comparing',
      type: 'text' as const,
      content: `## Comparing Negative Numbers

Here is the key rule:

> **The negative number closer to zero is the greater one.**

Think of it on the number line — the number further to the **right** is always greater.

| Comparison | Result | Reason |
|---|---|---|
| $-2$ vs $-7$ | $-2 > -7$ | $-2$ is closer to zero |
| $-10$ vs $-3$ | $-10 < -3$ | $-3$ is closer to zero |
| $0$ vs $-5$ | $0 > -5$ | Zero beats every negative |`,
    },
    {
      id: 'neg-mc-2',
      type: 'multiple-choice' as const,
      content: 'Which number is greater: $-4$ or $-9$?',
      exercise: {
        questions: [
          {
            question: 'Which number is greater: $-4$ or $-9$?',
            options: ['$-4$', '$-9$', 'They are equal', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '$-4$ is closer to zero than $-9$, so $-4 > -9$.',
          },
        ],
      },
    },
    {
      id: 'neg-abs-value',
      type: 'text' as const,
      content: `## Absolute Value

The **absolute value** of a number is its **distance from zero** on the number line — no matter which direction.

$$|{-6}| = 6 \\qquad |{6}| = 6 \\qquad |{0}| = 0$$

We write absolute value with vertical bars: $|x|$.

Absolute value is **never negative** — it measures distance, and distance is always zero or positive.`,
    },
    {
      id: 'neg-mc-3',
      type: 'multiple-choice' as const,
      content: 'What is $|{-12}|$?',
      exercise: {
        questions: [
          {
            question: 'What is $|{-12}|$?',
            options: ['$12$', '$-12$', '$0$', '$1$'],
            correctAnswer: 0,
            explanation: 'The absolute value of $-12$ is its distance from zero, which is $12$.',
          },
        ],
      },
    },
  ],
}
