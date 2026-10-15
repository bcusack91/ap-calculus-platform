export const macroMultiplierEffectPart5Data = {
  topicSlug: 'macro-multiplier-effect',
  sections: [
    {
      id: 'macromul5-intro',
      type: 'text' as const,
      content: `
# 🔄 The Multiplier Effect

**Part 5 of 7 — Multipliers in the AD-AS Model and Common Misconceptions**

---

| Section |
|---------|
| 📖 The Multiplier Sets the Size of the AD Shift |
| Why Real GDP Rises by Less Than the Shift |
| Leakages Beyond Saving |
| Two Different Multipliers |
| Common Misconceptions |

> 🔑 **Key Concept:** The multiplier tells you how far the **aggregate demand curve shifts horizontally**. It does not tell you the final change in real GDP. When the short-run aggregate supply curve slopes upward, part of the shift shows up as a **higher price level**, so real GDP rises by **less** than the multiplier predicts. That is why AP questions say "maximum" change in real GDP.
`
    },
    {
      id: 'macromul5-adshift',
      type: 'text' as const,
      content: `
## 📖 The Multiplier Sets the Size of the AD Shift

The simple multiplier assumes the price level does not change. On an AD-AS graph, that means it measures the **horizontal distance** between the old and new AD curves.

### Worked Example: G Rises by \\$20 Billion, MPC = 0.8

The spending multiplier is 1 ÷ 0.2 = 5, so aggregate demand shifts right by \\$20B × 5 = **\\$100 billion at every price level**.

The schedules below describe the graph. Real GDP is in billions of dollars.

| Price level | Real GDP demanded (AD₁) | Real GDP demanded (AD₂) | Real GDP supplied (SRAS) |
|---|---|---|---|
| 95 | 920 | 1,020 | 820 |
| 100 | 900 | 1,000 | 900 |
| 105 | 880 | 980 | 980 |
| 110 | 860 | 960 | 1,060 |

- Read across any row: AD₂ is always **100 more** than AD₁. That gap is the multiplier result.
- **Original equilibrium:** AD₁ meets SRAS at a price level of **100** and real GDP of **\\$900 billion**.
- **New equilibrium:** AD₂ meets SRAS at a price level of **105** and real GDP of **\\$980 billion**.

Real GDP rises by **\\$80 billion**, not \\$100 billion, and the price level rises from 100 to 105.

> 🔑 **AP Connection:** If a question asks how far AD shifts, use the multiplier: \\$100 billion. If it asks for the change in equilibrium real GDP and gives you an upward-sloping SRAS, the answer is **less than** \\$100 billion. If it asks only for the "maximum" change in real GDP, use the multiplier answer.
`
    },
    {
      id: 'macromul5-why-less',
      type: 'text' as const,
      content: `
## Why Real GDP Rises by Less Than the Shift

The higher price level causes a **movement along** the new AD curve, and that movement cuts the quantity of real output demanded by \\$20 billion in the example.

| AD slope effect | How a higher price level reduces real output demanded |
|---|---|
| Real wealth effect | Households' money and savings buy less, so they consume less |
| Interest rate effect | Households and firms need more money for purchases, interest rates rise, and investment and interest-sensitive consumption fall |
| Exchange rate (foreign purchases) effect | Domestic goods become relatively more expensive, so exports fall and imports rise |

### How Much of the Multiplier Survives?

It depends on the **slope of SRAS** where the economy is operating.

| Where the economy is | Shape of SRAS | Effect of an AD increase |
|---|---|---|
| Deep recession, many idle workers and machines | Nearly flat | Real GDP rises by close to the full multiplier amount; the price level barely moves |
| Near full employment | Upward sloping | Real GDP and the price level both rise |
| Well beyond full employment | Steep | Mostly the price level rises; real GDP changes little |

This is the same reason fiscal stimulus is most powerful in a deep recession and least useful in a boom.
`
    },
    {
      id: 'macromul5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The MPC is 0.75 and government purchases rise by \\$25 billion. How does the aggregate demand curve change?',
            options: [
              'It shifts right by \\$25 billion at each price level',
              'It shifts right by \\$75 billion at each price level',
              'It shifts right by \\$100 billion at each price level',
              'It shifts right by \\$33.3 billion at each price level'
            ],
            correctAnswer: 2,
            explanation: 'The spending multiplier is 1 ÷ 0.25 = 4, so AD shifts right by \\$25B × 4 = \\$100 billion at every price level. A \\$25 billion shift ignores the multiplier, \\$75 billion uses the tax multiplier, and \\$33.3 billion divides by the MPC.'
          },
          {
            question: 'After a \\$100 billion rightward shift of aggregate demand, equilibrium real GDP rises by only \\$80 billion. Which explanation fits the AD-AS model?',
            options: [
              'Households saved more of each round at higher prices',
              'The MPC fell, so the multiplier became 4 instead of 5',
              'Firms cut output as their production costs rose',
              'Prices rose, reducing the real output demanded'
            ],
            correctAnswer: 3,
            explanation: 'With an upward-sloping SRAS curve, the price level rises and the economy moves up along the new AD curve, which cuts the real output demanded. Nothing in the model changes the MPC, and the shortfall comes from the price level effects on demand rather than from firms cutting output.'
          },
          {
            question: 'In which situation would an increase in government purchases raise real GDP by close to the full multiplier amount?',
            options: [
              'A deep recession with many idle workers and factories',
              'A boom with output well above full employment',
              'Full employment with wages starting to rise',
              'An economy on the steep part of its SRAS curve'
            ],
            correctAnswer: 0,
            explanation: 'When many resources are idle, SRAS is nearly flat, so the AD shift raises output with little change in the price level. In a boom, at full employment, or on a steep SRAS, much of the shift shows up as a higher price level instead.'
          }
        ]
      }
    },
    {
      id: 'macromul5-leakages',
      type: 'text' as const,
      content: `
## Leakages Beyond Saving

In the AP model, the only thing that stops the spending chain is **saving**. Real economies have two more **leakages**: income taxes that rise with income, and spending on imports. Each one removes part of every round before it can be spent on domestic output.

### Illustration (beyond the AP formulas)

Suppose that out of each extra dollar of income, 20 cents goes to taxes, 10 cents is spent on imports and 10 cents is saved. Only **60 cents** is spent on domestic goods and services.

| Model | Share of each round that leaks out | Multiplier |
|---|---|---|
| Saving is the only leak (AP model, MPS = 0.1) | 0.1 | 1 ÷ 0.1 = **10** |
| Taxes, imports and saving all leak | 0.2 + 0.1 + 0.1 = 0.4 | 1 ÷ 0.4 = **2.5** |

The same logic as the rounds table applies: the multiplier is 1 divided by the share that leaks out each round. The more leaks, the smaller the multiplier.

Other forces also shrink the real-world effect:

- **The price level rises** when SRAS slopes upward (the previous section).
- **Interest rates can rise** when the government borrows to pay for new spending, which reduces private investment. This is **crowding out**, covered in the fiscal policy topic.
- **Time lags:** the rounds take months or years to play out, and other shocks happen in the meantime.

> 🔑 **AP Connection:** Unless a question says otherwise, use **1 ÷ MPS** and **MPC ÷ MPS**. If a question asks you to explain why the actual change in real GDP is smaller than calculated, a rising price level, imports and crowding out are all valid reasons, but name the one the question's scenario points to.
`
    },
    {
      id: 'macromul5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An increase in government purchases shifts the ___ curve to the right.',
            options: ['aggregate demand', 'short-run aggregate supply', 'long-run aggregate supply', 'production possibilities']
          },
          {
            label: 'When SRAS slopes upward, the increase in equilibrium real GDP is ___ the horizontal shift of AD.',
            options: ['smaller than', 'larger than', 'equal to', 'twice']
          },
          {
            label: 'If households spend a larger share of each extra dollar on imports, the multiplier becomes ___.',
            options: ['smaller', 'larger', 'unchanged', 'negative']
          },
          {
            label: 'The simple money multiplier is 1 divided by ___.',
            options: ['the reserve requirement', 'the MPS', 'the MPC', 'the interest rate']
          }
        ],
        correctAnswers: ['aggregate demand', 'smaller than', 'smaller', 'the reserve requirement'],
        hint1: 'Government purchases are one of the components of total spending.',
        hint2: 'Part of the shift is absorbed by a higher price level.',
        hint3: 'Spending on imports does not create income for domestic producers.',
        explanation: 'Government purchases are part of aggregate demand, so AD shifts right. A higher price level absorbs part of the shift, so real GDP rises by less than the shift. Import spending leaks out of the domestic spending chain, shrinking the multiplier. The money multiplier is 1 ÷ the reserve requirement, a different chain from the spending multiplier.'
      }
    },
    {
      id: 'macromul5-two',
      type: 'text' as const,
      content: `
## Two Different Multipliers

AP Macroeconomics uses the word "multiplier" for two separate chains. Do not mix them up.

| | Spending multiplier | Money multiplier |
|---|---|---|
| Formula | 1 ÷ MPS | 1 ÷ reserve requirement |
| What starts the chain | A change in spending (C, I, G, Xn) | A change in bank reserves |
| What repeats each round | Households spend part of new income | Banks lend out excess reserves, which are redeposited |
| What leaks out each round | Saving | Required reserves |
| What it multiplies into | Real GDP (an AD shift) | Checkable deposits and the money supply |

Example: with MPC = 0.8, the spending multiplier is 5. With a 10% reserve requirement, the money multiplier is 1 ÷ 0.10 = 10. Both can appear in one question, so label which one you are using.

The U.S. reserve requirement has been **0%** since March 2020, so the money multiplier is a model of the **maximum** possible deposit expansion under limited reserves, not a description of how the Fed operates today. With ample reserves, the Fed steers the federal funds rate (its target) mainly by setting the **interest rate on reserve balances**. Under limited reserves, it uses open-market operations, the discount rate and the reserve requirement. Details are in the money and banking and monetary policy topics.

## Common Misconceptions

| Misconception | Correction |
|---|---|
| "The multiplier equals the MPC." | The spending multiplier is 1 ÷ (1 − MPC). An MPC of 0.8 gives a multiplier of 5. |
| "A larger MPS means a larger multiplier." | More saving means more leakage each round, so a **larger MPS gives a smaller multiplier**. |
| "A tax cut has the same effect as an equal increase in G." | The tax multiplier is 1 smaller, because part of a tax cut is saved before any spending occurs. |
| "Raising G and taxes by the same amount has no effect." | The balanced-budget multiplier is 1, so real GDP rises by ΔG. |
| "Transfer payments are part of government purchases." | Transfers are not purchases of output. They use the tax multiplier, with the opposite sign. |
| "The multiplier works only when spending rises." | A fall in investment, exports or purchases is multiplied too. |
| "The multiplier gives the actual change in real GDP." | It gives the AD shift, the **maximum** change. A rising price level absorbs part of it. |
`
    },
    {
      id: 'macromul5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement correctly distinguishes the spending multiplier from the money multiplier?',
            options: [
              'Spending multiplier uses the reserve requirement, money multiplier uses the MPS',
              'Spending multiplier uses the MPS, money multiplier uses the reserve requirement',
              'Spending multiplier uses the MPC, money multiplier uses the interest rate',
              'Both multipliers use the MPS but apply it to different spending'
            ],
            correctAnswer: 1,
            explanation: 'The spending multiplier is 1 ÷ MPS and multiplies a change in spending into real GDP, while the money multiplier is 1 ÷ the reserve requirement and multiplies reserves into deposits. Swapping the two, or tying the money multiplier to the interest rate or the MPS, confuses the chains.'
          },
          {
            question: 'The MPC is 0.9, so a \\$10 billion increase in government purchases could raise real GDP by up to \\$100 billion. Which change would make the actual increase smaller?',
            options: [
              'A larger share of new income spent on domestic goods',
              'A flatter SRAS curve because many workers are idle',
              'A larger share of new income spent on imports',
              'A higher MPC among the households receiving the income'
            ],
            correctAnswer: 2,
            explanation: 'Spending on imports leaks out of the domestic spending chain, so each round is smaller. Spending more on domestic goods, a flatter SRAS curve and a higher MPC would all make the actual increase closer to, or larger than, the \\$100 billion figure.'
          },
          {
            question: 'Congress raises Social Security payments by \\$20 billion. Why is this change multiplied by MPC ÷ MPS instead of 1 ÷ MPS?',
            options: [
              'It goes to retirees, who save most of it',
              'It is funded by payroll taxes on workers',
              'It is spent over many years, not at once',
              'It is a transfer, not a purchase of output'
            ],
            correctAnswer: 3,
            explanation: 'Social Security payments are transfers: they raise disposable income, households spend only the MPC share, and the chain starts one step later than a purchase. The tax multiplier does not depend on who receives the money, how it is funded or how quickly it is paid out.'
          }
        ]
      }
    }
  ]
}
