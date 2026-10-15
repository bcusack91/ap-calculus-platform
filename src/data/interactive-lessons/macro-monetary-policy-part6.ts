export const macroMonetaryPolicyPart6Data = {
  topicSlug: 'macro-monetary-policy',
  sections: [
    {
      id: 'macromon6-intro',
      type: 'text' as const,
      content: `
# 🏦 Monetary Policy

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Monetary Policy Appears on the Exam |
| FRQ Practice Set 1: Recession, Limited Reserves |
| FRQ Practice Set 2: Inflation, Ample Reserves |
| Exam-Style Multiple Choice |

> 🔑 **Key Concept:** Monetary policy shows up in almost every AP Macroeconomics exam, often inside the long free-response question. You will be asked to **identify a tool**, **draw the money market**, and **trace the effect** on interest rates, investment, AD, real output and the price level, sometimes in both the short run and the long run.
`
    },
    {
      id: 'macromon6-format',
      type: 'text' as const,
      content: `
## 📖 How Monetary Policy Appears on the Exam

| The question says… | What a full answer contains |
|---|---|
| "Identify an open-market operation…" | **Buy** bonds (expansionary) or **sell** bonds (contractionary). Nothing else counts as an OMO. |
| "Assume the banking system has ample reserves. Identify the policy action…" | Lower or raise the **interest rate on reserve balances** (an administered rate). |
| "Draw a correctly labeled graph of the money market…" | Axes (nominal interest rate; quantity of money), downward MD, vertical MS, equilibrium i₁, then the shift and i₂. |
| "Explain how the policy affects real output." | The full chain: tool → interest rate → investment (or interest-sensitive spending) → AD → real output. |
| "What happens in the long run?" | Output returns to full employment; the price level changes in the direction of the AD shift. |
| "What happens to bond prices?" | Opposite to the interest rate. |

### Habits that protect points

- **Name the direction of every link.** "Investment increases" is a point; "investment is affected" is not.
- **Keep the frameworks straight.** IORB is the answer only when the question says reserves are ample or asks for an administered rate.
- **Never call the federal funds rate a tool.** It is the target.
- **Use the nominal rate in the money market.** Use the real rate only for loanable funds.
`
    },
    {
      id: 'macromon6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice Set 1: Recession, Limited Reserves

**Prompt.** The country of Lakeland is in a short-run equilibrium with real GDP below full-employment output. Its banking system has limited reserves, and the required reserve ratio is 10%.

(a) Identify an open-market operation the central bank could use to close the gap.
(b) Draw a correctly labeled graph of the money market and show the effect of your policy on the nominal interest rate.
(c) Explain how the policy affects aggregate demand.
(d) The central bank conducts the operation with \\$20 million of bonds and banks keep no excess reserves. What is the maximum change in the money supply?
(e) What happens to the price of existing bonds?

### Model answers

**(a)** Buy government bonds.

**(b)** Vertical axis: nominal interest rate. Horizontal axis: quantity of money. A downward-sloping MD and a vertical MS₁ crossing at i₁. The bond purchase shifts the money supply to MS₂, to the right, and the nominal interest rate falls to i₂, below i₁.

**(c)** The lower interest rate makes borrowing cheaper, so investment (and interest-sensitive consumption) increases. Aggregate demand increases (shifts right), so real output rises toward full employment.

**(d)** Money multiplier = 1 ÷ 0.10 = 10. A purchase from banks adds \\$20 million of excess reserves, so the maximum change in the money supply = \\$20 million × 10 = **\\$200 million**.

**(e)** Interest rates fall, so the prices of existing bonds **rise**.
`
    },
    {
      id: 'macromon6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Set 1, a student answers part (a) with "lower the federal funds rate." Why does this answer not earn the point?',
            options: [
              'The federal funds rate is a target, not an open-market operation',
              'The federal funds rate is set by Congress instead of the Fed',
              'Lowering the federal funds rate would be contractionary',
              'The federal funds rate applies only under ample reserves'
            ],
            correctAnswer: 0,
            explanation: 'Part (a) asks for an open-market operation, which must be buying or selling bonds, and the federal funds rate is the Fed\'s target rather than a tool. Congress does not set it, and lowering it would be expansionary.'
          },
          {
            question: 'In Set 1, which graph change correctly shows the policy in part (b)?',
            options: [
              'MD shifts right, and the nominal rate rises',
              'MS shifts right, and the nominal interest rate falls',
              'MS shifts left, and the nominal interest rate rises',
              'MD shifts left, and the nominal interest rate falls'
            ],
            correctAnswer: 1,
            explanation: 'A bond purchase increases reserves and the money supply, so MS shifts right and the equilibrium nominal interest rate falls. The Fed\'s bond purchase acts on supply, not on money demand.'
          }
        ]
      }
    },
    {
      id: 'macromon6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice Set 2: Inflation, Ample Reserves

**Prompt.** Hillvale's real GDP is above full-employment output, and inflation is 6%. The central bank operates with ample reserves.

(a) Identify the action the central bank should take with its administered interest rate.
(b) What happens to the federal funds rate?
(c) Explain how the action affects investment.
(d) Show the short-run effect on real GDP and the price level in the AD-AS model.
(e) Suppose instead the central bank does nothing. Explain how the economy adjusts in the long run, and what happens to the price level compared with the case in which the bank acts.

### Model answers

**(a)** Raise the interest rate on reserve balances (IORB).

**(b)** The federal funds rate rises, because banks will not lend reserves for less than they can earn at the central bank.

**(c)** Higher interest rates raise the cost of borrowing, so investment decreases.

**(d)** AD shifts left. Real GDP falls toward full employment, and the price level falls (relative to where it was).

**(e)** With unemployment below the natural rate, nominal wages rise over time, so SRAS shifts left until real GDP returns to full employment. The price level ends **higher** than if the bank had acted, because the economy closes the gap through rising costs instead of lower AD.

> 🔑 **AP Connection:** Part (e) mixes Monetary Policy with long-run self-adjustment from the AD-AS lesson. Whenever "does nothing" or "in the long run" appears, think about how nominal wages respond to the gap.
`
    },
    {
      id: 'macromon6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Set 2, why does a higher IORB raise the federal funds rate?',
            options: [
              'Banks must borrow from the Fed whenever IORB goes up',
              'Higher IORB lowers reserves until rates rise',
              'Banks will not lend reserves below what the Fed pays',
              'The Fed buys bonds, raising the rate banks charge'
            ],
            correctAnswer: 2,
            explanation: 'IORB is what a bank earns by keeping reserves at the Fed, so it will not lend them overnight to another bank for much less; the federal funds rate rises with IORB. The mechanism is the rate paid on reserves, not forced borrowing or a bond purchase.'
          },
          {
            question: 'The required reserve ratio is 20%, and the Fed sells \\$5 million of bonds to commercial banks in a limited-reserves system. What is the maximum change in the money supply?',
            options: [
              'A decrease of \\$25 million',
              'A decrease of \\$20 million',
              'An increase of \\$25 million',
              'A decrease of \\$5 million'
            ],
            correctAnswer: 0,
            explanation: 'The multiplier is 1 ÷ 0.20 = 5, and the sale removes \\$5 million of reserves, so the money supply can fall by up to \\$5 million × 5 = \\$25 million. A sale is contractionary, so the money supply decreases rather than increases.'
          },
          {
            question: 'An economy is in long-run equilibrium. The central bank lowers IORB. Which pair gives the long-run effects on real GDP and the price level?',
            options: [
              'Real GDP: higher; price level: higher',
              'Real GDP: higher; price level: unchanged',
              'Real GDP: unchanged; price level: unchanged',
              'Real GDP: unchanged; price level: higher'
            ],
            correctAnswer: 3,
            explanation: 'In the short run AD shifts right, but rising wages shift SRAS left until real GDP returns to full employment. Only the price level stays higher, which is long-run neutrality of money.'
          }
        ]
      }
    },
    {
      id: 'macromon6-mc',
      type: 'text' as const,
      content: `
## Exam-Style Multiple Choice: Patterns to Recognize

| Stem pattern | Answer pattern |
|---|---|
| "Which policy would increase AD?" with a money list | Buy bonds, lower the discount rate, lower the reserve requirement, or lower IORB |
| "Which would decrease the money supply?" | Sell bonds, raise the discount rate, or raise the reserve requirement |
| "An increase in money demand with no Fed action" | The nominal interest rate rises |
| "The Fed wants to keep the interest rate constant as money demand rises" | Increase the money supply (buy bonds) |
| "Long-run effect of an increase in the money supply" | Higher price level, no change in real output |
| "Quantity theory: V and Y constant, M doubles" | The price level doubles |
`
    },
    {
      id: 'macromon6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each step of a contractionary chain.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'With ample reserves, the central bank ___ the interest rate on reserve balances.',
            options: ['raises', 'lowers', 'freezes', 'eliminates']
          },
          {
            label: 'As a result, the federal funds rate and other interest rates ___.',
            options: ['rise', 'fall', 'stay the same', 'become negative']
          },
          {
            label: 'Higher borrowing costs cause ___ to fall.',
            options: ['investment', 'government purchases', 'tax revenue', 'money demand']
          },
          {
            label: 'In the short run, real GDP falls and the price level ___.',
            options: ['falls', 'rises', 'stays the same', 'doubles']
          }
        ],
        correctAnswers: ['raises', 'rise', 'investment', 'falls'],
        hint1: 'Contractionary policy pushes interest rates up.',
        hint2: 'Which part of AD is financed by borrowing?',
        hint3: 'AD shifts left along an upward-sloping SRAS.',
        explanation: 'Contractionary policy raises IORB, so the federal funds rate and other rates rise. Higher borrowing costs reduce investment, AD shifts left, and both real GDP and the price level fall in the short run.'
      }
    }
  ]
};
