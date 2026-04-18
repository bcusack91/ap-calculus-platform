const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src/data/interactive-lessons');

const files = [
{file:'macro-monetary-policy-part1.ts', content:`export const macroMonetaryPolicyPart1Data = {
  topicSlug: 'macro-monetary-policy',
  sections: [
    {id:'macromone1-intro',type:'text' as const,content:\`
# 🏦 Monetary Policy

**Part 1 of 7 — The Federal Reserve & Interest Rates**

---

| Section |
|---------|
| 📖 The Federal Reserve System |
| Tools of Monetary Policy |
| How Monetary Policy Works |
| Limitations of Monetary Policy |

> 🔑 **Key Concept:** Monetary policy is conducted by the **Federal Reserve** (the Fed) to control the **money supply** and **interest rates**. The AP exam tests the three main tools and the **chain of causation** from Fed action → interest rates → investment → AD → output & price level.
\`},
    {id:'macromone1-fed',type:'text' as const,content:\`
## 📖 The Federal Reserve System

### Structure
- **Board of Governors** — 7 members, 14-year terms, appointed by the president (confirmed by Senate)
- **Chair of the Fed** — 4-year term; most powerful economic policymaker (currently Jerome Powell)
- **12 Regional Federal Reserve Banks** — serve as the "bankers' bank"
- **Federal Open Market Committee (FOMC)** — makes monetary policy decisions; meets ~8 times per year

### Tools of Monetary Policy

| Tool | Description | Expansionary (↓ rates) | Contractionary (↑ rates) |
|---|---|---|---|
| **Open Market Operations (OMO)** | Buying/selling government bonds (most common tool) | **Buy bonds** → injects money into banking system | **Sell bonds** → removes money from banking system |
| **Federal Funds Rate (target)** | Interest rate banks charge each other for overnight loans | **Lower** the target rate | **Raise** the target rate |
| **Discount Rate** | Interest rate the Fed charges banks for direct loans | **Lower** the discount rate | **Raise** the discount rate |
| **Reserve Requirement** | % of deposits banks must hold in reserve (rarely changed) | **Lower** the reserve ratio → banks can lend more | **Raise** the reserve ratio → banks must hold more |

### Open Market Operations — How They Work

**Fed BUYS bonds (expansionary):**
1. Fed purchases government bonds from banks/public
2. Fed pays with newly created money → bank reserves INCREASE
3. More reserves → banks can lend more → money supply INCREASES
4. More money available → interest rates FALL
5. Lower rates → more borrowing, investment, and consumption → AD shifts RIGHT

**Fed SELLS bonds (contractionary):**
The reverse — money flows OUT of the banking system → fewer reserves → less lending → money supply decreases → interest rates rise → AD shifts left

> 🔑 **AP Connection:** OMO is the Fed's **primary tool**. "Buy bonds" = expansionary = lower rates. "Sell bonds" = contractionary = higher rates. The AP exam tests this chain of causation in nearly every FRQ set.
\`},
    {id:'macromone1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'If the Federal Reserve wants to combat a recession, which action should it take?',options:['Sell government bonds on the open market to remove money from the banking system','Buy government bonds on the open market to increase bank reserves, expand the money supply, and lower interest rates','Raise the federal funds rate target to discourage excessive borrowing and spending','Increase the reserve requirement so banks hold more deposits and lend less'],correctAnswer:1,explanation:'To fight a recession, the Fed uses expansionary monetary policy. Buying bonds injects money into the banking system → bank reserves increase → banks can lend more → money supply grows → interest rates fall → businesses and consumers borrow and spend more → AD shifts right → output increases and unemployment falls. Selling bonds, raising rates, or increasing reserve requirements would all be contractionary — making the recession worse.'},
      {question:'What is the "federal funds rate" and why is it important for monetary policy?',options:['The interest rate the federal government pays on the national debt, which determines total government borrowing costs','The interest rate banks charge each other for overnight loans of reserves — it is the Fed\\'s primary interest rate target and influences all other interest rates in the economy','The rate of return on U.S. Treasury bonds sold to foreign governments and sovereign wealth funds','The interest rate charged to consumers on federal student loans and FHA mortgages'],correctAnswer:1,explanation:'The federal funds rate is the rate banks charge each other for overnight lending of reserves. The FOMC sets a target for this rate and uses open market operations to achieve it. The federal funds rate is crucial because it serves as the benchmark for all other interest rates in the economy — when it changes, rates on mortgages, auto loans, business loans, and credit cards adjust accordingly.'}
    ]}},
    {id:'macromone1-limits',type:'text' as const,content:\`
## 📖 Limitations of Monetary Policy

| Limitation | Explanation |
|---|---|
| **Liquidity trap** | Interest rates near 0% — the Fed can't lower them further. Buying bonds injects money but doesn't stimulate spending because rates can't go negative (effectively). Japan experienced this for decades. |
| **Pushing on a string** | The Fed can make money available, but it can't FORCE banks to lend or businesses to borrow during deep recessions — pessimism may override low rates |
| **Time lags** | Monetary policy takes 6–18 months to fully affect the economy |
| **Political independence** | The Fed must resist pressure from politicians who want lower rates before elections |
| **Stagflation dilemma** | When inflation AND unemployment are both high (SRAS shift left), monetary policy can only address one problem at a time |

### Monetary Policy vs. Fiscal Policy

| Feature | Monetary Policy | Fiscal Policy |
|---|---|---|
| **Who** | Federal Reserve (independent) | Congress + President |
| **Tools** | OMO, interest rates, reserve req. | Taxes, spending |
| **Speed of action** | FOMC can act quickly | Slow (legislative process, debate) |
| **Time to take effect** | 6–18 month lag | Variable — spending faster than tax changes |
| **Political pressure** | Insulated (14-year terms) | Highly political |

> 🔑 **AP Connection:** A very common AP FRQ: "The economy is in a recession. Identify ONE fiscal policy and ONE monetary policy action to address it, and explain the chain of causation for each." You must be able to answer both.
\`},
    {id:'macromone1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'What is a "liquidity trap" and why does it limit the effectiveness of monetary policy?',options:['A situation where the government traps excess liquidity by raising taxes, making monetary policy unnecessary','A situation where interest rates are already near zero, so the Fed cannot lower them further to stimulate borrowing and spending — expansionary monetary policy becomes ineffective','A requirement that banks hold all deposits in liquid form, preventing any lending to businesses','A trade restriction that traps foreign currency within domestic markets, destabilizing exchange rates'],correctAnswer:1,explanation:'When interest rates hit near-zero (the "zero lower bound"), the Fed\\'s primary tool — lowering rates — is exhausted. Buying bonds still injects money, but banks may simply hold excess reserves instead of lending (pessimistic about repayment), and businesses may not borrow even at near-zero rates (pessimistic about future demand). This is "pushing on a string." The Fed responded to this constraint after 2008 with unconventional tools like quantitative easing (QE).'},
      {question:'What is the key advantage of monetary policy over fiscal policy in responding to economic downturns?',options:['Monetary policy is always more effective than fiscal policy at increasing aggregate demand and reducing unemployment','The Federal Reserve can act quickly without legislative approval, while fiscal policy requires Congress to pass legislation — a slow political process','Monetary policy directly increases government spending, while fiscal policy can only change interest rates','The Fed has unlimited resources to fund economic stimulus, while Congress is constrained by the federal budget'],correctAnswer:1,explanation:'The FOMC can adjust interest rates at any of its 8 annual meetings (or in emergency sessions between meetings) without needing Congressional approval. Fiscal policy requires bills to be introduced, debated, amended, passed by both chambers, and signed by the president — a process that can take months or years. This speed advantage is why monetary policy is often the first line of defense against recessions.'}
    ]}}
  ]
};\n`},
{file:'macro-money-banking-part1.ts', content:`export const macroMoneyBankingPart1Data = {
  topicSlug: 'macro-money-banking',
  sections: [
    {id:'macromoney1-intro',type:'text' as const,content:\`
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
\`},
    {id:'macromoney1-functions',type:'text' as const,content:\`
## 📖 Functions of Money

| Function | Description | Example |
|---|---|---|
| **Medium of exchange** | Used to buy/sell goods (eliminates barter) | Paying $5 for coffee instead of trading eggs |
| **Unit of account** | Standard measure of value (pricing system) | A shirt costs $30; a car costs $30,000 |
| **Store of value** | Holds purchasing power over time | Saving $1,000 in a bank account for future use |

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
| **M2** | M1 + savings deposits + money market accounts + small time deposits (CDs < $100K) | Less liquid |

### Key Distinctions
- **Money ≠ wealth** — money is a medium of exchange; wealth includes all assets
- **Money ≠ income** — income is a flow (earned over time); money is a stock (held at a point in time)
- **Liquidity** = how quickly an asset can be converted to cash without loss of value
- M1 is more liquid than M2 (checking > savings > CDs)

> 🔑 **AP Connection:** The AP exam will ask you to classify items as M1, M2, or neither. Key trap: **credit cards are NOT money** — they are a loan (liability), not an asset.
\`},
    {id:'macromoney1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'Which of the following is included in M1 but NOT in the basic definition of currency?',options:['Savings deposits held in commercial banks and credit unions','Checkable deposits (demand deposits) — funds in checking accounts that can be accessed on demand','Certificates of deposit (CDs) with maturities of less than one year','Corporate bonds and stocks held in brokerage investment accounts'],correctAnswer:1,explanation:'M1 = currency (coins + paper money) + checkable deposits + traveler\\'s checks. Checkable deposits (demand deposits) are funds in checking accounts that can be withdrawn or spent at any time via check, debit card, or electronic transfer. They\\'re included in M1 because they\\'re as liquid as cash — you can spend them immediately. Savings deposits are M2 (less liquid).'},
      {question:'Why are credit cards NOT considered money or included in any measure of the money supply?',options:['Credit cards are too new — the Federal Reserve has not updated its classifications since the 1950s','Using a credit card creates a loan (short-term debt), not a payment from an existing stock of money that you own','Credit cards are only accepted by large businesses, not by the general economy','Credit cards are included in M2 but excluded from M1 due to lower liquidity'],correctAnswer:1,explanation:'When you use a credit card, you\\'re borrowing from the card issuer — creating a liability (debt). Money must be an ASSET. Credit cards are IOUs, not money. When you pay your credit card bill, THAT payment uses money (from your checking account, part of M1). Debit cards, by contrast, directly access your checking account balance — which IS money.'}
    ]}},
    {id:'macromoney1-multiplier',type:'text' as const,content:\`
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
| 1 | $1,000 | $100 | $900 |
| 2 | $900 | $90 | $810 |
| 3 | $810 | $81 | $729 |
| ... | ... | ... | ... |
| **Total** | **$10,000** | **$1,000** | **$9,000** |

- Money multiplier = 1 ÷ 0.10 = **10**
- A $1,000 initial deposit can create up to **$10,000** in total money supply
- **Maximum change in money supply** = Initial deposit × Money multiplier = $1,000 × 10 = $10,000
- **Maximum change in LOANS** (new money created) = $10,000 − $1,000 (original deposit) = **$9,000**

### Important Caveats
- This is the **maximum** possible expansion — actual expansion is less if banks hold excess reserves or people hold cash
- If the Fed changes the reserve requirement, the multiplier changes
- Lower RRR → larger multiplier → more money creation from each dollar of reserves

> 🔑 **AP Connection:** The money multiplier calculation is tested on EVERY AP exam. Remember: **Total change in money supply** = initial deposit × multiplier. **Total change in LOANS** = total change in money supply − initial deposit.
\`},
    {id:'macromoney1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'If the required reserve ratio is 20% and the Federal Reserve buys $500 million in government bonds from commercial banks, what is the maximum increase in the money supply?',options:['$100 million — the amount banks must hold in required reserves from the bond purchase','$2.5 billion — calculated by multiplying the $500 million by the money multiplier (1 ÷ 0.20 = 5)','$500 million — the money supply increases only by the amount of the bond purchase','$10 billion — calculated using a multiplier of 20 (the inverse of 20%)'],correctAnswer:1,explanation:'Money multiplier = 1 ÷ RRR = 1 ÷ 0.20 = 5. \\nMaximum increase in money supply = $500M × 5 = **$2.5 billion**. \\nWhen the Fed buys $500M in bonds, banks receive $500M in new reserves. They lend out 80% ($400M), which becomes deposits at other banks, which lend out 80% of that ($320M), and so on. The process multiplies the initial injection by the multiplier.'},
      {question:'What would happen to the money multiplier if the Federal Reserve LOWERED the required reserve ratio from 20% to 10%?',options:['The multiplier would decrease from 5 to 2.5, reducing the banking system\\'s ability to create money','The multiplier would stay the same because it depends on the federal funds rate, not the reserve ratio','The multiplier would double from 5 to 10, increasing the maximum amount of money that can be created from each dollar of reserves','The multiplier would become zero because banks would no longer be required to hold any reserves'],correctAnswer:2,explanation:'At RRR = 20%: multiplier = 1 ÷ 0.20 = 5. \\nAt RRR = 10%: multiplier = 1 ÷ 0.10 = 10. \\nLowering the reserve requirement means banks can lend out a larger fraction of each deposit → more rounds of lending → more money creation. This is why changing the reserve requirement is such a powerful (and rarely used) tool — a small change has enormous effects on the money supply.'}
    ]}}
  ]
};\n`},
{file:'macro-multiplier-effect-part1.ts', content:`export const macroMultiplierEffectPart1Data = {
  topicSlug: 'macro-multiplier-effect',
  sections: [
    {id:'macromult1-intro',type:'text' as const,content:\`
# 🔄 The Multiplier Effect

**Part 1 of 7 — How Spending Ripples Through the Economy**

---

| Section |
|---------|
| 📖 The Spending Multiplier |
| MPC & MPS |
| Tax Multiplier |
| Applying Multipliers |

> 🔑 **Key Concept:** The multiplier shows how an initial change in spending creates a **chain reaction** that amplifies the total effect on GDP. The AP exam tests the **spending multiplier**, **tax multiplier**, and the relationship between **MPC** (Marginal Propensity to Consume) and **MPS** (Marginal Propensity to Save).
\`},
    {id:'macromult1-concept',type:'text' as const,content:\`
## 📖 The Spending Multiplier

### Key Definitions

| Term | Definition | Formula |
|---|---|---|
| **MPC** | Fraction of additional income that is **spent** | MPC = ΔConsumption ÷ ΔIncome |
| **MPS** | Fraction of additional income that is **saved** | MPS = ΔSaving ÷ ΔIncome |
| **MPC + MPS** | Always equals **1** | If MPC = 0.8, then MPS = 0.2 |

### Spending Multiplier

**Spending Multiplier = 1 ÷ MPS = 1 ÷ (1 − MPC)**

### Example: MPC = 0.80

| Round | Spending | Savings |
|---|---|---|
| Initial spending | $100 | — |
| Round 1 | $80 (= $100 × 0.80) | $20 |
| Round 2 | $64 (= $80 × 0.80) | $16 |
| Round 3 | $51.20 | $12.80 |
| ... | ... | ... |
| **Total ΔY** | **$500** | — |

- Spending multiplier = 1 ÷ 0.20 = **5**
- Total change in GDP = $100 × 5 = **$500**
- An initial $100 spending increase creates $500 in total economic output!

### Why It Works
Each person's spending becomes another person's income. That person spends a fraction (MPC) and saves the rest (MPS). The spending continues to ripple through the economy, getting smaller each round, until it diminishes to near zero.

> 🔑 **AP Connection:** The higher the MPC, the larger the multiplier. If MPC = 0.90, multiplier = 10. If MPC = 0.75, multiplier = 4. The AP exam tests this calculation in virtually every exam.
\`},
    {id:'macromult1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'If the marginal propensity to consume (MPC) is 0.75, what is the spending multiplier?',options:['0.75 — the multiplier equals the MPC','3 — calculated as MPC ÷ MPS = 0.75 ÷ 0.25','4 — calculated as 1 ÷ MPS = 1 ÷ (1 − 0.75) = 1 ÷ 0.25','7.5 — calculated as 10 × MPC'],correctAnswer:2,explanation:'Spending multiplier = 1 ÷ MPS = 1 ÷ (1 − MPC) = 1 ÷ (1 − 0.75) = 1 ÷ 0.25 = **4**. \\nThis means every $1 of new spending generates $4 in total GDP. With MPC = 0.75, each round preserves 75% of the spending: $1 → $0.75 → $0.5625 → ... totaling $4.'},
      {question:'If MPC = 0.80 and the government increases spending by $50 billion, what is the maximum change in GDP?',options:['$50 billion — GDP increases by exactly the amount of government spending','$250 billion — calculated as $50B × spending multiplier (1 ÷ 0.20 = 5)','$40 billion — calculated as $50B × MPC (0.80)','$200 billion — calculated as $50B × tax multiplier (MPC ÷ MPS)'],correctAnswer:1,explanation:'Spending multiplier = 1 ÷ MPS = 1 ÷ 0.20 = 5. \\nMaximum ΔGDP = $50B × 5 = **$250 billion**. \\nThe initial $50B of government spending creates income for workers and suppliers, who spend 80% ($40B), creating income for others, who spend 80% of that ($32B), and so on until the total reaches $250B.'}
    ]}},
    {id:'macromult1-tax',type:'text' as const,content:\`
## 📖 The Tax Multiplier

### Tax Multiplier = −MPC ÷ MPS

(The negative sign indicates that tax cuts INCREASE GDP and tax increases DECREASE GDP)

### Example: MPC = 0.80
- Tax multiplier = −0.80 ÷ 0.20 = **−4**
- A $100B tax CUT → GDP increases by $100B × 4 = $400B
- A $100B tax INCREASE → GDP decreases by $100B × 4 = $400B

### Why the Tax Multiplier < Spending Multiplier

| Multiplier | Formula | Example (MPC = 0.80) |
|---|---|---|
| **Spending** | 1 ÷ MPS | 1 ÷ 0.20 = **5** |
| **Tax** | MPC ÷ MPS | 0.80 ÷ 0.20 = **4** |

- Tax multiplier is always **1 less** than the spending multiplier (in absolute value)
- Reason: Government spending is 100% injected into the economy; a tax cut is partially saved (MPS portion) before any spending begins

### Applying Multipliers to Close Gaps

To close a **recessionary gap** of $200B (with MPC = 0.75, spending multiplier = 4):
- Through spending: ΔG = Gap ÷ Multiplier = $200B ÷ 4 = **$50B spending increase**
- Through taxes: ΔT = Gap ÷ Tax Multiplier = $200B ÷ 3 = **$66.7B tax cut**

> 🔑 **AP Connection:** The FRQ regularly asks: "Calculate the amount of government spending OR tax change needed to close a recessionary/inflationary gap." Use: **Required ΔG = Gap ÷ Spending Multiplier** or **Required ΔT = Gap ÷ Tax Multiplier**.
\`},
    {id:'macromult1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'If MPC = 0.80 and the economy has a recessionary gap of $100 billion, how much must the government INCREASE spending to close the gap?',options:['$100 billion — the spending increase must equal the full size of the gap','$80 billion — the spending increase equals the gap multiplied by MPC','$20 billion — calculated as $100B ÷ spending multiplier (1 ÷ 0.20 = 5)','$500 billion — calculated as $100B × spending multiplier (5)'],correctAnswer:2,explanation:'Spending multiplier = 1 ÷ 0.20 = 5. \\nRequired ΔG = Gap ÷ Multiplier = $100B ÷ 5 = **$20B**. \\nThe government only needs to spend $20B because the multiplier amplifies it: $20B × 5 = $100B total change in GDP, exactly closing the gap. This is the power of the multiplier — a relatively small initial spending change can close a large output gap.'},
      {question:'Why is the tax multiplier always smaller (in absolute value) than the spending multiplier?',options:['Taxes are collected by state governments, not the federal government, reducing their economic impact','Government spending enters the economy immediately and in full, while a tax cut is partially saved (MPS) before any spending occurs — so the first-round impact is smaller','The Federal Reserve controls tax policy and intentionally makes it less effective than spending policy','Tax changes take longer to implement than spending changes, so inflation erodes their impact before they take effect'],correctAnswer:1,explanation:'When the government spends $100, all $100 enters the spending stream immediately. When taxes are cut by $100, consumers receive $100 in extra income but save a portion (MPS × $100) and spend only (MPC × $100). With MPC = 0.80, only $80 enters the spending stream in the first round. This smaller starting amount means the total multiplied effect is smaller: tax multiplier = spending multiplier − 1.'}
    ]}}
  ]
};\n`},
{file:'macro-phillips-curve-part1.ts', content:`export const macroPhillipsCurvePart1Data = {
  topicSlug: 'macro-phillips-curve',
  sections: [
    {id:'macrophill1-intro',type:'text' as const,content:\`
# 📉 The Phillips Curve

**Part 1 of 7 — Inflation-Unemployment Tradeoff**

---

| Section |
|---------|
| 📖 Short-Run Phillips Curve (SRPC) |
| Long-Run Phillips Curve (LRPC) |
| Shifts vs. Movements |
| Stagflation & Supply Shocks |

> 🔑 **Key Concept:** The Phillips Curve shows the **inverse relationship** between inflation and unemployment in the short run. In the long run, the Phillips Curve is vertical at the natural rate of unemployment (NRU). The AP exam heavily tests this graph and its relationship to the AD-AS model.
\`},
    {id:'macrophill1-srpc',type:'text' as const,content:\`
## 📖 Short-Run Phillips Curve (SRPC)

### The Tradeoff
In the short run, there is an **inverse (negative) relationship** between inflation and unemployment:
- **Lower unemployment → Higher inflation** (economy overheating; too much demand)
- **Higher unemployment → Lower inflation** (economy slowing; insufficient demand)

### Connection to AD-AS

| AD-AS | Phillips Curve |
|---|---|
| AD shifts RIGHT → Higher PL, Higher Y | Move UP and LEFT along SRPC → higher inflation, lower unemployment |
| AD shifts LEFT → Lower PL, Lower Y | Move DOWN and RIGHT along SRPC → lower inflation, higher unemployment |

### Key Insight
- **Movement ALONG the SRPC** = changes in aggregate demand (AD shifts)
- **Shift of the SRPC** = changes in aggregate supply (SRAS shifts) or changes in inflation expectations

### What Shifts the SRPC?

| Shifts SRPC RIGHT (worse tradeoff) | Shifts SRPC LEFT (better tradeoff) |
|---|---|
| Higher inflation expectations | Lower inflation expectations |
| Negative supply shock (oil price spike) | Positive supply shock (new technology) |
| Higher input costs | Lower input costs |

> 🔑 **AP Connection:** The most common mistake is confusing a MOVEMENT along the SRPC (AD change) with a SHIFT of the SRPC (supply shock or expectations change). The AP exam tests this distinction every year.
\`},
    {id:'macrophill1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'In the short-run Phillips Curve model, an increase in aggregate demand (AD shifts right) would cause:',options:['A movement UP and to the LEFT along the SRPC — inflation rises and unemployment falls','A shift of the entire SRPC to the right — both inflation and unemployment increase at every point','A movement DOWN and to the RIGHT along the SRPC — both inflation and unemployment increase simultaneously','A shift of the entire SRPC to the left — the inflation-unemployment tradeoff improves at every point'],correctAnswer:0,explanation:'When AD increases (shifts right), the economy produces more output → unemployment falls → but the price level rises (inflation increases). On the Phillips Curve, this is a movement UP and to the LEFT along the existing SRPC — lower unemployment at the cost of higher inflation. This is a movement, not a shift, because it\\'s caused by a demand change.'},
      {question:'What would cause the Short-Run Phillips Curve to shift to the RIGHT (upward)?',options:['An increase in government spending that boosts aggregate demand and reduces unemployment','A positive supply shock, such as a dramatic decrease in global oil prices, that reduces production costs','An increase in inflation expectations or a negative supply shock (like a surge in oil prices) that raises costs across the economy','A decrease in aggregate demand caused by a contractionary monetary policy from the Federal Reserve'],correctAnswer:2,explanation:'The SRPC shifts right (upward) when the tradeoff between inflation and unemployment gets WORSE — the economy experiences higher inflation at every level of unemployment. This happens with: (1) negative supply shocks (oil price spikes raise costs), or (2) higher inflation expectations (workers demand higher wages, firms raise prices preemptively). Both correspond to an SRAS shift LEFT in the AD-AS model.'}
    ]}},
    {id:'macrophill1-lrpc',type:'text' as const,content:\`
## 📖 Long-Run Phillips Curve (LRPC)

### The LRPC Is Vertical at the Natural Rate of Unemployment (NRU)

In the long run, there is **NO tradeoff** between inflation and unemployment. The economy gravitates to the NRU regardless of the inflation rate.

### Why?
- In the long run, workers and firms **adjust expectations** to match actual inflation
- If the government tries to keep unemployment permanently below the NRU by stimulating demand:
  1. Initially: unemployment falls, inflation rises (move along SRPC)
  2. Workers notice higher prices → demand higher wages
  3. Higher wages → firms\\\' costs rise → they reduce hiring
  4. Unemployment returns to NRU, but now at a **higher inflation rate**
  5. The SRPC **shifts up** to reflect new, higher inflation expectations

### Stagflation
- **Stagflation** = high inflation + high unemployment simultaneously
- Caused by a **negative supply shock** (e.g., 1970s oil crisis)
- SRPC shifts RIGHT → both inflation and unemployment increase
- Regular fiscal and monetary policy can't fix both problems at once:
  - Expansionary policy → reduces unemployment but worsens inflation
  - Contractionary policy → reduces inflation but worsens unemployment

> 🔑 **AP Connection:** The LRPC being vertical at NRU means that in the long run, attempts to keep unemployment permanently below the natural rate will only produce **accelerating inflation** without lasting employment gains. This is tested in the FRQ regularly.
\`},
    {id:'macrophill1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'Why is the Long-Run Phillips Curve (LRPC) vertical at the natural rate of unemployment?',options:['The government permanently controls both inflation and unemployment in the long run through automatic stabilizers','In the long run, inflation expectations fully adjust to actual inflation, so there is no lasting tradeoff between inflation and unemployment — the economy returns to the natural rate regardless of the inflation rate','The natural rate of unemployment is always zero in the long run because all frictional and structural unemployment is eliminated','Monetary policy becomes perfectly effective in the long run, allowing the Federal Reserve to set both inflation and unemployment at whatever level it prefers'],correctAnswer:1,explanation:'The key insight is expectations adjustment. If the government pushes unemployment below the NRU through expansionary policy, inflation rises. Initially, workers don\\'t realize inflation has increased — but eventually they notice and demand higher wages. Higher wages raise firms\\' costs, causing them to reduce hiring. Unemployment returns to the NRU, but at a higher inflation rate. This process repeats, meaning you can have any inflation rate at the NRU — hence the LRPC is vertical.'},
      {question:'Stagflation (high inflation + high unemployment) creates a policy dilemma because:',options:['Expansionary policy would reduce both inflation and unemployment simultaneously, so there is no dilemma','Fiscal and monetary policy tools can address only one problem at a time — fighting inflation (contractionary policy) worsens unemployment, while fighting unemployment (expansionary policy) worsens inflation','The Federal Reserve loses all ability to influence the economy during periods of stagflation','Congress is constitutionally prohibited from passing fiscal policy legislation during periods of stagflation'],correctAnswer:1,explanation:'Stagflation is caused by a supply shock (SRAS shifts left / SRPC shifts right). The economy suffers both rising prices and rising unemployment simultaneously. Expansionary policy (shifting AD right) would fight unemployment but push inflation even higher. Contractionary policy (shifting AD left) would fight inflation but push unemployment even higher. Both traditional tools make one problem worse while helping the other — there\\'s no easy solution.'}
    ]}}
  ]
};\n`},
{file:'macro-comparative-advantage-part1.ts', content:`export const macroComparativeAdvantagePart1Data = {
  topicSlug: 'macro-comparative-advantage',
  sections: [
    {id:'macrocomp1-intro',type:'text' as const,content:\`
# 🌍 Comparative Advantage & Trade

**Part 1 of 7 — Why Nations Trade**

---

| Section |
|---------|
| 📖 Absolute vs. Comparative Advantage |
| Calculating Opportunity Costs |
| Terms of Trade |
| Gains from Specialization |

> 🔑 **Key Concept:** Countries benefit from trade when they specialize in goods where they have a **comparative advantage** — the lowest opportunity cost. Even if one country is better at producing EVERYTHING (absolute advantage in all goods), both countries still gain from trade. This is the most counterintuitive and important idea in trade theory.
\`},
    {id:'macrocomp1-concepts',type:'text' as const,content:\`
## 📖 Absolute vs. Comparative Advantage

| Concept | Definition |
|---|---|
| **Absolute advantage** | Ability to produce MORE of a good using the same resources (higher productivity) |
| **Comparative advantage** | Ability to produce a good at a **lower opportunity cost** than another producer |

### Example

| | Wheat (tons/day) | Cloth (yards/day) |
|---|---|---|
| **Country A** | 100 | 50 |
| **Country B** | 40 | 20 |

### Step 1: Who has absolute advantage?
- Country A produces more of **BOTH goods** → absolute advantage in both wheat AND cloth

### Step 2: Calculate opportunity costs

**Country A:**
- OC of 1 wheat = 50 cloth ÷ 100 wheat = **0.5 cloth**
- OC of 1 cloth = 100 wheat ÷ 50 cloth = **2 wheat**

**Country B:**
- OC of 1 wheat = 20 cloth ÷ 40 wheat = **0.5 cloth**
- OC of 1 cloth = 40 wheat ÷ 20 cloth = **2 wheat**

### Step 3: Who has comparative advantage?
In this case, opportunity costs are **equal** — neither has a comparative advantage. Both give up the same amount of one good to produce the other. (**No gains from trade** when OCs are identical.)

Let's try a different example where trade IS beneficial:

| | Wheat (tons/day) | Cloth (yards/day) |
|---|---|---|
| **Country A** | 100 | 50 |
| **Country C** | 40 | 40 |

**Country A:** OC of 1 wheat = 50/100 = **0.5 cloth** | OC of 1 cloth = 100/50 = **2 wheat**
**Country C:** OC of 1 wheat = 40/40 = **1 cloth** | OC of 1 cloth = 40/40 = **1 wheat**

- Country A: comparative advantage in **wheat** (OC = 0.5 cloth < 1 cloth for Country C)
- Country C: comparative advantage in **cloth** (OC = 1 wheat < 2 wheat for Country A)

> 🔑 **AP Connection:** The AP exam ALWAYS tests comparative advantage calculations. The key steps: (1) calculate opportunity costs for both goods in both countries, (2) compare — the country with the LOWER opportunity cost has the comparative advantage. Trade is mutually beneficial when countries specialize in their comparative advantage.
\`},
    {id:'macrocomp1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'Country X can produce 60 cars or 30 computers per day. Country Y can produce 20 cars or 40 computers per day. Which country has a comparative advantage in producing computers?',options:['Country X — because it can produce more total goods (cars and computers combined) per day','Country Y — its opportunity cost of 1 computer is 0.5 cars, which is lower than Country X\\'s opportunity cost of 2 cars per computer','Neither country — comparative advantage only exists when one country has an absolute advantage in both goods','Country X — because it has an absolute advantage in car production, which extends to all goods'],correctAnswer:1,explanation:'Country X: OC of 1 computer = 60 cars ÷ 30 computers = 2 cars. \\nCountry Y: OC of 1 computer = 20 cars ÷ 40 computers = 0.5 cars. \\nCountry Y gives up only 0.5 cars per computer vs. Country X\\'s 2 cars. Country Y has the comparative advantage in computers and should specialize in computer production. Country X has the comparative advantage in cars (OC = 0.5 computers vs. Y\\'s 2 computers).'},
      {question:'Even if one country has an absolute advantage in producing ALL goods, trade can still be mutually beneficial. The basis for this claim is:',options:['The country with absolute advantage in everything should refuse to trade and produce all goods domestically','Both countries can gain from trade if they specialize in the good where they have a comparative advantage (lowest opportunity cost), even if one country is more efficient at producing everything','Trade only benefits the less productive country while harming the more productive one','Absolute advantage is the only factor that determines whether trade is beneficial between two countries'],correctAnswer:1,explanation:'This is the key insight of David Ricardo\\'s theory of comparative advantage. Even if Country A is more productive in both goods, both countries benefit by specializing in their comparative advantage (lowest opportunity cost). Country A produces the good where its productivity advantage is greatest, and trades for the good where its advantage is relatively smaller. Total output increases, and both countries can consume more.'}
    ]}},
    {id:'macrocomp1-terms',type:'text' as const,content:\`
## 📖 Terms of Trade

For trade to benefit BOTH countries, the exchange rate (terms of trade) must fall **between** the two countries' opportunity costs.

### From Our Example

| | OC of 1 Computer |
|---|---|
| Country X | 2 cars |
| Country Y | 0.5 cars |

**Acceptable terms of trade for 1 computer:** Between **0.5 cars** and **2 cars**

- If trade price = 1 car per computer:
  - Country Y gains: sells a computer for 1 car instead of making the car itself (which would cost 2 computers' worth of resources to make 1 car domestically)
  - Country X gains: gets a computer for 1 car instead of giving up 2 cars' worth of production

### Key Rules
1. Terms of trade must be between the two countries' opportunity costs
2. Each country exports its comparative advantage good
3. Both countries can consume BEYOND their individual PPCs through trade
4. **Trade creates total gains** — world output increases when countries specialize

### Gains from Specialization

| Without Trade | With Specialization & Trade |
|---|---|
| Each country produces some of both goods | Country X produces only cars; Country Y produces only computers |
| Total output limited by each country's PPC | Total output INCREASES — resources used more efficiently |
| Each country consumes on its PPC | Both countries consume BEYOND their individual PPCs |

> 🔑 **AP Connection:** An FRQ will often ask: "Determine the range of exchange rates at which trade would be mutually beneficial." Answer: between the two opportunity costs. If OC of Good X is 2Y for Country A and 0.5Y for Country B, terms of trade must be between 0.5Y and 2Y per unit of X.
\`},
    {id:'macrocomp1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'Country A\\'s opportunity cost of 1 bushel of wheat is 3 yards of cloth. Country B\\'s opportunity cost of 1 bushel of wheat is 1 yard of cloth. For trade in wheat to benefit both countries, the terms of trade for 1 bushel of wheat must be:',options:['Exactly 2 yards of cloth — the midpoint between the two opportunity costs','Between 1 and 3 yards of cloth — within the range of the two countries\\' opportunity costs','More than 3 yards of cloth — to ensure Country A benefits from exporting wheat','Less than 1 yard of cloth — to ensure Country B benefits from importing wheat'],correctAnswer:1,explanation:'For trade to benefit both countries, the price must fall between their opportunity costs. Country B (OC = 1 cloth/wheat) would only buy wheat if it costs LESS than 1 cloth (it can make wheat domestically for 1 cloth). Wait — Country B has the comparative advantage in wheat (lower OC), so Country B EXPORTS wheat. For B to benefit: trade price > 1 cloth. For A to benefit: trade price < 3 cloth. Terms of trade: between 1 and 3 yards of cloth per bushel of wheat.'},
      {question:'When two countries specialize according to comparative advantage and trade, what happens to total world output?',options:['Total output stays the same — trade only redistributes existing production between countries','Total output decreases because specialization makes countries dependent on each other','Total output increases because resources are allocated more efficiently — each country produces what it\\'s relatively best at','Total output increases only for the country with absolute advantage; the other country\\'s output falls'],correctAnswer:2,explanation:'Specialization based on comparative advantage increases total world output because each country focuses resources on the good it produces at the lowest opportunity cost. When Country X makes only cars (its comparative advantage) and Country Y makes only computers (its comparative advantage), total combined production of cars AND computers exceeds what both countries could produce independently. This is the mutual gain from trade.'}
    ]}}
  ]
};\n`},
{file:'macro-international-trade-finance-part1.ts', content:`export const macroInternationalTradeFinancePart1Data = {
  topicSlug: 'macro-international-trade-finance',
  sections: [
    {id:'macrointr1-intro',type:'text' as const,content:\`
# 🌐 International Trade & Finance

**Part 1 of 7 — Exchange Rates & the Balance of Payments**

---

| Section |
|---------|
| 📖 Exchange Rates |
| Supply & Demand for Currencies |
| Balance of Payments |
| Trade Deficits & Surpluses |

> 🔑 **Key Concept:** The AP exam tests exchange rate determination through **supply and demand for currencies** in the foreign exchange (forex) market, and how changes in exchange rates affect **net exports** and the broader economy. You must also understand the **balance of payments** accounts.
\`},
    {id:'macrointr1-exchange',type:'text' as const,content:\`
## 📖 Exchange Rates

### Key Definitions
- **Exchange rate:** The price of one currency in terms of another (e.g., $1 = 110 yen)
- **Appreciation:** A currency increases in value (buys more foreign currency)
- **Depreciation:** A currency decreases in value (buys less foreign currency)

### Effects of Currency Changes

| Dollar... | U.S. Exports | U.S. Imports | Net Exports | AD |
|---|---|---|---|---|
| **Appreciates** (stronger) | More expensive for foreigners → exports ↓ | Cheaper for Americans → imports ↑ | ↓ (deficit widens) | Shifts LEFT |
| **Depreciates** (weaker) | Cheaper for foreigners → exports ↑ | More expensive for Americans → imports ↓ | ↑ (deficit narrows) | Shifts RIGHT |

### What Causes Currency Appreciation/Depreciation?

| Factor | Effect on Dollar |
|---|---|
| **Higher U.S. interest rates** | Dollar APPRECIATES — foreign investors buy dollars to invest in higher-return U.S. assets (demand for dollars rises) |
| **Higher U.S. inflation** | Dollar DEPRECIATES — U.S. goods become relatively more expensive (demand for dollars falls) |
| **Stronger U.S. economy (growth)** | Dollar APPRECIATES — attracted foreign investment increases demand for dollars |
| **Increased demand for U.S. exports** | Dollar APPRECIATES — foreigners need dollars to buy U.S. goods |
| **U.S. trade deficit** | Dollar DEPRECIATES — more dollars flow out to buy imports than flow in from exports |

> 🔑 **AP Connection:** The AP exam frequently asks: "If U.S. interest rates rise relative to other countries, what happens to the dollar?" Answer: Dollar APPRECIATES because foreign investors demand more dollars to invest in higher-yield U.S. assets → demand for dollars rises in the forex market → dollar value rises.
\`},
    {id:'macrointr1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'If the U.S. dollar appreciates (increases in value) relative to the Japanese yen, what happens to U.S. exports to Japan?',options:['U.S. exports to Japan increase because American goods become cheaper for Japanese buyers','U.S. exports to Japan decrease because American goods become more expensive for Japanese buyers when priced in yen','U.S. exports are unaffected by exchange rate changes because they are priced in dollars','U.S. exports to Japan increase because a stronger dollar signals a healthier American economy'],correctAnswer:1,explanation:'When the dollar appreciates against the yen, each dollar costs more yen. U.S. goods — priced in dollars — become more expensive for Japanese consumers when converted to yen. A $10 product that previously cost 1,100 yen (at $1 = 110 yen) now costs 1,300 yen (at $1 = 130 yen). This price increase reduces U.S. exports to Japan.'},
      {question:'If inflation in the United States rises significantly higher than inflation in Europe, what is the most likely effect on the dollar-euro exchange rate?',options:['The dollar appreciates because higher inflation signals a stronger, growing economy','The dollar depreciates because U.S. goods become relatively more expensive, reducing foreign demand for dollars','The exchange rate does not change because inflation affects only domestic prices, not currency values','The euro depreciates because European investors prefer to hold assets in higher-inflation currencies'],correctAnswer:1,explanation:'Higher U.S. inflation makes American goods more expensive relative to European goods. Foreign buyers shift from U.S. products to cheaper European alternatives → demand for dollars falls (fewer foreigners need dollars to buy U.S. goods) → the dollar depreciates relative to the euro. Additionally, U.S. consumers buy more imports (now relatively cheaper) → supply of dollars in the forex market increases → further dollar depreciation.'}
    ]}},
    {id:'macrointr1-bop',type:'text' as const,content:\`
## 📖 Balance of Payments

The balance of payments records ALL economic transactions between a country and the rest of the world.

| Account | Includes | Example |
|---|---|---|
| **Current account** | Trade in goods & services, investment income, net transfers | U.S. imports oil (trade); U.S. company earns profits from a foreign factory (income); foreign aid sent abroad (transfer) |
| **Capital/Financial account** | Purchase/sale of financial assets and real assets | Foreign investor buys U.S. Treasury bonds; American company builds a factory in Mexico |

### Key Rule: Current Account + Capital Account = 0

If a country has a **current account deficit** (imports > exports), it must have a **capital account surplus** (more foreign investment flowing IN).

### Why?
- When the U.S. buys more goods from abroad than it sells (current account deficit), dollars flow out to foreign sellers
- Those foreign sellers (or their governments) use those dollars to buy U.S. assets (Treasury bonds, stocks, real estate) — creating a capital account surplus
- The U.S. current account deficit (≈ $800B+) is financed by foreign purchases of U.S. assets

### Trade Deficits — Good or Bad?
| Argument: Deficits Are Concerning | Argument: Deficits Are Not Necessarily Bad |
|---|---|
| U.S. manufacturing jobs lost to imports | Consumers benefit from cheaper imported goods |
| Growing foreign debt (foreigners own more U.S. assets) | Capital inflows fund domestic investment |
| Dependence on foreign lending | Strong dollar attracts foreign investment |

> 🔑 **AP Connection:** The relationship between the current account and capital account is critical: **if one is in deficit, the other must be in surplus** (they sum to zero). This is tested in both multiple-choice and FRQ.
\`},
    {id:'macrointr1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'If the United States has a current account deficit of $500 billion, what must be true about its capital (financial) account?',options:['The capital account must also be in deficit by $500 billion — both accounts move in the same direction','The capital account must be in surplus of approximately $500 billion — the two accounts must balance to zero','The capital account is unrelated to the current account and can be in either surplus or deficit independently','The capital account is always zero because the United States does not allow foreign investment in domestic assets'],correctAnswer:1,explanation:'The balance of payments must balance: Current Account + Capital Account ≈ 0. If the current account has a $500B deficit (the U.S. imports more than it exports), the capital account must show a roughly $500B surplus (foreign investment flowing into the U.S. exceeds U.S. investment flowing abroad). The dollars sent abroad to buy imports come back as foreign purchases of U.S. stocks, bonds, and real estate.'},
      {question:'The Federal Reserve raises U.S. interest rates. What is the expected effect on the U.S. dollar and net exports?',options:['The dollar depreciates and net exports increase because lower rates attract foreign investment','The dollar appreciates and net exports decrease — higher rates attract foreign capital (increasing demand for dollars), but the stronger dollar makes U.S. exports more expensive and imports cheaper','The dollar is unaffected because the Federal Reserve cannot influence exchange rates through interest rate policy','The dollar depreciates and net exports decrease because higher rates cause a recession that reduces all economic activity'],correctAnswer:1,explanation:'Higher U.S. interest rates → higher returns on U.S. financial assets → foreign investors buy more U.S. assets → they need dollars to do so → demand for dollars rises in the forex market → dollar appreciates. However, a stronger dollar makes U.S. exports more expensive for foreigners (exports ↓) and foreign imports cheaper for Americans (imports ↑) → net exports decrease → AD shifts left. This is one way monetary policy affects the economy through the exchange rate channel.'}
    ]}}
  ]
};\n`},
{file:'macro-open-economy-part1.ts', content:`export const macroOpenEconomyPart1Data = {
  topicSlug: 'macro-open-economy',
  sections: [
    {id:'macroopen1-intro',type:'text' as const,content:\`
# 🌏 Open Economy Macroeconomics

**Part 1 of 7 — Connecting Domestic & International Markets**

---

| Section |
|---------|
| 📖 The Loanable Funds Market |
| The Foreign Exchange Market |
| Linking the Two Markets |
| Policy Effects in an Open Economy |

> 🔑 **Key Concept:** In an open economy, the **loanable funds market** (determines real interest rates) and the **foreign exchange market** (determines exchange rates) are interconnected. Changes in fiscal or monetary policy ripple through both markets. This is one of the most heavily tested topics in AP Macroeconomics.
\`},
    {id:'macroopen1-loanable',type:'text' as const,content:\`
## 📖 The Loanable Funds Market

### Supply and Demand for Loanable Funds

| | Loanable Funds Market |
|---|---|
| **Demand** | Borrowers (businesses investing + government borrowing) |
| **Supply** | Savers (households + foreign investors) |
| **Price** | Real interest rate |
| **Equilibrium** | Where supply = demand → determines the real interest rate |

### Shifters

| Demand shifts RIGHT (more borrowing) | Supply shifts RIGHT (more saving) |
|---|---|
| Business optimism, new technology | Higher disposable income |
| Government budget DEFICIT (government borrows) | Tax incentives for saving |
| Investment tax credits | Foreign capital inflow |

### Government Deficits & Crowding Out
1. Government runs a budget deficit → increased demand for loanable funds → demand shifts RIGHT
2. Real interest rate RISES
3. Private investment FALLS (crowding out)
4. Higher U.S. interest rates → foreign investors attracted → demand for dollars rises → dollar APPRECIATES
5. Stronger dollar → exports fall, imports rise → net exports DECREASE

### The Full Chain: Government Deficit
**Deficit → ↑ Demand for LF → ↑ Real interest rate → ↓ Private investment (crowding out) → ↑ Demand for dollars → Dollar appreciates → ↓ Net exports**

This is called the **"twin deficits"** phenomenon: budget deficits can lead to trade deficits through the interest rate-exchange rate channel.

> 🔑 **AP Connection:** The AP FRQ frequently asks you to trace the full chain from a fiscal policy action through the loanable funds market → interest rate → exchange rate → net exports. Practice drawing both graphs side by side.
\`},
    {id:'macroopen1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'If the U.S. government increases its budget deficit (borrowing more), what happens in the loanable funds market?',options:['Supply of loanable funds increases, pushing real interest rates down and encouraging more private investment','Demand for loanable funds increases (government competes for funds), pushing real interest rates UP and crowding out some private investment','Neither supply nor demand changes because government borrowing is separate from private savings and investment','Supply of loanable funds decreases because the government takes money out of the banking system directly'],correctAnswer:1,explanation:'When the government runs a larger deficit, it borrows more in the loanable funds market → demand for LF shifts right → real interest rate rises → at higher rates, private businesses borrow and invest less (crowding out). The government\\'s borrowing competes with private sector borrowers for the same pool of available savings.'},
      {question:'How does a U.S. budget deficit contribute to a trade deficit (the "twin deficits" theory)?',options:['Budget deficits directly reduce exports by raising the prices of American goods through inflation','Budget deficits raise real interest rates → attract foreign capital → demand for dollars rises → dollar appreciates → exports become more expensive, imports become cheaper → trade deficit widens','Budget deficits reduce government spending on export subsidies, making U.S. goods uncompetitive internationally','There is no connection between budget deficits and trade deficits in economic theory'],correctAnswer:1,explanation:'The chain: Budget deficit → government borrows more → real interest rates rise → foreign investors buy U.S. assets to earn higher returns → they need dollars → demand for dollars rises → dollar appreciates → a stronger dollar makes U.S. exports more expensive (exports ↓) and foreign imports cheaper (imports ↑) → net exports decrease → trade deficit widens. This is why budget deficits and trade deficits often move together.'}
    ]}},
    {id:'macroopen1-policy',type:'text' as const,content:\`
## 📖 Policy Effects in an Open Economy

### Expansionary Fiscal Policy (↑G or ↓T)

| Step | Market | Effect |
|---|---|---|
| 1 | AD-AS | AD shifts right → ↑ output, ↑ price level |
| 2 | Loanable funds | Deficit → ↑ demand for LF → ↑ real interest rate |
| 3 | Forex market | Higher rates → foreign $ inflow → ↑ demand for dollars → dollar appreciates |
| 4 | Trade | Stronger dollar → ↓ exports, ↑ imports → ↓ net exports (partially offsets AD increase) |

### Expansionary Monetary Policy (Fed buys bonds / ↓ rates)

| Step | Market | Effect |
|---|---|---|
| 1 | Money market | ↑ money supply → ↓ nominal interest rate |
| 2 | AD-AS | Lower rates → ↑ investment, ↑ consumption → AD shifts right |
| 3 | Forex market | Lower rates → capital outflow → ↓ demand for dollars → dollar DEPRECIATES |
| 4 | Trade | Weaker dollar → ↑ exports, ↓ imports → ↑ net exports (reinforces AD increase) |

### Key Difference
- **Fiscal expansion** is partially offset by crowding out AND a stronger dollar (net exports fall)
- **Monetary expansion** is reinforced by a weaker dollar (net exports rise)
- This makes monetary policy potentially MORE effective in an open economy

> 🔑 **AP Connection:** The AP exam frequently asks you to compare fiscal vs. monetary policy effects on exchange rates and net exports. Key insight: fiscal expansion → dollar appreciates → net exports fall (partial offset). Monetary expansion → dollar depreciates → net exports rise (reinforcement).
\`},
    {id:'macroopen1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'When the Federal Reserve conducts expansionary monetary policy (increasing the money supply), what happens to the U.S. dollar and net exports?',options:['The dollar appreciates and net exports decrease because lower interest rates signal economic weakness','The dollar depreciates and net exports increase — lower interest rates cause capital outflow, reducing demand for dollars, weakening the dollar, and making U.S. exports cheaper for foreigners','The dollar is unaffected because monetary policy only influences domestic interest rates, not exchange rates','The dollar appreciates and net exports increase because more money in circulation strengthens the currency'],correctAnswer:1,explanation:'Expansionary monetary policy → lower interest rates → U.S. assets offer lower returns → foreign investors move capital elsewhere → reduced demand for dollars → dollar depreciates. A weaker dollar makes U.S. exports cheaper (exports ↑) and foreign imports more expensive (imports ↓) → net exports increase → AD shifts right further. Monetary expansion is REINFORCED by the exchange rate channel.'},
      {question:'Why is expansionary fiscal policy partially offset in an open economy?',options:['Fiscal policy directly reduces the money supply, which counteracts its stimulative effect on aggregate demand','Government spending crowds out private investment AND appreciates the dollar (reducing net exports), both of which partially offset the increase in aggregate demand','Congress typically raises taxes at the same time as increasing spending, which cancels out any expansionary effect','The Federal Reserve always responds to fiscal expansion by raising interest rates, completely neutralizing the fiscal stimulus'],correctAnswer:1,explanation:'Expansionary fiscal policy → budget deficit → ↑ real interest rates → TWO offsetting effects: (1) Crowding out: higher rates reduce private investment; (2) Dollar appreciation: higher rates attract foreign capital → dollar strengthens → exports fall, imports rise → net exports decrease. Both effects partially offset the initial increase in AD from the fiscal stimulus.'}
    ]}}
  ]
};\n`}
];

for (const f of files) {
  fs.writeFileSync(path.join(dir, f.file), f.content);
  console.log('✅ Wrote ' + f.file);
}
console.log('\nDone: ' + files.length + ' files written');
