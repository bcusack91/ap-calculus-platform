export const macroPhillipsCurvePart3Data = {
  topicSlug: 'macro-phillips-curve',
  sections: [
    {
      id: 'macrophi3-intro',
      type: 'text' as const,
      content: `
# 📉 The Phillips Curve

**Part 3 of 7 — Expectations and Long-Run Adjustment, Worked Cases**

---

| Section |
|---------|
| 📖 How Expectations Move the SRPC |
| Case 1: Pushing Unemployment Below the Natural Rate |
| Case 2: Disinflation Through Contractionary Policy |
| Case 3: A Supply Shock and Stagflation |

> 🔑 **Key Concept:** The short-run tradeoff exists only while inflation **differs from what people expected**. Once expectations catch up, the SRPC shifts and the economy returns to the natural rate of unemployment. This part works three cases step by step, with numbers, for a hypothetical economy.
`
    },
    {
      id: 'macrophi3-expectations',
      type: 'text' as const,
      content: `
## 📖 How Expectations Move the SRPC

### The anchor rule

**Every SRPC crosses the LRPC at the inflation rate people expect.** If people expect 2% inflation, the SRPC passes through the point (NRU, 2%). If they come to expect 5%, a new SRPC passes through (NRU, 5%).

### Why expectations matter

Workers and firms set many wages and prices in advance. A worker who expects 3% inflation asks for at least a 3% raise just to keep her real wage steady, and firms plan price increases on the same basis.

- If actual inflation turns out **higher** than expected, prices rise faster than the wages already agreed. Labor becomes cheaper in real terms, firms hire more, and unemployment falls below the natural rate.
- If actual inflation turns out **lower** than expected, wages rise faster than prices. Labor becomes more expensive in real terms, firms hire less, and unemployment rises above the natural rate.

### How expectations adjust

In the AP model, people form expectations largely from **recent experience**. After a year of 5% inflation, workers bargain as if 5% will continue. That shifts SRAS left on the AD-AS graph and shifts the SRPC up on the Phillips curve graph until it crosses the LRPC at 5%.

| Actual vs. expected inflation | Unemployment vs. NRU | What happens next |
|---|---|---|
| Actual **=** expected | Unemployment **=** NRU | Nothing; long-run equilibrium |
| Actual **above** expected | Unemployment **below** NRU | Expected inflation rises; SRPC shifts up |
| Actual **below** expected | Unemployment **above** NRU | Expected inflation falls; SRPC shifts down |
`
    },
    {
      id: 'macrophi3-case1',
      type: 'text' as const,
      content: `
## Case 1: Pushing Unemployment Below the Natural Rate

Corvia, a hypothetical economy, has a natural rate of unemployment of **5%** and expected inflation of **2%**. SRPC1 passes through point A (5%, 2%) and point B (3%, 5%). Coordinates are written as (unemployment rate, inflation rate).

**Step 1: Long-run equilibrium.** Corvia starts at **A (5%, 2%)**, where SRPC1 crosses the LRPC.

**Step 2: Expansionary policy.** The government raises purchases and the central bank lowers interest rates, so AD shifts right. Corvia moves up along SRPC1 to **B (3%, 5%)**. On the AD-AS graph, real GDP is above full-employment output.

**Step 3: Expectations catch up.** After a year of 5% inflation, workers expect 5% and bargain for larger raises. SRAS shifts left, and the SRPC shifts up to **SRPC2**, which crosses the LRPC at 5%.

**Step 4: Back to the natural rate.** With no further stimulus, Corvia settles at **C (5%, 5%)**. Unemployment is back at 5%, but inflation is now 5% instead of 2%.

| Point | Curve | Unemployment | Inflation | Expected inflation |
|---|---|---|---|---|
| A | SRPC1 and LRPC | 5% | 2% | 2% |
| B | SRPC1 | 3% | 5% | 2% |
| C | SRPC2 and LRPC | 5% | 5% | 5% |

### What if policy makers try again?

Suppose they push unemployment back to 3%. SRPC2 lies 3 points above SRPC1, so 3% unemployment now comes with **8%** inflation (point D). Expectations then rise to 8%, the SRPC shifts up again, and so on. Holding unemployment below the natural rate requires inflation that keeps **accelerating**, because each round people expect what they just saw.

> 🔑 **AP Connection:** On the AD-AS graph, Case 1 is the self-adjustment story for an inflationary gap: AD shifts right, then SRAS shifts left until output returns to full employment at a higher price level. The Phillips curve version adds the rise in **expected inflation** that drives the SRAS shift.
`
    },
    {
      id: 'macrophi3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Expansionary policy has moved Corvia to 3% unemployment and 5% inflation, while people expected 2% inflation and the natural rate is 5%. If policy makers take no further action, what happens next?',
            options: [
              'Expected inflation stays at 2%, and unemployment remains at 3% for good',
              'Expected inflation rises, the LRPC shifts left, and unemployment stays at 3%',
              'Expected inflation rises, the SRPC shifts up, and unemployment returns to 5%',
              'Expected inflation falls, the SRPC shifts down, and unemployment returns to 5%'
            ],
            correctAnswer: 2,
            explanation: 'Inflation above what people expected raises expected inflation, which shifts the SRPC up until it crosses the LRPC at 5% unemployment. Expectations do not stay at 2% after a year of 5% inflation, the LRPC moves only if the natural rate changes, and expectations fall only when inflation comes in below them.'
          },
          {
            question: 'Why does holding unemployment below the natural rate year after year lead to accelerating inflation?',
            options: [
              'The natural rate keeps falling, so the gap below it keeps widening',
              'The LRPC keeps shifting right, so the short-run tradeoff gets steeper',
              'Government debt keeps growing, so inflation must rise to repay it',
              'Expected inflation keeps catching up, so a bigger surprise is needed'
            ],
            correctAnswer: 3,
            explanation: 'Unemployment stays below the natural rate only while actual inflation beats expected inflation, and each year expectations rise to last year\'s rate. The natural rate and the LRPC do not move with policy, and government debt is not what drives the expectations process in this model.'
          },
          {
            question: 'On the AD-AS graph, the step in which Corvia\'s expected inflation catches up to actual inflation is shown as',
            options: [
              'SRAS shifting left until output is back at full employment',
              'AD shifting left until output is back at full employment',
              'LRAS shifting right until it reaches the higher output level',
              'AD shifting right until output rises further above potential'
            ],
            correctAnswer: 0,
            explanation: 'Higher expected inflation raises wage demands and costs, which shifts SRAS left until output returns to full employment at a higher price level. AD does not fall on its own, LRAS depends on resources and technology, and a further rightward AD shift would push output away from full employment, not back to it.'
          }
        ]
      }
    },
    {
      id: 'macrophi3-case2',
      type: 'text' as const,
      content: `
## Case 2: Disinflation Through Contractionary Policy

Now Corvia has lived with 8% inflation long enough that people expect 8%. It sits at **D′ (5%, 8%)** on SRPC3, which crosses the LRPC at 8%. The central bank decides to bring inflation down.

### The policy action

| Framework | Contractionary action |
|---|---|
| **Ample reserves** (how the Federal Reserve operates today) | **Raise the interest rate on reserve balances (IORB)**, its main tool. The federal funds rate, the Fed's target, rises into a new, higher target range, and other interest rates follow. |
| **Limited reserves** (the reserve-market model) | **Sell government bonds** in open-market operations, **raise the discount rate**, or **raise the reserve requirement**. Each reduces reserves or the money supply and pushes the federal funds rate up. |

Higher interest rates reduce borrowing for investment and big purchases, so AD shifts left. (The money market graph and the details of each tool are covered in the Monetary Policy topic.)

### The path

**Step 1:** AD falls. Corvia moves down along SRPC3 to **E (7%, 5%)**. Inflation has dropped by 3 percentage points, but unemployment is 2 points above the natural rate: a recession.

**Step 2:** After a year of 5% inflation, expected inflation falls to 5%. Lower wage demands shift SRAS right, and the SRPC shifts down to the curve that crosses the LRPC at 5%.

**Step 3:** Corvia returns to **F (5%, 5%)**. Inflation is 3 points lower, and unemployment is back at the natural rate.

| Point | Unemployment | Inflation | Expected inflation |
|---|---|---|---|
| D′ | 5% | 8% | 8% |
| E | 7% | 5% | 8% |
| F | 5% | 5% | 5% |

**Disinflation** means the inflation rate falls while staying positive. Prices are still rising at F, just more slowly.

### Credibility lowers the cost

The temporary rise in unemployment is the cost of disinflation. If workers and firms believe the central bank will follow through, expected inflation falls sooner, the SRPC shifts down faster, and the recession is shorter and milder.

The United States followed this general path in the early 1980s: the Federal Reserve tightened monetary policy sharply, inflation fell substantially, and unemployment rose steeply for a time before the economy recovered.
`
    },
    {
      id: 'macrophi3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Tavia, a hypothetical economy, has a natural rate of unemployment of 4%. People expect 6% inflation, and Tavia is in long-run equilibrium. Contractionary monetary policy moves Tavia along its SRPC to an unemployment rate of 6% and an inflation rate of 3%.

**1)** At the new short-run point, what is the cyclical unemployment rate, in percent?

