export const macroFiscalPolicyPart2Data = {
  topicSlug: 'macro-fiscal-policy',
  sections: [
    {
      id: 'macrofis2-intro',
      type: 'text' as const,
      content: `
# 🏛️ Fiscal Policy

**Part 2 of 7 — Discretionary Fiscal Policy in the AD-AS Model**

---

| Section |
|---------|
| 📖 Three Tools, Two Routes into AD |
| Closing a Recessionary Gap |
| Closing an Inflationary Gap |
| Fiscal Stimulus at Full Employment |

> 🔑 **Key Concept:** Discretionary fiscal policy moves **aggregate demand**. Government purchases are part of AD, so they shift it **directly**; taxes and transfer payments shift it **indirectly**, by changing households' disposable income and therefore consumption. Shifting AD toward full-employment output changes the **price level**, **real GDP**, **unemployment** and the **budget balance** together.
`
    },
    {
      id: 'macrofis2-tools',
      type: 'text' as const,
      content: `
## 📖 Three Tools, Two Routes into AD

Recall that AD = C + I + G + Xn. Each fiscal tool enters this sum at a different place.

| Tool | Expansionary change | Route into AD | Component that changes first |
|---|---|---|---|
| **Government purchases (G)** | Spend more on roads, schools, defense | **Direct**: G is itself part of AD | G |
| **Personal taxes** | Cut income tax rates or give a tax rebate | **Indirect**: disposable income rises, households spend part of it | C |
| **Business taxes** | Cut taxes on profits or give a tax credit for new equipment | **Indirect**: after-tax returns on new capital rise | I |
| **Transfer payments** | Raise unemployment benefits, food assistance or Social Security payments | **Indirect**: disposable income rises, households spend part of it | C |

Contractionary policy reverses every row: purchases fall, taxes rise, transfers fall.

### Two details the AP exam checks

- **Transfers are not government purchases.** A transfer payment buys no good or service, so it is not counted in G in GDP. It works through consumption, just like a tax cut.
- **The indirect routes start smaller.** Households save part of a tax cut or transfer, so the first round of spending is MPC × the amount. That is why an equal change in G shifts AD by more (the multiplier details are in the Multiplier Effect topic).

> 🔑 **AP Connection:** When a question asks how a tax cut increases AD, name the link: **taxes fall → disposable income rises → consumption rises → AD shifts right.** "Taxes fall, so AD rises" skips the step that earns the point.
`
    },
    {
      id: 'macrofis2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Congress raises unemployment benefits by \\$20 billion. Through which route does this policy first affect aggregate demand?',
            options: [
              'Government purchases rise, a direct part of AD',
              'Disposable income rises, so consumption rises',
              'Interest rates fall, so business investment rises',
              'Imports fall, so net exports rise right away'
            ],
            correctAnswer: 1,
            explanation: 'Unemployment benefits are transfer payments: they raise recipients\' disposable income, and they spend part of it. Transfers buy no good or service, so they are not counted as government purchases.'
          },
          {
            question: 'An economy is in a recessionary gap. Which action is an expansionary fiscal policy?',
            options: [
              'A cut in the rate the Fed pays on reserves',
              'A cut in spending on public highways',
              'A cut in personal income tax rates',
              'A rise in the corporate income tax rate'
            ],
            correctAnswer: 2,
            explanation: 'Lower income tax rates raise disposable income and consumption, shifting AD right. Changing the rate paid on reserves is monetary policy, and cutting highway spending or raising business taxes would shift AD left.'
          },
          {
            question: 'Which fiscal tool changes aggregate demand directly, without first changing anyone\'s disposable income?',
            options: [
              'Lowering the payroll tax rate',
              'Raising food assistance benefits',
              'Mailing households a tax rebate',
              'Buying new equipment for the army'
            ],
            correctAnswer: 3,
            explanation: 'Military equipment is a government purchase, and G is a component of AD. Payroll tax cuts, larger food assistance benefits and tax rebates all work by raising disposable income first.'
          }
        ]
      }
    },
    {
      id: 'macrofis2-recession',
      type: 'text' as const,
      content: `
## Closing a Recessionary Gap

Picture an AD-AS graph with the price level on the vertical axis and real GDP on the horizontal axis. Full-employment output (Yf), where LRAS is vertical, is **\\$1,000 billion**.

### Worked Example: Recessionary gap

| | Before policy | After expansionary policy |
|---|---|---|
| Real GDP | \\$920 billion | \\$1,000 billion |
| Price level | 108 | 112 |
| Unemployment rate | 8% | 5% (the natural rate) |
| Budget balance | −\\$40 billion | More negative (larger deficit) |

**Step 1: Diagnose.** AD intersects SRAS at \\$920 billion, to the left of Yf. Output is \\$80 billion below full employment, and unemployment is above the natural rate.

**Step 2: Choose the policy.** Expansionary fiscal policy: increase government purchases, cut taxes, increase transfers, or some combination.

**Step 3: Shift the curve.** AD shifts **right** until it meets SRAS at Yf. Along the upward-sloping SRAS curve, the new equilibrium has **higher real GDP** (\\$1,000 billion) and a **higher price level** (112).

**Step 4: Trace the side effects.**
- **Unemployment falls**, because firms need more workers to produce more output.
- **The budget moves toward deficit**: higher G or transfers raise spending, and lower tax rates cut revenue. Here the deficit grows beyond \\$40 billion.

Notice that the price level rises even though the economy started in a recession. Expansionary policy closes the gap at the cost of some inflation, because SRAS slopes upward.
`
    },
    {
      id: 'macrofis2-inflation',
      type: 'text' as const,
      content: `
## Closing an Inflationary Gap

Same economy, Yf = **\\$1,000 billion**, but now spending is running hot.

### Worked Example: Inflationary gap

| | Before policy | After contractionary policy |
|---|---|---|
| Real GDP | \\$1,060 billion | \\$1,000 billion |
| Price level | 126 | 120 |
| Unemployment rate | 3.5% | 5% (the natural rate) |
| Budget balance | +\\$10 billion | More positive (larger surplus) |

**Step 1: Diagnose.** Equilibrium output is \\$60 billion **above** Yf; unemployment is below the natural rate and the price level is being pushed up.

**Step 2: Choose the policy.** Contractionary fiscal policy: cut government purchases, raise taxes, reduce transfers.

**Step 3: Shift the curve.** AD shifts **left** to Yf. The price level falls from 126 to 120 and real GDP falls to \\$1,000 billion.

**Step 4: Trace the side effects.** Unemployment **rises** to the natural rate, and the budget moves toward **surplus** (or a smaller deficit).

### Summary of short-run effects

| Policy | AD | Price level | Real GDP | Unemployment | Budget balance |
|---|---|---|---|---|---|
| Expansionary | Right | ↑ | ↑ | ↓ | Toward deficit |
| Contractionary | Left | ↓ | ↓ | ↑ | Toward surplus |

> 🔑 **AP Connection:** On the graph, label the new equilibrium and show the **direction** of each change. If a question says "the price level and real GDP," give both: one-variable answers lose points.
`
    },
    {
      id: 'macrofis2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

An economy produces \\$1,060 billion of real GDP, and its full-employment output is \\$1,000 billion. Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'This economy has a(n) ___ gap.',
            options: ['recessionary', 'inflationary', 'output-neutral', 'unemployment']
          },
          {
            label: 'The appropriate fiscal policy is to ___ taxes.',
            options: ['cut', 'hold constant', 'raise', 'rebate']
          },
          {
            label: 'If the policy works, the price level will ___.',
            options: ['rise', 'stay the same', 'double', 'fall']
          },
          {
            label: 'The policy moves the government budget toward a ___.',
            options: ['larger deficit', 'surplus', 'balanced debt', 'new tax base']
          }
        ],
        correctAnswers: ['inflationary', 'raise', 'fall', 'surplus'],
        hint1: 'Compare actual output with full-employment output.',
        hint2: 'Contractionary policy reduces disposable income.',
        hint3: 'A leftward AD shift moves down along SRAS.',
        explanation: 'Output above Yf is an inflationary gap, so contractionary policy such as a tax increase is called for. AD shifts left, lowering the price level, and higher tax revenue moves the budget toward surplus.'
      }
    },
    {
      id: 'macrofis2-longrun',
      type: 'text' as const,
      content: `
## Fiscal Stimulus at Full Employment

What if the government stimulates when output is **already** at Yf?

### Worked Example: Yf = \\$1,000 billion, starting price level 110

| Stage | Real GDP | Price level | What happened |
|---|---|---|---|
| Start | \\$1,000 billion | 110 | Long-run equilibrium |
| Short run | \\$1,040 billion | 116 | Higher G shifts AD right along SRAS |
| Long run | \\$1,000 billion | 122 | Nominal wages and input prices rise; SRAS shifts left |

In the short run, output rises above potential and unemployment falls below the natural rate. But workers and firms soon demand higher wages and input prices, SRAS shifts left, and output returns to Yf. **The only lasting result is a higher price level** (the self-adjustment process is covered in the AD-AS topic).

### Why this matters

- Fiscal policy is a **stabilization** tool: it is most useful for closing gaps, not for pushing output permanently above potential.
- Demand-side fiscal policy does not shift LRAS. Policies that raise **potential output**, such as public investment in infrastructure or education, are covered in the Fiscal Policy Tools topic.

> 🔑 **AP Connection:** A common question: "In the long run, what is the effect of the expansionary policy on real output?" At full employment, the answer is **no change** in real output and a **higher** price level.
`
    },
    {
      id: 'macrofis2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy is in a recessionary gap. The government increases spending on bridges. In the short run, what happens to the price level and real GDP?',
            options: [
              'Both rise',
              'Price level rises; real GDP falls',
              'Both fall',
              'Price level falls; real GDP rises'
            ],
            correctAnswer: 0,
            explanation: 'Higher government purchases shift AD right along the upward-sloping SRAS curve, so both output and the price level rise. A falling price level with rising output would need a rightward SRAS shift instead.'
          },
          {
            question: 'An economy is at full employment when Congress passes a large tax cut. What is the long-run effect, compared with the starting point?',
            options: [
              'Both a higher price level and real GDP',
              'Higher price level, same real GDP',
              'The same price level, higher real GDP',
              'A lower price level, same real GDP'
            ],
            correctAnswer: 1,
            explanation: 'In the short run, output rises above potential, but rising wages shift SRAS left until output returns to full employment. Real GDP ends where it started and the price level is higher.'
          },
          {
            question: 'To fight an inflationary gap, a government cuts its purchases and raises income taxes. Which short-run outcome is expected?',
            options: [
              'Unemployment falls and the budget moves toward deficit',
              'The budget moves toward deficit as unemployment rises',
              'Unemployment rises and the budget moves toward surplus',
              'Unemployment falls and the budget moves toward surplus'
            ],
            correctAnswer: 2,
            explanation: 'The leftward AD shift lowers output, so firms need fewer workers and unemployment rises toward the natural rate. Lower spending and higher tax revenue both move the budget toward surplus.'
          }
        ]
      }
    }
  ]
}
