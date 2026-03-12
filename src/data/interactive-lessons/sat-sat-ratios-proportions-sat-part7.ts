export const satRatiosPart7Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp7-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 7 of 7 — Review & SAT Mixed Practice**

### Quick Reference

| Topic | Key Formula |
|-------|------------|
| Ratio $a:b$, total $T$ | Part $= \\frac{a}{a+b} \\times T$ |
| Proportion | $\\frac{a}{b} = \\frac{c}{d}$ → cross multiply |
| Percent of | $= \\frac{\\text{part}}{\\text{whole}} \\times 100$ |
| Percent change | $= \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$ |
| Direct variation | $y = kx$ |
| Inverse variation | $xy = k$ |
| Scale: length | $\\times k$ |
| Scale: area | $\\times k^2$ |
| Scale: volume | $\\times k^3$ |

### Common SAT Mistakes

1. Dividing percent change by the **new** value instead of the **old**
2. Assuming successive percent increases/decreases cancel out
3. Adding times instead of rates in work problems
4. Forgetting that the ratio $a:b$ has $a + b$ total parts, not $a \\times b$`
    },
    {
      id: 'rp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A recipe uses flour and sugar in a 5:2 ratio. If you need 28 cups total, how many cups of flour?',
            options: ['$20$', '$10$', '$14$', '$22$'],
            correctAnswer: 0,
            explanation: 'Total parts: $5 + 2 = 7$. Flour $= (5/7)(28) = 20$ cups.'
          },
          {
            question: 'An item costs \\$80 after a 20% discount. What was the original price?',
            options: ['\\$100', '\\$96', '\\$64', '\\$104'],
            correctAnswer: 0,
            explanation: 'After 20% discount: $0.80 \\times \\text{original} = 80$ → original $= 80/0.80 = \\$100$. Don\'t just add 20% to \\$80 (that gives \\$96, which is wrong).'
          },
          {
            question: 'If it takes 4 workers 6 days to build a wall, how many days would 8 workers take (same pace)?',
            options: ['$3$', '$12$', '$2$', '$4$'],
            correctAnswer: 0,
            explanation: 'Total work = $4 \\times 6 = 24$ worker-days. With 8 workers: $24/8 = 3$ days. Workers and time are inversely proportional.'
          }
        ]
      }
    },
    {
      id: 'rp7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Ratios, proportions, and percentages are core SAT topics — expect 4-6 questions per test
- Percent change: always divide by the original
- "Original price" problems: work backwards using the multiplier
- Workers × time = constant (inverse variation) is a classic SAT setup`
    }
  ]
};
