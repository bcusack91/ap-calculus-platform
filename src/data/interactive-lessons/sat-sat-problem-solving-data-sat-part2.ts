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
$$\\text{\\% Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$$

**Shortcut multipliers:**
- 20% increase → multiply by **1.20**
- 15% decrease → multiply by **0.85**
- 8% tax → multiply by **1.08**

### Successive Percent Changes
A 10% increase followed by a 10% decrease is **NOT** back to the original:
$$100 \\xrightarrow{+10\\%} 110 \\xrightarrow{-10\\%} 99$$

### SAT Classic: "What percent of X is Y?"
Translate directly: "What percent of 80 is 24?"
$$\\frac{24}{80} \\times 100 = 30\\%$$

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
      explanation: 'Markup: \\$40 × 1.25 = \\$50. Discount: \\$50 × 0.75 = \\$37.50. The final price is \\$37.50, NOT \\$40 — successive equal percent changes don\'t cancel out.'
    },
    {
      id: 'psd2-text2',
      type: 'text' as const,
      content: `## Deep Dive: Percent Problem Strategies

### Worked Example 1: Finding Original Price

| Step | Work |
|---|---|
| **Problem** | "After a 30% discount, a jacket costs \\$56. What was the original price?" |
| **Setup** | You pay 70% of original: $0.70x = 56$ |
| **Solve** | $x = 56 / 0.70 = 80$ |
| **Common mistake** | Adding 30% of 56: $56 + 16.80 = 72.80$ ← WRONG |

### Worked Example 2: Successive Changes

| Step | Work |
|---|---|
| **Problem** | "A stock rises 25% one year, then drops 20% the next. Net change?" |
| **Year 1** | $100 \\times 1.25 = 125$ |
| **Year 2** | $125 \\times 0.80 = 100$ |
| **Net change** | $0\\%$ — it returned to the original! |
| **Shortcut** | $1.25 \\times 0.80 = 1.00$ — multiply the multipliers |

### Percent Multiplier Quick Reference

| Phrase | Multiplier | Example |
|---|---|---|
| 15% increase | $\\times 1.15$ | $200 \\times 1.15 = 230$ |
| 15% decrease | $\\times 0.85$ | $200 \\times 0.85 = 170$ |
| 6% tax on top | $\\times 1.06$ | $50 \\times 1.06 = 53$ |
| 40% of | $\\times 0.40$ | $0.40 \\times 80 = 32$ |
| Triple (200% increase) | $\\times 3.00$ | $10 \\times 3 = 30$ |

### "Percent OF" vs. "Percent MORE THAN"

- "A is 25% **of** B" → $A = 0.25B$
- "A is 25% **more than** B" → $A = 1.25B$
- "A is 25% **less than** B" → $A = 0.75B$`
    },
    {
      id: 'psd2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Percent Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A population increases by 50%, then decreases by 50%. What is the net percent change?',
            options: ['$-25\\%$', '$0\\%$', '$-50\\%$', '$+25\\%$'],
            correctAnswer: 0,
            explanation: '$1.50 \\times 0.50 = 0.75$. Net change: $0.75 - 1.00 = -0.25 = -25\\%$.'
          },
          {
            question: '"A is 60% more than B. B is what percent less than A?"',
            options: ['$37.5\\%$', '$60\\%$', '$40\\%$', '$62.5\\%$'],
            correctAnswer: 0,
            explanation: '$A = 1.6B$. Difference $= 0.6B$. Percent less $= \\frac{0.6B}{1.6B} \\times 100 = 37.5\\%$. Note: it\'s NOT 60%!'
          },
          {
            question: 'A salary increases from \\$48,000 to \\$54,000. What is the percent increase?',
            options: ['$12.5\\%$', '$6\\%$', '$11.1\\%$', '$88.9\\%$'],
            correctAnswer: 0,
            explanation: 'Change $= 54000 - 48000 = 6000$. Percent increase $= \\frac{6000}{48000} \\times 100 = 12.5\\%$. Always divide by the ORIGINAL.'
          }
        ]
      }
    },
    {
      id: 'psd2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Percent Multiplier Check** — Select the correct multiplier.',
      exercise: {
        dropdowns: [
          '35% decrease → multiply by [0.65|0.35|1.35|65]',
          '8% sales tax on \\$75 → total = [\\$81|\\$69|\\$83|\\$6]',
          'Original price if 20% off gives \\$60 → [\\$75|\\$72|\\$80|\\$48]',
          '10% increase then 10% increase → total multiplier = [1.21|1.20|1.10|2.00]'
        ],
        correctAnswers: ['0.65', '\\$81', '\\$75', '1.21'],
        hint1: 'Decrease: 1 − 0.35 = 0.65.',
        hint2: 'Tax: \\$75 × 1.08 = \\$81.',
        hint3: '80% of original = \\$60 → original = 60/0.80 = \\$75.',
        explanation: '35% decrease → ×0.65. Tax: 75 × 1.08 = \\$81. Original: 60/0.80 = \\$75. Successive: 1.10 × 1.10 = 1.21 (not 1.20).'
      }
    },
    {
      id: 'psd2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary: Percentages

| Concept | Formula |
|---|---|
| Percent of | $\\frac{\\text{Part}}{\\text{Whole}} \\times 100$ |
| Percent change | $\\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100$ |
| x% increase | Multiply by $(1 + x/100)$ |
| x% decrease | Multiply by $(1 - x/100)$ |
| Successive changes | Multiply the multipliers |
| Finding original | Divide by the multiplier |

### SAT Traps
- Successive equal percent changes DON'T cancel out
- "A is 60% more than B" ≠ "B is 60% less than A"
- Always divide by the **original** for percent change

*Next: Two-way tables and data interpretation →*`
    }
  ]
};
