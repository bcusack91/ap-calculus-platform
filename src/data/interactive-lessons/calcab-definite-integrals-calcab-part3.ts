export const calcabDefiniteIntegralsPart3Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int3-intro',
      type: 'text' as const,
      content: `# \u222B Properties of Integrals

**Part 3 of 7 \u2014 Properties of Integrals**

### Essential Properties

| Property | Formula |
|----------|---------|
| Constant Multiple | $\\int_a^b cf(x)\\,dx = c\\int_a^b f(x)\\,dx$ |
| Sum/Difference | $\\int_a^b [f(x) \\pm g(x)]\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$ |
| Additivity | $\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx = \\int_a^c f(x)\\,dx$ |
| Reversal | $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$ |
| Zero Width | $\\int_a^a f(x)\\,dx = 0$ |
| Comparison | If $f(x) \\geq g(x)$ on $[a,b]$, then $\\int_a^b f\\,dx \\geq \\int_a^b g\\,dx$ |`
    },
    {
      id: 'int3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apply Integral Properties** \ud83c\udfaf\n\nGiven: $\\int_0^5 f(x)\\,dx = 10$ and $\\int_0^5 g(x)\\,dx = 3$.',
      exercise: {
        questions: [
          {
            question: 'Find $\\int_0^5 [2f(x) - 3g(x)]\\,dx$.',
            options: ['$11$', '$7$', '$20$', '$1$'],
            correctAnswer: 0,
            explanation: '$2\\int_0^5 f\\,dx - 3\\int_0^5 g\\,dx = 2(10) - 3(3) = 20 - 9 = 11$.'
          },
          {
            question: 'If $\\int_0^3 f(x)\\,dx = 7$, find $\\int_3^5 f(x)\\,dx$.',
            options: ['$3$', '$17$', '$7$', '$-3$'],
            correctAnswer: 0,
            explanation: 'By additivity: $\\int_0^3 f + \\int_3^5 f = \\int_0^5 f$. So $7 + \\int_3^5 f = 10$, giving $\\int_3^5 f = 3$.'
          },
          {
            question: 'Find $\\int_5^0 f(x)\\,dx$.',
            options: ['$10$', '$-10$', '$0$', '$5$'],
            correctAnswer: 1,
            explanation: 'Reversing limits changes the sign: $\\int_5^0 f = -\\int_0^5 f = -10$.'
          }
        ]
      }
    },
    {
      id: 'int3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

1. Integrals are **linear**: constants factor out, sums split
2. **Additivity** lets you break integrals into pieces over subintervals
3. **Reversing limits** flips the sign
4. These properties are essential for AP free-response questions with tables and given integral values`
    }
  ]
};
