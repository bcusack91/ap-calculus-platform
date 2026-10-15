export const macroComparativeAdvantagePart4Data = {
  topicSlug: 'macro-comparative-advantage',
  sections: [
    {
      id: 'macrocom4-intro',
      type: 'text' as const,
      content: `
# 🌍 Comparative Advantage & Trade

**Part 4 of 7 — Comparative Advantage on PPC Graphs**

---

| Section |
|---------|
| 📖 Building Two PPCs from a Table |
| Reading Advantage from the Graph |
| When One PPC Lies Outside the Other |
| Drawing Consumption Possibilities with Trade |

> 🔑 **Key Concept:** For a straight-line PPC, the **intercepts** show each country's maximum output (absolute advantage), and the **slope** shows its opportunity cost (comparative advantage). The AP exam asks you to read both from a graph and to show how trade lets a country consume beyond its PPC.
`
    },
    {
      id: 'macrocom4-graphs',
      type: 'text' as const,
      content: `
## 📖 Building Two PPCs from a Table

Use Ardon and Belmar from Part 3. Each can produce, in a month:

| | Maximum shirts | Maximum hats |
|---|---|---|
| **Ardon** | 40 | 20 |
| **Belmar** | 30 | 30 |

**The graph, described:** put hats on the horizontal axis and shirts on the vertical axis.
- Ardon's PPC is a straight line from (0 hats, 40 shirts) to (20 hats, 0 shirts).
- Belmar's PPC is a straight line from (0 hats, 30 shirts) to (30 hats, 0 shirts).
- The two lines cross at 10 hats and 20 shirts.

## Reading Advantage from the Graph

| What you read | How | Ardon | Belmar | Conclusion |
|---|---|---|---|---|
| Absolute advantage in shirts | Higher vertical intercept | 40 | 30 | Ardon |
| Absolute advantage in hats | Farther horizontal intercept | 20 | 30 | Belmar |
| OC of 1 hat (slope, ignoring the sign) | Vertical intercept ÷ horizontal intercept | 40 ÷ 20 = 2 shirts | 30 ÷ 30 = 1 shirt | Belmar has the lower OC of hats |
| OC of 1 shirt | Horizontal intercept ÷ vertical intercept | 20 ÷ 40 = 0.5 hats | 30 ÷ 30 = 1 hat | Ardon has the lower OC of shirts |

### The slope rule

With good X on the horizontal axis:
- A **flatter** PPC means a **lower** opportunity cost of X (each unit of X gives up less of the vertical-axis good).
- A **steeper** PPC means a **lower** opportunity cost of the vertical-axis good.

Belmar's line (slope 1) is flatter than Ardon's (slope 2), so Belmar has the comparative advantage in hats and Ardon has it in shirts.

> 🔑 **AP Connection:** Crossing PPCs mean each country has an absolute advantage in one good. That is a coincidence of these numbers, not a requirement for trade. Comparative advantage comes from the **slopes**, never from which line is "higher."
`
    },
    {
      id: 'macrocom4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'With hats on the horizontal axis, Belmar\'s PPC is flatter than Ardon\'s. What does the flatter slope show?',
            options: [
              "Belmar has the lower opportunity cost of shirts.",
              "Belmar has the absolute advantage in shirts.",
              "Belmar is more productive in both of the goods.",
              "Belmar has the lower opportunity cost of hats."
            ],
            correctAnswer: 3,
            explanation: 'The slope of a PPC is the opportunity cost of the horizontal-axis good, so a flatter line means each hat costs fewer shirts. Belmar gives up 1 shirt per hat compared with Ardon\'s 2, which is a comparative advantage in hats.'
          },
          {
            question: 'Ardon\'s and Belmar\'s straight-line PPCs cross at 10 hats and 20 shirts. The crossing tells you that',
            options: [
              "each country has an absolute advantage in one of the two goods",
              "the two countries have identical opportunity costs",
              "neither country can gain from specialization",
              "both countries are producing at the same point"
            ],
            correctAnswer: 0,
            explanation: 'Because the lines cross, Ardon reaches farther on the shirts axis and Belmar reaches farther on the hats axis, so each has an absolute advantage in one good. The slopes differ, so their opportunity costs differ and both can gain from trade.'
          }
        ]
      }
    },
    {
      id: 'macrocom4-outside',
      type: 'text' as const,
      content: `
## 📖 When One PPC Lies Outside the Other

### Worked Example: Kestra and Lumen

| | Maximum corn (tons) | Maximum steel (tons) |
|---|---|---|
| **Kestra** | 100 | 50 |
| **Lumen** | 30 | 30 |

**The graph, described:** steel on the horizontal axis, corn on the vertical axis. Kestra's line runs from (0, 100) to (50, 0). Lumen's line runs from (0, 30) to (30, 0) and lies entirely inside Kestra's.

| | Kestra | Lumen |
|---|---|---|
| Absolute advantage | Both goods (100 > 30 and 50 > 30) | Neither |
| Slope = OC of 1 ton of steel | 100 ÷ 50 = **2 tons of corn** | 30 ÷ 30 = **1 ton of corn** |
| OC of 1 ton of corn | 50 ÷ 100 = **0.5 tons of steel** | 30 ÷ 30 = **1 ton of steel** |
| Comparative advantage | **Corn** (0.5 < 1) | **Steel** (1 < 2) |

Lumen's line is inside Kestra's, but it is **flatter**. That flatter slope gives Lumen the comparative advantage in steel, the horizontal-axis good.

### A note on bowed-out PPCs

With a bowed-out PPC, opportunity cost changes along the curve, so comparative advantage depends on where each country is producing. AP comparative advantage problems almost always use straight-line PPCs, where the opportunity cost is the same at every point.
`
    },
    {
      id: 'macrocom4-trade',
      type: 'text' as const,
      content: `
## 📖 Drawing Consumption Possibilities with Trade

Once a country specializes, the **terms of trade** determine what it can consume. Draw a **consumption possibilities line** (or trade line) starting from the country's specialization point, with a slope equal to the terms of trade.

### Worked Example: Ardon at 1 hat = 1.5 shirts

1. **Specialize.** Ardon produces 40 shirts and 0 hats: the point (0 hats, 40 shirts) on its vertical intercept.
2. **Trade.** Every 1.5 shirts Ardon exports buys 1 hat. If Ardon traded all 40 shirts, it would get 40 ÷ 1.5 ≈ 26.7 hats.
3. **Draw.** The trade line runs from (0, 40) to about (26.7, 0). Its slope is 1.5, flatter than Ardon's PPC slope of 2.
4. **Compare.** At 10 hats, the PPC allows 20 shirts, while the trade line allows 40 − 1.5 × 10 = **25 shirts**. Every point on the trade line except the starting point lies **outside** Ardon's PPC.

| Hats consumed | Shirts on Ardon's PPC | Shirts on Ardon's trade line |
|---|---|---|
| 0 | 40 | 40 |
| 10 | 20 | 25 |
| 20 | 0 | 10 |

### Belmar at the same terms

Belmar specializes at (30 hats, 0 shirts). Exporting all 30 hats would bring 30 × 1.5 = **45 shirts**, so its trade line runs from (30, 0) up to (0, 45), steeper than its PPC (slope 1). If Belmar keeps 20 hats and exports 10, it gets 15 shirts, while on its own PPC 20 hats leaves room for only 10 shirts.

> 🔑 **AP Connection:** The trade line pivots out from the country's specialization point. If the terms of trade equal a country's own opportunity cost, the trade line lies exactly on its PPC and that country gains nothing.
`
    },
    {
      id: 'macrocom4-input',
      type: 'input-boxes' as const,
      content: `
**Read the Graphs** ✍️

Use the Kestra and Lumen graph, and Belmar's trade line at 1 hat = 1.5 shirts. Enter numbers only.

1) What is Kestra's opportunity cost of 1 ton of steel, in tons of corn?

2) What is Lumen's opportunity cost of 1 ton of corn, in tons of steel?

3) Belmar specializes in hats (30) and trades at 1 hat = 1.5 shirts. What is the most shirts Belmar could consume (the vertical intercept of its trade line)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1', '45'],
        hint1: 'Divide Kestra\'s corn intercept by its steel intercept.',
        hint2: 'Lumen\'s two intercepts are equal.',
        hint3: 'Multiply the 30 hats by 1.5 shirts per hat.',
        explanation: 'Kestra\'s slope is 100 ÷ 50 = 2 tons of corn per ton of steel. Lumen\'s intercepts are both 30, so each ton of corn costs 1 ton of steel. Trading all 30 hats at 1.5 shirts each gives Belmar at most 45 shirts.'
      }
    },
    {
      id: 'macrocom4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Ardon specializes in shirts and trades at 1 hat = 1.5 shirts. With hats on the horizontal axis, Ardon\'s consumption possibilities line',
            options: [
              "starts at 40 shirts and is steeper than its PPC",
              "starts at 40 shirts and is flatter than its PPC",
              "starts at 20 hats and lies inside its PPC",
              "matches its PPC at every single point"
            ],
            correctAnswer: 1,
            explanation: 'Ardon begins at its specialization point of 40 shirts, and each hat now costs only 1.5 shirts instead of 2. The flatter trade line lies outside Ardon\'s PPC everywhere except at the starting point.'
          },
          {
            question: 'Kestra\'s PPC lies entirely outside Lumen\'s PPC. Which conclusion is justified by that fact alone?',
            options: [
              "Lumen has no comparative advantage in either good.",
              "Lumen cannot gain anything by trading with Kestra.",
              "Kestra has the absolute advantage in both goods.",
              "Kestra and Lumen have the same opportunity costs."
            ],
            correctAnswer: 2,
            explanation: 'A PPC that lies outside another reaches farther on both axes, so that country can produce more of each good. Comparative advantage depends on the slopes, and no country can have the comparative advantage in both goods.'
          },
          {
            question: 'Which feature of a straight-line PPC shows the opportunity cost of the good on the horizontal axis?',
            options: [
              "the vertical intercept",
              "the horizontal intercept",
              "the area under the line",
              "the slope of the line"
            ],
            correctAnswer: 3,
            explanation: 'The slope, ignoring its negative sign, is the vertical-axis good given up per unit of the horizontal-axis good. The intercepts show maximum output of each good, which is about absolute advantage.'
          }
        ]
      }
    }
  ]
}
