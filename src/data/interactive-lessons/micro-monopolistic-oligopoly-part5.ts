export const microMonopolisticOligopolyPart5Data = {
  topicSlug: 'micro-monopolistic-oligopoly',
  sections: [
    {
      id: 'micromon5-intro',
      type: 'text' as const,
      content: `
# 💰 Monopolistic Competition & Oligopoly

**Part 5 of 7 — Collusion, Cartels and Changing the Game**

---

| Section |
|---------|
| 📖 Why Firms Want to Collude |
| The Cartel as a Game |
| Why Cartels Break Down |
| Changing the Payoffs |
| Oligopoly and Efficiency |

> 🔑 **Key Concept:** A cartel tries to turn an oligopoly into a **monopoly**: the members restrict total output to the level a single monopolist would choose and share the profit. The same numbers that make collusion attractive also make **cheating** attractive, which is why the cartel outcome is not a Nash equilibrium and why cartels tend to fall apart.
      `
    },
    {
      id: 'micromon5-collude',
      type: 'text' as const,
      content: `
## 📖 Why Firms Want to Collude

Two cement plants, Alder and Birch, are the only sellers in an isolated region. Market demand is **P = 70 − Q** (tons per day), and each plant has a constant marginal cost of **\\$10** per ton with no fixed cost.

### Outcome 1: Acting as One Monopolist (Collusion)
- Market MR = 70 − 2Q. Setting MR = MC: 70 − 2Q = 10, so **Q = 30**.
- Price from demand: P = 70 − 30 = **\\$40**.
- Joint profit = (\\$40 − \\$10) × 30 = **\\$900**. With quotas of 15 tons each, each plant earns **\\$450**.

### Outcome 2: Price Driven to Marginal Cost
If the plants competed until P = MC: 70 − Q = 10, so Q = 60 and P = \\$10. Profit would be **\\$0**.

Colluding raises each plant's profit from \\$0 to \\$450. That gain is exactly why oligopolists are tempted to form a **cartel**: a formal agreement to restrict output or fix prices.

### The Temptation to Cheat
Suppose Birch keeps its quota of 15, but Alder secretly produces 20.

| | Alder | Birch | Market |
|---|---|---|---|
| Output | 20 | 15 | 35 |
| Price | \\$35 | \\$35 | \\$35 |
| Profit | (\\$35 − \\$10) × 20 = **\\$500** | (\\$35 − \\$10) × 15 = **\\$375** | \\$875 |

Alder gains \\$50 by cheating, even though the extra output lowers the price on every ton both plants sell. Birch loses \\$75. The cartel's joint profit falls from \\$900 to \\$875.
      `
    },
    {
      id: 'micromon5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When Alder produces 20 tons and Birch keeps its 15-ton quota, what happens to Alder\'s profit compared with the cartel outcome?',
            options: [
              'It rises from \\$450 to \\$500',
              'It falls from \\$450 to \\$400',
              'It falls from \\$450 to \\$375',
              'It stays at \\$450 since the price is set'
            ],
            correctAnswer: 0,
            explanation: 'The price falls to \\$35, but Alder sells 20 tons at a \\$25 margin, earning \\$500 instead of \\$450. \\$375 is what Birch earns, and \\$400 is each plant\'s profit when both produce 20.'
          },
          {
            question: 'Why do the members of a cartel each have an incentive to break the agreement?',
            options: [
              'Each gains by selling more than its quota at that price',
              'The cartel price is set below each member\'s marginal cost',
              'Joint profit is lower when every member keeps its quota',
              'Each member earns less than it would under perfect competition'
            ],
            correctAnswer: 0,
            explanation: 'At the cartel price, P is well above MC, so each extra unit a member sells adds to its own profit, while the cost of the lower price is shared with the other members. Joint profit is highest when everyone keeps its quota, and the cartel price is far above MC and above the competitive profit of zero.'
          }
        ]
      }
    },
    {
      id: 'micromon5-game',
      type: 'text' as const,
      content: `
## The Cartel as a Game

Each plant chooses to **keep** its quota (15 tons) or **cheat** (20 tons). Profits from the demand curve above, listed (Alder, Birch):

| | Birch: Keep (15) | Birch: Cheat (20) |
|---|---|---|
| **Alder: Keep (15)** | \\$450, \\$450 | \\$375, \\$500 |
| **Alder: Cheat (20)** | \\$500, \\$375 | \\$400, \\$400 |

### Solving It
- If Birch keeps, Alder earns \\$500 by cheating versus \\$450 by keeping → **Cheat**.
- If Birch cheats, Alder earns \\$400 by cheating versus \\$375 by keeping → **Cheat**.
- Cheating is Alder's **dominant strategy**. The game is symmetric, so it is Birch's too.
- Nash equilibrium: **(Cheat, Cheat)**, with 40 tons sold at **\\$30** and **\\$400** each.

This is a **prisoner's dilemma**: each plant's individually rational choice leaves both worse off (\\$400) than keeping the agreement (\\$450).

### Where the Outcomes Land

| Outcome | Market Q | Price | Profit per plant |
|---|---|---|---|
| Cartel (collusion) | 30 | \\$40 | \\$450 |
| Nash equilibrium (both cheat) | 40 | \\$30 | \\$400 |
| Price equal to MC | 60 | \\$10 | \\$0 |

The non-cooperative oligopoly outcome falls **between** monopoly and perfect competition: more output and a lower price than the cartel, but price still above MC.
      `
    },
    {
      id: 'micromon5-input',
      type: 'input-boxes' as const,
      content: `
**Build a Cartel** ✍️

Two identical firms are the only sellers of a product with market demand **P = 100 − Q**. Each has a constant marginal cost of \\$20 and no fixed cost. They form a cartel and split output equally.

1) What total quantity does the cartel produce?

2) What price does it charge? (dollars, number only)

3) What profit does each firm earn? (dollars, number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '60', '800'],
        hint1: 'The cartel acts like one monopolist: MR = 100 − 2Q. Set MR equal to MC.',
        hint2: 'Read the price from the demand curve at the cartel quantity.',
        hint3: 'Joint profit is (P − MC) × Q. Split it in half.',
        explanation: '1) 100 − 2Q = 20 gives Q = 40. 2) P = 100 − 40 = \\$60. 3) Joint profit = (\\$60 − \\$20) × 40 = \\$1,600, so each firm earns \\$800 on its 20 units.'
      }
    },
    {
      id: 'micromon5-breakdown',
      type: 'text' as const,
      content: `
## Why Cartels Break Down

| Pressure on the cartel | How it undermines the agreement |
|---|---|
| **Incentive to cheat** | Each member gains by producing beyond its quota, as the matrix shows |
| **Hard to detect cheating** | Secret discounts or extra output may not show up until price falls |
| **Entry** | High cartel profits attract new sellers who are not bound by the quotas |
| **Different costs or goals** | Members disagree about the right price and how to divide output |
| **Law** | In the United States, agreements among competitors to fix prices or divide markets are illegal under the Sherman Antitrust Act of 1890 |

OPEC, a group of oil-exporting countries, sets production targets for its members. Members have often produced more than their targets, which is the cartel cheating problem in practice.

> 🔑 **AP Connection:** You already met the Sherman Act in the monopoly lesson, in the context of breaking up monopolies and blocking mergers. In oligopoly questions, it shows up as the reason **explicit collusion is illegal**.
      `
    },
    {
      id: 'micromon5-change',
      type: 'text' as const,
      content: `
## Changing the Payoffs

A favorite AP free-response task changes some payoffs (with a tax, fine or subsidy) and asks whether a dominant strategy or the equilibrium changes.

Two cereal makers each choose to **Advertise** or **Not**. Profits in millions, listed (Crunch, Flake):

| | Flake: Advertise | Flake: Not |
|---|---|---|
| **Crunch: Advertise** | 40, 40 | 70, 25 |
| **Crunch: Not** | 25, 70 | 60, 60 |

Advertising is dominant for both (40 > 25 and 70 > 60), so the equilibrium is (Advertise, Advertise) at 40 each, even though (Not, Not) would give each 60.

### A Tax on Advertising
The government charges **\\$T million** to any firm that advertises. Only the "Advertise" payoffs fall. For Crunch to prefer Not **no matter what** Flake does, both comparisons must flip:

| If Flake chooses | Crunch: Advertise | Crunch: Not | Not is better when |
|---|---|---|---|
| Advertise | 40 − T | 25 | T > 15 |
| Not | 70 − T | 60 | T > 10 |

Both conditions hold only when **T > \\$15 million**. With a tax that large on both firms, (Not, Not) becomes the Nash equilibrium, and since no one advertises, the tax collects nothing.

### A Fee That Changes Nothing
If a firm pays the **same** amount in every cell, whatever it chooses, every comparison it makes falls by the same amount on both sides. Its best responses, dominant strategy and the equilibrium **do not change**. This is the matrix version of a lump-sum tax leaving a firm's choices unchanged.
      `
    },
    {
      id: 'micromon5-efficiency',
      type: 'text' as const,
      content: `
## Oligopoly and Efficiency

- In the cement example, the non-cooperative price (\\$30) is still far above MC (\\$10), so output is below the allocatively efficient level and there is a **deadweight loss**.
- Collusion makes the loss larger by moving the market toward the monopoly outcome.
- **High barriers to entry** mean profits need not disappear in the long run, unlike monopolistic competition.

### Misconceptions to Avoid

| Misconception | Correction |
|---|---|
| "Oligopolists always collude." | Collusion is tempting but unstable and illegal; many oligopolies compete. |
| "The Nash equilibrium is the outcome that is best for the firms." | In a prisoner's dilemma, both firms would do better at another cell. |
| "A dominant strategy is the one with the biggest payoff in the matrix." | It is the best response to **every** rival choice. |
| "Oligopoly products are always identical." | They can be identical (cement) or differentiated (cars, phones). |
      `
    },
    {
      id: 'micromon5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the cereal game, the government charges each firm \\$T million if it advertises. Not advertising becomes each firm\'s dominant strategy only if T is greater than',
            options: [
              '\\$15 million',
              '\\$10 million',
              '\\$25 million',
              '\\$30 million'
            ],
            correctAnswer: 0,
            explanation: 'When the rival advertises, Not pays 25 and Advertise pays 40 − T, so T must exceed 15; when the rival does not, T must exceed 10. Both must hold, so T must be above \\$15 million. \\$10 million flips only one comparison.'
          },
          {
            question: 'A firm in a payoff matrix must pay a \\$5 million fee in every cell, whatever strategy it chooses. Its dominant strategy',
            options: [
              'stays the same, as each comparison falls equally',
              'switches, since the payoffs from its usual choice fall',
              'disappears, since its payoffs are now lower overall',
              'changes only if the fee exceeds its smallest payoff'
            ],
            correctAnswer: 0,
            explanation: 'Subtracting the same amount from both sides of every comparison leaves each best response unchanged, just as a lump-sum tax leaves a firm\'s output choice unchanged. Lower payoffs overall do not change which choice is better.'
          },
          {
            question: 'When Alder and Birch both keep their cartel quotas, the market price and quantity match those of',
            options: [
              'a monopoly',
              'a monopsony',
              'perfect competition',
              'monopolistic competition'
            ],
            correctAnswer: 0,
            explanation: 'A successful cartel restricts total output to where market MR = MC, exactly as a single monopolist would, giving 30 tons at \\$40. Perfect competition would give 60 tons at \\$10, and a monopsony is a single buyer, not a seller.'
          }
        ]
      }
    }
  ]
}
