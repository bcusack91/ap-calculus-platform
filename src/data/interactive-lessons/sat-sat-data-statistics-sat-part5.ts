export const satDataStatsPart5Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-ds5-intro',
      type: 'text' as const,
      content: `
# 🎲 Probability Fundamentals

**Part 5 of 7 — Calculating Probabilities**

$$P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$

Probability is always between 0 (impossible) and 1 (certain).

**Complement rule:** $P(\\text{not } A) = 1 - P(A)$

This is incredibly useful — sometimes it's easier to find the probability something *doesn't* happen.

**Example:** 30% chance of rain → $P(\\text{no rain}) = 1 - 0.30 = 0.70 = 70\\%$.
      `
    },
    {
      id: 'sat-ds5-check',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A bag has 3 red, 5 blue, and 2 green marbles. Probability of NOT drawing red?',
            options: [
              '$3/10$',
              '$5/10$',
              '$7/10$',
              '$2/10$'
            ],
            correctAnswer: 2,
            explanation: '$P(\\text{red}) = 3/10$. Complement: $P(\\text{not red}) = 1 - 3/10 = 7/10$. Or: 7 non-red out of 10.'
          }
        ]
      }
    },
    {
      id: 'sat-ds5-and-or',
      type: 'text' as const,
      content: `
**"And" vs "Or" — The Critical Distinction**

**"And" (both events):**
- Independent: $P(A \\text{ and } B) = P(A) \\times P(B)$
- Dependent: $P(A \\text{ and } B) = P(A) \\times P(B|A)$

**"Or" (at least one):**
$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$

**Example:** Rolling a die. $P(\\text{even OR } > 4)$
- Even: \\{2,4,6\\} → $3/6$
- $> 4$: \\{5,6\\} → $2/6$
- Both: \\{6\\} → $1/6$
- Answer: $3/6 + 2/6 - 1/6 = 4/6 = 2/3$

**SAT Trap:** You MUST subtract the overlap to avoid double-counting!
      `
    },
    {
      id: 'sat-ds5-practice',
      type: 'input-boxes' as const,
      content: `
**Solve each problem.** 🧮

1) Probability of drawing a heart from a standard 52-card deck? (Enter as a simplified denominator only — e.g., if 1/4, enter 4)

2) Two coins are flipped. Probability both are heads? (Enter denominator)

3) In a class of 30: 18 play sports, 12 are in band, 5 do both. How many do at least one?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '4', '25'],
        hint1: '13 hearts ÷ 52 cards = $1/4$.',
        hint2: '$P(H) \\times P(H) = 1/2 \\times 1/2 = 1/4$.',
        hint3: 'At least one = $18 + 12 - 5 = 25$ (subtract overlap).',
        explanation: '1) $13/52 = 1/4$. 2) $1/4$. 3) $18 + 12 - 5 = 25$ students do at least one.'
      }
    },
    {
      id: 'sat-ds5-conditional',
      type: 'text' as const,
      content: `
**Conditional Probability on the SAT**

$$P(A|B) = \\frac{P(A \\text{ and } B)}{P(B)}$$

On the SAT, this almost always comes from a two-way table. Restrict to one row or column and compute the fraction.

**Example:** 200 people surveyed. 120 exercise regularly. Of those, 90 report being happy.
$$P(\\text{happy} | \\text{exercises}) = \\frac{90}{120} = \\frac{3}{4} = 75\\%$$

**Key words that signal conditional probability:** "given that," "among those who," "of the people who," "knowing that."
      `
    },
    {
      id: 'sat-ds5-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A jar has 4 red and 6 blue marbles. You draw two WITHOUT replacement. What is the probability both are red?',
            options: [
              '$4/25$',
              '$2/15$',
              '$16/100$',
              '$4/10$'
            ],
            correctAnswer: 1,
            explanation: '$P(\\text{1st red}) = 4/10$. $P(\\text{2nd red} | \\text{1st red}) = 3/9$. $P(\\text{both}) = (4/10)(3/9) = 12/90 = 2/15$.'
          },
          {
            question: 'In a class of 30: 18 play sports, 12 in band, 5 do both. Probability a random student plays sports OR is in band?',
            options: [
              '$25/30$',
              '$30/30$',
              '$18/30$',
              '$5/30$'
            ],
            correctAnswer: 0,
            explanation: '$P = (18+12-5)/30 = 25/30 = 5/6$. Subtract the 5 who do both to avoid double-counting.'
          }
        ]
      }
    }
  ]
}
