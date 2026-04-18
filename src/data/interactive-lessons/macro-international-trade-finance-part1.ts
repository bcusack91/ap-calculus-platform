export const macroInternationalTradeFinancePart1Data = {
  topicSlug: 'macro-international-trade-finance',
  sections: [
    {id:'macrointr1-intro',type:'text' as const,content:`
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
`},
    {id:'macrointr1-exchange',type:'text' as const,content:`
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
`},
    {id:'macrointr1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'If the U.S. dollar appreciates (increases in value) relative to the Japanese yen, what happens to U.S. exports to Japan?',options:['U.S. exports to Japan increase because American goods become cheaper for Japanese buyers','U.S. exports to Japan decrease because American goods become more expensive for Japanese buyers when priced in yen','U.S. exports are unaffected by exchange rate changes because they are priced in dollars','U.S. exports to Japan increase because a stronger dollar signals a healthier American economy'],correctAnswer:1,explanation:'When the dollar appreciates against the yen, each dollar costs more yen. U.S. goods — priced in dollars — become more expensive for Japanese consumers when converted to yen. A $10 product that previously cost 1,100 yen (at $1 = 110 yen) now costs 1,300 yen (at $1 = 130 yen). This price increase reduces U.S. exports to Japan.'},
      {question:'If inflation in the United States rises significantly higher than inflation in Europe, what is the most likely effect on the dollar-euro exchange rate?',options:['The dollar appreciates because higher inflation signals a stronger, growing economy','The dollar depreciates because U.S. goods become relatively more expensive, reducing foreign demand for dollars','The exchange rate does not change because inflation affects only domestic prices, not currency values','The euro depreciates because European investors prefer to hold assets in higher-inflation currencies'],correctAnswer:1,explanation:'Higher U.S. inflation makes American goods more expensive relative to European goods. Foreign buyers shift from U.S. products to cheaper European alternatives → demand for dollars falls (fewer foreigners need dollars to buy U.S. goods) → the dollar depreciates relative to the euro. Additionally, U.S. consumers buy more imports (now relatively cheaper) → supply of dollars in the forex market increases → further dollar depreciation.'}
    ]}},
    {id:'macrointr1-bop',type:'text' as const,content:`
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
`},
    {id:'macrointr1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'If the United States has a current account deficit of $500 billion, what must be true about its capital (financial) account?',options:['The capital account must also be in deficit by $500 billion — both accounts move in the same direction','The capital account must be in surplus of approximately $500 billion — the two accounts must balance to zero','The capital account is unrelated to the current account and can be in either surplus or deficit independently','The capital account is always zero because the United States does not allow foreign investment in domestic assets'],correctAnswer:1,explanation:'The balance of payments must balance: Current Account + Capital Account ≈ 0. If the current account has a $500B deficit (the U.S. imports more than it exports), the capital account must show a roughly $500B surplus (foreign investment flowing into the U.S. exceeds U.S. investment flowing abroad). The dollars sent abroad to buy imports come back as foreign purchases of U.S. stocks, bonds, and real estate.'},
      {question:'The Federal Reserve raises U.S. interest rates. What is the expected effect on the U.S. dollar and net exports?',options:['The dollar depreciates and net exports increase because lower rates attract foreign investment','The dollar appreciates and net exports decrease — higher rates attract foreign capital (increasing demand for dollars), but the stronger dollar makes U.S. exports more expensive and imports cheaper','The dollar is unaffected because the Federal Reserve cannot influence exchange rates through interest rate policy','The dollar depreciates and net exports decrease because higher rates cause a recession that reduces all economic activity'],correctAnswer:1,explanation:'Higher U.S. interest rates → higher returns on U.S. financial assets → foreign investors buy more U.S. assets → they need dollars to do so → demand for dollars rises in the forex market → dollar appreciates. However, a stronger dollar makes U.S. exports more expensive for foreigners (exports ↓) and foreign imports cheaper for Americans (imports ↑) → net exports decrease → AD shifts left. This is one way monetary policy affects the economy through the exchange rate channel.'}
    ]}}
  ]
};
