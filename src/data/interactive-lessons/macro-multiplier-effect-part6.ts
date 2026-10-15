export const macroMultiplierEffectPart6Data = {
  topicSlug: 'macro-multiplier-effect',
  sections: [
    {
      id: 'macromul6-intro',
      type: 'text' as const,
      content: `
# 🔄 The Multiplier Effect

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Multipliers Appear on the Exam |
| FRQ Practice Set 1: Closing a Recessionary Gap |
| FRQ Practice Set 2: An Investment Slump |
| Exam-Style Multiple Choice |

> 🔑 **Key Concept:** Multiplier questions appear on almost every AP Macroeconomics exam, usually inside a larger fiscal policy question. You earn points by **naming the multiplier**, **showing the setup with numbers**, and stating the **direction** of the change. Explanations must name the mechanism: households spend the MPC share of each round of new income.
`
    },
    {
      id: 'macromul6-format',
      type: 'text' as const,
      content: `
## 📖 How Multipliers Appear on the Exam

| Task verb | What earns the point | Example |
|---|---|---|
| **Calculate** | The multiplier, the setup with numbers, and the answer | "Spending multiplier = 1 ÷ 0.25 = 4; \\$60B ÷ 4 = \\$15B" |
| **Identify** | A specific answer with the correct direction | "Increase government purchases" |
| **Explain** | The answer and the mechanism that links cause to effect | "A tax cut is partly saved, so first-round spending is smaller than with an equal rise in G" |
| **Draw / show** | The correct curve shifted in the correct direction, with labels | AD shifts right; new price level and real GDP labeled |

### Habits that protect points

- **Name the multiplier you are using.** Write "spending multiplier = 1 ÷ MPS" or "tax multiplier = MPC ÷ MPS" before plugging in numbers.
- **Divide for policy, multiply for effects.** Required change = gap ÷ multiplier. Effect on real GDP = change × multiplier.
- **Give a direction.** "Decrease taxes by \\$20 billion" earns the point; "\\$20 billion" alone may not.
- **Use "maximum" or "minimum" language.** The simple multiplier gives the maximum change in real GDP and the minimum policy change, because the price level is held fixed.
- **Keep the two multipliers separate.** If a question also involves banks, the money multiplier (1 ÷ reserve requirement) is a different calculation.
`
    },
    {
      id: 'macromul6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice Set 1: Closing a Recessionary Gap

The economy of Alba is in short-run equilibrium with real GDP of \\$2,440 billion. Full-employment output is \\$2,500 billion. The marginal propensity to consume is 0.75.

**(a)** Identify the type of output gap and calculate its size.

**(b)** Calculate the minimum increase in government purchases that could close the gap. Show your work.

**(c)** Instead, calculate the minimum decrease in taxes that could close the gap. Show your work.

**(d)** Explain why the answer to (c) is larger than the answer to (b).

**(e)** Suppose the government raises purchases by \\$60 billion and pays for them with a \\$60 billion tax increase. Calculate the maximum change in real GDP.

**(f)** On a correctly labeled AD-AS graph, what happens to the price level and real GDP as a result of the policy in (b)?

**(g)** If the MPC were 0.8 instead of 0.75, would the increase in government purchases needed to close the gap be larger, smaller or the same? Explain.

### Model Answers

**(a)** **Recessionary** gap of \\$2,500B − \\$2,440B = **\\$60 billion**.

**(b)** Spending multiplier = 1 ÷ (1 − 0.75) = 4. Required ΔG = \\$60B ÷ 4 = **\\$15 billion increase**.

**(c)** Tax multiplier = 0.75 ÷ 0.25 = 3. Required ΔT = \\$60B ÷ 3 = **\\$20 billion decrease**.

**(d)** Households **save** part of a tax cut (25% here), so only \\$0.75 of each dollar of tax cut is spent in the first round. All of a government purchase is spent in the first round, so the tax multiplier is smaller and a larger tax cut is needed.

**(e)** Effect of G: \\$60B × 4 = +\\$240B. Effect of T: \\$60B × 3 = −\\$180B. Net change = **+\\$60 billion**, which is the balanced-budget multiplier of 1 at work. This also closes the gap.

**(f)** AD shifts **right**. The **price level rises** and **real GDP rises** toward \\$2,500 billion.

**(g)** **Smaller.** A higher MPC means more of each round is spent, so the spending multiplier rises to 1 ÷ 0.2 = 5, and the required increase falls to \\$60B ÷ 5 = \\$12 billion.

> 🔑 **AP Connection:** Part (e) is a common trap. Many students answer "no change" because the budget is balanced. The balanced-budget multiplier is 1, so real GDP rises by the amount of the new purchases.
`
    },
    {
      id: 'macromul6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Real GDP is \\$1,800 billion and full-employment output is \\$1,750 billion. The MPC is 0.8. Which change in government purchases is the minimum that could close the gap?',
            options: [
              'Decrease purchases by \\$12.5 billion',
              'Increase purchases by \\$10 billion',
              'Decrease purchases by \\$40 billion',
              'Decrease purchases by \\$10 billion'
            ],
            correctAnswer: 3,
            explanation: 'Output is \\$50 billion above potential, an inflationary gap, so purchases must fall, and the spending multiplier is 1 ÷ 0.2 = 5, giving \\$50B ÷ 5 = \\$10 billion. A \\$12.5 billion cut divides by the tax multiplier, raising purchases moves the economy the wrong way, and \\$40 billion multiplies the gap by the MPC.'
          },
          {
            question: 'An FRQ asks you to explain why a \\$10 billion tax cut raises real GDP by less than a \\$10 billion increase in government purchases. Which response earns the point?',
            options: [
              'Part of the cut is saved, so less is spent at first',
              'The tax multiplier is smaller, so the tax cut does less',
              'Tax cuts take longer to pass, so their effect is smaller',
              'Tax cuts raise interest rates, so they crowd out investment'
            ],
            correctAnswer: 0,
            explanation: 'The point requires the mechanism: part of a tax cut is saved, so first-round spending is smaller than with an equal purchase. Saying the tax multiplier is smaller restates the result without explaining it, and legislative delays and interest rates are not what the multiplier model compares.'
          },
          {
            question: 'A country\'s exports fall by \\$8 billion and the MPC is 0.75. What is the maximum change in real GDP?',
            options: [
              '−\\$24 billion',
              '−\\$32 billion',
              '−\\$8 billion',
              '−\\$6 billion'
            ],
            correctAnswer: 1,
            explanation: 'Exports are spending on domestic output, so the spending multiplier of 1 ÷ 0.25 = 4 applies: −\\$8B × 4 = −\\$32 billion. The −\\$24 billion answer uses the tax multiplier, −\\$8 billion ignores the multiplier, and −\\$6 billion is only the second round of lost spending.'
          }
        ]
      }
    },
    {
      id: 'macromul6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice Set 2: An Investment Slump

In Bayland, a fall in business confidence causes a **\\$12 billion decrease in investment**. Economists estimate that real GDP will fall by a **maximum of \\$60 billion** as a result. Assume no taxes depend on income and there is no foreign trade.

**(a)** Calculate the spending multiplier.

**(b)** Calculate the marginal propensity to consume. Show your work.

**(c)** Calculate the maximum change in consumption spending.

**(d)** The government wants to offset the entire decrease in real GDP using transfer payments. Calculate the minimum change in transfer payments. Show your work.

**(e)** On an AD-AS graph, the SRAS curve slopes upward. Will the actual decrease in real GDP be greater than, less than or equal to \\$60 billion? Explain.

### Model Answers

**(a)** Spending multiplier = \\$60B ÷ \\$12B = **5**.

**(b)** MPS = 1 ÷ 5 = 0.2, so MPC = 1 − 0.2 = **0.8**.

**(c)** Real GDP falls by \\$60 billion, of which \\$12 billion is the original investment cut. The rest is lost consumption: \\$60B − \\$12B = **\\$48 billion decrease**. Check: MPC × ΔY = 0.8 × \\$60B = \\$48B.

**(d)** Tax (transfer) multiplier = 0.8 ÷ 0.2 = 4. Required ΔTR = \\$60B ÷ 4 = **\\$15 billion increase** in transfer payments.

**(e)** **Less than** \\$60 billion. AD shifts left by \\$60 billion, but the price level falls along the upward-sloping SRAS curve. The lower price level increases the quantity of real output demanded (through the real wealth, interest rate and exchange rate effects), so equilibrium real GDP falls by less than the full shift.

> 🔑 **AP Connection:** Part (c) rewards seeing the multiplier as a sum of rounds. The total change in real GDP equals the initial change in spending plus all the induced changes in consumption.
`
    },
    {
      id: 'macromul6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

In Coastia, a \\$15 billion increase in government purchases raises real GDP by a maximum of \\$150 billion.

**1)** What is Coastia's MPC?

**2)** If the government had cut taxes by \\$15 billion instead, what is the maximum increase in real GDP, in billions of dollars?

**3)** If the government had raised both purchases and taxes by \\$15 billion, what is the maximum increase in real GDP, in billions of dollars?

