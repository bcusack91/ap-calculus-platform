export const macroGdpGrowthPart2Data = {
  topicSlug: 'macro-gdp-growth',
  sections: [
    {
      id: 'macrogdp2-intro',
      type: 'text' as const,
      content: `
# 📈 GDP & Economic Growth

**Part 2 of 7 — The Circular Flow & Three Ways to Measure GDP**

---

| Section |
|---------|
| 📖 The Circular Flow Model |
| Adding Government, Banks and the Rest of the World |
| Three Ways to Measure GDP |
| One Economy, Three Measurements |

> 🔑 **Key Concept:** Every dollar spent on a final good or service becomes a dollar of income for someone. Because **total spending = total income = the value of total output**, GDP can be measured three ways: by adding up **spending** (expenditure approach), **incomes** (income approach) or the **value added** at each stage of production.
`
    },
    {
      id: 'macrogdp2-flow',
      type: 'text' as const,
      content: `
## 📖 The Circular Flow Model

The **circular flow model** shows how money, goods and resources move between the two main groups of decision makers in an economy.

### The Two-Sector Model

| Decision maker | What it sells | Where it sells | What it buys | Where it buys |
|---|---|---|---|---|
| **Households** | Factors of production (land, labor, capital, entrepreneurship) | **Factor (resource) markets** | Goods and services | **Product markets** |
| **Firms** | Goods and services | **Product markets** | Factors of production | **Factor (resource) markets** |

Picture two boxes, Households on the left and Firms on the right, with a market above them and a market below them.

- **Product market (top loop):** goods and services flow from firms to households. Consumer spending flows the opposite way, from households to firms, and becomes firms' **revenue**.
- **Factor market (bottom loop):** land, labor, capital and entrepreneurship flow from households to firms. Firms pay for them, and those payments become household **income**.

| Factor | Payment households receive |
|---|---|
| Land | Rent |
| Labor | Wages |
| Capital | Interest |
| Entrepreneurship | Profit |

### Real Flows vs. Money Flows

Each loop has two flows moving in opposite directions:

| Flow | Direction in the product market | Direction in the factor market |
|---|---|---|
| **Real flow** (things) | Goods and services: firms → households | Resources: households → firms |
| **Money flow** (payments) | Consumer spending: households → firms | Factor income: firms → households |

The money flow is the key to GDP. Firms' revenue from selling goods is paid out as wages, rent, interest and profit, so the **spending** in the top loop equals the **income** in the bottom loop.

> ⚠️ **Watch the direction.** Households are *sellers* in factor markets and *buyers* in product markets. Firms are the reverse. Students often reverse these on the exam.
`
    },
    {
      id: 'macrogdp2-sectors',
      type: 'text' as const,
      content: `
## Adding Government, Banks and the Rest of the World

The full model adds three more players.

| Sector | Money it receives | Money it pays out |
|---|---|---|
| **Government** | Taxes from households and firms | Purchases of goods and services (G, including the wages of government workers) and transfer payments to households |
| **Financial sector** (banks, bond and stock markets) | Household saving | Loans to firms that buy capital (I) |
| **Rest of the world** | Payments for imports | Payments for exports (X) |

### Leakages and Injections

Some income does not return to firms as consumer spending. These are **leakages**. Other spending enters the flow from outside household consumption. These are **injections**.

| Leakages (drain spending from the flow) | Injections (add spending to the flow) |
|---|---|
| **Saving (S)** | **Investment (I)** |
| **Taxes (T)** | **Government purchases (G)** |
| **Imports (M)** | **Exports (X)** |

When injections exceed leakages, total spending grows. When leakages exceed injections, total spending shrinks. This is a first look at why spending, output and income rise and fall together over the business cycle.

> 🔑 **AP Connection:** Transfer payments (Social Security, unemployment benefits) move from government to households in the circular flow, but they are **not** part of G and **not** part of GDP. Only government *purchases* of goods and services count.
`
    },
    {
      id: 'macrogdp2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "In the circular flow model, firms pay wages, rent, interest and profit to households in exchange for",
            options: [
              "the resources households sell in factor markets",
              "the goods households buy in product markets",
              "the taxes households pay to the government",
              "the savings households lend through banks"
            ],
            correctAnswer: 0,
            explanation: "Wages, rent, interest and profit are payments for land, labor, capital and entrepreneurship, which households sell to firms in factor markets. Spending on goods runs from households to firms in product markets, and taxes and saving flow to government and banks, not to firms in exchange for income."
          },
          {
            question: "In the circular flow model, which pair of flows passes through the product market?",
            options: [
              "Labor services one way, wage income the other",
              "Goods one way, consumer spending the other",
              "Tax payments one way, public goods the other",
              "Household saving one way, bank loans the other"
            ],
            correctAnswer: 1,
            explanation: "In the product market, firms supply goods and services and households pay for them with consumer spending. Labor and wages pass through the factor market, taxes and public goods involve government, and saving and loans pass through the financial sector."
          },
          {
            question: "Which of the following is an injection into the circular flow?",
            options: [
              "A household puts part of its paycheck into savings",
              "A firm buys new machinery for its factory",
              "A family buys a television made in Japan",
              "A worker pays federal income tax on wages"
            ],
            correctAnswer: 1,
            explanation: "Business purchases of new capital are investment, an injection that adds spending to the flow. Saving, imports such as the Japanese television, and taxes are leakages because they drain income away from spending on domestic output."
          }
        ]
      }
    },
    {
      id: 'macrogdp2-approaches',
      type: 'text' as const,
      content: `
## Three Ways to Measure GDP

Because spending on output, the income from producing it and the value of the output itself are the same flow seen from different sides, all three methods give the same GDP.

### 1. The Expenditure Approach

Add up spending on **final** goods and services by the four groups of buyers:

**GDP = C + I + G + Xn**, where Xn = exports − imports.

This is the approach used most on the AP exam (Part 3 practices classifying spending).

### 2. The Income Approach

Add up the incomes earned by the owners of the factors of production:

**Income approach (simple model): wages + rent + interest + profit**

| Income | Amount |
|---|---|
| Wages and salaries | \\$600 billion |
| Rent | \\$50 billion |
| Interest | \\$80 billion |
| Profit | \\$170 billion |
| **Total** | **\\$900 billion** |

In the official U.S. accounts, the sum of factor incomes is called **national income**, and a few adjustments (such as depreciation and sales taxes) are added to reach GDP. When a problem gives only the four factor incomes, add them.

### 3. The Value-Added Approach

**Value added** = a firm's sales revenue − the cost of the intermediate goods it bought from other firms.

Adding the value added at every stage counts each part of production exactly once, so the total equals the price of the final good.

| Stage | Sales price | Cost of intermediate input | Value added |
|---|---|---|---|
| Farmer grows wheat | \\$0.40 | \\$0 | \\$0.40 |
| Miller grinds flour | \\$1.00 | \\$0.40 | \\$0.60 |
| Baker bakes bread | \\$2.50 | \\$1.00 | \\$1.50 |
| Grocer sells loaf to a consumer | \\$3.50 | \\$2.50 | \\$1.00 |
| **Total** | \\$7.40 | | **\\$3.50** |

The total value added (**\\$3.50**) equals the final sale price of the bread. Adding every sale (**\\$7.40**) would count the wheat four times and the flour three times. That is **double counting**, and it is why GDP counts only **final** goods and services.

> 🔑 **AP Connection:** If a question asks for GDP from a chain of sales, either take the price paid by the final user or add the value added at each stage. Never add all the sales together.
`
    },
    {
      id: 'macrogdp2-island',
      type: 'text' as const,
      content: `
## One Economy, Three Measurements

An island economy has two firms and no government or trade.

**Fishing company:** catches fish using only its own boats and labor. It sells \\$300 of fish to the restaurant and \\$200 of fish directly to households. It pays \\$350 in wages, and its owners keep \\$150 in profit.

**Restaurant:** buys \\$300 of fish from the fishing company and sells \\$900 of meals to households. It pays \\$400 in wages, \\$100 in rent and keeps \\$100 in profit.

### Expenditure approach (final goods only)

| Final purchase | Amount |
|---|---|
| Fish bought by households | \\$200 |
| Meals bought by households | \\$900 |
| **GDP** | **\\$1,100** |

The \\$300 of fish sold to the restaurant is an intermediate good. It is already inside the price of the meals.

### Value-added approach

| Firm | Sales | − Intermediate inputs | = Value added |
|---|---|---|---|
| Fishing company | \\$500 | \\$0 | \\$500 |
| Restaurant | \\$900 | \\$300 | \\$600 |
| **GDP** | | | **\\$1,100** |

### Income approach

| Firm | Wages | Rent | Profit | Total income |
|---|---|---|---|---|
| Fishing company | \\$350 | \\$0 | \\$150 | \\$500 |
| Restaurant | \\$400 | \\$100 | \\$100 | \\$600 |
| **GDP** | | | | **\\$1,100** |

All three methods give **\\$1,100**. Notice that each firm's value added equals the income it pays out: whatever is left after paying for inputs goes to workers, landlords and owners.
`
    },
    {
      id: 'macrogdp2-input',
      type: 'input-boxes' as const,
      content: `
**Value Added in Action** ✍️

A lumber company cuts trees and sells the wood to a furniture maker for \\$120. The furniture maker builds a table and sells it to a furniture store for \\$300. The store sells the table to a household for \\$450. The lumber company buys no inputs from other firms.

**1)** What is the furniture maker's value added? (dollars, enter the number only)

**2)** What is the store's value added? (dollars, enter the number only)

**3)** How much does this table add to GDP? (dollars, enter the number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['180', '150', '450'],
        hint1: 'Value added = the firm\'s sales minus what it paid other firms for inputs. The furniture maker sold for \\$300 and paid \\$120 for wood.',
        hint2: 'The store sold for \\$450 and paid \\$300 for the table.',
        hint3: 'Add the value added at all three stages, or take the price paid by the final user.',
        explanation: 'The furniture maker adds \\$300 − \\$120 = \\$180 and the store adds \\$450 − \\$300 = \\$150. With the lumber company\'s \\$120, total value added is \\$120 + \\$180 + \\$150 = \\$450, the price the household paid. Adding all three sales (\\$870) would double count the wood and the wholesale table.'
      }
    },
    {
      id: 'macrogdp2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A farmer sells cotton to a mill for \\$2, the mill sells cloth to a clothing maker for \\$5, and the clothing maker sells a shirt to a consumer for \\$12. How much does this production add to GDP?",
            options: [
              "\\$19",
              "\\$12",
              "\\$7",
              "\\$17"
            ],
            correctAnswer: 1,
            explanation: "Only the final good counts, so the shirt adds \\$12. The value added is \\$2 + \\$3 + \\$7 = \\$12, the same answer. Adding every sale to get \\$19 double counts the cotton and the cloth."
          },
          {
            question: "Why do the expenditure approach and the income approach give the same value of GDP?",
            options: [
              "Each dollar spent on final output is received as income by someone",
              "Government sets incomes equal to spending through its tax system",
              "Households spend every dollar of income on domestic final goods",
              "Firms earn no profit once all spending is counted in the economy"
            ],
            correctAnswer: 0,
            explanation: "Spending on final output is revenue to firms, and that revenue is paid out as wages, rent, interest and profit, so total spending equals total income. Households do save and buy imports, firms do earn profit (which counts as income), and taxes do not force the two totals to match."
          },
          {
            question: "Using the income approach in the simple model, which list gives the items that are added to find GDP?",
            options: [
              "Consumption, investment, government purchases and net exports",
              "Wages, rent, interest and profit paid to factor owners",
              "Sales revenue of every firm at each stage of production",
              "Wages, transfer payments, interest and stock market gains"
            ],
            correctAnswer: 1,
            explanation: "The income approach adds the payments to the four factors of production: wages, rent, interest and profit. C + I + G + Xn is the expenditure approach, adding every firm's sales double counts intermediate goods, and transfer payments and stock gains are not income from current production."
          }
        ]
      }
    }
  ]
}
