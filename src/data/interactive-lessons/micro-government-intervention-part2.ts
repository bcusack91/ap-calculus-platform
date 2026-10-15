export const microGovernmentInterventionPart2Data = {
  topicSlug: 'micro-government-intervention',
  sections: [
    {
      id: 'microgov2-intro',
      type: 'text' as const,
      content: `
# 💰 Government Intervention in Markets

**Part 2 of 7 — Price Ceilings and Floors with Numbers**

---

| Section |
|---------|
| 📖 Is the Control Binding? |
| Worked Example: A Binding Price Ceiling |
| Worked Example: A Binding Price Floor |
| What the Graph Leaves Out |

> 🔑 **Key Concept:** A price control only matters when it is **binding**: a ceiling **below** equilibrium or a floor **above** it. Then the quantity traded is set by the **short side** of the market, total surplus shrinks, and the lost trades show up as a **deadweight loss** triangle.
`
    },
    {
      id: 'microgov2-binding',
      type: 'text' as const,
      content: `
## 📖 Is the Control Binding?

Throughout this part we use one market for apartments-for-a-month (prices in dollars per unit):

$$Q_d = 120 - 2P \\qquad Q_s = 2P - 20$$

Setting $Q_d = Q_s$: $120 - 2P = 2P - 20$, so $P^* = \\$35$ and $Q^* = 50$. Demand meets the price axis at \\$60 and supply at \\$10, so at equilibrium **CS = PS = ½ × 50 × 25 = \\$625** and total surplus is **\\$1,250**.

### The Binding Test

| Control | Set at | Binding? | Result |
|---|---|---|---|
| Ceiling (maximum price) | \\$45 | No: \\$45 is above \\$35 | Price stays \\$35, quantity 50 |
| Ceiling | \\$25 | **Yes**: below \\$35 | Shortage |
| Floor (minimum price) | \\$30 | No: \\$30 is below \\$35 | Price stays \\$35, quantity 50 |
| Floor | \\$40 | **Yes**: above \\$35 | Surplus |

### The Short-Side Rule

At a controlled price, buyers want $Q_d$ and sellers offer $Q_s$. Nobody can be forced to trade, so the **quantity actually exchanged is the smaller of the two**.

- Binding ceiling: sellers are the short side, so $Q_{traded} = Q_s$.
- Binding floor: buyers are the short side, so $Q_{traded} = Q_d$.

Either way, the quantity traded is **less than** the equilibrium quantity. That is the source of the deadweight loss.

> 🔑 **AP Connection:** "Shortage" and "surplus" are measured as the **horizontal gap** between $Q_d$ and $Q_s$ at the controlled price. They are not the same as the quantity traded, and a shortage is not the same as the deadweight loss.
`
    },
    {
      id: 'microgov2-ceiling',
      type: 'text' as const,
      content: `
## Worked Example: A Binding Price Ceiling

The city caps the price at **\\$25**.

**Step 1: Quantities at the ceiling.** $Q_d = 120 - 50 = 70$ and $Q_s = 50 - 20 = 30$. The shortage is **70 − 30 = 40 units**, and only **30** are traded.

**Step 2: Find the two key prices at Q = 30.**
- Highest price a buyer would pay for the 30th unit (on demand): $30 = 120 - 2P$, so **\\$45**.
- Lowest price a seller would take for the 30th unit (on supply): $30 = 2P - 20$, so **\\$25**.

**Step 3: Producer surplus.** The triangle above supply and below \\$25 out to 30 units: ½ × 30 × (25 − 10) = **\\$225**.

**Step 4: Consumer surplus.** The area under demand and above \\$25 from 0 to 30 units is a trapezoid with heights 60 − 25 = 35 and 45 − 25 = 20: ½ × (35 + 20) × 30 = **\\$825**.

**Step 5: Deadweight loss.** The triangle between demand and supply from 30 to 50 units: ½ × (50 − 30) × (45 − 25) = **\\$200**.

| | Before | After \\$25 ceiling | Change |
|---|---|---|---|
| Price | \\$35 | \\$25 | −\\$10 |
| Quantity traded | 50 | 30 | −20 |
| Consumer surplus | \\$625 | \\$825 | +\\$200 |
| Producer surplus | \\$625 | \\$225 | −\\$400 |
| Deadweight loss | \\$0 | \\$200 | +\\$200 |

Check: 825 + 225 + 200 = 1,250 ✓.

### Reading the Change in Consumer Surplus
Buyers who still get a unit gain the rectangle (35 − 25) × 30 = **\\$300**, taken from sellers. Buyers who lose their unit give up a triangle of ½ × 20 × (45 − 35) = **\\$100**. Net change: +\\$200. With different slopes the lost triangle can be bigger than the rectangle, so a ceiling **does not always** raise consumer surplus.

> 🔑 **AP Connection:** The CS figure assumes the 30 units go to the buyers who value them most. If units are handed out by luck or by waiting in line, some go to low-value buyers and consumer surplus is even smaller.
`
    },
    {
      id: 'microgov2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the apartment market above, the city lowers the ceiling from \\$25 to \\$20. How many units are now traded?',
            options: [
              '20 units',
              '30 units',
              '60 units',
              '80 units'
            ],
            correctAnswer: 0,
            explanation: 'At \\$20, sellers offer Qs = 2(20) − 20 = 20 units and buyers want Qd = 120 − 40 = 80. Sellers are the short side, so only 20 units trade; 80 is the quantity demanded and 60 is the size of the shortage.'
          },
          {
            question: 'Equilibrium rent in a town is \\$1,500 a month. The council passes a rent ceiling of \\$1,800. What is the most likely effect on the rental market?',
            options: [
              'Rents and quantity stay at their current levels',
              'Rents climb toward the \\$1,800 legal maximum',
              'A shortage appears at the \\$1,800 legal rent',
              'Landlords offer fewer units at the same rent'
            ],
            correctAnswer: 0,
            explanation: 'A ceiling above the equilibrium price is not binding: the market can already clear at \\$1,500, which the law allows. Nothing pushes rents up to the cap, and no shortage or supply cut follows.'
          },
          {
            question: 'Why does a binding price ceiling create a deadweight loss?',
            options: [
              'Units that buyers value above their cost are no longer traded',
              'Sellers receive a lower price on all the units that are still sold',
              'Buyers want more units at the ceiling than sellers will supply',
              'The government must spend money to enforce the legal maximum price'
            ],
            correctAnswer: 0,
            explanation: 'Deadweight loss is surplus that disappears because value-creating trades stop: between 30 and 50 units, buyers would pay more than sellers\' costs. The lower price on units still sold is a transfer, and the gap between Qd and Qs measures the shortage, not the lost surplus.'
          }
        ]
      }
    },
    {
      id: 'microgov2-floor',
      type: 'text' as const,
      content: `
## Worked Example: A Binding Price Floor

Now the government sets a minimum price of **\\$40** in the same market.

**Step 1: Quantities at the floor.** $Q_d = 120 - 80 = 40$ and $Q_s = 80 - 20 = 60$. The surplus is **60 − 40 = 20 units**. Buyers are the short side, so **40** units trade.

**Step 2: Key prices at Q = 40.** Buyers would pay up to **\\$40** for the 40th unit (on demand), and sellers would accept as little as **\\$30** for it (on supply).

**Step 3: Areas.**
- CS: ½ × 40 × (60 − 40) = **\\$400** (down from \\$625).
- PS: trapezoid above supply and below \\$40 with heights 40 − 10 = 30 and 40 − 30 = 10: ½ × (30 + 10) × 40 = **\\$800** (up from \\$625).
- DWL: ½ × (50 − 40) × (40 − 30) = **\\$50**.

Check: 400 + 800 + 50 = 1,250 ✓.

### Floors with a Government Purchase Program
Agricultural price supports often add a promise: the government **buys the unsold surplus** at the floor price. Then all 60 units are produced and sold, and taxpayers pay \\$40 × 20 = **\\$800** for units that nobody in the market wanted at that price. Producers gain more, but the extra 10 units beyond equilibrium cost more to make than buyers value them, so the inefficiency grows.

### The Minimum Wage as a Price Floor
In a labor market, **firms are the buyers** (labor demand) and **workers are the sellers** (labor supply). A minimum wage above the equilibrium wage is a binding floor:

| At the minimum wage | Meaning |
|---|---|
| Quantity of labor supplied | Workers who want jobs at that wage |
| Quantity of labor demanded | Jobs firms offer, which is the employment level |
| Surplus of labor | Unemployment created by the floor |

> 🔑 **AP Connection:** In a competitive labor market, a binding minimum wage raises the wage for workers who keep their jobs and lowers employment. The labor-market topics later in the course show why the result can differ when one employer dominates the market.
`
    },
    {
      id: 'microgov2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate the Floor's Effects** ✍️

Use the same market: $Q_d = 120 - 2P$ and $Q_s = 2P - 20$. The government sets a price floor of **\\$45** and does **not** buy any surplus.

1) How many units are traded?

