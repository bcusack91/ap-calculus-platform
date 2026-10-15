export const macroMoneyBankingPart4Data = {
  topicSlug: 'macro-money-banking',
  sections: [
    {
      id: 'macromon4-intro',
      type: 'text' as const,
      content: `
# 💰 Money & Banking

**Part 4 of 7 — Bank Balance Sheets (T-Accounts)**

---

| Section |
|---------|
| 📖 Reading a Bank's Balance Sheet |
| Required and Excess Reserves |
| Worked Example: Four Transactions at First Bank |
| How Much Can One Bank Lend? |

> 🔑 **Key Concept:** A bank's balance sheet, drawn as a **T-account**, lists what the bank owns (**assets**) on the left and what it owes (**liabilities**) plus **owners' equity** on the right. The two sides always balance. A single bank can safely lend out its **excess reserves**: reserves beyond what the reserve requirement makes it hold.
`
    },
    {
      id: 'macromon4-tacct',
      type: 'text' as const,
      content: `
## 📖 Reading a Bank's Balance Sheet

| Assets (what the bank owns) | Liabilities and owners' equity (what the bank owes) |
|---|---|
| **Reserves**: cash in the vault plus the bank's deposits at the Federal Reserve | **Demand deposits**: customers' checking balances, which customers can withdraw at any time |
| **Loans**: money the bank has lent, which borrowers must repay | **Borrowing**, such as loans from the Federal Reserve |
| **Securities**: bonds the bank owns, such as government bonds | **Owners' equity** (bank capital): assets minus liabilities |

**Assets = Liabilities + Owners' equity**

### Why deposits are liabilities

Your checking balance is an **asset to you** but a **liability to the bank**, because the bank owes you that money on demand. Loans are the reverse: a liability to the borrower, an asset to the bank.

### The rule for every transaction

Every transaction changes the T-account so that it **still balances**. Either one asset rises and another falls by the same amount, or an asset and a liability change together by the same amount.

> 🔑 **AP Connection:** Free-response questions often show a bank's T-account and ask for required reserves, excess reserves or the effect of a transaction on a specific line. Read the line items carefully before calculating.
`
    },
    {
      id: 'macromon4-reserves',
      type: 'text' as const,
      content: `
## Required and Excess Reserves

| Term | Formula |
|---|---|
| **Required reserves** | Required reserve ratio × demand deposits |
| **Excess reserves** | Total reserves − required reserves |

### Starting balance sheet: First Bank

| Assets | | Liabilities and owners' equity | |
|---|---|---|---|
| Reserves | \\$50,000 | Demand deposits | \\$400,000 |
| Loans | \\$300,000 | Owners' equity | \\$50,000 |
| Securities | \\$100,000 | | |
| **Total** | **\\$450,000** | **Total** | **\\$450,000** |

With a required reserve ratio of **10%**:

- Required reserves = 0.10 × \\$400,000 = **\\$40,000**
- Excess reserves = \\$50,000 − \\$40,000 = **\\$10,000**

> ⚠️ **Common error:** Required reserves are based on **deposits**, not on total assets or on loans. Taking 10% of \\$450,000 gives the wrong answer.

The AP model uses a positive required reserve ratio to show how lending works. In the U.S. today, the ratio is **0%** (since March 2020), and banks hold large reserves voluntarily; the model still explains why bank lending creates deposits.
`
    },
    {
      id: 'macromon4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On a commercial bank\'s balance sheet, customers\' demand deposits are',
            options: [
              'assets, since the bank can use them to make loans',
              'reserves, since the bank keeps them at the Federal Reserve',
              'owners\' equity, since the bank keeps the interest they earn',
              'liabilities, since the bank owes them to account holders'
            ],
            correctAnswer: 3,
            explanation: 'The bank must pay customers their balances on demand, so deposits are liabilities. The reserves backing them are assets, and owners\' equity is what remains after subtracting all liabilities from assets.'
          },
          {
            question: 'A bank has demand deposits of \\$800,000 and total reserves of \\$120,000. The required reserve ratio is 10%. What are its excess reserves?',
            options: [
              '\\$40,000',
              '\\$80,000',
              '\\$108,000',
              '\\$12,000'
            ],
            correctAnswer: 0,
            explanation: 'Required reserves are 0.10 × \\$800,000 = \\$80,000, so excess reserves are \\$120,000 − \\$80,000 = \\$40,000. Taking 10% of total reserves gives \\$12,000, and subtracting that from total reserves gives \\$108,000.'
          }
        ]
      }
    },
    {
      id: 'macromon4-worked',
      type: 'text' as const,
      content: `
## Worked Example: Four Transactions at First Bank

Each transaction starts from the result of the one before. The required reserve ratio is 10%.

### Transaction 1: A customer deposits \\$5,000 of cash

| Line | Change | New balance |
|---|---|---|
| Reserves (asset) | +\\$5,000 | \\$55,000 |
| Demand deposits (liability) | +\\$5,000 | \\$405,000 |

Required reserves = 0.10 × \\$405,000 = \\$40,500. Excess reserves = \\$55,000 − \\$40,500 = **\\$14,500**. The deposit raised excess reserves by \\$4,500, which is the deposit minus the 10% the bank must keep.

### Transaction 2: The bank lends out all \\$14,500 of excess reserves

When the loan is made, the bank credits the borrower's checking account (loans +\\$14,500, deposits +\\$14,500). The borrower then spends the money, and the check clears at another bank, so First Bank loses that deposit and the reserves behind it.

| Line | Net change | New balance |
|---|---|---|
| Loans (asset) | +\\$14,500 | \\$314,500 |
| Reserves (asset) | −\\$14,500 | \\$40,500 |
| Demand deposits | 0 (+\\$14,500, then −\\$14,500) | \\$405,000 |

Excess reserves are now **\\$0**: reserves exactly equal required reserves.

### Transaction 3: The Fed buys \\$20,000 of government bonds from First Bank

| Line | Change | New balance |
|---|---|---|
| Securities (asset) | −\\$20,000 | \\$80,000 |
| Reserves (asset) | +\\$20,000 | \\$60,500 |

Deposits did not change, so required reserves stay at \\$40,500 and **all \\$20,000 is excess reserves**.

### Transaction 4: A customer withdraws \\$2,000 of cash

| Line | Change | New balance |
|---|---|---|
| Reserves (asset) | −\\$2,000 | \\$58,500 |
| Demand deposits (liability) | −\\$2,000 | \\$403,000 |

Required reserves = 0.10 × \\$403,000 = \\$40,300. Excess reserves = \\$58,500 − \\$40,300 = **\\$18,200**.
`
    },
    {
      id: 'macromon4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Second Bank has demand deposits of \\$200,000 and reserves of \\$30,000. The required reserve ratio is 10%.

**1)** What are Second Bank's excess reserves, in dollars?

