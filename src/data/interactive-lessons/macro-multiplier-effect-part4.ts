export const macroMultiplierEffectPart4Data = {
  topicSlug: 'macro-multiplier-effect',
  sections: [
    {
      id: 'macromul4-intro',
      type: 'text' as const,
      content: `
# 🔄 The Multiplier Effect

**Part 4 of 7 — Policy Calculations: Gaps, Taxes and the Balanced-Budget Multiplier**

---

| Section |
|---------|
| 📖 Closing a Gap: The Three-Step Method |
| The Balanced-Budget Multiplier |
| Combining Several Changes |
| Solving Backward for the MPC |

> 🔑 **Key Concept:** Multiplier problems run in two directions. **Forward:** given a change in spending or taxes, find the maximum change in real GDP. **Backward:** given a gap to close (or a change that already happened), find the required policy change or the MPC. Every problem uses the same two multipliers, 1 ÷ MPS for purchases and MPC ÷ MPS for taxes and transfers.
`
    },
    {
      id: 'macromul4-gaps',
      type: 'text' as const,
      content: `
## 📖 Closing a Gap: The Three-Step Method

**Step 1: Size and name the gap.**

| Situation | Name | Size of the gap |
|---|---|---|
| Actual real GDP **below** full-employment output | Recessionary (negative) output gap | Full-employment output − actual output |
| Actual real GDP **above** full-employment output | Inflationary (positive) output gap | Actual output − full-employment output |

**Step 2: Choose the direction.** A recessionary gap calls for **expansionary** policy (raise G, cut taxes, raise transfers). An inflationary gap calls for **contractionary** policy (cut G, raise taxes, cut transfers).

**Step 3: Divide the gap by the right multiplier.**

**Required ΔG = gap ÷ (1 ÷ MPS)**  and  **Required ΔT or ΔTR = gap ÷ (MPC ÷ MPS)**

### Worked Example A: A Recessionary Gap

Actual real GDP is **\\$880 billion**, full-employment output is **\\$1,000 billion**, and the MPC is **0.75**.

- Gap: \\$1,000B − \\$880B = **\\$120 billion recessionary gap**
- Spending multiplier = 1 ÷ 0.25 = 4. Tax multiplier size = 0.75 ÷ 0.25 = 3.

| Policy tool | Calculation | Required change |
|---|---|---|
| Government purchases | \\$120B ÷ 4 | **Increase G by \\$30 billion** |
| Taxes | \\$120B ÷ 3 | **Cut taxes by \\$40 billion** |
| Transfer payments | \\$120B ÷ 3 | **Increase transfers by \\$40 billion** |

Check: \\$30B × 4 = \\$120B, and \\$40B × 3 = \\$120B.

### Worked Example B: An Inflationary Gap

Actual real GDP is **\\$1,060 billion**, full-employment output is **\\$1,000 billion**, and the MPC is **0.6**.

- Gap: \\$1,060B − \\$1,000B = **\\$60 billion inflationary gap**
- Spending multiplier = 1 ÷ 0.4 = 2.5. Tax multiplier size = 0.6 ÷ 0.4 = 1.5.

| Policy tool | Calculation | Required change |
|---|---|---|
| Government purchases | \\$60B ÷ 2.5 | **Decrease G by \\$24 billion** |
| Taxes | \\$60B ÷ 1.5 | **Raise taxes by \\$40 billion** |
| Transfer payments | \\$60B ÷ 1.5 | **Cut transfers by \\$40 billion** |

> 🔑 **AP Connection:** These answers assume the price level stays fixed while AD shifts, so the exam asks for the **minimum** change in G that **could** close the gap, or the **maximum** change in real GDP a policy **could** cause. Use those words in your answers too. Part 5 explains why the real effect is usually smaller.
`
    },
    {
      id: 'macromul4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy has a recessionary gap of \\$200 billion and an MPC of 0.9. What is the minimum increase in government purchases that could close the gap?',
            options: [
              '\\$22.2 billion',
              '\\$20 billion',
              '\\$180 billion',
              '\\$200 billion'
            ],
            correctAnswer: 1,
            explanation: 'The spending multiplier is 1 ÷ 0.1 = 10, so the required increase is \\$200 billion ÷ 10 = \\$20 billion. Dividing by the tax multiplier of 9 gives \\$22.2 billion, which is the required tax cut, while \\$180 billion multiplies the gap by the MPC and \\$200 billion ignores the multiplier.'
          },
          {
            question: 'An economy has an inflationary gap of \\$90 billion and an MPC of 0.75. Which tax change could close the gap?',
            options: [
              'Increase taxes by \\$22.5 billion',
              'Decrease taxes by \\$30 billion',
              'Increase taxes by \\$30 billion',
              'Increase taxes by \\$90 billion'
            ],
            correctAnswer: 2,
            explanation: 'An inflationary gap calls for contractionary policy, and the tax multiplier is 0.75 ÷ 0.25 = 3, so taxes must rise by \\$90 billion ÷ 3 = \\$30 billion. Raising taxes by \\$22.5 billion uses the spending multiplier, cutting taxes moves the economy the wrong way, and \\$90 billion ignores the multiplier.'
          },
          {
            question: 'To close the same recessionary gap, how does the required increase in transfer payments compare with the required increase in government purchases?',
            options: [
              'Smaller, because transfers go straight to households',
              'Equal, because both raise aggregate demand fully',
              'Smaller, because transfers are not counted in GDP',
              'Larger, because households save part of each transfer'
            ],
            correctAnswer: 3,
            explanation: 'Households save the MPS share of a transfer before spending begins, so its multiplier is smaller and a larger transfer is needed. Purchases enter the spending stream in full, so the two are not equal, and neither paying households directly nor being left out of GDP makes a transfer the stronger tool.'
          }
        ]
      }
    },
    {
      id: 'macromul4-balanced',
      type: 'text' as const,
      content: `
## The Balanced-Budget Multiplier

Suppose the government raises purchases **and** raises taxes by the same amount, so the budget balance does not change. Does real GDP change?

### Worked Example: ΔG = ΔT = \\$50 Billion, MPC = 0.8

| Change | Multiplier | Effect on real GDP |
|---|---|---|
| G rises \\$50 billion | 1 ÷ 0.2 = 5 | +\\$250 billion |
| Taxes rise \\$50 billion | 0.8 ÷ 0.2 = 4 | −\\$200 billion |
| **Net effect** | | **+\\$50 billion** |

Real GDP rises by exactly the \\$50 billion increase in government purchases. The **balanced-budget multiplier is 1**.

### Why It Is Always 1

**Spending multiplier − tax multiplier size = 1 ÷ MPS − MPC ÷ MPS = (1 − MPC) ÷ MPS = MPS ÷ MPS = 1**

The MPC cancels out, so the result holds at any MPC:

| MPC | ΔG = ΔT | Effect of G | Effect of T | Net change in real GDP |
|---|---|---|---|---|
| 0.50 | \\$10B | +\\$20B | −\\$10B | **+\\$10B** |
| 0.75 | \\$10B | +\\$40B | −\\$30B | **+\\$10B** |
| 0.90 | \\$10B | +\\$100B | −\\$90B | **+\\$10B** |

**The intuition:** the government's purchase adds a first round of \\$10 billion in full. The tax increase takes \\$10 billion of disposable income, which cuts consumption by MPC × \\$10 billion, exactly the size of the purchase's **second** round. From then on, every round of the tax chain cancels a round of the spending chain, leaving only the first round of purchases.

### Using It to Close a Gap

- A \\$40 billion recessionary gap can be closed by raising G and taxes **each** by \\$40 billion.
- A \\$30 billion inflationary gap can be closed by cutting G and taxes **each** by \\$30 billion.

The balanced-budget route needs a much larger change in G than deficit-financed spending does, but it leaves the budget balance unchanged.
`
    },
    {
      id: 'macromul4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

An economy has a recessionary gap of \\$150 billion. The MPC is 0.8. Treat each policy separately.

**1)** What is the minimum increase in government purchases, in billions of dollars, that could close the gap?

