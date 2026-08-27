export const microMonopolyPart1Data = {
  topicSlug: 'micro-monopoly',
  sections: [
    {
      id: 'micromn1-intro',
      type: 'text' as const,
      content: `
# 💰 Monopoly

**Part 1 of 7 — Single Sellers and Market Power**

---

## What Creates a Monopoly?

A **monopoly** is a market with a **single seller** and **high barriers to entry**:

| Barrier Type | How It Works | Example |
|-------------|-------------|---------|
| **Legal/regulatory** | Government grants exclusive right | Patents, copyrights, licenses |
| **Natural monopoly** | Huge economies of scale | Water utility, electric grid |
| **Control of resources** | Sole access to key input | De Beers (historically) — diamonds |
| **Network effects** | Value increases with users | Social media platforms |

---

## How Monopolies Differ from Competitive Firms

| Feature | Perfect Competition | Monopoly |
|---------|-------------------|----------|
| Demand curve | Horizontal (price taker) | **Downward-sloping** (IS the market) |
| MR vs. Price | MR = P | **MR < P** (must lower price for all to sell more) |
| Profit rule | P = MC | **MR = MC** (then charge P on demand curve) |
| Long-run profit | Zero | Can be **positive** (barriers block entry) |

### Why Is MR < P for a Monopolist?

To sell one more unit, the monopolist must lower the price on **all** units:

| Q | Price | TR | MR |
|---|-------|-----|-----|
| 1 | \\$10 | \\$10 | \\$10 |
| 2 | \\$9 | \\$18 | \\$8 |
| 3 | \\$8 | \\$24 | \\$6 |
| 4 | \\$7 | \\$28 | \\$4 |
| 5 | \\$6 | \\$30 | \\$2 |

MR falls **twice as fast** as the demand curve (for a linear demand).
      `
    },
    {
      id: 'micromn1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a monopolist, marginal revenue is less than price because:',
            options: [
              'The government taxes monopoly profits',
              'Lowering price to sell more reduces revenue on all previous units',
              'Monopolists always operate at a loss',
              'Demand is perfectly elastic for monopolies'
            ],
            correctAnswer: 1,
            explanation: 'To sell the 3rd unit at \\$8, the monopolist also drops from \\$9 to \\$8 on the first two units — losing \\$2 on inframarginal units. MR = \\$6 < P = \\$8.'
          },
          {
            question: 'A monopoly can earn positive economic profit in the long run because:',
            options: [
              'It produces at minimum ATC',
              'Barriers to entry prevent new firms from competing away profits',
              'The government subsidizes monopoly output',
              'Demand is perfectly inelastic'
            ],
            correctAnswer: 1,
            explanation: 'Unlike competitive markets where entry eliminates profits, monopoly barriers (patents, huge scale requirements, resource control) keep competitors out permanently.'
          }
        ]
      }
    },
    {
      id: 'micromn1-content',
      type: 'text' as const,
      content: `
## The Monopoly Graph

The monopolist maximizes profit in 3 steps:

1. **Find quantity**: Where MR = MC → this is Q*
2. **Find price**: Go UP to the demand curve at Q* → this is P*
3. **Calculate profit**: Profit = (P* − ATC) × Q*

### Deadweight Loss

The monopolist produces where MR = MC, but charges P > MC:
- Competitive output would be where **D = MC** (higher Q, lower P)
- The triangle between competitive Q and monopoly Q is **deadweight loss**
- Monopoly transfers some consumer surplus to **producer surplus** and destroys the rest

### Key Inefficiencies

| Type | Present? | Why? |
|------|----------|------|
| **Allocative inefficiency** | Yes | P > MC — underproducing |
| **Productive inefficiency** | Yes | Not at minimum ATC |
| **Deadweight loss** | Yes | Mutually beneficial trades lost |
      `
    },
    {
      id: 'micromn1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A monopolist maximizes profit by producing where MR = _______.

2) For a linear demand curve, the MR curve has _______ the slope of the demand curve. (half/twice)

3) Monopoly creates deadweight loss because P > _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['MC', 'twice', 'MC'],
        hint1: 'Same profit-maximization rule as any firm.',
        hint2: 'MR falls faster than demand.',
        hint3: 'Price exceeds this, meaning too little is produced.',
        explanation: 'Profit max: MR = MC. MR has twice the slope of demand (falls twice as fast). P > MC means allocative inefficiency — society values additional units more than they cost to produce.'
      }
    },
    {
      id: 'micromn1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Monopoly vs. Competition** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Compared to perfect competition, a monopoly charges a ___ price',
            options: ['Higher', 'Lower', 'The same', 'Indeterminate']
          },
          {
            label: 'Compared to perfect competition, a monopoly produces a ___ quantity',
            options: ['Lower', 'Higher', 'The same', 'Indeterminate']
          },
          {
            label: 'A monopoly\'s demand curve is ___',
            options: ['Downward-sloping (the market demand curve)', 'Horizontal', 'Vertical', 'Upward-sloping']
          }
        ],
        correctAnswers: ['Higher', 'Lower', 'Downward-sloping (the market demand curve)'],
        hint1: 'Monopolies restrict output to raise price.',
        hint2: 'MR = MC at a lower Q than the competitive equilibrium.',
        hint3: 'The monopoly IS the market — it faces market demand.',
        explanation: 'Monopoly: higher P, lower Q vs. competition. The monopolist faces the entire market demand curve (downward-sloping).'
      }
    },
    {
      id: 'micromn1-strategy',
      type: 'text' as const,
      content: `
## Natural Monopoly & Regulation

A **natural monopoly** exists when one firm can serve the entire market at lower cost than multiple firms — ATC is still declining at market demand.

### Regulatory Options

| Approach | Price Set At | Result |
|----------|-------------|--------|
| **Unregulated** | MR = MC, charge P on D | Max profit, DWL |
| **Fair-return (P = ATC)** | ATC | Zero profit, some DWL remains |
| **Socially optimal (P = MC)** | MC | Allocatively efficient, but **firm makes a loss** (P < ATC) |

> ⚠️ **AP Trap:** Setting P = MC for a natural monopoly eliminates deadweight loss BUT requires a government **subsidy** because the firm operates at a loss (MC < ATC when ATC is declining).

Most regulated monopolies use **fair-return pricing** (P = ATC) as a compromise.
      `
    },
    {
      id: 'micromn1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A natural monopoly regulated at P = MC will:',
            options: [
              'Earn positive economic profit',
              'Earn zero economic profit',
              'Incur an economic loss requiring a subsidy',
              'Produce the monopoly profit-maximizing quantity'
            ],
            correctAnswer: 2,
            explanation: 'A natural monopoly has declining ATC. At P = MC, price is below ATC (since MC is below ATC when ATC is declining), so the firm incurs a loss and needs a subsidy to stay in business.'
          },
          {
            question: 'A profit-maximizing monopolist produces where MR = MC and finds that P = \\$15, ATC = \\$12, and Q = 100. The monopolist\'s economic profit is:',
            options: [
              '$300',
              '$1,500',
              '$1,200',
              '$12'
            ],
            correctAnswer: 0,
            explanation: 'Profit = (P − ATC) × Q = (\\$15 − \\$12) × 100 = \\$300.'
          }
        ]
      }
    }
  ]
}