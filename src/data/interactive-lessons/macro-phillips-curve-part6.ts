export const macroPhillipsCurvePart6Data = {
  topicSlug: 'macro-phillips-curve',
  sections: [
    {
      id: 'macrophi6-intro',
      type: 'text' as const,
      content: `
# 📉 The Phillips Curve

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How the Phillips Curve Appears on the Exam |
| FRQ Practice Set 1: Expansionary Fiscal Policy |
| FRQ Practice Set 2: A Supply Shock and the Fed |
| Exam-Style Multiple Choice |

> 🔑 **Key Concept:** Phillips curve FRQs follow a predictable script: **draw** a correctly labeled graph in long-run equilibrium, **show** a short-run change, then **explain** what happens in the long run. Points come from correct labels, correct relative positions and explanations that name the mechanism, usually expected inflation.
`
    },
    {
      id: 'macrophi6-format',
      type: 'text' as const,
      content: `
## 📖 How the Phillips Curve Appears on the Exam

| Task verb | What earns the point | Example |
|---|---|---|
| **Draw** | Labeled axes (inflation rate, unemployment rate), a downward-sloping SRPC, a vertical LRPC, and the current point | Point A where SRPC1 crosses the LRPC |
| **Show** | The new point in the correct position, on the correct curve, with any shifted curve labeled | Point B on SRPC1, up and to the left of A |
| **Identify** | A specific, correct answer | "Raise the interest rate on reserve balances" |
| **Explain** | The answer **and** the cause-and-effect link | "Expected inflation rises, so the SRPC shifts up" |

### Habits that protect points

- **Draw both curves even if the question focuses on one.** Many prompts ask for long-run equilibrium first.
- **Mark the natural rate** where the LRPC meets the horizontal axis (often labeled "NRU" or with a number).
- **For policy, name the tool and its direction.** "The Fed raises the interest rate on reserve balances" earns a point; "the Fed fights inflation" does not. The federal funds rate is the target, not the tool.
- **Long run means expectations have adjusted.** The long-run point is always on the LRPC.
`
    },
    {
      id: 'macrophi6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice Set 1: Expansionary Fiscal Policy

Marisco, a hypothetical economy, is in long-run equilibrium with a natural rate of unemployment of 4.5% and expected inflation of 2%.

**(a)** Draw a correctly labeled graph of the short-run and long-run Phillips curves. Label the current point A.

**(b)** Marisco's government increases its purchases. On your graph, show the short-run effect, labeled B.

**(c)** At point B, is the unemployment rate above, below or equal to 4.5%? Is real GDP above, below or equal to full-employment output?

**(d)** Explain what happens to expected inflation over time, and show the long-run equilibrium on your graph, labeled C.

**(e)** Identify the curve in the AD-AS model that shifts during the adjustment in part (d), and the direction of its shift.

**(f)** Compare the unemployment rate and the inflation rate at point C with those at point A.

### Model Answers

**(a)** Vertical axis "Inflation rate," horizontal axis "Unemployment rate." A vertical LRPC at 4.5%. A downward-sloping SRPC1 that crosses the LRPC at 2% inflation, labeled point A.

**(b)** Point B on SRPC1, **up and to the left** of A. Higher government purchases shift AD right, which is a movement along the SRPC, not a shift.

**(c)** Unemployment is **below** 4.5%, so real GDP is **above** full-employment output (an inflationary gap).

**(d)** Actual inflation at B exceeds the 2% people expected, so **expected inflation rises**. Workers bargain for higher nominal wages and firms raise planned prices, so the SRPC **shifts up** to SRPC2. Point C is on the LRPC **directly above** A, where SRPC2 crosses the LRPC.

**(e)** **SRAS shifts left**, because higher expected inflation raises nominal wages and other production costs.

**(f)** Unemployment at C **equals** the unemployment rate at A (4.5%). Inflation at C is **higher** than at A.
`
    },
    {
      id: 'macrophi6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An FRQ asks for the short-run effect of higher government purchases on a Phillips curve graph, starting from long-run equilibrium. Which drawing earns the point?',
            options: [
              'A new point on the original SRPC, down and to the right of the start',
              'A new point on the original SRPC, up and to the left of the start',
              'A new SRPC to the right, with a point up and to the right of the start',
              'A new LRPC to the left, with a point at a lower unemployment rate'
            ],
            correctAnswer: 1,
            explanation: 'Higher government purchases shift AD right, which moves the economy up and to the left along the existing SRPC. Down and to the right is the effect of lower AD, a rightward SRPC shift is a supply shock, and fiscal policy does not move the LRPC.'
          },
          {
            question: 'Marisco is at 3% unemployment and 5% inflation, with a natural rate of 4.5% and expected inflation of 2%. Which explanation of the long-run adjustment earns credit?',
            options: [
              'Expected inflation falls and workers accept smaller raises, so the SRPC shifts down and unemployment falls further',
              'Firms add capacity over time, so the LRPC shifts left and unemployment stays at 3%',
              'Workers come to expect higher inflation and demand bigger raises, so the SRPC shifts up until unemployment returns to 4.5%',
              'Budget deficits shrink over time, so the LRPC shifts right and inflation falls to 2%'
            ],
            correctAnswer: 2,
            explanation: 'Inflation above what people expected raises expected inflation and wage demands, shifting the SRPC up until unemployment is back at the natural rate. Expectations rise rather than fall here, and neither added capacity nor the budget changes the natural rate that fixes the LRPC.'
          },
          {
            question: 'Compared with the original long-run equilibrium, Marisco\'s expansionary fiscal policy leaves the economy in the long run with',
            options: [
              'lower unemployment along with higher inflation',
              'unchanged inflation along with lower unemployment',
              'lower inflation along with higher unemployment',
              'higher inflation with unchanged unemployment'
            ],
            correctAnswer: 3,
            explanation: 'In the long run, unemployment returns to the natural rate, but expected and actual inflation have risen, so only inflation is higher. Lower unemployment is the short-run effect, and nothing in the story lowers inflation.'
          }
        ]
      }
    },
    {
      id: 'macrophi6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice Set 2: A Supply Shock and the Fed

Teral, a hypothetical economy, is in long-run equilibrium at point A. A sharp, temporary rise in world energy prices raises production costs.

**(a)** On a correctly labeled Phillips curve graph, show the effect of the energy price rise. Label the new short-run curve SRPC2 and the new point B.

**(b)** What happens to the unemployment rate and the inflation rate as Teral moves from A to B?

**(c)** Teral's central bank operates with ample reserves and decides to reduce inflation. Identify the action it would take with its main tool.

**(d)** Explain how the action in part (c) affects the inflation rate and the unemployment rate in the short run.

**(e)** Does the energy price rise shift the LRPC? Explain.

### Model Answers

**(a)** SRPC2 drawn to the **right** of SRPC1. Point B on SRPC2, **up and to the right** of A.

**(b)** Both **rise**: higher costs raise prices while firms cut production and employment. This combination is stagflation.

**(c)** **Raise the interest rate on reserve balances (IORB).** This lifts the federal funds rate into a higher target range. (In the limited-reserves model, selling government bonds or raising the discount rate would be accepted if the question asks about that model.)

**(d)** Higher interest rates reduce interest-sensitive spending such as investment, so AD shifts left. Teral moves **down along SRPC2**: inflation falls, and unemployment rises further.

**(e)** **No.** The LRPC sits at the natural rate of unemployment, which depends on frictional and structural unemployment. A temporary cost shock does not change either, so only the SRPC shifts.

> 🔑 **AP Connection:** In part (d), the policy causes a **movement** along the curve that the shock already shifted. Students often draw a second shift; the graders want the economy to slide down SRPC2.
`
    },
    {
      id: 'macrophi6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Kelm, a hypothetical economy, has a natural rate of unemployment of 5% and expected inflation of 3%, and it is in long-run equilibrium. Along Kelm's SRPC, each 1-percentage-point fall in unemployment raises inflation by 2 percentage points. Expansionary policy lowers unemployment to 4%.

**1)** What is Kelm's inflation rate at 4% unemployment, in percent?

**2)** Expected inflation then adjusts fully to the rate in question 1. At what inflation rate does the new SRPC cross the LRPC, in percent?

**3)** Policy makers push unemployment back down to 4% on the new SRPC, which has the same slope. What is the inflation rate now, in percent?

