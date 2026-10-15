export const macroMoneyBankingPart5Data = {
  topicSlug: 'macro-money-banking',
  sections: [
    {
      id: 'macromon5-intro',
      type: 'text' as const,
      content: `
# 💰 Money & Banking

**Part 5 of 7 — Money Creation by the Banking System**

---

| Section |
|---------|
| 📖 From One Bank to the Whole System |
| Three Starting Points, Three Answers |
| Why Real-World Expansion Is Smaller |
| The Fed and Reserves: Limited vs. Ample |

> 🔑 **Key Concept:** When banks lend, they create new checking deposits, and those deposits are money. Across the whole banking system, new excess reserves can support new loans up to **excess reserves × money multiplier**. Whether the starting deposit was **already money** decides how much of the deposit expansion counts as a change in the **money supply**.
`
    },
    {
      id: 'macromon5-system',
      type: 'text' as const,
      content: `
## 📖 From One Bank to the Whole System

Part 4 showed that one bank can lend only its excess reserves. But the loan does not vanish: the borrower spends it, and the seller deposits it in another bank. That bank now has new excess reserves and lends again.

### Worked Example: Required reserve ratio 20%, \\$1,000 of new excess reserves

| Bank | New deposit | Kept as required reserves (20%) | Lent out (new excess reserves) |
|---|---|---|---|
| Bank A | — | — | \\$1,000 |
| Bank B | \\$1,000 | \\$200 | \\$800 |
| Bank C | \\$800 | \\$160 | \\$640 |
| Bank D | \\$640 | \\$128 | \\$512 |
| … | … | … | … |
| **Total, all rounds** | **\\$5,000** | **\\$1,000** | **\\$5,000** |

Money multiplier = 1 ÷ 0.20 = **5**. The \\$1,000 of excess reserves at Bank A supports up to \\$1,000 × 5 = **\\$5,000** of new loans, and those loans become \\$5,000 of new deposits.

### The three formulas

| Quantity | Formula |
|---|---|
| Money multiplier | 1 ÷ required reserve ratio |
| Maximum change in loans (banking system) | Initial **excess reserves** × money multiplier |
| Maximum change in the money supply | Change in loans **plus** any initial deposit that was **new** money |

The last line is where most mistakes happen, so the next section takes it case by case.
`
    },
    {
      id: 'macromon5-cases',
      type: 'text' as const,
      content: `
## Three Starting Points, Three Answers

Required reserve ratio = **20%** (multiplier = 5). Each case involves \\$1,000.

### Case 1: Someone deposits \\$1,000 of cash from under a mattress

- The cash was **already money** (currency held by the public). Depositing it swaps \\$1,000 of currency for \\$1,000 of checking deposits, so the money supply does not change at the moment of deposit.
- Excess reserves = \\$1,000 − \\$200 = **\\$800**.
- Maximum change in loans = \\$800 × 5 = **\\$4,000**.
- Maximum change in demand deposits = \\$1,000 × 5 = **\\$5,000** (the first \\$1,000 plus \\$4,000 created by lending).
- **Maximum change in the money supply = \\$4,000.**

### Case 2: The Fed buys \\$1,000 of bonds from a commercial bank

- The bank trades a bond for \\$1,000 of reserves. No deposit is created, so required reserves do not change.
- Excess reserves = **\\$1,000**.
- Maximum change in loans = \\$1,000 × 5 = **\\$5,000**.
- **Maximum change in the money supply = \\$5,000.**

### Case 3: The Fed buys a \\$1,000 bond from a member of the public

- The seller deposits the Fed's \\$1,000 payment. That deposit is **new money**, because the bond was not money.
- Excess reserves = \\$1,000 − \\$200 = **\\$800**, so maximum change in loans = \\$800 × 5 = **\\$4,000**.
- **Maximum change in the money supply = \\$1,000 + \\$4,000 = \\$5,000.**

| Case | New excess reserves | Max change in loans | Max change in money supply |
|---|---|---|---|
| Cash deposit | \\$800 | \\$4,000 | \\$4,000 |
| Fed buys bond from a bank | \\$1,000 | \\$5,000 | \\$5,000 |
| Fed buys bond from the public | \\$800 | \\$4,000 | \\$5,000 |

When the Fed **sells** bonds, every sign reverses: reserves fall, and the money supply can contract by up to the same amounts.

> 🔑 **AP Connection:** For a cash deposit, the AP answer for the maximum change in the money supply is the **change in loans**, not deposit × multiplier. For a Fed bond purchase, it is **purchase amount × multiplier**.
`
    },
    {
      id: 'macromon5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The required reserve ratio is 10%. A person deposits \\$2,000 of cash that she had kept at home. What is the maximum change in the money supply?',
            options: [
              '\\$18,000',
              '\\$20,000',
              '\\$2,000',
              '\\$1,800'
            ],
            correctAnswer: 0,
            explanation: 'Excess reserves rise by \\$2,000 − \\$200 = \\$1,800, and the system can lend \\$1,800 × 10 = \\$18,000. The cash was already money, so only the new loans add to the money supply; \\$20,000 is the change in deposits.'
          },
          {
            question: 'The required reserve ratio is 25%. The Fed buys \\$4 million of government bonds from commercial banks. What is the maximum change in the money supply?',
            options: [
              '\\$12 million',
              '\\$16 million',
              '\\$4 million',
              '\\$1 million'
            ],
            correctAnswer: 1,
            explanation: 'The multiplier is 1 ÷ 0.25 = 4, and the purchase adds \\$4 million of excess reserves, so the money supply can rise by up to \\$4 million × 4 = \\$16 million. \\$12 million wrongly treats part of the new reserves as required.'
          },
          {
            question: 'Why does a single bank\'s loan lead to more lending elsewhere in the banking system?',
            options: [
              'The Fed matches each new bank loan with new reserves',
              'The lending bank holds the full loan as new reserves',
              'The borrower spends it, and it is deposited at another bank',
              'Each loan lowers the reserve ratio for the other banks'
            ],
            correctAnswer: 2,
            explanation: 'Borrowed money is spent and redeposited, giving the next bank new reserves it can partly lend out. The Fed does not match loans, and the lending bank loses rather than gains reserves when the borrower spends.'
          }
        ]
      }
    },
    {
      id: 'macromon5-smaller',
      type: 'text' as const,
      content: `
## Why Real-World Expansion Is Smaller

The simple money multiplier gives the **maximum** possible expansion. Actual expansion is smaller when money "leaks" out of the lending chain.

| Leakage | What happens | Effect |
|---|---|---|
| **Banks hold excess reserves** | Banks keep some reserves instead of lending all of them, for safety or because lending looks risky | Less is lent at each round |
| **People hold more cash** | Borrowers or sellers keep part of a payment as currency instead of depositing it | Less is redeposited at each round |
| **Weak demand for loans** | In a recession, firms and households may not want to borrow | Excess reserves sit idle |

Each leakage makes the actual multiplier smaller than 1 ÷ required reserve ratio.
`
    },
    {
      id: 'macromon5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The required reserve ratio is 12.5%, and banks lend all excess reserves.

**1)** What is the money multiplier?

