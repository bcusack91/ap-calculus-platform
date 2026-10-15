export const macroGdpGrowthPart7Data = {
  topicSlug: 'macro-gdp-growth',
  sections: [
    {
      id: 'macrogdp7-intro',
      type: 'text' as const,
      content: `
# 📈 GDP & Economic Growth

**Part 7 of 7 — Synthesis Review & Exam Practice**

---

| Section |
|---------|
| 📖 How the Pieces Fit Together |
| Key Formulas in One Place |
| Traps to Avoid |
| Mixed Practice |
| Synthesis FRQ with a Model Answer |

> 🔑 **Key Concept:** This topic tells one story. GDP **measures** an economy's output; real GDP and real GDP per capita **adjust** that measure for prices and population; the **business cycle** describes short-run swings around potential output; and **economic growth** is the long-run rise of potential output that raises living standards.
`
    },
    {
      id: 'macrogdp7-map',
      type: 'text' as const,
      content: `
## 📖 How the Pieces Fit Together

| Part | Big idea | The question it answers |
|---|---|---|
| 1 | GDP = C + I + G + Xn; nominal vs. real basics | How big is the economy? |
| 2 | Circular flow; expenditure, income and value-added approaches | Why do spending, income and output all equal GDP? |
| 3 | Classifying transactions; inventories; mixed lists | What counts, and in which component? |
| 4 | Building real GDP and the deflator from prices and quantities | Did output grow, or only prices? |
| 5 | Limitations of GDP; business cycle; output gaps | What does GDP miss, and where is the economy in the cycle? |
| 6 | Growth, productivity and growth policy | What raises living standards over decades? |

### One Chain of Reasoning
1. **Measure** total production: add final spending (or incomes, or value added).
2. **Remove inflation:** real GDP = (nominal GDP ÷ deflator) × 100.
3. **Remove population growth:** real GDP per capita = real GDP ÷ population.
4. **Locate the economy in the cycle:** compare real GDP with potential output. A negative gap means unemployment above the natural rate; a positive gap means unemployment below it and upward pressure on prices.
5. **Explain long-run change:** growth in potential output comes from more and better capital, human capital, technology and resources, and it shows up as an outward PPC shift and a rightward LRAS shift.
`
    },
    {
      id: 'macrogdp7-formulas',
      type: 'text' as const,
      content: `
## Key Formulas in One Place

| Quantity | Formula |
|---|---|
| GDP (expenditure approach) | C + I + G + (X − M) |
| GDP (simple income approach) | Wages + rent + interest + profit |
| Value added by a firm | Sales revenue − cost of intermediate goods |
| Nominal GDP | Sum of (current price × current quantity) |
| Real GDP | Sum of (base-year price × current quantity), or (nominal GDP ÷ deflator) × 100 |
| GDP deflator | (Nominal GDP ÷ real GDP) × 100 |
| Percent change (any growth or inflation rate) | ((new − old) ÷ old) × 100 |
| Real GDP per capita | Real GDP ÷ population |
| Output gap | Actual real GDP − potential real GDP |
| Labor productivity | Real output ÷ workers (or hours worked) |

### Useful Approximations
- Real GDP growth ≈ nominal GDP growth − inflation
- Real GDP per capita growth ≈ real GDP growth − population growth

## Traps to Avoid

| Trap | Correct idea |
|---|---|
| Counting stock and bond purchases as investment | Investment means new capital goods, new housing and inventory change |
| Counting transfer payments as G | G includes only purchases of goods and services |
| Adding every sale in a production chain | Count only the final good, or add the value added at each stage |
| Thinking imports lower GDP by themselves | An import adds to C, I or G and is subtracted in M, so the net effect is zero |
| Counting unsold output in next year's GDP | Output counts in the year it is produced, as inventory investment if unsold |
| Using current prices for real GDP | Real GDP uses base-year prices |
| Reporting the change in index points as the inflation rate | Divide the change by the starting index value |
| Calling a recovery "economic growth" | Long-run growth is an increase in potential output |
| Saying more workers alone raise living standards | Output per person rises only when productivity rises |
`
    },
    {
      id: 'macrogdp7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which of the following is counted in this year's U.S. GDP?",
            options: [
              "A used tractor that one farmer sells to a neighboring farmer",
              "A tractor built in Iowa this year and sold to a farmer in Canada",
              "Shares of stock in a tractor maker bought by a retired farmer",
              "A government payment to a farmer whose crops failed in a drought"
            ],
            correctAnswer: 1,
            explanation: "A tractor produced in the United States this year and sold abroad is an export, so it counts in GDP. A used tractor was counted when it was built, stock purchases are financial transactions, and disaster payments to farmers are transfers."
          },
          {
            question: "Nominal GDP is \\$5 trillion and the GDP deflator is 125. What is real GDP?",
            options: [
              "\\$6.25 trillion",
              "\\$4 trillion",
              "\\$3.75 trillion",
              "\\$5 trillion"
            ],
            correctAnswer: 1,
            explanation: "Real GDP = (\\$5 trillion ÷ 125) × 100 = \\$4 trillion. Multiplying by 1.25 instead of dividing gives \\$6.25 trillion, and subtracting 25% gives \\$3.75 trillion, which removes too much."
          },
          {
            question: "Nominal GDP rose 8% in a year while real GDP rose 3%. Which best explains the difference?",
            options: [
              "Population grew by about 5%",
              "The price level rose by about 5%",
              "Output of final goods rose about 5%",
              "Imports rose by about 5% of GDP"
            ],
            correctAnswer: 1,
            explanation: "Nominal growth ≈ real growth + inflation, so the 5-point difference reflects a rise of about 5% in the price level. Real GDP already measures output, population affects per capita figures rather than the nominal-real gap, and imports are not part of that gap."
          }
        ]
      }
    },
    {
      id: 'macrogdp7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculation** ✍️

A country reports the following for one year (values in billions of dollars):

| Item | Amount |
|---|---|
| Consumption | \\$700 |
| Investment (including inventory change) | \\$150 |
| Government purchases | \\$250 |
| Government transfer payments | \\$100 |
| Exports | \\$90 |
| Imports | \\$120 |

The GDP deflator for the year is **107**, and the population is **20 million**.

**1)** What is nominal GDP? (billions of dollars, enter the number only, no commas)

