export const microDemandSupplyEquilibriumPart7Data = {
  topicSlug: 'micro-demand-supply-equilibrium',
  sections: [
    {
      id: 'microdem7-intro',
      type: 'text' as const,
      content: `
# ⚖️ Market Equilibrium & Applications

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 How the Pieces Fit |
| Formula and Method Sheet |
| Mixed Review |

> 🔑 **Key Concept:** Equilibrium ties the whole unit together. It is where quantity demanded equals quantity supplied, where the marginal benefit of the last unit equals its marginal cost, and where total surplus is as large as it can be. Every distortion you meet later is measured against this point.
`
    },
    {
      id: 'microdem7-fit',
      type: 'text' as const,
      content: `
## 📖 How the Pieces Fit

| Part | Question it answers | Key tool |
|---|---|---|
| 1 | What are CS, PS and DWL? What happens in a double shift? | Definitions and the double-shift table |
| 2 | Where is equilibrium, and what happens away from it? | Set $Q_d = Q_s$; shortage or surplus = gap; sales = short side |
| 3 | How big are the gains from trade? | Triangles: ½ × quantity × (intercept gap) |
| 4 | Which letters are CS, PS and DWL? | Three horizontal lines and the six-region graph |
| 5 | How do sizes settle a double shift? | Compare horizontal shifts; agreeing arrows are determinate |
| 6 | How does it all appear on the exam? | Solve, measure, diagnose, predict |

### Three Ways to Describe the Same Point
| Language | Statement at equilibrium |
|---|---|
| Quantities | $Q_d = Q_s$: no shortage, no surplus |
| Margins | MB of the last unit = MC of the last unit |
| Welfare | Total surplus (CS + PS) is maximized; DWL = 0 |

If any of the three fails, the other two fail as well. A shortage at a low price means fewer units trade, which means some units with MB above MC are not traded, which means there is deadweight loss.
`
    },
    {
      id: 'microdem7-sheet',
      type: 'text' as const,
      content: `
## 📖 Formula and Method Sheet

| Task | Method |
|---|---|
| Equilibrium from equations | Set $Q_d = Q_s$, solve for P, plug into both equations |
| Shortage or surplus at price P | Compute $Q_d$ and $Q_s$; the gap is the size; $Q_d > Q_s$ is a shortage |
| Quantity sold off equilibrium | The smaller of $Q_d$ and $Q_s$ |
| Consumer surplus | ½ × Q* × (demand price intercept − P*) |
| Producer surplus | ½ × Q* × (P* − supply price intercept) |
| DWL from restricted quantity Q₁ | ½ × (Q* − Q₁) × (demand height at Q₁ − supply height at Q₁) |
| DWL from overproduction Q₂ | ½ × (Q₂ − Q*) × (supply height at Q₂ − demand height at Q₂) |
| Single shift | D shift: P and Q move together; S shift: P and Q move opposite |
| Double shift | The variable both shifts push the same way is determinate |

### Worked Review Example
$Q_d = 100 - 4P$ and $Q_s = 6P - 50$.
1. $100 - 4P = 6P - 50$ gives $P = 15$, $Q = 40$.
2. Demand intercept: \\$25. Supply intercept: about \\$8.33 ($50/6$).
3. $CS = \\tfrac{1}{2} \\times 40 \\times 10 = \\$200$.
4. $PS = \\tfrac{1}{2} \\times 40 \\times (15 - 8.33) \\approx \\$133.33$.
5. At \\$20: $Q_d = 20$, $Q_s = 70$, a surplus of 50 with 20 units sold.
`
    },
    {
      id: 'microdem7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mixed Review** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the review example ($Q_d = 100 - 4P$, $Q_s = 6P - 50$), what happens at a price of \\$10?',
            options: [
              'A shortage of 50 units, with 10 units sold',
              'A surplus of 50 units, with 60 units sold',
              'A shortage of 50 units, with 60 units sold',
              'A shortage of 60 units, with 10 units sold'
            ],
            correctAnswer: 0,
            explanation: 'At \\$10, Qd = 100 − 40 = 60 and Qs = 60 − 50 = 10. Buyers want 50 more than sellers offer, so there is a shortage of 50, and only the 10 units offered are sold.'
          },
          {
            question: 'A market produces more than its equilibrium quantity. At the last unit produced, how do marginal benefit and marginal cost compare?',
            options: [
              'Marginal cost is greater than marginal benefit',
              'Marginal benefit is greater than marginal cost',
              'Marginal benefit equals marginal cost',
              'Both equal the price that buyers pay'
            ],
            correctAnswer: 0,
            explanation: 'Beyond equilibrium, the supply curve (MC) lies above the demand curve (MB), so each extra unit costs more than it is worth. That gap is the source of the deadweight loss from overproduction.'
          },
          {
            question: 'Gasoline prices fall, so demand for airline flights falls as more travelers drive, while jet fuel prices also fall, increasing the supply of flights. What happens in the market for flights?',
            options: [
              'Price falls; the change in quantity is indeterminate',
              'Quantity falls; the change in price is indeterminate',
              'Price and quantity both fall by the same amount',
              'Price rises; the change in quantity is indeterminate'
            ],
            correctAnswer: 0,
            explanation: 'Lower demand and higher supply both push the price of flights down, so price falls. Demand pushes quantity down while supply pushes it up, so without sizes the quantity change is indeterminate.'
          }
        ]
      }
    },
    {
      id: 'microdem7-input',
      type: 'input-boxes' as const,
      content: `
**Final Calculation Set** ✍️

A market has demand $Q_d = 160 - 2P$ and supply $Q_s = 2P - 40$.

1) Equilibrium quantity?

2) Producer surplus in dollars at equilibrium?

3) If output is held to 40 units, what is the deadweight loss in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '900', '200'],
        hint1: '160 − 2P = 2P − 40 gives P = 50. Plug in.',
        hint2: 'Supply meets the price axis at \\$20. PS = ½ × 60 × (50 − 20).',
        hint3: 'At 40 units, demand is at (160 − 40)/2 and supply is at (40 + 40)/2.',
        explanation: '1) P = \\$50 and Q = 60. 2) PS = ½ × 60 × \\$30 = \\$900. 3) At 40 units, demand is at \\$60 and supply is at \\$40, so DWL = ½ × 20 × \\$20 = \\$200.'
      }
    },
    {
      id: 'microdem7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Final Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which statement best explains why total surplus is largest at the competitive equilibrium quantity?',
            options: [
              'Every unit worth more than its cost trades, and no other unit does',
              'The price at equilibrium is the lowest one at which sellers will supply the good',
              'Consumer surplus and producer surplus are exactly equal to each other at equilibrium',
              'Buyers pay exactly their willingness to pay on every single unit that trades'
            ],
            correctAnswer: 0,
            explanation: 'Total surplus is the sum of value minus cost over all units traded. Equilibrium includes every unit where demand lies above supply and stops exactly where they cross, so no gain is missed and no losing trade is made. The split between CS and PS can be unequal.'
          },
          {
            question: 'A market is at equilibrium. A new tariff on an imported input raises producers\' costs. What happens to consumer surplus?',
            options: [
              'It decreases',
              'It increases',
              'It is unchanged',
              'It is indeterminate'
            ],
            correctAnswer: 0,
            explanation: 'Higher input costs decrease supply, which raises price and lowers quantity. Buyers pay more on fewer units, so the triangle under demand and above price shrinks: consumer surplus decreases.'
          }
        ]
      }
    }
  ]
};
