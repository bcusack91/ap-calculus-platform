export const calcabAreaCurvesPart5Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area5-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 5 of 7 \u2014 Area with Absolute Value**

### Using Absolute Value

$\\int_a^b |f(x)|\\,dx$ gives the total area between $f(x)$ and the $x$-axis (always positive).

### Example

$\\int_0^{2\\pi} |\\sin x|\\,dx = \\int_0^{\\pi} \\sin x\\,dx + \\int_{\\pi}^{2\\pi} (-\\sin x)\\,dx = 2 + 2 = 4$`
    },
    {
      id: 'area5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Total vs Signed Area** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the total area between $y = x^2 - 4$ and the $x$-axis on $[-3, 3]$.',
            options: ['$\\frac{46}{3}$', '$\\frac{32}{3}$', '$2$', '$\\frac{26}{3}$'],
            correctAnswer: 0,
            explanation: '$x^2-4 < 0$ on $(-2,2)$ and $> 0$ outside. Total area = $\\int_{-3}^{-2}(x^2-4)\\,dx + \\int_{-2}^{2}(4-x^2)\\,dx + \\int_2^3(x^2-4)\\,dx = \\frac{4}{3} + \\frac{32}{3} + \\frac{4}{3} + \\frac{4}{3} + \\frac{2}{3} = we need $2[\\frac{x^3}{3}-4x]_2^3 + [4x-\\frac{x^3}{3}]_{-2}^2 = 2(9-12-\\frac{8}{3}+8) + 2(8-\\frac{8}{3}) = 2\\cdot\\frac{7}{3} + \\frac{32}{3} = \\frac{14}{3}+\\frac{32}{3} = \\frac{46}{3}$.'
          }
        ]
      }
    },
    {
      id: 'area5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5
- Total area = $\\int |f(x)|\\,dx$ (split where $f$ changes sign)
- Signed area = $\\int f(x)\\,dx$ (can be negative)`
    }
  ]
};