**2)** After expected inflation fully adjusts to 3%, what is the unemployment rate, in percent?

**3)** By how many percentage points did inflation fall from the original long-run equilibrium to the new one?

Enter numbers only (no % sign).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '4', '3'],
        hint1: 'Cyclical unemployment is the actual rate minus the natural rate.',
        hint2: 'In long-run equilibrium, unemployment always returns to the natural rate.',
        hint3: 'Compare the starting inflation rate (equal to expected inflation of 6%) with the new expected rate of 3%.',
        explanation: '1) 6% − 4% = 2 percentage points of cyclical unemployment. 2) Once expected inflation adjusts, the SRPC shifts down and unemployment returns to the natural rate of 4%. 3) Inflation fell from 6% to 3%, a drop of 3 percentage points, which is disinflation.'
      }
    },
    {
      id: 'macrophi3-case3',
      type: 'text' as const,
      content: `
## Case 3: A Supply Shock and Stagflation

Return Corvia to **A (5%, 2%)** with expected inflation of 2%. A sudden jump in world oil prices raises production costs across the economy.

**Step 1: The shock.** SRAS shifts left on the AD-AS graph: the price level rises and real GDP falls. On the Phillips curve graph, the SRPC shifts right to SRPC_S, and Corvia lands at **G (7%, 6%)**. Unemployment and inflation have **both** risen: stagflation.

**Step 2: The policy choice.** The central bank can change AD, which moves Corvia along SRPC_S, but it cannot undo the shift.

| Choice | AD-AS | Phillips curve result | Trade-off |
|---|---|---|---|
| Do nothing | AD unchanged | Stay at G while the shock lasts | High unemployment and high inflation for a time |
| Expansionary policy | AD shifts right | Up along SRPC_S, toward 5% unemployment with inflation above 6% | Jobs recover sooner, but inflation goes higher and expectations may rise |
| Contractionary policy | AD shifts left | Down along SRPC_S, toward lower inflation with unemployment above 7% | Inflation falls sooner, but the recession deepens |

**Step 3: If policy does nothing and expectations stay at 2%.** As the oil price spike fades and unemployment above the natural rate holds down wage growth, costs fall back, SRAS shifts right, and the SRPC shifts back toward SRPC1. Corvia drifts back toward A (5%, 2%).

The danger in Step 2 is the middle row. If policy accommodates the shock and people start to expect higher inflation, the SRPC can stay up even after the oil price falls.

In the 1970s, large oil price increases contributed to periods of high inflation together with high unemployment in the United States and many other economies, which is why stagflation is the standard example of a supply shock on the Phillips curve.

> 🔑 **AP Connection:** In a supply shock question, first **shift** the SRPC to the right and place the new point up and to the right of the old one. Only then use AD policy to move **along** the new curve.
`
    },
    {
      id: 'macrophi3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A temporary cost shock moves an economy from 5% unemployment and 2% inflation to 7% unemployment and 6% inflation. Policy does not change, expectations stay at 2%, and the shock fades. Where does the economy head?',
            options: [
              'Stays put at 7% unemployment and 6% inflation',
              'Back toward 5% unemployment and 2% inflation',
              'To 5% unemployment with inflation still at 6%',
              'To 3% unemployment with inflation still at 6%'
            ],
            correctAnswer: 1,
            explanation: 'With expectations still at 2% and costs falling back, SRAS shifts right and the SRPC returns toward its original position, so the economy heads back to the natural rate at 2% inflation. Inflation stays at 6% only if expectations rise to 6%, and unemployment below the natural rate would need extra demand.'
          },
          {
            question: 'During a negative supply shock, a central bank uses expansionary policy to bring unemployment back to the natural rate quickly. Compared with taking no action, this choice',
            options: [
              'lowers inflation while leaving expected inflation unchanged',
              'shifts the LRPC to the left and lowers the natural rate',
              'raises inflation further and risks higher expected inflation',
              'returns both unemployment and inflation to where they started'
            ],
            correctAnswer: 2,
            explanation: 'Expansionary policy moves the economy up along the shifted SRPC, so unemployment falls but inflation climbs even higher, and higher inflation can raise expectations. AD policy does not change the natural rate, and it cannot undo the supply shift that raised inflation in the first place.'
          },
          {
            question: 'Why does a credible central bank announcement that it will reduce inflation lower the unemployment cost of disinflation?',
            options: [
              'The natural rate falls, so the LRPC moves left right away',
              'Aggregate demand rises, so inflation falls with no job losses',
              'Nominal wages rise faster, so firms are willing to hire more',
              'Expected inflation falls sooner, so the SRPC shifts down faster'
            ],
            correctAnswer: 3,
            explanation: 'If people believe the announcement, they lower their expected inflation quickly, so the SRPC shifts down sooner and less unemployment is needed to reduce inflation. Credibility works through expectations, not through the natural rate, and disinflation requires lower demand, not higher demand or faster wage growth.'
          }
        ]
      }
    }
  ]
}
