export const macroUnemploymentInflationPart7Data = {
  topicSlug: 'macro-unemployment-inflation',
  sections: [
    {
      id: 'macroune7-intro',
      type: 'text' as const,
      content: `
# 📊 Unemployment & Inflation

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture |
| Unemployment Summary |
| Price Index and Inflation Summary |
| Costs of Inflation Summary |
| Mixed Review |

> 🔑 **Key Concept:** Unemployment and inflation are the two headline measures of how an economy is performing. This topic gives you the tools to **measure** them (unemployment rate, participation rate, CPI, inflation rate), to **interpret** them (natural rate, cyclical gap, real vs. nominal values), and to explain **who bears the costs**.
`
    },
    {
      id: 'macroune7-big-picture',
      type: 'text' as const,
      content: `
## 📖 The Big Picture

The ideas in Parts 1–6 connect in two chains.

**Labor-market chain**

Survey classifies people (employed, unemployed, not in labor force) → **unemployment rate** and **participation rate** → split unemployment into **frictional, structural, cyclical** → compare the actual rate with the **natural rate** → if cyclical unemployment is positive, output is below potential and **expansionary fiscal or monetary policy** can help.

**Price-level chain**

Fixed market basket → **CPI** → **inflation rate** (percentage change in the CPI) → deflate nominal values to get **real wages** and **real interest rates** → compare actual and expected inflation to find **who gains and who loses** → add the costs that occur even when inflation is expected.

## Unemployment Summary

| Concept | Formula or rule | Watch out for |
|---|---|---|
| Labor force | Employed + unemployed | Discouraged workers, students, retirees are **not** in it |
| Unemployment rate | Unemployed ÷ labor force × 100 | Denominator is the labor force, not the population |
| Participation rate | Labor force ÷ working-age population × 100 | Falls when people stop searching |
| Natural rate | Frictional + structural | Not zero; changes with demographics, benefits, matching technology and skills |
| Cyclical rate | Actual rate − natural rate | Negative when the economy is beyond full employment |
| Remedies | Frictional: information. Structural: retraining. Cyclical: fiscal and monetary policy | The federal funds rate is the Fed's target; its main tool is the interest rate on reserve balances |
`
    },
    {
      id: 'macroune7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which person is counted as unemployed in the official statistics?',
            options: [
              'A retired teacher who volunteers at a library three days a week',
              'A recent graduate who applies for jobs every week this month',
              'A former factory worker who quit looking for work six months ago',
              'A part-time barista who wants more hours but cannot find them'
            ],
            correctAnswer: 1,
            explanation: 'The graduate is jobless, available and actively searching, so the graduate is unemployed. The retiree and the worker who quit looking are outside the labor force, and the part-time barista is employed though underemployed.'
          },
          {
            question: 'A country\'s actual unemployment rate is the same as its natural rate. Which conclusion follows?',
            options: [
              'Real GDP is below potential output',
              'Real GDP is above potential output',
              'Real GDP equals potential output',
              'Real GDP is growing at its peak rate'
            ],
            correctAnswer: 2,
            explanation: 'When the actual rate equals the natural rate, cyclical unemployment is zero and the economy is at full-employment output. Output below potential goes with unemployment above the natural rate, and output above potential with unemployment below it.'
          },
          {
            question: 'A rapid shift from print newspapers to online news leaves many printing-press operators without jobs that match their skills. Which policy best addresses this unemployment?',
            options: [
              'A cut in personal income taxes to raise consumer spending',
              'A lower interest rate on reserve balances set by the Fed',
              'An increase in the length of unemployment benefit payments',
              'Job-training programs in fields where growing industries are hiring'
            ],
            correctAnswer: 3,
            explanation: 'A skills mismatch caused by technological change is structural unemployment, which retraining addresses. Tax cuts and a lower interest rate on reserve balances target cyclical unemployment, and longer benefits tend to lengthen job searches.'
          }
        ]
      }
    },
    {
      id: 'macroune7-prices',
      type: 'text' as const,
      content: `
## Price Index and Inflation Summary

| Concept | Formula or rule | Watch out for |
|---|---|---|
| CPI | Cost of fixed basket this year ÷ cost in base year × 100 | Base year CPI is always 100 |
| Inflation rate | (CPI this year − CPI last year) ÷ CPI last year × 100 | Points are not percents unless last year is the base year |
| Real value | Nominal value ÷ (CPI ÷ 100) | Gives base-year dollars |
| Converting across years | Value × (CPI in year B ÷ CPI in year A) | Multiply by the ratio, in the right order |
| CPI vs. GDP deflator | CPI: consumer basket, includes imports. Deflator: all domestic output, excludes imports | Imported goods move only the CPI |
| CPI biases | Substitution, quality change, new products | All three make the CPI **overstate** inflation |
| Disinflation vs. deflation | Inflation rate falls but stays positive vs. price level falls | Disinflation still means rising prices |

## Costs of Inflation Summary

| Concept | Rule |
|---|---|
| Real interest rate | Nominal rate − inflation rate |
| Nominal interest rate | Real rate + expected inflation |
| Unexpected inflation | Helps fixed-rate borrowers; hurts fixed-rate lenders, savers and people on fixed nominal incomes |
| Unexpected deflation | Reverses the redistribution: hurts borrowers, helps lenders |
| Costs even when expected | Shoe-leather costs, menu costs, unit-of-account costs |
| Protection | COLAs, adjustable interest rates, inflation-indexed bonds |

> 🔑 **AP Connection:** Many multiple-choice questions combine two steps, such as "compute the inflation rate, then find the real interest rate" or "classify the worker, then recompute the unemployment rate." Write each step down, even on multiple choice.
`
    },
    {
      id: 'macroune7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A worker who wants a job but has stopped searching is ___.',
            options: ['not in the labor force', 'cyclically unemployed', 'frictionally unemployed', 'underemployed']
          },
          {
            label: 'The natural rate of unemployment is the sum of frictional and ___ unemployment.',
            options: ['structural', 'cyclical', 'seasonal', 'hidden']
          },
          {
            label: 'Because consumers switch to cheaper goods when prices change, the CPI tends to ___ inflation.',
            options: ['overstate', 'understate', 'accurately measure', 'ignore']
          },
          {
            label: 'If the nominal interest rate is 5% and inflation is 7%, the real interest rate is ___.',
            options: ['−2%', '2%', '12%', '−12%']
          }
        ],
        correctAnswers: ['not in the labor force', 'structural', 'overstate', '−2%'],
        hint1: 'Being counted as unemployed requires an active search.',
        hint2: 'Cyclical unemployment is zero at the natural rate.',
        hint3: 'Real rate = nominal rate − inflation rate.',
        explanation: 'A discouraged worker is outside the labor force. The natural rate is frictional plus structural unemployment. Substitution bias makes the CPI overstate inflation. The real rate is 5% − 7% = −2%.'
      }
    },
    {
      id: 'macroune7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The CPI was 160 last year and 168 this year. A savings account paid a 3% nominal interest rate over the year. What real interest rate did the saver earn?',
            options: [
              '−2%',
              '8%',
              '−5%',
              '2%'
            ],
            correctAnswer: 0,
            explanation: 'Inflation was (168 − 160) ÷ 160 × 100 = 5%, so the real rate was 3% − 5% = −2%. Using the 8-point rise as the inflation rate gives −5%, and subtracting in the wrong order gives 2%.'
          },
          {
            question: 'Inflation turns out to be lower than expected when many fixed-rate loans were made. Which group is most likely to gain?',
            options: [
              'Households that borrowed at fixed rates',
              'Banks that lent money at fixed rates',
              'Firms that sold bonds at fixed rates',
              'Retirees with fully indexed pensions'
            ],
            correctAnswer: 1,
            explanation: 'Lower-than-expected inflation raises the realized real interest rate, so lenders such as banks gain while borrowing households and bond-issuing firms lose. Retirees with fully indexed pensions are protected either way, so they neither gain nor lose much.'
          },
          {
            question: 'A worker\'s nominal wage rose from \\$25.00 to \\$26.00 an hour while the CPI rose from 120 to 126. What happened to the worker\'s real wage?',
            options: [
              'It rose, because the nominal wage went up by \\$1.00',
              'It stayed the same, because both rose by about 5%',
              'It fell, because prices rose faster than the wage',
              'It rose, because the wage rose faster than prices'
            ],
            correctAnswer: 2,
            explanation: 'The wage rose 4% (1 ÷ 25) while prices rose 5% (6 ÷ 120), so the real wage fell. A higher nominal wage does not mean higher purchasing power when prices rise faster.'
          }
        ]
      }
    }
  ]
}
