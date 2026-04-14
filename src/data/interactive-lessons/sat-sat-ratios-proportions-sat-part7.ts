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
4. Forgetting that the ratio $a:b$ has $a + b$ total parts, not $a \\times b$

---

### Worked Example 1 — Multi-Concept

**A store buys items for \\$50 and marks them up 60%. During a sale, they offer 25% off. What is the sale price?**

| Step | Work |
|------|------|
| Markup | $50 × 1.60 = \\$80$ |
| Sale discount | $80 × 0.75 = \\$60$ |
| Net multiplier | $1.60 × 0.75 = 1.20$ → 20% net markup |

### Worked Example 2 — Proportion with Ratio Shift

**In a class, boys to girls is $3:5$. If 4 more boys join, the ratio becomes $1:1$. How many students were originally in the class?**

| Step | Work |
|------|------|
| Let parts | Boys $= 3k$, Girls $= 5k$ |
| After 4 boys join | $3k + 4 = 5k$ |
| Solve | $4 = 2k$ → $k = 2$ |
| Original total | $3(2) + 5(2) = 16$ students |`
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
      id: 'rp7-text2',
      type: 'text' as const,
      content: `### SAT Strategy Playbook

### Worked Example 3 — Working Backwards

**After a 10% raise, Maya earns \\$55,000. Then she gets a 5% bonus on the new salary. What was her original salary, and what is the bonus?**

| Step | Work |
|------|------|
| Original salary | $1.10x = 55{,}000$ → $x = \\$50{,}000$ |
| Bonus | $55{,}000 × 0.05 = \\$2{,}750$ |
| Total compensation | $55{,}000 + 2{,}750 = \\$57{,}750$ |

### Worked Example 4 — Scale + Percent

**A blueprint uses a 1:50 scale. A room on the blueprint is 6 cm × 8 cm. The builder adds 20% to the area for a patio. What is the total real area?**

| Step | Work |
|------|------|
| Real dimensions | $6 × 50 = 300$ cm, $8 × 50 = 400$ cm |
| Convert to meters | $3$ m × $4$ m |
| Room area | $12$ m² |
| With patio (+20%) | $12 × 1.20 = 14.4$ m² |

### Top 5 SAT Strategies for This Topic

1. **Is it direct or inverse?** — If one goes up while the other goes down, it's inverse.
2. **Use multipliers** — Never add/subtract percentages directly.
3. **Draw a table** — For mixtures, lay out Volume × Concentration = Amount.
4. **Check with easy numbers** — Substitute $100$ to verify percent problems.
5. **Units must match** — In proportions, keep the same units on each side.`
    },
    {
      id: 'rp7-quiz2',
      type: 'multiple-choice' as const,
      content: '**SAT-Level Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'The ratio of red to blue to green beads is $2:3:5$. If there are 150 beads total, how many more green beads than red?',
            options: ['$45$', '$30$', '$75$', '$15$'],
            correctAnswer: 0,
            explanation: 'Total parts $= 10$. Red $= (2/10)(150) = 30$. Green $= (5/10)(150) = 75$. Difference $= 75 - 30 = 45$.'
          },
          {
            question: 'A \\$400 TV is discounted 15%, then another 10% off. What is the final price?',
            options: ['\\$306', '\\$300', '\\$340', '\\$310'],
            correctAnswer: 0,
            explanation: '$400 × 0.85 = 340$. Then $340 × 0.90 = 306$. Total discount: $1 - 0.85 × 0.90 = 1 - 0.765 = 23.5\\%$.'
          },
          {
            question: 'If $y$ varies directly with $x^2$ and $y = 48$ when $x = 4$, what is $y$ when $x = 6$?',
            options: ['$108$', '$72$', '$192$', '$96$'],
            correctAnswer: 0,
            explanation: '$y = kx^2$. $48 = k(16)$ → $k = 3$. When $x = 6$: $y = 3(36) = 108$.'
          },
          {
            question: 'Pump A fills a pool in 5 hours, Pump B in 10 hours. If A runs for 2 hours alone, then both run, how much longer until full?',
            options: ['$2$ hours', '$3$ hours', '$4$ hours', '$1$ hour'],
            correctAnswer: 0,
            explanation: 'A does $2/5$ in 2 hrs. Remaining: $3/5$. Combined rate: $1/5 + 1/10 = 3/10$. Time: $(3/5) ÷ (3/10) = 2$ hours.'
          }
        ]
      }
    },
    {
      id: 'rp7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which Strategy?** 🔍\n\nFor each problem, choose the best approach.',
      exercise: {
        dropdowns: [
          { label: '"After a 30% discount, the price is \\$84. Find the original."', options: ['Divide by 0.70', 'Add 30% to $84', 'Multiply by 1.30', 'Subtract 30% from $84'] },
          { label: '"3 machines do a job in 8 days. How long for 6 machines?"', options: ['Workers × time = constant (inverse)', 'Set up proportion (direct)', 'Add the rates', 'Multiply 3 × 8 × 6'] },
          { label: '"Map scale 1 in = 20 mi. Cities are 4.5 in apart."', options: ['Multiply: 4.5 × 20', 'Divide: 20 ÷ 4.5', 'Set up: 1/20 = 4.5/x', 'Add: 1 + 20 + 4.5'] },
          { label: '"Mix 25% and 60% solutions to get 40%."', options: ['Mixture table: Vol × Conc = Amount', 'Average the percentages', 'Cross multiply 25/60 = 40/x', 'Subtract: 60 − 25 = 35'] }
        ],
        correctAnswers: ['Divide by 0.70', 'Workers × time = constant (inverse)', 'Multiply: 4.5 × 20', 'Mixture table: Vol × Conc = Amount'],
        hint1: '30% off means you paid 70% of original: $0.70 × \\text{original} = 84$.',
        hint2: 'More machines, less time — that\'s inverse variation.',
        hint3: 'Each inch on the map = 20 real miles.',
        explanation: 'Original price: divide sale price by $(1 - \\text{discount})$. Workers/time: inverse → total work stays constant. Map: multiply distance by scale. Mixture: use table method with Vol × Conc = Amount.'
      }
    },
    {
      id: 'rp7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Full Topic Review

| Category | Formula | Common Trap |
|----------|---------|-------------|
| Ratios | $\\frac{a}{a+b} × T$ | Forgetting to add parts |
| Proportions | $ad = bc$ | Mismatched units |
| Percent change | $\\frac{\\Delta}{\\text{old}} × 100$ | Dividing by new value |
| Finding original | $\\text{sale} ÷ (1 - r)$ | Adding percent to sale price |
| Successive %  | Multiply multipliers | Adding percentages |
| Direct variation | $y = kx$, $y/x = k$ | Confusing with inverse |
| Inverse variation | $xy = k$ | Adding instead of multiplying |
| Scale factor | L → $k$, A → $k^2$, V → $k^3$ | Using $k$ for area |
| Work problems | Add rates, not times | Adding times |
| Mixtures | Vol × Conc = Amount | Averaging concentrations |

**Final SAT Tips:**
- Expect 4-6 ratio/proportion/percent questions per test
- Always write units to catch dimensional errors
- Use multipliers for percent problems — never add/subtract percentages directly
- For work problems: Rate × Time = Work, add rates when working together`
    }
  ]
};
