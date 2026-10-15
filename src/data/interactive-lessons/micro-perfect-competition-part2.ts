export const microPerfectCompetitionPart2Data = {
  topicSlug: 'micro-perfect-competition',
  sections: [
    {
      id: 'microper2-intro',
      type: 'text' as const,
      content: `
# 💰 Perfect Competition

**Part 2 of 7 — Profit Maximization from Tables**

---

| Section |
|---------|
| 📖 Method 1: Total Revenue Minus Total Cost |
| Method 2: Compare MR and MC Unit by Unit |
| Accounting, Economic and Normal Profit |

> 🔑 **Key Concept:** A price-taking firm can find its best output in two ways: compute profit = TR − TC at every quantity, or keep adding units as long as each unit's marginal revenue (the price) is at least its marginal cost. Both methods always land on the same quantity.
`
    },
    {
      id: 'microper2-tr-tc',
      type: 'text' as const,
      content: `
## 📖 Method 1: Total Revenue Minus Total Cost

**Crestview Orchard** sells crates of apples in a perfectly competitive market, so it takes the market price as given. Its fixed cost is **\\$28** a day, which it pays even if it picks nothing. Its cost numbers are built the way the Production & Costs topic shows, and we will use this same orchard through Part 7.

The market price is **\\$20 per crate**.

| Crates (q) | Total cost (TC) | Total revenue (TR = \\$20 × q) | Profit (TR − TC) |
|---|---|---|---|
| 0 | \\$28 | \\$0 | −\\$28 |
| 1 | \\$38 | \\$20 | −\\$18 |
| 2 | \\$42 | \\$40 | −\\$2 |
| 3 | \\$46 | \\$60 | \\$14 |
| 4 | \\$56 | \\$80 | \\$24 |
| 5 | \\$72 | \\$100 | \\$28 |
| 6 | \\$90 | \\$120 | **\\$30** |
| 7 | \\$112 | \\$140 | \\$28 |
| 8 | \\$136 | \\$160 | \\$24 |

Profit peaks at **6 crates**, where the orchard earns **\\$30** of economic profit.

**The graph, described in text:** Put quantity on the horizontal axis and dollars on the vertical axis. TR is a straight line from the origin with a slope of 20, because every crate adds the same \\$20. TC starts at \\$28 on the vertical axis (the fixed cost) and curves upward more and more steeply. Profit is the vertical distance from TC up to TR, and that gap is widest at 6 crates, where the slope of TC (marginal cost) is closest to the slope of TR (the price).

> 🔑 **AP Connection:** For a price taker, total revenue rises with every unit sold, so "produce where total revenue is largest" is never the rule. The goal is the largest **gap** between TR and TC.
`
    },
    {
      id: 'microper2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At a price of \\$20 per crate, what is Crestview Orchard\'s economic profit if it sells 5 crates?',
            options: [
              '\\$28',
              '\\$30',
              '\\$100',
              '\\$72'
            ],
            correctAnswer: 0,
            explanation: 'Profit is TR − TC = \\$100 − \\$72 = \\$28. The \\$30 figure is the profit at 6 crates, and \\$100 and \\$72 are the revenue and cost at 5 crates, not their difference.'
          },
          {
            question: 'Why is Crestview\'s total revenue curve a straight line that starts at the origin?',
            options: [
              'Each crate sells at the same market price',
              'Each extra crate costs the orchard the same',
              'Market demand for apples is perfectly elastic',
              'Its total cost rises by the same amount per crate'
            ],
            correctAnswer: 0,
            explanation: 'A price taker receives the same price for every crate, so TR rises by exactly \\$20 per crate from zero. It is the firm\'s demand, not market demand, that is perfectly elastic, and costs do not determine the shape of TR.'
          }
        ]
      }
    },
    {
      id: 'microper2-mr-mc',
      type: 'text' as const,
      content: `
## Method 2: Compare MR and MC Unit by Unit

For a price taker, **MR = P = \\$20** on every crate. Marginal cost is the change in total cost from one more crate.

| Crate | MC | MR = P | Add this crate? | Profit after this crate |
|---|---|---|---|---|
| 1st | \\$10 | \\$20 | Yes (+\\$10) | −\\$18 |
| 2nd | \\$4 | \\$20 | Yes (+\\$16) | −\\$2 |
| 3rd | \\$4 | \\$20 | Yes (+\\$16) | \\$14 |
| 4th | \\$10 | \\$20 | Yes (+\\$10) | \\$24 |
| 5th | \\$16 | \\$20 | Yes (+\\$4) | \\$28 |
| 6th | \\$18 | \\$20 | Yes (+\\$2) | **\\$30** |
| 7th | \\$22 | \\$20 | No (−\\$2) | \\$28 |
| 8th | \\$24 | \\$20 | No (−\\$4) | \\$24 |

**The table rule:** produce the **last unit for which MR ≥ MC**, and stop before the first unit (on the rising part of MC) whose MC is greater than MR. In a table, MR rarely equals MC exactly, so this is what "produce where MR = MC" means. Here the 6th crate adds \\$2 to profit and the 7th would subtract \\$2, so the orchard stops at **6**.

### Check It with Per-Unit Numbers

Average total cost at 6 crates is \\$90 ÷ 6 = **\\$15**. Profit per crate is \\$20 − \\$15 = \\$5, so

$$\\text{Profit} = (P - ATC) \\times q = (20 - 15) \\times 6 = \\$30$$

which matches Method 1.

### Profit Maximization Is Not Cost Minimization

Crestview's ATC is lowest at **4 crates** (\\$56 ÷ 4 = **\\$14**). Profit there is (\\$20 − \\$14) × 4 = **\\$24**, less than \\$30. Crates 5 and 6 raise ATC a little, but each adds more to revenue (\\$20) than to cost (\\$16 and \\$18). Profit **per crate** is higher at 4 crates (\\$6 vs. \\$5), yet **total** profit is higher at 6. Firms maximize total profit.

| Tempting rule | Why it fails |
|---|---|
| Produce where ATC is lowest | Ignores units whose MR still exceeds MC |
| Produce where TR is largest | TR keeps rising with output for a price taker |
| Produce where MC is lowest | MC bottoms out at crates 2–3, far short of the best output |
| Maximize profit per unit | A smaller margin on more units can be worth more |

> 🔑 **AP Connection:** When a free-response question gives a cost table and a price, show the MC comparison ("the 6th unit's MC of \\$18 is below the \\$20 price, but the 7th unit's MC of \\$22 is above it"). That sentence is the explanation readers look for.
`
    },
    {
      id: 'microper2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The market price of apples rises to **\\$23 per crate**. Use Crestview's MC column and total cost column above.

1) How many crates maximize profit?

