export const microProductionCostsPart7Data = {
  topicSlug: 'micro-production-costs',
  sections: [
    {
      id: 'micropro7-intro',
      type: 'text' as const,
      content: `
# 💰 Production & Costs

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 One Chain from Inputs to Costs |
| Every Formula and Crossing Point |
| Short Run and Long Run Side by Side |

> 🔑 **Key Concept:** This whole topic is one chain of cause and effect. **Diminishing marginal returns** in the short run make **MC** rise; MC pulls **AVC and ATC** into U shapes; **fixed costs** separate ATC from AVC; and in the long run, **returns to scale** shape the LRATC curve. The next topics put a price next to these costs to find profit.
`
    },
    {
      id: 'micropro7-chain',
      type: 'text' as const,
      content: `
## 📖 One Chain from Inputs to Costs

| Link | What happens | Where you saw it |
|---|---|---|
| 1. Fixed input + variable input | Short run: one input (capital) cannot change | Part 1 |
| 2. Marginal product rises, then falls | Specialization first; then diminishing returns as the fixed input is shared | Part 2 |
| 3. MC mirrors MP | $MC = \\text{wage} \\div MP$: MC falls while MP rises, then climbs | Part 3 |
| 4. MC shapes the averages | MC below an average pulls it down; MC above it pulls it up; MC crosses AVC and ATC at their minimums | Parts 3–4 |
| 5. Fixed cost spreads out | AFC = FC ÷ Q falls forever; the ATC–AVC gap shrinks | Parts 3–4 |
| 6. Cost changes shift curves | Fixed changes move AFC and ATC; variable changes move AVC, ATC and MC | Part 5 |
| 7. Long run: every input varies | Plant size is chosen; LRATC is the envelope of short-run ATC curves | Part 5 |
| 8. Returns to scale shape LRATC | Increasing → economies of scale; constant → flat; decreasing → diseconomies | Part 5 |

### One Example Through the Whole Chain
A coffee shop with one espresso machine hires baristas. The 2nd barista lets one take orders while the other makes drinks (MP rises, MC falls). By the 5th barista, they wait in line for the machine (MP falls, MC rises). The machine's lease is a fixed cost that adds less to ATC as more drinks are sold. In the long run, the owner can buy a second machine or open a second shop; whether cost per drink then falls depends on returns to scale, not on the crowded counter.
`
    },
    {
      id: 'micropro7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which statement correctly links a production idea to a cost idea?',
            options: [
              'When marginal product falls, marginal cost rises',
              'As marginal product falls, fixed cost rises',
              'When average product rises, average fixed cost rises',
              'When total product peaks, marginal cost is at its minimum'
            ],
            correctAnswer: 0,
            explanation: 'With a constant wage, MC = wage ÷ MP, so a falling MP means a rising MC. Fixed cost does not depend on output, AFC always falls as output rises, and MC is lowest where MP is highest, not where total product peaks.'
          },
          {
            question: 'At the current output, a firm\'s MC is \\$12, its AVC is \\$10 and its ATC is \\$15. If it produces one more unit, which averages change and in which direction?',
            options: [
              'AVC goes up and ATC falls',
              'AVC falls and ATC rises',
              'AVC and ATC both rise',
              'AVC and ATC both fall'
            ],
            correctAnswer: 0,
            explanation: 'An extra unit costing \\$12 is above the \\$10 AVC, pulling AVC up, but below the \\$15 ATC, pulling ATC down. The firm is between the minimum of AVC and the minimum of ATC.'
          },
          {
            question: 'A pizza chain\'s cost per pizza falls when it opens more restaurants, yet within each restaurant the 8th cook adds fewer pizzas than the 7th. How can both be true?',
            options: [
              'Returns to scale are about all inputs in the long run, while diminishing returns hold capital fixed',
              'Opening restaurants raises each cook\'s marginal product, which removes the diminishing returns',
              'Diminishing returns apply only to large firms, while economies of scale apply only to small ones',
              'The 8th cook is less skilled, while the new restaurants hire workers who are more experienced'
            ],
            correctAnswer: 0,
            explanation: 'Diminishing marginal returns is a short-run idea: one restaurant\'s fixed kitchen is shared by more cooks. Economies of scale are a long-run idea about expanding every input together, so a firm can show both at once.'
          }
        ]
      }
    },
    {
      id: 'micropro7-formulas',
      type: 'text' as const,
      content: `
## Every Formula and Crossing Point

### Formulas

| Measure | Formula | Note |
|---|---|---|
| Marginal product | $MP = \\Delta TP \\div \\Delta L$ | Extra output from one more worker |
| Average product | $AP = TP \\div L$ | Output per worker |
| Total cost | $TC = FC + VC$ | $TC$ at $Q = 0$ equals $FC$ |
| Marginal cost | $MC = \\Delta TC \\div \\Delta Q = \\Delta VC \\div \\Delta Q$ | Fixed cost cancels out |
| Average fixed cost | $AFC = FC \\div Q$ | Always falling |
| Average variable cost | $AVC = VC \\div Q$ | U-shaped |
| Average total cost | $ATC = TC \\div Q = AFC + AVC$ | U-shaped, above AVC |
| Labor-cost links | $MC = w \\div MP$ and $AVC = w \\div AP$ | With labor as the only variable input |

### Crossing Points and Turning Points

| Event | Where it happens |
|---|---|
| MP crosses AP | At the maximum of AP |
| MP = 0 | At the maximum of TP |
| MC is lowest | Where MP is highest |
| MC crosses AVC | At the minimum of AVC (where AP is highest) |
| MC crosses ATC | At the minimum of ATC, a larger output than minimum AVC |
| LRATC is lowest | Minimum efficient scale (the first output where it bottoms out) |
`
    },
    {
      id: 'micropro7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Review Calculation** ✍️

A firm has a fixed cost of **\\$100**. At 20 units its variable cost is **\\$300**; at 21 units its variable cost is **\\$318**.

1) Average total cost at 20 units, in dollars?

