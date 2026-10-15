export const macroMultiplierEffectPart3Data = {
  topicSlug: 'macro-multiplier-effect',
  sections: [
    {
      id: 'macromul3-intro',
      type: 'text' as const,
      content: `
# 🔄 The Multiplier Effect

**Part 3 of 7 — How the Multiplier Works, Round by Round**

---

| Section |
|---------|
| 📖 Following the Spending Chain |
| From Rounds to a Formula |
| Any Change in Autonomous Spending |
| Taxes and Transfers Start One Step Later |
| Signs and Sizes at a Glance |

> 🔑 **Key Concept:** The multiplier is not a rule to memorize; it is the **sum of every round of spending** that an initial change sets off. Tracing those rounds explains why the spending multiplier is 1 ÷ MPS, why it applies to **any** autonomous change in spending (C, I, G or net exports), and why taxes and transfers have a smaller multiplier of MPC ÷ MPS.
`
    },
    {
      id: 'macromul3-rounds',
      type: 'text' as const,
      content: `
## 📖 Following the Spending Chain

Suppose businesses decide to spend an extra **\\$40 billion** on new equipment, and the MPC is **0.75**. Ignore taxes and imports for now.

- **Round 1:** The \\$40 billion of investment spending becomes \\$40 billion of income for the workers and owners of the firms that build the equipment.
- **Round 2:** Those households spend 75% of their new income (\\$30 billion) and save 25% (\\$10 billion). The \\$30 billion becomes income for store owners, restaurant workers and others.
- **Round 3:** The recipients spend 75% of \\$30 billion (\\$22.5 billion) and save \\$7.5 billion.
- The process repeats, with each round 75% the size of the one before.

### The Rounds Table (billions of dollars)

| Round | New income created | Spent (passed to the next round) | Saved |
|---|---|---|---|
| 1 | 40.000 | 30.000 | 10.000 |
| 2 | 30.000 | 22.500 | 7.500 |
| 3 | 22.500 | 16.875 | 5.625 |
| 4 | 16.875 | 12.656 | 4.219 |
| ... | ... | ... | ... |
| **Total** | **160** | **120** | **40** |

### What the Table Shows

- **Most of the effect comes early.** After four rounds, real GDP has risen by 40 + 30 + 22.5 + 16.875 = **\\$109.375 billion**, about 68% of the final total. After ten rounds it has risen by about \\$151 billion, about 94% of the total.
- **The total is finite.** Each round is smaller than the last, so the sum approaches **\\$160 billion** = \\$40 billion × 4.
- **The chain stops when saving catches up.** Total new saving is \\$40 billion, exactly equal to the initial injection of investment. Every dollar injected eventually leaks out as saving, and that is what ends the process.
`
    },
    {
      id: 'macromul3-series',
      type: 'text' as const,
      content: `
## From Rounds to a Formula

Write the total change in real GDP as the sum of the rounds, where ΔA is the initial change in spending:

**ΔY = ΔA + MPC × ΔA + MPC² × ΔA + MPC³ × ΔA + …**

**ΔY = ΔA × (1 + MPC + MPC² + MPC³ + …)**

The sum in parentheses is a geometric series. Call it S.

| Step | Equation |
|---|---|
| Write the series | S = 1 + MPC + MPC² + MPC³ + … |
| Multiply by MPC | MPC × S = MPC + MPC² + MPC³ + … |
| Subtract the second line from the first | S − MPC × S = 1 |
| Solve for S | S = 1 ÷ (1 − MPC) = 1 ÷ MPS |

So **ΔY = ΔA × 1 ÷ MPS**. For the investment example: 40 × 1 ÷ 0.25 = 40 × 4 = **160**.

The partial sum after n rounds is ΔA × (1 − MPCⁿ) ÷ MPS. After 4 rounds: 40 × (1 − 0.75⁴) ÷ 0.25 = 160 × (1 − 0.31640625) = 109.375, which matches the table.

### Multiplier Values Worth Knowing

| MPC | MPS | Spending multiplier (1 ÷ MPS) | Tax multiplier size (MPC ÷ MPS) |
|---|---|---|---|
| 0.50 | 0.50 | 2 | 1 |
| 0.60 | 0.40 | 2.5 | 1.5 |
| 0.75 | 0.25 | 4 | 3 |
| 0.80 | 0.20 | 5 | 4 |
| 0.90 | 0.10 | 10 | 9 |

A higher MPC means each round passes on more spending, so the multiplier is larger. A higher MPS means more leaks out each round, so the multiplier is smaller.
`
    },
    {
      id: 'macromul3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The MPC is 0.6. A firm increases investment spending by \\$50 million. What is the maximum total increase in real GDP once every round of spending is counted?',
            options: [
              '\\$125 million',
              '\\$83.3 million',
              '\\$75 million',
              '\\$30 million'
            ],
            correctAnswer: 0,
            explanation: 'The spending multiplier is 1 ÷ 0.4 = 2.5, so ΔY = \\$50 million × 2.5 = \\$125 million. Dividing by the MPC gives \\$83.3 million, using the tax multiplier of 1.5 gives \\$75 million, and \\$30 million is only the second-round spending.'
          },
          {
            question: 'With no taxes or imports in the model, why does the chain of spending from a new investment project eventually stop growing?',
            options: [
              'Each round, firms raise prices until real spending is zero',
              'Part of each round of new income is saved',
              'Banks run out of reserves to lend to new borrowers',
              'Households reach the income where saving equals zero'
            ],
            correctAnswer: 1,
            explanation: 'Every round, the MPS share of new income is saved instead of spent, so each round is smaller and the sum converges. The simple multiplier holds the price level fixed, bank reserves play no role in it, and the break-even income on the saving schedule does not end the chain.'
          },
          {
            question: 'Investment rises by \\$40 billion and the MPC is 0.75. When the multiplier process is complete, by how much has total saving increased?',
            options: [
              '\\$10 billion',
              '\\$160 billion',
              '\\$40 billion',
              '\\$120 billion'
            ],
            correctAnswer: 2,
            explanation: 'Real GDP rises by \\$160 billion and households save 25% of it, so saving rises by \\$40 billion, exactly the initial injection. The \\$10 billion figure is only the first round of saving, \\$160 billion is the total change in income, and \\$120 billion is the total change in consumption.'
          }
        ]
      }
    },
    {
      id: 'macromul3-components',
      type: 'text' as const,
      content: `
## Any Change in Autonomous Spending

The rounds table never asked **who** made the first purchase. The spending multiplier applies to any initial change in spending that does not come from a change in income: autonomous consumption, investment, government purchases or net exports.

### Worked Examples: MPC = 0.8, Spending Multiplier = 5

| Initial change | Component | Maximum change in real GDP |
|---|---|---|
| Consumer confidence rises; households spend \\$6 billion more at every income | Autonomous C | +\\$6B × 5 = **+\\$30 billion** |
| Firms cut planned investment by \\$12 billion | I | −\\$12B × 5 = **−\\$60 billion** |
| The government buys \\$20 billion more in highway construction | G | +\\$20B × 5 = **+\\$100 billion** |
| Foreign buyers purchase \\$9 billion more of the country's exports | Xn | +\\$9B × 5 = **+\\$45 billion** |
| Households shift \\$9 billion of spending from domestic goods to imports | Xn | −\\$9B × 5 = **−\\$45 billion** |

### Negative Shocks Multiply Too

The multiplier works in both directions. If firms cut investment by \\$12 billion, the workers who would have earned that \\$12 billion cut their own spending by 0.8 × \\$12 billion = \\$9.6 billion, the people who would have earned that \\$9.6 billion cut back by \\$7.68 billion, and so on. The total loss is \\$60 billion. This is how a fall in one sector, such as housing construction, can drag the whole economy into a recession.

## Taxes and Transfers Start One Step Later

A tax cut or a transfer payment does not buy anything by itself. It raises **disposable income**, and households spend only the MPC share of it. The chain therefore starts with a smaller first round.

### Worked Example: A \\$40 Billion Tax Cut, MPC = 0.75

| Round | New spending (billions) |
|---|---|
| Tax cut received | 0 (households receive \\$40 billion: they spend \\$30 billion and save \\$10 billion) |
| 1 | 30.000 |
| 2 | 22.500 |
| 3 | 16.875 |
| ... | ... |
| **Total** | **120** |

The spending chain is the same as the investment example **minus its first round of \\$40 billion**: 160 − 40 = 120. In formula form:

**ΔY = (MPC × tax cut) × 1 ÷ MPS = (MPC ÷ MPS) × tax cut = 3 × \\$40 billion = \\$120 billion**

That is why the size of the tax multiplier is always exactly **1 less** than the spending multiplier.
`
    },
    {
      id: 'macromul3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The MPC is 0.9. Find the maximum change in real GDP, in billions of dollars, for each policy or shock. Treat each one separately.

**1)** Government purchases rise by \\$5 billion. By how much does real GDP rise?