Enter numbers only (no % sign).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '5', '7'],
        hint1: 'Unemployment fell 1 point from the natural rate, so inflation rises 2 points above the expected 3%.',
        hint2: 'The SRPC always crosses the LRPC at the inflation rate people expect.',
        hint3: 'On the new curve, start from the new expected rate and add 2 points for the 1-point fall in unemployment.',
        explanation: '1) 3% + 2 = 5%. 2) Once people expect 5%, the new SRPC crosses the LRPC at 5%. 3) 5% + 2 = 7%. Holding unemployment 1 point below the natural rate takes ever-higher inflation as expectations keep catching up.'
      }
    },
    {
      id: 'macrophi6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the ample-reserves framework, which Federal Reserve action would move the economy down and to the right along its SRPC?',
            options: [
              'Raising the interest rate on reserve balances',
              'Lowering the interest rate on reserve balances',
              'Buying Treasury bonds on the open market',
              'Lowering the target range for the federal funds rate'
            ],
            correctAnswer: 0,
            explanation: 'Raising the interest rate on reserve balances pushes up the federal funds rate and other rates, which reduces AD and moves the economy toward lower inflation and higher unemployment. Lowering that rate, buying bonds and lowering the target range are all expansionary and move the economy up the SRPC.'
          },
          {
            question: 'After a temporary cost shock shifts the SRPC to the right, an FRQ asks whether the LRPC also shifts. Which answer is correct?',
            options: [
              'Yes, to the right, since unemployment has risen above its old level',
              'No, since frictional and structural unemployment are unchanged',
              'Yes, to the left, since the Fed will respond with tighter policy',
              'No, since the LRPC shifts only when expected inflation changes'
            ],
            correctAnswer: 1,
            explanation: 'The LRPC sits at the natural rate, which is frictional plus structural unemployment, and a temporary cost shock changes neither. The rise in unemployment is cyclical, policy moves the economy along a curve, and expected inflation shifts the SRPC rather than the LRPC.'
          }
        ]
      }
    }
  ]
}
