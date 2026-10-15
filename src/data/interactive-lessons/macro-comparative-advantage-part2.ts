export const macroComparativeAdvantagePart2Data = {
  topicSlug: 'macro-comparative-advantage',
  sections: [
    {
      id: 'macrocom2-intro',
      type: 'text' as const,
      content: `
# 🌍 Comparative Advantage & Trade

**Part 2 of 7 — Output vs. Input Problems**

---

| Section |
|---------|
| 📖 Two Kinds of Tables |
| Output Problems: "Other Over" |
| Input Problems: "Other Under" |
| Checking Your Work |

> 🔑 **Key Concept:** AP comparative advantage questions come in two formats. An **output** table tells you how much each producer can **make** with a given amount of resources. An **input** table tells you how much time or resources each producer **needs** to make one unit. The formulas flip between the two, so the first step is always to identify the format.
`
    },
    {
      id: 'macrocom2-output',
      type: 'text' as const,
      content: `
## 📖 Two Kinds of Tables

| Clue in the table | Format | Bigger number means | Opportunity cost of good X |
|---|---|---|---|
| "Units produced per day," "tons per worker," "maximum output" | **Output** | More productive | Other good ÷ X ("**other over**") |
| "Hours needed to produce one unit," "workers per ton," "acres per bushel" | **Input** | **Less** productive | X ÷ other good ("**other under**") |

A memory aid many AP teachers use: **O-O-O** (Output: Other goes Over) and **I-O-U** (Input: Other goes Under).

## Output Problems: "Other Over"

### Worked Example: Northland and Southland

One worker in each country, working one day, can produce:

| | Shirts | Hats |
|---|---|---|
| **Northland** | 12 | 6 |
| **Southland** | 8 | 2 |

**Step 1: Absolute advantage.** In an output table, the larger number wins. Northland makes more shirts (12 > 8) **and** more hats (6 > 2), so Northland has the absolute advantage in both goods.

**Step 2: Opportunity costs.** Put the other good over the good you are pricing.

| | OC of 1 shirt | OC of 1 hat |
|---|---|---|
| **Northland** | 6 ÷ 12 = **0.5 hats** | 12 ÷ 6 = **2 shirts** |
| **Southland** | 2 ÷ 8 = **0.25 hats** | 8 ÷ 2 = **4 shirts** |

**Step 3: Comparative advantage.** The lower opportunity cost wins.
- Shirts: Southland gives up 0.25 hats per shirt; Northland gives up 0.5. **Southland** has the comparative advantage in shirts.
- Hats: Northland gives up 2 shirts per hat; Southland gives up 4. **Northland** has the comparative advantage in hats.

Southland has no absolute advantage at all, yet it still has a comparative advantage in shirts. Northland is better at everything, but it is **relatively** better at hats (3 times as many) than at shirts (1.5 times as many).

> 🔑 **AP Connection:** In each row, the two opportunity costs are reciprocals (0.5 and 2; 0.25 and 4). If your two numbers for the same country are not reciprocals, you have made an error.
`
    },
    {
      id: 'macrocom2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In one day, a worker in Arvia can produce 20 pounds of coffee or 10 pounds of tea, and a worker in Belor can produce 12 pounds of coffee or 4 pounds of tea. What is Belor\'s opportunity cost of 1 pound of tea?',
            options: [
              "0.33 pounds of coffee",
              "3 pounds of coffee",
              "2 pounds of coffee",
              "4 pounds of coffee"
            ],
            correctAnswer: 1,
            explanation: 'In an output table, put the other good over the good being priced: 12 coffee ÷ 4 tea = 3 pounds of coffee per pound of tea. The 2-pound figure is Arvia\'s cost (20 ÷ 10), and 0.33 is the reciprocal, which is Belor\'s cost of coffee in tea.'
          },
          {
            question: 'Using the Arvia and Belor data, which statement about advantage is correct?',
            options: [
              "Belor has the comparative advantage in tea, and Arvia in coffee.",
              "Both countries have a comparative advantage in tea.",
              "Arvia has the comparative advantage in tea, and Belor in coffee.",
              "Neither country has a comparative advantage in either good."
            ],
            correctAnswer: 2,
            explanation: 'Arvia gives up 2 coffee per tea, less than Belor\'s 3, so Arvia has the comparative advantage in tea. Belor gives up 1/3 tea per coffee, less than Arvia\'s 1/2, so Belor has the comparative advantage in coffee. No country can have the comparative advantage in both goods.'
          }
        ]
      }
    },
    {
      id: 'macrocom2-input',
      type: 'text' as const,
      content: `
## 📖 Input Problems: "Other Under"

### Worked Example: Eastia and Westia

The table shows the **number of hours** a worker needs to produce one unit:

| | Hours per bike | Hours per TV |
|---|---|---|
| **Eastia** | 4 | 8 |
| **Westia** | 6 | 6 |

**Step 1: Absolute advantage.** In an input table, the **smaller** number wins because it takes fewer resources.
- Bikes: Eastia needs 4 hours, Westia needs 6. **Eastia** has the absolute advantage in bikes.
- TVs: Westia needs 6 hours, Eastia needs 8. **Westia** has the absolute advantage in TVs.

**Step 2: Opportunity costs.** Put the good you are pricing on top and the other good underneath.

| | OC of 1 bike | OC of 1 TV |
|---|---|---|
| **Eastia** | 4 ÷ 8 = **0.5 TVs** | 8 ÷ 4 = **2 bikes** |
| **Westia** | 6 ÷ 6 = **1 TV** | 6 ÷ 6 = **1 bike** |

Why does this work? In Eastia, the 4 hours spent on one bike could have produced 4 ÷ 8 = 0.5 of a TV. The hours for the good you make are divided by the hours each unit of the other good would have taken.

**Step 3: Comparative advantage.**
- Bikes: Eastia's 0.5 TVs < Westia's 1 TV, so **Eastia** has the comparative advantage in bikes.
- TVs: Westia's 1 bike < Eastia's 2 bikes, so **Westia** has the comparative advantage in TVs.

### Checking Your Work: Convert to Output

If you are unsure, convert an input table into an output table by choosing a common number of hours. With a 24-hour day:

| | Bikes in 24 hours | TVs in 24 hours |
|---|---|---|
| **Eastia** | 24 ÷ 4 = 6 | 24 ÷ 8 = 3 |
| **Westia** | 24 ÷ 6 = 4 | 24 ÷ 6 = 4 |

Now use "other over": Eastia's OC of a bike = 3 ÷ 6 = 0.5 TVs, the same answer as before.

> 🔑 **AP Connection:** The most common error on input problems is treating the bigger number as "better." In an input table, a bigger number means the producer needs **more** hours, so it is less productive.
`
    },
    {
      id: 'macrocom2-inputboxes',
      type: 'input-boxes' as const,
      content: `
**Input Table Practice** ✍️

A worker in Rondia needs **2 hours** to produce a ton of rice and **6 hours** to produce a ton of steel. A worker in Talvia needs **3 hours** for a ton of rice and **12 hours** for a ton of steel. Enter numbers only, rounded to two decimal places where needed.

1) What is Rondia's opportunity cost of 1 ton of steel, in tons of rice?

2) What is Talvia's opportunity cost of 1 ton of steel, in tons of rice?

3) What is Talvia's opportunity cost of 1 ton of rice, in tons of steel?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '4', '0.25'],
        hint1: 'Input table: hours for steel ÷ hours for rice, so 6 ÷ 2.',
        hint2: 'Talvia: 12 hours for steel ÷ 3 hours for rice.',
        hint3: 'Talvia: 3 hours for rice ÷ 12 hours for steel. It is the reciprocal of your answer to 2.',
        explanation: 'Rondia\'s steel costs 6 ÷ 2 = 3 tons of rice, and Talvia\'s costs 12 ÷ 3 = 4, so Rondia has the comparative advantage in steel. Talvia\'s rice costs 3 ÷ 12 = 0.25 tons of steel, lower than Rondia\'s 2 ÷ 6 ≈ 0.33, so Talvia has the comparative advantage in rice, even though Rondia has the absolute advantage in both goods.'
      }
    },
    {
      id: 'macrocom2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A table lists the hours needed to produce one unit of each good. Country P needs 5 hours per car, and Country Q needs 8 hours per car. Which conclusion follows directly?',
            options: [
              "Q has the absolute advantage in cars.",
              "P has the comparative advantage in cars.",
              "Q has the comparative advantage in cars.",
              "P has the absolute advantage in cars."
            ],
            correctAnswer: 3,
            explanation: 'In an input table, fewer hours per unit means higher productivity, so P has the absolute advantage in cars. Comparative advantage cannot be determined without the hours each country needs for the other good.'
          },
          {
            question: 'In the Eastia and Westia input table, why does Eastia have the comparative advantage in bikes?',
            options: [
              "A bike costs Eastia 0.5 TVs, less than Westia's 1 TV.",
              "Eastia needs 4 hours per bike, fewer than Westia's 6.",
              "Eastia's cost of a TV is 2 bikes, above Westia's 1 bike.",
              "TVs take Eastia 8 hours, more than Westia's 6 hours."
            ],
            correctAnswer: 0,
            explanation: 'Comparative advantage is about opportunity cost, and Eastia gives up only 0.5 TVs per bike compared with Westia\'s 1 TV. Fewer hours per bike shows absolute advantage, not comparative advantage, and Eastia\'s higher cost of TVs explains why it should not make TVs rather than why it should make bikes.'
          },
          {
            question: 'A producer has an absolute advantage in a good when it',
            options: [
              "gives up less of other goods to produce one unit of it",
              "can produce more of the good with the same resources",
              "exports the good at a price above its opportunity cost",
              "has a lower opportunity cost for every good it produces"
            ],
            correctAnswer: 1,
            explanation: 'Absolute advantage is about productivity: producing more output from the same inputs, or the same output from fewer inputs. Giving up less of other goods describes comparative advantage, and no producer can have a lower opportunity cost in every good.'
          }
        ]
      }
    }
  ]
}
