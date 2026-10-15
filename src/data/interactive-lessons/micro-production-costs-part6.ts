export const microProductionCostsPart6Data = {
  topicSlug: 'micro-production-costs',
  sections: [
    {
      id: 'micropro6-intro',
      type: 'text' as const,
      content: `
# 💰 Production & Costs

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Production and Costs Are Tested |
| FRQ Practice 1: Completing a Cost Table |
| FRQ Practice 2: Two Taxes on One Firm |
| FRQ Practice 3: Choosing a Scale |

> 🔑 **Key Concept:** Production and cost questions reward precise vocabulary. "Marginal" means the change from **one more** unit, "average" means **per unit**, and "fixed" means **does not change with output**. Most lost points come from mixing these up, not from hard arithmetic.
`
    },
    {
      id: 'micropro6-tested',
      type: 'text' as const,
      content: `
## 📖 How Production and Costs Are Tested

| Task | Typical prompt | What earns the point |
|---|---|---|
| Calculate from a table | "Calculate the marginal cost of the fourth unit." | Change in TC (or VC) from Q = 3 to Q = 4, with the subtraction shown |
| Identify a phase | "With which worker do diminishing marginal returns begin?" | The first worker whose MP is smaller than the previous worker's |
| Explain a curve's shape | "Why does the MC curve eventually rise?" | Diminishing marginal returns to the variable input |
| Analyze a cost change | "How does a lump-sum tax affect the firm's MC? Explain." | "No change, because the tax does not vary with output" |
| Long-run reasoning | "Is the firm experiencing economies of scale?" | Compare the percentage change in output with the percentage change in all inputs, or say whether LRATC is falling |

### Words That Change the Answer

| Word in the question | Means |
|---|---|
| "Total" | A dollar amount for all units: TC, VC, FC |
| "Average" or "per unit" | Divide by Q: ATC, AVC, AFC |
| "Marginal" or "additional" | Change from one more unit: MC, MP |
| "Short run" | At least one input fixed; diminishing returns apply |
| "Long run" | All inputs variable; returns to scale apply |

> 🔑 **AP Connection:** "Explain" questions about costs nearly always need one of three reasons: **diminishing marginal returns** (shape of MC and short-run curves), **spreading fixed cost** (AFC falling), or **returns to scale** (shape of LRATC).
`
    },
    {
      id: 'micropro6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice 1: Completing a Cost Table

**Prompt.** A candle maker's total cost in the short run:

| Candles (boxes) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Total cost | \\$48 | \\$88 | \\$118 | \\$144 | \\$176 | \\$218 | \\$270 |

**(a)** Identify the firm's fixed cost.

**(b)** Calculate the marginal cost of the 4th box.

**(c)** Calculate the average variable cost at 4 boxes.

**(d)** At what output is average total cost at its minimum? Explain using marginal cost.

**(e)** With which box does marginal cost begin to rise? What causes the rise?

### Model Answers

**(a)** Total cost at zero output is all fixed cost: **\\$48**.

**(b)** MC = \\$176 − \\$144 = **\\$32**.

**(c)** VC = \\$176 − \\$48 = \\$128, so AVC = \\$128 ÷ 4 = **\\$32**.

**(d)** ATC is \\$59, \\$48, \\$44, **\\$43.60** and \\$45 at 2 through 6 boxes, so the minimum is at **5 boxes**. The 5th box's MC (\\$42) is below the \\$44 average at 4 boxes, so it pulls ATC down; the 6th box's MC (\\$52) is above \\$43.60, so it pulls ATC up.

**(e)** MC is \\$40, \\$30, \\$26, then **\\$32**: it begins to rise with the **4th box**. The cause is **diminishing marginal returns**: with fixed equipment, each additional unit of labor adds less output, so each additional box costs more.

### Scoring Notes
- In (b), using ATC × Q differences is fine, but the answer must be the change in total cost, not \\$176 ÷ 4.
- In (d), the explanation must compare MC with ATC. "Because it is the lowest number" earns the identification but not the explanation.
`
    },
    {
      id: 'micropro6-input',
      type: 'input-boxes' as const,
      content: `
**A Per-Unit Tax on the Candle Maker** ✍️

The government places a **\\$4 per-box tax** on the candle maker from FRQ 1.

1) New marginal cost of the 4th box, in dollars?

2) New average variable cost at 4 boxes, in dollars?

3) New average total cost at 5 boxes, in dollars? (Use a decimal if needed.)

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['36', '36', '47.6'],
        hint1: 'A per-unit tax adds its full amount to the cost of every additional box.',
        hint2: 'VC rises by \\$4 × 4 boxes; or simply add \\$4 to the old AVC.',
        hint3: 'Old ATC at 5 boxes was \\$43.60; the tax adds \\$4 to every box.',
        explanation: '1) \\$32 + \\$4 = \\$36. 2) AVC was \\$32, so it becomes \\$36. 3) \\$43.60 + \\$4 = \\$47.60. A per-unit tax shifts MC, AVC and ATC up by the full tax at every output.'
      }
    },
    {
      id: 'micropro6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice 2: Two Taxes on One Firm

**Prompt.** A firm's per-unit cost graph shows MC, AVC and ATC drawn correctly. The government considers two policies:

- **Policy X:** a lump-sum tax of \\$2,000 a year.
- **Policy Y:** a tax of \\$2 on each unit produced.

**(a)** Under Policy X, identify which of the curves MC, AVC and ATC shift. Explain.

**(b)** Under Policy Y, identify which curves shift and by how much.

**(c)** Under Policy X, does the vertical shift of ATC get larger, smaller or stay the same as output rises? Explain.

**(d)** Under which policy does the output at which ATC is minimized move to a larger quantity?

### Model Answers

**(a)** **Only ATC** shifts up (AFC rises too, though it is not drawn). The tax is a **fixed cost**: it does not change with output, so it cannot change the cost of an additional unit (MC) or the variable cost per unit (AVC).

**(b)** **MC, AVC and ATC** all shift **up by \\$2** at every output, because each unit now costs \\$2 more.

**(c)** **Smaller.** The tax adds \\$2,000 ÷ Q to ATC: \\$20 per unit at 100 units, but \\$10 per unit at 200 units.

**(d)** **Policy X.** MC does not move, but ATC is higher, so MC (rising) meets the new, higher ATC at a larger output. Under Policy Y, MC and ATC both rise by \\$2, so they still cross at the same output.

### Scoring Notes
- In (a), "because it is a fixed cost" or "because it does not depend on output" is the needed explanation. Saying only "it is a lump-sum tax" restates the prompt.
`
    },
    {
      id: 'micropro6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Exam-Style Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In FRQ 1, what is the average fixed cost of the candle maker at 6 boxes?',
            options: [
              '\\$8',
              '\\$48',
              '\\$45',
              '\\$37'
            ],
            correctAnswer: 0,
            explanation: 'AFC = FC ÷ Q = \\$48 ÷ 6 = \\$8. The \\$45 and \\$37 figures are ATC and AVC at 6 boxes; their difference is also \\$8.'
          },
          {
            question: 'A student answers FRQ 2(a) by saying that the lump-sum tax shifts MC up because it raises the firm\'s costs. What is the error?',
            options: [
              'Total cost rises but the cost of one more unit does not change',
              'The tax lowers total cost so the MC curve should shift down instead',
              'The tax raises MC only at large outputs so the MC curve pivots',
              'The tax raises MC only if the firm hires more workers in response'
            ],
            correctAnswer: 0,
            explanation: 'A lump-sum tax is the same amount whatever the output, so the change in total cost from one more unit is unchanged. That leaves MC where it was, even though total cost and ATC rise.'
          },
          {
            question: 'Which change would shift a firm\'s AVC curve but leave its AFC curve unchanged?',
            options: [
              'A rise in the hourly wage it pays',
              'A rise in the rent on its building',
              'A new yearly fee for its permit',
              'A higher premium for its insurance'
            ],
            correctAnswer: 0,
            explanation: 'Wages vary with output, so a wage increase raises variable cost and AVC. Rent, a yearly permit fee and insurance premiums are fixed costs, which shift AFC and ATC instead.'
          }
        ]
      }
    },
    {
      id: 'micropro6-frq3',
      type: 'text' as const,
      content: `
## FRQ Practice 3: Choosing a Scale

**Prompt.** A bicycle company can build plants of different sizes. Its long-run average total cost:

| Bicycles per month | 1,000 | 2,000 | 3,000 | 4,000 | 5,000 |
|---|---|---|---|---|---|
| LRATC | \\$300 | \\$240 | \\$220 | \\$220 | \\$260 |

**(a)** Identify the range of output with economies of scale.

**(b)** Identify the minimum efficient scale.

**(c)** Identify the returns to scale as the company expands from 3,000 to 4,000 bicycles. Explain.

**(d)** Calculate the long-run total cost of producing 5,000 bicycles.

**(e)** Explain why LRATC rises above 4,000 bicycles.

### Model Answers

**(a)** **1,000 to 3,000 bicycles**, where LRATC falls.

**(b)** **3,000 bicycles**, the smallest output with the lowest LRATC.

**(c)** **Constant returns to scale.** LRATC stays at \\$220, so total cost and output rise by the same percentage (one-third): inputs and output grow in proportion.

**(d)** \\$260 × 5,000 = **\\$1,300,000**.

**(e)** **Diseconomies of scale**: in a very large organization, coordinating and monitoring workers becomes harder, so cost per bicycle rises. Diminishing marginal returns is **not** the answer, because no input is fixed in the long run.
`
    },
    {
      id: 'micropro6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Exam-Style Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In FRQ 3, if the company produces 1,000 bicycles a month, which statement is correct?',
            options: [
              'It could lower its unit cost by expanding its scale of production',
              'It is producing at its minimum efficient scale with the lowest unit cost',
              'It is facing diseconomies of scale because LRATC is at its highest',
              'It should shrink its plant, since smaller output lowers its unit cost'
            ],
            correctAnswer: 0,
            explanation: 'At 1,000 bicycles, LRATC is falling, so expanding moves the company down the curve toward \\$220. Minimum efficient scale is 3,000 bicycles, and the high cost at 1,000 reflects unexploited economies of scale, not diseconomies.'
          },
          {
            question: 'An FRQ asks why a firm\'s marginal cost curve slopes upward in the short run. Which answer earns the point?',
            options: [
              'Diminishing marginal returns',
              'Diseconomies of scale',
              'Rising average fixed cost',
              'Increasing marginal returns'
            ],
            correctAnswer: 0,
            explanation: 'In the short run, adding workers to fixed capital eventually lowers marginal product, so each extra unit costs more to make. Diseconomies of scale are a long-run idea, AFC falls rather than rises, and increasing marginal returns would make MC fall, not rise.'
          },
          {
            question: 'A firm\'s output rises from 400 to 1,000 units when it doubles every input. Which pair of conclusions follows?',
            options: [
              'Increasing returns to scale; LRATC is falling',
              'Decreasing returns to scale; LRATC is rising',
              'Decreasing returns to scale; LRATC is falling',
              'Constant returns to scale; LRATC is flat'
            ],
            correctAnswer: 0,
            explanation: 'Output rises 150 percent while inputs rise 100 percent, so returns to scale are increasing. Costs roughly double while output more than doubles, so long-run average total cost falls.'
          }
        ]
      }
    }
  ]
};
