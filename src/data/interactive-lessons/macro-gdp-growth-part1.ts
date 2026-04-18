export const macroGdpGrowthPart1Data = {
  topicSlug: 'macro-gdp-growth',
  sections: [
    {id:'macrogdpg1-intro',type:'text' as const,content:`
# 📈 GDP & Economic Growth

**Part 1 of 7 — Measuring the Economy**

---

| Section |
|---------|
| 📖 What Is GDP? |
| Components of GDP |
| Nominal vs. Real GDP |
| Limitations of GDP |

> 🔑 **Key Concept:** GDP (Gross Domestic Product) is the **total market value of all final goods and services produced within a country in a given year**. The AP exam tests the **expenditure approach** (GDP = C + I + G + Xn) and the difference between **nominal and real GDP**.
`},
    {id:'macrogdpg1-components',type:'text' as const,content:`
## 📖 Components of GDP — The Expenditure Approach

**GDP = C + I + G + Xn**

| Component | Symbol | What It Includes | % of U.S. GDP |
|---|---|---|---|
| **Consumption** | C | Household spending on goods and services (food, housing, healthcare, entertainment) | ~68% |
| **Investment** | I | Business spending on capital goods + new residential construction + changes in inventories | ~18% |
| **Government spending** | G | Government purchases of goods and services (NOT transfer payments like Social Security) | ~17% |
| **Net exports** | Xn | Exports − Imports (usually **negative** for the U.S. = trade deficit) | ~−3% |

### What GDP Does NOT Include
| Excluded Item | Why |
|---|---|
| **Intermediate goods** | Counted in final products (avoids double-counting) |
| **Used goods** | Already counted when first produced |
| **Financial transactions** | Stocks, bonds = transfers, not production |
| **Transfer payments** | Social Security, welfare = redistribution, not production |
| **Non-market activities** | Household work, volunteer work (not bought/sold on the market) |
| **Underground economy** | Illegal activities, unreported cash transactions |

### GDP vs. GNP
- **GDP** = everything produced **within a country's borders** (regardless of who produces it)
- **GNP** = everything produced **by a country's citizens** (regardless of where they produce it)
- Example: A Japanese auto factory in Tennessee → counted in U.S. GDP but Japanese GNP

> 🔑 **AP Connection:** The AP exam loves testing what is and isn't included in GDP. Key trap: **government transfer payments** (Social Security, Medicare, unemployment benefits) are NOT counted in GDP because they don't represent new production.
`},
    {id:'macrogdpg1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Which of the following would be counted in the GDP of the United States?',options:['A Social Security check sent to a retired teacher in Florida','A homeowner mowing their own lawn on a Saturday morning','A new Honda Civic manufactured at a Honda plant in Ohio and sold to an American consumer','100 shares of Apple stock purchased through an online brokerage account by an investor'],correctAnswer:2,explanation:'The Honda Civic is a final good produced within U.S. borders — it counts in U.S. GDP (as part of Consumption when purchased). Social Security is a transfer payment (not new production). Mowing your own lawn is a non-market activity (no transaction). Stock purchases are financial transactions (transfers of ownership, not production of goods/services).'},
      {question:'A country has the following economic data: Consumption = $800B, Investment = $200B, Government purchases = $300B, Exports = $100B, Imports = $150B. What is GDP?',options:['$1,400 billion — calculated by adding all five components together','$1,250 billion — GDP = C + I + G + (Exports − Imports) = 800 + 200 + 300 + (100 − 150)','$1,550 billion — GDP = C + I + G + Exports + Imports','$1,300 billion — GDP = C + I + G, and trade is excluded from the calculation'],correctAnswer:1,explanation:'GDP = C + I + G + Xn, where Xn = Exports − Imports. \nGDP = $800B + $200B + $300B + ($100B − $150B) \n= $800B + $200B + $300B + (−$50B) \n= **$1,250B**. \nNet exports are negative (trade deficit), which reduces GDP. Remember: imports are subtracted because they represent production in OTHER countries, not domestic production.'}
    ]}},
    {id:'macrogdpg1-real',type:'text' as const,content:`
## 📖 Nominal vs. Real GDP

### The Problem with Nominal GDP
Nominal GDP can increase because:
1. The economy produced **more goods** (real growth) ✅
2. **Prices increased** (inflation) — no actual increase in production ❌

### Solution: Real GDP

| Concept | Definition | Formula |
|---|---|---|
| **Nominal GDP** | GDP measured at **current year prices** | Price × Quantity (current year) |
| **Real GDP** | GDP measured at **constant (base year) prices** | Removes inflation effect |
| **GDP Deflator** | Price index measuring the price level of all goods in GDP | (Nominal GDP ÷ Real GDP) × 100 |

### Example

| Year | Nominal GDP | GDP Deflator | Real GDP |
|---|---|---|---|
| 2020 (base year) | $20 trillion | 100 | $20 trillion |
| 2023 | $25 trillion | 110 | $25T ÷ 1.10 = **$22.7 trillion** |

- Nominal GDP grew by 25% ($20T → $25T)
- But prices rose by 10% (deflator: 100 → 110)
- Real GDP grew by only **13.6%** ($20T → $22.7T) — this is the true output increase

### Real GDP formula:
**Real GDP = (Nominal GDP ÷ GDP Deflator) × 100**

> 🔑 **AP Connection:** You MUST be able to calculate Real GDP from Nominal GDP and the GDP Deflator. The AP exam tests this calculation frequently. Remember: if the deflator > 100, real GDP < nominal GDP (prices have risen since the base year).
`},
    {id:'macrogdpg1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'If nominal GDP is $18 trillion and the GDP deflator is 120, what is real GDP?',options:['$21.6 trillion — calculated by multiplying nominal GDP by the deflator','$15 trillion — calculated by dividing nominal GDP by the deflator (as a decimal: 18 ÷ 1.20)','$18 trillion — real GDP always equals nominal GDP regardless of the price level','$2.16 trillion — calculated by dividing nominal GDP by the deflator without adjustment'],correctAnswer:1,explanation:'Real GDP = (Nominal GDP ÷ GDP Deflator) × 100 = ($18T ÷ 120) × 100 = **$15 trillion**. \nAlternatively: $18T ÷ 1.20 = $15T. \nSince the deflator (120) is above 100, prices have risen 20% since the base year. Real GDP is smaller than nominal because we\'ve removed the inflation effect, revealing true output growth.'},
      {question:'Why is real GDP considered a better measure of economic performance than nominal GDP?',options:['Real GDP includes financial transactions and transfer payments that nominal GDP excludes','Real GDP removes the effect of price changes (inflation/deflation), so it measures actual changes in the quantity of goods and services produced','Real GDP is always higher than nominal GDP, giving a more optimistic view of economic performance','Real GDP measures the total income earned by a country\'s citizens abroad, which nominal GDP ignores'],correctAnswer:1,explanation:'Nominal GDP can increase simply because prices rose (inflation), not because the economy actually produced more. Real GDP holds prices constant at a base year level, isolating the change in actual output. This makes real GDP the appropriate measure for comparing economic performance across years — which is why economists and policymakers focus on real GDP growth rates.'}
    ]}}
  ]
};
