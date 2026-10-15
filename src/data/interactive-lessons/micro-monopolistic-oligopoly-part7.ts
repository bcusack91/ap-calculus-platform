export const microMonopolisticOligopolyPart7Data = {
  topicSlug: 'micro-monopolistic-oligopoly',
  sections: [
    {
      id: 'micromon7-intro',
      type: 'text' as const,
      content: `
# 💰 Monopolistic Competition & Oligopoly

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Four Market Structures Side by Side |
| A Checklist for Any Imperfect-Competition Question |
| Connecting the Ideas |

> 🔑 **Key Concept:** Imperfect competition sits between two benchmarks. **Monopolistic competition** has a monopoly's downward-sloping demand but a competitive market's free entry, so long-run profit is zero yet P > MC. **Oligopoly** has few firms behind high barriers, so outcomes depend on **strategy**: collusion pushes toward the monopoly result, and the Nash equilibrium usually lands between monopoly and competition.
      `
    },
    {
      id: 'micromon7-table',
      type: 'text' as const,
      content: `
## 📖 The Four Market Structures Side by Side

| Feature | Perfect competition | Monopolistic competition | Oligopoly | Monopoly |
|---|---|---|---|---|
| Number of firms | Many | Many | Few | One |
| Product | Identical | Differentiated | Identical or differentiated | No close substitutes |
| Barriers to entry | None | Low | High | Very high |
| Firm's demand curve | Horizontal (P = MR) | Downward sloping, relatively elastic | Depends on rivals' choices | Market demand |
| Quantity rule | MR = MC | MR = MC | Strategy (payoff matrix) | MR = MC |
| Long-run economic profit | Zero | **Zero** | Can be positive | Can be positive |
| Long-run P compared with MC | P = MC | P > MC | P > MC | P > MC |
| Long-run output compared with minimum-ATC output | Equal | Less (excess capacity) | Generally not equal | Generally not equal |
| Main AP tool | Side-by-side graphs | Tangency graph | Payoff matrix | Monopoly graph |

### The Long-Run Graph Signatures
- **Perfect competition:** horizontal demand touches ATC at its minimum.
- **Monopolistic competition:** downward-sloping demand is **tangent** to ATC on its falling part, at the MR = MC quantity.
- **Monopoly:** demand can lie above ATC at the MR = MC quantity, leaving a profit rectangle.
      `
    },
    {
      id: 'micromon7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Firms in which pair of market structures can keep earning positive economic profit in the long run?',
            options: [
              'Monopoly and oligopoly',
              'Perfect and monopolistic competition',
              'Monopolistic competition and oligopoly',
              'Perfect competition and monopoly'
            ],
            correctAnswer: 0,
            explanation: 'High barriers to entry protect profit in monopoly and oligopoly. Free or easy entry drives long-run profit to zero in both perfect and monopolistic competition, so any pair that includes either of them is wrong.'
          },
          {
            question: 'A city has hundreds of nail salons, each with its own style and location, and opening a new salon is cheap. The market is best classified as',
            options: [
              'monopolistic competition',
              'perfect competition',
              'oligopoly',
              'monopoly'
            ],
            correctAnswer: 0,
            explanation: 'Many firms, differentiated services and low barriers to entry define monopolistic competition. Perfect competition needs identical products, and oligopoly and monopoly need few firms and high barriers.'
          },
          {
            question: 'Which feature is found in oligopoly but not in monopolistic competition?',
            options: [
              'Strategic interdependence',
              'A downward-sloping demand curve',
              'Prices set above marginal cost',
              'Differentiated products'
            ],
            correctAnswer: 0,
            explanation: 'With only a few firms, each oligopolist must consider how its rivals will react, which is why game theory applies. Both structures have downward-sloping firm demand and P > MC, and both can sell differentiated products.'
          }
        ]
      }
    },
    {
      id: 'micromon7-checklist',
      type: 'text' as const,
      content: `
## A Checklist for Any Imperfect-Competition Question

1. **Identify the structure** from the clues: number of firms, type of product, ease of entry.
2. **If it is monopolistic competition:**
   - Short run: MR = MC for Q, demand for P, (P − ATC) × Q for profit or loss.
   - Long run: profit → entry → firm demand shifts left; loss → exit → demand shifts right; end at tangency with zero profit.
   - Efficiency: P > MC (allocative) and output below minimum-ATC output (productive, excess capacity).
3. **If it is oligopoly with a payoff matrix:**
   - Read which payoff belongs to which player.
   - Find best responses for each player, one rival choice at a time.
   - Dominant strategy = same best response both times. Nash equilibrium = both players at best responses.
   - Collusion question: compare a player's payoff in the agreed cell with its payoff from deviating alone.
   - Changed-payoff question: change only the affected cells, then redo both comparisons.
4. **Fixed costs and lump-sum fees** never change MR = MC output in the short run, and a fee charged in every cell never changes a matrix player's choices.
5. **Write the reason** with every claim: "because P > MC," "because 65 > 50."
      `
    },
    {
      id: 'micromon7-connect',
      type: 'text' as const,
      content: `
## Connecting the Ideas

| Part | Big idea | How it links |
|---|---|---|
| 2 | The tangency graph | Free entry erases profit, but a sloped demand curve keeps P > MC |
| 3 | Differentiation and advertising | Firms fight the tangency by shifting demand right; entry pushes back |
| 4 | Payoff matrices | Best responses, dominant strategies and Nash equilibrium |
| 5 | Cartels | Collusion copies monopoly, but cheating is a dominant strategy |
| 6 | Free-response practice | Labels, numbers and reasons earn the points |

### One Story, Two Structures
Advertising appears in both structures. In **monopolistic competition**, a firm advertises to shift its own demand curve, and entry eventually erases the gain. In **oligopoly**, advertising is often a **prisoner's dilemma**: each firm advertises because it is dominant, even though both would earn more if neither did. In both cases the spending is a real cost that ends up in prices.

### The Errors That Cost the Most Points
- Drawing long-run monopolistic-competition demand **crossing** ATC instead of tangent to it.
- Placing the tangency **at** the minimum of ATC.
- Choosing the matrix cell with the largest **total** as the Nash equilibrium.
- Saying a player has a dominant strategy after checking only **one** of the rival's choices.
- Saying a fixed cost or lump-sum fee changes the short-run price or quantity.
      `
    },
    {
      id: 'micromon7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Long-run demand tangent to ATC to the left of its minimum is the signature of ___',
            options: ['Monopolistic competition', 'Perfect competition', 'Oligopoly', 'Monopoly']
          },
          {
            label: 'In a payoff matrix, a cell where neither player can gain by changing only its own choice is a ___',
            options: ['Nash equilibrium', 'Dominant strategy', 'Cartel outcome', 'Joint maximum']
          },
          {
            label: 'Two cartel members each produce more than their quotas. Compared with the cartel outcome, the market price ___',
            options: ['Falls', 'Rises', 'Stays the same', 'Is indeterminate']
          }
        ],
        correctAnswers: ['Monopolistic competition', 'Nash equilibrium', 'Falls'],
        hint1: 'Which structure combines a downward-sloping demand curve with free entry?',
        hint2: 'This is the definition, not the strategy a player uses to get there.',
        hint3: 'More output on the same market demand curve means a lower price.',
        explanation: 'Tangency left of minimum ATC belongs to monopolistic competition. A cell with no profitable one-sided move is a Nash equilibrium. When cartel members exceed their quotas, total output rises and the price falls along market demand.'
      }
    },
    {
      id: 'micromon7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Advertising by two rival oligopolists often resembles a prisoner\'s dilemma because',
            options: [
              'each firm advertises, yet each would earn more with no ads',
              'advertising is what maximizes the firms\' joint profit',
              'ads by one firm raise demand for both firms equally',
              'neither firm\'s ads affect the rival\'s sales at all'
            ],
            correctAnswer: 0,
            explanation: 'Advertising is each firm\'s dominant strategy, but when both advertise the campaigns largely cancel out and both earn less than if neither had. If advertising maximized joint profit, there would be no dilemma.'
          },
          {
            question: 'Compared with a perfectly competitive industry with the same costs, a successful cartel produces',
            options: [
              'fewer units at a higher price',
              'more units at a lower price',
              'the same quantity at a higher price',
              'a larger output at the same price'
            ],
            correctAnswer: 0,
            explanation: 'A cartel restricts output to the monopoly level, where MR = MC, and charges the higher price that demand allows. In the cement example, that meant 30 tons at \\$40 instead of 60 tons at \\$10.'
          },
          {
            question: 'Which long-run outcome do monopolistic competition and perfect competition share?',
            options: [
              'Zero economic profit',
              'Price equal to marginal cost',
              'Output at minimum average total cost',
              'A horizontal demand curve for each firm'
            ],
            correctAnswer: 0,
            explanation: 'Free entry drives long-run economic profit to zero in both structures. Only perfect competition reaches P = MC and minimum ATC, because only it has a horizontal firm demand curve.'
          }
        ]
      }
    }
  ]
}
