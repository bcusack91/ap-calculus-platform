export const satWordProblemsPart1Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp1-intro',
      type: 'text' as const,
      content: `# Word Problems: Translating Words to Math

**Part 1 of 7 — Building Equations from Descriptions**

### Translation Guide
| English | Math |
|---|---|
| "is", "equals", "was" | = |
| "more than", "increased by", "sum" | + |
| "less than", "decreased by", "fewer" | − |
| "times", "of", "product" | × |
| "per", "each", "ratio of" | ÷ |
| "what number", "a number" | x (or another variable) |

### Common Sentence Patterns
**"5 more than twice a number is 17"**
$$2x + 5 = 17 \implies x = 6$$

**"The product of 3 and a number, decreased by 7, equals 14"**
$$3x - 7 = 14 \implies x = 7$$

### SAT Trap: "Less Than" Order
"5 less than x" = $x - 5$ (NOT $5 - x$)

"3 less than twice a number" = $2x - 3$ (NOT $3 - 2x$)

### Defining Variables
Always state what your variable represents:
- Let $x$ = number of adult tickets
- Let $y$ = number of child tickets
- This prevents confusion in multi-step problems`
    },
    {
      id: 'wp1-q1',
      type: 'quiz' as const,
      question: '"Six more than three times a number is 27." What equation represents this?',
      options: [
        '6(3x) = 27',
        '3x + 6 = 27',
        '3x - 6 = 27',
        '6x + 3 = 27'
      ],
      correctAnswer: 1,
      explanation: '"Three times a number" = 3x. "Six more than" = + 6. "Is" = equals. So: 3x + 6 = 27. Solving: 3x = 21, x = 7.'
    },
    {
      id: 'wp1-q2',
      type: 'quiz' as const,
      question: '"8 less than the product of 4 and y" translates to:',
      options: [
        '8 - 4y',
        '4y - 8',
        '4(y - 8)',
        '8(4 - y)'
      ],
      correctAnswer: 1,
      explanation: '"Product of 4 and y" = 4y. "8 less than [something]" = [something] − 8 = 4y − 8. Remember: "less than" reverses the order — you subtract FROM the first quantity.'
    },
    {
      id: 'wp1-text2',
      type: 'text' as const,
      content: `## Deep Dive: Multi-Step Translation

### Worked Example 1: Complex Sentence → Equation

| Step | Work |
|---|---|
| **Sentence** | "When 4 is added to three times the difference of a number and 7, the result is 25." |
| **Inner part** | "the difference of a number and 7" → $x - 7$ |
| **"Three times"** | $3(x - 7)$ |
| **"4 is added to"** | $3(x - 7) + 4$ |
| **"the result is 25"** | $3(x - 7) + 4 = 25$ |
| **Solve** | $3x - 21 + 4 = 25$ → $3x = 42$ → $x = 14$ |

### Worked Example 2: Writing TWO Equations from a Story

| Step | Work |
|---|---|
| **Problem** | "A store sold 40 items — some shirts at \\$15 and some pants at \\$25. Total revenue was \\$700. How many of each?" |
| **Variables** | $s$ = shirts, $p$ = pants |
| **Equation 1 (quantity)** | $s + p = 40$ |
| **Equation 2 (value)** | $15s + 25p = 700$ |
| **Solve** | From Eq 1: $s = 40 - p$. Sub into Eq 2: $15(40 - p) + 25p = 700$ → $600 - 15p + 25p = 700$ → $10p = 100$ → $p = 10$, $s = 30$ |

### Translation Quick Reference — Tricky Phrases

| Phrase | Translation | Common Mistake |
|---|---|---|
| "a number decreased by 5" | $x - 5$ | $5 - x$ |
| "the ratio of a to b" | $\\frac{a}{b}$ | $\\frac{b}{a}$ |
| "x is 20% more than y" | $x = 1.2y$ | $x = y + 20$ |
| "twice the sum of a and b" | $2(a + b)$ | $2a + b$ |
| "x% of n" | $\\frac{x}{100} \\cdot n$ | $xn$ |`
    },
    {
      id: 'wp1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Translation Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"A number is 40% less than 80." What is the number?',
            options: ['$48$', '$40$', '$32$', '$112$'],
            correctAnswer: 0,
            explanation: '40% of 80 is $0.40 \\times 80 = 32$. "40% less than 80" means $80 - 32 = 48$. Or directly: $0.60 \\times 80 = 48$.'
          },
          {
            question: '"The sum of two consecutive odd integers is 52." What is the larger integer?',
            options: ['$27$', '$25$', '$26$', '$29$'],
            correctAnswer: 0,
            explanation: 'Consecutive odd: $n$ and $n + 2$. Sum: $n + (n + 2) = 52$ → $2n = 50$ → $n = 25$. Larger: $27$.'
          },
          {
            question: '"After a 25% discount, the price is $60." What was the original price?',
            options: ['$80$', '$75$', '$45$', '$85$'],
            correctAnswer: 0,
            explanation: 'After 25% discount, you pay 75% of original: $0.75x = 60$ → $x = 80$. Common trap: adding 25% of 60 ($15$) to get $75$ — but 25% of 75 is $18.75$, not $15$.'
          }
        ]
      }
    },
    {
      id: 'wp1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Translate to Math** — Select the correct mathematical expression.',
      exercise: {
        dropdowns: [
          '"5 less than twice x" → [2x − 5|5 − 2x|2(x − 5)|2x + 5]',
          '"the product of 3 and the sum of x and 4" → [3(x + 4)|3x + 4|3 + x(4)|(3 + x)4]',
          '"x is 30% of y" → [x = 0.3y|x = 30y|x = y − 0.3|x = y/30]',
          '"twice a number, increased by 7, equals 21" → [2x + 7 = 21|2(x + 7) = 21|7x + 2 = 21|2x − 7 = 21]'
        ],
        correctAnswers: ['2x − 5', '3(x + 4)', 'x = 0.3y', '2x + 7 = 21'],
        hint1: '"Less than" means subtract from the other quantity.',
        hint2: '"Product of A and B" means A × B. "Sum of x and 4" is grouped first.',
        hint3: '"30% of y" = 0.3 × y.',
        explanation: '"5 less than 2x" = 2x − 5 (subtract 5 from 2x). "Product of 3 and (x+4)" = 3(x+4) — the sum is grouped. "30% of" = 0.3×. "Twice a number increased by 7" = 2x + 7 (not 2(x+7)).'
      }
    },
    {
      id: 'wp1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary: Translating Words to Math

| English Phrase | Math Translation |
|---|---|
| "more than" / "increased by" | $+$ |
| "less than" / "decreased by" | $-$ (order reverses!) |
| "times" / "of" / "product" | $\\times$ |
| "per" / "each" / "out of" | $\\div$ |
| "is" / "equals" / "was" | $=$ |
| "x% of n" | $\\frac{x}{100} \\cdot n$ |
| "x% more than" | $\\times (1 + \\frac{x}{100})$ |

### SAT Strategy
- Read the sentence **twice** — once for meaning, once to translate.
- Always define your variable before writing equations.
- "Less than" reverses: "$a$ less than $b$" = $b - a$.
- When you solve, **re-read the question** — are they asking for $x$ or $x + 5$?

*Next: Age problems and number problems →*`
    }
  ]
};
