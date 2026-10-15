export const macroScarcityOpportunityCostPart4Data = {
  topicSlug: 'macro-scarcity-opportunity-cost',
  sections: [
    {
      id: 'macrosca4-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Opportunity Cost

**Part 4 of 7 — Reading PPC Graphs: Shifts, Pivots & Movements**

---

| Section |
|---------|
| 📖 Movement Along vs. Shift of the Curve |
| What Shifts the PPC (and What Does Not) |
| Pivots: Technology in One Industry |
| Capital Goods Today, Growth Tomorrow |

> 🔑 **Key Concept:** A **movement** from one point to another is a change in what the economy chooses to produce or in how fully it uses its resources. A **shift** of the whole curve is a change in what the economy is **able** to produce. Most PPC graph questions come down to telling these apart.
`
    },
    {
      id: 'macrosca4-shifts',
      type: 'text' as const,
      content: `
## 📖 Movement Along vs. Shift of the Curve

| Change | How it appears on the graph | Example |
|---|---|---|
| Society chooses a different mix of goods | **Movement along** the curve | Government buys more military goods and fewer consumer goods |
| Resources become idle or return to work | **Movement inside / back toward** the curve | A recession pushes the economy inside the PPC; recovery moves it back out to the curve |
| The economy's capacity to produce changes | **Shift** of the whole curve | Population growth, new technology, more capital |

## What Shifts the PPC (and What Does Not)

A PPC is drawn holding **resources** and **technology** constant. Only a change in one of those shifts it.

| Shifts the PPC **outward** (economic growth) | Shifts the PPC **inward** |
|---|---|
| More resources: a larger labor force, newly discovered oil, more factories and machines | Loss of resources: war, a natural disaster that destroys capital, emigration of workers |
| Better resources: more education and training (**human capital**) | Depletion of a resource such as an exhausted mineral deposit |
| Better technology that raises output from the same inputs | Destruction or wearing out of capital that is not replaced |

### Changes that do NOT shift the PPC

| Change | Why not | What it does instead |
|---|---|---|
| Higher unemployment | The resources still exist; they are just idle | Moves the economy to a point **inside** the curve |
| Lower unemployment | Puts existing resources back to work | Moves the economy **toward** the curve |
| A change in consumer tastes | Changes what people want, not what can be made | Movement **along** the curve |
| A rise in prices or an increase in the money supply | Money and prices are not productive resources | No change in the curve |

### Worked Example: Describing a recession and recovery

An economy produces at point D (30 computers, 250 tons of wheat), a point on its PPC. A recession lays off workers, and output falls to 25 computers and 200 tons of wheat.
1. **Graph description:** a new point appears inside the curve, below and to the left of D.
2. **Interpretation:** resources are unemployed, so the economy is productively inefficient. The PPC itself has not moved; the workers and machines still exist.
3. **Recovery:** as workers are rehired, the economy moves back out toward the curve.

> 🔑 **AP Connection:** If an FRQ says "the unemployment rate rises," do not shift the curve. Plot a point inside the original PPC and label it.
`
    },
    {
      id: 'macrosca4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which event would shift a country\'s production possibilities curve outward?',
            options: [
              "A fall in the unemployment rate during a recovery",
              "A rise in the prices of both goods it produces",
              "An increase in the size of the labor force",
              "A shift in consumer tastes toward one of the goods"
            ],
            correctAnswer: 2,
            explanation: 'A larger labor force means more resources, so the economy can produce more of both goods and the whole curve shifts out. Falling unemployment moves the economy toward its existing curve, while price changes and taste changes do not alter productive capacity.'
          },
          {
            question: 'A recession causes many factories to sit idle. On a PPC, this is best shown as',
            options: [
              "an inward shift of the entire curve toward the origin",
              "a movement along the curve toward more consumer goods",
              "an outward shift caused by lower costs of production",
              "a movement from a point on the curve to a point inside it"
            ],
            correctAnswer: 3,
            explanation: 'Idle factories still exist, so the economy\'s capacity is unchanged and the PPC does not shift. The economy simply produces less than it could, which places it at a point inside the curve.'
          },
          {
            question: 'A new fertilizer doubles wheat yields but has no effect on computer production. With wheat on the vertical axis and computers on the horizontal axis, how does the PPC change?',
            options: [
              "Wheat intercept rises; computer intercept is unchanged.",
              "Computer intercept rises; wheat intercept is unchanged.",
              "Both intercepts rise by the same proportion.",
              "Neither intercept changes; the economy moves along it."
            ],
            correctAnswer: 0,
            explanation: 'The maximum amount of wheat rises, so the wheat intercept moves up, while the maximum number of computers is unchanged, so the computer intercept stays put. The curve pivots outward from the computer axis.'
          }
        ]
      }
    },
    {
      id: 'macrosca4-pivot',
      type: 'text' as const,
      content: `
## 📖 Pivots: Technology in One Industry

When technology improves for **only one good**, only that good's intercept moves.

### Worked Example: Better fertilizer

| | Before | After |
|---|---|---|
| Maximum wheat (vertical intercept) | 400 tons | 800 tons |
| Maximum computers (horizontal intercept) | 50 | 50 (unchanged) |

**Graph description:** the new curve starts higher on the wheat axis (800 instead of 400) but meets the computer axis at the same place (50). The curve rotates outward around the computer intercept.

### What happens to opportunity cost after a pivot

Wheat is now easier to produce, so every computer the economy makes requires giving up **more** tons of wheat than before. In the simple constant-cost case, the maximums are 800 tons and 50 computers:
- OC of 1 computer = 800 ÷ 50 = **16 tons** of wheat (up from 400 ÷ 50 = 8)
- OC of 1 ton of wheat = 50 ÷ 800 = **0.0625 computers** (down from 0.125)

The good that got the new technology becomes **cheaper** in terms of the other good, and the other good becomes **more expensive** in terms of it.

> 🔑 **AP Connection:** Even though the fertilizer did nothing for computer factories, the economy can still end up with more computers: it now needs fewer resources to grow its wheat, freeing land, labor and capital to make computers. Every point except the computer intercept lies outside the old curve.

## 📖 Capital Goods Today, Growth Tomorrow

**Capital goods** (machines, factories, infrastructure) are used to produce other goods. **Consumer goods** (food, clothing, entertainment) satisfy wants directly. A PPC with capital goods on one axis and consumer goods on the other shows a choice about the future.

### Worked Example: Two countries

| | Country Alpha | Country Beta |
|---|---|---|
| Choice this decade | Point high on the capital-goods axis: 40% of output is capital goods | Point high on the consumer-goods axis: 10% of output is capital goods |
| Consumption today | Lower | Higher |
| PPC next decade | Shifts outward **by more** | Shifts outward by less |

**Graph description:** both countries start on identical PPCs. Alpha picks a point toward the capital-goods axis; Beta picks a point toward the consumer-goods axis. A decade later, Alpha's new PPC lies well outside Beta's because Alpha added more machines and factories.

The trade-off is scarcity across time: consuming less today buys more productive capacity later.
`
    },
    {
      id: 'macrosca4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the answer that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After a technology improvement in wheat only, the opportunity cost of a computer, measured in wheat, ___.',
            options: ['rises', 'falls', 'stays the same', 'becomes zero']
          },
          {
            label: 'A movement from one point on the PPC to another point on it reflects a change in ___.',
            options: ['the chosen mix of output', 'available technology', 'the size of the labor force', 'the stock of capital']
          },
          {
            label: 'A hurricane that destroys roads, ports and factories shifts the PPC ___.',
            options: ['inward', 'outward', 'along itself', 'not at all']
          },
          {
            label: 'Producing more capital goods today tends to shift the PPC ___ in the future.',
            options: ['farther outward', 'farther inward', 'not at all', 'toward the origin']
          }
        ],
        correctAnswers: ['rises', 'the chosen mix of output', 'inward', 'farther outward'],
        hint1: 'If wheat is easier to grow, how much wheat do you sacrifice for each computer?',
        hint2: 'Moving along a fixed curve means capacity has not changed.',
        hint3: 'Capital destroyed means fewer resources.',
        explanation: 'Wheat technology makes each computer cost more wheat. Moving along the curve is a choice of output mix. Destroying capital shrinks capacity, shifting the PPC inward. Investing in capital goods now increases capacity later.'
      }
    },
    {
      id: 'macrosca4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country A devotes 40% of its output to capital goods, while Country B devotes 10%. The two countries are otherwise identical. Over the next decade, which outcome is most likely?',
            options: [
              "Country B's PPC shifts outward by more than A's.",
              "Country A's PPC shifts outward by more than B's.",
              "Both PPCs shift outward by exactly the same amount.",
              "Country A's PPC stays fixed while B's shifts out."
            ],
            correctAnswer: 1,
            explanation: 'More capital goods today add more machines and factories, which raises future productive capacity. Country A gives up some consumption now in exchange for a larger outward shift of its PPC later.'
          },
          {
            question: 'Which change would NOT shift a country\'s production possibilities curve?',
            options: [
              "A rise in the number of working-age adults",
              "A wave of new technology in manufacturing",
              "A rise in unemployment during a recession",
              "The destruction of capital in an earthquake"
            ],
            correctAnswer: 2,
            explanation: 'Unemployed workers are still part of the economy\'s resources, so higher unemployment moves the economy inside its PPC rather than shifting the curve. More workers, new technology and destroyed capital all change productive capacity.'
          }
        ]
      }
    }
  ]
}
