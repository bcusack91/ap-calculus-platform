export const macroMultiplierEffectPart2Data = {
  topicSlug: 'macro-multiplier-effect',
  sections: [
    {
      id: 'macromul2-intro',
      type: 'text' as const,
      content: `
# 🔄 The Multiplier Effect

**Part 2 of 7 — Consumption, Saving and the MPC**

---

| Section |
|---------|
| 📖 Disposable Income and Where It Goes |
| Measuring the MPC and MPS from Data |
| Changes, Not Totals |
| Shifts of the Consumption Schedule |

> 🔑 **Key Concept:** Every multiplier in this topic is built from one number: the **marginal propensity to consume (MPC)**, the fraction of an **additional** dollar of disposable income that households spend. This part shows where that number comes from, how to calculate it from a table, and how it differs from the share of **total** income that households spend.
`
    },
    {
      id: 'macromul2-income',
      type: 'text' as const,
      content: `
## 📖 Disposable Income and Where It Goes

**Disposable income (Yd)** is the income households actually have to spend or save:

**Yd = income − taxes + transfer payments**

Once a household has its disposable income, there are only two things it can do with each dollar: **consume** it or **save** it.

**Yd = C + S**

### A Consumption and Saving Schedule

The table shows planned consumption (C) and saving (S) for a small economy at different levels of disposable income. All values are in billions of dollars.

| Disposable income (Yd) | Consumption (C) | Saving (S = Yd − C) |
|---|---|---|
| 0 | 40 | −40 |
| 100 | 120 | −20 |
| 200 | 200 | 0 |
| 300 | 280 | 20 |
| 400 | 360 | 40 |
| 500 | 440 | 60 |

Three features of this schedule show up again and again on the exam.

- **Autonomous consumption.** Even at zero disposable income, households consume \\$40 billion. This is spending that does not depend on current income: people draw on past savings, sell assets or borrow to buy necessities.
- **Dissaving.** When consumption is greater than disposable income, saving is **negative**. At Yd = \\$100 billion, saving is −\\$20 billion.
- **The break-even point.** At Yd = \\$200 billion, consumption equals disposable income and saving is exactly zero.

### Reading the Slope

Each time disposable income rises by \\$100 billion, consumption rises by \\$80 billion and saving rises by \\$20 billion. Those two ratios are the marginal propensities:

| Measure | Formula | From the schedule |
|---|---|---|
| **MPC** | ΔC ÷ ΔYd | 80 ÷ 100 = **0.8** |
| **MPS** | ΔS ÷ ΔYd | 20 ÷ 100 = **0.2** |

On a graph with disposable income on the horizontal axis, the MPC is the **slope of the consumption function** and the MPS is the **slope of the saving function**.
`
    },
    {
      id: 'macromul2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When disposable income rises from \\$600 billion to \\$750 billion, consumption rises from \\$560 billion to \\$680 billion. What is the marginal propensity to consume?',
            options: [
              '0.20',
              '0.91',
              '0.93',
              '0.80'
            ],
            correctAnswer: 3,
            explanation: 'The MPC is ΔC ÷ ΔYd = (680 − 560) ÷ (750 − 600) = 120 ÷ 150 = 0.80. The value 0.20 is the MPS, while 0.91 and 0.93 divide total consumption by total income (680 ÷ 750 and 560 ÷ 600), which gives the average propensity to consume, not the marginal one.'
          },
          {
            question: 'In a consumption schedule, saving is −\\$40 billion when disposable income is zero. What does the negative saving mean?',
            options: [
              'Households borrow or draw down wealth to buy goods',
              'Households save \\$40 billion despite having no income',
              'Households have a marginal propensity to save below zero',
              'Households spend nothing until income reaches \\$40 billion'
            ],
            correctAnswer: 0,
            explanation: 'Negative saving is dissaving: households consume more than their disposable income by borrowing or drawing down wealth they built up earlier. It says nothing about the MPS, which is the slope of the saving schedule, and consumption at zero income is positive, not zero.'
          },
          {
            question: 'Why must the MPC and the MPS always add up to 1?',
            options: [
              'Consumption and saving always rise by equal dollar amounts',
              'Each extra dollar of disposable income is either spent or saved',
              'Saving equals investment at every level of disposable income',
              'Taxes absorb any part of income households do not spend'
            ],
            correctAnswer: 1,
            explanation: 'Disposable income has only two uses, so ΔYd = ΔC + ΔS, and dividing by ΔYd gives MPC + MPS = 1. Consumption and saving rise by equal amounts only when the MPC is 0.5, and taxes are subtracted before disposable income is measured.'
          }
        ]
      }
    },
    {
      id: 'macromul2-measure',
      type: 'text' as const,
      content: `
## Measuring the MPC and MPS from Data

Exam tables rarely move in neat steps of 100. Always divide the **change** in consumption by the **change** in disposable income.

### Worked Example: The Ortiz Household

| Year | Disposable income | Consumption | Saving |
|---|---|---|---|
| 2025 | \\$40,000 | \\$36,000 | \\$4,000 |
| 2026 | \\$46,000 | \\$40,500 | \\$5,500 |

**Step 1: Find the changes.** ΔYd = \\$46,000 − \\$40,000 = \\$6,000. ΔC = \\$40,500 − \\$36,000 = \\$4,500. ΔS = \\$5,500 − \\$4,000 = \\$1,500.

**Step 2: MPC** = ΔC ÷ ΔYd = 4,500 ÷ 6,000 = **0.75**

**Step 3: MPS** = ΔS ÷ ΔYd = 1,500 ÷ 6,000 = **0.25**

**Step 4: Check.** 0.75 + 0.25 = 1, and ΔC + ΔS = \\$4,500 + \\$1,500 = \\$6,000 = ΔYd.

### Why MPC + MPS = 1

Start from Yd = C + S. Any change in disposable income must be split between consumption and saving:

**ΔYd = ΔC + ΔS**

Divide both sides by ΔYd:

**1 = ΔC ÷ ΔYd + ΔS ÷ ΔYd = MPC + MPS**

So if you know one, you know the other. An MPC of 0.9 means an MPS of 0.1; an MPS of 0.4 means an MPC of 0.6.

### Using the MPC to Predict Spending

Once you know the MPC, you can predict how much consumption changes when disposable income changes:

**ΔC = MPC × ΔYd** and **ΔS = MPS × ΔYd**

| Change in disposable income | MPC | Change in consumption | Change in saving |
|---|---|---|---|
| +\\$10 billion (a tax cut) | 0.75 | +\\$7.5 billion | +\\$2.5 billion |
| +\\$30 billion (higher transfer payments) | 0.9 | +\\$27 billion | +\\$3 billion |
| −\\$20 billion (a tax increase) | 0.8 | −\\$16 billion | −\\$4 billion |

> 🔑 **AP Connection:** The first row is why a tax cut has a smaller effect than the same increase in government purchases. A \\$10 billion tax cut adds only \\$7.5 billion of new spending in the first round, because households save the rest. You will build the full tax multiplier from this idea in Part 3.
`
    },
    {
      id: 'macromul2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

In an economy, disposable income rises from \\$800 billion to \\$1,000 billion. Over the same period, consumption rises from \\$720 billion to \\$880 billion.

**1)** What is the marginal propensity to consume?

