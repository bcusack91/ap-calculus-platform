export const macroMonetaryPolicyPart3Data = {
  topicSlug: 'macro-monetary-policy',
  sections: [
    {
      id: 'macromon3-intro',
      type: 'text' as const,
      content: `
# 🏦 Monetary Policy

**Part 3 of 7 — Monetary Policy Chains, Worked**

---

| Section |
|---------|
| 📖 The Transmission Chain, Link by Link |
| Case A: Fighting a Recession |
| Case B: Cooling an Inflationary Gap |
| Writing the Chain on an FRQ |

> 🔑 **Key Concept:** Monetary policy reaches output and prices through a chain: **Fed tool → interest rate → interest-sensitive spending (investment, and consumer purchases such as cars and homes) → aggregate demand → real GDP, price level and unemployment.** Every link has a direction, and the AP exam awards points link by link.
`
    },
    {
      id: 'macromon3-chain',
      type: 'text' as const,
      content: `
## 📖 The Transmission Chain, Link by Link

| Link | Expansionary policy | Contractionary policy |
|---|---|---|
| 1. Tool (ample reserves) | **Lower** IORB | **Raise** IORB |
| 1. Tool (limited reserves) | **Buy** bonds, **lower** discount rate, **lower** reserve requirement | **Sell** bonds, **raise** discount rate, **raise** reserve requirement |
| 2. Policy rate / money supply | Federal funds rate falls; in the limited-reserves model MS shifts right | Federal funds rate rises; in the limited-reserves model MS shifts left |
| 3. Nominal interest rate | Falls | Rises |
| 4. Real interest rate (short run) | Falls | Rises |
| 5. Investment and interest-sensitive consumption | Rise | Fall |
| 6. Aggregate demand | Shifts **right** | Shifts **left** |
| 7. Short-run outcome | Real GDP ↑, price level ↑, unemployment ↓ | Real GDP ↓, price level ↓, unemployment ↑ |

### Why link 4 holds in the short run

Real interest rate ≈ nominal interest rate − expected inflation. In the short run, expected inflation does not change quickly, so when the Fed lowers the nominal rate, the **real** rate falls too. Firms compare the real cost of borrowing with the expected return on new machines and buildings, so a lower real rate makes more projects worth doing.

### What "interest-sensitive" means

| Spending | Why it responds to interest rates |
|---|---|
| Business investment (equipment, factories) | Usually financed by borrowing, or by funds that could earn interest instead |
| New housing (counted as investment in GDP) | Mortgage payments depend on the interest rate |
| Consumer durables (cars, appliances) | Often bought with loans |

Government purchases are **not** on this list: they are set by Congress, not by interest rates.
`
    },
    {
      id: 'macromon3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Fed raises the interest rate on reserve balances. Which sequence describes the short-run result?',
            options: [
              'Federal funds rate falls, investment rises, AD shifts right',
              'Federal funds rate rises, investment falls, AD shifts left',
              'Federal funds rate rises, saving falls, AD shifts right',
              'Money demand rises, investment rises, AD shifts left'
            ],
            correctAnswer: 1,
            explanation: 'A higher IORB pulls the federal funds rate and other rates up, which raises borrowing costs, reduces investment and shifts AD left. Higher rates make borrowing less attractive, so they do not raise investment or shift AD right.'
          },
          {
            question: 'Why does a cut in the nominal interest rate by the Fed also lower the real interest rate in the short run?',
            options: [
              'Real and nominal rates are always equal by definition',
              'Expected inflation adjusts only slowly over time',
              'The Fed sets the inflation rate equal to the nominal rate',
              'Lower rates immediately reduce the actual price level'
            ],
            correctAnswer: 1,
            explanation: 'The real rate is roughly the nominal rate minus expected inflation, and expectations adjust slowly, so a lower nominal rate means a lower real rate for now. The two rates are not equal by definition, and the Fed does not set inflation directly.'
          }
        ]
      }
    },
    {
      id: 'macromon3-caseA',
      type: 'text' as const,
      content: `
## Case A: Fighting a Recession

**Situation.** Real GDP is \\$19.4 trillion and full-employment output is \\$20 trillion. Unemployment is 6.5%, above the natural rate of 4.5%. Inflation is low. The Fed decides to act.

### Step 1: Choose the tool

- **Ample reserves:** the FOMC lowers the target range for the federal funds rate and **lowers IORB** by the same amount (say from 3.15% to 2.65%).
- **Limited reserves:** the Fed **buys government bonds** on the open market.

### Step 2: The money market

Under limited reserves, the bond purchase adds reserves, MS shifts right, and the equilibrium nominal interest rate falls (say from 4% to 3.5%). Under ample reserves, the lower IORB pulls the federal funds rate down by about the same amount, and other short-term rates follow.

### Step 3: Spending

Lower interest rates make borrowing cheaper. Firms start more investment projects, households take out more mortgages and car loans, and **AD shifts right**.

### Step 4: Short-run outcome in AD-AS

| Variable | Direction | Why |
|---|---|---|
| Real GDP | Rises toward \\$20 trillion | Higher AD along an upward-sloping SRAS |
| Price level | Rises | Higher AD |
| Unemployment | Falls toward 4.5% | Firms hire to produce more |

The **multiplier** (Multiplier Effect lesson) means the AD shift is larger than the first rise in investment.

> 🔑 **AP Connection:** The Fed chooses a policy **direction**, not an exact output number. FRQs ask for the direction of each link, not how far the rate must move.
`
    },
    {
      id: 'macromon3-caseB',
      type: 'text' as const,
      content: `
## Case B: Cooling an Inflationary Gap

**Situation.** Real GDP is \\$20.6 trillion, above full-employment output of \\$20 trillion. Unemployment is 3.5%, below the natural rate. Inflation has risen to 5%, above the Fed's 2% goal.

| Link | What happens |
|---|---|
| Tool | Ample reserves: **raise IORB** (with a higher target range). Limited reserves: **sell bonds** |
| Interest rates | Federal funds rate and other rates **rise** |
| Bond prices | Existing bonds' prices **fall** (inverse relationship) |
| Spending | Investment and interest-sensitive consumption **fall** |
| AD | Shifts **left** |
| Short-run outcome | Real GDP falls toward \\$20 trillion, the price level rises less (or falls), unemployment rises toward the natural rate |

### A note on "the price level falls"

In the AD-AS model, a leftward AD shift lowers the price level relative to where it would otherwise be. In practice, inflation usually **slows** (disinflation) rather than prices actually falling. On the AP exam, answer in the model's terms: AD shifts left, so **the price level decreases**.
`
    },
    {
      id: 'macromon3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy has an inflationary gap and banks hold limited reserves. Which open-market operation should the Fed conduct, and what happens to bond prices?',
            options: [
              'Sell bonds; bond prices rise',
              'Buy bonds; bond prices rise',
              'Sell bonds; bond prices fall',
              'Sell bonds; bond prices hold steady'
            ],
            correctAnswer: 2,
            explanation: 'Contractionary policy calls for selling bonds, which reduces reserves and raises interest rates. Because bond prices move inversely with interest rates, the prices of existing bonds fall.'
          },
          {
            question: 'The Fed lowers IORB during a recession. Which component of aggregate demand is most directly affected?',
            options: [
              'Government purchases, because the Treasury now borrows at a lower rate',
              'Investment, because firms borrow more cheaply to buy new capital',
              'Net exports, because the Fed buys foreign goods with the new reserves',
              'Consumption, because households pay lower income taxes on their wages'
            ],
            correctAnswer: 1,
            explanation: 'Lower interest rates reduce the cost of financing new capital, so investment is the most interest-sensitive component of AD. Government purchases are set by Congress, the Fed does not buy foreign goods, and taxes are fiscal policy.'
          },
          {
            question: 'Which statement about Case B (a contractionary policy that closes an inflationary gap) is correct in the short run?',
            options: [
              'Unemployment rises toward the natural rate',
              'Real GDP rises further above full employment',
              'The price level rises faster than before the policy',
              'Investment rises because interest rates go up'
            ],
            correctAnswer: 0,
            explanation: 'Contractionary policy shifts AD left, so firms produce less and unemployment rises toward the natural rate. Real GDP falls rather than rises, and higher interest rates reduce investment.'
          }
        ]
      }
    },
    {
      id: 'macromon3-frq',
      type: 'text' as const,
      content: `
## Writing the Chain on an FRQ

A typical prompt: *"Identify an open-market operation the Fed could use to close the gap. Explain how it affects the nominal interest rate, and show the effect on real output in the AD-AS model."*

### A full-credit answer

> The Fed should **buy government bonds**. This increases bank reserves and the money supply, so the nominal interest rate **decreases**. A lower interest rate increases investment, so aggregate demand shifts to the right, and real output **increases**.

### Point-losing habits

| Habit | Why it costs points | Fix |
|---|---|---|
| "The Fed lowers the federal funds rate" as the tool | The federal funds rate is the **target** | Name IORB (ample) or an OMO (limited) |
| "The Fed prints money" | Not an AP tool | Name the bond purchase |
| Skipping the interest rate | The chain must pass through it | Always say what happens to i before spending |
| "AD increases, so LRAS shifts" | Monetary policy shifts AD, not LRAS | Keep the effect on AD |
| "Investment rises because people save more" | Saving is not the link | Lower borrowing cost raises investment |
`
    },
    {
      id: 'macromon3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The FOMC sets a target range of 3.25% to 3.50% for the federal funds rate and IORB of 3.40%. Expected inflation is 2%.

**1)** The Fed cuts the target range and IORB by 0.50 percentage point. What is the new IORB, in percent?

**2)** The federal funds rate was 3.33% and moves down by the same amount as IORB. What is the new federal funds rate, in percent?

**3)** If expected inflation stays at 2%, what is the new real federal funds rate, in percent?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.9', '2.83', '0.83'],
        hint1: 'Subtract 0.50 from 3.40.',
        hint2: 'Subtract 0.50 from 3.33.',
        hint3: 'Real rate ≈ nominal rate − expected inflation.',
        explanation: '1) 3.40% − 0.50 = 2.90%. 2) 3.33% − 0.50 = 2.83%, inside the new range of 2.75% to 3.00%. 3) 2.83% − 2% = 0.83%, so the real rate falls by the same 0.50 point because expected inflation did not change.'
      }
    }
  ]
};
