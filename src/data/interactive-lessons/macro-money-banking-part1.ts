export const macroMoneyBankingPart1Data = {
  topicSlug: 'macro-money-banking',
  sections: [
    {id:'macromoney1-intro',type:'text' as const,content:`
# 💰 Money & Banking

**Part 1 of 7 — Functions of Money & the Banking System**

---

| Section |
|---------|
| 📖 Functions of Money |
| The Money Supply (M1 & M2) |
| Fractional Reserve Banking |
| The Money Multiplier |

> 🔑 **Key Concept:** The AP exam tests the **three functions of money**, the difference between **M1 and M2** money supply, and how the **money multiplier** allows banks to create money through lending.
`},
    {id:'macromoney1-functions',type:'text' as const,content:`
## 📖 Functions of Money

| Function | Description | Example |
|---|---|---|
| **Medium of exchange** | Used to buy/sell goods (eliminates barter) | Paying \\$5 for coffee instead of trading eggs |
| **Unit of account** | Standard measure of value (pricing system) | A shirt costs \\$30; a car costs \\$30,000 |
| **Store of value** | Holds purchasing power over time | Saving \\$1,000 in a bank account for future use |

### Characteristics of Good Money
- **Durable** — doesn't deteriorate quickly
- **Portable** — easy to carry
- **Divisible** — can be broken into smaller units
- **Uniform** — each unit is identical
- **Scarce** — limited supply (otherwise value falls)
- **Acceptable** — widely recognized and trusted

### The Money Supply

| Measure | Includes | Liquidity |
|---|---|---|
| **M1** | Currency in circulation (coins + paper money) + checkable (demand) deposits + other liquid deposits, including savings deposits | Most liquid |
| **M2** | M1 + small time deposits (CDs under \\$100,000) + retail money market funds | Less liquid |

**Note on savings deposits:** In May 2020 the Federal Reserve moved savings deposits from M2-only into **M1**, because a rule change let people make unlimited withdrawals from them. Older textbooks still list savings deposits in M2 but not M1. Items that are classified the same way under both definitions are the safe ones to know: currency and checking deposits are in M1; CDs and money market funds are in M2 but not M1.

### Key Distinctions
- **Money ≠ wealth** — money is a medium of exchange; wealth includes all assets
- **Money ≠ income** — income is a flow (earned over time); money is a stock (held at a point in time)
- **Liquidity** = how quickly an asset can be converted to cash without loss of value
- M1 is more liquid than M2 (currency and checking deposits are more liquid than CDs)

> 🔑 **AP Connection:** The AP exam will ask you to classify items as M1, M2, or neither. Key trap: **credit cards are NOT money** — they are a loan (liability), not an asset.
`},
    {id:'macromoney1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Which of the following is included in M1 but NOT in the basic definition of currency?',options:['Retail money market fund shares held by households and families','Checking account balances that can be spent by debit card or check','Certificates of deposit (CDs) with maturities of less than one year','Corporate bonds and stocks held in brokerage investment accounts'],correctAnswer:1,explanation:'M1 = currency (coins + paper money) + checkable deposits + other liquid deposits. Checkable deposits (demand deposits) are funds in checking accounts that can be withdrawn or spent at any time via check, debit card, or electronic transfer. They\'re included in M1 because they\'re as liquid as cash — you can spend them immediately. Money market funds and CDs are in M2 but not M1, and stocks and bonds are not money at all.'},
      {question:'Why are credit cards NOT considered money or included in any measure of the money supply?',options:['Credit card purchases do not count toward GDP, so they are left out of money measures','Using a credit card takes out a short-term loan rather than spending money you already own','Credit cards are accepted by only some sellers, so they fail to work as a medium of exchange','Credit cards are included in M2 but excluded from M1 due to lower liquidity'],correctAnswer:1,explanation:'When you use a credit card, you\'re borrowing from the card issuer — creating a liability (debt). Money must be an ASSET. Credit cards are IOUs, not money. When you pay your credit card bill, THAT payment uses money (from your checking account, part of M1). Debit cards, by contrast, directly access your checking account balance — which IS money.'}
    ]}},
    {id:'macromoney1-multiplier',type:'text' as const,content:`
## 📖 Fractional Reserve Banking & the Money Multiplier

### Fractional Reserve System
- Banks are required to hold only a **fraction** of deposits as reserves
- The rest can be **loaned out** — and those loans create NEW deposits, which create more loans, etc.
- This process **multiplies** the initial deposit into a much larger increase in the money supply

### Money Multiplier Formula

**Money Multiplier = 1 ÷ Required Reserve Ratio (RRR)**

### Example: RRR = 10% (0.10)

| Round | Deposit | Required Reserve (10%) | Amount Loaned Out |
|---|---|---|---|
| 1 | \\$1,000 | \\$100 | \\$900 |
| 2 | \\$900 | \\$90 | \\$810 |
| 3 | \\$810 | \\$81 | \\$729 |
| ... | ... | ... | ... |
| **Total** | **\\$10,000** | **\\$1,000** | **\\$9,000** |

- Money multiplier = 1 ÷ 0.10 = **10**
- **Maximum change in demand deposits** = Initial deposit × Money multiplier = \\$1,000 × 10 = **\\$10,000**
- **Maximum change in LOANS** = Excess reserves × Money multiplier = \\$900 × 10 = **\\$9,000**
- **Maximum change in the MONEY SUPPLY** = **\\$9,000**. The \\$1,000 deposit was cash that was already counted in the money supply; depositing it only moves it from currency to checking deposits. Only the new loans are new money.

### Important Caveats
- This is the **maximum** possible expansion — actual expansion is less if banks hold excess reserves or people hold cash
- If the Fed changes the reserve requirement, the multiplier changes
- Lower RRR → larger multiplier → more money creation from each dollar of reserves
- In practice, the U.S. reserve requirement has been **0%** since March 2020, and the Fed now steers interest rates mainly with the **interest rate on reserve balances**. The money multiplier remains the AP model for how bank lending expands deposits.

> 🔑 **AP Connection:** The money multiplier calculation is tested on EVERY AP exam. For a cash deposit, remember: **maximum change in demand deposits** = deposit × multiplier; **maximum change in loans** = excess reserves × multiplier; **maximum change in the money supply** = the change in loans, because the cash deposited was already money.
`},
    {id:'macromoney1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'If the required reserve ratio is 20% and the Federal Reserve buys \\$500 million in government bonds from commercial banks, what is the maximum increase in the money supply?',options:['\\$100 million — the amount banks must hold in required reserves from the bond purchase','\\$2.5 billion — the \\$500 million times the money multiplier of 1 ÷ 0.20 = 5','\\$500 million — the money supply increases only by the amount of the bond purchase','\\$10 billion — calculated using a multiplier of 20 (the inverse of 20%)'],correctAnswer:1,explanation:'Money multiplier = 1 ÷ RRR = 1 ÷ 0.20 = 5. \nMaximum increase in money supply = \\$500M × 5 = **\\$2.5 billion**. \nWhen the Fed buys \\$500M in bonds from banks, the banks trade bonds for \\$500M in reserves. No deposits changed, so all \\$500M is excess reserves that can be lent out, and the multiplier applies to the full amount.'},
      {question:'What would happen to the money multiplier if the Federal Reserve LOWERED the required reserve ratio from 20% to 10%?',options:['The multiplier would decrease from 5 to 2.5, reducing the banking system\'s ability to create money','The multiplier would stay the same because it depends on the federal funds rate, not the reserve ratio','The multiplier would double from 5 to 10, raising the money that can be created from each dollar of reserves','The multiplier would become zero because banks would no longer be required to hold any reserves'],correctAnswer:2,explanation:'At RRR = 20%: multiplier = 1 ÷ 0.20 = 5. \nAt RRR = 10%: multiplier = 1 ÷ 0.10 = 10. \nLowering the reserve requirement means banks can lend out a larger fraction of each deposit → more rounds of lending → more money creation. In the AP model, this is why a change in the reserve requirement has large effects on the money supply. (In practice, the U.S. reserve requirement has been 0% since March 2020.)'}
    ]}}
  ]
};
