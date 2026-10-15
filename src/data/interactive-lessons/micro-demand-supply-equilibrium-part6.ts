export const microDemandSupplyEquilibriumPart6Data = {
  topicSlug: 'micro-demand-supply-equilibrium',
  sections: [
    {
      id: 'microdem6-intro',
      type: 'text' as const,
      content: `
# ⚖️ Market Equilibrium & Applications

**Part 6 of 7 — AP Exam Practice: A Full Equilibrium FRQ**

---

| Section |
|---------|
| 📖 The Prompt |
| Model Answer, Part by Part |
| Practice Set |
| Scoring Checklist |

> 🔑 **Key Concept:** A typical AP equilibrium question chains four skills: **solve** for equilibrium, **measure** surplus, **diagnose** a price that is not the equilibrium price, and **predict** what a shift or double shift does. This part walks one full question and then gives you a parallel set to try.
`
    },
    {
      id: 'microdem6-prompt',
      type: 'text' as const,
      content: `
## 📖 The Prompt

> **Practice FRQ (AP style).** The market for electric bicycles in a city is perfectly competitive. Demand is $Q_d = 900 - 2P$ and supply is $Q_s = 4P - 300$, where $P$ is in dollars and $Q$ is bikes per month.
> (a) Calculate the equilibrium price and quantity.
> (b) Calculate consumer surplus and producer surplus at equilibrium.
> (c) Suppose sellers set a price of \\$250. Identify whether there is a shortage or a surplus and calculate its size. How many bikes are sold?
> (d) The city builds new protected bike lanes, and at the same time the cost of e-bike batteries falls. What happens to equilibrium price and quantity? Explain.
> (e) Suppose instead that only 400 bikes per month can be sold. Calculate the deadweight loss.
`
    },
    {
      id: 'microdem6-model-ab',
      type: 'text' as const,
      content: `
## 📖 Model Answer: Parts (a) and (b)

**(a)** Set $900 - 2P = 4P - 300$. Then $1200 = 6P$, so $P = \\$200$. Quantity: $900 - 400 = 500$; check $800 - 300 = 500$ ✓.
**Equilibrium: \\$200 and 500 bikes per month.**

**(b)** Find the price intercepts first.
- Demand: $900 - 2P = 0$ gives \\$450.
- Supply: $4P - 300 = 0$ gives \\$75.

$$CS = \\tfrac{1}{2} \\times 500 \\times (450 - 200) = \\$62{,}500$$
$$PS = \\tfrac{1}{2} \\times 500 \\times (200 - 75) = \\$31{,}250$$

Total surplus is \\$93,750. Consumer surplus is larger here because demand is steeper than supply on the graph, so the gap between willingness to pay and price builds faster.
`
    },
    {
      id: 'microdem6-model-cde',
      type: 'text' as const,
      content: `
## 📖 Model Answer: Parts (c), (d) and (e)

**(c)** At \\$250: $Q_d = 900 - 500 = 400$ and $Q_s = 1000 - 300 = 700$. Quantity supplied exceeds quantity demanded, so there is a **surplus of 300 bikes**. Only **400 bikes are sold**, the short side of the market.

**(d)** Bike lanes make riding more attractive, so **demand increases**. Cheaper batteries lower production costs, so **supply increases**. Both shifts raise quantity, so **equilibrium quantity increases**. Demand pushes price up and supply pushes it down, so the **change in price is indeterminate** without knowing the relative sizes of the shifts.

**(e)** At 400 bikes:
- The demand curve is at $P = (900 - 400)/2 = \\$250$.
- The supply curve is at $P = (400 + 300)/4 = \\$175$.

$$DWL = \\tfrac{1}{2} \\times (500 - 400) \\times (250 - 175) = \\$3{,}750$$

| Part | What earns the point |
|---|---|
| (a) | Both P and Q, with work |
| (b) | Correct intercepts and both triangle areas |
| (c) | "Surplus," its size 300, and quantity sold 400 |
| (d) | Q increases **and** P indeterminate, with both shifts named |
| (e) | Correct base (100 bikes) and height (\\$75) in the DWL triangle |

> 🔑 **AP Connection:** In (c), "400 bikes are sold" is a separate point from "a surplus of 300." Students lose it by answering 700, which is what sellers **want** to sell.
`
    },
    {
      id: 'microdem6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In part (d), a student writes: "Price increases and quantity increases because both demand and supply increased." What should the answer say about price?',
            options: [
              'Its change is indeterminate since the shifts push it in opposite directions',
              'It increases because the demand shift always outweighs the supply shift',
              'It decreases because a cost reduction always outweighs a shift in demand',
              'It stays the same because both curves shifted in the same direction'
            ],
            correctAnswer: 0,
            explanation: 'Demand increasing pushes price up while supply increasing pushes it down, and the prompt gives no sizes, so the price change is indeterminate. Price stays the same only if the horizontal shifts happen to be equal, which the prompt does not say.'
          },
          {
            question: 'In the e-bike market, suppose sellers set a price of \\$150 instead. Which statement is correct?',
            options: [
              'A shortage of 300 bikes, with 300 bikes sold',
              'A shortage of 300 bikes, with 600 bikes sold',
              'A surplus of 300 bikes, with 300 bikes sold',
              'A shortage of 600 bikes, with 300 bikes sold'
            ],
            correctAnswer: 0,
            explanation: 'At \\$150, Qd = 900 − 300 = 600 and Qs = 600 − 300 = 300. Buyers want 300 more than sellers offer, a shortage of 300, and only the 300 bikes offered can be sold.'
          }
        ]
      }
    },
    {
      id: 'microdem6-practice',
      type: 'input-boxes' as const,
      content: `
**Practice Set: Your Turn** ✍️

A competitive market for meal kits has $Q_d = 600 - 5P$ and $Q_s = 10P - 300$, with $P$ in dollars and $Q$ in kits per week.

1) Equilibrium price in dollars?

2) Consumer surplus in dollars at equilibrium?

3) If only 200 kits can be sold, what is the deadweight loss in dollars?

Enter numbers only, without commas.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '9000', '1500'],
        hint1: 'Set 600 − 5P = 10P − 300.',
        hint2: 'Quantity is 300 and demand meets the price axis at \\$120. Use ½ × base × height.',
        hint3: 'At 200 kits, demand is at (600 − 200)/5 and supply is at (200 + 300)/10. The base is 300 − 200.',
        explanation: '1) 900 = 15P, so P = \\$60 and Q = 300. 2) CS = ½ × 300 × (120 − 60) = \\$9,000. 3) At 200 kits, demand is at \\$80 and supply is at \\$50, so DWL = ½ × 100 × \\$30 = \\$1,500.'
      }
    },
    {
      id: 'microdem6-checklist',
      type: 'text' as const,
      content: `
## 📖 Scoring Checklist

| Skill | Habit that protects the point |
|---|---|
| Solving for equilibrium | Check Q in **both** equations |
| Surplus areas | Find **both** price intercepts first; remember the ½ |
| Disequilibrium | State the type (shortage or surplus), the size, **and** the quantity actually sold |
| Single shift | Name the curve, the direction, and the determinant |
| Double shift | Give the determinate variable's direction; call the other indeterminate unless sizes are given |
| Deadweight loss | Base = gap between equilibrium Q and actual Q; height = gap between the demand and supply curves at actual Q |

### Common Arithmetic Traps
- Using the **equilibrium price** instead of the **price intercept** as the top of the CS triangle.
- Forgetting that the DWL height is measured at the **restricted** quantity, not at equilibrium.
- Reporting a dollar answer without the ½ for triangles, which exactly doubles it.
`
    },
    {
      id: 'microdem6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A student computes consumer surplus in the e-bike market as ½ × 500 × 200 = \\$50,000. What mistake did the student make?',
            options: [
              'Used the price as the height instead of the gap up to \\$450',
              'Used the wrong base, since quantity should be 400 bikes',
              'Left out the ½ that belongs in the triangle area formula',
              'Measured the producer surplus triangle by mistake'
            ],
            correctAnswer: 0,
            explanation: 'The height of the consumer surplus triangle is the demand intercept minus the price, \\$450 − \\$200 = \\$250, not the price itself. The base of 500 and the ½ were both right.'
          },
          {
            question: 'In the e-bike market, which change would leave equilibrium price unchanged while raising equilibrium quantity?',
            options: [
              'Demand and supply each increase by 120 bikes at every price',
              'Demand increases by 120 bikes at every price and supply is unchanged',
              'Supply increases by 120 bikes at every price and demand is unchanged',
              'Demand increases by 120 bikes and supply decreases by 120 bikes'
            ],
            correctAnswer: 0,
            explanation: 'If both curves shift right by the same number of bikes at every price, quantity demanded and quantity supplied both rise by 120 at \\$200, so \\$200 still clears the market and quantity rises to 620. A demand increase alone raises price, a supply increase alone lowers it, and shifting the curves in opposite directions raises price.'
          }
        ]
      }
    }
  ]
};
