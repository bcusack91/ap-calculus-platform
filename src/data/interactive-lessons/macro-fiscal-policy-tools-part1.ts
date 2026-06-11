export const macroFiscalPolicyToolsPart1Data = {
  topicSlug: 'macro-fiscal-policy-tools',
  sections: [
    {id:'macrofist1-intro',type:'text' as const,content:`
# 🛠️ Fiscal Policy Tools

**Part 1 of 7 — Taxes, Spending & Their Effects**

---

| Section |
|---------|
| 📖 Tax Policy Tools |
| Government Spending Programs |
| Supply-Side Economics |
| Deficits, Debt & Sustainability |

> 🔑 **Key Concept:** The AP exam tests how specific fiscal tools (tax cuts, spending programs, supply-side policies) affect the economy differently. You must understand the **spending multiplier** and **tax multiplier** — covered in the Multiplier Effect lesson.
`},
    {id:'macrofist1-taxes',type:'text' as const,content:`
## 📖 Tax Policy as a Fiscal Tool

### Types of Taxes

| Tax Type | Description | Example | Progressive/Regressive? |
|---|---|---|---|
| **Progressive** | Higher income → higher tax rate | Federal income tax (10%–37% brackets) | Progressive |
| **Regressive** | Takes a larger % of income from low earners | Sales tax, payroll tax (Social Security capped at \\$168,600 in 2024) | Regressive |
| **Proportional (flat)** | Same rate for all income levels | Some state income taxes; proposed "flat tax" | Proportional |

### Tax Cuts vs. Spending Increases
Both are expansionary, but they affect AD differently:

| Policy | Initial Impact | Multiplier Effect |
|---|---|---|
| **↑ Government spending by \\$100B** | Directly adds \\$100B to AD | Full spending multiplier applies (larger impact) |
| **↓ Taxes by \\$100B** | Consumers get \\$100B more income but don't spend all of it (they save some based on MPS) | Tax multiplier applies (smaller impact than equal spending increase) |

**Why spending is more powerful dollar-for-dollar:**
- A \\$100B spending increase is 100% injected into the economy immediately
- A \\$100B tax cut → consumers save some (based on MPS) and spend the rest → first-round spending is less than \\$100B

### Balanced-Budget Multiplier
- If the government increases BOTH spending and taxes by the same amount, GDP still increases
- The **balanced-budget multiplier = 1** (GDP rises by exactly the amount of the spending/tax increase)
- This works because the spending multiplier is larger than the tax multiplier

> 🔑 **AP Connection:** A common AP question: "Is a \\$100B tax cut or a \\$100B spending increase more effective at increasing GDP?" Answer: Spending increase — because 100% enters the spending stream immediately, while some of the tax cut is saved rather than spent.
`},
    {id:'macrofist1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Why does a \\$100 billion increase in government spending have a larger effect on GDP than a \\$100 billion tax cut?',options:['Tax cuts only benefit wealthy individuals who don\'t spend their additional income on any goods or services','Government spending enters the spending stream immediately and in full, while consumers save a portion of a tax cut (based on MPS) rather than spending all of it','Tax cuts reduce government revenue and therefore decrease GDP, while government spending has no effect on the budget','Government spending is not subject to the multiplier effect, while tax cuts multiply through the economy faster'],correctAnswer:1,explanation:'When the government spends \\$100B on infrastructure, that entire \\$100B is immediately injected into the economy (workers are hired, materials purchased). When consumers receive a \\$100B tax cut, they save a portion (determined by the marginal propensity to save, MPS) and spend only the remainder. If MPS = 0.2, only \\$80B of the tax cut enters the spending stream initially. This is why the spending multiplier > tax multiplier.'},
      {question:'The Social Security payroll tax is considered regressive because:',options:['It charges a higher tax rate to individuals who earn more money each year','It is capped at \\$168,600 (2024), so individuals earning above that amount pay a smaller percentage of their total income','It only applies to people over 65 years old who are already receiving Social Security benefits','It taxes all income at a flat rate with no cap, making everyone pay the same dollar amount'],correctAnswer:1,explanation:'The Social Security payroll tax (6.2% for employees) applies only to income up to \\$168,600 (2024 cap). Someone earning \\$168,600 pays 6.2% of their entire income. But someone earning \\$500,000 pays the same dollar amount of Social Security tax — which is only about 2.1% of their income. The effective rate decreases as income rises above the cap, making it regressive.'}
    ]}},
    {id:'macrofist1-supply',type:'text' as const,content:`
## 📖 Supply-Side Economics

### Core Idea
- Traditional fiscal policy focuses on **demand** (shifting AD)
- Supply-side economics focuses on **incentives to produce** — shifting AS to increase potential output
- Associated with President Reagan's economic policies ("Reaganomics")

### Supply-Side Policies

| Policy | How It Works |
|---|---|
| **Tax cuts on business/investment** | More after-tax profit → businesses invest more → AS shifts right |
| **Deregulation** | Fewer rules → lower compliance costs → production costs fall → AS shifts right |
| **Investment in human capital** | Education/training → more productive workforce → AS shifts right |
| **Infrastructure investment** | Better roads, broadband, ports → lower transportation costs → AS shifts right |

### The Laffer Curve
- Shows the relationship between **tax rates** and **tax revenue**
- At 0% tax rate → \\$0 revenue
- At 100% tax rate → \\$0 revenue (nobody works if all income is taxed)
- Revenue is maximized at some rate between 0% and 100%
- **Supply-side argument:** If current tax rates are above the revenue-maximizing rate, cutting taxes will actually INCREASE revenue (more economic activity)

### Criticism
- Critics argue the economy is rarely on the "wrong side" of the Laffer Curve
- Tax cuts may primarily increase deficits rather than generating enough growth to offset lost revenue
- Benefits disproportionately go to high-income individuals and corporations

> 🔑 **AP Connection:** The Laffer Curve occasionally appears on the AP exam. You should be able to explain the theory AND the criticism — the AP exam values analytical thinking, not ideological positions.
`},
    {id:'macrofist1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'Supply-side economists argue that tax cuts focused on businesses and investors will primarily:',options:['Shift aggregate demand to the left by reducing government tax revenue and forcing spending cuts','Increase incentives to invest, produce, and work — shifting aggregate supply to the right and increasing potential output','Have no effect on the economy because businesses always reinvest the same amount regardless of tax rates','Shift aggregate demand to the right without any effect on the supply side of the economy'],correctAnswer:1,explanation:'Supply-side economics focuses on production incentives: lower taxes on businesses → higher after-tax returns on investment → more capital spending and hiring → productive capacity increases → AS shifts right. This contrasts with demand-side (Keynesian) fiscal policy that focuses on shifting AD through spending and tax changes. The distinction between demand-side and supply-side approaches is a common AP exam topic.'},
      {question:'According to the Laffer Curve, what happens to tax revenue if the government raises tax rates from a point that is already above the revenue-maximizing rate?',options:['Tax revenue increases proportionally because higher rates always generate more government income','Tax revenue decreases because excessively high rates discourage productive economic activity, shrinking the tax base by more than the rate increase adds','Tax revenue stays exactly the same because the Laffer Curve shows revenue is constant at all rates above the maximum point','Tax revenue doubles because the government collects from both the increased rate and the expanded economic activity'],correctAnswer:1,explanation:'The Laffer Curve shows tax revenue initially rises with higher rates but eventually falls when rates become so high that they discourage work, investment, and economic activity. Beyond the revenue-maximizing rate, each rate increase shrinks the tax base (less economic activity) by more than it increases per-dollar tax collection — so total revenue falls. Whether any country is actually at this point is debated.'}
    ]}}
  ]
};
