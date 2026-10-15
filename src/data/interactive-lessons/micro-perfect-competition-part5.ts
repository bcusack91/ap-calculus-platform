export const microPerfectCompetitionPart5Data = {
  topicSlug: 'micro-perfect-competition',
  sections: [
    {
      id: 'microper5-intro',
      type: 'text' as const,
      content: `
# 💰 Perfect Competition

**Part 5 of 7 — Long-Run Adjustment**

---

| Section |
|---------|
| 📖 Entry: From Profit to Zero Profit |
| Exit: From Losses Back to Zero Profit |
| Demand Shocks in Constant-Cost and Increasing-Cost Industries |
| Long-Run Efficiency and Common Misconceptions |
| Taxes and Fixed Fees: Short Run vs. Long Run |

> 🔑 **Key Concept:** In the long run, firms can enter or leave. Economic profit pulls firms in and losses push them out, and the process stops only when the price equals **minimum ATC**, so each firm earns **zero economic profit**. The market price moves; no single firm ever sets it.
`
    },
    {
      id: 'microper5-entry',
      type: 'text' as const,
      content: `
## 📖 Entry: From Profit to Zero Profit

In Part 4, 100 orchards like Crestview sold apples at **\\$17** a crate. Each produced 5 crates and earned **\\$13** of economic profit. Market demand is Qd = 1,180 − 40P. Assume a **constant-cost industry**: new orchards do not change the prices of land, labor or equipment, so every orchard's cost curves stay put.

### Step by Step
1. **Profit is a signal.** Owners elsewhere see that orchards earn more than their resources could earn in other uses, and there are no barriers to entry.
2. **New orchards enter**, and the market supply curve shifts **right**.
3. The market **price falls**.
4. Each existing orchard moves **down its MC curve** and produces **less**.
5. Entry stops when the price reaches **minimum ATC = \\$14**. Each orchard produces 4 crates and earns zero economic profit.

### The Numbers After Entry
At \\$14, quantity demanded is 1,180 − 40(14) = **620** crates. With each orchard producing 4, the market needs 620 ÷ 4 = **155** orchards, so **55** enter.

| | Short run (before entry) | Long run (after entry) |
|---|---|---|
| Market price | \\$17 | \\$14 |
| Output per orchard | 5 crates | 4 crates |
| Profit per orchard | \\$13 | \\$0 |
| Number of orchards | 100 | 155 |
| Market quantity | 500 | 620 |

## Exit: From Losses Back to Zero Profit

Now start from the long-run equilibrium (155 orchards at \\$14) and suppose a health scare lowers the demand for apples, so the price falls to **\\$12**. Each orchard keeps producing in the short run (\\$12 is above the \\$6 shutdown price) and loses **\\$8** a day, as Part 3 showed.

1. Losses mean owners could do better elsewhere, so some orchards **exit**.
2. Market supply shifts **left**, and the price **rises**.
3. Exit stops when the price is back at **\\$14** and the remaining orchards break even, producing 4 crates each.

> 🔑 **AP Connection:** Every long-run story ends at the same place on the firm graph: the MR line touching the **bottom of ATC**, where P = MC = minimum ATC.
`
    },
    {
      id: 'microper5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After entry ends in the constant-cost apple market, how many crates does each orchard produce, and what is its economic profit?',
            options: [
              '4 crates and \\$0',
              '5 crates and \\$13',
              '4 crates and \\$24',
              '6 crates and \\$0'
            ],
            correctAnswer: 0,
            explanation: 'Entry pushes the price down to minimum ATC, \\$14, which occurs at 4 crates, so profit is (\\$14 − \\$14) × 4 = \\$0. The pair 5 crates and \\$13 describes the short run before entry.'
          },
          {
            question: 'Firms in a competitive industry are taking losses but staying open in the short run. What happens in the long run?',
            options: [
              'The price rises until profit returns to zero',
              'The price falls until profit is zero again',
              'The price rises until firms earn a profit',
              'Profit stays negative at an unchanged price'
            ],
            correctAnswer: 0,
            explanation: 'Losses cause some firms to exit, which shifts market supply left and raises the price until the remaining firms break even. Exit stops at zero economic profit, not at a positive profit.'
          }
        ]
      }
    },
    {
      id: 'microper5-shocks',
      type: 'text' as const,
      content: `
## Demand Shocks in Constant-Cost and Increasing-Cost Industries

Start in long-run equilibrium, then let market demand **increase**.

**Short run (both cases):** the market price rises above minimum ATC. Each firm moves up its MC curve, produces more and earns economic profit. The number of firms has not changed yet.

**Long run, constant-cost industry:** profit draws in new firms, supply shifts right, and the price falls **all the way back** to the original minimum ATC. Each firm returns to its original output; all of the extra market quantity comes from new firms. Connecting the two long-run equilibria gives a **horizontal** long-run supply curve.

**Long run, increasing-cost industry:** entry bids up the price of a scarce input (orchard land, skilled pickers), which shifts every firm's ATC and MC **up**. Entry stops at a higher minimum ATC, so the new long-run price is **above the original price but below the short-run peak**. The long-run supply curve slopes **upward**.

| After demand increases | Short run | Long run, constant-cost | Long run, increasing-cost |
|---|---|---|---|
| Market price | Rises | Back to the original | Above the original, below the SR peak |
| Market quantity | Rises | Rises further | Rises further |
| Number of firms | Unchanged | Increases | Increases |
| Typical firm's profit | Positive | Zero | Zero |

A decrease in demand runs the same steps in reverse: short-run losses, exit, and (in a constant-cost industry) a return to the original price with fewer firms.
`
    },
    {
      id: 'microper5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Trace the Adjustment** 🔍

A constant-cost competitive industry is in long-run equilibrium. Then market demand **decreases**.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the short run, the market price ___',
            options: ['rises', 'falls', 'is unchanged', 'cannot be determined']
          },
          {
            label: 'In the short run, the typical firm\'s economic profit becomes ___',
            options: ['positive', 'zero', 'negative', 'the same as before']
          },
          {
            label: 'In the long run, the number of firms ___',
            options: ['increases', 'decreases', 'is unchanged', 'cannot be determined']
          },
          {
            label: 'In the long run, the market price ends up ___ the original price',
            options: ['above', 'below', 'equal to', 'far below']
          }
        ],
        correctAnswers: ['falls', 'negative', 'decreases', 'equal to'],
        hint1: 'Demand shifts left along an unchanged short-run supply curve.',
        hint2: 'The price is now below minimum ATC.',
        hint3: 'Losses push firms out; in a constant-cost industry costs do not change as they leave.',
        explanation: 'The demand decrease lowers the price below minimum ATC, so firms take losses. Some firms exit, supply shifts left, and with constant costs the price rises back to the original minimum ATC, with fewer firms.'
      }
    },
    {
      id: 'microper5-efficiency',
      type: 'text' as const,
      content: `
## Long-Run Efficiency and Common Misconceptions

| Efficiency | Condition | Holds in long-run equilibrium? | Holds in a short run with profit? |
|---|---|---|---|
| **Allocative** | P = MC: the value of the last unit to buyers equals its cost | Yes | Yes |
| **Productive** | Output at minimum ATC: the lowest possible cost per unit | Yes | No, since q is past the bottom of ATC |

Because P = MC in the market, total surplus is as large as possible and there is **no deadweight loss**. That is why perfect competition is the benchmark the monopoly topic compares against.

| Misconception | Correction |
|---|---|
| "Zero economic profit means the firm is failing." | It earns normal profit: its owners do as well as in their next-best use. |
| "Firms raise prices when their costs rise." | Price takers cannot. Price changes only when market supply or demand shifts. |
| "Entry continues until firms lose money." | Entry stops at zero economic profit; there is no reason to enter beyond that. |
| "In the long run each firm grows to serve the larger market." | In a constant-cost industry, each firm returns to the output at minimum ATC; new firms supply the extra quantity. |

## Taxes and Fixed Fees: Short Run vs. Long Run

| Policy on each firm | Curves that shift | Short run | Long run |
|---|---|---|---|
| **Lump-sum tax or license fee** | ATC only (AFC rises); MC and AVC unchanged | Each firm's q unchanged, market price unchanged, profit falls by the tax | Firms exit, price rises to the new (higher) minimum ATC, market quantity falls; each remaining firm produces **more**, because the bottom of the higher ATC sits farther right on MC |
| **Per-unit tax of t** | MC, AVC and ATC all shift up by t | Each firm cuts q, market supply shifts left, price rises by less than t, firms take losses | Firms exit until P = old minimum ATC + t; each remaining firm is back at its old q, market quantity falls |

**Numbers for the per-unit case:** put a \\$3-per-crate tax on the apple industry at its long-run equilibrium (\\$14, 155 orchards). Every cost per crate rises by \\$3, so minimum ATC becomes **\\$17**, still at 4 crates. In the long run the price is \\$17, quantity demanded is 1,180 − 40(17) = 500 crates, and 500 ÷ 4 = **125** orchards remain. In a constant-cost industry, buyers end up paying the whole \\$3 tax.

> 🔑 **AP Connection:** The question "does the firm's output change?" turns on **MC**. A lump-sum tax leaves MC alone, so short-run output stays the same; a per-unit tax shifts MC up, so output falls.
`
    },
    {
      id: 'microper5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A city imposes a \\$500 annual license fee on every firm in a perfectly competitive industry. In the short run, the typical firm\'s output',
            options: [
              'does not change, since marginal cost is unaffected',
              'falls, since each firm\'s marginal cost curve shifts up',
              'rises, since the firm must spread the fee over more units',
              'falls to zero, since the fee creates an economic loss'
            ],
            correctAnswer: 0,
            explanation: 'A license fee is a fixed cost: it raises ATC but leaves MC and AVC unchanged, so the MR = MC output is the same. The firm does not shut down over a fixed cost, because it would owe the fee anyway.'
          },
          {
            question: 'In a constant-cost competitive industry, the long-run equilibrium price is \\$14. The government then levies a \\$3 per-unit tax on the sellers. What is the new long-run equilibrium price?',
            options: [
              '\\$17',
              '\\$14',
              '\\$15.50',
              '\\$11'
            ],
            correctAnswer: 0,
            explanation: 'The tax raises minimum ATC from \\$14 to \\$17, and with constant costs, exit continues until the price equals the new minimum ATC. Sellers cannot absorb part of the tax in the long run, so the \\$15.50 split never lasts.'
          },
          {
            question: 'A competitive firm is earning economic profit in the short run. Which kind of efficiency does it achieve at that output?',
            options: [
              'Allocative only',
              'Productive only',
              'Both kinds',
              'Neither kind'
            ],
            correctAnswer: 0,
            explanation: 'The firm still produces where P = MC, so it is allocatively efficient, but with price above minimum ATC its output is past the bottom of ATC, so it is not productively efficient. Both conditions hold only in long-run equilibrium.'
          }
        ]
      }
    }
  ]
}
