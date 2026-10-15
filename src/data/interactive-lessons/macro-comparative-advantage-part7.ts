export const macroComparativeAdvantagePart7Data = {
  topicSlug: 'macro-comparative-advantage',
  sections: [
    {
      id: 'macrocom7-intro',
      type: 'text' as const,
      content: `
# 🌍 Comparative Advantage & Trade

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Four-Step Method |
| Formula Sheet |
| What Each Concept Answers |
| Mixed Review |

> 🔑 **Key Concept:** Trade is mutually beneficial because opportunity costs differ. Every problem in this topic is a version of the same routine: find opportunity costs, compare them, assign specialization, and check that the terms of trade lie between the two costs.
`
    },
    {
      id: 'macrocom7-review',
      type: 'text' as const,
      content: `
## 📖 The Four-Step Method

| Step | What to do | Where it was taught |
|---|---|---|
| 1. Identify the table | Output (units made) or input (hours or resources per unit)? | Part 2 |
| 2. Absolute advantage | Output: bigger number. Input: smaller number. | Parts 1–2 |
| 3. Opportunity costs and comparative advantage | Output: other over. Input: other under. Lower cost wins. | Parts 1–2, 4 |
| 4. Specialize and trade | Each country exports its comparative-advantage good at a price between the two costs | Parts 3, 5 |

## Formula Sheet

| Situation | Opportunity cost of 1 unit of X |
|---|---|
| Output table (Y and X produced) | Y ÷ X |
| Input table (hours for X and for Y) | hours for X ÷ hours for Y |
| Straight-line PPC, X on horizontal axis | vertical intercept ÷ horizontal intercept (the slope) |
| Check | The OC of Y is the reciprocal of the OC of X |
| Mutually beneficial price of X | Strictly between the two countries' OCs of X |
| Gain per unit for the exporter of X | price − exporter's OC |
| Gain per unit for the importer of X | importer's OC − price |

## What Each Concept Answers

| Concept | Question it answers | Does NOT answer |
|---|---|---|
| **Absolute advantage** | Who is more productive at this good? | Who should export it |
| **Comparative advantage** | Who should specialize in and export this good? | Who is "better" overall |
| **Terms of trade** | At what price do both sides gain, and how are gains split? | Whether trade raises total output |
| **Specialization** | How can world output rise with the same resources? | Whether gains are shared equally |
| **Consumption beyond the PPC** | How can a country consume more than it can produce alone? | Whether its PPC has shifted (it has not) |

### Worked Example: The whole routine in one pass

| | Radios per day | Phones per day |
|---|---|---|
| **Country M** | 50 | 25 |
| **Country N** | 30 | 30 |

1. Output table.
2. Absolute advantage: M in radios (50 > 30); N in phones (30 > 25).
3. OC of a phone: M = 50 ÷ 25 = 2 radios; N = 30 ÷ 30 = 1 radio. N has the comparative advantage in phones; M has it in radios (0.5 phones < 1 phone).
4. A price of 1 phone between 1 and 2 radios, such as 1.5 radios, benefits both. N exports phones and gains 0.5 radios per phone; M imports phones and saves 0.5 radios per phone.

> 🔑 **AP Connection:** Comparative advantage is the opening topic of AP Macroeconomics, but the same logic returns in the open-economy unit: countries export goods they produce at a relatively low opportunity cost and import goods that would be relatively costly to make at home.
`
    },
    {
      id: 'macrocom7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review: Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a day, Country M can make 50 radios or 25 phones, and Country N can make 30 radios or 30 phones. Which country has the comparative advantage in phones?',
            options: [
              "M, which gives up 2 radios per phone",
              "M, which gives up 0.5 phones per radio",
              "N, which gives up 1 radio per phone",
              "M, which makes more radios per day"
            ],
            correctAnswer: 2,
            explanation: 'Each phone costs N only 1 radio but costs M 2 radios, so N has the comparative advantage in phones. M\'s cost of 0.5 phones per radio shows its comparative advantage in radios, and making more radios is absolute advantage.'
          },
          {
            question: 'Using the same data, which price for 1 phone would benefit both Country M and Country N?',
            options: [
              "0.5 radios",
              "2.5 radios",
              "3 radios",
              "1.5 radios"
            ],
            correctAnswer: 3,
            explanation: 'A mutually beneficial price must lie between N\'s cost of 1 radio and M\'s cost of 2 radios per phone. Only 1.5 radios falls strictly inside that range.'
          },
          {
            question: 'Which best explains why specialization based on comparative advantage raises total world output?',
            options: [
              "Each good is produced where it costs the least of other goods.",
              "Each country gains new resources once it begins to trade.",
              "Each country specializes in the good it makes the most of.",
              "Each country charges higher prices for its exports."
            ],
            correctAnswer: 0,
            explanation: 'When every good is made by the producer that gives up the least to make it, the same resources yield more total output. Trade adds no new resources, and the highest-output producer (absolute advantage) is not always the lowest-cost one.'
          }
        ]
      }
    },
    {
      id: 'macrocom7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Review: Calculations** ✍️

Use Country M (50 radios or 25 phones) and Country N (30 radios or 30 phones). Enter numbers only.

1) What is N's opportunity cost of 1 radio, in phones?

