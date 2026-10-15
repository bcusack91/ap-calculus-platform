export const macroAdAsPart6Data = {
  topicSlug: 'macro-ad-as',
  sections: [
    {
      id: 'macroada6-intro',
      type: 'text' as const,
      content: `
# 📈 Aggregate Demand & Aggregate Supply

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How AD-AS Appears on the Exam |
| FRQ Practice Set 1: A Recession |
| FRQ Practice Set 2: A Supply Shock |
| Exam-Style Multiple Choice |

> 🔑 **Key Concept:** The AD-AS graph appears in nearly every AP Macroeconomics long free-response question. You earn points for a **correctly labeled graph**, for showing the **direction of a shift** and the new equilibrium, and for explanations that name the **mechanism**: which component of spending or which cost changed.
`
    },
    {
      id: 'macroada6-format',
      type: 'text' as const,
      content: `
## 📖 How AD-AS Appears on the Exam

| Task | What earns the point |
|---|---|
| **Draw a correctly labeled graph** | Axes labeled "Price level" and "Real GDP"; AD, SRAS and LRAS labeled; LRAS at full-employment output |
| **Show the current state** | Equilibrium (PL₁, Y₁) marked to the left of LRAS for a recession, to the right for an inflationary gap |
| **Show a shift** | New curve labeled (AD₂ or SRAS₂), arrow showing direction, new PL₂ and Y₂ on the axes |
| **Identify an effect** | A direction (increase, decrease, no change, indeterminate) for each variable asked about |
| **Explain** | The mechanism, such as "lower nominal wages reduce production costs, shifting SRAS right" |

### Habits that protect points

- **Start from the situation in the stem.** If the question says the economy is in a recession, draw equilibrium **left** of LRAS, not on it.
- **Shift only the curve the event touches.** A tax change moves AD; an oil price change moves SRAS. Do not move LRAS for a temporary shock.
- **Answer "in the short run" and "in the long run" separately.** Short run: AD crosses SRAS. Long run: output is back at LRAS.
- **Name the Fed's tool correctly.** In the ample-reserves framework, the Fed's main tool is the **interest rate on reserve balances**; the federal funds rate is its **target**.
`
    },
    {
      id: 'macroada6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice Set 1: A Recession

The economy of Lorran is in short-run equilibrium with real GDP below full-employment output and an unemployment rate of 7%. Lorran's natural rate of unemployment is 4.5%.

**(a)** Draw a correctly labeled graph of aggregate demand, short-run aggregate supply and long-run aggregate supply. Show current equilibrium output (Y₁) and price level (PL₁), and full-employment output (Yf).

**(b)** Assume no policy action is taken. Explain how nominal wages will change in the long run, and show on your graph the effect on short-run aggregate supply.

**(c)** Instead, suppose Lorran's government increases government purchases. What is the short-run effect on real GDP and on the price level?

**(d)** Compare the long-run price level under the policy in (c) with the long-run price level under self-adjustment in (b).

**(e)** Identify an action the central bank could take with its main tool, in the ample-reserves framework, to close the gap.

### Model Answers

**(a)** Vertical axis "Price level," horizontal axis "Real GDP." A downward-sloping AD₁ and an upward-sloping SRAS₁ cross at (Y₁, PL₁), with Y₁ to the **left** of a vertical LRAS at Yf.

**(b)** Unemployment (7%) is above the natural rate, so workers accept **lower nominal wages** over time. Lower wages reduce production costs, so **SRAS shifts right** (SRAS₂) until it crosses AD₁ on LRAS at Yf, at a lower price level.

**(c)** AD shifts right, so real GDP **increases** and the price level **increases**.

**(d)** The long-run price level is **higher** under the policy (AD shifted right) than under self-adjustment (SRAS shifted right, which lowers the price level).

**(e)** **Lower the interest rate on reserve balances.** This lowers the federal funds rate and other interest rates, raising investment and consumption, which shifts AD right. (In the limited-reserves model, buying government bonds in open-market operations would be accepted.)
`
    },
    {
      id: 'macroada6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A free-response question says an economy is "operating above full employment." Where should short-run equilibrium appear on your AD-AS graph?',
            options: [
              'To the right of the LRAS curve',
              'To the left of the LRAS curve',
              'Exactly on the LRAS curve',
              'Where SRAS crosses LRAS'
            ],
            correctAnswer: 0,
            explanation: 'Output above full employment means real GDP exceeds Yf, so the AD-SRAS intersection lies to the right of LRAS. A point on LRAS would show full employment, and a point to the left would show a recession.'
          },
          {
            question: 'An economy is in a recessionary gap with no policy action. In the long run, what happens to the unemployment rate and the price level?',
            options: [
              'Unemployment falls to the natural rate, and the price level rises',
              'Unemployment falls to the natural rate, and the price level falls',
              'Unemployment stays above the natural rate, and the price level falls',
              'Unemployment falls below the natural rate, and the price level falls'
            ],
            correctAnswer: 1,
            explanation: 'Falling nominal wages shift SRAS right, which lowers the price level and raises output to Yf, where unemployment equals the natural rate. Self-adjustment does not push unemployment below the natural rate or leave it permanently above it.'
          },
          {
            question: 'Which answer would earn the point for "identify the effect of a decrease in the world price of oil on LRAS"?',
            options: [
              'LRAS shifts right',
              'LRAS shifts left',
              'No change',
              'LRAS becomes upward sloping'
            ],
            correctAnswer: 2,
            explanation: 'A change in an input price shifts SRAS only; potential output depends on the quantity and quality of resources and technology, which have not changed. Moving LRAS for a temporary cost change is a common lost point.'
          }
        ]
      }
    },
    {
      id: 'macroada6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice Set 2: A Supply Shock

The economy of Tessaly is in long-run equilibrium. A hurricane damages ports and refineries, and the prices of fuel and imported parts rise sharply for a year. The productive capacity of the economy is not permanently reduced.

**(a)** Using a correctly labeled AD-AS graph, show the short-run effect of the shock. Label the new price level PL₂ and the new real GDP Y₂.

**(b)** What happens to the unemployment rate in the short run? Explain.

**(c)** What happens to LRAS? Explain.

**(d)** At the same time, consumers in Tessaly become more optimistic and spend more. What is the combined short-run effect of both events on the price level and on real GDP?

**(e)** Explain why expansionary policy aimed at real GDP in (a) would make inflation worse.

### Model Answers

**(a)** SRAS₁ shifts left to SRAS₂. The new intersection with AD₁ is at a **higher** price level PL₂ and a **lower** real GDP Y₂, to the left of LRAS.

**(b)** **Increases.** Real GDP falls, so firms need fewer workers and lay some off.

**(c)** **No change.** The price spike is temporary and capacity is not permanently reduced, so full-employment output is unchanged.

**(d)** Price level: **increases** (both an SRAS decrease and an AD increase raise it). Real GDP: **indeterminate** (the SRAS decrease lowers it, the AD increase raises it, and the sizes are not given).

**(e)** Expansionary policy shifts AD right. That raises output, but because the economy is on the higher SRAS₂, it also raises the price level further above PL₂.
`
    },
    {
      id: 'macroada6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy is in long-run equilibrium. Firms expect higher future profits and spend more on new equipment, and at the same time nominal wages climb across the economy. In the short run, the price level will',
            options: [
              'decrease',
              'remain the same',
              'change in a way that cannot be determined',
              'increase'
            ],
            correctAnswer: 3,
            explanation: 'Higher investment shifts AD right and higher wages shift SRAS left, and both raise the price level, so it must increase. The effect on real GDP is the result that cannot be determined without the sizes of the shifts.'
          },
          {
            question: 'Which event shifts AD to the left?',
            options: [
              'A stronger domestic currency that reduces net exports',
              'A decrease in the price level that raises the real value of wealth',
              'A decrease in business taxes that lowers firms\' production costs',
              'A rise in nominal wages that increases firms\' production costs'
            ],
            correctAnswer: 0,
            explanation: 'A stronger currency makes exports pricier abroad and imports cheaper at home, so net exports fall at every price level and AD shifts left. A change in the price level moves the economy along AD, and business taxes and wages are SRAS shifters.'
          }
        ]
      }
    },
    {
      id: 'macroada6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The economy of Corvia has full-employment output of \\$4.0 trillion. After a drop in exports, short-run equilibrium real GDP is \\$3.7 trillion at a price level of 118. With no policy action, self-adjustment returns output to full employment at a price level of 112.

**1)** What is the size of the recessionary gap, in trillions of dollars?

**2)** By how many points does the price level fall during self-adjustment?

**3)** What is the long-run equilibrium real GDP, in trillions of dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.3', '6', '4'],
        hint1: 'The gap is full-employment output minus actual output.',
        hint2: 'Compare the short-run price level with the long-run price level.',
        hint3: 'Self-adjustment always ends at full-employment output.',
        explanation: '1) 4.0 − 3.7 = \\$0.3 trillion. 2) 118 − 112 = 6 points, because falling wages shift SRAS right. 3) Long-run output is full-employment output, \\$4.0 trillion.'
      }
    }
  ]
}
