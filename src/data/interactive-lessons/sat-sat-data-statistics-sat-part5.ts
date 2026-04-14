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
      id: 'ds5-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — "At Least One" with Complement

**A coin is flipped 3 times. What is the probability of getting at least one head?**

| Approach | Work |
|----------|------|
| Direct | Count all cases with ≥ 1 head... tedious |
| Complement | $P(\\text{at least 1 head}) = 1 - P(\\text{no heads})$ |
| Calculate | $P(\\text{all tails}) = (1/2)^3 = 1/8$ |
| Answer | $1 - 1/8 = 7/8$ |

**Rule:** "At least one" = $1$ − P(none). Always use the complement!

### Worked Example 2 — "OR" with Overlap

**In a class of 30: 18 play soccer, 12 play basketball, 5 play both. What is P(soccer OR basketball)?**

| Step | Work |
|------|------|
| Formula | $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ |
| Substitute | $\\frac{18}{30} + \\frac{12}{30} - \\frac{5}{30} = \\frac{25}{30}$ |
| Simplify | $5/6$ |

### Worked Example 3 — Conditional from a Table

**200 students surveyed: 80 passed math, 60 passed science, 40 passed both.**

$P(\\text{science} | \\text{math}) = \\frac{P(\\text{both})}{P(\\text{math})} = \\frac{40/200}{80/200} = \\frac{40}{80} = \\frac{1}{2}$

Of students who passed math, half also passed science.`
    },
    {
      id: 'ds5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Probability** 🎯',
      exercise: {
        questions: [
          {
            question: 'A die is rolled twice. What is the probability of getting at least one 6?',
            options: ['$11/36$', '$1/36$', '$1/6$', '$2/6$'],
            correctAnswer: 0,
            explanation: 'Complement: $P(\\text{no 6}) = (5/6)^2 = 25/36$. $P(\\text{at least one 6}) = 1 - 25/36 = 11/36$.'
          },
          {
            question: 'P(A) = 0.6, P(B) = 0.3, and A and B are independent. What is P(A or B)?',
            options: ['$0.72$', '$0.90$', '$0.18$', '$0.30$'],
            correctAnswer: 0,
            explanation: '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.6 + 0.3 - (0.6)(0.3) = 0.9 - 0.18 = 0.72$.'
          },
          {
            question: 'A bag has 4 red and 6 blue marbles. Two are drawn without replacement. What is P(both red)?',
            options: ['$2/15$', '$4/25$', '$16/100$', '$2/10$'],
            correctAnswer: 0,
            explanation: 'First draw: $4/10$. Second draw (without replacement): $3/9$. $P = (4/10)(3/9) = 12/90 = 2/15$.'
          }
        ]
      }
    },
    {
      id: 'ds5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Probability Setup** 🔍\n\nChoose the correct formula or approach for each problem.',
      exercise: {
        dropdowns: [
          { label: '"At least one head in 5 coin flips"', options: ['1 − P(all tails)', 'P(1 head) + P(2 heads) + ...', 'P(head) × 5', '1/5'] },
          { label: '"Probability of drawing a king OR a heart"', options: ['P(K) + P(H) − P(K and H)', 'P(K) + P(H)', 'P(K) × P(H)', '1 − P(K) − P(H)'] },
          { label: '"Two dice rolled, P(both show even)"', options: ['P(even) × P(even)', 'P(even) + P(even)', '1 − P(both odd)', 'P(even) / P(even)'] },
          { label: '"Probability of rain on Monday given it rained Sunday"', options: ['Conditional: P(Mon|Sun)', 'P(Mon) × P(Sun)', 'P(Mon) + P(Sun)', '1 − P(Mon)'] }
        ],
        correctAnswers: ['1 − P(all tails)', 'P(K) + P(H) − P(K and H)', 'P(even) × P(even)', 'Conditional: P(Mon|Sun)'],
        hint1: '"At least one" → always use complement.',
        hint2: 'King OR heart → these overlap (king of hearts), so subtract the intersection.',
        hint3: 'Two independent dice → multiply. "Given that" → conditional probability.',
        explanation: '"At least one" = 1 − P(none). "Or" with overlap → add − intersection. Independent events → multiply. "Given" = conditional.'
      }
    },
    {
      id: 'ds5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Rule | Formula | When to Use |
|------|---------|-------------|
| Basic probability | $P(A) = \\text{favorable} / \\text{total}$ | Always |
| Complement | $P(\\text{not } A) = 1 - P(A)$ | "At least one," "none" |
| AND (independent) | $P(A) \\times P(B)$ | Events don't affect each other |
| OR | $P(A) + P(B) - P(A \\cap B)$ | "Either... or..." |
| Conditional | $P(A|B) = P(A \\cap B) / P(B)$ | "Given that..." |
| Without replacement | Adjust denominator after each draw | Drawing from a bag/deck |

- "At least one" → use complement (much faster)
- With replacement: probabilities stay the same. Without: they change
- On the SAT, conditional probability often comes from two-way tables`
    }
  ]
};
