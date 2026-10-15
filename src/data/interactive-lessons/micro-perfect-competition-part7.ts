export const microPerfectCompetitionPart7Data = {
  topicSlug: 'micro-perfect-competition',
  sections: [
    {
      id: 'microper7-intro',
      type: 'text' as const,
      content: `
# 💰 Perfect Competition

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Whole Topic on One Page |
| A Five-Step Checklist for Any Question |
| Short Run vs. Long Run Side by Side |
| What Each Shock Does |

> 🔑 **Key Concept:** Every perfect competition question comes back to three comparisons on the firm graph: **P vs. MC** (how much to produce), **P vs. ATC** (profit or loss), and **P vs. AVC** (produce or shut down). Entry and exit then push the price to minimum ATC in the long run.
`
    },
    {
      id: 'microper7-summary',
      type: 'text' as const,
      content: `
## 📖 The Whole Topic on One Page

| Part | Big idea | Crestview Orchard example |
|---|---|---|
| 1 | A price taker faces D = MR = AR = P | Every crate sells for the market price |
| 2 | Produce the last unit with MR ≥ MC | At \\$20: 6 crates, \\$30 profit |
| 3 | Profit or loss = (P − ATC) × q\\*, read on the side-by-side graph | At \\$12: 4 crates, \\$8 loss rectangle |
| 4 | Produce if P ≥ AVC; supply = MC above minimum AVC; market supply is a horizontal sum | Shutdown below \\$6; 100 orchards supply 500 crates at \\$17 |
| 5 | Entry or exit until P = minimum ATC | 55 orchards enter; price falls to \\$14 |
| 6 | FRQs: draw, shock, short run, long run | Corn and lumber practice |

### The Price Zones, One Last Time

| Price | Short run | Long run |
|---|---|---|
| P > minimum ATC | Produce at P = MC; economic profit | Firms enter; price falls |
| P = minimum ATC | Produce; zero economic profit | No entry or exit (equilibrium) |
| minimum AVC ≤ P < minimum ATC | Produce at P = MC; loss smaller than fixed cost | Firms exit; price rises |
| P < minimum AVC | Shut down; loss = fixed cost | Firms exit; price rises |

## A Five-Step Checklist for Any Question

1. **Find the price** from the market graph (or the prompt). It is the firm's MR line.
2. **Find q\\*** where MR = MC on the rising part of MC (in a table, the last unit with MR ≥ MC).
3. **Read ATC and AVC at q\\*.**
4. **Compare**: P vs. ATC gives profit or loss; P vs. AVC gives produce or shut down.
5. **Go long run**: profit means entry, losses mean exit, and both stop at P = minimum ATC.
`
    },
    {
      id: 'microper7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A competitive firm faces a price of \\$25. At its MR = MC output of 80 units, ATC is \\$22 and AVC is \\$16. Its economic profit is',
            options: [
              '\\$240',
              '\\$720',
              '\\$480',
              '\\$2,000'
            ],
            correctAnswer: 0,
            explanation: 'Profit = (\\$25 − \\$22) × 80 = \\$240. The \\$720 figure uses AVC instead of ATC, \\$480 is total fixed cost, and \\$2,000 is total revenue.'
          },
          {
            question: 'Which statement about a perfectly competitive firm in the short run is correct?',
            options: [
              'It may keep producing even while it takes an economic loss',
              'It shuts down whenever the price falls below its minimum ATC',
              'It chooses the output at which its ATC reaches a minimum',
              'It can raise its price whenever its costs go up'
            ],
            correctAnswer: 0,
            explanation: 'A firm whose price is between minimum AVC and minimum ATC loses money but loses less by producing than by closing. The shutdown point is minimum AVC, output is chosen where P = MC, and a price taker cannot raise its price.'
          },
          {
            question: 'Firms in a competitive industry are earning zero economic profit. Which must be true?',
            options: [
              'Price equals minimum average total cost',
              'Firms earn zero accounting profit',
              'Price is at the bottom of average variable cost',
              'Market demand is perfectly elastic'
            ],
            correctAnswer: 0,
            explanation: 'Zero economic profit at the profit-maximizing output means P = MC = ATC, which happens only at the bottom of ATC. Accounting profit is still positive, because it leaves out implicit costs; only the firm\'s demand, not market demand, is perfectly elastic.'
          }
        ]
      }
    },
    {
      id: 'microper7-sr-lr',
      type: 'text' as const,
      content: `
## Short Run vs. Long Run Side by Side

| Feature | Short run | Long run |
|---|---|---|
| Number of firms | Fixed | Changes through entry and exit |
| Fixed costs | Exist; paid even if shut down | None; every cost is variable |
| Economic profit | Positive, zero or negative | Zero |
| Price | Any price set by market S and D | Minimum ATC |
| Firm's supply decision | MC above minimum AVC | Stay only if P ≥ minimum ATC |
| Allocative efficiency (P = MC) | Yes | Yes |
| Productive efficiency (minimum ATC) | Only if P = minimum ATC | Yes |

## What Each Shock Does

| Shock (start in long-run equilibrium) | Short run | Long run |
|---|---|---|
| Demand increases, constant-cost | P up, each q up, profit | Entry; P back to the original; more firms |
| Demand increases, increasing-cost | P up, each q up, profit | Entry; P above the original but below the SR peak |
| Demand decreases, constant-cost | P down, each q down, losses | Exit; P back to the original; fewer firms |
| Lump-sum tax or fixed-cost increase | q and P unchanged; profit falls | Exit; P up; each remaining firm produces more |
| Per-unit tax of t | MC up; q down; P up by less than t; losses | Exit; P up by t (constant-cost); each firm back at its old q |
| Technology lowers every firm's MC and ATC | Each q up; market supply right; P falls; profit | Entry; P falls to the new, lower minimum ATC |

> 🔑 **AP Connection:** Before answering, decide whether the change affects **MC** (it changes q) or only **fixed cost** (it changes profit, not q), and whether the question asks about the **short run** (firm count fixed) or the **long run** (entry and exit).
`
    },
    {
      id: 'microper7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Short Run or Long Run?** 🔍

A constant-cost competitive industry is in long-run equilibrium when a new technology lowers every firm's marginal and average costs.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the short run, each firm\'s output ___',
            options: ['rises', 'falls', 'is unchanged', 'cannot be determined']
          },
          {
            label: 'In the short run, the typical firm earns ___ economic profit',
            options: ['positive', 'zero', 'negative', 'the same']
          },
          {
            label: 'In the long run, the number of firms ___',
            options: ['increases', 'decreases', 'is unchanged', 'cannot be determined']
          },
          {
            label: 'In the long run, the market price equals ___',
            options: ['the new minimum ATC', 'the old minimum ATC', 'the new minimum AVC', 'the old market price']
          }
        ],
        correctAnswers: ['rises', 'positive', 'increases', 'the new minimum ATC'],
        hint1: 'The firm\'s MC curve shifts down, so it crosses the price line farther right.',
        hint2: 'Costs fell while the number of firms is still fixed.',
        hint3: 'Profit attracts entry until the price reaches the bottom of the new ATC.',
        explanation: 'Lower MC raises each firm\'s output, market supply shifts right and the price falls, but less than costs did, so firms earn profit. Entry then lowers the price to the new, lower minimum ATC, with more firms in the industry.'
      }
    },
    {
      id: 'microper7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculation Drill** ✍️

**1)** A competitive firm's minimum AVC is \\$9 and its minimum ATC is \\$15. Below what price, in dollars, does it shut down in the short run?

