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
    }
  ]
};
