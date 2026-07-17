export const macroUnemploymentInflationPart1Data = {
  topicSlug: 'macro-unemployment-inflation',
  sections: [
    {id:'macroune1-intro',type:'text' as const,content:`
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
`},
    {id:'macroune1-unemployment',type:'text' as const,content:`
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
`},
    {id:'macroune1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'An experienced auto worker permanently loses their job because their factory replaces assembly-line workers with industrial robots. This is an example of:',options:['Frictional unemployment — the worker is temporarily between jobs and will find similar work soon','Cyclical unemployment — the worker lost their job due to a recession that reduced demand for cars','Structural unemployment — the worker\'s skills no longer match available jobs due to technological change in the industry','Seasonal unemployment — auto manufacturing follows predictable seasonal patterns that cause temporary layoffs'],correctAnswer:2,explanation:'Structural unemployment occurs when there is a fundamental mismatch between workers\' skills and available jobs — often caused by technological change (automation), globalization, or declining industries. The auto worker\'s assembly-line skills are no longer demanded because robots do the work. Unlike frictional unemployment (temporary), structural unemployment requires retraining or relocation to resolve.'},
      {question:'The labor force in a country is 160 million. Of these, 152 million are employed and 8 million are unemployed and actively seeking work. What is the unemployment rate?',options:['5.0% — calculated as (8 million ÷ 160 million) × 100','5.3% — calculated as (8 million ÷ 152 million) × 100','95.0% — calculated as (152 million ÷ 160 million) × 100','8.0% — the number of unemployed expressed as a percentage of total population'],correctAnswer:0,explanation:'Unemployment rate = (Unemployed ÷ Labor Force) × 100 = (8M ÷ 160M) × 100 = **5.0%**. \nThe labor force (160M) already equals Employed + Unemployed (152M + 8M). A common mistake is dividing by only employed workers (which would give 5.3%) — but the denominator must be the total labor force.'}
    ]}},
    {id:'macroune1-inflation',type:'text' as const,content:`
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

**Inflation Rate = [$(CPI_{2} - CPI_{1})$ ÷ $CPI_{1}$] × 100**

### Winners and Losers from Unexpected Inflation

| Winners | Losers |
|---|---|
| **Borrowers** — repay loans with dollars worth less than when borrowed | **Lenders** — receive payments worth less in real terms |
| **Government** — the biggest borrower; national debt eroded in real terms | **Savers** — cash and fixed deposits lose purchasing power |
| Workers with **COLA** adjustments | Workers on **fixed incomes** (pensions without COLA) |

> 🔑 **AP Connection:** The AP exam tests who benefits and who is hurt by **unexpected** inflation. Key insight: inflation benefits borrowers and hurts lenders because the real value of debt decreases. Expected inflation that is built into contracts does not redistribute wealth as much.
`},
    {id:'macroune1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'If the CPI was 120 last year and 126 this year, what is the inflation rate?',options:['6.0% — calculated as the raw difference between this year\'s CPI and last year\'s CPI','5.0% — calculated as [(126 − 120) ÷ 120] × 100','26.0% — calculated as [(126 − 100) ÷ 100] × 100 using the base year CPI of 100','105.0% — calculated by dividing this year\'s CPI by last year\'s CPI'],correctAnswer:1,explanation:'Inflation Rate = [$(CPI_{2} - CPI_{1})$ ÷ $CPI_{1}$] × 100 = [(126 − 120) ÷ 120] × 100 = [6 ÷ 120] × 100 = **5.0%**. \nA common mistake is subtracting CPI values and treating the difference as the inflation rate (6% would be wrong). The rate must be calculated as a percentage change from the previous period\'s CPI, not as a raw point difference.'},
      {question:'Who is most likely to BENEFIT from unexpected inflation?',options:['A retiree on a fixed pension with no cost-of-living adjustment','A person who lent $100,000 at a fixed 3% interest rate for 20 years','A homeowner who borrowed $300,000 on a fixed-rate 30-year mortgage','A person who keeps all their savings in a bank account earning 1% interest'],correctAnswer:2,explanation:'Borrowers benefit from unexpected inflation because they repay loans with dollars that are worth LESS in real purchasing power than when they borrowed. The homeowner\'s mortgage payment stays fixed in nominal terms, but inflation erodes the real burden of the debt. Conversely, the lender receives payments that buy fewer goods and services, and the saver\'s purchasing power declines.'}
    ]}}
  ]
};
