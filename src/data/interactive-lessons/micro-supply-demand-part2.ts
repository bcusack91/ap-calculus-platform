export const microSupplyDemandPart2Data = {
  topicSlug: 'micro-supply-demand',
  sections: [
    {
      id: 'microsup2-intro',
      type: 'text' as const,
      content: `
# 📈 Supply & Demand

**Part 2 of 7 — Demand in Depth: Schedules, Market Demand, and Equations**

---

| Section |
|---------|
| 📖 From Demand Schedule to Market Demand |
| Why the Demand Curve Slopes Down |
| Linear Demand Equations |
| The Schedule Test: Shift or Movement? |

> 🔑 **Key Concept:** A demand curve is just a **demand schedule** drawn as a graph. Market demand is built by **adding the quantities** each buyer wants at each price. Once you can read a schedule or an equation, telling a shift from a movement becomes mechanical.
`
    },
    {
      id: 'microsup2-schedule',
      type: 'text' as const,
      content: `
## 📖 From Demand Schedule to Market Demand

A **demand schedule** lists the quantity a buyer is willing and able to purchase at each price in a given period, holding everything else constant (*ceteris paribus*). Three students buy cold brew at the campus café each week:

| Price per cup | Ana | Ben | Cara | **Market Qd** |
|---|---|---|---|---|
| \\$5 | 0 | 1 | 2 | **3** |
| \\$4 | 1 | 2 | 3 | **6** |
| \\$3 | 2 | 3 | 4 | **9** |
| \\$2 | 3 | 4 | 5 | **12** |
| \\$1 | 4 | 5 | 6 | **15** |

### Horizontal Summation
**Market demand** is the sum of individual quantities demanded **at each price**. On a graph, you slide horizontally across each buyer's curve at a given price and add the quantities, which is why it is called *horizontal summation*.

- At \\$3: 2 + 3 + 4 = **9 cups**
- You never add prices. At \\$3 the market price is still \\$3, not \\$9.

### Number of Buyers Is a Demand Determinant
If a fourth student who buys 2 cups at every price joins, market quantity demanded rises by 2 **at every price** (5, 8, 11, 14, 17). Every row changes, so the market demand curve **shifts right**. That is the "number of buyers" determinant from Part 1 seen in a table.

> 🔑 **AP Connection:** "Willing **and able**" matters. A student who wants cold brew but has no money is not part of demand. Demand reflects both desire and purchasing power.
`
    },
    {
      id: 'microsup2-why',
      type: 'text' as const,
      content: `
## 📖 Why the Demand Curve Slopes Down

Part 1 named three reasons for the law of demand. Here is how each works when the price of cold brew falls from \\$4 to \\$2.

| Reason | What happens when cold brew falls from \\$4 to \\$2 |
|---|---|
| **Substitution effect** | Cold brew is now cheaper **relative to** tea and energy drinks, so buyers swap some of those for cold brew. |
| **Income effect** | A weekly coffee budget of \\$8 used to buy 2 cups and now buys 4. Real purchasing power rose, so buyers can afford more. |
| **Diminishing marginal utility** | Each extra cup adds less satisfaction, so a buyer only takes another cup when the price falls to match its lower marginal benefit. |

### Reading the Curve Two Ways
- **Horizontally:** at a price of \\$3, the market wants 9 cups.
- **Vertically:** the 9th cup is worth exactly \\$3 to the buyer who values it least among those 9. The height of the demand curve at any quantity is the **marginal benefit** of that unit.

That vertical reading is why demand is the **MB curve** in later units, and why consumer surplus is the area under demand and above price.

> 🔑 **AP Connection:** The substitution and income effects explain movements **along** the demand curve. They are reactions to the good's **own** price, so they never shift the curve.
`
    },
    {
      id: 'microsup2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An economist has each buyer\'s demand schedule for a good and wants the market demand curve. She should:',
            options: [
              'Add the quantities each buyer wants at each price',
              'Total the prices each buyer would pay for each quantity',
              'Average the quantities each buyer wants at each price',
              'Multiply each buyer\'s quantity by the matching price'
            ],
            correctAnswer: 0,
            explanation: 'Market demand is a horizontal summation: at each price, add the quantities all buyers want. Adding or averaging prices does not give a demand curve, and multiplying price by quantity gives spending, not quantity demanded.'
          },
          {
            question: 'When bus fares rise, a commuter rides less, partly because her fixed monthly travel budget now pays for fewer trips in total. That part of her response is the:',
            options: [
              'income effect of the fare increase',
              'substitution effect of the fare increase',
              'decrease in demand caused by the higher fare',
              'shift in her tastes away from bus travel'
            ],
            correctAnswer: 0,
            explanation: 'The income effect is the change in quantity demanded caused by the change in real purchasing power: the same budget buys fewer trips. The substitution effect would be switching to cheaper alternatives such as biking, and a fare change moves her along her demand curve rather than shifting demand or her tastes.'
          }
        ]
      }
    },
    {
      id: 'microsup2-equation',
      type: 'text' as const,
      content: `
## 📖 Linear Demand Equations

The café's market schedule fits a straight line:

$$Q_d = 18 - 3P$$

Check it: at $P = 5$, $Q_d = 18 - 15 = 3$ ✓. At $P = 1$, $Q_d = 18 - 3 = 15$ ✓.

### Reading the Pieces

| Piece | Value here | Meaning |
|---|---|---|
| Quantity intercept ($P = 0$) | 18 cups | How many cups buyers would take if cold brew were free |
| Price intercept ($Q_d = 0$) | \\$6 | The "choke price": no one buys at \\$6 or more |
| Coefficient on $P$ | −3 | Each \\$1 price rise cuts quantity demanded by 3 cups |

Solving for $P$ gives the form you graph with price on the vertical axis: $P = 6 - \\tfrac{1}{3}Q$. The slope on the graph is $-\\tfrac{1}{3}$ (\\$1 of price per 3 cups).

### Worked Example: A Determinant Changes
A new dorm opens next to the café and quantity demanded rises by 6 cups at **every** price.

1. New equation: $Q_d = 24 - 3P$. Only the intercept changed; the curve shifts right in parallel.
2. At \\$3, quantity demanded goes from 9 to 15 cups.
3. The choke price rises from \\$6 to \\$8, so the curve is also **higher** at every quantity.

A change in the good's own price changes only the value you plug in for $P$. A determinant changes the **equation itself**.
`
    },
    {
      id: 'microsup2-input',
      type: 'input-boxes' as const,
      content: `
**Work the Demand Equation** ✍️

The original market demand is $Q_d = 18 - 3P$.

1) How many cups are demanded at a price of \\$4?

2) A drop in the price of tea (a substitute) cuts quantity demanded by 3 cups at every price. What is the new quantity demanded at \\$4?

3) After that change, what is the new choke price in dollars (the price at which quantity demanded is zero)?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '3', '5'],
        hint1: 'Plug in P = 4: 18 − 3(4).',
        hint2: 'The new equation is Qd = 15 − 3P. Plug in P = 4.',
        hint3: 'Set 15 − 3P = 0 and solve for P.',
        explanation: '1) 18 − 12 = 6 cups. 2) The new demand is Qd = 15 − 3P, so at \\$4 it is 15 − 12 = 3 cups. 3) 15 − 3P = 0 gives P = 5, so the choke price falls from \\$6 to \\$5: demand shifted left.'
      }
    },
    {
      id: 'microsup2-schedule-test',
      type: 'text' as const,
      content: `
## 📖 The Schedule Test: Shift or Movement?

Compare the "before" and "after" schedules. The question is simple: **did one row change or did every row change?**

| Price | Original Qd | After the café raises its price from \\$3 to \\$4 | After buyers' incomes rise (normal good) |
|---|---|---|---|
| \\$4 | 6 | 6 ← buyers move here | 9 |
| \\$3 | 9 | 9 | 12 |
| \\$2 | 12 | 12 | 15 |

- **Middle column:** the schedule is unchanged. Buyers simply move from the \\$3 row to the \\$4 row, and quantity demanded falls from 9 to 6. This is a **decrease in quantity demanded**, a movement up along the same curve.
- **Right column:** every row has a larger quantity. This is an **increase in demand**, a rightward shift of the whole curve.

### Two Ways to Describe the Same Shift
A rightward shift also means buyers will pay **more for each quantity**. In the right column, buyers now take 9 cups at \\$4, where before they took 9 cups only at \\$3. "Right" and "up" describe the same increase in demand.

> 🔑 **AP Connection:** In free-response answers, use the exact phrases. "Demand increases" means the curve shifts. "Quantity demanded increases" means a movement along the curve. Mixing them costs points.
`
    },
    {
      id: 'microsup2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Last month buyers took 9 cups at \\$3 and 12 cups at \\$2. This month they take 12 cups at \\$3 and 15 cups at \\$2. Which describes the change?',
            options: [
              'An increase in demand',
              'An increase in quantity demanded',
              'An increase in supply',
              'An increase in quantity supplied'
            ],
            correctAnswer: 0,
            explanation: 'Quantity rose at every listed price, so the whole schedule changed: demand increased and the curve shifted right. An increase in quantity demanded would be a move to a different row of an unchanged schedule, and these are buyers\' schedules, not sellers\'.'
          },
          {
            question: 'A good\'s market demand changes from $Q_d = 18 - 3P$ to $Q_d = 12 - 3P$. If the good is normal, which event could explain this?',
            options: [
              'A fall in buyers\' incomes',
              'A rise in buyers\' incomes',
              'A rise in the good\'s own price',
              'A rise in the price of a substitute'
            ],
            correctAnswer: 0,
            explanation: 'The intercept fell, so demand decreased at every price. For a normal good, lower incomes reduce demand. Higher incomes or a pricier substitute would increase demand, and a change in the good\'s own price only moves along the curve without changing the equation.'
          },
          {
            question: 'At a price of \\$3, market demand for cold brew is 9 cups. What does the height of the demand curve at the 9th cup tell you?',
            options: [
              'The marginal benefit of the 9th cup is \\$3',
              'The total benefit of all 9 cups is \\$3',
              'The cost of producing the 9th cup is \\$3',
              'The average benefit of all 9 cups is \\$3'
            ],
            correctAnswer: 0,
            explanation: 'Read vertically, the demand curve shows the most a buyer will pay for each unit, which is that unit\'s marginal benefit. Total benefit is the whole area under the curve, average benefit is higher than \\$3 for a downward-sloping curve, and production cost comes from supply.'
          }
        ]
      }
    }
  ]
};