2) How large is the surplus (in units)?

3) What is the deadweight loss in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '40', '200'],
        hint1: 'Find Qd at \\$45. Buyers are the short side of a binding floor.',
        hint2: 'Find Qs at \\$45 and subtract Qd.',
        hint3: 'At Q = 30, buyers pay up to \\$45 and sellers accept \\$25. DWL = ½ × (50 − 30) × (45 − 25).',
        explanation: '1) Qd = 120 − 90 = 30, and the short side sets the quantity traded. 2) Qs = 90 − 20 = 70, so the surplus is 70 − 30 = 40 units. 3) DWL = ½ × 20 × 20 = \\$200.'
      }
    },
    {
      id: 'microgov2-beyond',
      type: 'text' as const,
      content: `
## What the Graph Leaves Out

A supply-and-demand graph shows quantities and surplus areas. It does not show **how** the market copes when price is not allowed to clear it.

### Non-Price Rationing under a Ceiling
When price cannot rise, something else decides who gets the good:

| Rationing method | Example | Hidden cost |
|---|---|---|
| Waiting in line | Gas lines during the 1970s U.S. price controls | Time spent waiting |
| Black markets | Illegal resale of rent-controlled leases | Legal risk; price above the ceiling |
| Lower quality | Landlords cut repairs on capped apartments | Worse product for the same price |
| Favoritism | Units go to friends or relatives of sellers | Goods miss the highest-value buyers |

### Time Makes Ceilings Worse
Supply is usually **more elastic in the long run**. Owners convert rent-controlled buildings to condos and builders put up fewer new rentals, so $Q_s$ at the ceiling falls further and the shortage grows over the years.

### Floors and Wasted Effort
Under a floor, sellers cannot win buyers with a lower price, so they compete in other ways: extra services, advertising, or simply waiting for customers. Producers who cannot sell at the floor are left holding unsold goods.

> 🔑 **AP Connection:** Exam questions often ask for "a likely consequence" of rent control or a minimum wage. Good answers name a **quantity** effect (shortage, unemployment, surplus) and, when asked, a **non-price** effect such as lines, black markets or lower quality.
`
    },
    {
      id: 'microgov2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A state sets a minimum price for milk above the equilibrium price and agrees to buy all unsold milk. Compared with the floor alone, the purchase program',
            options: [
              'raises the quantity of milk produced and adds a cost for taxpayers',
              'eliminates the surplus of milk and so removes the deadweight loss',
              'lowers the price paid by buyers of milk to the original equilibrium',
              'leaves milk output unchanged but lets the state resell it for profit'
            ],
            correctAnswer: 0,
            explanation: 'With guaranteed purchases, farmers produce the full quantity supplied at the floor, and the state pays the floor price for the surplus. The surplus still exists, it is simply bought, and producing units whose cost exceeds their value to buyers keeps the market inefficient.'
          },
          {
            question: 'Ten years after a city imposes rent control below the market rent, which change is most consistent with economic theory?',
            options: [
              'The shortage of apartments has grown larger',
              'The apartment shortage has fully disappeared',
              'Market rents have risen up to the legal cap',
              'Landlords have built more rental apartments'
            ],
            correctAnswer: 0,
            explanation: 'Supply is more elastic in the long run, so at the capped rent landlords convert or stop building rentals and quantity supplied falls further. The binding cap keeps rents from rising to clear the market, so the shortage persists and widens.'
          }
        ]
      }
    }
  ]
};
