export const calcabFRQPart4Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq4-intro',
      type: 'text' as const,
      content: `# Free Response Strategies

**Part 4 of 7 — Calculator Strategies**

### When Calculators Are Allowed (Q1-Q2)

You may be asked to:
1. **Evaluate a definite integral** — use numerical integration
2. **Find zeros of $f'$** — graph and find zeros
3. **Find intersections** — graph both functions
4. **Evaluate $f(a)$** — direct computation

### Important Rules
- Store intermediate values (don't round too early)
- Show the mathematical setup even if using calculator
- Write at least 3 decimal places`
    },
    {
      id: 'frq4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Calculator Skills** 🎯',
      exercise: {
        questions: [
          {
            question: 'On calculator problems, if you evaluate $\\int_0^3 \\sqrt{1+x^3}\\,dx$ numerically, what must you write?',
            options: ['The integral setup AND the decimal answer', 'Just the decimal value', 'A Riemann sum approximation', 'The antiderivative'],
            correctAnswer: 0,
            explanation: 'Always show the mathematical setup: $\\int_0^3 \\sqrt{1+x^3}\\,dx = 6.586$ (or similar). Both are needed for full credit.'
          }
        ]
      }
    },
    {
      id: 'frq4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Show setup + numerical answer
2. Use 3+ decimal places
3. Don't round intermediate results`
    }
  ]
};
