export const macroAdAsPart5Data = {
  topicSlug: 'macro-ad-as',
  sections: [
    {
      id: 'macroada5-intro',
      type: 'text' as const,
      content: `
# 📈 Aggregate Demand & Aggregate Supply

**Part 5 of 7 — Long-Run Self-Adjustment and Common Misconceptions**

---

| Section |
|---------|
| 📖 Self-Adjustment from a Recessionary Gap |
| Self-Adjustment from an Inflationary Gap |
| Why Self-Adjustment Can Be Slow |
| Common Misconceptions |

> 🔑 **Key Concept:** If policymakers do nothing, an economy with an output gap eventually returns to full-employment output because **nominal wages and input prices adjust**. That adjustment shifts **SRAS**, not AD. In the long run, a change in aggregate demand changes **only the price level**, not real output.
`
    },
    {
      id: 'macroada5-recession',
      type: 'text' as const,
      content: `
## 📖 Self-Adjustment from a Recessionary Gap

### Worked Example: Consumer confidence collapses

The economy starts in long-run equilibrium at price level **100** and real GDP of **\\$20 trillion** (full-employment output, Yf).

**Step 1: The shock (short run).** Consumer confidence falls and AD shifts left. The new short-run equilibrium is price level **96** and real GDP **\\$19.2 trillion**. There is a recessionary gap of \\$0.8 trillion, and unemployment is above the natural rate.

**Step 2: Wages adjust.** With many workers looking for jobs and firms hiring few, workers accept lower nominal wages when contracts are renegotiated. Input prices fall as well.

**Step 3: SRAS shifts right.** Lower wages and input costs mean lower costs at every price level, so SRAS shifts right.

**Step 4: New long-run equilibrium.** SRAS keeps shifting until it crosses the new AD curve on the LRAS line: price level **92**, real GDP **\\$20 trillion**.

| | Start | Short run | Long run |
|---|---|---|---|
| Price level | 100 | 96 | 92 |
| Real GDP (\\$ trillions) | 20.0 | 19.2 | 20.0 |
| Unemployment | Natural rate | Above natural rate | Natural rate |
| Nominal wages | Original | Original (sticky) | Lower |

**Long-run result of the AD decrease:** a **lower price level**, the **same real output** and unemployment back at the natural rate.
`
    },
    {
      id: 'macroada5-boom',
      type: 'text' as const,
      content: `
## Self-Adjustment from an Inflationary Gap

### Worked Example: An investment boom

The economy starts in long-run equilibrium at price level **100** and real GDP of **\\$20 trillion**. Business optimism raises investment, and AD shifts right to a short-run equilibrium of price level **105** and real GDP **\\$20.6 trillion**.

1. **Short run:** an inflationary gap of \\$0.6 trillion. Unemployment is below the natural rate, and firms compete for scarce workers.
2. **Wages adjust:** workers notice rising prices and, with jobs plentiful, win higher nominal wages. Input prices rise too.
3. **SRAS shifts left:** higher costs at every price level.
4. **Long run:** SRAS crosses AD on the LRAS line at real GDP **\\$20 trillion** and a price level of about **110**.

**Long-run result of the AD increase:** a **higher price level**, the **same real output**.

### The pattern in one table

| Starting gap | Unemployment vs. natural rate | Nominal wages | SRAS shift | Long-run price level |
|---|---|---|---|---|
| Recessionary | Above | Fall | Right | Lower than before the shock |
| Inflationary | Below | Rise | Left | Higher than before the shock |

> 🔑 **AP Connection:** The words "in the long run, with no policy action" signal self-adjustment. The answer always involves **nominal wages** and a **shift of SRAS**, and output always returns to **full-employment output**.
`
    },
    {
      id: 'macroada5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy is in a recessionary gap, and the government takes no policy action. Which change moves the economy back to full-employment output in the long run?',
            options: [
              'Rising nominal wages shift SRAS to the left',
              'Rising consumer spending shifts AD to the right',
              'Falling potential output shifts LRAS to the left',
              'Falling nominal wages and input prices shift SRAS right'
            ],
            correctAnswer: 3,
            explanation: 'High unemployment puts downward pressure on nominal wages, which lowers costs and shifts SRAS right until output returns to full employment. Self-adjustment works through SRAS, not through AD or LRAS.'
          },
          {
            question: 'Starting from long-run equilibrium, aggregate demand increases. After long-run self-adjustment, compared with the original equilibrium,',
            options: [
              'the price level is higher and real GDP is the same',
              'the price level and real GDP are both higher',
              'the price level is the same and real GDP is higher',
              'the price level is lower and real GDP is the same'
            ],
            correctAnswer: 0,
            explanation: 'Rising nominal wages shift SRAS left until output returns to full employment, so the only lasting effect of the AD increase is a higher price level. Higher output is only a short-run result.'
          },
          {
            question: 'In an inflationary gap, why do nominal wages tend to rise over time?',
            options: [
              'The LRAS curve has shifted to the left',
              'Unemployment is below the natural rate',
              'Firms face falling demand for output',
              'The price level is falling over time'
            ],
            correctAnswer: 1,
            explanation: 'In an inflationary gap, output is above potential and unemployment is below the natural rate, so firms compete for scarce workers and bid wages up. The LRAS curve has not moved, and demand and prices are rising, not falling.'
          }
        ]
      }
    },
    {
      id: 'macroada5-slow',
      type: 'text' as const,
      content: `
## Why Self-Adjustment Can Be Slow

Self-adjustment from an inflationary gap tends to be relatively quick: workers readily accept raises. Adjustment from a recessionary gap is often **slow**, because nominal wages are especially sticky **downward**.

- Multi-year contracts lock in nominal wages.
- Employers avoid pay cuts because they hurt morale and productivity; they lay workers off instead.
- Minimum wage laws set a floor for some wages.

While wages adjust, real output stays below potential and unemployment stays high. That cost is the main argument for **stabilization policy**.

### Self-adjustment vs. policy: same output, different price level

| Path out of a recessionary gap | Curve that shifts | Long-run output | Long-run price level |
|---|---|---|---|
| **Self-adjustment** | SRAS shifts right as wages fall | Yf | **Lower** than in the recession |
| **Expansionary policy** | AD shifts right | Yf | **Higher** than in the recession |

Expansionary fiscal policy (higher government purchases, lower taxes) or expansionary monetary policy shifts AD right. Today the Federal Reserve does this by **lowering the interest rate it pays on reserve balances**, which pulls the federal funds rate down within a lower target range; in the limited-reserves model it buys bonds, lowers the discount rate or lowers the reserve requirement. The policy topics cover these tools in detail.

### After a supply shock

A negative supply shock (SRAS left) creates both a recessionary gap and a higher price level. With no policy, the high unemployment eventually pushes wages down, and SRAS shifts back right: output returns to Yf and the price level returns toward its original level. If policymakers instead shift AD right to restore output faster, output returns to Yf but the price level stays **higher**.
`
    },
    {
      id: 'macroada5-misconceptions',
      type: 'text' as const,
      content: `
## Common Misconceptions

| Misconception | Correction |
|---|---|
| "AD slopes down for the same reason a demand curve does." | A single demand curve slopes down partly because buyers switch to **other goods**. AD covers **all** goods, so it slopes down because of the wealth, interest rate and net export effects. |
| "Self-adjustment shifts AD back." | Self-adjustment works through **wages and SRAS**. AD stays where the shock left it. |
| "A higher price level shifts SRAS left." | A higher price level is a **movement along** SRAS. Higher **costs** shift it. |
| "LRAS shifts when the price level changes." | LRAS is vertical because potential output does **not** depend on the price level. It shifts only when resources, technology or the natural rate change. |
| "In the long run, an AD increase raises output." | In the long run, an AD shift changes **only the price level**. Lasting growth needs LRAS to shift. |
| "All inflation comes from too much spending." | Inflation can be **demand-pull** (AD right) or **cost-push** (SRAS left). |
| "A recessionary gap means the price level is falling." | It means output is **below potential**. Prices often keep rising, just more slowly. |
| "Equilibrium is where AD crosses LRAS." | Short-run equilibrium is where AD crosses **SRAS**. AD crosses LRAS at equilibrium only in long-run equilibrium. |
`
    },
    {
      id: 'macroada5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy has a recessionary gap. Compared with waiting for self-adjustment, closing the gap with expansionary fiscal policy results in',
            options: [
              'the same long-run output at a lower price level',
              'the same long-run output at the same price level',
              'the same long-run output at a higher price level',
              'a higher long-run output at the same price level'
            ],
            correctAnswer: 2,
            explanation: 'Both paths end at full-employment output, but policy shifts AD right, which raises the price level, while self-adjustment shifts SRAS right, which lowers it. Neither path can push long-run output above potential.'
          },
          {
            question: 'Which statement about the long-run aggregate supply curve is correct?',
            options: [
              'It shifts left when the price level rises',
              'It shifts right when nominal wages fall',
              'It shifts right when government purchases rise',
              'It shifts when the economy\'s productive resources change'
            ],
            correctAnswer: 3,
            explanation: 'LRAS marks potential output, so it moves only when resources, technology or the natural rate of unemployment change. Price-level and wage changes affect SRAS, and government purchases shift AD.'
          },
          {
            question: 'Why is self-adjustment from a recessionary gap usually slower than from an inflationary gap?',
            options: [
              'Nominal wages fall slowly',
              'The LRAS curve shifts slowly',
              'Prices are fixed by law in a recession',
              'Aggregate demand cannot shift right again'
            ],
            correctAnswer: 0,
            explanation: 'Contracts, morale concerns and minimum wages make nominal wages sticky downward, so the rightward SRAS shift takes a long time. LRAS does not need to move for self-adjustment, and AD remains free to shift.'
          }
        ]
      }
    },
    {
      id: 'macroada5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Each statement describes an economy with no policy action.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a recessionary gap, nominal wages eventually ___.',
            options: ['fall', 'rise', 'stay fixed', 'double']
          },
          {
            label: 'In an inflationary gap, the SRAS curve eventually shifts ___.',
            options: ['left', 'right', 'up and right', 'nowhere']
          },
          {
            label: 'In the long run, a decrease in AD lowers ___.',
            options: ['the price level only', 'real GDP only', 'both price level and real GDP', 'potential output']
          },
          {
            label: 'Self-adjustment ends when output equals ___ output.',
            options: ['full-employment', 'short-run', 'maximum', 'nominal']
          }
        ],
        correctAnswers: ['fall', 'left', 'the price level only', 'full-employment'],
        hint1: 'High unemployment weakens workers\' bargaining power.',
        hint2: 'Rising wages raise costs at every price level.',
        hint3: 'Output returns to the LRAS line in the long run.',
        explanation: 'In a recessionary gap, wages fall and SRAS shifts right; in an inflationary gap, wages rise and SRAS shifts left. Either way output returns to full-employment output, so a lasting change in AD changes only the price level.'
      }
    }
  ]
}
