export const macroFiscalPolicyPart4Data = {
  topicSlug: 'macro-fiscal-policy',
  sections: [
    {
      id: 'macrofis4-intro',
      type: 'text' as const,
      content: `
# 🏛️ Fiscal Policy

**Part 4 of 7 — Automatic Stabilizers and Budget Data**

---

| Section |
|---------|
| 📖 The Main Automatic Stabilizers |
| Dampening, Not Eliminating |
| Reading Budget Data Across a Cycle |
| What the Data Show |

> 🔑 **Key Concept:** Automatic stabilizers are taxes and transfer programs that change **on their own** as income changes. In a recession, tax revenue falls and transfers rise; in an expansion, the reverse happens. They soften swings in disposable income and consumption, which **reduces the multiplier effect**, and they push the budget toward **deficit in recessions** and toward **surplus in booms** with no new law.
`
    },
    {
      id: 'macrofis4-list',
      type: 'text' as const,
      content: `
## 📖 The Main Automatic Stabilizers

| Stabilizer | In a recession (incomes fall) | In an expansion (incomes rise) |
|---|---|---|
| **Progressive income tax** | Taxable income falls and some income drops into lower brackets, so tax payments fall by a larger share | Tax payments rise faster than income |
| **Corporate profits tax** | Profits fall, so tax payments fall | Profits rise, so tax payments rise |
| **Unemployment insurance** | More workers lose jobs and collect benefits | Fewer workers collect benefits |
| **Means-tested transfers** (e.g., SNAP food assistance, Medicaid) | More households qualify as incomes fall | Fewer households qualify as incomes rise |

Every row has the same feature: **no one votes**. The rules were written in advance, and the amounts adjust as the economy changes.

### Countercyclical by design

- **Recession:** taxes fall and transfers rise → disposable income falls by **less** than income does → consumption falls by less → the drop in AD is smaller.
- **Expansion:** taxes rise and transfers fall → disposable income rises by **less** than income → consumption rises by less → AD grows more slowly, limiting inflationary pressure.

> 🔑 **AP Connection:** If asked how an automatic stabilizer works, describe the **direction** of the change in taxes or transfers during the given phase, then link it to **disposable income → consumption → AD**.
`
    },
    {
      id: 'macrofis4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is an automatic stabilizer?',
            options: [
              'A new highway spending bill',
              'A one-time tax rebate passed by Congress',
              'A Fed purchase of Treasury bonds',
              'SNAP food assistance'
            ],
            correctAnswer: 3,
            explanation: 'SNAP eligibility depends on income, so enrollment rises automatically when incomes fall. A highway bill and a one-time rebate require new legislation, and a Fed bond purchase is monetary policy.'
          },
          {
            question: 'During an expansion, what happens automatically to income tax revenue and unemployment insurance payments?',
            options: [
              'Tax revenue rises and benefit payments fall',
              'Benefit payments rise and tax revenue falls',
              'Both rise as the labor force grows larger',
              'Both stay fixed until Congress votes'
            ],
            correctAnswer: 0,
            explanation: 'Rising incomes raise tax payments, and fewer workers are unemployed, so benefit payments fall. Both changes happen under existing law, with no vote required.'
          },
          {
            question: 'Why does a progressive income tax stabilize the economy more than a tax that takes the same dollar amount from everyone?',
            options: [
              'Its tax rates change each year',
              'Tax payments change with income',
              'It raises more total revenue',
              'It taxes only higher incomes'
            ],
            correctAnswer: 1,
            explanation: 'Under a progressive tax, payments fall as incomes fall and rise as incomes rise, cushioning disposable income. A fixed dollar tax does not change with income, so it gives no cushion; the rates themselves stay the same from year to year, and total revenue or who pays is not what stabilizes.'
          }
        ]
      }
    },
    {
      id: 'macrofis4-dampen',
      type: 'text' as const,
      content: `
## Dampening, Not Eliminating

Automatic stabilizers make recessions and booms **milder**. They do not prevent them.

### Worked Example: How a stabilizer shrinks the multiplier effect

Suppose a fall in investment cuts national income by \\$100 billion.

| | No stabilizers | With stabilizers |
|---|---|---|
| Fall in income | \\$100 billion | \\$100 billion |
| Fall in tax payments | \\$0 | \\$20 billion |
| Rise in unemployment benefits | \\$0 | \\$5 billion |
| **Fall in disposable income** | **\\$100 billion** | **\\$75 billion** |

With an MPC of 0.8, consumption falls by 0.8 × \\$100 billion = \\$80 billion without stabilizers, but only 0.8 × \\$75 billion = \\$60 billion with them. Every later round of spending shrinks the same way, so the **total** drop in GDP is smaller.

This is why automatic stabilizers are said to **reduce the multiplier effect**: part of each change in income leaks into taxes and transfers instead of passing on to consumption.

### Why discretionary policy is still used

- Stabilizers only soften a downturn; they never push output back up to full employment.
- In a deep recession, the government may add **discretionary** stimulus on top of the stabilizers.
`
    },
    {
      id: 'macrofis4-data',
      type: 'text' as const,
      content: `
## Reading Budget Data Across a Cycle

**Budget balance = tax revenue − (government purchases + transfer payments)**

A positive balance is a **surplus**; a negative balance is a **deficit**.

### Worked Example: Five years in a hypothetical economy (billions of dollars)

| Year | Phase | Tax revenue | Government purchases | Transfers | Budget balance |
|---|---|---|---|---|---|
| 1 | Expansion | 1,900 | 1,200 | 600 | **+100** |
| 2 | Peak | 2,000 | 1,220 | 580 | **+200** |
| 3 | Recession | 1,750 | 1,240 | 700 | **−190** |
| 4 | Trough | 1,700 | 1,260 | 760 | **−320** |
| 5 | Recovery | 1,850 | 1,280 | 680 | **−110** |

**How to compute Year 3:** 1,750 − (1,240 + 700) = 1,750 − 1,940 = **−190**, a deficit of \\$190 billion.

Government purchases rise by the same \\$20 billion every year: there is **no discretionary change** in this table. Every swing in the balance comes from tax revenue and transfers moving with the cycle.
`
    },
    {
      id: 'macrofis4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

A government's budget data (billions of dollars) for two years:

| Year | Tax revenue | Government purchases | Transfers |
|---|---|---|---|
| A (expansion) | 1,600 | 1,100 | 450 |
| B (recession) | 1,450 | 1,100 | 540 |

**1)** What is the budget balance in Year A, in billions? (Use a minus sign for a deficit.)

