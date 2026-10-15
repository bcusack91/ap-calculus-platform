export const microProductionCostsPart5Data = {
  topicSlug: 'micro-production-costs',
  sections: [
    {
      id: 'micropro5-intro',
      type: 'text' as const,
      content: `
# 💰 Production & Costs

**Part 5 of 7 — Cost Shifters and Long-Run Cost**

---

| Section |
|---------|
| 📖 What Shifts Which Curve |
| Worked Example: Two Kinds of Tax |
| The Long-Run Average Total Cost Curve |
| Returns to Scale with Numbers |
| Misconceptions to Avoid |

> 🔑 **Key Concept:** A change in a **fixed** cost moves only AFC and ATC. A change in a **variable** cost (a wage, a material price, a per-unit tax) moves AVC, ATC **and MC**. In the long run every cost is variable, and the shape of the long-run average total cost curve comes from **returns to scale**, not from diminishing marginal returns.
`
    },
    {
      id: 'micropro5-shifts',
      type: 'text' as const,
      content: `
## 📖 What Shifts Which Curve

| Change | AFC | AVC | ATC | MC |
|---|---|---|---|---|
| Rent, insurance or a license fee rises | ↑ | — | ↑ | — |
| **Lump-sum tax** (a fixed amount, whatever the output) | ↑ | — | ↑ | — |
| Wage or raw-material price rises | — | ↑ | ↑ | ↑ |
| **Per-unit tax** (a set amount on each unit) | — | ↑ | ↑ | ↑ |
| **Per-unit subsidy** | — | ↓ | ↓ | ↓ |
| Better technology raises the productivity of variable inputs | — | ↓ | ↓ | ↓ |

### The Logic
- **MC** is the cost of one more unit. Only costs that **change with output** can change it. A lump-sum charge is paid once, no matter how many units are made, so it never changes the cost of the **next** unit.
- **AVC** includes only variable costs, so it moves with MC and ignores fixed costs.
- **ATC** includes everything, so it moves with any cost change.

> 🔑 **AP Connection:** Because a fixed-cost change leaves MC alone, it will not change how much a profit-maximizing firm produces in the short run. Later topics use this fact over and over.
`
    },
    {
      id: 'micropro5-taxes',
      type: 'text' as const,
      content: `
## Worked Example: Two Kinds of Tax

Use the cost table from Part 3 (fixed cost \\$60).

### A Lump-Sum Tax of \\$30
Fixed cost rises to \\$90. MC and AVC are unchanged; AFC and ATC rise by \\$30 ÷ Q.

| Q | MC (unchanged) | Old ATC | New ATC |
|---|---|---|---|
| 3 | \\$20 | \\$50 | \\$60 |
| 4 | \\$30 | \\$45 | \\$52.50 |
| 5 | \\$40 | \\$44 | \\$50 |
| 6 | \\$50 | \\$45 | \\$50 |

The ATC increase is **largest at low output** (\\$10 at Q = 3) and **smallest at high output** (\\$5 at Q = 6). The bottom of ATC moves **to the right**, to between 5 and 6 units, because the larger fixed cost rewards spreading it over more output.

### A Per-Unit Tax of \\$5
Every unit now costs \\$5 more, so VC rises by \\$5 × Q.

| Q | Old MC | New MC | Old ATC | New ATC |
|---|---|---|---|---|
| 3 | \\$20 | \\$25 | \\$50 | \\$55 |
| 4 | \\$30 | \\$35 | \\$45 | \\$50 |
| 5 | \\$40 | \\$45 | \\$44 | \\$49 |
| 6 | \\$50 | \\$55 | \\$45 | \\$50 |

MC, AVC and ATC all shift **up by exactly \\$5** at every output. Minimum ATC is still at Q = 5, now \\$49.

| | Lump-sum tax | Per-unit tax |
|---|---|---|
| Curves that shift | AFC, ATC | AVC, ATC, MC |
| Size of the ATC shift | Shrinks as Q rises | Same at every Q |
| Effect on MC | None | Up by the tax |
`
    },
    {
      id: 'micropro5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A city raises the annual business license fee that every restaurant pays, regardless of how many meals it serves. Which of a restaurant\'s cost curves shift?',
            options: [
              'AFC and ATC only',
              'AVC, ATC and MC only',
              'MC and AFC only',
              'All four cost curves'
            ],
            correctAnswer: 0,
            explanation: 'A fee that does not depend on output is a fixed cost, so it raises AFC and therefore ATC. Marginal cost and AVC include only costs that vary with output, so they do not move.'
          },
          {
            question: 'A bakery\'s flour price rises. What happens to its marginal cost curve and its average variable cost curve?',
            options: [
              'MC and AVC shift upward',
              'Only MC shifts upward',
              'Only AVC shifts upward',
              'Neither curve shifts'
            ],
            correctAnswer: 0,
            explanation: 'Flour is a variable input: every extra loaf needs more of it. A higher flour price raises the cost of each additional loaf (MC) and the variable cost per loaf (AVC), and ATC rises along with them.'
          }
        ]
      }
    },
    {
      id: 'micropro5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Curves Move?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A new machine lets each worker produce more per hour. Marginal cost ___',
            options: ['Shifts down', 'Shifts up', 'Does not change', 'Becomes vertical']
          },
          {
            label: 'The government charges a factory a one-time \\$10,000 permit fee. Marginal cost ___',
            options: ['Does not change', 'Shifts up', 'Shifts down', 'Becomes vertical']
          },
          {
            label: 'A \\$1-per-unit excise tax is placed on a firm\'s output. Average total cost ___',
            options: ['Shifts up by \\$1', 'Shifts up by less than \\$1', 'Does not change', 'Shifts down by \\$1']
          }
        ],
        correctAnswers: ['Shifts down', 'Does not change', 'Shifts up by \\$1'],
        hint1: 'More output per worker means less labor cost per extra unit.',
        hint2: 'Does the fee depend on how many units are made?',
        hint3: 'The tax is paid on every unit, so cost per unit rises by the full amount.',
        explanation: 'Higher productivity lowers the cost of each additional unit, so MC shifts down. A permit fee is fixed, so MC is unchanged. A per-unit tax raises cost per unit by the full \\$1 at every output, so ATC shifts up by \\$1.'
      }
    },
    {
      id: 'micropro5-lratc',
      type: 'text' as const,
      content: `
## The Long-Run Average Total Cost Curve

In the **long run**, a firm can choose its plant size. Each plant size has its own short-run ATC curve; the long-run curve picks the cheapest plant for each output.

### Worked Example: Choosing a Plant

| Output | Small plant ATC | Medium plant ATC | Large plant ATC | **LRATC** (lowest) |
|---|---|---|---|---|
| 100 | \\$10 | \\$13 | \\$18 | **\\$10** (small) |
| 200 | \\$14 | \\$9 | \\$12 | **\\$9** (medium) |
| 300 | \\$20 | \\$11 | \\$8 | **\\$8** (large) |
| 400 | \\$28 | \\$16 | \\$9 | **\\$9** (large) |

The LRATC curve is the **lower boundary** (the "envelope") of all the short-run ATC curves. A firm planning to make 300 units should build the large plant, even though the medium plant would be cheaper at 200 units.

### Three Regions of LRATC

| Region | LRATC | Returns to scale | Typical causes |
|---|---|---|---|
| **Economies of scale** | Falls as output rises | Increasing: output rises by a larger percentage than all inputs | Specialization of workers and managers, bulk buying, large specialized machines |
| **Constant returns to scale** | Flat | Constant: output rises by the same percentage | Gains and drawbacks of size balance out |
| **Diseconomies of scale** | Rises | Decreasing: output rises by a smaller percentage | Coordination and communication problems in very large organizations |

**Minimum efficient scale (MES)** is the smallest output at which LRATC reaches its minimum.
`
    },
    {
      id: 'micropro5-scale',
      type: 'text' as const,
      content: `
## Returns to Scale with Numbers

A furniture maker uses 10 workers and 2 machines to make 1,000 chairs a month. It doubles **both** inputs to 20 workers and 4 machines.

| Output after doubling | Percentage change in output | Returns to scale | LRATC |
|---|---|---|---|
| 2,400 chairs | +140% (more than +100%) | Increasing | Falling: economies of scale |
| 2,000 chairs | +100% | Constant | Flat |
| 1,700 chairs | +70% (less than +100%) | Decreasing | Rising: diseconomies of scale |

Why does LRATC fall with increasing returns? Total cost doubles when all inputs double (at the same input prices), but output **more than** doubles, so cost per chair falls.

### Reading MES from a Schedule

| Output | 1,000 | 2,000 | 3,000 | 4,000 | 5,000 | 6,000 |
|---|---|---|---|---|---|---|
| LRATC | \\$20 | \\$15 | \\$12 | \\$12 | \\$12 | \\$14 |

- Economies of scale: 1,000 to 3,000 units.
- Constant returns: 3,000 to 5,000 units.
- Diseconomies of scale: above 5,000 units.
- **MES = 3,000 units**. If market demand at a price of \\$12 is only 4,000 units, there is room for just one firm at MES: a hint of the **natural monopoly** case in a later topic.
`
    },
    {
      id: 'micropro5-input',
      type: 'input-boxes' as const,
      content: `
**Long-Run Practice** ✍️

1) A firm increases every input by 50 percent, and its output rises by 30 percent. Are its returns to scale increasing, constant or decreasing? (Type one word.)

2) A firm's LRATC is \\$9 at 500 units, \\$7 at 1,000, \\$6 at 1,500, \\$6 at 2,000 and \\$6.50 at 2,500. What is its minimum efficient scale, in units?

3) Using the same schedule, what is the firm's long-run total cost of producing 2,000 units, in dollars?

Enter one word or a number without commas.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['decreasing', '1500', '12000'],
        hint1: 'Compare the percentage change in output with the percentage change in inputs.',
        hint2: 'MES is the smallest output where LRATC first reaches its lowest value.',
        hint3: 'Total cost = LRATC × Q.',
        explanation: '1) Output grows by a smaller percentage than inputs, so returns to scale are decreasing and LRATC is rising. 2) LRATC first hits its minimum of \\$6 at 1,500 units. 3) \\$6 × 2,000 = \\$12,000.'
      }
    },
    {
      id: 'micropro5-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions to Avoid

| Misconception | Correct idea |
|---|---|
| "The MC curve rises because of fixed costs." | MC rises because of **diminishing marginal returns** to the variable input. Fixed costs never enter MC. |
| "Diseconomies of scale and diminishing returns are the same thing." | Diminishing returns: **short run**, one input added to a fixed one. Diseconomies: **long run**, all inputs scaled up. |
| "A lump-sum tax raises the cost of every unit by the same amount." | It raises **ATC** by tax ÷ Q, which is smaller at higher output; MC does not change. |
| "Bigger is always cheaper." | Only in the economies-of-scale region. Past the constant-returns range, LRATC rises. |
| "In the long run, the firm still has fixed costs." | In the long run **all** inputs and costs are variable. |
| "A sunk cost should change what the firm does next." | Sunk costs cannot be recovered whatever the firm does, so they do not affect decisions at the margin. |
`
    },
    {
      id: 'micropro5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A firm\'s long-run average total cost falls as it expands from 1 to 5 factories. Which explanation fits?',
            options: [
              'Larger scale allows more specialized workers and machines',
              'Each added worker shares a fixed factory with more coworkers',
              'The firm\'s fixed costs are spread across more units of output',
              'Coordination problems shrink as the organization grows larger'
            ],
            correctAnswer: 0,
            explanation: 'Falling LRATC is economies of scale, which usually come from specialization and the use of larger, more efficient equipment. Sharing a fixed factory is a short-run idea, there are no fixed costs in the long run, and coordination problems usually grow with size.'
          },
          {
            question: 'In the plant-size table, a firm expects to produce 200 units. Which plant should it build, and what will its average cost be?',
            options: [
              'Medium plant, \\$9',
              'Small plant, \\$10',
              'Large plant, \\$8',
              'Large plant, \\$12'
            ],
            correctAnswer: 0,
            explanation: 'At 200 units, the medium plant has the lowest ATC (\\$9). The small plant\'s \\$10 applies at 100 units, and the large plant\'s \\$8 applies only at 300 units; at 200 units the large plant costs \\$12.'
          },
          {
            question: 'Compared with a per-unit tax that raises the same total revenue at the current output, a lump-sum tax on a firm',
            options: [
              'leaves marginal cost unchanged',
              'raises marginal cost by more',
              'raises average variable cost',
              'lowers the firm\'s average fixed cost'
            ],
            correctAnswer: 0,
            explanation: 'A lump-sum tax is a fixed cost: it does not change with output, so the cost of the next unit is unaffected. The per-unit tax raises MC, AVC and ATC; the lump-sum tax raises AFC and ATC instead.'
          }
        ]
      }
    }
  ]
};
