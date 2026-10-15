export const macroGdpGrowthPart5Data = {
  topicSlug: 'macro-gdp-growth',
  sections: [
    {
      id: 'macrogdp5-intro',
      type: 'text' as const,
      content: `
# 📈 GDP & Economic Growth

**Part 5 of 7 — Limitations of GDP & the Business Cycle**

---

| Section |
|---------|
| 📖 What GDP Misses |
| GDP and Well-Being |
| The Business Cycle |
| Potential Output and Output Gaps |
| Reading a Business-Cycle Table |

> 🔑 **Key Concept:** GDP measures the **market value of production**, not well-being, so it leaves out some production and ignores how output is shared. Real GDP also does not grow smoothly: it **fluctuates around a long-run trend** in the **business cycle**, and the gap between actual and potential output tells you about unemployment and inflation.
`
    },
    {
      id: 'macrogdp5-limits',
      type: 'text' as const,
      content: `
## 📖 What GDP Misses

GDP is the best single measure of an economy's output, but it was never designed to measure welfare. These are its main limitations.

| Limitation | What happens | Example |
|---|---|---|
| **Nonmarket production** | Goods and services produced without a market sale are left out | Cooking at home, caring for your own children, volunteering at a food bank |
| **Underground economy** | Unreported legal work and illegal activity are not recorded | Cash-only jobs kept off tax returns; illegal drug sales |
| **Leisure** | GDP does not count the value of free time | Two countries with equal GDP, but workers in one work 30 hours a week and in the other 50 |
| **Quality and new goods** | Better products at similar prices may raise well-being more than GDP shows | A smartphone today does far more than one sold for the same price a decade ago |
| **Environmental effects** | Pollution and resource depletion are not subtracted; spending to clean up damage is added | An oil spill's cleanup spending raises GDP even though the spill made people worse off |
| **Distribution of income** | GDP per capita is an average and says nothing about who receives the output | Two countries with the same GDP per capita can have very different poverty rates |
| **Composition of output** | Every dollar of output counts the same, whatever it is used for | \\$1 billion of prison construction adds as much as \\$1 billion of new schools |

### A Common Trap: Shifting Work into the Market

When an activity moves from the household into the market, **measured GDP rises even if total production does not**. If a family stops cooking at home and buys the same meals at a restaurant, the meals now show up in GDP. Part of the growth of GDP in the twentieth century reflects this shift, as more household work (child care, food preparation, cleaning) began to be bought and sold.
`
    },
    {
      id: 'macrogdp5-wellbeing',
      type: 'text' as const,
      content: `
## GDP and Well-Being

Despite these limitations, **real GDP per capita** is the standard measure used to compare material living standards across countries and over time, for three reasons:
1. It is measured in a consistent way in nearly every country.
2. It is strongly associated with things people value, such as life expectancy, education and access to health care.
3. Adjusting for prices (real) and population (per capita) removes the two biggest distortions in raw GDP numbers.

| To compare... | Use | Why not raw nominal GDP? |
|---|---|---|
| One country's output over time | Real GDP | Nominal GDP mixes output growth with inflation |
| Living standards between two countries | Real GDP per capita | A large country can have high total GDP but low output per person |
| Living standards of a typical family | Real GDP per capita **plus** data on income distribution | An average can be pulled up by a few very high incomes |

> 🔑 **AP Connection:** If an FRQ asks why GDP is an imperfect measure of well-being, name a **specific** limitation (for example, "GDP does not include nonmarket production such as household work") rather than saying "GDP is not accurate."
`
    },
    {
      id: 'macrogdp5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which of the following would raise measured GDP even though the total amount of goods and services produced does not change?",
            options: [
              "A family stops cooking at home and buys the same meals at a diner",
              "A factory adds a second shift and turns out more bicycles to sell",
              "A homeowner spends a weekend repainting the walls of his garage",
              "A retiree receives a larger Social Security check from the government"
            ],
            correctAnswer: 0,
            explanation: "The home-cooked meals were nonmarket production, so moving the same meals into a restaurant adds them to measured GDP. A second shift raises actual production, painting your own garage is never counted, and a larger transfer payment is not production."
          },
          {
            question: "Why can real GDP per capita overstate the material well-being of a typical family?",
            options: [
              "It counts transfer payments as part of household income",
              "It values output at base-year rather than current prices",
              "It is an average that ignores how income is distributed",
              "It double counts the intermediate goods used in production"
            ],
            correctAnswer: 2,
            explanation: "GDP per capita is total output divided by population, so a few very high incomes can raise the average above what a typical family earns. GDP excludes transfers and intermediate goods, and valuing output at base-year prices is what makes it real, not a source of overstatement."
          },
          {
            question: "A city spends \\$50 million to clean up a chemical spill in its river. How does GDP treat this event?",
            options: [
              "It subtracts \\$50 million as the cost of the damage",
              "It adds \\$50 million, though people are not better off",
              "It adds nothing, since cleanup restores rather than produces",
              "It nets the damage against the cleanup, so GDP is unchanged"
            ],
            correctAnswer: 1,
            explanation: "Cleanup services are purchased by government, so they add \\$50 million to G and to GDP. GDP never subtracts environmental damage, which is why it can rise after a disaster even though well-being has fallen."
          }
        ]
      }
    },
    {
      id: 'macrogdp5-cycle',
      type: 'text' as const,
      content: `
## The Business Cycle

The **business cycle** is the short-run rise and fall of real GDP around its long-run growth trend.

### Picture the Graph
The horizontal axis is **time** and the vertical axis is **real GDP**. A straight, upward-sloping **trend line** shows the growth of potential output. Actual real GDP is a wavy line that rises above and falls below the trend.

| Phase | What real GDP does | Typical labor market and prices |
|---|---|---|
| **Expansion** (recovery) | Rises | Unemployment falls; spending and hiring grow |
| **Peak** | Reaches a high point, then turns down | Unemployment at its lowest; inflation pressure often greatest |
| **Contraction** (recession) | Falls | Unemployment rises; firms cut production and hiring; inflation pressure eases |
| **Trough** | Reaches a low point, then turns up | Unemployment at its highest |

A recession is a significant, widespread decline in economic activity that lasts more than a few months. The cycle has no fixed length: expansions and contractions vary widely in length and severity.

### On the PPC
- An economy in a **recession** is at a point **inside** its production possibilities curve: resources such as labor are unemployed.
- Moving from that point back toward the curve is **recovery**, not long-run growth.
- **Long-run growth** is an **outward shift** of the PPC (Part 6).
`
    },
    {
      id: 'macrogdp5-gaps',
      type: 'text' as const,
      content: `
## Potential Output and Output Gaps

**Potential output** (full-employment output) is the real GDP the economy produces when unemployment equals the **natural rate of unemployment**, meaning there is frictional and structural unemployment but no cyclical unemployment. The trend line on the business-cycle graph tracks potential output.

**Output gap = actual real GDP − potential real GDP**

| Situation | Output gap | Unemployment | Pressure on prices |
|---|---|---|---|
| Real GDP **below** potential | **Negative** (recessionary gap) | **Above** the natural rate (cyclical unemployment exists) | Downward; inflation tends to slow |
| Real GDP **equal to** potential | Zero | **Equal to** the natural rate | Stable |
| Real GDP **above** potential | **Positive** (inflationary gap) | **Below** the natural rate | Upward; inflation tends to rise |

How can output exceed potential? For a while, firms can run extra shifts, workers can put in overtime, and people who would normally be between jobs are hired quickly. Those levels cannot be sustained, and the strain pushes up wages and prices.

> 🔑 **AP Connection:** Output gaps link this topic to the AD-AS model in Unit 3. A recessionary gap appears as short-run equilibrium **to the left** of the long-run aggregate supply curve, and an inflationary gap appears **to the right** of it.
`
    },
    {
      id: 'macrogdp5-table',
      type: 'text' as const,
      content: `
## Reading a Business-Cycle Table

The natural rate of unemployment in this economy is **4.5%**. Values are in billions of dollars.

| Quarter | Real GDP | Potential output | Output gap | Unemployment rate |
|---|---|---|---|---|
| 1 | \\$980 | \\$1,000 | −\\$20 | 5.8% |
| 2 | \\$1,000 | \\$1,005 | −\\$5 | 5.0% |
| 3 | \\$1,030 | \\$1,010 | +\\$20 | 3.8% |
| 4 | \\$1,020 | \\$1,015 | +\\$5 | 4.4% |
| 5 | \\$990 | \\$1,020 | −\\$30 | 6.5% |
| 6 | \\$1,005 | \\$1,025 | −\\$20 | 6.0% |

### Reading It Step by Step
1. **Phases.** Real GDP rises from Quarter 1 to Quarter 3 (expansion), peaks in **Quarter 3**, falls through Quarter 5 (contraction), reaches its trough in **Quarter 5**, and rises again in Quarter 6 (recovery).
2. **Gaps.** Quarters 3 and 4 have positive gaps (inflationary). Quarters 1, 2, 5 and 6 have negative gaps (recessionary).
3. **Unemployment.** Every positive gap matches an unemployment rate below 4.5%, and every negative gap matches a rate above 4.5%.
4. **Size of the gap as a percent.** In Quarter 5 the gap is −\\$30 ÷ \\$1,020 × 100 ≈ **−2.9%** of potential output.

Notice Quarter 6: real GDP is rising, so the economy is in an expansion, but output is still below potential and unemployment is still above the natural rate. **A recovery can be under way while a recessionary gap remains.**
`
    },
    {
      id: 'macrogdp5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When real GDP is below potential output, the unemployment rate is ___ the natural rate.',
            options: ['above', 'below', 'equal to', 'unrelated to']
          },
          {
            label: 'The low point of real GDP, after which output begins to rise again, is the ___.',
            options: ['trough', 'peak', 'recession', 'trend']
          },
          {
            label: 'Volunteer work at a food bank is left out of GDP because it is ___.',
            options: ['nonmarket activity', 'an intermediate good', 'a transfer payment', 'a financial transaction']
          },
          {
            label: 'A positive (inflationary) output gap tends to put ___ pressure on the price level.',
            options: ['upward', 'downward', 'no', 'offsetting']
          }
        ],
        correctAnswers: ['above', 'trough', 'nonmarket activity', 'upward'],
        hint1: 'A recessionary gap comes with cyclical unemployment.',
        hint2: 'The peak is the high point; what is the low point called?',
        hint3: 'No one buys or sells the volunteer\'s service in a market.',
        explanation: 'Output below potential means cyclical unemployment, so unemployment is above the natural rate. The trough is the low point of the cycle. Volunteer work is nonmarket activity with no market price. When output is above potential, resources are strained and prices tend to rise.'
      }
    },
    {
      id: 'macrogdp5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "On a production possibilities curve, an economy in a recession is best shown as",
            options: [
              "a point on its production possibilities curve",
              "a point inside its production possibilities curve",
              "a point beyond its production possibilities curve",
              "an inward shift of its production possibilities curve"
            ],
            correctAnswer: 1,
            explanation: "In a recession some labor and capital are unemployed, so the economy produces less than it could, a point inside the curve. The curve itself, which shows what full use of resources can produce, does not shift inward just because resources sit idle."
          },
          {
            question: "When actual real GDP is above potential output, the economy most likely has",
            options: [
              "unemployment above the natural rate and rising inflation",
              "unemployment below the natural rate and rising inflation",
              "inflation slowing while unemployment is below the natural rate",
              "stable prices with unemployment equal to the natural rate"
            ],
            correctAnswer: 1,
            explanation: "Output above potential means firms are hiring beyond the full-employment level, so unemployment falls below the natural rate and the strain on resources pushes prices up. Unemployment above the natural rate goes with a recessionary gap."
          },
          {
            question: "Real GDP is \\$990 billion and potential output is \\$1,020 billion. Which describes the economy?",
            options: [
              "An inflationary gap of \\$30 billion, with cyclical unemployment",
              "A recessionary gap of \\$30 billion, with no cyclical unemployment",
              "A recessionary gap of \\$30 billion, with cyclical unemployment",
              "An inflationary gap of \\$30 billion, with unemployment below normal"
            ],
            correctAnswer: 2,
            explanation: "Actual output is \\$30 billion below potential, a recessionary gap, and output below potential means unemployment is above the natural rate, so cyclical unemployment is present. An inflationary gap would require output above potential."
          }
        ]
      }
    }
  ]
}
