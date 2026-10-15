export const microGovernmentInterventionPart5Data = {
  topicSlug: 'micro-government-intervention',
  sections: [
    {
      id: 'microgov5-intro',
      type: 'text' as const,
      content: `
# 💰 Government Intervention in Markets

**Part 5 of 7 — International Trade and Trade Policy**

---

| Section |
|---------|
| 📖 Opening a Market to Trade |
| Worked Example: Imports and Exports |
| Tariffs and Import Quotas |
| Traps in Trade Questions |

> 🔑 **Key Concept:** When a small country opens to trade, its domestic price moves to the **world price**. If the world price is below the domestic price, the country **imports**: buyers gain more than domestic producers lose. A **tariff** pulls the price back up, shrinks imports, raises revenue, and creates **two** deadweight-loss triangles.
`
    },
    {
      id: 'microgov5-open',
      type: 'text' as const,
      content: `
## 📖 Opening a Market to Trade

**Autarky** means no trade: the domestic price is set by domestic supply and demand alone. A **small open economy** can buy or sell any amount at the **world price** ($P_w$) without changing it, so the world supply it faces is a **horizontal line** at $P_w$.

### Two Cases

| World price compared with domestic price | Domestic quantity demanded | Domestic quantity supplied | Result |
|---|---|---|---|
| $P_w$ **below** domestic equilibrium | Rises | Falls | **Imports** = $Q_d - Q_s$ |
| $P_w$ **above** domestic equilibrium | Falls | Rises | **Exports** = $Q_s - Q_d$ |

### Describing the Import Graph in Words
- Draw domestic D and S crossing at the autarky price $P_a$ and quantity $Q_a$.
- Draw a horizontal line at $P_w$ below $P_a$.
- Where $P_w$ meets **S**: domestic production $Q_s$. Where it meets **D**: domestic consumption $Q_d$.
- The horizontal distance from $Q_s$ to $Q_d$ is **imports**.

### Who Wins and Who Loses

| | Importing country ($P_w < P_a$) | Exporting country ($P_w > P_a$) |
|---|---|---|
| Domestic buyers | **Gain**: lower price, more units | **Lose**: higher price, fewer units |
| Domestic producers | **Lose**: lower price, fewer units | **Gain**: higher price, more units |
| Total surplus | **Rises** | **Rises** |

> 🔑 **AP Connection:** In both cases the winners gain more than the losers lose, so **total surplus rises with trade**. That is the market-level version of the comparative-advantage idea from Unit 1.
`
    },
    {
      id: 'microgov5-worked',
      type: 'text' as const,
      content: `
## Worked Example: Imports and Exports

Domestic market: $Q_d = 120 - 2P$ and $Q_s = 2P - 20$. In autarky, $P = \\$35$, $Q = 50$, CS = PS = \\$625, total surplus \\$1,250.

### Case 1: World Price \\$25 (Imports)
1. $Q_d = 120 - 50 = 70$; $Q_s = 50 - 20 = 30$.
2. Imports = 70 − 30 = **40 units**.
3. CS = ½ × 70 × (60 − 25) = **\\$1,225** (up \\$600).
4. PS = ½ × 30 × (25 − 10) = **\\$225** (down \\$400).
5. Total surplus = **\\$1,450**, a gain of **\\$200** from trade.

### Case 2: World Price \\$45 (Exports)
1. $Q_d = 120 - 90 = 30$; $Q_s = 90 - 20 = 70$.
2. Exports = 70 − 30 = **40 units**.
3. CS = ½ × 30 × (60 − 45) = **\\$225** (down \\$400).
4. PS = ½ × 70 × (45 − 10) = **\\$1,225** (up \\$600).
5. Total surplus = **\\$1,450**, again a gain of **\\$200**.

| | Autarky | $P_w$ = \\$25 | $P_w$ = \\$45 |
|---|---|---|---|
| Domestic consumption | 50 | 70 | 30 |
| Domestic production | 50 | 30 | 70 |
| Trade | — | 40 imported | 40 exported |
| Consumer surplus | \\$625 | \\$1,225 | \\$225 |
| Producer surplus | \\$625 | \\$225 | \\$1,225 |
| Total surplus | \\$1,250 | \\$1,450 | \\$1,450 |
`
    },
    {
      id: 'microgov5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A country that grows its own rice opens to free trade, and the world price of rice is below its autarky price. Which group is made worse off?',
            options: [
              'Domestic rice farmers',
              'Rice consumers at home',
              'Foreign rice exporters',
              'No group is harmed'
            ],
            correctAnswer: 0,
            explanation: 'The domestic price falls to the world price, so domestic farmers sell fewer units at a lower price and lose producer surplus. Domestic buyers gain, and their gain is larger than the farmers\' loss.'
          },
          {
            question: 'In the worked example, suppose the world price is \\$30 instead of \\$25. How many units does the country import?',
            options: [
              '20',
              '40',
              '60',
              '10'
            ],
            correctAnswer: 0,
            explanation: 'At \\$30, Qd = 120 − 60 = 60 and Qs = 60 − 20 = 40, so imports are 60 − 40 = 20. The figure 60 is domestic consumption and 40 is domestic production, not the gap between them.'
          }
        ]
      }
    },
    {
      id: 'microgov5-tariff',
      type: 'text' as const,
      content: `
## Tariffs and Import Quotas

A **tariff** is a tax on imported units. In a small country, it raises the domestic price from $P_w$ to $P_w + t$; the world price itself does not change.

### Worked Example: A \\$5 Tariff
Start from free trade at $P_w = \\$25$ (imports of 40). The tariff raises the domestic price to **\\$30**.

1. $Q_d = 120 - 60 = 60$; $Q_s = 60 - 20 = 40$; imports = **20**.
2. Tariff revenue = \\$5 × 20 imported units = **\\$100**.
3. CS = ½ × 60 × (60 − 30) = **\\$900** (down \\$325 from \\$1,225).
4. PS = ½ × 40 × (30 − 10) = **\\$400** (up \\$175 from \\$225).
5. Deadweight loss = 325 − 175 − 100 = **\\$50**, made of two triangles:

| Triangle | Where | Why it is lost | Size |
|---|---|---|---|
| Production DWL | Between $Q_s$ = 30 and 40, above $P_w$, below S | Domestic firms now make 10 units that cost more than \\$25, the price the world would sell them for | ½ × 10 × 5 = \\$25 |
| Consumption DWL | Between $Q_d$ = 60 and 70, above $P_w$, below D | Buyers give up 10 units they value above the \\$25 world cost | ½ × 10 × 5 = \\$25 |

**Revenue is a rectangle, not a triangle:** it sits between $P_w$ and $P_w + t$, from $Q_s$ to $Q_d$ (imports only). Tariff revenue is never collected on domestically produced units.

### Import Quotas
A quota of **20 imported units** has the same effects on price (\\$30), domestic production (40), consumption (60) and deadweight loss (\\$50). The \\$100 rectangle becomes **quota rent** for whoever holds the import licenses, often foreign exporters, instead of tariff revenue.

### A Prohibitive Tariff
If $P_w + t \\ge P_a$ (here, a tariff of \\$10 or more), imports fall to zero and the market returns to autarky: price \\$35, quantity 50, and no tariff revenue at all.
`
    },
    {
      id: 'microgov5-input',
      type: 'input-boxes' as const,
      content: `
**Tariff Calculations** ✍️

The same domestic market ($Q_d = 120 - 2P$, $Q_s = 2P - 20$) faces a world price of **\\$20**. The government then imposes a **\\$6 tariff**.

1) Imports under free trade at \\$20?

2) Imports after the tariff?

3) Tariff revenue, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '36', '216'],
        hint1: 'At \\$20: Qd = 80 and Qs = 20.',
        hint2: 'The domestic price becomes \\$26. Find Qd and Qs there.',
        hint3: 'Revenue = tariff × imports after the tariff.',
        explanation: '1) Imports = 80 − 20 = 60. 2) At \\$26, Qd = 68 and Qs = 32, so imports = 36. 3) Revenue = \\$6 × 36 = \\$216.'
      }
    },
    {
      id: 'microgov5-traps',
      type: 'text' as const,
      content: `
## Traps in Trade Questions

| Trap | Correct idea |
|---|---|
| "A tariff makes the country better off because the government collects revenue." | Revenue plus the producers' gain is **less than** the consumers' loss; the gap is deadweight loss. |
| "Tariff revenue = tariff × quantity sold." | Only **imported** units are taxed: tariff × ($Q_d - Q_s$) at the new price. |
| "Free trade hurts everyone in the importing country who makes the good." | Domestic producers lose, but buyers gain more, so **total surplus rises**. |
| "A tariff lowers the world price." | For a **small** country, the world price is fixed; only the domestic price rises. |
| "An import quota raises revenue for the government." | Not unless licenses are sold; otherwise the rectangle is **quota rent** for license holders. |
| "Exporting raises prices for domestic buyers, so it lowers total surplus." | Buyers lose, but producers gain more, so total surplus **rises**. |

> 🔑 **AP Connection:** For a "who gains, who loses" tariff question, list four groups: domestic consumers (lose), domestic producers (gain), the government (gains revenue), and society as a whole (loses the deadweight loss).
`
    },
    {
      id: 'microgov5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A small country imposes a tariff on imported steel. Compared with free trade, what happens to domestic steel production and steel imports?',
            options: [
              'Domestic production rises and imports fall',
              'Domestic production falls and imports increase',
              'Both domestic production and imports increase',
              'Domestic production rises and imports stay put'
            ],
            correctAnswer: 0,
            explanation: 'The tariff raises the domestic price, so domestic firms move up their supply curve and produce more, while buyers move up their demand curve and buy less. Both changes shrink the gap between consumption and production, so imports fall.'
          },
          {
            question: 'On a tariff graph, the two prices are the world price and the world price plus the tariff. Which area shows the government\'s tariff revenue?',
            options: [
              'The rectangle between the two prices over imported units only',
              'The rectangle between the two prices over all units bought at home',
              'The rectangle between the two prices over domestic output only',
              'The two triangles between the two prices beside the imports'
            ],
            correctAnswer: 0,
            explanation: 'The tariff is collected only on imports, so revenue is the tariff (the height from the world price to the higher domestic price) times the quantity imported. The two triangles beside it are the deadweight losses.'
          },
          {
            question: 'A small country replaces a tariff with an import quota that allows exactly the same quantity of imports. What changes?',
            options: [
              'The rectangle once collected as revenue goes to license holders',
              'The domestic price falls back down to the world price level',
              'The deadweight loss disappears since imports are now capped',
              'Domestic producers now sell fewer units than with the tariff'
            ],
            correctAnswer: 0,
            explanation: 'With the same import quantity, the domestic price, production, consumption and deadweight loss all match the tariff case. Only the rectangle between the world and domestic prices changes hands, from the government to whoever holds the import rights.'
          }
        ]
      }
    }
  ]
};
