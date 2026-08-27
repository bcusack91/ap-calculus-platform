export const satWordProblemsPart4Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp4-intro',
      type: 'text' as const,
      content: `# Mixture & Cost Problems

**Part 4 of 7 — Combining Values Strategically**

### Mixture Framework
$$\\text{amount₁ × concentration₁} + \\text{amount₂ × concentration₂} = \\text{total amount × final concentration}$$

**Example:** How many liters of 30% acid should be mixed with 10 L of 60% acid to get a 50% solution?
- Let $x$ = liters of 30% acid
- $0.30x + 0.60(10) = 0.50(x + 10)$
- $0.30x + 6 = 0.50x + 5$
- $1 = 0.20x$
- $x = 5$ liters

### Cost/Revenue Problems
**Revenue** = price × quantity
**Profit** = revenue − cost

**Example:** Adult tickets cost \\$12, child tickets cost \\$8. 200 tickets sold for \\$2,000 total.
- Let $a$ = adult tickets: $a + c = 200$ and $12a + 8c = 2000$
- From first equation: $c = 200 - a$
- $12a + 8(200 - a) = 2000$
- $12a + 1600 - 8a = 2000$
- $4a = 400 → a = 100$ adults, $c = 100$ children

### Weighted Average
$$\\text{Weighted avg} = \\frac{\\sum (\\text{value × weight})}{\\sum \\text{weights}}$$`
    },
    {
      id: 'wp4-q1',
      type: 'quiz' as const,
      question: 'A store sells pens for \\$2 and notebooks for \\$5. If 50 items are sold for \\$175 total, how many pens were sold?',
      options: [
        '15',
        '25',
        '30',
        '35'
      ],
      correctAnswer: 1,
      explanation: 'Let p = pens, n = notebooks. p + n = 50 and 2p + 5n = 175. From first: n = 50 − p. Substitute: 2p + 5(50 − p) = 175 → 2p + 250 − 5p = 175 → −3p = −75 → p = 25.'
    },
    {
      id: 'wp4-text2',
      type: 'text' as const,
      content: `## Deep Dive: Mixture & Cost Strategies

### Worked Example 1: Mixing Two Solutions

| Step | Work |
|---|---|
| **Problem** | "A chemist has 40 mL of 25% alcohol and wants a 40% solution. How much pure alcohol must be added?" |
| **Current alcohol** | $0.25 \\times 40 = 10$ mL |
| **After adding $x$ mL of pure alcohol** | Total alcohol $= 10 + x$, total solution $= 40 + x$ |
| **Target: 40%** | $\\frac{10 + x}{40 + x} = 0.40$ |
| **Solve** | $10 + x = 0.40(40 + x)$ → $10 + x = 16 + 0.4x$ → $0.6x = 6$ → $x = 10$ mL |
| **Check** | $\\frac{20}{50} = 0.40$ ✓ |

### Worked Example 2: Break-Even Problem

| Step | Work |
|---|---|
| **Problem** | "A company spends \\$2,000 in fixed costs plus \\$5 per item. Each item sells for \\$12. How many items to break even?" |
| **Cost** | $C = 2000 + 5n$ |
| **Revenue** | $R = 12n$ |
| **Break even** | $12n = 2000 + 5n$ → $7n = 2000$ → $n \\approx 286$ items |

### Mixture Problem Framework

| Type | What's Equal | Equation |
|---|---|---|
| Mix two solutions | Amount of solute | $c_1 v_1 + c_2 v_2 = c_f(v_1 + v_2)$ |
| Add pure substance | Total amount | $c_1 v + x = c_f(v + x)$, where $x$ is pure |
| Evaporate (remove water) | Solute stays same | $c_1 v = c_f(v - x)$ |
| Cost/revenue | Total value | $p_1 q_1 + p_2 q_2 = \\text{total}$ |

### SAT Trap: "Break-Even" vs. "Profit"

- **Break even**: Revenue $=$ Cost (profit $= 0$)
- **Profit**: Revenue $>$ Cost (solve the inequality)
- **"How many to make \\$500 profit?"**: $R - C = 500$`
    },
    {
      id: 'wp4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Mixture & Cost Problems** 🎯',
      exercise: {
        questions: [
          {
            question: '20 liters of 60% acid is mixed with 30 liters of 40% acid. What is the concentration of the mixture?',
            options: ['$48\\%$', '$50\\%$', '$44\\%$', '$52\\%$'],
            correctAnswer: 0,
            explanation: 'Pure acid: $0.60(20) + 0.40(30) = 12 + 12 = 24$ L. Total: $50$ L. Concentration: $24/50 = 48\\%$.'
          },
          {
            question: 'Coffee costs \\$8/lb and tea costs \\$5/lb. A 12-lb blend costs \\$6.50/lb. How many pounds of coffee?',
            options: ['$6$', '$4$', '$8$', '$5$'],
            correctAnswer: 0,
            explanation: '$8c + 5(12 - c) = 6.50(12)$ → $8c + 60 - 5c = 78$ → $3c = 18$ → $c = 6$ lb coffee.'
          },
          {
            question: 'A store buys items at \\$15 each and sells them at \\$22 each with \\$3,500 monthly overhead. How many must be sold for \\$1,500 profit?',
            options: ['$\\approx 714$', '$500$', '$250$', '$1,000$'],
            correctAnswer: 0,
            explanation: 'Profit per item $= 22 - 15 = 7$. Need: $7n - 3500 = 1500$ → $7n = 5000$ → $n \\approx 714.3$. Must sell $715$ items (round up).'
          }
        ]
      }
    },
    {
      id: 'wp4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Mixture & Cost Setup** — Select the correct equation.',
      exercise: {
        dropdowns: [
          'Mix x L of 20% with 10 L of 50% to get 30%. Equation: [0.2x + 5 = 0.3(x + 10)|0.2x + 0.5(10) = 0.3x|0.2(10) + 0.5x = 30|20x + 50(10) = 30]',
          'Items cost \\$4 to make, sell for \\$10. Fixed costs \\$600. Break-even qty: [100|60|150|200]',
          'Weighted avg: 20 students scored 80, 30 scored 90. Average = [86|85|87|84]',
          'Evaporate water from 50 L of 10% salt to get 25% salt. Liters remaining = [20|30|25|40]'
        ],
        correctAnswers: ['0.2x + 5 = 0.3(x + 10)', '100', '86', '20'],
        hint1: 'Solute from both sources = solute in final mixture.',
        hint2: 'Break even: profit per item × quantity = fixed costs. Profit per item = \\$10 − \\$4 = \\$6.',
        hint3: 'Weighted average: (20×80 + 30×90) / (20+30).',
        explanation: 'Mixture: 0.2x + 0.50(10) = 0.30(x+10). Break-even: 6n = 600 → n = 100. Weighted: (1600+2700)/50 = 4300/50 = 86. Evaporate: salt stays at 5 L. 5/x = 0.25 → x = 20 L.'
      }
    },
    {
      id: 'wp4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary: Mixture & Cost Problems

| Problem Type | Core Equation |
|---|---|
| Mix two solutions | $c_1 v_1 + c_2 v_2 = c_f(v_1 + v_2)$ |
| Add pure substance | Amount of solute stays trackable |
| Cost/revenue | $\\text{price}_1 \\times \\text{qty}_1 + \\text{price}_2 \\times \\text{qty}_2 = \\text{total}$ |
| Break even | Revenue = Cost |
| Weighted average | $\\frac{\\sum(\\text{value} \\times \\text{weight})}{\\sum \\text{weights}}$ |

### SAT Strategy
- **Mixture = track the SOLUTE** — the pure substance doesn't change in mixing.
- For cost problems, always write **two equations**: one for quantity, one for value.
- **Weighted averages** lean toward the group with more weight.

*Next: Growth & decay word problems →*`
    }
  ]
};
