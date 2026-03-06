export const satDataStatsPart5Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds5-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 5 of 7 — Probability**

### Basic Probability

$$P(A) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$

Always between 0 (impossible) and 1 (certain).

### Complement

$$P(\\text{not } A) = 1 - P(A)$$

### "AND" (Intersection)

If events are **independent**: $P(A \\text{ and } B) = P(A) \\times P(B)$

**Example:** Coin flip AND die roll: $P(\\text{heads and 6}) = (1/2)(1/6) = 1/12$

### "OR" (Union)

$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$

If events are **mutually exclusive** (can't happen together): $P(A \\text{ or } B) = P(A) + P(B)$

### Conditional Probability

$$P(A | B) = \\frac{P(A \\text{ and } B)}{P(B)}$$

"Probability of A given B" — restrict your attention to only the B outcomes.`
    },
    {
      id: 'ds5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Probability** 🎯',
      exercise: {
        questions: [
          {
            question: 'A bag has 5 red, 3 blue, and 2 green marbles. What is the probability of drawing blue OR green?',
            options: ['$1/2$', '$3/10$', '$2/10$', '$5/10$'],
            correctAnswer: 0,
            explanation: 'Blue or green (mutually exclusive): $3/10 + 2/10 = 5/10 = 1/2$.'
          },
          {
            question: 'Two dice are rolled. What is the probability both show 6?',
            options: ['$1/36$', '$1/6$', '$1/12$', '$2/36$'],
            correctAnswer: 0,
            explanation: 'Independent events: $P = (1/6)(1/6) = 1/36$.'
          },
          {
            question: 'The probability it rains tomorrow is $0.3$. Using the complement, the probability it does NOT rain is:',
            options: ['$0.7$', '$0.3$', '$1.3$', '$-0.3$'],
            correctAnswer: 0,
            explanation: '$P(\\text{no rain}) = 1 - P(\\text{rain}) = 1 - 0.3 = 0.7$.'
          }
        ]
      }
    },
    {
      id: 'ds5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- $P(A) = \\text{favorable}/\\text{total}$, always between 0 and 1
- Complement: $P(\\text{not } A) = 1 - P(A)$ — useful when "not" is easier
- "AND" (independent): multiply probabilities
- "OR": add probabilities, subtract overlap
- Conditional: restrict the total to the given condition`
    }
  ]
};
