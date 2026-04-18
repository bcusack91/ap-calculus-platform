export const macroOpenEconomyPart1Data = {
  topicSlug: 'macro-open-economy',
  sections: [
    {id:'macroopen1-intro',type:'text' as const,content:`
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
`},
    {id:'macroopen1-loanable',type:'text' as const,content:`
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
`},
    {id:'macroopen1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'If the U.S. government increases its budget deficit (borrowing more), what happens in the loanable funds market?',options:['Supply of loanable funds increases, pushing real interest rates down and encouraging more private investment','Demand for loanable funds increases (government competes for funds), pushing real interest rates UP and crowding out some private investment','Neither supply nor demand changes because government borrowing is separate from private savings and investment','Supply of loanable funds decreases because the government takes money out of the banking system directly'],correctAnswer:1,explanation:'When the government runs a larger deficit, it borrows more in the loanable funds market → demand for LF shifts right → real interest rate rises → at higher rates, private businesses borrow and invest less (crowding out). The government\'s borrowing competes with private sector borrowers for the same pool of available savings.'},
      {question:'How does a U.S. budget deficit contribute to a trade deficit (the "twin deficits" theory)?',options:['Budget deficits directly reduce exports by raising the prices of American goods through inflation','Budget deficits raise real interest rates → attract foreign capital → demand for dollars rises → dollar appreciates → exports become more expensive, imports become cheaper → trade deficit widens','Budget deficits reduce government spending on export subsidies, making U.S. goods uncompetitive internationally','There is no connection between budget deficits and trade deficits in economic theory'],correctAnswer:1,explanation:'The chain: Budget deficit → government borrows more → real interest rates rise → foreign investors buy U.S. assets to earn higher returns → they need dollars → demand for dollars rises → dollar appreciates → a stronger dollar makes U.S. exports more expensive (exports ↓) and foreign imports cheaper (imports ↑) → net exports decrease → trade deficit widens. This is why budget deficits and trade deficits often move together.'}
    ]}},
    {id:'macroopen1-policy',type:'text' as const,content:`
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
`},
    {id:'macroopen1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'When the Federal Reserve conducts expansionary monetary policy (increasing the money supply), what happens to the U.S. dollar and net exports?',options:['The dollar appreciates and net exports decrease because lower interest rates signal economic weakness','The dollar depreciates and net exports increase — lower interest rates cause capital outflow, reducing demand for dollars, weakening the dollar, and making U.S. exports cheaper for foreigners','The dollar is unaffected because monetary policy only influences domestic interest rates, not exchange rates','The dollar appreciates and net exports increase because more money in circulation strengthens the currency'],correctAnswer:1,explanation:'Expansionary monetary policy → lower interest rates → U.S. assets offer lower returns → foreign investors move capital elsewhere → reduced demand for dollars → dollar depreciates. A weaker dollar makes U.S. exports cheaper (exports ↑) and foreign imports more expensive (imports ↓) → net exports increase → AD shifts right further. Monetary expansion is REINFORCED by the exchange rate channel.'},
      {question:'Why is expansionary fiscal policy partially offset in an open economy?',options:['Fiscal policy directly reduces the money supply, which counteracts its stimulative effect on aggregate demand','Government spending crowds out private investment AND appreciates the dollar (reducing net exports), both of which partially offset the increase in aggregate demand','Congress typically raises taxes at the same time as increasing spending, which cancels out any expansionary effect','The Federal Reserve always responds to fiscal expansion by raising interest rates, completely neutralizing the fiscal stimulus'],correctAnswer:1,explanation:'Expansionary fiscal policy → budget deficit → ↑ real interest rates → TWO offsetting effects: (1) Crowding out: higher rates reduce private investment; (2) Dollar appreciation: higher rates attract foreign capital → dollar strengthens → exports fall, imports rise → net exports decrease. Both effects partially offset the initial increase in AD from the fiscal stimulus.'}
    ]}}
  ]
};
