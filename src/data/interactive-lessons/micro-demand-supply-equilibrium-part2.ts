export const microDemandSupplyEquilibriumPart2Data = {
  topicSlug: 'micro-demand-supply-equilibrium',
  sections: [
    {
      id: 'microdem2-intro',
      type: 'text' as const,
      content: `
# ⚖️ Market Equilibrium & Applications

**Part 2 of 7 — Solving for Equilibrium and Measuring Disequilibrium**

---

| Section |
|---------|
| 📖 Equilibrium from a Schedule |
| Equilibrium from Equations |
| Shortages, Surpluses, and the Short Side |
| How Prices Restore Equilibrium |

> 🔑 **Key Concept:** Equilibrium is the price at which **quantity demanded equals quantity supplied**. At any other price, the gap between the two is a **shortage** or a **surplus**, and the market trades only the smaller of the two quantities.
`
    },
    {
      id: 'microdem2-schedule',
      type: 'text' as const,
      content: `
## 📖 Equilibrium from a Schedule

Weekly market for band T-shirts at a summer festival:

| Price | Quantity demanded | Quantity supplied | Gap | Market condition |
|---|---|---|---|---|
| \\$4 | 80 | 20 | 60 | Shortage of 60 |
| \\$5 | 70 | 40 | 30 | Shortage of 30 |
| **\\$6** | **60** | **60** | **0** | **Equilibrium** |
| \\$7 | 50 | 80 | 30 | Surplus of 30 |
| \\$8 | 40 | 100 | 60 | Surplus of 60 |

- **Equilibrium price** = \\$6 and **equilibrium quantity** = 60 shirts, because only there do the plans of buyers and sellers match.
- Below \\$6, buyers want more than sellers offer: a **shortage** (excess demand).
- Above \\$6, sellers offer more than buyers want: a **surplus** (excess supply).
- The gap grows the farther the price is from equilibrium, because quantity demanded and quantity supplied move in opposite directions as price changes.

> 🔑 **AP Connection:** A shortage or surplus is a **quantity**, measured horizontally on the graph as the distance between the curves at a given price. "A shortage of 30 shirts" is a complete answer; "the price is too low" is not.
`
    },
    {
      id: 'microdem2-equations',
      type: 'text' as const,
      content: `
## 📖 Equilibrium from Equations

The schedule above comes from these two equations:

$$Q_d = 120 - 10P \\qquad Q_s = 20P - 60$$

### Worked Example: Solve for P and Q
1. Set quantity demanded equal to quantity supplied: $120 - 10P = 20P - 60$.
2. Collect terms: $180 = 30P$, so $P = 6$.
3. Plug back into **either** equation: $Q_d = 120 - 60 = 60$. Check with supply: $Q_s = 120 - 60 = 60$ ✓.

**Equilibrium:** \\$6 and 60 shirts.

### Worked Example: After Demand Increases
The headliner announces a surprise reunion, and demand rises by 30 shirts at every price: $Q_d = 150 - 10P$.

1. $150 - 10P = 20P - 60$, so $210 = 30P$ and $P = 7$.
2. $Q = 150 - 70 = 80$.
3. **New equilibrium:** \\$7 and 80 shirts. Both rose, as a demand increase predicts.
4. At the **old** price of \\$6, the new quantity demanded is 90 while quantity supplied is still 60, so the shift first creates a **shortage of 30**. That shortage is what pushes the price up.

> 🔑 **AP Connection:** Always check your answer in **both** equations. If the two quantities do not match, you made an algebra error.
`
    },
    {
      id: 'microdem2-input',
      type: 'input-boxes' as const,
      content: `
**Solve the Market** ✍️

A local market for fresh bagels has $Q_d = 200 - 20P$ and $Q_s = 30P - 50$.

1) What is the equilibrium price in dollars?

2) What is the equilibrium quantity?

3) If the price were stuck at \\$4, how large would the shortage be?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '100', '50'],
        hint1: 'Set 200 − 20P equal to 30P − 50 and solve for P.',
        hint2: 'Plug your price into either equation, then check with the other.',
        hint3: 'At \\$4, find quantity demanded and quantity supplied, then subtract.',
        explanation: '1) 250 = 50P, so P = \\$5. 2) Q = 200 − 100 = 100 (and 150 − 50 = 100 ✓). 3) At \\$4, Qd = 120 and Qs = 70, a shortage of 50 bagels.'
      }
    },
    {
      id: 'microdem2-short-side',
      type: 'text' as const,
      content: `
## 📖 Shortages, Surpluses, and the Short Side

At a price other than equilibrium, how many shirts are actually **sold**? A trade needs both a buyer and a seller, so the quantity exchanged is the **smaller** of quantity demanded and quantity supplied. This is the **short side** of the market.

| Price | Qd | Qs | Quantity actually sold | Who is left unsatisfied? |
|---|---|---|---|---|
| \\$4 | 80 | 20 | **20** | 60 buyers who want shirts but cannot get them |
| \\$6 | 60 | 60 | **60** | No one |
| \\$8 | 40 | 100 | **40** | Sellers holding 60 unsold shirts |

### Why This Matters
- Equilibrium is the price that **maximizes the quantity traded**. At any other price, fewer shirts change hands than the 60 traded at \\$6.
- That lost trade is the source of **deadweight loss** from Part 1. When a price ceiling or floor holds the price away from equilibrium in the next topic, you will measure the loss using the short-side quantity.

> 🔑 **AP Connection:** A common wrong answer says that at a price below equilibrium "80 shirts are sold." Buyers **want** 80, but sellers offer only 20, so only 20 are sold.
`
    },
    {
      id: 'microdem2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the T-shirt market, the price is held at \\$5, where quantity demanded is 70 and quantity supplied is 40. How many shirts are sold?',
            options: [
              '40 shirts',
              '70 shirts',
              '30 shirts',
              '60 shirts'
            ],
            correctAnswer: 0,
            explanation: 'Each sale needs a willing seller, and sellers offer only 40 at \\$5, so 40 shirts are sold. Seventy is what buyers want, 30 is the size of the shortage, and 60 is the equilibrium quantity that would trade at \\$6.'
          },
          {
            question: 'At the current price in a market, quantity supplied exceeds quantity demanded by 500 units. Which statement is correct?',
            options: [
              'A surplus, with price above equilibrium',
              'A shortage, with the price above equilibrium',
              'A surplus, with the price below equilibrium',
              'A shortage, with the price below equilibrium'
            ],
            correctAnswer: 0,
            explanation: 'Excess supply is a surplus, and it occurs only when price is above equilibrium, where sellers want to sell more than buyers want to buy. A shortage is the reverse case of excess demand at a price below equilibrium.'
          }
        ]
      }
    },
    {
      id: 'microdem2-adjust',
      type: 'text' as const,
      content: `
## 📖 How Prices Restore Equilibrium

### From a Shortage
1. At \\$4, 60 buyers leave empty-handed. Some offer to pay more; sellers see shirts selling out and raise prices.
2. As the price rises, **quantity demanded falls** (movement up along D) and **quantity supplied rises** (movement up along S).
3. The shortage shrinks until the price reaches \\$6, where it disappears.

### From a Surplus
1. At \\$8, sellers are stuck with 60 unsold shirts and cut prices to move inventory.
2. As the price falls, quantity demanded rises and quantity supplied falls.
3. The surplus shrinks until the price reaches \\$6.

### What the Price Is Doing
| Function of price | What it means here |
|---|---|
| **Rationing** | A higher price decides who gets the scarce shirts: those who value them most |
| **Signaling** | A rising price tells sellers that buyers want more shirts |
| **Incentive** | The higher price rewards sellers for producing the extra units |

Notice that **neither curve shifts** during the adjustment. Only the price changes, and both sides respond by moving along their curves.
`
    },
    {
      id: 'microdem2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A market has a shortage at the current price. As the market moves to equilibrium, what happens?',
            options: [
              'Price rises, quantity demanded falls, and quantity supplied rises',
              'Price rises, demand shifts left, and supply shifts right',
              'Price falls, quantity demanded rises, quantity supplied falls',
              'Price rises, while quantity demanded and supplied stay fixed'
            ],
            correctAnswer: 0,
            explanation: 'A shortage bids the price up. Buyers respond by moving up along demand, so quantity demanded falls, and sellers move up along supply, so quantity supplied rises. The curves themselves do not shift during the adjustment.'
          },
          {
            question: 'Demand for a good changes from $Q_d = 120 - 10P$ to $Q_d = 90 - 10P$, and supply is $Q_s = 20P - 60$. What is the new equilibrium price?',
            options: [
              '\\$5',
              '\\$6',
              '\\$4',
              '\\$7'
            ],
            correctAnswer: 0,
            explanation: 'Set 90 − 10P = 20P − 60, so 150 = 30P and P = \\$5. The quantity is 40. Demand decreased, so the price fell from the original \\$6.'
          }
        ]
      }
    }
  ]
};
