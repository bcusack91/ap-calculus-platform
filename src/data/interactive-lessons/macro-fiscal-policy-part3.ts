export const macroFiscalPolicyPart3Data = {
  topicSlug: 'macro-fiscal-policy',
  sections: [
    {
      id: 'macrofis3-intro',
      type: 'text' as const,
      content: `
# 🏛️ Fiscal Policy

**Part 3 of 7 — Worked Cases and Policy Lags**

---

| Section |
|---------|
| 📖 Case 1: A Recession in Riverland |
| Case 2: Demand-Pull Inflation in Eastport |
| Case 3: The Supply-Shock Dilemma in Northvale |
| The Four Policy Lags |
| Case 4: Stimulus That Arrives Too Late |

> 🔑 **Key Concept:** Choosing a fiscal policy starts with a diagnosis: is output below or above full employment, and did the problem come from **demand** or **supply**? Even the right policy can backfire if it arrives late, because discretionary fiscal policy works with **time lags**.
`
    },
    {
      id: 'macrofis3-case1',
      type: 'text' as const,
      content: `
## 📖 Case 1: A Recession in Riverland

Riverland (a hypothetical economy) has full-employment output of \\$500 billion. After a fall in business confidence, investment drops and real GDP falls to \\$470 billion. Unemployment rises from 4.5% to 7%.

**Diagnosis:** AD shifted left; Riverland has a **recessionary gap** of \\$30 billion.

**Recommended policy:** Expansionary fiscal policy, for example a \\$10 billion increase in spending on school repairs, or an income tax cut.

**Traced effects:**

| Variable | Short-run effect | Reason |
|---|---|---|
| AD | Shifts right | G rises (or C rises after the tax cut) |
| Real GDP | Rises toward \\$500 billion | Movement up along SRAS |
| Price level | Rises | SRAS slopes upward |
| Unemployment | Falls toward 4.5% | Firms hire to produce more |
| Budget balance | Moves toward deficit | Spending up or tax revenue down |

If the spending multiplier is 3, \\$10 billion of new purchases is enough to close the \\$30 billion gap (the calculation is covered in the Multiplier Effect topic).
`
    },
    {
      id: 'macrofis3-case2',
      type: 'text' as const,
      content: `
## Case 2: Demand-Pull Inflation in Eastport

Eastport's consumers and firms are spending heavily after a stock market boom. Real GDP is \\$820 billion, above full-employment output of \\$800 billion, unemployment is 3%, and inflation has climbed to 6%.

**Diagnosis:** AD shifted right; Eastport has an **inflationary gap** of \\$20 billion caused by excess demand.

**Recommended policy:** Contractionary fiscal policy, for example raising income taxes or postponing planned government purchases.

**Traced effects:** AD shifts left, so the price level (and inflation) falls, real GDP falls toward \\$800 billion, unemployment rises toward the natural rate, and the budget moves toward surplus.

> 🔑 **AP Connection:** Contractionary policy is politically hard, since it means higher taxes or less spending. AP questions ignore politics, but the difficulty is one reason governments use contractionary fiscal policy less often than expansionary policy.
`
    },
    {
      id: 'macrofis3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Real GDP is \\$470 billion and full-employment output is \\$500 billion. Which fiscal policy fits this economy?',
            options: [
              'Raise income tax rates for households',
              'Cut transfer payments to households',
              'Raise spending on school repairs',
              'Cut spending on military equipment'
            ],
            correctAnswer: 2,
            explanation: 'Output is below full employment, so the economy needs a rightward AD shift, which more government purchases provide. Higher income taxes, lower transfers and lower military spending all shift AD left and would deepen the recession.'
          },
          {
            question: 'Eastport has an inflationary gap caused by a spending boom. Which pair of effects should contractionary fiscal policy produce in the short run?',
            options: [
              'A larger budget deficit and lower inflation',
              'Higher real GDP and a smaller budget deficit',
              'Lower unemployment and a larger budget deficit',
              'Lower inflation and a smaller budget deficit'
            ],
            correctAnswer: 3,
            explanation: 'Shifting AD left reduces upward pressure on prices, and higher taxes or lower spending move the budget toward surplus. Real GDP falls and unemployment rises with this policy, rather than the reverse.'
          },
          {
            question: 'A government closes a recessionary gap by shifting AD to the right. Why does the price level rise even though the economy began in a recession?',
            options: [
              'SRAS slopes upward',
              'LRAS shifts to the left',
              'Tax revenue falls',
              'Money demand falls'
            ],
            correctAnswer: 0,
            explanation: 'Moving along an upward-sloping SRAS curve, higher output comes with a higher price level. LRAS does not shift with demand-side policy, and changes in tax revenue or money demand do not explain the movement along SRAS.'
          }
        ]
      }
    },
    {
      id: 'macrofis3-case3',
      type: 'text' as const,
      content: `
## Case 3: The Supply-Shock Dilemma in Northvale

Northvale imports most of its oil. When world oil prices jump, production costs rise and **SRAS shifts left**. Real GDP falls from \\$600 billion (full employment) to \\$570 billion, and the price level rises from 100 to 107. This combination of falling output and rising prices is **stagflation**.

**Diagnosis:** A **negative supply shock**, not a demand problem.

**The dilemma:** Fiscal policy shifts AD, and no single AD shift can fix both problems.

| Policy choice | Effect on real GDP | Effect on price level |
|---|---|---|
| Expansionary (AD right) | Rises back toward \\$600 billion ✓ | Rises **further** above 107 ✗ |
| Contractionary (AD left) | Falls **further** below \\$570 billion ✗ | Falls back toward 100 ✓ |
| No action | Recovers slowly as input prices adjust | Stays high until then |

Policymakers must choose which problem to treat first. That trade-off is the key idea: **demand-side policy cannot fully offset a supply shock.**
`
    },
    {
      id: 'macrofis3-lags',
      type: 'text' as const,
      content: `
## The Four Policy Lags

Discretionary fiscal policy needs people to notice a problem, agree on a response and carry it out. Each step takes time.

| Lag | What causes the delay | Example |
|---|---|---|
| **Recognition lag** | GDP and unemployment data arrive with a delay and are revised later | A recession that began in spring is not clear in the data until autumn |
| **Decision (legislative) lag** | Congress must debate and pass a bill, and the president must sign it | A spending bill takes months to pass both chambers |
| **Implementation lag** | Agencies must put the policy into effect | Highway projects need plans, bids and permits before work starts |
| **Impact lag** | Spending works through the economy round by round | The multiplier effect builds over many months |

### Why lags can make policy pro-cyclical

A **countercyclical** policy pushes against the business cycle; a **pro-cyclical** policy pushes with it. If stimulus arrives after the economy has already recovered, it adds demand to an economy that no longer needs it, and can push output **above** full employment.

### Discretionary vs. automatic speed

Automatic stabilizers skip the recognition and decision lags entirely: tax payments fall and unemployment benefits rise as soon as incomes fall, with **no new law**. That is their main advantage over discretionary policy.
`
    },
    {
      id: 'macrofis3-case4',
      type: 'text' as const,
      content: `
## Case 4: Stimulus That Arrives Too Late

Lakeside (a hypothetical economy) slips into a mild recession in **January**.

| Month | Event |
|---|---|
| January | Recession begins |
| June | Data finally confirm the downturn (recognition lag: 5 months) |
| November | Congress passes and the president signs a spending bill (decision lag: 5 months) |
| Next April | Construction begins and money starts flowing (implementation lag: 5 months) |

By the following spring, consumer spending has already recovered on its own. The new spending shifts AD right just as the economy reaches full employment, creating an **inflationary gap**. A policy meant to be countercyclical turned out **pro-cyclical**.

**Lesson:** The longer the lags, the greater the risk that discretionary policy hits the economy at the wrong phase of the cycle.
`
    },
    {
      id: 'macrofis3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An oil price shock shifts SRAS to the left. Why can\'t expansionary fiscal policy alone return the economy to its original equilibrium?',
            options: [
              'It lowers output and pushes the price level even higher',
              'It raises output but pushes the price level even higher',
              'It shifts LRAS left, so full-employment output is lower',
              'It raises taxes, which offsets the increase in purchases'
            ],
            correctAnswer: 1,
            explanation: 'Shifting AD right restores output, but along the shifted SRAS curve the price level rises above its already higher level. Demand-side policy does not shift LRAS, and expansionary policy lowers rather than raises taxes.'
          },
          {
            question: 'Congress spends six months debating a stimulus bill. Which lag does this delay illustrate?',
            options: [
              'Recognition lag',
              'Implementation lag',
              'Decision lag',
              'Impact lag'
            ],
            correctAnswer: 2,
            explanation: 'Debating and passing a bill is the decision, or legislative, lag. The recognition lag comes earlier, while data are gathered, and the implementation and impact lags come after the bill is signed.'
          },
          {
            question: 'Why are automatic stabilizers faster than discretionary fiscal policy?',
            options: [
              'They are carried out by the central bank instead',
              'They change the money supply rather than spending',
              'They take effect only once the recession is over',
              'They need no data or new law to take effect'
            ],
            correctAnswer: 3,
            explanation: 'Tax payments and benefit claims change automatically as incomes change, so there is no recognition or decision lag. Stabilizers are fiscal programs, not central-bank actions, and they work during the downturn rather than after it.'
          }
        ]
      }
    },
    {
      id: 'macrofis3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

A recession begins in **March**. Data confirm it **4 months** later. Congress then takes **6 months** to pass a spending bill, and the money starts flowing **3 months** after that.

**1)** In which month is the recession confirmed? (Write the month name.)

**2)** How many months after the recession began does the new spending start flowing?

**3)** The recession ended on its own 10 months after it began. For how many months had the economy already been recovering when the spending started?

Enter a month name or a number.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['July', '13', '3'],
        hint1: 'Count 4 months forward from March.',
        hint2: 'Add the three lags: 4 + 6 + 3.',
        hint3: 'Subtract the 10-month recession from the total lag.',
        explanation: '1) March + 4 months = July. 2) 4 + 6 + 3 = 13 months. 3) 13 − 10 = 3 months: the stimulus arrived during the recovery, so it risks being pro-cyclical.'
      }
    }
  ]
}
