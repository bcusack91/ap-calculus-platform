export const macroMonetaryPolicyPart1Data = {
  topicSlug: 'macro-monetary-policy',
  sections: [
    {id:'macromone1-intro',type:'text' as const,content:`
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
`},
    {id:'macromone1-fed',type:'text' as const,content:`
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
`},
    {id:'macromone1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'If the Federal Reserve wants to combat a recession, which action should it take?',options:['Sell government bonds on the open market to remove money from the banking system','Buy government bonds on the open market to increase bank reserves, expand the money supply, and lower interest rates','Raise the federal funds rate target to discourage excessive borrowing and spending','Increase the reserve requirement so banks hold more deposits and lend less'],correctAnswer:1,explanation:'To fight a recession, the Fed uses expansionary monetary policy. Buying bonds injects money into the banking system → bank reserves increase → banks can lend more → money supply grows → interest rates fall → businesses and consumers borrow and spend more → AD shifts right → output increases and unemployment falls. Selling bonds, raising rates, or increasing reserve requirements would all be contractionary — making the recession worse.'},
      {question:'What is the "federal funds rate" and why is it important for monetary policy?',options:['The interest rate the federal government pays on the national debt, which determines total government borrowing costs','The interest rate banks charge each other for overnight loans of reserves — it is the Fed\'s primary interest rate target and influences all other interest rates in the economy','The rate of return on U.S. Treasury bonds sold to foreign governments and sovereign wealth funds','The interest rate charged to consumers on federal student loans and FHA mortgages'],correctAnswer:1,explanation:'The federal funds rate is the rate banks charge each other for overnight lending of reserves. The FOMC sets a target for this rate and uses open market operations to achieve it. The federal funds rate is crucial because it serves as the benchmark for all other interest rates in the economy — when it changes, rates on mortgages, auto loans, business loans, and credit cards adjust accordingly.'}
    ]}},
    {id:'macromone1-limits',type:'text' as const,content:`
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
`},
    {id:'macromone1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'What is a "liquidity trap" and why does it limit the effectiveness of monetary policy?',options:['A situation where the government traps excess liquidity by raising taxes, making monetary policy unnecessary','A situation where interest rates are already near zero, so the Fed cannot lower them further to stimulate borrowing and spending — expansionary monetary policy becomes ineffective','A requirement that banks hold all deposits in liquid form, preventing any lending to businesses','A trade restriction that traps foreign currency within domestic markets, destabilizing exchange rates'],correctAnswer:1,explanation:'When interest rates hit near-zero (the "zero lower bound"), the Fed\'s primary tool — lowering rates — is exhausted. Buying bonds still injects money, but banks may simply hold excess reserves instead of lending (pessimistic about repayment), and businesses may not borrow even at near-zero rates (pessimistic about future demand). This is "pushing on a string." The Fed responded to this constraint after 2008 with unconventional tools like quantitative easing (QE).'},
      {question:'What is the key advantage of monetary policy over fiscal policy in responding to economic downturns?',options:['Monetary policy is always more effective than fiscal policy at increasing aggregate demand and reducing unemployment','The Federal Reserve can act quickly without legislative approval, while fiscal policy requires Congress to pass legislation — a slow political process','Monetary policy directly increases government spending, while fiscal policy can only change interest rates','The Fed has unlimited resources to fund economic stimulus, while Congress is constrained by the federal budget'],correctAnswer:1,explanation:'The FOMC can adjust interest rates at any of its 8 annual meetings (or in emergency sessions between meetings) without needing Congressional approval. Fiscal policy requires bills to be introduced, debated, amended, passed by both chambers, and signed by the president — a process that can take months or years. This speed advantage is why monetary policy is often the first line of defense against recessions.'}
    ]}}
  ]
};
