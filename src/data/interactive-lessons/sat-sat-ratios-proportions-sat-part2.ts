export const satRatiosPart2Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp2-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 2 of 7 — Percentages**

### Percent Basics

$p\\%$ means $\\frac{p}{100}$.

- "What is 15% of 80?" → $0.15 \\times 80 = 12$
- "12 is what percent of 80?" → $\\frac{12}{80} = 0.15 = 15\\%$
- "12 is 15% of what?" → $12 = 0.15x$ → $x = 80$

### Percent Change

$$\\text{Percent change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%$$

**Example:** Price goes from \\$40 to \\$52:
$\\frac{52 - 40}{40} \\times 100 = 30\\%$ increase

### Multiplier Method (Faster!)

- Increase of $p\\%$: multiply by $1 + p/100$
- Decrease of $p\\%$: multiply by $1 - p/100$

20% increase on \\$80: $80 \\times 1.20 = \\$96$

15% discount on \\$200: $200 \\times 0.85 = \\$170$

### Successive Percent Changes ⚠️

A 20% increase followed by a 20% decrease is NOT back to the original!

$100 \\times 1.20 = 120$, then $120 \\times 0.80 = 96$ — that's a 4% net decrease.`
    },
    {
      id: 'rp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Percentages** 🎯',
      exercise: {
        questions: [
          {
            question: 'A shirt originally costs \\$60 and is on sale for 25% off. What is the sale price?',
            options: ['\\$45', '\\$40', '\\$35', '\\$50'],
            correctAnswer: 0,
            explanation: 'Sale price = $60 \\times 0.75 = \\$45$. Or: discount = $60 \\times 0.25 = 15$, so $60 - 15 = 45$.'
          },
          {
            question: 'A stock increases 50% then decreases 50%. If the initial value was \\$100, the final value is:',
            options: ['\\$75', '\\$100', '\\$50', '\\$125'],
            correctAnswer: 0,
            explanation: '$100 \\times 1.50 = 150$, then $150 \\times 0.50 = 75$. This is a 25% net decrease — NOT back to \\$100!'
          },
          {
            question: 'The population of a town grew from 8,000 to 10,000. The percent increase is:',
            options: ['$25\\%$', '$20\\%$', '$80\\%$', '$2\\%$'],
            correctAnswer: 0,
            explanation: 'Change $= 10{,}000 - 8{,}000 = 2{,}000$. Percent $= 2000/8000 \\times 100 = 25\\%$. Always divide by the original.'
          }
        ]
      }
    },
    {
      id: 'rp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Percent change: divide the change by the **original** (not the new) value
- Multiplier method is fastest: increase → multiply by $(1 + r)$, decrease → $(1 - r)$
- Successive percent changes: multiply the multipliers together
- A% increase then A% decrease ≠ original (common SAT trap)`
    }
  ]
};
