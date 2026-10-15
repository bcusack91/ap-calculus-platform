export const macroFiscalPolicyToolsPart7Data = {
  topicSlug: 'macro-fiscal-policy-tools',
  sections: [
    {
      id: 'macrofis7-tools-intro',
      type: 'text' as const,
      content: `
# 🛠️ Fiscal Policy Tools

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture |
| Formula and Rule Summary |
| Short Run vs. Long Run |
| Mixed Review |

> 🔑 **Key Concept:** Every fiscal tool changes the **budget balance**, and every deficit adds to the **national debt** and must be financed by **borrowing**. That borrowing raises the real interest rate and can **crowd out** private investment, slowing long-run growth, unless the spending itself builds capacity through public capital, human capital or technology.
`
    },
    {
      id: 'macrofis7-tools-big',
      type: 'text' as const,
      content: `
## 📖 The Big Picture

| Part | Main idea |
|---|---|
| 1 | G works on AD directly; taxes and transfers work through disposable income; supply-side policies shift AD now and LRAS later |
| 2 | Budget balance, deficit vs. debt, financing with Treasury securities, interest on the debt |
| 3 | Government borrowing shifts demand for loanable funds right → real rate ↑ → private investment ↓ |
| 4 | Calculating the new real rate and crowding out from schedules; the debt-to-GDP ratio |
| 5 | Public investment and investment incentives raise potential output; crowding out works against them |
| 6 | Exam practice: the deficit-to-growth chain and budget calculations |

### One story that uses every part

1. Congress raises spending on bridges by \\$100 billion and does not raise taxes (Part 1).
2. The deficit grows by \\$100 billion and the Treasury sells \\$100 billion more in securities, adding \\$100 billion to the debt (Part 2).
3. Demand for loanable funds shifts right, the real interest rate rises, and some private investment is crowded out (Parts 3 and 4).
4. In the short run, AD rises by less than it would without crowding out. In the long run, the new bridges add public capital while the lost private investment subtracts private capital; the net effect on potential output depends on which is larger (Part 5).
`
    },
    {
      id: 'macrofis7-tools-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sequence correctly describes crowding out?',
            options: [
              'Borrowing ↑ → real rate ↑ → private investment ↓',
              'Borrowing ↑ → money supply ↑ → real rate ↓',
              'Borrowing ↑ → saving ↓ → private investment ↑',
              'Taxes ↑ → real rate ↑ → private investment ↓'
            ],
            correctAnswer: 0,
            explanation: 'Government borrowing raises the demand for loanable funds, pushing the real interest rate up and reducing private investment. Treasury borrowing does not create money, and a tax increase reduces borrowing rather than raising the rate.'
          },
          {
            question: 'Which policy is most likely to raise both AD in the short run and potential output in the long run?',
            options: [
              'A one-time rebate check to every household',
              'Spending on worker training programs',
              'An increase in unemployment benefit checks',
              'A cut in spending on public universities'
            ],
            correctAnswer: 1,
            explanation: 'Training spending is a government purchase that raises AD now, and the skills it builds raise productivity later. A rebate and higher benefits raise AD only, and cutting university spending reduces both.'
          },
          {
            question: 'Debt is \\$6,000 billion and nominal GDP is \\$15,000 billion. What is the debt-to-GDP ratio?',
            options: [
              '25%',
              '60%',
              '40%',
              '250%'
            ],
            correctAnswer: 2,
            explanation: '\\$6,000 billion ÷ \\$15,000 billion = 0.40, or 40%. Dividing GDP by debt instead gives 250%, the ratio turned upside down.'
          }
        ]
      }
    },
    {
      id: 'macrofis7-tools-rules',
      type: 'text' as const,
      content: `
## Formula and Rule Summary

| Item | Rule |
|---|---|
| Budget balance | Tax revenue − (purchases + transfers + interest) |
| Debt at end of year | Debt at start + deficit (or − surplus) |
| Interest payments | Average interest rate × debt |
| Debt-to-GDP ratio | (Debt ÷ nominal GDP) × 100 |
| Ratio falls when… | Nominal GDP grows by a larger percentage than the debt |
| Financing a deficit | The Treasury sells securities (borrowing, not printing money) |
| Loanable funds graph | Real interest rate (vertical) vs. quantity of loanable funds (horizontal) |
| Deficit on the graph | Demand for loanable funds shifts right (standard AP) or supply shifts left (lower public saving) |
| Crowding out | Fall in private investment caused by the higher real interest rate |
| Crowding out is small when… | The economy is in a deep recession with idle resources |
| Supply-side fiscal policy | AD right in the short run; LRAS right in the long run |

> ⚠️ **Most-missed distinction:** Crowding out happens in the **loanable funds** market and is measured by the fall in **private investment**, not by the size of the deficit.
`
    },
    {
      id: 'macrofis7-tools-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The national debt is a ___, while the deficit is a flow.',
            options: ['flow', 'stock', 'rate', 'ratio']
          },
          {
            label: 'A government deficit makes the real interest rate ___.',
            options: ['fall', 'stay the same', 'rise', 'turn negative']
          },
          {
            label: 'Crowding out reduces private ___.',
            options: ['investment', 'saving', 'transfers', 'tax payments']
          },
          {
            label: 'Funding R&D can shift LRAS right by improving ___.',
            options: ['the price level', 'technology', 'interest rates', 'the money supply']
          }
        ],
        correctAnswers: ['stock', 'rise', 'investment', 'technology'],
        hint1: 'It is measured at a point in time.',
        hint2: 'Government borrowing adds to the demand for loanable funds.',
        hint3: 'It is the interest-sensitive spending on new capital.',
        explanation: 'The debt is a stock and the deficit a flow. Government borrowing raises the real interest rate, which reduces private investment. Research and development improves technology, which raises potential output.'
      }
    },
    {
      id: 'macrofis7-tools-runs',
      type: 'text' as const,
      content: `
## Short Run vs. Long Run

| Policy | Short run | Long run |
|---|---|---|
| Deficit-financed purchases that build nothing (e.g., more office supplies) | AD right; real rate ↑; some investment crowded out | Lower private capital → slower growth of potential output; price level higher if started at Yf |
| Deficit-financed public investment (e.g., broadband) | AD right; real rate ↑; some investment crowded out | Public capital ↑ vs. private capital ↓; potential output grows faster if the projects pay off |
| Tax incentive for private investment | I ↑ → AD right | Private capital ↑ → LRAS right (minus any crowding out from the lost revenue) |
| Surplus used to pay down debt | AD left (taxes up or spending down) | Less government borrowing → lower real rate → more private investment |
`
    },
    {
      id: 'macrofis7-tools-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A government shifts from deficits to surpluses and uses the surpluses to pay down debt. What happens in the loanable funds market?',
            options: [
              'The real rate rises, so private investment falls',
              'The real rate falls, so private saving rises',
              'The real rate rises, so private saving rises',
              'The real rate falls, so private investment rises'
            ],
            correctAnswer: 3,
            explanation: 'Less government borrowing reduces the demand for loanable funds (or raises public saving), lowering the real interest rate and encouraging private investment. A lower real rate reduces, rather than raises, the quantity of private saving.'
          },
          {
            question: 'Deficits are equal in two economies. In which is crowding out likely to be smaller?',
            options: [
              'One with many idle resources',
              'One operating at full capacity',
              'One with high private loan demand',
              'One with saving that barely responds'
            ],
            correctAnswer: 0,
            explanation: 'Idle resources mean weak private demand for funds, so the government\'s borrowing pushes the real rate up only slightly. Full capacity, strong loan demand and unresponsive saving all make the rate rise more and displace more investment.'
          },
          {
            question: 'The deficit shrinks for three years in a row but stays above zero. What happens to the national debt?',
            options: [
              'It falls each year',
              'It keeps rising',
              'It stays the same',
              'It falls to zero'
            ],
            correctAnswer: 1,
            explanation: 'Every deficit is new borrowing that adds to the debt, so the debt rises each year, only more slowly. The debt falls only in years with a surplus.'
          }
        ]
      }
    },
    {
      id: 'macrofis7-tools-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

A government begins the year with debt of \\$8,000 billion at an average interest rate of 2.5%. This year, tax revenue is \\$2,300 billion and government purchases plus transfers are \\$2,350 billion. Interest on the debt is also part of spending.

**1)** What are this year's interest payments, in billions?

**2)** What is the budget balance, in billions? (Use a minus sign for a deficit.)

**3)** What is the debt at the end of the year, in billions?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['200', '-250', '8250'],
        hint1: '0.025 × 8,000.',
        hint2: 'Total spending = 2,350 + interest.',
        hint3: 'A deficit is added to the starting debt.',
        explanation: '1) 0.025 × 8,000 = 200. 2) 2,300 − (2,350 + 200) = −250, a deficit. 3) 8,000 + 250 = 8,250.'
      }
    }
  ]
}
