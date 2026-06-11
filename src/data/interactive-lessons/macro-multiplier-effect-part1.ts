export const macroMultiplierEffectPart1Data = {
  topicSlug: 'macro-multiplier-effect',
  sections: [
    {id:'macromult1-intro',type:'text' as const,content:`
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
`},
    {id:'macromult1-concept',type:'text' as const,content:`
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
| Initial spending | \\$100 | — |
| Round 1 | \\$80 (= \\$100 × 0.80) | \\$20 |
| Round 2 | \\$64 (= \\$80 × 0.80) | \\$16 |
| Round 3 | \\$51.20 | \\$12.80 |
| ... | ... | ... |
| **Total ΔY** | **\\$500** | — |

- Spending multiplier = 1 ÷ 0.20 = **5**
- Total change in GDP = \\$100 × 5 = **\\$500**
- An initial \\$100 spending increase creates \\$500 in total economic output!

### Why It Works
Each person's spending becomes another person's income. That person spends a fraction (MPC) and saves the rest (MPS). The spending continues to ripple through the economy, getting smaller each round, until it diminishes to near zero.

> 🔑 **AP Connection:** The higher the MPC, the larger the multiplier. If MPC = 0.90, multiplier = 10. If MPC = 0.75, multiplier = 4. The AP exam tests this calculation in virtually every exam.
`},
    {id:'macromult1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'If the marginal propensity to consume (MPC) is 0.75, what is the spending multiplier?',options:['0.75 — the multiplier equals the MPC','3 — calculated as MPC ÷ MPS = 0.75 ÷ 0.25','4 — calculated as 1 ÷ MPS = 1 ÷ (1 − 0.75) = 1 ÷ 0.25','7.5 — calculated as 10 × MPC'],correctAnswer:2,explanation:'Spending multiplier = 1 ÷ MPS = 1 ÷ (1 − MPC) = 1 ÷ (1 − 0.75) = 1 ÷ 0.25 = **4**. \nThis means every \\$1 of new spending generates \\$4 in total GDP. With MPC = 0.75, each round preserves 75% of the spending: \\$1 → \\$0.75 → \\$0.5625 → ... totaling \\$4.'},
      {question:'If MPC = 0.80 and the government increases spending by \\$50 billion, what is the maximum change in GDP?',options:['\\$50 billion — GDP increases by exactly the amount of government spending','\\$250 billion — calculated as \\$50B × spending multiplier (1 ÷ 0.20 = 5)','\\$40 billion — calculated as \\$50B × MPC (0.80)','\\$200 billion — calculated as \\$50B × tax multiplier (MPC ÷ MPS)'],correctAnswer:1,explanation:'Spending multiplier = 1 ÷ MPS = 1 ÷ 0.20 = 5. \nMaximum ΔGDP = \\$50B × 5 = **\\$250 billion**. \nThe initial \\$50B of government spending creates income for workers and suppliers, who spend 80% (\\$40B), creating income for others, who spend 80% of that (\\$32B), and so on until the total reaches \\$250B.'}
    ]}},
    {id:'macromult1-tax',type:'text' as const,content:`
## 📖 The Tax Multiplier

### Tax Multiplier = −MPC ÷ MPS

(The negative sign indicates that tax cuts INCREASE GDP and tax increases DECREASE GDP)

### Example: MPC = 0.80
- Tax multiplier = −0.80 ÷ 0.20 = **−4**
- A \\$100B tax CUT → GDP increases by \\$100B × 4 = \\$400B
- A \\$100B tax INCREASE → GDP decreases by \\$100B × 4 = \\$400B

### Why the Tax Multiplier < Spending Multiplier

| Multiplier | Formula | Example (MPC = 0.80) |
|---|---|---|
| **Spending** | 1 ÷ MPS | 1 ÷ 0.20 = **5** |
| **Tax** | MPC ÷ MPS | 0.80 ÷ 0.20 = **4** |

- Tax multiplier is always **1 less** than the spending multiplier (in absolute value)
- Reason: Government spending is 100% injected into the economy; a tax cut is partially saved (MPS portion) before any spending begins

### Applying Multipliers to Close Gaps

To close a **recessionary gap** of \\$200B (with MPC = 0.75, spending multiplier = 4):
- Through spending: ΔG = Gap ÷ Multiplier = \\$200B ÷ 4 = **\\$50B spending increase**
- Through taxes: ΔT = Gap ÷ Tax Multiplier = \\$200B ÷ 3 = **\\$66.7B tax cut**

> 🔑 **AP Connection:** The FRQ regularly asks: "Calculate the amount of government spending OR tax change needed to close a recessionary/inflationary gap." Use: **Required ΔG = Gap ÷ Spending Multiplier** or **Required ΔT = Gap ÷ Tax Multiplier**.
`},
    {id:'macromult1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'If MPC = 0.80 and the economy has a recessionary gap of \\$100 billion, how much must the government INCREASE spending to close the gap?',options:['\\$100 billion — the spending increase must equal the full size of the gap','\\$80 billion — the spending increase equals the gap multiplied by MPC','\\$20 billion — calculated as \\$100B ÷ spending multiplier (1 ÷ 0.20 = 5)','\\$500 billion — calculated as \\$100B × spending multiplier (5)'],correctAnswer:2,explanation:'Spending multiplier = 1 ÷ 0.20 = 5. \nRequired ΔG = Gap ÷ Multiplier = \\$100B ÷ 5 = **\\$20B**. \nThe government only needs to spend \\$20B because the multiplier amplifies it: \\$20B × 5 = \\$100B total change in GDP, exactly closing the gap. This is the power of the multiplier — a relatively small initial spending change can close a large output gap.'},
      {question:'Why is the tax multiplier always smaller (in absolute value) than the spending multiplier?',options:['Taxes are collected by state governments, not the federal government, reducing their economic impact','Government spending enters the economy immediately and in full, while a tax cut is partially saved (MPS) before any spending occurs — so the first-round impact is smaller','The Federal Reserve controls tax policy and intentionally makes it less effective than spending policy','Tax changes take longer to implement than spending changes, so inflation erodes their impact before they take effect'],correctAnswer:1,explanation:'When the government spends \\$100, all \\$100 enters the spending stream immediately. When taxes are cut by \\$100, consumers receive \\$100 in extra income but save a portion (MPS × \\$100) and spend only (MPC × \\$100). With MPC = 0.80, only \\$80 enters the spending stream in the first round. This smaller starting amount means the total multiplied effect is smaller: tax multiplier = spending multiplier − 1.'}
    ]}}
  ]
};
