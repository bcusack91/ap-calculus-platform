export const microMonopolyPart3Data = {
  topicSlug: 'micro-monopoly',
  sections: [
    {
      id: 'micromon3-intro',
      type: 'text' as const,
      content: `
# 💰 Monopoly

**Part 3 of 7 — Worked Monopoly Problems**

---

| Section |
|---------|
| 📖 The Full Recipe: Constant Marginal Cost |
| When Marginal Cost Rises |
| A Monopoly That Loses Money |

> 🔑 **Key Concept:** Every monopoly calculation follows the same order: **MR = MC** for quantity, **demand** for price, **(P − ATC) × Q** for profit, and the **P = MC** quantity as the efficient benchmark. Once you have those four numbers, consumer surplus, producer surplus and deadweight loss are just triangle and rectangle areas.
      `
    },
    {
      id: 'micromon3-recipe',
      type: 'text' as const,
      content: `
## 📖 The Full Recipe: Constant Marginal Cost

A drug company holds the patent on a migraine pill. Demand is **P = 120 − 2Q**. Each unit costs \\$20 to make, so **MC = ATC = \\$20** (no fixed cost in this first version).

### Step 1: Marginal Revenue
Same intercept, twice the slope: **MR = 120 − 4Q**.

### Step 2: Quantity from MR = MC
120 − 4Q = 20, so 4Q = 100 and **Q = 25**.

### Step 3: Price from Demand
P = 120 − 2(25) = **\\$70**. The firm charges what buyers will pay for 25 units, far above MR and MC.

### Step 4: Profit
Profit = (P − ATC) × Q = (\\$70 − \\$20) × 25 = **\\$1,250**.

### Step 5: Consumer Surplus
The triangle under demand and above \\$70, from 0 to 25 units: ½ × 25 × (\\$120 − \\$70) = **\\$625**.

### Step 6: The Efficient Benchmark
Allocative efficiency needs P = MC: 120 − 2Q = 20, so **Q = 50** at **P = \\$20**. Consumer surplus would be ½ × 50 × \\$100 = \\$2,500.

### Step 7: Deadweight Loss
The triangle between demand and MC from the monopoly quantity to the efficient quantity: ½ × (50 − 25) × (\\$70 − \\$20) = **\\$625**.

| Outcome | Monopoly | Efficient (P = MC) |
|---|---|---|
| Quantity | 25 | 50 |
| Price | \\$70 | \\$20 |
| Consumer surplus | \\$625 | \\$2,500 |
| Producer surplus (profit) | \\$1,250 | \\$0 |
| Total surplus | \\$1,875 | \\$2,500 |
| Deadweight loss | \\$625 | \\$0 |

**Check:** \\$1,875 + \\$625 = \\$2,500 ✓. Of the \\$2,500 that buyers would get under efficient pricing, \\$1,250 becomes the monopolist's profit (a **transfer**), \\$625 stays with buyers, and \\$625 is **lost to everyone**.
      `
    },
    {
      id: 'micromon3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A monopolist faces demand P = 80 − 2Q and has a constant marginal cost of \\$16. What price maximizes its profit?',
            options: [
              '\\$48',
              '\\$16',
              '\\$32',
              '\\$40'
            ],
            correctAnswer: 0,
            explanation: 'MR = 80 − 4Q; setting it equal to 16 gives Q = 16, and demand gives P = 80 − 32 = \\$48. \\$16 is the marginal cost, and \\$40 is the revenue-maximizing midpoint price, where MR is zero rather than equal to MC.'
          },
          {
            question: 'Compared with pricing at MC, where does the migraine-pill firm\'s \\$1,250 of profit come from?',
            options: [
              'A transfer of surplus from pill buyers',
              'The triangle of surplus lost when output is cut',
              'Cost savings from making fewer migraine pills',
              'A government payment tied to the drug patent'
            ],
            correctAnswer: 0,
            explanation: 'The profit rectangle sits inside what would be consumer surplus at a \\$20 price, so it is a transfer from buyers to the firm. The surplus that disappears is the separate \\$625 deadweight loss triangle, and MC is constant, so smaller output saves no cost per unit.'
          }
        ]
      }
    },
    {
      id: 'micromon3-rising',
      type: 'text' as const,
      content: `
## When Marginal Cost Rises

A town's only concrete plant faces demand **P = 100 − Q**, and its marginal cost rises with output: **MC = 10 + Q**.

### Monopoly Outcome
- MR = 100 − 2Q.
- MR = MC: 100 − 2Q = 10 + Q, so 3Q = 90 and **Q = 30**.
- Price from demand: P = 100 − 30 = **\\$70**.
- Marginal cost of the 30th unit: 10 + 30 = **\\$40**.

### Efficient Outcome
- P = MC: 100 − Q = 10 + Q, so **Q = 45** and **P = \\$55**.

### Deadweight Loss
The DWL triangle has its point at the efficient output (45, \\$55) and its vertical side at the monopoly output, running from MC (\\$40) up to the price (\\$70):

DWL = ½ × (45 − 30) × (\\$70 − \\$40) = ½ × 15 × \\$30 = **\\$225**

> ⚠️ **Common trap:** Using \\$70 − \\$55 as the height gives \\$112.50, which is wrong. The height is the gap between the price and **marginal cost at the monopoly quantity**, called the **monopoly markup** over MC. With constant MC the two methods agree, which is why the mistake hides until MC slopes upward.
      `
    },
    {
      id: 'micromon3-input',
      type: 'input-boxes' as const,
      content: `
**Solve the Monopoly** ✍️

A monopolist faces demand **P = 60 − Q** and has a constant marginal cost and average total cost of \\$12.

1) What quantity maximizes profit?

2) What price does it charge? (dollars, number only)

3) What is the deadweight loss? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24', '36', '288'],
        hint1: 'MR = 60 − 2Q. Set it equal to 12.',
        hint2: 'Plug Q into the demand curve, not the MR line.',
        hint3: 'Efficient Q is where 60 − Q = 12. Then use ½ × (Q gap) × (P − MC).',
        explanation: '1) 60 − 2Q = 12 gives Q = 24. 2) P = 60 − 24 = \\$36. 3) The efficient quantity is 48, so DWL = ½ × (48 − 24) × (\\$36 − \\$12) = \\$288. Profit is (\\$36 − \\$12) × 24 = \\$576.'
      }
    },
    {
      id: 'micromon3-loss',
      type: 'text' as const,
      content: `
## A Monopoly That Loses Money

Monopoly power is not a guarantee of profit. Go back to the migraine pill and add a **fixed cost of \\$1,500** for the factory lease. Demand and MC are unchanged.

| Item | Value |
|---|---|
| Quantity (MR = MC) | 25, unchanged |
| Price | \\$70, unchanged |
| Total revenue | \\$70 × 25 = \\$1,750 |
| Total cost | \\$1,500 + \\$20 × 25 = \\$2,000 |
| ATC at Q = 25 | \\$2,000 ÷ 25 = \\$80 |
| Profit | (\\$70 − \\$80) × 25 = **−\\$250** |

### Should It Keep Producing?
Use the **same shutdown rule** as any firm: in the short run, keep producing if price covers **average variable cost**.

- AVC = \\$20 and P = \\$70, so P > AVC.
- **Produce:** loss = \\$250. **Shut down:** loss = the whole fixed cost, \\$1,500.
- Producing loses \\$1,250 less, so the firm stays open in the **short run**.

In the **long run**, all costs are variable. If the loss persists, the firm leaves the market, even with its patent.

### What a Fixed Cost Does and Does Not Change
A fixed cost moves the **ATC** curve up but leaves **MC and MR** where they were, so the profit-maximizing (or loss-minimizing) **quantity and price stay the same**. Only profit changes.

> 🔑 **AP Connection:** On a graph, a loss-making monopoly has its ATC curve **above** the demand curve at the MR = MC quantity. The loss rectangle runs from P up to ATC, across Q units.
      `
    },
    {
      id: 'micromon3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At its MR = MC output, a monopolist\'s price is \\$40, its ATC is \\$45 and its AVC is \\$32. In the short run, the firm should',
            options: [
              'produce, since its price covers AVC',
              'shut down, since the price is below average total cost',
              'raise its price to \\$45 to cover all its costs',
              'increase output until the price equals its ATC'
            ],
            correctAnswer: 0,
            explanation: 'Price covers AVC (\\$40 > \\$32), so each unit adds more to revenue than to variable cost and helps pay part of the fixed cost. A higher price would mean selling fewer units on the demand curve, and the firm already chose the best price at MR = MC.'
          },
          {
            question: 'The migraine-pill firm\'s fixed cost rises from \\$0 to \\$1,500. What happens to its profit-maximizing price?',
            options: [
              'It stays at \\$70',
              'It rises to \\$80',
              'It rises to \\$130',
              'It falls to \\$60'
            ],
            correctAnswer: 0,
            explanation: 'A fixed cost does not change MR or MC, so the firm still sells 25 units at \\$70 and profit falls by \\$1,500. \\$80 is the new ATC, and adding the \\$60-per-unit fixed cost to the price treats a fixed cost as if it were a marginal cost.'
          },
          {
            question: 'A monopolist sells 30 units at \\$70, where its MC is \\$40. The efficient outcome is 45 units at \\$55. What is the deadweight loss?',
            options: [
              '\\$225',
              '\\$112.50',
              '\\$450',
              '\\$337.50'
            ],
            correctAnswer: 0,
            explanation: 'DWL = ½ × (45 − 30) × (\\$70 − \\$40) = \\$225. Using \\$70 − \\$55 as the height gives \\$112.50, which leaves out the part of the triangle between \\$55 and MC.'
          }
        ]
      }
    }
  ]
}
