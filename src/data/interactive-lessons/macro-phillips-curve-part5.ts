export const macroPhillipsCurvePart5Data = {
  topicSlug: 'macro-phillips-curve',
  sections: [
    {
      id: 'macrophi5-intro',
      type: 'text' as const,
      content: `
# 📉 The Phillips Curve

**Part 5 of 7 — Nuance and Common Misconceptions**

---

| Section |
|---------|
| 📖 Inflation Rate vs. Price Level |
| What Shifts Which Curve |
| Anchored Expectations |
| Long-Run Inflation and Money Growth |

> 🔑 **Key Concept:** Most lost points on Phillips curve questions come from a handful of mix-ups: treating the inflation rate as the price level, calling disinflation "deflation," assuming full employment means zero unemployment, and shifting the wrong curve. This part sorts them out and connects the long-run Phillips curve to money growth.
`
    },
    {
      id: 'macrophi5-rate-level',
      type: 'text' as const,
      content: `
## 📖 Inflation Rate vs. Price Level

The AD-AS graph measures the **price level**. The Phillips curve measures the **inflation rate**, the percentage change in the price level. They are different things.

### Worked example: a hypothetical economy

| Year | Price index | Inflation rate | Description |
|---|---|---|---|
| 1 | 100.0 | — | Starting level |
| 2 | 106.0 | 6.0% | Inflation |
| 3 | 108.1 | about 2.0% | **Disinflation**: the rate fell, but prices still rose |
| 4 | 107.0 | about −1.0% | **Deflation**: the price level itself fell |

From Year 2 to Year 3, the inflation rate fell by 4 percentage points, yet the price level **rose** from 106.0 to 108.1. A falling inflation rate does not mean falling prices.

### Where these appear on the Phillips curve graph

| Term | Meaning | Phillips curve location |
|---|---|---|
| **Inflation** | Price level rising | Point above the horizontal axis |
| **Disinflation** | Inflation rate falling, still positive | A move **down** that stays above the horizontal axis |
| **Deflation** | Price level falling; negative inflation rate | Point **below** the horizontal axis |
| **Stagflation** | High inflation and high unemployment together | SRPC shifted right; point up and to the right |

### The natural rate is not zero

The LRPC never sits at 0% unemployment. The natural rate includes frictional and structural unemployment, which exist even at full employment (see the Unemployment & Inflation topic). **Full employment** means unemployment **equals** the natural rate, so a point on the LRPC has zero **cyclical** unemployment, not zero unemployment.

> 🔑 **AP Connection:** If an FRQ says "the inflation rate decreases from 5% to 3%," prices are still rising. Do not describe this as a fall in the price level, and on an AD-AS graph do not draw a lower price level unless the question says prices fell.
`
    },
    {
      id: 'macrophi5-shifters',
      type: 'text' as const,
      content: `
## What Shifts Which Curve

| Event | AD-AS effect | Phillips curve effect |
|---|---|---|
| Change in consumption, investment, government purchases or net exports | AD shifts | **Movement along** the SRPC |
| Fiscal or monetary policy | AD shifts | **Movement along** the SRPC |
| Supply shock (oil, food, input prices; productivity surprises) | SRAS shifts | **SRPC shifts** |
| Change in expected inflation | SRAS shifts | **SRPC shifts** (crosses LRPC at the new expected rate) |
| Change in the natural rate of unemployment | LRAS shifts | **LRPC shifts** |
| Growth in capital or technology with no change in the natural rate | LRAS shifts right | **No change** in the LRPC |

### Three traps

1. **"Expansionary policy shifts the SRPC."** No. Policy shifts AD, which is a movement along the SRPC. The SRPC shifts later only if the policy changes expected inflation.
2. **"A supply shock shifts the LRPC."** No. A temporary cost shock moves SRAS and the SRPC. The LRPC moves only if the natural rate changes.
3. **"Higher inflation shifts the LRPC up."** No. The LRPC is vertical, so it has no "up." Any steady inflation rate can occur at the natural rate.
`
    },
    {
      id: 'macrophi5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country\'s price level rose 6% last year and 2% this year. Which statement about this year is correct?',
            options: [
              'Prices kept rising, but more slowly',
              'Prices fell, so there was deflation this year',
              'The inflation rate rose by 4 percentage points',
              'The purchasing power of money rose this year'
            ],
            correctAnswer: 0,
            explanation: 'Inflation fell from 6% to 2%, which is disinflation: prices still rose, just more slowly. Deflation would need a negative inflation rate, the rate fell rather than rose, and rising prices mean money lost purchasing power.'
          },
          {
            question: 'A student claims, "The Phillips curve shows that a country can pick any combination of inflation and unemployment it wants." What is the flaw in this claim?',
            options: [
              'No tradeoff exists in the short run, only in the long run',
              'The tradeoff is only short-run, as unemployment returns to the natural rate',
              'The curve slopes upward, so both rates must rise together',
              'The natural rate is zero, so unemployment cannot be lowered'
            ],
            correctAnswer: 1,
            explanation: 'A lower unemployment rate can be bought with higher inflation only until expectations catch up, after which unemployment returns to the natural rate at the higher inflation rate. The tradeoff is short-run, not long-run, the SRPC slopes downward, and the natural rate is above zero.'
          },
          {
            question: 'On a Phillips curve graph, what does a point below the horizontal axis represent?',
            options: [
              'Disinflation, meaning the price level rises more slowly',
              'A price level that is below its base-year value of 100',
              'Deflation, meaning the overall price level falls during the year',
              'A real interest rate that has fallen below zero'
            ],
            correctAnswer: 2,
            explanation: 'The vertical axis is the inflation rate, so a point below zero means a negative inflation rate: the price level is falling, which is deflation. Disinflation stays above the axis, a price index below 100 can still be rising, and the real interest rate is not on this graph.'
          }
        ]
      }
    },
    {
      id: 'macrophi5-anchored',
      type: 'text' as const,
      content: `
## Anchored Expectations

In Part 3, expectations followed **recent experience**: a year of 5% inflation made people expect 5%. Expectations can also be **anchored**: people expect inflation to return to a level the central bank has committed to and has hit reliably in the past. The Federal Reserve has a stated longer-run goal of **2% inflation**.

| | Expectations follow recent inflation | Expectations anchored at the goal |
|---|---|---|
| Inflation jumps to 4% for one year because of strong demand | Expected inflation rises toward 4%; the SRPC shifts up | Expected inflation stays near 2%; the SRPC stays put |
| What policy must do to restore 2% | Engineer a period of unemployment above the natural rate (Part 3, Case 2) | Less; the economy moves back down the same SRPC as demand cools |
| A supply shock raises inflation for a time | Risk of a lasting upward SRPC shift | Inflation tends to return to the goal once the shock passes |

### Why credibility is valuable

Anchored expectations keep the SRPC from drifting up after every burst of inflation. That is why central banks explain their goals publicly and act to protect their credibility: a credible commitment makes disinflation less costly and makes a supply shock less likely to turn into lasting inflation.
`
    },
    {
      id: 'macrophi5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The inflation rate falls from 5% to 3%. The economy is experiencing ___.',
            options: ['disinflation', 'deflation', 'stagflation', 'a recession']
          },
          {
            label: 'At full employment, cyclical unemployment equals ___.',
            options: ['zero', 'the natural rate', 'frictional unemployment', 'the inflation rate']
          },
          {
            label: 'A rise in expected inflation shifts the ___.',
            options: ['SRPC up', 'LRPC right', 'LRPC left', 'SRPC down']
          },
          {
            label: 'When expectations are anchored, a one-year burst of demand-driven inflation causes ___.',
            options: ['a movement along the SRPC', 'an upward shift of the SRPC', 'a shift of the LRPC', 'a rise in the natural rate']
          }
        ],
        correctAnswers: ['disinflation', 'zero', 'SRPC up', 'a movement along the SRPC'],
        hint1: 'Is the price level still rising when the inflation rate is 3%?',
        hint2: 'The natural rate is frictional plus structural, so what is left over at full employment?',
        hint3: 'Anchored expectations do not move with a temporary burst of inflation.',
        explanation: 'A positive but lower inflation rate is disinflation. Full employment means the actual rate equals the natural rate, so cyclical unemployment is zero. Higher expected inflation shifts the SRPC up, and with anchored expectations a demand-driven burst is just a movement along the existing SRPC.'
      }
    },
    {
      id: 'macrophi5-money',
      type: 'text' as const,
      content: `
## Long-Run Inflation and Money Growth

The Phillips curve explains short-run swings in inflation. What sets inflation **in the long run**? The answer comes from the **quantity theory of money** (CED topic 5.3).

### The equation of exchange

**M × V = P × Y**

- **M** = money supply
- **V** = velocity of money (how many times each dollar is spent per year)
- **P** = price level
- **Y** = real output

In growth rates, approximately: **%ΔM + %ΔV ≈ %ΔP + %ΔY**

If velocity is stable and real output grows at its long-run rate, then:

**Inflation rate ≈ money growth rate − real GDP growth rate**

### Worked example

A hypothetical economy's money supply grows 7% a year, real GDP grows 3% a year, and velocity is constant. Long-run inflation ≈ 7% − 3% = **4%**. If the central bank raises money growth to 10% a year and real GDP growth stays at 3%, long-run inflation rises to about **7%**.

### The link to the vertical LRPC

In the long run, money is **neutral**: faster money growth raises the inflation rate but does not change real output or the natural rate of unemployment. That is the same message as the vertical LRPC. A central bank that keeps money growing faster moves the economy **up the LRPC** to a higher inflation rate, not to a lower unemployment rate.

> 🔑 **AP Connection:** Sustained high inflation, and especially hyperinflation, comes from sustained rapid money growth. On the exam, "in the long run, an increase in the growth rate of the money supply" means higher inflation with unemployment at the natural rate.
`
    },
    {
      id: 'macrophi5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Over a decade, a country\'s money supply grows 9% a year, real GDP grows 3% a year, and velocity is constant. Long-run inflation is closest to',
            options: [
              '9% per year',
              '3% per year',
              '12% per year',
              '6% per year'
            ],
            correctAnswer: 3,
            explanation: 'With constant velocity, inflation is about money growth minus real GDP growth: 9% − 3% = 6%. Answering 9% ignores real growth, 3% is the real growth rate itself, and 12% adds the two instead of subtracting.'
          },
          {
            question: 'Expected inflation is anchored at the central bank\'s 2% goal. A one-year jump in inflation to 4% caused by strong demand will most likely',
            options: [
              'leave the SRPC where it was',
              'shift the SRPC up so it crosses the LRPC at 4%',
              'shift the LRPC left by 2 percentage points',
              'shift the SRPC down as people expect less'
            ],
            correctAnswer: 0,
            explanation: 'With anchored expectations, people still expect 2%, so a demand-driven jump is a movement along the existing SRPC. The SRPC shifts up only if expected inflation rises, demand does not move the LRPC, and nothing here lowers expected inflation.'
          },
          {
            question: 'In the long run, a permanently faster rate of money growth leads to',
            options: [
              'lower unemployment and higher inflation that both persist',
              'higher inflation, with unemployment back at the natural rate',
              'higher real GDP growth with no change in inflation',
              'lower inflation as interest rates rise over time'
            ],
            correctAnswer: 1,
            explanation: 'Money is neutral in the long run, so faster money growth raises inflation while unemployment returns to the natural rate, a move up the vertical LRPC. A lasting fall in unemployment would contradict the vertical LRPC, and faster money growth does not raise real growth or lower inflation.'
          }
        ]
      }
    }
  ]
}
