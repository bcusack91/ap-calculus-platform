export const microSupplyDemandPart7Data = {
  topicSlug: 'micro-supply-demand',
  sections: [
    {
      id: 'microsup7-intro',
      type: 'text' as const,
      content: `
# 📈 Supply & Demand

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture |
| Master Table of Determinants |
| The Shift-or-Movement Checklist |
| Mixed Review |

> 🔑 **Key Concept:** Everything in this topic rests on one distinction. The good's **own price** moves you **along** a curve. Every other influence is a **determinant** that **shifts** a curve, and you can always tell which curve by asking whether it acts on buyers or on sellers.
`
    },
    {
      id: 'microsup7-big-picture',
      type: 'text' as const,
      content: `
## 📖 The Big Picture

| Part | Main idea | Tool you now have |
|---|---|---|
| 1 | Laws of demand and supply; determinants; single shifts | The four shift results |
| 2 | Demand schedules, horizontal summation, demand equations | Reading $Q_d = a - bP$ and spotting a shift in a table |
| 3 | Supply as marginal cost; seller determinants; vertical shifts | Reading $Q_s = c + dP$ and shifting it by a per-unit cost |
| 4 | Turning news into graphs | The four-step method and a correctly labeled graph |
| 5 | The common traps | Shift vs. quantity language; consumption vs. production links |
| 6 | Chains across markets | One shift per market, explained with the determinant |

### One Graph, Two Readings
| Curve | Read across (horizontal) | Read up (vertical) |
|---|---|---|
| Demand | Quantity buyers want at a price | **Marginal benefit** of that unit |
| Supply | Quantity sellers offer at a price | **Marginal cost** of that unit |

That second column is the bridge to the next topic: equilibrium is where the marginal benefit of the last unit equals its marginal cost.
`
    },
    {
      id: 'microsup7-master',
      type: 'text' as const,
      content: `
## 📖 Master Table of Determinants

### Demand Shifters (act on buyers)
| Determinant | Demand increases when… |
|---|---|
| Income, normal good | Income rises |
| Income, inferior good | Income falls |
| Price of a substitute in consumption | Substitute's price rises |
| Price of a complement in consumption | Complement's price falls |
| Tastes and preferences | The good becomes more popular |
| Number of buyers | Population or market size grows |
| Buyer expectations | Buyers expect a higher future price or higher future income |

### Supply Shifters (act on sellers)
| Determinant | Supply increases when… |
|---|---|
| Input prices | Inputs get cheaper |
| Technology | Productivity improves |
| Price of a substitute in production | That other good's price falls |
| Price of a joint product | The joint product's price rises |
| Seller expectations | Sellers expect a lower future price |
| Number of sellers | More firms enter |
| Taxes and subsidies | Per-unit taxes fall or subsidies rise |

### The Shift-or-Movement Checklist
1. Did the **good's own price** change because of something in this market? → **Movement** along the other curve.
2. Did a **determinant** change? → Find the side (buyers or sellers) and **shift** that curve.
3. Did a price change in **another** market? → It is a determinant here (related good or input). Shift the right curve.
4. Use **one** shift per event, and use "quantity demanded" or "quantity supplied" for the response along the other curve.
`
    },
    {
      id: 'microsup7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mixed Review** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which event causes an increase in the quantity supplied of laptops without any shift in laptop supply?',
            options: [
              'A rise in laptop demand that pushes up the laptop price',
              'A fall in the price of the chips used to build laptops',
              'An improvement in laptop assembly technology',
              'The entry of several new laptop manufacturers'
            ],
            correctAnswer: 0,
            explanation: 'When demand rises, the laptop price goes up and sellers move up along their unchanged supply curve, which is an increase in quantity supplied. Cheaper chips, better technology and new firms are supply determinants, so each shifts the supply curve itself.'
          },
          {
            question: 'Market demand is $Q_d = 40 - 2P$. Which change describes an increase in demand?',
            options: [
              'The equation becomes $Q_d = 50 - 2P$',
              'The equation becomes $Q_d = 30 - 2P$',
              'The price falls from \\$10 to \\$8',
              'The price rises from \\$8 to \\$10'
            ],
            correctAnswer: 0,
            explanation: 'Raising the intercept from 40 to 50 means 10 more units are wanted at every price, a rightward shift. Lowering it is a decrease in demand, and a change in the good\'s own price is a movement along the original curve.'
          },
          {
            question: 'Rising wages for farm workers and a successful "eat local" campaign hit the market for local strawberries at the same time. Which curves shift?',
            options: [
              'Supply shifts left and demand shifts right',
              'Supply shifts right and demand shifts right',
              'Supply shifts left and demand shifts left',
              'Only supply shifts, toward the left'
            ],
            correctAnswer: 0,
            explanation: 'Higher wages raise growers\' input costs, decreasing supply. The campaign changes buyers\' tastes, increasing demand. Each event acts on a different side of the market, so each shifts its own curve.'
          }
        ]
      }
    },
    {
      id: 'microsup7-input',
      type: 'input-boxes' as const,
      content: `
**Put It Together** ✍️

In a market, $Q_d = 30 - 2P$ and $Q_s = 3P - 5$.

1) What is quantity demanded at a price of \\$7?

2) What is quantity supplied at a price of \\$7?

3) A \\$1-per-unit subsidy to sellers changes supply to $Q_s = 3(P + 1) - 5$. What is the new quantity supplied at \\$7?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '16', '19'],
        hint1: '30 − 2(7).',
        hint2: '3(7) − 5.',
        hint3: 'Plug in P = 7: 3(8) − 5.',
        explanation: '1) 30 − 14 = 16. 2) 21 − 5 = 16, so \\$7 is the equilibrium price. 3) 3(8) − 5 = 19: the subsidy shifts supply right by 3 units at every price, which creates a surplus at \\$7 until the price falls. The equilibrium topic picks up from here.'
      }
    },
    {
      id: 'microsup7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Check: Name the Change** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Car prices rise, so fewer cars are bought. This is a decrease in ___',
            options: ['quantity demanded', 'demand', 'supply', 'quantity supplied']
          },
          {
            label: 'Engineers find a cheaper way to make car batteries. This is an increase in ___',
            options: ['supply', 'quantity supplied', 'demand', 'quantity demanded']
          },
          {
            label: 'Incomes fall and more people buy used cars. For used cars, this is an increase in ___',
            options: ['demand', 'quantity demanded', 'supply', 'quantity supplied']
          }
        ],
        correctAnswers: ['quantity demanded', 'supply', 'demand'],
        hint1: 'The car\'s own price changed.',
        hint2: 'Lower production costs act on sellers at every price.',
        hint3: 'Income is a determinant; used cars are inferior here.',
        explanation: 'A change in the car\'s own price moves buyers along demand. Cheaper production shifts supply right. A fall in income raises demand for an inferior good such as used cars.'
      }
    }
  ]
};