**2)** What is the marginal propensity to save?

**3)** How much do households save, in billions of dollars, when disposable income is \\$1,000 billion?

Enter numbers only (no \\$ sign). Use decimals for the propensities.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.8', '0.2', '120'],
        hint1: 'MPC = change in consumption ÷ change in disposable income: (880 − 720) ÷ (1,000 − 800).',
        hint2: 'The MPC and the MPS add up to 1.',
        hint3: 'Saving is the part of disposable income that is not consumed: 1,000 − 880.',
        explanation: '1) MPC = 160 ÷ 200 = 0.8. 2) MPS = 1 − 0.8 = 0.2, which matches the change in saving (80 → 120, a rise of 40) divided by 200. 3) Saving = 1,000 − 880 = \\$120 billion.'
      }
    },
    {
      id: 'macromul2-apc',
      type: 'text' as const,
      content: `
## Changes, Not Totals

A common mistake is to divide **total** consumption by **total** disposable income and call the result the MPC. The MPC is defined with **changes**: ΔC ÷ ΔYd, the share of the **next** dollar of income that is spent (CED MOD-2.B.5).

Return to the schedule from the first section, where the MPC is 0.8 at every step:

| Yd | C | C ÷ Yd (not the MPC) | MPC |
|---|---|---|---|
| 100 | 120 | 1.20 | 0.8 |
| 200 | 200 | 1.00 | 0.8 |
| 300 | 280 | 0.93 | 0.8 |
| 400 | 360 | 0.90 | 0.8 |
| 500 | 440 | 0.88 | 0.8 |

The ratio of totals **falls** as income rises, because autonomous consumption (\\$40 billion) becomes a smaller share of a larger income. The MPC stays at 0.8. The Ortiz household shows the same gap: 36,000 ÷ 40,000 = 0.90 in 2025, but its MPC was 0.75.

> ⚠️ **Exam trap:** Multipliers use the **MPC**, never a ratio of totals. If a question gives you a single year of income and consumption, you do not have enough information to find the MPC. You need two observations, or the MPC stated directly.

## Shifts of the Consumption Schedule

A change in disposable income causes a **movement along** the consumption schedule. Other factors **shift** the whole schedule, changing consumption at every income level. In this simple model they change autonomous consumption, not the MPC.

| Factor | Effect on the consumption schedule | Effect on the saving schedule |
|---|---|---|
| Household wealth rises (stock or home prices up) | Shifts up | Shifts down |
| Households expect higher future income | Shifts up | Shifts down |
| Household debt rises relative to income | Shifts down | Shifts up |
| Consumer confidence falls in a downturn | Shifts down | Shifts up |
| Disposable income rises | No shift: movement along the schedule | No shift: movement along the schedule |

> 🔑 **AP Connection:** An upward shift of the consumption schedule is an increase in **autonomous consumption**. That is exactly the kind of spending change the multiplier amplifies. In Part 3 you will see that a \\$10 billion rise in autonomous consumption raises real GDP by the same maximum amount as a \\$10 billion rise in investment or government purchases.
`
    },
    {
      id: 'macromul2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At a disposable income of \\$500 billion, consumption is \\$450 billion. When disposable income rises to \\$600 billion, consumption rises to \\$520 billion. What is the MPC?',
            options: [
              '0.90',
              '0.87',
              '0.70',
              '0.30'
            ],
            correctAnswer: 2,
            explanation: 'The MPC is (520 − 450) ÷ (600 − 500) = 70 ÷ 100 = 0.70. The value 0.90 is 450 ÷ 500 and 0.87 is 520 ÷ 600, ratios of totals rather than changes, and 0.30 is the MPS.'
          },
          {
            question: 'A tax cut raises households\' disposable income by \\$20 billion. If the MPC is 0.75, by how much does consumption rise in the first round of spending?',
            options: [
              '\\$20 billion',
              '\\$5 billion',
              '\\$80 billion',
              '\\$15 billion'
            ],
            correctAnswer: 3,
            explanation: 'First-round consumption is MPC × ΔYd = 0.75 × \\$20 billion = \\$15 billion. The \\$5 billion figure is the amount saved, \\$20 billion assumes every dollar is spent, and \\$80 billion multiplies by the spending multiplier of 4 instead of the MPC.'
          },
          {
            question: 'Which change would shift the consumption schedule upward, raising consumption at every level of disposable income?',
            options: [
              'Rising stock prices that increase household wealth',
              'A pay raise that increases disposable income',
              'Growing household debt relative to income',
              'Layoff fears that lower expected future income'
            ],
            correctAnswer: 0,
            explanation: 'Greater wealth lets households consume more at any income, so the schedule shifts up. A pay raise is a movement along the schedule, while heavier debt and weaker expected income both shift it down.'
          }
        ]
      }
    }
  ]
}
