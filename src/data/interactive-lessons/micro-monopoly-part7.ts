export const microMonopolyPart7Data = {
  topicSlug: 'micro-monopoly',
  sections: [
    {
      id: 'micromon7-intro',
      type: 'text' as const,
      content: `
# 💰 Monopoly

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 Four Market Outcomes Side by Side |
| The Monopoly Problem Checklist |
| Mistakes That Cost Points |
| Policy Effects at a Glance |

> 🔑 **Key Concept:** Every monopoly result in this lesson traces back to one fact: a single-price monopolist must cut its price on **all** units to sell one more, so **MR < P**. Producing where MR = MC then leaves **P > MC**, which is the source of the higher price, the smaller output and the deadweight loss. Price discrimination, taxes, ceilings and antitrust each change that picture in a predictable way.
      `
    },
    {
      id: 'micromon7-compare',
      type: 'text' as const,
      content: `
## 📖 Four Market Outcomes Side by Side

Assume the same demand curve and the same constant marginal cost in every column.

| Feature | Perfect competition | Single-price monopoly | Perfect price discrimination | Monopoly with ceiling at P = MC |
|---|---|---|---|---|
| MR compared with P | MR = P | MR < P | MR = P for each unit | MR = P up to the efficient Q |
| Output rule | P = MC | MR = MC | Demand = MC | Ceiling = MC |
| Quantity | Efficient | **Below** efficient | Efficient | Efficient |
| Price | = MC | **Above** MC | Each buyer's willingness to pay | = MC |
| Consumer surplus | Largest | Reduced | **Zero** | Largest |
| Deadweight loss | None | **Yes** | None | None |
| Long-run economic profit | Zero | Can be positive | Largest | Zero with constant ATC = MC |

Two lessons from the table:

1. **Efficiency depends on quantity, not on who gets the surplus.** Perfect price discrimination and perfect competition produce the same quantity and the same total surplus; only its split differs.
2. **The single-price monopoly is the only column with deadweight loss**, because it is the only one where buyers face a price above MC.
      `
    },
    {
      id: 'micromon7-checklist',
      type: 'text' as const,
      content: `
## The Monopoly Problem Checklist

| Step | What to do | Where it was taught |
|---|---|---|
| 1 | Write inverse demand (P = a − bQ). Flip a Qd equation first. | Part 2 |
| 2 | MR = a − 2bQ: same intercept, twice the slope. | Part 2 |
| 3 | Set MR = MC to find Q. | Parts 2–3 |
| 4 | Go up to **demand** at that Q for the price. | Parts 2–3 |
| 5 | Profit = (P − ATC at that Q) × Q. | Parts 3–4 |
| 6 | Efficient Q: where demand meets MC. | Parts 3–4 |
| 7 | DWL = ½ × (efficient Q − monopoly Q) × (P − MC at monopoly Q). | Part 3 |
| 8 | Check the short-run shutdown rule: produce only if P ≥ AVC. | Part 3 |

**Quick facts to keep handy:** total revenue peaks where MR = 0 (the unit-elastic midpoint); a monopolist with positive MC always produces on the **elastic** part of demand; a monopoly has **no supply curve**.
      `
    },
    {
      id: 'micromon7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Compared with a perfectly competitive industry that has the same costs, a single-price monopoly',
            options: [
              'charges a higher price and sells a smaller quantity than the industry would',
              'charges a higher price and sells a larger quantity than the industry would',
              'charges the same price but sells a smaller quantity of the good',
              'charges a lower price, thanks to its economies of scale'
            ],
            correctAnswer: 0,
            explanation: 'The monopolist produces where MR = MC, and because MR lies below demand, that quantity is smaller than where demand meets MC, and the price read from demand is higher. With the same costs, there are no extra scale economies to lower the price.'
          },
          {
            question: 'At the profit-maximizing output of a single-price monopolist, which is true?',
            options: [
              'Price exceeds marginal cost',
              'Price equals marginal revenue',
              'Marginal revenue exceeds marginal cost',
              'Price equals the minimum of ATC'
            ],
            correctAnswer: 0,
            explanation: 'The monopolist sets MR = MC, and its price is above MR, so P > MC. Price equals MR only for a price taker, and minimum ATC is the long-run outcome of perfect competition.'
          },
          {
            question: 'On the lettered graph from Part 4, with consumer surplus A, profit B and deadweight loss C, which areas does perfect price discrimination add to the firm\'s single-price profit?',
            options: [
              'A + C',
              'A only',
              'C only',
              'B + C'
            ],
            correctAnswer: 0,
            explanation: 'The firm now captures the old consumer surplus A and, by producing the efficient quantity, the old deadweight loss C. B was already its profit under a single price.'
          }
        ]
      }
    },
    {
      id: 'micromon7-mistakes',
      type: 'text' as const,
      content: `
## Mistakes That Cost Points

| Mistake | Fix |
|---|---|
| Reading the price off the MR curve or the MC curve | Price always comes from **demand** at the MR = MC quantity. |
| Doubling the slope of a Qd = ... equation | Rewrite as P = a − bQ first, then double b. |
| Using minimum ATC (or MC) for the profit rectangle | Use **ATC at the chosen quantity**. |
| Calling the MR = MC quantity "efficient" | Allocative efficiency is where **P = MC**. |
| Using P minus the competitive price as the DWL height | Use **P − MC at the monopoly quantity**. |
| Saying a lump-sum tax raises the price | It changes only profit; MR and MC do not move. |
| Saying any price ceiling cuts monopoly output | A ceiling between the monopoly price and the MC–demand crossing **raises** output. |
| Saying price discrimination always adds deadweight loss | Perfect price discrimination **eliminates** it. |
| Labeling the monopolist's MC curve "supply" | A monopoly has **no supply curve**. |
      `
    },
    {
      id: 'micromon7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculation Drill** ✍️

A monopolist faces demand **P = 50 − Q**. Its marginal cost and average total cost are constant at \\$10.

1) What is the profit-maximizing quantity?

