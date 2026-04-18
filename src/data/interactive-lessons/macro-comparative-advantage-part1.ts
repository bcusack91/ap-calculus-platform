export const macroComparativeAdvantagePart1Data = {
  topicSlug: 'macro-comparative-advantage',
  sections: [
    {id:'macrocomp1-intro',type:'text' as const,content:`
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
`},
    {id:'macrocomp1-concepts',type:'text' as const,content:`
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
`},
    {id:'macrocomp1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Country X can produce 60 cars or 30 computers per day. Country Y can produce 20 cars or 40 computers per day. Which country has a comparative advantage in producing computers?',options:['Country X — because it can produce more total goods (cars and computers combined) per day','Country Y — its opportunity cost of 1 computer is 0.5 cars, which is lower than Country X\'s opportunity cost of 2 cars per computer','Neither country — comparative advantage only exists when one country has an absolute advantage in both goods','Country X — because it has an absolute advantage in car production, which extends to all goods'],correctAnswer:1,explanation:'Country X: OC of 1 computer = 60 cars ÷ 30 computers = 2 cars. \nCountry Y: OC of 1 computer = 20 cars ÷ 40 computers = 0.5 cars. \nCountry Y gives up only 0.5 cars per computer vs. Country X\'s 2 cars. Country Y has the comparative advantage in computers and should specialize in computer production. Country X has the comparative advantage in cars (OC = 0.5 computers vs. Y\'s 2 computers).'},
      {question:'Even if one country has an absolute advantage in producing ALL goods, trade can still be mutually beneficial. The basis for this claim is:',options:['The country with absolute advantage in everything should refuse to trade and produce all goods domestically','Both countries can gain from trade if they specialize in the good where they have a comparative advantage (lowest opportunity cost), even if one country is more efficient at producing everything','Trade only benefits the less productive country while harming the more productive one','Absolute advantage is the only factor that determines whether trade is beneficial between two countries'],correctAnswer:1,explanation:'This is the key insight of David Ricardo\'s theory of comparative advantage. Even if Country A is more productive in both goods, both countries benefit by specializing in their comparative advantage (lowest opportunity cost). Country A produces the good where its productivity advantage is greatest, and trades for the good where its advantage is relatively smaller. Total output increases, and both countries can consume more.'}
    ]}},
    {id:'macrocomp1-terms',type:'text' as const,content:`
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
`},
    {id:'macrocomp1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'Country A\'s opportunity cost of 1 bushel of wheat is 3 yards of cloth. Country B\'s opportunity cost of 1 bushel of wheat is 1 yard of cloth. For trade in wheat to benefit both countries, the terms of trade for 1 bushel of wheat must be:',options:['Exactly 2 yards of cloth — the midpoint between the two opportunity costs','Between 1 and 3 yards of cloth — within the range of the two countries\' opportunity costs','More than 3 yards of cloth — to ensure Country A benefits from exporting wheat','Less than 1 yard of cloth — to ensure Country B benefits from importing wheat'],correctAnswer:1,explanation:'For trade to benefit both countries, the price must fall between their opportunity costs. Country B (OC = 1 cloth/wheat) would only buy wheat if it costs LESS than 1 cloth (it can make wheat domestically for 1 cloth). Wait — Country B has the comparative advantage in wheat (lower OC), so Country B EXPORTS wheat. For B to benefit: trade price > 1 cloth. For A to benefit: trade price < 3 cloth. Terms of trade: between 1 and 3 yards of cloth per bushel of wheat.'},
      {question:'When two countries specialize according to comparative advantage and trade, what happens to total world output?',options:['Total output stays the same — trade only redistributes existing production between countries','Total output decreases because specialization makes countries dependent on each other','Total output increases because resources are allocated more efficiently — each country produces what it\'s relatively best at','Total output increases only for the country with absolute advantage; the other country\'s output falls'],correctAnswer:2,explanation:'Specialization based on comparative advantage increases total world output because each country focuses resources on the good it produces at the lowest opportunity cost. When Country X makes only cars (its comparative advantage) and Country Y makes only computers (its comparative advantage), total combined production of cars AND computers exceeds what both countries could produce independently. This is the mutual gain from trade.'}
    ]}}
  ]
};
