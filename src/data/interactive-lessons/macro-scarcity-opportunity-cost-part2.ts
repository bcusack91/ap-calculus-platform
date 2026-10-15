export const macroScarcityOpportunityCostPart2Data = {
  topicSlug: 'macro-scarcity-opportunity-cost',
  sections: [
    {
      id: 'macrosca2-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Opportunity Cost

**Part 2 of 7 — Scarcity, Choice & Economic Systems**

---

| Section |
|---------|
| 📖 Scarcity Is Not a Shortage |
| Microeconomics vs. Macroeconomics |
| Positive vs. Normative Statements |
| Explicit and Implicit Opportunity Costs |
| Thinking at the Margin |
| How Economic Systems Answer the Three Questions |

> 🔑 **Key Concept:** Part 1 showed that scarcity forces every society to choose. This part sharpens the vocabulary the AP exam uses to talk about those choices: what scarcity is (and is not), how to count **all** of an opportunity cost, and how market, command and mixed economies decide what, how and for whom to produce.
`
    },
    {
      id: 'macrosca2-scarcity',
      type: 'text' as const,
      content: `
## 📖 Scarcity Is Not a Shortage

**Scarcity** is the permanent condition of having limited resources (land, labor, capital and entrepreneurship) but unlimited wants. It applies to every person, firm and country at every moment, rich or poor.

A **shortage** is a temporary market condition: at the current price, quantity demanded is greater than quantity supplied. A shortage disappears when the price rises to equilibrium. Scarcity never disappears.

| | Scarcity | Shortage |
|---|---|---|
| **What it is** | Limited resources relative to wants | Quantity demanded > quantity supplied at a given price |
| **How long it lasts** | Always | Until price adjusts (or a price ceiling is removed) |
| **Who faces it** | Everyone | Buyers in one particular market |
| **Example** | A city has only so much land for parks, homes and roads | Concert tickets priced at \\$20 sell out in minutes |

Even goods that seem "free" are scarce if using them has an opportunity cost. A public library book costs you nothing at checkout, but the library's budget, shelf space and staff time could have been used for something else.

## Microeconomics vs. Macroeconomics

| Branch | Studies | Typical questions |
|---|---|---|
| **Microeconomics** | Individual decision makers: households, firms, single markets | How does a tax on soda change soda sales? How many workers should a firm hire? |
| **Macroeconomics** | The economy as a whole | What causes recessions? Why does the overall price level rise? What makes real GDP grow over decades? |

AP Macroeconomics still begins with scarcity and opportunity cost because every macro question (how much to spend on defense vs. schools, whether to consume now or invest for later) is a trade-off for the whole society.

## Positive vs. Normative Statements

| Positive statement | Normative statement |
|---|---|
| Describes what **is**, was or will be | Says what **ought** to be |
| Can be checked against evidence, even if it turns out false | Rests on values; evidence alone cannot settle it |
| "A higher minimum wage reduces employment of teenagers." | "The minimum wage should be raised to \\$20." |

Words such as **should**, **ought**, **fair** and **too much** usually mark a normative claim. A positive statement can be wrong and still be positive.

> 🔑 **AP Connection:** Multiple-choice items often ask which statement is normative. Look for the value judgment, not for whether the claim sounds correct.
`
    },
    {
      id: 'macrosca2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a normative economic statement?',
            options: [
              "The unemployment rate fell from 4.1% to 3.9% last year.",
              "Raising the minimum wage would reduce teen employment.",
              "The government ought to cut taxes on working families.",
              "Higher interest rates reduce spending on new homes."
            ],
            correctAnswer: 2,
            explanation: 'Saying the government ought to cut taxes is a value judgment that evidence alone cannot settle. The other three statements can be checked against data, so they are positive even if one of them turned out to be false.'
          },
          {
            question: 'Which situation describes scarcity rather than a shortage?',
            options: [
              "A city has limited land, so a new park means fewer homes.",
              "Tickets priced at \\$20 sell out and many fans are turned away.",
              "A rent ceiling leaves many renters unable to find apartments.",
              "Gas stations run dry after a price freeze during a storm."
            ],
            correctAnswer: 0,
            explanation: 'Limited land that forces a trade-off between parks and homes is scarcity, a permanent condition that no price change removes. The ticket, rent-ceiling and price-freeze cases are shortages: quantity demanded exceeds quantity supplied at a price held below equilibrium.'
          },
          {
            question: 'Which question would be studied in macroeconomics rather than microeconomics?',
            options: [
              "How does a rise in coffee prices change tea purchases?",
              "How many workers should a bakery hire this month?",
              "What causes the overall price level to keep rising over time?",
              "How does a tax on cigarettes affect cigarette sales?"
            ],
            correctAnswer: 2,
            explanation: 'The overall price level is an economy-wide variable, so explaining inflation is a macroeconomic question. Coffee and tea purchases, one bakery\'s hiring and a single tax on cigarettes all concern individual markets or firms.'
          }
        ]
      }
    },
    {
      id: 'macrosca2-oc',
      type: 'text' as const,
      content: `
## 📖 Explicit and Implicit Opportunity Costs

Part 1 defined opportunity cost as the value of the **next-best alternative** given up. When you measure it in dollars, count two kinds of cost:

| Type | Meaning | Example |
|---|---|---|
| **Explicit cost** | A payment of money to someone else | Tuition, materials, wages paid to workers |
| **Implicit cost** | The value of something you already own or could earn, given up by this choice | The salary you give up to go to school; rent you could have collected on a building you use yourself |

A cost that is the **same under every option** (or was already paid and cannot be recovered, a **sunk cost**) is not part of the opportunity cost of the choice.

### Worked Example: A Summer Internship

Priya can take an unpaid internship, work at a camp for \\$4,000, or work at a café for \\$3,200. The internship requires \\$600 in commuting costs she would not otherwise pay. She pays \\$1,000 in rent for the summer no matter what she does.

| Item | Counted? | Amount |
|---|---|---|
| Camp wages given up (her next-best option) | Yes, implicit | \\$4,000 |
| Café wages | No, the café is not her next-best option | \\$0 |
| Commuting | Yes, explicit (only paid if she interns) | \\$600 |
| Rent | No, paid under every option | \\$0 |
| **Opportunity cost of the internship** | | **\\$4,600** |

## Thinking at the Margin

Most choices are not all-or-nothing. A city does not choose between "all police" and "no police"; it chooses whether to hire **one more** officer. Economists call this **marginal** (incremental) thinking:

- **Marginal benefit (MB):** the extra benefit from one more unit
- **Marginal cost (MC):** the extra cost of one more unit
- Keep doing an activity while MB ≥ MC; stop when the next unit would cost more than it adds

Because of scarcity, the marginal cost of more of one good is the opportunity cost of the other goods given up. On the PPC (Parts 3 and 4), that marginal cost is the slope of the curve.

> 🔑 **AP Connection:** When an FRQ asks for the opportunity cost of a decision, list only what changes because of the decision. Sunk costs and costs paid under every option are distractors.
`
    },
    {
      id: 'macrosca2-input',
      type: 'input-boxes' as const,
      content: `
**Count the Opportunity Cost** ✍️

Use Priya's internship example. Enter dollar amounts as numbers only (no \\$ sign or commas).

1) What is the implicit cost of taking the internship?

2) What is the total opportunity cost of the internship?

3) The camp closes and the café job (\\$3,200) becomes her next-best option. What is the new total opportunity cost of the internship?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4000', '4600', '3800'],
        hint1: 'The implicit cost is the wage from her single next-best job, not the sum of both jobs.',
        hint2: 'Add the explicit commuting cost to the implicit cost. Rent is paid either way.',
        hint3: 'Swap the camp wage for the café wage, then add commuting again.',
        explanation: 'The implicit cost is the \\$4,000 camp wage. Adding the \\$600 commute gives \\$4,600; rent is excluded because she pays it under every option. If the café becomes her next-best option, the cost is \\$3,200 + \\$600 = \\$3,800.'
      }
    },
    {
      id: 'macrosca2-systems',
      type: 'text' as const,
      content: `
## 📖 How Economic Systems Answer the Three Questions

Every society must decide **what** to produce, **how** to produce it and **for whom**. An **economic system** is the set of institutions that answers those questions.

| System | Who decides | What? | How? | For whom? |
|---|---|---|---|---|
| **Market (free-enterprise)** | Individuals and firms, coordinated by prices | Goods buyers are willing to pay for at a price that covers cost | Methods that keep cost lowest, chosen by firms competing for profit | People with the income and willingness to pay |
| **Command (centrally planned)** | Government planners | Output targets set by the plan | Methods assigned by planners | Allocation rules set by the state |
| **Mixed** | Markets for most goods, government for some | Mostly market choices, plus public goods (roads, defense) | Mostly firms, under regulation | Market incomes adjusted by taxes and transfers |

Every real economy is **mixed**; countries differ in how much weight they give to markets vs. government.

### What makes a market system work

- **Prices as signals:** a rising price tells producers a good has become more valued and tells buyers to economize on it.
- **Incentives:** profit rewards firms that produce what buyers want at low cost; losses push resources out of uses buyers value less.
- **Property rights:** people invest and produce when they can keep the returns. Without enforceable property rights, incentives to save, build and innovate weaken.

> 🔑 **AP Connection:** Scarcity is the reason every system has to ration. A market rations by price and willingness to pay; a command economy rations by plan. Neither eliminates scarcity.
`
    },
    {
      id: 'macrosca2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A cost that was already paid and cannot be recovered is a ___ cost.',
            options: ['sunk', 'implicit', 'marginal', 'explicit']
          },
          {
            label: 'The salary a student gives up to attend college full time is an ___ cost.',
            options: ['explicit', 'implicit', 'sunk', 'accounting']
          },
          {
            label: 'In a ___ economy, central planners set output targets and allocate goods.',
            options: ['market', 'mixed', 'command', 'traditional']
          },
          {
            label: 'A city deciding whether to hire one more firefighter is using ___ analysis.',
            options: ['marginal', 'normative', 'aggregate', 'absolute']
          }
        ],
        correctAnswers: ['sunk', 'implicit', 'command', 'marginal'],
        hint1: 'This cost is the same no matter what you decide next.',
        hint2: 'No money changes hands, but something valuable is given up.',
        hint3: 'Think about decisions made by one more unit at a time.',
        explanation: 'A sunk cost is already spent and irrelevant to future choices. Forgone salary is an implicit cost. Command economies rely on central planners. Weighing one more firefighter is marginal analysis.'
      }
    },
    {
      id: 'macrosca2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a market economy, the question of "for whom to produce" is answered mainly by',
            options: [
              "a central planning board's allocation rules",
              "consumers' incomes and willingness to pay",
              "customs passed down between generations",
              "equal shares assigned to every household"
            ],
            correctAnswer: 1,
            explanation: 'In a market system, goods go to the buyers who are willing and able to pay the market price, so income and willingness to pay decide who receives output. Planning boards are the command-economy answer, customs are the traditional answer, and equal shares describe no real market system.'
          },
          {
            question: 'A business owner runs her shop in a building she owns. She could rent the building to another firm for \\$2,000 a month. In the opportunity cost of running her shop, the \\$2,000 is',
            options: [
              "a sunk cost that should be left out",
              "an explicit cost paid to a landlord",
              "an implicit cost to be counted",
              "zero, since she already owns the building"
            ],
            correctAnswer: 2,
            explanation: 'By using the building herself she gives up \\$2,000 a month in rent she could have collected, which is an implicit cost. It is not sunk, because she gives it up again each month, and it is not explicit, because no payment is made to anyone.'
          }
        ]
      }
    }
  ]
}
