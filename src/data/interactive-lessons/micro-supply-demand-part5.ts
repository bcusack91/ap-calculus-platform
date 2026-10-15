export const microSupplyDemandPart5Data = {
  topicSlug: 'micro-supply-demand',
  sections: [
    {
      id: 'microsup5-intro',
      type: 'text' as const,
      content: `
# 📈 Supply & Demand

**Part 5 of 7 — Traps, Nuance, and Common Misconceptions**

---

| Section |
|---------|
| 📖 The Circular-Reasoning Trap |
| Related Goods: Consumption vs. Production |
| Normal vs. Inferior Depends on Context |
| Expectations, Ceteris Paribus, and Taxes |

> 🔑 **Key Concept:** Most wrong answers on supply and demand come from a short list of predictable mistakes. Each one mixes up a **shift** with a **movement**, or a **buyer** determinant with a **seller** determinant. Learn the list and you can spot the trap in the answer choices.
`
    },
    {
      id: 'microsup5-circular',
      type: 'text' as const,
      content: `
## 📖 The Circular-Reasoning Trap

### Trap 1: "The price rose, so demand fell."
**Wrong.** A higher price for a good lowers **quantity demanded**, a movement along the demand curve. Demand itself shifts only when a determinant changes.

### Trap 2: "Demand rose, which raised the price, which increased supply."
**Wrong.** The higher price raises **quantity supplied**, a movement up along the existing supply curve. Supply did not shift; sellers simply responded to the new price.

### Why It Matters
If you let the price change shift a curve, you end up with a loop: price changes shift a curve, which changes the price, which shifts the curve again. Economists avoid that loop by keeping the good's **own price on the axis**. Changes in a variable on the axis cause movements; changes in anything off the axis cause shifts.

| Statement | Correct? | Correct wording |
|---|---|---|
| "The frost raised OJ prices, so demand for OJ fell." | ✗ | Supply fell; **quantity demanded** fell. |
| "A fad raised demand for pickleball paddles, so supply rose." | ✗ | Demand rose; **quantity supplied** rose. |
| "Cheaper flights increased the demand for hotel rooms." | ✓ | Flights are a different good (a complement), so hotel demand shifts. |

> 🔑 **AP Connection:** In a single-event FRQ, the answer almost always involves **one** shift and **one** "quantity ___ changes" movement along the other curve. If your explanation shifts both curves, re-read the event.
`
    },
    {
      id: 'microsup5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Concert promoters raise ticket prices for a tour, and fewer tickets are sold. Which statement uses the terms correctly?',
            options: [
              'Quantity demanded fell along an unchanged demand curve',
              'Demand for tickets fell due to the higher price',
              'Supply of tickets rose as promoters charged more',
              'Demand fell and quantity supplied rose equally'
            ],
            correctAnswer: 0,
            explanation: 'The only change is the good\'s own price, so buyers move up along the same demand curve and quantity demanded falls. Saying demand fell treats a price change as a determinant, which is the circular-reasoning trap. A promoter charging more is not a change in supply.'
          },
          {
            question: 'A viral video makes a brand of water bottle popular, and its price rises. A student writes that "supply then increased because the higher price attracted production." The best correction is that:',
            options: [
              'quantity supplied rose along the existing supply curve',
              'supply decreased because sellers ran short of inventory',
              'demand decreased once the price climbed above its old level',
              'supply and demand both shifted right by equal amounts'
            ],
            correctAnswer: 0,
            explanation: 'The viral video shifted demand right. The resulting higher price moved sellers up along their unchanged supply curve, so quantity supplied rose. A supply shift needs a change in a supply determinant such as costs or the number of sellers.'
          }
        ]
      }
    },
    {
      id: 'microsup5-related',
      type: 'text' as const,
      content: `
## 📖 Related Goods: Consumption vs. Production

"Substitutes" and "complements" mean different things depending on whether you are talking about **buyers** or **sellers**.

| Relationship | Example | Event | Shift |
|---|---|---|---|
| **Substitutes in consumption** | Coffee and tea | Coffee price rises | **Demand** for tea rises |
| **Complements in consumption** | Printers and ink | Printer price falls | **Demand** for ink rises |
| **Substitutes in production** | Corn and wheat on the same farm | Corn price rises | **Supply** of wheat falls |
| **Complements in production** | Beef and leather from the same cattle | Beef price rises | **Supply** of leather rises |

### How to Decide
Ask **who** connects the two goods.
- If **buyers** choose between them or use them together, the event shifts **demand**.
- If **sellers** make them with the same resources or in the same process, the event shifts **supply**.

### Normal vs. Inferior Depends on Context
"Inferior" has nothing to do with quality. It means buyers purchase less as their income rises. Bus rides are inferior for many commuters who switch to cars as income rises, but normal for a city resident who rides more as she can afford to go out more. On the AP exam, the question will tell you the type or give enough data (an income elasticity) to decide.
`
    },
    {
      id: 'microsup5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Who Connects the Goods?** 🔍

Choose the curve that shifts in the market named in each event.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Price of gasoline rises → market for diesel, made from the same crude oil: ___ shifts',
            options: ['supply of diesel', 'demand for diesel', 'supply of crude', 'demand for crude']
          },
          {
            label: 'Price of peanut butter rises → market for jelly: ___ shifts',
            options: ['demand for jelly', 'supply of jelly', 'demand for peanuts', 'supply of peanuts']
          },
          {
            label: 'Price of cotton rises → market for wool, if ranchers can switch land to cotton: ___ shifts',
            options: ['supply of wool', 'demand for wool', 'supply of cotton', 'demand for cotton']
          }
        ],
        correctAnswers: ['supply of diesel', 'demand for jelly', 'supply of wool'],
        hint1: 'Refiners produce gasoline and diesel from the same barrels. Who links them?',
        hint2: 'Buyers eat peanut butter and jelly together.',
        hint3: 'The land can grow cotton or graze sheep, so the link is on the seller side.',
        explanation: 'Gasoline and diesel are joint products, so a higher gasoline price leads refiners to process more crude and supply more diesel. Peanut butter and jelly are complements in consumption, so jelly demand falls. Cotton and wool compete for the same land, so wool supply falls.'
      }
    },
    {
      id: 'microsup5-expectations',
      type: 'text' as const,
      content: `
## 📖 Expectations, Ceteris Paribus, and Taxes

### Expectations Run Both Ways
| Who expects a higher future price? | Response now | Effect on current price |
|---|---|---|
| Buyers | Buy more now, before the increase | Demand right → price ↑ |
| Sellers of a storable good | Hold back output to sell later | Supply left → price ↑ |

Both responses push today's price up, which is why expected price increases tend to be **self-fulfilling**.

### Ceteris Paribus Is a Tool, Not a Claim
Every demand or supply curve holds all other determinants constant. That does not mean the world stands still. It means we change **one** thing at a time so we can see its effect. When two things change at once, analyze each shift separately and then combine them, which is the double-shift method in the equilibrium topic.

### Taxes and Costs: Which Curve?
- A **per-unit tax collected from sellers** works like a cost increase: **supply** shifts left (up by the amount of the tax).
- A **per-unit subsidy paid to producers** works like a cost cut: **supply** shifts right (down by the subsidy).
- A **tax on a substitute or complement** shifts the **demand** for this good, because it changes the price of a related good.

> 🔑 **AP Connection:** Advertising is a classic trap. A successful ad campaign changes **tastes**, so it shifts **demand**, even though the firm paid for it. The cost of the ads does not shift supply in AP questions unless the prompt says the cost changed production costs per unit.
`
    },
    {
      id: 'microsup5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The government places a new tax on sugary soda. Ceteris paribus, what happens in the market for bottled water, a substitute?',
            options: [
              'Demand for water rises, raising its price and quantity',
              'Supply of water falls, raising its price and lowering quantity',
              'Water demand falls as buyers cut back on all drinks',
              'Water\'s market is unchanged since only soda is taxed'
            ],
            correctAnswer: 0,
            explanation: 'The tax raises the price buyers pay for soda, the price of a substitute. Some buyers switch to water, so water demand shifts right and its price and quantity rise. Water sellers\' costs are unaffected by a tax on soda.'
          },
          {
            question: 'Both buyers and sellers of copper come to expect copper prices to jump next quarter. What happens to the current price of copper?',
            options: [
              'It rises',
              'It falls',
              'It is unchanged',
              'It is indeterminate'
            ],
            correctAnswer: 0,
            explanation: 'Buyers increase current demand to beat the rise, and sellers of a storable metal decrease current supply to sell later. Both shifts push the current price up, so it rises. Only the effect on quantity would be uncertain.'
          },
          {
            question: 'As her income rises, a student buys fewer instant noodles and more restaurant meals. For her, instant noodles are:',
            options: [
              'an inferior good',
              'a normal good',
              'a complement of restaurant meals',
              'a good with perfectly inelastic demand'
            ],
            correctAnswer: 0,
            explanation: 'A good is inferior when demand falls as income rises, which is exactly her pattern. A normal good would see more purchases, and nothing here links noodles and restaurant meals as goods used together.'
          }
        ]
      }
    }
  ]
};
