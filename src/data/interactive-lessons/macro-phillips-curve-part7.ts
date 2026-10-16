export const macroPhillipsCurvePart7Data = {
  topicSlug: 'macro-phillips-curve',
  sections: [
    {
      id: 'macrophi7-intro',
      type: 'text' as const,
      content: `
# 📉 The Phillips Curve

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture |
| AD-AS and Phillips Curve Translation Summary |
| Expectations, Policy and Money Growth Summary |
| Mixed Review |

> 🔑 **Key Concept:** The Phillips curve topic comes down to one story told on two graphs. Demand changes trade inflation for unemployment in the short run; expectations catch up and remove the tradeoff in the long run; supply shocks and expectation changes shift the short-run curve; and only a change in the natural rate moves the long-run curve.
`
    },
    {
      id: 'macrophi7-big-picture',
      type: 'text' as const,
      content: `
## 📖 The Big Picture

### The core story in five steps

1. **Start** in long-run equilibrium: unemployment at the natural rate, actual inflation equal to expected inflation, SRPC crossing the LRPC (Part 2).
2. **A demand change** moves the economy along the SRPC: more AD means lower unemployment and higher inflation; less AD means the reverse (Parts 1 and 2).
3. **Expectations adjust** to the inflation people actually experience. The SRPC shifts until it crosses the LRPC at the new expected rate (Part 3).
4. **The economy returns** to the natural rate of unemployment, at a different inflation rate (Part 3).
5. **In the long run**, the inflation rate is set by money growth, and the LRPC stays vertical because money does not change the natural rate (Part 5).

### The three curves and what moves them

| Curve | Shape | Moves when | Matches in AD-AS |
|---|---|---|---|
| **SRPC** | Downward sloping | Supply shocks or a change in expected inflation | SRAS (opposite horizontal direction) |
| **LRPC** | Vertical at the NRU | The natural rate of unemployment changes | LRAS (opposite horizontal direction) |
| **Point on the SRPC** | — | Aggregate demand changes | Movement along SRAS |

### Numbers to keep straight

| Quantity | Where to read it on the graph |
|---|---|
| Natural rate of unemployment | Where the LRPC meets the horizontal axis |
| Expected inflation | Inflation rate where the SRPC crosses the LRPC |
| Cyclical unemployment | Horizontal distance from the LRPC to the current point |
| Inflation surprise | Actual inflation minus expected inflation |
`
    },
    {
      id: 'macrophi7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of events would both appear as shifts of the SRPC rather than as movements along it?',
            options: [
              'A tax cut and a rise in government purchases',
              'A drought and a rise in government purchases',
              'A drought and higher expected inflation',
              'A tax increase and higher interest rates'
            ],
            correctAnswer: 2,
            explanation: 'A drought is a negative supply shock and higher expected inflation raises costs, so both shift the SRPC. Tax changes, government purchases and interest rates work through aggregate demand, which moves the economy along the SRPC.'
          },
          {
            question: 'An economy starts in long-run equilibrium. Aggregate demand falls, and policy makers take no action. Which sequence describes the full adjustment on the Phillips curve graph?',
            options: [
              'Down along the SRPC, then the LRPC shifts right, ending at a higher natural rate',
              'The SRPC shifts right, then the economy moves up the LRPC to higher inflation',
              'Down along the SRPC, then the SRPC shifts up as expected inflation rises, ending higher',
              'Down along the SRPC, then the SRPC shifts down as expected inflation drops, ending on the LRPC'
            ],
            correctAnswer: 3,
            explanation: 'Lower AD first moves the economy down along the SRPC to higher unemployment and lower inflation, and as expected inflation falls the SRPC shifts down until the economy is back on the LRPC. A demand change does not alter the natural rate, a rightward SRPC shift is a supply shock, and an upward SRPC shift would need expected inflation to rise, not fall, after inflation came in below expectations.'
          }
        ]
      }
    },
    {
      id: 'macrophi7-translation',
      type: 'text' as const,
      content: `
## AD-AS and Phillips Curve Translation Summary

| Scenario | AD-AS short run | Phillips curve short run | Long run (no policy) |
|---|---|---|---|
| AD increases | PL up, Y above Yf | Up and left along SRPC | SRPC shifts up; back to NRU at higher inflation |
| AD decreases | PL down, Y below Yf | Down and right along SRPC | SRPC shifts down; back to NRU at lower inflation |
| Negative supply shock | SRAS left: PL up, Y down | SRPC shifts right (stagflation) | If expectations hold, SRPC returns as the shock fades |
| Positive supply shock | SRAS right: PL down, Y up | SRPC shifts left | Same as above, in reverse |
| Higher expected inflation | SRAS left | SRPC shifts up | New long-run point on the LRPC at higher inflation |
| Lower natural rate | LRAS right | LRPC shifts left | New long-run unemployment rate is lower |

### Two quick tests

- **Direction test:** inflation and unemployment moving in **opposite** directions point to a movement along the SRPC (an AD change). Moving in the **same** direction points to an SRPC shift.
- **Schedule test:** if you have the SRPC's numbers, check whether the new point lies on that curve. If not, the curve shifted, and the vertical distance tells you by how much (Part 4).
`
    },
    {
      id: 'macrophi7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A decrease in aggregate demand moves the economy ___.',
            options: ['down along the SRPC', 'up along the SRPC', 'to a new SRPC', 'to a new LRPC']
          },
          {
            label: 'The SRPC crosses the LRPC at the ___ inflation rate.',
            options: ['expected', 'actual', 'zero', 'maximum']
          },
          {
            label: 'A falling but still positive inflation rate is called ___.',
            options: ['disinflation', 'deflation', 'stagflation', 'hyperinflation']
          },
          {
            label: 'In the long run, faster money growth raises inflation and leaves unemployment at ___.',
            options: ['the natural rate', 'zero', 'a lower rate', 'a higher rate']
          }
        ],
        correctAnswers: ['down along the SRPC', 'expected', 'disinflation', 'the natural rate'],
        hint1: 'A change in AD never shifts the Phillips curves.',
        hint2: 'In long-run equilibrium, people\'s inflation forecasts are correct.',
        hint3: 'Deflation requires the price level itself to fall.',
        explanation: 'Lower AD is a movement down and to the right along the SRPC. Each SRPC crosses the LRPC at expected inflation. A lower but positive inflation rate is disinflation, and money is neutral in the long run, so unemployment returns to the natural rate while inflation rises.'
      }
    },
    {
      id: 'macrophi7-policy',
      type: 'text' as const,
      content: `
## Expectations, Policy and Money Growth Summary

### Expectations

| Situation | What happens to expected inflation | Phillips curve result |
|---|---|---|
| Actual inflation above expected | Rises | SRAS shifts left; SRPC shifts up until it crosses the LRPC at the new rate |
| Actual inflation below expected | Falls | SRAS shifts right; SRPC shifts down |
| Actual equals expected | No change | Long-run equilibrium on the LRPC |

### Policy

| Goal | Fiscal policy | Monetary policy (ample reserves) | Monetary policy (limited reserves) | Phillips curve result |
|---|---|---|---|---|
| Reduce cyclical unemployment | Raise purchases or transfers, cut taxes | **Lower IORB**, so the federal funds rate falls within a lower target range | Buy bonds, lower the discount rate or reserve requirement | Up and left along the SRPC |
| Reduce inflation | Cut purchases or transfers, raise taxes | **Raise IORB**, so the federal funds rate rises within a higher target range | Sell bonds, raise the discount rate or reserve requirement | Down and right along the SRPC |

The U.S. reserve requirement has been **0%** since March 2020, so it is a model tool rather than one the Fed uses today. Details of each tool, the money market graph and crowding out belong to the Monetary Policy and Fiscal Policy topics.

### Money growth

**Inflation rate ≈ money growth rate − real GDP growth rate** (with stable velocity). Sustained inflation needs sustained money growth, and in the long run that growth moves the economy up or down the LRPC rather than off it.

> 🔑 **AP Connection:** Before you finish any Phillips curve answer, check three things: are the axes labeled with **rates**, is every long-run point **on the LRPC**, and did you **shift** a curve only for a supply shock, an expectations change or a change in the natural rate?
`
    },
    {
      id: 'macrophi7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Money supply growth permanently rises from 4% to 8% a year, while real GDP growth and velocity stay the same. In the long run, the economy moves',
            options: [
              'up along the LRPC to a higher inflation rate',
              'up along the SRPC to a lower unemployment rate',
              'to a new LRPC at a lower natural rate',
              'down along the LRPC to a lower inflation rate'
            ],
            correctAnswer: 0,
            explanation: 'With velocity and real growth unchanged, inflation rises by about the 4-point rise in money growth while unemployment stays at the natural rate, a move up the vertical LRPC. Lower unemployment is only a short-run effect, money growth does not change the natural rate, and inflation rises rather than falls.'
          },
          {
            question: 'Inflation falls from 7% to 3% while unemployment rises from 5% to 7%, and there has been no supply shock. Which cause is most likely?',
            options: [
              'Expansionary monetary policy',
              'Contractionary monetary policy',
              'A rise in expected inflation',
              'A fall in the natural rate of unemployment'
            ],
            correctAnswer: 1,
            explanation: 'Falling inflation with rising unemployment is a movement down the SRPC, the result of lower AD, which contractionary monetary policy produces. Expansionary policy moves the economy the other way, higher expected inflation raises inflation, and a lower natural rate would not raise unemployment.'
          }
        ]
      }
    }
  ]
}
