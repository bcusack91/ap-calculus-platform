export const macroScarcityOpportunityCostPart6Data = {
  topicSlug: 'macro-scarcity-opportunity-cost',
  sections: [
    {
      id: 'macrosca6-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Opportunity Cost

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How PPC Free-Response Points Are Earned |
| FRQ Practice 1: Drawing and Explaining a PPC |
| FRQ Practice 2: Working from a Table |

> 🔑 **Key Concept:** PPC questions appear on both sections of the AP Macroeconomics exam. Multiple-choice items test calculations and vocabulary; free-response items ask you to **draw**, **label**, **calculate** and **explain**. This part walks through two FRQ-style problems with model answers.
`
    },
    {
      id: 'macrosca6-rules',
      type: 'text' as const,
      content: `
## 📖 How PPC Free-Response Points Are Earned

| Task word | What earns the point | Common way to lose it |
|---|---|---|
| **Draw a correctly labeled graph** | Both axes labeled with the two goods; the curve drawn with the right shape | Unlabeled axes or a straight line when increasing cost is required |
| **Plot and label a point** | The point placed in the right region (on, inside, outside) and labeled with the letter asked for | Placing an "unemployment" point on the curve |
| **Calculate** | The correct number, with work shown when asked | Giving a total when the question asks for a per-unit cost |
| **Explain** | A cause-and-effect sentence that names the economic reason | Restating the result ("the curve shifts because it shifts") |
| **Show the effect** | The new curve drawn and labeled (for example, PPC2) relative to the original | Shifting the whole curve when only one good is affected |

**Shape rule:** draw a bowed-out (concave) curve unless the problem gives constant opportunity costs. A straight line is only correct when the opportunity cost is the same everywhere.

## 📖 FRQ Practice 1: Drawing and Explaining a PPC

**Prompt.** Country Zeta produces only consumer goods and capital goods, and its resources are not equally suited to producing both.
- (a) Draw a correctly labeled PPC for Zeta. Label a point **A** where Zeta is productively efficient.
- (b) Explain why the opportunity cost of producing more capital goods increases as Zeta produces more of them.
- (c) Zeta's unemployment rate rises sharply. Label a point **B** on your graph that shows the new situation.
- (d) Suppose instead that Zeta moves from A to a point with more capital goods and fewer consumer goods. What happens to Zeta's PPC in the future? Explain.

**Model answer.**
- (a) Capital goods on the horizontal axis, consumer goods on the vertical axis. A curve bowed outward from the origin, running from the consumer-goods axis to the capital-goods axis. Point A sits anywhere on the curve.
- (b) Resources are specialized. The first capital goods are made with the resources best suited to capital goods (and least useful for consumer goods). As Zeta produces more, it must shift resources that are better at making consumer goods, so each additional unit of capital goods costs more consumer goods.
- (c) Point B is inside the PPC, below and to the left of A. The PPC does not shift, because the unemployed workers are still part of Zeta's resources.
- (d) Zeta's PPC shifts outward in the future. More capital goods (machines, factories) increase the economy's productive capacity.

> 🔑 **AP Connection:** In part (b), "because resources are not perfectly adaptable" earns the point; "because capital goods are expensive" does not. Price is not the reason for increasing opportunity cost.
`
    },
    {
      id: 'macrosca6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On FRQ Practice 1, a student draws Zeta\'s PPC as a straight line. Why would this graph miss the point for part (a)?',
            options: [
              "A straight line shows constant opportunity cost instead of rising cost.",
              "A straight line shows that no resources are being used efficiently.",
              "A straight line shows that the economy is in a recession.",
              "A straight line shows that capital goods are unattainable."
            ],
            correctAnswer: 0,
            explanation: 'The prompt says Zeta\'s resources are not equally suited to both goods, which means increasing opportunity cost and a bowed-out curve. A straight line implies constant opportunity cost, though every point on it would still be productively efficient.'
          },
          {
            question: 'Which explanation would earn the point for part (b), why Zeta\'s opportunity cost of capital goods rises?',
            options: [
              "Capital goods are more expensive to buy than consumer goods are.",
              "Resources better suited to consumer goods must be shifted to capital goods.",
              "The economy runs out of resources as it makes more capital goods.",
              "Consumers value capital goods more as more of them are produced."
            ],
            correctAnswer: 1,
            explanation: 'Increasing opportunity cost comes from specialized resources: later units of capital goods require resources that were more productive making consumer goods. Prices and preferences do not determine the shape of the PPC, and total resources are fixed along the curve.'
          },
          {
            question: 'Zeta moves from a point with more consumer goods to a point with more capital goods. What happens to Zeta\'s PPC in the long run?',
            options: [
              "It shifts inward as consumer goods output falls.",
              "It shifts outward only if consumption rises too.",
              "It shifts outward as productive capacity grows.",
              "It stays fixed; only Zeta's chosen point changes."
            ],
            correctAnswer: 2,
            explanation: 'Producing more capital goods today means producing fewer consumer goods, so current consumption falls, but the added machines and factories raise future productive capacity. The PPC therefore shifts outward later, whether or not consumption rises in the meantime.'
          }
        ]
      }
    },
    {
      id: 'macrosca6-frq2',
      type: 'text' as const,
      content: `
## 📖 FRQ Practice 2: Working from a Table

**Prompt.** The table shows the production possibilities for a country that produces tractors and corn.

| Point | Tractors | Corn (thousands of bushels) |
|---|---|---|
| P | 0 | 60 |
| Q | 5 | 55 |
| R | 10 | 45 |
| S | 15 | 30 |
| T | 20 | 0 |

- (a) Calculate the opportunity cost of one tractor when moving from Q to R.
- (b) Is the combination of 10 tractors and 40 thousand bushels of corn productively efficient? Explain.
- (c) Is the combination of 15 tractors and 35 thousand bushels attainable? Explain.
- (d) Does this table show constant or increasing opportunity cost of tractors? Use numbers to support your answer.

**Model answer.**
- (a) Corn falls from 55 to 45 thousand bushels (10 thousand) while tractors rise by 5. OC = 10 ÷ 5 = **2 thousand bushels per tractor**.
- (b) **No.** With 10 tractors the country can produce 45 thousand bushels, so 40 thousand is inside the PPC. Some resources are unemployed or misallocated.
- (c) **No.** With 15 tractors the maximum is 30 thousand bushels, so 35 thousand lies outside the PPC.
- (d) **Increasing.** The opportunity cost per tractor is 1 (P to Q), 2 (Q to R), 3 (R to S) and 6 (S to T) thousand bushels, rising as more tractors are produced.

| Move | Corn given up (thousands) | Tractors gained | OC per tractor (thousands of bushels) |
|---|---|---|---|
| P → Q | 5 | 5 | 1 |
| Q → R | 10 | 5 | 2 |
| R → S | 15 | 5 | 3 |
| S → T | 30 | 5 | 6 |

> 🔑 **AP Connection:** For a "calculate" question, show the subtraction and the division. A correct number with no work can still earn the point, but shown work protects you if you make an arithmetic slip in a later part that depends on it.
`
    },
    {
      id: 'macrosca6-input',
      type: 'input-boxes' as const,
      content: `
**Your Turn: Tractors and Corn** ✍️

Use the tractors-and-corn table. Enter numbers only, in thousands of bushels.

1) What is the opportunity cost of one tractor when moving from S to T?

2) How much corn in total is given up when moving from P to S?

3) What is the average opportunity cost per tractor for the move from P to S?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '30', '2'],
        hint1: 'Corn falls from 30 to 0 while tractors rise from 15 to 20.',
        hint2: 'Subtract corn at S from corn at P.',
        hint3: 'Divide the total corn given up by the 15 tractors gained.',
        explanation: 'S to T gives up 30 thousand bushels for 5 tractors, or 6 thousand each. P to S gives up 60 − 30 = 30 thousand bushels in total, which spread over 15 tractors averages 2 thousand bushels per tractor.'
      }
    },
    {
      id: 'macrosca6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the tractors-and-corn table, the combination of 10 tractors and 40 thousand bushels of corn is',
            options: [
              "on the PPC, so it is productively efficient",
              "outside the PPC, so it cannot be produced",
              "on the PPC, but not allocatively efficient",
              "inside the PPC, so resources are underused"
            ],
            correctAnswer: 3,
            explanation: 'At 10 tractors the country can produce up to 45 thousand bushels, so 40 thousand is below the maximum. That puts the combination inside the curve, where some resources are idle or misused.'
          },
          {
            question: 'Based on the tractors-and-corn table, the opportunity cost of tractors',
            options: [
              "rises as more tractors are produced",
              "falls as more tractors are produced",
              "stays constant at every point shown",
              "equals the corn output at each point"
            ],
            correctAnswer: 0,
            explanation: 'Each group of 5 tractors costs 5, then 10, then 15, then 30 thousand bushels, so the per-tractor cost rises from 1 to 6 thousand bushels. That is increasing opportunity cost, and the corn output itself is not the cost.'
          }
        ]
      }
    }
  ]
}
