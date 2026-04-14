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

$100 \\times 1.20 = 120$, then $120 \\times 0.80 = 96$ — that's a 4% net decrease.

---

### Worked Example 1 — Finding the Original

**After a 30% discount, a jacket costs \\$56. What was the original price?**

| Step | Work |
|------|------|
| Multiplier for 30% off | $1 - 0.30 = 0.70$ |
| Set up equation | $0.70x = 56$ |
| Solve | $x = 56 ÷ 0.70 = \\$80$ |

⚠️ Common mistake: adding 30% to \\$56 gives \\$72.80, which is WRONG.

### Worked Example 2 — Successive Changes

**A stock rises 25% one year, then falls 20% the next. If it started at \\$200, what is its final value?**

| Step | Work |
|------|------|
| After 25% rise | $200 × 1.25 = 250$ |
| After 20% fall | $250 × 0.80 = 200$ |
| Net change | $\\frac{200 - 200}{200} = 0\\%$ |

This time it happens to be zero — but that's because $1.25 × 0.80 = 1.00$ exactly.`
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
      id: 'rp2-text2',
      type: 'text' as const,
      content: `### Tax, Tip, and Markup

These are all "percent increase" problems.

### Worked Example 3

**A meal costs \\$42. Tax is 8% and tip is 20% (on the pre-tax amount). What is the total?**

| Component | Calculation | Amount |
|-----------|-----------|--------|
| Meal | — | \\$42.00 |
| Tax (8%) | $42 × 0.08$ | \\$3.36 |
| Tip (20%) | $42 × 0.20$ | \\$8.40 |
| Total | — | \\$53.76 |

**With multiplier:** $42 × (1 + 0.08 + 0.20) = 42 × 1.28 = \\$53.76$

### Worked Example 4

**A store marks up items 40% then offers a 10% "sale." What is the net markup?**

| Step | Multiplier |
|------|-----------|
| 40% markup | $1.40$ |
| 10% discount | $0.90$ |
| Net | $1.40 × 0.90 = 1.26$ |

The net markup is **26%**, not 30%.`
    },
    {
      id: 'rp2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Percent Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'After an 8% sales tax, a laptop costs \\$810. What was the pre-tax price?',
            options: ['\\$750', '\\$745.20', '\\$802', '\\$774'],
            correctAnswer: 0,
            explanation: '$1.08x = 810$ → $x = 810 ÷ 1.08 = \\$750$.'
          },
          {
            question: 'A population doubles every 10 years. After 30 years, by what percent has it increased?',
            options: ['$700\\%$', '$300\\%$', '$600\\%$', '$800\\%$'],
            correctAnswer: 0,
            explanation: 'Doubles 3 times: $2^3 = 8$ times original. Increase = $8 - 1 = 7$ times original = $700\\%$.'
          },
          {
            question: 'An item is discounted 20%, then an additional 15% off the sale price. What single discount is equivalent?',
            options: ['$32\\%$', '$35\\%$', '$30\\%$', '$25\\%$'],
            correctAnswer: 0,
            explanation: '$0.80 × 0.85 = 0.68$. That means you pay 68%, so the discount is $100\\% - 68\\% = 32\\%$.'
          }
        ]
      }
    },
    {
      id: 'rp2-dropdown',
      type: 'dropdown-select' as const,
      content: '**What Multiplier?** 🔍\n\nChoose the correct multiplier for each scenario.',
      exercise: {
        dropdowns: [
          { label: '25% increase', options: ['1.25', '0.25', '0.75', '1.75'] },
          { label: '40% decrease', options: ['0.60', '0.40', '1.40', '1.60'] },
          { label: 'Sales tax of 6%', options: ['1.06', '0.06', '0.94', '1.60'] },
          { label: '15% tip on pre-tax total', options: ['1.15', '0.15', '0.85', '1.85'] }
        ],
        correctAnswers: ['1.25', '0.60', '1.06', '1.15'],
        hint1: 'Increase by $p\\%$: multiply by $1 + p/100$.',
        hint2: 'Decrease by $p\\%$: multiply by $1 - p/100$.',
        hint3: 'Tax and tip are both increases — add to 1.',
        explanation: '25% increase → $1 + 0.25 = 1.25$. 40% decrease → $1 - 0.40 = 0.60$. 6% tax → $1.06$. 15% tip → $1.15$.'
      }
    },
    {
      id: 'rp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Scenario | Multiplier | Example |
|----------|-----------|---------|
| $p\\%$ increase | $1 + p/100$ | 20% increase → $×1.20$ |
| $p\\%$ decrease | $1 - p/100$ | 15% off → $×0.85$ |
| Find original | Divide by multiplier | $\\text{sale} ÷ 0.75$ |
| Successive changes | Multiply multipliers | $1.25 × 0.80 = 1.00$ |

- Percent change: **always** divide by the original
- Successive discounts: multiply multipliers, don't add percentages
- Tax + tip: both are increases on the base price
- "What was the original?" → divide by the multiplier, don't reverse-add`
    }
  ]
};
