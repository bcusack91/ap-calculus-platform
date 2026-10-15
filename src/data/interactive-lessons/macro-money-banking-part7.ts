export const macroMoneyBankingPart7Data = {
  topicSlug: 'macro-money-banking',
  sections: [
    {
      id: 'macromon7-intro',
      type: 'text' as const,
      content: `
# 💰 Money & Banking

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture |
| Formula and Rule Summary |
| Connections to the Rest of the Course |
| Mixed Review |

> 🔑 **Key Concept:** Money is whatever the public accepts as payment; most of it today is **bank deposits**, and banks create those deposits when they lend. Reserves limit lending in the textbook model, and the Federal Reserve influences reserves and interest rates. Bonds connect it all: their prices move opposite to interest rates, and the Fed buys and sells them.
`
    },
    {
      id: 'macromon7-big',
      type: 'text' as const,
      content: `
## 📖 The Big Picture

| Part | Main idea |
|---|---|
| 1 | Money's three functions; M1 and M2; the money multiplier |
| 2 | Money, bonds and stocks trade off liquidity, return and risk; bond prices and interest rates move in opposite directions |
| 3 | Fiat money; what is in M1, M2 or neither; how transfers between accounts affect each measure |
| 4 | T-accounts; required and excess reserves; one bank lends only its excess reserves |
| 5 | The banking system multiplies excess reserves; cash deposits vs. Fed bond purchases; limited vs. ample reserves |
| 6 | Exam practice with T-accounts and Fed transactions |

### One story that uses every part

1. A family deposits \\$1,000 of cash. M1 is unchanged: currency fell and checking deposits rose (Part 3).
2. The bank's reserves and deposits each rise \\$1,000; with a 10% requirement, its excess reserves rise \\$900 (Part 4).
3. The bank lends \\$900. Across the banking system, loans and the money supply can rise by up to \\$900 × 10 = \\$9,000, and deposits by up to \\$10,000 (Part 5).
4. If interest rates then rise, the market value of bonds that banks and households already hold falls (Part 2).
`
    },
    {
      id: 'macromon7-rules',
      type: 'text' as const,
      content: `
## Formula and Rule Summary

| Item | Rule |
|---|---|
| Money multiplier | 1 ÷ required reserve ratio |
| Required reserves | Required reserve ratio × demand deposits |
| Excess reserves | Total reserves − required reserves |
| One bank's maximum loan | Its excess reserves |
| System's maximum change in loans | Initial excess reserves × multiplier |
| Cash deposit: maximum change in money supply | Change in loans only (the cash was already money) |
| Fed buys bonds from a bank: maximum change in money supply | Purchase × multiplier |
| Fed buys bonds from the public: maximum change in money supply | Purchase × multiplier (deposit of \\$X is new money, plus loans) |
| Bond prices and interest rates | Move in opposite directions |
| Opportunity cost of holding money | The nominal interest rate |
| Fed's main tool today (ample reserves) | Interest rate on reserve balances; the federal funds rate is the target |
| Fed's tools in the limited-reserves model | Open-market operations, discount rate, reserve requirement |

> ⚠️ **Most-missed distinction:** For a cash deposit of \\$1,000 at a 10% ratio, the **change in deposits** can reach \\$10,000 but the **change in the money supply** is at most \\$9,000.
`
    },
    {
      id: 'macromon7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The required reserve ratio is 10%. Which event can increase the money supply by the most?',
            options: [
              'A person deposits \\$1,000 of cash into checking',
              'A person moves \\$1,000 from checking into a CD',
              'The Fed buys \\$1,000 of bonds from a bank',
              'A bank sells \\$1,000 of bonds to the public'
            ],
            correctAnswer: 2,
            explanation: 'A Fed purchase from a bank adds \\$1,000 of excess reserves, supporting up to \\$10,000 of new money. A cash deposit supports at most \\$9,000, moving funds into a CD lowers M1, and a bank selling bonds to the public drains deposits.'
          },
          {
            question: 'An investor holds a bond with fixed payments. Which event would raise the bond\'s market price?',
            options: [
              'A rise in market interest rates',
              'A rise in the issuer\'s default risk',
              'A rise in the expected inflation rate',
              'A fall in market interest rates'
            ],
            correctAnswer: 3,
            explanation: 'When market rates fall, an existing bond\'s fixed payments become more attractive, so buyers bid its price up. Higher interest rates, higher default risk and higher expected inflation all make the bond less attractive and lower its price.'
          },
          {
            question: 'Which item would be counted in M1?',
            options: [
              'Coins kept in a jar',
              'Cash in a bank\'s vault',
              'A one-year \\$5,000 CD',
              'An unused credit line'
            ],
            correctAnswer: 0,
            explanation: 'Coins held by the public are currency, the core of M1. Vault cash is bank reserves, a CD is in M2 only, and a credit line is a way to borrow, not money.'
          }
        ]
      }
    },
    {
      id: 'macromon7-connections',
      type: 'text' as const,
      content: `
## Connections to the Rest of the Course

| Topic | How money and banking connect |
|---|---|
| **Monetary policy** | The Fed's tools change reserves or the rate paid on them, which moves the federal funds rate and other interest rates |
| **Money market** | Money demand comes from the opportunity cost of holding money (the nominal interest rate); the money supply depends on the Fed and bank lending |
| **AD-AS** | Lower interest rates raise investment and interest-sensitive consumption, shifting AD right |
| **Inflation** | Money growth far beyond output growth erodes money's value as a store of value |
| **Fiscal policy** | Government deficits are financed by selling bonds, which affects bond prices and interest rates |
| **Real interest rates** | Lenders and bondholders lose when inflation is higher than expected |

> 🔑 **AP Connection:** A typical multi-part free-response question moves from a T-account, to the money multiplier, to the Fed's action, to interest rates, to AD. Practicing the chain in order makes each part easier.
`
    },
    {
      id: 'macromon7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Banks hold large excess reserves and households keep more cash during a recession. How does this affect the actual money multiplier compared with 1 ÷ required reserve ratio?',
            options: [
              'It makes the actual multiplier larger',
              'It makes the actual multiplier smaller',
              'It leaves the actual multiplier unchanged',
              'It makes the actual multiplier negative'
            ],
            correctAnswer: 1,
            explanation: 'Idle reserves and cash held outside banks are leakages that shrink each round of lending, so the actual multiplier falls below the simple formula. It stays positive, because lending still creates some deposits.'
          },
          {
            question: 'Under the ample-reserves framework, the Fed wants to slow an overheating economy. Which action fits?',
            options: [
              'Lower the interest rate on reserve balances',
              'Buy government bonds from commercial banks',
              'Raise the interest rate on reserve balances',
              'Lower the target range for the federal funds rate'
            ],
            correctAnswer: 2,
            explanation: 'Raising IORB lifts the federal funds rate and other interest rates, which reduces borrowing and aggregate demand. Lowering IORB, buying bonds or lowering the target range would all stimulate the economy instead.'
          }
        ]
      }
    },
    {
      id: 'macromon7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On a bank\'s balance sheet, loans are ___.',
            options: ['assets', 'liabilities', 'owners\' equity', 'reserves']
          },
          {
            label: 'A single bank can lend an amount equal to its ___.',
            options: ['excess reserves', 'required reserves', 'total deposits', 'owners\' equity']
          },
          {
            label: 'When interest rates fall, the prices of existing bonds ___.',
            options: ['rise', 'fall', 'stay the same', 'drop to zero']
          },
          {
            label: 'In the ample-reserves framework, the federal funds rate is the Fed\'s ___.',
            options: ['target', 'main tool', 'reserve requirement', 'discount rate']
          }
        ],
        correctAnswers: ['assets', 'excess reserves', 'rise', 'target'],
        hint1: 'Borrowers owe the bank; the bank owns the right to repayment.',
        hint2: 'Loaned money leaves the bank when the borrower spends it.',
        hint3: 'Fixed payments become more attractive when new bonds pay less.',
        explanation: 'Loans are bank assets, and one bank can lend only its excess reserves. Falling interest rates raise the prices of existing bonds. The federal funds rate is the Fed\'s target; the interest rate on reserve balances is the main tool that steers it.'
      }
    },
    {
      id: 'macromon7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The required reserve ratio is 25%. A business deposits \\$4,000 of cash that it had kept in a safe.

**1)** By how much do the bank's excess reserves rise, in dollars?

**2)** What is the maximum change in demand deposits in the banking system, in dollars?

**3)** What is the maximum change in the money supply, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3000', '16000', '12000'],
        hint1: 'The bank must keep 25% of \\$4,000 as required reserves.',
        hint2: 'The multiplier is 1 ÷ 0.25 = 4; apply it to the initial deposit.',
        hint3: 'The cash was already money, so only the new loans count.',
        explanation: '1) \\$4,000 − \\$1,000 = \\$3,000. 2) \\$4,000 × 4 = \\$16,000. 3) New loans = \\$3,000 × 4 = \\$12,000, which is the maximum change in the money supply.'
      }
    }
  ]
}
