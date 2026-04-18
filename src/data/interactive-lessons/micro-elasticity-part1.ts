export const microElasticityPart1Data = {
  topicSlug: 'micro-elasticity',
  sections: [
    {id:'microelas1-intro',type:'text' as const,content:`
# 📏 Elasticity

**Part 1 of 7 — How Responsive Are Buyers & Sellers?**

---

| Section |
|---------|
| 📖 Price Elasticity of Demand |
| Determinants of Elasticity |
| Elasticity & Total Revenue |
| Cross-Price & Income Elasticity |

> 🔑 **Key Concept:** Elasticity measures **how responsive** quantity demanded/supplied is to changes in price, income, or the price of related goods. The AP exam tests the **total revenue test** and the **determinants** of elasticity extensively.
`},
    {id:'microelas1-ped',type:'text' as const,content:`
## 📖 Price Elasticity of Demand (PED)

**PED = % Change in Quantity Demanded ÷ % Change in Price**

| |Ed| Value | Type | Meaning |
|---|---|---|
| |Ed| > 1 | **Elastic** | Quantity changes MORE than price (consumers are responsive) |
| |Ed| < 1 | **Inelastic** | Quantity changes LESS than price (consumers are unresponsive) |
| |Ed| = 1 | **Unit elastic** | Quantity changes by same % as price |
| |Ed| = 0 | **Perfectly inelastic** | Vertical demand curve — quantity doesn't change at all |
| |Ed| = ∞ | **Perfectly elastic** | Horizontal demand curve — consumers buy nothing above a certain price |

### Determinants of Elasticity

| Factor | More Elastic | More Inelastic |
|---|---|---|
| **Substitutes** | Many close substitutes available | Few or no substitutes |
| **Necessity vs. luxury** | Luxury goods | Necessities (medicine, gasoline) |
| **Time horizon** | Long run (more time to adjust) | Short run (stuck with current choices) |
| **Share of income** | Large share of budget | Small share (pens, gum) |
| **Definition of market** | Narrowly defined (Coca-Cola) | Broadly defined (soft drinks) |

### The Total Revenue Test

| Price Change | Elastic Demand | Inelastic Demand |
|---|---|---|
| **Price ↑** | Total revenue **↓** (quantity falls a LOT) | Total revenue **↑** (quantity barely falls) |
| **Price ↓** | Total revenue **↑** (quantity rises a LOT) | Total revenue **↓** (quantity barely rises) |

**Total Revenue = Price × Quantity**

> 🔑 **AP Connection:** The total revenue test is one of the most common AP questions: "If a firm raises its price and total revenue falls, demand must be elastic." Conversely, if revenue rises when price rises, demand is inelastic.
`},
    {id:'microelas1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'A pharmaceutical company raises the price of a life-saving medication by 20%, and quantity demanded falls by only 5%. Demand for this medication is:',options:['Elastic — quantity demanded changed significantly in response to the price increase','Inelastic — quantity demanded changed proportionally less than price (5% < 20%), indicating consumers have few alternatives','Unit elastic — the percentage changes in price and quantity are approximately equal','Perfectly elastic — consumers will switch to generic alternatives immediately at any price increase'],correctAnswer:1,explanation:'PED = %ΔQd ÷ %ΔP = 5% ÷ 20% = 0.25. Since |0.25| < 1, demand is inelastic. This makes sense for a life-saving medication — patients have no close substitutes and must continue buying regardless of price. The determinant at work: necessity (inelastic) with few or no substitutes.'},
      {question:'A clothing retailer reduces prices by 10% and sees total revenue increase. This indicates that demand for their clothing is:',options:['Inelastic — when price falls and revenue rises, quantity must have increased proportionally less than the price decrease','Elastic — when price falls and revenue rises, quantity demanded must have increased proportionally more than the price decrease (more than 10%)','Unit elastic — the price decrease and quantity increase perfectly offset each other','Perfectly inelastic — the quantity demanded does not respond to price changes at all'],correctAnswer:1,explanation:'When price ↓ and total revenue ↑, quantity must have risen by more than 10% (the percentage the price fell). Since %ΔQd > %ΔP, demand is elastic (|PED| > 1). Revenue = P × Q; P fell by 10% but Q rose by more than 10%, so the quantity increase more than offset the price decrease. For elastic demand, lower prices always increase revenue.'}
    ]}},
    {id:'microelas1-cross',type:'text' as const,content:`
## 📖 Cross-Price Elasticity & Income Elasticity

### Cross-Price Elasticity of Demand (XED)

**XED = % Change in Qd of Good A ÷ % Change in Price of Good B**

| XED | Relationship | Example |
|---|---|---|
| **Positive** | **Substitutes** — when B's price rises, demand for A rises | Coca-Cola & Pepsi |
| **Negative** | **Complements** — when B's price rises, demand for A falls | Hot dogs & hot dog buns |
| **Zero** | **Unrelated goods** | Shoes & toothpaste |

### Income Elasticity of Demand (YED)

**YED = % Change in Qd ÷ % Change in Income**

| YED | Type | Example |
|---|---|---|
| **Positive (> 0)** | **Normal good** — demand rises with income | Restaurant meals, new cars |
| **Negative (< 0)** | **Inferior good** — demand falls as income rises | Instant ramen, bus passes |
| **> 1** | **Luxury** (income elastic) | Vacations, designer clothing |
| **0 < YED < 1** | **Necessity** (income inelastic) | Bread, basic utilities |

> 🔑 **AP Connection:** Cross-price elasticity identifies **substitutes** (positive XED) and **complements** (negative XED). Income elasticity identifies **normal** (positive YED) vs. **inferior** (negative YED) goods. Both are commonly tested with data interpretation.
`},
    {id:'microelas1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'The cross-price elasticity of demand between Good X and Good Y is −0.6. This means X and Y are:',options:['Substitutes — a negative cross-price elasticity always indicates goods that can replace each other','Complements — when the price of Y rises, the quantity demanded of X falls (they are used together)','Inferior goods — the negative sign indicates that demand falls as income rises for both goods','Unrelated goods — any cross-price elasticity less than 1 indicates no meaningful relationship'],correctAnswer:1,explanation:'Negative cross-price elasticity means that when Y\'s price rises, demand for X FALLS. This happens with complements — goods used together. If gas prices rise, demand for large SUVs falls (gas and SUV driving are complements). The negative sign is the key indicator: negative XED = complements; positive XED = substitutes.'},
      {question:'When household income increases by 15%, demand for a product decreases by 5%. The income elasticity of demand for this product is:',options:['+3.0 — indicating it is a luxury normal good with income-elastic demand','−0.33 — indicating it is an inferior good whose demand falls as income rises','+0.33 — indicating it is a necessity with income-inelastic demand','−3.0 — indicating it is a strongly inferior good that consumers abandon as they get richer'],correctAnswer:1,explanation:'YED = %ΔQd ÷ %ΔIncome = −5% ÷ 15% = **−0.33**. The negative sign means demand DECREASES when income rises — this is an inferior good. As consumers earn more, they switch to better alternatives (e.g., from instant ramen to restaurant meals). Inferior goods have negative YED; normal goods have positive YED.'}
    ]}}
  ]
};
