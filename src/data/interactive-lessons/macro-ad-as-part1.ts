export const macroAdAsPart1Data = {
  topicSlug: 'macro-ad-as',
  sections: [
    {id:'macroads1-intro',type:'text' as const,content:`
# 📈 Aggregate Demand & Aggregate Supply

**Part 1 of 7 — The AD-AS Model**

---

| Section |
|---------|
| 📖 Aggregate Demand (AD) |
| Short-Run Aggregate Supply (SRAS) |
| Long-Run Aggregate Supply (LRAS) |
| Macroeconomic Equilibrium & Gaps |

> 🔑 **Key Concept:** The AD-AS model is the **most important graph** in AP Macroeconomics. You must understand why AD slopes downward, why SRAS slopes upward, why LRAS is vertical, and how shifts in these curves create **recessionary** or **inflationary** gaps.
`},
    {id:'macroads1-ad',type:'text' as const,content:`
## 📖 Aggregate Demand (AD)

AD shows the **total quantity of goods and services demanded** at each price level.

### Why AD Slopes Downward (3 Effects)

| Effect | Explanation |
|---|---|
| **Wealth effect (real balances)** | Higher price level → purchasing power of savings falls → consumers buy less |
| **Interest rate effect** | Higher price level → people need more money → interest rates rise → investment and consumption fall |
| **Net export effect** | Higher price level → domestic goods more expensive relative to foreign goods → exports fall, imports rise → net exports decrease |

### Shifters of AD (anything that changes C, I, G, or Xn at every price level)

| Shifter | AD Shifts Right (Increases) | AD Shifts Left (Decreases) |
|---|---|---|
| **Consumer confidence** | Consumers feel optimistic → spend more | Consumers feel pessimistic → spend less |
| **Investment** | Lower interest rates, business optimism | Higher interest rates, business pessimism |
| **Government spending** | Increases in G (stimulus, infrastructure) | Cuts in G (austerity) |
| **Taxes** | Tax cuts → more disposable income | Tax increases → less disposable income |
| **Net exports** | Foreign economies grow → buy more U.S. exports | Dollar appreciates → U.S. exports become more expensive |
| **Money supply** | Central bank increases money supply → lower interest rates | Central bank decreases money supply → higher interest rates |

> 🔑 **AP Connection:** The three reasons AD slopes downward (wealth, interest rate, net export effects) are a **very common** free-response question. Don't confuse these with demand for a single product — AD is about the ENTIRE economy.
`},
    {id:'macroads1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'According to the interest rate effect, why does aggregate demand decrease when the price level rises?',options:['Higher prices cause central banks to print more money, which floods the economy with excess currency','A higher price level increases the demand for money, which raises interest rates, which reduces consumer spending and business investment','Higher prices make domestic goods more competitive internationally, increasing exports','A higher price level increases consumers\' wealth, leading them to save more and spend less on all goods and services'],correctAnswer:1,explanation:'The interest rate effect works through money demand: when the price level rises, people need more money for transactions → they withdraw savings or sell bonds → interest rates rise → borrowing becomes more expensive → businesses invest less and consumers reduce spending on interest-sensitive purchases (cars, homes). This is one of three reasons AD slopes downward.'},
      {question:'Which of the following would shift the AD curve to the RIGHT (increase aggregate demand)?',options:['An increase in personal income tax rates that reduces household disposable income by 5%','A decline in consumer confidence following a major stock market crash','An increase in government infrastructure spending on highways and bridges','An appreciation of the U.S. dollar that makes American exports more expensive for foreign buyers'],correctAnswer:2,explanation:'Increased government spending (G) directly increases aggregate demand because G is a component of AD (= C + I + G + Xn). More infrastructure spending means more demand for construction materials, equipment, and labor at every price level, shifting AD right. Tax increases, falling confidence, and dollar appreciation would all shift AD LEFT.'}
    ]}},
    {id:'macroads1-as',type:'text' as const,content:`
## 📖 Aggregate Supply

### Short-Run Aggregate Supply (SRAS)
- Slopes **upward** — higher price levels incentivize firms to produce more because prices of outputs rise faster than input costs (which are "sticky" in the short run)
- **Shifters of SRAS:** input prices (wages, energy, raw materials), productivity, supply shocks, business taxes, regulations, subsidies

| If... | SRAS shifts... |
|---|---|
| Input prices RISE (oil prices surge) | LEFT (less supplied at each price level) |
| Productivity INCREASES (new technology) | RIGHT (more supplied at each price level) |
| Business taxes INCREASE | LEFT (higher costs → produce less) |
| Positive supply shock (bumper crop) | RIGHT |

### Long-Run Aggregate Supply (LRAS)
- **Vertical** at the full-employment level of output (potential GDP / Yf)
- In the long run, output is determined by resources and technology, NOT the price level
- Shifts right with **economic growth** (more resources, better technology)

### Macroeconomic Equilibrium & Gaps

| Situation | Description | Gap |
|---|---|---|
| **Equilibrium at Yf** | AD intersects SRAS at the LRAS line | No gap (full employment) |
| **Output < Yf** | Actual GDP below potential | **Recessionary gap** — unemployment above natural rate |
| **Output > Yf** | Actual GDP above potential (unsustainable) | **Inflationary gap** — unemployment below natural rate; prices rising |

> 🔑 **AP Connection:** You MUST be able to draw and label the AD-AS model with all three curves (AD, SRAS, LRAS), identify recessionary and inflationary gaps, and show how fiscal/monetary policy shifts AD to close these gaps.
`},
    {id:'macroads1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'In the AD-AS model, a sudden increase in oil prices would primarily cause:',options:['AD to shift right, increasing both output and the price level (demand-pull inflation)','SRAS to shift left, increasing the price level while decreasing output (stagflation/cost-push inflation)','LRAS to shift right, increasing the economy\'s long-run potential output permanently','AD to shift left, decreasing both output and the price level simultaneously (deflation)'],correctAnswer:1,explanation:'Oil is a major input cost for virtually all industries. A surge in oil prices raises production costs across the economy, shifting SRAS to the LEFT. The result: higher price level AND lower output — a combination called stagflation. This is cost-push inflation, and it creates a policy dilemma: fighting inflation (tight policy) worsens unemployment, and fighting unemployment (expansionary policy) worsens inflation.'},
      {question:'If the economy is in a recessionary gap (actual output below potential GDP), what is true about unemployment?',options:['The unemployment rate equals the natural rate of unemployment because the economy is at full employment','The unemployment rate is below the natural rate because firms are hoarding workers to prepare for recovery','The unemployment rate exceeds the natural rate of unemployment because there is positive cyclical unemployment','The unemployment rate is exactly 0% because recessionary gaps only affect production, not employment'],correctAnswer:2,explanation:'In a recessionary gap, actual GDP < potential GDP (Yf). This means the economy is producing below its capacity, and unemployment is above the natural rate. The excess unemployment is cyclical unemployment — caused by insufficient aggregate demand. At full employment (Yf), cyclical unemployment = 0 and unemployment equals only frictional + structural (the natural rate, ~4–5%).'}
    ]}}
  ]
};