**2)** What is the minimum tax cut, in billions of dollars, that could close the gap?

**3)** If the government raises purchases and taxes by the same amount, how large must each increase be, in billions of dollars, to close the gap?

Enter numbers only (no \\$ sign).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '37.5', '150'],
        hint1: 'The spending multiplier is 1 ÷ 0.2 = 5.',
        hint2: 'The tax multiplier size is 0.8 ÷ 0.2 = 4.',
        hint3: 'The balanced-budget multiplier is 1, at any MPC.',
        explanation: '1) \\$150B ÷ 5 = \\$30 billion. 2) \\$150B ÷ 4 = \\$37.5 billion. 3) With a balanced-budget multiplier of 1, G and taxes must each rise by the full \\$150 billion: +\\$750B from purchases and −\\$600B from taxes nets to +\\$150B.'
      }
    },
    {
      id: 'macromul4-combine',
      type: 'text' as const,
      content: `
## Combining Several Changes

When more than one thing changes, find the effect of each with its own multiplier, then **add** the effects.

### Worked Example 1: MPC = 0.9

The government raises purchases by \\$20 billion and raises taxes by \\$10 billion.

| Change | Multiplier | Effect |
|---|---|---|
| ΔG = +\\$20B | 10 | +\\$200B |
| ΔT = +\\$10B | 9 | −\\$90B |
| **Total** | | **+\\$110 billion** |

### Worked Example 2: MPC = 0.8

The government cuts purchases by \\$15 billion and raises transfer payments by \\$15 billion.

| Change | Multiplier | Effect |
|---|---|---|
| ΔG = −\\$15B | 5 | −\\$75B |
| ΔTR = +\\$15B | 4 | +\\$60B |
| **Total** | | **−\\$15 billion** |

The budget balance is unchanged, but real GDP **falls**. Moving dollars from purchases to transfers is contractionary because part of each transfer is saved.

## Solving Backward for the MPC

Some questions give the result and ask for the MPC. Find the multiplier first, then the MPS, then the MPC.

| Given | Multiplier | MPS | MPC |
|---|---|---|---|
| A \\$25B rise in G raises real GDP by at most \\$100B | 100 ÷ 25 = 4 (spending) | 1 ÷ 4 = 0.25 | **0.75** |
| A \\$9B rise in G could close a \\$90B recessionary gap | 90 ÷ 9 = 10 (spending) | 1 ÷ 10 = 0.1 | **0.9** |
| A \\$30B tax cut raises real GDP by at most \\$120B | 120 ÷ 30 = 4 (tax) | spending multiplier = 4 + 1 = 5, so 0.2 | **0.8** |

For the last row, you can also solve MPC ÷ (1 − MPC) = 4 directly: MPC = 4 − 4 × MPC, so 5 × MPC = 4 and MPC = 0.8.

> ⚠️ **Exam trap:** If the given change is a **tax** or **transfer**, the ratio of ΔY to the change is the **tax** multiplier. Add 1 to get the spending multiplier before you find the MPS.
`
    },
    {
      id: 'macromul4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A \\$12 billion increase in government purchases raises real GDP by a maximum of \\$48 billion. What is the marginal propensity to consume?',
            options: [
              '0.75',
              '0.25',
              '0.80',
              '0.20'
            ],
            correctAnswer: 0,
            explanation: 'The spending multiplier is \\$48B ÷ \\$12B = 4, so the MPS is 1 ÷ 4 = 0.25 and the MPC is 0.75. The value 0.25 is the MPS, while 0.80 and 0.20 treat 4 as the tax multiplier and give the MPC and MPS for a spending multiplier of 5.'
          },
          {
            question: 'The MPC is 0.75. The government raises purchases by \\$30 billion and raises taxes by \\$30 billion. What is the maximum change in real GDP?',
            options: [
              '+\\$120 billion',
              '+\\$30 billion',
              '+\\$210 billion',
              'No change in real GDP'
            ],
            correctAnswer: 1,
            explanation: 'The purchases add \\$30B × 4 = \\$120B and the tax increase subtracts \\$30B × 3 = \\$90B, a net rise of \\$30 billion: the balanced-budget multiplier is 1. The \\$120 billion answer ignores the tax increase, \\$210 billion adds the tax effect instead of subtracting it, and the effects do not fully cancel because the multipliers differ.'
          },
          {
            question: 'The MPC is 0.8. The government raises purchases by \\$10 billion and also cuts taxes by \\$10 billion. What is the maximum change in real GDP?',
            options: [
              '+\\$10 billion',
              '+\\$100 billion',
              '+\\$90 billion',
              '+\\$50 billion'
            ],
            correctAnswer: 2,
            explanation: 'The purchases add \\$10B × 5 = \\$50B and the tax cut adds \\$10B × 4 = \\$40B, for a total of \\$90 billion. The \\$50 billion answer ignores the tax cut, \\$100 billion applies the spending multiplier to both changes, and \\$10 billion is the balanced-budget result, which applies only when taxes rise.'
          }
        ]
      }
    }
  ]
}
