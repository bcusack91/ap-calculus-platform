export const macroFiscalPolicyPart5Data = {
  topicSlug: 'macro-fiscal-policy',
  sections: [
    {
      id: 'macrofis5-intro',
      type: 'text' as const,
      content: `
# 🏛️ Fiscal Policy

**Part 5 of 7 — Policy Mix, Nuance and Misconceptions**

---

| Section |
|---------|
| 📖 When Fiscal and Monetary Policy Act Together |
| Who Does What |
| The Balanced-Budget Rule Problem |
| Misconceptions to Avoid |

> 🔑 **Key Concept:** Fiscal policy (Congress and the president) and monetary policy (the Federal Reserve) often act at the same time. When two policies push a variable in the **same** direction, the result is certain; when they push in **opposite** directions, the net effect is **indeterminate** unless you know which push is bigger.
`
    },
    {
      id: 'macrofis5-mix',
      type: 'text' as const,
      content: `
## 📖 When Fiscal and Monetary Policy Act Together

Each policy moves two things you can track: **AD** (and with it real GDP and the price level) and **interest rates**.

| Policy | Effect on AD | Effect on interest rates |
|---|---|---|
| Expansionary fiscal | Right | **Up** (government borrowing raises demand for loanable funds; higher income raises money demand) |
| Contractionary fiscal | Left | Down |
| Expansionary monetary | Right | **Down** (the Fed lowers rates to raise investment) |
| Contractionary monetary | Left | Up |

### Combining them

| Fiscal | Monetary | AD and real GDP | Interest rates |
|---|---|---|---|
| Expansionary | Expansionary | **Rise** | Indeterminate |
| Contractionary | Contractionary | **Fall** | Indeterminate |
| Expansionary | Contractionary | Indeterminate | **Rise** |
| Contractionary | Expansionary | Indeterminate | **Fall** |

### Worked Example: Expansionary fiscal + contractionary monetary

Congress cuts taxes while the Fed raises interest rates to fight inflation.

- **Interest rates:** both policies push rates up, so rates **rise** for certain.
- **Private investment:** higher rates make borrowing costlier, so investment **falls**.
- **AD and real GDP:** the tax cut raises consumption, but the higher rates cut investment. Without knowing the sizes, the net effect is **indeterminate**.

> 🔑 **AP Connection:** When the free-response question asks about a variable with opposing forces, the right answer is "indeterminate," followed by **both** forces: "the tax cut increases AD, but the higher interest rate decreases investment."
`
    },
    {
      id: 'macrofis5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The government increases its purchases while the central bank sells bonds to raise interest rates. What is the effect on interest rates and on real GDP?',
            options: [
              'Rates rise; real GDP is indeterminate',
              'Both rates and real GDP rise',
              'Rates are indeterminate; real GDP rises',
              'Rates fall; real GDP is indeterminate'
            ],
            correctAnswer: 0,
            explanation: 'Both policies push interest rates up, so that result is certain. Higher purchases raise AD, but higher rates reduce investment, so the net change in real GDP depends on the sizes of the two effects.'
          },
          {
            question: 'Both fiscal and monetary policy turn expansionary at the same time. Which result is certain in the short run?',
            options: [
              'Interest rates fall',
              'Real GDP rises',
              'Interest rates rise',
              'The price level falls'
            ],
            correctAnswer: 1,
            explanation: 'Both policies shift AD right, so real GDP rises for certain. Fiscal expansion pushes interest rates up while monetary expansion pushes them down, so the interest rate is indeterminate, and the price level rises rather than falls.'
          },
          {
            question: 'A government raises taxes while the central bank lowers interest rates. What happens to private investment?',
            options: [
              'It falls because taxes are higher',
              'It is indeterminate in direction',
              'It rises because borrowing has become cheaper',
              'It stays the same as AD is fixed'
            ],
            correctAnswer: 2,
            explanation: 'Contractionary fiscal policy reduces borrowing pressure and expansionary monetary policy cuts rates, so interest rates fall and interest-sensitive investment rises. The tax increase works mainly through consumption, and AD itself is the indeterminate variable here.'
          }
        ]
      }
    },
    {
      id: 'macrofis5-actors',
      type: 'text' as const,
      content: `
## Who Does What

| | Fiscal policy | Monetary policy |
|---|---|---|
| **Decision makers** | Congress and the president | The Federal Reserve |
| **Tools** | Government purchases, taxes, transfer payments | Interest rate on reserve balances (ample reserves); open-market operations, discount rate, reserve requirement (limited reserves) |
| **First link to AD** | G directly; taxes and transfers through disposable income | Interest rates → investment and interest-sensitive consumption |
| **Typical delay** | Long decision lag: a bill must pass | Short decision lag: the Fed can act at any meeting |

The monetary column is a quick reference; the Monetary Policy topic teaches those tools.

### Three distinctions that cost points

1. **Transfers are not government purchases.** Social Security or unemployment benefits are not counted in G when measuring GDP, because nothing is produced in exchange. They affect AD only through consumption.
2. **A deficit is not the debt.** The deficit is the shortfall in **one year** (a flow). The national debt is the **total** of all past deficits minus surpluses (a stock). A smaller deficit still adds to the debt.
3. **Crowding out reduces, but rarely cancels, the effect.** Government borrowing can raise the real interest rate and reduce private investment, shrinking the AD shift (Fiscal Policy Tools, Part 3, works through the loanable funds graph).
`
    },
    {
      id: 'macrofis5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fiscal policy is set by ___.',
            options: ['the Federal Reserve', 'the Treasury alone', 'Congress and the president', 'the Supreme Court']
          },
          {
            label: 'Unemployment benefits ___ in GDP.',
            options: ['count as government purchases', 'count as consumption', 'are not counted', 'count as investment']
          },
          {
            label: 'The total of all past deficits minus surpluses is the ___.',
            options: ['national debt', 'budget deficit', 'trade deficit', 'money supply']
          },
          {
            label: 'Expansionary fiscal policy combined with contractionary monetary policy makes interest rates ___.',
            options: ['fall', 'rise', 'indeterminate', 'unchanged']
          }
        ],
        correctAnswers: ['Congress and the president', 'are not counted', 'national debt', 'rise'],
        hint1: 'The branch that writes budget laws, plus the official who signs them.',
        hint2: 'Ask what good or service the government receives in exchange.',
        hint3: 'One is a yearly flow; the other is an accumulated stock.',
        explanation: 'Congress and the president set fiscal policy. Transfers are not counted in GDP because nothing is produced in exchange. Accumulated deficits minus surpluses form the national debt, and both policies in the mix push interest rates up.'
      }
    },
    {
      id: 'macrofis5-balanced',
      type: 'text' as const,
      content: `
## The Balanced-Budget Rule Problem

Suppose a law required the government to balance its budget **every year**. Many U.S. states operate under balanced-budget requirements, so the question is a practical one.

### Worked Example: A recession under a strict balanced-budget rule

1. A recession cuts income. Tax revenue falls by \\$80 billion and transfers rise by \\$20 billion, so a balanced budget turns into a **\\$100 billion deficit**.
2. To obey the rule, the government must **raise taxes or cut spending** by \\$100 billion.
3. That is contractionary fiscal policy **in the middle of a recession**: AD shifts further left, output falls more and unemployment rises more.

In a boom, the rule works the other way: rising revenue creates a surplus, and the government would have to **cut taxes or raise spending**, adding demand to an overheating economy.

**Conclusion:** A strict annual balanced-budget rule is **pro-cyclical**. It cancels the automatic stabilizers and pushes with the business cycle instead of against it.

> 🔑 **AP Connection:** If a question asks for the effect of "requiring a balanced budget during a recession," the answer is that the required tax increases or spending cuts **reduce AD** and **deepen the recession**.
`
    },
    {
      id: 'macrofis5-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions to Avoid

| Misconception | Correction |
|---|---|
| "The Fed runs fiscal policy." | Fiscal policy belongs to Congress and the president; the Fed runs monetary policy. |
| "A tax cut increases government spending." | A tax cut changes revenue, not G. It raises AD through consumption (or investment for business taxes). |
| "Expansionary fiscal policy always lowers interest rates." | It tends to **raise** them, because the government borrows more and money demand rises with income. |
| "Automatic stabilizers need Congress to act each time." | They are built into existing law and respond on their own. |
| "Fiscal stimulus permanently raises output." | Demand-side stimulus at full employment raises output only in the short run; in the long run only the price level is higher. |
| "If the deficit shrinks, the debt shrinks." | The debt falls only when the budget is in **surplus**. |
`
    },
    {
      id: 'macrofis5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A state must balance its budget each year. A recession cuts its tax revenue. What does obeying the rule do to the recession?',
            options: [
              'It shortens the recession, since deficits fall',
              'It has no effect, since the budget stays balanced',
              'It ends the recession through lower interest rates',
              'It deepens the recession'
            ],
            correctAnswer: 3,
            explanation: 'Balancing the budget after revenue falls requires tax increases or spending cuts, which shift AD further left. Keeping the budget balanced is the cause of the harm, not a neutral outcome.'
          },
          {
            question: 'The deficit falls from \\$300 billion to \\$200 billion. What happens to the national debt that year?',
            options: [
              'It rises by \\$200 billion',
              'It falls by \\$100 billion',
              'It falls by \\$200 billion',
              'It rises by \\$100 billion'
            ],
            correctAnswer: 0,
            explanation: 'Any deficit is new borrowing, so this year\'s \\$200 billion deficit adds \\$200 billion to the debt. A shrinking deficit slows the growth of the debt, but only a surplus reduces it.'
          },
          {
            question: 'Which statement about transfer payments is correct?',
            options: [
              'They are counted in GDP as government purchases',
              'They are not counted in GDP but can raise consumption',
              'They are counted in GDP as household consumption',
              'They are not counted in GDP and cannot affect AD'
            ],
            correctAnswer: 1,
            explanation: 'Transfers buy no newly produced good or service, so they are excluded from GDP. They still raise recipients\' disposable income, so consumption, which is counted in GDP, rises.'
          }
        ]
      }
    }
  ]
}