**2)** Transfer payments rise by \\$5 billion. By how much does real GDP rise?

**3)** Investment falls by \\$8 billion. By how much does real GDP fall?

Enter positive numbers only (no \\$ sign).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '45', '80'],
        hint1: 'With MPC = 0.9, the spending multiplier is 1 ÷ 0.1 = 10.',
        hint2: 'A transfer payment works like a tax cut: only 90% is spent in the first round, so its multiplier is 0.9 ÷ 0.1 = 9.',
        hint3: 'A change in investment uses the spending multiplier, in either direction.',
        explanation: '1) \\$5 billion × 10 = \\$50 billion. 2) \\$5 billion × 9 = \\$45 billion, because households save \\$0.5 billion of the transfer before any spending begins. 3) \\$8 billion × 10 = \\$80 billion decrease.'
      }
    },
    {
      id: 'macromul3-signs',
      type: 'text' as const,
      content: `
## Signs and Sizes at a Glance

| Change | Multiplier to use | Direction of real GDP |
|---|---|---|
| Increase in autonomous C, I, G or Xn | 1 ÷ MPS | Rises |
| Decrease in autonomous C, I, G or Xn | 1 ÷ MPS | Falls |
| Tax **cut** | MPC ÷ MPS | Rises |
| Tax **increase** | MPC ÷ MPS | Falls |
| Transfer payments **increase** | MPC ÷ MPS | Rises |
| Transfer payments **decrease** | MPC ÷ MPS | Falls |

Textbooks write the tax multiplier as **−MPC ÷ MPS**. The minus sign records that taxes and real GDP move in **opposite** directions: a positive ΔT (a tax increase) gives a negative ΔY. Transfer payments work like negative taxes, so the **transfer multiplier is +MPC ÷ MPS**.

> 🔑 **AP Connection:** Social Security checks, unemployment benefits and stimulus payments are **transfer payments**, not government purchases. They are not counted in G or in GDP when they are paid. On the exam, use the spending multiplier only for purchases of goods and services, and the tax multiplier for both taxes and transfers. If you are asked to "explain" the difference, say that households save part of a tax cut or transfer (the MPS share) before any spending begins.
`
    },
    {
      id: 'macromul3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the MPC rises from 0.75 to 0.8, the spending multiplier ___.',
            options: ['increases', 'decreases', 'stays the same', 'becomes negative']
          },
          {
            label: 'A \\$1 billion increase in transfer payments has the same maximum effect on real GDP as a \\$1 billion ___.',
            options: ['tax cut', 'tax increase', 'rise in government purchases', 'rise in investment']
          },
          {
            label: 'In the first round, a tax cut raises consumption by the amount of the cut multiplied by ___.',
            options: ['the MPC', 'the MPS', 'the spending multiplier', 'the tax multiplier']
          },
          {
            label: 'A fall in exports reduces real GDP by the fall in exports multiplied by ___.',
            options: ['the spending multiplier', 'the tax multiplier', 'the MPC', 'the MPS']
          }
        ],
        correctAnswers: ['increases', 'tax cut', 'the MPC', 'the spending multiplier'],
        hint1: 'A larger MPC means each round passes on more spending.',
        hint2: 'Transfers raise disposable income, just as a tax cut does.',
        hint3: 'Exports are a component of spending on domestic output, like investment or government purchases.',
        explanation: 'A higher MPC raises the spending multiplier (from 4 to 5 here). Transfers and tax cuts both raise disposable income, so they share the MPC ÷ MPS multiplier. A tax cut adds MPC × the cut in first-round spending, and a change in exports is a change in spending on domestic output, so it uses the spending multiplier.'
      }
    }
  ]
}
