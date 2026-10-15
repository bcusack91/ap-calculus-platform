export const microSupplyDemandPart6Data = {
  topicSlug: 'micro-supply-demand',
  sections: [
    {
      id: 'microsup6-intro',
      type: 'text' as const,
      content: `
# 📈 Supply & Demand

**Part 6 of 7 — AP Exam Practice: Chains Across Related Markets**

---

| Section |
|---------|
| 📖 How the AP Exam Links Markets |
| Model FRQ: Peanuts, Jelly, and Almond Butter |
| Practice: Multi-Step Chains |
| Writing "Explain" Answers That Score |

> 🔑 **Key Concept:** AP questions rarely stop at one market. A shock in one market changes a **price**, and that price is a **determinant** in the next market. Follow the chain one link at a time: shift, new price, next market's determinant, next shift.
`
    },
    {
      id: 'microsup6-links',
      type: 'text' as const,
      content: `
## 📖 How the AP Exam Links Markets

| Link between goods | Price in market 1 rises → effect in market 2 |
|---|---|
| Substitutes in consumption | Demand in market 2 **increases** |
| Complements in consumption | Demand in market 2 **decreases** |
| Market 1 good is an **input** for market 2 | Supply in market 2 **decreases** |
| Substitutes in production | Supply in market 2 **decreases** |
| Joint products (complements in production) | Supply in market 2 **increases** |

### Worked Chain: Coffee Rust
A fungus wipes out part of Central America's coffee harvest.

1. **Coffee market:** supply shifts left. Price of coffee **rises**, quantity falls.
2. **Tea market (substitute):** the higher coffee price raises demand for tea. Tea price and quantity **rise**.
3. **Coffee creamer market (complement):** less coffee is consumed, so demand for creamer falls. Creamer price and quantity **fall**.
4. **Café drinks market (coffee is an input):** cafés' costs rise, so supply of café lattes shifts left. Latte price **rises**, quantity falls.

Each link uses **one** shift, and the direction comes from the table above.
`
    },
    {
      id: 'microsup6-frq',
      type: 'text' as const,
      content: `
## 📖 Model FRQ: Peanuts, Jelly, and Almond Butter

> **Prompt (adapted, AP style).** Assume all markets are perfectly competitive.
> (a) A drought sharply reduces the U.S. peanut harvest. Draw a correctly labeled graph of the market for peanut butter and show the effect on equilibrium price and quantity, labeled P₂ and Q₂.
> (b) Peanut butter and jelly are complements. What happens to the equilibrium quantity of jelly? Explain.
> (c) Almond butter is a substitute for peanut butter. What happens to the equilibrium price of almond butter? Explain.

### Model Answer
**(a)** Peanuts are the key input for peanut butter, so the drought raises producers' costs. Graph: price on the vertical axis, quantity on the horizontal axis, downward-sloping D, upward-sloping S₁ crossing D at P₁ and Q₁. S₂ is drawn to the left of S₁. The new intersection gives P₂ above P₁ and Q₂ below Q₁.

**(b)** The quantity of jelly **decreases**. Because peanut butter's price rose, consumers buy less peanut butter, and since jelly is used with it, demand for jelly shifts left at every jelly price, lowering jelly's equilibrium quantity.

**(c)** The price of almond butter **increases**. The higher price of peanut butter leads some consumers to switch to almond butter, so demand for almond butter shifts right, raising its equilibrium price.

### What Earned the Points
| Part | Graders look for |
|---|---|
| (a) | Labeled axes, D and S, **S shifts left**, P₂ higher and Q₂ lower shown on the axes |
| (b) | Direction (decreases) **plus** the link: higher peanut butter price → demand for jelly decreases |
| (c) | Direction (increases) **plus** the link: substitute's price rose → demand for almond butter increases |

> 🔑 **AP Connection:** In (b) and (c) the explanation must name the **curve that shifts in that market**. "People buy less jelly" restates the answer. "Demand for jelly decreases because its complement became more expensive" explains it.
`
    },
    {
      id: 'microsup6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Printers and ink cartridges are complements. A shortage of a chip used only in printers raises the cost of making printers. What happens to the equilibrium quantity of ink cartridges?',
            options: [
              'It falls as demand for ink decreases',
              'It falls as supply of ink decreases',
              'It rises as demand for ink increases',
              'It does not change since ink uses no chips'
            ],
            correctAnswer: 0,
            explanation: 'The chip shortage decreases printer supply and raises printer prices, so fewer printers are bought. Demand for the complement, ink, shifts left and ink quantity falls. Ink producers\' costs are unchanged, so the effect on ink runs through demand, not supply.'
          },
          {
            question: 'Which written explanation would earn the point for this prompt: "Gasoline prices rise. What happens to the equilibrium price of bus passes? Explain."',
            options: [
              'Bus pass price rises as demand for this substitute increases',
              'Bus pass price rises as more people will ride the city buses',
              'Bus pass price rises as bus companies pay more to run buses',
              'Bus pass price falls as fewer drivers are left to take buses'
            ],
            correctAnswer: 0,
            explanation: 'The scoring explanation names the shift in the bus-pass market and the reason: bus passes are a substitute for driving, so demand increases. "More people will ride" restates the outcome without the curve, and the fuel-cost story is a supply effect the prompt did not set up.'
          }
        ]
      }
    },
    {
      id: 'microsup6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Follow the Chain** 🔍

A new technology cuts the cost of producing solar panels.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the solar panel market, the equilibrium price ___',
            options: ['falls', 'rises', 'is unchanged', 'is indeterminate']
          },
          {
            label: 'Solar panels and home batteries are complements. Demand for home batteries ___',
            options: ['increases', 'decreases', 'is unchanged', 'is indeterminate']
          },
          {
            label: 'Rooftop solar is a substitute for electricity from the power grid. Demand for grid electricity ___',
            options: ['decreases', 'increases', 'is unchanged', 'is indeterminate']
          }
        ],
        correctAnswers: ['falls', 'increases', 'decreases'],
        hint1: 'Lower costs shift supply right.',
        hint2: 'Cheaper panels mean more panel buyers, who need batteries.',
        hint3: 'Cheaper solar draws some households away from the grid.',
        explanation: 'Lower costs increase solar panel supply, lowering their price. A cheaper complement raises demand for home batteries, and a cheaper substitute lowers demand for grid electricity.'
      }
    },
    {
      id: 'microsup6-writing',
      type: 'text' as const,
      content: `
## 📖 Writing "Explain" Answers That Score

AP free-response task verbs have specific meanings:

| Task verb | What you must write | Example |
|---|---|---|
| **Identify** | The answer only | "Increase." |
| **Explain** | The answer **and** the economic reason, naming the curve that shifts | "Increase, because the price of a substitute rose, so demand for X increases." |
| **Show** (on a graph) | The correct shift and new equilibrium labeled on your graph | S₂ left of S₁, with P₂ and Q₂ marked |
| **Calculate** | The number, with work shown | "TR = \\$4 × 20 = \\$80." |

### A Reliable Sentence Pattern
> "[Outcome] because [event] is a [determinant] for this good, so [curve] shifts [direction]."

Example: "The equilibrium price of tea **rises** because the higher price of coffee, a substitute, causes the **demand** for tea to **increase**."

### Common Point-Losers
- Explaining with the result ("price rises because quantity demanded is higher than before").
- Naming the wrong curve ("supply of tea increases because coffee is more expensive").
- Shifting both curves in a single-event part.
- Leaving off P₂ and Q₂ when the prompt asks you to show them.
`
    },
    {
      id: 'microsup6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A disease cuts the number of dairy cows. Cheese and butter are both made from milk. What happens to the equilibrium price of butter?',
            options: [
              'It rises, since a key input has become more costly',
              'It falls, since cheese buyers switch to butter',
              'It rises, since demand for butter has increased',
              'It falls, since dairy farms now produce less milk'
            ],
            correctAnswer: 0,
            explanation: 'Fewer cows means less milk and a higher milk price. Milk is an input for butter, so butter supply shifts left and its price rises. Buyers switching from cheese would raise, not lower, butter demand, and less milk lowers butter supply rather than its price.'
          },
          {
            question: 'A prompt asks you to "identify" what happens to the equilibrium quantity of jelly. Which response is sufficient?',
            options: [
              'Decreases',
              'Decreases, with a graph of the jelly market',
              'Decreases, with a reason naming the shift',
              'Decreases, with a calculation of the change'
            ],
            correctAnswer: 0,
            explanation: 'An "identify" task needs only the answer. A reason is required for "explain," a graph for "show" or "draw," and a number for "calculate." Extra correct work does not hurt, but it is not required.'
          },
          {
            question: 'Corn is the main feed for chickens. If a corn subsidy lowers corn prices, what happens to the equilibrium price and quantity of chicken?',
            options: [
              'Price falls and quantity rises',
              'Price rises and quantity falls',
              'Price and quantity both rise',
              'Price and quantity both fall'
            ],
            correctAnswer: 0,
            explanation: 'Cheaper feed lowers chicken producers\' costs, so chicken supply shifts right. Along the unchanged demand curve, price falls and quantity rises.'
          }
        ]
      }
    }
  ]
};