**2)** A customer deposits \\$8,000 of cash. What are Second Bank's new excess reserves, in dollars?

**3)** What is the largest new loan Second Bank can now make, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10000', '17200', '17200'],
        hint1: 'Required reserves = 0.10 × \\$200,000.',
        hint2: 'After the deposit, reserves are \\$38,000 and deposits are \\$208,000.',
        hint3: 'A single bank can safely lend only its excess reserves.',
        explanation: '1) Required = \\$20,000, so excess = \\$30,000 − \\$20,000 = \\$10,000. 2) Reserves become \\$38,000 and required reserves become \\$20,800, so excess = \\$17,200. 3) The bank can lend its excess reserves, \\$17,200.'
      }
    },
    {
      id: 'macromon4-onebank',
      type: 'text' as const,
      content: `
## How Much Can One Bank Lend?

A single bank can lend an amount equal to its **excess reserves**, and no more. The reason is the check-clearing step in Transaction 2: borrowers spend their loans, the money is deposited at **other** banks, and the lending bank loses reserves equal to the loan. If it lent more than its excess reserves, it would fall below its required reserves.

| Question | Answer for one bank | Answer for the whole banking system |
|---|---|---|
| Maximum new loans | Excess reserves | Excess reserves × money multiplier |
| Why | Loaned money leaves the bank | Loaned money is redeposited elsewhere in the system |

The money multiplier applies only to the **banking system as a whole**, because one bank's lost deposit is another bank's new deposit. Part 5 follows that chain from bank to bank.

> ⚠️ **Common error:** Asked "how much can **this bank** lend?", students often multiply by the money multiplier. A single bank lends only its excess reserves.
`
    },
    {
      id: 'macromon4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The required reserve ratio is 20%. A customer deposits \\$1,000 of cash in Bank A, which had no excess reserves before. What is the most Bank A can lend as a result?',
            options: [
              '\\$1,000',
              '\\$800',
              '\\$5,000',
              '\\$4,000'
            ],
            correctAnswer: 1,
            explanation: 'Bank A must keep 20% of the new deposit, \\$200, so its excess reserves rise by \\$800, the most it can lend. \\$4,000 and \\$5,000 describe expansion across the whole banking system, not one bank.'
          },
          {
            question: 'The Federal Reserve buys \\$10,000 of government bonds from a commercial bank. How do the bank\'s assets change?',
            options: [
              'Deposits rise and reserves rise by \\$10,000',
              'Loans fall and reserves rise by \\$10,000',
              'Securities fall and reserves rise by \\$10,000 each',
              'Securities rise and reserves fall by \\$10,000'
            ],
            correctAnswer: 2,
            explanation: 'The bank trades its bonds for reserves, so one asset falls and another rises by the same amount, leaving deposits unchanged. The bank sold bonds rather than buying them, and no loans were repaid.'
          },
          {
            question: 'A customer withdraws \\$3,000 in cash from a bank with a 10% required reserve ratio. By how much do the bank\'s excess reserves change?',
            options: [
              'They fall by \\$3,000',
              'They fall by \\$300',
              'They do not change',
              'They fall by \\$2,700'
            ],
            correctAnswer: 3,
            explanation: 'Reserves fall by \\$3,000, but required reserves fall by 10% of \\$3,000, or \\$300, so excess reserves fall by \\$2,700. Ignoring the drop in required reserves gives \\$3,000.'
          }
        ]
      }
    }
  ]
}
