export const microScarcityMarginalAnalysisPart5Data = {
  topicSlug: 'micro-scarcity-marginal-analysis',
  sections: [
    {
      id: 'microsca5-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Marginal Analysis

**Part 5 of 7 — Cost-Benefit Analysis & Marginal Decision Tables**

---

| Section |
|---------|
| 📖 Explicit and Implicit Costs |
| Accounting Profit vs. Economic Profit |
| Marginal Decision Tables |
| Utility Maximization with a Budget |

> 🔑 **Key Concept:** Good decisions count **every** opportunity cost, including the implicit ones, and are made **at the margin**: keep doing more of an activity as long as the next unit's marginal benefit is at least as large as its marginal cost.
`
    },
    {
      id: 'microsca5-costs',
      type: 'text' as const,
      content: `
## 📖 Explicit and Implicit Costs

| Cost | Definition | Examples for a small business |
|---|---|---|
| **Explicit** | A payment of money to someone outside the firm | Wages paid to employees, rent, supplies, fuel, permits |
| **Implicit** | The opportunity cost of resources the owner already has and uses in the business | The salary the owner gives up, interest the owner's savings would have earned, rent the owner could charge for a building she owns |

## Accounting Profit vs. Economic Profit

- **Accounting profit** = total revenue − explicit costs
- **Economic profit** = total revenue − explicit costs − implicit costs

Because economic profit subtracts more costs, it is always less than or equal to accounting profit.

### Worked Example: Lena's Food Truck

Lena left a job paying \\$45,000 a year to run a food truck. She put \\$50,000 of her savings into the truck; in a savings account that money would have earned 4% interest.

| Item | Amount |
|---|---|
| Total revenue | \\$150,000 |
| Explicit costs (ingredients, fuel, permits, a helper's wages) | \\$90,000 |
| Implicit cost: forgone salary | \\$45,000 |
| Implicit cost: forgone interest (4% of \\$50,000) | \\$2,000 |

- Accounting profit = \\$150,000 − \\$90,000 = **\\$60,000**
- Economic profit = \\$150,000 − \\$90,000 − \\$45,000 − \\$2,000 = **\\$13,000**

Lena's positive economic profit means the truck earns more than her next-best use of her time and money, so staying in business is the right choice.

### Normal Profit

When economic profit is **zero**, the owner earns a **normal profit**: revenue covers every explicit and implicit cost, so the owner does exactly as well as in the next-best alternative. A firm earning zero economic profit has no reason to leave the industry.

> 🔑 **AP Connection:** Whenever the AP exam says "profit" in microeconomics, it means **economic** profit unless it says otherwise. This idea returns in the unit on perfect competition, where long-run economic profit is zero.
`
    },
    {
      id: 'microsca5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Lena\'s food truck earns \\$150,000 in revenue with \\$90,000 in explicit costs. She gave up a \\$45,000 salary and \\$2,000 in interest. What is her economic profit?',
            options: [
              '\\$60,000',
              '\\$15,000',
              '\\$13,000',
              '\\$58,000'
            ],
            correctAnswer: 2,
            explanation: 'Economic profit subtracts explicit and implicit costs: \\$150,000 − \\$90,000 − \\$45,000 − \\$2,000 = \\$13,000. The figure \\$60,000 is accounting profit, and the other two leave out one of the implicit costs.'
          },
          {
            question: 'Which of the following is an implicit cost for the owner of a hair salon?',
            options: [
              'The wages she pays to her two stylists',
              'The salary she gave up at a big chain',
              'The rent she pays each month for her shop',
              'The cost of the shampoo she orders weekly'
            ],
            correctAnswer: 1,
            explanation: 'The salary the owner gave up is an opportunity cost that involves no payment, so it is implicit. Wages, rent and supplies are all money paid to someone outside the business, so they are explicit costs.'
          },
          {
            question: 'A firm that earns zero economic profit is',
            options: [
              'losing money in accounting terms',
              'earning a normal profit',
              'about to exit the industry',
              'earning zero accounting profit'
            ],
            correctAnswer: 1,
            explanation: 'Zero economic profit means revenue covers all explicit and implicit costs, which is a normal profit, so the owner does as well as in the next-best alternative. Its accounting profit is positive whenever implicit costs are positive, and it has no reason to leave.'
          }
        ]
      }
    },
    {
      id: 'microsca5-tables',
      type: 'text' as const,
      content: `
## Marginal Decision Tables

Part 1 introduced the rule **MB = MC**. Here is how to apply it to a table, which is how the AP exam usually presents the problem.

- **Marginal benefit (MB)** = change in total benefit from one more unit
- **Marginal cost (MC)** = change in total cost from one more unit
- **Net benefit** = total benefit − total cost

### Worked Example: How Many Lifeguards?

A town is deciding how many lifeguards to hire for its beach.

| Lifeguards | Total benefit | MB | Total cost | MC | Net benefit |
|---|---|---|---|---|---|
| 0 | \\$0 | | \\$0 | | \\$0 |
| 1 | \\$500 | \\$500 | \\$100 | \\$100 | \\$400 |
| 2 | \\$850 | \\$350 | \\$250 | \\$150 | \\$600 |
| 3 | \\$1,100 | \\$250 | \\$450 | \\$200 | **\\$650** |
| 4 | \\$1,250 | \\$150 | \\$700 | \\$250 | \\$550 |
| 5 | \\$1,350 | \\$100 | \\$1,000 | \\$300 | \\$350 |

**Step 1: Compare MB and MC unit by unit.**
- 1st lifeguard: MB \\$500 > MC \\$100, so hire.
- 2nd: MB \\$350 > MC \\$150, so hire.
- 3rd: MB \\$250 > MC \\$200, so hire.
- 4th: MB \\$150 < MC \\$250, so stop.

**Step 2: Confirm with net benefit.** Net benefit peaks at **\\$650 with 3 lifeguards**. Hiring the 4th would add \\$150 of benefit but \\$250 of cost, so net benefit would fall by \\$100.

### Two Traps
- **Maximizing total benefit** would mean hiring all 5 lifeguards, but the last two cost more than they add.
- **Stopping where MB is largest** would mean hiring only 1, leaving \\$250 of net benefit unclaimed.

### Fixed and Sunk Costs Do Not Change the Margin

Suppose the town must also build a \\$300 lifeguard tower no matter how many lifeguards it hires. Total cost rises by \\$300 in every row, so every net benefit falls by \\$300, but **MC does not change**, and the best choice is still 3 lifeguards (net benefit \\$350). The same logic applies to a sunk cost that has already been paid: it is the same under every option, so it cannot affect which option is best.

A change in **marginal** cost does change the answer. If each lifeguard's wage rose so that every MC went up by \\$100, the 3rd lifeguard would cost \\$300 against an MB of \\$250, and the town would hire only 2.
`
    },
    {
      id: 'microsca5-utility',
      type: 'text' as const,
      content: `
## Utility Maximization with a Budget

Part 1 gave the rule: spend so that **marginal utility per dollar (MU/P) is equal across goods**. With a limited budget, the full rule has two conditions:

1. MU/P is equal for the last unit of each good bought, **and**
2. The entire budget is spent.

### Worked Example: Pizza and Smoothies

Sam has \\$20. Pizza slices cost \\$2 and smoothies cost \\$4.

| Unit | MU of pizza | MU/P of pizza | MU of smoothie | MU/P of smoothie |
|---|---|---|---|---|
| 1st | 20 | 10 | 36 | 9 |
| 2nd | 16 | 8 | 24 | 6 |
| 3rd | 12 | 6 | 20 | 5 |
| 4th | 10 | 5 | 12 | 3 |
| 5th | 6 | 3 | 8 | 2 |

**Method:** buy one unit at a time, always choosing the unit with the highest MU/P that is still affordable.

| Step | Purchase | MU/P | Total spent |
|---|---|---|---|
| 1 | 1st pizza | 10 | \\$2 |
| 2 | 1st smoothie | 9 | \\$6 |
| 3 | 2nd pizza | 8 | \\$8 |
| 4 | 3rd pizza | 6 | \\$10 |
| 5 | 2nd smoothie | 6 | \\$14 |
| 6 | 4th pizza | 5 | \\$16 |
| 7 | 3rd smoothie | 5 | \\$20 |

**Result:** 4 pizza slices and 3 smoothies. Both conditions hold: MU/P is 5 for the last unit of each good, and 4 × \\$2 + 3 × \\$4 = \\$20.

Total utility = (20 + 16 + 12 + 10) + (36 + 24 + 20) = 58 + 80 = **138**. Any other affordable bundle gives less. For example, 2 slices and 4 smoothies also costs \\$20 but yields 36 + 92 = 128.

### Misconceptions
- **Comparing MU instead of MU/P.** The 1st smoothie has the highest MU (36), but per dollar it is worth less than the 1st pizza slice (9 versus 10).
- **Maximizing utility means consuming until MU = 0.** That ignores the budget; Sam runs out of money long before MU reaches zero.
- **Equal MU/P alone is enough.** Buying 2 slices and 2 smoothies equalizes MU/P at 8, but it leaves \\$8 unspent, so Sam can still raise total utility.

> 🔑 **AP Connection:** Expect a table like this one with a stated income and prices. Show the MU/P column in your work, check that the bundle exhausts the budget, and state the rule in words: the last dollar spent on each good yields the same marginal utility.
`
    },
    {
      id: 'microsca5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the lifeguard table and Sam's pizza and smoothie table from this part.

**1)** How many lifeguards should the town hire?

**2)** What is the town's maximum net benefit, in dollars? (Enter a number without the dollar sign.)

**3)** Suppose Sam's income falls to \\$14 while prices stay the same. Following the same buy-the-highest-MU/P method, how many pizza slices does he buy?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '650', '3'],
        hint1: 'Hire while MB is at least MC. The 4th lifeguard has MB \\$150 and MC \\$250.',
        hint2: 'Net benefit = total benefit − total cost at the best quantity: \\$1,100 − \\$450.',
        hint3: 'Use the step table and stop when \\$14 has been spent.',
        explanation: '1) Hire 3: the 3rd lifeguard adds \\$250 of benefit for \\$200 of cost, but the 4th adds \\$150 for \\$250. 2) Net benefit at 3 is \\$1,100 − \\$450 = \\$650. 3) The first five purchases in the step table (1st, 2nd and 3rd pizza and 1st and 2nd smoothie) cost exactly \\$14, so Sam buys 3 slices and 2 smoothies; MU/P is 6 for the last unit of each.'
      }
    },
    {
      id: 'microsca5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The town in the lifeguard example must also pay a one-time \\$300 for a lifeguard tower, whatever the number of lifeguards it hires. How does this affect the best number of lifeguards?',
            options: [
              'It lowers the best number to 2',
              'It leaves the best number at 3',
              'It raises the best number to 4',
              'It lowers the best number to 1'
            ],
            correctAnswer: 1,
            explanation: 'A fixed cost adds the same \\$300 to total cost in every row, so marginal cost does not change and 3 lifeguards still has the highest net benefit. Only a change in marginal benefit or marginal cost can change the optimal quantity.'
          },
          {
            question: 'Tacos cost \\$3 and burritos cost \\$6. Ana spends her whole budget, and her last taco gave 18 utils while her last burrito gave 30 utils. To increase her total utility, Ana should buy',
            options: [
              'more tacos and fewer burritos',
              'more burritos and fewer tacos',
              'the same number of each item',
              'fewer of both items in total'
            ],
            correctAnswer: 0,
            explanation: 'Per dollar, the last taco gives 18 ÷ 3 = 6 utils and the last burrito gives 30 ÷ 6 = 5 utils. Shifting dollars from burritos to tacos raises total utility until MU per dollar is equal. Comparing raw utils (30 against 18) points the wrong way.'
          },
          {
            question: 'Which statement about marginal and total values is correct?',
            options: [
              'Total benefit falls once marginal benefit falls',
              'Total benefit peaks where net benefit peaks',
              'Total benefit can rise even as marginal benefit falls',
              'Marginal cost is total cost divided by quantity'
            ],
            correctAnswer: 2,
            explanation: 'Falling marginal benefit is not falling total benefit: as long as marginal benefit is positive, total benefit keeps rising, even if each added unit adds less than the one before. Total benefit peaks where MB falls to zero, but net benefit peaks earlier, where MB = MC, and total cost divided by quantity is average cost, not marginal cost.'
          }
        ]
      }
    }
  ]
}
