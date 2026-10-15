export const macroPhillipsCurvePart2Data = {
  topicSlug: 'macro-phillips-curve',
  sections: [
    {
      id: 'macrophi2-intro',
      type: 'text' as const,
      content: `
# 📉 The Phillips Curve

**Part 2 of 7 — Linking the Phillips Curve to AD-AS**

---

| Section |
|---------|
| 📖 Two Graphs, One Economy |
| Demand Shocks: Movements Along the SRPC |
| Supply Shocks: Shifts of the SRPC |
| Full Employment, the Natural Rate and the LRPC |

> 🔑 **Key Concept:** The Phillips curve graph and the AD-AS graph describe the **same economy** from two angles. AD-AS shows the **price level and real GDP**; the Phillips curve shows the **inflation rate and the unemployment rate**. Every change on one graph has a matching change on the other, and the AP exam expects you to translate in both directions.
`
    },
    {
      id: 'macrophi2-two-graphs',
      type: 'text' as const,
      content: `
## 📖 Two Graphs, One Economy

### The axes

| Graph | Vertical axis | Horizontal axis | Long-run curve |
|---|---|---|---|
| **AD-AS** | Price level (PL) | Real GDP (Y) | LRAS, vertical at full-employment output (Yf) |
| **Phillips curve** | Inflation rate (%) | Unemployment rate (%) | LRPC, vertical at the natural rate of unemployment (NRU) |

Two links make the translation work:

1. **Output and unemployment move in opposite directions.** When real GDP rises, firms hire more workers, so the unemployment rate falls. When real GDP falls, the unemployment rate rises.
2. **A higher price level goes with a higher inflation rate.** In the Phillips curve model, an AD-AS change that raises the price level more than people expected shows up as a higher inflation rate.

### Long-run equilibrium on both graphs

Take a hypothetical economy, Lumeria, where full-employment output is \\$800 billion, the natural rate of unemployment is 5%, and people expect 2% inflation.

| AD-AS graph | Phillips curve graph |
|---|---|
| AD, SRAS and LRAS all cross at Y = \\$800 billion | The SRPC crosses the LRPC at an unemployment rate of 5% |
| No output gap | No cyclical unemployment |
| The price level is rising at the rate people expected | Actual inflation (2%) equals expected inflation (2%) |

The last row is the key idea for the rest of this topic: **the SRPC crosses the LRPC at the expected inflation rate.** In long-run equilibrium, the economy sits exactly at that crossing point.

> 🔑 **AP Connection:** A full-credit Phillips curve graph labels the vertical axis "Inflation rate" (not "Price level") and the horizontal axis "Unemployment rate" (not "Real GDP"). Mixing up the axes of the two graphs is one of the most common ways students lose a graphing point.
`
    },
    {
      id: 'macrophi2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy is in long-run equilibrium in the AD-AS model. Where is it on the Phillips curve graph?',
            options: [
              'Where the short-run curve crosses the horizontal axis',
              'Where the short-run curve crosses the long-run curve',
              'On the short-run curve at an unemployment rate of zero',
              'Where the long-run curve meets zero inflation'
            ],
            correctAnswer: 1,
            explanation: 'Long-run equilibrium means unemployment equals the natural rate and actual inflation equals expected inflation, which is the crossing of the SRPC and the LRPC. The horizontal-axis crossing marks zero inflation, the natural rate is never zero, and long-run equilibrium can occur at any steady inflation rate.'
          },
          {
            question: 'An economy is operating with a recessionary gap. On the Phillips curve graph, it is at a point where',
            options: [
              'unemployment is below the natural rate and inflation is above the expected rate',
              'unemployment equals the natural rate and inflation is below the expected rate',
              'unemployment is above the natural rate and inflation is below the expected rate',
              'unemployment is above the natural rate and inflation equals the expected rate'
            ],
            correctAnswer: 2,
            explanation: 'Output below potential means cyclical unemployment, so unemployment is above the natural rate, and weak demand holds inflation below what people expected. Unemployment below the natural rate describes an inflationary gap, and a point at the natural rate has no gap at all.'
          },
          {
            question: 'In the AD-AS model, the short-run aggregate supply curve shifts to the right. What is the matching change on the Phillips curve graph?',
            options: [
              'A rightward shift of the short-run curve',
              'A movement down along the short-run curve',
              'A movement upward along the short-run curve',
              'A leftward shift of the short-run curve'
            ],
            correctAnswer: 3,
            explanation: 'More SRAS means lower inflation and lower unemployment at the same time, which is a leftward (downward) shift of the SRPC. Movements along the SRPC come from AD shifts, and a rightward SRPC shift is the stagflation case that matches SRAS shifting left.'
          }
        ]
      }
    },
    {
      id: 'macrophi2-demand',
      type: 'text' as const,
      content: `
## Demand Shocks: Movements Along the SRPC

A change in aggregate demand moves the economy **along** a given SRPC. The SRPC stays put because nothing has changed people's inflation expectations or firms' costs yet.

### Case 1: AD increases in Lumeria

Business confidence rises and investment spending jumps, so AD shifts right.

| AD-AS graph | Phillips curve graph |
|---|---|
| Real GDP rises above \\$800 billion (inflationary gap) | Unemployment falls below 5%, say to 4% |
| The price level rises more than expected | Inflation rises above 2%, say to 3.5% |
| Movement up along SRAS | Movement **up and to the left** along SRPC1 |

### Case 2: AD decreases in Lumeria

Households cut consumption after a stock-market fall, so AD shifts left.

| AD-AS graph | Phillips curve graph |
|---|---|
| Real GDP falls below \\$800 billion (recessionary gap) | Unemployment rises above 5%, say to 6.5% |
| The price level rises less than expected | Inflation falls below 2%, say to 0.5% |
| Movement down along SRAS | Movement **down and to the right** along SRPC1 |

### Why it is a movement, not a shift

AD shifters (consumption, investment, government purchases, net exports, and the fiscal or monetary policy that changes them) change **how much** is bought. They push the economy to a different point on the same short-run tradeoff. The whole SRPC moves only when something changes the inflation rate that goes with each unemployment rate: a change in costs or in expected inflation.

> 🔑 **AP Connection:** Expansionary fiscal or monetary policy is an AD shift, so in the short run it is a movement **up the SRPC**. If an FRQ asks you to show expansionary policy on a Phillips curve graph, do **not** shift the curve.
`
    },
    {
      id: 'macrophi2-supply',
      type: 'text' as const,
      content: `
## Supply Shocks: Shifts of the SRPC

A change in short-run aggregate supply **shifts** the SRPC. Notice the horizontal directions are opposite: SRAS left goes with SRPC right.

| AD-AS change | What happens to PL and Y | Phillips curve change | What happens to inflation and unemployment |
|---|---|---|---|
| **SRAS shifts left** (negative supply shock: higher oil prices, higher nominal wages, higher expected inflation) | PL rises, Y falls | **SRPC shifts right (up)** | Both inflation and unemployment rise: stagflation |
| **SRAS shifts right** (positive supply shock: cheaper energy, lower input costs, lower expected inflation) | PL falls relative to trend, Y rises | **SRPC shifts left (down)** | Both inflation and unemployment fall |

### A Lumeria example

A drought sharply raises food and energy costs. SRAS shifts left. On the Phillips curve graph, the economy moves from the point (5% unemployment, 2% inflation) on SRPC1 to a point such as (6.5% unemployment, 5% inflation) on a new curve, SRPC2, that lies to the right of SRPC1.

### Expectations work like a supply shock

If workers and firms come to expect 4% inflation instead of 2%, workers bargain for larger raises and firms build bigger price increases into their plans. Costs rise at every output level, so SRAS shifts left and the SRPC shifts up. The new SRPC crosses the LRPC at 4%, the new expected inflation rate.

> 🔑 **AP Connection:** Use one quick test. If inflation and unemployment move in **opposite** directions, the economy moved along the SRPC (an AD change). If they move in the **same** direction, the SRPC shifted (an SRAS change or a change in expectations).
`
    },
    {
      id: 'macrophi2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Translate each AD-AS change into Phillips curve language.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Aggregate demand shifts left. On the Phillips curve graph, the economy ___.',
            options: ['moves down along the SRPC', 'moves up along the SRPC', 'shifts the SRPC right', 'shifts the SRPC left']
          },
          {
            label: 'A sharp rise in oil prices shifts SRAS left. The SRPC ___.',
            options: ['shifts right', 'shifts left', 'does not move', 'becomes vertical']
          },
          {
            label: 'Real GDP equals full-employment output. The unemployment rate equals ___.',
            options: ['the natural rate', 'zero', 'the inflation rate', 'the cyclical rate']
          },
          {
            label: 'Expected inflation falls from 4% to 2%. The SRPC now crosses the LRPC at an inflation rate of ___.',
            options: ['2%', '4%', '0%', '6%']
          }
        ],
        correctAnswers: ['moves down along the SRPC', 'shifts right', 'the natural rate', '2%'],
        hint1: 'AD changes move the economy along a curve; SRAS changes shift the curve.',
        hint2: 'A negative supply shock raises both inflation and unemployment.',
        hint3: 'The SRPC always crosses the LRPC at the inflation rate people expect.',
        explanation: 'Lower AD means lower inflation and higher unemployment, a movement down the SRPC. A leftward SRAS shift raises both inflation and unemployment, so the SRPC shifts right. Full-employment output corresponds to the natural rate of unemployment, and a new SRPC crosses the LRPC at the new expected inflation rate of 2%.'
      }
    },
    {
      id: 'macrophi2-lrpc',
      type: 'text' as const,
      content: `
## Full Employment, the Natural Rate and the LRPC

The vertical long-run curves on the two graphs are the same idea:

**LRAS at Yf ⟷ LRPC at the NRU**

When real GDP equals full-employment output, the unemployment rate equals the natural rate. Neither curve depends on the price level or the inflation rate, which is why both are vertical.

### When does the LRPC shift?

The LRPC shifts **only when the natural rate of unemployment changes.** Because the NRU is made of frictional and structural unemployment, the shifters are labor-market changes (the Unemployment & Inflation topic covers what changes each type).

| Event | AD-AS graph | Phillips curve graph |
|---|---|---|
| Better job-matching technology shortens job searches | LRAS shifts right (more people working at full employment) | NRU falls, so the **LRPC shifts left** |
| Rapid industry change leaves many workers with outdated skills | LRAS shifts left | NRU rises, so the **LRPC shifts right** |
| More physical capital or better technology, with no change in the NRU | LRAS shifts right | LRPC **does not move** |

The last row is a subtle point. Economic growth from capital or technology raises full-employment output, but the share of the labor force that is frictionally or structurally unemployed may be unchanged. The LRPC tracks the natural **rate**, not the level of output.

### The full translation table

| Change | AD-AS | Phillips curve |
|---|---|---|
| AD right | PL up, Y up | Up and left along SRPC |
| AD left | PL down, Y down | Down and right along SRPC |
| SRAS left (or higher expected inflation) | PL up, Y down | SRPC shifts right |
| SRAS right (or lower expected inflation) | PL down, Y up | SRPC shifts left |
| NRU falls | LRAS right | LRPC shifts left |
| NRU rises | LRAS left | LRPC shifts right |

> 🔑 **AP Connection:** Exam questions sometimes describe only one graph and ask about the other. Translate one step at a time: what happens to real GDP (so unemployment moves the opposite way), and what happens to the price level (so inflation moves the same way).
`
    },
    {
      id: 'macrophi2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which event would shift both the long-run aggregate supply curve and the long-run Phillips curve?',
            options: [
              'A drop in the natural rate of unemployment',
              'A temporary spike in the world price of oil',
              'A permanent increase in government purchases',
              'A rise in the inflation rate that people expect'
            ],
            correctAnswer: 0,
            explanation: 'The LRPC sits at the natural rate of unemployment, so a lower natural rate shifts it left and raises full-employment output, shifting LRAS right. An oil price spike and a change in expected inflation shift only the short-run curves, and higher government purchases shift AD.'
          },
          {
            question: 'A sharp fall in business investment shifts aggregate demand to the left. What happens on the Phillips curve graph in the short run?',
            options: [
              'A movement up along the SRPC, to lower unemployment and higher inflation',
              'A movement down along the SRPC, to higher unemployment and lower inflation',
              'A shift of the SRPC to the right, to higher unemployment and higher inflation',
              'A shift of the LRPC to the right, to higher unemployment at every inflation rate'
            ],
            correctAnswer: 1,
            explanation: 'An AD decrease lowers output and the price level, which on the Phillips curve graph is a movement down and to the right along the existing SRPC. A rightward SRPC shift comes from a supply shock, and the LRPC moves only if the natural rate changes.'
          },
          {
            question: 'Over one year, an economy\'s unemployment rate rises from 5% to 7% while its inflation rate rises from 2% to 6%. Which change in the AD-AS model best explains this?',
            options: [
              'AD shifted right',
              'AD shifted left',
              'SRAS shifted left',
              'LRAS shifted right'
            ],
            correctAnswer: 2,
            explanation: 'Inflation and unemployment rose together, so the SRPC shifted right, which matches a leftward SRAS shift. An AD shift moves the two rates in opposite directions, and a rightward LRAS shift would lower unemployment and inflation pressure rather than raise them.'
          }
        ]
      }
    }
  ]
}