**2)** What is the budget balance in Year B, in billions?

**3)** By how many billion dollars did the balance fall from Year A to Year B?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '-190', '240'],
        hint1: 'Subtract purchases plus transfers from tax revenue.',
        hint2: '1,450 − (1,100 + 540).',
        hint3: 'Find the distance from +50 down to −190.',
        explanation: '1) 1,600 − 1,550 = +50, a surplus. 2) 1,450 − 1,640 = −190, a deficit. 3) 50 − (−190) = 240: revenue fell by 150 and transfers rose by 90, with purchases unchanged.'
      }
    },
    {
      id: 'macrofis4-reading',
      type: 'text' as const,
      content: `
## What the Data Show

Back to the five-year table:

- **Revenue is procyclical.** It peaks at \\$2,000 billion in Year 2 and bottoms out at \\$1,700 billion in Year 4, because incomes and profits rise and fall with the cycle.
- **Transfers are countercyclical.** They are lowest at the peak (\\$580 billion) and highest at the trough (\\$760 billion).
- **The balance is the mirror image.** It swings from a \\$200 billion surplus to a \\$320 billion deficit, a change of \\$520 billion, without a single new law.

### Interpreting a deficit

A large deficit does **not** by itself prove that the government chose an expansionary policy. Before concluding anything, ask:

1. Did tax **rates** or spending **programs** change (discretionary policy)?
2. Or did revenue and transfers simply move with income (automatic stabilizers)?

In Years 3 and 4, the deficit grew because of the recession, not because of a policy decision.

> 🔑 **AP Connection:** "During a recession, what happens to the budget balance, and why?" Answer: it moves toward **deficit**, because income tax revenue falls and transfer payments such as unemployment benefits rise automatically.
`
    },
    {
      id: 'macrofis4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a recession, a government\'s deficit grows by \\$150 billion even though no new tax or spending laws were passed. What best explains the change?',
            options: [
              'The central bank financed new spending',
              'Government purchases rose with inflation',
              'Revenue fell and transfers rose automatically',
              'Tax rates rose under the progressive system'
            ],
            correctAnswer: 2,
            explanation: 'Falling incomes reduce tax revenue and raise transfer payments under existing law, widening the deficit. Tax rates do not rise in a recession; incomes drop into lower brackets instead.'
          },
          {
            question: 'Tax revenue is \\$900 billion, government purchases are \\$700 billion and transfer payments are \\$260 billion. What is the budget balance?',
            options: [
              'A surplus of \\$200 billion',
              'A deficit of \\$260 billion',
              'A surplus of \\$60 billion',
              'A deficit of \\$60 billion'
            ],
            correctAnswer: 3,
            explanation: 'Spending is \\$700 billion + \\$260 billion = \\$960 billion, and \\$900 billion − \\$960 billion = −\\$60 billion, a deficit. The \\$200 billion surplus leaves out transfers, which are government spending even though they are not purchases.'
          },
          {
            question: 'How do automatic stabilizers affect the size of the spending multiplier?',
            options: [
              'They make it smaller',
              'They make it larger',
              'They leave it unchanged',
              'They make it equal to one'
            ],
            correctAnswer: 0,
            explanation: 'When income changes, part of the change is absorbed by taxes and transfers, so disposable income and consumption change by less in each round. A smaller multiplier is exactly what dampens fluctuations.'
          }
        ]
      }
    }
  ]
}
