export const microPerfectCompetitionPart6Data = {
  topicSlug: 'micro-perfect-competition',
  sections: [
    {
      id: 'microper6-intro',
      type: 'text' as const,
      content: `
# 💰 Perfect Competition

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Perfect Competition Is Tested |
| FRQ Practice 1: A Demand Shock in the Corn Market |
| FRQ Practice 2: A Sawmill Taking Losses |

> 🔑 **Key Concept:** Perfect competition is one of the most frequently tested topics on the AP Microeconomics free-response section. Most questions follow one script: draw the side-by-side graphs, apply a shock, then trace the short run and the long run. Points come from **correct labels**, **reading values at q\\***, and **naming the comparison** that justifies each decision.
`
    },
    {
      id: 'microper6-tested',
      type: 'text' as const,
      content: `
## 📖 How Perfect Competition Is Tested

| Task in the prompt | What earns the point | Example |
|---|---|---|
| **Draw** side-by-side graphs | Labeled axes on both; market S and D; firm's horizontal MR line at the market price; MC through minimum ATC; q\\* where MR = MC | "MR = D = P" at \\$5, q\\* below the MC–MR intersection |
| **Show** a profit or loss | Shade the rectangle between P and ATC at q\\* | Loss shaded from P up to ATC |
| **Calculate** | Setup with numbers, then the answer | "(\\$40 − \\$46) × 1,000 = −\\$6,000" |
| **Explain** a decision | The comparison that drives it | "P > AVC, so the loss is less than fixed cost" |
| **Long run** | Direction of entry or exit and where it stops | "Firms exit until P = minimum ATC" |

### Habits That Save Points
1. Carry the market price across to the firm graph with a **dashed line**.
2. Read ATC and AVC at **q\\***, never at their minimum points unless the price is there.
3. For "what happens in the long run," name **entry or exit**, the **shift of market supply**, and the **end point** (zero economic profit).
4. Keep short-run and long-run answers separate. The number of firms does not change in the short run.
`
    },
    {
      id: 'microper6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice 1: A Demand Shock in the Corn Market

**Prompt.** The market for corn is perfectly competitive and is a constant-cost industry. It is in long-run equilibrium at a price of \\$5 per bushel.

**(a)** Draw correctly labeled side-by-side graphs for the corn market and a typical corn farm. Show the market price, the farm's output q₁, and the farm's MC and ATC curves.

**(b)** A new biofuel requirement increases the demand for corn. On your graphs, show the short-run effect on the market price and on the farm's output.

**(c)** In the short run after the demand increase, is the typical farm earning positive, negative or zero economic profit? Explain.

**(d)** In the long run, what happens to the number of farms and to the market price compared with \\$5? Explain.

**(e)** In the new short-run equilibrium, is the typical farm allocatively efficient? Explain.

### Model Answers

**(a)** Market graph: Price and Quantity axes, downward-sloping D₁ and upward-sloping S₁ crossing at \\$5 and Q₁. Farm graph: horizontal line at \\$5 labeled MR = D = P, a U-shaped ATC with its **minimum at \\$5**, and MC rising through that minimum. q₁ is where MC crosses MR, directly below the bottom of ATC.

**(b)** D shifts right to D₂; the market price rises to P₂ above \\$5 and market quantity rises. On the farm graph, the MR line moves up to P₂, and the farm's output rises to q₂ > q₁ along its MC curve.

**(c)** **Positive.** At q₂ the price P₂ is above ATC, because the price is now above minimum ATC.

**(d)** Profit attracts new farms, so the **number of farms increases** and market supply shifts right. Because the industry is constant-cost, entry continues until the price falls **back to \\$5**, where profit is zero again.

**(e)** **Yes.** The farm produces where P = MC, so the value of the last bushel to buyers equals its marginal cost. (It is not productively efficient, because q₂ is past minimum ATC.)

### Scoring Notes
- In (a), the graph point requires MC to pass through the **minimum** of ATC and the price line to be **tangent** to that minimum.
- In (b), moving q along MC earns the point; shifting the farm's MC or ATC curve does not.
- In (d), "price returns to \\$5" alone is not enough; name entry and the supply shift.
`
    },
    {
      id: 'microper6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In FRQ Practice 1, which change happens in the short run after the demand for corn increases?',
            options: [
              'Each farm moves up its MC curve and produces a larger output',
              'New farms enter and the market supply curve shifts right',
              'Each farm\'s ATC curve shifts down as its output rises',
              'Each farm raises its price above the market price'
            ],
            correctAnswer: 0,
            explanation: 'In the short run the number of farms is fixed, so the higher price makes each existing farm expand output along its MC curve. Entry is a long-run response, cost curves do not shift with the price, and a price taker cannot charge above the market price.'
          },
          {
            question: 'A student draws the farm graph with the price line crossing ATC to the right of ATC\'s minimum, labeled as long-run equilibrium. What is wrong?',
            options: [
              'Price should touch the very bottom of ATC',
              'The firm should produce where MR meets AVC',
              'Market demand belongs on the farm\'s graph too',
              'The price line should slope downward to the right'
            ],
            correctAnswer: 0,
            explanation: 'In long-run equilibrium, P = MC = minimum ATC, so the MR line just touches ATC at its lowest point. A price line that cuts ATC elsewhere implies a profit or loss, which would trigger entry or exit.'
          },
          {
            question: 'Corn is an increasing-cost industry instead of a constant-cost industry. After the demand increase, the new long-run price is',
            options: [
              'above \\$5 but below the short-run peak',
              'exactly \\$5, its original level',
              'equal to the short-run peak price',
              'below \\$5, since more farms entered'
            ],
            correctAnswer: 0,
            explanation: 'Entry still lowers the price from its short-run peak, but rising input prices lift every farm\'s minimum ATC, so the price settles above \\$5. That is why an increasing-cost industry has an upward-sloping long-run supply curve.'
          }
        ]
      }
    },
    {
      id: 'microper6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice 2: A Sawmill Taking Losses

**Prompt.** Pine Valley Mill sells lumber in a perfectly competitive market at **\\$40** per unit. At its profit-maximizing output of **1,000** units, its ATC is **\\$46** and its AVC is **\\$35**.

**(a)** Calculate the mill's economic profit or loss. Show your work.

**(b)** Calculate the mill's total fixed cost.

**(c)** Should the mill produce or shut down in the short run? Explain using your numbers.

**(d)** Assume all firms in the industry face the same costs. What happens to the number of firms and to the market price in the long run?

**(e)** The government charges every mill a lump-sum fee of \\$2,000. What happens to Pine Valley's short-run output? Should it still produce?

### Model Answers

**(a)** (\\$40 − \\$46) × 1,000 = **−\\$6,000**, a loss of \\$6,000.

**(b)** (ATC − AVC) × q = (\\$46 − \\$35) × 1,000 = **\\$11,000**.

**(c)** **Produce.** The price (\\$40) is above AVC (\\$35), so producing loses \\$6,000 while shutting down would lose the full \\$11,000 fixed cost.

**(d)** Firms **exit**, market supply shifts left, and the price **rises** until the remaining firms earn zero economic profit (P = minimum ATC).

**(e)** Output is **unchanged**: a lump-sum fee does not affect MC. The loss grows to \\$8,000, but shutting down would now lose \\$13,000 (the fixed cost plus the fee), so the mill still produces.

### Scoring Notes
- In (a), a loss can be written as "−\\$6,000" or "a loss of \\$6,000"; the setup earns the point.
- In (c), "P > AVC" earns the explanation point, and comparing the two losses also earns it.
- In (e), the output answer must rest on MC, not on the size of the fee.
`
    },
    {
      id: 'microper6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

A competitive firm sells at **\\$15**. At its profit-maximizing output of **400** units, ATC = **\\$18** and AVC = **\\$13**.

1) The firm's loss, in dollars? (enter a positive number, no commas)

2) Its total fixed cost, in dollars?

3) The government adds a \\$500 lump-sum license fee. If the firm keeps producing, what is its new loss, in dollars?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1200', '2000', '1700'],
        hint1: '(ATC − P) × q.',
        hint2: '(ATC − AVC) × q.',
        hint3: 'The fee does not change output; it adds directly to the loss.',
        explanation: '1) (\\$18 − \\$15) × 400 = \\$1,200. 2) (\\$18 − \\$13) × 400 = \\$2,000. 3) \\$1,200 + \\$500 = \\$1,700, still less than the \\$2,500 it would lose by shutting down, so it keeps producing.'
      }
    },
    {
      id: 'microper6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In FRQ Practice 2, the market price falls from \\$40 to \\$30, and at the new MR = MC output, AVC is \\$33. What should Pine Valley Mill do in the short run?',
            options: [
              'Shut down and lose its fixed cost',
              'Produce, since price still covers ATC',
              'Produce more to spread out fixed cost',
              'Keep producing to cut its total loss'
            ],
            correctAnswer: 0,
            explanation: 'A \\$30 price is below the \\$33 AVC, so each unit loses money even before fixed cost. Shutting down limits the loss to fixed cost.'
          },
          {
            question: 'A per-unit tax is placed on every firm in a constant-cost competitive industry that starts in long-run equilibrium. Compared with the original equilibrium, in the new long-run equilibrium',
            options: [
              'fewer firms remain and the market price is higher',
              'more firms enter and the price stays the same',
              'the price is lower with the same number of firms',
              'the price is higher with the same number of firms'
            ],
            correctAnswer: 0,
            explanation: 'The tax raises minimum ATC by the amount of the tax, so firms exit until the price rises by that amount. Quantity demanded falls at the higher price, and with each firm at its original output, fewer firms are needed.'
          }
        ]
      }
    }
  ]
}
