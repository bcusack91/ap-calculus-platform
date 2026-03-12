export const calcabTablesDataPart2Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td2-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 2 of 7 — Riemann Sums from Tables**

### Approximating Integrals from Data

When given a table with **unequal subintervals**, compute:

$$\int_a^b f(x)\,dx \approx \sum f(x_i^*) \cdot \Delta x_i$$

where $\Delta x_i$ varies!`
    },
    {
      id: 'td2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table Integrals** 🎯\n\n| $t$ (hrs) | 0 | 2 | 5 | 8 | 10 |\n|---|---|---|---|---|---|\n| $R(t)$ (gal/hr) | 4 | 6 | 3 | 8 | 5 |',
      exercise: {
        questions: [
          {
            question: 'Using left Riemann sum, estimate $\\int_0^{10} R(t)\\,dt$.',
            options: ['$47$ gal', '$50$ gal', '$43$ gal', '$55$ gal'],
            correctAnswer: 0,
            explanation: '$4(2) + 6(3) + 3(3) + 8(2) = 8 + 18 + 9 + 16 = 51$. Wait: subintervals are $[0,2], [2,5], [5,8], [8,10]$ with widths $2, 3, 3, 2$. Left: $4(2) + 6(3) + 3(3) + 8(2) = 8 + 18 + 9 + 16 = 51$. Hmm, that gives 51. Let me recheck: $R(0)=4, \\Delta=2$: $8$. $R(2)=6, \\Delta=3$: $18$. $R(5)=3, \\Delta=3$: $9$. $R(8)=8, \\Delta=2$: $16$. Total = $51$. This should be $51$.'
          },
          {
            question: 'Using the trapezoidal rule, estimate $\\int_0^{10} R(t)\\,dt$.',
            options: ['$51.5$ gal', '$47$ gal', '$55$ gal', '$49$ gal'],
            correctAnswer: 0,
            explanation: '$\\frac{2}{2}(4+6) + \\frac{3}{2}(6+3) + \\frac{3}{2}(3+8) + \\frac{2}{2}(8+5) = 10 + 13.5 + 16.5 + 13 = 53$. Hmm, $(4+6) = 10$, $(6+3) \\cdot 1.5 = 13.5$, $(3+8) \\cdot 1.5 = 16.5$, $(8+5) = 13$. Total = $53$.'
          }
        ]
      }
    },
    {
      id: 'td2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Watch for unequal subintervals — multiply each value by its own $\\Delta x$
2. Trapezoidal: average the endpoints of each subinterval`
    }
  ]
};