**2)** The Fed buys \\$300 million of bonds from banks. What is the maximum change in the money supply, in millions of dollars?

**3)** Instead, a family deposits \\$800 of cash. What is the maximum change in the money supply, in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '2400', '5600'],
        hint1: 'Money multiplier = 1 ÷ 0.125.',
        hint2: 'A Fed purchase from banks adds excess reserves equal to the full purchase.',
        hint3: 'For a cash deposit, excess reserves are \\$800 minus 12.5% of \\$800.',
        explanation: '1) 1 ÷ 0.125 = 8. 2) \\$300 million × 8 = \\$2,400 million. 3) Excess reserves = \\$800 − \\$100 = \\$700, so the change in loans, and in the money supply, is \\$700 × 8 = \\$5,600.'
      }
    },
    {
      id: 'macromon5-fed',
      type: 'text' as const,
      content: `
## The Fed and Reserves: Limited vs. Ample

The AP course teaches two ways of describing how the Federal Reserve influences reserves, the money supply and interest rates.

### The limited-reserves framework (the model behind the money multiplier)

Reserves are scarce, so small changes in reserves change the money supply and move the **federal funds rate**, the rate banks charge each other for overnight loans of reserves.

| Tool | Expansionary action | Effect on reserves and money |
|---|---|---|
| **Open-market operations** | The Fed **buys** government bonds | Reserves rise; money supply can expand by purchase × multiplier |
| **Discount rate** | The Fed **lowers** the rate it charges banks that borrow from it | Borrowing from the Fed is cheaper, so reserves rise |
| **Reserve requirement** | The Fed **lowers** the required reserve ratio | Required reserves fall, excess reserves rise, and the multiplier rises |

### The ample-reserves framework (how the Fed operates today)

Since the 2008 financial crisis, banks have held very large reserves, far more than they need. With reserves this plentiful, small open-market operations barely move the federal funds rate.

- The Fed sets a **target range for the federal funds rate**. The federal funds rate is the Fed's **target**, not a tool.
- Its main tool is the **interest rate on reserve balances (IORB)**, the rate the Fed pays banks on reserves held at the Fed. A bank will not lend reserves to another bank for much less than it can earn by leaving them at the Fed, so the federal funds rate stays close to IORB.
- To **lower** interest rates, the Fed **lowers IORB**; to raise them, it raises IORB. The federal funds rate follows into the new target range.
- The reserve requirement has been **0%** since March 2020, so it is not an active tool.

Under ample reserves, banks' lending is limited by profitable lending opportunities and capital, not by required reserves, so the money multiplier describes the **mechanism** of deposit creation more than an exact limit. AP questions that ask you to calculate a multiplier use the limited-reserves model. The money market graph and policy chains are covered in the monetary policy topic.
`
    },
    {
      id: 'macromon5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Banks decide to keep part of their excess reserves instead of lending them. Compared with the simple money multiplier prediction, the actual increase in the money supply will be',
            options: [
              'larger',
              'the same',
              'zero in every case',
              'smaller'
            ],
            correctAnswer: 3,
            explanation: 'Reserves that are not lent do not become new deposits, so each round of lending is smaller and total expansion falls short of the simple multiplier. The expansion is reduced, not eliminated.'
          },
          {
            question: 'In the ample-reserves framework, which action would the Federal Reserve take with its main tool to reduce borrowing costs?',
            options: [
              'Lower the interest rate on reserve balances',
              'Raise the interest rate on reserve balances',
              'Cut the federal funds rate target directly',
              'Raise the reserve requirement for banks'
            ],
            correctAnswer: 0,
            explanation: 'Lowering IORB reduces what banks earn by holding reserves at the Fed, which pulls the federal funds rate and other rates down. The federal funds rate is the target the tool moves, not the tool, and raising IORB or the reserve requirement tightens policy.'
          },
          {
            question: 'In the limited-reserves model, which Fed action increases banks\' excess reserves without changing the money multiplier?',
            options: [
              'Lowering the reserve requirement',
              'Buying government bonds',
              'Selling government bonds',
              'Raising the discount rate'
            ],
            correctAnswer: 1,
            explanation: 'An open-market purchase adds reserves while leaving the required reserve ratio, and so the multiplier, unchanged. Lowering the reserve requirement changes the multiplier, and selling bonds or raising the discount rate reduces reserves.'
          }
        ]
      }
    }
  ]
}
