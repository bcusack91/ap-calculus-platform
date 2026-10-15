export const microPerfectCompetitionPart3Data = {
  topicSlug: 'micro-perfect-competition',
  sections: [
    {
      id: 'microper3-intro',
      type: 'text' as const,
      content: `
# 💰 Perfect Competition

**Part 3 of 7 — The Side-by-Side Graph**

---

| Section |
|---------|
| 📖 Setting Up the Two Graphs |
| Profit and Loss Rectangles |
| Break-Even and Shutdown Points |
| The Firm's Short-Run Supply Curve |

> 🔑 **Key Concept:** Perfect competition is drawn as **two graphs side by side**. On the left, market supply and demand set the price. On the right, one firm takes that price as a horizontal line and chooses its output where MR = MC. Every profit, loss and shutdown question is read off the firm graph.
`
    },
    {
      id: 'microper3-two-graphs',
      type: 'text' as const,
      content: `
## 📖 Setting Up the Two Graphs

### The Market Graph (Left)
- Vertical axis: **Price**. Horizontal axis: **Quantity** for the whole industry (capital **Q**, often thousands of units).
- A downward-sloping **D** and an upward-sloping **S** cross at the market price **Pₘ** and quantity **Qₘ**.

### The Firm Graph (Right)
- Same price scale on the vertical axis. Horizontal axis: output of **one** firm (lowercase **q**, a tiny number next to Qₘ).
- Draw a dashed line from Pₘ across into the firm graph. That horizontal line is the firm's demand curve, labeled **D = MR = AR = P**.
- Draw the cost curves: **MC** (a swoosh that falls, then rises steeply), **ATC** (a U), and **AVC** (a lower U that gets closer to ATC as q rises, because the gap is AFC).
- MC must pass through the **minimum** points of both AVC and ATC.
- The firm produces **q\\*** where MR = MC on the rising part of MC. Drop a dashed line from that point to the q axis.

### Crestview on the Graph
In the market for apples, S and D cross at \\$20, so Crestview's horizontal MR line sits at \\$20. MC crosses that line between 6 and 7 crates, so q\\* = 6. At 6 crates, ATC is \\$15, below the price line.

| Labeling checklist | Why it matters |
|---|---|
| Both axes on both graphs labeled | Unlabeled graphs lose the graph point |
| Same price carried across with a dashed line | Shows the firm takes the market price |
| MR line labeled with D, MR, AR or P | Readers accept "MR = D" or "P = MR" |
| MC through the minimum of ATC (and AVC) | The most common lost point |
| q\\* marked where MR = MC | Not where MR meets ATC |

> 🔑 **AP Connection:** Use **Q** for the market and **q** for the firm. A free-response question that asks you to "show the firm's output" wants q\\* on the firm graph's horizontal axis, found at MR = MC.
`
    },
    {
      id: 'microper3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On the side-by-side graphs, what determines the price that the firm faces?',
            options: [
              'The intersection of the market supply and demand curves',
              'The point where one firm\'s MC equals its MR',
              'The minimum of a typical firm\'s ATC curve',
              'The price that the largest firm in the market sets'
            ],
            correctAnswer: 0,
            explanation: 'Market supply and demand set the price, and each firm takes it as given. The firm then picks output where MC equals that price; it does not choose the price, and ATC sets the price only in long-run equilibrium.'
          },
          {
            question: 'Where on the firm graph is the profit-maximizing quantity found?',
            options: [
              'Where MC crosses the horizontal price line',
              'Where ATC reaches its lowest point',
              'Where the price line touches AVC',
              'Where AVC meets the rising MC curve'
            ],
            correctAnswer: 0,
            explanation: 'The firm produces where MR = MC, and for a price taker MR is the horizontal price line. The lowest points of ATC and AVC are the break-even and shutdown points, not the output choice.'
          }
        ]
      }
    },
    {
      id: 'microper3-rectangles',
      type: 'text' as const,
      content: `
## Profit and Loss Rectangles

Every money amount on the firm graph is a rectangle with width **q\\*** and a height read at q\\*.

| Rectangle | Height (at q\\*) | Width | Area |
|---|---|---|---|
| Total revenue | P | q\\* | P × q\\* |
| Total cost | ATC | q\\* | ATC × q\\* |
| Total variable cost | AVC | q\\* | AVC × q\\* |
| Total fixed cost | ATC − AVC | q\\* | AFC × q\\* |
| Profit or loss | Gap between P and ATC | q\\* | (P − ATC) × q\\* |

### Profit: Price Above ATC
At a price of **\\$20**, Crestview produces 6 crates and ATC is \\$15. The **profit rectangle** runs from the ATC height (\\$15) up to the price line (\\$20) and from 0 to 6 crates.

Profit = (\\$20 − \\$15) × 6 = **\\$30**

### Loss: Price Below ATC
Now suppose the market price is **\\$12**. The 4th crate's MC (\\$10) is below \\$12, but the 5th crate's MC (\\$16) is above it, so q\\* = **4**. At 4 crates, ATC = \\$14 and AVC = \\$7. The **loss rectangle** now runs from the price line (\\$12) **up** to ATC (\\$14), with width 4.

Loss = (\\$14 − \\$12) × 4 = **\\$8**

At \\$12 the orchard still covers its variable cost: TR = \\$48 and TVC = \\$7 × 4 = \\$28, so \\$20 of revenue is left over to pay part of the \\$28 fixed cost.

> 🔑 **AP Connection:** Read ATC **at q\\***, the output where MR = MC. A common error is to shade the gap at the bottom of ATC, which is the wrong quantity unless the price happens to equal minimum ATC.
`
    },
    {
      id: 'microper3-input',
      type: 'input-boxes' as const,
      content: `
**Read the Graph** ✍️

A competitive firm's graph shows a price of **\\$30**. MR = MC at **q = 200**. At that output, ATC = **\\$26** and AVC = **\\$21**.

1) Economic profit, in dollars?

2) Total fixed cost, in dollars?

3) Total variable cost, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['800', '1000', '4200'],
        hint1: 'Height of the profit rectangle is P − ATC; width is q.',
        hint2: 'The vertical gap between ATC and AVC is average fixed cost.',
        hint3: 'Multiply AVC by q.',
        explanation: '1) (\\$30 − \\$26) × 200 = \\$800. 2) (\\$26 − \\$21) × 200 = \\$1,000. 3) \\$21 × 200 = \\$4,200. As a check, TC = \\$26 × 200 = \\$5,200, which equals \\$1,000 + \\$4,200.'
      }
    },
    {
      id: 'microper3-points',
      type: 'text' as const,
      content: `
## Break-Even and Shutdown Points

Two points on the firm graph matter at every price.

- **Break-even point = minimum of ATC.** If the price equals minimum ATC, the MR line just touches the bottom of ATC, P = ATC at q\\*, and economic profit is zero (normal profit). For Crestview this is **\\$14** at 4 crates.
- **Shutdown point = minimum of AVC.** If the price falls below minimum AVC, the firm cannot even cover the variable cost of the units it makes, so it produces nothing. For Crestview this is **\\$6** at 3 crates.

### The Five Price Zones (Short Run)

| Price compared with the curves | Output | Economic profit | Short-run decision |
|---|---|---|---|
| Above minimum ATC (above \\$14) | Where P = MC | Positive | Produce |
| Equal to minimum ATC (\\$14) | 4 crates | Zero (normal profit) | Produce |
| Between minimum AVC and minimum ATC (\\$6 to \\$14) | Where P = MC | Negative, but the loss is smaller than fixed cost | Produce |
| Equal to minimum AVC (\\$6) | 3 crates or 0 | Loss = fixed cost either way | Indifferent |
| Below minimum AVC (below \\$6) | 0 | Loss = fixed cost | Shut down |

## The Firm's Short-Run Supply Curve

Pick any price above \\$6, find where it crosses MC, and read the quantity: that is how much the firm offers at that price. So the firm's **short-run supply curve is its MC curve above minimum AVC**. Below \\$6 the firm supplies zero.

**Why above AVC and not above ATC?** Between \\$6 and \\$14 the firm loses money, but it loses **less** by producing than by shutting down, because revenue covers all variable cost and some fixed cost. Fixed cost has to be paid in the short run either way.

> 🔑 **AP Connection:** In the **long run** there are no fixed costs, so a firm that cannot cover ATC leaves the industry. The short run is "MC above minimum AVC"; the long-run exit test is "price below minimum ATC."
`
    },
    {
      id: 'microper3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Curve** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The break-even price equals the minimum of ___',
            options: ['ATC', 'AVC', 'MC', 'AFC']
          },
          {
            label: 'The shutdown price equals the minimum of ___',
            options: ['ATC', 'AVC', 'MC', 'AFC']
          },
          {
            label: 'The height of the profit rectangle is the gap between the price and ___ at q*',
            options: ['ATC', 'AVC', 'MC', 'AFC']
          },
          {
            label: 'The firm\'s short-run supply curve is the MC curve above the minimum of ___',
            options: ['ATC', 'AVC', 'MC', 'AFC']
          }
        ],
        correctAnswers: ['ATC', 'AVC', 'ATC', 'AVC'],
        hint1: 'At this price, revenue just covers every cost, fixed and variable.',
        hint2: 'Below this price, revenue does not even cover the cost of running.',
        hint3: 'Profit per unit counts all costs; the supply curve only needs variable costs covered.',
        explanation: 'Break-even is minimum ATC, and shutdown is minimum AVC. Profit per unit is P − ATC, measured at q*. The short-run supply curve is MC above minimum AVC, because any price above that covers variable cost.'
      }
    },
    {
      id: 'microper3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A competitive firm faces a price of \\$9. At the output where MR = MC, ATC is \\$11 and AVC is \\$8. Which describes the loss rectangle and the firm\'s best short-run choice?',
            options: [
              'Height of \\$2 per unit; keep producing',
              'Height of \\$1 per unit; keep producing',
              'Height of \\$2 per unit; shut down now',
              'Height of \\$3 per unit; shut down now'
            ],
            correctAnswer: 0,
            explanation: 'The loss per unit is ATC − P = \\$11 − \\$9 = \\$2. Because the \\$9 price is above the \\$8 AVC, each unit covers its variable cost plus \\$1 toward fixed cost, so producing loses less than shutting down.'
          },
          {
            question: 'Why is a competitive firm\'s short-run supply curve the part of MC above minimum AVC rather than above minimum ATC?',
            options: [
              'In that price range, producing loses less than closing',
              'Prices in that range still give the firm an economic profit',
              'Fixed costs disappear once the firm stops producing',
              'Average variable cost lies above ATC at low output'
            ],
            correctAnswer: 0,
            explanation: 'Between minimum AVC and minimum ATC the firm takes a loss, but revenue covers variable cost and part of fixed cost, so the loss is smaller than the fixed cost it would lose by closing. Fixed costs must still be paid in the short run, and AVC is always below ATC.'
          }
        ]
      }
    }
  ]
}
