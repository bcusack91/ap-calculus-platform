const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src/data/interactive-lessons');

const files = [
{file:'macro-scarcity-opportunity-cost-part1.ts', content:`export const macroScarcityOpportunityCostPart1Data = {
  topicSlug: 'macro-scarcity-opportunity-cost',
  sections: [
    {id:'macroscar1-intro',type:'text' as const,content:\`
# 📊 Scarcity & Opportunity Cost

**Part 1 of 7 — The Fundamental Economic Problem**

---

| Section |
|---------|
| 📖 Scarcity & Choice |
| Opportunity Cost |
| Production Possibilities Curve (PPC) |
| Efficiency, Growth & Trade |

> 🔑 **Key Concept:** Economics is the study of how societies allocate **scarce resources** to satisfy **unlimited wants**. Every choice has an **opportunity cost** — the value of the next best alternative you give up.
\`},
    {id:'macroscar1-scarcity',type:'text' as const,content:\`
## 📖 Scarcity & Choice

### The Fundamental Economic Problem
- **Scarcity:** Resources (land, labor, capital, entrepreneurship) are **limited**, but human wants are **unlimited**
- Because of scarcity, every society must answer three fundamental questions:
  1. **What** to produce?
  2. **How** to produce it?
  3. **For whom** to produce it?

### Factors of Production

| Factor | Definition | Payment |
|---|---|---|
| **Land** | Natural resources (water, minerals, timber) | Rent |
| **Labor** | Human effort (physical and intellectual) | Wages |
| **Capital** | Tools, machinery, factories, technology (NOT money) | Interest |
| **Entrepreneurship** | Risk-taking; combining other factors to create goods/services | Profit |

### Opportunity Cost
- **Definition:** The value of the **next best alternative** you give up when making a choice
- NOT just the monetary cost — includes time, enjoyment, and other benefits foregone
- **Example:** If you spend an hour studying economics instead of working at a job that pays $15/hour, the opportunity cost of studying is $15 (plus whatever else you could have done)
- **Key Rule:** Opportunity cost is always measured in terms of **one specific alternative**, not all alternatives combined

> 🔑 **AP Connection:** The AP exam ALWAYS tests opportunity cost in the context of the Production Possibilities Curve. Be ready to calculate opportunity cost from PPC data tables and graphs.
\`},
    {id:'macroscar1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'A student has 3 hours free. She can study for an economics exam, work a shift that pays $45, or watch a movie she values at $20. She chooses to study. What is the opportunity cost of studying?',options:['$65 — the combined value of working ($45) and the movie ($20) she gave up','$45 — the value of working, which is the next best alternative she gave up','$20 — the value of the movie, which is the least valuable alternative she gave up','$0 — studying has no opportunity cost because it will improve her grade on the exam'],correctAnswer:1,explanation:'Opportunity cost is the value of the NEXT BEST alternative — not all alternatives combined. Since working ($45) is more valuable than the movie ($20), working is the next best alternative. Therefore, the opportunity cost of studying is $45. This is a common AP exam trap — students often incorrectly add all foregone alternatives together.'},
      {question:'Which of the following is considered "capital" as a factor of production in economics?',options:['Dollar bills and coins held in a bank vault or cash register','Factory machinery, computers, and tools used to produce goods and services','Stocks and bonds held in a retirement investment portfolio','A loan from a bank used to start a new restaurant business'],correctAnswer:1,explanation:'In economics, "capital" refers to physical capital — the tools, equipment, machinery, factories, and technology used in production. This is different from the everyday use of "capital" meaning money or financial assets. Money (financial capital) is NOT a factor of production — it\\'s a medium of exchange used to acquire factors of production. This distinction is frequently tested on the AP exam.'}
    ]}},
    {id:'macroscar1-ppc',type:'text' as const,content:\`
## 📖 Production Possibilities Curve (PPC)

The PPC (also called PPF — Production Possibilities Frontier) shows the **maximum combinations** of two goods a society can produce given its resources and technology.

### Key Features

| Feature | Meaning |
|---|---|
| **Points ON the curve** | Efficient — using all resources fully |
| **Points INSIDE the curve** | Inefficient — resources unused or misallocated (e.g., unemployment) |
| **Points OUTSIDE the curve** | Unattainable with current resources and technology |
| **Bowed-out shape** | Reflects **increasing opportunity cost** — resources are not perfectly interchangeable |
| **Straight line** | Constant opportunity cost — resources are perfectly interchangeable |

### Calculating Opportunity Cost from a PPC

| | Good A | Good B |
|---|---|---|
| **Point X** | 100 | 0 |
| **Point Y** | 80 | 30 |

- Moving from X to Y: Give up 20A to get 30B
- **Opportunity cost of 1B** = 20A ÷ 30B = **2/3 A**
- **Opportunity cost of 1A** = 30B ÷ 20A = **3/2 B** (always the reciprocal!)

### Shifting the PPC
| Shift | Cause |
|---|---|
| **Outward (growth)** | More resources, better technology, higher productivity |
| **Inward (decline)** | Resource depletion, natural disaster, war |
| **One good only** | Technology improvement in just that sector (asymmetric shift) |

> 🔑 **AP Connection:** The PPC is one of the **most tested graphs** on the AP exam. You MUST be able to: (1) calculate opportunity cost between two points, (2) identify efficient/inefficient/unattainable points, (3) explain why the curve shifts.
\`},
    {id:'macroscar1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'On a production possibilities curve, a point located INSIDE the curve represents:',options:['The most efficient combination of goods that fully utilizes all available resources and technology','An output combination that is currently unattainable given the society\\'s resources and technology','An inefficient output combination — the economy is not fully utilizing its available resources (e.g., there is unemployment or idle factories)','A point of economic growth where the economy has expanded beyond its previous production capacity'],correctAnswer:2,explanation:'Points inside the PPC represent inefficiency — the economy could produce more of both goods by better utilizing its resources. The most common real-world reason for operating inside the PPC is unemployment or underemployment, where labor and capital are sitting idle. Points ON the curve are efficient (all resources fully used); points OUTSIDE are unattainable without growth.'},
      {question:'If a country can produce either 200 bushels of wheat or 100 barrels of oil using all its resources, what is the opportunity cost of producing 1 barrel of oil?',options:['100 bushels of wheat — the total wheat production that must be entirely sacrificed','2 bushels of wheat — for each barrel of oil produced, 2 bushels of wheat must be given up','0.5 bushels of wheat — oil is more valuable, so its opportunity cost is lower','200 bushels of wheat — the opportunity cost equals the maximum possible wheat production'],correctAnswer:1,explanation:'Opportunity cost = what you give up ÷ what you get. Moving from all wheat to all oil: give up 200 wheat to get 100 oil. \\nOC of 1 oil = 200 wheat ÷ 100 oil = **2 wheat per oil**. \\nConversely, OC of 1 wheat = 100 oil ÷ 200 wheat = 0.5 oil per wheat (the reciprocal). Remember: opportunity costs between two goods are always reciprocals of each other.'}
    ]}}
  ]
};\n`},
{file:'macro-gdp-growth-part1.ts', content:`export const macroGdpGrowthPart1Data = {
  topicSlug: 'macro-gdp-growth',
  sections: [
    {id:'macrogdpg1-intro',type:'text' as const,content:\`
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
\`},
    {id:'macrogdpg1-components',type:'text' as const,content:\`
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
\`},
    {id:'macrogdpg1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'Which of the following would be counted in the GDP of the United States?',options:['A Social Security check sent to a retired teacher in Florida','A homeowner mowing their own lawn on a Saturday morning','A new Honda Civic manufactured at a Honda plant in Ohio and sold to an American consumer','100 shares of Apple stock purchased through an online brokerage account by an investor'],correctAnswer:2,explanation:'The Honda Civic is a final good produced within U.S. borders — it counts in U.S. GDP (as part of Consumption when purchased). Social Security is a transfer payment (not new production). Mowing your own lawn is a non-market activity (no transaction). Stock purchases are financial transactions (transfers of ownership, not production of goods/services).'},
      {question:'A country has the following economic data: Consumption = $800B, Investment = $200B, Government purchases = $300B, Exports = $100B, Imports = $150B. What is GDP?',options:['$1,400 billion — calculated by adding all five components together','$1,250 billion — GDP = C + I + G + (Exports − Imports) = 800 + 200 + 300 + (100 − 150)','$1,550 billion — GDP = C + I + G + Exports + Imports','$1,300 billion — GDP = C + I + G, and trade is excluded from the calculation'],correctAnswer:1,explanation:'GDP = C + I + G + Xn, where Xn = Exports − Imports. \\nGDP = $800B + $200B + $300B + ($100B − $150B) \\n= $800B + $200B + $300B + (−$50B) \\n= **$1,250B**. \\nNet exports are negative (trade deficit), which reduces GDP. Remember: imports are subtracted because they represent production in OTHER countries, not domestic production.'}
    ]}},
    {id:'macrogdpg1-real',type:'text' as const,content:\`
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
\`},
    {id:'macrogdpg1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'If nominal GDP is $18 trillion and the GDP deflator is 120, what is real GDP?',options:['$21.6 trillion — calculated by multiplying nominal GDP by the deflator','$15 trillion — calculated by dividing nominal GDP by the deflator (as a decimal: 18 ÷ 1.20)','$18 trillion — real GDP always equals nominal GDP regardless of the price level','$2.16 trillion — calculated by dividing nominal GDP by the deflator without adjustment'],correctAnswer:1,explanation:'Real GDP = (Nominal GDP ÷ GDP Deflator) × 100 = ($18T ÷ 120) × 100 = **$15 trillion**. \\nAlternatively: $18T ÷ 1.20 = $15T. \\nSince the deflator (120) is above 100, prices have risen 20% since the base year. Real GDP is smaller than nominal because we\\'ve removed the inflation effect, revealing true output growth.'},
      {question:'Why is real GDP considered a better measure of economic performance than nominal GDP?',options:['Real GDP includes financial transactions and transfer payments that nominal GDP excludes','Real GDP removes the effect of price changes (inflation/deflation), so it measures actual changes in the quantity of goods and services produced','Real GDP is always higher than nominal GDP, giving a more optimistic view of economic performance','Real GDP measures the total income earned by a country\\'s citizens abroad, which nominal GDP ignores'],correctAnswer:1,explanation:'Nominal GDP can increase simply because prices rose (inflation), not because the economy actually produced more. Real GDP holds prices constant at a base year level, isolating the change in actual output. This makes real GDP the appropriate measure for comparing economic performance across years — which is why economists and policymakers focus on real GDP growth rates.'}
    ]}}
  ]
};\n`},
{file:'macro-unemployment-inflation-part1.ts', content:`export const macroUnemploymentInflationPart1Data = {
  topicSlug: 'macro-unemployment-inflation',
  sections: [
    {id:'macroune1-intro',type:'text' as const,content:\`
# 📊 Unemployment & Inflation

**Part 1 of 7 — Measuring Economic Health**

---

| Section |
|---------|
| 📖 Types of Unemployment |
| Measuring Unemployment |
| Types of Inflation |
| Costs of Inflation |

> 🔑 **Key Concept:** The AP exam tests three types of unemployment (**frictional, structural, cyclical**) and requires you to calculate the **unemployment rate** and understand the **natural rate of unemployment**. For inflation, know the CPI and how inflation redistributes wealth.
\`},
    {id:'macroune1-unemployment',type:'text' as const,content:\`
## 📖 Types of Unemployment

| Type | Definition | Example | Avoidable? |
|---|---|---|---|
| **Frictional** | Temporary unemployment during job transitions; people between jobs voluntarily | College graduate searching for first job; worker who quit to find better position | No — always exists in a healthy economy |
| **Structural** | Mismatch between workers' skills and available jobs; caused by technology or economic shifts | Factory worker replaced by automation; coal miner when industry declines | Partially — retraining can help |
| **Cyclical** | Unemployment caused by economic **recessions** — insufficient aggregate demand | Workers laid off during 2008 financial crisis because businesses cut production | Yes — through fiscal/monetary policy |
| **Seasonal** | Unemployment due to seasonal patterns (less commonly tested) | Ski instructor in summer; retail worker after holiday season | Naturally resolves |

### Key Formulas

**Unemployment Rate = (Unemployed ÷ Labor Force) × 100**

**Labor Force = Employed + Unemployed** (people actively working OR actively seeking work)

**NOT in the labor force:** full-time students, retirees, stay-at-home parents, discouraged workers (stopped looking), prisoners

### Natural Rate of Unemployment (NRU)
- NRU = **Frictional + Structural** unemployment (the unemployment that exists even in a "healthy" economy)
- Cyclical unemployment = 0 at the NRU
- When actual unemployment = NRU, the economy is at **full employment** (≈ 4–5% in the U.S.)
- Full employment does NOT mean 0% unemployment

> 🔑 **AP Connection:** "Full employment" means cyclical unemployment = 0, NOT that everyone has a job. There is always some frictional and structural unemployment. The NRU is approximately 4–5%.
\`},
    {id:'macroune1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'An experienced auto worker permanently loses their job because their factory replaces assembly-line workers with industrial robots. This is an example of:',options:['Frictional unemployment — the worker is temporarily between jobs and will find similar work soon','Cyclical unemployment — the worker lost their job due to a recession that reduced demand for cars','Structural unemployment — the worker\\'s skills no longer match available jobs due to technological change in the industry','Seasonal unemployment — auto manufacturing follows predictable seasonal patterns that cause temporary layoffs'],correctAnswer:2,explanation:'Structural unemployment occurs when there is a fundamental mismatch between workers\\' skills and available jobs — often caused by technological change (automation), globalization, or declining industries. The auto worker\\'s assembly-line skills are no longer demanded because robots do the work. Unlike frictional unemployment (temporary), structural unemployment requires retraining or relocation to resolve.'},
      {question:'The labor force in a country is 160 million. Of these, 152 million are employed and 8 million are unemployed and actively seeking work. What is the unemployment rate?',options:['5.0% — calculated as (8 million ÷ 160 million) × 100','5.3% — calculated as (8 million ÷ 152 million) × 100','95.0% — calculated as (152 million ÷ 160 million) × 100','8.0% — the number of unemployed expressed as a percentage of total population'],correctAnswer:0,explanation:'Unemployment rate = (Unemployed ÷ Labor Force) × 100 = (8M ÷ 160M) × 100 = **5.0%**. \\nThe labor force (160M) already equals Employed + Unemployed (152M + 8M). A common mistake is dividing by only employed workers (which would give 5.3%) — but the denominator must be the total labor force.'}
    ]}},
    {id:'macroune1-inflation',type:'text' as const,content:\`
## 📖 Inflation

### Types of Inflation

| Type | Cause | Shift in AD-AS Model |
|---|---|---|
| **Demand-pull** | "Too much money chasing too few goods" — aggregate demand increases faster than supply | AD shifts RIGHT (price level rises) |
| **Cost-push** | Rising production costs push prices up (energy prices, wages, supply disruptions) | SRAS shifts LEFT (price level rises) |

### Measuring Inflation: Consumer Price Index (CPI)

**CPI = (Cost of Market Basket in Current Year ÷ Cost of Market Basket in Base Year) × 100**

| Year | Market Basket Cost | CPI | Inflation Rate |
|---|---|---|---|
| 2020 (base) | $10,000 | 100 | — |
| 2021 | $10,300 | 103 | 3.0% |
| 2022 | $10,800 | 108 | 4.9% |

**Inflation Rate = [(CPI₂ − CPI₁) ÷ CPI₁] × 100**

### Winners and Losers from Unexpected Inflation

| Winners | Losers |
|---|---|
| **Borrowers** — repay loans with dollars worth less than when borrowed | **Lenders** — receive payments worth less in real terms |
| **Government** — the biggest borrower; national debt eroded in real terms | **Savers** — cash and fixed deposits lose purchasing power |
| Workers with **COLA** adjustments | Workers on **fixed incomes** (pensions without COLA) |

> 🔑 **AP Connection:** The AP exam tests who benefits and who is hurt by **unexpected** inflation. Key insight: inflation benefits borrowers and hurts lenders because the real value of debt decreases. Expected inflation that is built into contracts does not redistribute wealth as much.
\`},
    {id:'macroune1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'If the CPI was 120 last year and 126 this year, what is the inflation rate?',options:['6.0% — calculated as the raw difference between this year\\'s CPI and last year\\'s CPI','5.0% — calculated as [(126 − 120) ÷ 120] × 100','26.0% — calculated as [(126 − 100) ÷ 100] × 100 using the base year CPI of 100','105.0% — calculated by dividing this year\\'s CPI by last year\\'s CPI'],correctAnswer:1,explanation:'Inflation Rate = [(CPI₂ − CPI₁) ÷ CPI₁] × 100 = [(126 − 120) ÷ 120] × 100 = [6 ÷ 120] × 100 = **5.0%**. \\nA common mistake is subtracting CPI values and treating the difference as the inflation rate (6% would be wrong). The rate must be calculated as a percentage change from the previous period\\'s CPI, not as a raw point difference.'},
      {question:'Who is most likely to BENEFIT from unexpected inflation?',options:['A retiree on a fixed pension with no cost-of-living adjustment','A person who lent $100,000 at a fixed 3% interest rate for 20 years','A homeowner who borrowed $300,000 on a fixed-rate 30-year mortgage','A person who keeps all their savings in a bank account earning 1% interest'],correctAnswer:2,explanation:'Borrowers benefit from unexpected inflation because they repay loans with dollars that are worth LESS in real purchasing power than when they borrowed. The homeowner\\'s mortgage payment stays fixed in nominal terms, but inflation erodes the real burden of the debt. Conversely, the lender receives payments that buy fewer goods and services, and the saver\\'s purchasing power declines.'}
    ]}}
  ]
};\n`},
{file:'macro-ad-as-part1.ts', content:`export const macroAdAsPart1Data = {
  topicSlug: 'macro-ad-as',
  sections: [
    {id:'macroads1-intro',type:'text' as const,content:\`
# 📈 Aggregate Demand & Aggregate Supply

**Part 1 of 7 — The AD-AS Model**

---

| Section |
|---------|
| 📖 Aggregate Demand (AD) |
| Short-Run Aggregate Supply (SRAS) |
| Long-Run Aggregate Supply (LRAS) |
| Macroeconomic Equilibrium & Gaps |

> 🔑 **Key Concept:** The AD-AS model is the **most important graph** in AP Macroeconomics. You must understand why AD slopes downward, why SRAS slopes upward, why LRAS is vertical, and how shifts in these curves create **recessionary** or **inflationary** gaps.
\`},
    {id:'macroads1-ad',type:'text' as const,content:\`
## 📖 Aggregate Demand (AD)

AD shows the **total quantity of goods and services demanded** at each price level.

### Why AD Slopes Downward (3 Effects)

| Effect | Explanation |
|---|---|
| **Wealth effect (real balances)** | Higher price level → purchasing power of savings falls → consumers buy less |
| **Interest rate effect** | Higher price level → people need more money → interest rates rise → investment and consumption fall |
| **Net export effect** | Higher price level → domestic goods more expensive relative to foreign goods → exports fall, imports rise → net exports decrease |

### Shifters of AD (anything that changes C, I, G, or Xn at every price level)

| Shifter | AD Shifts Right (Increases) | AD Shifts Left (Decreases) |
|---|---|---|
| **Consumer confidence** | Consumers feel optimistic → spend more | Consumers feel pessimistic → spend less |
| **Investment** | Lower interest rates, business optimism | Higher interest rates, business pessimism |
| **Government spending** | Increases in G (stimulus, infrastructure) | Cuts in G (austerity) |
| **Taxes** | Tax cuts → more disposable income | Tax increases → less disposable income |
| **Net exports** | Foreign economies grow → buy more U.S. exports | Dollar appreciates → U.S. exports become more expensive |
| **Money supply** | Central bank increases money supply → lower interest rates | Central bank decreases money supply → higher interest rates |

> 🔑 **AP Connection:** The three reasons AD slopes downward (wealth, interest rate, net export effects) are a **very common** free-response question. Don't confuse these with demand for a single product — AD is about the ENTIRE economy.
\`},
    {id:'macroads1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'According to the interest rate effect, why does aggregate demand decrease when the price level rises?',options:['Higher prices cause central banks to print more money, which floods the economy with excess currency','A higher price level increases the demand for money, which raises interest rates, which reduces consumer spending and business investment','Higher prices make domestic goods more competitive internationally, increasing exports','A higher price level increases consumers\\' wealth, leading them to save more and spend less on all goods and services'],correctAnswer:1,explanation:'The interest rate effect works through money demand: when the price level rises, people need more money for transactions → they withdraw savings or sell bonds → interest rates rise → borrowing becomes more expensive → businesses invest less and consumers reduce spending on interest-sensitive purchases (cars, homes). This is one of three reasons AD slopes downward.'},
      {question:'Which of the following would shift the AD curve to the RIGHT (increase aggregate demand)?',options:['An increase in personal income tax rates that reduces household disposable income by 5%','A decline in consumer confidence following a major stock market crash','An increase in government infrastructure spending on highways and bridges','An appreciation of the U.S. dollar that makes American exports more expensive for foreign buyers'],correctAnswer:2,explanation:'Increased government spending (G) directly increases aggregate demand because G is a component of AD (= C + I + G + Xn). More infrastructure spending means more demand for construction materials, equipment, and labor at every price level, shifting AD right. Tax increases, falling confidence, and dollar appreciation would all shift AD LEFT.'}
    ]}},
    {id:'macroads1-as',type:'text' as const,content:\`
## 📖 Aggregate Supply

### Short-Run Aggregate Supply (SRAS)
- Slopes **upward** — higher price levels incentivize firms to produce more because prices of outputs rise faster than input costs (which are "sticky" in the short run)
- **Shifters of SRAS:** input prices (wages, energy, raw materials), productivity, supply shocks, business taxes, regulations, subsidies

| If... | SRAS shifts... |
|---|---|
| Input prices RISE (oil prices surge) | LEFT (less supplied at each price level) |
| Productivity INCREASES (new technology) | RIGHT (more supplied at each price level) |
| Business taxes INCREASE | LEFT (higher costs → produce less) |
| Positive supply shock (bumper crop) | RIGHT |

### Long-Run Aggregate Supply (LRAS)
- **Vertical** at the full-employment level of output (potential GDP / Yf)
- In the long run, output is determined by resources and technology, NOT the price level
- Shifts right with **economic growth** (more resources, better technology)

### Macroeconomic Equilibrium & Gaps

| Situation | Description | Gap |
|---|---|---|
| **Equilibrium at Yf** | AD intersects SRAS at the LRAS line | No gap (full employment) |
| **Output < Yf** | Actual GDP below potential | **Recessionary gap** — unemployment above natural rate |
| **Output > Yf** | Actual GDP above potential (unsustainable) | **Inflationary gap** — unemployment below natural rate; prices rising |

> 🔑 **AP Connection:** You MUST be able to draw and label the AD-AS model with all three curves (AD, SRAS, LRAS), identify recessionary and inflationary gaps, and show how fiscal/monetary policy shifts AD to close these gaps.
\`},
    {id:'macroads1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'In the AD-AS model, a sudden increase in oil prices would primarily cause:',options:['AD to shift right, increasing both output and the price level (demand-pull inflation)','SRAS to shift left, increasing the price level while decreasing output (stagflation/cost-push inflation)','LRAS to shift right, increasing the economy\\'s long-run potential output permanently','AD to shift left, decreasing both output and the price level simultaneously (deflation)'],correctAnswer:1,explanation:'Oil is a major input cost for virtually all industries. A surge in oil prices raises production costs across the economy, shifting SRAS to the LEFT. The result: higher price level AND lower output — a combination called stagflation. This is cost-push inflation, and it creates a policy dilemma: fighting inflation (tight policy) worsens unemployment, and fighting unemployment (expansionary policy) worsens inflation.'},
      {question:'If the economy is in a recessionary gap (actual output below potential GDP), what is true about unemployment?',options:['The unemployment rate equals the natural rate of unemployment because the economy is at full employment','The unemployment rate is below the natural rate because firms are hoarding workers to prepare for recovery','The unemployment rate exceeds the natural rate of unemployment because there is positive cyclical unemployment','The unemployment rate is exactly 0% because recessionary gaps only affect production, not employment'],correctAnswer:2,explanation:'In a recessionary gap, actual GDP < potential GDP (Yf). This means the economy is producing below its capacity, and unemployment is above the natural rate. The excess unemployment is cyclical unemployment — caused by insufficient aggregate demand. At full employment (Yf), cyclical unemployment = 0 and unemployment equals only frictional + structural (the natural rate, ~4–5%).'}
    ]}}
  ]
};\n`},
{file:'macro-fiscal-policy-part1.ts', content:`export const macroFiscalPolicyPart1Data = {
  topicSlug: 'macro-fiscal-policy',
  sections: [
    {id:'macrofis1-intro',type:'text' as const,content:\`
# 🏛️ Fiscal Policy

**Part 1 of 7 — Government Taxing & Spending to Stabilize the Economy**

---

| Section |
|---------|
| 📖 What Is Fiscal Policy? |
| Expansionary vs. Contractionary |
| Automatic Stabilizers |
| Crowding-Out Effect |

> 🔑 **Key Concept:** Fiscal policy is the use of **government spending** and **taxation** to influence aggregate demand. The AP exam tests the difference between **discretionary** fiscal policy (deliberate actions by Congress) and **automatic stabilizers** (built-in mechanisms that respond without legislation).
\`},
    {id:'macrofis1-types',type:'text' as const,content:\`
## 📖 Types of Fiscal Policy

| Type | When Used | Actions | Effect on AD |
|---|---|---|---|
| **Expansionary** | Recession / recessionary gap | ↑ Government spending and/or ↓ Taxes | AD shifts RIGHT → output increases, unemployment falls |
| **Contractionary** | Inflation / inflationary gap | ↓ Government spending and/or ↑ Taxes | AD shifts LEFT → output decreases, inflation falls |

### Discretionary vs. Automatic

| Type | Description | Examples |
|---|---|---|
| **Discretionary** | Deliberate actions requiring legislation by Congress and the president | Stimulus packages, infrastructure bills, tax cuts, bailouts |
| **Automatic stabilizers** | Built into the system; activate automatically without legislation | Progressive income tax, unemployment insurance, welfare programs, Medicaid |

### How Automatic Stabilizers Work

**During a recession:**
- Incomes fall → people pay **less** in income taxes (progressive tax) → more disposable income → softens the decline in consumption
- More people qualify for **unemployment insurance** → income support → spending doesn't fall as far
- More people qualify for **welfare/Medicaid** → basic needs met → prevents demand from collapsing

**During inflation:**
- Incomes rise → people pay **more** in income taxes → reduces disposable income → dampens excess spending
- Fewer people need unemployment/welfare → government spending falls automatically

> 🔑 **AP Connection:** The AP exam frequently asks why automatic stabilizers are advantageous: they act **immediately** without legislative delays, and they don't require political agreement. Discretionary policy has **time lags** (recognition, legislative, implementation).
\`},
    {id:'macrofis1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'During a recession, which fiscal policy action would be appropriate?',options:['Contractionary fiscal policy — raising taxes and cutting government spending to reduce aggregate demand','Expansionary fiscal policy — cutting taxes and/or increasing government spending to increase aggregate demand','Neither — fiscal policy cannot affect aggregate demand during a recession','Raising interest rates through the Federal Reserve to encourage more saving and investment'],correctAnswer:1,explanation:'During a recession (recessionary gap), the economy has insufficient aggregate demand, causing high unemployment. Expansionary fiscal policy — tax cuts (increasing disposable income and consumption) and/or increased government spending (directly increasing AD) — shifts AD to the right, closing the gap. Note: raising interest rates is monetary policy (the Fed), not fiscal policy (Congress).'},
      {question:'Why is the progressive income tax considered an automatic stabilizer?',options:['Congress must vote to change tax rates every year, which makes it discretionary policy','As incomes fall during a recession, people automatically move to lower tax brackets and pay a smaller percentage of their income in taxes, preserving more disposable income and cushioning the decline in consumption','Progressive taxes only apply to corporations and do not affect individual consumer spending','The president can unilaterally adjust tax rates without congressional approval to respond to recessions'],correctAnswer:1,explanation:'With progressive taxation, people pay a higher percentage of income as their income rises. During a recession, declining incomes automatically move people into lower tax brackets → they keep a larger share of their income → consumption doesn\\'t fall as sharply. During expansion, rising incomes push people into higher brackets → more income goes to taxes → dampens excessive spending. This happens automatically without any new legislation.'}
    ]}},
    {id:'macrofis1-crowding',type:'text' as const,content:\`
## 📖 The Crowding-Out Effect

### What Is Crowding Out?
When the government borrows heavily to finance deficit spending, it **competes with the private sector** for available funds (loanable funds), pushing interest rates UP. Higher interest rates reduce private investment, partially offsetting the stimulus.

### How It Works
1. Government runs a budget deficit → borrows from the loanable funds market
2. Increased demand for loanable funds → **interest rates rise**
3. Higher interest rates → private businesses borrow and invest **less**
4. The decrease in private investment partially offsets the increase in government spending
5. Net effect on AD is **less than the full government spending increase**

### Implications
- Crowding out does NOT mean fiscal policy is ineffective — it means the impact is **reduced**
- Crowding out is **more significant** when the economy is near full employment (limited additional resources)
- Crowding out is **less significant** during deep recessions (lots of idle resources, interest rates already low)

### Budget Concepts

| Term | Definition |
|---|---|
| **Budget deficit** | Government spending > tax revenue in a given year |
| **Budget surplus** | Tax revenue > government spending in a given year |
| **National debt** | Accumulated total of all past deficits minus surpluses |

> 🔑 **AP Connection:** Crowding out is a **major AP concept**. The FRQ often asks: "Explain how expansionary fiscal policy might be partially offset." Answer: deficit spending increases demand for loanable funds → interest rates rise → private investment falls → partially offsets the increase in AD.
\`},
    {id:'macrofis1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'What is the "crowding-out effect" of expansionary fiscal policy?',options:['Government spending crowds out imports by making domestic goods cheaper relative to foreign goods','Government borrowing to finance deficit spending increases the demand for loanable funds, raising interest rates and reducing private investment — partially offsetting the stimulus','Tax cuts crowd out government revenue so completely that the government cannot afford to operate','Government spending crowds out all private-sector economic activity, making the entire economy government-controlled'],correctAnswer:1,explanation:'When the government borrows to fund deficit spending, it enters the loanable funds market as a large borrower, increasing demand for funds → interest rates rise → private sector firms find borrowing more expensive → private investment decreases. This partially offsets the increase in AD from government spending. The net effect of fiscal policy is positive but smaller than it would be without crowding out.'},
      {question:'An economy is in a severe recession with 12% unemployment. A supporter of expansionary fiscal policy argues that crowding out will be minimal. What is the BEST justification for this argument?',options:['The government never needs to borrow during recessions because tax revenues automatically rise','During deep recessions, interest rates are already very low and there are idle savings, so additional government borrowing has less impact on interest rates and private investment','Crowding out only occurs during periods of inflation, never during recessions','Banks refuse to lend to the private sector during recessions regardless of interest rates'],correctAnswer:1,explanation:'During severe recessions, there are substantial idle resources — unemployed workers, unused factory capacity, and idle savings. Interest rates are typically already very low. In this environment, the government can borrow without significantly competing with private borrowers (who aren\\'t investing anyway due to low demand). This means crowding out is minimal, and fiscal policy is more effective.'}
    ]}}
  ]
};\n`},
{file:'macro-fiscal-policy-tools-part1.ts', content:`export const macroFiscalPolicyToolsPart1Data = {
  topicSlug: 'macro-fiscal-policy-tools',
  sections: [
    {id:'macrofist1-intro',type:'text' as const,content:\`
# 🛠️ Fiscal Policy Tools

**Part 1 of 7 — Taxes, Spending & Their Effects**

---

| Section |
|---------|
| 📖 Tax Policy Tools |
| Government Spending Programs |
| Supply-Side Economics |
| Deficits, Debt & Sustainability |

> 🔑 **Key Concept:** The AP exam tests how specific fiscal tools (tax cuts, spending programs, supply-side policies) affect the economy differently. You must understand the **spending multiplier** and **tax multiplier** — covered in the Multiplier Effect lesson.
\`},
    {id:'macrofist1-taxes',type:'text' as const,content:\`
## 📖 Tax Policy as a Fiscal Tool

### Types of Taxes

| Tax Type | Description | Example | Progressive/Regressive? |
|---|---|---|---|
| **Progressive** | Higher income → higher tax rate | Federal income tax (10%–37% brackets) | Progressive |
| **Regressive** | Takes a larger % of income from low earners | Sales tax, payroll tax (Social Security capped at $168,600 in 2024) | Regressive |
| **Proportional (flat)** | Same rate for all income levels | Some state income taxes; proposed "flat tax" | Proportional |

### Tax Cuts vs. Spending Increases
Both are expansionary, but they affect AD differently:

| Policy | Initial Impact | Multiplier Effect |
|---|---|---|
| **↑ Government spending by $100B** | Directly adds $100B to AD | Full spending multiplier applies (larger impact) |
| **↓ Taxes by $100B** | Consumers get $100B more income but don't spend all of it (they save some based on MPS) | Tax multiplier applies (smaller impact than equal spending increase) |

**Why spending is more powerful dollar-for-dollar:**
- A $100B spending increase is 100% injected into the economy immediately
- A $100B tax cut → consumers save some (based on MPS) and spend the rest → first-round spending is less than $100B

### Balanced-Budget Multiplier
- If the government increases BOTH spending and taxes by the same amount, GDP still increases
- The **balanced-budget multiplier = 1** (GDP rises by exactly the amount of the spending/tax increase)
- This works because the spending multiplier is larger than the tax multiplier

> 🔑 **AP Connection:** A common AP question: "Is a \$100B tax cut or a \$100B spending increase more effective at increasing GDP?" Answer: Spending increase — because 100% enters the spending stream immediately, while some of the tax cut is saved rather than spent.
\`},
    {id:'macrofist1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'Why does a $100 billion increase in government spending have a larger effect on GDP than a $100 billion tax cut?',options:['Tax cuts only benefit wealthy individuals who don\\'t spend their additional income on any goods or services','Government spending enters the spending stream immediately and in full, while consumers save a portion of a tax cut (based on MPS) rather than spending all of it','Tax cuts reduce government revenue and therefore decrease GDP, while government spending has no effect on the budget','Government spending is not subject to the multiplier effect, while tax cuts multiply through the economy faster'],correctAnswer:1,explanation:'When the government spends $100B on infrastructure, that entire $100B is immediately injected into the economy (workers are hired, materials purchased). When consumers receive a $100B tax cut, they save a portion (determined by the marginal propensity to save, MPS) and spend only the remainder. If MPS = 0.2, only $80B of the tax cut enters the spending stream initially. This is why the spending multiplier > tax multiplier.'},
      {question:'The Social Security payroll tax is considered regressive because:',options:['It charges a higher tax rate to individuals who earn more money each year','It is capped at $168,600 (2024), so individuals earning above that amount pay a smaller percentage of their total income','It only applies to people over 65 years old who are already receiving Social Security benefits','It taxes all income at a flat rate with no cap, making everyone pay the same dollar amount'],correctAnswer:1,explanation:'The Social Security payroll tax (6.2% for employees) applies only to income up to $168,600 (2024 cap). Someone earning $168,600 pays 6.2% of their entire income. But someone earning $500,000 pays the same dollar amount of Social Security tax — which is only about 2.1% of their income. The effective rate decreases as income rises above the cap, making it regressive.'}
    ]}},
    {id:'macrofist1-supply',type:'text' as const,content:\`
## 📖 Supply-Side Economics

### Core Idea
- Traditional fiscal policy focuses on **demand** (shifting AD)
- Supply-side economics focuses on **incentives to produce** — shifting AS to increase potential output
- Associated with President Reagan's economic policies ("Reaganomics")

### Supply-Side Policies

| Policy | How It Works |
|---|---|
| **Tax cuts on business/investment** | More after-tax profit → businesses invest more → AS shifts right |
| **Deregulation** | Fewer rules → lower compliance costs → production costs fall → AS shifts right |
| **Investment in human capital** | Education/training → more productive workforce → AS shifts right |
| **Infrastructure investment** | Better roads, broadband, ports → lower transportation costs → AS shifts right |

### The Laffer Curve
- Shows the relationship between **tax rates** and **tax revenue**
- At 0% tax rate → $0 revenue
- At 100% tax rate → $0 revenue (nobody works if all income is taxed)
- Revenue is maximized at some rate between 0% and 100%
- **Supply-side argument:** If current tax rates are above the revenue-maximizing rate, cutting taxes will actually INCREASE revenue (more economic activity)

### Criticism
- Critics argue the economy is rarely on the "wrong side" of the Laffer Curve
- Tax cuts may primarily increase deficits rather than generating enough growth to offset lost revenue
- Benefits disproportionately go to high-income individuals and corporations

> 🔑 **AP Connection:** The Laffer Curve occasionally appears on the AP exam. You should be able to explain the theory AND the criticism — the AP exam values analytical thinking, not ideological positions.
\`},
    {id:'macrofist1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'Supply-side economists argue that tax cuts focused on businesses and investors will primarily:',options:['Shift aggregate demand to the left by reducing government tax revenue and forcing spending cuts','Increase incentives to invest, produce, and work — shifting aggregate supply to the right and increasing potential output','Have no effect on the economy because businesses always reinvest the same amount regardless of tax rates','Shift aggregate demand to the right without any effect on the supply side of the economy'],correctAnswer:1,explanation:'Supply-side economics focuses on production incentives: lower taxes on businesses → higher after-tax returns on investment → more capital spending and hiring → productive capacity increases → AS shifts right. This contrasts with demand-side (Keynesian) fiscal policy that focuses on shifting AD through spending and tax changes. The distinction between demand-side and supply-side approaches is a common AP exam topic.'},
      {question:'According to the Laffer Curve, what happens to tax revenue if the government raises tax rates from a point that is already above the revenue-maximizing rate?',options:['Tax revenue increases proportionally because higher rates always generate more government income','Tax revenue decreases because excessively high rates discourage productive economic activity, shrinking the tax base by more than the rate increase adds','Tax revenue stays exactly the same because the Laffer Curve shows revenue is constant at all rates above the maximum point','Tax revenue doubles because the government collects from both the increased rate and the expanded economic activity'],correctAnswer:1,explanation:'The Laffer Curve shows tax revenue initially rises with higher rates but eventually falls when rates become so high that they discourage work, investment, and economic activity. Beyond the revenue-maximizing rate, each rate increase shrinks the tax base (less economic activity) by more than it increases per-dollar tax collection — so total revenue falls. Whether any country is actually at this point is debated.'}
    ]}}
  ]
};\n`}
];

for (const f of files) {
  fs.writeFileSync(path.join(dir, f.file), f.content);
  console.log('✅ Wrote ' + f.file);
}
console.log('\nDone: ' + files.length + ' files written');
