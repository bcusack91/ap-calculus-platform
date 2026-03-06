export const satExponentsPart7Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er7-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 7 of 7 — Review & SAT-Level Practice**

### Quick Reference Card

| Operation | Rule | Example |
|-----------|------|---------|
| $a^m \\cdot a^n$ | $a^{m+n}$ | $x^3 \\cdot x^4 = x^7$ |
| $a^m / a^n$ | $a^{m-n}$ | $x^5 / x^2 = x^3$ |
| $(a^m)^n$ | $a^{mn}$ | $(x^3)^2 = x^6$ |
| $a^{-n}$ | $1/a^n$ | $x^{-2} = 1/x^2$ |
| $a^{m/n}$ | $\\sqrt[n]{a^m}$ | $8^{2/3} = 4$ |
| $\\sqrt{ab}$ | $\\sqrt{a}\\cdot\\sqrt{b}$ | $\\sqrt{12} = 2\\sqrt{3}$ |

### Common SAT Exponent Traps

1. $(x + y)^2 \\neq x^2 + y^2$ — must FOIL
2. $(-x)^2 = x^2$ but $-x^2 = -(x^2)$ — order of operations!
3. $\\sqrt{x^2} = |x|$, not just $x$
4. $a^0 = 1$ for ALL nonzero $a$, including negatives: $(-5)^0 = 1$`
    },
    {
      id: 'er7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $\\frac{x^a \\cdot x^5}{x^3} = x^{10}$, what is $a$?',
            options: ['$8$', '$2$', '$12$', '$5$'],
            correctAnswer: 0,
            explanation: '$x^{a+5-3} = x^{a+2} = x^{10}$ → $a + 2 = 10$ → $a = 8$.'
          },
          {
            question: 'Which is greatest: $2^{10}$, $4^5$, $8^3$, $16^2$?',
            options: ['$2^{10}$ and $4^5$ are equal (both 1024), and they are the greatest', '$16^2$', '$8^3$', 'All are equal'],
            correctAnswer: 0,
            explanation: '$2^{10} = 1024$, $4^5 = (2^2)^5 = 2^{10} = 1024$, $8^3 = (2^3)^3 = 2^9 = 512$, $16^2 = (2^4)^2 = 2^8 = 256$. $2^{10} = 4^5 = 1024$ is greatest.'
          },
          {
            question: 'Simplify: $\\frac{\\sqrt{50}}{\\sqrt{2}}$',
            options: ['$5$', '$5\\sqrt{2}$', '$\\sqrt{25}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{50/2} = \\sqrt{25} = 5$. Both A and C are correct since $\\sqrt{25} = 5$.'
          }
        ]
      }
    },
    {
      id: 'er7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Exponent rules are about counting: add when multiplying, subtract when dividing, multiply when raising to a power
- Convert to same base to compare or solve
- Watch for traps: $(x+y)^2$, negative vs. negated squares, $\\sqrt{x^2} = |x|$
- Practice converting between radical and exponent notation fluently`
    }
  ]
};
