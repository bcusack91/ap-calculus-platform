export const macroFiscalPolicyPart6Data = {
  topicSlug: 'macro-fiscal-policy',
  sections: [
    {
      id: 'macrofis6-intro',
      type: 'text' as const,
      content: `
# 🏛️ Fiscal Policy

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Fiscal Policy Appears on the Exam |
| FRQ Practice Set 1: A Recession in Alta |
| FRQ Practice Set 2: A Tax Cut in an Overheated Economy |
| Exam-Style Practice |

> 🔑 **Key Concept:** Fiscal policy free-response questions follow a pattern: **diagnose** the gap from the graph or data, **name** a specific fiscal action, **trace** its effect on AD, the price level, real GDP and unemployment, then follow up on the **budget**, **automatic stabilizers**, **lags** or a **policy mix**.
`
    },
    {
      id: 'macrofis6-format',
      type: 'text' as const,
      content: `
## 📖 How Fiscal Policy Appears on the Exam

| Question asks… | Strong answer includes… |
|---|---|
| "Identify a fiscal policy action" | A specific action: "increase government spending" or "decrease personal income taxes," not "use expansionary policy" |
| "Show the effect on the AD-AS graph" | AD shifting in the right direction, new equilibrium labeled, new price level and output labeled on the axes |
| "Explain how the policy affects AD" | The link: taxes → disposable income → consumption → AD |
| "Effect on the budget" | Toward deficit (expansionary) or toward surplus (contractionary) |
| "Effect on interest rates" | Expansionary fiscal: rises; mixed policies: check whether forces agree |
| "Why might the policy be less effective?" | A lag (recognition, decision, implementation) or crowding out |

### Habits that protect points

- **Name the tool, not just the direction.** "Expansionary fiscal policy" without an action rarely earns the point.
- **Do not mix up the actors.** "Lower interest rates" is monetary policy and does not answer a fiscal question.
- **Use "indeterminate" correctly.** It applies only when two forces push one variable in opposite directions, and you should name both forces.
`
    },
    {
      id: 'macrofis6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice Set 1: A Recession in Alta

Alta (a hypothetical economy) is in short-run equilibrium with real GDP of \\$1,140 billion. Full-employment output is \\$1,200 billion, and the unemployment rate is above the natural rate.

**(a)** Draw a correctly labeled AD-AS graph showing Alta's current equilibrium and full-employment output.

**(b)** Identify one discretionary fiscal policy action that could move Alta toward full employment.

**(c)** Show on your graph the effect of your action on the price level and real GDP.

**(d)** What happens to the unemployment rate as a result?

**(e)** How does your action affect the government's budget balance?

**(f)** Suppose instead that Congress takes no action. As incomes fall, what happens to income tax revenue? Explain why this is called an automatic stabilizer.

**(g)** Identify one reason the policy in (b) might take effect too late.

### Model Answers

**(a)** Vertical axis: price level. Horizontal axis: real GDP. A downward-sloping AD curve meets an upward-sloping SRAS curve at real GDP of \\$1,140 billion (Y1) and price level PL1. A vertical LRAS curve stands at \\$1,200 billion (Yf), to the **right** of Y1.

**(b)** Increase government purchases (or decrease personal income taxes, or increase transfer payments).

**(c)** AD shifts **right**. The new equilibrium has a **higher** price level (PL2 > PL1) and **higher** real GDP, closer to \\$1,200 billion.

**(d)** The unemployment rate **falls**, because firms hire more workers to produce more output.

**(e)** The budget balance moves toward **deficit** (a larger deficit or a smaller surplus).

**(f)** Income tax revenue **falls**. Households keep more of their shrinking incomes, so consumption falls less than it otherwise would. It is automatic because it happens under existing tax law with **no new legislation**.

**(g)** The decision (legislative) lag: Congress must debate and pass a bill, and the president must sign it. (The recognition or implementation lag also earns the point.)
`
    },
    {
      id: 'macrofis6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An FRQ asks for "one fiscal policy action" to close a recessionary gap. Which answer earns the point?',
            options: [
              'Use expansionary fiscal policy',
              'Increase government purchases',
              'Lower the federal funds rate target',
              'Shift aggregate demand to the right'
            ],
            correctAnswer: 1,
            explanation: 'Increasing government purchases names a specific fiscal tool. "Expansionary fiscal policy" and "shift AD right" describe the goal without an action, and the federal funds rate target belongs to monetary policy.'
          },
          {
            question: 'In a recessionary gap, the government cuts personal tax rates. Which sequence explains the effect on real GDP?',
            options: [
              'Government purchases rise, investment rises, AD shifts right',
              'Interest rates fall, investment rises, SRAS shifts right',
              'Disposable income rises, consumption rises, AD shifts right',
              'Saving rises, so investment rises and LRAS shifts right'
            ],
            correctAnswer: 2,
            explanation: 'A personal tax cut raises disposable income, households spend part of it, and higher consumption shifts AD right. A tax cut does not change government purchases, and its short-run effect works through AD rather than SRAS or LRAS.'
          },
          {
            question: 'Alta\'s economy contracts and no new law is passed. Which change in the government budget is expected?',
            options: [
              'A move toward a surplus',
              'No change in the balance',
              'A drop in the national debt',
              'A move toward deficit'
            ],
            correctAnswer: 3,
            explanation: 'Falling incomes reduce tax revenue and raise transfer payments automatically, so the balance moves toward deficit. More deficit means more borrowing, so the debt grows rather than drops.'
          }
        ]
      }
    },
    {
      id: 'macrofis6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice Set 2: A Tax Cut in an Overheated Economy

Bora (a hypothetical economy) is producing **above** full-employment output, and inflation is rising. Congress nonetheless passes a large cut in personal income taxes. The central bank responds with **contractionary** monetary policy.

**(a)** Is the tax cut an appropriate fiscal policy for Bora's situation? Explain.

**(b)** Considering only the tax cut, what happens to the price level and real GDP in the short run?

**(c)** Considering only the central bank's action, what happens to interest rates?

**(d)** Considering both policies together, what happens to interest rates? Explain.

**(e)** Considering both policies together, what happens to real GDP? Explain.

**(f)** What happens to the budget balance because of the tax cut?

### Model Answers

**(a)** **No.** Bora has an inflationary gap, so it needs contractionary policy. A tax cut raises disposable income and consumption, shifting AD **right** and widening the gap.

**(b)** The price level **rises** and real GDP **rises** (further above full employment).

**(c)** Interest rates **rise**.

**(d)** Interest rates **rise**. The government's larger deficit increases its borrowing, which pushes rates up, and the central bank is also pushing rates up. Both forces agree.

**(e)** **Indeterminate.** The tax cut increases consumption and AD, but the higher interest rates decrease investment and AD. The net effect depends on which is larger.

**(f)** The budget moves toward **deficit**, because tax revenue falls.
`
    },
    {
      id: 'macrofis6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy has an inflationary gap. Which combination of fiscal actions is appropriate?',
            options: [
              'Cut purchases and raise taxes',
              'Raise purchases and raise taxes',
              'Lower taxes and cut purchases',
              'Raise transfers and raise taxes'
            ],
            correctAnswer: 0,
            explanation: 'Both cutting purchases and raising taxes shift AD left. Each of the other pairs mixes an expansionary action with a contractionary one, so the two parts work against each other.'
          },
          {
            question: 'Congress increases spending on defense while the Fed raises the interest rate on reserve balances. Which variable is certain to fall in the short run?',
            options: [
              'Real GDP',
              'Private investment',
              'Nominal interest rates',
              'The budget deficit'
            ],
            correctAnswer: 1,
            explanation: 'Both policies push interest rates up, so interest-sensitive private investment falls for certain. Real GDP is indeterminate, interest rates rise rather than fall, and higher defense spending enlarges the deficit.'
          },
          {
            question: 'Why might a stimulus bill passed during a recession end up adding to inflation?',
            options: [
              'Tax cuts shift SRAS left once they take effect',
              'Automatic stabilizers make each recession longer',
              'Lags can delay its effect until after the recovery',
              'Transfers raise the economy\'s potential output'
            ],
            correctAnswer: 2,
            explanation: 'If recognition, decision and implementation lags delay the spending until the economy has recovered, the extra demand pushes output above full employment. Stabilizers shorten rather than lengthen recessions, and transfers work on AD, not potential output.'
          }
        ]
      }
    },
    {
      id: 'macrofis6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Alta's real GDP is \\$1,140 billion and full-employment output is \\$1,200 billion. This year, tax revenue is \\$820 billion, government purchases are \\$600 billion and transfer payments are \\$260 billion.

**1)** What is the size of the recessionary gap, in billions of dollars?

**2)** What is the budget balance this year, in billions? (Use a minus sign for a deficit.)

**3)** Next year the economy recovers: tax revenue rises by \\$30 billion and transfers fall by \\$10 billion, with purchases unchanged. What is the new budget balance, in billions?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60', '-40', '0'],
        hint1: 'Full-employment output minus actual output.',
        hint2: 'Tax revenue minus (purchases + transfers).',
        hint3: 'New revenue is 850 and new transfers are 250.',
        explanation: '1) 1,200 − 1,140 = 60. 2) 820 − (600 + 260) = −40, a deficit. 3) 850 − (600 + 250) = 0: the recovery alone balanced the budget, through automatic stabilizers.'
      }
    }
  ]
}
