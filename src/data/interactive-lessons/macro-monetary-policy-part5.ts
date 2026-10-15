export const macroMonetaryPolicyPart5Data = {
  topicSlug: 'macro-monetary-policy',
  sections: [
    {
      id: 'macromon5-intro',
      type: 'text' as const,
      content: `
# 🏦 Monetary Policy

**Part 5 of 7 — Money Growth, Inflation and the Long Run**

---

| Section |
|---------|
| 📖 The Quantity Theory of Money |
| The Growth-Rate Version |
| Monetary Policy in the Long Run |
| The Fed's Goals |
| Common Misconceptions |

> 🔑 **Key Concept:** In the short run, monetary policy changes real GDP and unemployment. In the **long run**, the economy returns to full-employment output, so a change in the money supply changes only **nominal** variables such as the price level. Sustained money growth faster than real output growth causes **inflation**.
`
    },
    {
      id: 'macromon5-qtm',
      type: 'text' as const,
      content: `
## 📖 The Quantity Theory of Money

The **equation of exchange** links money to nominal GDP:

$$M \\times V = P \\times Y$$

| Symbol | Meaning |
|---|---|
| **M** | Money supply |
| **V** | Velocity of money: how many times a dollar is spent on final goods and services in a year |
| **P** | Price level |
| **Y** | Real GDP (real output) |
| **P × Y** | Nominal GDP |

### Worked example

Westland's money supply is \\$2 trillion and nominal GDP is \\$20 trillion.

- Velocity: V = nominal GDP ÷ M = \\$20 trillion ÷ \\$2 trillion = **10**. Each dollar is spent on final output 10 times a year.

Now suppose M rises to \\$2.2 trillion, V stays at 10, and real GDP stays at its full-employment level.

- Nominal GDP = \\$2.2 trillion × 10 = **\\$22 trillion**, a 10% rise.
- With real output unchanged, all of that increase is in prices: **P rises 10%**.

### The quantity theory's two assumptions

1. **Velocity is stable**, because payment habits change slowly.
2. **Real GDP is set by real factors** (labor, capital, technology), not by the money supply, in the long run.

With both assumptions, the equation says a change in M causes a **proportional** change in P in the long run.
`
    },
    {
      id: 'macromon5-growth',
      type: 'text' as const,
      content: `
## The Growth-Rate Version

The equation of exchange also holds approximately in **growth rates**:

**%ΔM + %ΔV ≈ %ΔP + %ΔY**

where %ΔP is the inflation rate and %ΔY is real GDP growth.

### Worked example

Velocity is constant (%ΔV = 0), and real GDP grows 3% a year at full employment.

| Money growth | Inflation ≈ money growth − real growth |
|---|---|
| 3% | 0% |
| 5% | 2% |
| 10% | 7% |
| 25% | 22% |

The lesson: **inflation is high and persistent when the money supply grows much faster than real output.** That is why very high inflations have come with rapid money creation.

> 🔑 **AP Connection:** A typical question: "According to the quantity theory of money, if velocity and real output are constant, what happens to the price level when the money supply increases by 8%?" Answer: the price level increases by **8%**.
`
    },
    {
      id: 'macromon5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

**1)** The money supply is \\$4 trillion and nominal GDP is \\$24 trillion. What is the velocity of money?

**2)** In another economy, velocity is constant, real GDP grows 2% a year and the money supply grows 6% a year. What is the approximate inflation rate, in percent?

**3)** Velocity and real GDP are constant. The price level index is 120, and the money supply rises by 5%. What is the new price level index?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '4', '126'],
        hint1: 'V = nominal GDP ÷ M.',
        hint2: '%ΔM + %ΔV ≈ %ΔP + %ΔY, with %ΔV = 0.',
        hint3: 'With V and Y constant, P rises by the same percentage as M.',
        explanation: '1) \\$24 trillion ÷ \\$4 trillion = 6. 2) 6% + 0% ≈ inflation + 2%, so inflation ≈ 4%. 3) P rises 5%: 120 × 1.05 = 126.'
      }
    },
    {
      id: 'macromon5-longrun',
      type: 'text' as const,
      content: `
## Monetary Policy in the Long Run

The AD-AS model gives the same answer as the quantity theory.

### Worked example: expansionary policy when the economy is already at full employment

| Stage | What happens | Real GDP | Price level |
|---|---|---|---|
| Start | Long-run equilibrium at Yf | Yf | PL₁ |
| Short run | Lower interest rates raise investment; AD shifts right | Above Yf | Higher (PL₂) |
| Adjustment | Unemployment is below the natural rate; nominal wages and other input prices rise; SRAS shifts **left** | Falls back | Rises further |
| Long run | New equilibrium on LRAS | **Yf** | **PL₃, highest** |

The only lasting effect is a higher price level. This is **long-run neutrality of money**: in the long run, money affects nominal variables (prices, nominal wages, nominal GDP) but not real ones (real GDP, the natural rate of unemployment).

### What about interest rates in the long run?

The short-run fall in the interest rate does not last. As prices rise, money demand rises (MD shifts right), pushing the nominal rate back up. In the long run, the real interest rate is set by saving and investment in the loanable funds market, not by the money supply.

> 🔑 **AP Connection:** If an FRQ asks for the **long-run** effect of expansionary monetary policy, answer: real output returns to full employment and the price level is **higher** than before. Do not say real GDP stays higher.
`
    },
    {
      id: 'macromon5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to the quantity theory of money, if velocity and real output are constant and the money supply rises by 8%, what happens to the price level?',
            options: [
              'It rises by less than 8%, because velocity absorbs part of the change',
              'It does not change, because real output is fixed at full employment',
              'It rises by 8%, so nominal GDP rises by the same percentage',
              'It rises by more than 8%, because the multiplier magnifies it'
            ],
            correctAnswer: 2,
            explanation: 'With V and Y fixed, M × V = P × Y means P must rise by the same 8% as M, and nominal GDP rises 8% as well. Velocity is assumed constant here, and no spending multiplier appears in the equation of exchange.'
          },
          {
            question: 'Starting from full employment, the Fed lowers IORB. What is the long-run effect once wages and prices fully adjust?',
            options: [
              'Real GDP above full employment and a higher price level',
              'Real GDP at full employment and a higher price level',
              'Real GDP below full employment and a lower price level',
              'Real GDP at full employment and the same price level'
            ],
            correctAnswer: 1,
            explanation: 'The output gain is temporary: rising wages shift SRAS left until real GDP returns to full employment, leaving a higher price level. Real GDP cannot stay above full employment, and the price level does not return to its original value.'
          },
          {
            question: 'Which variable is NOT changed in the long run by a one-time increase in the money supply?',
            options: [
              'The price level',
              'Nominal wages',
              'Real GDP',
              'Nominal GDP'
            ],
            correctAnswer: 2,
            explanation: 'Money is neutral in the long run: real GDP returns to its full-employment level. The price level, nominal wages and nominal GDP all end up higher.'
          }
        ]
      }
    },
    {
      id: 'macromon5-goals',
      type: 'text' as const,
      content: `
## The Fed's Goals

Congress has given the Fed goals of **maximum employment** and **stable prices** (often called the **dual mandate**), along with moderate long-term interest rates.

- The Fed defines price stability as inflation of **2% over the longer run**, measured by the price index for personal consumption expenditures (PCE).
- When inflation is above 2% and unemployment is low, the Fed tends to raise rates; when unemployment is high and inflation is low, it tends to cut them.
- The hard case is a **negative supply shock** (Phillips Curve lesson): inflation and unemployment rise together, so fighting one makes the other worse.

### Why aim for 2%, not 0%?

| Reason | Explanation |
|---|---|
| Room to cut rates | With some inflation, nominal rates are usually above zero, so the Fed has room to cut in a recession |
| Avoiding deflation | Falling prices raise the real burden of debt and can lead people to delay spending |
| Measurement | Price indices tend to overstate inflation slightly (quality changes, substitution) |
`
    },
    {
      id: 'macromon5-misconceptions',
      type: 'text' as const,
      content: `
## Common Misconceptions

| Misconception | Correct idea |
|---|---|
| "The Fed sets mortgage and car-loan rates." | The Fed sets IORB and a target range for the federal funds rate; banks and markets set other rates, which tend to move with it. |
| "The federal funds rate is a Fed tool." | It is the **target**. IORB (ample reserves) or OMO, the discount rate and the reserve requirement (limited reserves) are the tools. |
| "When the Fed buys bonds, it is government spending." | Open-market purchases trade money for existing securities. They are monetary policy, not government purchases (G). |
| "More money makes a country richer." | In the long run, more money raises prices, not real output. Real growth comes from labor, capital and technology. |
| "Demand for money means wanting more income." | It means wanting to hold wealth as money instead of interest-earning assets. |
| "An increase in money demand raises the quantity of money." | With a vertical MS, only the interest rate rises; the quantity is set by the Fed. |
| "The money market uses the real interest rate." | The money market uses the **nominal** rate; the loanable funds market uses the real rate. |
`
    },
    {
      id: 'macromon5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student says, "When the Fed buys Treasury bonds, it is the same as the government spending more." What is the best correction?',
            options: [
              'The purchase counts as G only when the bonds are newly issued',
              'The purchase is fiscal policy because the bonds are Treasury debt',
              'The purchase is monetary policy that adds reserves, not a purchase of output',
              'The purchase counts as investment because the Fed holds a financial asset'
            ],
            correctAnswer: 2,
            explanation: 'An open-market purchase swaps money for existing bonds, adding bank reserves; nothing is produced, so it is not government spending or investment in GDP. Who issued the bonds does not make it fiscal policy.'
          },
          {
            question: 'Why does the Fed aim for inflation of about 2% rather than 0%?',
            options: [
              'Inflation of 2% keeps real interest rates fixed at zero',
              'Some inflation leaves room to cut nominal rates in a recession',
              'The PCE index is required by law to rise 2% each year',
              'Higher inflation raises real GDP permanently over time'
            ],
            correctAnswer: 1,
            explanation: 'With modest inflation, nominal interest rates usually sit above zero, so the Fed can cut them when the economy weakens. No law requires a 2% rise, and inflation does not raise real GDP in the long run.'
          }
        ]
      }
    }
  ]
};