**2)** A firm's MC for the 4th, 5th and 6th units is \\$11, \\$14 and \\$19. The market price is \\$16. How many units should it produce?

**3)** A constant-cost industry is in long-run equilibrium at \\$20. Each firm produces 50 units, and market quantity is 6,000. After demand increases, the long-run market quantity is 7,500. How many firms are in the industry now?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '5', '150'],
        hint1: 'The shutdown point is the bottom of AVC.',
        hint2: 'Produce each unit whose MC is at or below the price.',
        hint3: 'In a constant-cost industry each firm is back at its old output.',
        explanation: '1) The firm shuts down below minimum AVC, \\$9. 2) The 5th unit\'s MC (\\$14) is below \\$16, but the 6th unit\'s (\\$19) is above it, so produce 5. 3) The price returns to \\$20 and each firm again produces 50 units, so 7,500 ÷ 50 = 150 firms (up from 120).'
      }
    },
    {
      id: 'microper7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A competitive industry is in long-run equilibrium. The government places a lump-sum tax on each firm. In the short run, the market price',
            options: [
              'stays at its original level',
              'rises by the tax per unit',
              'falls as firms cut output',
              'rises as firms exit the market'
            ],
            correctAnswer: 0,
            explanation: 'A lump-sum tax does not change MC, so no firm changes its output and market supply does not shift in the short run. Exit, and the price increase it brings, happens only in the long run.'
          },
          {
            question: 'Why does perfect competition in long-run equilibrium produce no deadweight loss?',
            options: [
              'Firms produce where price equals marginal cost',
              'Firms earn zero accounting profit in the long run',
              'Each firm produces the largest output it can',
              'The government sets the price at minimum ATC'
            ],
            correctAnswer: 0,
            explanation: 'When P = MC, the value of the last unit to buyers equals its cost to produce, so every unit worth more than it costs is made and no others. Accounting profit stays positive, firms do not maximize output, and no one sets the price.'
          },
          {
            question: 'The market price for a competitive firm rises from \\$12 to \\$18. Its MC curve is unchanged. Which describes the firm\'s response?',
            options: [
              'It moves up its MC curve and raises output',
              'Its MC curve shifts right and output rises',
              'It keeps the same output and earns more profit',
              'It enters the market for a higher-priced good'
            ],
            correctAnswer: 0,
            explanation: 'A higher price raises the MR line, so it crosses MC at a larger quantity: the firm moves along its supply (MC) curve. The MC curve itself shifts only when costs change, and keeping output fixed would leave profitable units unproduced.'
          }
        ]
      }
    }
  ]
}
