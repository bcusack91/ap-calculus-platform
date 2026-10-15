export const hgUrbanizationPart3Data = {
  topicSlug: 'hg-urbanization',
  sections: [
    {
      id: 'hgurbani3-intro',
      type: 'text' as const,
      content: `
# 🌍 Urbanization

**Part 3 of 7 — City Size and Spacing: Rank-Size, Primacy, Gravity and Central Places**

---

| Section |
|---------|
| 📖 The Rank-Size Rule, Tested with Census Data |
| Primate Cities: Why One City Dominates |
| The Gravity Model |
| Christaller's Central Place Theory |

> 🔑 **Key Concept:** These four ideas work at the **national or regional scale**. They explain how many cities of each size a country has, how strongly cities interact, and why towns are spaced the way they are. Each rests on simplifying assumptions, so each has limits you must be able to name (CED Topic 6.4).
`
    },
    {
      id: 'hgurbani3-ranksize',
      type: 'text' as const,
      content: `
## 📖 The Rank-Size Rule, Tested with Census Data

The **rank-size rule** says the city of rank *n* has about **1/n** the population of the largest city:

$$P_n = \\frac{P_1}{n}$$

**Worked example: U.S. cities, 2020 Census (city limits; populations rounded, percentages computed from the exact counts)**

| Rank | City | Actual population | Rank-size prediction | Actual as % of prediction |
|---|---|---|---|---|
| 1 | New York | about 8.8 million | (the base) | — |
| 2 | Los Angeles | about 3.9 million | 8.8 ÷ 2 = 4.4 million | about 89% |
| 3 | Chicago | about 2.7 million | 8.8 ÷ 3 ≈ 2.9 million | about 94% |
| 4 | Houston | about 2.3 million | 8.8 ÷ 4 = 2.2 million | about 105% |
| 5 | Phoenix | about 1.6 million | 8.8 ÷ 5 ≈ 1.8 million | about 91% |

**Reading the result:** every city falls within about 11% of its prediction, so the U.S. urban hierarchy fits the rule fairly well. A good fit usually signals a large, economically integrated country where many cities share national functions.

**Limitation:** the answer depends on boundaries. City limits leave out suburbs, and ranking **metropolitan areas** instead gives different numbers. The rule describes a pattern; it does not explain why it occurs.

## Primate Cities: Why One City Dominates

Geographer Mark Jefferson described the **primate city** in 1939: a city that is **far larger than the next city**, often more than twice its size, and that dominates the country's economy, politics and culture.

| Country | Primate city | Evidence (rounded, metro areas) |
|---|---|---|
| France | Paris | More than five times the population of Lyon |
| Peru | Lima | About 10 million, roughly ten times Arequipa |
| Thailand | Bangkok | Many times larger than any other Thai city |

### Why Primacy Develops
- **Colonial history:** colonizers concentrated ports, railways and administration in one city, often the place where goods left the colony.
- **Centralized government:** when ministries, universities and media all sit in the capital, investment and migrants follow.
- **Small or export-oriented economies:** one port-capital can handle most trade.

**Misconception:** primacy is not only a feature of less developed countries. France and the United Kingdom are wealthy and still have primate capitals.
`
    },
    {
      id: 'hgurbani3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country\'s largest city has 6 million people. Under the rank-size rule, how many people should its fourth-largest city have?',
            options: [
              '1.5 million',
              '2 million',
              '3 million',
              '4.5 million'
            ],
            correctAnswer: 0,
            explanation: 'The rank-size rule divides the largest city by the rank, so 6 million ÷ 4 = 1.5 million. Dividing by 3 gives the third-largest city, and halving gives the second-largest.'
          },
          {
            question: 'Which factor best explains why many former colonies have a primate city?',
            options: [
              'Imperial powers poured ports, rail lines and offices into one city',
              'Rugged terrain kept rural migrants from reaching smaller cities',
              'Independent governments split their ministries among many towns',
              'Strict birth limits in the capital slowed growth in other cities'
            ],
            correctAnswer: 0,
            explanation: 'Colonial investment focused on one port or capital that tied the colony to the colonizer, and that head start kept attracting jobs and migrants after independence. Spreading ministries among towns would weaken primacy, not create it.'
          }
        ]
      }
    },
    {
      id: 'hgurbani3-gravity',
      type: 'text' as const,
      content: `
## The Gravity Model

The **gravity model** predicts that interaction between two places (trade, migration, phone calls, shopping trips) rises with their populations and falls with the distance between them:

$$\\text{Interaction} \\propto \\frac{P_1 \\times P_2}{d^2}$$

**Worked example (populations in millions, distance in hundreds of km):**
1. City A (4 million) and City B (2 million) are 200 km apart, so $d = 2$: $\\frac{4 \\times 2}{2^2} = \\frac{8}{4} = 2$.
2. City A and City C (8 million) are 400 km apart, so $d = 4$: $\\frac{4 \\times 8}{4^2} = \\frac{32}{16} = 2$.
3. **Conclusion:** City C has four times City B's population but is twice as far away. Because distance is **squared**, doubling the distance cuts interaction to one quarter, which exactly cancels C's fourfold population, so the model predicts equal interaction.

### Uses and Limits
- **Uses:** choosing sites for stores, airports and hospitals; predicting migration flows (it formalizes Ravenstein's observation that most migrants move short distances).
- **Limits:** it treats distance only as kilometers. Borders, language, cost, travel time and the internet can matter more. Two cities across a closed border interact far less than the model predicts.
`
    },
    {
      id: 'hgurbani3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** The largest city in a country has 9 million people. Using the rank-size rule, how many **million** people should the third-largest city have?

**2)** Using the gravity model with populations in millions and distance in hundreds of km, find the interaction index for a city of 6 million and a city of 3 million that are 300 km apart.

