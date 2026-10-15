export const macroUnemploymentInflationPart4Data = {
  topicSlug: 'macro-unemployment-inflation',
  sections: [
    {
      id: 'macroune4-intro',
      type: 'text' as const,
      content: `
# 📊 Unemployment & Inflation

**Part 4 of 7 — Price Indices: Building and Using the CPI**

---

| Section |
|---------|
| 📖 Building a Consumer Price Index |
| Computing Inflation Rates |
| Turning Nominal Values into Real Values |
| CPI vs. GDP Deflator, and Why the CPI Overstates Inflation |

> 🔑 **Key Concept:** A **price index** compares the cost of a fixed set of goods in one year with its cost in a **base year**. The **Consumer Price Index (CPI)** tracks what a typical urban household pays for a market basket of goods and services. Its percentage change is the **inflation rate**, and dividing by it turns nominal (dollar) values into **real** values.
`
    },
    {
      id: 'macroune4-build',
      type: 'text' as const,
      content: `
## 📖 Building a Consumer Price Index

The BLS surveys households to find what a typical urban consumer buys, then prices that **fixed market basket** every month. The official CPI uses 1982–84 as its reference period, set equal to 100.

**CPI in year t = (Cost of basket in year t ÷ Cost of the same basket in the base year) × 100**

The quantities in the basket stay the **same** every year. Only prices change. That is what lets the index isolate changes in the price level.

### Worked Example: A Three-Good Basket (base year 2022)

| Good | Quantity in basket | 2022 price | 2023 price | 2024 price |
|---|---|---|---|---|
| Pizzas | 20 | \\$10.00 | \\$11.00 | \\$12.00 |
| Gallons of gasoline | 50 | \\$2.00 | \\$2.40 | \\$2.20 |
| Haircuts | 4 | \\$25.00 | \\$25.00 | \\$27.50 |

**Step 1: Cost of the basket each year** (quantity × price, summed)

| Year | Pizzas | Gasoline | Haircuts | Basket cost |
|---|---|---|---|---|
| 2022 | 20 × \\$10 = \\$200 | 50 × \\$2.00 = \\$100 | 4 × \\$25 = \\$100 | **\\$400** |
| 2023 | 20 × \\$11 = \\$220 | 50 × \\$2.40 = \\$120 | 4 × \\$25 = \\$100 | **\\$440** |
| 2024 | 20 × \\$12 = \\$240 | 50 × \\$2.20 = \\$110 | 4 × \\$27.50 = \\$110 | **\\$460** |

**Step 2: CPI each year** (divide by the 2022 cost, \\$400)

| Year | Calculation | CPI |
|---|---|---|
| 2022 (base) | 400 ÷ 400 × 100 | **100** |
| 2023 | 440 ÷ 400 × 100 | **110** |
| 2024 | 460 ÷ 400 × 100 | **115** |

The base year **always** has a CPI of 100. A CPI of 115 means the basket costs 15% more than it did in the base year. Notice that gasoline got cheaper from 2023 to 2024, yet the CPI still rose, because the index measures the **whole basket**, weighted by quantities bought.
`
    },
    {
      id: 'macroune4-rates',
      type: 'text' as const,
      content: `
## Computing Inflation Rates

**Inflation rate = [(CPI this year − CPI last year) ÷ CPI last year] × 100**

Using the basket above:

| Period | Calculation | Inflation rate |
|---|---|---|
| 2022 → 2023 | (110 − 100) ÷ 100 × 100 | **10.0%** |
| 2023 → 2024 | (115 − 110) ÷ 110 × 100 | **≈ 4.5%** |
| 2022 → 2024 (two years combined) | (115 − 100) ÷ 100 × 100 | **15.0%** |

> ⚠️ **Points are not percents.** From 2023 to 2024 the CPI rose 5 **points**, but the inflation rate was about 4.5%, because the starting value was 110, not 100. Only when the starting year is the base year do points and percents match.

### Inflation, disinflation and deflation

| Term | What happens to the CPI | Example inflation rates |
|---|---|---|
| **Inflation** | CPI rises | +3% |
| **Disinflation** | CPI still rises, but more slowly than before | +6% one year, then +3% the next |
| **Deflation** | CPI falls | −2% |

Disinflation is **not** falling prices. In the example, the inflation rate fell from 10% to about 4.5%, which is disinflation, but prices still rose.
`
    },
    {
      id: 'macroune4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The CPI rises from 150 in one year to 159 the next. What is the inflation rate between the two years?',
            options: [
              '9%',
              '59%',
              '6%',
              '5.7%'
            ],
            correctAnswer: 2,
            explanation: 'The inflation rate is (159 − 150) ÷ 150 × 100 = 6%. Treating the 9-point rise as 9% ignores the starting value, 59% measures change from the base year of 100, and 5.7% divides by the ending CPI instead of the starting one.'
          },
          {
            question: 'Over three years, the annual inflation rate goes from 7% to 5% to 2%. During this period, the economy experienced',
            options: [
              'The price level kept falling, so this is deflation',
              'The price level kept falling, so this is disinflation',
              'The price level kept rising, so this is deflation',
              'The price level kept rising, so this is disinflation'
            ],
            correctAnswer: 3,
            explanation: 'A falling but positive inflation rate is disinflation, and because inflation stays above zero the price level keeps rising. Deflation requires a negative inflation rate, so prices would have to fall.'
          },
          {
            question: 'In a CPI calculation, which of the following stays the same from year to year?',
            options: [
              'the quantity of each good in the basket',
              'the price of each good in the basket',
              'the total cost of the market basket',
              'the inflation rate on the basket'
            ],
            correctAnswer: 0,
            explanation: 'The CPI prices a fixed basket, so the quantities stay the same while prices change. Because prices change, the basket\'s total cost and the inflation rate change too.'
          }
        ]
      }
    },
    {
      id: 'macroune4-real',
      type: 'text' as const,
      content: `
## Turning Nominal Values into Real Values

A **nominal** value is measured in current dollars. A **real** value is adjusted for changes in the price level, so it measures purchasing power.

**Real value = Nominal value ÷ (CPI ÷ 100)**

The result is in **base-year dollars**.

### Worked Example: Did Workers Get a Raise?

A worker earned \\$20.00 an hour in 2022 and \\$21.50 an hour in 2024. Use the CPI from the basket example (2022 = 100, 2024 = 115).

| Year | Nominal wage | CPI | Real wage in 2022 dollars |
|---|---|---|---|
| 2022 | \\$20.00 | 100 | \\$20.00 ÷ 1.00 = **\\$20.00** |
| 2024 | \\$21.50 | 115 | \\$21.50 ÷ 1.15 ≈ **\\$18.70** |

The nominal wage rose 7.5%, but prices rose 15%. The real wage **fell** by about 6.5% (from \\$20.00 to about \\$18.70). The worker can buy less with an hour's pay.

> 🔑 **Quick check:** % change in real value ≈ % change in nominal value − inflation rate. Here 7.5% − 15% = −7.5%, close to the exact −6.5%. The shortcut works best when the numbers are small.

### Worked Example: Comparing Prices Across Years

To express a dollar amount from year A in year B's dollars:

**Value in year B dollars = Value in year A × (CPI in year B ÷ CPI in year A)**

Suppose the CPI was 80 in 1995 and 240 in 2025. A \\$50 concert ticket in 1995 is worth \\$50 × (240 ÷ 80) = **\\$150** in 2025 dollars. If the same ticket now costs \\$180, its real price has risen; if it costs \\$120, its real price has fallen.

> 🔑 **AP Connection:** Indexing uses the same idea. When wages, pensions or benefits are indexed to the CPI through a **cost-of-living adjustment (COLA)**, the nominal payment rises with the CPI so the real payment stays roughly constant. Social Security benefits are adjusted each year this way.
`
    },
    {
      id: 'macroune4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

A market basket contains 5 books, 10 sandwiches and 2 concert tickets. In the base year, books cost \\$20, sandwiches \\$8 and tickets \\$60, so the basket costs \\$300. In year 2, books cost \\$22, sandwiches \\$9.10 and tickets \\$67.50.

**1)** What is the cost of the basket in year 2, in dollars?