2) What is the deadweight loss? (dollars, number only)

3) If the firm could practice perfect price discrimination, what would its profit be? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '200', '800'],
        hint1: 'MR = 50 − 2Q. Set it equal to 10.',
        hint2: 'Efficient Q is where 50 − Q = 10. The price at Q = 20 is \\$30.',
        hint3: 'With perfect discrimination the firm keeps the whole triangle between demand and MC out to the efficient quantity.',
        explanation: '1) 50 − 2Q = 10 gives Q = 20, at P = \\$30. 2) Efficient Q = 40, so DWL = ½ × (40 − 20) × (\\$30 − \\$10) = \\$200. 3) Profit = ½ × 40 × (\\$50 − \\$10) = \\$800, compared with (\\$30 − \\$10) × 20 = \\$400 at a single price.'
      }
    },
    {
      id: 'micromon7-policy',
      type: 'text' as const,
      content: `
## Policy Effects at a Glance

Start from an unregulated single-price monopoly with straight-line demand and constant MC.

| Change | Price | Quantity | Profit | Deadweight loss |
|---|---|---|---|---|
| Lump-sum tax | No change | No change | Falls by the tax | No change |
| Per-unit tax | Rises, by less than the tax | Falls | Falls | Rises |
| Per-unit subsidy | Falls | Rises | Rises | Falls |
| Ceiling between monopoly P and the MC–demand crossing | Falls | Rises | Falls | Falls |
| Ceiling at the MC–demand crossing | Falls to MC | Rises to efficient Q | Falls | Zero |
| Perfect price discrimination | Each buyer pays his or her willingness to pay | Rises to efficient Q | Rises | Zero |
| Blocked merger or antitrust breakup | Kept lower | Kept higher | Kept lower | Kept smaller |

> 🔑 **AP Connection:** For any policy question, write one line first: "This changes MC," "This changes MR," or "This changes neither." That line decides whether the MR = MC quantity moves, and the rest of the answer follows from it.
      `
    },
    {
      id: 'micromon7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which policy would move a single-price monopolist\'s quantity toward the allocatively efficient level?',
            options: [
              'A price ceiling set where marginal cost crosses the demand curve',
              'A lump-sum tax equal to the firm\'s yearly economic profit',
              'A per-unit tax that raises the marginal cost of each unit',
              'A rule that the firm must charge one price to all buyers'
            ],
            correctAnswer: 0,
            explanation: 'The ceiling makes MR flat at the price where MC meets demand, so the firm expands to the efficient quantity. A lump-sum tax leaves output unchanged, a per-unit tax cuts it, and the firm already charges one price.'
          },
          {
            question: 'A monopolist with positive marginal cost is producing where its demand is unit elastic. To maximize profit, it should',
            options: [
              'cut output and raise price',
              'keep output, since revenue is maxed',
              'expand output to raise its revenue',
              'lower price to attract more buyers'
            ],
            correctAnswer: 0,
            explanation: 'At the unit-elastic point MR = 0, which is below the positive MC, so the last units cost more than they bring in. Cutting output moves the firm into the elastic range, where MR can equal MC; revenue is at its peak, but profit is not.'
          },
          {
            question: 'Which feature is the same for a single-price monopolist and a perfectly price-discriminating monopolist with identical costs?',
            options: [
              'Each sets output where its own marginal revenue equals its marginal cost',
              'Each produces the allocatively efficient quantity of output',
              'Each leaves its buyers with some consumer surplus',
              'Each charges one price to every one of its buyers'
            ],
            correctAnswer: 0,
            explanation: 'Both maximize profit with MR = MC; they differ because the discriminator\'s MR curve is the demand curve. Only the discriminator reaches the efficient quantity, only the single-price firm leaves consumer surplus, and only the single-price firm charges one price.'
          }
        ]
      }
    }
  ]
}