**3)** If those two cities were 600 km apart instead, what would the index be?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '2', '0.5'],
        hint1: 'Divide the largest city\'s population by the rank.',
        hint2: 'Multiply the populations, then divide by the distance squared: 6 × 3 ÷ 3².',
        hint3: 'Now the distance is 6, and 6² = 36.',
        explanation: '1) 9 ÷ 3 = 3 million. 2) (6 × 3) ÷ 3² = 18 ÷ 9 = 2. 3) (6 × 3) ÷ 6² = 18 ÷ 36 = 0.5; doubling the distance cut the interaction to one quarter.'
      }
    },
    {
      id: 'hgurbani3-centralplace',
      type: 'text' as const,
      content: `
## Christaller's Central Place Theory

German geographer **Walter Christaller (1933)**, studying towns in southern Germany, asked why settlements of different sizes are spaced the way they are. A **central place** is a settlement that provides goods and services to the surrounding area, its **market area** (or hinterland).

| Term | Meaning | Example |
|---|---|---|
| **Threshold** | The minimum number of customers needed to keep a good or service in business | A heart surgery center needs a far larger population than a gas station |
| **Range** | The maximum distance people will travel to obtain a good or service | People drive a few minutes for milk but hours for a specialist |
| **Low-order goods** | Cheap, frequently bought; low threshold, short range | Groceries, gasoline |
| **High-order goods** | Costly or specialized, bought rarely; high threshold, long range | Major-league sports, luxury stores, specialized hospitals |

### The Pattern the Theory Predicts
- Many **small** central places (hamlets, villages) offer only low-order goods and sit close together.
- Fewer **large** central places (towns, cities) offer high-order goods and sit far apart, each also offering low-order goods.
- Market areas are drawn as **hexagons**: circles would leave gaps or overlap, and hexagons fill the plain with no gaps.

### Assumptions and Limits
Christaller assumed a **flat, uniform plain**, evenly spread population and income, equal transportation in every direction, and shoppers who always go to the nearest center. Real places break each assumption: rivers, mountains and highways bend market areas; people combine errands into one trip; and **online shopping** stretches the range of many goods. The theory fits best in flat farm regions, such as parts of the U.S. Great Plains, where towns are spaced fairly evenly.

> 🔑 **AP Connection:** If a question describes a store closing after a town loses population, the concept is **threshold**. If it describes how far people will drive for a service, the concept is **range**.
`
    },
    {
      id: 'hgurbani3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A rural county loses a third of its people, and its only movie theater closes because ticket sales fall too low. Which concept best explains the closing?',
            options: [
              'The theater\'s range grew longer',
              'The town fell below the threshold',
              'The county became a primate city',
              'The gravity model reversed itself'
            ],
            correctAnswer: 1,
            explanation: 'A threshold is the minimum number of customers a business needs, and the shrinking population fell below it. Range describes travel distance, which did not cause the closing.'
          },
          {
            question: 'Why did Christaller draw market areas as hexagons rather than circles?',
            options: [
              'Hexagons cover a plain with no gaps or overlaps',
              'Hexagons match the shape of most real county lines',
              'Hexagons show that cities grow along six main roads',
              'Hexagons hold more people than circles of equal width'
            ],
            correctAnswer: 0,
            explanation: 'Circular market areas would either leave unserved gaps or overlap, while hexagons tile a flat surface completely. The shape is a geometric idealization, not a claim about roads or county lines.'
          },
          {
            question: 'Which change most directly weakens the predictions of central place theory today?',
            options: [
              'Online shopping lets people buy high-order goods without traveling',
              'Rural populations everywhere have become spread perfectly evenly',
              'Small villages have begun to offer only the highest-order services',
              'Shoppers now always buy every good at the nearest central place'
            ],
            correctAnswer: 0,
            explanation: 'The theory assumes people travel to central places for goods, so online delivery stretches or removes the range limit. An even population and nearest-center shopping are the theory\'s own assumptions, so they would strengthen it.'
          }
        ]
      }
    }
  ]
}
