export const microMonopolisticOligopolyPart3Data = {
  topicSlug: 'micro-monopolistic-oligopoly',
  sections: [
    {
      id: 'micromon3-intro',
      type: 'text' as const,
      content: `
# 💰 Monopolistic Competition & Oligopoly

**Part 3 of 7 — Product Differentiation and Nonprice Competition**

---

| Section |
|---------|
| 📖 How Firms Make Their Products Different |
| Advertising: A Worked Decision |
| Variety Versus Efficiency |

> 🔑 **Key Concept:** A monopolistically competitive firm's pricing power comes entirely from **product differentiation**. Firms compete on quality, location, service and brand image, not just on price, because that competition does two things: it **shifts the firm's demand curve right** and makes it **less elastic**. Advertising is the most visible tool, and it is a **cost** that raises ATC.
      `
    },
    {
      id: 'micromon3-differ',
      type: 'text' as const,
      content: `
## 📖 How Firms Make Their Products Different

**Nonprice competition** is any effort to win customers other than cutting price. In monopolistic competition it takes several forms.

| Source of differentiation | What the firm changes | Example |
|---|---|---|
| **Quality and features** | The product itself | A phone case with a built-in wallet |
| **Location** | Where buyers can get it | A coffee shop beside a train station |
| **Service** | How buyers are treated | Free alterations at a clothing store |
| **Style or design** | How it looks or feels | A restaurant's decor and menu theme |
| **Brand image** | What buyers believe about it | Advertising and celebrity endorsements |

Differentiation can be **real** (a longer battery life) or **perceived** (a logo that buyers trust). Either way, it works the same way on the graph.

### Two Goals, Two Effects on Demand

| Goal | Effect on the firm's demand curve | Why the firm wants it |
|---|---|---|
| Win customers from rivals | Shifts **right** | More units sell at every price |
| Build loyalty | Becomes **less elastic** (steeper) | Raising the price loses fewer customers |

A firm with less elastic demand has a bigger gap between price and marginal cost at its MR = MC quantity, so it can charge a larger **markup**.

> 🔑 **AP Connection:** If a question says a firm's advertising makes buyers see its product as having **fewer close substitutes**, the expected answer is that demand becomes **less elastic** (and usually shifts right). Elasticity is about the availability of substitutes, a determinant you learned in Unit 2.
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
            question: 'Which goal best describes why a monopolistically competitive firm spends money on advertising?',
            options: [
              'To shift its demand right and make it less elastic',
              'To lower the marginal cost of each unit it sells',
              'To reach the output level where ATC is at its minimum',
              'To set a price that equals its marginal cost'
            ],
            correctAnswer: 0,
            explanation: 'Advertising aims to win customers (a rightward shift) and build loyalty (less elastic demand), which raises the price the firm can charge. It adds to cost rather than lowering MC, and it does not push the firm toward minimum ATC or P = MC.'
          },
          {
            question: 'Two coffee shops sell nearly identical drinks, but one sits next to a busy train station. The shop\'s spot beside the station is best described as',
            options: [
              'differentiation by location',
              'a legal barrier that blocks new entry',
              'collusion between the two shops',
              'price discrimination against commuters'
            ],
            correctAnswer: 0,
            explanation: 'Convenience is a real difference between the two products, so location is a form of product differentiation. Nothing stops another shop from opening nearby, the shops are not coordinating, and charging every buyer the same price is not discrimination.'
          }
        ]
      }
    },
    {
      id: 'micromon3-advert',
      type: 'text' as const,
      content: `
## Advertising: A Worked Decision

Daily Grind, a coffee shop, has a constant variable cost (and MC) of \\$3 per cup and a fixed cost of \\$600 per day.

### Without Advertising
Its best choice is to sell **400 cups at \\$5**.

- ATC = \\$3 + \\$600 ÷ 400 = \\$3 + \\$1.50 = **\\$4.50**
- Profit = (\\$5.00 − \\$4.50) × 400 = **\\$200 per day**

### With a \\$150-per-Day Ad Campaign
The campaign costs the same no matter how many cups the shop sells, so it is a **fixed cost**: total fixed cost becomes \\$750. The ads shift demand right and make it less elastic, and the shop's new best choice is **500 cups at \\$5.40**.

- ATC = \\$3 + \\$750 ÷ 500 = \\$3 + \\$1.50 = **\\$4.50**
- Profit = (\\$5.40 − \\$4.50) × 500 = **\\$450 per day**

The campaign raises profit by \\$250, so in the **short run** it pays.

### What the Ad Did to Each Curve

| Curve | Effect of the campaign | Reason |
|---|---|---|
| Demand | Shifts right, less elastic | More customers, more loyalty |
| MR | Shifts with demand | MR is derived from demand |
| ATC | Shifts **up** | \\$150 more fixed cost at every quantity |
| MC | **No change** | The campaign does not change the cost of one more cup |

The ad never moves MC. It changes the profit-maximizing quantity only **indirectly**, by moving demand and MR.

### The Long Run
Daily Grind's \\$450 profit draws rivals. They open nearby and run their own ads, so Daily Grind's demand shifts back left until it is again **tangent to ATC**. Profit returns to **zero**, and because ad spending is now part of every firm's costs, the long-run price must cover it.

> ⚠️ **Common trap:** "Advertising lets the firm earn profit in the long run." It does not, as long as entry is easy. Advertising can create a short-run profit, but entry and copycat campaigns erase it.
      `
    },
    {
      id: 'micromon3-input',
      type: 'input-boxes' as const,
      content: `
**Run the Numbers** ✍️

A monopolistically competitive bike shop has a constant variable cost of \\$4 per tune-up and a fixed cost of \\$900 per week. Without advertising, it sells 300 tune-ups per week at \\$8. A \\$400-per-week ad campaign would let it sell 400 tune-ups at \\$8.50.

1) What is its weekly profit without the campaign? (dollars)

2) What is its ATC with the campaign? (dollars, to two decimal places)

3) What is its weekly profit with the campaign? (dollars)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['300', '7.25', '500'],
        hint1: 'ATC without ads = \\$4 + \\$900 ÷ 300. Then use (P − ATC) × Q.',
        hint2: 'The campaign raises fixed cost to \\$1,300. Spread it over 400 tune-ups and add the \\$4 variable cost.',
        hint3: 'Use (P − ATC) × Q with the new price and quantity.',
        explanation: '1) ATC = \\$4 + \\$3 = \\$7, so profit = (\\$8 − \\$7) × 300 = \\$300. 2) ATC = \\$4 + \\$1,300 ÷ 400 = \\$4 + \\$3.25 = \\$7.25. 3) Profit = (\\$8.50 − \\$7.25) × 400 = \\$500, so the campaign adds \\$200 a week in the short run.'
      }
    },
    {
      id: 'micromon3-variety',
      type: 'text' as const,
      content: `
## Variety Versus Efficiency

By the standard efficiency tests, monopolistic competition falls short in the long run:

| Cost to society | What it means |
|---|---|
| **P > MC** | Buyers value more output than is produced, so there is a deadweight loss |
| **Excess capacity** | Each firm produces below its minimum-ATC output, so goods cost more to make than necessary |
| **Advertising spending** | Resources go to persuading buyers rather than producing goods, and the cost is built into prices |

But those tests leave out something buyers clearly value: **product variety**. A town with twelve different restaurants is not "wasting" capacity in the eyes of diners who like choosing between them. Part of the higher average cost is the price of having that choice.

### Why There Is No Easy Policy Fix
- Forcing price down to MC would leave each firm with a **loss**, because in long-run equilibrium MC is below ATC. Firms would exit, and variety would shrink.
- Profit is already zero, so there is no monopoly profit to tax away.
- The markets have many small firms, so antitrust has nothing to break up.

### Misconceptions to Avoid

| Misconception | Correction |
|---|---|
| "Zero economic profit means the owners earn nothing." | Zero economic profit means a **normal profit**: the owners earn as much as in their next-best use. |
| "Differentiation gives the firm monopoly power, so it earns profit forever." | Free entry still drives long-run profit to zero. |
| "Excess capacity means the firm is producing too much." | It means the firm produces **too little** to reach minimum ATC. |
| "Nonprice competition means firms never compete on price." | They still choose prices; they also compete on quality, location, service and image. |

> 🔑 **AP Connection:** An exam answer that calls monopolistic competition inefficient should name the reason: **P > MC** for allocative inefficiency, **output below minimum-ATC output** for productive inefficiency.
      `
    },
    {
      id: 'micromon3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Strategy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A sneaker brand pays a star athlete to wear its shoes during games. This is an example of ___',
            options: ['Nonprice competition', 'Price competition', 'Collusion', 'Price discrimination']
          },
          {
            label: 'An ad campaign convinces buyers that a shampoo has fewer close substitutes. The shampoo\'s demand becomes ___',
            options: ['Less elastic', 'More elastic', 'Perfectly elastic', 'Unit elastic']
          },
          {
            label: 'On the cost side, an ad campaign with a fixed weekly price tag shifts the firm\'s ___',
            options: ['ATC curve but not its MC', 'MC curve but not its ATC', 'MC and AVC curves', 'AVC curve but not its ATC']
          }
        ],
        correctAnswers: ['Nonprice competition', 'Less elastic', 'ATC curve but not its MC'],
        hint1: 'The firm is not changing its price; it is changing what buyers think of the shoes.',
        hint2: 'Fewer substitutes means buyers respond less to a price increase.',
        hint3: 'A cost that does not depend on output is a fixed cost.',
        explanation: 'An endorsement is nonprice competition through brand image. Fewer perceived substitutes makes demand less elastic. A fixed-cost campaign raises ATC (through AFC) at every quantity but leaves MC and AVC unchanged.'
      }
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
            question: 'A regulator forces a monopolistically competitive firm in long-run equilibrium to charge a price equal to its marginal cost at its current output. The most likely result is that the firm',
            options: [
              'earns losses, since MC is below ATC there',
              'earns zero profit at its minimum ATC',
              'earns more profit by selling more units',
              'keeps its old price, since P already equals MC'
            ],
            correctAnswer: 0,
            explanation: 'In long-run equilibrium the firm sits where ATC is still falling, so MC is below ATC; a price equal to MC cannot cover average cost and the firm loses money. Price was above MC before the rule, so the price must fall, not stay the same.'
          },
          {
            question: 'Which benefit of monopolistic competition is left out when the market is judged only by allocative and productive efficiency?',
            options: [
              'Buyers can choose from a wide variety of products',
              'Firms keep earning economic profit in the long run',
              'Each firm produces at the lowest point on its ATC curve',
              'Each firm sets its price equal to its marginal cost'
            ],
            correctAnswer: 0,
            explanation: 'Product variety has value to buyers that the efficiency tests do not measure. The other options are not true of monopolistic competition: long-run profit is zero, output is below minimum-ATC output, and price exceeds MC.'
          },
          {
            question: 'A new menu and an ad campaign give a restaurant economic profit. If entry into the restaurant market is easy, in the long run',
            options: [
              'rivals enter and the profit returns to zero',
              'brand loyalty protects the profit from rivals',
              'the restaurant moves to the minimum of its ATC',
              'price falls until it equals the marginal cost'
            ],
            correctAnswer: 0,
            explanation: 'Profit attracts entry, and new rivals shift the restaurant\'s demand left until it is tangent to ATC. Loyalty slows this but cannot stop it when entry is easy, and the tangency stays left of minimum ATC with P > MC.'
          }
        ]
      }
    }
  ]
}
