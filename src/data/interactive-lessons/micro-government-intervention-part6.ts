export const microGovernmentInterventionPart6Data = {
  topicSlug: 'micro-government-intervention',
  sections: [
    {
      id: 'microgov6-intro',
      type: 'text' as const,
      content: `
# 💰 Government Intervention in Markets

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Intervention Is Tested |
| FRQ Practice 1: A Price Ceiling |
| FRQ Practice 2: An Excise Tax |
| FRQ Practice 3: A Tariff |

> 🔑 **Key Concept:** Government intervention shows up on almost every AP Microeconomics exam, in multiple-choice questions and as parts of free-response questions. Most points come from a **correctly labeled graph**, a **calculation with the setup shown**, and an explanation that names the **direction of change** with a reason.
`
    },
    {
      id: 'microgov6-tested',
      type: 'text' as const,
      content: `
## 📖 How Intervention Is Tested

### Graph Labels That Earn Points

| Policy | What the graph must show |
|---|---|
| Binding price ceiling | A horizontal line **below** equilibrium, labeled; $Q_d$ and $Q_s$ marked at the ceiling; shortage = the gap |
| Binding price floor | A horizontal line **above** equilibrium, labeled; surplus = the gap |
| Per-unit tax on sellers | A new supply curve shifted **up** (left), labeled; $P_c$, $P_s$ and the new quantity |
| Per-unit subsidy to sellers | A new supply curve shifted **down** (right); new buyer price below the old one |
| Tariff | A horizontal line at $P_w$ and a higher one at $P_w + t$; imports before and after |

### Common Prompts

| Prompt wording | What to write |
|---|---|
| "Identify the quantity traded" | The **short side**: $Q_s$ under a ceiling, $Q_d$ under a floor |
| "Calculate the tax revenue" | Tax per unit × **new** quantity |
| "Shade the deadweight loss" | The triangle between D and the **original** S, between the new and old quantities |
| "Will consumer surplus increase, decrease or stay the same?" | Give the direction **and** the reason (price and quantity changes) |
| "Who bears more of the tax?" | The **more inelastic** side; support it with the price changes |

> 🔑 **AP Connection:** When an FRQ gives a graph with numbers, use the graph's numbers. Write the setup, such as "½ × (100 − 70) × (32.50 − 20)," so a small arithmetic slip can still earn partial credit.
`
    },
    {
      id: 'microgov6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice 1: A Price Ceiling

**Prompt.** In the competitive market for bread, $Q_d = 200 - 4P$ and $Q_s = 6P - 50$, where $P$ is in dollars.

**(a)** Calculate the equilibrium price and quantity.

**(b)** The government sets a maximum price of \\$20. Is the ceiling binding? Calculate the shortage or surplus.

**(c)** Calculate the deadweight loss created by the ceiling.

**(d)** Will consumer surplus increase, decrease or stay the same? Show your calculation.

### Model Answers

**(a)** $200 - 4P = 6P - 50$, so $10P = 250$: **P = \\$25, Q = 100**.

**(b)** **Binding**, because \\$20 is below \\$25. $Q_d = 200 - 80 = 120$ and $Q_s = 120 - 50 = 70$, so there is a **shortage of 50**, and **70** loaves are traded.

**(c)** At Q = 70, buyers would pay $(200 - 70) / 4 = \\$32.50$; sellers need \\$20. DWL = ½ × (100 − 70) × (32.50 − 20) = **\\$187.50**.

**(d)** Demand meets the price axis at \\$50.
- Before: CS = ½ × 100 × (50 − 25) = \\$1,250.
- After: trapezoid from 0 to 70 with heights 50 − 20 = 30 and 32.50 − 20 = 12.50: ½ × (30 + 12.50) × 70 = \\$1,487.50.
- Consumer surplus **increases** by \\$237.50: buyers gain \\$5 × 70 = \\$350 on units still sold but lose a \\$112.50 triangle on units no longer sold.

### Scoring Notes
- In (b), "binding" needs the reason (ceiling below equilibrium), and the shortage needs both quantities.
- In (d), a direction with no calculation would not earn the point, because the change depends on the numbers.
`
    },
    {
      id: 'microgov6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Exam-Style Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In FRQ 1, the government instead sets a maximum price of \\$30 on bread. Which statement is correct?',
            options: [
              'The ceiling has no effect',
              'A shortage of 30 loaves appears',
              'Only 70 loaves are traded at \\$30',
              'A surplus of 50 loaves appears at \\$30'
            ],
            correctAnswer: 0,
            explanation: 'The equilibrium price is \\$25, which is below \\$30, so the market can clear as usual and the maximum price never binds. Shortages arise only when a ceiling sits below equilibrium.'
          },
          {
            question: 'A student shades the deadweight loss from the bread ceiling. Which description matches the correct region?',
            options: [
              'The triangle between demand and supply from 70 to 100 loaves',
              'The rectangle between \\$20 and \\$25 from zero up to 70 loaves',
              'The gap between quantity demanded and quantity supplied at \\$20',
              'The triangle between demand and supply from 100 to 120 loaves'
            ],
            correctAnswer: 0,
            explanation: 'The lost trades are loaves 71 through 100, which buyers value above sellers\' costs but which are no longer exchanged. The rectangle is a transfer from sellers to buyers, and the horizontal gap at \\$20 is the shortage, not a surplus area.'
          },
          {
            question: 'A binding price floor is set in the market for wheat, and the government does not buy the surplus. How does the floor affect producer surplus?',
            options: [
              'It may rise or fall',
              'It must rise',
              'It must fall',
              'It stays the same'
            ],
            correctAnswer: 0,
            explanation: 'Sellers gain a higher price on the units still sold but lose the surplus on units no longer sold, so the net effect depends on the slopes and the floor. In the Part 2 example it rose, but that is not guaranteed, and it does change even though the supply curve has not shifted.'
          }
        ]
      }
    },
    {
      id: 'microgov6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice 2: An Excise Tax

**Prompt.** The market for phone chargers is in equilibrium at a price of \\$10 and a quantity of 500. The government places a **\\$4 per-unit tax** on sellers. After the tax, buyers pay \\$13, sellers keep \\$9, and 420 chargers are sold.

**(a)** Draw a correctly labeled graph of the market showing the tax.

**(b)** Calculate the tax revenue.

**(c)** Calculate the share of the tax revenue paid by buyers.

**(d)** Calculate the deadweight loss.

**(e)** Is demand more or less elastic than supply over this range? Explain.

### Model Answers

**(a)** Axes "Price" and "Quantity"; downward-sloping D and upward-sloping S₁ crossing at \\$10 and 500; S₂ shifted up by \\$4, crossing D at \\$13 and 420; \\$9 marked on S₁ directly below that point.

**(b)** Revenue = \\$4 × 420 = **\\$1,680**.

**(c)** Buyers pay \\$13 − \\$10 = \\$3 more per unit: \\$3 × 420 = **\\$1,260**. Sellers bear \\$1 × 420 = \\$420.

**(d)** DWL = ½ × (500 − 420) × \\$4 = **\\$160**.

**(e)** **Less elastic.** Buyers bear \\$3 of the \\$4 tax, and the side that bears more of a tax is the side that responds less to price.

### Scoring Notes
- In (a), the graph needs the shifted supply curve **and** both prices on the vertical axis.
- In (e), an answer that only says "buyers pay more" without connecting it to elasticity would miss the explanation point.
`
    },
    {
      id: 'microgov6-input',
      type: 'input-boxes' as const,
      content: `
**Charger Market Follow-Up** ✍️

In FRQ 2, the government raises the tax on chargers from \\$4 to \\$8. After the change, buyers pay \\$16, sellers keep \\$8, and 340 chargers are sold.

1) New tax revenue, in dollars?

2) Revenue paid by sellers, in dollars?

3) New deadweight loss, in dollars?

Enter numbers only, without commas.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2720', '680', '640'],
        hint1: 'Tax per unit × new quantity.',
        hint2: 'Sellers keep \\$8 instead of \\$10, so they bear \\$2 per unit.',
        hint3: '½ × (500 − 340) × \\$8.',
        explanation: '1) \\$8 × 340 = \\$2,720. 2) Sellers bear (\\$10 − \\$8) × 340 = \\$680, and buyers bear \\$6 × 340 = \\$2,040. 3) DWL = ½ × 160 × 8 = \\$640, four times the \\$160 from the \\$4 tax.'
      }
    },
    {
      id: 'microgov6-frq3',
      type: 'text' as const,
      content: `
## FRQ Practice 3: A Tariff

**Prompt.** Lumeria is a small country that trades sugar at a world price of \\$60 per ton. Its domestic market:

| Price per ton | Quantity demanded | Quantity supplied |
|---|---|---|
| \\$60 | 1,000 | 400 |
| \\$70 | 900 | 500 |
| \\$80 | 800 | 600 |
| \\$90 | 700 | 700 |

**(a)** Identify the price and quantity Lumeria would have with no trade.

**(b)** Under free trade, calculate sugar imports.

**(c)** Lumeria imposes a \\$10-per-ton tariff. Calculate imports and tariff revenue.

**(d)** Calculate the deadweight loss from the tariff.

**(e)** Identify one group that gains and one group that loses from the tariff.

### Model Answers

**(a)** Autarky is where quantity demanded equals quantity supplied: **\\$90 and 700 tons**.

**(b)** At \\$60: imports = 1,000 − 400 = **600 tons**.

**(c)** The domestic price becomes \\$70: imports = 900 − 500 = **400 tons**; revenue = \\$10 × 400 = **\\$4,000**.

**(d)** Production triangle ½ × (500 − 400) × 10 = \\$500, plus consumption triangle ½ × (1,000 − 900) × 10 = \\$500: **\\$1,000**.

**(e)** **Domestic sugar producers gain** (higher price, more tons sold); **domestic sugar buyers lose** (higher price, fewer tons bought). The government also gains revenue.

### Scoring Notes
- In (c), revenue uses **imports after the tariff** (400), not imports before it (600) and not total consumption (900).
- In (d), include both triangles; one triangle alone gives only half the deadweight loss.
`
    },
    {
      id: 'microgov6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Exam-Style Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In FRQ 3, Lumeria raises its tariff from \\$10 to \\$30 per ton. What happens to tariff revenue?',
            options: [
              'It falls to zero',
              'It triples to \\$12,000',
              'It doubles to \\$8,000',
              'It stays at \\$4,000'
            ],
            correctAnswer: 0,
            explanation: 'A \\$30 tariff raises the domestic price to \\$90, the autarky price, where domestic producers supply all 700 tons demanded. With no imports, no tariff is collected; a tariff this high is called prohibitive.'
          },
          {
            question: 'In FRQ 3, by how much does the producer surplus of Lumeria\'s sugar growers rise because of the \\$10 tariff?',
            options: [
              '\\$4,500',
              '\\$5,000',
              '\\$4,000',
              '\\$9,500'
            ],
            correctAnswer: 0,
            explanation: 'Producer surplus gains the trapezoid between \\$60 and \\$70 out to domestic supply: ½ × (400 + 500) × \\$10 = \\$4,500. The \\$9,500 figure is the loss in consumer surplus, and \\$4,000 is the tariff revenue.'
          },
          {
            question: 'Which statement about the \\$10 tariff in FRQ 3 is correct?',
            options: [
              'Buyers lose more than producers and the government gain together',
              'Producers gain more than buyers lose, so the country is better off',
              'The government collects \\$10 on each of the 900 tons consumed',
              'The tariff raises the world price of sugar from \\$60 to \\$70 a ton'
            ],
            correctAnswer: 0,
            explanation: 'Buyers lose \\$9,500, while producers gain \\$4,500 and the government collects \\$4,000; the missing \\$1,000 is deadweight loss. The tariff is collected only on the 400 imported tons, and a small country cannot change the world price.'
          }
        ]
      }
    }
  ]
};
