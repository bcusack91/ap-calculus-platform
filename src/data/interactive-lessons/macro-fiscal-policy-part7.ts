export const macroFiscalPolicyPart7Data = {
  topicSlug: 'macro-fiscal-policy',
  sections: [
    {
      id: 'macrofis7-intro',
      type: 'text' as const,
      content: `
# 🏛️ Fiscal Policy

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture |
| The Decision Table |
| Rules Worth Memorizing |
| Mixed Review |

> 🔑 **Key Concept:** Fiscal policy uses government purchases, taxes and transfers to shift AD toward full-employment output. Discretionary policy needs new laws and faces lags; automatic stabilizers work on their own but only soften the cycle. Every fiscal action also changes the **budget balance**, and when it is combined with monetary policy, some outcomes become **indeterminate**.
`
    },
    {
      id: 'macrofis7-big',
      type: 'text' as const,
      content: `
## 📖 The Big Picture

| Part | Main idea |
|---|---|
| 1 | Expansionary vs. contractionary; discretionary vs. automatic; crowding out and budget terms |
| 2 | G shifts AD directly; taxes and transfers work through disposable income; closing gaps on the AD-AS graph; at full employment, only the price level rises in the long run |
| 3 | Worked cases; supply shocks create a dilemma; recognition, decision, implementation and impact lags can make policy pro-cyclical |
| 4 | Automatic stabilizers dampen fluctuations and shrink the multiplier; budget balance = revenue − (purchases + transfers) |
| 5 | Policy mix: same-direction pushes are certain, opposite pushes are indeterminate; balanced-budget rules are pro-cyclical |
| 6 | Exam practice with AD-AS, budget and policy-mix questions |

### One story that uses every part

1. Investment collapses and AD shifts left: real GDP falls below Yf and unemployment rises (Part 2).
2. Right away, income tax revenue falls and unemployment benefits rise, cushioning consumption; the budget moves toward deficit (Part 4).
3. Months later, data confirm the recession and Congress passes a spending bill (Part 3).
4. AD shifts right; real GDP and the price level rise and unemployment falls (Part 2).
5. The Fed, worried about inflation, raises rates at the same time: interest rates rise for certain, and the final change in real GDP depends on which policy is stronger (Part 5).
`
    },
    {
      id: 'macrofis7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which fiscal action shifts aggregate demand to the right without changing households\' disposable income first?',
            options: [
              'Raising Social Security payments',
              'Cutting income tax rates',
              'Buying new school buses',
              'Expanding Medicaid eligibility'
            ],
            correctAnswer: 2,
            explanation: 'School buses are a government purchase, which is part of AD directly. Social Security, income tax cuts and Medicaid all work by raising disposable income or household resources first.'
          },
          {
            question: 'During a boom, an economy\'s budget moves from a \\$50 billion deficit to a \\$20 billion surplus with no change in laws. What explains this?',
            options: [
              'Congress cut spending on public infrastructure',
              'The central bank bought government bonds',
              'Tax rates fell as incomes moved into new brackets',
              'Revenue rose and transfers fell automatically'
            ],
            correctAnswer: 3,
            explanation: 'In a boom, rising incomes raise tax revenue and fewer people need transfers, all under existing law. A spending cut would require new legislation, and a central-bank bond purchase is monetary policy.'
          },
          {
            question: 'An economy at full employment receives a large increase in government purchases. In the long run, what changes?',
            options: [
              'Only the price level rises',
              'Only real GDP rises',
              'Real GDP and the price level both rise',
              'Neither the price level nor real GDP changes'
            ],
            correctAnswer: 0,
            explanation: 'Output rises above potential in the short run, but rising wages shift SRAS left until output returns to full employment. The lasting effect is a higher price level with real GDP unchanged.'
          }
        ]
      }
    },
    {
      id: 'macrofis7-table',
      type: 'text' as const,
      content: `
## The Decision Table

| Situation | Fiscal policy | AD | Price level | Real GDP | Unemployment | Budget |
|---|---|---|---|---|---|---|
| Recessionary gap | ↑ G, ↓ taxes, ↑ transfers | Right | ↑ | ↑ | ↓ | Toward deficit |
| Inflationary gap | ↓ G, ↑ taxes, ↓ transfers | Left | ↓ | ↓ | ↑ | Toward surplus |
| Negative supply shock | No AD shift fixes both problems | Either | Trade-off | Trade-off | Trade-off | Depends on choice |

### Policy-mix quick reference

| Fiscal + Monetary | Certain result | Indeterminate |
|---|---|---|
| Expansionary + expansionary | AD, real GDP ↑ | Interest rates |
| Contractionary + contractionary | AD, real GDP ↓ | Interest rates |
| Expansionary + contractionary | Interest rates ↑ | AD, real GDP |
| Contractionary + expansionary | Interest rates ↓ | AD, real GDP |
`
    },
    {
      id: 'macrofis7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Unemployment insurance is an example of ___ fiscal policy.',
            options: ['discretionary', 'automatic', 'monetary', 'supply-side']
          },
          {
            label: 'The delay while Congress debates a bill is the ___ lag.',
            options: ['recognition', 'impact', 'decision', 'implementation']
          },
          {
            label: 'A policy that pushes with the business cycle is called ___.',
            options: ['pro-cyclical', 'countercyclical', 'neutral', 'automatic']
          },
          {
            label: 'Automatic stabilizers make the spending multiplier ___.',
            options: ['larger', 'equal to one', 'negative', 'smaller']
          }
        ],
        correctAnswers: ['automatic', 'decision', 'pro-cyclical', 'smaller'],
        hint1: 'Benefits rise in a recession without any new vote.',
        hint2: 'This lag is about choosing and passing a policy.',
        hint3: 'It adds demand in booms and removes it in recessions.',
        explanation: 'Unemployment insurance responds automatically, and debating a bill is the decision lag. A pro-cyclical policy pushes with the cycle, and stabilizers shrink the multiplier because taxes and transfers absorb part of each change in income.'
      }
    },
    {
      id: 'macrofis7-rules',
      type: 'text' as const,
      content: `
## Rules Worth Memorizing

| Item | Rule |
|---|---|
| Budget balance | Tax revenue − (government purchases + transfer payments) |
| Deficit vs. debt | Deficit = one year's shortfall (flow); debt = accumulated deficits minus surpluses (stock) |
| How G reaches AD | Directly, as a component of AD |
| How taxes and transfers reach AD | Through disposable income and consumption (business taxes through investment) |
| Automatic stabilizers | Progressive income tax, unemployment insurance, means-tested transfers such as SNAP and Medicaid; no new law needed |
| Lags | Recognition → decision → implementation → impact; automatic stabilizers skip the first two |
| Long run at full employment | Demand-side stimulus raises only the price level |
| Balanced-budget rule in a recession | Forces tax increases or spending cuts, deepening the downturn |
| Crowding out | Government borrowing raises the real interest rate and reduces private investment (Fiscal Policy Tools topic) |

> ⚠️ **Most-missed distinction:** "Lower interest rates" is **never** a fiscal policy answer. Fiscal tools are government purchases, taxes and transfer payments.
`
    },
    {
      id: 'macrofis7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Congress cuts taxes while the Fed lowers interest rates. What happens to interest rates and real GDP in the short run?',
            options: [
              'Rates fall; real GDP is indeterminate',
              'Rates are indeterminate; real GDP rises',
              'Rates rise; real GDP rises',
              'Rates fall; real GDP rises'
            ],
            correctAnswer: 1,
            explanation: 'Both policies are expansionary, so AD and real GDP rise for certain. The tax cut adds borrowing pressure that pushes rates up while the Fed pushes them down, so the interest rate is indeterminate.'
          },
          {
            question: 'An oil shock causes stagflation. A government responds by raising its purchases. What is the short-run result?',
            options: [
              'The price level falls back as output recovers',
              'Output falls further, and the price level rises',
              'Output recovers, but the price level rises even more',
              'Output is unchanged, and the price level falls'
            ],
            correctAnswer: 2,
            explanation: 'Higher purchases shift AD right, which raises output but also pushes the already higher price level up further. Fixing both output and prices at once would need SRAS to shift back.'
          },
          {
            question: 'Why is a strict annual balanced-budget requirement considered pro-cyclical?',
            options: [
              'It makes the debt grow during booms',
              'It lets the Fed set fiscal policy',
              'It adds transfers during recessions',
              'It forces austerity in recessions'
            ],
            correctAnswer: 3,
            explanation: 'When revenue falls in a recession, the rule forces tax increases or spending cuts, which push AD down further. Booms produce surpluses rather than growing debt, and the rule gives no role to the Fed.'
          }
        ]
      }
    },
    {
      id: 'macrofis7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

A government begins the year with a national debt of \\$5,000 billion. During the year, tax revenue is \\$1,300 billion, government purchases are \\$1,000 billion and transfer payments are \\$420 billion.

**1)** What is the budget balance, in billions? (Use a minus sign for a deficit.)

**2)** What is the national debt at the end of the year, in billions?

**3)** If the economy is at full employment and the government adds \\$50 billion of purchases, by how much does real GDP change in the long run, in billions?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-120', '5120', '0'],
        hint1: '1,300 − (1,000 + 420).',
        hint2: 'A deficit adds to the debt.',
        hint3: 'At full employment, demand-side policy changes only the price level in the long run.',
        explanation: '1) 1,300 − 1,420 = −120, a deficit. 2) \\$5,000 billion + \\$120 billion = \\$5,120 billion. 3) Zero: once SRAS adjusts, output returns to full employment and only the price level is higher.'
      }
    }
  ]
}
