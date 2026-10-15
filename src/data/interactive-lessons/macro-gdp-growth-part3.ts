export const macroGdpGrowthPart3Data = {
  topicSlug: 'macro-gdp-growth',
  sections: [
    {
      id: 'macrogdp3-intro',
      type: 'text' as const,
      content: `
# 📈 GDP & Economic Growth

**Part 3 of 7 — Classifying Transactions: What Counts and Where**

---

| Section |
|---------|
| 📖 The Four Spending Categories in Detail |
| Economic Investment vs. Financial Investment |
| Tricky Cases, One by One |
| Inventories Across Two Years |
| Computing GDP from a Mixed List |

> 🔑 **Key Concept:** To decide whether a transaction belongs in GDP, ask two questions. **1) Is it new production of a final good or service, made inside the country this year?** If not, it is excluded. **2) If it counts, who bought it?** Households (C), businesses or new-home buyers (I), government (G), or foreigners (X, with imports subtracted).
`
    },
    {
      id: 'macrogdp3-categories',
      type: 'text' as const,
      content: `
## 📖 The Four Spending Categories in Detail

### Consumption (C)
Household spending on new goods and services.

| Type | Examples |
|---|---|
| **Durable goods** (last three years or more) | Cars, refrigerators, furniture |
| **Nondurable goods** | Food, gasoline, clothing |
| **Services** | Haircuts, medical care, tuition, streaming subscriptions, rent |

### Investment (I)
Spending on new **capital** that will be used to produce future output, plus new housing and the change in inventories.

| Type | Examples |
|---|---|
| **Business fixed investment** | New machinery, factories, office buildings, business software |
| **Residential investment** | Construction of new houses and apartments, **even when a household buys the new home** |
| **Change in inventories** | Goods produced this year but not yet sold (a positive change); goods from past production sold this year (a negative change) |

### Government Purchases (G)
Spending by federal, state and local governments on goods and services: roads, fighter jets, office supplies and the **salaries of government workers** such as teachers, soldiers and judges (the government is buying their services).

**Not in G:** transfer payments such as Social Security, unemployment benefits and food assistance. They move income from one group to another without buying any current production. The goods those recipients later buy are counted in C.

### Net Exports (Xn = X − M)
- **Exports (X):** goods and services produced here and bought by foreigners. They are domestic production, so they add to GDP.
- **Imports (M):** goods and services produced abroad and bought here. Imports are already counted inside C, I or G when they are bought, so subtracting M removes foreign production from the total.
`
    },
    {
      id: 'macrogdp3-investment',
      type: 'text' as const,
      content: `
## Economic Investment vs. Financial Investment

In everyday speech, "investing" means buying stocks or bonds. In GDP accounting, **investment means buying new physical capital**.

| Transaction | Everyday word | Counted in GDP? |
|---|---|---|
| A tech firm buys new servers | Investment | **Yes, as I** |
| A builder completes a new apartment building | Investment | **Yes, as I** |
| A saver buys 50 shares of stock | Investment | **No.** Ownership changes hands; nothing new is produced |
| A retiree buys a government bond | Investment | **No.** It is a loan, not production |
| The broker's commission on the stock purchase | A fee | **Yes, as C**, because the broker provides a current service |

The money a firm raises by selling new stock may *finance* the purchase of a machine. The machine is counted as I when it is bought. Counting the stock sale too would count the same spending twice.

> 🔑 **AP Connection:** When an AP question says "investment," it means **economic investment** (new capital goods, new housing, inventory change). Stocks, bonds and savings deposits are **financial** assets and are never part of I.
`
    },
    {
      id: 'macrogdp3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A family buys a house that was built this year. In the expenditure approach, the purchase is counted as",
            options: [
              "investment",
              "consumption",
              "government purchases",
              "an excluded asset transfer"
            ],
            correctAnswer: 0,
            explanation: "Construction of new housing is residential investment, even when the buyer is a household. Consumption covers household purchases of other new goods and services, government purchases require a government buyer, and the house is new production, so it is not excluded."
          },
          {
            question: "Which of the following is counted as investment in GDP?",
            options: [
              "A retiree buys shares of a bakery chain's stock",
              "A saver buys a newly issued government bond",
              "A bakery buys a new commercial oven for its shop",
              "A college student buys a new laptop for classes"
            ],
            correctAnswer: 2,
            explanation: "The bakery's new oven is a capital good used to produce future output, so it is investment. Stocks and bonds are financial assets that change ownership without new production, and a student's laptop is a household purchase, which is consumption."
          },
          {
            question: "Which government outlay is included in government purchases (G)?",
            options: [
              "Social Security checks mailed to retirees",
              "Unemployment benefits paid to laid-off workers",
              "Salaries paid to public school teachers",
              "Food assistance paid to low-income families"
            ],
            correctAnswer: 2,
            explanation: "Teacher salaries pay for a current service, teaching, so they are part of G. Social Security, unemployment benefits and food assistance are transfer payments: they redistribute income without buying current production."
          }
        ]
      }
    },
    {
      id: 'macrogdp3-cases',
      type: 'text' as const,
      content: `
## Tricky Cases, One by One

| Transaction | Counted? | Where, and why |
|---|---|---|
| A U.S. household buys a new Ford made in Michigan | Yes | **C**: new final good, domestic production |
| A U.S. household buys a new car made in Germany | Net effect **zero** | Adds to **C** and adds the same amount to **M**, so GDP is unchanged |
| A Japanese automaker's plant in Tennessee builds a car | Yes | **U.S. GDP**: produced inside U.S. borders, whoever owns the plant |
| A U.S. firm's factory in Mexico produces a refrigerator | No (for the U.S.) | It is Mexican GDP. Production abroad by U.S. firms counts in U.S. **GNP**, not GDP |
| A Boeing jet sold to an airline in France | Yes | **X**: domestic production bought by foreigners |
| A used car sold by one person to another | No | It was counted in the year it was built |
| A dealer buys a used car for \\$12,000 and resells it for \\$14,000 | **\\$2,000** only | The dealer's markup pays for a current service; the car itself is used |
| Steel bought by an automaker and used in this year's cars | No (separately) | **Intermediate good**: already inside the price of the cars |
| A homeowner paints her own kitchen | No | **Nonmarket** production: no market transaction |
| A house painter paid to paint the same kitchen | Yes | **C**: a purchased service |
| Cash payments for unreported babysitting | No (in practice) | **Underground economy**: never recorded |
| Grandparents give a \\$500 birthday gift | No | A private transfer, not production |

### Rules That Cover Most Cases
1. **Used goods:** the good is excluded, but any **new service** (dealer markup, broker's commission, realtor's fee) counts.
2. **Intermediate goods:** excluded when used up in this year's final goods.
3. **Imports:** never change GDP by themselves. The amount that enters C, I or G leaves again through M.
4. **Location, not ownership:** GDP counts production inside the borders.
`
    },
    {
      id: 'macrogdp3-inventory',
      type: 'text' as const,
      content: `
## Inventories Across Two Years

GDP measures **production** in a year, not sales. Inventory investment is the bridge between the two.

### Worked Example: A Carmaker

**Year 1:** A carmaker builds 1,000 cars worth \\$30,000 each (\\$30 million total). Households buy 800 of them. The other 200 sit on the lot.

| Year 1 entry | Amount |
|---|---|
| Consumption (800 cars sold) | \\$24 million |
| Inventory investment (200 cars added to inventory) | +\\$6 million |
| **Contribution to Year 1 GDP** | **\\$30 million** |

All 1,000 cars were produced in Year 1, so all \\$30 million counts in Year 1, even the unsold cars.

**Year 2:** The carmaker builds no new cars and sells the 200 stored cars to households.

| Year 2 entry | Amount |
|---|---|
| Consumption (200 cars sold) | +\\$6 million |
| Inventory investment (200 cars removed from inventory) | −\\$6 million |
| **Contribution to Year 2 GDP** | **\\$0** |

The sales show up in Year 2 consumption, but the fall in inventories cancels them, because the cars were produced in Year 1.

> 🔑 **AP Connection:** An unplanned rise in inventories is a sign that spending is weaker than firms expected. Firms respond by cutting production, which is one way a slowdown in spending turns into a recession (Part 5).
`
    },
    {
      id: 'macrogdp3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "In 2025 a toy maker produces \\$10 million of toys but sells only \\$8 million of them. The rest are sold in 2026. How do these toys affect 2025 GDP?",
            options: [
              "GDP rises \\$10 million, with \\$2 million counted as inventory investment",
              "GDP rises \\$8 million, with the other \\$2 million counted in 2026",
              "GDP rises \\$10 million, with \\$2 million counted as consumption",
              "GDP rises \\$6 million, with \\$2 million subtracted as unsold output"
            ],
            correctAnswer: 0,
            explanation: "GDP counts production in the year it happens, so all \\$10 million counts in 2025: \\$8 million of sales plus \\$2 million of inventory investment. When the toys are sold in 2026, the rise in consumption is offset by the fall in inventories."
          },
          {
            question: "A U.S. household buys a new \\$40,000 car that was made in Germany. What is the net effect on U.S. GDP?",
            options: [
              "Minus \\$40,000, because imports are subtracted from GDP",
              "Zero, because consumption and imports rise by \\$40,000 each",
              "Plus \\$40,000, because consumption rises by that amount",
              "Minus \\$40,000, because domestic car sales fall by that amount"
            ],
            correctAnswer: 1,
            explanation: "The purchase adds \\$40,000 to consumption and \\$40,000 to imports, so C + I + G + (X − M) is unchanged. Imports are subtracted only to cancel foreign production already counted in C, so counting just one side of the purchase gives the wrong answer."
          },
          {
            question: "A used-car dealer buys a 2019 car for \\$12,000 and resells it this year for \\$14,000. How much does the transaction add to this year's GDP?",
            options: [
              "\\$2,000",
              "\\$14,000",
              "\\$0",
              "\\$26,000"
            ],
            correctAnswer: 0,
            explanation: "The car was counted when it was produced in 2019, but the dealer's \\$2,000 markup pays for a service produced this year. Counting the resale price or both sales would count an old car again, and \\$0 ignores the dealer's service."
          }
        ]
      }
    },
    {
      id: 'macrogdp3-mixed',
      type: 'text' as const,
      content: `
## Computing GDP from a Mixed List

AP questions often give a list of transactions and ask for GDP. Sort every item before adding.

### Worked Example (all values in billions of dollars)

| Item | Amount | Category |
|---|---|---|
| Household purchases of new goods and services | \\$500 | C |
| Business purchases of new equipment | \\$120 | I |
| Construction of new homes | \\$60 | I |
| Increase in business inventories | \\$20 | I |
| Government purchases of goods and services | \\$200 | G |
| Social Security payments | \\$90 | Excluded (transfer) |
| Purchases of corporate stock | \\$70 | Excluded (financial) |
| Sales of used cars between individuals | \\$40 | Excluded (used goods) |
| Exports | \\$80 | X |
| Imports | \\$110 | M |

**Step 1. Add each category.**
- C = \\$500
- I = \\$120 + \\$60 + \\$20 = \\$200
- G = \\$200
- Xn = \\$80 − \\$110 = −\\$30

**Step 2. Add the categories.**
GDP = \\$500 + \\$200 + \\$200 + (−\\$30) = **\\$870 billion**

The three excluded items total \\$200 billion. Including them is the most common mistake on this kind of question.

> 🔑 **AP Connection:** If inventories **fall**, the change in inventories is negative and must be **subtracted** within I.
`
    },
    {
      id: 'macrogdp3-input',
      type: 'input-boxes' as const,
      content: `
**Your Turn: Sort and Add** ✍️

All values are in billions of dollars.

| Item | Amount |
|---|---|
| Household purchases of new goods and services | \\$1,200 |
| Business purchases of new equipment | \\$250 |
| Construction of new homes | \\$100 |
| Business inventories **fell** by | \\$30 |
| Government purchases of goods and services | \\$400 |
| Government transfer payments | \\$150 |
| Purchases of existing (previously owned) homes | \\$90 |
| Purchases of government bonds | \\$60 |
| Exports | \\$180 |
| Imports | \\$230 |

**1)** What is investment (I)? (billions of dollars, enter the number only, no commas)

**2)** What are net exports (Xn)? (billions of dollars, enter the number only; use a minus sign if negative)

**3)** What is GDP? (billions of dollars, enter the number only, no commas)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['320', '-50', '1870'],
        hint1: 'Investment = new equipment + new homes + the change in inventories. A fall in inventories is a negative change.',
        hint2: 'Net exports = exports − imports.',
        hint3: 'GDP = C + I + G + Xn. Leave out transfers, existing homes and bonds.',
        explanation: 'I = \\$250 + \\$100 − \\$30 = \\$320 billion, and Xn = \\$180 − \\$230 = −\\$50 billion. GDP = \\$1,200 + \\$320 + \\$400 − \\$50 = \\$1,870 billion. Transfer payments, previously owned homes and bond purchases are not new production, so they are excluded.'
      }
    }
  ]
}