Enter numbers only (no \\$ sign). Use a decimal for the MPC.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.9', '135', '15'],
        hint1: 'The spending multiplier is 150 ÷ 15 = 10, so the MPS is 1 ÷ 10.',
        hint2: 'The tax multiplier is 1 less than the spending multiplier.',
        hint3: 'Equal increases in purchases and taxes use the balanced-budget multiplier.',
        explanation: '1) Spending multiplier = 10, so MPS = 0.1 and MPC = 0.9. 2) Tax multiplier = 0.9 ÷ 0.1 = 9, so \\$15B × 9 = \\$135 billion. 3) The balanced-budget multiplier is 1: +\\$150B − \\$135B = +\\$15 billion.'
      }
    },
    {
      id: 'macromul6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A \\$20 billion tax increase reduces real GDP by a maximum of \\$60 billion. What is the spending multiplier?',
            options: [
              '3',
              '0.75',
              '4',
              '0.25'
            ],
            correctAnswer: 2,
            explanation: 'The ratio \\$60B ÷ \\$20B = 3 is the tax multiplier, and the spending multiplier is 1 larger, so it is 4 (MPC = 0.75). Answering 3 stops at the tax multiplier, and 0.75 and 0.25 are the MPC and MPS rather than a multiplier.'
          },
          {
            question: 'An economy has an inflationary gap, and the government cuts its purchases. On an AD-AS graph, which result is correct in the short run?',
            options: [
              'SRAS shifts left, raising the price level and lowering real GDP',
              'AD shifts left, lowering the price level but not real GDP',
              'LRAS shifts left, lowering the full-employment level of output',
              'AD shifts left, lowering the price level and real GDP'
            ],
            correctAnswer: 3,
            explanation: 'Government purchases are part of aggregate demand, so a cut shifts AD left and, with an upward-sloping SRAS curve, lowers both the price level and real GDP. Fiscal policy does not shift SRAS or LRAS in this short-run analysis, and real GDP does change when AD moves along an upward-sloping SRAS curve.'
          },
          {
            question: 'Economy A has an MPC of 0.75 and Economy B has an MPC of 0.9. Each faces a \\$90 billion recessionary gap. Which statement is correct?',
            options: [
              'B needs a smaller rise in purchases than A does',
              'A needs a smaller rise in purchases than B',
              'Both need a \\$90 billion rise in purchases',
              'B needs a larger tax cut than A to close it'
            ],
            correctAnswer: 0,
            explanation: 'B\'s spending multiplier is 10, so it needs \\$90B ÷ 10 = \\$9 billion, while A\'s multiplier of 4 requires \\$22.5 billion. Neither needs the full \\$90 billion, and B also needs the smaller tax cut: \\$10 billion against A\'s \\$30 billion.'
          }
        ]
      }
    }
  ]
}
