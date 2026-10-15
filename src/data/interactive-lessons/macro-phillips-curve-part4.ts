export const macroPhillipsCurvePart4Data = {
  topicSlug: 'macro-phillips-curve',
  sections: [
    {
      id: 'macrophi4-intro',
      type: 'text' as const,
      content: `
# 📉 The Phillips Curve

**Part 4 of 7 — Reading and Drawing Phillips Curve Graphs**

---

| Section |
|---------|
| 📖 Setting Up the Graph |
| Plotting an SRPC from Data |
| Movement or Shift? Reading Data Over Time |
| Drawing Changes for an FRQ |

> 🔑 **Key Concept:** Phillips curve questions reward precise graph work. You need correctly labeled axes and curves, points placed in the right position **relative to each other**, and the ability to read a table of unemployment and inflation data and decide whether the economy moved along an SRPC or the SRPC itself shifted.
`
    },
    {
      id: 'macrophi4-setup',
      type: 'text' as const,
      content: `
## 📖 Setting Up the Graph

### The labeling checklist

| Element | Correct label | Common error |
|---|---|---|
| Vertical axis | **Inflation rate** (%) | "Price level" (that is the AD-AS axis) |
| Horizontal axis | **Unemployment rate** (%) | "Real GDP" or "Quantity" |
| Long-run curve | **LRPC**, vertical, at the **natural rate** on the horizontal axis | Drawing it sloping, or putting it at 0% |
| Short-run curve | **SRPC**, sloping **downward** | Drawing it upward, like an SRAS curve |
| Starting point | Labeled (often "A") where the SRPC crosses the LRPC, if the economy is in long-run equilibrium | Placing it off the LRPC |

### Reading coordinates

Write every point as **(unemployment rate, inflation rate)**, in the same order as the axes. A dashed line from a point down to the horizontal axis shows its unemployment rate, and a dashed line across to the vertical axis shows its inflation rate. The inflation level where the SRPC meets the LRPC is the **expected inflation rate**.

> 🔑 **AP Connection:** On FRQ graphs, you rarely need exact numbers. Graders check **relative position**: is the new point above or below, left or right of the old one, and is it on the correct curve?
`
    },
    {
      id: 'macrophi4-plotting',
      type: 'text' as const,
      content: `
## Plotting an SRPC from Data

Halvar, a hypothetical economy, has a natural rate of unemployment of **5%**. Its current short-run Phillips curve, SRPC1, is given by this schedule:

| Unemployment rate | 3% | 4% | 5% | 6% | 7% |
|---|---|---|---|---|---|
| Inflation rate on SRPC1 | 6.0% | 4.5% | 3.0% | 1.5% | 0.0% |

### Describing the graph

- The **LRPC** is a vertical line at 5% on the horizontal axis.
- **SRPC1** is a downward-sloping line through (3%, 6.0%), (4%, 4.5%), (5%, 3.0%), (6%, 1.5%) and (7%, 0.0%).
- SRPC1 crosses the LRPC at **(5%, 3.0%)**. Label it point A. Expected inflation is therefore **3%**.

### Reading the schedule

- **Slope:** along SRPC1, each 1-point rise in unemployment goes with a 1.5-point fall in inflation. That number belongs to this hypothetical curve only; real-world slopes vary and change over time.
- **Gaps:** at 4% unemployment, the economy is 1 point below the natural rate (an inflationary gap), and inflation of 4.5% is 1.5 points above expected inflation. At 7% unemployment, cyclical unemployment is 2 points and inflation is 3 points below expected.
- **Zero and below:** at 7% unemployment, inflation is 0%. If the curve continued further right, it would dip below zero, which is **deflation**. The SRPC can cross the horizontal axis; the LRPC never moves because of it.
`
    },
    {
      id: 'macrophi4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student is drawing a Phillips curve graph for an FRQ. Which pair of axis labels earns the point?',
            options: [
              'Price level on the vertical axis, unemployment rate on the horizontal',
              'Inflation rate on the vertical axis, real GDP on the horizontal',
              'Inflation rate on the horizontal axis, unemployment on the vertical',
              'Inflation rate on the vertical axis, unemployment rate on the horizontal'
            ],
            correctAnswer: 3,
            explanation: 'The Phillips curve plots the inflation rate against the unemployment rate, with inflation on the vertical axis. Price level and real GDP are the AD-AS axes, and switching the two rates turns the graph sideways.'
          },
          {
            question: 'Using Halvar\'s SRPC1 schedule, if unemployment rises from 4% to 6%, what happens to inflation?',
            options: [
              'Falls from 4.5% to 1.5%',
              'Rises from 1.5% to 4.5%',
              'Falls from 6.0% to 3.0%',
              'Falls from 4.5% to 3.0%'
            ],
            correctAnswer: 0,
            explanation: 'The schedule pairs 4% unemployment with 4.5% inflation and 6% unemployment with 1.5% inflation, so inflation falls by 3 points. Rising inflation would contradict the downward slope, 6.0% to 3.0% goes with 3% to 5% unemployment, and 3.0% is the inflation rate at 5%.'
          }
        ]
      }
    },
    {
      id: 'macrophi4-data',
      type: 'text' as const,
      content: `
## Movement or Shift? Reading Data Over Time

Halvar reports these annual data. Coordinates are (unemployment, inflation).

| Year | Unemployment | Inflation | On SRPC1? |
|---|---|---|---|
| 1 | 5% | 3.0% | Yes: point A |
| 2 | 4% | 4.5% | Yes: point B |
| 3 | 6% | 4.5% | **No.** SRPC1 gives 1.5% at 6% unemployment |
| 4 | 5% | 6.0% | **No.** SRPC1 gives 3.0% at 5% unemployment |

### Year 1 to Year 2: a movement

Unemployment fell 1 point and inflation rose 1.5 points, exactly as the schedule predicts. Halvar moved **up and to the left along SRPC1**, which points to an **increase in AD**.

### Year 2 to Year 3: a shift

Unemployment rose 2 points while inflation stayed at 4.5%. The quick test from Part 2 (opposite directions = movement) does not apply cleanly, so check the schedule. At 6% unemployment, SRPC1 predicts 1.5% inflation, but actual inflation is 4.5%: **3 points higher.** The whole curve has shifted up by 3 points, to SRPC2. The cause is a rise in expected inflation or a negative supply shock.

### Year 3 to Year 4: a movement on the new curve

SRPC2 is SRPC1 plus 3 points, so at 5% unemployment it gives 3.0% + 3 = 6.0%. Year 4 lies on SRPC2 **and** on the LRPC: a new long-run equilibrium with expected inflation of 6%.

| Change | Δ Unemployment | Δ Inflation | Interpretation |
|---|---|---|---|
| Year 1 → 2 | −1 point | +1.5 points | Along SRPC1 (AD rose) |
| Year 2 → 3 | +2 points | 0 points | SRPC shifted up 3 points |
| Year 1 → 4 | 0 points | +3 points | Same NRU, higher expected inflation |

> 🔑 **AP Connection:** Compare the change from Year 1 to Year 4. Unemployment ended where it started, and only inflation is higher. That is the long-run result of the expectations process in Part 3, shown with data.
`
    },
    {
      id: 'macrophi4-input',
      type: 'input-boxes' as const,
      content: `
**Read the Graph** ✍️

In Ostrel, a hypothetical economy, the LRPC is vertical at 4% unemployment. The SRPC passes through the points (2%, 7%), (4%, 4%) and (6%, 1%), written as (unemployment, inflation).

**1)** What inflation rate do people in Ostrel expect, in percent?

**2)** If Ostrel is at 6% unemployment on this SRPC, what is its cyclical unemployment rate, in percent?

**3)** The SRPC then shifts up by 2 percentage points at every unemployment rate. What inflation rate now goes with 6% unemployment, in percent?

Enter numbers only (no % sign).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '3'],
        hint1: 'Expected inflation is the inflation rate where the SRPC crosses the LRPC.',
        hint2: 'Cyclical unemployment is the actual rate minus the natural rate shown by the LRPC.',
        hint3: 'Add 2 points to the inflation rate the original SRPC gives at 6% unemployment.',
        explanation: '1) The SRPC crosses the LRPC at (4%, 4%), so expected inflation is 4%. 2) 6% − 4% = 2 points of cyclical unemployment. 3) The original curve gives 1% at 6% unemployment, so after a 2-point upward shift it gives 1% + 2 = 3%.'
      }
    },
    {
      id: 'macrophi4-drawing',
      type: 'text' as const,
      content: `
## Drawing Changes for an FRQ

Start every drawing from point A, where SRPC1 crosses the LRPC. Then follow the script for the change described.

| Prompt | What to draw | Where the new point goes |
|---|---|---|
| "Show the short-run effect of an increase in AD" | Nothing shifts | Point B on SRPC1, **up and to the left** of A |
| "Show the short-run effect of a decrease in AD" | Nothing shifts | Point B on SRPC1, **down and to the right** of A |
| "Show the short-run effect of a negative supply shock" | Draw SRPC2 to the **right** of SRPC1 | Point B on SRPC2, **up and to the right** of A |
| "Show the long-run equilibrium after AD fell and expectations adjusted" | Draw SRPC2 **below** SRPC1 | Point C on the LRPC, **directly below** A |
| "Show a decrease in the natural rate of unemployment" | Draw LRPC2 to the **left** of LRPC1 | Long-run equilibrium moves left along the horizontal axis |

### Habits that protect points

- **Label every curve** with a number (SRPC1, SRPC2) and every new point with a letter.
- **Keep the LRPC fixed** unless the prompt changes the natural rate. AD changes, supply shocks and expectation changes never move it.
- **Use arrows** to show the direction of a shift.
- **Explain with both variables.** "Inflation falls and unemployment rises" earns more than "the economy moves down."

> 🔑 **AP Connection:** A long-run point after an AD change always lands **on the LRPC**, directly above or below the starting point. If your long-run point is off the LRPC, you have drawn a short-run result.
`
    },
    {
      id: 'macrophi4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy\'s data move from 6% unemployment and 4% inflation to 5% unemployment and 2% inflation. Which event best explains the change?',
            options: [
              'An increase in aggregate demand',
              'A positive supply shock',
              'A decrease in aggregate demand',
              'A rise in expected inflation'
            ],
            correctAnswer: 1,
            explanation: 'Unemployment and inflation both fell, so the SRPC shifted left, which matches a positive supply shock. Changes in aggregate demand move the two rates in opposite directions, and higher expected inflation would shift the SRPC up, raising inflation.'
          },
          {
            question: 'On a graph, the SRPC crosses the LRPC at 3% inflation, and the LRPC is at 6% unemployment. The economy is at 8% unemployment on this SRPC. Which statement is true?',
            options: [
              'Inflation is above 3%, and cyclical unemployment is 2%',
              'Inflation is below 3%, and cyclical unemployment is 8%',
              'Inflation is below 3%, and cyclical unemployment is 2%',
              'Inflation equals 3%, and cyclical unemployment is 0%'
            ],
            correctAnswer: 2,
            explanation: 'Moving right along a downward-sloping SRPC from the long-run point lowers inflation below the 3% expected rate, and cyclical unemployment is 8% − 6% = 2%. Inflation above 3% would require unemployment below 6%, 8% is the total rate rather than the cyclical rate, and zero cyclical unemployment describes the long-run point.'
          },
          {
            question: 'An FRQ asks you to show the long-run equilibrium after aggregate demand falls and expectations fully adjust. Which drawing earns the point?',
            options: [
              'A lower SRPC, with the new point to the right of the LRPC',
              'A higher SRPC, with the new point on the LRPC above the old one',
              'A new LRPC, with the new point to the right of the old one',
              'A lower SRPC, with the new point on the LRPC below the old one'
            ],
            correctAnswer: 3,
            explanation: 'Lower expected inflation shifts the SRPC down, and the economy returns to the natural rate, so the new point sits on the LRPC directly below the original one. A point right of the LRPC is the short-run result, a higher SRPC goes with rising expectations, and an AD change does not move the LRPC.'
          }
        ]
      }
    }
  ]
}
