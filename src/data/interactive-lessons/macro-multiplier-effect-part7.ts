export const macroMultiplierEffectPart7Data = {
  topicSlug: 'macro-multiplier-effect',
  sections: [
    {
      id: 'macromul7-intro',
      type: 'text' as const,
      content: `
# 🔄 The Multiplier Effect

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture |
| Formula Summary |
| Which Multiplier? |
| Putting It Together: Lakeland's Export Slump |
| Mixed Review |

> 🔑 **Key Concept:** The multiplier topic is one chain of reasoning. Data on income and consumption give you the **MPC**. The MPC gives you the **spending, tax and balanced-budget multipliers**. A multiplier turns a change in spending into a **shift of aggregate demand**, and the AD-AS model shows how much of that shift becomes **real GDP** and how much becomes a **higher price level**. Run the chain backward and it tells policymakers how large a change will close a gap.
`
    },
    {
      id: 'macromul7-big-picture',
      type: 'text' as const,
      content: `
## 📖 The Big Picture

**Forward chain (effects)**

Change in income → households spend the **MPC** share and save the **MPS** share → each round of spending becomes someone else's income → the rounds add up to **1 ÷ MPS** times the initial change → **AD shifts** by that amount → with an upward-sloping SRAS, real GDP rises by **less** and the price level rises.

**Backward chain (policy)**

Measure the **output gap** → choose expansionary or contractionary policy → **divide** the gap by the multiplier for the chosen tool → state the **minimum** change and its direction.

## Formula Summary

| Concept | Formula | Example with MPC = 0.8 |
|---|---|---|
| Disposable income | Income − taxes + transfers | — |
| MPC | ΔC ÷ ΔYd | 0.8 |
| MPS | ΔS ÷ ΔYd = 1 − MPC | 0.2 |
| Average propensity to consume | C ÷ Yd (not used in multipliers) | — |
| Spending multiplier | 1 ÷ MPS = 1 ÷ (1 − MPC) | 5 |
| Tax multiplier | −MPC ÷ MPS | −4 |
| Transfer multiplier | +MPC ÷ MPS | +4 |
| Balanced-budget multiplier | Spending multiplier − tax multiplier size = 1 | 1 |
| Maximum ΔY from a spending change | ΔSpending × spending multiplier | \\$10B × 5 = \\$50B |
| Required ΔG for a gap | Gap ÷ spending multiplier | \\$50B ÷ 5 = \\$10B |
| Required ΔT or ΔTR for a gap | Gap ÷ tax multiplier size | \\$50B ÷ 4 = \\$12.5B |
| Money multiplier (a different chain) | 1 ÷ reserve requirement | 10% requirement → 10 |
`
    },
    {
      id: 'macromul7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The MPS is 0.2. Which set of multipliers is correct?',
            options: [
              'Spending 5, tax 4, balanced-budget 1',
              'Spending 5, tax 4, balanced-budget 0',
              'Spending 4, tax 5, balanced-budget 1',
              'Spending 5, tax 5, balanced-budget 0'
            ],
            correctAnswer: 0,
            explanation: 'The spending multiplier is 1 ÷ 0.2 = 5, the tax multiplier size is 0.8 ÷ 0.2 = 4, and their difference, the balanced-budget multiplier, is 1. A balanced-budget multiplier of 0 assumes the two effects cancel, and swapping 4 and 5 reverses the spending and tax multipliers.'
          },
          {
            question: 'Which pairing of an event with the multiplier used to find its effect on real GDP is correct?',
            options: [
              'A rise in military purchases: MPC ÷ MPS',
              'A rise in unemployment benefits: MPC ÷ MPS',
              'A fall in business investment: MPC ÷ MPS',
              'A rise in income tax rates: 1 ÷ MPS'
            ],
            correctAnswer: 1,
            explanation: 'Unemployment benefits are transfer payments, which raise disposable income and use MPC ÷ MPS. Military purchases and business investment are spending on output and use 1 ÷ MPS, while a tax increase uses the tax multiplier, not 1 ÷ MPS.'
          },
          {
            question: 'Households grow more cautious and the MPC falls from 0.8 to 0.75. What happens to the multipliers?',
            options: [
              'Spending multiplier falls to 4 and tax multiplier stays 4',
              'Spending multiplier stays 5 and tax multiplier falls to 3',
              'Spending multiplier falls to 4 and tax multiplier to 3',
              'Spending multiplier rises to 6 and tax multiplier to 5'
            ],
            correctAnswer: 2,
            explanation: 'With MPC = 0.75, the spending multiplier is 1 ÷ 0.25 = 4 and the tax multiplier size is 0.75 ÷ 0.25 = 3, down from 5 and 4. Both depend on the MPC, so neither stays the same, and a lower MPC shrinks the multipliers rather than raising them.'
          }
        ]
      }
    },
    {
      id: 'macromul7-which',
      type: 'text' as const,
      content: `
## Which Multiplier?

| The question involves… | Use | Why |
|---|---|---|
| Government purchases of goods and services | 1 ÷ MPS | The full amount is spent in the first round |
| Investment, autonomous consumption or net exports | 1 ÷ MPS | Any change in spending on domestic output |
| A change in taxes | MPC ÷ MPS (opposite direction) | Only the MPC share of the tax change is spent |
| A change in transfer payments | MPC ÷ MPS (same direction) | Transfers raise disposable income like a tax cut |
| Equal changes in purchases and taxes | 1 | The spending and tax effects differ by one round |
| New reserves in the banking system | 1 ÷ reserve requirement | The money multiplier, a different chain |

## Putting It Together: Lakeland's Export Slump

Lakeland is at full employment with an MPC of **0.9**. A recession abroad cuts foreign purchases of Lakeland's goods, so **exports fall by \\$5 billion**.

**Step 1: The rounds.** Exporters and their workers lose \\$5 billion of income. They cut consumption by 0.9 × \\$5B = \\$4.5 billion, which cuts other households' income by \\$4.5 billion. Those households cut consumption by \\$4.05 billion, and so on.

**Step 2: The multiplier.** Spending multiplier = 1 ÷ 0.1 = 10. AD shifts **left by \\$5B × 10 = \\$50 billion**. Of that, \\$5 billion is the lost exports and \\$45 billion is lost consumption (0.9 × \\$50B).

**Step 3: The AD-AS outcome.** With an upward-sloping SRAS curve, the price level falls and real GDP falls by **up to** \\$50 billion, opening a recessionary gap. Unemployment rises above the natural rate, so cyclical unemployment appears.

**Step 4: The policy menu.** Using the AP convention of a fixed price level, a \\$50 billion gap could be closed by any one of these:

| Policy | Calculation | Minimum change |
|---|---|---|
| Raise government purchases | \\$50B ÷ 10 | \\$5 billion |
| Cut taxes | \\$50B ÷ 9 | about \\$5.56 billion |
| Raise transfer payments | \\$50B ÷ 9 | about \\$5.56 billion |
| Raise purchases and taxes equally | \\$50B ÷ 1 | \\$50 billion each |

> 🔑 **AP Connection:** Notice how each part of this topic appears in one scenario: the MPC (Part 2), the rounds (Part 3), the policy calculations and balanced budget (Part 4), and the AD-AS caveat (Part 5). A full FRQ often moves through the same steps in the same order.
`
    },
    {
      id: 'macromul7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the answer that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find the policy change needed to close an output gap, ___ the gap by the multiplier.',
            options: ['divide', 'multiply', 'subtract', 'add']
          },
          {
            label: 'With an MPC of 0.8, a \\$10 billion increase in transfer payments raises real GDP by at most ___.',
            options: ['\\$40 billion', '\\$50 billion', '\\$10 billion', '\\$8 billion']
          },
          {
            label: 'Raising both government purchases and taxes by \\$25 billion raises real GDP by at most ___.',
            options: ['\\$25 billion', '\\$0', '\\$100 billion', '\\$125 billion']
          },
          {
            label: 'A higher MPS makes the spending multiplier ___.',
            options: ['smaller', 'larger', 'unchanged', 'negative']
          }
        ],
        correctAnswers: ['divide', '\\$40 billion', '\\$25 billion', 'smaller'],
        hint1: 'The multiplier turns a policy change into a change in real GDP, so go the other way to get from a gap to a policy.',
        hint2: 'Transfers use the tax multiplier, MPC ÷ MPS.',
        hint3: 'The balanced-budget multiplier is 1 at any MPC.',
        explanation: 'Required policy = gap ÷ multiplier. A transfer increase uses 0.8 ÷ 0.2 = 4, so \\$10B × 4 = \\$40 billion. Equal increases in purchases and taxes raise real GDP by the change in purchases, \\$25 billion. More saving per round means a smaller multiplier.'
      }
    },
    {
      id: 'macromul7-checklist',
      type: 'text' as const,
      content: `
## Mixed Review

### A Five-Step Checklist for Any Multiplier Problem

1. **Find the MPC.** Use ΔC ÷ ΔYd from two observations, or 1 − MPS. Never use C ÷ Yd.
2. **Build the multipliers.** Spending = 1 ÷ MPS. Tax and transfer = MPC ÷ MPS. Balanced budget = 1.
3. **Match the tool to the multiplier.** Purchases, investment, autonomous consumption and net exports use the spending multiplier. Taxes and transfers use the tax multiplier.
4. **Multiply or divide.** Multiply to find an effect on real GDP. Divide a gap to find a required policy.
5. **State the direction and the caveat.** Say "increase" or "decrease", and use "maximum" or "minimum": the price level absorbs part of the AD shift when SRAS slopes upward.

### Errors to Avoid

| Error | Fix |
|---|---|
| Using the APC as the MPC | Use changes, not totals |
| Applying 1 ÷ MPS to a tax cut | Use MPC ÷ MPS |
| Answering "no change" for a balanced-budget increase | Real GDP rises by ΔG |
| Multiplying a gap by the multiplier to get policy | Divide the gap by the multiplier |
| Treating the multiplier result as the final change in real GDP | It is the AD shift; actual real GDP changes by less when the price level moves |
| Confusing 1 ÷ MPS with 1 ÷ reserve requirement | Spending chain vs. bank-lending chain |
`
    },
    {
      id: 'macromul7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

In Delta, full-employment output is \\$3,000 billion and current real GDP is \\$2,920 billion. When disposable income rose from \\$2,400 billion to \\$2,600 billion, consumption rose from \\$2,000 billion to \\$2,160 billion.

**1)** What is Delta's MPC?

**2)** What is the minimum increase in government purchases, in billions of dollars, that could close the gap?

**3)** What is the minimum tax cut, in billions of dollars, that could close the gap?

Enter numbers only (no \\$ sign). Use a decimal for the MPC.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.8', '16', '20'],
        hint1: 'MPC = (2,160 − 2,000) ÷ (2,600 − 2,400).',
        hint2: 'The gap is \\$3,000B − \\$2,920B = \\$80B, and the spending multiplier is 1 ÷ MPS.',
        hint3: 'The tax multiplier size is MPC ÷ MPS, which is 1 less than the spending multiplier.',
        explanation: '1) MPC = 160 ÷ 200 = 0.8. 2) The recessionary gap is \\$80 billion and the spending multiplier is 5, so ΔG = \\$80B ÷ 5 = \\$16 billion. 3) The tax multiplier size is 4, so the tax cut is \\$80B ÷ 4 = \\$20 billion.'
      }
    }
  ]
}