**2)** What is real GDP? (billions of dollars, enter the number only, no commas)

**3)** What is real GDP per capita? (dollars per person, enter the number only, no commas)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1070', '1000', '50000'],
        hint1: 'GDP = C + I + G + (X − M). Transfer payments are not included.',
        hint2: 'Real GDP = (nominal GDP ÷ deflator) × 100.',
        hint3: '\\$1,000 billion is \\$1,000,000,000,000. Divide by 20,000,000 people.',
        explanation: 'Nominal GDP = \\$700 + \\$150 + \\$250 + (\\$90 − \\$120) = \\$1,070 billion; the \\$100 billion of transfers is excluded. Real GDP = (\\$1,070 ÷ 107) × 100 = \\$1,000 billion. Real GDP per capita = \\$1,000 billion ÷ 20 million = \\$50,000 per person.'
      }
    },
    {
      id: 'macrogdp7-frq',
      type: 'text' as const,
      content: `
## Synthesis FRQ with a Model Answer

**Prompt.** The table shows data for Country Q. The natural rate of unemployment is 5%. The base year is 2024.

| Year | Nominal GDP | GDP deflator | Potential real GDP | Unemployment rate |
|---|---|---|---|---|
| 2024 | \\$2,000 billion | 100 | \\$2,050 billion | 6.2% |
| 2025 | \\$2,226 billion | 106 | \\$2,100 billion | 5.0% |

**(a)** Calculate real GDP in 2025. Show your work.

**(b)** Calculate the growth rate of real GDP from 2024 to 2025.

**(c)** In 2024, is Country Q in a recessionary gap, an inflationary gap, or at full employment? Explain using the data.

**(d)** Between 2024 and 2025, potential real GDP rose. Identify one government policy that could have caused this increase and explain how.

### Model Answer

**(a)** Real GDP in 2025 = (\\$2,226 ÷ 106) × 100 = **\\$2,100 billion**.

**(b)** Real GDP in 2024 equals nominal GDP (\\$2,000 billion) because 2024 is the base year. Growth = (\\$2,100 − \\$2,000) ÷ \\$2,000 × 100 = **5%**.

**(c)** **Recessionary gap.** Real GDP (\\$2,000 billion) is below potential (\\$2,050 billion), and unemployment (6.2%) is above the natural rate (5%), so cyclical unemployment exists.

**(d)** One acceptable answer: **increased public funding for education and job training.** It raises human capital, which makes workers more productive and increases the economy's potential output. (Infrastructure spending, research subsidies or investment tax incentives, each with its own link to capital or technology, would also earn the point.)

### Reading the Result
Real GDP grew 5% in 2025, faster than potential output (which grew about 2.4%), so the recessionary gap closed and unemployment fell to the natural rate. Part of the 5% was **recovery** (using idle resources) and part was **long-run growth** (the rise in potential output).
`
    },
    {
      id: 'macrogdp7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which event would shift a country's PPC outward and its LRAS curve to the right?",
            options: [
              "A fall in unemployment toward the natural rate",
              "A rise in the skill level of its workers",
              "An increase in government transfer payments",
              "A rise in consumer spending on domestic goods"
            ],
            correctAnswer: 1,
            explanation: "More skilled workers raise human capital and productivity, increasing potential output. A fall in unemployment moves the economy toward its existing PPC, and transfers and consumer spending shift AD rather than potential output."
          },
          {
            question: "Countries X and Y have the same real GDP per capita. Workers in X average 50 hours of work per week, and workers in Y average 35. What does this suggest?",
            options: [
              "Residents of Y may be better off, since GDP omits the value of leisure",
              "Residents of X may be better off, since they spend more hours producing",
              "Residents of both are equally well off, since output per person is equal",
              "Residents of X may be better off, since longer hours raise productivity"
            ],
            correctAnswer: 0,
            explanation: "GDP does not count the value of free time, so Y's residents enjoy the same output per person with far more leisure. Equal GDP per capita does not mean equal well-being, and producing the same output with more hours means X's productivity per hour is lower, not higher."
          },
          {
            question: "In the table for Country Q, unemployment falls from 6.2% to 5.0% between 2024 and 2025. Which statement best describes the change?",
            options: [
              "The recessionary gap widened, so cyclical unemployment rose",
              "The natural rate of unemployment fell as potential output rose",
              "Cyclical unemployment fell to zero as the recessionary gap closed",
              "Frictional unemployment fell to zero as the economy grew faster"
            ],
            correctAnswer: 2,
            explanation: "Unemployment of 6.2% includes 1.2 points of cyclical unemployment; at 5.0% it equals the natural rate, so cyclical unemployment is gone and the economy is at potential output. The natural rate stays at 5%, and frictional unemployment is part of the natural rate, so it does not fall to zero."
          }
        ]
      }
    }
  ]
}