**2)** What is the CPI in year 2?

**3)** If the CPI in year 3 is 119, what is the inflation rate from year 2 to year 3, in percent?

Enter numbers only (no \\$ or % sign). Round to two decimal places if needed.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['336', '112', '6.25'],
        hint1: 'Multiply each year-2 price by its quantity: 5 × 22, 10 × 9.10 and 2 × 67.50.',
        hint2: 'Divide the year-2 basket cost by the base-year cost of 300, then multiply by 100.',
        hint3: 'Divide the change in the CPI (119 − 112) by the year-2 CPI, not by 100.',
        explanation: '1) 110 + 91 + 135 = \\$336. 2) CPI = 336 ÷ 300 × 100 = 112. 3) Inflation = (119 − 112) ÷ 112 × 100 = 6.25%.'
      }
    },
    {
      id: 'macroune4-compare',
      type: 'text' as const,
      content: `
## CPI vs. GDP Deflator

The **GDP deflator** is the other major price index. It is calculated from nominal and real GDP (covered in the GDP topic). The two indices answer different questions.

| Feature | CPI | GDP deflator |
|---|---|---|
| Goods covered | A basket of goods and services bought by **consumers** | **All final goods and services produced domestically**, including investment and government purchases |
| Imports | **Included** if consumers buy them | **Excluded**, because they are not produced domestically |
| Capital goods and government purchases | Excluded | Included |
| Basket | **Fixed** quantities | Changes each year with what the economy produces |

**Example:** A rise in the price of imported coffee raises the CPI but not the GDP deflator. A rise in the price of domestically built industrial robots raises the GDP deflator but not the CPI.

## Why the CPI Overstates Inflation

Because the basket is fixed, the CPI tends to **overstate** the true increase in the cost of living.

| Bias | What happens | Example |
|---|---|---|
| **Substitution bias** | When one good becomes relatively expensive, consumers switch to cheaper substitutes, but the fixed basket assumes they keep buying the same amounts | Beef prices jump and households buy more chicken; the CPI still prices the old amount of beef |
| **Quality-change bias** | Some price increases pay for better quality, not just higher prices | A new laptop costs 10% more but is far faster and lasts longer |
| **New-product bias** | New goods enter the basket only after a delay, so their early price declines and the gains to consumers are missed | Early smartphones fell sharply in price before they had much weight in the index |

> 🔑 **AP Connection:** Because of these biases, COLAs tied to the CPI can **overcompensate** people for inflation. A free-response question may ask you to identify one bias and explain the direction: the CPI overstates inflation, so real values computed with it are **understated**.
`
    },
    {
      id: 'macroune4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The price of imported smartphones rises sharply, while prices of domestically produced goods do not change. What happens to the two price indices?',
            options: [
              'The CPI does not change, and the GDP deflator rises',
              'The CPI goes up, and the GDP deflator does not change',
              'The CPI and the GDP deflator rise by the same amount',
              'The CPI and the GDP deflator both stay the same'
            ],
            correctAnswer: 1,
            explanation: 'Consumers buy imported smartphones, so their price is part of the CPI basket. The GDP deflator covers only domestically produced goods, so it does not move.'
          },
          {
            question: 'When chicken becomes cheaper relative to beef, households buy more chicken and less beef. The CPI does not reflect this change. This is an example of',
            options: [
              'quality-change bias',
              'new-product bias',
              'substitution bias',
              'cost-push inflation'
            ],
            correctAnswer: 2,
            explanation: 'Switching from a relatively expensive good to a cheaper substitute is substitution bias, which makes the fixed-basket CPI overstate the rise in the cost of living. Quality-change and new-product bias come from improvements and new goods, and cost-push inflation is a cause of rising prices, not a measurement problem.'
          }
        ]
      }
    }
  ]
}