2) What is M's opportunity cost of 1 radio, in phones?

3) At 1 phone = 1.5 radios, how many radios does M save on each phone it imports instead of making it?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '0.5', '0.5'],
        hint1: 'Output table: other over. Divide N\'s phones by its radios.',
        hint2: 'Divide M\'s 25 phones by its 50 radios.',
        hint3: 'Making a phone costs M 2 radios. How much does it pay instead?',
        explanation: 'N gives up 30 ÷ 30 = 1 phone per radio and M gives up 25 ÷ 50 = 0.5 phones per radio, so M has the comparative advantage in radios. Importing a phone for 1.5 radios instead of giving up 2 saves M 0.5 radios per phone.'
      }
    },
    {
      id: 'macrocom7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review: Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country G needs 3 hours to make a pen and 6 hours to make a notebook. Country H needs 2 hours per pen and 8 hours per notebook. Which country has the comparative advantage in notebooks?',
            options: [
              "H, at 4 pens per notebook",
              "G, at 2 pens per notebook",
              "H, at 0.25 notebooks per pen",
              "H, at 2 hours fewer per pen"
            ],
            correctAnswer: 1,
            explanation: 'In an input table, a notebook costs G 6 ÷ 3 = 2 pens and costs H 8 ÷ 2 = 4 pens, so G has the lower opportunity cost. H\'s cost of 0.25 notebooks per pen gives it the comparative advantage in pens, and fewer hours per pen is absolute advantage.'
          },
          {
            question: 'Which change would eliminate all gains from specialization and trade between two countries?',
            options: [
              "One country gaining an absolute advantage in both goods",
              "The terms of trade moving to the midpoint of the range",
              "Their opportunity costs becoming identical",
              "One country doubling its output of both goods"
            ],
            correctAnswer: 2,
            explanation: 'Gains from trade exist only when opportunity costs differ. Absolute advantage in both goods, a midpoint price, or doubling both outputs (which leaves the ratio unchanged) all leave the gains in place.'
          },
          {
            question: 'After specializing and trading, a country consumes a bundle outside its own PPC. This is possible because',
            options: [
              "trade shifts its PPC outward by adding new resources",
              "trade allows it to use more labor than it has",
              "trade raises the productivity of its workers directly",
              "trade lets it buy goods for less than it costs to make them"
            ],
            correctAnswer: 3,
            explanation: 'The country imports goods at a price below its own opportunity cost of producing them, so it ends up with more than its resources alone could make. Its PPC, which reflects its resources and technology, does not move.'
          }
        ]
      }
    }
  ]
}
