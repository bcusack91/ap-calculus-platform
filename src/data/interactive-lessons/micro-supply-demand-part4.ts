export const microSupplyDemandPart4Data = {
  topicSlug: 'micro-supply-demand',
  sections: [
    {
      id: 'microsup4-intro',
      type: 'text' as const,
      content: `
# 📈 Supply & Demand

**Part 4 of 7 — Translating Events into Graphs**

---

| Section |
|---------|
| 📖 The Four-Step Method |
| Drawing a Correctly Labeled Market Graph |
| Worked Cases: Demand Events |
| Worked Cases: Supply Events |

> 🔑 **Key Concept:** Almost every supply-and-demand question is the same task in disguise: read a news event, decide **which curve** it moves and **which way**, then read off the new price and quantity. A fixed routine keeps you from guessing.
`
    },
    {
      id: 'microsup4-method',
      type: 'text' as const,
      content: `
## 📖 The Four-Step Method

| Step | Question to ask | Tip |
|---|---|---|
| **1. Name the market** | Which good's price and quantity are we graphing? | Write it as a title: "Market for orange juice." Events in other markets matter only through a determinant. |
| **2. Pick the curve** | Does the event change what **buyers** want or what **sellers** can offer at each price? | Buyer-side determinants move D. Cost or seller-side determinants move S. A change in this good's own price moves neither. |
| **3. Pick the direction** | At the old price, do buyers want more or less? Do sellers offer more or less? | More at every price means a shift right; less means a shift left. |
| **4. Read the result** | Where do the new curve and the unchanged curve cross? | Compare the new price and quantity with the old ones. |

### Single-Shift Results
| Shift | Price | Quantity |
|---|---|---|
| Demand right | Rises | Rises |
| Demand left | Falls | Falls |
| Supply right | Falls | Rises |
| Supply left | Rises | Falls |

A quick memory check: a **demand** shift moves P and Q in the **same** direction; a **supply** shift moves them in **opposite** directions.
`
    },
    {
      id: 'microsup4-graph',
      type: 'text' as const,
      content: `
## 📖 Drawing a Correctly Labeled Market Graph

On the AP free-response section, "draw a correctly labeled graph" has a specific meaning. For a supply-and-demand market graph you need:

| Element | What to draw |
|---|---|
| **Axes** | Vertical axis "Price" (or P); horizontal axis "Quantity" (or Q). Name the good if asked. |
| **Curves** | A downward-sloping curve labeled **D** and an upward-sloping curve labeled **S** |
| **Original equilibrium** | Mark the intersection; dashed lines to the axes labeled **P₁** and **Q₁** |
| **The shift** | Draw the new curve (**D₂** or **S₂**) on the correct side, with an arrow showing direction |
| **New equilibrium** | Dashed lines from the new intersection labeled **P₂** and **Q₂** |

### Worked Example: Described in Text
**Event:** A late frost destroys a large share of Florida's orange crop. Show the effect on the market for orange juice.

1. **Market:** orange juice.
2. **Curve:** oranges are the main input, so producers' costs rise. That changes what sellers can offer, so **supply** moves. Buyers' tastes and incomes are unchanged.
3. **Direction:** at the old price, juice makers offer less, so supply shifts **left** from S₁ to S₂.
4. **Result:** at the old price P₁ there is now a shortage. The price rises to P₂ and buyers move up along D to a smaller quantity Q₂.

**Graph in words:** price on the vertical axis, quantity on the horizontal axis. D slopes down. S₁ slopes up and crosses D at (Q₁, P₁). S₂ sits to the left of S₁ and crosses D higher up and farther left, at (Q₂, P₂), with P₂ above P₁ and Q₂ below Q₁.

> 🔑 **AP Connection:** Notice what the frost did **not** do: it did not shift demand. The higher price reduced **quantity demanded**, which is a movement along D. Graders look for exactly one shifted curve in a single-event question.
`
    },
    {
      id: 'microsup4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A student graphs the effect of a frost on orange juice by shifting supply left and also shifting demand left "because the higher price makes people buy less." What is wrong with the graph?',
            options: [
              'The price change moves buyers along demand and should not shift it',
              'The frost should shift demand left and leave supply alone',
              'Supply should shift right because growers will plant more trees',
              'Demand should shift right because buyers want to beat price rises'
            ],
            correctAnswer: 0,
            explanation: 'The frost is a supply-side event. The resulting higher price lowers quantity demanded, a movement up along the unchanged demand curve, so drawing a second shift double-counts the response. Future replanting is a later event, and nothing in the prompt mentions buyer expectations.'
          },
          {
            question: 'In a single-event question, which pair of results tells you that the supply curve, not the demand curve, shifted?',
            options: [
              'Price and quantity move in opposite directions',
              'Price and quantity move in the same direction',
              'Price and quantity change by equal percentages',
              'Quantity changes while price stays the same'
            ],
            correctAnswer: 0,
            explanation: 'A supply shift slides along a downward-sloping demand curve, so price and quantity move in opposite directions. A demand shift slides along an upward-sloping supply curve, so they move together. With normal slopes, a single shift changes both price and quantity.'
          }
        ]
      }
    },
    {
      id: 'microsup4-demand-cases',
      type: 'text' as const,
      content: `
## 📖 Worked Cases: Demand Events

| Event | Market | Determinant | Shift | P | Q |
|---|---|---|---|---|---|
| Gasoline prices jump | Large SUVs | Price of a complement rises | D left | ↓ | ↓ |
| Streaming subscriptions get cheaper | Movie theater tickets | Price of a substitute falls | D left | ↓ | ↓ |
| A recession cuts incomes | Used cars (inferior for most buyers) | Income falls | D right | ↑ | ↑ |
| A study links blueberries to better memory | Blueberries | Tastes and preferences | D right | ↑ | ↑ |
| A large employer opens a campus in town | Apartments in that town | Number of buyers | D right | ↑ | ↑ |
| Shoppers expect a sales tax hike next month | Televisions (this month) | Buyer expectations | D right | ↑ | ↑ |

### Case Walkthrough: The Recession
1. **Market:** used cars.
2. **Curve:** income is a buyer-side determinant, so **demand**.
3. **Direction:** for most households, a used car is an inferior good: when income falls they switch from new cars to used ones. At every price, more used cars are wanted, so demand shifts **right**.
4. **Result:** price and quantity of used cars both rise.

The same recession shifts demand for **new** cars (a normal good) to the **left**. One event, two markets, opposite shifts: the direction depends on the good's income type.
`
    },
    {
      id: 'microsup4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Build the Graph** 🔍

Event: A drought in Mexico cuts the avocado harvest. Graph the market for avocados.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The curve that shifts is ___',
            options: ['supply', 'demand', 'both curves', 'neither curve']
          },
          {
            label: 'The shift is to the ___',
            options: ['left', 'right', 'left, then back', 'right, then back']
          },
          {
            label: 'The equilibrium price ___',
            options: ['rises', 'falls', 'stays the same', 'cannot be determined']
          },
          {
            label: 'The equilibrium quantity ___',
            options: ['falls', 'rises', 'stays the same', 'cannot be determined']
          }
        ],
        correctAnswers: ['supply', 'left', 'rises', 'falls'],
        hint1: 'Does a drought change what buyers want or what growers can offer?',
        hint2: 'At the old price, will growers offer more or fewer avocados?',
        hint3: 'A supply shift moves price and quantity in opposite directions.',
        explanation: 'The drought reduces what growers can bring to market at every price, so supply shifts left. Along the unchanged demand curve, the price rises and the quantity falls.'
      }
    },
    {
      id: 'microsup4-supply-cases',
      type: 'text' as const,
      content: `
## 📖 Worked Cases: Supply Events

| Event | Market | Determinant | Shift | P | Q |
|---|---|---|---|---|---|
| Lithium battery costs fall | Electric cars | Input price falls | S right | ↓ | ↑ |
| A new strain doubles yields per acre | Rice | Technology | S right | ↓ | ↑ |
| Wages for truck drivers rise | Delivered furniture | Input price rises | S left | ↑ | ↓ |
| Wheat prices soar | Barley (grown on the same land) | Price of a substitute in production | S left | ↑ | ↓ |
| Government pays \\$0.50 per bushel | Corn | Subsidy | S right | ↓ | ↑ |
| Several bakeries close | Bread in that city | Number of sellers | S left | ↑ | ↓ |

### Case Walkthrough: The Subsidy
1. **Market:** corn.
2. **Curve:** a subsidy paid to producers lowers their effective cost, so **supply**.
3. **Direction:** at every price, farmers offer more corn. Supply shifts **right** (down by \\$0.50 at each quantity).
4. **Result:** the price falls and the quantity rises.

### Watch the Wording
"Corn prices fall" in a question is a **result**, not a cause. Ask *why* they fell before deciding which curve moved. If the prompt gives only the result, work backward: a lower price with a higher quantity points to a supply increase.

> 🔑 **AP Connection:** The AP exam often states events in a related market (wheat prices, gasoline prices, streaming prices). Do not graph that other market unless asked. Translate the event into a determinant of the market you were asked about.
`
    },
    {
      id: 'microsup4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Gasoline prices rise sharply. Ceteris paribus, what happens in the market for large SUVs?',
            options: [
              'Demand falls, so price and quantity both fall',
              'Supply falls, so price rises and quantity falls',
              'Demand rises, so price and quantity both go up',
              'Quantity demanded falls but demand is unchanged'
            ],
            correctAnswer: 0,
            explanation: 'Gasoline and SUVs are complements in consumption. Pricier gasoline makes owning an SUV more expensive, so buyers want fewer SUVs at every SUV price: demand shifts left, lowering price and quantity. SUV producers\' costs are not affected by the price of the fuel their buyers use.'
          },
          {
            question: 'In a market, the equilibrium price fell and the equilibrium quantity rose. Assuming only one curve shifted, which event fits?',
            options: [
              'A new technology cuts production costs',
              'Consumers\' incomes rise for a normal good',
              'The price of a key raw material rises',
              'The price of a substitute good falls'
            ],
            correctAnswer: 0,
            explanation: 'Price down with quantity up is the signature of a supply increase, which lower production costs cause. Higher incomes for a normal good raise both price and quantity, a costlier raw material raises price and lowers quantity, and a cheaper substitute lowers both.'
          }
        ]
      }
    }
  ]
};
