export const satExponentsPart4Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er4-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 4 of 7 — Solving Equations with Exponents**

### Strategy 1: Make the Bases Match

If $2^{3x} = 8^{x+1}$:
- Rewrite $8 = 2^3$: $2^{3x} = (2^3)^{x+1} = 2^{3x+3}$
- Bases match → $3x = 3x + 3$? That gives $0 = 3$, so **no solution**.

### Strategy 2: Use Logarithmic Thinking

If $3^x = 15$, the SAT won't expect you to compute $\\log_3 15$, but it might ask:
- "Between which two integers is $x$?" Since $3^2 = 9$ and $3^3 = 27$, $x$ is between 2 and 3.

### Strategy 3: Exponential Equations from Context

"A population doubles every 5 years. Starting at 1000, when will it reach 8000?"

$1000 \\cdot 2^{t/5} = 8000$ → $2^{t/5} = 8 = 2^3$ → $t/5 = 3$ → $t = 15$ years.

### Common SAT Moves

- Rewrite $4^x$ as $(2^2)^x = 2^{2x}$
- Rewrite $9^x$ as $(3^2)^x = 3^{2x}$
- Rewrite $\\frac{1}{8}$ as $2^{-3}$`
    },
    {
      id: 'er4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Equations** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $4^x = 32$, what is $x$?',
            options: ['$5/2$', '$8$', '$3$', '$4$'],
            correctAnswer: 0,
            explanation: '$4^x = 32$ → $(2^2)^x = 2^5$ → $2^{2x} = 2^5$ → $2x = 5$ → $x = 5/2$.'
          },
          {
            question: 'A population of bacteria triples every 4 hours. Starting with 500 bacteria, the population after $t$ hours is $P(t) = 500 \\cdot 3^{t/4}$. After 12 hours, the population is:',
            options: ['$13{,}500$', '$4{,}500$', '$1{,}500$', '$40{,}500$'],
            correctAnswer: 0,
            explanation: '$P(12) = 500 \\cdot 3^{12/4} = 500 \\cdot 3^3 = 500 \\cdot 27 = 13{,}500$.'
          },
          {
            question: 'If $9^{a} = 3^{a+4}$, what is $a$?',
            options: ['$4$', '$2$', '$8$', '$-4$'],
            correctAnswer: 0,
            explanation: '$9^a = (3^2)^a = 3^{2a}$. So $3^{2a} = 3^{a+4}$ → $2a = a + 4$ → $a = 4$.'
          }
        ]
      }
    },
    {
      id: 'er4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Match bases to compare exponents: $4 = 2^2$, $8 = 2^3$, $9 = 3^2$, $27 = 3^3$
- Growth problems: $P(t) = P_0 \\cdot r^{t/k}$ where $r$ is the growth factor and $k$ is the period
- "Between which integers" → evaluate the base at consecutive integer exponents`
    }
  ]
};
