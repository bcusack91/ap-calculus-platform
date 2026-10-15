export const macroComparativeAdvantagePart5Data = {
  topicSlug: 'macro-comparative-advantage',
  sections: [
    {
      id: 'macrocom5-intro',
      type: 'text' as const,
      content: `
# 🌍 Comparative Advantage & Trade

**Part 5 of 7 — Terms of Trade in Depth & Common Misconceptions**

---

| Section |
|---------|
| 📖 Testing a Proposed Price |
| Per-Unit Gains and How They Are Split |
| A Full Trade When One Country Is Better at Everything |
| Misconceptions the AP Exam Targets |

> 🔑 **Key Concept:** The **terms of trade** are the price of one good in units of the other. Trade is mutually beneficial only when that price lies **strictly between** the two countries' opportunity costs. Where it falls inside that range decides how the gains are shared.
`
    },
    {
      id: 'macrocom5-terms',
      type: 'text' as const,
      content: `
## 📖 Testing a Proposed Price

Use Northland and Southland, scaled up to a month of national output:

| | Maximum shirts | Maximum hats | OC of 1 hat | OC of 1 shirt |
|---|---|---|---|---|
| **Northland** | 120 | 60 | 2 shirts | 0.5 hats |
| **Southland** | 80 | 20 | 4 shirts | 0.25 hats |

Northland has the absolute advantage in both goods. Its comparative advantage is in **hats** (2 < 4); Southland's is in **shirts** (0.25 < 0.5). So Northland exports hats and Southland exports shirts.

**Range for the price of 1 hat:** between **2 shirts** (Northland's cost) and **4 shirts** (Southland's cost).

### The two-question test

For any proposed price, ask:
1. Does the **exporter** receive more than it costs to make the good at home?
2. Does the **importer** pay less than it would cost to make the good at home?

| Proposed price of 1 hat | Northland (exports hats; each costs 2 shirts) | Southland (imports hats; each would cost 4 shirts) | Mutually beneficial? |
|---|---|---|---|
| 1.5 shirts | Receives less than its cost; refuses | Pays less than its cost; happy | **No** |
| 3 shirts | Receives 3 > 2; gains 1 shirt per hat | Pays 3 < 4; saves 1 shirt per hat | **Yes** |
| 5 shirts | Receives 5 > 2; happy | Pays more than its cost of 4; refuses | **No** |

### Stating the price the other way

The same range can be written as a price of shirts in hats by taking reciprocals: 1 shirt must trade for between **0.25 and 0.5 hats**. Always check which good the question prices.

> 🔑 **AP Connection:** An FRQ answer such as "Yes, because 3 shirts per hat is between Northland's opportunity cost of 2 shirts and Southland's opportunity cost of 4 shirts" names both costs and earns the point. A bare "yes" does not.
`
    },
    {
      id: 'macrocom5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Northland\'s opportunity cost of a hat is 2 shirts, and Southland\'s is 4 shirts. Which terms of trade would benefit both countries?',
            options: [
              "1 hat for 3 shirts",
              "1 hat for 5 shirts",
              "1 hat for 1.5 shirts",
              "1 hat for 4.5 shirts"
            ],
            correctAnswer: 0,
            explanation: 'A mutually beneficial price for a hat must lie between the two opportunity costs, 2 and 4 shirts. At 3 shirts, Northland earns more than its cost of 2 and Southland pays less than its cost of 4; the other prices fall outside that range.'
          },
          {
            question: 'At terms of 1 hat = 3 shirts, how much does Northland gain on each hat it exports?',
            options: [
              "3 shirts per hat",
              "1 shirt per hat",
              "2 shirts per hat",
              "0.5 shirts per hat"
            ],
            correctAnswer: 1,
            explanation: 'Each hat costs Northland 2 shirts of forgone production and sells for 3 shirts, a gain of 1 shirt per hat. Three shirts is the price received, and 2 shirts is the cost.'
          }
        ]
      }
    },
    {
      id: 'macrocom5-split',
      type: 'text' as const,
      content: `
## 📖 Per-Unit Gains and How They Are Split

At any price inside the range, the total gain per hat traded is the gap between the two opportunity costs: 4 − 2 = **2 shirts**. The price decides who gets how much of that gap.

| Price of 1 hat | Northland's gain per hat (price − 2) | Southland's gain per hat (4 − price) |
|---|---|---|
| 2.5 shirts | 0.5 shirts | 1.5 shirts |
| 3 shirts | 1 shirt | 1 shirt |
| 3.5 shirts | 1.5 shirts | 0.5 shirts |
| 4 shirts | 2 shirts | 0 (Southland gains nothing) |

The closer the price is to a country's **own** opportunity cost, the smaller that country's share of the gain. At either end of the range, one country gets all of the gain and the other is no better off.

## 📖 A Full Trade When One Country Is Better at Everything

**Before trade.** Each country splits its resources in half:

| | Shirts | Hats |
|---|---|---|
| Northland | 60 | 30 |
| Southland | 40 | 10 |
| **Total** | **100** | **40** |

**Specialize.** Southland makes only shirts (80). Northland moves toward hats, producing 50 hats and 20 shirts (50 hats use the resources that could have made 100 shirts, leaving 20).

| | Shirts | Hats |
|---|---|---|
| Northland | 20 | 50 |
| Southland | 80 | 0 |
| **Total** | **100** | **50** |

World output of hats rises by 10 while shirt output stays at 100.

**Trade at 1 hat = 2.5 shirts.** Northland exports 16 hats and receives 16 × 2.5 = 40 shirts.

| | Consumes after trade | Consumed before trade | Gain |
|---|---|---|---|
| **Northland** | 20 + 40 = 60 shirts, 50 − 16 = 34 hats | 60 shirts, 30 hats | +4 hats |
| **Southland** | 80 − 40 = 40 shirts, 16 hats | 40 shirts, 10 hats | +6 hats |

Both countries gain, even though Southland is less productive at everything. Southland gets the larger share because 2.5 shirts is closer to Northland's opportunity cost of 2 than to Southland's of 4.
`
    },
    {
      id: 'macrocom5-input',
      type: 'input-boxes' as const,
      content: `
**Price It the Other Way** ✍️

Use Northland (OC of 1 shirt = 0.5 hats) and Southland (OC of 1 shirt = 0.25 hats). Enter numbers only.

1) What is the lowest price of 1 shirt, in hats, that Southland would accept for its exports?

2) What is the highest price of 1 shirt, in hats, that Northland would pay?

3) At 1 hat = 2.5 shirts, how many shirts does Northland receive if it exports 12 hats?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.25', '0.5', '30'],
        hint1: 'Southland must receive more than it gives up to make a shirt.',
        hint2: 'Northland will not pay more than it gives up to make a shirt itself.',
        hint3: 'Multiply the hats exported by 2.5.',
        explanation: 'Southland exports shirts and needs at least its own cost of 0.25 hats per shirt; Northland imports shirts and will pay at most its own cost of 0.5 hats. Twelve hats at 2.5 shirts each bring Northland 30 shirts.'
      }
    },
    {
      id: 'macrocom5-misconceptions',
      type: 'text' as const,
      content: `
## 📖 Misconceptions the AP Exam Targets

| Misconception | Correct idea |
|---|---|
| "The more productive country should make everything." | It should make the good where its opportunity cost is lower and import the other. |
| "A country can have a comparative advantage in both goods." | Impossible with two goods: the opportunity costs are reciprocals, so a lower cost in one good means a higher cost in the other. |
| "Absolute advantage decides who exports what." | Comparative advantage decides; absolute advantage only measures productivity. |
| "In an input table, the bigger number is better." | In an input table, a bigger number means **more** hours per unit, so it is worse. |
| "Any price helps both countries." | Only prices strictly between the two opportunity costs help both. |
| "The terms of trade must be the midpoint." | Any price inside the range works; the midpoint just splits the gains equally. |
| "If opportunity costs are equal, trade still helps a little." | With equal costs there is no comparative advantage and no gain from specialization. |
| "Trade shifts a country's PPC outward." | Trade lets a country **consume** beyond its PPC; the PPC itself does not move. |

> 🔑 **AP Connection:** When an answer choice says a country has a comparative advantage "in both goods," eliminate it immediately.
`
    },
    {
      id: 'macrocom5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student says Southland cannot benefit from trade because Northland produces more of both goods. Which response best corrects the student?',
            options: [
              "Southland has an absolute advantage in shirts once it specializes.",
              "Northland's higher output means it must share its goods equally.",
              "Southland's lower opportunity cost of shirts still creates gains.",
              "Southland gains only if the terms of trade equal its own cost."
            ],
            correctAnswer: 2,
            explanation: 'Southland gives up only 0.25 hats per shirt, less than Northland\'s 0.5, so it has a comparative advantage in shirts and can gain by specializing and trading. Specializing does not create an absolute advantage, and at a price equal to its own cost Southland would gain nothing.'
          },
          {
            question: 'The terms of trade are set exactly at Southland\'s opportunity cost of 1 hat = 4 shirts. Which outcome follows?',
            options: [
              "Southland receives all of the gains from trade",
              "The gains are split equally between the two",
              "World output falls below its pre-trade level",
              "Northland receives all of the gains from trade"
            ],
            correctAnswer: 3,
            explanation: 'Paying 4 shirts for a hat leaves Southland exactly as well off as making the hat itself, so the whole 2-shirt gap per hat goes to Northland. World output is still higher because each good is made by the lower-cost producer.'
          },
          {
            question: 'Which statement about trade between two countries is a misconception?',
            options: [
              "One country can hold the comparative advantage in both goods.",
              "A country can have an absolute advantage in both goods.",
              "Each country's two opportunity costs are reciprocals.",
              "Gains depend on differences in opportunity costs."
            ],
            correctAnswer: 0,
            explanation: 'With two goods, a lower opportunity cost in one good means a higher opportunity cost in the other, so no country can hold the comparative advantage in both. A country can be more productive at both goods, and the other two statements are true.'
          }
        ]
      }
    }
  ]
}
