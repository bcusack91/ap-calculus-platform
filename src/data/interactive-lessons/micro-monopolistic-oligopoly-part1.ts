export const microMonopolisticOligopolyPart1Data = {
  topicSlug: 'micro-monopolistic-oligopoly',
  sections: [
    {
      id: 'micromo1-intro',
      type: 'text' as const,
      content: `
# 💰 Monopolistic Competition & Oligopoly

**Part 1 of 7 — Imperfect Competition**

---

## The Spectrum of Market Structures

| Feature | Perfect Competition | Monopolistic Competition | Oligopoly | Monopoly |
|---------|-------------------|------------------------|-----------|----------|
| **# of firms** | Many | Many | Few | One |
| **Product** | Identical | **Differentiated** | Identical or differentiated | Unique |
| **Entry barriers** | None | Low | **High** | Very high |
| **Price control** | None (price taker) | Some | Significant | Full |
| **Examples** | Agriculture | Restaurants, clothing | Airlines, cell carriers | Local utility |

---

## Monopolistic Competition

Key characteristics:
1. **Many firms** — no single firm dominates
2. **Differentiated products** — brands, quality, location differ
3. **Low barriers to entry/exit** — firms can enter freely
4. **Some price-setting power** — due to product differentiation

### Short-Run: Can Earn Economic Profit

Like a monopoly in the short run — the firm faces a **downward-sloping demand curve**:
- Maximizes profit where **MR = MC**
- If P > ATC at that quantity → **economic profit**
- If P < ATC → **economic loss**

### Long Run: Zero Economic Profit

Free entry/exit drives profits to zero:
- Profits attract entry → each firm's demand shifts **left** 
- Losses cause exit → remaining firms' demand shifts **right**
- Long-run equilibrium: **P = ATC** (zero economic profit)

> 🔑 **Key Difference from Perfect Competition:** In monopolistic competition, P = ATC but **P > MC** (allocative inefficiency) and the firm does NOT produce at minimum ATC (productive inefficiency). There is **excess capacity**.
      `
    },
    {
      id: 'micromo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In long-run equilibrium, a monopolistically competitive firm earns:',
            options: [
              'Positive economic profit due to brand loyalty',
              'Zero economic profit because entry eliminates profits',
              'Negative economic profit because of excess capacity',
              'The same profit as a monopolist'
            ],
            correctAnswer: 1,
            explanation: 'Low barriers to entry mean new firms enter when profits exist, shifting demand left for each firm until P = ATC and economic profit = 0.'
          },
          {
            question: 'Monopolistic competition is inefficient because:',
            options: [
              'Firms collude to raise prices',
              'There are too many firms in the market',
              'Firms produce where P > MC with excess capacity',
              'Products are identical across all firms'
            ],
            correctAnswer: 2,
            explanation: 'P > MC means allocative inefficiency (not producing enough). Producing on the downward-sloping part of ATC (not at minimum) means productive inefficiency — excess capacity.'
          }
        ]
      }
    },
    {
      id: 'micromo1-content',
      type: 'text' as const,
      content: `
## Oligopoly

An oligopoly has **few dominant firms** with **high barriers to entry**. The distinguishing feature: **strategic interdependence** — each firm must consider how rivals will respond to its decisions.

### Game Theory & the Prisoner's Dilemma

| | Firm B: Low Price | Firm B: High Price |
|---|---|---|
| **Firm A: Low Price** | A: $5M, B: $5M | A: $12M, B: $2M |
| **Firm A: High Price** | A: $2M, B: $12M | A: $8M, B: $8M |

- **Dominant strategy**: Both firms choose LOW price (it's best regardless of rival's choice)
- **Nash equilibrium**: (Low, Low) → $5M each
- **Cooperative outcome**: (High, High) → $8M each — but it's unstable because each firm has incentive to cheat

> 🔑 **AP Connection:** The prisoner's dilemma explains why cartels (collusion agreements) are **inherently unstable** — each member benefits from cheating on the agreement.

### Collusion vs. Competition

| Outcome | Behavior | Price | Quantity | Profit |
|---------|----------|-------|----------|--------|
| **Collusion** (cartel) | Act as monopoly | High | Low | Maximized jointly |
| **Compete** (Nash eq.) | Independent pricing | Lower | Higher | Lower for each |
| **Cheat** on cartel | One firm undercuts | Mixed | Mixed | Cheater wins, others lose |
      `
    },
    {
      id: 'micromo1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In an oligopoly, firms must consider rivals' responses. This is called strategic _______.

2) In the prisoner's dilemma, both firms choosing to compete is the _______ equilibrium. (Nash/Pareto)

