export const macroGdpGrowthPart4Data = {
  topicSlug: 'macro-gdp-growth',
  sections: [
    {
      id: 'macrogdp4-intro',
      type: 'text' as const,
      content: `
# 📈 GDP & Economic Growth

**Part 4 of 7 — Real vs. Nominal GDP Calculations**

---

| Section |
|---------|
| 📖 Building Nominal and Real GDP from Prices and Quantities |
| Worked Example: Pizzas and Books |
| Growth Rates and Inflation from the Deflator |
| Real GDP per Capita |

> 🔑 **Key Concept:** **Nominal GDP** values this year's output at **this year's prices**. **Real GDP** values this year's output at **base-year prices**, so it changes only when quantities change. The **GDP deflator** compares the two: deflator = (nominal GDP ÷ real GDP) × 100.
`
    },
    {
      id: 'macrogdp4-build',
      type: 'text' as const,
      content: `
## 📖 Building Nominal and Real GDP from Prices and Quantities

Part 1 used the shortcut real GDP = (nominal GDP ÷ deflator) × 100. Here you build both measures from the underlying data, which is how the deflator itself is found.

| Measure | Prices used | Quantities used | Formula for each year |
|---|---|---|---|
| **Nominal GDP** | That year's prices | That year's quantities | Sum of (current P × current Q) |
| **Real GDP** | **Base-year** prices | That year's quantities | Sum of (base-year P × current Q) |
| **GDP deflator** | | | (Nominal GDP ÷ Real GDP) × 100 |

Three facts follow directly from these formulas:
1. **In the base year, nominal GDP = real GDP**, so the deflator is exactly **100**.
2. If prices have risen since the base year, the deflator is **above 100** and real GDP is **below** nominal GDP.
3. If prices have fallen since the base year, the deflator is **below 100** and real GDP is **above** nominal GDP.

Because real GDP holds prices fixed, a change in real GDP can come only from a change in the **quantity** of goods and services produced. That is why economists use real GDP to measure growth.
`
    },
    {
      id: 'macrogdp4-example',
      type: 'text' as const,
      content: `
## Worked Example: Pizzas and Books

An economy produces only pizzas and books. The base year is **2022**.

| Year | Price of pizza | Pizzas | Price of book | Books |
|---|---|---|---|---|
| 2022 (base) | \\$10 | 100 | \\$20 | 50 |
| 2023 | \\$12 | 110 | \\$22 | 60 |
| 2024 | \\$13 | 120 | \\$25 | 60 |

### Step 1. Nominal GDP (current prices × current quantities)
- 2022: (\\$10 × 100) + (\\$20 × 50) = \\$1,000 + \\$1,000 = **\\$2,000**
- 2023: (\\$12 × 110) + (\\$22 × 60) = \\$1,320 + \\$1,320 = **\\$2,640**
- 2024: (\\$13 × 120) + (\\$25 × 60) = \\$1,560 + \\$1,500 = **\\$3,060**

### Step 2. Real GDP (2022 prices × current quantities)
- 2022: (\\$10 × 100) + (\\$20 × 50) = **\\$2,000** (same as nominal: it is the base year)
- 2023: (\\$10 × 110) + (\\$20 × 60) = \\$1,100 + \\$1,200 = **\\$2,300**
- 2024: (\\$10 × 120) + (\\$20 × 60) = \\$1,200 + \\$1,200 = **\\$2,400**

### Step 3. GDP deflator
- 2022: (\\$2,000 ÷ \\$2,000) × 100 = **100**
- 2023: (\\$2,640 ÷ \\$2,300) × 100 = **114.8**
- 2024: (\\$3,060 ÷ \\$2,400) × 100 = **127.5**

### Summary

| Year | Nominal GDP | Real GDP | Deflator |
|---|---|---|---|
| 2022 | \\$2,000 | \\$2,000 | 100 |
| 2023 | \\$2,640 | \\$2,300 | 114.8 |
| 2024 | \\$3,060 | \\$2,400 | 127.5 |

From 2022 to 2024, nominal GDP rose by more than half, but real GDP rose by only 20%. Most of the increase in nominal GDP came from higher prices, not more output.

> 🔑 **AP Connection:** The most common error is using **current-year prices** when computing real GDP. Real GDP always multiplies **this year's quantities** by the **base year's prices**.
`
    },
    {
      id: 'macrogdp4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Between two years, nominal GDP rose from \\$800 billion to \\$880 billion, and the GDP deflator rose from 100 to 110. What happened to real GDP?",
            options: [
              "It rose 10% to \\$880 billion",
              "It was unchanged at \\$800 billion",
              "It fell 10% to \\$720 billion",
              "It rose 1% to \\$808 billion"
            ],
            correctAnswer: 1,
            explanation: "Real GDP in the second year is (\\$880 billion ÷ 110) × 100 = \\$800 billion, the same as the first year. The whole 10% rise in nominal GDP came from higher prices, so the quantity of output did not change."
          },
          {
            question: "In a given year the GDP deflator is 90. Which statement must be true for that year?",
            options: [
              "Prices are lower than in the base year, and real GDP exceeds nominal GDP",
              "Prices are higher than in the base year, and real GDP exceeds nominal GDP",
              "Prices are lower than in the base year, and nominal GDP exceeds real GDP",
              "Prices are higher than in the base year, and nominal GDP exceeds real GDP"
            ],
            correctAnswer: 0,
            explanation: "A deflator below 100 means the price level is below its base-year level. Since real GDP = (nominal GDP ÷ 90) × 100, dividing by a number less than 100 makes real GDP larger than nominal GDP."
          },
          {
            question: "Why is real GDP computed by multiplying each year's quantities by base-year prices?",
            options: [
              "So that GDP is reported in the dollars of the current year",
              "So that goods whose prices changed are left out of the total",
              "So that changes in the total reflect only changes in output",
              "So that GDP can be compared across countries with other currencies"
            ],
            correctAnswer: 2,
            explanation: "Holding prices at base-year levels means the total can change only when quantities change, so real GDP tracks output. Current-year dollars describe nominal GDP, all goods stay in the total, and currency conversion is a separate problem."
          }
        ]
      }
    },
    {
      id: 'macrogdp4-growth',
      type: 'text' as const,
      content: `
## Growth Rates and Inflation from the Deflator

Every growth rate in this unit uses the same formula:

**Percent change = ((new value − old value) ÷ old value) × 100**

### Applying It to the Pizza-and-Book Economy

| Change | 2022 → 2023 | 2023 → 2024 |
|---|---|---|
| Nominal GDP growth | (\\$2,640 − \\$2,000) ÷ \\$2,000 = **32.0%** | (\\$3,060 − \\$2,640) ÷ \\$2,640 = **15.9%** |
| Real GDP growth | (\\$2,300 − \\$2,000) ÷ \\$2,000 = **15.0%** | (\\$2,400 − \\$2,300) ÷ \\$2,300 = **4.3%** |
| Inflation (deflator) | (114.8 − 100) ÷ 100 = **14.8%** | (127.5 − 114.8) ÷ 114.8 = **11.1%** |

Two things to notice:
- **Inflation from a price index is a percent change, not a difference in points.** From 114.8 to 127.5 is a rise of 12.7 index points, but the inflation rate is 11.1%.
- **Nominal growth ≈ real growth + inflation.** For 2023 → 2024: 4.3% + 11.1% = 15.4%, close to the actual 15.9%. The approximation is best when the rates are small, and it lets you estimate one rate when you know the other two.

### Deflator vs. CPI in One Line
The GDP deflator covers **all final goods and services produced domestically** (including capital goods and government purchases); the consumer price index tracks a **fixed basket of goods bought by consumers**. Building the CPI is taught in the unemployment and inflation topic.
`
    },
    {
      id: 'macrogdp4-input',
      type: 'input-boxes' as const,
      content: `
**Build It Yourself** ✍️

An economy produces only apples and haircuts. The base year is **2020**.

| Year | Price of apple | Apples | Price of haircut | Haircuts |
|---|---|---|---|---|
| 2020 (base) | \\$2 | 500 | \\$20 | 100 |
| 2025 | \\$3 | 600 | \\$25 | 120 |

**1)** What is nominal GDP in 2025? (dollars, enter the number only, no commas)

**2)** What is real GDP in 2025, in 2020 prices? (dollars, enter the number only, no commas)

**3)** What is the GDP deflator in 2025? (round to one decimal place, enter the number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4800', '3600', '133.3'],
        hint1: 'Nominal GDP uses 2025 prices and 2025 quantities: (\\$3 × 600) + (\\$25 × 120).',
        hint2: 'Real GDP uses 2020 prices with 2025 quantities: (\\$2 × 600) + (\\$20 × 120).',
        hint3: 'Deflator = (nominal GDP ÷ real GDP) × 100.',
        explanation: 'Nominal GDP = \\$1,800 + \\$3,000 = \\$4,800. Real GDP = \\$1,200 + \\$2,400 = \\$3,600. The deflator is (\\$4,800 ÷ \\$3,600) × 100 = 133.3, so prices are about 33% higher than in 2020. Real GDP grew from \\$3,000 in 2020 to \\$3,600, a 20% increase in output.'
      }
    },
    {
      id: 'macrogdp4-percapita',
      type: 'text' as const,
      content: `
## Real GDP per Capita

Total real GDP can rise just because a country has more people. To compare **average living standards**, divide by population.

**Real GDP per capita = real GDP ÷ population**

### Worked Example

| Year | Real GDP | Population | Real GDP per capita |
|---|---|---|---|
| Year 1 | \\$500 billion | 50 million | \\$500B ÷ 50M = **\\$10,000** |
| Year 2 | \\$520 billion | 51 million | \\$520B ÷ 51M = **\\$10,196** |

- Real GDP grew (\\$520 − \\$500) ÷ \\$500 = **4.0%**.
- Population grew (51 − 50) ÷ 50 = **2.0%**.
- Real GDP per capita grew (\\$10,196 − \\$10,000) ÷ \\$10,000 = **about 2.0%**.

A useful approximation: **growth in real GDP per capita ≈ real GDP growth − population growth**. If output grows 3% while population grows 3%, the average person's real output barely changes.

### Which Measure Answers Which Question?

| Question | Best measure |
|---|---|
| Did the economy produce more this year? | Real GDP |
| How fast did prices rise across all domestic output? | GDP deflator |
| Did the average person's material standard of living rise? | Real GDP per capita |
| How large is the economy in today's dollars? | Nominal GDP |

> 🔑 **AP Connection:** **Economic growth** on the AP exam is measured as an increase in **real GDP per capita** over time. Part 6 builds on this.
`
    },
    {
      id: 'macrogdp4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "In one year, nominal GDP grew 6% and the GDP deflator rose 4%. Real GDP grew by approximately",
            options: [
              "2%",
              "10%",
              "1.5%",
              "4%"
            ],
            correctAnswer: 0,
            explanation: "Real growth ≈ nominal growth − inflation = 6% − 4% = 2%. Adding the two rates treats rising prices as more output, and 1.5% comes from dividing the rates instead of subtracting them."
          },
          {
            question: "The GDP deflator rose from 125 in one year to 130 in the next. What was the inflation rate between the two years?",
            options: [
              "5%",
              "4%",
              "30%",
              "3.8%"
            ],
            correctAnswer: 1,
            explanation: "Inflation = (130 − 125) ÷ 125 × 100 = 4%. The 5-point rise is a change in index points, not a percent, and 30% measures the price change since the base year rather than over the past year."
          },
          {
            question: "A country's real GDP grows 3% per year while its population also grows 3% per year. Over this period, real GDP per capita",
            options: [
              "grows by roughly 3% a year",
              "stays about the same each year",
              "grows by roughly 6% a year",
              "falls by roughly 3% a year"
            ],
            correctAnswer: 1,
            explanation: "Growth in real GDP per capita is roughly real GDP growth minus population growth, here 3% − 3% = 0%. Output per person is flat even though the total economy is growing, so the average standard of living does not rise."
          }
        ]
      }
    }
  ]
}
