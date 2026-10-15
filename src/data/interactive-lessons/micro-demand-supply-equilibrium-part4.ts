export const microDemandSupplyEquilibriumPart4Data = {
  topicSlug: 'micro-demand-supply-equilibrium',
  sections: [
    {
      id: 'microdem4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Market Equilibrium & Applications

**Part 4 of 7 — Reading Surplus and Deadweight Loss on a Lettered Graph**

---

| Section |
|---------|
| 📖 The Six-Region Graph |
| When Output Falls Short of Equilibrium |
| When Output Overshoots Equilibrium |
| Efficiency as MB = MC |

> 🔑 **Key Concept:** AP questions often label regions of a graph with letters and ask you to name consumer surplus, producer surplus or deadweight loss as a sum of letters. Learn to build those sums from **three horizontal lines** and the two curves, and every version of the question becomes the same exercise.
`
    },
    {
      id: 'microdem4-regions',
      type: 'text' as const,
      content: `
## 📖 The Six-Region Graph

Use the T-shirt market: demand runs from \\$12 on the price axis down to 120 shirts, supply starts at \\$3 and rises, and they cross at \\$6 and 60 shirts. Now imagine the market can trade only **40 shirts**. At 40 shirts:
- the **demand curve** is at \\$8 (the 40th buyer would pay \\$8);
- the **supply curve** is at \\$5 (the 40th shirt costs \\$5 to supply).

Draw horizontal lines at \\$8, \\$6 and \\$5, and a vertical line at 40 shirts. That cuts the area between the curves into six regions:

| Region | Location | Shape and size |
|---|---|---|
| **A** | Below demand, above \\$8, from 0 to 40 shirts | Triangle: ½ × 40 × 4 = \\$80 |
| **B** | Between \\$6 and \\$8, from 0 to 40 shirts | Rectangle: 40 × 2 = \\$80 |
| **C** | Below demand, above \\$6, from 40 to 60 shirts | Triangle: ½ × 20 × 2 = \\$20 |
| **D** | Between \\$5 and \\$6, from 0 to 40 shirts | Rectangle: 40 × 1 = \\$40 |
| **E** | Above supply, below \\$6, from 40 to 60 shirts | Triangle: ½ × 20 × 1 = \\$10 |
| **F** | Above supply, below \\$5, from 0 to 40 shirts | Triangle: ½ × 40 × 2 = \\$40 |

### At Free-Market Equilibrium (60 shirts at \\$6)
- **CS = A + B + C** = \\$180
- **PS = D + E + F** = \\$90
- **Total surplus** = all six regions = \\$270, with no deadweight loss

These match the triangle formulas from Part 3, which is a good check that the regions are drawn correctly.
`
    },
    {
      id: 'microdem4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'On the six-region graph, which areas together make up producer surplus when the market is at its free-market equilibrium?',
            options: [
              'D + E + F',
              'B + D + F',
              'D + F',
              'E + F'
            ],
            correctAnswer: 0,
            explanation: 'At equilibrium, producer surplus is everything below the \\$6 price and above supply out to 60 shirts: the rectangle D, the small triangle E and the lower triangle F. Region B lies above the price, so it belongs to consumers at equilibrium.'
          },
          {
            question: 'Why do regions C and E belong to total surplus at equilibrium?',
            options: [
              'They come from shirts 41 to 60, whose value exceeds their cost',
              'They come from shirts 61 to 80, whose cost exceeds their value',
              'They are the revenue sellers earn on the first 40 shirts sold',
              'They are the gains buyers get from paying less than \\$5 a shirt'
            ],
            correctAnswer: 0,
            explanation: 'C and E lie between the curves from 40 to 60 shirts. For each of those shirts, demand (value) is above supply (cost), so trading them adds surplus. Beyond 60 shirts, cost exceeds value, and revenue is price times quantity, not a surplus area.'
          }
        ]
      }
    },
    {
      id: 'microdem4-short',
      type: 'text' as const,
      content: `
## 📖 When Output Falls Short of Equilibrium

Suppose something limits trade to 40 shirts. Shirts 41 through 60 are never made, even though each is worth more to a buyer than it costs to make.

### Worked Example: The Lost Triangle
1. **Deadweight loss = C + E** = \\$20 + \\$10 = **\\$30**.
2. Check with one triangle: base = 60 − 40 = 20 shirts, height = \\$8 − \\$5 = \\$3, so ½ × 20 × 3 = \\$30 ✓.
3. **Total surplus** falls from \\$270 to \\$240 = A + B + D + F.

### Who Gets B and D?
The rectangles B and D are value from the 40 shirts that still trade. Which side keeps them depends on the price at which those 40 shirts sell:

| Price for the 40 shirts | Consumer surplus | Producer surplus | Total |
|---|---|---|---|
| \\$8 (buyers' price at 40) | A = \\$80 | B + D + F = \\$160 | \\$240 |
| \\$6 (old equilibrium price) | A + B = \\$160 | D + F = \\$80 | \\$240 |
| \\$5 (sellers' price at 40) | A + B + D = \\$200 | F = \\$40 | \\$240 |

The **total** and the **deadweight loss** are the same in every row. The price only moves surplus from one side to the other.

> 🔑 **AP Connection:** In the next topic, a quota, a price ceiling, a price floor and an excise tax each restrict quantity like this. Each one creates the same kind of DWL triangle; they differ in who keeps the rectangles, and with a tax part of the rectangles becomes government revenue.
`
    },
    {
      id: 'microdem4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Areas** 🔍

On the six-region graph, trade is limited to 40 shirts and they sell for \\$8 each.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Consumer surplus is ___',
            options: ['A', 'A + B', 'A + B + C', 'A + B + D']
          },
          {
            label: 'Producer surplus is ___',
            options: ['B + D + F', 'D + F', 'D + E + F', 'B + C + D']
          },
          {
            label: 'Deadweight loss is ___',
            options: ['C + E', 'B + D', 'C', 'E + F']
          }
        ],
        correctAnswers: ['A', 'B + D + F', 'C + E'],
        hint1: 'Buyers pay \\$8, so their surplus is only the area under demand and above \\$8.',
        hint2: 'Sellers receive \\$8 for each shirt, so everything from their supply curve up to \\$8 on 40 shirts is theirs.',
        hint3: 'Which regions come from shirts 41 to 60, which are no longer traded?',
        explanation: 'At \\$8, buyers keep only A. Sellers keep everything from the supply curve up to \\$8 on the 40 shirts, which is B + D + F. Shirts 41 to 60 are not traded, so C + E is lost.'
      }
    },
    {
      id: 'microdem4-over',
      type: 'text' as const,
      content: `
## 📖 When Output Overshoots Equilibrium

Producing **too much** is also inefficient. Suppose 80 shirts are made and sold.

### Worked Example: The Wedge Beyond Equilibrium
1. At 80 shirts, demand is at \\$4 (the 80th shirt is worth \\$4 to its buyer) and supply is at \\$7 (it costs \\$7 to make).
2. Every shirt from 61 to 80 costs more to make than it is worth. Each one **subtracts** surplus.
3. The loss is the triangle between the curves from 60 to 80 shirts, with its point at the equilibrium: ½ × 20 × (\\$7 − \\$4) = **\\$30**.
4. Total surplus falls to \\$270 − \\$30 = \\$240.

On a graph, this DWL triangle sits to the **right** of equilibrium, with supply above demand. Students often miss it because it lies outside the familiar CS and PS triangles.

## 📖 Efficiency as MB = MC

| Shirt number | MB (height of demand) | MC (height of supply) | Should it be made? |
|---|---|---|---|
| 40th | \\$8 | \\$5 | Yes: adds \\$3 |
| 60th | \\$6 | \\$6 | The last efficient unit |
| 80th | \\$4 | \\$7 | No: subtracts \\$3 |

**Allocative efficiency** is the quantity where **MB = MC**, which for a competitive market with no externalities is the equilibrium quantity. Too little output leaves gains unclaimed, and too much output adds units worth less than they cost.

> 🔑 **AP Connection:** "Is the market allocatively efficient?" means "Is the quantity where MB = MC?" At any other quantity there is deadweight loss, whether the quantity is too low or too high.
`
    },
    {
      id: 'microdem4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A market\'s equilibrium quantity is 60. At 80 units, the demand curve is at \\$4 and the supply curve is at \\$7. If 80 units are produced, deadweight loss equals:',
            options: [
              '\\$30',
              '\\$60',
              '\\$15',
              '\\$0'
            ],
            correctAnswer: 0,
            explanation: 'The units from 60 to 80 each cost more than they are worth. The loss is the triangle ½ × 20 × (\\$7 − \\$4) = \\$30. Forgetting the ½ gives \\$60, and overproduction always creates some loss.'
          },
          {
            question: 'In a market with no externalities, the 30th unit has a marginal benefit of \\$12 and a marginal cost of \\$9. What does this tell you about 30 units of output?',
            options: [
              'Output is too low and should increase',
              'Output is too high and should decrease',
              'Output is efficient because benefit exceeds cost at 30',
              'Output is efficient as long as the market price is \\$12'
            ],
            correctAnswer: 0,
            explanation: 'With MB above MC, one more unit adds more value than it costs, so expanding output toward MB = MC raises total surplus. Efficiency requires MB to equal MC at the last unit, not just exceed it.'
          },
          {
            question: 'When a market trades less than its equilibrium quantity, which statement about the price paid on the units still traded is correct?',
            options: [
              'It changes how surplus is split but not the size of the deadweight loss',
              'It determines the size of the deadweight loss as well as its split',
              'It has no effect on consumer surplus or on producer surplus',
              'It eliminates the deadweight loss if it equals the equilibrium price'
            ],
            correctAnswer: 0,
            explanation: 'The deadweight loss comes from the units that are not traded, so it depends only on the quantity. The price on the traded units moves rectangles of surplus between buyers and sellers, as the \\$8, \\$6 and \\$5 rows of the table show.'
          }
        ]
      }
    }
  ]
};