2) What is total revenue at that quantity, in dollars?

3) What is economic profit at that quantity, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '161', '49'],
        hint1: 'The 7th crate has MC = \\$22 and the 8th has MC = \\$24. Compare each with \\$23.',
        hint2: 'Multiply the price by the quantity.',
        hint3: 'Total cost at 7 crates is \\$112.',
        explanation: '1) The 7th crate adds \\$23 of revenue for \\$22 of cost, but the 8th would cost \\$24, so produce 7. 2) TR = \\$23 × 7 = \\$161. 3) Profit = \\$161 − \\$112 = \\$49, which matches (\\$23 − \\$16 ATC) × 7.'
      }
    },
    {
      id: 'microper2-profit-types',
      type: 'text' as const,
      content: `
## Accounting, Economic and Normal Profit

Economists count **every** cost of the resources a firm uses, including costs that never show up as a payment.

| Term | Meaning | Orchard example |
|---|---|---|
| **Explicit costs** | Money actually paid out | Wages, fertilizer, fuel, rent |
| **Implicit costs** | The opportunity cost of resources the owner already has | The salary the owner gives up; interest her savings could earn |
| **Accounting profit** | TR − explicit costs | What a tax return shows |
| **Economic profit** | TR − explicit costs − implicit costs | What tells a firm whether to stay or leave |
| **Normal profit** | Economic profit of exactly zero | Accounting profit just equals implicit costs |

### Worked Example: The Owner's Year

The orchard's owner takes in **\\$180,000** of revenue for the year and pays **\\$120,000** in explicit costs. She could earn **\\$45,000** managing someone else's farm, and the **\\$100,000** of savings she put into the orchard could earn 5 percent, or **\\$5,000**, in the bank.

1. Accounting profit = \\$180,000 − \\$120,000 = **\\$60,000**
2. Implicit costs = \\$45,000 + \\$5,000 = **\\$50,000**
3. Economic profit = \\$60,000 − \\$50,000 = **\\$10,000**

She earns \\$10,000 more than her resources could earn in their next-best uses, so staying in the business is the right call.

**Zero economic profit is not failure.** It means the owner earns exactly what her time and money could earn elsewhere, so she has no reason to leave. That is why a firm earning normal profit keeps operating.

> 🔑 **AP Connection:** Cost curves on the AP exam already include implicit costs. When a graph shows P = ATC, the firm is earning **normal profit**, and the accountant would still report a positive accounting profit.
`
    },
    {
      id: 'microper2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A bakery owner takes in \\$70,000 of revenue and pays \\$40,000 of explicit costs. She left a job paying \\$35,000 to run the bakery. What is her economic profit?',
            options: [
              '−\\$5,000',
              '\\$30,000',
              '\\$65,000',
              '\\$5,000'
            ],
            correctAnswer: 0,
            explanation: 'Economic profit = \\$70,000 − \\$40,000 − \\$35,000 = −\\$5,000. The \\$30,000 figure is accounting profit, which leaves out the salary she gave up.'
          },
          {
            question: 'At a price of \\$20, why does Crestview produce 6 crates rather than 4, where its average total cost is lowest?',
            options: [
              'Crates 5 and 6 each add more to revenue than they add to cost',
              'Average total cost keeps falling through the 6th crate',
              'Profit per crate is higher at 6 crates than at 4',
              'Marginal cost reaches its minimum at the 6th crate'
            ],
            correctAnswer: 0,
            explanation: 'The 5th and 6th crates each bring in \\$20 while adding only \\$16 and \\$18 to cost, so total profit rises from \\$24 to \\$30. ATC actually rises after 4 crates, profit per crate falls from \\$6 to \\$5, and MC is lowest at crates 2 and 3.'
          },
          {
            question: 'An accountant reports that a firm earned zero economic profit last year. This means the firm',
            options: [
              'earned an accounting profit equal to its implicit costs',
              'earned an accounting profit of exactly zero',
              'earned less than its owners could get elsewhere',
              'earned revenue that just covered its explicit costs'
            ],
            correctAnswer: 0,
            explanation: 'Zero economic profit means revenue covered explicit and implicit costs exactly, so accounting profit equals the implicit costs. Revenue that only covers explicit costs would be a zero accounting profit, which is an economic loss.'
          }
        ]
      }
    }
  ]
}
