export const microProductionCostsPart4Data = {
  topicSlug: 'micro-production-costs',
  sections: [
    {
      id: 'micropro4-intro',
      type: 'text' as const,
      content: `
# 💰 Production & Costs

**Part 4 of 7 — Reading Cost-Curve Graphs**

---

| Section |
|---------|
| 📖 The Per-Unit Cost Graph |
| Worked Example: Areas from a Graph |
| The Total Cost Graph |
| Drawing Cost Curves Correctly |

> 🔑 **Key Concept:** A per-unit cost graph shows **MC, AVC and ATC** on one set of axes. Heights are dollars **per unit**; to get **total** dollars, multiply a height by the quantity, which turns each total into a **rectangle** on the graph.
`
    },
    {
      id: 'micropro4-perunit',
      type: 'text' as const,
      content: `
## 📖 The Per-Unit Cost Graph

Picture the standard graph: quantity on the horizontal axis, dollars per unit on the vertical axis.

| Curve | Shape and position |
|---|---|
| **MC** | Falls briefly, then rises steeply; shaped like a check mark |
| **AVC** | U-shaped; lowest of the three U's |
| **ATC** | U-shaped; always **above** AVC |
| **AFC** | Falls continuously; usually left off the graph because ATC − AVC shows it |

### Five Features Graders Look For
1. **MC crosses AVC at AVC's minimum**, coming up from below.
2. **MC crosses ATC at ATC's minimum**, also from below.
3. The minimum of AVC lies **to the left of** (at a lower quantity than) the minimum of ATC.
4. The **vertical gap between ATC and AVC is AFC**. It narrows as Q rises, because fixed cost is spread over more units.
5. ATC and AVC get closer but **never touch**, because AFC is always positive.

### Why the Minimum of ATC Is to the Right
At the output where AVC is lowest, MC equals AVC, which is still **below** ATC. So ATC is still falling there. ATC keeps falling until MC rises all the way up to meet it, at a higher output.

> 🔑 **AP Connection:** On a drawn graph, an MC curve that crosses ATC anywhere except its lowest point loses the point, even if every curve is labeled.
`
    },
    {
      id: 'micropro4-areas',
      type: 'text' as const,
      content: `
## Worked Example: Areas from a Graph

A graph shows these readings for a firm:

| Quantity | ATC | AVC | MC |
|---|---|---|---|
| 50 | \\$16 | \\$10 | \\$8 |
| 100 | \\$12 | \\$9 | \\$15 |

### At Q = 100
- **Total cost** = ATC × Q = \\$12 × 100 = **\\$1,200**: the rectangle from the origin up to \\$12 and across to 100.
- **Variable cost** = AVC × Q = \\$9 × 100 = **\\$900**: the rectangle up to \\$9.
- **Fixed cost** = (ATC − AVC) × Q = \\$3 × 100 = **\\$300**: the strip between \\$9 and \\$12.

### Check at Q = 50
AFC = \\$16 − \\$10 = \\$6, and \\$6 × 50 = **\\$300**. Fixed cost is the same at every output, so the readings are consistent.

### What Else the Readings Tell Us
- At Q = 50, MC (\\$8) is **below** AVC (\\$10), so AVC is still **falling** at 50 units.
- At Q = 100, MC (\\$15) is **above** ATC (\\$12), so ATC is already **rising**. Its minimum lies somewhere below 100 units.
- The gap between ATC and AVC shrank from \\$6 to \\$3 as output doubled, exactly as AFC = \\$300 ÷ Q predicts.
`
    },
    {
      id: 'micropro4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'On a cost graph, at 200 units ATC is \\$7 and AVC is \\$5. Which area represents total fixed cost?',
            options: [
              'The rectangle between \\$5 and \\$7, out to 200 units',
              'The rectangle from zero up to \\$7, out to 200 units',
              'The rectangle from zero up to \\$5, out to 200 units',
              'The rectangle between \\$5 and \\$7, out to 100 units'
            ],
            correctAnswer: 0,
            explanation: 'Fixed cost is AFC × Q, and AFC is the gap between ATC and AVC: \\$2 × 200 = \\$400, the strip between \\$5 and \\$7. The full rectangle up to \\$7 is total cost, and the one up to \\$5 is variable cost.'
          },
          {
            question: 'A firm is producing where its MC is \\$11, its AVC is \\$9, and its ATC is \\$14. What is happening to its average costs as output rises?',
            options: [
              'AVC is rising and ATC is falling',
              'AVC is falling and ATC is rising',
              'Both AVC and ATC are rising now',
              'Both AVC and ATC are falling now'
            ],
            correctAnswer: 0,
            explanation: 'MC (\\$11) is above AVC (\\$9), which pulls AVC up, but below ATC (\\$14), which pulls ATC down. This happens between the two minimum points, which is why the minimum of ATC lies to the right of the minimum of AVC.'
          }
        ]
      }
    },
    {
      id: 'micropro4-total',
      type: 'text' as const,
      content: `
## The Total Cost Graph

A second type of graph shows **total** dollars on the vertical axis.

| Curve | Starts at | Shape |
|---|---|---|
| **TC** | FC on the vertical axis (Q = 0) | Rises, first flattening, then steepening |
| **VC** | The origin | Same shape as TC |
| **FC** | FC on the vertical axis | Horizontal line |

### Key Relationships
- **TC and VC are parallel**: at every quantity, the vertical distance between them equals **FC**.
- The **slope** of TC (and of VC) at any quantity is **MC**. Where TC is flattest, MC is lowest; where TC is steep, MC is high.
- TC switches from flattening to steepening at the output where **MC is at its minimum**. That bend reflects the switch from increasing to diminishing marginal returns.
- The slope of a straight line from the origin to a point on TC equals **ATC** at that output.

### Linking the Two Graphs
| On the total cost graph | On the per-unit graph |
|---|---|
| Vertical gap TC − VC | FC = (ATC − AVC) × Q |
| Slope of TC | Height of MC |
| Height of TC at Q, divided by Q | Height of ATC |

> 🔑 **AP Connection:** If a question says a fixed cost rises, the TC curve shifts **straight up** by that amount and keeps its slope at every output. So **MC does not change**.
`
    },
    {
      id: 'micropro4-input',
      type: 'input-boxes' as const,
      content: `
**Read the Graph** ✍️

A per-unit cost graph shows that at 80 units, ATC is \\$25 and AVC is \\$20.

1) Total cost at 80 units, in dollars?

2) Total variable cost at 80 units, in dollars?

3) Average fixed cost at 160 units, in dollars?

Enter numbers only, without commas.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2000', '1600', '2.5'],
        hint1: 'TC = ATC × Q.',
        hint2: 'VC = AVC × Q.',
        hint3: 'Fixed cost = TC − VC at 80 units. It does not change at 160 units; divide by 160.',
        explanation: '1) \\$25 × 80 = \\$2,000. 2) \\$20 × 80 = \\$1,600. 3) FC = \\$400, so AFC at 160 units = \\$400 ÷ 160 = \\$2.50: doubling output halves AFC.'
      }
    },
    {
      id: 'micropro4-drawing',
      type: 'text' as const,
      content: `
## Drawing Cost Curves Correctly

### A Checklist for a Per-Unit Cost Graph
1. Label the axes: "Price, Costs" (vertical) and "Quantity" (horizontal).
2. Draw **AVC** as a U, and **ATC** as a higher U whose low point is **farther right**.
3. Draw **MC** rising through the **lowest point of AVC** and then the **lowest point of ATC**.
4. Keep the ATC–AVC gap shrinking as quantity rises.
5. Label every curve.

### Frequent Drawing Errors

| Error | Why it is wrong |
|---|---|
| MC crosses ATC to the left of ATC's low point | MC below ATC means ATC is still falling, so ATC cannot be rising there |
| ATC and AVC drawn with a constant gap | The gap is AFC, which shrinks as Q rises |
| ATC and AVC meet at high output | AFC never reaches zero |
| MC drawn as a U whose low point matches ATC's | MC reaches its minimum **before** AVC and ATC reach theirs |
| AFC drawn as a U | AFC = FC ÷ Q falls at every output |

> 🔑 **AP Connection:** Later topics put a price line on this graph to find profit. Getting the cost curves right now is what makes those profit rectangles come out right.
`
    },
    {
      id: 'micropro4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'On a total cost graph, which feature shows the marginal cost of producing at a given quantity?',
            options: [
              'The slope of the TC curve at that quantity',
              'The height of the TC curve at that quantity',
              'The vertical gap between the TC and VC curves',
              'The height of the FC line above the horizontal axis'
            ],
            correctAnswer: 0,
            explanation: 'Marginal cost is the change in total cost per extra unit, which is the slope of TC. The height of TC is total cost, and the gap between TC and VC is fixed cost.'
          },
          {
            question: 'Why is the minimum point of ATC at a larger quantity than the minimum point of AVC?',
            options: [
              'AFC keeps falling, so ATC keeps falling after AVC has begun to rise',
              'MC crosses ATC first and only afterward crosses AVC from below it',
              'Fixed costs rise as output rises, which pushes the ATC curve right',
              'Diminishing returns affect ATC earlier than they affect the AVC curve'
            ],
            correctAnswer: 0,
            explanation: 'Just past AVC\'s minimum, AVC rises slowly while AFC is still falling, so their sum, ATC, keeps falling a little longer. MC crosses AVC first, and fixed costs do not change with output.'
          },
          {
            question: 'A student\'s graph shows ATC and AVC getting closer and finally touching at a high output. What is wrong?',
            options: [
              'AFC stays above zero at every output level',
              'MC should touch both curves at that point',
              'AVC should be drawn above the ATC curve',
              'ATC should turn downward at high output'
            ],
            correctAnswer: 0,
            explanation: 'The gap between ATC and AVC is AFC = FC ÷ Q, which shrinks but stays positive at every output, so the curves converge without meeting. AVC is always below ATC, and both rise at high output.'
          }
        ]
      }
    }
  ]
};
