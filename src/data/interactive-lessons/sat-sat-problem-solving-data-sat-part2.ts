export const satProbSolvDataPart2Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'psd2-intro',
      type: 'text' as const,
      content: `# Percentages: Increase, Decrease & Applications

**Part 2 of 7 — Mastering Percent Problems**

### Percent Formula
$$\\text{Percent} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100$$

### Percent Increase/Decrease
$$\\text{% Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$$

**Shortcut multipliers:**
- 20% increase → multiply by **1.20**
- 15% decrease → multiply by **0.85**
- 8% tax → multiply by **1.08**

### Successive Percent Changes
A 10% increase followed by a 10% decrease is **NOT** back to the original:
$$100 \\xrightarrow{+10\\%} 110 \\xrightarrow{-10\\%} 99$$

### SAT Classic: "What percent of X is Y?"
Translate directly: "What percent of 80 is 24?"
$$\\frac{24}{80} \\times 100 = 30\%$$

### Percent vs. Percentage Points
"Increased from 40% to 52%" = increase of **12 percentage points** but a **30% increase** (12/40 × 100).`
    },
    {
      id: 'psd2-q1',
      type: 'quiz' as const,
      question: 'A store marks up a $40 item by 25%, then offers a 25% discount on the new price. What is the final price?',
      options: [
        '$40.00',
        '$37.50',
        '$42.50',
        '$50.00'
      ],
      correctAnswer: 1,
      explanation: 'Markup: $40 × 1.25 = $50. Discount: $50 × 0.75 = $37.50. The final price is $37.50, NOT $40 — successive equal percent changes don\'t cancel out.'
    }
  ]
};
