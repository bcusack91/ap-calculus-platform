export const microPerfectCompetitionPart1Data = {
  topicSlug: 'micro-perfect-competition',
  sections: [
    {
      id: 'micropc1-intro',
      type: 'text' as const,
      content: `
# 💰 Perfect Competition

**Part 1 of 7 — The Benchmark Market Structure**

---

## Characteristics of Perfect Competition

| Condition | Description |
|-----------|-------------|
| **Many buyers & sellers** | No single firm can influence the market price |
| **Identical products** | Consumers see no difference between sellers' goods |
| **Perfect information** | All participants know prices and product quality |
| **Free entry and exit** | No barriers — firms can enter/leave freely |
| **Price taker** | Each firm accepts the market price as given |

Because the firm is a price taker, its **demand curve is perfectly elastic** (horizontal) at the market price. Every unit sells at the same price.

### Revenue in Perfect Competition

Since P is constant for a competitive firm:

| Revenue Concept | Formula | In Perfect Competition |
|----------------|---------|----------------------|
| Total Revenue (TR) | P × Q | Straight line through origin |
| Average Revenue (AR) | TR / Q | AR = P (horizontal line) |
| Marginal Revenue (MR) | ΔTR / ΔQ | **MR = P** (also horizontal) |

> 🔑 **Critical AP Fact:** In perfect competition, **D = AR = MR = P**. This simplifies all profit analysis — the demand curve, MR curve, AR curve, and price are all the same horizontal line.
      `
    },
    {
      id: 'micropc1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In perfect competition, a firm\'s demand curve is:',
            options: [
              'Downward-sloping like the market demand',
              'Perfectly elastic (horizontal) at the market price',
              'Perfectly inelastic (vertical)',
              'Upward-sloping'
            ],
            correctAnswer: 1,
            explanation: 'A price taker can sell any quantity at the market price — if it charges above, it sells nothing; below is unnecessary. Demand is perfectly elastic (horizontal).'
          },
          {
            question: 'For a perfectly competitive firm, marginal revenue equals:',
            options: [
              'Marginal cost',
              'Average total cost',
              'The market price',
              'Zero'
            ],
            correctAnswer: 2,
            explanation: 'Since the firm sells every unit at the same market price, each additional unit adds exactly P to total revenue. MR = P.'
          }
        ]
      }
    },
    {
      id: 'micropc1-content',
      type: 'text' as const,
      content: `
## Profit Maximization: The MR = MC Rule

Every firm maximizes profit (or minimizes loss) by producing where **MR = MC**:

In perfect competition, since MR = P:

$$\\text{Produce where } P = MC$$

### Three Profit Scenarios

| If at MR = MC... | Condition | Result |
|-------------------|-----------|--------|
| **P > ATC** | Revenue per unit > cost per unit | **Economic profit** |
| **P = ATC** | Revenue per unit = cost per unit | **Normal profit** (break even) |
| **ATC > P > AVC** | Covers variable costs, not fixed | **Economic loss** (but still produce in short run) |
| **P < AVC** | Can't even cover variable costs | **Shut down** |

### The Shutdown Rule

$$\\text{Shut down if } P < AVC$$

Why? If P < AVC, the firm loses MORE by operating than by shutting down. When shut down, losses = fixed costs only.

> 🔑 The firm's **short-run supply curve** is the portion of the MC curve **above AVC**.
      `
    },
    {
      id: 'micropc1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A perfectly competitive firm maximizes profit where P = _______.

2) The firm should shut down in the short run if P falls below _______.

3) D = AR = MR = _______ in perfect competition.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['MC', 'AVC', 'P'],
        hint1: 'Profit max: MR = MC, and MR = P.',
        hint2: 'Below this, the firm loses more by operating.',
        hint3: 'All four are the same horizontal line.',
        explanation: 'Produce where P = MC (since MR = P). Shut down if P < AVC. In perfect competition, D = AR = MR = P — all equal.'
      }
    },
    {
      id: 'micropc1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Profit Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When P > ATC at the profit-maximizing quantity, the firm earns ___',
            options: ['Economic profit', 'Normal profit', 'Economic loss', 'Zero revenue']
          },
          {
            label: 'When ATC > P > AVC, the firm should ___ in the short run',
            options: ['Continue producing', 'Shut down immediately', 'Raise its price', 'Double production']
          },
          {
            label: 'The short-run supply curve of a competitive firm is the MC curve above ___',
            options: ['AVC', 'ATC', 'MR', 'AFC']
          }
        ],
        correctAnswers: ['Economic profit', 'Continue producing', 'AVC'],
        hint1: 'Revenue per unit exceeds cost per unit.',
        hint2: 'The firm covers variable costs and some fixed costs.',
        hint3: 'Below this curve, the firm shuts down.',
        explanation: 'P > ATC → profit. ATC > P > AVC → loss but continue (covers some fixed costs). Supply curve = MC above AVC (shutdown point).'
      }
    },
    {
      id: 'micropc1-strategy',
      type: 'text' as const,
      content: `
## Long-Run Equilibrium

In the long run, free entry and exit drive economic profit to **zero**:

1. If firms earn **profit** → new firms **enter** → market supply shifts right → price falls
2. If firms suffer **losses** → some firms **exit** → market supply shifts left → price rises
3. **Long-run equilibrium**: P = MC = minimum ATC

### Long-Run Efficiency

| Efficiency Type | Achieved? | Because |
|----------------|-----------|---------|
| **Allocative** | ✅ Yes | P = MC |
| **Productive** | ✅ Yes | Produces at minimum ATC |

> Perfect competition is the **benchmark of efficiency**. All other market structures are compared to it.

### The Long-Run Supply Curve

| Industry Type | Long-Run Supply | Why |
|--------------|----------------|-----|
| **Constant-cost** | Horizontal | Entry/exit doesn't change input prices |
| **Increasing-cost** | Upward-sloping | More firms raise input prices |
| **Decreasing-cost** | Downward-sloping | More firms lower input prices (rare) |
      `
    },
    {
      id: 'micropc1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If firms in a perfectly competitive industry are currently earning economic profit, what will happen in the long run?',
            options: [
              'Firms will raise prices to increase profits further',
              'New firms enter, supply increases, price falls until profit equals zero',
              'Existing firms will merge to form a monopoly',
              'Nothing — profits persist indefinitely'
            ],
            correctAnswer: 1,
            explanation: 'Free entry means profit attracts new firms → supply shifts right → market price falls → each firm\'s profit shrinks until P = min ATC and economic profit = 0.'
          },
          {
            question: 'A competitive firm has P = $8, ATC = $10, and AVC = $7. The firm should:',
            options: [
              'Shut down because it is making a loss',
              'Continue producing because P > AVC',
              'Raise its price above $10',
              'Increase output to cover fixed costs'
            ],
            correctAnswer: 1,
            explanation: 'P ($8) > AVC ($7), so the firm covers all variable costs and $1 toward fixed costs. Shutting down would mean losing ALL fixed costs. It\'s better to produce and minimize losses.'
          }
        ]
      }
    }
  ]
}