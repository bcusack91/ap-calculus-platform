export const macroMoneyBankingPart3Data = {
  topicSlug: 'macro-money-banking',
  sections: [
    {
      id: 'macromon3-intro',
      type: 'text' as const,
      content: `
# 💰 Money & Banking

**Part 3 of 7 — What Counts as Money**

---

| Section |
|---------|
| 📖 Commodity Money and Fiat Money |
| The Liquidity Spectrum |
| Classifying Items: M1, M2 or Neither |
| Moving Money Between Accounts |

> 🔑 **Key Concept:** Money is any asset that people generally accept as payment. Modern money is **fiat money**, valuable because people accept it and the government declares it legal tender. The money supply counts only money held by the **public**, so classifying an item means asking two questions: is it a means of payment (or very close to one), and who holds it?
`
    },
    {
      id: 'macromon3-fiat',
      type: 'text' as const,
      content: `
## 📖 Commodity Money and Fiat Money

| Type | What gives it value | Examples |
|---|---|---|
| **Commodity money** | The item has value as a good in its own right | Gold and silver coins, salt, cigarettes in prisoner-of-war camps |
| **Fiat money** | Government decree (legal tender) and general acceptance; it has almost no value as a good | U.S. dollar bills and coins today, euros, yen |

U.S. currency is not backed by gold. A \\$20 bill is worth \\$20 because:

1. The government declares it **legal tender** for paying debts and taxes.
2. People **expect others to accept it**, so they accept it themselves.
3. Its supply is **limited**, so it stays scarce relative to what people want to buy.

### Why limited supply matters

If the quantity of money grows much faster than the output of goods and services, each unit buys less: that is **inflation**. Fiat money keeps its value only if the central bank keeps its growth in check.

### The three functions, applied

| Situation | Function of money |
|---|---|
| A café lists a latte at \\$5.25 | **Unit of account**: a common measure of value |
| You pay for the latte with a \\$10 bill | **Medium of exchange**: accepted in trade |
| You keep \\$200 in a checking account for next month | **Store of value**: holds purchasing power over time |

> 🔑 **AP Connection:** During high inflation, money does a poor job as a **store of value**, because what it can buy shrinks over time. That is a common exam link between money and inflation.
`
    },
    {
      id: 'macromon3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best explains why a U.S. dollar bill has value?',
            options: [
              'The Treasury will exchange it for a fixed amount of gold',
              'The paper and ink it is printed with are expensive',
              'It is legal tender that people generally accept',
              'Each bill is backed by an equal amount of bank reserves'
            ],
            correctAnswer: 2,
            explanation: 'The dollar is fiat money: it has value because the government declares it legal tender and people accept it in trade. It is not convertible into gold, its material is nearly worthless, and it is not backed by reserves.'
          },
          {
            question: 'A store prices every item in dollars so that customers can compare costs. Which function of money does this illustrate?',
            options: [
              'Medium of exchange',
              'Store of value',
              'Standard of deferred payment',
              'Unit of account'
            ],
            correctAnswer: 3,
            explanation: 'Using dollars as a common yardstick for prices is the unit-of-account function. Paying with dollars would be the medium of exchange, and saving them would be the store of value.'
          }
        ]
      }
    },
    {
      id: 'macromon3-spectrum',
      type: 'text' as const,
      content: `
## The Liquidity Spectrum

Liquidity is how easily an asset can be spent without losing value. The money supply measures draw lines along this spectrum.

| Most liquid | → | → | → | Least liquid |
|---|---|---|---|---|
| Currency held by the public | Checking (demand) deposits | Savings deposits | Small CDs and money market funds | Stocks, bonds, houses |

### The current definitions

| Measure | What it includes |
|---|---|
| **M1** | Currency held by the public + checkable (demand) deposits + other liquid deposits, which since May 2020 include savings deposits |
| **M2** | M1 + small time deposits (CDs under \\$100,000) + retail money market funds |

Every item in M1 is also in M2. M2 adds "near-monies" that cannot be spent directly but can be turned into spendable money quickly.

> ⚠️ **Definition change:** Before May 2020, savings deposits were counted in M2 but not M1. Some textbooks still use the older definition. Exam questions are on solid ground with items classified the same way under both versions: currency and checking deposits in M1; CDs and money market funds in M2 only.

### Currency held by whom?

Only currency **held by the public** counts. Cash sitting in a bank's vault is part of the bank's **reserves**, not the money supply. When you deposit \\$100 of cash, currency held by the public falls by \\$100 and checking deposits rise by \\$100, so M1 does not change.
`
    },
    {
      id: 'macromon3-classify',
      type: 'text' as const,
      content: `
## Classifying Items: M1, M2 or Neither

| Item | M1? | M2? | Why |
|---|---|---|---|
| \\$40 in your wallet | Yes | Yes | Currency held by the public |
| \\$800 in a checking account | Yes | Yes | Checkable deposit |
| A \\$5,000 one-year CD | No | Yes | Small time deposit |
| Retail money market fund shares | No | Yes | Near-money |
| \\$10,000 of cash in a bank's vault | No | No | Bank reserves, not held by the public |
| A credit card with a \\$3,000 limit | No | No | A way to borrow; paying with it creates a loan |
| A debit card | No | No | The card is not money; the checking balance it draws on is in M1 |
| Shares of stock | No | No | A financial asset, but not a means of payment |
| A government bond | No | No | A financial asset, but not a means of payment |
| Gold bars held as an investment | No | No | Not used as a means of payment today |

### Two traps

1. **Credit cards are not money.** When you pay by credit card, the card company pays the store and you owe the card company. Money changes hands later, when you pay your bill.
2. **Wealth is not money.** A person with \\$2 million in stocks and a house, but \\$50 in a checking account, holds only \\$50 of money.
`
    },
    {
      id: 'macromon3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which item is included in M2 but not in M1?',
            options: [
              'A \\$5,000 certificate of deposit',
              'A \\$500 balance in a checking account',
              'A \\$50 bill held in a wallet',
              'A \\$5,000 stock portfolio'
            ],
            correctAnswer: 0,
            explanation: 'Small time deposits such as CDs are near-monies, counted in M2 only. Checking balances and currency are in both M1 and M2, and stocks are not in either.'
          },
          {
            question: 'A bank holds \\$2 million in cash in its vault. How much of this cash is counted in M1?',
            options: [
              'All \\$2 million',
              'None of it',
              'Only the required reserve share',
              'Only the part above required reserves'
            ],
            correctAnswer: 1,
            explanation: 'Vault cash is part of the bank\'s reserves, and the money supply counts only currency held by the public. It becomes part of M1 again when a customer withdraws it.'
          },
          {
            question: 'Why is a credit card not counted as part of the money supply?',
            options: [
              'It can be used only for purchases made online',
              'Its balance is already counted as part of M2',
              'Paying with it creates a loan to be repaid later',
              'The Fed sets a limit on how much it can be used'
            ],
            correctAnswer: 2,
            explanation: 'A credit card purchase is a short-term loan from the card issuer; money is used only when the bill is paid. Card balances are not counted in M1 or M2, and the Fed does not set spending limits on cards.'
          }
        ]
      }
    },
    {
      id: 'macromon3-transfers',
      type: 'text' as const,
      content: `
## Moving Money Between Accounts

When money moves from one form to another, ask which measure each form belongs to.

| Transaction | Change in M1 | Change in M2 |
|---|---|---|
| Deposit \\$300 of cash into checking | 0 (currency −300, deposits +300) | 0 |
| Withdraw \\$200 of cash from checking | 0 (deposits −200, currency +200) | 0 |
| Move \\$1,000 from checking into a one-year CD | **−1,000** | 0 |
| Cash in a \\$2,500 CD into checking | **+2,500** | 0 |
| Pay a friend \\$50 from your checking account | 0 (your deposits −50, theirs +50) | 0 |
| Sell \\$4,000 of stock to another person, who pays from checking | 0 (deposits move between people) | 0 |

### The rule

- Moves **within** M1 (cash ↔ checking) leave M1 and M2 unchanged.
- Moves between an **M1 item** and an **M2-only item** change M1 but leave M2 unchanged, because M2 includes M1.
- Neither measure changes when money simply moves from one person to another.

The money supply as a whole grows when banks **make new loans** and shrinks when loans are repaid. That process is the subject of Parts 4 and 5.
`
    },
    {
      id: 'macromon3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the result that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Moving \\$600 from a checking account into a CD makes M1 ___.',
            options: ['decrease', 'increase', 'stay the same', 'double']
          },
          {
            label: 'Moving \\$600 from a checking account into a CD makes M2 ___.',
            options: ['stay the same', 'decrease', 'increase', 'double']
          },
          {
            label: 'Depositing \\$600 of cash into checking makes M1 ___.',
            options: ['stay the same', 'decrease', 'increase', 'double']
          },
          {
            label: 'Money that has value mainly because the government declares it legal tender is ___ money.',
            options: ['fiat', 'commodity', 'near', 'reserve']
          }
        ],
        correctAnswers: ['decrease', 'stay the same', 'stay the same', 'fiat'],
        hint1: 'Checking deposits are in M1; CDs are in M2 but not M1.',
        hint2: 'M2 already includes everything in M1.',
        hint3: 'Currency and checking deposits are both in M1.',
        explanation: 'Moving checking deposits into a CD takes \\$600 out of M1 but keeps it in M2. Depositing cash only swaps one M1 item for another. Money valued because of government decree and acceptance is fiat money.'
      }
    }
  ]
}
