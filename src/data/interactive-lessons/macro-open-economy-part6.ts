export const macroOpenEconomyPart6Data = {
  topicSlug: 'macro-open-economy',
  sections: [
    {
      id: 'macroope6-intro',
      type: 'text' as const,
      content: `
# 🌏 Open Economy Macroeconomics

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Open-Economy Questions Appear |
| FRQ Practice Set 1: Deficit Spending in an Open Economy |
| FRQ Practice Set 2: Fighting Inflation with Monetary Policy |
| Exam-Style Multiple Choice |

> 🔑 **Key Concept:** The long free-response question on the AP Macroeconomics exam often starts with an AD-AS graph and then asks how a policy works through the **money market** or **loanable funds market** to the **foreign exchange market** and **net exports**. Each part builds on the one before, so a clear chain is worth points at every step.
`
    },
    {
      id: 'macroope6-format',
      type: 'text' as const,
      content: `
## 📖 How Open-Economy Questions Appear

| Question asks… | What a full answer contains |
|---|---|
| "Draw a correctly labeled graph of the loanable funds market" | Axes: real interest rate, quantity of loanable funds; S and D; equilibrium r and Q labeled |
| "Show the effect of [policy] on the real interest rate" | The correct curve shifted with an arrow; new r labeled above or below the old r |
| "What happens to the international value of the dollar? Explain." | Direction **plus** the mechanism: relative real rate → capital flow → demand or supply of dollars |
| "Draw the foreign exchange market for [currency]" | Price axis is **another currency per unit of the named currency**; quantity axis is the named currency |
| "What happens to net exports?" | Direction plus why: export and import prices after the currency change |

### Checklist before you move on

- Did you say **real** or **nominal** where the question requires it?
- Did you name the **curve** that shifts (demand or supply) and the **direction**?
- For monetary policy with ample reserves, did you name the **interest rate on reserve balances** as the tool?
- Did you answer about the **country** and **currency** the question names?
`
    },
    {
      id: 'macroope6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice Set 1: Deficit Spending in an Open Economy

Country Q has flexible exchange rates, open capital markets and a currency called the quill. Its economy is in a recession. The government increases spending and finances it by borrowing.

**(a)** Draw a correctly labeled AD-AS graph showing the short-run effect of the spending increase on real output and the price level.

**(b)** Draw a correctly labeled graph of the loanable funds market and show the effect of the government's borrowing on the real interest rate.

**(c)** What happens to private investment in Country Q? Explain.

**(d)** What happens to the international value of the quill? Explain.

**(e)** Given your answer to (d), what happens to Country Q's net exports?

**(f)** Given your answer to (c), what is the long-run effect on Country Q's capital stock?

### Model Answers

**(a)** AD shifts **right** (AD1 to AD2). Real output **rises** and the price level **rises**, shown as Y2 and PL2 above and to the right of Y1 and PL1.

**(b)** Axes: real interest rate (vertical) and quantity of loanable funds (horizontal). Demand for loanable funds shifts **right**; the real interest rate **rises** from r1 to r2. (A leftward shift of supply from lower public saving also earns the point.)

**(c)** Private investment **decreases**, because the higher real interest rate makes fewer investment projects profitable (crowding out).

**(d)** The quill **appreciates**. The higher real interest rate in Country Q, relative to other countries, attracts financial capital; foreign investors need quills to buy Country Q's assets, so the demand for quills increases.

**(e)** Net exports **decrease**: Country Q's goods cost more in foreign currency, and imports cost fewer quills.

**(f)** The capital stock **grows more slowly** (it is smaller than it would otherwise be), because crowding out reduced investment in physical capital.
`
    },
    {
      id: 'macroope6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In FRQ Set 1, a student draws a correct loanable funds graph but writes only "the quill appreciates" for part (d). Which missing link would earn the explanation point?',
            options: [
              'Country Q exports more during a recession',
              'Higher prices in Q raise demand for quills',
              'The government buys quills to finance spending',
              'Capital inflows raise demand for quills'
            ],
            correctAnswer: 3,
            explanation: 'The appreciation comes from foreigners buying Country Q\'s assets at the higher real interest rate, which raises demand for quills. A higher price level would make Q\'s goods less attractive, and government borrowing in its own currency is not a forex purchase.'
          },
          {
            question: 'Country Q\'s government borrows more while the rest of the world\'s real rates are unchanged. In the foreign exchange market for Country Q\'s trading partner\'s currency, what happens?',
            options: [
              'Its supply rises, so it depreciates',
              'Its demand rises, so it appreciates',
              'Its supply falls, so it appreciates',
              'Its supply stays put, so it holds value'
            ],
            correctAnswer: 0,
            explanation: 'Foreign investors sell their own currency to buy quills, so the supply of the partner\'s currency rises and it depreciates, the mirror of the quill\'s appreciation. Rising demand describes the market for quills, not the partner\'s currency.'
          },
          {
            question: 'Which statement correctly compares the open-economy effects of Country Q\'s fiscal expansion?',
            options: [
              'Crowding out offsets part of the rise in AD, but higher NX reinforces it',
              'Lower investment and lower net exports both offset part of the rise in AD',
              'Higher investment and higher net exports both add to the original rise in AD',
              'Net exports fall but investment rises, so the two effects cancel each other'
            ],
            correctAnswer: 1,
            explanation: 'The higher real rate crowds out investment, and the appreciation lowers net exports, so both pull AD back partway. Net exports rise only when the currency depreciates, as with expansionary monetary policy.'
          }
        ]
      }
    },
    {
      id: 'macroope6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice Set 2: Fighting Inflation with Monetary Policy

The United States has an inflationary gap. The Federal Reserve operates with ample reserves.

**(a)** Identify the action the Fed would take with its main tool to close the gap.

**(b)** What happens to the nominal interest rate? Explain.

**(c)** Draw a correctly labeled AD-AS graph showing the effect of the policy on real output and the price level.

**(d)** What happens to the real interest rate in the short run? Explain.

**(e)** Draw a correctly labeled graph of the foreign exchange market for U.S. dollars and show the effect of the change in (d) on the value of the dollar.

**(f)** What happens to U.S. net exports? Does this strengthen or weaken the effect of the policy on AD?

### Model Answers

**(a)** **Raise the interest rate on reserve balances.** ("Raise the federal funds rate" names the target, not the tool. In the limited-reserves model, the answer is "sell government bonds.")

**(b)** The nominal interest rate **rises**. Banks will not lend reserves for less than the higher IORB, so the federal funds rate rises within its higher target range, and other short-term rates follow.

**(c)** AD shifts **left** (AD1 to AD2); real output and the price level **fall**, moving output toward full employment.

**(d)** The real interest rate **rises**, because expected inflation does not change right away, so r = i − expected inflation rises with i.

**(e)** Axes: foreign currency per dollar (for example, yen per dollar) and quantity of dollars. **Demand for dollars shifts right** because the higher U.S. real rate attracts financial capital; the dollar **appreciates**.

**(f)** Net exports **decrease**, because U.S. goods cost more abroad and imports cost less at home. This **strengthens** the policy: AD shifts further left.
`
    },
    {
      id: 'macroope6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A question asks for "a correctly labeled graph of the foreign exchange market for euros." What belongs on the vertical axis?',
            options: [
              'Euros per U.S. dollar',
              'The euro-area real rate',
              'Dollars per euro',
              'The quantity of euros'
            ],
            correctAnswer: 2,
            explanation: 'In the market for euros, the price is the cost of one euro in another currency, such as dollars per euro. Euros per dollar is the price in the market for dollars, and the quantity of euros goes on the horizontal axis.'
          },
          {
            question: 'The Fed lowers the interest rate on reserve balances during a recession. What happens to the dollar and U.S. net exports in the short run?',
            options: [
              'The dollar appreciates, and net exports fall',
              'The dollar depreciates, and net exports fall',
              'The dollar appreciates, and net exports rise',
              'The dollar depreciates, and net exports rise'
            ],
            correctAnswer: 3,
            explanation: 'Lower U.S. rates send financial capital abroad, the supply of dollars rises and the dollar depreciates, which makes U.S. goods cheaper abroad and raises net exports. An appreciation would follow a rate increase instead.'
          }
        ]
      }
    },
    {
      id: 'macroope6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Country Q's loanable funds market (billions of quills):

| Real interest rate | Quantity supplied | Quantity demanded |
|---|---|---|
| 2% | 300 | 600 |
| 3% | 400 | 500 |
| 4% | 500 | 400 |
| 5% | 600 | 300 |

Both curves are straight lines, so values between rows change evenly.

**1)** What is the equilibrium real interest rate, in percent?

**2)** Government borrowing raises the quantity demanded by 200 at every rate. What is the new equilibrium real interest rate, in percent?

**3)** At the new equilibrium, how many billions of quills are lent?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.5', '4.5', '550'],
        hint1: 'At 3% there is a shortage of 100; at 4% a surplus of 100. Each 1-point step changes the gap by 200.',
        hint2: 'New demand: 800, 700, 600, 500. Find where the gap is zero, between two rows.',
        hint3: 'Supply rises by 100 per point, so halfway between 4% and 5% supply is halfway between 500 and 600.',
        explanation: '1) The shortage of 100 at 3% becomes a surplus of 100 at 4%, so equilibrium is at 3.5%. 2) New demand is 600 at 4% and 500 at 5%, against supply of 500 and 600, so the curves cross at 4.5%. 3) Supply at 4.5% is 550 billion quills, which equals the new demand.'
      }
    }
  ]
}