2) Average fixed cost at 20 units, in dollars?

3) Marginal cost of the 21st unit, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '5', '18'],
        hint1: 'TC = 100 + 300. Divide by 20.',
        hint2: 'AFC = FC ÷ Q.',
        hint3: 'MC = change in VC (or TC) from 20 to 21 units.',
        explanation: '1) ATC = \\$400 ÷ 20 = \\$20. 2) AFC = \\$100 ÷ 20 = \\$5. 3) MC = \\$318 − \\$300 = \\$18. Because MC (\\$18) is below ATC (\\$20), ATC is still falling at this output.'
      }
    },
    {
      id: 'micropro7-runs',
      type: 'text' as const,
      content: `
## Short Run and Long Run Side by Side

| | Short run | Long run |
|---|---|---|
| Inputs | At least one fixed | All variable |
| Costs | Fixed and variable | All variable |
| Key law | Diminishing marginal returns | Returns to scale |
| Average cost curve | Short-run ATC (U-shaped because of AFC and diminishing returns) | LRATC (shaped by economies and diseconomies of scale) |
| A rise in a fixed cost | Raises AFC and ATC only | No fixed costs; the firm can change or leave the plant |
| Typical exam question | "Why does MC rise?" | "Why does LRATC fall at low output?" |

### Final Traps Checklist
- Diminishing returns means MP is **falling**, not negative, and TP is still rising.
- MC is shaped by **variable** costs only; a lump-sum tax or rent change leaves it alone.
- MC crosses AVC and ATC at their **minimums**, coming from below.
- AFC never reaches zero, so ATC and AVC never meet.
- Minimum AVC comes at a **smaller** output than minimum ATC.
- "Bigger plant" is a long-run decision; "one more worker" is a short-run one.

> 🔑 **AP Connection:** In the market-structure topics, a firm compares price with these curves: price against **ATC** tells you profit or loss, and price against **AVC** tells you whether to keep producing in the short run. Every cost relationship from this topic gets used there.
`
    },
    {
      id: 'micropro7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Complete the Relationships** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When marginal product is at its maximum, marginal cost is ___',
            options: ['At its minimum', 'At its maximum', 'Equal to ATC', 'Equal to zero']
          },
          {
            label: 'The vertical distance between ATC and AVC equals ___',
            options: ['AFC', 'MC', 'TFC', 'AVC']
          },
          {
            label: 'Long-run average total cost that rises as output grows shows ___',
            options: ['Diseconomies of scale', 'Economies of scale', 'Diminishing marginal returns', 'Constant returns to scale']
          }
        ],
        correctAnswers: ['At its minimum', 'AFC', 'Diseconomies of scale'],
        hint1: 'MC = wage ÷ MP.',
        hint2: 'ATC = AFC + AVC.',
        hint3: 'This is a long-run curve, so the short-run law does not apply.',
        explanation: 'The highest MP gives the lowest MC. Because ATC = AFC + AVC, the gap between ATC and AVC is AFC. Rising LRATC reflects diseconomies of scale; diminishing marginal returns describes the short run.'
      }
    },
    {
      id: 'micropro7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A firm\'s total cost is \\$500 at 10 units and \\$540 at 11 units, and its fixed cost is \\$200. What is its average variable cost at 11 units?',
            options: [
              '\\$30.91',
              '\\$49.09',
              '\\$40.00',
              '\\$30.00'
            ],
            correctAnswer: 0,
            explanation: 'VC at 11 units = \\$540 − \\$200 = \\$340, and \\$340 ÷ 11 ≈ \\$30.91. The \\$49.09 figure is ATC, \\$40 is the marginal cost of the 11th unit, and \\$30 is AVC at 10 units.'
          },
          {
            question: 'Which change would lower a firm\'s marginal cost at every level of output?',
            options: [
              'A per-unit subsidy',
              'A cut in its yearly rent',
              'A smaller lump-sum tax',
              'Lower insurance premiums'
            ],
            correctAnswer: 0,
            explanation: 'A per-unit subsidy reduces the cost of each additional unit, shifting MC down. Rent, lump-sum taxes and insurance are fixed costs, so changing them moves ATC and AFC but leaves MC unchanged.'
          },
          {
            question: 'A firm is producing at the minimum of its short-run ATC curve. Which must be true?',
            options: [
              'MC equals ATC',
              'MC equals AVC',
              'AVC is falling',
              'AFC equals zero'
            ],
            correctAnswer: 0,
            explanation: 'MC crosses ATC at its minimum, so the two are equal there. That output is to the right of the minimum of AVC, so AVC is rising and is below MC, and AFC is still positive.'
          }
        ]
      }
    }
  ]
};
