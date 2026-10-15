export const microFactorMarketsPart2Data = {
  topicSlug: 'micro-factor-markets',
  sections: [
    {
      id: 'microfac2-intro',
      type: 'text' as const,
      content: `
# 💰 Factor Markets

**Part 2 of 7 — MRP When the Product Market Is Not Competitive**

---

| Section |
|---------|
| 📖 Two Ways to Compute MRP |
| A Price Maker's MRP Table |
| Why MRP Falls Faster for a Price Maker |
| What It Means for Hiring |

> 🔑 **Key Concept:** Marginal revenue product is the **change in total revenue** from hiring one more worker: **MRP = MP × MR = ΔTR ÷ ΔL**. Part 1 used a price taker, where MR equals the price. A firm with market power must **cut its price** to sell the extra output, so its MR is below the price and its MRP falls faster as it hires.
`
    },
    {
      id: 'microfac2-two-ways',
      type: 'text' as const,
      content: `
## 📖 Two Ways to Compute MRP

Every firm's MRP answers one question: **how much does total revenue rise when the firm adds one worker?**

$$MRP = MP \\times MR \\qquad \\text{or} \\qquad MRP = \\frac{\\Delta TR}{\\Delta L}$$

The two formulas always agree. MP is the extra output, and MR is the extra revenue per unit of that output, so their product is the extra revenue.

### Which Product Market Is the Firm In?

| Product market | MR compared with price | MRP formula you can use | Example seller |
|---|---|---|---|
| Perfect competition | MR = P (horizontal demand) | MRP = MP × P | A wheat farm |
| Monopoly | MR < P | MRP = MP × MR = ΔTR ÷ ΔL | The only cable provider in a town |
| Monopolistic competition | MR < P | MRP = MP × MR = ΔTR ÷ ΔL | A bakery with its own brand |
| Oligopoly | MR < P | MRP = MP × MR = ΔTR ÷ ΔL | One of three cement makers |

You already know why MR is below price for a firm with a downward-sloping demand curve (see the Monopoly lesson): to sell one more unit, it lowers the price on **every** unit it sells, not just the last one.

> 🔑 **AP Connection:** The words "perfectly competitive **product** market" are your signal that MRP = MP × P. If the table shows a price that **falls** as output rises, the firm is a price maker, and you must compute MRP from the change in total revenue.
`
    },
    {
      id: 'microfac2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For which seller is the MRP of labor equal to the marginal product of labor times the product price?',
            options: [
              'A wheat farm that sells its grain into a perfectly competitive market',
              'A bakery whose brand-name bagels have a downward-sloping demand',
              'A cable company that is the only provider in its town',
              'A cement maker that is one of three firms in its region'
            ],
            correctAnswer: 0,
            explanation: 'Only a price taker has MR equal to the price, so only the wheat farm can use MP × P. The bakery, the cable company and the cement maker all face downward-sloping demand, so their MR is below price and MRP must be computed as MP × MR.'
          },
          {
            question: 'A monopolist hires one more worker, who adds 5 units of output. To sell those 5 units, the firm cuts its price from \\$20 to \\$19, and total revenue rises by \\$60. What is that worker\'s MRP?',
            options: [
              '\\$60',
              '\\$95',
              '\\$100',
              '\\$19'
            ],
            correctAnswer: 0,
            explanation: 'MRP is the change in total revenue, \\$60. Multiplying 5 units by the new \\$19 price gives \\$95, which ignores the price cut on all the earlier units; \\$100 uses the old price, and \\$19 is the price of one unit, not a revenue change.'
          }
        ]
      }
    },
    {
      id: 'microfac2-table',
      type: 'text' as const,
      content: `
## A Price Maker's MRP Table

Harbor Bagels sells a brand of bagels with a loyal following, so it faces a downward-sloping demand curve. Its production is the same as the price-taking firm in Part 1, but to sell more bagels it must lower its price.

| Workers | Total product (dozens) | MP | Price per dozen | Total revenue | MRP = ΔTR | MP × P |
|---|---|---|---|---|---|---|
| 0 | 0 | — | — | \\$0 | — | — |
| 1 | 10 | 10 | \\$15 | \\$150 | \\$150 | \\$150 |
| 2 | 18 | 8 | \\$14 | \\$252 | \\$102 | \\$112 |
| 3 | 24 | 6 | \\$13 | \\$312 | \\$60 | \\$78 |
| 4 | 28 | 4 | \\$12 | \\$336 | \\$24 | \\$48 |
| 5 | 30 | 2 | \\$11 | \\$330 | −\\$6 | \\$22 |

### Reading the Second Worker
- Output rises from 10 to 18 dozen, so **MP = 8**.
- Total revenue rises from \\$150 to \\$252, so **MRP = \\$102**.
- The extra revenue per extra dozen is \\$102 ÷ 8 = **\\$12.75**. That is the MR over this range, and it is **below** the new \\$14 price.
- Check with the other formula: MP × MR = 8 × \\$12.75 = \\$102 ✓.

### Why MP × P Overstates MRP
The last column multiplies the extra dozens by the new price. It counts the \\$14 earned on each new dozen but forgets that the first 10 dozen now also sell for \\$1 less. For the second worker: \\$112 − \\$10 lost on the first 10 dozen = **\\$102**.

### A Negative MRP
The fifth worker adds 2 dozen, but the price cut on the other 28 dozen costs more than the new bagels bring in. Total revenue **falls**, so MRP is **−\\$6**. No firm would hire that worker at any positive wage.
`
    },
    {
      id: 'microfac2-input',
      type: 'input-boxes' as const,
      content: `
**Build the MRP Column** ✍️

A local printing shop has some pricing power. Its schedule:

| Workers | Total product (jobs) | Price per job |
|---|---|---|
| 1 | 8 | \\$10 |
| 2 | 14 | \\$9 |
| 3 | 18 | \\$8 |
| 4 | 20 | \\$7 |

1) Total revenue with 3 workers, in dollars?

2) MRP of the 2nd worker, in dollars?

3) MRP of the 3rd worker, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['144', '46', '18'],
        hint1: 'Total revenue is total product times the price at that output.',
        hint2: 'Find TR with 1 worker and with 2 workers, then subtract.',
        hint3: 'TR with 3 workers minus TR with 2 workers.',
        explanation: '1) 18 × \\$8 = \\$144. 2) TR goes from 8 × \\$10 = \\$80 to 14 × \\$9 = \\$126, so MRP = \\$46. 3) \\$144 − \\$126 = \\$18. MP × P would give \\$54 and \\$32, too high because it ignores the price cut on earlier jobs.'
      }
    },
    {
      id: 'microfac2-why-falls',
      type: 'text' as const,
      content: `
## Why MRP Falls Faster for a Price Maker

For a price taker, MRP falls for **one** reason. For a price maker, it falls for **two**.

| Reason MRP falls | Price taker | Price maker |
|---|---|---|
| **Diminishing marginal returns:** each worker adds less output (MP falls) | Yes | Yes |
| **Falling marginal revenue:** each extra unit adds less revenue than the one before (MR falls) | No, MR = P stays constant | Yes, the price cut spreads over more units |

### The Graph in Words
Put wage on the vertical axis and the quantity of labor on the horizontal axis. Draw the price taker's MP × P curve sloping down. The price maker's **MRP curve starts at the same point for the first worker but lies below it after that and slopes down more steeply**. Both are labor demand curves: the price maker's MRP curve is its demand for labor.

## What It Means for Hiring

Every firm hires where **MRP = MFC**. Suppose Harbor Bagels can hire all the bakers it wants at **\\$40** a day.

| Worker | Harbor Bagels' MRP | Hire at \\$40? | If it could sell at a constant \\$15 (MP × \\$15) | Hire at \\$40? |
|---|---|---|---|---|
| 1 | \\$150 | Yes | \\$150 | Yes |
| 2 | \\$102 | Yes | \\$120 | Yes |
| 3 | \\$60 | Yes | \\$90 | Yes |
| 4 | \\$24 | **No** | \\$60 | Yes |

Harbor Bagels hires **3** bakers. A price taker with the same production and a \\$15 price would hire **4**. Firms with product-market power hire **fewer workers** and produce **less output**: the monopoly's output restriction shows up in the labor market too.

> ⚠️ **Common trap:** Using MP × P for a price maker. In the table above, that column says the 4th baker brings in \\$48, which would justify hiring at \\$40. The real MRP is \\$24, so hiring that baker would lose \\$16.

> 🔑 **AP Connection:** A free-response question may give you price and output by worker and ask whether to hire one more. Compute TR at both levels of labor, subtract to get MRP, and compare it with the wage (MFC). State the comparison in your answer: "MRP of \\$24 is less than the \\$40 wage, so do not hire."
`
    },
    {
      id: 'microfac2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why does a monopolist\'s MRP curve slope down more steeply than the MP × P curve of a price-taking firm with the same production function?',
            options: [
              'Its marginal product and its marginal revenue each fall as it hires',
              'The monopolist pays each worker more than the competitive wage',
              'The monopolist\'s marginal product falls faster than a price taker\'s',
              'Its fixed costs rise each time it adds another worker'
            ],
            correctAnswer: 0,
            explanation: 'With the same production function, MP falls at the same rate for both firms. The monopolist also has to cut its price to sell more, so MR falls too, and MRP = MP × MR falls for two reasons. Wages and fixed costs do not enter MRP at all.'
          },
          {
            question: 'Using the Harbor Bagels table, how many bakers does the firm hire if the daily wage is \\$100?',
            options: [
              '2',
              '3',
              '4',
              '1'
            ],
            correctAnswer: 0,
            explanation: 'The first two bakers have MRP of \\$150 and \\$102, both at least \\$100. The third baker\'s MRP is only \\$60, so hiring stops at 2.'
          },
          {
            question: 'A firm\'s product market changes from perfect competition to monopoly, and its production function and the wage stay the same. Its employment will most likely',
            options: [
              'fall, since MR is below price',
              'rise, since its profit per unit of output goes up',
              'stay the same, since its marginal product is unchanged',
              'rise, since the monopoly can now pay a higher wage'
            ],
            correctAnswer: 0,
            explanation: 'The monopolist\'s MRP is MP × MR, and MR is below price, so at the same wage it hires fewer workers and produces less. Higher profit per unit does not raise the revenue from one more worker, and the wage is set in the labor market.'
          }
        ]
      }
    }
  ]
}
