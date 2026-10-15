export const microProductionCostsPart3Data = {
  topicSlug: 'micro-production-costs',
  sections: [
    {
      id: 'micropro3-intro',
      type: 'text' as const,
      content: `
# 💰 Production & Costs

**Part 3 of 7 — Building a Cost Table**

---

| Section |
|---------|
| 📖 From Product to Cost |
| Worked Example: A Complete Cost Table |
| Shortcuts and Self-Checks |

> 🔑 **Key Concept:** Cost curves are production curves seen from the other side. With a fixed wage, $MC = \\dfrac{\\text{wage}}{MP}$ and $AVC = \\dfrac{\\text{wage}}{AP}$. When marginal product is high, marginal cost is low, and vice versa.
`
    },
    {
      id: 'micropro3-mirror',
      type: 'text' as const,
      content: `
## 📖 From Product to Cost

Return to the pizza shop from Part 2. Each worker costs **\\$24 an hour**, and labor is the only variable input.

| Workers | Pizzas (Q) | MP | VC = \\$24 × L | MC per pizza = \\$24 ÷ MP | AVC = VC ÷ Q |
|---|---|---|---|---|---|
| 1 | 8 | 8 | \\$24 | \\$3.00 | \\$3.00 |
| 2 | 20 | 12 | \\$48 | **\\$2.00** | \\$2.40 |
| 3 | 30 | 10 | \\$72 | \\$2.40 | **\\$2.40** |
| 4 | 36 | 6 | \\$96 | \\$4.00 | \\$2.67 |
| 5 | 40 | 4 | \\$120 | \\$6.00 | \\$3.00 |
| 6 | 42 | 2 | \\$144 | \\$12.00 | \\$3.43 |

### Reading the Mirror
- The 2nd worker adds 12 pizzas for \\$24, so each of those pizzas costs \\$24 ÷ 12 = **\\$2.00**. That is the **highest MP** and the **lowest MC**.
- The 6th worker adds only 2 pizzas for \\$24, so each costs **\\$12.00**. Diminishing returns make MC climb steeply.
- AVC is lowest (\\$2.40) where AP is highest (10 pizzas per worker, at 2 and 3 workers).
- At 3 workers, MC (\\$2.40) equals AVC (\\$2.40), just as MP equaled AP there. **MC crosses AVC at its minimum** for the same reason MP crosses AP at its maximum.

| Production fact | Matching cost fact |
|---|---|
| MP rising | MC falling |
| MP at its maximum | MC at its minimum |
| MP falling (diminishing returns) | MC rising |
| AP at its maximum | AVC at its minimum |

> 🔑 **AP Connection:** If an exam asks why the MC curve eventually slopes upward, the answer is **diminishing marginal returns** to the variable input. Fixed costs play no part in it.
`
    },
    {
      id: 'micropro3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A worker earns \\$90 a day. Hiring a 4th worker raises daily output from 50 to 65 units. What is the marginal cost of each of those 15 units?',
            options: [
              '\\$6',
              '\\$15',
              '\\$1.80',
              '\\$22.50'
            ],
            correctAnswer: 0,
            explanation: 'Marginal cost per unit is the wage divided by the marginal product: \\$90 ÷ 15 = \\$6. Dividing the wage by total output (\\$90 ÷ 50 = \\$1.80) or by the number of workers (\\$90 ÷ 4 = \\$22.50) answers a different question.'
          },
          {
            question: 'When the average product of labor is at its maximum, what must be true of average variable cost (labor is the only variable input)?',
            options: [
              'It is at its minimum',
              'It is at its maximum',
              'It equals average total cost',
              'It is rising quickly'
            ],
            correctAnswer: 0,
            explanation: 'AVC = wage ÷ AP. With a constant wage, the largest AP gives the smallest AVC. AVC never equals ATC while there are fixed costs, because the gap between them is AFC.'
          }
        ]
      }
    },
    {
      id: 'micropro3-table',
      type: 'text' as const,
      content: `
## Worked Example: A Complete Cost Table

A firm's fixed cost is **\\$60**. Its total cost at each output is given; we fill in the rest.

| Q | TC | FC | VC = TC − FC | MC = ΔTC | AFC = FC ÷ Q | AVC = VC ÷ Q | ATC = TC ÷ Q |
|---|---|---|---|---|---|---|---|
| 0 | \\$60 | \\$60 | \\$0 | — | — | — | — |
| 1 | \\$100 | \\$60 | \\$40 | \\$40 | \\$60 | \\$40 | \\$100 |
| 2 | \\$130 | \\$60 | \\$70 | \\$30 | \\$30 | \\$35 | \\$65 |
| 3 | \\$150 | \\$60 | \\$90 | \\$20 | \\$20 | \\$30 | \\$50 |
| 4 | \\$180 | \\$60 | \\$120 | \\$30 | \\$15 | \\$30 | \\$45 |
| 5 | \\$220 | \\$60 | \\$160 | \\$40 | \\$12 | \\$32 | **\\$44** |
| 6 | \\$270 | \\$60 | \\$210 | \\$50 | \\$10 | \\$35 | \\$45 |

### How Each Column Was Built
1. **FC** is the total cost at Q = 0 and stays \\$60 in every row.
2. **VC** = TC − FC. At Q = 4: \\$180 − \\$60 = \\$120.
3. **MC** = change in TC from the row above. At Q = 4: \\$180 − \\$150 = \\$30. (The change in VC gives the same answer, because FC does not change.)
4. **AFC, AVC, ATC**: divide FC, VC and TC by Q. At Q = 5: \\$60 ÷ 5 = \\$12, \\$160 ÷ 5 = \\$32, \\$220 ÷ 5 = \\$44.

### What the Table Shows
- **MC** falls to \\$20 at the 3rd unit, then rises: diminishing returns set in with the 4th unit.
- **AVC** bottoms out at \\$30 (Q = 3 and 4), and the 4th unit's MC of \\$30 matches it.
- **ATC** bottoms out at \\$44 at Q = 5. The 5th unit's MC (\\$40) is below the \\$45 average, so it pulls ATC down; the 6th unit's MC (\\$50) is above \\$44, so it pulls ATC up.
- **Minimum AVC comes at a lower output than minimum ATC**, because AFC keeps falling and drags ATC down for longer.
`
    },
    {
      id: 'micropro3-input',
      type: 'input-boxes' as const,
      content: `
**Fill In the Row** ✍️

A firm's fixed cost is **\\$120**. Producing 10 units costs **\\$420** in total, and producing 11 units costs **\\$455** in total.

1) Average variable cost at Q = 10, in dollars?

2) Average total cost at Q = 10, in dollars?

3) Marginal cost of the 11th unit, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '42', '35'],
        hint1: 'VC = TC − FC = 420 − 120. Then divide by 10.',
        hint2: 'ATC = TC ÷ Q.',
        hint3: 'MC = change in TC from 10 to 11 units.',
        explanation: '1) VC = \\$300, so AVC = \\$30. 2) ATC = \\$420 ÷ 10 = \\$42 (and AFC = \\$12, the gap between ATC and AVC). 3) MC = \\$455 − \\$420 = \\$35. Since \\$35 is below \\$42, ATC is still falling at that output.'
      }
    },
    {
      id: 'micropro3-checks',
      type: 'text' as const,
      content: `
## Shortcuts and Self-Checks

### Four Identities That Catch Errors

| Identity | Use it to check |
|---|---|
| $TC = FC + VC$ | Every row of the table |
| $ATC = AFC + AVC$ | That the per-unit columns add up |
| $TC = ATC \\times Q$ | Recovering totals from averages |
| Sum of MC for units 1 to Q = VC at Q | That the MC column is right: 40 + 30 + 20 + 30 = 120 = VC at Q = 4 ✓ |

### When Output Jumps by More Than One
If a table lists Q = 20, 30, 40 instead of every unit, compute **MC per unit** over the interval: $MC = \\dfrac{\\Delta TC}{\\Delta Q}$. If TC rises from \\$500 to \\$650 as Q rises from 20 to 30, MC ≈ \\$150 ÷ 10 = **\\$15** per unit over that range.

### Things That Do **Not** Change MC
Fixed costs appear in TC and ATC, but they cancel out when you take the change in TC. A higher rent raises **AFC** and **ATC** at every output, but leaves **MC** and **AVC** untouched. Part 5 builds a full table of which costs move what.

> 🔑 **AP Connection:** A common multiple-choice trap gives TC and asks for MC at Q = 1. The answer is TC(1) − TC(0), and TC(0) is the fixed cost, not zero.
`
    },
    {
      id: 'micropro3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A firm\'s total cost is \\$200 at zero output and \\$260 at one unit. What are its fixed cost and the marginal cost of the first unit?',
            options: [
              'Fixed cost \\$200; marginal cost \\$60',
              'Fixed cost \\$60; marginal cost \\$200',
              'Fixed cost \\$200; marginal cost \\$260',
              'Fixed cost \\$0; marginal cost \\$260'
            ],
            correctAnswer: 0,
            explanation: 'Total cost at zero output is all fixed cost, \\$200. The first unit raises total cost by \\$60, so that is its marginal cost. Treating TC(0) as zero would wrongly make the first unit cost \\$260.'
          },
          {
            question: 'At an output of 50 units, a firm\'s ATC is \\$18 and its AVC is \\$14. What is the firm\'s total fixed cost?',
            options: [
              '\\$200',
              '\\$900',
              '\\$700',
              '\\$4'
            ],
            correctAnswer: 0,
            explanation: 'AFC = ATC − AVC = \\$4 per unit, and FC = AFC × Q = \\$4 × 50 = \\$200. The \\$900 and \\$700 figures are total cost and total variable cost.'
          },
          {
            question: 'In a cost table, the marginal cost of the next unit is above average total cost. What happens to ATC when that unit is produced?',
            options: [
              'ATC rises',
              'ATC falls',
              'ATC stays the same',
              'ATC reaches its minimum'
            ],
            correctAnswer: 0,
            explanation: 'Adding a unit that costs more than the current average pulls the average up, the same way a test score above your average raises it. ATC falls only when MC is below it.'
          }
        ]
      }
    }
  ]
};