3) In monopolistic competition, the long-run economic profit is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['interdependence', 'Nash', 'zero'],
        hint1: 'Each firm\'s strategy depends on others.',
        hint2: 'Named after mathematician John Nash.',
        hint3: 'Entry drives profits to this level.',
        explanation: 'Strategic interdependence defines oligopoly. Both competing is the Nash equilibrium (neither can do better unilaterally). Free entry in monopolistic competition drives long-run profit to zero.'
      }
    },
    {
      id: 'micromo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Market Structure Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Many firms selling differentiated products with low barriers to entry describes ___',
            options: ['Monopolistic competition', 'Perfect competition', 'Oligopoly', 'Monopoly']
          },
          {
            label: 'A few dominant firms with high barriers and strategic interdependence describes ___',
            options: ['Oligopoly', 'Monopolistic competition', 'Perfect competition', 'Monopoly']
          },
          {
            label: 'OPEC members agreeing to limit oil production is an example of ___',
            options: ['Collusion (cartel)', 'Perfect competition', 'Monopolistic competition', 'Price discrimination']
          }
        ],
        correctAnswers: ['Monopolistic competition', 'Oligopoly', 'Collusion (cartel)'],
        hint1: 'Differentiated products + many firms + easy entry.',
        hint2: 'Few firms, high barriers, strategic behavior.',
        hint3: 'Multiple producers coordinating output restrictions.',
        explanation: 'Differentiated products + many firms + low barriers = monopolistic competition. Few firms + interdependence = oligopoly. OPEC restricting output = cartel/collusion.'
      }
    },
    {
      id: 'micromo1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Graphs You Must Know

### Monopolistic Competition Long-Run Graph
- Downward-sloping demand is **tangent** to ATC at the profit-maximizing Q
- P = ATC → zero profit
- P > MC → allocative inefficiency
- Q < minimum ATC quantity → excess capacity

### Key Comparisons for the AP Exam

| Question | Perfect Competition | Monopolistic Competition |
|----------|-------------------|------------------------|
| Long-run profit? | Zero | Zero |
| P = MC? | Yes (efficient) | No — P > MC |
| Min ATC? | Yes (efficient) | No — excess capacity |
| Product variety? | None | High (consumer benefit) |

> ⚠️ **AP Trap:** Both perfect competition AND monopolistic competition have zero long-run profit. The difference is efficiency — only perfect competition achieves P = MC and minimum ATC.
      `
    },
    {
      id: 'micromo1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the prisoner\'s dilemma payoff matrix, the Nash equilibrium is often NOT the best combined outcome. This illustrates that:',
            options: [
              'Individual rationality can lead to collectively suboptimal results',
              'Cooperation is always the dominant strategy',
              'Firms in oligopoly always collude successfully',
              'Game theory does not apply to real markets'
            ],
            correctAnswer: 0,
            explanation: 'Each firm rationally chooses its dominant strategy (compete/low price), but the resulting Nash equilibrium yields lower joint profits than cooperation. Individual rationality leads to a collectively worse outcome.'
          },
          {
            question: 'A monopolistically competitive firm is producing where MR = MC and P > ATC. In the long run:',
            options: [
              'The firm will continue earning economic profit',
              'New firms will enter, reducing the firm\'s demand until P = ATC',
              'The firm will merge with competitors to form an oligopoly',
              'The government will regulate prices down to MC'
            ],
            correctAnswer: 1,
            explanation: 'Low barriers to entry attract new firms when P > ATC. Entry shifts each incumbent\'s demand left until P falls to ATC and economic profit reaches zero.'
          }
        ]
      }
    }
  ]
}