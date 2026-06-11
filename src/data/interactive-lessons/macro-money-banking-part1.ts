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
| **M1** | Currency (coins + paper money) + checkable deposits (demand deposits) + traveler's checks | Most liquid |
| **M2** | M1 + savings deposits + money market accounts + small time deposits (CDs < \\$100K) | Less liquid |

### Key Distinctions
- **Money ≠ wealth** — money is a medium of exchange; wealth includes all assets
- **Money ≠ income** — income is a flow (earned over time); money is a stock (held at a point in time)
- **Liquidity** = how quickly an asset can be converted to cash without loss of value
- M1 is more liquid than M2 (checking > savings > CDs)

> 🔑 **AP Connection:** The AP exam will ask you to classify items as M1, M2, or neither. Key trap: **credit cards are NOT money** — they are a loan (liability), not an asset.
`},
    {id:'macromoney1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Which of the following is included in M1 but NOT in the basic definition of currency?',options:['Savings deposits held in commercial banks and credit unions','Checkable deposits (demand deposits) — funds in checking accounts that can be accessed on demand','Certificates of deposit (CDs) with maturities of less than one year','Corporate bonds and stocks held in brokerage investment accounts'],correctAnswer:1,explanation:'M1 = currency (coins + paper money) + checkable deposits + traveler\'s checks. Checkable deposits (demand deposits) are funds in checking accounts that can be withdrawn or spent at any time via check, debit card, or electronic transfer. They\'re included in M1 because they\'re as liquid as cash — you can spend them immediately. Savings deposits are M2 (less liquid).'},
      {question:'Why are credit cards NOT considered money or included in any measure of the money supply?',options:['Credit cards are too new — the Federal Reserve has not updated its classifications since the 1950s','Using a credit card creates a loan (short-term debt), not a payment from an existing stock of money that you own','Credit cards are only accepted by large businesses, not by the general economy','Credit cards are included in M2 but excluded from M1 due to lower liquidity'],correctAnswer:1,explanation:'When you use a credit card, you\'re borrowing from the card issuer — creating a liability (debt). Money must be an ASSET. Credit cards are IOUs, not money. When you pay your credit card bill, THAT payment uses money (from your checking account, part of M1). Debit cards, by contrast, directly access your checking account balance — which IS money.'}
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
- A \\$1,000 initial deposit can create up to **\\$10,000** in total money supply
- **Maximum change in money supply** = Initial deposit × Money multiplier = \\$1,000 × 10 = \\$10,000
- **Maximum change in LOANS** (new money created) = \\$10,000 − \\$1,000 (original deposit) = **\\$9,000**

### Important Caveats
- This is the **maximum** possible expansion — actual expansion is less if banks hold excess reserves or people hold cash
- If the Fed changes the reserve requirement, the multiplier changes
- Lower RRR → larger multiplier → more money creation from each dollar of reserves

> 🔑 **AP Connection:** The money multiplier calculation is tested on EVERY AP exam. Remember: **Total change in money supply** = initial deposit × multiplier. **Total change in LOANS** = total change in money supply − initial deposit.
`},
    {id:'macromoney1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'If the required reserve ratio is 20% and the Federal Reserve buys \\$500 million in government bonds from commercial banks, what is the maximum increase in the money supply?',options:['\\$100 million — the amount banks must hold in required reserves from the bond purchase','\\$2.5 billion — calculated by multiplying the \\$500 million by the money multiplier (1 ÷ 0.20 = 5)','\\$500 million — the money supply increases only by the amount of the bond purchase','\\$10 billion — calculated using a multiplier of 20 (the inverse of 20%)'],correctAnswer:1,explanation:'Money multiplier = 1 ÷ RRR = 1 ÷ 0.20 = 5. \nMaximum increase in money supply = \\$500M × 5 = **\\$2.5 billion**. \nWhen the Fed buys \\$500M in bonds, banks receive \\$500M in new reserves. They lend out 80% (\\$400M), which becomes deposits at other banks, which lend out 80% of that (\\$320M), and so on. The process multiplies the initial injection by the multiplier.'},
      {question:'What would happen to the money multiplier if the Federal Reserve LOWERED the required reserve ratio from 20% to 10%?',options:['The multiplier would decrease from 5 to 2.5, reducing the banking system\'s ability to create money','The multiplier would stay the same because it depends on the federal funds rate, not the reserve ratio','The multiplier would double from 5 to 10, increasing the maximum amount of money that can be created from each dollar of reserves','The multiplier would become zero because banks would no longer be required to hold any reserves'],correctAnswer:2,explanation:'At RRR = 20%: multiplier = 1 ÷ 0.20 = 5. \nAt RRR = 10%: multiplier = 1 ÷ 0.10 = 10. \nLowering the reserve requirement means banks can lend out a larger fraction of each deposit → more rounds of lending → more money creation. This is why changing the reserve requirement is such a powerful (and rarely used) tool — a small change has enormous effects on the money supply.'}
    ]}}
  ]
};
