export const macroMoneyBankingPart6Data = {
  topicSlug: 'macro-money-banking',
  sections: [
    {
      id: 'macromon6-intro',
      type: 'text' as const,
      content: `
# 💰 Money & Banking

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Money and Banking Appear on the Exam |
| FRQ Practice Set 1: A Bank's T-Account |
| FRQ Practice Set 2: A Fed Bond Purchase |
| Exam-Style Multiple Choice |

> 🔑 **Key Concept:** Money and banking free-response questions usually give a **T-account** or a **Fed bond transaction** and ask a chain of short calculations: required reserves, excess reserves, one bank's maximum loan, the money multiplier, and the maximum change in loans, deposits or the money supply. Each step uses a different starting number, so read every part carefully.
`
    },
    {
      id: 'macromon6-format',
      type: 'text' as const,
      content: `
## 📖 How Money and Banking Appear on the Exam

| Question asks for… | Start from… | Then… |
|---|---|---|
| Required reserves | Demand deposits | × required reserve ratio |
| Excess reserves | Total reserves | − required reserves |
| Maximum new loan by **this bank** | Its excess reserves | Stop: no multiplier |
| Maximum change in loans, **banking system** | Initial excess reserves | × money multiplier |
| Maximum change in **demand deposits** | Initial new deposit (or new excess reserves, for a Fed purchase from a bank) | × money multiplier |
| Maximum change in the **money supply** | Change in loans | + any initial deposit that was new money |

### Habits that protect points

- **Show the formula with numbers.** "0.10 × \\$600,000 = \\$60,000" earns the point even if a later step slips.
- **Ask whether the starting deposit was already money.** Cash from a mattress was; a check from the Fed for a bond was not.
- **Distinguish one bank from the system.** One bank lends its excess reserves; the system multiplies them.
- **Use the right Fed vocabulary.** Under ample reserves, the main tool is the **interest rate on reserve balances**, and the federal funds rate is the **target**. Under limited reserves, the tools are open-market operations, the discount rate and the reserve requirement.
`
    },
    {
      id: 'macromon6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice Set 1: A Bank's T-Account

Elmwood Bank's balance sheet is shown below. The required reserve ratio is 10%.

| Assets | | Liabilities and owners' equity | |
|---|---|---|---|
| Reserves | \\$90,000 | Demand deposits | \\$600,000 |
| Loans | \\$500,000 | Owners' equity | \\$200,000 |
| Securities | \\$210,000 | | |

**(a)** Calculate Elmwood Bank's required reserves. Show your work.

**(b)** Calculate its excess reserves.

**(c)** What is the maximum amount Elmwood Bank can lend?

**(d)** If Elmwood Bank lends that amount, what is the maximum change in the money supply in the banking system? Show your work.

**(e)** A customer deposits \\$10,000 of cash into Elmwood Bank. By how much does M1 change immediately? Explain.

**(f)** By how much do Elmwood Bank's excess reserves change because of the deposit in (e)?

### Model Answers

**(a)** 0.10 × \\$600,000 = **\\$60,000**.

**(b)** \\$90,000 − \\$60,000 = **\\$30,000**.

**(c)** **\\$30,000**, its excess reserves.

**(d)** Money multiplier = 1 ÷ 0.10 = 10. Maximum change = \\$30,000 × 10 = **\\$300,000**.

**(e)** **No change.** Currency held by the public falls by \\$10,000 and checking deposits rise by \\$10,000; both are in M1.

**(f)** Reserves rise by \\$10,000 and required reserves rise by \\$1,000, so excess reserves rise by **\\$9,000**.
`
    },
    {
      id: 'macromon6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A bank has \\$500,000 in demand deposits, \\$70,000 in reserves and a 10% required reserve ratio. What is the maximum amount this bank can lend?',
            options: [
              '\\$50,000',
              '\\$20,000',
              '\\$63,000',
              '\\$200,000'
            ],
            correctAnswer: 1,
            explanation: 'Required reserves are \\$50,000, so excess reserves, and the bank\'s lending limit, are \\$70,000 − \\$50,000 = \\$20,000. \\$200,000 multiplies by the money multiplier, which applies only to the whole banking system.'
          },
          {
            question: 'Which change in a bank\'s T-account shows a customer depositing \\$4,000 of cash?',
            options: [
              'Loans and demand deposits each rise by \\$4,000',
              'Reserves rise by \\$4,000 and loans fall by \\$4,000',
              'Reserves and demand deposits each rise by \\$4,000',
              'Reserves rise by \\$4,000 and securities fall by \\$4,000'
            ],
            correctAnswer: 2,
            explanation: 'The cash becomes reserves, an asset, and the customer\'s balance is a new deposit, a liability, so both sides rise equally. Loans rising with deposits describes a new loan, and swapping securities for reserves describes a bond sale.'
          },
          {
            question: 'The required reserve ratio is 20%. A person deposits \\$5,000 of cash from a safe at home. What is the maximum change in demand deposits in the banking system?',
            options: [
              '\\$20,000',
              '\\$5,000',
              '\\$4,000',
              '\\$25,000'
            ],
            correctAnswer: 3,
            explanation: 'Deposits can grow by the initial deposit times the multiplier: \\$5,000 × 5 = \\$25,000. \\$20,000 is the maximum change in loans and in the money supply, because the cash was already money.'
          }
        ]
      }
    },
    {
      id: 'macromon6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice Set 2: A Fed Bond Purchase

The required reserve ratio is 20%, and banks lend all excess reserves. The Federal Reserve buys \\$50 million of government bonds from the public, and the sellers deposit the payments in their checking accounts.

**(a)** Calculate the money multiplier.

**(b)** By how much do demand deposits change immediately?

**(c)** Calculate the maximum change in loans in the banking system. Show your work.

**(d)** Calculate the maximum change in the money supply.

**(e)** What happens to the price of government bonds when the Fed buys bonds? What happens to bond yields?

**(f)** Today the Fed operates with ample reserves. Identify the action it would take with its main tool to achieve the same expansionary goal.

### Model Answers

**(a)** 1 ÷ 0.20 = **5**.

**(b)** Demand deposits rise by **\\$50 million**.

**(c)** Excess reserves = \\$50 million − (0.20 × \\$50 million) = \\$40 million. Maximum change in loans = \\$40 million × 5 = **\\$200 million**.

**(d)** The \\$50 million deposit is new money, and loans add \\$200 million: **\\$250 million** (equivalently, \\$50 million × 5).

**(e)** The Fed's purchases raise demand for bonds, so bond prices **rise** and bond yields (interest rates) **fall**.

**(f)** **Lower the interest rate on reserve balances.** That lowers the federal funds rate, which stays near IORB within the Fed's target range, and other interest rates follow. ("Lower the federal funds rate" alone names the target, not the tool.)
`
    },
    {
      id: 'macromon6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The required reserve ratio is 10%. The Fed sells \\$20 million of government bonds to commercial banks. In the limited-reserves model, what is the maximum change in the money supply?',
            options: [
              'A decrease of \\$200 million',
              'An increase of \\$200 million',
              'A decrease of \\$180 million',
              'A decrease of \\$20 million'
            ],
            correctAnswer: 0,
            explanation: 'Banks pay for the bonds with \\$20 million of reserves, so excess reserves fall by that amount and the money supply can shrink by \\$20 million × 10 = \\$200 million. A sale contracts money rather than expanding it.'
          },
          {
            question: 'Which statement about the federal funds rate is correct under the ample-reserves framework?',
            options: [
              'It is the rate the Fed charges banks that borrow directly from it',
              'It is a target the Fed steers by setting the rate it pays on reserves',
              'It is a tool the Fed sets by changing the reserve requirement',
              'It is the rate the Fed pays to banks on all of their deposits'
            ],
            correctAnswer: 1,
            explanation: 'The federal funds rate is the overnight rate between banks; the Fed targets a range for it and keeps it there mainly by setting the interest rate on reserve balances. The rate the Fed charges banks directly is the discount rate.'
          }
        ]
      }
    },
    {
      id: 'macromon6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The required reserve ratio is 5%. The Federal Reserve buys \\$10 million of government bonds from commercial banks, and banks lend all excess reserves.

**1)** What is the money multiplier?

**2)** By how much do excess reserves rise, in millions of dollars?

**3)** What is the maximum change in the money supply, in millions of dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '10', '200'],
        hint1: 'Money multiplier = 1 ÷ 0.05.',
        hint2: 'The banks swapped bonds for reserves; deposits did not change.',
        hint3: 'Multiply the new excess reserves by the money multiplier.',
        explanation: '1) 1 ÷ 0.05 = 20. 2) All \\$10 million is excess reserves, because no deposits changed. 3) \\$10 million × 20 = \\$200 million.'
      }
    }
  ]
}
