export const macroFiscalPolicyToolsPart1Data = {
  topicSlug: 'macro-fiscal-policy-tools',
  sections: [
    {id:'macrofist1-intro',type:'text' as const,content:`
# 🛠️ Fiscal Policy Tools

**Part 1 of 7 — Taxes, Spending & Their Effects**

---

| Section |
|---------|
| 📖 The Three Fiscal Tools |
| Tax Cuts vs. Spending Increases |
| Supply-Side Economics |
| Short Run vs. Long Run |

> 🔑 **Key Concept:** The AP exam tests how specific fiscal tools (tax cuts, spending programs, supply-side policies) affect the economy differently. You must understand the **spending multiplier** and **tax multiplier** — covered in the Multiplier Effect lesson.
`},
    {id:'macrofist1-taxes',type:'text' as const,content:`
## 📖 The Three Fiscal Tools

| Tool | Examples | How it reaches AD |
|---|---|---|
| **Government purchases (G)** | Highways, military equipment, public-school teachers' salaries | **Directly**: G is a component of AD (C + I + G + Xn) |
| **Taxes** | Personal income taxes, payroll taxes, taxes on business profits | **Indirectly**: personal taxes change disposable income and so consumption; business taxes change after-tax returns and so investment |
| **Transfer payments** | Unemployment benefits, Social Security, SNAP food assistance | **Indirectly**: transfers change disposable income and so consumption; they are not counted as G in GDP |

Expansionary policy raises G, cuts taxes or raises transfers; contractionary policy does the reverse.

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
      {question:'A government increases transfer payments to households by \\$50 billion. Through which component of aggregate demand does this policy first work?',options:['Consumption','Government purchases','Investment','Net exports'],correctAnswer:0,explanation:'Transfers raise households\' disposable income, and households spend part of it, so consumption rises first. Transfers buy no good or service, so they are not counted as government purchases.'}
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

### Short Run vs. Long Run: Two Effects of the Same Policy
Supply-side fiscal policies usually work on **both** sides of the AD-AS model, at different times:

| Policy | Short run: AD | Long run: LRAS and potential output |
|---|---|---|
| **Building highways and broadband** | G rises → AD shifts right | More public capital → LRAS shifts right |
| **Tax credit for new business equipment** | I rises → AD shifts right | More private capital → LRAS shifts right |
| **Funding job training and education** | G rises → AD shifts right | More human capital → LRAS shifts right |

- **Short run:** the spending or the new investment is itself part of AD, so AD shifts right first.
- **Long run:** once the roads are built and the workers trained, the economy can produce more at full employment. Potential output rises, LRAS shifts right and the PPC shifts outward.
- **Trade-off:** if these policies are financed by government borrowing, a higher real interest rate can crowd out some private investment and shrink the long-run gain (Parts 3 and 5).

> 🔑 **AP Connection:** When a fiscal policy adds to the economy's productive capacity, show **AD shifting right in the short run** and **LRAS shifting right in the long run**. The supply-side effect takes time to arrive.
`},
    {id:'macrofist1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'Supply-side economists argue that tax cuts focused on businesses and investors will primarily:',options:['Shift aggregate demand to the left by reducing government tax revenue and forcing spending cuts','Increase incentives to invest, produce, and work — shifting aggregate supply to the right and increasing potential output','Have no effect on the economy because businesses always reinvest the same amount regardless of tax rates','Shift aggregate demand to the right without any effect on the supply side of the economy'],correctAnswer:1,explanation:'Supply-side economics focuses on production incentives: lower taxes on businesses → higher after-tax returns on investment → more capital spending and hiring → productive capacity increases → AS shifts right. This contrasts with demand-side (Keynesian) fiscal policy that focuses on shifting AD through spending and tax changes. The distinction between demand-side and supply-side approaches is a common AP exam topic.'},
      {question:'A government pays for a large highway-building program. Which pair of effects is most likely?',options:['AD rises now; LRAS shifts left later','LRAS shifts right now; AD falls later','AD rises now; LRAS shifts right later','AD rises now; LRAS does not change'],correctAnswer:2,explanation:'Highway spending is a government purchase, so AD shifts right in the short run; once built, the highways add public capital and shift LRAS right. Assuming LRAS never changes ignores the capital the program creates.'}
    ]}}
  ]
};
