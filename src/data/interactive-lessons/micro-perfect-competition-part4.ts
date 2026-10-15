export const microPerfectCompetitionPart4Data = {
  topicSlug: 'micro-perfect-competition',
  sections: [
    {
      id: 'microper4-intro',
      type: 'text' as const,
      content: `
# 💰 Perfect Competition

**Part 4 of 7 — Short-Run Decisions with Numbers**

---

| Section |
|---------|
| 📖 Produce or Shut Down? Compare the Two Losses |
| Building the Firm's Supply Schedule |
| From One Firm to the Market |

> 🔑 **Key Concept:** In the short run, a firm that shuts down still pays its fixed cost. So the real comparison is **the loss from producing** versus **the loss from shutting down (= fixed cost)**. The firm produces whenever total revenue covers total variable cost, which is the same test as P ≥ AVC.
`
    },
    {
      id: 'microper4-compare',
      type: 'text' as const,
      content: `
## 📖 Produce or Shut Down? Compare the Two Losses

Crestview Orchard's fixed cost is **\\$28**. Its marginal cost by crate is \\$10, \\$4, \\$4, \\$10, \\$16, \\$18, \\$22, \\$24, minimum AVC is **\\$6** (at 3 crates), and minimum ATC is **\\$14** (at 4 crates).

For each price, first find the best output if the orchard operates (MR ≥ MC on the rising part of MC), then compare.

| Price | Best q if open | TR | TC | Profit if open | Profit if shut | Decision |
|---|---|---|---|---|---|---|
| \\$23 | 7 | \\$161 | \\$112 | \\$49 | −\\$28 | Produce |
| \\$12 | 4 | \\$48 | \\$56 | −\\$8 | −\\$28 | Produce |
| \\$8 | 3 | \\$24 | \\$46 | −\\$22 | −\\$28 | Produce |
| \\$5 | 3 | \\$15 | \\$46 | −\\$31 | −\\$28 | **Shut down** |

At \\$5, every possible output loses more than \\$28, because the price is below the \\$6 minimum AVC. Each crate fails to pay for its own variable cost.

### The Contribution to Fixed Cost

When the price is above AVC, each unit earns **P − AVC** toward the fixed cost.

- At \\$12: (\\$12 − \\$7 AVC) × 4 = **\\$20** toward the \\$28 fixed cost, so the loss is \\$28 − \\$20 = **\\$8**.
- At \\$8: (\\$8 − \\$6 AVC) × 3 = **\\$6** toward fixed cost, so the loss is \\$28 − \\$6 = **\\$22**.
- At \\$5: (\\$5 − \\$6) × 3 is **negative**: operating adds to the loss, so shut down.

### Fixed Cost Does Not Change the Short-Run Decision

Fixed cost is owed whether the firm produces or not, so it cancels out of the comparison. If Crestview's rent doubled, its loss at every price would grow by the same \\$28, but its output and its shutdown price (\\$6) would not change.

> 🔑 **AP Connection:** A free-response "explain" for a loss-making firm earns the point with a comparison: "The firm should continue producing because price (\\$12) is greater than AVC (\\$7), so its loss (\\$8) is smaller than its fixed cost (\\$28)."
`
    },
    {
      id: 'microper4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A firm has fixed costs of \\$500. At its best output, total revenue is \\$1,200 and total variable cost is \\$1,350. What should it do in the short run, and what is its loss?',
            options: [
              'Shut down and lose \\$500',
              'Keep producing and lose \\$650',
              'Keep producing and lose \\$150',
              'Shut down and lose \\$650'
            ],
            correctAnswer: 0,
            explanation: 'Operating loses \\$500 + (\\$1,350 − \\$1,200) = \\$650, while shutting down loses only the \\$500 fixed cost. Revenue does not cover variable cost, so the firm shuts down.'
          },
          {
            question: 'A firm\'s rent doubles, but its price, marginal cost and AVC are unchanged. In the short run, the firm will',
            options: [
              'keep the same output and shutdown price',
              'shut down because its losses are now larger',
              'cut output until price equals the new ATC',
              'raise output to spread the higher fixed cost'
            ],
            correctAnswer: 0,
            explanation: 'Rent is a fixed cost, which does not affect MC or AVC, so the MR = MC output and the shutdown price stay the same. Profit falls by the extra rent at every output, and spreading fixed cost over more units never changes the best output.'
          }
        ]
      }
    },
    {
      id: 'microper4-supply',
      type: 'text' as const,
      content: `
## Building the Firm's Supply Schedule

A competitive firm's quantity supplied at each price comes straight from its MC column, as long as the price is at least minimum AVC.

| Price | Crestview's quantity supplied | Reason |
|---|---|---|
| Below \\$6 | 0 | Price is below minimum AVC |
| \\$8 | 3 | The 3rd crate's MC (\\$4) is below \\$8; the 4th crate's MC (\\$10) is above it |
| \\$12 | 4 | The 4th crate's MC (\\$10) is below \\$12; the 5th crate's MC (\\$16) is above it |
| \\$17 | 5 | The 5th crate's MC (\\$16) is below \\$17; the 6th crate's MC (\\$18) is above it |
| \\$20 | 6 | The 6th crate's MC (\\$18) is below \\$20; the 7th crate's MC (\\$22) is above it |
| \\$23 | 7 | The 7th crate's MC (\\$22) is below \\$23; the 8th crate's MC (\\$24) is above it |

**The graph, described in text:** Plot these points with price on the vertical axis. They climb up and to the right along the rising MC curve, starting at \\$6. Below \\$6 the supply curve sits on the vertical axis at zero output. A higher price makes it worth producing units with higher marginal cost, which is why individual supply slopes upward.
`
    },
    {
      id: 'microper4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Use Crestview's MC by crate (\\$10, \\$4, \\$4, \\$10, \\$16, \\$18, \\$22, \\$24), its total costs (\\$46 at 3 crates, \\$90 at 6 crates) and its \\$28 fixed cost.

1) At a price of \\$19, how many crates does Crestview produce?

