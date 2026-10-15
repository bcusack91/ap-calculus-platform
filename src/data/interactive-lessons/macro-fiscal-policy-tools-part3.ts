export const macroFiscalPolicyToolsPart3Data = {
  topicSlug: 'macro-fiscal-policy-tools',
  sections: [
    {
      id: 'macrofis3-tools-intro',
      type: 'text' as const,
      content: `
# 🛠️ Fiscal Policy Tools

**Part 3 of 7 — Crowding Out on the Loanable Funds Graph**

---

| Section |
|---------|
| 📖 Government Borrowing in the Loanable Funds Market |
| Worked Example: Measuring Crowding Out |
| What Gets Crowded Out |
| Long-Run Effects and When Crowding Out Is Small |

> 🔑 **Key Concept:** When the government borrows to finance a deficit, it competes with private borrowers for saving. In the loanable funds market, this **raises the real interest rate**, which reduces interest-sensitive **private investment**. That reduction is **crowding out**. In the long run, less private investment means less physical capital and **slower growth of potential output**.
`
    },
    {
      id: 'macrofis3-tools-graph',
      type: 'text' as const,
      content: `
## 📖 Government Borrowing in the Loanable Funds Market

The loanable funds graph has the **real interest rate** on the vertical axis and the **quantity of loanable funds** on the horizontal axis. Supply comes from saving; demand comes from borrowers who want to fund investment. (The full model, including what else shifts these curves, is taught in the Open Economy topic.)

### Two correct ways to show a deficit

| Representation | What shifts | Real interest rate | Equilibrium quantity of loanable funds |
|---|---|---|---|
| **Government as a borrower** (the standard AP version) | **Demand** for loanable funds shifts **right** | Rises | Rises |
| **Government as a dissaver** (used in some textbooks) | Public saving falls, so **supply** shifts **left** | Rises | Falls |

Both representations give the same key result: **the real interest rate rises and private investment falls.** They differ only in what happens to the total quantity of funds, because in the first, the total includes the government's own borrowing.

> 🔑 **AP Connection:** On the AP exam, show a deficit by shifting **demand for loanable funds to the right**, unless the question says the change is in saving. Label the new, higher real interest rate on the vertical axis.
`
    },
    {
      id: 'macrofis3-tools-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The government increases its budget deficit and borrows to cover it. Using the standard AP representation, what happens in the loanable funds market?',
            options: [
              'Demand shifts right and the real rate rises',
              'Supply shifts right and the real rate falls',
              'The real rate falls as demand shifts left',
              'Supply shifts left and the real rate falls'
            ],
            correctAnswer: 0,
            explanation: 'Government borrowing adds to the demand for loanable funds, which pushes the real interest rate up. A rightward supply shift would come from more saving, a leftward demand shift from less borrowing, and a leftward supply shift would raise the rate rather than lower it.'
          },
          {
            question: 'A textbook instead shows a larger deficit as lower public saving. How does its graph differ from the standard AP version?',
            options: [
              'The rate falls instead, since supply shifts left',
              'Supply shifts left, but the rate still rises',
              'Demand shifts right, but the rate stays fixed',
              'Neither curve shifts, so the rate is unchanged'
            ],
            correctAnswer: 1,
            explanation: 'Lower public saving reduces the supply of loanable funds, and a leftward supply shift raises the real interest rate. Both versions agree that the real rate rises; they differ in which curve moves.'
          },
          {
            question: 'Which interest rate is on the vertical axis of the loanable funds graph?',
            options: [
              'The nominal interest rate',
              'The discount rate',
              'The real interest rate',
              'The federal funds rate'
            ],
            correctAnswer: 2,
            explanation: 'Savers and borrowers care about purchasing power, so the loanable funds market is drawn with the real interest rate. The nominal rate belongs on the money market graph, and the discount and federal funds rates are specific policy-related rates.'
          }
        ]
      }
    },
    {
      id: 'macrofis3-tools-example',
      type: 'text' as const,
      content: `
## Worked Example: Measuring Crowding Out

A hypothetical economy's loanable funds market (billions of dollars):

| | Before the deficit | After \\$150 billion of government borrowing |
|---|---|---|
| Real interest rate | 4% | 5% |
| Total quantity of loanable funds | \\$800 | \\$900 |
| Borrowed by the government | \\$0 | \\$150 |
| Borrowed for **private investment** | \\$800 | \\$750 |
| Saving supplied | \\$800 | \\$900 |

**Step 1:** The government's \\$150 billion of borrowing shifts the demand for loanable funds right by \\$150 billion at every interest rate.

**Step 2:** At the old 4% rate, borrowers now want \\$950 billion but savers supply only \\$800 billion. The real interest rate rises until the market clears at **5%**.

**Step 3:** At 5%, saving rises to \\$900 billion (savers are rewarded more), and private borrowers cut back from \\$800 billion to \\$750 billion.

**Result:** Private investment falls by **\\$50 billion**. That is the amount crowded out. The government's \\$150 billion was funded by \\$100 billion of extra saving and \\$50 billion of displaced private investment.

Crowding out here is **partial**: private investment fell by \\$50 billion, not by the full \\$150 billion.
`
    },
    {
      id: 'macrofis3-tools-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

The government borrows \\$150 billion. The real interest rate rises from 4% to 5%, and private investment falls from \\$800 billion to \\$750 billion.

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The curve that shifted in the standard AP graph is the ___ for loanable funds.',
            options: ['supply', 'demand', 'money demand', 'money supply']
          },
          {
            label: 'The amount of private investment crowded out is ___.',
            options: ['\\$150 billion', '\\$100 billion', '\\$50 billion', '\\$900 billion']
          },
          {
            label: 'Along the supply curve, the quantity of saving ___.',
            options: ['increases', 'decreases', 'stays the same', 'becomes negative']
          },
          {
            label: 'This crowding out is ___.',
            options: ['complete', 'zero', 'negative', 'partial']
          }
        ],
        correctAnswers: ['demand', '\\$50 billion', 'increases', 'partial'],
        hint1: 'The government is acting as a borrower.',
        hint2: 'Compare private investment before and after.',
        hint3: 'Savers respond to a higher real interest rate.',
        explanation: 'Government borrowing shifts demand right, and private investment falls by \\$800 billion − \\$750 billion = \\$50 billion. Saving rises along the supply curve, so crowding out is partial rather than complete.'
      }
    },
    {
      id: 'macrofis3-tools-what',
      type: 'text' as const,
      content: `
## What Gets Crowded Out

A higher real interest rate discourages spending that is usually financed by borrowing.

| Interest-sensitive spending | Why a higher real rate reduces it |
|---|---|
| **Business investment** in factories, equipment and software | Fewer projects earn a return above the higher cost of borrowing |
| **Residential construction** (new homes) | Mortgage payments rise |
| **Purchases of consumer durables** such as cars | Loan payments rise |

### The effect on AD

Suppose the \\$150 billion deficit came from new government purchases.

- G rises by \\$150 billion → AD shifts right.
- Private investment falls by \\$50 billion → AD shifts back left part of the way.
- **Net:** AD still rises, but by less than it would without crowding out.

This is the AP chain to memorize: **deficit → government borrowing → demand for loanable funds ↑ → real interest rate ↑ → private investment ↓ → smaller net increase in AD.**

A higher real interest rate also attracts foreign financial capital, which affects the exchange rate; the Open Economy topic traces that link.
`
    },
    {
      id: 'macrofis3-tools-longrun',
      type: 'text' as const,
      content: `
## Long-Run Effects and When Crowding Out Is Small

### Why crowding out matters for growth

Private investment builds the economy's **physical capital stock**: machines, factories, computers. When deficits crowd out private investment year after year:

1. The capital stock grows more slowly.
2. Workers have less capital to work with, so productivity grows more slowly.
3. **Potential output (LRAS) grows more slowly**: the economy's long-run growth rate is lower than it would otherwise be.

The long-run cost is not that output falls, but that future output is **smaller than it could have been**. Whether the deficit pays for productive public investment changes this calculation (Part 5).

### When crowding out is small

| Condition | Why crowding out is smaller |
|---|---|
| **Deep recession with idle resources** | Private demand for loans is weak and saving is high, so extra government borrowing raises the real rate only a little |
| **Very responsive saving** | A small rise in the real rate draws out a lot of new saving |
| **Small deficit relative to the market** | The demand shift is small, so the rate barely moves |

Crowding out is **largest** when the economy is near full employment and private firms are already borrowing heavily.
`
    },
    {
      id: 'macrofis3-tools-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A government at full employment runs large deficits for a decade. Which long-run effect is most likely?',
            options: [
              'A permanent rise in real GDP above potential',
              'A permanent fall in the real interest rate',
              'Faster growth of the private capital stock',
              'Slower growth of potential output'
            ],
            correctAnswer: 3,
            explanation: 'Persistent borrowing keeps the real interest rate higher, reducing private investment and slowing capital accumulation, so potential output grows more slowly. Demand-side spending cannot keep output above potential, and the real rate rises rather than falls.'
          },
          {
            question: 'Why is crowding out usually smaller during a deep recession?',
            options: [
              'Firms want few loans, so the real rate barely rises',
              'Saving falls, so rates rise much more',
              'The government cannot borrow in a recession',
              'Banks are required to lend to the government'
            ],
            correctAnswer: 0,
            explanation: 'In a recession, private demand for loanable funds is weak, so extra government borrowing pushes the real interest rate up only slightly and displaces little investment. Governments can and do borrow in recessions, and no rule forces banks to lend to them.'
          },
          {
            question: 'The government borrows \\$80 billion. The real interest rate rises, saving increases by \\$60 billion, and private investment falls. By how much does private investment fall?',
            options: [
              '\\$80 billion',
              '\\$20 billion',
              '\\$60 billion',
              '\\$140 billion'
            ],
            correctAnswer: 1,
            explanation: 'The \\$80 billion of government borrowing is funded by \\$60 billion of new saving plus \\$20 billion of displaced private investment. \\$80 billion would mean complete crowding out, which happens only if saving does not respond at all.'
          }
        ]
      }
    }
  ]
}
