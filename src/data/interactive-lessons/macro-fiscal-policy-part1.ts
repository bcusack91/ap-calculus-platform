export const macroFiscalPolicyPart1Data = {
  topicSlug: 'macro-fiscal-policy',
  sections: [
    {id:'macrofis1-intro',type:'text' as const,content:`
# 🏛️ Fiscal Policy

**Part 1 of 7 — Government Taxing & Spending to Stabilize the Economy**

---

| Section |
|---------|
| 📖 What Is Fiscal Policy? |
| Expansionary vs. Contractionary |
| Automatic Stabilizers |
| Crowding-Out Effect |

> 🔑 **Key Concept:** Fiscal policy is the use of **government spending** and **taxation** to influence aggregate demand. The AP exam tests the difference between **discretionary** fiscal policy (deliberate actions by Congress) and **automatic stabilizers** (built-in mechanisms that respond without legislation).
`},
    {id:'macrofis1-types',type:'text' as const,content:`
## 📖 Types of Fiscal Policy

| Type | When Used | Actions | Effect on AD |
|---|---|---|---|
| **Expansionary** | Recession / recessionary gap | ↑ Government spending and/or ↓ Taxes | AD shifts RIGHT → output increases, unemployment falls |
| **Contractionary** | Inflation / inflationary gap | ↓ Government spending and/or ↑ Taxes | AD shifts LEFT → output decreases, inflation falls |

### Discretionary vs. Automatic

| Type | Description | Examples |
|---|---|---|
| **Discretionary** | Deliberate actions requiring legislation by Congress and the president | Stimulus packages, infrastructure bills, tax cuts, bailouts |
| **Automatic stabilizers** | Built into the system; activate automatically without legislation | Progressive income tax, unemployment insurance, welfare programs, Medicaid |

### How Automatic Stabilizers Work

**During a recession:**
- Incomes fall → people pay **less** in income taxes (progressive tax) → more disposable income → softens the decline in consumption
- More people qualify for **unemployment insurance** → income support → spending doesn't fall as far
- More people qualify for **welfare/Medicaid** → basic needs met → prevents demand from collapsing

**During inflation:**
- Incomes rise → people pay **more** in income taxes → reduces disposable income → dampens excess spending
- Fewer people need unemployment/welfare → government spending falls automatically

> 🔑 **AP Connection:** The AP exam frequently asks why automatic stabilizers are advantageous: they act **immediately** without legislative delays, and they don't require political agreement. Discretionary policy has **time lags** (recognition, legislative, implementation).
`},
    {id:'macrofis1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'During a recession, which fiscal policy action would be appropriate?',options:['Contractionary fiscal policy — raising taxes and cutting government spending to reduce aggregate demand','Expansionary fiscal policy — cutting taxes and/or increasing government spending to increase aggregate demand','Neither — fiscal policy cannot affect aggregate demand during a recession','Raising interest rates through the Federal Reserve to encourage more saving and investment'],correctAnswer:1,explanation:'During a recession (recessionary gap), the economy has insufficient aggregate demand, causing high unemployment. Expansionary fiscal policy — tax cuts (increasing disposable income and consumption) and/or increased government spending (directly increasing AD) — shifts AD to the right, closing the gap. Note: raising interest rates is monetary policy (the Fed), not fiscal policy (Congress).'},
      {question:'Why is the progressive income tax considered an automatic stabilizer?',options:['Congress must vote to change tax rates every year, which makes it discretionary policy','As incomes fall during a recession, people automatically move to lower tax brackets and pay a smaller percentage of their income in taxes, preserving more disposable income and cushioning the decline in consumption','Progressive taxes only apply to corporations and do not affect individual consumer spending','The president can unilaterally adjust tax rates without congressional approval to respond to recessions'],correctAnswer:1,explanation:'With progressive taxation, people pay a higher percentage of income as their income rises. During a recession, declining incomes automatically move people into lower tax brackets → they keep a larger share of their income → consumption doesn\'t fall as sharply. During expansion, rising incomes push people into higher brackets → more income goes to taxes → dampens excessive spending. This happens automatically without any new legislation.'}
    ]}},
    {id:'macrofis1-crowding',type:'text' as const,content:`
## 📖 The Crowding-Out Effect

### What Is Crowding Out?
When the government borrows heavily to finance deficit spending, it **competes with the private sector** for available funds (loanable funds), pushing interest rates UP. Higher interest rates reduce private investment, partially offsetting the stimulus.

### How It Works
1. Government runs a budget deficit → borrows from the loanable funds market
2. Increased demand for loanable funds → **interest rates rise**
3. Higher interest rates → private businesses borrow and invest **less**
4. The decrease in private investment partially offsets the increase in government spending
5. Net effect on AD is **less than the full government spending increase**

### Implications
- Crowding out does NOT mean fiscal policy is ineffective — it means the impact is **reduced**
- Crowding out is **more significant** when the economy is near full employment (limited additional resources)
- Crowding out is **less significant** during deep recessions (lots of idle resources, interest rates already low)

### Budget Concepts

| Term | Definition |
|---|---|
| **Budget deficit** | Government spending > tax revenue in a given year |
| **Budget surplus** | Tax revenue > government spending in a given year |
| **National debt** | Accumulated total of all past deficits minus surpluses |

> 🔑 **AP Connection:** Crowding out is a **major AP concept**. The FRQ often asks: "Explain how expansionary fiscal policy might be partially offset." Answer: deficit spending increases demand for loanable funds → interest rates rise → private investment falls → partially offsets the increase in AD.
`},
    {id:'macrofis1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'What is the "crowding-out effect" of expansionary fiscal policy?',options:['Government spending crowds out imports by making domestic goods cheaper relative to foreign goods','Government borrowing to finance deficit spending increases the demand for loanable funds, raising interest rates and reducing private investment — partially offsetting the stimulus','Tax cuts crowd out government revenue so completely that the government cannot afford to operate','Government spending crowds out all private-sector economic activity, making the entire economy government-controlled'],correctAnswer:1,explanation:'When the government borrows to fund deficit spending, it enters the loanable funds market as a large borrower, increasing demand for funds → interest rates rise → private sector firms find borrowing more expensive → private investment decreases. This partially offsets the increase in AD from government spending. The net effect of fiscal policy is positive but smaller than it would be without crowding out.'},
      {question:'An economy is in a severe recession with 12% unemployment. A supporter of expansionary fiscal policy argues that crowding out will be minimal. What is the BEST justification for this argument?',options:['The government never needs to borrow during recessions because tax revenues automatically rise','During deep recessions, interest rates are already very low and there are idle savings, so additional government borrowing has less impact on interest rates and private investment','Crowding out only occurs during periods of inflation, never during recessions','Banks refuse to lend to the private sector during recessions regardless of interest rates'],correctAnswer:1,explanation:'During severe recessions, there are substantial idle resources — unemployed workers, unused factory capacity, and idle savings. Interest rates are typically already very low. In this environment, the government can borrow without significantly competing with private borrowers (who aren\'t investing anyway due to low demand). This means crowding out is minimal, and fiscal policy is more effective.'}
    ]}}
  ]
};