2) At \\$19, what is its economic profit, in dollars?

3) At a price of \\$9, Crestview produces 3 crates. By how many dollars is its loss **smaller** than if it shut down?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '24', '9'],
        hint1: 'Find the last crate whose MC is at or below \\$19.',
        hint2: 'TR = \\$19 × 6; subtract TC at 6 crates.',
        hint3: 'Compare the loss at 3 crates (TR − \\$46) with the \\$28 fixed cost.',
        explanation: '1) The 6th crate costs \\$18, below \\$19, and the 7th costs \\$22, so q = 6. 2) \\$114 − \\$90 = \\$24. 3) At \\$9, TR = \\$27 and the loss is \\$46 − \\$27 = \\$19, which is \\$9 less than the \\$28 loss from shutting down; equivalently, (\\$9 − \\$6 AVC) × 3 = \\$9.'
      }
    },
    {
      id: 'microper4-market',
      type: 'text' as const,
      content: `
## From One Firm to the Market

The market supply curve is the **horizontal sum** of the firms' supply curves: at each price, add up the quantities every firm offers. Suppose the apple market has **100 orchards identical to Crestview**, and market demand is **Qd = 1,180 − 40P**.

| Price | One orchard supplies | Market supply (100 orchards) | Market demand |
|---|---|---|---|
| \\$8 | 3 | 300 | 860 |
| \\$12 | 4 | 400 | 700 |
| \\$17 | 5 | 500 | **500** |
| \\$20 | 6 | 600 | 380 |
| \\$23 | 7 | 700 | 260 |

### Find the Equilibrium

Quantity supplied equals quantity demanded at **\\$17**, with **500 crates** traded. At \\$12 there is a shortage of 300 crates, and at \\$20 a surplus of 220.

### Back to the Firm

Each orchard takes \\$17 as given and produces 5 crates. TR = \\$17 × 5 = \\$85 and TC = \\$72, so each orchard earns an economic profit of **\\$13** (ATC at 5 crates is \\$14.40, and (\\$17 − \\$14.40) × 5 = \\$13). That profit is the signal that draws new orchards into the industry in the long run, which is the subject of Part 5.

| What changes | Effect on the market supply curve |
|---|---|
| Price of apples rises | Movement **along** it: each firm moves up its MC |
| More orchards enter | Shifts **right** |
| Each orchard's MC rises (higher wage for pickers) | Shifts **left** |

> 🔑 **AP Connection:** Add **quantities** at the same price, never prices. Twice as many identical firms means twice the quantity at every price, a rightward shift, not a lower price on the supply curve.
`
    },
    {
      id: 'microper4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the apple market above, suppose 20 more orchards identical to Crestview enter while demand stays the same. At a price of \\$17, the market would have a',
            options: [
              'surplus of 100 crates',
              'shortage of 100 crates',
              'surplus of 120 crates',
              'surplus of 20 crates'
            ],
            correctAnswer: 0,
            explanation: 'With 120 orchards each supplying 5 crates, quantity supplied at \\$17 is 600 while quantity demanded is still 500, a surplus of 100 that pushes the price down. The 20 extra orchards add 100 crates, not 20.'
          },
          {
            question: 'How is the market supply curve in a competitive industry built from the individual firms\' curves?',
            options: [
              'Adding up each firm\'s quantity at every price',
              'Averaging the prices firms charge at each quantity',
              'Multiplying one firm\'s price by the number of firms',
              'Taking the lowest marginal cost among firms at each output'
            ],
            correctAnswer: 0,
            explanation: 'Market supply is the horizontal sum: at each price, add the quantities all firms offer. Competitive firms do not choose prices, so averaging or multiplying prices has no meaning here.'
          },
          {
            question: 'Crestview\'s minimum AVC is \\$6 and its minimum ATC is \\$14. If the market price is \\$11, its best short-run choice is to',
            options: [
              'keep producing, because \\$11 covers its AVC',
              'shut down, because \\$11 is below its minimum ATC',
              'raise its price until it covers average total cost',
              'close, because its loss would exceed its fixed cost'
            ],
            correctAnswer: 0,
            explanation: 'A price above minimum AVC covers variable cost and part of fixed cost, so producing (4 crates, a \\$12 loss) beats shutting down (a \\$28 loss). Being below minimum ATC matters for long-run exit, not the short-run shutdown decision, and a price taker cannot raise its price.'
          }
        ]
      }
    }
  ]
}
