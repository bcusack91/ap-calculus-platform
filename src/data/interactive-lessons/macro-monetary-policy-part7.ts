export const macroMonetaryPolicyPart7Data = {
  topicSlug: 'macro-monetary-policy',
  sections: [
    {
      id: 'macromon7-intro',
      type: 'text' as const,
      content: `
# 🏦 Monetary Policy

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture |
| Two Frameworks, One Chain |
| The Money Market at a Glance |
| Short Run vs. Long Run |
| Mixed Review |

> 🔑 **Key Concept:** Monetary policy is one chain told in two frameworks. The Fed changes an interest rate (with IORB under ample reserves, or by changing the money supply under limited reserves); the interest rate changes interest-sensitive spending; spending shifts AD. In the short run that moves real GDP and the price level; in the long run only the price level.
`
    },
    {
      id: 'macromon7-big',
      type: 'text' as const,
      content: `
## 📖 The Big Picture

| Part | Idea | One-line takeaway |
|---|---|---|
| 1 | The Fed and its tools | The FOMC sets a target range for the federal funds rate; tools move the rate toward it |
| 2 | Money market graph | Downward MD (opportunity cost), vertical MS, equilibrium nominal interest rate |
| 3 | Policy chains | Tool → interest rate → investment → AD → real GDP, price level, unemployment |
| 4 | Data and graphs | Read MD schedules; MD shifts change only the rate when MS is fixed |
| 5 | Long run | MV = PY; money is neutral in the long run; money growth drives inflation |
| 6 | Exam practice | Name every link with a direction; match the tool to the framework |
`
    },
    {
      id: 'macromon7-frameworks',
      type: 'text' as const,
      content: `
## Two Frameworks, One Chain

| | Ample reserves (how the Fed operates today) | Limited reserves (the model behind the money multiplier) |
|---|---|---|
| Reserves | Far more than banks need | Scarce |
| Main tool | Interest rate on reserve balances (IORB) | Open-market operations |
| Other tools | — | Discount rate; reserve requirement (0% since March 2020) |
| Expansionary action | Lower IORB | Buy bonds, lower the discount rate, lower the reserve requirement |
| Contractionary action | Raise IORB | Sell bonds, raise the discount rate, raise the reserve requirement |
| What moves first | The federal funds rate follows IORB | Reserves and the money supply change; MS shifts |
| Result for the economy | Interest rates fall or rise | Interest rates fall or rise |

Everything after the interest rate is the same in both frameworks.

### The expansionary chain

**Lower IORB or buy bonds → interest rates fall → investment and interest-sensitive consumption rise → AD shifts right → real GDP ↑, price level ↑, unemployment ↓ (short run).**

### The contractionary chain

**Raise IORB or sell bonds → interest rates rise → investment and interest-sensitive consumption fall → AD shifts left → real GDP ↓, price level ↓, unemployment ↑ (short run).**
`
    },
    {
      id: 'macromon7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which list contains only expansionary monetary policy actions?',
            options: [
              'Lower IORB; sell bonds; lower the discount rate',
              'Lower IORB; buy bonds; lower the discount rate',
              'Raise IORB; buy bonds; lower the reserve requirement',
              'Lower IORB; buy bonds; raise the reserve requirement'
            ],
            correctAnswer: 1,
            explanation: 'Lowering IORB, buying bonds and lowering the discount rate all push interest rates down and raise AD. Selling bonds, raising IORB and raising the reserve requirement are contractionary.'
          },
          {
            question: 'What is the key difference between the two frameworks?',
            options: [
              'Only the limited-reserves model lets the Fed affect interest rates',
              'Ample reserves let the Fed set a rate rather than change reserves',
              'The ample-reserves framework also gives the Fed fiscal powers',
              'Only the ample-reserves framework changes aggregate demand'
            ],
            correctAnswer: 1,
            explanation: 'With ample reserves, the Fed moves rates by setting the interest rate it pays on reserves; with limited reserves, it changes the quantity of reserves and money. Both frameworks change interest rates and AD, and neither gives the Fed control of fiscal policy.'
          }
        ]
      }
    },
    {
      id: 'macromon7-mm',
      type: 'text' as const,
      content: `
## The Money Market at a Glance

| Event | Curve that shifts | Nominal interest rate | Quantity of money |
|---|---|---|---|
| Fed buys bonds | MS right | ↓ | ↑ |
| Fed sells bonds | MS left | ↑ | ↓ |
| Price level or real GDP rises | MD right | ↑ | No change |
| Price level or real GDP falls | MD left | ↓ | No change |
| Better payment technology | MD left | ↓ | No change |

**Bond prices** always move opposite to the interest rate.
`
    },
    {
      id: 'macromon7-sr-lr',
      type: 'text' as const,
      content: `
## Short Run vs. Long Run

| | Short run | Long run |
|---|---|---|
| Expansionary policy from a recession | Real GDP rises toward Yf, price level rises | Economy at Yf, with a higher price level than without the policy |
| Expansionary policy from full employment | Real GDP above Yf, price level rises | Wages rise, SRAS shifts left, real GDP back at Yf, price level higher still |
| Sustained money growth | Possible output boost | Inflation ≈ money growth − real output growth (velocity constant) |
| Interest rate | Changed by the policy | Real rate set by saving and investment |

> 🔑 **AP Connection:** Read the time frame in every question. "Short run" → output and prices both move. "Long run" → output returns to full employment, and only the price level keeps the change.
`
    },
    {
      id: 'macromon7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Real GDP decreases and the Fed takes no action. In the money market, what happens?',
            options: [
              'MD shifts left, and the nominal interest rate falls',
              'MS shifts left, and the nominal interest rate rises',
              'MD shifts right, and the quantity of money rises',
              'MS shifts right, and the quantity of money rises'
            ],
            correctAnswer: 0,
            explanation: 'Lower real GDP means fewer transactions, so money demand shifts left and the nominal interest rate falls with the money supply unchanged. Without Fed action, MS does not shift.'
          },
          {
            question: 'Money grows 9% a year, real GDP grows 3% a year and velocity is constant. What is the approximate inflation rate?',
            options: [
              '3%',
              '12%',
              '9%',
              '6%'
            ],
            correctAnswer: 3,
            explanation: 'Using %ΔM + %ΔV ≈ %ΔP + %ΔY: 9% + 0% ≈ inflation + 3%, so inflation is about 6%. Adding the two growth rates or using money growth alone ignores the growth in real output.'
          },
          {
            question: 'An economy with a recessionary gap uses expansionary monetary policy. Compared with doing nothing, what happens to the price level in the long run?',
            options: [
              'It is lower, because output grows faster',
              'It is higher, because AD increased',
              'It is the same, because money is neutral',
              'It is lower, because rates are lower'
            ],
            correctAnswer: 1,
            explanation: 'Without policy, the gap closes as wages fall and SRAS shifts right, which lowers the price level; with policy, AD shifts right instead, so the price level ends higher. Long-run neutrality means real GDP is the same either way, not the price level.'
          }
        ]
      }
    },
    {
      id: 'macromon7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The opportunity cost of holding money is the ___ interest rate.',
            options: ['nominal', 'real', 'discount', 'federal funds']
          },
          {
            label: 'The money supply curve in the AP money market graph is ___.',
            options: ['vertical', 'horizontal', 'downward-sloping', 'upward-sloping']
          },
          {
            label: 'To lower interest rates under ample reserves, the Fed ___ IORB.',
            options: ['lowers', 'raises', 'freezes', 'doubles']
          },
          {
            label: 'In the long run, an increase in the money supply changes only the ___.',
            options: ['price level', 'real GDP', 'natural rate of unemployment', 'capital stock']
          }
        ],
        correctAnswers: ['nominal', 'vertical', 'lowers', 'price level'],
        hint1: 'Bonds pay a rate before any adjustment for inflation.',
        hint2: 'The Fed sets the quantity of money regardless of the rate.',
        hint3: 'Money is neutral in the long run.',
        explanation: 'Holding money means giving up the nominal interest rate on bonds, and the money supply is vertical because the Fed sets it. Under ample reserves the Fed lowers IORB to lower rates. In the long run, more money changes only the price level.'
      }
    },
    {
      id: 'macromon7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

**1)** The required reserve ratio is 25%. The Fed buys \\$8 million of bonds from banks in a limited-reserves system. What is the maximum change in the money supply, in millions of dollars?

**2)** Money supply = \\$5 trillion, velocity = 4. What is nominal GDP, in trillions of dollars?

**3)** Expected inflation is 3%. The Fed raises IORB, and the nominal federal funds rate rises from 4% to 5%. What is the new real federal funds rate, in percent?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['32', '20', '2'],
        hint1: 'Money multiplier = 1 ÷ 0.25.',
        hint2: 'Nominal GDP = M × V.',
        hint3: 'Real rate ≈ nominal rate − expected inflation.',
        explanation: '1) The multiplier is 4, so \\$8 million × 4 = \\$32 million. 2) \\$5 trillion × 4 = \\$20 trillion. 3) 5% − 3% = 2%.'
      }
    }
  ]
};
